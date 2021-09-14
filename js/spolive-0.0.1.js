/*메뉴 onoff*/
$("header .menu").click( function() {
    $(".navmu_wrap, .navmu_wrap .menu").removeClass("hidden");
    $("nav li").removeClass("on");
    $(".nvmenu").addClass("on");
});
$(".nvmenu").click( function() {
    $(".navmu_wrap, .navmu_wrap .menu").removeClass("hidden");
    $("nav li").removeClass("on");
    $(".nvmenu").addClass("on");
});

/*메뉴 아코디언 효과*/
$(".navmu_wrap .menu .gnb button").click( function() {
    if($(this).next('ul').css("display") == "none"){
        $(".gnb li ul").slideUp();
        $('.gnb li').removeClass("on");
        $(this).next('ul').slideDown();
        $(this).parent('li').addClass("on");
    } else {
        $(this).next('ul').slideUp();
        $(this).parent('li').removeClass("on");
    }
});

/*로그인 onoff*/
$("header .login").click( function() {
    $(".navmu_wrap, .navmu_wrap .login").removeClass("hidden");
});
$(".navmu_wrap .login .xbtn").click( function() {
    $(".navmu_wrap, .navmu_wrap .login").removeClass("hidden");
});

/*내정보 onoff*/
$("header button.mydata").click( function() {
    $(".navmu_wrap,.navmu_wrap .mydata").removeClass("hidden");
});

/*하단 네비게이션 전체메뉴, 베팅카트, 참여내역, 채팅창 클릭 레이어팝업*/
$("nav .nvmenu").click( function() {
    $(".navmu_wrap>div").addClass("hidden");
    $(".navmu_wrap, .navmu_wrap .menu").removeClass("hidden");
    $("nav li").removeClass("on");
    $(this).toggleClass("on");
});
$("nav .nvbetcart").click( function() {
    $(".navmu_wrap>div").addClass("hidden");
    $(".navmu_wrap,.navmu_wrap .betcart").removeClass("hidden");
    $("nav li").removeClass("on");
    $(this).toggleClass("on");
});
$("nav .nvmylog").click( function() {
    $(".navmu_wrap>div").addClass("hidden");
    $(".navmu_wrap, .navmu_wrap .mylog").removeClass("hidden");
    $("nav li").removeClass("on");
    $(this).toggleClass("on");
});
$("nav .nvchat").click( function() {
    $(".navmu_wrap>div").addClass("hidden");
    $(".navmu_wrap,.navmu_wrap .chat").removeClass("hidden");
    $("nav li").removeClass("on");
    $(this).toggleClass("on");
});

/*x버튼 클릭시*/
$(".navmu_wrap .tit>.xbtn").click( function() {
    $(".navmu_wrap,.navmu_wrap>div").addClass("hidden");
    $("nav li").removeClass("on");
});

/*내정보 x버튼 클릭시*/
$(".mylog .container .xbtn").click( function() {
    $(".mylog").addClass("hidden");
    $("nav li").removeClass("on");
});


/*레이어팝업 x버튼 클릭시 hidden클래스 추가*/
$(".mylog .container>.xbtn, .betcart .container .tit .xbtn,.login .tit .xbtn").click( function() {
    $(".navmu_wrap>div, .navmu_wrap").addClass("hidden");
});

/*베팅카트 X버튼 li 삭제*/
$(".cart_list .xbtn").click( function() {
    $(this).parent().remove();
});
/*베팅카트 베팅아이템*/
$(".betcart .myitem .bbtn").click( function() {
    // socket.emit('GetItemList','BET');
    $('.dim,.betitem').removeClass('hidden');
    $('.dim,.betitem').show();
});
$(".betitem button").click( function() {
    $('.dim,.betitem').hide();
});

/*베팅카트 베팅아이템*/
$("button.inventory").click( function() {
    $('.dim,.betitem').show();
});
$(".betitem button").click( function() {
    $('.dim,.betitem').hide();
});

/*참여내역 더보기 onoff*/
$(".mylog .container .result_wrap .tit .right button").click( function() {
    $(this).parents('.bet_log').toggleClass('on');
});

/*참여내역 조회기간버튼 효과*/
$(".period button").click( function() {
    $('.period button').removeClass('on');
    $(this).addClass('on');
});

/*스포츠게임 더보기게임 tab*/
$(".list>.topcate li").click( function() {
    $('.list>.topcate li').removeClass('on');
    $(this).addClass('on');
});

/*베팅카트 전체보기 onoff*/
$(".betcart .more_btn").click( function() {
    $('.betcart .more_btn').toggleClass('pro');
    $('.betcart .cart_list.bet_list').toggleClass('hidden');
});



$('.question .list-i-subtxt').click(function() {
    $(".question .qpopup.txt").toggleClass('hidden');
    event.stopPropagation();
});

// $('.betcart .myitem .bbtn').click(function() {
//     $(".betitem").show();
// });

