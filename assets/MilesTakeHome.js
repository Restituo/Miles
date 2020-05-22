function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("txt", ev.target.id);
    console.log(ev.target.id);
}

function drop1(ev) {
    //ev.preventDefault();
    var data = ev.dataTransfer.getData("txt");
    var dragged = document.getElementById(data);
    var copied = document.getElementById(data).cloneNode(true);
    copied.id = "newId"; /* We cannot use the same ID */
    if (dragged.alt == "drag1"){
        ev.target.appendChild(copied);
    }
}
function drop2(ev) {
    //ev.preventDefault();
    var data = ev.dataTransfer.getData("txt");
    var dragged = document.getElementById(data);
    var copied = document.getElementById(data).cloneNode(true);
    copied.id = "newId2"; /* We cannot use the same ID */
    if (dragged.alt == "drag2"){
        ev.target.appendChild(copied);
    }
}
function drop3(ev) {
    //ev.preventDefault();
    var data = ev.dataTransfer.getData("txt");
    var dragged = document.getElementById(data);
    var copied = document.getElementById(data).cloneNode(true);
    copied.id = "newId3"; /* We cannot use the same ID */
    if (dragged.alt == "drag3"){
        ev.target.appendChild(copied);
    }
}
function drop4(ev) {
    //ev.preventDefault();
    var data = ev.dataTransfer.getData("txt");
    var dragged = document.getElementById(data);
    var copied = document.getElementById(data).cloneNode(true);
    copied.id = "newId4"; /* We cannot use the same ID */
    if (dragged.alt == "drag4"){
        ev.target.appendChild(copied);
    }
}
function drop5(ev) {
    //ev.preventDefault();
    var data = ev.dataTransfer.getData("txt");
    var dragged = document.getElementById(data);
    var copied = document.getElementById(data).cloneNode(true);
    copied.id = "newId5"; /* We cannot use the same ID */
    if (dragged.alt == "drag5"){
        ev.target.appendChild(copied);
    }
}
function removeReward(ev){
    if (ev.target.id == "newId"||"newId2"||"newId3"||"newId4"||"newId5"){
        ev.target.remove();
    }
}