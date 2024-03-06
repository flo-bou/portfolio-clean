AOS.init({
  duration: 1200,
})

async function toggleMoreProjects(){
  document.getElementById("more-projects").classList.toggle("show");
  setTimeout(() => {
    document.getElementById("toggle-button").classList.add("hidden");
  }, 2000);
}
