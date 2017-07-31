// import { Button } from "app/classes/button";
// import { Client } from "app/classes/client";
// import { Project } from "app/classes/project";
// import { Sector } from "app/classes/sector";
// import { AboutUs } from "app/classes/about-us";
// import { ImageInfo } from "app/classes/imageInfo";
// import { TelsatInfo } from "app/classes/telsat-info";

/* -------////////////||||||||||||||||\\\\\\\\\\\\\\------------- */

/*----------------\\\\\\\\\\\\\\\\\||||||||||||TERMINADAS||||||||||||////////////////////---------------------- */
//class Sector
const sector = [
  { id: '0', caption: 'TELECOMUNICACIONES', parent: '', children: true, image: '' },
    { id: '1', caption: 'En vhf y uhf', parent: '0', children: false, image: 'assets/services/Telecomunicaciones/VHF-UHF.jpg' },
    { id: '2', caption: 'Radios portátiles y bases', parent: '0', children: false, image: 'assets/services/Telecomunicaciones/radio.jpg' },
    { id: '3', caption: 'Enlaces para video a larga distancia y satelital', parent: '0', children: false, image: 'assets/services/Telecomunicaciones/video-satelite.jpg' },
    { id: '4', caption: 'Ndb (non direccional beacon)', parent: '0', children: false, image: 'assets/services/Telecomunicaciones/NDB.jpg' },
  { id: '5', caption: 'SEGURIDAD', parent: '', children: true, image: '' },
    { id: '6', caption: 'CCTV', parent: '5', children: true, image: 'assets/services/Seguridad/cctv.jpg' },
      { id: '7', caption: 'Control de producción', parent: '6', children: false, image: '' },
      { id: '8', caption: 'Cámaras de nivel normal y bajo de iluminación', parent: '6', children: false, image: '' },
      { id: '9', caption: 'Monitores de TV', parent: '6', children: false, image: '' },
      { id: '10', caption: 'Grabadoras de largo tiempo', parent: '6', children: false, image: '' },
      { id: '11', caption: 'Cámaras de visión nocturna', parent: '6', children: false, image: '' },
      { id: '12', caption: 'Cámaras análogas', parent: '6', children: false, image: '' },
      { id: '13', caption: 'Cámaras digitales IP', parent: '6', children: true, image: '' },
        { id: '14', caption: 'Fijas ', parent: '13', children: false, image: '' },
        { id: '15', caption: 'Con movimiento', parent: '13', children: false, image: '' },
        { id: '16', caption: 'Color día , color día y cambio a B&W noche', parent: '13', children: false, image: '' },
        { id: '17', caption: 'Iluminadores ', parent: '13', children: false, image: '' },
    { id: '19', caption: 'Sistemas de control de acceso', parent: '5', children: true, image: 'assets/services/Seguridad/accessControl.jpg' },
      { id: '20', caption: 'Carnés para identificación', parent: '19', children: true, image: '' },
        { id: '21', caption: 'Tipo tarjeta de crédito', parent: '20', children: false, image: '' },
        { id: '22', caption: 'Smart chip', parent: '20', children: false, image: '' },
        { id: '23', caption: 'Tarjeta óptica', parent: '20', children: false, image: '' },
        { id: '24', caption: 'Holograma', parent: '20', children: false, image: '' },
        { id: '25', caption: 'Tarjeta con cinta magnética', parent: '20', children: false, image: '' },
        { id: '26', caption: 'Tarjeta con código de barras', parent: '20', children: false, image: '' },
        { id: '27', caption: 'Tarjeta de proximidad', parent: '20', children: false, image: '' },
        { id: '28', caption: 'Cantoneras con cualquier sistema anterior', parent: '20', children: false, image: '' },
      { id: '29', caption: 'Sistema integrado de control de acceso y alarma', parent: '19', children: false, image: '' },
      { id: '31', caption: 'Control de acceso por huella dactilar', parent: '19', children: false, image: '' },
      { id: '32', caption: 'Control de acceso por la palma de la mano', parent: '19', children: false, image: '' },
    { id: '34', caption: 'Detección y protección', parent: '5', children: true, image: 'assets/services/Seguridad/proteccion.jpg' },
      { id: '35', caption: 'Sistemas de control de incendios', parent: '34', children: false, image: '' },
      { id: '36', caption: 'Rayos infrarrojos, activos y pasivos', parent: '34', children: false, image: '' },
      { id: '37', caption: 'Centrales de alarma', parent: '34', children: false, image: '' },
      { id: '38', caption: 'Detectores de presencia', parent: '34', children: false, image: '' },
      { id: '39', caption: 'Alarmas por radio frecuencia', parent: '34', children: false, image: '' },
      { id: '40', caption: 'Detectores de explosivos y bombas', parent: '34', children: false, image: '' },
      { id: '41', caption: 'Detectores de metales y armas', parent: '34', children: false, image: '' },
      { id: '42', caption: 'Sistemas de visión nocturna', parent: '34', children: false, image: '' },
      { id: '43', caption: 'Alambradas de alto voltaje', parent: '34', children: false, image: '' },
      { id: '44', caption: 'Alambrada de púas (concertina en acero)', parent: '34', children: false, image: '' },
    { id: '45', caption: 'Seguridad humana', parent: '5', children: true, image: 'assets/services/Seguridad/humanSecurity.jpg' },
      { id: '46', caption: 'Blindajes', parent: '45', children: true, image: '' },
        { id: '47', caption: 'Arquitectónico', parent: '46', children: true, image: '' },
          { id: '109', caption: 'Ventanas', parent: '47', children: false, image: '' },
          { id: '110', caption: 'Muros', parent: '47', children: false, image: '' },
          { id: '111', caption: 'Puertas', parent: '47', children: false, image: '' },
        { id: '48', caption: 'Vidrio blindado', parent: '46', children: false, image: '' },
        { id: '50', caption: 'Policarbonatos, fibras y met', parent: '46', children: false, image: '' },
        { id: '51', caption: 'Chalecos del grado 1 al grado 5  en spectra  y cerámica', parent: '46', children: false, image: '' },
        { id: '52', caption: 'Trajes para grupos antiexplosivos', parent: '46', children: false, image: '' },
        { id: '53', caption: 'Film protector para vidrios de las ventanas contra explosiones', parent: '46', children: false, image: '' },
        { id: '54', caption: 'Vidrios antibala', parent: '46', children: false, image: '' },
        { id: '55', caption: 'Blindajes arquitectónicos y para automóviles hasta nivel 6', parent: '46', children: false, image: '' },
        { id: '56', caption: 'Blindaje para salas de rayos x y vidrio para rayos x', parent: '46', children: false, image: '' },
      { id: '57', caption: 'Sistemas de puertas de evacuación', parent: '45', children: false, image: '' },
    { id: '59', caption: 'Centro de monitoreo (BASS)', parent: '5', children: true, image: 'assets/services/Seguridad/bass.jpg' },
      { id: '60', caption: 'Diseño e instalación de centro de monitoreo', parent: '59', children: false, image: '' },
      { id: '61', caption: 'Análisis de video', parent: '59', children: false, image: '' },
    { id: '62', caption: 'Control de mantenimiento preventivo y correctivo', parent: '5', children: false, image: 'assets/services/Seguridad/mantenimiento.jpg' },
  { id: '63', caption: 'AERONAUTICA', parent: '', children: true, image: '' },
    { id: '64', caption: 'Diseño y fabricación de aviones en compuestos', parent: '63', children: true, image: 'assets/services/Aeronautica/JAGUAR.jpg' },
      { id: '65', caption: 'Aviones ultralivianos', parent: '64', children: false, image: '' },
      { id: '66', caption: 'Aviones de reconocimiento', parent: '64', children: false, image: '' },
      { id: '67', caption: 'Aviones de fumigación', parent: '64', children: false, image: '' },
      { id: '68', caption: 'UAV (aviones no tripulados)', parent: '64', children: false, image: '' },
      { id: '69', caption: 'Túneles de viento', parent: '64', children: false, image: '' },
      { id: '70', caption: 'Canales de agua', parent: '64', children: false, image: '' },
      { id: '71', caption: 'Materiales compuestos', parent: '64', children: false, image: '' },
    { id: '73', caption: 'Fotografía aérea con aeronaves no tripuladas', parent: '63', children: true, image: 'assets/services/Aeronautica/drone.jpg' },
      { id: '74', caption: 'Fotografía oblicua', parent: '73', children: false, image: '' },
      { id: '75', caption: 'Fotografía ortogonal', parent: '73', children: false, image: '' },
      { id: '76', caption: 'Fotografía orto rectificada georreferenciada', parent: '73', children: false, image: '' },
      { id: '77', caption: 'Video aéreo', parent: '73', children: false, image: '' },
    { id: '79', caption: 'Fotografía para generación de tdm (mapa de tres dimensiones)', parent: '73', children: true, image: '' },
      { id: '80', caption: 'Diseño de obras civiles', parent: '79', children: false, image: '' },
      { id: '81', caption: 'Determinación de la estabilidad', parent: '79', children: false, image: '' },
      { id: '82', caption: 'Determinación del volumen del removido de una mina', parent: '79', children: false, image: '' },
      { id: '83', caption: 'Seguimiento al crecimiento o deforestación de bosque', parent: '79', children: false, image: '' },
  { id: '84', caption: 'QUIMICO Y COMPUESTOS', parent: '', children: true, image: '' },
    { id: '85', caption: 'Resinas epoxicas', parent: '84', children: false, image: 'assets/services/Quimica/resinaEpoxica.jpg' },
    { id: '86', caption: 'Resinas vinilester', parent: '84', children: false, image: 'assets/services/Quimica/resinaVinilester.jpg' },
    { id: '87', caption: 'Resinas poliéster', parent: '84', children: false, image: 'assets/services/Quimica/Resina-poliester.jpg' },
    { id: '88', caption: 'Fibras de carbono', parent: '84', children: false, image: 'assets/services/Quimica/fibra-carbono.jpg' },
    { id: '89', caption: 'Fibras de vidrio', parent: '84', children: false, image: 'assets/services/Quimica/fibra-vidrio.jpg' },
    { id: '90', caption: 'Espumas', parent: '84', children: false, image: 'assets/services/Quimica/foam.jpg' },
    { id: '91', caption: 'Carbón activado', parent: '84', children: false, image: 'assets/services/Quimica/carbon-activado.jpg' },
  { id: '92', caption: 'AUTOMATIZACIÓN', parent: '', children: true, image: '' },
    { id: '93', caption: 'Control de iluminación', parent: '92', children: false, image: 'assets/services/Automatizacion/control-iluminacion.jpg' },
    { id: '94', caption: 'Control de aire acondicionado', parent: '92', children: false, image: 'assets/services/Automatizacion/air-conditioner.jpg' },
    { id: '95', caption: 'Control de consumos', parent: '92', children: false, image: 'assets/services/Automatizacion/control-consumos.jpg' },
    { id: '96', caption: 'Control de motores y procesos', parent: '92', children: false, image: 'assets/services/Automatizacion/motor-proceso.jpg' },
    { id: '97', caption: 'Control automático de parqueaderos', parent: '92', children: false, image: 'assets/services/Automatizacion/parqueadero.jpg' },
    { id: '98', caption: 'Puertas y barreras automáticas', parent: '92', children: false, image: 'assets/services/Automatizacion/puerta.jpg' },
    { id: '99', caption: 'Monitoreo de variables y ambientes', parent: '92', children: false, image: 'assets/services/Automatizacion/monitoreo-variables.jpg' },
    { id: '100', caption: 'Control de ascensores', parent: '92', children: false, image: 'assets/services/Automatizacion/ascensor.jpg' },
  { id: '101', caption: 'ENERGÍAS ALTERNATIVAS', parent: '', children: true, image: '' },
    { id: '102', caption: 'Sistemas de generadores eólicos', parent: '101', children: false, image: 'assets/services/alternativa/eolico.jpg' },
    { id: '103', caption: 'Paneles fotovoltaicos', parent: '101', children: false, image: 'assets/services/alternativa/panel-solar.jpg' },
    { id: '104', caption: 'Calentadores de agua', parent: '101', children: false, image: 'assets/services/alternativa/calentador-agua.jpg' },
    { id: '105', caption: 'Micro turbinas', parent: '101', children: false, image: 'assets/services/alternativa/microTurbina.jpg' }
  ]


