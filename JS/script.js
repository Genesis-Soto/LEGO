/* ==================================================
   ===== BANNER (ORIGINAL + TRANSICIÓN)
================================================== */

const banners = [
  { img: "IMG/Banner1.jpg", color: "#7a3cff" },
  { img: "IMG/banner2.jpg", color: "#ff2d2d" },
  { img: "IMG/banner3.jpg", color: "#ffd000" },
  { img: "IMG/banner4.jpg", color: "#ff6a00" }
];

let bannerIndex = 0;
const banner = document.getElementById("banner");

if (banner) {
  banner.style.transition = "opacity .6s ease";
  setInterval(() => {
    banner.style.opacity = "0";
    setTimeout(() => {
      bannerIndex = (bannerIndex + 1) % banners.length;
      banner.src = banners[bannerIndex].img;
      document.documentElement.style.setProperty(
        "--accent-color",
        banners[bannerIndex].color
      );
      banner.style.opacity = "1";
    }, 600);
  }, 5000);
}

/* ==================================================
   ===== PARTÍCULAS
================================================== */

const particles = document.querySelector(".particles");
if (particles) {
  for (let i = 0; i < 30; i++) {
    const s = document.createElement("span");
    s.style.left = Math.random() * 100 + "%";
    s.style.animationDelay = Math.random() * 10 + "s";
    particles.appendChild(s);
  }
}
/* ==================================================
   ===== DATA COMPLETA POR CATEGORÍA
================================================== */
/* =====================================================
   DATA COMPLETA – 37 PRODUCTOS
===================================================== */
const DATA = {
  batman: {
    color: "#7a3cff",
    title: "BATMAN",
    subtitle: "La noche protege Gotham",
    items: [
      { img:"IMG/batman1.png", title:"Batmóvil Blindado", desc:"Vehículo táctico de combate urbano.", price:2150 },
      { img:"IMG/batman2.png", title:"Batmóvil de Persecución", desc:"Alta velocidad para cazar criminales.", price:2050 },
      { img:"IMG/batman3.png", title:"Batmoto Nocturna", desc:"Agilidad extrema entre callejones.", price:1950 },
      { img:"IMG/batman4.png", title:"Wayne Manor", desc:"La residencia del Caballero Oscuro.", price:2600 },
      { img:"IMG/batman5.png", title:"Batcueva", desc:"Centro secreto de operaciones.", price:2800 },
      { img:"IMG/batman6.png", title:"Batseñal", desc:"El símbolo que ilumina Gotham.", price:1700 },
      { img:"IMG/batman7.png", title:"Batmóvil Clásico", desc:"Diseño icónico del vigilante.", price:2200 },
      { img:"IMG/batman8.png", title:"Gotham City", desc:"La ciudad bajo su protección.", price:3000 },
      { img:"IMG/batman9.png", title:"Arkham Asylum", desc:"La prisión de los peores villanos.", price:2500 },
      { img:"IMG/batman10.png", title:"Batman Armadura", desc:"Traje avanzado de combate.", price:2400 }
    ]
  },

  ninjago: {
    color: "#ff2d2d",
    title: "NINJAGO",
    subtitle: "Domina tu elemento",
    items: [
      { img:"IMG/ninja1.png", title:"Templo del Spinjitzu", desc:"Centro del poder ninja.", price:2600 },
      { img:"IMG/ninja2.png", title:"Ciudad Ninja", desc:"La metrópolis de los guerreros.", price:2450 },
      { img:"IMG/ninja3.png", title:"Dojo de Entrenamiento", desc:"Forja de verdaderos maestros.", price:2150 },
      { img:"IMG/ninja4.png", title:"Guerrero Elemental", desc:"Defensor del equilibrio.", price:1950 },
      { img:"IMG/ninja5.png", title:"Mech Samurai", desc:"Tecnología y honor unidos.", price:2350 },
      { img:"IMG/ninja6.png", title:"Criatura Oscura", desc:"Amenaza del inframundo.", price:2250 },
      { img:"IMG/ninja7.png", title:"Fortaleza Ninja", desc:"Bastión ancestral del clan.", price:2700 },
      { img:"IMG/ninja8.png", title:"Pagoda Sagrada", desc:"Santuario del conocimiento.", price:2550 },
      { img:"IMG/ninja9.png", title:"Barco Ninja", desc:"Dominio de los mares.", price:2900 }
    ]
  },

  jurassic: {
    color: "#ffd000",
    title: "JURASSIC",
    subtitle: "La aventura revive",
    items: [
      { img:"IMG/jurassic1.png", title:"Triceratops Fossil", desc:"Descubrimiento prehistórico.", price:2100 },
      { img:"IMG/jurassic2.png", title:"T-Rex", desc:"El depredador supremo.", price:2300 },
      { img:"IMG/jurassic3.png", title:"Raptor Escape", desc:"Velocidad y ferocidad.", price:1950 },
      { img:"IMG/jurassic4.png", title:"Centro de Visitantes", desc:"El corazón del parque.", price:2500 },
      { img:"IMG/jurassic5.png", title:"Ataque Dino", desc:"Caos en la isla.", price:2200 },
      { img:"IMG/jurassic6.png", title:"Campamento Científico", desc:"Investigación en peligro.", price:2000 },
      { img:"IMG/jurassic7.png", title:"Isla Nublar", desc:"Origen del desastre.", price:2700 }
    ]
  },

  marvel: {
    color: "#00aaff",
    title: "MARVEL",
    subtitle: "Héroes sin límites",
    items: [
      { img:"IMG/marvel1.png", title:"Iron Man", desc:"Armadura de alta tecnología.", price:2400 },
      { img:"IMG/marvel2.png", title:"Spider-Man", desc:"El héroe arácnido.", price:2100 },
      { img:"IMG/marvel3.png", title:"Logo Marvel", desc:"El universo de los héroes.", price:1800 },
      { img:"IMG/marvel4.png", title:"Avengers Tower", desc:"Base central de los Vengadores.", price:2800 },
      { img:"IMG/marvel5.png", title:"Hulkbuster", desc:"Poder mecánico extremo.", price:2600 },
      { img:"IMG/marvel6.png", title:"Batalla Final", desc:"Choque épico de héroes.", price:3000 },
      { img:"IMG/marvel7.png", title:"Villanos Unidos", desc:"Amenaza máxima.", price:2350 },
      { img:"IMG/marvel8.png", title:"Equipo de Héroes", desc:"Unión contra el mal.", price:2550 },
      { img:"IMG/marvel9.png", title:"Laboratorio SHIELD", desc:"Tecnología avanzada.", price:2450 },
      { img:"IMG/marvel10.png", title:"Spider-Mech", desc:"Combate urbano futurista.", price:2300 }
    ]
  }
};



