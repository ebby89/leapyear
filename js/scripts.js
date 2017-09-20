var isLeapYear = function(year) {
  return false;
}

//Start jquery
$(document).ready(function(){
  $("form#leap-year").submit(function(event){
    event.preventDefault();
    var year = $("#userInput").val();

    $("#result").text(isLeapYear(year)).show();
  });
});
