// Original synthesized effects; no downloaded samples, no runtime randomness.
import {mkdirSync, writeFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const folder = fileURLToPath(new URL('../public/sfx/', import.meta.url));
mkdirSync(folder, {recursive: true});
const rate = 48000;
function wav(name, seconds, synth) {
  const count = Math.round(rate * seconds), b = Buffer.alloc(44 + count * 2);
  b.write('RIFF'); b.writeUInt32LE(b.length - 8, 4); b.write('WAVEfmt ', 8);
  b.writeUInt32LE(16, 16); b.writeUInt16LE(1, 20); b.writeUInt16LE(1, 22);
  b.writeUInt32LE(rate, 24); b.writeUInt32LE(rate * 2, 28); b.writeUInt16LE(2, 32);
  b.writeUInt16LE(16, 34); b.write('data', 36); b.writeUInt32LE(count * 2, 40);
  let seed = 77, smooth = 0;
  for (let i = 0; i < count; i++) {
    seed = (1664525 * seed + 1013904223) >>> 0;
    smooth = smooth * .86 + (seed / 4294967296 * 2 - 1) * .14;
    const t = i / rate;
    const end = Math.min(1, (seconds - t) / .03);
    const sample = Math.max(-1, Math.min(1, synth(t, smooth) * end));
    b.writeInt16LE(Math.round(sample * 32767), 44 + i * 2);
  }
  writeFileSync(`${folder}/${name}.wav`, b);
}
wav('reveal', .48, (t, n) => n * Math.sin(Math.PI * t / .48) ** 2 * 1.8);
wav('tap', .18, (t) => Math.sin(2 * Math.PI * (720 * t - 750 * t * t)) * Math.exp(-32 * t) * Math.min(1, t / .006) * .32);
wav('resolve', .65, (t) => (Math.sin(2 * Math.PI * 660 * t) + .35 * Math.sin(2 * Math.PI * 990 * t)) * Math.exp(-7 * t) * Math.min(1, t / .02) * .17);
console.log('Created reveal.wav, tap.wav, resolve.wav');
