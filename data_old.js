// ----------------------
// Helper bikin balok
// ----------------------
function createBlock(x1, y1, x2, y2, depth) {
    const verts = [];

    // depan
    verts.push([x1,y1, depth],[x2,y1, depth],[x2,y2, depth]);
    verts.push([x1,y1, depth],[x2,y2, depth],[x1,y2, depth]);

    // belakang
    verts.push([x1,y1,-depth],[x2,y2,-depth],[x2,y1,-depth]);
    verts.push([x1,y1,-depth],[x1,y2,-depth],[x2,y2,-depth]);

    // kiri
    verts.push([x1,y1, depth],[x1,y2, depth],[x1,y2,-depth]);
    verts.push([x1,y1, depth],[x1,y2,-depth],[x1,y1,-depth]);

    // kanan
    verts.push([x2,y1, depth],[x2,y2,-depth],[x2,y2, depth]);
    verts.push([x2,y1, depth],[x2,y1,-depth],[x2,y2,-depth]);

    // atas
    verts.push([x1,y2, depth],[x2,y2, depth],[x2,y2,-depth]);
    verts.push([x1,y2, depth],[x2,y2,-depth],[x1,y2,-depth]);

    // bawah
    verts.push([x1,y1, depth],[x2,y1,-depth],[x2,y1, depth]);
    verts.push([x1,y1, depth],[x1,y1,-depth],[x2,y1,-depth]);

    return verts;
}

// ----------------------
// Helper bikin ring (untuk angka 0 berlubang)
// ----------------------
function createRing(cx, cy, rxOuter, ryOuter, rxInner, ryInner, n, depth) {
    let verts = [];

    // depan
    for (let i=0; i<n; i++) {
        let t1 = (i/n)*2*Math.PI;
        let t2 = ((i+1)/n)*2*Math.PI;
        let x1o = cx+rxOuter*Math.cos(t1), y1o = cy+ryOuter*Math.sin(t1);
        let x2o = cx+rxOuter*Math.cos(t2), y2o = cy+ryOuter*Math.sin(t2);
        let x1i = cx+rxInner*Math.cos(t1), y1i = cy+ryInner*Math.sin(t1);
        let x2i = cx+rxInner*Math.cos(t2), y2i = cy+ryInner*Math.sin(t2);
        verts.push([x1o,y1o, depth],[x2o,y2o, depth],[x2i,y2i, depth]);
        verts.push([x1o,y1o, depth],[x2i,y2i, depth],[x1i,y1i, depth]);
    }

    // belakang
    for (let i=0; i<n; i++) {
        let t1 = (i/n)*2*Math.PI;
        let t2 = ((i+1)/n)*2*Math.PI;
        let x1o = cx+rxOuter*Math.cos(t1), y1o = cy+ryOuter*Math.sin(t1);
        let x2o = cx+rxOuter*Math.cos(t2), y2o = cy+ryOuter*Math.sin(t2);
        let x1i = cx+rxInner*Math.cos(t1), y1i = cy+ryInner*Math.sin(t1);
        let x2i = cx+rxInner*Math.cos(t2), y2i = cy+ryInner*Math.sin(t2);
        verts.push([x1o,y1o,-depth],[x2i,y2i,-depth],[x2o,y2o,-depth]);
        verts.push([x1o,y1o,-depth],[x1i,y1i,-depth],[x2i,y2i,-depth]);
    }

    // sisi luar
    for (let i=0; i<n; i++) {
        let t1 = (i/n)*2*Math.PI;
        let t2 = ((i+1)/n)*2*Math.PI;
        let x1 = cx+rxOuter*Math.cos(t1), y1 = cy+ryOuter*Math.sin(t1);
        let x2 = cx+rxOuter*Math.cos(t2), y2 = cy+ryOuter*Math.sin(t2);
        verts.push([x1,y1, depth],[x2,y2, depth],[x2,y2,-depth]);
        verts.push([x1,y1, depth],[x2,y2,-depth],[x1,y1,-depth]);
    }

    // sisi dalam
    for (let i=0; i<n; i++) {
        let t1 = (i/n)*2*Math.PI;
        let t2 = ((i+1)/n)*2*Math.PI;
        let x1 = cx+rxInner*Math.cos(t1), y1 = cy+ryInner*Math.sin(t1);
        let x2 = cx+rxInner*Math.cos(t2), y2 = cy+ryInner*Math.sin(t2);
        verts.push([x1,y1, depth],[x2,y2,-depth],[x2,y2, depth]);
        verts.push([x1,y1, depth],[x1,y1,-depth],[x2,y2,-depth]);
    }

    return verts;
}

// ----------------------
// Bentuk huruf
// ----------------------
let positions = [];

// D
positions = positions.concat(createBlock(-0.9,-0.5,-0.8,0.5,0.1)); // batang kiri
positions = positions.concat(createBlock(-0.8,0.4,-0.6,0.5,0.1)); // atas
positions = positions.concat(createBlock(-0.8,-0.5,-0.6,-0.4,0.1)); // bawah
positions = positions.concat(createBlock(-0.6,-0.4,-0.55,0.4,0.1)); // sisi kanan tipis

// E
positions = positions.concat(createBlock(-0.45,-0.5,-0.35,0.5,0.1)); // batang kiri
positions = positions.concat(createBlock(-0.35,0.4,-0.15,0.5,0.1)); // atas
positions = positions.concat(createBlock(-0.35,-0.05,-0.2,0.05,0.1)); // tengah
positions = positions.concat(createBlock(-0.35,-0.5,-0.15,-0.4,0.1)); // bawah

// 0 (donut)
positions = positions.concat(createRing(0.1, 0.0, 0.25, 0.5, 0.1, 0.25, 60, 0.1));

// ----------------------
// Flatten array
// ----------------------
let flatPositions = [];
for (let v of positions) flatPositions.push(...v);

// ----------------------
// Warna
// ----------------------
let colors = [];
for (let i=0; i<flatPositions.length/3; i++) {
    let z = flatPositions[i*3+2];
    if (Math.abs(z-0.1)<1e-5 || Math.abs(z+0.1)<1e-5) {
        // depan / belakang
        colors.push(0.2+0.6*Math.random(), 0.2+0.6*Math.random(), 0.8);
    } else {
        // sisi samping lebih gelap
        colors.push(0.3, 0.3, 0.3);
    }
}

// ----------------------
// Normal sederhana (ke depan aja, biar lighting basic jalan)
// ----------------------
let normals = [];
for (let i=0; i<flatPositions.length/3; i++) {
    normals.push(0,0,1);
}

// ----------------------
// Indices
// ----------------------
let indices = [];
for (let i=0; i<flatPositions.length/3; i++) indices.push(i);

// ----------------------
// Export
// ----------------------
window.lines   = flatPositions;
window.colors  = colors;
window.normals = normals;
window.indices = indices;
