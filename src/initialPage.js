
export default function aboutPg() {
    const content = document.querySelector('#content');

    const header = document.createElement('h1');
    header.classList.add('header');
    header.textContent = "Potatoes of Heaven";

    const about = document.createElement('p');
    about.classList.add('about');
    about.textContent = `Here at Potatoes of Heaven you will experience why Potatoes are the greatest through it's divine dishes.`;

    const logo = document.createElement('IMG');
    logo.classList.add('logo');
    logo.src = "https://images.theconversation.com/files/401955/original/file-20210520-23-83r6ds.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop";
    
    content.appendChild(header);
    content.appendChild(logo);
    content.appendChild(about);

    return content;

}
