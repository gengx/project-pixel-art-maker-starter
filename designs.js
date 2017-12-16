// Select color input
// Select size input
// function myFunction() {
//     alert("The form was submitted");
// }
var colorPicked = $('#colorPicker').val();

var gridWidth;
var gridHeight;

$('#sizePicker').submit(function(event){
	gridWidth = $('#input_width').val();
	gridHeight = $('#input_height').val();

	makeGrid();
	event.preventDefault();
});

$('#colorPicker').change(function(){
	colorPicked = $(this).val();
	// alert('color picked is' + colorPicked);

})

// var clicking = false;

// When size is submitted by the user, call makeGrid()

function makeGrid() {
	$('#pixel_canvas').children().remove();
	for(i = 0; i < gridHeight; i++) {
		var row = $('<tr></tr>').appendTo('#pixel_canvas');
		// console.log(row);
		for(j = 0; j < gridWidth; j++) {
			// row.append('<td>1</td>');
			$('<td></td>').appendTo(row);
		}

	};

	$('td').click(function(e){
		alert(e.which);
		$(this).css('background-color', colorPicked);
		clicking = true;
	// alert('mouse entered!');
	});

	// $('td').mouseup(function(){
	// 	// $(this).css('background-color', colorPicked);
	// 	clicking = false;
	// // alert('mouse entered!');
	// });

	$('td').mousemove(function(e){
		// if(clicking == true) {
		// 	$(this).css('background-color', colorPicked);
		// }
		// alert(e.which);
		if(e.buttons == 1) {
			$(this).css('background-color', colorPicked);
		}

	// alert('mouse entered!');
	});

	// console.log($('tr'));

	// rows = $('tr');

	// // rows = [1,2];

	// rows.forEach(function(row){
	// 	for(j = 0; j < gridWidth; j++) {
	// 	row.append('<td>1</td>');

	// 	}
	// });



}
