# Sheetbase Module: @sheetbase/lodash-server

Lodash for Google apps script.

<!-- <content> -->

[![License][license_badge]][license_url] [![clasp][clasp_badge]][clasp_url] [![Support me on Patreon][patreon_badge]][patreon_url] [![PayPal][paypal_donate_badge]][paypal_donate_url] [![Ask me anything][ask_me_badge]][ask_me_url]

<!-- </content> -->

## Install

- Using npm: `npm install --save @sheetbase/lodash-server`

- As a library: `1P8qfUHEUdQPB0Pc8S7Vb_7MvUnxU8Mt7GtLNd7QMuqup4KamkavaN5YT`

  Set the _Indentifier_ to **Lodash** and select the lastest version, [view code](https://script.google.com/d/1P8qfUHEUdQPB0Pc8S7Vb_7MvUnxU8Mt7GtLNd7QMuqup4KamkavaN5YT/edit?usp=sharing).

## Examples

```ts
function example1(): void {
  const chunk = _.chunk(["a", "b", "c", "d"], 2);
  // => [['a', 'b'], ['c', 'd']]
  Logger.log(chunk);
}

function example2(): void {
  const object = { a: [{ b: { c: 3 } }] };
  const value: number = _.get(object, "a[0].b.c");
  // => 3
  Logger.log(value);
}

function example3(): void {
  const object = { a: [{ b: { c: 3 } }] };
  _.set(object, "a[0].b.c", 4);
  _.set(object, "a[0].b.d", "Hello");
  // { 'a': [{ 'b': { 'c': 4, 'd': 'Hello' } }] }
  Logger.log(object);
}
```

## Documentation

Homepage: https://lodash.com/

## License

**@sheetbase/lodash-server** is released under the [MIT](https://github.com/sheetbase/module-lodash-server/blob/master/LICENSE) license.

<!-- <footer> -->

[license_badge]: https://img.shields.io/github/license/mashape/apistatus.svg
[license_url]: https://github.com/sheetbase/module-lodash-server/blob/master/LICENSE
[clasp_badge]: https://img.shields.io/badge/built%20with-clasp-4285f4.svg
[clasp_url]: https://github.com/google/clasp
[patreon_badge]: https://ionicabizau.github.io/badges/patreon.svg
[patreon_url]: https://www.patreon.com/lamnhan
[paypal_donate_badge]: https://ionicabizau.github.io/badges/paypal_donate.svg
[paypal_donate_url]: https://www.paypal.me/lamnhan
[ask_me_badge]: https://img.shields.io/badge/ask/me-anything-1abc9c.svg
[ask_me_url]: https://m.me/sheetbase

<!-- </footer> -->
