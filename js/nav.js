$('#nav > li').hover(
    function(){
        var current_li=$(this),
            targ=$(current_li).find('ul:first');
        if(!$(targ).is(':visible')){
            $(targ).slideDown(200);
        }
    },
    function(){
        $(this).find('ul').hide();
    }
);