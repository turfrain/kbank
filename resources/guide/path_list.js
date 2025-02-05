var __GUIDE_LIST, __SITENAME,  __CONSTANT_HEAD, __CONSTANT_RULE, __CONSTANT_LSIT;

__SITENAME = { siteName : "Kbank_admin"};
/**
 * 보여줄 칼럼에는 1, 보여주지 않을 칼럼에는 0
 */
__CONSTANT_HEAD = {
    no : 1,  		// NO
    dep1 : 1,		// depth-1
    dep2 : 1,		// depth-2
    dep3 : 1,		// depth-3
    dep4 : 0,		// depth-4
    dep5 : 0,		// depth-5
    url : 1,		// File path
    role : 0,		// 담당자
    stateHTML : 0,	// HTML
    stateJS : 0,	// javascript
    state : 0,		// 완료상태
    pubUpdate  : 1,	// 퍼블수정 날짜
    devUpdate  : 0,	// 개발수정 날짜
    check      : 0,	// 옵션
    etc : 1			// 기타 메모
};


/***
 * 아래 리스트 추가
 * 지원 key 값
 *  각 뎁스에 해당하는 key값으로 입력
 */
__CONSTANT_LIST = [
/**
    * example
    {
        stateLine : "",              // 상태 클래스 (이상무 : "" ,  진행 : "ing" ,  수정 : "edit", 삭제 : "del")
        dep1 : '1뎁스 메뉴 이름',     // option ( 1뎁스 입력시 구분선 )
        dep2 : '2뎁스 메뉴 이름',     // option
        dep3 : '3뎁스 메뉴 이름',     // option
        dep4 : '4뎁스 메뉴 이름',     // option
        dep5 : '5뎁스 메뉴 이름',     // option
        url :  '/resources/templates/main.html'	//파일URL
        role : '홍길동',             // 담당자
        stateHTML : 1,              // 1을 넣으면 상태에 '완료' 라는 문구 출력, //option
        stateJS : 1,                // 1을 넣으면 상태에 '완료' 라는 문구 출력, //option
        state   : 1,                // 1을 넣으면 상태에 '완료' 라는 문구 출력, //option
        pubUpdate : 2023-0000,		// 마지막날 배경색표기
        devUpdate : 2023-0000,		// 
        option : '디자인변경예정',       // 비고 란에 출력
        etc    : '디자인변경예정',       // 비고 란에 출력
    }
*/
	
    // Guide
    {
        stateLine   : "", 
        dep1 	  	: 'download',
        dep2 	  	: '',
        dep3 	  	: '',
        url  	  	: '/kbank[2023-0920].zip',
        pubUpdate 	: '2023-0000',
        etc 	  	: '',
    },
    {
        stateLine   : "edit", 
        dep1 	  	: 'GUIDE',
        dep2 	  	: 'STYLE',
        dep3 	  	: '',
        url  	  	: '/resources/guide/guide_style.html',
        pubUpdate 	: '2023-0000',
        etc 	  	: '',
    },
/*     {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: 'GRID&align',
        url 		: '/resources/guide/guide_grid-align.html',
        pubUpdate 	: '2023-0000',
        etc 		: '',
    },  */
    {
        stateLine   : "edit", 
        dep1 		: '',
        dep2 		: 'UI',
        dep3 		: '',
        url 		: '/resources/guide/guide_ui.html',
        pubUpdate 	: '2023-0000',
        etc 		: '',
    }, 

    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'ICONS GUIDE',
        dep3 		: 'SPRITE IMAGES',
        url 		: '/resources/guide/guide_icons.html',
        pubUpdate 	: '2023-0000',
        etc 		: '',
    },
