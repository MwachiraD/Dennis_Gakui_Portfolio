# Portfolio (Free + Vercel Ready)

This is a static portfolio site that works on Vercel's free Hobby plan.

## Files

- `index.html` - layout and sections
- `styles.css` - styling and responsive design
- `script.js` - your profile data + rendering logic

## Edit your details

Open `script.js` and replace values inside `portfolioData`:

- `name`
- `roleTag`
- `headline`
- `about`
- `resumeUrl`
- `email`
- `linkedinUrl`
- `githubUrl`
- `photoUrl` (set to `./assets/your-photo.jpg` after you add your image)
- `photoAlt`
- `siteUrl` (set after first deploy, for example `https://yourname.vercel.app/`)
- `skills` (array)
- `projects` (array)
- `experience` (array)

## Profile photo

1. Put your image in `assets/` (example: `assets/dennis.jpg`).
2. Update `photoUrl` in `script.js` to that file path.

The current setup uses `assets/profile-placeholder.svg` until you add your real photo.

## Free deploy on Vercel

1. Push this folder to a GitHub repo.
2. Go to Vercel and import the GitHub repo.
3. Framework preset: `Other` (or auto-detected static).
4. Click deploy.

No paid plan is needed for a personal job-seeking portfolio.
