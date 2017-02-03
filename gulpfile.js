/**
 * Created by V on 2017/1/21.
 */
var gulp = require("gulp")
var sass = require("gulp-ruby-sass")
var tinylr = require("tiny-lr"),
     server = tinylr()
     port = 35729;
gulp.task("sass",function(){
    return sass("./scss/index.scss")
        .on("error",function(err){
            console.log("error")
        })
        .pipe(gulp.dest("./css/"))
})
gulp.task("watch",function(){
    server.listen(port,function(){
        gulp.watch("./scss/index.scss",function() {
            gulp.run("sass")
        })
    })
})