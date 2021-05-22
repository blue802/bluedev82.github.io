document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const btnBurger = document.querySelector("#btnBurger");
  const btnClose = document.querySelector("#btnClose");
  const overlay = document.querySelector(".sidebar__overlay");
  const links = document.querySelectorAll(".sidebar__link");

  //   toggle sidebar
  btnBurger.addEventListener("click", () => {
    sidebar.classList.add("sidebar--open");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("sidebar--open");
  });

  btnClose.addEventListener("click", () => {
    sidebar.classList.remove("sidebar--open");
  });

  //   active link

  for (const link of links) {
    link.addEventListener("click", (e) => {
      for (const link of links) {
        link.classList.remove("sidebar__link--active");
      }
      e.target.classList.add("sidebar__link--active");
      sidebar.classList.remove("sidebar--open");
    });
  }
});