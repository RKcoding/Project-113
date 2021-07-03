function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 250, 200, 100, 100);

    fill("#8403fc");
    stroke("#f403fc");
    rect(145, 95, 300, 20);
    rect(145, 390, 300, 20);
    rect(105, 102.5, 20, 300);
    rect(462.5, 102.5, 20, 300);

    fill("#f403fc");
    stroke("#8403fc");
    circle(115, 100, 70);
    circle(115, 395, 70);
    circle(472, 100, 70);
    circle(472, 395, 70);
}

function take_picture() {
    save("BirthdayImage.png")
}
