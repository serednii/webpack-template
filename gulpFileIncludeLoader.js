const fileInclude = require('gulp-file-include');

module.exports = function (content) {
    return fileInclude({
        basepath: __dirname,
        context: {
            environment: process.env.NODE_ENV
        }
    });
};