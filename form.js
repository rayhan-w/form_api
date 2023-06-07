function myvalidity() {
    const inpobj = document.getElementById('id1');
  
    if (inpobj.validity.rangeOverflow) {
        document.getElementById('demo').innerHTML=  inpobj.setCustomValidity("Number is overflow");
    } else if (inpobj.validity.rangeUnderflow) {
        document.getElementById('demo').innerHTML = inpobj.setCustomValidity("Number is underflow");
    }
  
    if (!inpobj.checkValidity()) {
      document.getElementById('demo').innerHTML = inpobj.validationMessage;
    }
  }
  