// we declare a new global variable containing an array that represents the ballons map
// you have to add more colors into the ballonsMap array
let ballonsMap = ['Steel', 'Water', 'Bug', 'Dragon', 'Electric',
'Ghost', 'Fire', 'Fairy', 'Ice', 'Fight', 'Normal', 'Grass', 
'Psychic', 'Rock', 'Sinister', 'Ground', 'Poison', 'Flying'];
let colorsMap = ['rgb(210	211	216)', 'rgb(85	151	242	)', 'rgb(210	220	128	)', 'rgb(118	108	178	)',
 'rgb(248 220 136)','rgb(155 156 196)', 'rgb(231	144	124)', 'rgb(233	176	233	)', 'rgb(148	215	247)',
'rgb(171	92	74)', 'rgb(213	211	210)', 'rgb(181	223	156)', 'rgb(236	158	185)', 'rgb(184	172	110	)',
    'rgb(108	94	84)', 'rgb(216	191	102)', 'rgb(191	145	184	)', 'rgb(162	189	239)'];
// Get the modal
var modal = document.getElementById("myModal");
var modalCorrect = document.querySelector("#correct");
var modalNotCorrect = document.querySelector("#notCorrect");
let counter = 4;
// poping a balloon is basically turning his color to null (no color)
const popBalloon = (position) => {
    // set the color to null on the balloon position
    if (ballonsMap[position] == 'Steel' || ballonsMap[position] == 'Bug' || 
    ballonsMap[position] == 'Grass' || ballonsMap[position] == 'Ice'){
        colorsMap[position] = null;
        counter = counter - 1;
    }
    else (modal.style.display = "block", modalCorrect.style.display = "none") ;
    render();
     if (counter == 0) {
        modal.style.display = "block"
        modalCorrect.style.display = "block"
        modalNotCorrect.style.display = "none"
    }
}

const render = () => {
    // convert ballons map of colors into real html balloons
    const ballons = colorsMap.map((color, position) => {

        let visible = "visible"
        if (color === null) {
            visible = "popped"
        }

        return `<div class="balloon ${visible}" style="background: ${colorsMap[position]}"
        onClick = "popBalloon(${position});"><p>${ballonsMap[position]}</p></></div>`; // <--- render each balloon
    });
    // Shows Counter
    document.querySelector("#balloon-count").innerHTML = (colorsMap.filter(b => b !== null).length - 14); // <-- render the balloon count into the DOM
    
    //Shows balloons
    document.querySelector("#balloon-map").innerHTML = ballons.join(''); // <-- render the balloons into the DOM

   // <--- reload website when no more balloons are left

}
// this makes the "render" function trigger when the website starts existing
window.onload = () => {
    render()
};

// Get the button that reloads
var btn = document.querySelector("#myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function() {
  window.location.reload();
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}