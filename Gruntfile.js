module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["assets/css"]
                },
                files: {"assets/css/main.css": "assets/less/main.less"}
            },
            production: {
                options: {
                    paths: ["assets/css"],
                    cleancss: true
                },
                files: {"assets/css/main.css": "assets/less/main.less"}
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less']);
};