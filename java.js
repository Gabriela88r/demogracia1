// Objeto con info y rutas a imágenes locales para cada opción
const infoOpciones = {
    "Historia de la democracia": {
        texto: `
La democracia tiene sus raíces en la antigua Grecia, especialmente en Atenas, donde surgieron las primeras formas de gobierno participativo hace más de 2,500 años. 
Desde entonces, este sistema ha evolucionado a través de diferentes etapas, como la Edad Media y la Ilustración, hasta llegar a las democracias modernas. 
Se basa en principios como el voto universal, la separación de poderes y la protección de los derechos humanos, buscando que todas las voces sean escuchadas y respetadas en la toma de decisiones.
        `,
        imagen: "image/1.jpg"
    },
    "Derechos y deberes": {
        texto: `
En una democracia, los ciudadanos tienen derechos fundamentales, como la libertad de expresión, el derecho al voto, la igualdad ante la ley y la protección de sus libertades personales. 
Sin embargo, también tienen deberes importantes, como cumplir las leyes, respetar los derechos de los demás, participar activamente en la sociedad y contribuir al bien común. 
Este equilibrio entre derechos y deberes es esencial para mantener una convivencia justa y armoniosa.
        `,
        imagen: "imagenes/derechos-deberes.jpg"
    },
    "Participación ciudadana": {
        texto: `
La participación ciudadana es la base de cualquier democracia saludable. Implica que los ciudadanos no solo votan en elecciones, sino que también se involucran en actividades comunitarias, debates públicos, organizaciones sociales y vigilancia de las autoridades. 
Esto fortalece la transparencia y la responsabilidad en el gobierno, permitiendo que las decisiones reflejen las verdaderas necesidades y deseos de la sociedad.
        `,
        imagen: "imagenes/participacion-ciudadana.jpg"
    },
    "Valores democráticos": {
        texto: `
Los valores democráticos son principios que sustentan el sistema y su práctica diaria. Entre ellos destacan la libertad, la igualdad, la justicia, el respeto, la tolerancia y la solidaridad. 
Estos valores promueven la convivencia pacífica y el reconocimiento de la diversidad, permitiendo que la sociedad avance unida y respetuosa de las diferencias individuales y colectivas.
        `,
        imagen: "imagenes/valores-democraticos.jpg"
    },
    "Instituciones democráticas": {
        texto: `
Las instituciones democráticas son organismos como el Congreso, la Corte Suprema, y las autoridades electorales que garantizan el correcto funcionamiento del sistema político. 
Su independencia, transparencia y respeto a la ley aseguran que el poder no se concentre en una sola persona o grupo, y que los derechos de los ciudadanos estén protegidos. 
Estas instituciones supervisan y regulan las acciones del gobierno para mantener el equilibrio y la justicia.
        `,
        imagen: "imagenes/instituciones-democraticas.jpg"
    },
    "Resolución pacífica de conflictos": {
        texto: `
La cultura de paz se basa en resolver los conflictos mediante el diálogo, la negociación y la mediación, evitando la violencia. 
Es fundamental aprender técnicas de comunicación efectiva y gestión de desacuerdos para buscar soluciones justas y duraderas que beneficien a todas las partes involucradas. 
Esta práctica fortalece la convivencia y previene la escalada de tensiones en la sociedad.
        `,
        imagen: "imagenes/resolucion-conflictos.jpg"
    },
    "Tolerancia y respeto": {
        texto: `
La tolerancia es la capacidad de aceptar y respetar las diferencias culturales, ideológicas, religiosas y personales sin recurrir al conflicto. 
El respeto implica valorar al otro como igual, reconociendo sus derechos y dignidad. 
Estos principios son esenciales en una cultura de paz, ya que fomentan la empatía, la comprensión y la cooperación entre distintos grupos sociales.
        `,
        imagen: "imagenes/tolerancia-respeto.jpg"
    },
    "Educación para la paz": {
        texto: `
La educación para la paz busca formar personas conscientes y comprometidas con la convivencia pacífica y el respeto a los derechos humanos. 
Incluye el desarrollo de habilidades como la comunicación efectiva, la resolución no violenta de conflictos, y el pensamiento crítico. 
A través de esta educación, se promueven valores de justicia social y se construyen sociedades más justas y equitativas.
        `,
        imagen: "imagenes/educacion-paz.jpg"
    },
    "Actividades para fomentar la paz": {
        texto: `
Existen diversas actividades para promover la paz, como talleres de mediación, campañas de sensibilización, proyectos comunitarios y actividades artísticas. 
Estas iniciativas fortalecen el sentido de comunidad, enseñan valores de solidaridad y cooperación, y motivan a los participantes a ser agentes de cambio positivo en sus entornos.
        `,
        imagen: "imagenes/actividades-paz.jpg"
    },
    "Historias inspiradoras de paz": {
        texto: `
A lo largo del mundo, muchas personas y comunidades han demostrado que es posible construir paz en medio de conflictos y dificultades. 
Estas historias inspiradoras muestran ejemplos de diálogo, reconciliación y esfuerzo colectivo para superar la violencia y lograr sociedades más justas. 
Son motivaciones para continuar trabajando en la promoción de la paz.
        `,
        imagen: "imagenes/historias-paz.jpg"
    },
    "Eventos escolares sobre democracia": {
        texto: `
Los eventos escolares sobre democracia incluyen actividades como debates, simulaciones electorales, conferencias y proyectos que ayudan a los estudiantes a comprender la importancia de su participación ciudadana. 
Estas experiencias fomentan el pensamiento crítico y la responsabilidad social desde una edad temprana.
        `,
        imagen: "imagenes/eventos-democracia.jpg"
    },
    "Jornadas de cultura de paz": {
        texto: `
Las jornadas de cultura de paz son eventos organizados en escuelas y comunidades que buscan promover valores de convivencia, respeto y solidaridad. 
Mediante talleres, exposiciones y actividades artísticas, se sensibiliza a los participantes sobre la importancia de la paz y el respeto a los derechos humanos.
        `,
        imagen: "imagenes/jornadas-paz.jpg"
    },
    "Convocatorias para talleres": {
        texto: `
Las convocatorias para talleres invitan a estudiantes, docentes y miembros de la comunidad a participar en capacitaciones sobre democracia, derechos humanos y resolución pacífica de conflictos. 
Estos talleres fortalecen habilidades sociales y ciudadanas, contribuyendo a la construcción de ambientes pacíficos y democráticos.
        `,
        imagen: "imagenes/convocatorias-talleres.jpg"
    }
};

