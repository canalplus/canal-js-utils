var assert = require("./assert");

function totalBytes(arr) {
  var tot = 0;
  for (var i = 0; i < arr.length; i++) {
    tot += arr[i].byteLength;
  }
  return tot;
}

function strToBytes(str) {
  var len = str.length;
  var arr = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
    arr[i] = str.charCodeAt(i) & 0xFF;
  }
  return arr;
}

function bytesToStr(bytes) {
  return String.fromCharCode.apply(null, bytes);
}

function bytesToUTF16Str(bytes) {
  var str = "";
  var len = bytes.length;
  for (var i = 0; i < len; i += 2)
    str += String.fromCharCode(bytes[i]);
  return str;
}

function hexToBytes(str) {
  var len = str.length;
  var arr = new Uint8Array(len/2);
  for (var i = 0, j = 0; i < len; i += 2, j++) {
    arr[j] = parseInt(str.substr(i, 2), 16) & 0xFF;
  }
  return arr;
}

function bytesToHex(bytes, sep) {
  if (!sep) sep = "";
  var hex = "";
  for (var i = 0; i < bytes.byteLength; i++) {
    hex += (bytes[i] >>> 4).toString(16);
    hex += (bytes[i] & 0xF).toString(16);
    if (sep.length) hex += sep;
  }
  return hex;
}

function concat() {
  var l = arguments.length, i = -1;
  var len = 0, arg;
  while (++i < l) {
    arg = arguments[i];
    len += (typeof arg === "number") ? arg : arg.length;
  }
  var arr = new Uint8Array(len);
  var off = 0;
  i = -1;
  while (++i < l) {
    arg = arguments[i];
    if (typeof arg === "number") {
      off += arg;
    }
    else if (arg.length > 0) {
      arr.set(arg, off);
      off += arg.length;
    }
  }
  return arr;
}

function be2toi(bytes, off) {
  return (
    (bytes[0+off] << 8) +
    (bytes[1+off] << 0));
}

function be4toi(bytes, off) {
  return (
    (bytes[0+off] * 0x1000000) +
    (bytes[1+off] * 0x0010000) +
    (bytes[2+off] * 0x0000100) +
    (bytes[3+off]));
}

function be8toi(bytes, off) {
  return (
   ((bytes[0+off] * 0x1000000) +
    (bytes[1+off] * 0x0010000) +
    (bytes[2+off] * 0x0000100) +
    (bytes[3+off])) * 0x100000000 +
    (bytes[4+off] * 0x1000000) +
    (bytes[5+off] * 0x0010000) +
    (bytes[6+off] * 0x0000100) +
    (bytes[7+off]));
}

function itobe2(num) {
  return new Uint8Array([
    (num >>> 8) & 0xFF,
    (num)       & 0xFF
  ]);
}

function itobe4(num) {
  return new Uint8Array([
    (num >>> 24) & 0xFF,
    (num >>> 16) & 0xFF,
    (num >>>  8) & 0xFF,
    (num)        & 0xFF,
  ]);
}

function itobe8(num) {
  var l = (num % 0x100000000);
  var h = (num - l) / 0x100000000;
  return new Uint8Array([
    (h >>> 24) & 0xFF,
    (h >>> 16) & 0xFF,
    (h >>>  8) & 0xFF,
    (h)        & 0xFF,
    (l >>> 24) & 0xFF,
    (l >>> 16) & 0xFF,
    (l >>>  8) & 0xFF,
    (l)        & 0xFF,
  ]);
}

function le2toi(bytes, off) {
  return (
    (bytes[0+off] << 0) +
    (bytes[1+off] << 8));
}

function le4toi(bytes, off) {
  return (
    (bytes[0+off]) +
    (bytes[1+off] * 0x0000100) +
    (bytes[2+off] * 0x0010000) +
    (bytes[3+off] * 0x1000000));
}

function le8toi(bytes, off) {
  return (
    (bytes[0+off]) +
    (bytes[1+off] * 0x0000100) +
    (bytes[2+off] * 0x0010000) +
    (bytes[3+off] * 0x1000000) +
   ((bytes[4+off]) +
    (bytes[5+off] * 0x0000100) +
    (bytes[6+off] * 0x0010000) +
    (bytes[7+off] * 0x1000000) * 0x100000000));
}

function itole2(num) {
  return new Uint8Array([
    (num)       & 0xFF,
    (num >>> 8) & 0xFF
  ]);
}

function itole4(num) {
  return new Uint8Array([
    (num)        & 0xFF,
    (num >>>  8) & 0xFF,
    (num >>> 16) & 0xFF,
    (num >>> 24) & 0xFF,
  ]);
}

function itole8(num) {
  var l = (num % 0x100000000);
  var h = (num - l) / 0x100000000;
  return new Uint8Array([
    (h)        & 0xFF,
    (h >>>  8) & 0xFF,
    (h >>> 16) & 0xFF,
    (h >>> 24) & 0xFF,
    (l)        & 0xFF,
    (l >>>  8) & 0xFF,
    (l >>> 16) & 0xFF,
    (l >>> 24) & 0xFF,
  ]);
}

function guidToUuid(uuid) {
  assert.equal(uuid.length, 16, "UUID length should be 16");
  var buf = strToBytes(uuid);

  var p1A = buf[0];
  var p1B = buf[1];
  var p1C = buf[2];
  var p1D = buf[3];
  var p2A = buf[4];
  var p2B = buf[5];
  var p3A = buf[6];
  var p3B = buf[7];
  var p4 = buf.subarray( 8, 10);
  var p5 = buf.subarray(10, 16);

  var ord = new Uint8Array(16);
  ord[0] = p1D; ord[1] = p1C; ord[2] = p1B; ord[3] = p1A; // swap32 BE -> LE
  ord[4] = p2B; ord[5] = p2A;                             // swap16 BE -> LE
  ord[6] = p3B; ord[7] = p3A;                             // swap16 BE -> LE
  ord.set(p4,  8);
  ord.set(p5, 10);

  return bytesToHex(ord);
}

function toBase64URL(str) {
  return btoa(str).replace(/\=+$/, "");
}

module.exports = {
  totalBytes,
  strToBytes,
  bytesToStr, bytesToUTF16Str,
  hexToBytes,
  bytesToHex,
  concat,
  be2toi, be4toi, be8toi,
  le2toi, le4toi, le8toi,
  itobe2, itobe4, itobe8,
  itole2, itole4, itole8,
  guidToUuid,
  toBase64URL,
};
