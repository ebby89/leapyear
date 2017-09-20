var isLeapYear = function(year) {
  if (year %400 === 0 || year %4 === 0 && year %100 !== 0) {
    return true;
  }
  else {
    return false;
  }
}


//Start jquery
$(document).ready(function(){
  $("form#leap-year").submit(function(event){
    event.preventDefault();
    var year = parseInt($("#userInput").val());
    var result = isLeapYear(year);
    $("#result").text(result).show();
  });
});
