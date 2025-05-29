 //.mainMenu 마우스오버시 header의 높이가 316px 마우스 아웃시 header 높이 80px
 $(function () {           
    $('button').click(function(){ //이름이 없는 익명 함수
        $('aside').toggleClass('open');
        if($('aside').hasClass('open')) {
            $('aside').stop().animate({right:0},500,'easeInQuad');
            $('button').find('img').attr({'src':'./img/aside-img/btn_close.png', 'alt':'close'});
        } else {
            $('aside').stop().animate({right:'-220px'},500,'easeOutQuad');
            $('button').find('img').attr({'src':'./img/aside-img/btn_open.png', 'alt':'open'});
        }
    });
});