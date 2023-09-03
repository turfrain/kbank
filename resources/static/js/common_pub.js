"use strict";
/* =============================== debug.js ========================= */

var TRP = {
    ip: "218.236.25.186"
};

function trpMode($option) {
    document.designMode = $option;
}

/* ready */
/* // =============================== debug.js ========================= */
/* weinre --boundHost 218.236.25.186 --httpPort 7257 */
//setTimeout( function(){ TRP.debug("hasdfai3") }, 1000);;"use strict";
function headerUiController() {
    var _depth1Item, el;
    return function() {
        return el = $(".left-area"), el = el.find(".menu"), el = el.find(".depth1"), 
        _depth1Item = el.find(".menu_d1"), el = el.find(".depth2"), el.find("a"), 
        _depth1Item.off().on("click", function(e) {
            if (e.stopPropagation(), $(this).parent().hasClass("active")) return $(this).next(".depth2").stop().slideUp(200), 
            $(this).parent().removeClass("active"), !1;
            $(this).parent().addClass("active");
        }), this;
    }();
}

function leftAccordionMenu() {
    $(".js-accordion_menu").trpAccordionMenu(".js-acc_btn", ".depth2", "active", function($index) {
        if (!($index < 0 || $(".js-left_area").hasClass("closed"))) // 0 보다 작으면 아무것도 하지 않는다.
        {
            // 최소화 크기 일때 실행 안함
            var _this = ".js-accordion_menu";
            // 활성화되어있으면 전부 닫침.
            if ($(_this).find(">li[data-index = " + $index + "]").hasClass("active")) return $(_this).find(">li").removeClass("active"), 
            $(_this).find(".depth2").slideUp(), !1;
            $(_this).find(">li").removeClass("active"), $(_this).find(">li[data-index = " + $index + "]").addClass("active"), 
            $(_this).find(".depth2").slideUp(), $(_this).find(">li[data-index = " + $index + "]").find(".depth2").slideDown();
        }
    }), $(".js-menu_closed").on("click", function() {
        $(".js-left_area").toggleClass("closed"), $(".con-wrap").toggleClass("closed");
    });
}
/* TabMenu (상단)  */

function tabs() {
    var _tabs = $(".js-topTabs .tab"); // 버튼
    _tabs.find("a").on("click", function($e) {
        $e.preventDefault();
        var $e = $(this).parent().index(), _tabCont = $(this).parent().data("tabcon"), _tabContActive = "." + _tabCont + "." + $(this).parent().data("tabidx");
        //console.log("_tabContActive:  ", _tabContActive)
        // 텝
        _tabs.removeClass("active"), _tabs.eq($e).addClass("active"), 
        // 텝 컨텐츠
        $("." + _tabCont).removeClass("active").hide(), $(_tabContActive).addClass("active").show();
    });
}
/* TabMenu (컨텐츠 안) */

function tab_box() {
    $(".text-box-wrap , .tabmenu-wrap").each(function() {
        var $myTabs = $(this);
        $myTabs.find("ul.tabs li a").on("click", function($e) {
            $e.preventDefault();
            $e = $(this), $e.parent().addClass("active").siblings().removeClass("active"), 
            $e = $e.attr("href");
            return $myTabs.find(".tab-content_tiem").removeClass("active").hide(), 
            //$(activeTab).addClass("active").fadeIn();
            $($e).addClass("active").show(), !1;
        });
    }), $(".text-box-wrap").each(function() {
        var $myTabs = $(this);
        $myTabs.find("ul.tabs li a").on("click", function($e) {
            $e.preventDefault();
            $e = $(this), $e.parent().addClass("active").siblings().removeClass("active"), 
            $myTabs.find(".tab-content_tiem").hide(), $e = $e.attr("href");
            return $($e).fadeIn(), !1;
        });
    });
}
/* === ready === */

