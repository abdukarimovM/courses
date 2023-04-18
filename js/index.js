function createElement(...restData) {
    let store = [];
    for(let el of restData){
        store.push(document.createElement(el))
    }
    return store;
}
let courses = [
    {
        id: 1,
        title: 'Foundation',
        price: '2 000 000',
        img: 'foundation.jpeg'
    },
    {
        id: 2,
        title: 'Nodejs',
        price: '2 300 000',
        img: 'nodejs.png'
    },
    {
        id: 3,
        title: 'Python',
        price: '2 600 000',
        img: 'py.jpeg'
    },
    {
        id: 4,
        title: 'Java',
        price: '2 300 000',
        img: 'java.png'
    },
    {
        id: 5,
        title: 'C++',
        price: '2 300 000',
        img: 'c++.png'
    },
    {
        id: 6,
        title: 'Js',
        price: '2 600 000',
        img: 'js.png'
    },  
    {
        id: 7,
        title: 'Go',
        price: '2 400 000',
        img: 'go.png'
    },  
    {
        id: 8,
        title: 'c#',
        price: '2 800 000',
        img: 'c_.png'
    }
]
let basic = document.querySelector('.basic');
for(let course of courses){
    let [div1, img, div2, h4, p1, p2, a] = createElement('div', 'img', 'div', 'h4', 'p', 'p', 'a')
    div1.className = 'card';
    img.className = 'img';
    img.src  = `./img/${course.img}`
    div2.className = 'container';
    h4.innerHTML = course.title;
    p1.innerHTML = course.price;
    p2.setAttribute('align', 'right');
    a.href = '#'
    a.innerHTML = `Batafsil...`

    p2.append(a);
    div2.append(h4, p1, p2);
    div1.append(img, div2);
    basic.append(div1)
}