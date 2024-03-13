"use strict";

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

function sum1(a, b) {
    return a + b;
}

function multiply(a, ccc) {
    return a + ccc;
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
}), console.log(">>>>>>>>>>>>> :: 40"), console.log(">>>>>>>>>>>>> :: " + sum1(10, 30)), 
console.log(">>>>>>>>>>>>> :: " + multiply(10, 30));
//# sourceMappingURL=maps/common_pub.js.map