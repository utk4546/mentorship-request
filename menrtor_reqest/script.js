const form = document.getElementById("mentorForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const message = document.getElementById("message").value;

    console.log("Preferred Date:", date);
    console.log("Preferred Time:", time);
    console.log("Message:", message);

    successMessage.style.display = "block";

    form.reset();
});