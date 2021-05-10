function myFunction() {
    document.getElementById("navigation").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.Denger')) {
        let dropdowns = document.getElementsByClassName("Menu");
        let i;

        for (i = 0; i < dropdowns.length; i++) {
            let Open = dropdowns[i];
            if (Open.classList.contains('show')) {
                Open.classList.remove('show');
            }
        }
    }
}