$(function() {
    var TRP;
    $("body").hasClass("trp-sample") || ((TRP = window.TRP).IS_DEBUG = !0, TRP.IS_REMOTE = !1, 
    TRP.time = "", TRP.arr = [], TRP.debug = function(msg, $b) {
        $b = $b || "", msg && ($("#trp-debug").length || ($("body").append('<div id="trp-debug" style="position:fixed;bottom:0;left:0;z-index:999999;color:#000;font-size:14px;"></div>'), 
        $("body").addClass("body")), 0 !== TRP.arr.indexOf(msg) && (1 == $b ? TRP.arr.unshift(msg) : TRP.arr.unshift('<span class="trp-toast_message" style="display:inline-block; padding:2px 5px; border:1px solid #999;  background-color:rgba(0,0,0,.1)">' + msg + "</span>")), 
        $("#trp-debug").html(TRP.arr.join("<br>")), "" == TRP.time) && (TRP.time = setInterval(function() {
            1 < TRP.arr.length && (TRP.arr.splice(TRP.arr.length - 2, 1), $("#trp-debug").html(TRP.arr.join("<br>")));
        }, 3e3));
    }, TRP.IS_REMOTE && $("head").append('<script src="http://' + TR.ip + ':7257/target/target-script-min.js#anonymous"><\/script>'), 
    TRP.IS_DEBUG && TRP.debug('<a href="/guide/path.html" style="display:inline-block; background-color:rgba(0,0,0,.6);padding:0.5em;color:red;">Ξ</a>', !0), 
    $(".guide .item-inner pre").show(), 
    /* code 생성 */
    $("samp.js-source").each(function($index) {
        var _codeAll, _codeJs, _codeCss;
        function codeSourceFn($this, $lang, $code) {
            var _codeCover = '<pre data-sample="code" style="display:block"><button class="codelabel-btn">' + $lang + ' 코드</button><code class="' + $lang + '"></code></pre>'; /* 커버 삽입 */
            $($this).parents(".item-inner").append(_codeCover), /* 커버에 코드 삽입 */
            $($this).siblings("pre").find("code." + $lang).append($code).show(), 
            $($this).siblings("pre").find("code").hide();
        }
        _codeJs = (_codeAll = $(this).clone()).find("script").remove(), _codeCss = _codeAll.find("style").remove(), 
        codeSourceFn(this, "html", _codeAll.html()), _codeJs.length && codeSourceFn(this, "js", _codeJs.html()), 
        _codeCss.length && codeSourceFn(this, "css", _codeCss.html());
    }), $("pre").find(".codelabel-btn").on("click", function() {
        $(this).toggleClass("show"), $(this).hasClass("show") ? $(this).siblings("code").show() : $(this).siblings("code").hide();
    }), "undefined" != typeof hljs && ($("code.html").each(function($i) {
        var _str = (_str = $(this).html()).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        $(this).empty(), $(this).append(_str);
    }), hljs.initHighlightingOnLoad(), hljs.configure({
        tabReplace: "    "
    })));
}), $(function() {
    leftAccordionMenu(), // 싸이드 메뉴
    tabs(), tab_box();
});

var vh = .01 * window.innerHeight;

