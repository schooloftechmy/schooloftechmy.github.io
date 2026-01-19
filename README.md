# School of Tech — Simple Static Page

This is a simplified static front page for School of Tech. It is intentionally minimal (no JavaScript) and styles the content inside a rounded "floating" card.

Files included:
- `index.html` — simple, JS-free page
- `styles.css` — styling including rounded card + floating effect

Images / assets
- Create a folder `assets/images/` at the repository root to drop images later.
- When you add images, reference them from HTML or other pages like:
  ```html
  <img src="assets/images/your-image.jpg" alt="Description">
  ```
- The current `index.html` is prepared to remain simple; you can add image elements into the card or create separate pages that use `assets/images/`.

Custom domain (CNAME)
- If you want to use a custom domain, add a `CNAME` file to the repo root containing only your domain on a single line, for example:
  ```
  schooloftech.my
  ```
- Configure DNS at your registrar (Hostinger) — add GitHub Pages A records for the apex or a CNAME for `www` as discussed earlier.

How to publish
1. Add these files to the root of `schooloftechmy.github.io`.
2. Commit & push to `main` (or the branch configured for Pages).
3. GitHub Pages will serve the site at `https://schooloftechmy.github.io/` or your custom domain once DNS & CNAME are configured.

If you want, I can:
- create and push these files to your repo (I will need write access), or
- add a second, image-rich layout that automatically shows images from `assets/images/`.
