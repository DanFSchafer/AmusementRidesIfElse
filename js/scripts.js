$(document).ready(function() {
  $("#ageInput form").submit(function(event) {
    var age = $("input:radio[name=optionsRadios]:checked").val();
    if (age === "option1") {
      $("#rides").show();
      $(".options").addClass("nothing");
      $("li.adult").addClass("yellow");
    } else if (age === "option2") {
      $("#rides").show();
      $(".options").addClass("nothing");
      $("li.bigkid").addClass("yellow");
    } else if (age === "option3") {
      $("#rides").show();
      $(".options").addClass("nothing");
      $("li.littlekid").addClass("yellow");
    } else {
      alert("Please make a selection");
    }
    event.preventDefault();
  });
});
