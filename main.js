// main.js — STEP 2: Rotasi
function main(){
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");
    if (!gl) {
        console.error("WebGL not supported");
        return;
    }

    // set viewport
    canvas.width  = canvas.clientWidth  || canvas.width;
    canvas.height = canvas.clientHeight || canvas.height;
    gl.viewport(0, 0, canvas.width, canvas.height);

    // vertex buffer
    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(lines), gl.STATIC_DRAW);

    // gradient colors
    var numVertices = lines.length / 3;
    var colorsArr = new Float32Array(numVertices * 3);
    var minY = -0.7, maxY = 0.7;
    var lowColor  = [0.15, 0.30, 0.90]; 
    var highColor = [1.00, 0.60, 0.20];
    for (var i = 0; i < numVertices; i++){
        var y = lines[i*3 + 1];
        var t = (y - minY) / (maxY - minY);
        t = Math.max(0, Math.min(1, t));
        colorsArr[i*3]     = lowColor[0]*(1-t) + highColor[0]*t;
        colorsArr[i*3 + 1] = lowColor[1]*(1-t) + highColor[1]*t;
        colorsArr[i*3 + 2] = lowColor[2]*(1-t) + highColor[2]*t;
    }
    var colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, colorsArr, gl.STATIC_DRAW);

    // index buffer
    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    // shader
    var vertexShaderCode = document.getElementById("vertexShaderCode").textContent;
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);

    var fragmentShaderCode = `
        precision mediump float;
        varying vec3 vColor;
        void main(){
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    // atribut posisi
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    var aPos = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 3, gl.FLOAT, false, 0, 0);

    // atribut warna
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    var aColor = gl.getAttribLocation(program, "aColor");
    gl.enableVertexAttribArray(aColor);
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 0, 0);

    // depth test
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);

    // ==== ROTASI ====
    var angle = 0;
    var axis = "Y"; // default rotasi sumbu Y

    // event listener keyboard
    window.addEventListener("keydown", function(e){
        if (e.key === "x" || e.key === "X") axis = "X";
        if (e.key === "y" || e.key === "Y") axis = "Y";
        if (e.key === "z" || e.key === "Z") axis = "Z";
    });

    function render(){
        if (!freeze){
            angle += 0.01;
        }

        // pilih rotasi berdasarkan axis
        if (axis === "X") {
            rotateX(angle, gl, program);
        } else if (axis === "Y") {
            rotateY(angle, gl, program);
        } else {
            rotateZ(angle, gl, program);
        }

        gl.clearColor(1.0, 1.0, 1.0, 1.0);
        gl.clearDepth(1.0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);

        window.requestAnimationFrame(render);
    }

    render();
}