/*     {
        stateLine   : "ing", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: 'icon fonts',
        url 		: '/resources/guide/guide_iconfonts.html',
        pubUpdate 	: '2023-0000',
        etc 		: '',
    },
    {
        stateLine   : "del", 
        dep1 		: '',
        dep2 		: '',
        dep3 		: 'jQuery UI icon',
        url 		: '/resources/guide/guide_jqueryUI_icons.html',
        pubUpdate 	: '2023-0000',
        etc 		: '',
    }, */
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'LAYOUT',
        dep3 		: '',
        url 		: '/resources/templates/sub/sub.html',
        pubUpdate 	: '2023-0000',
        etc 		: '',
    },
/* 	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'LAYOUT',
        dep3 		: 'tost_grid',
        url 		: '/resources/templates/sub/sample_tost_grid.html',
        pubUpdate 	: '2023-0000',
        etc 		: '',
    }, */
	/* {
        stateLine   : "", 
        dep1 		: 'etc',
        dep2 		: 'page_error',
        dep3 		: '',
        url 		: '/resources/templates/etc/page_error.html',
        pubUpdate 	: '2023-0000',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'page_loading',
        dep3 		: '',
        url 		: '/resources/templates/etc/page_loading.html',
        pubUpdate 	: '2023-0000',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'dm',
        dep3 		: '',
        url 		: '/resources/templates/dm/dm.html',
        pubUpdate 	: '2023-0000',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '메인/공통',
        dep2 		: '',
        dep3 		: '메인',
        url 		: '/resources/templates/main.html',
        pubUpdate 	: '2023-0000',
        etc 		: '',
    },
 */







    {
        stateLine   : "", 
        dep1 		: 'etc',
        dep2 		: 'login',
        dep3 		: 'UI-IIS-N-001',
        url 		: '/resources/templates/etc/login.html',
        pubUpdate 	: '2023-0908',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '안내',
        dep3 		: 'UI-IIS-N-032',
        url 		: '/resources/templates/etc/alert.html',
        pubUpdate 	: '2023-0908',
        etc 		: '',
    },


    {
        stateLine   : "", 
        dep1 		: '대시보드 ',
        dep2 		: '관리자 대시 보드',
        dep3 		: 'UI-IIS-N-002',
        url 		: '/resources/templates/dshoard/admin-dshoard.html',
        pubUpdate 	: '2023-0908',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '사용자 대시보드 ',
        dep3 		: 'UI-IIS-N-003',
        url 		: '/resources/templates/dshoard/user_dsboard.html',
        pubUpdate 	: '2023-0908',
        etc 		: '',
    },
    







 



    {
        stateLine   : "", 
        dep1 		: 'IIS 응답 거래',
        dep2 		: '전문 포맷 관리',
        dep3 		: 'UI-IIS-N-004',
        url 		: '/resources/templates/transaction/cmm-sub.html',
        pubUpdate 	: '2023-0908',
        etc 		: '(tost_grid)',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'IIS 응답 거래 정보 목록',
        dep3 		: 'UI-IIS-N-005',
        url 		: '/resources/templates/transaction/oroc_list.html',
        pubUpdate 	: '2023-0908',
        etc 		: '(list_table)',
    },
    


	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'IIS 응답 거래 정보 등록',
        dep3 		: 'UI-IIS-N-006',
        url 		: '/resources/templates/transaction/oroc_tx_info.html',
        pubUpdate 	: '2023-0908',
        etc 		: '(tost_grid)',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '[popup]확인',
        dep3 		: 'UI-IIS-N-006',
        url 		: '/resources/templates/transaction/oroc_tx_info_pop.html',
        pubUpdate 	: '2023-0908',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '[popup] IIS 응답 거래 시뮬레이션 정보 내보내기, IIS 발신 거래 시뮬레이션 정보 내보내기',
        dep3 		: 'UI-IIS-P-001, UI-IIS-P-004',
        url 		: '/resources/templates/transaction/oroc_info_export_pop.html',
        pubUpdate 	: '2023-0908',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '[popup] IIS 응답 거래 시뮬레이션 정보 가져오기, IIS 발신 거래 정보 가져오기',
        dep3 		: 'UI-IIS-P-002, UI-IIS-P-005',
        url 		: '/resources/templates/transaction/oroc_info_import_pop.html',
        pubUpdate 	: '2023-0908',
        etc 		: '',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'IIS 응답 거래 로그 조회',
        dep3 		: 'UI-IIS-N-007',
        url 		: '/resources/templates/transaction/log_list.html',
        pubUpdate 	: '2023-0908',
        etc 		: '(list-table)',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '[popup]IIS 로그 상세 조회',
        dep3 		: 'UI-IIS-P-003',
        url 		: '/resources/templates/transaction/log_view-pop.html',
        pubUpdate 	: '2023-0908',
        etc 		: '(tost_grid)',
    },
    {
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '[winpopup]IIS 로그 상세 조회',
        dep3 		: 'UI-IIS-P-003',
        url 		: '/resources/templates/transaction/log_view.html',
        pubUpdate 	: '2023-0919',
        etc 		: '(tost_grid)',
    },



    {
        stateLine   : "", 
        dep1 		: 'IIS 발신 거래',
        dep2 		: 'IIS 발신 거래 정보 조회',
        dep3 		: 'UI-IIS-N-008',
        url 		: '/resources/templates/transaction/otoc_tx_info.html',
        pubUpdate 	: '2023-0908',
        etc 		: '(list-table)',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'IIS 발신 거래 정보 등록 화면 (tab1_수신시스템 선택)',
        dep3 		: 'UI-IIS-N-009',
        url 		: '/resources/templates/transaction/otoc_info_rgst.html',
        pubUpdate 	: '2023-0908',
        etc 		: '(tost_grid)',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'IIS 발신 거래 테스트 화면 (tab2_주소입력)',
        dep3 		: 'UI-IIS-N-010',
        url 		: '/resources/templates/transaction/etc_info_rgst.html',
        pubUpdate 	: '2023-0908',
        etc 		: '(tost_grid)',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '[popup]IIS 발신 거래 다량테스트 등록 화면',
        dep3 		: 'UI-IIS-P-006',
        url 		: '/resources/templates/transaction/otoc_info_bulk_import_pop.html',
        pubUpdate 	: '2023-0908',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'IIS 발신 거래 로그 조회(tab1_수신시스템 선택)',
        dep3 		: 'UI-IIS-N-011',
        url 		: '/resources/templates/transaction/otoc_log_list.html',
        pubUpdate 	: '2023-0908',
        etc 		: '(list-table)',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'IIS 발신 거래 로그 조회(tab2_주소입력)',
        dep3 		: 'UI-IIS-N-012',
        url 		: '/resources/templates/transaction/etc_log_list.html',
        pubUpdate 	: '2023-0908',
        etc 		: '(list-table)',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '대량 거래 테스트 조회',
        dep3 		: 'UI-IIS-N-013',
        url 		: '/resources/templates/transaction/bulk-test.html',
        pubUpdate 	: '2023-0908',
        etc 		: '(list-table)',
    },

    /* ======================= ing ==================================== */    
	{
        stateLine   : "", 
        dep1 		: '게시판',
        dep2 		: '공지사항(게시판) 목록 화면',
        dep3 		: 'UI-IIS-N-014',
        url 		: '/resources/templates/notice_board/notice_list.html',
        pubUpdate 	: '2023-0908',
        etc 		: '(list-table)',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '공지사항(게시판) 조회 화면',
        dep3 		: 'UI-IIS-N-015',
        url 		: '/resources/templates/notice_board/notice_view.html',
        pubUpdate 	: '2023-0908',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '공지사항(게시판) 등록 화면',
        dep3 		: 'UI-IIS-N-016',
        url 		: '/resources/templates/notice_board/notice_rgst.html',
        pubUpdate 	: '2023-0908',
        etc 		: '',
    },

    
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '자료실(게시판) 목록 화면',
        dep3 		: 'UI-IIS-N-020',
        url 		: '/resources/templates/notice_board/pds_list.html',
        pubUpdate 	: '2023-0908',
        etc 		: '(list-table)',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '자료실(게시판) 조회 화면',
        dep3 		: 'UI-IIS-N-021',
        url 		: '/resources/templates/notice_board/pds_view.html',
        pubUpdate 	: '2023-0908',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '자료실(게시판) 등록 화면',
        dep3 		: 'UI-IIS-N-022',
        url 		: '/resources/templates/notice_board/pds_rgst.html',
        pubUpdate 	: '2023-0908',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'FAQ-목록화면',
        dep3 		: 'UI-IIS-N-032',
        url 		: '/resources/templates/notice_board/faq_list.html',
        pubUpdate 	: '2023-0908',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'FAQ-조회화면',
        dep3 		: 'UI-IIS-N-033',
        url 		: '/resources/templates/notice_board/faq_view.html',
        pubUpdate 	: '2023-0908',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'FAQ-등록화면',
        dep3 		: 'UI-IIS-N-034',
        url 		: '/resources/templates/notice_board/faq_rgst.html',
        pubUpdate 	: '2023-0908',
        etc 		: '',
    },




    
    /* ======================= 시스템 ==================================== */
	{
        stateLine   : "", 
        dep1 		: '시스템 관리',
        dep2 		: '수신 시스템 정보',
        dep3 		: 'UI-IIS-N-023',
        url 		: '/resources/templates/system/rcv_sys_info.html',
        pubUpdate 	: '2023-0908',
        etc 		: '(list-table)',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '[popup]수신 시스템 정보 등록',
        dep3 		: 'UI-IIS-P-007',
        url 		: '/resources/templates/system/rcv_sys_info_pop.html',
        pubUpdate 	: '2023-0908',
        etc 		: '',
    },

	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: 'IIS 서버 정보',
        dep3 		: 'UI-IIS-N-024',
        url 		: '/resources/templates/system/iis_srv_info.html',
        pubUpdate 	: '2023-0908',
        etc 		: '(list-table)',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '[popup]서버 정보 등록 팝업',
        dep3 		: 'UI-IIS-P-008',
        url 		: '/resources/templates/system/srv_rgst_pop.html',
        pubUpdate 	: '2023-0908',
        etc 		: '',
    },

	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '함수 지원 현황',
        dep3 		: 'UI-IIS-N-025',
        url 		: '/resources/templates/system/iis_func_info.html',
        pubUpdate 	: '2023-0908',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '배치 관리 - (tab1 배치 현황)',
        dep3 		: 'UI-IIS-N-026',
        url 		: '/resources/templates/system/batch_manager.html',
        pubUpdate 	: '2023-0908',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '배치 관리 - (tab1 배치 현황 / CRON & SIMPLE) ',
        dep3 		: 'UI-IIS-N-027',
        url 		: '/resources/templates/system/iis_batch_modify.html',
        pubUpdate 	: '2023-0908',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '배치 관리 - (tab2 실행이력)',
        dep3 		: 'UI-IIS-N-028',
        url 		: '/resources/templates/system/batch_extn_list.html',
        pubUpdate 	: '2023-0908',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '사용자 - (tab1 사용자 현황)',
        dep3 		: 'UI-IIS-N-029',
        url 		: '/resources/templates/system/iis_user.html',
        pubUpdate 	: '2023-0908',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '사용자 - (tab1 사용자 현황 - 사용자 정보 수정)',
        dep3 		: 'UI-IIS-N-030',
        url 		: '/resources/templates/system/iis_user_auth.html',
        pubUpdate 	: '2023-0908',
        etc 		: '',
    },
	{
        stateLine   : "", 
        dep1 		: '',
        dep2 		: '사용자 - (tab2 로그인 이력)',
        dep3 		: 'UI-IIS-N-031',
        url 		: '/resources/templates/system/iis_loin_hist.html',
        pubUpdate 	: '2023-0908',
        etc 		: '',
    },





];


