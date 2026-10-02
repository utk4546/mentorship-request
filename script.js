const form = document.getElementById("mentorForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const message = document.getElementById("message").value;

    // Create hidden form
    const googleForm = document.createElement("form");

    googleForm.action =
        "https://docs.google.com/forms/d/e/1FAIpQLSefsJd0UjnUrt5GUf91khbcOLdpmkvDCuTnoURS2vkaGtIboA/formResponse";

    googleForm.method = "POST";
    googleForm.target = "hiddenFrame";
    googleForm.style.display = "none";

    // Helper function
    function addField(name, value) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value;
        googleForm.appendChild(input);
    }

    // Send website data to Google Form
    addField("entry.1884265043", name);
    addField("entry.1212348438", date);
    addField("entry.693721652", time);
    addField("entry.513669972", message);

    // Hidden iframe
    let iframe = document.getElementById("hiddenFrame");

    if (!iframe) {
        iframe = document.createElement("iframe");
        iframe.id = "hiddenFrame";
        iframe.name = "hiddenFrame";
        iframe.style.display = "none";
        document.body.appendChild(iframe);
    }

    document.body.appendChild(googleForm);

    googleForm.submit();

    // Show success message
    successMessage.style.display = "block";

    // Clear form
    form.reset();
});
