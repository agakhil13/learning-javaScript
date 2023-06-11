const main = document.createElement("main");

const myData = [
    {
        "f_name": "Aman",
        "l_name": "Sharma",
        "gender": "Male"
    },
    {
        "f_name": "Ashish",
        "l_name": "Mishra",
        "gender": "M"
    }
]

const addEntry = (info) => {
    const newArticle = document.createElement("article")
    newArticle.innerHTML = `
    <h1>${info.f_name}'s data</h1>
    <ul style="display:inline-block";>
        <li>First Name: ${info.f_name}</li>
        <li>Last Name: ${info.l_name}</li>
        <li>Gender: ${info.gender}</li>
    </ul>
    `;
    return newArticle
}

myData.forEach(item => {
    main.append(addEntry(item)); 
})

document.body.append(main);

const p_head = `
<h1 style="text-align:center;">Page Heading</h1>
<hr>
`
document.body.insertAdjacentHTML("afterbegin", p_head)
document.body.style.margin = "30px";
document.body.style.color = "green"

const Name = document.querySelectorAll("li")
    Name.forEach(liName => {
    liName.addEventListener("mouseenter", () => {
        liName.style.color = "white";
        liName.style.backgroundColor = "grey";
    });
    liName.addEventListener("mouseleave", () => {
        liName.style.color = "green";
        liName.style.backgroundColor = "white";
    });
})