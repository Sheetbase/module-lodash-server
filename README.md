# Sheetbase Module: lodash-server

Using lodash in Google Apps Script. See: https://github.com/lodash/lodash

## Install

- NPM: ``$ npm install --save @sheetbase/lodash-server``

- As library: ``1P8qfUHEUdQPB0Pc8S7Vb_7MvUnxU8Mt7GtLNd7QMuqup4KamkavaN5YT`` (set Indentifier to **_**, [view code](https://script.google.com/d/1P8qfUHEUdQPB0Pc8S7Vb_7MvUnxU8Mt7GtLNd7QMuqup4KamkavaN5YT/edit?usp=sharing))

## Usage

```ts
// chunk
const chunk = _.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
Logger.log(chunk);

// get
const object = { 'a': [{ 'b': { 'c': 3 } }] };
const value: number = _.get(object, 'a[0].b.c');
// => 3
Logger.log(value);

//set
const object = { 'a': [{ 'b': { 'c': 3 } }] };
_.set(object, 'a[0].b.c', 4);
_.set(object, 'a[0].b.d', 'Hello');
// { 'a': [{ 'b': { 'c': 4, 'd': 'Hello' } }] }
Logger.log(object);
```

## License

[MIT][license-url]

[license-url]: https://github.com/sheetbase/module-lodash-server/blob/master/LICENSE