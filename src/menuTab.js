export default function menuPg(){
    const content = document.querySelector('#content');

    const header = document.createElement('h1');
    header.classList.add('header');
    header.textContent = "Menu";

    const img1 = document.createElement('img');
    img1.classList.add('img1');
    img1.src = "https://i.ytimg.com/vi/oodaFFI9YZ0/maxresdefault.jpg";

    const item1 = document.createElement('div');
    item1.classList.add('item1');
    item1.textContent = ` FAMILIAR

    Mozzarella, Dry Cured Pepperoni.`;

    const img2 = document.createElement('img');
    img2.classList.add('img2');
    img2.src = "https://www.foodrepublic.com/wp-content/uploads/2017/04/17342831_1605747926120287_6218996072768856206_n.jpg";

    const item2 = document.createElement('div');
    item2.classList.add('item2');
    item2.textContent = `MARGHERITA

    Fior Di Latte, Basil.`;

    const img3 = document.createElement('img');
    img3.classList.add('img3');
    img3.src = "https://media.istockphoto.com/photos/gourmet-homemade-assorted-wood-fired-pizzas-picture-id1085447592?s=170667a";

    const item3 = document.createElement('div');
    item3.classList.add('item3');
    item3.textContent = `SAUSAGE & PEPPERS

    Mozzarella, Crumbled Sausage, Nduja & Pepper.`;

    content.appendChild(header);
    content.appendChild(img1);
    content.appendChild(item1);
    content.appendChild(img2);
    content.appendChild(item2);
    content.appendChild(img3);
    content.appendChild(item3);
    

}