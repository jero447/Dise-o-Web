let seleccion;

fetch('data-seleccion.json')
    .then(response => response.json())
    .then(data => {
        seleccion = data
        function mostrarCanciones(canciones) {
            let contenedor_canciones = document.getElementById("contenedor-seleccion")
            contenedor_canciones.innerHTML = ""

            canciones.forEach(cancion => {
                const div = document.createElement("div")
                div.classList.add("cancion")
                div.innerHTML = `
                            <img src="${cancion.imagen}">
                            <div class="cancion-info">
                                <h5 class="text-white">${cancion.nombreCancion}</h5>
                                <div class="artista-genero">
                                    <p class="text-secondary">Artista: ${cancion.artista}</p>
                                    <p>-</p>
                                    <p class="text-secondary">Genero: ${cancion.genero}</p>
                                </div>
                                <p class="text-secondary">Año de Lanzamiento: ${cancion.año}</p>
                            </div>
                            
                            
            `
                contenedor_canciones.appendChild(div)
            })
        }

        mostrarCanciones(seleccion)

        function filtrarXGenero(genero) {
            const cancEncontradas = seleccion.filter(cancion => cancion.genero === genero)
            mostrarCanciones(cancEncontradas)
        }
        function filtrarXArtista(artista) {
            const cancEncontradas = seleccion.filter(cancion => cancion.artista === artista)
            mostrarCanciones(cancEncontradas)
        }
        function filtrarX80() {
            const cancEncontradas = seleccion.filter(cancion => cancion.año < 1990)
            mostrarCanciones(cancEncontradas)
        }
        function filtrarX90() {
            const cancEncontradas = seleccion.filter(cancion => cancion.año >= 1990 && cancion.año < 2000)
            mostrarCanciones(cancEncontradas)
        }
        function filtrarX2000() {
            const cancEncontradas = seleccion.filter(cancion => cancion.año >= 2000)
            mostrarCanciones(cancEncontradas)
        }
        const btn_Rock = document.getElementById("rock")
        const btn_RockAlternativo = document.getElementById("rock-alternativo")
        const btn_Pop = document.getElementById("pop")
        const btn_HipHop = document.getElementById("hip-hop")
        const btn_Regueton = document.getElementById("regueton")

        btn_Rock.addEventListener("click", () => {
            filtrarXGenero("Rock")
        })

        btn_RockAlternativo.addEventListener("click", () => {
            filtrarXGenero("Rock Alternativo")
        })

        btn_Pop.addEventListener("click", () => {
            filtrarXGenero("Pop")
        })

        btn_HipHop.addEventListener("click", () => {
            filtrarXGenero("Hip Hop")
        })

        btn_Regueton.addEventListener("click", () => {
            filtrarXGenero("Regueton")
        })


        const btn_michael = document.getElementById("michael")
        const btn_bonJovi = document.getElementById("bon-jovi")
        const btn_queen = document.getElementById("queen")
        const btn_police = document.getElementById("police")
        const btn_maddona = document.getElementById("maddona")
        const btn_boys = document.getElementById("boys")
        const btn_coldplay = document.getElementById("coldplay")
        const btn_maluma = document.getElementById("maluma")

        btn_michael.addEventListener("click", () => {
            filtrarXArtista("Michael Jackson")
        })
        btn_bonJovi.addEventListener("click", () => {
            filtrarXArtista("Bon Jovi")
        })
        btn_queen.addEventListener("click", () => {
            filtrarXArtista("Queen")
        })
        btn_police.addEventListener("click", () => {
            filtrarXArtista("The Police")
        })
        btn_maddona.addEventListener("click", () => {
            filtrarXArtista("Maddona")
        })
        btn_boys.addEventListener("click", () => {
            filtrarXArtista("Backstreet Boys")
        })
        btn_coldplay.addEventListener("click", () => {
            filtrarXArtista("Coldplay")
        })
        btn_maluma.addEventListener("click", () => {
            filtrarXArtista("Maluma")
        })


        const btn_80 = document.getElementById("80's")
        const btn_90 = document.getElementById("90's")
        const btn_2000 = document.getElementById("2000's")

        btn_80.addEventListener("click", () => {
            filtrarX80()
        })
        btn_90.addEventListener("click", () => {
            filtrarX90()
        })
        btn_2000.addEventListener("click", () => {
            filtrarX2000()
        })


    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));











fetch("data-lanzamientos.json")
    .then(response => response.json())
    .then(data => {
        lanzamientos = data
        function mostrarCancionesCards() {
            const contenedor_cards = document.querySelector(".contenedor-cards")
            lanzamientos.forEach(cancion => {
                const div = document.createElement("div")
                div.classList.add("cartas")
                div.innerHTML = `
                                <div class="contenedor-imagen"> 
                                    <img src="${cancion.imagen}"/>  
                                </div>   
                                <div>
                                    <p class="text-white">${cancion.nombreCancion}</p>
                                    <p class="text-secondary">${cancion.artista}</p>
                                </div>  
                                  `
                contenedor_cards.appendChild(div)
            })
        }
        mostrarCancionesCards()

        const contenedor_imagen = document.querySelectorAll(".contenedor-imagen");

        function crearBoton(card) {
            const boton = document.createElement("button");
            boton.innerHTML = `<i class="fa-solid fa-play"></i>`;

            card.appendChild(boton);
            boton.style.display = "none";
            boton.classList.add("btn-play-card");

            card.addEventListener("mouseover", () => {
                boton.style.display = "block";
            });

            card.addEventListener("mouseout", () => {
                boton.style.display = "none";
            });
        }

        contenedor_imagen.forEach(card => {
            crearBoton(card);
        });
    })










const contenedor_cards_scroll = document.querySelector(".contenedor-cards");
let intervalo = null;
let step = 1;
let maxScroll = contenedor_cards_scroll.scrollWidth - contenedor_cards_scroll.clientWidth

function start() {
    intervalo = setInterval(() => {
        contenedor_cards_scroll.scrollLeft += step;
        console.log(step);
        if (contenedor_cards_scroll.scrollLeft >= 1660) {
            step = -1
            console.log(step);
        } else if (contenedor_cards_scroll.scrollLeft <= 0) {
            step = 1;
        }
    }, 10);
};

function stop() {
    clearInterval(intervalo)
}
contenedor_cards_scroll.addEventListener("mouseover", () => {
    stop()
})
contenedor_cards_scroll.addEventListener("mouseout", () => {
    start()
})

start();




