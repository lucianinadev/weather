const button = document.querySelector("#submit");
const input = document.querySelector("#country");
const app = document.querySelector('#weather')
const key = "dffac76febe572281ea864fb119d7d27";
const accion = () => {
    const country = input.value;
    const url =`http://api.openweathermap.org/data/2.5/weather?q=${country}&lang=sp&APPID=${key}&units=metric`;
    const urlimg = 
    console.log(country);
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
            const weather = data.weather[0]
            console.log(data.main.temp);

            let elNombre = document.createElement('h2')
            elNombre.textContent = country;

            let elClimaDesc = document.createElement('p')
            elClimaDesc.textContent = weather.description

            let elTemperatura = document.createElement('p')
            elTemperatura.textContent = `Temperatura: ${data.main.temp} °C`

            let elIcon = document.createElement('img')
            elIcon.className = "mx-auto"
            elIcon.src = ` http://openweathermap.org/img/wn/${weather.icon}@2x.png`
            app.append(elNombre,elClimaDesc,elIcon,elTemperatura)
            
        });
};

button.addEventListener("click", accion);
