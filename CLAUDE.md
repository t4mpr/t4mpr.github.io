# Claude Instructions for t4mpr.github.io Blog

This file contains instructions for updating the t4mpr.github.io Astro blog site.

## Project Structure

- **Blog posts location:** `src/content/blog/`
- **Each blog post:** Has its own directory with an `index.mdx` file
- **Repository:** Connected to `https://github.com/t4mpr/t4mpr.github.io.git`
- **Branch:** `main`
- **Live site:** https://t4mpr.github.io

## Adding New Blog Posts

### 1. Create Directory Structure
```bash
mkdir -p src/content/blog/[post-slug]/
```

**Naming convention:**
- Use lowercase with hyphens
- For CTF writeups from the same event, use a single directory (e.g., `wannagame-championship-2025`)
- Multiple writeups from the same event go in one combined post

### 2. Create index.mdx File

**Required front matter:**
```yaml
---
title: 'Post Title Here'
description: 'Brief description for SEO and preview'
date: YYYY-MM-DD
tags: ['tag1', 'tag2', 'tag3']
authors: ['t4mpr']
---
```

**Content structure:**
- Use `##` for main challenge headings (e.g., "## Forensics Challenge 1: Name")
- Use `###` for section headings within challenges
- Use `####` for subsections

### 3. Image Guidelines

**Image linking:**
- Always link to GitHub repository images to avoid duplicate uploads
- Use raw GitHub URLs with `?raw=true` parameter
- Format: `https://github.com/t4mpr/ctf-writeups/blob/main/[Path-To-Images]/image.png?raw=true`

**Image sizing:**
- Challenge description images at top: `width="50%"`
- Content images (screenshots, terminals, etc.): `width="100%"` to match code block width
- Never use `width="70%"` - it makes images appear centered and smaller than code blocks

**Clickable images for terminal screenshots:**
```html
<a href="[full-github-url]?raw=true" target="_blank">
<img src="[full-github-url]?raw=true" alt="Description - Click to enlarge" width="100%"/>
</a>
```

### 4. Code Block Styling
- Use triple backticks with language identifier
- Common languages: `bash`, `python`, `javascript`, `powershell`, `yaml`
- The site uses syntax highlighting automatically

## Git Workflow

### Committing Changes
```bash
git add [files]
git commit -m "Descriptive commit message"
```

**Important:**
- Do NOT add co-authorship or Claude attribution in commits unless explicitly requested
- Keep commit messages clear and concise
- User will push commits themselves (requires authentication)

### Pushing Changes
The user handles pushing:
```bash
git push origin main
```

## Common Tasks

### Adding a New CTF Writeup
1. Check if a directory exists for that CTF event
2. If multiple writeups from same event:
   - Use ONE directory
   - Combine all writeups in one `index.mdx`
   - Structure with "## Challenge 1:", "## Challenge 2:", etc.
3. Link all images to GitHub repo
4. Set content images to `width="100%"`
5. Add proper front matter with all relevant tags

### Updating Image URLs
- Always include `?raw=true` at the end
- Verify the URL points to the correct image in the GitHub repo
- Test that images display correctly

### Fixing Image Widths
- Challenge headers: `width="50%"`
- All other images: `width="100%"`
- This ensures images match code block widths

## Blog Post Format Example

```mdx
---
title: 'Event Name - Challenge Writeup'
description: 'Brief technical description'
date: 2025-12-06
tags: ['event-name', 'category', 'technique1', 'technique2']
authors: ['t4mpr']
---

## Challenge 1: Challenge Name

<img src="https://github.com/.../image.png?raw=true" alt="Challenge" width="50%"/>

### Challenge Overview
Description here...

### Solution
Steps here...

<img src="https://github.com/.../screenshot.png?raw=true" alt="Screenshot" width="100%"/>

## Challenge 2: Another Challenge

[Same structure...]

---

**Author:** t4mpr
**Date:** Month Day, Year
**Event:** Event Name
```

## Important Notes

- This is an Astro static site
- Uses MDX format (supports JSX in markdown)
- Build process happens automatically when pushed to GitHub
- Images should ALWAYS link to GitHub repo to avoid duplication
- Keep formatting consistent across posts
- User maintains professional tone in writeups

## Contact Info Sections

Always include at the end of writeups:
- Link to event Discord/website
- Team acknowledgment (Lil L3ak)
- Personal links (LinkedIn, X, GitHub)
- Author, Date, Event metadata

## Repository References

- **Main CTF writeups:** https://github.com/t4mpr/ctf-writeups
- **Blog site repo:** https://github.com/t4mpr/t4mpr.github.io
- **Images location:** Usually in `images/` subdirectory of each CTF writeup folder
