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

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Read a file as [WebAssembly][webassembly].



<section class="usage">

## Usage

To use in Observable,

```javascript
readWASM = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/fs-read-wasm@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var readWASM = require( 'path/to/vendor/umd/fs-read-wasm/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/fs-read-wasm@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.readWASM;
})();
</script>
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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript">
(function () {
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

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/fs-read-file`][@stdlib/fs/read-file]</span><span class="delimiter">: </span><span class="description">read the entire contents of a file.</span>

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/fs-read-wasm.svg
[npm-url]: https://npmjs.org/package/@stdlib/fs-read-wasm

[test-image]: https://github.com/stdlib-js/fs-read-wasm/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/fs-read-wasm/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/fs-read-wasm/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/fs-read-wasm?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/fs-read-wasm.svg
[dependencies-url]: https://david-dm.org/stdlib-js/fs-read-wasm/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/fs-read-wasm/tree/deno
[umd-url]: https://github.com/stdlib-js/fs-read-wasm/tree/umd
[esm-url]: https://github.com/stdlib-js/fs-read-wasm/tree/esm
[branches-url]: https://github.com/stdlib-js/fs-read-wasm/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/fs-read-wasm/main/LICENSE

[webassembly]: https://webassembly.org/

[@stdlib/fs/read-file]: https://github.com/stdlib-js/fs-read-file/tree/umd

[@stdlib/array/uint8]: https://github.com/stdlib-js/array-uint8/tree/umd

<!-- <related-links> -->

[@stdlib/fs/read-file]: https://github.com/stdlib-js/fs-read-file/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
