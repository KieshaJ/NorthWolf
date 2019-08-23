function changeContent(contentName) {
    let heading = document.getElementById("main-content").getElementsByTagName("h2")[0];

    if(contentName === "home") {
        heading.innerHTML = "<strong>/ Home</strong>";
    }
    else if(contentName === "features") {
        heading.innerHTML = "<strong>/ Features</strong>";
    }
    else if(contentName === "pricing") {
        heading.innerHTML = "<strong>/ Pricing</strong>";
    }
    else if(contentName === "contact") {
        heading.innerHTML = "<strong>/ Contact us</strong>";
    }
}