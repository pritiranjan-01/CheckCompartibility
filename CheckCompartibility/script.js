function askName() {
  var name = prompt("Enter your name: ");
  while (name.length < 5) {
    alert("Name must be more than 5 character");
    name = prompt("Enter your name more than 5 character: ");
  }
  return true;
}

function askAge() {
  var age = Number(prompt("Enter your age: (Only numeric value accepted) "));
  if (age == 0) {
    askAge();
  } else if (String(age) == "NaN") {
    alert("Please enter your valid age");
    askAge();
  } else if (age < 18) {
    alert("Please Grow UP");
    return false;
  } else {
    return true;
  }
}

function askGender() {
  var gender = prompt("Enter your gender (eg., male or female)").toLowerCase();
  while (gender !== "male" && gender !== "female") {
    alert("Enter gender as male or female.");
    gender = prompt("Enter your gender (eg., male or female)").toLowerCase();
  }
  return gender;
}

function askgfName() {
  var gfname = prompt("Enter your gf name");
  return gfname.length;
}

function askbfName() {
  var bfname = prompt("Enter your bf name");
  return bfname.length;
}

function checkComp(x, y) {
  if (x > 5) {
    alert("You are made for each other 💖");
  } else {
    alert("Better Luck Next Time! 🤞");
  }
}

function checkCompartibility() {
  if (askName() === true) {
    if (askAge() == false) {
      return;
    } else {
      var h = askGender();
      if (h == "male") {
        var x = askgfName();
        checkComp(x);
      } else if (h == "female") {
        var y = askbfName();
        checkComp(y);
      }
    }
    var check = confirm("Do yo want to Check One More Time ?");
    if (check === true) {
      checkCompartibility();
    } else {
      document.writeln("Thank you for using our site");
      return;
    }
  }
}
