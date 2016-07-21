function isPrimaryColor(color) {
  return color === 'red' || color === 'blue' || color === 'yellow';
}

function secondaryColor(color1, color2) {
  if (color1 === color2) {
    return color1;
  } if ((color1 ==='red' && color2 === 'yellow') || (color2 ==='red' && color1 === 'yellow')) {
    return 'orange';
  } else if ((color1 == 'red' && color2 === 'blue') || (color2 == 'red' && color1 === 'blue')) {
    return 'purple';
  } else if (color1 === 'red' && color2 === 'red') {
    return 'red';
  } else if ((color1 == 'yellow' && color2 === 'blue') || (color2 == 'blue' && color1 === 'yellow')) {
    return 'green';
  }
}


$('div[data-color-number="1"]').on('click', function () {
	var divColor = $(this).attr('data-color');
	divColor = divColor.toString();
	$('#result-1').html(divColor);

  var otherColor = $('#result-2').html();
  if (otherColor != "") {
    var blendColor = secondaryColor(divColor, otherColor);
    $("#result").text(blendColor);
  }
  else console.log("Need to select other color");
});

$('div[data-color-number="2"]').on('click', function () {
	var divColor = $(this).attr('data-color');
	divColor = divColor.toString();
  console.log(divColor);
  $('#result-2').html(divColor);

  var otherColor = $('#result-1').html();
  if (otherColor != "") {
    var blendColor = secondaryColor(divColor, otherColor);
    $("#result").text(blendColor);
  } else console.log("Need to select other color");
});



// building on top of your work in Exercise 2,
// on clicking a color for Color 1 and a color for Color 2,
// print the name of the color that results from the color mix
// (using our #secondaryColor function from last class)
// inside the div#result element

// if I update Color 1 or update Color 2 by clicking on another color,
// then the result should update.

// Challenge: make the result div colored by the resulting blended color
// and have it update accordingly whenever color 1 or color 2 is changed.
