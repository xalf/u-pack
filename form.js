$(document).ready(function(){
	$(".plus").click(function(){
		var qwerty = $(this).parent("td").children("input");
		var num = +qwerty.val()+1;
		qwerty.val(num);
	})
	$(".minus").click(function(){
		var qwerty = $(this).parent("td").children("input");
		var num = +qwerty.val()-1;
		if(num>=0)qwerty.val(num);
	})
	/*$("#add").click(function(){
		$("#add").before('<br><span>Выберете изделие</span><select class="plten"><option>Архивный стеллаж</option><option>Консольный стеллаж</option></select><div class="size"><span>Высота (мм)</span><input type="text" class="mtten"></div><div class="size"><span>Глубина (мм)</span><input type="text" class="mtten"></div>');
	})*/
	$(".delete").click(function(){
		$(this).parent().parent().css("display", "none");
	})
});