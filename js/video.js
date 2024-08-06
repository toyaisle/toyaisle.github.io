document.addEventListener('DOMContentLoaded', function () {
    var videoPlayer = document.getElementById('videoPlayer');
    var playButton = document.getElementById('playButton');
    var pauseButton = document.getElementById('pauseButton');

    if (videoPlayer && playButton && pauseButton) {
        playButton.addEventListener('click', function () {
            videoPlayer.play();
        });

        pauseButton.addEventListener('click', function () {
            videoPlayer.pause();
        });
    }
});
