'use strict';

var gulp_bitcore = require('digibyte-build');
var gulp = require('gulp');
console.log(gulp_bitcore)
gulp_bitcore('mnemonic');

gulp.task('default', ['browser']);