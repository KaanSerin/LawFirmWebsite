const downArrow = document.getElementById("downArrow");
const banner = document.getElementsByClassName("banner")[0];

// When the down arrow is clicked, trigger the scroll event
downArrow.addEventListener("click", event => {
    // Get the height of the div to know how much to scroll
    scrollHeight = banner.clientHeight;

    window.scroll({
        top: scrollHeight,
        left: 0,
        behavior: "smooth"
    });
});
