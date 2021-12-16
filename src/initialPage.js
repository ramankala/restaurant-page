
export default function aboutPg() {
    const content = document.querySelector('#content');

    const header = document.createElement('h1');
    header.classList.add('header');
    header.textContent = "Wood Fired Oven Pizzeria";

    const about = document.createElement('p');
    about.classList.add('about');
    about.textContent = `          Our traditional home style cooking is just that! We bring all the flavours of home right to your table. Whether your dining in, ordering out, or letting us cater for all your special occasions, our celebration of tradition is sure to make your friends and family smile! We invite you to try our authentic Southern Italian family recipes. By combining daily fresh ingredients and a touch of modern flare we have created a taste and quality which many have come to call home.

    Experience the Excellence.

    Sincerely,
    Raman Kala.`;

    const logo = document.createElement('IMG');
    logo.classList.add('logo');
    logo.src = "https://cdn.w600.comps.canstockphoto.com/pizza-cook-peel-wood-fired-oven-crest-clipart-vector_csp38451851.jpg";

    const naviBar = document.createElement('div');

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
    
    content.appendChild(naviBar);
    content.appendChild(header);
    content.appendChild(logo);
    content.appendChild(about);

    return content;

}
