var myHtml = "";

var reset = function() {
	$('body').on('click', '#nav', function(){
		show_categories("categories");
	})
}

var show_categories = function(category) {	
	myHtml = "<div class='flex-container'>";
	$.each( window[category], function( i, item ) {
	    myHtml += "<div class= 'card "+ category +" cats' id="+ item.toLowerCase() +" ><a href='#'>" + item + "</a></div>";
	});
	myHtml += "</div>";
	$( "#content" ).html( myHtml );
}

var show_questions = function (cat) {
	$.each( window[cat] , function( i, item ) {
		myHtml += "<p class= 'card faqs' id='" + cat + "-" + i +"'><a href='#'>" + item.question + "</a></p>";
	})
	$( "#content" ).html( myHtml );
}

var choose_category = function () {
	$('body').on('click', '.cats', function() {
		var category = this.id;	
		determine_category(this.id);
	});
}

var remove = function () {
	$('body #content').remove('li');
}

var determine_category =  function(value){
	myHtml = "";
	remove();

	if (value == "financial")
		show_categories(value);
	else
		show_questions(value)

}

var show_answers = function(){
	$('body').on('click', '.faqs', function() {
		remove()
		var cat = this.id.substr(0, this.id.indexOf('-'));
		var num = this.id.substr(this.id.indexOf('-') + 1, this.id.length);
		myHtml  = "<div class='card'><p><b>" + window[cat][num].question + "</b></p>"
		myHtml += "<p>" + window[cat][num].answer + "</p></div>"
		$( "#content" ).html( myHtml );
	})
}

var listen = {
	reset: reset,
	category: choose_category,
	questions: show_answers
}

$( document ).ready(function() {
	show_categories("categories");
	listen.reset()
	listen.category()
	listen.questions()
});
