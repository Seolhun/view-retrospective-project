cd docs
npm install
npm run build
npm install -g surge

if [ $BRANCH = 'refs/heads/master' ]; then
  surge dist/ http://localize-components-docs.surge.sh --token $SURGE_TOKEN
else
  # Develop
  surge dist/ http://dev.localize-components-docs.surge.sh --token $SURGE_TOKEN
fi
