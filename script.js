// onBlur for mobile
document.getElementById("mobile").addEventListener("blur", function () {
  if (this.value.trim() === "") {
    alert("Please enter your mobile number.");
  }
});

// onFocus for email
document.getElementById("email").addEventListener("focus", function () {
  this.style.backgroundColor = "#e0f7fa";
});

// onChange to uppercase for name fields
["studentName", "fatherName", "motherName"].forEach((id) => {
  document.getElementById(id).addEventListener("change", function () {
    this.value = this.value.toUpperCase();
  });
});

// Show modal on submit
document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const modal = new bootstrap.Modal(document.getElementById("successModal"));
  modal.show();
});

document.getElementById("studentImage").addEventListener("change", function () {
  const file = this.files[0];
  const preview = document.getElementById("imagePreview");

  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = "inline-block";
    };
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
    preview.style.display = "none";
  }
});