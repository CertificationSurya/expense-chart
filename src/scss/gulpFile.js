import pkg from 'gulp';
const { src, dest, watch, series} = pkg;

import arg from 'sass'
// gulp-sass returns function which requires arguement from sass
import func from 'gulp-sass';

const sass = func(arg)

const buildStyle = () => {
  return src('./index.scss')
    // compile
    .pipe(sass())
    .pipe(dest('../css'));
};

const watchTask = () =>{
    watch(['index.scss'], buildStyle)
}

export default series(buildStyle, watchTask)