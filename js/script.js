$(document).ready(function() {
  $('#blanks form').sumbit(function(event) {
    var typeInput = $('input#type').val();
    var beverageInput = $("input#beverage").val();
    var foodInput = $("input#food").val();
    var entertainmentInput = $("input#entertainment").val();
    var weatherInput = $("input#weather").val();
  event.preventDefault();

  alert('typeInput');
  });

  if (typeInput === 'beach') {
    $('#mexico').show();
  }
  else if (entertainmentInput === 'hiking') {
    $('#yellowstone').show();
  }
  else if (weatherInput === 'freezing') {
    $('#aspen').show();
  }
  else if (entertainmentInput === 'fruit and cheese') {
    $('#paris')
  } else {
    $('#stumped').show();
  }
  alert("end");
});
