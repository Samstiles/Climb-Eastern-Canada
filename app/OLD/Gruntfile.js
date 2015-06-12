(function () {
  'use strict';
  module.exports = function (grunt) {
    var paths = {
      src: 'src/**/*.*',
      srcJs: 'src/**/*.js'
    };
    grunt.initConfig({
      watch: {
        all: {
          files: [paths.srcJs],
          tasks: ['concat:dist']
        }
      },
      concat: {
        dist: {
          src: paths.srcJs,
          dest: 'dist/proj.js'
        }
      },
      connect: {
        server: {
          options: {
            port: 9001,
            base: '../APP',
            livereload: false
          }
        }
      }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('go', ['concat:dist', 'connect', 'watch']);
  };
})();