module.exports = function(grunt) {
    grunt.initConfig({
        imagemin: {
            png: {
                options: {
                    optimizationLevel: 5
                },
                files: [{
                    // Set to true to enable the following options…
                    expand: true,
                    // cwd is 'current working directory'
                    cwd: 'img/',
                    src: ['**/*.png'],
                    // Could also match cwd line above. i.e. project-directory/img/
                    dest: 'img/',
                    ext: '.png'
                }]
            },
            jpg: {
                options: {
                    progressive: true
                },
                files: [{
                    // Set to true to enable the following options…
                    expand: true,
                    // cwd is 'current working directory'
                    cwd: './img/',
                    src: ['**/*.jpg'],
                    // Could also match cwd. i.e. project-directory/img/
                    dest: 'img/',
                    ext: '.jpg'
                }]
            }
        }
    });

    // measures the time each task takes
    require('time-grunt')(grunt);

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['imagemin']);

};
