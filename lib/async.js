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
var isFunction = require( '@stdlib/assert-is-function' );
var isUint8Array = require( '@stdlib/assert-is-uint8array' );
var readFile = require( '@stdlib/fs-read-file' );
var Uint8Array = require( '@stdlib/array-uint8' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Reads the entire contents of a WebAssembly file.
*
* @param {(string|Buffer|integer)} file - file path or file descriptor
* @param {Options} [options] - options
* @param {string} [options.flag] - file status flag
* @param {Callback} clbk - callback to invoke after reading a file
* @throws {TypeError} options argument must be an object
* @throws {TypeError} callback argument must be a function
*
* @example
* var join = require( 'path' ).join;
* var instanceOf = require( '@stdlib/assert-instance-of' );
*
* var fpath = join( __dirname, 'foo.wasm' );
* readWASM( fpath, onRead );
*
* function onRead( error, buf ) {
*     if ( error ) {
*         throw error;
*     }
*     console.log( buf );
* }
*/
function readWASM( file, options, clbk ) {
	var opts;
	var done;
	if ( arguments.length < 3 ) {
		opts = {};
		done = options;
	} else {
		if ( !isObject( options ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
		}
		opts = options;
		done = clbk;
	}
	if ( !isFunction( done ) ) {
		throw new TypeError( format( 'invalid argument. Callback argument must be a function. Value: `%s`.', done ) );
	}
	// Always override setting the encoding option, as wasm is a binary file format:
	opts.encoding = null;
	readFile( file, opts, onRead );

	/**
	* Callback invoked upon reading a file.
	*
	* @private
	* @param {(Error|null)} error - error object
	* @param {(Buffer|string)} file - file contents
	* @returns {void}
	*/
	function onRead( error, file ) {
		var out;
		var i;
		if ( error ) {
			return done( error );
		}
		if ( isUint8Array( file ) ) {
			return done( null, file );
		}
		// Handle older Node.js environments where Buffer objects are not Uint8Arrays...
		out = new Uint8Array( file.length );
		for ( i = 0; i < file.length; i++ ) {
			out[ i ] = file[ i ];
		}
		done( null, out );
	}
}


// EXPORTS //

module.exports = readWASM;
