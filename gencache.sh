#!/bin/bash
set -e

# TODO: Add anything that should be excluded from cache to the list below (glob patterns).
# Uses the full path (starting with public/).
excluded=(
  '*.pdf'
  '*.zip'
  '*.xlsx'
  '*.mp4'
  'public/reports/*'
)

printf "Excluding %s from cache\n" "${excluded[@]}"

# Create an array of parameters for find.
# find expects "! -wholename '<glob>'" for excluding files, using -wholename
# here instead of name to exclude based on path too (e.g. public/reports).
excluded=("${excluded[@]/#/! -wholename }")

files="$(\
  # Collect exclusion parameters
  printf "%s\n" "${excluded[@]}" |
  # Find all files and dirs in public/ that are not excluded from cache
  xargs find public |
  # Ensure directories have trailing slash
  xargs ls -Fd |
  # Remove public/, wrap with double quotes, append comma
  sed 's/^public/"/;s/$/", /'
)"

echo "Found $(echo "$files" | wc -l) files to cache"

# Make the file list a single line.
files="$(echo "$files" | tr -d '\n')"

# Insert list of files into public/sw.js CACHED variable.
sed -i "s%let CACHED = \[\]\;%let CACHED = \[$files\]\;%;" public/sw.js
