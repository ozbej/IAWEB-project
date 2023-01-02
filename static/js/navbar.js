/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

/* Add event listeners for all of the <a> elements
   which has class .dropbtn */
window.onload = () => {
    console.log('Window onload');
    var btns = document.getElementsByClassName('dropbtn');
    for (let element of btns){
	element.addEventListener('click', dropItems);
	//element.addEventListener('blur', hideItems);
    }
}

// Just toggle the .show class, if there appears to be dropdown content
function dropItems(e){
    let parent = e.target.parentNode;
    if (parent.children.length > 1){
	parent.children[1].classList.toggle("show");
    }
}

// TODO
/* Not workin yet, needs to be added with listener above.*/
function hideItems(e){
    // Close the dropdown if the user clicks outside of it
    console.log(e.target);  
    console.log(e.target.parentNode.children);
    let parent = e.target.parentNode;
    if (parent.children.length > 1){
	parent.children[1].classList.toggle("show");
	console.log(parent.children[1]);
    }
}

