module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            js: {
                 src: [
            'data/libs/jquery/jquery-2.1.3.min.js',
            'data/libs/waypoints/waypoints.min.js',
            'data/libs/respond/respond.min.js',
            'data/libs/animate/animate-css.js',
            'data/libs/mobile-nav/jquery.mmenu.min.js',
            'data/libs/parallax/parallax.min.js',
            'data/libs/scroll2id/PageScroll2id.min.js',
            'data/libs/jqBootstrapValidation/jqBootstrapValidation.js',
            'data/js/common.js'
                     ],
                 dest: 'data/js/production.js',
                 },
            css: {
                 src: [
            'data/libs/bootstrap/bootstrap-grid.min.css',
            'data/libs/animate/animate.min.css',
            'data/libs/mobile-nav/jquery.mmenu.css',
            'data/libs/mobile-nav/jquery.mmenu.themes.css',
            'data/libs/font-awesome/css/font-awesome.min.css',
            'data/css/main.css',
            'data/css/media.css'
                     ],
                 dest: 'css/main.css',
                 }
            // 2. Настройка для объединения файлов находится тут
        },

        uglify: {
            build: {
                src: 'data/js/production.js',
                dest: 'js/production.min.js'
            }
}

    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat', 'uglify']);

};