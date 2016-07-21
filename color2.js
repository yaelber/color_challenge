// on clicking an element with class "color",
// print the results of which color I clicked on
// as a string ('red', 'yellow', 'blue').
// across Color 1 and Color 2.
// If I click on another color, then the results div
// for that particular Color number (1 or 2) should update

// here's how you can get the value of [data-color] on the first element with class "color"
//var firstColor = document.getElementsByClassName('color')[0].getAttribute('data-color');
//console.log('Value of data-color is', firstColor);

// here's how you can get the value of [data-color-number] on the first element with class "color"
//var firstColor = document.getElementsByClassName('color')[0].getAttribute('data-color-number');
//console.log('Value of data-color is', firstColor);

//Option 1 Without Changing HTML/

$('div[data-color-number="1"]').on('click', function () {
	var divColor = $(this).attr('data-color');
	divColor = divColor.toString();
	$('#result-1').html(divColor);
});
$('div[data-color-number="2"]').on('click', function () {
	var divColor = $(this).attr('data-color');
	divColor = divColor.toString();
	$('#result-2').html(divColor);
});

//Option 2 - HTML is changed

$(document).ready(function() {
  $('.colors1 > .color').on('click', function () {
  	var colorNumber = $(this).attr('data-color-number')
    var divColor = $(this).attr('data-color');
    $('#result-1').text(divColor);
   });
});

$(document).ready(function() {
  $('.colors2 > .color').on('click', function () {
  var colorNumber = $(this).attr('data-color-number');
  var divColor = $(this).attr('data-color');
  $('#result-2').text(divColor);
  });
});


// Challenge: say in the future, I will add
//   <div class="color purple" data-color="purple"></div>
//   <div class="color orange" data-color="orange"></div>
// .... and maybe some others color, too.
// write your code so that it works no matter how many color choices I put
