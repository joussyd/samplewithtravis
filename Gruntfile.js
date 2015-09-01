module.exports = function(grunt) {
 
  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'hello.js']
    }
  });
 
  grunt.registerTask('default', 'jshint');
 
};
