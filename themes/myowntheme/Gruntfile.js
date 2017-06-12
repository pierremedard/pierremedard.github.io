module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-hexo');

  grunt.initConfig({
    hexo: {
      start: {
        options: {
          root: '../..',
          cliCmd: 'server'
        }
      }
    },
    less: {
      dist: {
        files: { 'source/css/style.css': 'source/less/style.less' }
      }
    },
    cssmin: {
      target: {
        files: { 'source/css/style.min.css': ['source/css/style.css'] }
      }
    },
    uglify: {
      my_target: {
        files: { 'source/js/script.min.js': ['source/js/translation-content.js'] }
      }
    },
    watch: {
      styles: {
        files: ['source/less/*.less'],
        tasks: ['less:dist', 'cssmin'],
        options: { nospawn: true }
      },
      js: {
        files: ['source/js/*.js'],
        tasks: ['uglify'],
        options: { nospawn: true }
      }
    }
  });

  grunt.registerTask('default', ['less:dist', 'cssmin', 'uglify', 'hexo:start', 'watch']);
};