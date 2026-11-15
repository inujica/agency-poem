// agency-poem-01 entry. Writes one poem to /output/entry.txt: UTF-8, 1..1000 code points,
// not only white space, no trailing line end. Deterministic: no network, no clock, no randomness.
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

// DRAFT A — delegation, and the body's refusal to accept it.
const A = `Left, I said, at the light,
and the car went left, and the blinker
ticked like a clock
that had agreed with me,
and my hands lay in my lap
like two tools at the end of a shift.

Past the laundry, past the school,
past the corner where I used to decide
with both hands and my jaw set.

Nothing went wrong.
That was the strange part:
it took the hill without asking the hill,
found the driveway I would have found,
and parked so gently the coffee
never leaned in its cup.

Twice I almost said something. Twice
I had nothing to say
to a thing that was doing it right.

All afternoon I reached for a wheel
that was not there. A tongue will do that —
find the gap of a tooth pulled years ago
and go on worrying it, with nothing left to worry.`;

// DRAFT B — the golem: the power to act kept in a slip of paper.
const B = `The rabbi wrote the word on paper
and slid it under the clay tongue,
and the clay stood up.

It carried water. It carried stone.
It did not stop at dusk
because no one had said dusk.
At the river it walked in,
because no one had said river.

You do not break a thing like that.
You climb its shoulder, open the jaw,
and rub out the first letter with your thumb:
truth goes to dead, and the weight
sits down in the mud like a hired man
at the end of a long job.

Every morning I put the word in.
Every evening I take it out.
Nobody tells you the ache is in the thumb.`;

// DRAFT C — hand over hand: giving the pencil away, and not taking it back.
const C = `My hand over hers over the pencil,
we wrote her name. I did the pushing.
She did the holding on.
The A came out with a roof too wide
and I said good, and she looked up
to see if I meant it, and I did,
which is not the same as saying it.

Then the afternoon I sat on my hands
and let her write it crooked,
all the way across the page,
one letter climbing the margin,
and it was hers the way a limp is hers.

I did not fix it.
That was the first thing I ever made
by leaving it alone.`;

const POEM = A;

writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), POEM);
