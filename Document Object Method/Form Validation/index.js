function validateForm() {
    let x = document.forms["myForm"];
    let value = x['fname'].value;
    console.log(value);
    if (value == "") {
      alert("Name must be filled out");
      return false;
    }

   
  }