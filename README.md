# IAWEB Project

## Prerequisites
1. Install Hugo (non-extended version is enough) via [official website](https://gohugo.io/installation/)
2. Install git via [official website](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Development
1. Clone our repo with `git clone https://github.com/ozbej/IAWEB-project.git`
2. Navigate into `IAWEB-project` folder
3. Run `hugo server -D` to run the site locally at `http://localhost:1313/hci/`
4. Note that Hugo doesn't support directory listing, which means URLs such as `http://localhost:1313/hci/materials/en/` will appear to work even though the files are there.

## Building
1. Clone the repo as above.
2. Run `hugo --baseURL="<url>"`, where `<url>` is the URL where the page will be hosted, e.g. `https://courses.isds.tugraz.at/hci`. Alternatively, `baseURL` can be configured in `config.toml`.
3. The files for the webpage will be output into `public/`.
