<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isDomainName

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a domain name.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-domain-name
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].
-   To use as a general utility for the command line, install the corresponding [CLI package][cli-section] globally.

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var isDomainName = require( '@stdlib/assert-is-domain-name' );
```

#### isDomainName( value )

Tests if a `value` is a domain name.

```javascript
var bool = isDomainName( 'example.com' );
// returns true

bool = isDomainName( 'foo@bar.com' );
// returns false
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Validation adheres to [RFC 2181][rfc-2181], which defines the syntax for domain names and stipulates that domain names must be 255 characters or less.

<!-- </notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isDomainName = require( '@stdlib/assert-is-domain-name' );

var bool = isDomainName( 'www.example.com' );
// returns true

bool = isDomainName( 'foo@bar.com' );
// returns false

bool = isDomainName( 'beep boop' );
// returns false

bool = isDomainName( null );
// returns false

bool = isDomainName( 5.0 );
// returns false
```

</section>

<!-- /.examples -->

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use as a general utility, install the CLI package globally

```bash
npm install -g @stdlib/assert-is-domain-name-cli
```

</section>

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: is-domain-name [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --split sep           Delimiter for stdin data. Default: '/\\r?\\n/'.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   If the split separator is a [regular expression][mdn-regexp], ensure that the `split` option is either properly escaped or enclosed in quotes.

    ```bash
    # Not escaped...
    $ echo -n $'foo@bar.com\nbaz.com' | is-domain-name --split /\r?\n/

    # Escaped...
    $ echo -n $'foo@bar.com\nbaz.com' | is-domain-name --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ is-domain-name example.com
true
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'example.com' | is-domain-name
true
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'beep boop\tbaz.com' | is-domain-name --split '\t'
false
true
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-domain-name.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-domain-name

[test-image]: https://github.com/stdlib-js/assert-is-domain-name/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-domain-name/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-domain-name/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-domain-name?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-domain-name.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-domain-name/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/assert-is-domain-name#cli
[cli-url]: https://github.com/stdlib-js/assert-is-domain-name/tree/cli
[@stdlib/assert-is-domain-name]: https://github.com/stdlib-js/assert-is-domain-name/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-domain-name/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-domain-name/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-domain-name/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-domain-name/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-domain-name/main/LICENSE

[rfc-2181]: https://tools.ietf.org/html/rfc2181

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

</section>

<!-- /.links -->
