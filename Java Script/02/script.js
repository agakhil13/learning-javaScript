const main = document.createElement("article")
const content = `
<ul>
        <li>Home</li>
        <li>Photos</li>
        <li>Contact Us</li>
        <li>About</li>
        <li>Support</li>
    </ul>
`;
main.innerHTML = content;

// document.body.append(main);
const h1 = document.querySelector("h1");
h1.insertAdjacentElement("afterend", main)