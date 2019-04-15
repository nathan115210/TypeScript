// @strict: true

// Repro from #29926

const foo = function (this: any) {
  var a, b, c, d, ab, bc, cd, da, blocks = this.blocks;

  if (this.first) {
    a = blocks[0] - 1;
    a = (a << 3) | (a >>> 29);
    d = ((a & 0xefcdab89) | (~a & 0x98badcfe)) + blocks[1] + 271733878;
    d = (d << 7) | (d >>> 25);
    c = ((d & a) | (~d & 0xefcdab89)) + blocks[2] - 1732584194;
    c = (c << 11) | (c >>> 21);
    b = ((c & d) | (~c & a)) + blocks[3] - 271733879;
    b = (b << 19) | (b >>> 13);
  } else {
    a = this.h0;
    b = this.h1;
    c = this.h2;
    d = this.h3;
    a += ((b & c) | (~b & d)) + blocks[0];
    a = (a << 3) | (a >>> 29);
    d += ((a & b) | (~a & c)) + blocks[1];
    d = (d << 7) | (d >>> 25);
    c += ((d & a) | (~d & b)) + blocks[2];
    c = (c << 11) | (c >>> 21);
    b += ((c & d) | (~c & a)) + blocks[3];
    b = (b << 19) | (b >>> 13);
  }
  
  a += ((b & c) | (~b & d)) + blocks[4];
  a = (a << 3) | (a >>> 29);
  d += ((a & b) | (~a & c)) + blocks[5];
  d = (d << 7) | (d >>> 25);
  c += ((d & a) | (~d & b)) + blocks[6];
  c = (c << 11) | (c >>> 21);
  b += ((c & d) | (~c & a)) + blocks[7];
  b = (b << 19) | (b >>> 13);
  a += ((b & c) | (~b & d)) + blocks[8];
  a = (a << 3) | (a >>> 29);
  d += ((a & b) | (~a & c)) + blocks[9];
  d = (d << 7) | (d >>> 25);
  c += ((d & a) | (~d & b)) + blocks[10];
  c = (c << 11) | (c >>> 21);
  b += ((c & d) | (~c & a)) + blocks[11];
  b = (b << 19) | (b >>> 13);
  a += ((b & c) | (~b & d)) + blocks[12];
  a = (a << 3) | (a >>> 29);
  d += ((a & b) | (~a & c)) + blocks[13];
  d = (d << 7) | (d >>> 25);
  c += ((d & a) | (~d & b)) + blocks[14];
  c = (c << 11) | (c >>> 21);
  b += ((c & d) | (~c & a)) + blocks[15];
  b = (b << 19) | (b >>> 13);

  bc = b & c;
  a += (bc | (b & d) | (c & d)) + blocks[0] + 1518500249;
  a = (a << 3) | (a >>> 29);
  ab = a & b;
  d += (ab | (a & c) | bc) + blocks[4] + 1518500249;
  d = (d << 5) | (d >>> 27);
  da = d & a;
  c += (da | (d & b) | ab) + blocks[8] + 1518500249;
  c = (c << 9) | (c >>> 23);
  cd = c & d;
  b += (cd | (c & a) | da) + blocks[12] + 1518500249;
  b = (b << 13) | (b >>> 19);
  bc = b & c;
  a += (bc | (b & d) | cd) + blocks[1] + 1518500249;
  a = (a << 3) | (a >>> 29);
  ab = a & b;
  d += (ab | (a & c) | bc) + blocks[5] + 1518500249;
  d = (d << 5) | (d >>> 27);
  da = d & a;
  c += (da | (d & b) | ab) + blocks[9] + 1518500249;
  c = (c << 9) | (c >>> 23);
  cd = c & d;
  b += (cd | (c & a) | da) + blocks[13] + 1518500249;
  b = (b << 13) | (b >>> 19);
  bc = b & c;
  a += (bc | (b & d) | cd) + blocks[2] + 1518500249;
  a = (a << 3) | (a >>> 29);
  ab = a & b;
  d += (ab | (a & c) | bc) + blocks[6] + 1518500249;
  d = (d << 5) | (d >>> 27);
  da = d & a;
  c += (da | (d & b) | ab) + blocks[10] + 1518500249;
  c = (c << 9) | (c >>> 23);
  cd = c & d;
  b += (cd | (c & a) | da) + blocks[14] + 1518500249;
  b = (b << 13) | (b >>> 19);
  bc = b & c;
  a += (bc | (b & d) | cd) + blocks[3] + 1518500249;
  a = (a << 3) | (a >>> 29);
  ab = a & b;
  d += (ab | (a & c) | bc) + blocks[7] + 1518500249;
  d = (d << 5) | (d >>> 27);
  da = d & a;
  c += (da | (d & b) | ab) + blocks[11] + 1518500249;
  c = (c << 9) | (c >>> 23);
  b += ((c & d) | (c & a) | da) + blocks[15] + 1518500249;
  b = (b << 13) | (b >>> 19);

  bc = b ^ c;
  a += (bc ^ d) + blocks[0] + 1859775393;
  a = (a << 3) | (a >>> 29);
  d += (bc ^ a) + blocks[8] + 1859775393;
  d = (d << 9) | (d >>> 23);
  da = d ^ a;
  c += (da ^ b) + blocks[4] + 1859775393;
  c = (c << 11) | (c >>> 21);
  b += (da ^ c) + blocks[12] + 1859775393;
  b = (b << 15) | (b >>> 17);
  bc = b ^ c;
  a += (bc ^ d) + blocks[2] + 1859775393;
  a = (a << 3) | (a >>> 29);
  d += (bc ^ a) + blocks[10] + 1859775393;
  d = (d << 9) | (d >>> 23);
  da = d ^ a;
  c += (da ^ b) + blocks[6] + 1859775393;
  c = (c << 11) | (c >>> 21);
  b += (da ^ c) + blocks[14] + 1859775393;
  b = (b << 15) | (b >>> 17);
  bc = b ^ c;
  a += (bc ^ d) + blocks[1] + 1859775393;
  a = (a << 3) | (a >>> 29);
  d += (bc ^ a) + blocks[9] + 1859775393;
  d = (d << 9) | (d >>> 23);
  da = d ^ a;
  c += (da ^ b) + blocks[5] + 1859775393;
  c = (c << 11) | (c >>> 21);
  b += (da ^ c) + blocks[13] + 1859775393;
  b = (b << 15) | (b >>> 17);
  bc = b ^ c;
  a += (bc ^ d) + blocks[3] + 1859775393;
  a = (a << 3) | (a >>> 29);
  d += (bc ^ a) + blocks[11] + 1859775393;
  d = (d << 9) | (d >>> 23);
  da = d ^ a;
  c += (da ^ b) + blocks[7] + 1859775393;
  c = (c << 11) | (c >>> 21);
  b += (da ^ c) + blocks[15] + 1859775393;
  b = (b << 15) | (b >>> 17);

  if (this.first) {
    this.h0 = a + 1732584193 << 0;
    this.h1 = b - 271733879 << 0;
    this.h2 = c - 1732584194 << 0;
    this.h3 = d + 271733878 << 0;
    this.first = false;
  } else {
    this.h0 = this.h0 + a << 0;
    this.h1 = this.h1 + b << 0;
    this.h2 = this.h2 + c << 0;
    this.h3 = this.h3 + d << 0;
  }
};
