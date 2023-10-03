#!/bin/bash

git commit . -m "Releasing changes"
git push

git checkout main
git commit -m "Releasing changes"
git merge Dev

git checkout Release
git commit -m "Releasing changes"
git merge main

git checkout Dev