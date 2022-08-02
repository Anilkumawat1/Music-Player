let songs = [
    {songName:"Chhod Diya",filepath:"song/Chhod_Diya.mp3.m4a"},
    {songName:"Iktara",filepath:"song/Iktara.mp3.m4a"},
    {songName:"Let Me Down Slowly",filepath:"song/Let_Me_Down_Slowly.mp3.m4a"},
    {songName:"Maine Royaan",filepath:"song/Maine_Royaan.mp3.m4a"},
    {songName:"One Direction Night Changes",filepath:"song/One_Direction_Night_Changes.mp3.m4a"},
    {songName:"Tose Naina Arijit Singh",filepath:"song/Tose_Naina_Arijit_Singh.mp3.m4a"},
    {songName:"Trevor Daniel_-_Falling",filepath:"Trevor_Daniel_-_Falling.mp3.m4a"},
    {songName:"Iktara",filepath:"song/Iktara.mp3.m4a"},
    {songName:"Let Me Down Slowly",filepath:"song/Let_Me_Down_Slowly.mp3.m4a"},
    {songName:"Maine Royaan",filepath:"song/Maine_Royaan.mp3.m4a"},
    {songName:"One Direction Night Changes",filepath:"song/One_Direction_Night_Changes.mp3.m4a"},
    
]
let songitem = Array.from(document.getElementsByClassName('songItem'));
let songIndex = 0;
let play1 = document.getElementById('play1');
let playb =  document.getElementById('playb');
let playf =  document.getElementById('playf');
let audioElement = new Audio('song/Chhod_Diya.mp3.m4a');
let bar = document.getElementById('bar');

songitem.forEach((element , i)=>{
      
    element.getElementsByClassName("song")[0].innerText = songs[i].songName;
    element.getElementsByClassName("songd")[0].innerText = "4.35";
    let Id = element.getElementsByTagName("i")[0].id;
    
    // element.getElementById(Id).id = "songs[i].filepath";
   

})
play1.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime==0){
        audioElement.play();
        play1.classList.remove('fa-circle-play');
        play1.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        play1.classList.remove('fa-circle-pause');
        play1.classList.add('fa-circle-play');
    }
})
audioElement.addEventListener('timeupdate', ()=>{
       progress = parseInt((audioElement.currentTime /audioElement.duration)*100);
       bar.value = progress;
      
    
})

bar.addEventListener('change',()=>{
    audioElement.currentTime = (bar.value * audioElement.duration)/100;
})
const allplay = ()=>{
    Array.from(document.getElementsByClassName('songi')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        
    })
}
Array.from(document.getElementsByClassName('songi')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        allplay();
       let index = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = songs[index].filepath;
    audioElement.currentTime = 0;
    audioElement.play();
    play1.classList.remove('fa-circle-play');
    play1.classList.add('fa-circle-pause');
    })
})