/* =====================================================
   LÓGICA DE GALERÍA
==/* =====================================================
   LÓGICA DE GALERÍA & CHECKOUT (CORREGIDA)
===================================================== */
/* =====================================================
   LÓGICA DE GALERÍA & CHECKOUT (OPTIMIZADA)
===================================================== */
let state = { category: null, index: 0 };

const modal = document.getElementById("galleryModal");
const checkout = document.getElementById("checkoutModal");
const slides = document.querySelector(".slides");

// --- ABRIR GALERÍA ---
document.querySelectorAll(".card").forEach(card => {
    card.onclick = () => {
        state.category = card.dataset.category;
        state.index = 0;

        const data = DATA[state.category];
        document.documentElement.style.setProperty("--accent", data.color);
        // Ajuste para el RGB (necesario para el diseño neón)
        const rgb = data.color === '#ffd700' ? '255, 215, 0' : (data.color === '#ff4d4d' ? '255, 77, 77' : '0, 210, 255');
        document.documentElement.style.setProperty("--accent-rgb", rgb);

        document.getElementById("galleryTitle").textContent = data.title;
        document.getElementById("gallerySubtitle").textContent = data.subtitle;

        modal.classList.add("active");
        renderGallery();
    };
});

function renderGallery() {
    const items = DATA[state.category].items;
    slides.innerHTML = "";

    [-1, 0, 1].forEach(pos => {
        const i = state.index + pos;
        if (items[i]) {
            const s = document.createElement("div");
            s.className = "slide";
            s.dataset.pos = pos;
            s.innerHTML = `<img src="${items[i].img}" alt="${items[i].title}">`;
            slides.appendChild(s);
        }
    });

    const cur = items[state.index];
    document.getElementById("productName").textContent = cur.title;
    document.getElementById("productDesc").textContent = cur.desc;
    document.getElementById("productPrice").textContent = "L " + cur.price.toLocaleString();
}

// --- NAVEGACIÓN ---
document.getElementById("nextBtn").onclick = () => {
    if (state.index < DATA[state.category].items.length - 1) { state.index++; renderGallery(); }
};
document.getElementById("prevBtn").onclick = () => {
    if (state.index > 0) { state.index--; renderGallery(); }
};

