console.log("This is console");

let wordLimit = document.getElementById("wordLimit");
let caste = document.getElementById("caste");
let clear = document.getElementById("clear");
let text = document.getElementById("text");
let myDropdown = document.getElementById("myDropdown");

if (inner.click) {
  myDropdown.style.display = "none";
  wordLimitSelect();
} else {
  myDropdown.style.display = "none";
}

function wordLimitSelect() {
  inner.addEventListener("click", function (e) {
    if (myDropdown.style.display === "none") {
      myDropdown.style.display = "inline-block";
    } else {
      myDropdown.style.display = "none";
    }
  });
}

caste.addEventListener("click", function (e) {
  // var stringMain = textarea.value.toString();
  // var stringLow = textarea.value.toString().toLowerCase();
  // var stringUp = textarea.value.toString().toUpperCase();
  // console.log('You have clicked the caste button',stringMain);
  // console.log('You have clicked the caste button',stringLow);
  console.log("You have clicked the caste button", stringUp);
});

clear.addEventListener("click", function (e) {
  console.log("You have clicked the clear button");
});
text.addEventListener("click", function (e) {
  console.log("You have clicked the text button");
});

function characters(params) {}

function words(params) {}

function sentences(params) {}

function para(params) {}

function wordRemain(params) {}



function twitter() {
  console.log("You have selected twitter, your word limit is 280.");
  let limit = document.getElementById("limit");
  limit.contains.display = "none";
  let SetLimit = 280;
  let textarea = document.querySelector("textarea");
  textarea.addEventListener("input",function() {
  console.log(".......................................................");
  var length = textarea.value.length;
  var myString = textarea.value.toString();
  spaceCount = myString.split(" ").length - 1;
  var characters = length - spaceCount;
  var patt = / +/g;
  var res = myString.replace(patt, " ");
  spaceCount1 = res.split(" ").length - 1; //counts multiple spaces as one
  var forSpace = myString.indexOf(" ");

  var words = 0;
  if (forSpace == 0) {
    words = spaceCount1 - 1;
  } else {
    words = spaceCount1;
  }

  // let sentences = 0;
  let indices = [];
  for (var i = 0; i < res.length; i++) {
    if (res[i] === ".") indices.push(i);
  }

  res = res.split("\n");
  var g = res.length;
  var para = 0;
  var strip_whitespace = /\s+/gi;
  while (g >= 0) {
    g--;
    var tmp = res[g];
    tmp = tmp ? tmp.replace(strip_whitespace, "") : tmp;
    if (tmp && tmp.length > 1) {
      para++;
      if (para>1) {
        characters--;
        words++;
      }    
    }
  }

  var sentences = indices.length;
  // console.log("number of characters........", characters);
  // console.log("number of words", words);
  // console.log("Sentences : ", sentences);
  // console.log("Paragraphs : " + para);

  let html = "";
  html += `this / ${SetLimit}`;
  text = [];
  character.innerHTML = `${characters} characters`;
  word.innerHTML = `${words} words`;
  sentence.innerHTML = `${sentences} sentences`;
  paragraph.innerHTML = `${para} paragraph`;
  limit.innerHTML = `${SetLimit - characters} characters left`;
});

}

function google() {
  console.log("You have selected google, your word limit is 300.");
  let limit = document.getElementById("limit");
  limit.contains.display = "none";
  let SetLimit = 300;
 
  
  let textarea = document.querySelector("textarea");
  textarea.addEventListener("input",function() {
  console.log(".......................................................");
  var length = textarea.value.length;
  var myString = textarea.value.toString();
  spaceCount = myString.split(" ").length - 1;
  var characters = length - spaceCount;
  var patt = / +/g;
  var res = myString.replace(patt, " ");
  spaceCount1 = res.split(" ").length - 1; //counts multiple spaces as one
  var forSpace = myString.indexOf(" ");

  var words = 0;
  if (forSpace == 0) {
    words = spaceCount1 - 1;
  } else {
    words = spaceCount1;
  }

  // let sentences = 0;
  let indices = [];
  for (var i = 0; i < res.length; i++) {
    if (res[i] === ".") indices.push(i);
  }

  res = res.split("\n");
  var g = res.length;
  var para = 0;
  var strip_whitespace = /\s+/gi;
  while (g >= 0) {
    g--;
    var tmp = res[g];
    tmp = tmp ? tmp.replace(strip_whitespace, "") : tmp;
    if (tmp && tmp.length > 1) {
      para++;
      if (para>1) {
        characters--;
        words++;
      }    
    }
  }

  var sentences = indices.length;
  // console.log("number of characters........", characters);
  // console.log("number of words", words);
  // console.log("Sentences : ", sentences);
  // console.log("Paragraphs : " + para);

  let html = "";
  html += `this / ${SetLimit}`;
  text = [];
  character.innerHTML = `${characters} characters`;
  word.innerHTML = `${words} words`;
  sentence.innerHTML = `${sentences} sentences`;
  paragraph.innerHTML = `${para} paragraph`;
  limit.innerHTML = `${SetLimit - characters} characters left`;
});

}

