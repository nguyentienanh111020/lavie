function myFunction() {
  var x = document.getElementById("toggle-bar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function searchBar() {
  const x = document.getElementById("search-bar-container");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

includeHTML();

function inputBtn() {
  var myInput = document.getElementById("name");
  var myInput2 = document.getElementById("email");
  var myInput3 = document.getElementById("content");
  if (
    myInput &&
    myInput.value &&
    myInput2 &&
    myInput.value &&
    myInput3 &&
    myInput3.value
  ) {
    alert("Bạn đã gửi liên hệ thành công");
  } else {
    alert("Bạn hãy điền đầy đủ những thông tin cần thiết ");
  }
}
