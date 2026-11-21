# Portfolio template

A one-page student portfolio. The sections follow the PROCOMM "Preparing a Portfolio" lesson: goals, education, skills, projects, leadership and CCA, achievements, references and contact. It works on phones, tablets and desktops, and GitHub Pages hosts it for free.

You only need to edit **one file**, `src/content.ts`, and add your own images.

## 1. Get your own copy

Click **Use this template → Create a new repository** at the top of this page.

- Name it **`<your-username>.github.io`** if you want the site at `https://<your-username>.github.io`.
- Any other name also works. The site will then be at `https://<your-username>.github.io/<repo-name>/`.

Then clone your new repo:

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

## 2. Run it on your computer

You need [Node.js](https://nodejs.org) 22 or newer.

```bash
npx pnpm@10 install
npx pnpm@10 dev
```

Open http://localhost:8443. The page reloads by itself every time you save a file.

## 3. Fill in your details

| What | Where |
|---|---|
| All text: name, goals, education, skills, projects, CCAs, awards | `src/content.ts` |
| Photos, screenshots and certificates | `public/images/` |
| Browser tab title and Google description | `.figma/make/site.json` |
| Tab icon | replace `public/favicon.png` |

**Adding an image:**

1. Put the file in `public/images/`, for example `public/images/projects/my-app.png`.
2. In `content.ts`, refer to it without `public`: `image: "images/projects/my-app.png"`.
3. Set `imageSize` to the image's width and height in pixels. On a Mac, open the image and press ⌘I. This makes the page save the right amount of space before the image loads.

Delete the grey placeholder images (`profile.svg`, `project.svg`, `cca.svg`, `certificate.svg`) once you've replaced them.

**Before you publish:**

- Share only your email and LinkedIn. Leave out your IC number, address, date of birth and phone number.
- Blur or crop signatures and personal details on certificates.
- Check screenshots for emails or names that shouldn't be public.

## 4. Put it online (free, with GitHub Pages)

1. On GitHub, open your repo and go to **Settings → Pages**. Under **Build and deployment → Source**, choose **GitHub Actions**.
2. Push your changes:

   ```bash
   git add -A
   git commit -m "Add my details"
   git push
   ```

3. Open the **Actions** tab and wait for the green tick, about a minute. Your site is now live.

From then on, every push to `main` updates the site automatically.

If the very first run failed because Pages wasn't switched on yet, open the failed run and click **Re-run all jobs**.

## Changing the look

- Colours, fonts and spacing are set at the top of `src/index.css`. Change `--navy`, `--brass` and `--paper` to re-theme the whole site.
- The layout and section order are in `src/App.tsx`.

Built with React, TypeScript and Vite.