// --- LOGICA DE BOTONES (REGRESAR Y COMPRAR) ---
document.getElementById("galleryClose").onclick = () => modal.classList.remove("active");
document.getElementById("btnBackGallery").onclick = () => modal.classList.remove("active");

// DESPLEGAR CHECKOUT
document.getElementById("btnBuy").onclick = () => {
    const cur = DATA[state.category].items[state.index];
    
    // Llenar datos en el checkout antes de mostrar
    document.getElementById("selectedProductImg").src = cur.img;
    document.getElementById("selectedProductTitle").textContent = cur.title;
    document.getElementById("selectedProductPrice").textContent = "L " + cur.price.toLocaleString();
    document.getElementById("selectedProductPrice2").textContent = "L " + cur.price.toLocaleString();
    document.getElementById("checkoutTotal").textContent = "L " + cur.price.toLocaleString();

    modal.classList.remove("active");
    checkout.classList.add("active");
};

// CERRAR CHECKOUT Y VOLVER A GALERÍA
document.getElementById("btnCloseCheckout").onclick = () => {
    checkout.classList.remove("active");
    modal.classList.add("active");
};
document.getElementById("btnBack").onclick = (e) => {
    e.preventDefault();
    checkout.classList.remove("active");
    modal.classList.add("active");
};

// --- PROCESAR PAGO ---
document.getElementById("btnPay").onclick = () => {
    const inputs = document.querySelectorAll("#checkoutForm input");
    let valid = true;

    inputs.forEach(i => {
        if(i.value.trim() === "") {
            i.style.borderColor = "red";
            valid = false;
        } else {
            i.style.borderColor = "rgba(255,255,255,0.1)";
        }
    });

    if(valid) {
        document.getElementById("checkoutForm").style.display = "none";
        document.getElementById("successScreen").classList.add("show");
    }
};

document.getElementById("btnSuccess").onclick = () => {
    location.reload(); // O simplemente cerrar modales
};


/* =====================================================
   LÓGICA: MODAL DE CONTACTO
===================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const cModal = document.getElementById('contactModal');
    const cOpen = document.getElementById('openContact');
    const cClose = document.getElementById('closeContact');

    // Abrir Contacto
    if (cOpen) {
        cOpen.addEventListener('click', (e) => {
            e.preventDefault();
            cModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Cerrar Contacto
    const closeC = () => {
        cModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    if (cClose) cClose.onclick = closeC;

    // Cerrar al clickear fuera (específico para contacto)
    window.addEventListener('click', (e) => {
        if (e.target === cModal) closeC();
    });

    // Soporte para tecla Escape (Cierra cualquiera que esté abierto)
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            closeC();
        }
    });
});

/* =====================================================
/* =====================================================
   LÓGICA UNIFICADA: VALORES (MISIÓN, VISIÓN, HISTORIA)
===================================================== */
document.addEventListener('DOMContentLoaded', () => {
    const vModal = document.getElementById('valuesModal');
    const vOpen = document.getElementById('openValues');
    const vClose = document.getElementById('closeValues');
    const vTabs = document.querySelectorAll('.tab-btn');
    const vPanes = document.querySelectorAll('.value-pane');

    // Función Maestra para cambiar pestañas
    const switchTab = (targetId) => {
        const container = document.querySelector('.values-content');
        
        // Inicio de transición
        container.style.opacity = '0';
        container.style.transform = 'translateY(10px)';

        setTimeout(() => {
            // 1. Gestionar Botones
            vTabs.forEach(tab => {
                tab.classList.remove('active');
                if(tab.getAttribute('data-target') === targetId) {
                    tab.classList.add('active');
                }
            });

            // 2. Gestionar Paneles (Visión e Historia)
            vPanes.forEach(pane => {
                // Quitamos clases y ocultamos físicamente
                pane.classList.remove('active');
                pane.style.display = 'none'; 
                
                if(pane.id === targetId) {
                    pane.style.display = 'block';
                    // Pequeño delay para que la animación CSS entre suave
                    setTimeout(() => pane.classList.add('active'), 10);
                }
            });

            // Final de transición
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 200);
    };

    // Abrir Modal
    if (vOpen) {
        vOpen.onclick = (e) => {
            e.preventDefault();
            vModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            switchTab('mision'); // Forzar inicio en Misión
        };
    }

    // Eventos de los botones
    vTabs.forEach(btn => {
        btn.onclick = () => {
            const target = btn.getAttribute('data-target');
            switchTab(target);
        };
    });

    // Cerrar con animación
    const closeModal = () => {
        vModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    if (vClose) vClose.onclick = closeModal;
    window.onclick = (e) => { if (e.target === vModal) closeModal(); };
});