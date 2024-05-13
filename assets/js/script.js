// リサイズ時と読み込み時にメニューのスタイルを解除
$(window).on('load resize', function () {
    var w = $(window).width();
    var x = 768;
    if (w < x) {
        $("#nav li").css('display', '');
        $("#nav").removeClass('open');
    } else {
        $("#nav li").css('display', '');
        $("#nav").removeClass('open');
    }
});

//ページ内リンクのスムーススクロール
$(window).load(function () {
    //$(document).ready(function(){
    // var urlHash = location.hash; //URLのハッシュ値を取得 
    // if (urlHash) { //ハッシュ値があればページ内スクロール
    //     $('body,html').stop().scrollTop(0); //スクロールを0に戻す
    //     setTimeout(function () { //ロード時の処理を待ち、時間差でスクロール実行
    //         scrollToAnker(urlHash);
    //     }, 100);
    // }
    // $('a[href^="#"]').click(function () { //通常のクリック時
    //     var href = $(this).attr("href"); //ページ内リンク先を取得
    //     var hash = href == "#" || href == "" ? 'html' : href; //リンク先が#か空だったらhtmlに    
    //     scrollToAnker(hash); //スクロール実行
    //     return false;
    // });

    // function scrollToAnker(hash) {
    //     var target = $(hash);
    //     var position = target.offset().top;
    //     $('body,html').stop().animate({
    //         scrollTop: position
    //     }, 500); // 指定したアンカーへアニメーションでスクロール
    // }
})

//SPメニュー
/*
var w = $(window).width();
var x = 768;
var navlink = $('#nav .menu-item-has-children > a');
var megamenu = $('#nav .submenu-wrap');
var spnav = $('#nav ');
var sptoggle = $('#toggle');

jQuery(function($){	
if (w < x) {//画面サイズが768px未満のときの処理
$(navlink).on('click', function() {
$( this ).next().slideToggle();
return false;
});
} else {//それ以外のときの処理
$(navlink).click(function(){
});
}
//クリックされるたびに呼ばれる
$(sptoggle).on("click", function() {
var windowWidth = window.innerWidth;
if (windowWidth <= 767) {
$( spnav ).slideToggle();
return false;
} else {
}
});
});
*/


//SPメニュー
var w = $(window).width();
var x = 768;
var navlink = $('#nav .has_children > a');
var spnav = $('#nav ');
var sptoggle = $('#toggle');
var spclose = $('.toggle a');
var spparent = $('#nav .has_children > a');

$(function ($) {
    if (w < x) { //画面サイズが768px未満のときの処理
        //$('.menu-header_menu-container').prepend('');
        $(navlink).on('click', function () {
            $(this).next().slideToggle();
            $(this).parent().toggleClass('activelink');
            return false;
        });
        $(spparent).on('click', function () {
            return false;
        });
    } else { //それ以外のときの処理
        $(navlink).click(function () { });
    }
    //クリックされるたびに呼ばれる
    $(sptoggle).on("click", function () {
        var windowWidth = window.innerWidth;
        if (windowWidth <= 767) {
            $(spnav).toggleClass('open');
            return false;
        } else { }
    });
    // $('#nav').on("click", spclose, function () {
    $(spclose).on("click", function () {
        var windowWidth = window.innerWidth;
        if (windowWidth <= 767) {
            $(spnav).toggleClass('open');
            $(".sub-menu").css('display', '');
            //return false;
        } else { }
    });

});


//　クリックで画像入れ替え
var i = 1;
$(function () {
    $("img,input[type='image']").click(function () {
        if (i == 1) {
            $(this).attr("src", $(this).attr("src").replace("_mouseout.", "_mouseover."));
            i = 2;
        } else if (i == 2) {
            $(this).attr("src", $(this).attr("src").replace("_mouseover.", "_mouseout."));
            i = 1;
        }
    });
});

//ユーザーエージェント判定
var userAgent = window.navigator.userAgent.toLowerCase();
if (userAgent.indexOf('ipad') != -1) {
    $('body').addClass('ipad');
} else if (userAgent.indexOf('iphone') != -1) {
    $('body').addClass('ios');
}

