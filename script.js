let myBtn = document.getElementById("btt");

function scrollfunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        myBtn.style.display = "block";
    } else {
        myBtn.style.display = "none";
    }
}

window.onscroll = function() {
    scrollfunction();
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}