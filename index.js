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
        filePath: "song/1.mpeg",
        coverPath: "img/bellaciao.jpg",
    },
    {
        songName: "Mahabharat Title song",
        filePath: "songs/2.mpeg",
        coverPath: "img/MAHABHARAT.jpg",
    },
    {
        songName: "Tu hi yaar mera- Pati Patni Or Woh",
        filePath: "songs/3.mpeg",
        coverPath: "img/yaarmera.jpg",
    },
    {
        songName: "Rider-EmmaHesters",
        filePath: "songs/4.mpeg",
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

// -------------------CHANGING ICONS PLAY AND PAUSE WHEN WE CLICK ON THE LIST---------------------------------------
// makeAllPlays() function will change the icons of all the other songs as play
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // e.target means that targeting the element which is clicked
        console.log(e.target);
        // calling a function
        makeAllPlays();
        index=parseInt(e.target.id);
        console.log("index is:",index);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause-circle');
        audioElement.src='songs/$(index+1).mp3';
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause-circle');
    })
})
