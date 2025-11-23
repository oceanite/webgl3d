
const vertices = [
    // Huruf D

    // Garis vertikal kiri D (1)

    // DEPAN (Normal: 0, 0, 1)
    -0.9, -0.5, 0.1,  -0.8, -0.5, 0.1,  -0.8,  0.5, 0.1,
    -0.9, -0.5, 0.1,  -0.8,  0.5, 0.1,  -0.9,  0.5, 0.1,

    // BELAKANG (Normal: 0, 0, -1)
    -0.9, -0.5, -0.1,  -0.8, -0.5, -0.1,  -0.8,  0.5, -0.1,
    -0.9, -0.5, -0.1,  -0.8,  0.5, -0.1,  -0.9,  0.5, -0.1,

    // SISI KIRI (Normal: -1, 0, 0)
    -0.9, -0.5, 0.1,  -0.9, -0.5, -0.1,  -0.9,  0.5, -0.1,
    -0.9, -0.5, 0.1,  -0.9,  0.5, -0.1,  -0.9,  0.5, 0.1,
    
    // SISI KANAN (Normal: 1, 0, 0)
    -0.8, -0.5, 0.1,  -0.8, -0.5, -0.1,  -0.8,  0.5, -0.1,
    -0.8, -0.5, 0.1,  -0.8,  0.5, -0.1,  -0.8,  0.5, 0.1,

    // SISI ATAS (Normal: 0, 1, 0)
    -0.9, 0.5, 0.1,  -0.9, 0.5, -0.1,  -0.8, 0.5, -0.1,
    -0.9, 0.5, 0.1,  -0.8, 0.5, -0.1,  -0.8, 0.5, 0.1,

    // SISI BAWAH (Normal: 0, -1, 0)
    -0.9, -0.5, 0.1,  -0.9, -0.5, -0.1,  -0.8, -0.5, -0.1,
    -0.9, -0.5, 0.1,  -0.8, -0.5, -0.1,  -0.8, -0.5, 0.1,

    // Lengkungan atas D (2)
    // DEPAN (Normal: 0, 0, 1)
    -0.8,  0.5, 0.1,  -0.6,  0.4, 0.1,  -0.6,  0.5, 0.1,
    -0.8,  0.5, 0.1,  -0.6,  0.4, 0.1,  -0.8,  0.4, 0.1,

    // BELAKANG (Normal: 0, 0, -1)
    -0.8,  0.5, -0.1,  -0.6,  0.4, -0.1,  -0.6,  0.5, -0.1,
    -0.8,  0.5, -0.1,  -0.6,  0.4, -0.1,  -0.8,  0.4, -0.1,

    // SISI ATAS (Normal: 0, 1, 0)
    -0.8, 0.5, 0.1,  -0.6, 0.5, 0.1,  -0.6, 0.5, -0.1,
    -0.8, 0.5, 0.1,  -0.6, 0.5, -0.1,  -0.8, 0.5, -0.1,

    // SISI BAWAH/KANAN (Normal: Diperlukan perhitungan cross-product, tapi untuk kasus ini kita pakai aproksimasi)
    // Sisi yang menghubungkan (-0.8, 0.4) dan (-0.6, 0.4)
    -0.8, 0.4, 0.1,  -0.6, 0.4, 0.1,  -0.6, 0.4, -0.1,
    -0.8, 0.4, 0.1,  -0.6, 0.4, -0.1,  -0.8, 0.4, -0.1,

    // SISI LURUS (-0.8, 0.4) ke (-0.8, 0.5)
    -0.8, 0.4, 0.1,  -0.8, 0.5, 0.1,  -0.8, 0.5, -0.1,
    -0.8, 0.4, 0.1,  -0.8, 0.5, -0.1,  -0.8, 0.4, -0.1,


    // Lengkungan bawah D (3)
    // DEPAN (Normal: 0, 0, 1)
    -0.8, -0.5, 0.1,  -0.6, -0.4, 0.1,  -0.6, -0.5, 0.1,
    -0.8, -0.5, 0.1,  -0.6, -0.4, 0.1,  -0.8, -0.4, 0.1,

    // BELAKANG (Normal: 0, 0, -1)
    -0.8, -0.5, -0.1,  -0.6, -0.4, -0.1,  -0.6, -0.5, -0.1,
    -0.8, -0.5, -0.1,  -0.6, -0.4, -0.1,  -0.8, -0.4, -0.1,

    // SISI BAWAH (Normal: 0, -1, 0)
    -0.8, -0.5, 0.1,  -0.6, -0.5, 0.1,  -0.6, -0.5, -0.1,
    -0.8, -0.5, 0.1,  -0.6, -0.5, -0.1,  -0.8, -0.5, -0.1,

    // SISI ATAS/KANAN
    // Sisi yang menghubungkan (-0.8, -0.4) dan (-0.6, -0.4)
    -0.8, -0.4, 0.1,  -0.6, -0.4, 0.1,  -0.6, -0.4, -0.1,
    -0.8, -0.4, 0.1,  -0.6, -0.4, -0.1,  -0.8, -0.4, -0.1,

    // SISI LURUS (-0.8, -0.5) ke (-0.8, -0.4)
    -0.8, -0.5, 0.1,  -0.8, -0.4, 0.1,  -0.8, -0.4, -0.1,
    -0.8, -0.5, 0.1,  -0.8, -0.4, -0.1,  -0.8, -0.5, -0.1,


    // Bagian vertikal kanan D (4)
    // DEPAN (Normal: 0, 0, 1)
    -0.6, -0.4, 0.1,  -0.55, -0.4, 0.1,  -0.55,  0.4, 0.1,
    -0.6, -0.4, 0.1,  -0.55,  0.4, 0.1,  -0.6,  0.4, 0.1,

    // BELAKANG (Normal: 0, 0, -1)
    -0.6, -0.4, -0.1,  -0.55, -0.4, -0.1,  -0.55,  0.4, -0.1,
    -0.6, -0.4, -0.1,  -0.55,  0.4, -0.1,  -0.6,  0.4, -0.1,

    // SISI KIRI (Normal: -1, 0, 0)
    -0.6, -0.4, 0.1,  -0.6, -0.4, -0.1,  -0.6,  0.4, -0.1,
    -0.6, -0.4, 0.1,  -0.6,  0.4, -0.1,  -0.6,  0.4, 0.1,

    // SISI KANAN (Normal: 1, 0, 0)
    -0.55, -0.4, 0.1,  -0.55, -0.4, -0.1,  -0.55,  0.4, -0.1,
    -0.55, -0.4, 0.1,  -0.55,  0.4, -0.1,  -0.55,  0.4, 0.1,

    // SISI ATAS (Normal: 0, 1, 0)
    -0.6, 0.4, 0.1,  -0.6, 0.4, -0.1,  -0.55, 0.4, -0.1,
    -0.6, 0.4, 0.1,  -0.55, 0.4, -0.1,  -0.55, 0.4, 0.1,

    // SISI BAWAH (Normal: 0, -1, 0)
    -0.6, -0.4, 0.1,  -0.6, -0.4, -0.1,  -0.55, -0.4, -0.1,
    -0.6, -0.4, 0.1,  -0.55, -0.4, -0.1,  -0.55, -0.4, 0.1,


    // =====================
    // Huruf E
    // =====================

    // Batang vertikal utama E (1)
    // DEPAN (Normal: 0, 0, 1)
    -0.45, -0.5, 0.1,  -0.35, -0.5, 0.1,  -0.35,  0.5, 0.1,
    -0.45, -0.5, 0.1,  -0.35,  0.5, 0.1,  -0.45,  0.5, 0.1,

    // BELAKANG (Normal: 0, 0, -1)
    -0.45, -0.5, -0.1,  -0.35, -0.5, -0.1,  -0.35,  0.5, -0.1,
    -0.45, -0.5, -0.1,  -0.35,  0.5, -0.1,  -0.45,  0.5, -0.1,

    // SISI KIRI (Normal: -1, 0, 0)
    -0.45, -0.5, 0.1,  -0.45, -0.5, -0.1,  -0.45,  0.5, -0.1,
    -0.45, -0.5, 0.1,  -0.45,  0.5, -0.1,  -0.45,  0.5, 0.1,

    // SISI KANAN (Normal: 1, 0, 0)
    -0.35, -0.5, 0.1,  -0.35, -0.5, -0.1,  -0.35,  0.5, -0.1,
    -0.35, -0.5, 0.1,  -0.35,  0.5, -0.1,  -0.35,  0.5, 0.1,


    
    // Garis horizontal atas E (2)
    // DEPAN (Normal: 0, 0, 1)
    -0.35,  0.4, 0.1,  -0.15,  0.4, 0.1,  -0.15,  0.5, 0.1,
    -0.35,  0.4, 0.1,  -0.15,  0.5, 0.1,  -0.35,  0.5, 0.1,

    // BELAKANG (Normal: 0, 0, -1)
    -0.35,  0.4, -0.1,  -0.15,  0.4, -0.1,  -0.15,  0.5, -0.1,
    -0.35,  0.4, -0.1,  -0.15,  0.5, -0.1,  -0.35,  0.5, -0.1,

    // SISI ATAS (Normal: 0, 1, 0)
    -0.35, 0.5, 0.1,  -0.15, 0.5, 0.1,  -0.15, 0.5, -0.1,
    -0.35, 0.5, 0.1,  -0.15, 0.5, -0.1,  -0.35, 0.5, -0.1,

    // SISI BAWAH (Normal: 0, -1, 0)
    -0.35, 0.4, 0.1,  -0.15, 0.4, 0.1,  -0.15, 0.4, -0.1,
    -0.35, 0.4, 0.1,  -0.15, 0.4, -0.1,  -0.35, 0.4, -0.1,

    // SISI KANAN (Normal: 1, 0, 0)
    -0.15, 0.4, 0.1,  -0.15, 0.5, 0.1,  -0.15, 0.5, -0.1,
    -0.15, 0.4, 0.1,  -0.15, 0.5, -0.1,  -0.15, 0.4, -0.1,


    // Garis tengah E (3)
    // DEPAN (Normal: 0, 0, 1)
    -0.35, -0.05, 0.1,  -0.2, -0.05, 0.1,  -0.2,  0.05, 0.1,
    -0.35, -0.05, 0.1,  -0.2,  0.05, 0.1,  -0.35,  0.05, 0.1,

    // BELAKANG (Normal: 0, 0, -1)
    -0.35, -0.05, -0.1,  -0.2, -0.05, -0.1,  -0.2,  0.05, -0.1,
    -0.35, -0.05, -0.1,  -0.2,  0.05, -0.1,  -0.35,  0.05, -0.1,

    // SISI ATAS (Normal: 0, 1, 0)
    -0.35, 0.05, 0.1,  -0.2, 0.05, 0.1,  -0.2, 0.05, -0.1,
    -0.35, 0.05, 0.1,  -0.2, 0.05, -0.1,  -0.35, 0.05, -0.1,

    // SISI BAWAH (Normal: 0, -1, 0)
    -0.35, -0.05, 0.1,  -0.2, -0.05, 0.1,  -0.2, -0.05, -0.1,
    -0.35, -0.05, 0.1,  -0.2, -0.05, -0.1,  -0.35, -0.05, -0.1,

    // SISI KANAN (Normal: 1, 0, 0)
    -0.2, -0.05, 0.1,  -0.2, 0.05, 0.1,  -0.2, 0.05, -0.1,
    -0.2, -0.05, 0.1,  -0.2, 0.05, -0.1,  -0.2, -0.05, -0.1,


    // Garis bawah E (4)
    // DEPAN (Normal: 0, 0, 1)
    -0.35, -0.5, 0.1,  -0.15, -0.5, 0.1,  -0.15, -0.4, 0.1,
    -0.35, -0.5, 0.1,  -0.15, -0.4, 0.1,  -0.35, -0.4, 0.1,

    // BELAKANG (Normal: 0, 0, -1)
    -0.35, -0.5, -0.1,  -0.15, -0.5, -0.1,  -0.15, -0.4, -0.1,
    -0.35, -0.5, -0.1,  -0.15, -0.4, -0.1,  -0.35, -0.4, -0.1,

    // SISI ATAS (Normal: 0, 1, 0)
    -0.35, -0.4, 0.1,  -0.15, -0.4, 0.1,  -0.15, -0.4, -0.1,
    -0.35, -0.4, 0.1,  -0.15, -0.4, -0.1,  -0.35, -0.4, -0.1,

    // SISI BAWAH (Normal: 0, -1, 0)
    -0.35, -0.5, 0.1,  -0.15, -0.5, 0.1,  -0.15, -0.5, -0.1,
    -0.35, -0.5, 0.1,  -0.15, -0.5, -0.1,  -0.35, -0.5, -0.1,

    // SISI KANAN (Normal: 1, 0, 0)
    -0.15, -0.5, 0.1,  -0.15, -0.4, 0.1,  -0.15, -0.4, -0.1,
    -0.15, -0.5, 0.1,  -0.15, -0.4, -0.1,  -0.15, -0.5, -0.1
];


