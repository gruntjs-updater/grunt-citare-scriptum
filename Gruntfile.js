'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    'citare-scriptum': {
      javascript: [
        "tasks/*.js", "README.md"
      ]
    },
    jshint: {
      all_files: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    }
  });

  // Load he plugin task
  grunt.loadTasks('tasks');

  // Include jshint
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint','citare-scriptum']);

};