// agency-poem-01 entry: writes one poem to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The Instructions',
  '',
  'At midnight I wrote nine lines down',
  'on how to feed the cat: the bowl is here,',
  'the water there, the door stays shut at six.',
  'I left them where the listening thing would find them.',
  '',
  'It did not ask. It took me at my word.',
  'And every word I had not written',
  'stood up in the room',
  'and introduced itself.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
