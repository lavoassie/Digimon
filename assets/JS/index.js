
const buscarDigimon = document.getElementById("buscarDigi");
buscarDigimon.addEventListener("click", function(){

    let name = document.getElementById("ingresarValor").value;
console.log(name)
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${name}`)
        .then(response => response.json())
        .then(digimones => {
            console.log(digimones[0])
            document.getElementById("tarjetas_digimones").innerHTML = ''
            let html = ''
            html +=
                `
     <div class="mb-3 d-flex mx-auto align-items-center col-6 ">
        <div class="card text-center border border-warning" style="width: 100%;">
         <h5 class="card-title text-uppercase mt-4 fs-1 text fw-bold">${digimones[0].name}</h5>
         <div class="card-body">
             <img src="${digimones[0].img}" class="card-img-top" alt="...">
             <p class="card-text fs-3 text">Nivel: ${digimones[0].level}</p>
         </div>
        </div>
     </div>
        `
            document.getElementById("tarjetas_digimones").innerHTML = html
        })
        .catch(error => console.log("Tenemos un error"));
})

const listarDigimones = document.getElementById("listarDigi");
listarDigimones.addEventListener("click", function(){

fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(digimones => {
        console.log(digimones)
        let tarjeta = document.getElementById("tarjetas_digimones")
        let html = ''
        for (let digimon of digimones) {
            html +=
                `
    <div class="col-xl-3 col-lg-4 mb-4 mb-md-3 col-md-6 col-sm-12">
      <div class="card text-center border border-warning" style="width: 100%;">
         <h5 class="card-title text-uppercase mt-3 fw-bold">${digimon.name}</h5>
            <div class="card-body">
              <img src="${digimon.img}" class="card-img-top" alt="...">
              <p class="card-text">Nivel: ${digimon.level}</p>
            </div>
      </div>
    </div>
`
        }
        tarjeta.innerHTML = html

    })

    .catch(error => console.log(error))
})

listarDigimones();