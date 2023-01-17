# IAWEB Project

## Prerequisites
1. Install Hugo (non-extended version is enough) via [official website](https://gohugo.io/installation/)
2. Install git via [official website](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Running Locally
1. Clone our repo with `git clone https://github.com/ozbej/IAWEB-project.git`
2. Navigate into `IAWEB-project` folder
3. Run `hugo server` to run the site locally at `http://localhost:1313/`
4. Note that Hugo doesn't support directory listing, which means URLs such as `http://localhost:1313/materials/en/` will appear to work even though the files are there.

## Building
1. Clone our repo with `git clone https://github.com/ozbej/IAWEB-project.git`
2. Navigate into `IAWEB-project` folder
3. Delete `public` folder if it exists
3. Run `hugo` to generate webpage into `public/`.
5. Run `gencache.sh` script to generate a list of files for service worker cache, which is used for the PWA.
  The list of files will be inserted into `public/sw.js`.
