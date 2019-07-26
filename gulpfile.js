var gulp = require("gulp");
var less = require("gulp-less");
var browserSync = require("browser-sync").create();
var header = require("gulp-header");
var cleanCSS = require("gulp-clean-css");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var pkg = require("./package.json");

console.log("test");

// Set the banner content
var banner = [
  "/*!\n",
  " * Start Bootstrap - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n",
  " * Copyright 2013-" + new Date().getFullYear(),
  " <%= pkg.author %>\n",
  " * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n",
  " */\n",
  ""
].join("");

// Run everything
gulp.task("default");

// Configure the browserSync task
gulp.task("browserSync", function() {
  browserSync.init({
    server: {
      baseDir: ""
    }
  });
});

// Dev task with browserSync
gulp.task("dev", ["browserSync", "js"], function() {
  gulp.watch("js/*.js", ["js"]);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch("pages/*.html", browserSync.reload);
});