// class telsatInfo
const telsatContact = {
    address: { title: 'Dirección postal:', local: 'Carrera 50 # 63-162', city: 'Medellín, Colombia, Suramérica.' },
    contact: {
      title: 'CONTÁCTENOS:',
      phone: { title: 'Teléfono:', phone: '(57)(4)254-4924' },
      fax: { title: 'Fax:', phone: '(57)(4)254-3173' },
      email: { title: 'Correo electrónico:', email: 'telsatco@gmail.com' }
    },
    workHours: { title: 'Horario:', week: 'Lunes - Viernes: 8:00 am - 6:00 pm', weekend: 'Sabado: 8:00 am - 11:00 am' },
    companyName: 'TELSAT SAS',
    copyRight: 'Copyright © 2011 TELSAT'
  }

// class Button
const headerButtons = [
    {
      text: 'Inicio',
      link: 'inicio',
      img: 'assets/page/inicio/1.jpg',
      msg: `TELSAT y su equipo de profesionales están en la capacidad de ofrecer soluciones de manera más eficiente respecto a la calidad, costo, tiempo, diseño, instalación y manejo de recursos físicos.`
    },
    {
      text: 'Nosotros',
      link: 'nosotros',
      img: 'assets/page/nosotros/1.jpg',
      msg: `Contamos con más de 26 años de experiencia en el desarrollo, diseño, instalación y contrucción de sistemas de alta seguridad, integración de sistemas de control para edificios, telecomunicaciones, sistemas de control de acceso, radio-comunicaciones, fibra óptica.`
    },
    {
      text: 'Servicios',
      link: 'servicios',
      img: 'assets/page/servicios/1.jpg',
      msg: `Trabajamos en el area de seguridad implementando blindajes, sistemas para edificos inteligentes, sistemas de alta seguridad, circuitos cerrados de televisión, centro de monitoreo (BASS), sistemas de control de acceso, sistemas de control por biométricos y sistemas de comunicaciones.`
    },
    {
      text: 'Proyectos',
      link: 'proyectos',
      img: 'assets/page/proyectos/1.jpg',
      msg: ''
    }
  ]
  
