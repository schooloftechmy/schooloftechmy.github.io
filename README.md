# School of Tech — Static Site (GitHub Pages)

This is a minimal static site for courses: Scratch education, Robotics education and Python development. It includes a client-side image drop area so you can drag & drop an image to preview it.

Files included:
- `index.html` — main page
- `styles.css` — basic responsive styles
- `script.js` — image drop & preview logic
- `CNAME` — add your custom domain here (replace the placeholder)
  
How to publish to GitHub Pages
1. Commit these files to the root of the repository (for a user/organization site the repo should be `username.github.io`).
2. Push to the `main` (or `master`) branch.
3. GitHub will publish the site automatically at `https://<username>.github.io/` (or your repository Pages URL).

Using your own custom domain
1. Replace the contents of the `CNAME` file with your domain, for example:
   ```
   example.com
   ```
2. In your repository settings -> Pages, ensure the source is set to the root of the `main` branch and GitHub recognizes your `CNAME`.
3. Update your DNS:
   - For an apex domain (example.com), add A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - For a subdomain (www.example.com), add a CNAME record that points to:
     ```
     <your-github-username>.github.io
     ```
4. Wait for DNS propagation (can take minutes to a few hours), then visit your domain. GitHub will serve the site and automatically provision HTTPS (if DNS is correct).

Notes
- The image drop area only previews the image in the browser — it does not upload files to a server.
- To replace content, edit `index.html` text or modify styles in `styles.css`.
- If you want images permanently hosted, add them to the repo (e.g. an `assets/` folder) and reference them in the HTML.

If you want, I can:
- create these files and push them to your repository for you (I will need repo write access),
- or produce an alternative layout (single-column, card-focused, or full landing page),
- or add a simple contact form (requires a backend or a third-party form service).
