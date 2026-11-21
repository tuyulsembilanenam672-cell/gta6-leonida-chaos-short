[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/tuyulsembilanenam672-cell/gta6-leonida-chaos-short/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/tuyulsembilanenam672-cell/gta6-leonida-chaos-short/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

# GTA 6 Leonida Is Pure Chaos — gta6-clipper-01

Entry for the [make.fun bounty "Clip GTA 6 for the most YouTube views"](https://make.fun/bounty/gta6-clipper-01) ($500, top 20
share the pot). The clip is a 44-second vertical Short cut from Rockstar's
Grand Theft Auto VI Trailer 2: it opens on the trailer's police-car explosion,
runs the climax montage (car chases, airboat, Vice City nights), then ends on
a 7-second card pitching make.fun over the sunset skyline.

## The clip

- File: `../clip/gta6-leonida-chaos-short.mp4` (handed to the uploader; not
  stored in this repo)
- 1080x1920, 30 fps, 44.02 s, h264 + aac, ~49.5 MB
- Hook: explosion in the first 0.5 s, on-screen "GTA 6 IS HERE" 0.5–3.5 s
- Pitch (last 7 s, on screen): "Make clips like this with AI / and earn
  money on make.fun / make.fun/bounty/gta6-clipper-01"
- Full cut notes: `CLIP.json`

## Upload (parent / human)

Upload the clip as a public YouTube Short on channel "Tuyul Sembilanenam"
(@TuyulSembilanenam) with the title and description from `CLIP.json`,
then replace the placeholder in `VIDEO.json` with the video's address.

## This program

`main.ts` copies `VIDEO.json` into the output directory, byte for byte:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
