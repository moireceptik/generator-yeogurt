// Configuration for Sass task(s)
// Compile Sass stylesheets to single `.css` file
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('sass', {
    server: {
      options: {
        precision: 10,
        outputStyle: 'nested',
        sourceMap: true,
        includePaths: [
          '<%%= yeogurt.client %>'
        ]
      },
      files: {
        '<%%= yeogurt.tmp %>/main.css': '<%%= yeogurt.client %>/main.{scss,sass}'
      }
    },
    dist: {
      options: {
        precision: 10,
        outputStyle: 'compressed',
        sourceMap: true,
        includePaths: [
          '<%%= yeogurt.client %>'
        ]
      },
      files: {
        '<%%= yeogurt.dist %>/<% if (useServer) { %>client/<% } %>main.css': '<%%= yeogurt.client %>/main.{scss,sass}'
      }
    }
  });

};

module.exports = taskConfig;
