$(document).ready(function () {
  $(".main_menu li")
    .mouseover(function () {
      $(this).find(".sub_menu").stop().slideDown(500);
    })
    .mouseout(function () {
      $(this).find(".sub_menu").stop().slideUp(500);
    });
});

$(document).ready(function () {
  var i = 0;
  setInterval(function () {
    if (i < 2) {
      i++;
      $(".mainbanner").animate({ top: -300 * i }, "slow");
    } else {
      i = 0;
      $(".mainbanner").animate({ top: 0 * i }, "slow");
    }
  }, 3000);
});
