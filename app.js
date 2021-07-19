// we declare a new global variable containing an array that represents the ballons map
// you have to add more colors into the ballonsMap array
let ballonsMap = ['Acero', 'Agua', 'Bicho', 'Dragón', 'Eléctrico',
'Fantasma', 'Fuego', 'Hada', 'Hielo', 'Lucha', 'Normal', 'Planta', 
'Psíquico', 'Roca', 'Siniestro', 'Tierra', 'Veneno', 'Volador'];
let colorsMap = ['rgb(210	211	216)', 'rgb(85	151	242	)', 'rgb(210	220	128	)', 'rgb(118	108	178	)',
 'rgb(248 220 136)','rgb(155 156 196)', 'rgb(231	144	124)', 'rgb(233	176	233	)', 'rgb(148	215	247)',
'rgb(171	92	74)', 'rgb(213	211	210)', 'rgb(181	223	156)', 'rgb(236	158	185)', 'rgb(184	172	110	)',
	'rgb(108	94	84)', 'rgb(216	191	102)', 'rgb(191	145	184	)', 'rgb(162	189	239)'];
let counter = 4;
// poping a balloon is basically turning his color to null (no color)
const popBalloon = (position) => {
    // set the color to null on the balloon position
    if (ballonsMap[position] == 'Acero' || ballonsMap[position] == 'Bicho' || 
    ballonsMap[position] == 'Planta' || ballonsMap[position] == 'Hielo'){
        colorsMap[position] = null;
    }
    else (window.location.reload());
    counter = counter - 1;
    render();
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

   if (counter == 0) {document.querySelector("#congratulations").textContent = 'Congratulations!';}// <--- reload website when no more balloons are left
}
// this makes the "render" function trigger when the website starts existing
window.onload = render();