

const SOURCES_MOVES = {
    FRONT: "./images/front.svg",
    BACK: "./images/back.svg"
};
const move = [
    SOURCES_MOVES.FRONT, SOURCES_MOVES.BACK
];
const randomMove = () => {
    return Math.random() < 0.5 ? 1 : 0;
}

let btn1 = document.getElementById("Front-btn");
btn1.addEventListener("click", () => {
    console.log("you had press front")
    document.querySelector(".player").innerHTML = `<img id="player1" src=${"./images/front.svg"} alt="">`


}
)
let btn2 = document.getElementById("Back-btn");
btn2.addEventListener("click", () => {
    console.log("you had press back")

    document.querySelector(".player").innerHTML = `<img id="player1" src=${"./images/back.svg"} alt="">`

})


const render = () => {
    comp1Img = document.getElementById("front");
    comp2Img = document.getElementById("back");
    player1Img = document.getElementById("player1");
    comp1Img.src = move[randomMove()];
    comp2Img.src = move[randomMove()];
    // player1Img.src =move[randomMove()];


    if ((comp1Img.src === comp2Img.src) && (player1Img.src != comp1Img)) {
        console.log("winner winner chicken dinner");
    }
    else {
        console.log("no winner")
    }


}
const winnerCheck = () => {

}
const main = () => {


    setTimeout(render(),8000);





}
main();
