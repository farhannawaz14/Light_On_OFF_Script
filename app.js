// let a = document.querySelector("h1");
// a.innerHTML= "Change hoja";
// a.style.color= "red"
// a.style.backgroundColor = "yellow"
// a.style.fontFamily = "Sans-serif"
// a.addEventListener("click", function(){
//     a.innerHTML ="Pir Change ho gia";
//     a.style.backgroundColor ="#000"
//     a.style.color="gray"
//     a.style.fontFamily = "Sans-serif"
// })

let blub = document.querySelector("#blub");
let on = document.querySelector(".on");
let off = document.querySelector(".off")

// on.addEventListener("click", function(){
//     blub.style.backgroundColor ="yellow"
// })
// off.addEventListener("click", function(){
//     blub.style.backgroundColor= "transparent"
// })

 let farhan = 0
 
on.addEventListener("click", function run (){
    if(farhan === 0){
        blub.style.backgroundColor = "yellow"
        console.log("Hum ma on kar dia ")
        farhan=1
    }else{
        blub.style.backgroundColor = "transparent"
        console.log("Hum ma off kar dia ")
        farhan=0
    }
})


// let h = document.querySelectorAll("h1");
// console.log(h)
// h.forEach(function(e){
//     console.log(e)
// })