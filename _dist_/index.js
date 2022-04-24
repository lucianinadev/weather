const button = document.querySelector("#submit");

const input = document.querySelector("#country");
const app = document.querySelector('#weather')
const key = "dffac76febe572281ea864fb119d7d27";
const accion = () => {
    const country = input.value;
    const url =`http://api.openweathermap.org/data/2.5/weather?q=${country}&lang=sp&APPID=${key}&units=metric`;
    console.log(country);
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
            const container = document.createElement('div')
            container.className = "p-2 mr-2 w-40 bg-black rounded-md shadow-lg shadow-blue-500/50 relative"
            const weather = data.weather[0]
            console.log(data.main.temp);

            let elNombre = document.createElement('h2')
            elNombre.textContent = country;
            elNombre.className = "text-left text-white font-semibold text-sm capitalize"

            let elClimaDesc = document.createElement('p')
            elClimaDesc.textContent = weather.description
            elClimaDesc.className = "text-center text-gray-200 text-xs"

            let elTemperatura = document.createElement('p')
            elTemperatura.textContent = `${Math.round(data.main.temp)}`
            elTemperatura.className = "text-left font-semibold text-white text-6xl relative tracking-tighter"

            let elCelcius = document.createElement('span')
            elCelcius.textContent = "°C"
            elCelcius.className = "text-sm absolute top-1 tracking-normal"
            elTemperatura.append(elCelcius)

            let elIcon = document.createElement('img')
            elIcon.className = "mx-auto -mt-2"
            elIcon.src = ` http://openweathermap.org/img/wn/${weather.icon}@2x.png`

            let elClose = document.createElement('span')
            elClose.textContent = "x"
            elClose.className = "absolute text-white top-0 font-semibold right-2 p-1 cursor-pointer"
            elClose.id = "close"
            elClose.addEventListener("click",remove)

            container.append(elClose,elNombre,elTemperatura,elIcon,elClimaDesc)
            app.append(container)
            
        });
};

const remove = (x) =>{
    const parent = x.target.parentNode;
    parent.remove()
}
const btn_close = document.querySelector("#close")
button.addEventListener("click", accion);
