// IIFE -- Immediately Invoked Function Expression
(function () {
  function Start() {
    console.log("App Started...");

    let deleteButtons = document.getElementsByClassName("delete-btn");
    console.log(deleteButtons);
    for (button of deleteButtons) {
      $(button).on("click", function (e) {
        if (!confirm("Are you sure?")) {
          e.preventDefault();
        }
      });
    }
  }

  window.addEventListener("load", Start);
})();
