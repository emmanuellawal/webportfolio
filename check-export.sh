#!/bin/bash

# Clean any existing output
echo "Cleaning existing output directories..."
rm -rf .next out

# Build the Next.js app (which also creates the static export with output: 'export' in next.config.mjs)
echo "Building Next.js app..."
npm run build

# Check if out directory exists
if [ -d "./out" ]; then
  echo "✅ Success! The out directory was created."
  echo "Contents of out directory:"
  ls -la ./out
  
  # Check if index.html exists in the out directory
  if [ -f "./out/index.html" ]; then
    echo "✅ index.html found in out directory."
  else
    echo "❌ index.html not found in out directory!"
  fi
else
  echo "❌ The out directory was not created!"
  echo "Current directory contents:"
  ls -la
  
  # Check if .next directory exists
  if [ -d "./.next" ]; then
    echo ".next directory exists with contents:"
    ls -la ./.next
  fi
fi 