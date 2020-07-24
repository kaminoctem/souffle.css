$(function() {
  var humbergerIsActive = false;
  $(".hamburger").on("click", function() {
    if (humbergerIsActive) {
      $(".hamburger").removeClass("is-active");
      $(".menu").removeClass("is-active");
      $(".hamburger-state").text("closed");
    } else {
      $(".hamburger").addClass("is-active");
      $(".menu").addClass("is-active");
      $(".hamburger-state").text("opened");
    }
    humbergerIsActive = !humbergerIsActive;
  });
  $("#activateModal").on("click", function() {
    $(".modal").addClass("is-active");
  });
  $(".modal").on("click", function() {
    $(".modal").removeClass("is-active");
  });

  $("input[name='radio-theme']:radio").val(["prefers"]);
  $("input[name='radio-theme']:radio").on("change", function() {
    var selectedValue = $(this).val();
    switch (selectedValue) {
      case "prefers":
        $(".souffle").removeClass("is-light");
        $(".souffle").removeClass("is-dark");
        break;
      case "light":
        $(".souffle").addClass("is-light");
        $(".souffle").removeClass("is-dark");
        break;
      case "dark":
        $(".souffle").removeClass("is-light");
        $(".souffle").addClass("is-dark");
        break;
    }
  });
});
