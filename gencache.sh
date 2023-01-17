#!/bin/bash
set -e

# find all files in public/ that are blacklisted file types
# include both files and directories, directories will trailing slash
files="$(find public ! -name '*.pdf' ! -name '*.mp4' ! -name "*.zip" ! -name "*.xlsx" | xargs ls -Fd | sed 's/^public/"/;s/$/", /' | tr -d '\n')"

# insert list of files into public/sw.js
sed -i "s%let CACHED = \[\]\;%let CACHED = \[$files\]\;%;" public/sw.js
