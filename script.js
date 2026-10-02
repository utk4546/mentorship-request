const form = document.getElementById("mentorForm");

const googleFormURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSefsJd0UjnUrt5GUf91khbcOLdpmkvDCuTnoURS2vkaGtIboA/viewform";

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Open the Google Form
    window.open(googleFormURL, "_blank");
});
