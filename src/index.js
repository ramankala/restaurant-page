import aboutPg from './initialPage';
import menuPg from './menuTab';
import contactPg from './contactTab';

 aboutPg();


const content = document.querySelector("#content");



const naviBar = document.createElement('div');
naviBar.classList.add('naviBar');

const contactPage = document.createElement('div');
contactPage.classList.add('contactPage');
contactPage.setAttribute("id", "contactPage");
contactPage.textContent = "Contact";

const menuPage = document.createElement('div');
menuPage.classList.add('menuPage');
menuPage.setAttribute("id", "menuPage");
menuPage.textContent = "Menu";

const aboutPage = document.createElement('div');
aboutPage.classList.add('aboutPage');
aboutPage.setAttribute("id", "aboutPage");
aboutPage.textContent = "About";


naviBar.appendChild(aboutPage);
naviBar.appendChild(contactPage);
naviBar.appendChild(menuPage);

document.body.appendChild(naviBar);

document.body.insertBefore(naviBar, content);

aboutPage.addEventListener('click', function(){
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    aboutPg();
    
});



menuPage.addEventListener('click', function(){
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    menuPg();
});


contactPage.addEventListener('click', function(){
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }
    contactPg();
});





