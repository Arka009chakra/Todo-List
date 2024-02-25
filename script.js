let x = document.getElementById("t1"); //point out the display box id
let y = document.querySelector(".text"); /* we are going to create list inside 
the div having class name text.There are multiple options so select those one by one 
query selector is used */
function fun()
{
    let new1 = document.createElement("ul");//create list inside div having class name text
    new1.innerHTML = `${x.value} <i class="fa-solid fa-trash"></i>` //attach value
    y.appendChild(new1); //show the value inside text
    x.value=""; //after append nothing present in the display box
    new1.querySelector("i").addEventListener("click",remove); //provide functionality to the delete button
    function remove()
    {
        new1.remove(); //remove element
    }
}
