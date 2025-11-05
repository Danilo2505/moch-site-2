const buttonMenuToggle = document.querySelector("#button-menu-toggle");

buttonMenuToggle.addEventListener("click", () => {
  if (buttonMenuToggle.hasAttribute("close")) {
    buttonMenuToggle.removeAttribute("close");
  } else {
    buttonMenuToggle.setAttribute("close", "");
  }
});
