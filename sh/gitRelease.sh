#!/bin/bash

git add .
git commit -m "Releasing changes"
git push

git checkout main
git merge Dev-Alpha

git checkout Release
git merge main

git checkout Dev-Alpha