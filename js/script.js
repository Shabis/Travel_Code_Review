$(document).ready(function() {
  $("form#travel").submit(function(event) {
    $('form#travel').hide();
    event.preventDefault();
    var citytype = $("input:radio[name=citytype]:checked").val();
    var beverage = $("input:radio[name=beverage]:checked").val();
    var food = $("input:radio[name=food]:checked").val();
    var entertainment = $("input:radio[name=entertainment]:checked").val();
    var travel = $("input:radio[name=travel]:checked").val();

    if (citytype === "beach" & travel === 'cruise' || food ==='nachos' && beverage === 'beer') {
        $('#mexico').show();
    }
    else if (citytype === 'hiking' && travel === 'airplane' || food ==='cheese' && beverage === 'wine') {
      $('#aspen').show();
    }
    else if (citytype === "hiking" && travel === 'train' || entertainment === 'walk' && beverage === 'water' ) {
      $('#yellowstone').show();
    }
    else if (entertainment === 'shopping' && travel === 'airplane' || citytype ==='history' && beverage === 'wine') {
      $('#paris').show();
    } else {
      $('#stumped').show();
    };
  });
});
