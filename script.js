const api= 'db3ae1655394646d3e70987132e00bb2';

const iconImage = document.getElementById("weather-icon");
const loc = document.getElementById("location");
const desc = document.getElementById("desc");
const tempc = document.querySelector(".celcius");
const tempf = document.querySelector(".fahrenheit");
const cityName = document.getElementById("city").value;
const element = document.getElementById("Submit");

//
// let cityArr = [];
// fetch("./cityName.json")
// .then(response => {
//    return response.json();
// })
// .then(value => cityArr.push(value));
// console.log(cityArr)


window.addEventListener('load',()=>{
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            let lon = position.coords.longitude;
            let lat = position.coords.latitude;
            const base =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}&units=metric`;
            console.log(base);
            fetch(base)
            .then((response)=>{
                return response.json(); })
            .then((data)=>{
               
                const {temp} =data.main;
                const place =data.name;
                const {description,icon} =data.weather[0];
                const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                const fahrenheit = (temp * 9)/5 +32; 
                iconImage.src = iconUrl;
                loc.innerHTML = place;
                desc.textContent = description;
                tempc.textContent = ` ${temp} °C`;
                tempf.textContent = ` ${fahrenheit} °F`;
            })
        });
    }
});


function showTemp(){
    const cityName = document.getElementById("city").value;
        const baseUrl =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}&units=metric`
        console.log(baseUrl);
        fetch(baseUrl)
                .then((response)=>{
                    return response.json(); })
                .then((data)=>{
                    const {temp} =undefined ||data.main;
                    const place =data.name;
                    const {description,icon} =data.weather[0];
                    const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
                    const fahrenheit = (temp * 9)/5 +32; 
                    iconImage.src = iconUrl;
                    loc.innerHTML = place;
                    desc.textContent = description;
                    tempc.textContent = ` ${temp.toFixed(1)} °C`;
                    tempf.textContent = ` ${fahrenheit.toFixed(2)} °F`;
                })
}

//
// var search_terms = ['apple', 'apple watch', 'apple macbook', 'apple macbook pro', 'iphone', 'iphone 12'];

// function autocompleteMatch(input) {
//   if (input == '') {
//     return [];
//   }
//   var reg = new RegExp(input)
//   return cityArr.filter(function(term) {
// 	  if (term.match(reg)) {
//   	  return term;
// 	  }
//   });
// }

// function showResults(val) {
//   res = document.getElementById("result");
//   res.innerHTML = '';
//   let list = '';
//   let terms = autocompleteMatch(val);
//   for (i=0; i<terms.length; i++) {
//     list += '<li>' + terms[i] + '</li>';
//   }
//   res.innerHTML = '<ul>' + list + '</ul>';
// }