//class Project
const projects = [
    { img: 'assets/projects/bass/1.jpg', title: 'Centro de monitoreo (BASS)', desc: 'Centro de monitoreo' },
    { img: 'assets/projects/Tunel UPB/1.jpg', title: 'Túnel de viento, UPB', desc: `Se encuentra en un laboratorio de la Universidad Pontifica Bolivariana, donde los estudiantes de ingenieria aeronautica lo utilizan para hacer  mediciones y distinguir el funcionamiento del as partes de las maquinas voladoras` },
    { img: 'assets/projects/flying cat/1.jpg', title: 'Flying Cat', desc: 'Diseño y fabricación de avión liviano' },
    { img: 'assets/projects/jaguar/1.jpg ', title: 'JAGUAR', desc: 'Diseño y fabricación de avión de reconocimiento no tripulado' },
    { img: 'assets/projects/centro de control/1.jpg', title: 'Centros de comando y control', desc: '' }
  ]

//class project
const divisionesTecnicas= [
    {
      img: 'assets/logos/telecomunicaciones.png',
      title: 'Telecomunicaciones',
      desc: 'Maneja el área de telecomunicaciones, automatización, control, diseño, televisión, telefonía, audio, radioteléfonos y antenas de transmisión.'
    },
    {
      img: 'assets/logos/seguridad.png',
      title: 'Seguridad',
      desc: 'Maneja el área de sistemas de alta seguridad, alarmas, circuitos cerrados de televisión, control de acceso, blindajes, automatización de edificios y asesoría en edificaciones LEED.'
    },
    {
      img: 'assets/logos/quimica-y-compuestos.png',
      title: 'Química y compuestos',
      desc: 'Maneja el área de materiales de fibras de carbono, vidrio, kevlar, resinas de poliéster, epoxie, diseño y fabricación de partes y carbones activados.'
    },
    {
      img: 'assets/logos/aeroespacial.png',
      title: 'Aeronáutica',
      desc: 'Maneja el área de diseño aeronáutico, fabricación de aviones livianos, UAV, túneles de viento, canales de agua para pruebas aerodinámicas, sistemas de aviónica, comunicacion aeronáutica.'
    }
  ]
  
