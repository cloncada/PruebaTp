let starBtn = document.querySelector(".start");
let tpLogo = document.querySelector(".tpLogo");
let wave = document.querySelector(".wave");
let body = document.querySelector(".body");
let conti = document.querySelector(".continue");
let info = document.querySelector(".info");
let capsule = document.querySelector(".capsule");
let run = document.querySelector(".run");
let cruise = document.querySelector(".cruise");
let hostel = document.querySelector(".hostel");
let boutiqueHotel = document.querySelector(".boutiqueHotel");
let motel = document.querySelector(".motel");
let apartamentHotel = document.querySelector(".apartamentHotel");
let inn = document.querySelector(".inn");
let bussinessHotel = document.querySelector(".bussinessHotel");
let couchSurfing = document.querySelector(".couchSurfing");
let castle = document.querySelector(".castle");
let glamping = document.querySelector(".glamping");
let lighthouse = document.querySelector(".lighthouse");
let byb = document.querySelector(".byb");
let timeShare = document.querySelector(".timeShare");
let treeHouse = document.querySelector(".treeHouse");

let capsuleDiv = document.querySelector(".capsuleDiv");
let cruiseDiv = document.querySelector(".cruiseDiv");
let hostelDiv = document.querySelector(".hostelDiv");
let boutiqueHotelDiv = document.querySelector(".boutiqueHotelDiv");
let motelDiv = document.querySelector(".motelDiv");
let apartamentHotelDiv = document.querySelector(".apartamentHotelDiv");
let innDiv = document.querySelector(".innDiv");
let bussinessHotelDiv = document.querySelector(".bussinessHotelDiv");
let couchSurfingDiv = document.querySelector(".couchSurfingDiv");
let castleDiv = document.querySelector(".castleDiv");
let glampingDiv = document.querySelector(".glampingDiv");
let lighthouseDiv = document.querySelector(".lighthouseDiv");
let bybDiv = document.querySelector(".bybDiv");
let timeShareDiv = document.querySelector(".timeShareDiv");
let treeHouseDiv = document.querySelector(".treeHouseDiv");
let back = document.querySelector(".back");
num=-1;


starBtn.addEventListener("click", () => {
  wave.classList.add("cssanimation");
  wave.classList.add("fadeOutLeft");
  starBtn.classList.add("hide");
  tpLogo.classList.add("cssanimation");
  tpLogo.classList.add("fadeInTop");
  tpLogo.classList.remove("hide");
  body.classList.add("starFondo");
  conti.classList.add("cssanimation");
  conti.classList.add("fadeInDown");
  conti.classList.remove("hide");
});

conti.addEventListener("click", () => {
    
    conti.classList.add("cssanimation");
    conti.classList.remove("fadeInDown");
  conti.classList.add("fadeOutDown");
  body.classList.remove("starFondo");
  body.classList.add("bodyMap");
  info.classList.remove("hide");
  info.classList.add('cssanimation');
  info.classList.add('fadeInLeft');
  capsule.classList.remove("hide");
  cruise.classList.remove("hide");
  hostel.classList.remove("hide");
  cruise.classList.remove("hide");
  boutiqueHotel.classList.remove("hide");
  motel.classList.remove("hide");
  apartamentHotel.classList.remove("hide");
  inn.classList.remove("hide");
  bussinessHotel.classList.remove("hide");
  couchSurfing.classList.remove("hide");
  glamping.classList.remove("hide");
  lighthouse.classList.remove("hide");
  byb.classList.remove("hide");
  timeShare.classList.remove("hide");
 



});

run.addEventListener("click", () => {
   info.classList.remove("fadeInLeft");
   info.classList.add("fadeOutLeft");
   
   treeHouse.classList.remove("hide");

  
  })

  capsule.addEventListener("click", () => {

    capsuleDiv.classList.remove('hide')
    back.classList.remove('hide')
    num=1;
   
   })
   cruise.addEventListener("click", () => {

    cruiseDiv.classList.remove('hide')
    back.classList.remove('hide')
    num=2;
   
   })
   hostel.addEventListener("click", () => {

    hostelDiv.classList.remove('hide')
    back.classList.remove('hide')
    num=3;
   
   })
   boutiqueHotel.addEventListener("click", () => {

    boutiqueHotelDiv.classList.remove('hide')
    back.classList.remove('hide')
    num=4;
   
   })
   motel.addEventListener("click", () => {

    motelDiv.classList.remove('hide')
    back.classList.remove('hide')
    num=5;
   
   })
   apartamentHotel.addEventListener("click", () => {

    apartamentHotelDiv.classList.remove('hide')
    back.classList.remove('hide')
    num=6;
   
   })
   inn.addEventListener("click", () => {

    innDiv.classList.remove('hide')
    back.classList.remove('hide')
    num=7;
   
   })
   bussinessHotel.addEventListener("click", () => {

    bussinessHotelDiv.classList.remove('hide')
    back.classList.remove('hide')
    num=8;
   
   })
   castle.addEventListener("click", () => {

    castleDiv.classList.remove('hide')
    back.classList.remove('hide')
    num=10;
   
   })
   couchSurfing.addEventListener("click", () => {

    couchSurfingDiv.classList.remove('hide')
    back.classList.remove('hide')
    num=9;
   
   })
   glamping.addEventListener("click", () => {

    glampingDiv.classList.remove('hide')
    back.classList.remove('hide')
    num=11;
   
   })
   lighthouse.addEventListener("click", () => {

    lighthouseDiv.classList.remove('hide')
    back.classList.remove('hide')
    num=12;
   
   })
   byb.addEventListener("click", () => {

    bybDiv.classList.remove('hide')
    back.classList.remove('hide')
    num=13;
   
   })
   timeShare.addEventListener("click", () => {

    timeShareDiv.classList.remove('hide')
    back.classList.remove('hide')
    num=14;
   
   })
   treeHouse.addEventListener("click", () => {

    treeHouseDiv.classList.remove('hide')
    back.classList.remove('hide')
    num=15;
   
   })
  
  


   
  back.addEventListener("click", () => {
if(num==1){
    capsuleDiv.classList.add('hide')
    back.classList.add('hide')
}  
if(num==2){
    cruiseDiv.classList.add('hide')
    back.classList.add('hide')
}   
if(num==3){
    hostelDiv.classList.add('hide')
    back.classList.add('hide')
}    
 
if(num==4){
    boutiqueHotelDiv.classList.add('hide')
    back.classList.add('hide')
}    
if(num==5){
    motelDiv.classList.add('hide')
    back.classList.add('hide')
}    
if(num==6){
    apartamentHotelDiv.classList.add('hide')
    back.classList.add('hide')
}    
if(num==7){
    innDiv.classList.add('hide')
    back.classList.add('hide')
}    
 
if(num==8){
    bussinessHotelDiv.classList.add('hide')
    back.classList.add('hide')
}    
if(num==9){
    couchSurfingDiv.classList.add('hide')
    back.classList.add('hide')
}    
 
if(num==10){
    castleDiv.classList.add('hide')
    back.classList.add('hide')
}    
if(num==11){
    glampingDiv.classList.add('hide')
    back.classList.add('hide')
}    
if(num==12){
    lighthouseDiv.classList.add('hide')
    back.classList.add('hide')
}    
if(num==13){
    bybDiv.classList.add('hide')
    back.classList.add('hide')
}    
if(num==14){
    timeShareDiv.classList.add('hide')
    back.classList.add('hide')
}    
 
if(num==15){
    treeHouseDiv.classList.add('hide')
    back.classList.add('hide')
}    
 
   
   })
