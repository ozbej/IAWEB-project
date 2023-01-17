/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

/* Add event listeners for all of the <a> elements
   which has class .dropbtn */
window.onload = () => {
    const btns = document.getElementsByClassName('dropbtn');
    for (let element of btns){
        element.addEventListener('click', showItems);
        element.parentNode.addEventListener('focusout', hideItems);
    }
}

// Just toggle the .show class, if there appears to be dropdown content
function showItems(e){
    let parent = e.target.parentNode;
    if (parent.children.length > 1){
        parent.children[1].classList.toggle("show");
    }
}

// Hides the dropdown on unfocus
function hideItems(e){
    const target = e.target;
    const parent = target.parentNode;
    const related = e.relatedTarget;
    if (related != null && parent === related.parentNode) {
        return;
    }
    // Unfocused from dropdown header
    if (target.classList.contains("dropbtn") && (related == null || related.parentNode.parentNode !== parent)) {
        if (parent.children.length > 1) {
            parent.children[1].classList.remove("show");
        }
    } else {
        // Unfocused from dropdown link
        parent.classList.remove("show");
    }

}

function hamburgerToggle(e) {
    var items = document.getElementsByClassName("dropdown");
    for (let item of items) {
        if (item.style.display === "block") {
            item.style.display = "none";
        } else {
        item.style.display = "block";
        }
    }
  }

