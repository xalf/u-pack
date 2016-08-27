$(function() {
  $('.togglemenu').on('click', function(e){
    $('.container').toggleClass('opened_menu');
    $('.navigation').toggleClass('open');
  })
})

$(function() {
	$('#popup').hide();
	$('#hide-layout').css({opacity: .5});
	$('#click-me').click(function() {
		$('#hide-layout, #popup').fadeIn(300);
	})
	$('#click-me-bottom').click(function() {
		$('#hide-layout, #popup').fadeIn(300);
	})
	$('#btn-close, #hide-layout').click(function() {
		$('#hide-layout, #popup').fadeOut(300);
	})
	$('#btn-yes, #btn-no').click(function() {
		alert('...');
		$('#hide-layout, #popup').fadeOut(300);
	})
})

$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
})