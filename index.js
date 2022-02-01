// printing on running of the code for the fisrt time
console.log("Welcome to spotify");

// --------------------initialising the variables------------
let songIndex=0;
// here Audio is a keyword
let masterPlay=document.getElementById("masterPlay");
let audioElement=new Audio("ekdilruba.mp3");
let myProgressBar=document.getElementById('music-range');

// defining array of songs
let songs =[
    {songName:"Salam-E-Ishq", filePath:"song.mpeg",coverPath:"img/song.jpg"},
    {songName:"Salam-E-Ishq", filePath:"song.mpeg",coverPath:"img/song.jpg"},
    {songName:"Salam-E-Ishq", filePath:"song.mpeg",coverPath:"img/song.jpg"},
    {songName:"Salam-E-Ishq", filePath:"song.mpeg",coverPath:"img/song.jpg"},
    
]
// to play the son we use this element
audioElement.play();

// adding play pause click
masterPlay.addEventListener("click",()=>{
    // console.log("print this");
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove("fas fa-play");
        masterPlay.classList.add("far fa-2x fa-pause-circle");
    }
    else{
        masterPlay.classList.add("fas fa-2x fa-play");
        masterPlay.classList.remove("far fa-2x fa-pause-circle");

    }
})