# Add excluded files in the list below
$files = Get-ChildItem -Path ".\public\" -Recurse | Where-Object{
$_.FullName -notlike "*public\reports\*" -and 
$_.FullName -notlike "*.pdf" -and
$_.FullName -notlike "*.zip" -and
$_.FullName -notlike "*.xlsx" -and
$_.FullName -notlike "*.mp4"
}

# Make paths relative, and add trailing slash for directories
$files = $files |% {if ($_ -is [System.IO.DirectoryInfo]) { ($_ | Resolve-Path -Relative | Out-String -Stream) + "/" } else { $_ | Resolve-Path -Relative | Out-String -Stream }}

# Use / as path separator, omit ".\public" prefix
$files = (($files |% {'"' + ($_.ToString().Replace('.\public', '').Replace('\', '/')) + '",'}) | Sort-Object) -join " "

$to_replace = "let CACHED = [];"
$replacement = 'let CACHED = ["/", ' + $files + "];"

# Replace file list in sw.js
(Get-Content -Path .\public\sw.js -Raw).Replace("$to_replace", "$replacement") | Set-Content .\public\sw.js