"use strict";
// Ẩn hiện thông tin và nhập email

const formContainer = document.getElementById("formContainer");
const formData = document.getElementById("formData");
const emailInput = document.getElementById("emailInput");
const errorText = document.querySelector(".form-text");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

formContainer.addEventListener("submit", function (e) {
  e.preventDefault();
  if (regex.test(emailInput.value)) {
    formContainer.classList.add("hide");
    formData.classList.remove("hide");
  } else {
    errorText.textContent = "Email không đúng định dạng";
    errorText.classList.add("text-danger");
  }
});

// Ản hiện lý lịch

const jobs = document.querySelectorAll(".job-information");
jobs.forEach((jobInfo) => {
  const showMore = jobInfo.querySelector(".show-more");
  const jobInformation = jobInfo.querySelector(".content-list");
  jobInfo.addEventListener("mouseover", function () {
    showMore.classList.remove("hide");
    showMore.classList.add(".job-information:hover");
  });

  jobInfo.addEventListener("mouseout", function () {
    showMore.classList.add("hide");
  });

  showMore.addEventListener("click", function () {
    if (jobInformation.classList.value.includes("hide")) {
      jobInformation.classList.remove("hide");
      this.textContent = "▲ VIEW LESS";
      jobInfo.classList.add("h-100");
    } else {
      jobInformation.classList.add("hide");
      this.textContent = "▼ VIEW MORE";
      jobInfo.classList.remove("h-100");
    }
  });
});
