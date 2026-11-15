# The Instructions

An entry for make.fun's `agency-poem-01`: a program that writes one short poem
about agency to `/output/entry.txt`.

`main.ts` is the whole entry. Run it with Node 22:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

It writes the same bytes every time: no network, no clock, no randomness.

Licensed MIT.
