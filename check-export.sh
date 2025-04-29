#!/bin/bash

# Clean any existing output
echo "Cleaning existing output directories..."
rm -rf .next out

# Build the Next.js app
echo "Building Next.js app..."
npm run build

# Check if .next directory exists
echo "Checking if .next directory was created..."
if [ -d "./.next" ]; then
  echo "✅ Success! The .next directory was created."
  echo "Contents of .next directory:"
  ls -la ./.next
else
  echo "❌ The .next directory was not created!"
  echo "Build process failed."
  exit 1
fi

# Export the Next.js app to static HTML
echo "Exporting Next.js app to static HTML..."
npm run export

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
  
  echo "Export process failed."
  exit 1
fi

echo "✅ Build and export completed successfully!" 