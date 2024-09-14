const musicList = [
    { title: "Track 1", src: "music1.mp3", cover: "cover1.jpg", artist: "Artist 1", download: "music1.mp3" },
    { title: "Track 2", src: "music2.mp3", cover: "cover2.jpg", artist: "Artist 2", download: "music2.mp3" },
    { title: "Track 3", src: "music3.mp3", cover: "cover3.jpg", artist: "Artist 3", download: "music3.mp3" }
];

let currentMusicIndex = 0;
let isPlaying = false;
const audio = new Audio(musicList[currentMusicIndex].src);
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const musicTitle = document.getElementById('music-title');
const artistName = document.getElementById('artist-name');
const musicCover = document.getElementById('music-cover');
const showPlaylistBtn = document.getElementById('showPlaylistBtn');
const playlist = document.getElementById('playlist');

function updateMusicPlayer() {
    audio.src = musicList[currentMusicIndex].src;
    musicTitle.innerText = `${musicList[currentMusicIndex].title} is playing`;
    artistName.innerText = musicList[currentMusicIndex].artist;
    musicCover.style.backgroundImage = `url('${musicList[currentMusicIndex].cover}')`;
    audio.load();
}

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.innerHTML = `
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z" fill="#000000"/>
            </svg>
        `;
    } else {
        audio.play();
        playPauseBtn.innerHTML = `
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="5" width="4" height="14" rx="1" fill="#000000"/>
                <rect x="14" y="5" width="4" height="14" rx="1" fill="#000000"/>
            </svg>
        `;
    }
    isPlaying = !isPlaying;
});

prevBtn.addEventListener('click', () => {
    currentMusicIndex = (currentMusicIndex === 0) ? musicList.length - 1 : currentMusicIndex - 1;
    updateMusicPlayer();
    if (isPlaying) audio.play();
});

nextBtn.addEventListener('click', () => {
    currentMusicIndex = (currentMusicIndex === musicList.length - 1) ? 0 : currentMusicIndex + 1;
    updateMusicPlayer();
    if (isPlaying) audio.play();
});

showPlaylistBtn.addEventListener('click', () => {
    if (playlist.style.display === "none") {
        playlist.style.display = "block";
    } else {
        playlist.style.display = "none";
    }
});

playlist.addEventListener('click', (e) => {
    if (e.target.closest('li')) {
        currentMusicIndex = parseInt(e.target.closest('li').getAttribute('data-index'));
        updateMusicPlayer();
        if (isPlaying) audio.play();
    }
});

updateMusicPlayer();
