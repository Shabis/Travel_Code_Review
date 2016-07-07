$(document).ready(function() {


  $('#blanks form').submit(function(event) {
    event.preventDefault();
    var typeInput = $('input#type').val();
    var beverageInput = $("input#beverage").val();
    var foodInput = $("input#food").val();
    var entertainmentInput = $("input#entertainment").val();
    var weatherInput = $("input#weather").val();

    if (typeInput === 'beach' && beverageInput === 'cocktails'|| foodInput === 'cheeseburger' && weatherInput === '90s') {
      $('#mexico').show();
    }
    else if (entertainmentInput === 'hiking') {
      $('#yellowstone').show();
    }
    else if (weatherInput === 'freezing') {
      $('#aspen').show();
    }
    else if (foodInput === 'pasta') {
      $('#paris').show();
    } else {
      $('#stumped').show();
    }
  });
});
