// OKLCH -> linear sRGB -> WCAG relative luminance -> contrast ratio
function oklchToLinearSrgb(L, C, hDeg) {
  const h = (hDeg * Math.PI) / 180;
  const a = C * Math.cos(h);
  const b = C * Math.sin(h);
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.291485548 * b;
  const l = l_ ** 3, m = m_ ** 3, s = s_ ** 3;
  return [
    +4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
}
function relLum(L, C, h) {
  const [r, g, b] = oklchToLinearSrgb(L, C, h).map((v) => Math.max(0, Math.min(1, v)));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function ratio(fg, bg) {
  const l1 = relLum(...fg), l2 = relLum(...bg);
  const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1];
  return (hi + 0.05) / (lo + 0.05);
}
const bg = [0.13, 0.012, 210];
const bg2 = [0.16, 0.012, 210];
const surface = [0.18, 0.014, 210];
console.log('--- against --bg (0.13) ---');
for (const L of [0.55, 0.60, 0.62, 0.64, 0.66, 0.68, 0.70, 0.72]) {
  console.log(`text L=${L}: ${ratio([L, 0.01, 210], bg).toFixed(2)}:1`);
}
console.log('--- L that passes 4.5 against each surface ---');
for (const [name, s] of [['bg', bg], ['bg-2', bg2], ['surface', surface]]) {
  for (const L of [0.62, 0.64, 0.66]) {
    console.log(`${name} vs L=${L}: ${ratio([L, 0.01, 210], s).toFixed(2)}:1`);
  }
}
