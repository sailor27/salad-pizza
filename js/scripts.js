$(document).ready(function() {

  $("#salad-btn").click(function() {
    $("ul#course1").append("<li>tomato</li>");

    $("ul#course1").children("li").last().click(function() {
        (this).remove();
    });
  });

  $("#pizza-btn").click(function() {
    $("#course2").append("<li>cheese</li>");

    $("ul#course2").children("li").last().click(function() {
      (this).remove();
    });
  });


});
