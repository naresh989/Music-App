let p = document.querySelectorAll('.drum')
let  sounds = { w: "crash" ,a : "kick-bass" , s:"snare", d : "tom-1", j : "tom-2",k: "tom-3",l: "tom-4"}
console.log(sounds['w'])
for(let i=0;i<7;i++)
{
    
document.addEventListener('keypress', function(event){ 
    let stroke = event.key;
    let tempSound = 'sounds/' + sounds[stroke] + '.mp3'
        var audio = new Audio(tempSound);
        audio.play();
    

    
});
    p[i].addEventListener("click", ()=>{
        let tempSound = 'sounds/' + sounds[i] + '.mp3'
        var audio = new Audio(tempSound);
        audio.play();})
}

// document.querySelector('button').innerHTML = "p"