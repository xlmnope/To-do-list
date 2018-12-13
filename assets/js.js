

// add button
function newElement() {
  //create li
  var li = document.createElement("li"); // creates variable that creates an li
  var inputValue = document.getElementById("textinput").value; //assigns text input to a variable(inputValue)
  var text = document.createTextNode(inputValue); // creats variable that creates text box w the previous inputvariable passed in.
  li.appendChild(text);                              // Append the text to <li>
  if (inputValue === '') { 
    alert("You must write something!"); //make it validation error instead later
  } else {
    document.getElementById("list").appendChild(li); // Append <li> to <ul> with id list
  }
  document.getElementById("textinput").value = "" //clears search text input
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
}



//close button
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

