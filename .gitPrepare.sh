#!/bin/bash
set -e

rsync -avhP --delete-excluded ./.output/public/ ./docs/ >/dev/null

echo "Yeah" > ./docs/.nojekyll

echo "Ready to deploy 😄"
