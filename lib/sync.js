/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isObject = require( '@stdlib/assert-is-plain-object' );
var isUint8Array = require( '@stdlib/assert-is-uint8array' );
var instanceOf = require( '@stdlib/assert-instance-of' );
var readFileSync = require( '@stdlib/fs-read-file' ).sync;
var Uint8Array = require( '@stdlib/array-uint8' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Synchronously reads the entire contents of a WebAssembly file.
*
* @param {(string|Buffer|integer)} file - file path or file descriptor
* @param {Options} [options] - options
* @param {string} [options.flag] - file status flag
* @throws {TypeError} options argument must be an object
* @returns {(Uint8Array|Error)} file contents or an error
*
* @example
* var join = require( 'path' ).join;
* var instanceOf = require( '@stdlib/assert-instance-of' );
*
* var fpath = join( __dirname, 'foo.wasm' );
* var out = readWASMSync( fpath );
* if ( instanceOf( out, Error ) ) {
*     throw out;
* }
* console.log( out );
*/
function readWASMSync( file, options ) {
	var opts;
	var out;
	var f;
	var i;
	if ( arguments.length > 1 ) {
		if ( !isObject( options ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
		}
		opts = options;
	} else {
		opts = {};
	}
	// Always override setting the encoding option, as wasm is a binary file format:
	opts.encoding = null;
	f = readFileSync( file, opts );
	if ( instanceOf( f, Error ) ) {
		return f;
	}
	if ( isUint8Array( f ) ) {
		return f;
	}
	// Handle older Node.js environments where Buffer objects are not Uint8Arrays...
	out = new Uint8Array( f.length );
	for ( i = 0; i < f.length; i++ ) {
		out[ i ] = f[ i ];
	}
	return out;
}


// EXPORTS //

module.exports = readWASMSync;
