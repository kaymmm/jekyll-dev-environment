const buildify = require('buildify');
const fs = require('fs-extra');

// build vendor Javascript file
buildify('bower_components')
  .concat([
    'jquery/dist/jquery.min.js',
    // 'Materialize/dist/js/materialize.js',
    // 'animated-header/js/animated-header.js',
    // 'FitText.js/jquery.fittext.js',
    // 'jquery.easing/js/jquery.easing.min.js',
    // 'wow/dist/wow.min.js',
    // 'tether/dist/js/tether.js',
    'bootstrap/dist/js/bootstrap.js',
    // 'jquery.serializeJSON/jquery.serializejson.min.js',
    // 'bootstrap-validator/dist/validator.min.js',
  ])
  .uglify()
  .save('../js/vendor.min.js');

// build vendor css file
buildify('bower_components')
  .concat([
    'bootstrap/dist/css/bootstrap.min.css'
    // 'Materialize/dist/css/materialize.css',
    // 'animate.css/animate.min.css',
    // 'font-awesome/css/font-awesome.min.css',
    // 'font-mfizz/css/font-mfizz.css',
  ])
  .cssmin()
  .save('../css/vendor.min.css');

fs.copy(
  'bower_components/bootstrap/dist/fonts',
  // 'bower_components/Materialize/dist/font',
  'font',
  (err) => {
    if (err) return console.error(err);
    return console.log('copied fonts');
  }
);
