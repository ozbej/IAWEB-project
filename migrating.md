# Migrating Content to Hugo

1. Move all existing content to `content/` (e.g. `mv hci/* content/`).
    - Ensure directory structure matches the URL structure for images to be found correctly.
    - The index HTML files for directories should be named `_index.html` or `index.html`, see [Hugo Page Bundles](https://gohugo.io/content-management/page-bundles/) for difference.
2. Add front matter to HTML files that are part of the main website.
  All HTML except the contents of `<body>` can be removed.
  Example for `schedule.html` (moved to `content/schedule/_index.html`):
    ```toml
    ---
    title: "Human Computer Interaction Schedule"
    custom_css: ["css/schedule.css"] # Page specific CSS file (omit if not needed)
    url: "/schedule" # Custom URL (can sometimes be omitted)
    aliases:
      - "/schedule.html" # For backwards compatibility with old URLs (omit if not needed)
    ---
    <div id="whole">
    ... (the rest of the file is omitted)
    ```
    - Standalone HTML pages, such as reports, don't need front matter.
3. Ensure links work.
  If directories are renamed, some links may need to be updated.
  Tools such as [linkcheck](https://github.com/filiph/linkcheck) may be useful.