// =====================
// ANGKA 0 (dengan sisi tebal)
// =====================
const segmen = 24;
const xCenter = 0.1;
const yCenter = 0.0;
const outerRadiusX = 0.25;
const outerRadiusY = 0.5;
const innerRadiusX = 0.1;
const innerRadiusY = 0.25;

// Deklarasi array normal di sini, sebelum loop
const normals = [];

for (let i = 0; i < segmen; i++) {
    const t1 = (i / segmen) * 2 * Math.PI;
    const t2 = ((i + 1) / segmen) * 2 * Math.PI;

    const x1o = xCenter + outerRadiusX * Math.cos(t1);
    const y1o = yCenter + outerRadiusY * Math.sin(t1);
    const x2o = xCenter + outerRadiusX * Math.cos(t2);
    const y2o = yCenter + outerRadiusY * Math.sin(t2);

    const x1i = xCenter + innerRadiusX * Math.cos(t1);
    const y1i = yCenter + innerRadiusY * Math.sin(t1);
    const x2i = xCenter + innerRadiusX * Math.cos(t2);
    const y2i = yCenter + innerRadiusY * Math.sin(t2);

    // =====================
    // Permukaan depan dan belakang
    // =====================
    vertices.push(
        // depan (6 vertices)
        x1o, y1o, 0.1,  x2o, y2o, 0.1,  x2i, y2i, 0.1,
        x1o, y1o, 0.1,  x2i, y2i, 0.1,  x1i, y1i, 0.1
    );
    // NORMAL DEPAN (6 vertices, Normal: 0, 0, 1)
    for (let j = 0; j < 6; j++) {
        normals.push(0, 0, 1);
    }

    vertices.push(
        // belakang (6 vertices)
        x1o, y1o, -0.1,  x2o, y2o, -0.1,  x2i, y2i, -0.1,
        x1o, y1o, -0.1,  x2i, y2i, -0.1,  x1i, y1i, -0.1
    );
    // NORMAL BELAKANG (6 vertices, Normal: 0, 0, -1)
    for (let j = 0; j < 6; j++) {
        normals.push(0, 0, -1);
    }

    // =====================
    // SISI TEBAL (SAMPING)
    // =====================

    // Sisi luar (6 vertices)
    vertices.push(
        x1o, y1o, 0.1,  x2o, y2o, 0.1,  x2o, y2o, -0.1,
        x1o, y1o, 0.1,  x2o, y2o, -0.1,  x1o, y1o, -0.1
    );
    // sisi luar normal (menunjuk ke luar, 6 vertices)
    const nOuterX = (x1o + x2o) / 2 - xCenter;
    const nOuterY = (y1o + y2o) / 2 - yCenter;
    const nOuterLen = Math.sqrt(nOuterX * nOuterX + nOuterY * nOuterY);
    const nOuterNormX = nOuterX / nOuterLen;
    const nOuterNormY = nOuterY / nOuterLen;
    for (let j = 0; j < 6; j++) {
        normals.push(nOuterNormX, nOuterNormY, 0);
    }

    // Sisi dalam (6 vertices)
    vertices.push(
        x1i, y1i, 0.1,  x2i, y2i, 0.1,  x2i, y2i, -0.1,
        x1i, y1i, 0.1,  x2i, y2i, -0.1,  x1i, y1i, -0.1
    );
    // NORMAL SISI DALAM (Menunjuk ke dalam, 6 vertices)
    const nInnerX = (x1i + x2i) / 2 - xCenter;
    const nInnerY = (y1i + y2i) / 2 - yCenter;
    const nInnerLen = Math.sqrt(nInnerX * nInnerX + nInnerY * nInnerY);
    // Normal sisi dalam adalah kebalikan dari arah radialnya
    const nInnerNormX = -nInnerX / nInnerLen; 
    const nInnerNormY = -nInnerY / nInnerLen;
    for (let j = 0; j < 6; j++) {
        normals.push(nInnerNormX, nInnerNormY, 0);
    }
}


//warna
const colors = [];
for (let i = 0; i < vertices.length / 3; i++) {
    colors.push(
        0.2 + 0.6 * Math.random(),
        0.2 + 0.6 * Math.random(),
        0.8
    );
}

//indeks
const indices = Array.from({ length: vertices.length / 3 }, (_, i) => i);

window.vertices = vertices;
window.colors = colors;
window.normals = normals; 
window.indices = indices;