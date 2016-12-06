# Wellcome eslint configuration

These are the default settings we've chosen for our JavaScript to adhere to with [eslint](http://eslint.org) at [Wellcome](https://wellcome.ac.uk). It is comprised of the [JS Standard](https://www.npmjs.com/package/eslint-config-standard) config, with a handful of overrides.

## Usage

Save this package as a dev-dependency:

```bash
npm install --save-dev eslint-config-wellcome
```

Add an `.eslintrc.json` file to the root directory of your application, containing the following:

```json
{
  "extends": ["wellcome"]
}
```