//タブレット対応
if (window.TouchEvent) {
    $(function () {
        $('#menu-header-nav > li > .sub-menu > li > a').on('click touchend', function () {
            $(this.parentNode.parentNode.parentNode).addClass('display');
        });
        $('#menu-header-nav > li > .submenu-wrap .sub-menu > li > a').on('click touchend', function () {
            $(this.parentNode.parentNode.parentNode.parentNode.parentNode).addClass('display');
        });
        $('#menu-header-nav > li ').on('click touchend', function () {
            if ($('#menu-header-nav > li').hasClass("display")) {
                $('#menu-header-nav > li').removeClass("display");
            } else { }
        });
    });

} else {

}

//breakPoint以上でnavが追尾する
$(window).on('load', function () {
    var $nav = $('#nav');
    var $body = $('body');
    var navFixed = false; //fixしてたらtrue
    var breakPoint = 768;
    var isSp = false; //ブレークポイント以下ならtrue
    var nav = {
        offset: $nav.offset().top,
        height: $nav.outerHeight()
    };
    var timer = 0;
    var winWidth, scrollTop;

    checkBp();

    $(window).on({
        'scroll': onScrollFixNav,
        'resize': onResize
    });

    function checkBp() {
        winWidth = window.innerWidth;
        if (winWidth < breakPoint) {
            isSp = true;
        } else {
            isSp = false;
        }
    }

    function onScrollFixNav() {
        if (isSp) {
            return;
        }
        scrollTop = $(window).scrollTop();
        if (scrollTop > nav.offset) {
            setFix();
        } else {
            resetFix();
        }
    }

    function onResize() {
        if (timer > 0) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            resetFix();
            checkBp();
            if (isSp) {
                return;
            } else {
                updateNavState();
            }
        }, 200);
    }

    function updateNavState() {
        nav.offset = $nav.offset().top;
        nav.height = $nav.outerHeight();
    }

    function setFix() {
        if (navFixed) {
            return;
        }
        $nav.addClass('js-fixed');
        $body.css('padding-top', nav.height);
        navFixed = true;
    }

    function resetFix() {
        if (!navFixed) {
            return;
        }
        $nav.removeClass('js-fixed');
        $body.css('padding-top', 0);
        navFixed = false;
    }
});

$(function () {
    var nav = $('.sp_header_btn');
    var offset = nav.offset();
    $(window).scroll(function () {
        if ( $(window).width() > 768 ) {
            if ($(window).scrollTop() > 200) {
                // nav.addClass('fixed');
                if (!$('.header-wrapper').hasClass('scrolled')) {
                    $('.header-wrapper').addClass('scrolled');
                }
            } else {
                // nav.removeClass('fixed');
                if ($('.header-wrapper').hasClass('scrolled')) {
                    $('.header-wrapper').removeClass('scrolled');
                }
            }
        } else {
            if ($(window).scrollTop() > 100) {
                if (!$('.header-wrapper').hasClass('sp-scrolled')) {
                    $('.header-wrapper').addClass('sp-scrolled');
                }
            } else {
                if ($('.header-wrapper').hasClass('sp-scrolled')) {
                    $('.header-wrapper').removeClass('sp-scrolled');
                }
            }
        }
    });

    $('.to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 'slow');
    })
});

// QA
$('.qa-block').click(function () {
    $(this).toggleClass('open');
    $(this).children('.answer').slideToggle();
});



// ScrollHint
new ScrollHint('.js-scrollable', {
    suggestiveShadow: true, //ボックスの右に影をつけてスクロールできることを示す
    i18n: {
        scrollable: 'スクロールできます' //案内テキスト表示
    }
});

new ScrollHint('.js-scrollable_pc', { //  PCもスクロールさせたい時
    suggestiveShadow: true, //ボックスの右に影をつけてスクロールできることを示す
    i18n: {
        scrollable: 'スクロールできます' //案内テキスト表示
    }
});