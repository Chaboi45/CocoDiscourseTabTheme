export default {
  name: "custom-dropdown-toggle",

  initialize() {
    api.onPageChange(() => {
      console.log("test");
      const toggle = document.getElementById("custom-dropdown-toggle");
      const menu = document.getElementById("custom-dropdown-menu");

      if (toggle && menu) {
        toggle.addEventListener("click", (e) => {
          e.preventDefault();
          console.log("hello");
          menu.classList.toggle("show");
        });

        document.addEventListener("click", (e) => {
          if (!toggle.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove("show");
          }
        });
      }
    });
  },
};
