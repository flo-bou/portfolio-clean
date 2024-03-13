AOS.init({
  duration: 1200,
})

emailjs.init({
  publicKey: "_FT_7LWdFYmDEllF2",
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const feedback = document.getElementById("form-feedback");
  feedback.innerText = "";
  emailjs.sendForm('service_lfg1y1n', 'template_i2kambt', this)
    .then(() => {
      feedback.innerText = "✅ Votre message a bien été envoyé !";
    }, (err) => {
      feedback.innerText = "❌ Votre message n'a pas pu être envoyé.";
      console.error(err);
    });
});

async function seeMoreProjects(){
  document.getElementById("more-projects").classList.toggle("show");
  setTimeout(() => {
    document.getElementById("toggle-button").classList.add("hidden");
  }, 2000);
}
