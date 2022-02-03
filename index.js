// printing on running of the code for the fisrt time
console.log("Welcome to spotify");

// --------------------initialising the variables------------
let songIndex = 0;

const masterPlay = document.getElementById("master");
// here Audio is a keyword
let audioElement = new Audio("song.mp3");
// audioElement.play();
let myProgressBar=document.getElementById('music-range');

// defining array of songs
let songs = [
    {
        songName: "Salam-E-Ishq",
        filePath: "song.mpeg",
        coverPath: "img/song.jpg",
    },
    {
        songName: "Salam-E-Ishq",
        filePath: "song.mpeg",
        coverPath: "img/song.jpg",
    },
    {
        songName: "Salam-E-Ishq",
        filePath: "song.mpeg",
        coverPath: "img/song.jpg",
    },
    {
        songName: "Salam-E-Ishq",
        filePath: "song.mpeg",
        coverPath: "img/song.jpg",
    },
];
// to play the son we use this element
console.log("master", masterPlay);




// adding play pause click
masterPlay.addEventListener("click", () => {
    // here paused & currentTime are keywords for function
    if (audioElement.paused || audioElement.currentTime <= 0) {
        // condition if  if the song is paused
        console.log("if condition ran");
        audioElement.play();
        // to change icons on play plause
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    } else {
        // condition if the song is in play
        console.log("else condition ran");
        audioElement.pause();
        // to change icons on play plause
        masterPlay.classList.add("fa-play");
        masterPlay.classList.remove("fa-pause-circle");
        gif.style.opacity = 0;
    }
});

// accesing the time of the music
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
   progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   console.log(progress);
    myProgressBar.value=progress;
})