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
}

//close button
