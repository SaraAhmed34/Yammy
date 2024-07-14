// Contact Functions

const nameRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneRegex = /^01[0125][0-9]{8}$/;
const ageRegex = /^[1-9][0-9]?$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function validateName() {
  const input = $("#nameInput");
  const regex = nameRegex;
  const alertId = "#nameAlert";

  if (!input.val().trim()) {
    $(alertId).addClass("d-none");
    return false;
  } else {
    if (regex.test(input.val().trim())) {
      $(alertId).addClass("d-none");
      return true;
    } else {
      $(alertId).removeClass("d-none");
      return false;
    }
  }
}

function validateEmail() {
  const input = $("#emailInput");
  const regex = emailRegex;
  const alertId = "#emailAlert";

  if (!input.val().trim()) {
    $(alertId).addClass("d-none");
    return false;
  } else {
    if (regex.test(input.val().trim())) {
      $(alertId).addClass("d-none");
      return true;
    } else {
      $(alertId).removeClass("d-none");
      return false;
    }
  }
}

function validatePhone() {
  const input = $("#phoneInput");
  const regex = phoneRegex;
  const alertId = "#phoneAlert";

  if (!input.val().trim()) {
    $(alertId).addClass("d-none");
    return false;
  } else {
    if (regex.test(input.val().trim())) {
      $(alertId).addClass("d-none");
      return true;
    } else {
      $(alertId).removeClass("d-none");
      return false;
    }
  }
}

function validateAge() {
  const input = $("#ageInput");
  const regex = ageRegex;
  const alertId = "#ageAlert";

  if (!input.val().trim()) {
    $(alertId).addClass("d-none");
    return false;
  } else {
    if (regex.test(input.val().trim())) {
      $(alertId).addClass("d-none");
      return true;
    } else {
      $(alertId).removeClass("d-none");
      return false;
    }
  }
}

function validatePassword() {
  const input = $("#passwordInput");
  const regex = passwordRegex;
  const alertId = "#passwordAlert";

  if (!input.val().trim()) {
    $(alertId).addClass("d-none");
    return false;
  } else {
    if (regex.test(input.val().trim())) {
      $(alertId).addClass("d-none");
      return true;
    } else {
      $(alertId).removeClass("d-none");
      return false;
    }
  }
}

function validateRepassword() {
  const password = $("#passwordInput").val();
  const repassword = $("#repasswordInput").val();
  const alertId = "#repasswordAlert";

  if (!repassword.trim()) {
    $(alertId).addClass("d-none");
    return false;
  } else {
    if (password === repassword) {
      $(alertId).addClass("d-none");
      return true;
    } else {
      $(alertId).removeClass("d-none");
      return false;
    }
  }
}

function isInputDataValid() {
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isAgeValid = validateAge();
  const isPasswordValid = validatePassword();
  const isRepasswordValid = validateRepassword();

  if (
    isNameValid &&
    isEmailValid &&
    isPhoneValid &&
    isAgeValid &&
    isPasswordValid &&
    isRepasswordValid
  ) {
    $("#submitBtn").prop("disabled", false);
  } else {
    $("#submitBtn").prop("disabled", true);
  }
}

$(".contact").on("click", function () {
 

//   $("#searchContainer").html("");

  $(".display").html(`
        <div class="contact min-vh-100 d-flex justify-content-center align-items-center">
            <div class="container w-75 text-center">
                <div class="row g-4">
                    <div class="col-md-6">
                        <input type="text" placeholder="Enter Your Name" class="form-control" id="nameInput"/>
                        <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                            Special characters and numbers are not allowed
                        </div>
                    </div>
                    <div class="col-md-6">
                        <input type="email" placeholder="Enter Your Email" class="form-control" id="emailInput"/>
                        <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                            Email not valid *example@yyy.zzz
                        </div>
                    </div>
                    <div class="col-md-6">
                        <input type="text" placeholder="Enter Your Phone" class="form-control" id="phoneInput"/>
                        <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                            Enter valid Phone Number
                        </div>
                    </div>
                    <div class="col-md-6">
                        <input type="number" placeholder="Enter Your Age" class="form-control" id="ageInput"/>
                        <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                            Enter valid age
                        </div>
                    </div>
                    <div class="col-md-6">
                        <input type="password" placeholder="Enter Your Password" class="form-control" id="passwordInput"/>
                        <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                            Enter valid password *Minimum eight characters, at least one letter and one number:*
                        </div>
                    </div>
                    <div class="col-md-6">
                        <input type="password" placeholder="Repassword" class="form-control" id="repasswordInput"/>
                        <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                            Enter a valid repassword
                        </div>
                    </div>
                </div>
                <button id="submitBtn" class="btn btn-outline-danger px-2 mt-3" disabled>Submit</button>
            </div>
        </div>`);

  $("#nameInput").on("input", () => {
    validateName();
    isInputDataValid();
  });

  $("#emailInput").on("input", () => {
    validateEmail();
    isInputDataValid();
  });

  $("#phoneInput").on("input", () => {
    validatePhone();
    isInputDataValid();
  });

  $("#ageInput").on("input", () => {
    validateAge();
    isInputDataValid();
  });

  $("#passwordInput").on("input", () => {
    validatePassword();
    validateRepassword();
    isInputDataValid();
  });

  $("#repasswordInput").on("input", () => {
    validateRepassword();
    isInputDataValid();
  });

  $("#submitBtn").on("click", (e) => {
    e.stopPropagation();
    $("#submitBtn").addClass("bg-danger");
    $("#submitBtn").addClass("text-white");
  });

  $("body").on("click", (e) => {
    if (!$(e.target).is("#submitBtn")) {
      $("#submitBtn").removeClass("bg-danger");
      $("#submitBtn").removeClass("text-white");
    }
  });
});
