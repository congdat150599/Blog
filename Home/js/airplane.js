function flyLoop() {
    var plane = document.querySelector(".airplane");
    var planeTL = new TimelineMax({repeat: -1});
    planeTL.fromTo(plane, 5, {x:-100, ease:Linear.easeNone}, {x:1400, ease:Linear.easeNone}, 0);
}

flyLoop();