function manual() {
  console.log("You have selected manual, set your own word limit.");
  let limit = document.getElementById("limit");
  limit.contains.display = "none";
  let SetLimit = 1000;
  

  let textarea = document.querySelector("textarea");
  textarea.addEventListener("input",function() {
  console.log(".......................................................");
  var length = textarea.value.length;
  var myString = textarea.value.toString();
  spaceCount = myString.split(" ").length - 1;
  var characters = length - spaceCount;
  var patt = / +/g;
  var res = myString.replace(patt, " ");
  spaceCount1 = res.split(" ").length - 1; //counts multiple spaces as one
  var forSpace = myString.indexOf(" ");

  var words = 0;
  if (forSpace == 0) {
    words = spaceCount1 - 1;
  } else {
    words = spaceCount1;
  }

  // let sentences = 0;
  let indices = [];
  for (var i = 0; i < res.length; i++) {
    if (res[i] === ".") indices.push(i);
  }

  res = res.split("\n");
  var g = res.length;
  var para = 0;
  var strip_whitespace = /\s+/gi;
  while (g >= 0) {
    g--;
    var tmp = res[g];
    tmp = tmp ? tmp.replace(strip_whitespace, "") : tmp;
    if (tmp && tmp.length > 1) {
      para++;
      if (para>1) {
        characters--;
        words++;
      }    
    }
  }

  var sentences = indices.length;
  // console.log("number of characters........", characters);
  // console.log("number of words", words);
  // console.log("Sentences : ", sentences);
  // console.log("Paragraphs : " + para);

  let html = "";
  html += `this / ${SetLimit}`;
  text = [];
  character.innerHTML = `${characters} characters`;
  word.innerHTML = `${words} words`;
  sentence.innerHTML = `${sentences} sentences`;
  paragraph.innerHTML = `${para} paragraph`;
  limit.innerHTML = `${SetLimit - characters} characters left`;
});

}



let textarea = document.querySelector("textarea");
textarea.addEventListener("input",function() {
  // var maxLimit = 100;
  console.log(".......................................................");
  var length = textarea.value.length;
  var myString = textarea.value.toString();
  spaceCount = myString.split(" ").length - 1;
  var characters = length - spaceCount;
  var patt = / +/g;
  var res = myString.replace(patt, " ");
  spaceCount1 = res.split(" ").length - 1; //counts multiple spaces as one
  var forSpace = myString.indexOf(" ");

  var words = 0;
  if (forSpace == 0) {
    words = spaceCount1 - 1;
  } else {
    words = spaceCount1;
  }

  // let sentences = 0;
  let indices = [];
  for (var i = 0; i < res.length; i++) {
    if (res[i] === ".") indices.push(i);
  }

  res = res.split("\n");
  var g = res.length;
  var para = 0;
  var strip_whitespace = /\s+/gi;
  while (g >= 0) {
    g--;
    var tmp = res[g];
    tmp = tmp ? tmp.replace(strip_whitespace, "") : tmp;
    if (tmp && tmp.length > 1) {
      para++;
      if (para>1) {
        characters--;
        words++;
      }    
    }
  }

  var sentences = indices.length;
  console.log("number of characters........", characters);
  console.log("number of words", words);
  console.log("Sentences : ", sentences);
  console.log("Paragraphs : " + para);

  let SetLimit = 1000;
  let html = "";
  html += `this / ${SetLimit}`;
  text = [];
  character.innerHTML = `${characters} characters`;
  word.innerHTML = `${words} words`;
  sentence.innerHTML = `${sentences} sentences`;
  paragraph.innerHTML = `${para} paragraph`;
  limit.innerHTML = `${SetLimit - characters} characters left`;

});



function facebook() {
  console.log("You have selected facebook, your word limit is 250.");
  let section = document.getElementById("limit");
  section.contains.display = "none";



  let textarea = document.querySelector("textarea");
  textarea.addEventListener("input",function() {
  console.log(".......................................................");
  var length = textarea.value.length;
  var myString = textarea.value.toString();
  spaceCount = myString.split(" ").length - 1;
  var characters = length - spaceCount;
  var patt = / +/g;
  var res = myString.replace(patt, " ");
  spaceCount1 = res.split(" ").length - 1; //counts multiple spaces as one
  var forSpace = myString.indexOf(" ");

  var words = 0;
  if (forSpace == 0) {
    words = spaceCount1 - 1;
  } else {
    words = spaceCount1;
  }

  // let sentences = 0;
  let indices = [];
  for (var i = 0; i < res.length; i++) {
    if (res[i] === ".") indices.push(i);
  }

  res = res.split("\n");
  var g = res.length;
  var para = 0;
  var strip_whitespace = /\s+/gi;
  while (g >= 0) {
    g--;
    var tmp = res[g];
    tmp = tmp ? tmp.replace(strip_whitespace, "") : tmp;
    if (tmp && tmp.length > 1) {
      para++;
      if (para>1) {
        characters--;
        words++;
      }    
    }
  }

  var sentences = indices.length;
  // console.log("number of characters........", characters);
  // console.log("number of words", words);
  // console.log("Sentences : ", sentences);
  // console.log("Paragraphs : " + para);

  let SetLimit = 250;
  let html = "";
  html += `this / ${SetLimit}`;
  text = [];
  character.innerHTML = `${characters} characters`;
  word.innerHTML = `${words} words`;
  sentence.innerHTML = `${sentences} sentences`;
  paragraph.innerHTML = `${para} paragraph`;
  limit.innerHTML = `${SetLimit - characters} characters left`;
});

}

