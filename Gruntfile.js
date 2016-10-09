module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    responsive_images: {
     dev: {
      options: {
        engine: 'gm',
          sizes: [{
            width: 77,
            quality: 60
          },{
             width: 116,
             quality: 60
          },{
             width: 232,
             quality: 60
          },{
             width: 720,
             quality: 60
          }]
        },
        files: [{
          expand: true,
          src: ['**.{gif,jpg,png}'],
          cwd: 'test/views/images_src/',
          dest: 'test/views/images/'
        }]
      } 
    },
    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['test/views/images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['test/views/images']
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'optimized/css',
          src: ['*.css'],
          dest: 'optimized/css',
          ext: '.css'
        },{
          expand: true,
          cwd: 'optimized/views/css',
          src: ['*.css'],
          dest: 'optimized/views/css',
          ext: '.css'
        }]
      }
    },
    uglify: {
      my_target: {
        files: [{
          expand: true,
          cwd: 'optimized/js',
          src: ['*.js'],
          dest: 'optimized/js',
          ext: '.js'
        },{
          expand: true,
          cwd: 'optimized/views/js',
          src: ['*.js'],
          dest: 'optimized/views/js',
          ext: '.js'
        }]
      }
    },

    htmlmin: {                                    
    dist: {                                     
      options: {                                 
        removeComments: true,
        collapseWhitespace: true
      },
      files: [{                                  
          expand: true,
          cwd: 'optimized/',
          src: ['*.html'],
          dest: 'optimized/',
          ext: '.html'
      },{
        expand: true,
          cwd: 'optimized/views/',
          src: ['*.html'],
          dest: 'optimized/views/',
          ext: '.html'
      }]
    }
  }

 });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images','cssmin','uglify','htmlmin']);

};
