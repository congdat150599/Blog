// Elements
let menuToggleBtn = document.querySelector(".menu-toggle");
let headToggleBtn = document.querySelector(".headnav-toggle");
let header = document.querySelector("header");
let headerHolder = document.querySelector(".head-holder");
let navMenu = header.querySelector(".nav");
// Properties
// - Check if the Header Nav is currently Moved to the Side or not
let headNavSided = false;
let headerHeight = 66;

function toggleNav() {
    navMenu.classList.toggle("showing");
}

function toSideHeadNav() {
    // Hold the Header Layout
    headerHolder.style.display = "block";
    // Move to the Side
    header.classList.remove("header");
    header.classList.add("header-side");
    header.style.display = "none";
    // Head nav Toggle Btn
    showHeadNavToggle();
}

function reshowHeadNav() {
    // Return to Default Layout
    headerHolder.style.display = "none";
    // REshow on Top
    header.classList.remove("header-side");
    header.classList.add("header");
    // Reset Displaying Animations
    header.style.display = "block";
    header.style.transform = "";
    // Hide Toggle
    headToggleBtn.style.display = "none";
}

function showHeadNavToggle() {
    // Flex for the inner Imgs
    headToggleBtn.style.display = "flex";
    // Responsive position or Default position:
    if (headToggleBtn.classList.contains("responsive")) {

    } else {
        let headNavWidth = headToggleBtn.offsetWidth;
        console.log(headNavWidth);
        gsap.fromTo(headToggleBtn, {duration: 0.5, x:headNavWidth}, {x:0});
    }
}

function showHeader() {
    header.style.display = "flex";
    if (header.classList.contains("responsive")) {

    } else {
        let headerWidth = header.offsetWidth;
        console.log(headerWidth);
        gsap.fromTo(header, {duration: 0.5, x:headerWidth}, {x:0});
        gsap.fromTo(headToggleBtn, {duration: 0.5, x:0}, {x:-headerWidth}, "-=0.5");
    }
}

function hideHeader() {
    if (header.classList.contains("responsive")) {

    } else {
        // Won't hide default top-page header
        if (header.classList.contains("header-side")) {
            let headerWidth = header.offsetWidth;
            console.log(headerWidth);
            gsap.to(
                header, 
                {
                    duration: 0.5, 
                    x:headerWidth, 
                    onComplete:function() {
                            header.style.display = "none";
                    }
                }
            );
            gsap.to(
                headToggleBtn,
                {
                    duration: 0.5,
                    x:0
                },
                "-=0.5"     // At the same time as the previous Animations
            );
        }
    }
}

// Main Function
// - With Rendering
// - With Updating
function main() {
    window.addEventListener(
        'scroll',
        function() {
            if (window.pageYOffset > headerHeight * 2) {
                if (!headNavSided) {
                    toSideHeadNav();
                    headNavSided = true;
                }
            } else {
                if (headNavSided) {
                    reshowHeadNav();
                    headNavSided = false;
                }
            }
        }
    );
    
    headToggleBtn.addEventListener(
        'click',
        function() {
            if (header.style.display == "none")
                showHeader();
            else {
                hideHeader();
            }
        }
    );
    
    //Detect Click outside to close Header Side
    document.addEventListener(
        'click',
        function (event) {
            let target = event.target;
            console.log(target);
            // Clicking outside of the Header
            // - ANd not children of the Toggler
            if (
                target != header && 
                target != headToggleBtn &&
                !headToggleBtn.contains(target) &&
                target.closest(".header-side") == null) {
                // If the Header is visible
                if (header.style.display != "none") {
                    hideHeader();
                }
            }
        }
    );

    menuToggleBtn.addEventListener(
        'click',
        function() {
            toggleNav();
        }
    );
}

main();