__CONSTANT_RULE = { getIndex: function () { var _idx = ++window['INDEX'] || (window['INDEX'] = 0); return _idx + 1; }, li_option: function ($item) { var _return = ""; /*topLine*/ if ($item.dep1) { _return += ' t-divide'; }; /*compareUpdate*/ if ($item.pubUp && $item.devUp) { if ($item.pubUp > $item.devUp) { _return += ' is-different'; } }; /*isDone*/ if ($item.stateHTML && $item.stateJS) { if ($item.stateHTML && $item.stateJS) { _return += ' is-done'; } }; /* 상태라인 */ if ($item.stateLine) { if ($item.stateLine == "ing") { _return += ' state_ing'; } if ($item.stateLine == "edit") { _return += ' state_edit'; } if ($item.stateLine == "del") { _return += ' state_del'; } }; return _return; }, path: function () { return '..' + this.url; }, getfileName: function ($item) { var aURL = $item.url.split('/'); return aURL[aURL.length - 1]; }, };


var _data = { _temp_dep1: "" }; Vue.component('search-component', { props: ['listItem', 'dep1SearchIndex'], data: function () { return _data }, template: '<cite style="position:absolute; font-size:0; line-height:0">{{ listItem.dep1? _temp_dep1 = listItem.dep1 : _temp_dep1 }}</cite>' }); __GUIDE_LIST = new Vue({ el: '#guide_list', data: { config: __SITENAME, t_head: __CONSTANT_HEAD, t_rule: __CONSTANT_RULE, t_body: __CONSTANT_LIST, }, methods: __CONSTANT_RULE, beforeCreate: function () { $("#guide_list").show() }, mounted: function () { 
    /* $("._GUIDE__list__body > li.state_ing").hide() */ 
}, });