/* ==================================== 초기UI 실행 함수 호출  ==================================== */
function PubFORM() {
    /* ie9 placeholder */
    this.placeholderIe9 = function() {
        $("input, textarea").placeholder({
            customClass: "my-placeholder"
        });
    }, 
    /* input Del set*/
    this.inputDelSet = function() {
        function inputdel_fn($this) {
            var _noneDisable = !$this.prop("disabled");
            "" != $this.val() && _noneDisable ? ($this.siblings("button").css({
                display: "block"
            }), $this.siblings("button").one("click", function() {
                $this.val(""), $this.siblings("button").css({
                    display: "none"
                });
            })) : $this.siblings("button").css({
                display: "none"
            });
        }
        $("body").off("focusout", ".input_del-box input"), $("body").on("focusout", ".input_del-box input", function($e) {
            inputdel_fn($(this));
        }), $("body .input_del-box input").each(function($e) {
            inputdel_fn($(this));
        });
    }, 
    /* select2 set*/
    this.select2Set = function() {
        /* 선택박스 */
        $(".select2Basic").select2({
            minimumResultsForSearch: 1
            /*theme: "basic"*/ / 0
        }), 
        // 팝업 선택박스 index 높이기
        $(".select2Basic_pop").select2({
            dropdownCssClass: "increasedzindexclass_pop",
            minimumResultsForSearch: 1 / 0,
            width: "100%"
        });
    }, 
    /* 스크롤바 overlayScrollbars
  _this.scrollbaroverlaySet = function(){
    $(".js-ol_scrollbarY").overlayScrollbars({ }).overlayScrollbars();
    $(".js-ol_scrollbarX").overlayScrollbars({ }).overlayScrollbars();
  }
   */
    /* 켈린터  */
    this.datepickerSet = function() {
        $(".js-datepicker").datepicker({
            dateFormat: "yy-mm-dd",
            showMonthAfterYear: !0,
            yearSuffix: "년",
            monthNames: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
            monthNamesShort: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
            dayNames: [ "일", "월", "화", "수", "목", "금", "토" ],
            dayNamesShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
            dayNamesMin: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ]
        }), 
        /* 연 달력 */
        $(".js-datepicker-yyyy").datepicker({
            dateFormat: "yy",
            yearRange: "c-100:c",
            changeMonth: !1,
            changeYear: !0,
            showButtonPanel: !1,
            closeText: "Select",
            currentText: "This year",
            onClose: function(dateText, inst) {
                var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
                $(this).val($.datepicker.formatDate("yy", new Date(year, 0, 1)));
            },
            beforeShow: function(input, inst) {
                var tmpyear;
                "" != $(this).val() && (tmpyear = $(this).val(), $(this).datepicker("option", "defaultDate", new Date(tmpyear, 0, 1)));
            }
        }).focus(function() {
            $(".ui-datepicker-month").hide(), $(".ui-datepicker-calendar").hide(), 
            $(".ui-datepicker-current").hide(), $(".ui-datepicker-prev").hide(), 
            $(".ui-datepicker-next").hide(), $("#ui-datepicker-div").position({
                my: "left top",
                at: "left bottom",
                of: $(this)
            });
        }).attr("readonly", !0), 
        /* 월 달력 */
        $(".js-datepicker-yy_mm").monthPicker();
    }, 
    /* 툴팁 */
    this.tooltipSet = function() {
        /* 일반 툴팁 */
        $(".js-tooltip").tooltip({
            position: {
                my: "center bottom-15",
                at: "center top",
                using: function(position, feedback) {
                    $(this).css(position), $("<div>").addClass("arrow").addClass(feedback.vertical).addClass(feedback.horizontal).appendTo(this);
                }
            }
        }), //.tooltip( "open" );
        /* 길설명 툴팁 */
        $(".js-tooltip_sendstate").tooltip({
            position: {
                my: "center bottom-10",
                at: "center top",
                using: function(position, feedback) {
                    $(this).css(position);
                    position = feedback.target.left - position.left + 6;
                    $("<div>").addClass("arrow").addClass(feedback.vertical).addClass(feedback.horizontal).appendTo(this).css({
                        left: position
                    });
                }
            },
            tooltipClass: "tooltip_big",
            items: "img, [data-geo], [title]",
            content: function() {
                var element = $(this), selcet = $(this).attr("data-geo");
                return element.is("[data-geo]") ? ($(".ui-tooltip").css({
                    "max-width": "500px;"
                }), $(selcet).html()) : element.is("[title]") ? element.attr("title") : element.is("img") ? element.attr("alt") : void 0;
            }
        });
    };
}

document.documentElement.style.setProperty("--vh", "".concat(vh, "px")), $(window).on("resize", function() {
    vh = .01 * window.innerHeight, document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
}), $(function() {
    console.log("form.js"), 
    /* ==================================== 초기UI 실행 호출함수 호출  ==================================== */
    window.PubFORM = new PubFORM(), window.PubFORM.placeholderIe9(), window.PubFORM.inputDelSet(), 
    window.PubFORM.select2Set(), 
    //window.PubFORM.scrollbaroverlaySet();
    window.PubFORM.datepickerSet(), window.PubFORM.tooltipSet();
});
//# sourceMappingURL=maps/common_pub.js.map