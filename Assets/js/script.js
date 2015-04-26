$(document).ready(function(){

  $("#contact-button").click(function() {
    $("#modal-container").show();
  });

  $("#Submit").click(function() {
    $("#modal-container").hide();
  });

  $("#modal-overlay").click(function() {
    $("#modal-container").hide();
  });
})