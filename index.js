// printing on running of the code for the fisrt time
console.log("Welcome to spotify");

// --------------------initialising the variables------------
let songIndex = 0;

const masterPlay = document.getElementById("master");
// here Audio is a keyword
let audioElement = new Audio("song.mp3");
// audioElement.play();
let myProgressBar=document.getElementById('music-range');

let songItems=Array.from(document.getElementsByClassName('container-song'));

// defining array of songs
let songs = [
    {
        songName: "BellaCiao-MoneyHeist",
        filePath: "song/bellaciao.mpeg",
        coverPath: "img/bellaciao.jpg",
    },
    {
        songName: "Mahabharat Title song",
        filePath: "songs/mahabharat.mpeg",
        coverPath: "img/MAHABHARAT.jpg",
    },
    {
        songName: "Tu hi yaar mera- Pati Patni Or Woh",
        filePath: "songs/yaarmera.mpeg",
        coverPath: "img/yaarmera.jpg",
    },
    {
        songName: "Rider-EmmaHesters",
        filePath: "songs/rider.mpeg",
        coverPath: "img/rider.jpg",
    },
];
// to play the son we use this element
console.log("master", masterPlay);

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByClassName('song-img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('song-name')[0].innerText=songs[i].songName;
})


// adding play pause click
masterPlay.addEventListener("click", () => {
    // here paused & currentTime are keywords for function
    if (audioElement.paused || audioElement.currentTime <= 0) {
        // condition if  if the song is paused
        // console.log("if condition ran");
        audioElement.play();
        // to change icons on play plause
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    } 
    else {
        // condition if the song is in play
        // console.log("else condition ran");
        audioElement.pause();
        // to change icons on play plause
        masterPlay.classList.add("fa-play");
        masterPlay.classList.remove("fa-pause-circle");
        gif.style.opacity = 0;
    }
});

// accesing the time of the music
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
   progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
//    console.log(progress);
    myProgressBar.value=progress;
})

// adding event to the seekbaar thst on clicking on any point the music moves at that point
myProgressBar.addEventListener('change',()=>{
    console.log("print this");
    audioElement.currentTime=parseInt(myProgressBar.value*audioElement.duration/100);
    console.log(audioElement.currentTime);
    myProgressBar.value=progress;
})


