/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdownEffect(e) {
    console.log('Drop');
   // document.getElementById("dropdown").classList.toggle("show");
}

window.onload = () => {
    console.log('Window onload');
    var btns = document.getElementsByClassName('dropbtn');
    for (let element of btns){
	element.addEventListener('click', dropItems);
//	element.addEventListener('blur', hideItems);
    }
}

// Close the dropdown if the user clicks outside of it
window.onfocus = function(e) {
    console.log('focus');  
    if (e.target.className === 'dropbtn') {
	var content = e.target.nextChild;
	console.log(content);
	if (content.classList.contains('show')) {
	    content.classList.remove('show');
	}
    }
}

function dropItems(e){
    // Close the dropdown if the user clicks outside of it
    console.log(e.target);  
    console.log(e.target.parentNode.children);
    let parent = e.target.parentNode;
    if (parent.children.length > 1){
	parent.children[1].classList.toggle("show");
	console.log(parent.children[1]);
    }
}

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
