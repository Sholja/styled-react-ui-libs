if [ "$CODEBUILD_GIT_BRANCH" = master ]; then
  echo "Updating NPM repository"
  # setup for npm credentials
  echo "//registry.npmjs.org/:_authToken=${REACT_APP_NPM_TOKEN}" > ~/.npmrc
  yarn publish
  echo "... done"
fi
