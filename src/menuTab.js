export default function menuPg(){
    const content = document.querySelector('#content');

    const header = document.createElement('h1');
    header.classList.add('header');
    header.textContent = "Menu";

    const img1 = document.createElement('img');
    img1.classList.add('img1');
    img1.src = "https://www.jocooks.com/wp-content/uploads/2019/03/mashed-potatoes-1-7.jpg";

    const item1 = document.createElement('div');
    item1.classList.add('item1');
    item1.textContent = ` MASHED POTATO

    Incredibly delicious, creamy, and buttery.`;

    const img2 = document.createElement('img');
    img2.classList.add('img2');
    img2.src = "https://www.acouplecooks.com/wp-content/uploads/2021/09/Baked-Potato-Toppings-009.jpg";

    const item2 = document.createElement('div');
    item2.classList.add('item2');
    item2.textContent = `BAKED POTATO

    The crispiest skin, and the creamiest, fluffiest flesh.`;

    const img3 = document.createElement('img');
    img3.classList.add('img3');
    img3.src = "https://healthyfitnessmeals.com/wp-content/uploads/2020/05/instagram-In-Stream_Square___Baked-potato-wedges-4.jpg";

    const item3 = document.createElement('div');
    item3.classList.add('item3');
    item3.textContent = `GARLIC PARMESAN BAKED POTATO WEDGES

    Perfectly crispy potato wedges with parmesan cheese, garlic powder, and fresh parsley.`;


    content.appendChild(header);
    content.appendChild(img1);
    content.appendChild(item1);
    content.appendChild(img2);
    content.appendChild(item2);
    content.appendChild(img3);
    content.appendChild(item3);



    
    return content;
}