"use strict";
$(document).ready(function () {
  AOS.init(), $(".icon-item").click(function () {
    var t = $(this).data("title"),
      i = $(this).data("description");
    $(this).closest(".icon-composition").find(".active").removeClass("active"), $(this).closest(".icon-container").addClass("active"), $("#titleComposition").html(t), $("#descriptionComposition").html(i)
  }), $(window).scroll(function () {
    $(this).scrollTop() >= 150 ? $("#return-to-top").addClass("active") : $("#return-to-top").removeClass("active")
  }), $("#return-to-top").click(function (t) {
    t.preventDefault(), $("body,html").animate({
      scrollTop: 0
    }, 1e3)
  })
});