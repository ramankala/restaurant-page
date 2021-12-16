export default function contactPg(){
    const content = document.querySelector('#content');

    const header = document.createElement('h1');
    header.classList.add('header');
    header.textContent = "Contact";

    const info = document.createElement('div');
    info.classList.add('info');
    info.textContent = `Phone: (xxx) xxx-xxxx
    Fax: (xxx) xxx-xxxx
    Email: thisisfake@email.ca
    
    Address: Nowhere Drive,
    Somewhere in the Universe`;

    const hours = document.createElement('div');
    hours.classList.add('hours');
    hours.textContent = `Monday: 2AM to 7AM
    Tuesday-Thursday: 2AM to 8AM
    Friday-Saturday: 2AM to 9AM
    Sunday: Closed`;

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

    content.appendChild(info);
    content.appendChild(hours);
    // document.body.insertBefore(naviBar, content);

    return content;
}