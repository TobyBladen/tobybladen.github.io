$(document).ready(function(){
  var rowsToHide = $("#skill-row-3 li, #skill-row-4 li, #skill-row-5 li");
  var rowArr = $.makeArray(rowsToHide);
  $(rowArr).hide();
  $("#see-more-button").show();
  $("#see-more-button").click(function(){
    $("#see-more-button").fadeOut(400, "swing", function(){
      $(rowArr).each(function(index) {
        $(this).delay(200*index).fadeIn(150);
      });
    });
  });
});
