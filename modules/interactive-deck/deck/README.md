# BW/S SS27 — Interactive Slide Deck (final submission)

A six-slide 16:9 interactive presentation of BW/S (New York) Spring/Summer 2027 jewelry directions.
It covers three categories, and each has a motion cover with its own sound and a "four codes" slide.

| # | Slide | Media |
|---|---|---|
| 1 | Garden of Whimsy (cover) | `garden-whimsy.mp4`, spring-waltz sound |
| 2 | Romantic Details: Four Codes | `earrings-beads.mp4`, `earrings-beads-bg.png` |
| 3 | More is More (cover) | `model-4-hd-skin-loop.mp4`, ambient sound |
| 4 | Maximalism: Four Codes | `earring-4.mp4` |
| 5 | The Art of Form (cover) | `model-5-fast.mp4`, brushed-jazz sound |
| 6 | Sculptural Essentials | `vintage-gold-wide-8s.mp4`, `vintage-gold-wide-bg-950.png` |

## Version

- **Approved version:** `BWS_SS27_More_is_More_Model4Cover_v25.html`. It is byte-identical to the frozen file.
  - SHA-256: `0807f30610a747bdfbf0999993891df116ea7d149f14fbcbdb70529a47784d5a`
- **Source:** the development project's local Git repository.
  - Branch: `main`
  - Commit: `2680f7b43134a3641564786072f1e514b250a8d7`
  - Annotated tag: `slides-frozen-2026-11-18`
- **What this package contains:** only the files the approved deck loads. Earlier drafts, source footage and tools stay in the development project.
- **Integrity:** `CHECKSUMS.sha256` lists every file in this package.

## Launch

You need a modern desktop browser. Chrome or Edge is recommended; Firefox and Safari also work.

### Recommended: local server

This turns on the full Web Audio sound engine. It needs Node.js 18 or later and installs nothing.

```bash
node serve.mjs
```

Then open http://localhost:8765/. It redirects to the deck.

- For another port, run `node serve.mjs 8080`.
- Any static server also works if you start it from this folder:
  - `npx -y http-server@14.1.1 -p 8765 -c-1`
  - `python -m http.server 8765`

### Quick look: no server

Double-click `BWS_SS27_More_is_More_Model4Cover_v25.html`. Slides, motion and video all work.

Sound uses a simpler `<audio>` fallback here, because browsers block Web Audio file loading over `file://`.

## Controls

| Input | Action |
|---|---|
| → ↓ Space Enter PageDown | Next slide |
| ← ↑ PageUp Backspace | Previous slide |
| Click the slide | Right 70 %: next; left 30 %: previous |
| Home / End | First / last slide |
| Rail thumbnails, ‹ › buttons | Jump to a slide |
| `#3` in the URL | Open at slide 3 |
| F | Full screen |
| M, or the sound button | Toggle sound |

- **Sound starts only after your first click or key press.** Browsers block autoplay. Until then, the sound button pulses gold.
- **Each cover's sound** starts ON. It fades out and switches off at the moment the cover's motion freezes. Content slides have no sound.

## External dependencies

- **Google Fonts.** Bodoni Moda and Archivo load from `fonts.googleapis.com` / `fonts.gstatic.com`.
  - Without internet, the deck still runs, but it falls back to system serif and sans fonts, so the typography will not match the approved design.
- **Nothing else.** No framework, package manager or build step. Plain HTML, CSS and JavaScript in one file.

## Contents

```
index.html                                  redirect to the deck
BWS_SS27_More_is_More_Model4Cover_v25.html  the approved deck
serve.mjs                                   optional zero-dependency local server
README.md                                   this file
CHECKSUMS.sha256                            SHA-256 of every file
assets/   6 videos (H.264, no audio track), 6 posters, 2 matched backgrounds
assets/audio/  9 WAV sound files for the three covers
```

## Licensing notes

- **Fonts:** Bodoni Moda and Archivo are under the SIL Open Font License 1.1. They are served by Google Fonts and not bundled.
- **Video:** clips are derived from the project's generated source footage.
  - Confirm the source tool's terms allow portfolio and commercial presentation use before public distribution.
- **Sound:** made for the project.
- **Brand:** BW/S brand name and jewelry designs belong to their owner.
