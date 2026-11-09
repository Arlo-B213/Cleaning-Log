# Cleaning Log – Weekly Sign-Off

Digital version of the paper **Cleaning Checklist – Weekly Sign-Off** sheet. Team members sign off each 2-hour cleaning slot from their phones; managers verify each day and print/export the week.

**Live app:** https://arlo-b213.github.io/cleaning-log/

## How it works

| Paper sheet | App |
|---|---|
| Week starting / Area / First time | Area picker + week arrows. First time is set per area by a manager. |
| Mon–Sun columns, 12 slots every 2 hours | Same grid ("Week view") or one day at a time ("Day view", best on phones). Overnight slots (1–7 AM) stay in the previous day's column, like the paper. |
| Sign or initial the box | Tap **Sign off now** (or any open slot), enter name/initials. Time is stamped automatically. Past slots are saved as **late** with the real time. |
| Blank boxes | Shown in red as **Missed** once the slot has passed. |
| Checked by | Manager taps the Checked by row to verify the day (passcode required). |

**Manager tools** (Manager button → passcode): print the week on a sheet that matches the paper form, export CSV, remove a wrong sign-off, add/rename areas and set each area's first time slot, change the passcode. The first manager to open the tools sets the passcode.

## One-time Firebase setup (project `stewards-ebd5b`)

1. Firebase console → **Build → Firestore Database → Create database** (production mode, location `us-west2` or nearest).
2. Firestore → **Rules** → paste the contents of [`firestore.rules`](firestore.rules) → **Publish**.

That's it — no sign-in setup is needed.

## Data

- `config/app` – areas `[{id, name, firstTime}]` (firstTime = minutes after midnight, 540 = 9:00 AM) and the manager passcode hash.
- `logs/{areaId}_{YYYY-MM-DD}` – one document per area per week (Monday date). `signs.d{day}s{slot}` = `{by, at, late, note}`; `checks.d{day}` = `{by, at}`.

## Security note

Like the other team apps, this uses a shared manager passcode checked in the browser, not individual logins. Anyone with the link can sign slots. That's fine for an internal checklist; if you need stronger protection later, add Firebase Authentication and tighten the rules.

## Files

- `index.html` – the whole app (no build step; Firebase loaded from the CDN)
- `firestore.rules` – database rules to paste into the console
- `manifest.json`, `icon.svg` – lets phones "Add to Home Screen" as an app
