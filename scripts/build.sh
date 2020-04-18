if [ "$CODEBUILD_GIT_BRANCH" = master ]; then
  echo "Updating NPM repository"
  # setup for npm credentials
  echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ~/.npmrc
  yarn publish
  echo "... done"
fi
