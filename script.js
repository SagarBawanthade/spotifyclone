console.log("Welcome to Spotify");

//initialising vairables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressBar = document.getElementById('myprogressBar');
let gif = document.getElementById('gif');
let mastersongName = document.getElementById('mastersongName');

let songs = [
    {songName: "Left and right",filepath:"songs/1.mp3",coverpath:"Covers\cover 1.jpg"},
    {songName: "Make you mine",filepath:"songs/2.mp3",coverpath:"Covers\cover 2.jpg"},
    {songName: "Perfect",filepath:"songs/3.mp3",coverpath:"Covers\cover 3.jpg"},
    {songName: "Romantic Sunday",filepath:"songs/4.mp3",coverpath:"Covers\cover 4.jpg"},
    {songName: "Until I found you",filepath:"songs/5.mp3",coverpath:"Covers\cover 5.jpg"},
    {songName: "Count on me",filepath:"songs/6.mp3",coverpath:"Covers\cover 6.jpg"},
    {songName: "Hymn - coldplay",filepath:"songs/7.mp3",coverpath:"Covers\cover 7.jpg"},
    {songName: "at my worst",filepath:"songs/8.mp3",coverpath:"Covers\cover 8.jpg"},
    {songName: "Dandelions",filepath:"songs/9.mp3",coverpath:"Covers\cover 9.jpg"},
]

//Handle play and pause
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})

audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressBar.value = progress;
})
myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime = myprogressBar.value*audioElement.duration/100;
})

const makeAllplays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle')

})
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex}.mp3`;
        mastersongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        

    })

})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
    songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    mastersongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
    songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    mastersongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