//class Client
const clients =  [
    { company: 'SURA', link: './assets/clients/sura.png', size: {x: '120', y: '50'} },
    { company: 'A&C', link: './assets/clients/A&C.png', size: {x: '120', y: '50'} },
    { company: 'CONVEL', link: './assets/clients/convel.png', size: {x: '120', y: '50'} },
    { company: 'CASA', link: './assets/clients/casa.png', size: {x: '120', y: '50'} },
    { company: 'AIA', link: './assets/clients/aia.png', size: {x: '120', y: '50'} },
    { company: 'CONCONCRETO', link: './assets/clients/conconcreto.png', size: {x: '120', y: '50'} },
    { company: 'FAC', link: './assets/clients/fac.png', size: {x: '120', y: '50'} },
    { company: 'MENSULA', link: './assets/clients/mensula.png', size: {x: '120', y: '50'} },
    { company: 'ORBIS', link: './assets/clients/orbis.png', size: {x: '120', y: '50'} },
    { company: 'PINTUCO', link: './assets/clients/pintuco.png', size: {x: '120', y: '50'} },
    { company: 'METRO', link: './assets/clients/metro.png', size: {x: '120', y: '50'} }
  ]

 //class client
const providers = [
    { company: 'T.I RESCUE', link: './assets/providers/tirescue.png', size: {x: '100', y: '100'} },
    { company: 'DEISTER', link: './assets/providers/deister.png', size: {x: '120', y: '50'} },
    { company: 'HONEYWELL', link: './assets/providers/honeywell.png', size: {x: '90', y: '100'} },
    { company: 'TCC', link: './assets/providers/tcc.png', size: {x: '150', y: '50'} },
    { company: 'VELCO', link: './assets/providers/velco.png', size: {x: '100', y: '100'} },
    { company: 'VICON', link: './assets/providers/vicon.png', size: {x: '200', y: '100'} },
    { company: 'WOLPAC', link: './assets/providers/wolpac.png', size: {x: '100', y: '100'} },
    { company: 'HID', link: './assets/providers/hid.png', size: {x: '100', y: '100'} }
  ]

