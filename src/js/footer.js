function openFooter() {
    let footerElement = document.getElementsByClassName("footer")[0];
    let classList = footerElement.classList;

    if(classList.contains("footer-open")) {
        classList.remove("footer-open");
    }
    else {
        classList.add("footer-open");
    }
}