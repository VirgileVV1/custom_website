


/*
This dictionnary store boolean
With these boolean we can know if menu or submenus are expanded


if docs == false it means that sub menu for Document is not expanded 
if courses == false it means that sub menu for Cours is not expanded 
if phone == false it means that the menu is not expanded (phone version) 
*/
var is_menu_expanded = { docs:false, courses:false, phone:false};


/**
 * This method allow to expand and reduce all the sub-menus
 * @param {*} id : the id of the HTML element which called the function
 */
function menuAction(id) {
    console.log(document.URL)

    img = document.getElementById(id+'-arrow')
    sub_menu = document.getElementById(id+'-sub-menu')
    console.log(sub_menu)
    is_menu_expanded["docs"] = is_menu_expanded["docs"] ? false : true;
    is_menu_expanded["courses"] = is_menu_expanded["courses"] ? false : true;


    if (id == "docs") {
        if (is_menu_expanded["docs"]) {
            img.style.transform = "rotate(0deg)";
            sub_menu.style.display = "list-item";
            sub_menu.style.width = "100%";
        } else {
            img.style.transform = "rotate(180deg)";
            sub_menu.style.display = "none";
            sub_menu.style.width = "0%";

        }
    }
    else if (id == "courses") {
        if (is_menu_expanded["courses"]) {
            img.style.transform = "rotate(0deg)";
            /*sub_menu.display = "list-item";*/
            sub_menu.style.height = "100%";


        } else {
            img.style.transform = "rotate(180deg)";
            /*sub_menu.display = "none" */
            sub_menu.style.heught = "0%";

        }
    }  
}


/* Method called when all the html is loaded */
document.addEventListener('DOMContentLoaded', ()=> {
    mooveInvoiceTable()
})

/**
 * Allow to add the menu at the right on the my/invoice page
 */
function mooveInvoiceTable() {
    console.log("test")
    //var session = require('web.session');
    //console.log(session)
    //user = session.uid
    //console.log(user)
    let container = document.getElementById('wrap').childNodes[1]
    
    div = document.createElement('div')
    div.classList.add("d-flex")
    div.classList.add("justify-content-between")
    div.classList.add("col-12")

    /* menu */
    div.appendChild(container.childNodes[3])
    
    /* table */
    container.childNodes[4].classList.add("col-12")
    container.childNodes[4].classList.add("col-xl-70")  
    div.appendChild(container.childNodes[4])
    
    console.log(container.firstChild)
    container.childNodes[1].after(div)
    /*container.insertAfter(div, container.firstChild);*/ 
    console.log(container)

}

/**
 * This method allow to expand and reduce the menu (for phone version)
 * ONLY if the width of the page is greater than 1200px
 */
function expandMenu() {
    if (window.innerWidth < 1200) {
        if (is_menu_expanded["phone"] == false) {
            document.getElementsByClassName("lst-none")[0].style.display = "block"
            is_menu_expanded["phone"] = true
        } else {
            document.getElementsByClassName("lst-none")[0].style.display = "none"
            is_menu_expanded["phone"] = false
        }
    }
}


/* the method expandMenuAuto is assigned to the resize event of the window */
window.onresize = expandMenuAuto;

/**
 * the method expand the menu automatically if the width is greater than 1200px 
 */
function expandMenuAuto() {
    if (window.innerWidth >= 1200) {
        document.getElementsByClassName("lst-none")[0].style.display = "block"
        is_menu_expanded["phone"] = true
    }
}
