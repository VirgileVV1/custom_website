


"Est ce que le menu est déplié ?"
var is_menu_deployed = { docs:false, courses:false};

function menuAction(id) {
    console.log(document.URL)

    img = document.getElementById(id+'-arrow')
    sub_menu = document.getElementById(id+'-sub-menu')
    console.log(sub_menu)
    is_menu_deployed["docs"] = is_menu_deployed["docs"] ? false : true;
    is_menu_deployed["courses"] = is_menu_deployed["courses"] ? false : true;


    if (id == "docs") {
        if (is_menu_deployed["docs"]) {
            img.style.transform = "rotate(0deg)";
            sub_menu.style.display = "list-item";
        } else {
            img.style.transform = "rotate(180deg)";
            sub_menu.style.display = "none";

        }
    }
    else if (id == "courses") {
        if (is_menu_deployed["courses"]) {
            img.style.transform = "rotate(0deg)";
            sub_menu.display = "list-item";

        } else {
            img.style.transform = "rotate(180deg)";
            sub_menu.display = "none" 
        }
    }  
}