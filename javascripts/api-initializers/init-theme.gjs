import { apiInitializer } from "discourse/lib/api";

export default apiInitializer((api) => {
   api.onPageChange(() => {
      console.log("hello");
      const toggle = document.getElementById("custom-dropdown-toggle");
      const menu = document.getElementById("custom-dropdown-menu");

      if (toggle && menu) {
        toggle.addEventListener("click", (e) => {
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
});
