document.addEventListener("DOMContentLoaded", function () {
    let video = document.getElementById("intro-video");

    video.addEventListener("ended", function () {
        video.style.display = "none"; // Hides video after it finishes
    });

    // Ensure iPad support for autoplay
    video.play().catch(() => {
        video.muted = true;
        video.play();
    });
});