/*물음표 토글*/
$('html').click(function(e) {
    if(!$('.question .qpopup.txt').hasClass("hidden")) {
        $(".question .qpopup.txt").addClass('hidden');
    }

});


/*탭메뉴*/
$(function(){
    $(".tab>ul>li,.mylog_tab>ul>li .change_btn").click(function(){
        $(".tab ul li,.mylog_tab>ul>li .change_btn").removeClass('on');
        $(".tab .conBox,.mylog_tab .conBox").removeClass('on');
        $(this).addClass('on');
        $("#"+$(this).data('id')).addClass('on');
    });
});

/*채팅창 확성기 onoff*/
$(".chat .speaker").on('click', function() {
    $(".chat .speaker").toggleClass('on');

    if($(".chat .speaker").hasClass('on')){
        $('.chat input, .chat_btm button').addClass('spk');
        $('.chat_btm button').text('확성기');
        $('.chat_btm').css({"background":"#194a6b"});
    }else{
        $('.chat input, .chat_btm button').removeClass('spk');
        $('.chat_btm button').text('전송');
        $('.chat_btm').css({"background":"none"});
    }
    $('.chat input').focus();
});



/*랭킹 탭메뉴*/
$(function(){
    $(".rankmenu li").click(function(){
        $(".rankmenu li").removeClass('on');
        $(".ranking_container>div").removeClass('on');
        $(this).addClass('on');
        $("#"+$(this).data('id')).addClass('on');
    });
});

/*골드마켓 탭메뉴*/
$(function(){
    $(".mk_content .submenu li").click(function(){
        $(".mk_content .submenu li").removeClass('on');
        $(".mk_content .conBox").removeClass('on');
        $(this).addClass('on');
        $("#"+$(this).data('id')).addClass('on');
    });
});

$('#item_1590405711 .bottom .btn, #item_1590405549 .bottom .btn,#vip_buy_pop .xbtn').click(function(e) {
    $("#vip_buy_pop").toggleClass('hidden');
});
$('#vip_buy_pop .xbtn').click(function() {
    $('#vip_buy_pop').toggleClass('hidden');
});


$('#itemmk .card_list .card, #item_popup_megaphone .xbtn').click(function() {
    $('#item_popup_megaphone').toggleClass('hidden');
});




/*라이브게임 세부페이지 탭*/
$(function(){
    $(".livegame_wrap .topcate li").click(function(){
        $(".livegame_wrap .topcate li").removeClass('on');
        $(".livegame_wrap .conBox").removeClass('on');
        $(this).addClass('on');
        $("#"+$(this).data('id')).addClass('on');
    });

    $(".dim").click(function() {
        $(".dim").removeClass('on').addClass('hidden');
        $('.betitem').addClass('hidden');
    });
});

/*라이브게임 onoff*/
$(".live_list>.tit").click( function() {
    $(this).parent('div').toggleClass('off');
});

/*라이브게임 onoff*/
$(".buy_popup .container .xbtn").click( function() {
    $('.buy_popup').toggleClass('hidden');
});

/*이벤트 상단버튼 onoff*/
$(".container .event_box .sub_box button").click( function() {
    $(".container .event_box .sub_box button").removeClass('on');
    $(this).addClass('on');
});

/*채팅 설정 onoff*/
$(".navmu_wrap .chat>.tit .chatset").click( function() {
    $(".navmu_wrap .chat>.tit>div").toggleClass('hidden');
});

/*채팅 설정 버튼 onoff*/
$(".navmu_wrap .chat>.tit div button").click( function() {
    $(this).toggleClass('on');
});

$(".chat .chat_btm input").mouseover(function() {
    $('.chat_btm button').addClass('on').removeClass('off');
});
$(".chat .chat_btm input").mouseleave(function() {
    $('.chat_btm button').addClass('off').removeClass('on');
});



/*sly*/
jQuery(function($){
    'use strict';
    (function () {
        var $frame  = $('#toplivegame');
        var $wrap   = $frame.parent();

        $frame.sly({
            horizontal: 1,
            itemNav: 'basic',
            smart: 1,
            activateOn: 'click',
            mouseDragging: 1,
            touchDragging: 1,
            startAt: 0,
            scrollBy: 1,
            activatePageOn: 'click',
            speed: 300,
            elasticBounds: 1,
            easing: 'easeOutExpo',
            prevPage: $wrap.find('.prev'),
            nextPage: $wrap.find('.next')
        });
    }());
});
jQuery(function($){
    'use strict';
    (function () {
        var $frame  = $('#basic');
        var $wrap   = $frame.parent();

        $frame.sly({
            horizontal: 1,
            itemNav: 'basic',
            smart: 1,
            activateOn: 'click',
            mouseDragging: 1,
            touchDragging: 1,
            startAt: 0,
            scrollBy: 1,
            activatePageOn: 'click',
            speed: 300,
            elasticBounds: 1,
            easing: 'easeOutExpo',
            prevPage: $wrap.find('.prev'),
            nextPage: $wrap.find('.next')
        });
    }());
});
