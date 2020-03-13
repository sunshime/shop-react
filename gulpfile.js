var gulp = require ( 'gulp' ) ,
	    less = require ( 'gulp-less' ) ,
	    autoprefixer = require ( 'gulp-autoprefixer' );
	
	gulp.task ( 'testLess' , function () {
	    gulp.src ( './src/common/style/*.less' )
	        .pipe ( less () )
	        .pipe ( autoprefixer ( {
	            overrideBrowserslist: [ 'last 2 versions' , 'Android >= 4.0' ] ,
	            cascade : true , //是否美化属性值 默认：true 像这样：
	            //-webkit-transform: rotate(45deg);
	            // transform: rotate(45deg);
	            remove : true //是否去掉不必要的前缀 默认：true
	        } ) ).pipe ( gulp.dest ( './src/common/style' ) );
	} );
	
	
	gulp.task ( 'watch' , function () {
	    gulp.watch ( './src/common/style/*.less' , [ 'testLess' ] );
	} );
	
	
	gulp.task ( 'testAutoFx' , function () {
	    gulp.src ( './src/common/style/*.css' ).pipe ( autoprefixer ( {
	        overrideBrowserslist: [ 'last 2 versions' , 'Android >= 4.0' ] ,
	        cascade : true , //是否美化属性值 默认：true 像这样：
	        //-webkit-transform: rotate(45deg);
	        // transform: rotate(45deg);
	        remove : true //是否去掉不必要的前缀 默认：true
	    } ) ).pipe ( gulp.dest ( './src/common/style' ) );
	} );