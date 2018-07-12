$(document).ready(main);

function main() {
  let hiddenItems = [];
  hideRows();
  $("#see-more-button").show();
  respond2SeeMore();

  function hideRows() {
      hiddenItems = $("div[class*='to-hide'] li");
      $(hiddenItems).hide();
    }

  function respond2SeeMore() {
    $("#see-more-button").click(fadeOutBtn);

    function fadeOutBtn() {
      const fadeOutSpeed = 400;
      $("#see-more-button").fadeOut(fadeOutSpeed, "swing", fadeInItems);

      function fadeInItems() {
        $(hiddenItems).each(fadeInItem);

        function fadeInItem(index) {
          const delay = 180 * index;
          const fadeInSpeed = 150;
          $(this).delay(delay).fadeIn(fadeInSpeed);
        }
      }
    }
  }
}
