const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');

const tracks = [
    {
        title: "Track 1",
        artist: "Artist 1",
        src: "music3.mp3"
    },
    {
        title: "Track 2",
        artist: "Artist 2",
        src: "music4.mp3"
    },
    {
        title: "Track 3",
        artist: "Artist 3",
        src: "music5.mp3"
    }
];

let currentTrackIndex = 0;

function loadTrack(trackIndex) {
    const track = tracks[trackIndex];
    audio.src = track.src;
    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;
}

function playTrack() {
    audio.play();
    playPauseBtn.textContent = "Pause";
}

function pauseTrack() {
    audio.pause();
    playPauseBtn.textContent = "Play";
}

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        playTrack();
    } else {
        pauseTrack();
    }
});

prevBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex > 0) ? currentTrackIndex - 1 : tracks.length - 1;
    loadTrack(currentTrackIndex);
    playTrack();
});

nextBtn.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex < tracks.length - 1) ? currentTrackIndex + 1 : 0;
    loadTrack(currentTrackIndex);
    playTrack();
});

// Load the first track on page load
loadTrack(currentTrackIndex);
