const navUser = document.querySelector(".nav-user");
const toggleCollapse = document.querySelector(".nav-user-collapse");
navUser.addEventListener("click", (e) => {
  e.preventDefault();
  toggleCollapse.classList.toggle("active");
});
