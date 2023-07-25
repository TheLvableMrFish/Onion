const imgCol = [
    {
        img: "img1.jpg",
        size: 4,
        text: "Hey Ash!"
    },
    {
        img: "img15.jpg",
        size: 8,
        text: "Thank you for the penguin experince"
    },
    {
        img: "img11.jpg",
        size: 4,
        text: "Thank you for going places with me"
    },
    {
        img: "img4.jpg",
        size: 4,
        text: "Being a disney princess"
    },
    {
        img: "img10.jpg",
        size: 4,
        text: "Even if you are a horse girl"
    },
    {
        img: "img9.jpg",
        size: 4,
        text: "I still love you"
    },
    {
        img: "img12.jpg",
        size: 4,
        text: "Thanks for being out of this world"
    },
    {
        img: "img2.jpg",
        size: 4,
        text: "Thanks for being a lil goofy"
    },
    {
        img: "img3.jpg",
        size: 4,
        text: "And then some"
    },
    {
        img: "img8.jpg",
        size: 4,
        text: "Along with making memories"
    },
    {
        img: "img4.jpg",
        size: 4,
        text: "And most of all"
    },
    {
        img: "img7.jpg",
        size: 4,
        text: "Thank you for loving Phil..."
    },
    {
        img: "img13.jpg",
        size: 4,
        text: "... Stella ..."
    },
    {
        img: "img6.jpg",
        size: 4,
        text: "... and Me"
    }
]


const row = document.getElementById('row')

row.innerHTML = ''

for(i = 0; i < imgCol.length; i++){
    row.innerHTML += `
        <div class="col-md-${imgCol[i].size} img-text-box">
            ${imgCol[i].text == "" ? "" : `<p class="img-text">${imgCol[i].text}</p>`}
            <img src="./media/${imgCol[i].img}" alt="" class="img-height img-fluid">
        </div>
    `
}
