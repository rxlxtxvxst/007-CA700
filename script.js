document.addEventListener("DOMContentLoaded", function () {
    let video = document.getElementById("intro-video");

    video.addEventListener("ended", function () {
        video.style.display = "none";
    });

   
    video.play().catch(() => {
        video.muted = true;
        video.play();
    });
});
