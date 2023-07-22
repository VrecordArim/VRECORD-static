function onClickHome() {
    onClickNav(0);
}

function onClickTalent() {
    onClickNav(1);
}

function onClickContent() {
    onClickNav(2);
}

function onClickGuide() {
    onClickNav(3);
}

function onClickNav(id) {
    switch (id) {
        case 0:
            document.getElementById("header").scrollIntoView({behavior: "smooth"});
            break;
        case 1:
            document.getElementById("talent-container").scrollIntoView({behavior: "smooth"});
            break;
        case 2:
            document.getElementById("content-container").scrollIntoView({behavior: "smooth"});
            break;
        case 3:
            document.getElementById("guide-container").scrollIntoView({behavior: "smooth"});
            break;
    }

    updateNavigationHighlight(id);
}

function updateNavigationHighlight(selectedId) {
    const navContainer = document.getElementsByClassName("nav-container")[0];
    const views = navContainer.querySelectorAll('.nav-item');
    
    for (let i = 0; i < views.length; i++) {
        if (i == selectedId)
            views[i].classList.add("nav-selected");
        else 
            views[i].classList.remove("nav-selected");
    }

}