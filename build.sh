npm run build
cp -r build/ docs
git add .
git commit -m "chore:build"
git push