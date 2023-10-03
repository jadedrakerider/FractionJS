#!/bin/bash

git add .
git commit -m "Releasing changes"
git push

git checkout main
git commit -m "Releasing changes"
git merge Dev-Alpha

git checkout Release
git commit -m "Releasing changes"
git merge main

git checkout Dev-Alpha