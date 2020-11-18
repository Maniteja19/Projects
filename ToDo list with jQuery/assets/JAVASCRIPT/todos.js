$('ul').on('click','li',function (){
   $(this).toggleClass('completed');
})

$('ul').on('click','span',function (event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();  //prevents event bubble
})
$('input[type="text"]').keypress(function (event){
	// let spans = $('span').text();
	if(event.which === 13){
	  let todos = $(this).val();
	  $(this).val("");
	  $('ul').append(`<li><span>${'<i class="fas fa-trash"></i>'}</span> ${todos}</li>`);
	}
})

$('#add').click(function(){
	$('input[type="text"]').slideToggle();
})