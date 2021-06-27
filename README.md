<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Read WebAssembly

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Read a file as [WebAssembly][webassembly].

<section class="installation">

## Installation

```bash
npm install @stdlib/fs-read-wasm
```

</section>

<section class="usage">

## Usage

```javascript
var readWASM = require( '@stdlib/fs-read-wasm' );
```

<a name="read-wasm"></a>

#### readWASM( file\[, options], clbk )

Asynchronously reads a file as [WebAssembly][webassembly].

```javascript
var join = require( 'path' ).join;

var fpath = join( __dirname, 'examples', 'fixtures', 'file.wasm' );
readWASM( fpath, onRead );

function onRead( error, buf ) {
    if ( error ) {
        throw error;
    }
    console.log( buf );
}
```

The function accepts the following `options`:

-   **flag**: file status flag.

#### readWASM.sync( file\[, options] )

Synchronously reads a file as [WebAssembly][webassembly].

```javascript
var join = require( 'path' ).join;
var instanceOf = require( '@stdlib/assert-instance-of' );

var fpath = join( __dirname, 'examples', 'fixtures', 'file.wasm' );
var out = readWASM.sync( fpath );
if ( instanceOf( out, Error ) ) {
    throw out;
}
console.log( out );
```

The function accepts the same `options` as [`readWASM()`](#read-wasm) above.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In contrast to [`readFile()`][@stdlib/fs/read-file], neither function accepts an `encoding` option. As [WebAssembly][webassembly] is a binary file format, if provided an `encoding` option, the function **overrides** the option, setting the option value to `null`.
-   Both functions return [WebAssembly][webassembly] file content as a [`Uint8Array`][@stdlib/array/uint8].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable no-undef -->

<!-- eslint no-undef: "error" -->

```javascript
var join = require( 'path' ).join;
var hasWebAssemblySupport = require( '@stdlib/assert-has-wasm-support' );
var readWASM = require( '@stdlib/fs-read-wasm' );

var fpath = join( __dirname, 'examples', 'fixtures', 'file.wasm' );
readWASM( fpath, onRead );

function onRead( error, wasm ) {
    var bool;
    if ( error ) {
        throw error;
    }
    bool = hasWebAssemblySupport();

    // If WebAssembly is supported, create a WebAssembly module instance...
    if ( bool ) {
        wasm = new WebAssembly.Module( wasm );
        wasm = new WebAssembly.Instance( wasm, {} );
        console.log( wasm.exports.stdlib_hypot( 5.0, 12.0 ) );
    } else {
        console.log( wasm );
    }
}
```

</section>

<!-- /.examples -->


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

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/fs-read-wasm.svg
[npm-url]: https://npmjs.org/package/@stdlib/fs-read-wasm

[test-image]: https://github.com/stdlib-js/fs-read-wasm/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/fs-read-wasm/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/fs-read-wasm/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/fs-read-wasm?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/fs-read-wasm.svg
[dependencies-url]: https://david-dm.org/stdlib-js/fs-read-wasm/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/fs-read-wasm/main/LICENSE

[webassembly]: http://webassembly.org/

[@stdlib/fs/read-file]: https://github.com/stdlib-js/fs-read-file

[@stdlib/array/uint8]: https://github.com/stdlib-js/array-uint8

</section>

<!-- /.links -->
