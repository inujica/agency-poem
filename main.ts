// agency-poem-01. Writes one poem to /output/entry.txt (MAKEFUN_OUTPUT_DIR outside the
// grader). Deterministic: no network, no clock, no randomness.
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Four conceits, each with the one true sentence nobody says out loud.
// A. SPECIMEN — a delegate signs in your name until its version is the reference and
//    yours is the forgery. True sentence: taking the power back means copying the thing
//    that took it. (written out below)
// B. THE ALIBI — a standing order that pays at three in the morning. True sentence:
//    I have not decided anything in years, I have only failed to stop.
const B = `Every month at three it pays a man
I have not spoken to since spring.
The form is in a drawer. The button works.
I have not decided anything in years;
I have only failed to stop.`;

// C. THE DEFAULT — the box that came pre-ticked. True sentence: I have never chosen
//    anything I did not first fail to refuse. (killed: that sentence is an aphorism, so
//    the poem would be a lecture rather than an observation.)
const C = `The form came with the box already ticked.
Not answering is answering, it said, in small print.
I read the small print twice and did not answer.
Everything I hold was agreed that way:
in the negative, by a silence I mistook for mine.`;

// D. THE DOWNBEAT — the conductor, obeyed.
//    True sentence: to be obeyed is to be always a beat behind your own intention.
const D = `I lift the stick and the hall fills with sound
half a second after the lift.
I am never in the room where my choice arrives.
They obey me the way weather obeys a season:
entirely, and behind.`;

// A, written out: the act you hand over becomes the standard for the act you keep.
const POEM = `The Proxy

I could not go, so I wrote his name
in the box that asked who may act for me.
The clerk said: this holds until you say otherwise.
I said that's fine, I was somewhere else that year,
and meant it.

He goes. He stands when they ask
whether the motion carries, and it carries.
In March he carried it the way I would have.
In June he carried it the way I would have in March.

He has not made one mistake in eleven months.

Last week I sat in the corridor
outside the room where my voice was being used
and heard, through the door, my own opinion
being right at length without me,
and did not go in, and have not said otherwise.

The form is in a drawer with the gas bill.
The box is still filled in.
It says until you say otherwise,
and I have not said otherwise.`;

writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), POEM);
