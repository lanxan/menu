(function ($) {
    
    $.fn.menu = function( options ){
        var settings = $.extends(true, {
            topBar : [
                Home : [
                    link : 'index.html',
                ],
                Document : [
                    link : 'doc.html'
                ],
                About : [
                    link : 'about.html';
                ]
            ]
        }, options);

        return this;
    };
        
}( jQuery ));
