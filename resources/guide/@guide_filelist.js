var guideList = ['guide_grid-align.html','guide_iconfonts.html','guide_icons.html','guide_jqueryUI_icons.html','guide_layout.html','guide_style.html','guide_ui.html','path.html','path_old.html','sample_bxslider.html','sample_highlight.html','sample_jqgrid.html','sample_mCustomScrollbar.html','sample_OverlayScrollbars.html','sample_scroll_top.html','sample_slider.html','sample_swiper-3.4.1.html','sample_swiper-4.5.0-1.html','sample_swiper-4.5.0-2.html','sample_swiper-4.5.0.html','sample_swiper.html'];
if(guideList != undefined){
  for(var i = 0; i < guideList.length; i++){
    var _item = "<option value="+ guideList[i] +">"+ guideList[i] +"</option>";
    $("#select_guid-list").append(_item);
  }
  $("#select_guid-list").on("change",function(){
    window.open( $(this).val() );
  })
}
