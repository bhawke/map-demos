#!/bin/bash -e

# This script pushes a demo-friendly version of the demos
# dependencies to gh-pages.

# usage gp bhawke map-demos [branch]
# Run in a clean directory passing in a GitHub org and repo name
org=$1
repo=$2
branch=${3:-"master"} # default to master when branch isn't specified

# make folder (same as input, no checking!)
mkdir $repo
git clone https://github.com/$org/$repo.git --single-branch

# switch to gh-pages branch
pushd $repo >/dev/null
git checkout --orphan gh-pages

# remove all content
# git rm -rf -q .
rm .gitignore
rm README.md
rm -rf scripts

# run bower install
cd demo-01
bower install
cd ..

cd demo-02
bower install
cd ..

cd demo-03
bower install
cd ..

cd demo-04
bower install
cd ..

# send it all to github
git add -A .
git commit -am 'seed gh-pages'
git push -u origin gh-pages --force

popd >/dev/null
