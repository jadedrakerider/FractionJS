#!/bin/bash

git add .
git commit -m "Releasing changes"
git push

git branch checkout main
git merge Dev-Alpha

git branch checkout Release
git merge main

git branch checkout Dev-Alpha