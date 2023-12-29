#!/bin/bash

# Prompt for a commit message
read -p "Enter commit message: " commit_message

# Check if a commit message was provided
if [ -z "$commit_message" ]; then
    echo "Error: No commit message provided. Aborting."
    exit 1
fi

# Add all files to staging
git add .

# Commit with the provided message
git commit -m "$commit_message"

# Push to the remote repository
git push origin main

echo "Changes pushed to GitHub."
