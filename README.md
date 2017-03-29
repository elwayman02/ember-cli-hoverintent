# Ember CLI Hoverintent

[![Build Status](https://travis-ci.org/elwayman02/ember-cli-hoverintent.svg?branch=master)](https://travis-ci.org/elwayman02/ember-cli-hoverintent)
[![Ember Observer Score](https://emberobserver.com/badges/ember-cli-hoverintent.svg)](https://emberobserver.com/addons/ember-cli-hoverintent)
[![Code Climate](https://codeclimate.com/github/elwayman02/ember-cli-hoverintent/badges/gpa.svg)](https://codeclimate.com/github/elwayman02/ember-cli-hoverintent)

This addon provides a vendor shim for [hoverintent](https://github.com/tristen/hoverintent), allowing it to be accessed as an ES6 module

## Installation

`ember install ember-cli-hoverintent`

## Usage

Simply import `hoverintent`:

```javascript
import hoverintent from `hoverintent`;
```

Then call the `hoverintent` method as you would the global provided by the bower package.

## Contributing

This section outlines the details of collaborating on this Ember addon.

### Installation

* `git clone` this repository
* `cd ember-cli-hoverintent`
* `npm install`
* `bower install`

### Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
