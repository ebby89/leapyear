var isLeapYear = function(year) {
  if (year %4 === 0) {
    return true;
  } else {
    return false;
  }
}


//Start jquery
$(document).ready(function(){
  $("form#leap-year").submit(function(event){
    event.preventDefault();
    var year = $("#userInput").val();
    var result = isLeapYear(year);
    $("#result").text(result).show();
  });
});
