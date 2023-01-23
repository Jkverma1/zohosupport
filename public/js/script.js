function submitCont() {
    var emailID = document.getElementById("emailID").value;
    emailID = emailID.trim();

    var key = extractNumber(document.getElementById("sessionKey").value);
    document.getElementById("sessionKey").value = key;
    if (emailID == "") {
      document.getElementById("email_error").style.display = " block";
      document.getElementById("emailID").focus();
    }
    document.getElementById("src").value = "submit"; //no i18n
    var e = document.getElementById("multiLang");
    document.getElementById("language").value =
      e.options[e.selectedIndex].value; //no i18n
    if (
      document.getElementById("sessionKey").value == "" ||
      emailID == ""
    ) {
      return false;
    }
    return true;
  }

  function handleChange(event) {
    var isIE = false;

    var ele = document.getElementById("sessionKey");
    var key = extractNumber(ele.value);
    var isBackSpace = false,
      isDelete = false;
    var caretPosition = "";
    if (isIE) {
      caretPosition = event.srcElement.selectionStart;
    } else {
      caretPosition = event.target.selectionStart;
    }
    if (event.inputType === "deleteContentBackward") {
      isBackSpace = true;
    }
    if (event.inputType === "deleteContentForward") {
      isDelete = true;
    }
    if (key !== "") {
      document.getElementById("joinBTN").className = "join-btn";
    } else {
      document.getElementById("joinBTN").className = "join-btn disabled";
    }
    if (!(isBackSpace && key.length == 3) && key.length > 3) {
      key = key.substring(0, 3) + "-" + key.substring(3, key.length);
    }
    if (!(isBackSpace && key.length == 7) && key.length > 7) {
      key = key.substring(0, 7) + "-" + key.substring(7, key.length);
    }
    if (key.length > 12) {
      key = key.substring(0, 12);
    }
    document.getElementById("sessionKey").value = key;
    if (isBackSpace || isDelete) {
      ele.setSelectionRange(caretPosition, caretPosition);
    }
  }
  function isNumber(evt) {
    var charCode = evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && !evt.metaKey) {
      return false;
    }
    return true;
  }
  function extractNumber(text) {
    var txt1 = "";
    for (var i = 0; i < text.length; i++) {
      if (text.charAt(i) >= "0" && text.charAt(i) <= "9")
        txt1 += text.charAt(i);
    }
    return txt1;
  }