$(document).ready(function () { /* 배열 변수넣기 */ var _updateArr = []; $("._GUIDE__list__col--update-pub").each(function (index) { _updateArr.push($("._GUIDE__list__col--update-pub").eq(index).text().replace("-", "")); }); /* 배열 최대값 */ var _max = _updateArr.reduce(function (a, b) { return Math.max(a, b); }); /* 최대값 클래스 넣기 */ for (var i in _updateArr) { if (_updateArr[i] == _max) { var _tag = $("._GUIDE__list__col--update-pub").eq(i).closest("._GUIDE__list__item"); var _sch = _tag.find("._GUIDE__list__col--no .sch_state"); _tag.addClass("state_new"); _sch.text(_sch.text() + " state_new"); } }; /* 검색 */ var oItems = $("#list-body ._GUIDE__list__item ._GUIDE__list__col").each(function ($index) { $(this).attr("data-search", $(this).text().toLowerCase()); }); var searchFn = function () { var o = $("#list-body"); $("#list-sch_txt").on("keyup", function ($e) { var t = $(this).val().toLowerCase(); o.find("li").hide(), /* o.find(":contains(" + t + ")").closest("li").show(); */ $("#list-body ._GUIDE__list__item ._GUIDE__list__col").each(function ($index) { var str = $(this).attr("data-search"); if (str.match(t)) { $(this).closest("li").show(); } }); /* 입력 문자 해쉬 변환 */ if ($e.keyCode === 13) { window.location.hash = ''; var _url = window.location.href; if (_url.indexOf("#") == -1) { window.location.href = _url + "#" + encodeURI(t, "UTF-8"); } else { window.location.href = _url + encodeURI(t, "UTF-8"); } searchFn(); } }); }; $("#list-head").length && searchFn(); if (window.location.hash) { var _hash = decodeURI(window.location.hash, "UTF-8"); $("#list-sch_txt").val(_hash.replace("#", "")); $("#list-sch_txt").trigger("keyup"); }; /* 검색 클릭 */ $(".js-legend_list li").on("click", function ($e) { $e.preventDefault(); var _state_sch = $(this).data("state"); if ($("#list-sch_txt").val()) { $(".js-legend_list li").removeClass("on"); $("#list-sch_txt").val(""); $("#list-sch_txt").trigger("keyup"); } else { $(this).addClass("on"); $("#list-sch_txt").val(_state_sch); $("#list-sch_txt").trigger("keyup"); } }) });