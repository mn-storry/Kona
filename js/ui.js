
$(function(){
    
	var win_h = $(window).outerHeight(),
        header_h = $('#headerWrap').outerHeight(),
        cont_h = win_h - header_h;
        
        cont_pt = $('.content').css('padding-top').replace(/[^-\d\.]/g, ''),
        cont_pb = $('.content').css('padding-bottom').replace(/[^-\d\.]/g, ''),
        layout_h = $('.layout').outerHeight();
        new_h = win_h - header_h - cont_pt - cont_pb;
        
        console.log(win_h, header_h, cont_pt, cont_pb);
        console.log('컨텐츠 :' + cont_h, '레이아웃:'+ layout_h, '적용높이:'  + new_h);
    
    if(layout_h < cont_h){
        $('.layout').outerHeight(new_h);
    }
});