// Referencias DOM
const infoPanel = document.getElementById('infoPanel');
const contenidoPanel = document.getElementById('contenidoPanel');
const imagenPanel = document.getElementById('imagenPanel');
const cerrarPanel = document.getElementById('cerrarPanel');
const chatBox = document.getElementById("chatBox");

// Agrega mensajes al chat
function agregarMensaje(texto, tipo) {
    const mensajeDiv = document.createElement("div");
    mensajeDiv.className = "chat-message " + (tipo === "bot" ? "bot-message" : "user-message");
    mensajeDiv.textContent = texto;
    chatBox.appendChild(mensajeDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Muestra la info con texto e imagen en el panel
function abrirInfo(opcion) {
    const data = infoOpciones[opcion] || {
        texto: "Información no disponible para esta opción.",
        imagen: "imagenes/default.jpg"
    };
    contenidoPanel.textContent = data.texto.trim();
    imagenPanel.src = data.imagen;
    imagenPanel.alt = opcion;
    infoPanel.classList.remove('hidden');
}

// Función que se llama al seleccionar una opción
function opcionSeleccionada(opcion) {
    agregarMensaje(opcion, "user");

    setTimeout(() => {
        abrirInfo(opcion);
        // No se agrega mensaje extra ni repetido
    }, 700);
}

// Eventos para cerrar panel
cerrarPanel.addEventListener('click', () => {
    infoPanel.classList.add('hidden');
});
infoPanel.addEventListener('click', e => {
    if (e.target === infoPanel) infoPanel.classList.add('hidden');
});
