import myclass from "./myvar_file.js";

const updateData = (update) => {
  let main = document.querySelector("main"); // main is an element
  main.innerHTML = markup(myvar);
  console.info(update);
};


const hobby = {
    activity1: "Bike Riding",
    activity2: "Trekking"
};

const myvar = new myclass(
    "My Data",
    "Akhil",
    "Gupta",
    "Male"
);
   
myvar.changeFirstName("Ram");


const markup = (data) => {
  return `
  <div>
	<h3>${data.title}</h3>
	<ul>
	  <li>First Name: ${data.first_name}</li>
	  <li>Last Name: ${data.last_name}</li>
	  <li>Gender: ${data.gender}</li>
	</ul>
  </div>
`;
};

const main = document.createElement("main");
main.innerHTML = markup(myvar);
document.body.appendChild(main);
console.log(myvar)
console.log("Activity 1:", hobby.activity1)