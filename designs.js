//initialize the variable and get the default color value
let colorPicked = $('#colorPicker').val();

//the grid width and height don't have to have an initial value because the grid
// only shows up when the button is clicked.
let gridWidth;
let gridHeight;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
	gridWidth = $('#input_width').val();
	gridHeight = $('#input_height').val();
	makeGrid();
	event.preventDefault();
});

$('#colorPicker').change(function(){
	colorPicked = $(this).val();
});

function makeGrid() {
	//clear the table first
	$('#pixel_canvas').children().remove();

	//draw the table based on the grid size
	for(i = 0; i < gridHeight; i++) {
		let row = $('<tr></tr>').appendTo('#pixel_canvas');
		for(j = 0; j < gridWidth; j++) {
			$('<td></td>').appendTo(row);
		}
	};
	//change the cell color when the cell is clicked
	$('td').click(function(e){
		$(this).css('background-color', colorPicked);
	});

	//when the mouse is clicked and moved, change the cell color too
	// so that continuous lines can be drawn.
	$('td').mousemove(function(e){
		if(e.buttons == 1) {
			$(this).css('background-color', colorPicked);
		}
	});
}
