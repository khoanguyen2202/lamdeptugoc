

// Template ID : template_hlujfqn
// Service ID : service_4mr8k6m
// Public Key: uTzmvIQPpbrJoj5eG
const topMenu = document.getElementById("ct-top-menu");
const toggleTopMenuIcon = document.getElementById("ct-toggle-top-menu-icon");

document.addEventListener("click", (e) => {
  if (toggleTopMenuIcon.contains(e.target)) {
    // Click to Toggle top menu icon
    topMenu.classList.toggle("ct-top-menu-expanded");
    topMenu.classList.toggle("hidden");
  } else {
    // Click outside from Toggle top menu icon
    if (topMenu.classList.contains("ct-top-menu-expanded")) {
      topMenu.classList.remove("ct-top-menu-expanded");
      topMenu.classList.add("hidden");
    }
  }
});



document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded event fired");
  const dangKyForm = document.getElementById("form-dang-ky-ngay");
  const dangKyButton = document.getElementById("button-dang-ky-ngay");
  
  dangKyButton.addEventListener("click", function (e) {
    e.preventDefault();

    const hotenValue = dangKyForm.elements.hoten.value;
    const emailValue = dangKyForm.elements.email.value;
    const sdtValue = dangKyForm.elements.sdt.value;
   
    // Log all form values
    console.log("Họ tên:", hotenValue);
    console.log("Email:", emailValue);
    console.log("Số điện thoại:", sdtValue);
    
    // Perform additional actions or send the form data using emailjs
    // emailjs.send("service_4mr8k6m", "template_hlujfqn", {
    //   hoten: hotenValue,
    //   email: emailValue,
    //   sdt: sdtValue,
    // }).then(
    //   (response) => {
    //     console.log("Sent successfully:", response);
    //   },
    //   (error) => {
    //     console.error("Failed to send:", error);
    //   }
    // );
  });
});
