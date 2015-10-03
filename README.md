# Ember-deploy-tagging-scalingo

This [ember-cli-deploy](https://github.com/ember-cli/ember-cli-deploy) tagging-adapter will use the environment variable `DEPLOY_GIT_REF` to tag a deployment instead of the default sha tagging-adapter.

## How to use

1. `npm install --save ember-deploy-tagging-scalingo`

2. Add `tagging: 'env-scalingo'` to your `deploy.js`:

```
module.exports = {
  production: {
    store: process.env['REDIS_URL'],
    assets: {
      ...
    },
    tagging: 'env-scalingo'
  }
};

```

## Links
* [ember-cli-deploy doc](http://ember-cli.github.io/ember-cli-deploy/)
