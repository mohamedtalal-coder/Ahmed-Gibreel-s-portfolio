document
  .querySelector("#form-valid")
  .addEventListener("submit", function (event) {
    var x = document.querySelector("#works").value;
    var y = document.querySelector("#result");

    if (x == "") {
      alert("Please Enter Your Works");
    } else {
      var li = document.createElement("li");
      li.innerHTML = x;

      // add delete button
      var del = document.createElement("button");
      del.textContent = "x";
    
      del.className = "btn btn-sm btn-danger";
      del.onclick = function () {
        li.remove();
      };
      li.appendChild(del);
      y.appendChild(li);
      document.querySelector("#works").value = "";
    }
    event.preventDefault();
  });


  document.querySelectorAll(".mouse").forEach(function (color){
    color.onclick = function () {
        document.querySelector("#demo").style.color = color.dataset.color;
        document.querySelector("#demo").style.textAlign = color.dataset.align;
    }
  });   
