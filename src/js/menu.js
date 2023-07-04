(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    burger: document.querySelector("[data-burger]"),
    menu: document.querySelector("[data-menu]"),
    closeMenuLink: document.querySelector("[data-list-close]"),
    closeMenuLink1: document.querySelector("[data-list-close1]"),
    closeMenuLink2: document.querySelector("[data-list-close2]"),
    
   
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuLink.addEventListener("click", toggleMenu);
  refs.closeMenuLink1.addEventListener("click", toggleMenu);
  refs.closeMenuLink2.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.burger.classList.toggle("is-hidden");
    refs.link.classList.toggle("is-hidden");
    refs.link1.classList.toggle("is-hidden");
    refs.link2.classList.toggle("is-hidden");
    document.body.classList.toggle('no-scroll')
  }
})();