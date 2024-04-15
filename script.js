const apikey="a5fc372bef81d73774b1f408ea5180a2";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


const search = document.querySelector(".inner-container input")
const searchbtn= document.querySelector(".inner-container button")
async function CheckWhether(city){
    const response=await fetch(apiurl+city+`&appid=${apikey}`);
    var data= await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
}
searchbtn.addEventListener("click",()=>{
    CheckWhether(search.value);
})
