# My Apps

Personal iPhone web apps, served with GitHub Pages.

| App | Folder |
|---|---|
| Legion Clash | [`legion-clash/`](legion-clash/) |

## Install on iPhone
Open an app in Safari → Share → **Add to Home Screen**. It then opens full screen.

## Add a new app
1. Make a folder, for example `habit-tracker/`, with an `index.html`.
2. Copy `legion-clash/manifest.json` and the three icon files into it, then change the name and icons.
3. Keep the Apple web-app `<meta>` tags and the safe-area padding from `legion-clash/index.html`.
4. Add one line to the `APPS` list in the root `index.html`.

## Rules
- This repo is public: never commit passwords, keys, tokens or personal data.
- Apps save their data on the device only (`localStorage`), never in this repo.
