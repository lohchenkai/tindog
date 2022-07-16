// Create the Dog class here
    // name: "Rex",
    // avatar: "images/dog-rex.jpg",
    // age: 25,
    // bio: "Art. Literature. Natural wine. Yoga.",
    // hasBeenSwiped: false,
    // hasBeenLiked: false
export default class Dog {
    constructor(data){
        Object.assign(this, data);
    }
    
    getDogHTML(){
        return `
            <h2 class="main-name">${this.name}</h2>
            <h3 class="main-description">${this.bio}</h3>
            `
    }
    
    setBackground(){
        document.querySelector("main").style.backgroundImage = `url(${this.avatar})`;
    }
}