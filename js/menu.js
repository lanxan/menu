(function ($) {
    
    function menu( options ){
		var container = this;
		var settings = $.extend(true, {
            topBar : {
                Home : {
                    a : 'index.html',
                },
                Document : {
                    a : 'doc.html',
                },
                About : {
                    a : 'about.html',
                }
            }
        }, options);
	
		var topbarProto = {
			attr : {
				class : 'topBar',
			},
			css : {
				height : '30px',
			}
		}
		
		$.each(settings.topBar, function(i, e){
			$('<li>' + i + '</li>')
			.attr( topbarProto.attr )
			.css( topbarProto.css )
			.appendTo('body');
			//.append('<a href='+e.a+'></a>')
		});
	}
}( jQuery ));