// class aboutUs e ImageInfo
const AboutUs = [
    { tipo: 'mision', title: 'Misión', info: `Desde 1980, esta dedicada a investigar y proveer soluciones que exigen alta tecnología e integración para las necesidades de la industria, satisfaciendo y superando las necesidades y expectativas de nuestros clientes procurando siempre efectuar una integración total de los sistemas instalados. Para lograr un desarrollo coordinado y dar participación a las nuevas generaciones, tenemos convenios con las universidades y centros de investigación en el área tecnológica y desarrollo.` },
    { tipo: 'vision', title: 'Visión', info: `Creemos firmemente que el desarrollo económico de un país es el fortalecimiento de las industrias de base tecnológica en manufactura e investigación,  por tal motivo, siempre estaremos a la vanguardia de los desarrollos de alta tecnología. Nuestro principal objetivo es mantenernos con las ultimas tecnologías del mercado que puedan ser usadas en nuestros proyectos con los clientes, quienes depositan la confianza en nuestro equipo de trabajo consolidando relaciones a largo plazo` },
    { tipo: 'valor', title: 'Integridad', info: 'Somos una empresa integral, fundamentada en Principios y Valores, por lo cual actuamos dentro de los más rigurosos principios éticos y legales.' },
    { tipo: 'valor', title: 'Transparencia', info: 'Actuamos de manera clara, consistente y oportuna.' },
    { tipo: 'valor', title: 'Honestidad', info: 'Todos nuestros negocios son rectos y ajustados al Estado de Derecho.  Respetamos a nuestra competencia.  Cobramos y pagamos lo justo.' },
    { tipo: 'valor', title: 'Respeto', info: 'Tratamos dignamente a las personas, respetamos y aceptamos sus diferencias.' },
    { tipo: 'valor', title: 'Actitud de servicio', info: 'Somos amables, oportunos, eficientes y eficaces en la prestación de nuestros servicios.' },
    { tipo: 'valor', title: 'Trabajo en equipo', info: 'Valoramos y fomentamos los aportes de las personas para el logro de los objetivos comunes.' },
    { tipo: 'valor', title: 'Alto desempeño', info: 'Nos capacitamos permanentemente. Superamos continuamente nuestras metas y optimizamos el uso de recursos para generar Valor.' },
    { tipo: 'valor', title: 'Orientación al cliente', info: 'Vivimos para nuestros Clientes.  Construimos relaciones de largo plazo con ellos, quienes son nuestra razón de ser.' },
    { tipo: 'valor', title: 'Actitud positiva', info: 'Amamos lo que hacemos y estamos en la búsqueda permanente de nuevas tecnologías que apoyen las tendencias del mercado.' },
    { tipo: 'valor', title: 'Confianza', info: 'Somos estrictos en el manejo responsable de la información de nuestros Clientes. Generamos credibilidad y manejamos profesionalmente su información' },
    { tipo: 'filosofia', title: 'Filosofía', img: 'assets/us/Filosofia.png' },//class ImageInfo
    { tipo: 'organigrama', title: 'Organigrama', img: 'assets/us/Organigrama.png' }//class ImageInfo
  ]