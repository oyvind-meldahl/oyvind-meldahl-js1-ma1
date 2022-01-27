//Question 1

let cat = {
  complain: function () {
    console.log("Meow!");
  },
};

cat.complain();

//Question 2

let heading = document.querySelector("h3");

heading = "Updated heading.";

document.querySelector("h3").innerHTML = heading;

//Question 3

document.querySelector("h3").style.fontSize = "2em";

//Question 4

heading = heading + '<div class="subheading">Subheading.</div>';
document.querySelector("h3").innerHTML = heading;

//Question 5

let paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

//Question 6

let resultsContainer = document.querySelector(".results");
resultsContainer = "<p>New paragraph</p>";
document.querySelector(".results").innerHTML = resultsContainer;
document.querySelector(".results").style.backgroundColor = "Yellow";

//Question 7

const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

function nameList(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

nameList(cats);

//Question 8

let catDetails = "";

function createCats(cats) {
  for (let i = 0; i < cats.length; i++) {
    cats[i].age = cats[i].age * 1;
    if (typeof cats[i].age !== "number" || isNaN(cats[i].age) === true) {
      cats[i].age = "Age unknown.";
      //Added functionality to allow cats age to be both undefined and "number as a string".
    }
    catDetails = catDetails + "<div>" + "<h5>" + cats[i].name + "</h5>" + "<p>" + cats[i].age + "</p>" + "</div>";
  }

  return catDetails;
}

createCats(cats);

document.querySelector(".cat-container").innerHTML = catDetails;
