function hover(element) {
    element.setAttribute('src', 'assets/img/' + element.className + '_hover.svg');
}
function unhover(element) {
    element.setAttribute('src', 'assets/img/' + element.className + '.svg');
}