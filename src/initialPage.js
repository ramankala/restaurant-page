
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

    // const naviBar = document.createElement('div');

    // const contactPage = document.createElement('div');
    // contactPage.classList.add('contactPage');
    // contactPage.setAttribute("id", "contactPage");
    // contactPage.textContent = "Contact";
    
    // const menuPage = document.createElement('div');
    // menuPage.classList.add('menuPage');
    // menuPage.setAttribute("id", "menuPage");
    // menuPage.textContent = "Menu";
    
    // const aboutPage = document.createElement('div');
    // aboutPage.classList.add('aboutPage');
    // aboutPage.setAttribute("id", "aboutPage");
    // aboutPage.textContent = "About";
    
    
    // naviBar.appendChild(aboutPage);
    // naviBar.appendChild(contactPage);
    // naviBar.appendChild(menuPage);
    // document.body.appendChild(naviBar);
    
    content.appendChild(header);
    content.appendChild(logo);
    content.appendChild(about);

    // document.body.insertBefore(naviBar, content);

    return content;

}