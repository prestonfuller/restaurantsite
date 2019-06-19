var form = document.getElementById("form")
form.addEventListener("submit", validate)

function validate(event) {

  var phone = document.getElementById("phone").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var email = document.getElementById("inquiry").value;
  var choice1 = document.getElementById("choice1").value;
  var choice2 = document.getElementById("choice2").value;
  if (!phone || !name || !email || !inquiry || !info || (!choice1 && !choice2) ) {
    alert("Fill in required fields!")
  }

  console.log("Validating form");
  event.preventDefault();
}
