(function ($) {
    
    $.fn.menu = function( options ){
		var container = this;

		var defaults = {
            topBar : {
                Home : {
                    a : 'index.html'
                },
                Document : {
                    a : 'doc.html'
                },
                About : {
                    a : 'about.html'
                }
            }
		}
		var settings = $.extend({}, defaults, options);

		console.log(settings);	
		var topBarProto = {
			attr : {
				class : 'topBar'
			},
			css : {
				height : '20px',
				width  : '100px',
				padding: '5px 3px 0px',
				margin : '1px',
				border : '2px solid',
				textAlign: 'left'
			}
		}
		
		$.each(settings.topBar, function(i, e){
			$('<ul />')
			.attr( topBarProto.attr )
			.css( topBarProto.css )
			.append('<a href='+e.a+'>' + i +'</a>')
			.appendTo(container);
		});
	}
}( jQuery ));
