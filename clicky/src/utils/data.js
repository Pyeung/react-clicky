let id = 0;

let imgs = [
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
]

function Card(img){
    id++;
    
    this.id = id;
    this.img = img;
    this.clicked = false;
}

export default imgs.map(link => new Card(link))