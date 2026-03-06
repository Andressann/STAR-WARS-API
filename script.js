/* =============================================================
   STAR WARS · ARCHIVO GALÁCTICO · SCRIPT.JS
   Datos extras: descripción, era, frase mítica, avatar emoji
   ============================================================= */

'use strict';

// ── Datos extra hardcodeados por nombre de personaje ──────────
const CHAR_EXTRA = {
  'Luke Skywalker': {
    era: 'Imperio', avatar: '👦',
    descripcion: 'Granjero de Tatooine convertido en Jedi. Hijo de Anakin Skywalker y figura central en la caída del Imperio Galáctico. Portador del lado luminoso de la Fuerza.',
    frase: '«La Fuerza estará contigo. Siempre.»'
  },
  'C-3PO': {
    era: 'Imperio', avatar: '🤖',
    descripcion: 'Droide de protocolo construido por Anakin Skywalker. Fluente en más de seis millones de formas de comunicación. Compañero inseparable de R2-D2.',
    frase: '«Las probabilidades de sobrevivir a un campo de asteroides son de 3.720 a 1.»'
  },
  'R2-D2': {
    era: 'Imperio', avatar: '🔵',
    descripcion: 'Droide astromecánico de la serie R2. Sirvió a la familia Skywalker, a los Jedi y a la Alianza Rebelde. Guardaba los planos de la Estrella de la Muerte.',
    frase: '«Bweeoop bwoop bweeep!» (Traducción: ¡Nunca cambies, amigo!)'
  },
  'Darth Vader': {
    era: 'Imperio', avatar: '⚫',
    descripcion: 'Señor Oscuro de los Sith. Otrora el Jedi Anakin Skywalker, cayó al lado oscuro y se convirtió en el brazo armado del Emperador Palpatine.',
    frase: '«Luke, yo soy tu padre.»'
  },
  'Leia Organa': {
    era: 'Imperio', avatar: '👸',
    descripcion: 'Princesa de Alderaan y líder de la Alianza Rebelde. Diplomática, guerrera y fuerza impulsora de la Resistencia. Hija de Anakin Skywalker.',
    frase: '«Cuanto más me aprietas, más sistemas se me escaparán de entre los dedos.»'
  },
  'Owen Lars': {
    era: 'Imperio', avatar: '👨‍🌾',
    descripcion: 'Granjero de humedad en Tatooine. Hermanastro de Anakin Skywalker. Tío adoptivo de Luke Skywalker, a quien protegió durante años.',
    frase: '«Luke tiene mucho de su padre en él.»'
  },
  'Beru Whitesun lars': {
    era: 'Imperio', avatar: '👩',
    descripcion: 'Esposa de Owen Lars. Figura materna fundamental en la crianza de Luke Skywalker en las áridas tierras de Tatooine.',
    frase: '«Luke no es granjero, Owen. Nunca lo ha sido. El destino lo llama a algo diferente.»'
  },
  'R5-D4': {
    era: 'Imperio', avatar: '🟥',
    descripcion: 'Droide astromecánico adquirido brevemente por Owen Lars. Su motivador explotó durante la venta a los jawas, lo que llevó a la elección de R2-D2.',
    frase: '«Bzzzt... ¡Pop!» (motivador defectuoso en el peor momento)'
  },
  'Biggs Darklighter': {
    era: 'Imperio', avatar: '✈️',
    descripcion: 'Amigo de infancia de Luke Skywalker. Piloto rebelde que desertó del Imperio para unirse a la Alianza. Murió heroicamente en la Batalla de Yavin.',
    frase: '«Ahora somos como somos, Luke. Siempre lo seremos.»'
  },
  'Obi-Wan Kenobi': {
    era: 'República', avatar: '🧙',
    descripcion: 'Maestro Jedi que entrenó a Anakin y a Luke Skywalker. Vivió exiliado en Tatooine vigilando al joven Luke. Una de las figuras más sabias de la Orden Jedi.',
    frase: '«Que la Fuerza te acompañe.»'
  },
  'Anakin Skywalker': {
    era: 'República', avatar: '⚡',
    descripcion: 'El Elegido de la profecía Jedi. Nacido sin padre en Tatooine. Talentoso piloto y guerrero que cayó al lado oscuro convirtiéndose en Darth Vader.',
    frase: '«Yo soy el Elegido. Yo traeré el equilibrio a la Fuerza, no tú.»'
  },
  'Wilhuff Tarkin': {
    era: 'Imperio', avatar: '🎖️',
    descripcion: 'Gran Moff y comandante de la primera Estrella de la Muerte. Político y militar despiadado. Ordenó la destrucción de Alderaan.',
    frase: '«¡Destruyan el planeta! ¡Fuego a discreción!»'
  },
  'Chewbacca': {
    era: 'Imperio', avatar: '🐻',
    descripcion: 'Wookiee copiloto del Halcón Milenario. Leal compañero de Han Solo. Guerrero formidable y mecánico experto. Participó en la liberación de Kashyyyk.',
    frase: '«Aaarrgh rrrwwww!» (Yo tengo un mal presentimiento al respecto)'
  },
  'Han Solo': {
    era: 'Imperio', avatar: '🔫',
    descripcion: 'Contrabandista del Halcón Milenario. Héroe improbable que se convirtió en general de la Alianza Rebelde. Presumido y audaz.",',
    frase: '«¡Que el primero sea yo, pichón!» / «I know.»'
  },
  'Greedo': {
    era: 'Imperio', avatar: '🟢',
    descripcion: 'Cazarrecompensas rodiano que trabajaba para Jabba el Hutt. Interceptó a Han Solo en el Mos Eisley Cantina con resultados fatales para él.',
    frase: '«Jabba te ha esperado mucho tiempo, Solo. Ahora me debes a mí.»'
  },
  'Jabba Desilijic Tiure': {
    era: 'Imperio', avatar: '🐛',
    descripcion: 'Señor del crimen hutiano. El gangster más poderoso de Tatooine. Controlaba rutas de contrabando y tenía a Han Solo congelado en carbono como decoración.',
    frase: '«Ho ho ho... ¡Nadie escapa a Jabba el Hutt!»'
  },
  'Wedge Antilles': {
    era: 'Imperio', avatar: '🚀',
    descripcion: 'Piloto rebelde y el único que sobrevivió a ambos ataques a la Estrella de la Muerte. Fundador del Escuadrón Rogue. Héroe silencioso de la Alianza.',
    frase: '«¡Vamos, los protejo yo!» (mientras sobrevive a todo)'
  },
  'Jek Tono Porkins': {
    era: 'Imperio', avatar: '🛸',
    descripcion: 'Piloto rebelde conocido como "Porkins". Murió durante el ataque a la primera Estrella de la Muerte en la Batalla de Yavin.',
    frase: '«Yo me quedo. Puedo aguantarlo.» (no pudo)'
  },
  'Yoda': {
    era: 'República', avatar: '🌿',
    descripcion: 'Gran Maestro Jedi de 900 años. Entrenó a Luke Skywalker en Dagobah. Uno de los seres más poderosos en el uso de la Fuerza de toda la galaxia.',
    frase: '«Hazlo o no lo hagas. No existe el "intentarlo".»'
  },
  'Palpatine': {
    era: 'Imperio', avatar: '👁️',
    descripcion: 'Senador de Naboo, Canciller Supremo y finalmente Emperador Galáctico. Lord Sith conocido como Darth Sidious. Arquitecto de la caída de la República.',
    frase: '«¡¡¡Poder ilimitaaado!!!»'
  },
  'Boba Fett': {
    era: 'Imperio', avatar: '🪖',
    descripcion: 'Clon de Jango Fett criado como hijo. El cazarrecompensas más temido de la galaxia. Usaba armadura mandaloriana y trabajaba para el Imperio y Jabba.',
    frase: '«Ni digas nada. Seguirá con vida.»'
  },
  'IG-88': {
    era: 'Imperio', avatar: '🦾',
    descripcion: 'Droide asesino bounty hunter. Uno de los cazarrecompensas contratados por el Imperio para encontrar al Halcón Milenario.',
    frase: '«Objetivo localizado. Eliminación en curso.»'
  },
  'Bossk': {
    era: 'Imperio', avatar: '🦎',
    descripcion: 'Cazarrecompensas trandoshano reptiliano. Conocido por su brutalidad y su rivalidad con Boba Fett. Especialista en caza de wookiees.',
    frase: '«Nadie escapa a Bossk.»'
  },
  'Lando Calrissian': {
    era: 'Imperio', avatar: '🎩',
    descripcion: 'Barón-Administrador de Ciudad Nube en Bespin. Ex contrabandista y dueño original del Halcón Milenario. Doble agente que redimió su traición.',
    frase: '«Han, viejo amigo. ¿Cómo te va?» (mientras lo traiciona suavemente)'
  },
  'Lobot': {
    era: 'Imperio', avatar: '🔌',
    descripcion: 'Ayudante cibernético de Lando Calrissian en Ciudad Nube. Parcialmente cibernético, con implantes que le interfieren con la computadora central.',
    frase: '«...» (raramente habla)'
  },
  'Ackbar': {
    era: 'Resistencia', avatar: '🐟',
    descripcion: 'Almirante Mon Calamari de la Alianza Rebelde. Comandó la Flota Rebelde en la Batalla de Endor. Leyenda entre los rangos de la Resistencia.',
    frase: '«¡Es una trampa!»'
  },
  'Mon Mothma': {
    era: 'Imperio', avatar: '👑',
    descripcion: 'Senadora de Chandrila y cofundadora de la Alianza Rebelde. Primera Canciller de la Nueva República. Voz política y moral de la Rebelión.',
    frase: '«Muchos bothanos murieron para traernos esta información.»'
  },
  'Arvel Crynyd': {
    era: 'Imperio', avatar: '💥',
    descripcion: 'Piloto A-Wing de la Alianza Rebelde. Sacrificó su vida estrellando su nave contra el puente del destructor estrella Executor en la Batalla de Endor.',
    frase: '«¡Por la Alianza!» (último acto heroico)'
  },
  'Wicket Systri Warrick': {
    era: 'Imperio', avatar: '🐻',
    descripcion: 'Ewok de la luna forestal de Endor. Primer ewok en establecer contacto con los rebeldes. Fue clave para la victoria en la Batalla de Endor.',
    frase: '«Yub nub!» (¡Somos libres!)'
  },
  'Nien Nunb': {
    era: 'Imperio', avatar: '🛩️',
    descripcion: 'Contrabandista sulustano que se convirtió en copiloto de Lando Calrissian en el Halcón Milenario durante la Batalla de Endor.',
    frase: '«Ahh bwahahaha!» (entusiasta en cualquier situación)'
  },
  'Qui-Gon Jinn': {
    era: 'República', avatar: '🧘',
    descripcion: 'Maestro Jedi heterodoxo que descubrió a Anakin Skywalker en Tatooine. Defensor de la voluntad de la Fuerza por encima de las reglas del Consejo Jedi.',
    frase: '«Sé consciente del momento presente. Siente a la Fuerza fluir a través de ti.»'
  },
  'Nute Gunray': {
    era: 'República', avatar: '📦',
    descripcion: 'Virrey de la Federación de Comercio. Títere de Darth Sidious en el bloqueo de Naboo. Cobarde y calculador, murió traicionado por Darth Vader.',
    frase: '«¡Asesinen a Amidala primero!»'
  },
  'Finis Valorum': {
    era: 'República', avatar: '🏛️',
    descripcion: 'Supremo Canciller de la República Galáctica antes de Palpatine. Su ineficacia ante la corrupción llevó a su destitución y a la ascensión de Palpatine.',
    frase: '«Someto el asunto al pleno del Senado para su consideración.»'
  },
  'Padmé Amidala': {
    era: 'República', avatar: '🌹',
    descripcion: 'Reina y Senadora de Naboo. Esposa secreta de Anakin Skywalker. Madre de Luke y Leia. Defensora apasionada de la democracia y la paz.',
    frase: '«Así muere la libertad... entre aplausos atronadores.»'
  },
  'Jar Jar Binks': {
    era: 'República', avatar: '🦆',
    descripcion: 'Gungan torpe del planeta Naboo. Involuntariamente responsable de otorgar poderes de emergencia a Palpatine. El personaje más controvertido de la saga.',
    frase: '«Meesa llamarse Jar Jar Binks.»'
  },
  'Roos Tarpals': {
    era: 'República', avatar: '🛡️',
    descripcion: 'Capitán de los Otoh Gungan generales del Ejército Gungan. Luchó contra el Ejército Droide de la Federación de Comercio en la Batalla de Naboo.',
    frase: '«¡Muy bombad! ¡Cuidado con ellos!»'
  },
  'Rugor Nass': {
    era: 'República', avatar: '👴',
    descripcion: 'Líder Supremo de los Gungans de Naboo. Inicialmente hostil a los naboo, luego formó una alianza vital contra la Federación de Comercio.',
    frase: '«¡Bombad Jedi!»'
  },
  'Watto': {
    era: 'República', avatar: '🪲',
    descripcion: 'Mercader toydario y apostador empedernido de Tatooine. Era el dueño de Anakin y Shmi Skywalker. Inmune a la influencia mental Jedi.',
    frase: '«¡Los créditos republicanos no me sirven de nada!»'
  },
  'Sebulba': {
    era: 'República', avatar: '🏎️',
    descripcion: 'Piloto de Pod-racing dug y el favorito a ganar. Conocido por sus tácticas sucias e ilegales en las carreras. Rival despiadado del joven Anakin.',
    frase: '«¡Chuba! ¡Dis time be thou!» (¡Esta vez sí ganarás, chaval!)'
  },
  'Shmi Skywalker': {
    era: 'República', avatar: '👩‍👦',
    descripcion: 'Madre de Anakin Skywalker. Esclava liberada en Tatooine. Su amor incondicional moldeó el carácter de Anakin. Su muerte desencadenó su caída.',
    frase: '«Siempre habrá una parte de mí que viva en ti, Ani.»'
  },
  'Darth Maul': {
    era: 'República', avatar: '😈',
    descripcion: 'Aprendiz Sith de Darth Sidious. Zabrak de Dathomir con tatuajes oscuros y sable laser doble. Mató a Qui-Gon Jinn antes de ser derrotado por Obi-Wan.',
    frase: '«En fin. No has visto lo que yo he visto.»'
  },
  'Bib Fortuna': {
    era: 'Imperio', avatar: '🪲',
    descripcion: 'Mayordomo twi\'lek de Jabba el Hutt. Administrador del palacio del señor del crimen en Tatooine. Conspiraba constantemente para suceder a Jabba.',
    frase: '«Jabba no recibe visitas.»'
  },
  'Ayla Secura': {
    era: 'República', avatar: '💙',
    descripcion: 'Maestra Jedi twi\'lek del Consejo Jedi. Experta en combate con sable de luz. Murió durante la Orden 66 por disparos de sus propios clones.',
    frase: '«La Fuerza es mi aliada en cada batalla.»'
  },
  'Mace Windu': {
    era: 'República', avatar: '🟣',
    descripcion: 'Maestro Jedi y miembro del Consejo Jedi. Única persona que usaba un sable verde-morado. Casi derrotó a Palpatine antes de ser traicionado por Anakin.',
    frase: '«Yo te arresto, Canciller Palpatine.»'
  },
  'Ki-Adi-Mundi': {
    era: 'República', avatar: '🧠',
    descripcion: 'Maestro Jedi cerean de cabeza cónica. Miembro del Consejo Jedi. Descartó notoriamente los sueños de Anakin. Murió en la Orden 66 en Mygeeto.',
    frase: '«Comercio de piratas, no más.»'
  },
  'Kit Fisto': {
    era: 'República', avatar: '🐙',
    descripcion: 'Maestro Jedi nautolano con tentáculos. Conocido por ser un maestro de los ambientes acuáticos. Su sonrisa es legendaria. Murió frente a Palpatine.',
    frase: '«¡*sonrisa icónica*!»'
  },
  'Plo Koon': {
    era: 'República', avatar: '🥽',
    descripcion: 'Maestro Jedi kel dor. Miembro del Consejo Jedi. Descubrió a Ahsoka Tano y la llevó al Templo Jedi. Murió en la Orden 66 sobre Cato Neimoidia.',
    frase: '«Hay siempre una manera de salvar a todos.»'
  },
  'Luminara Unduli': {
    era: 'República', avatar: '🌙',
    descripcion: 'Maestra Jedi mirialana. Reconocible por su tatuajes en el mentón. Entrenó a Barriss Offee. Capturada y ejecutada durante el surgimiento del Imperio.',
    frase: '«El pasado siempre será como fue. Debemos mirar hacia adelante.»'
  },
  'Barriss Offee': {
    era: 'República', avatar: '🖤',
    descripcion: 'Padawan mirialana de Luminara Unduli. Traicionó a la Orden Jedi al orquestar un atentado contra el Templo Jedi, culpando a Ahsoka Tano.',
    frase: '«La Orden Jedi ya no sirve a la paz, sirve a la guerra.»'
  },
  'Dooku': {
    era: 'República', avatar: '⚔️',
    descripcion: 'Antiguo Maestro Jedi, discípulo de Yoda. Abandonó la Orden y se convirtió en el Conde Dooku, aprendiz Sith y líder de la Confederación de Sistemas Independientes.',
    frase: '«Soy el último de la Orden Sith. El Maestro y yo somos los únicos.»'
  },
  'Bail Prestor Organa': {
    era: 'República', avatar: '👨‍💼',
    descripcion: 'Senador y Virrey de Alderaan. Uno de los fundadores de la Alianza Rebelde. Padre adoptivo de Leia Organa. Murió cuando Alderaan fue destruido.',
    frase: '«Hay esperanza para la galaxia mientras sobrevivan los Jedi.»'
  },
  'Jango Fett': {
    era: 'República', avatar: '🪖',
    descripcion: 'Legendario cazarrecompensas mandalorian. Donante genético del Ejército Clon. Padre de Boba Fett. Murió en la Arena Geonosiana a manos de Mace Windu.',
    frase: '«Lo tomé como trabajo. Nada más.»'
  },
  'Zam Wesell': {
    era: 'República', avatar: '🦎',
    descripcion: 'Asesina cambiaforma clawdite. Contratada por Jango Fett para asesinar a Padmé Amidala. Fue silenciada por Fett antes de poder revelar a su empleador.',
    frase: '«¡Son los changeling! ¡Jango me contrató!»'
  },
  'Dexter Jettster': {
    era: 'República', avatar: '🍳',
    descripcion: 'Besalisk dueño del Dex\'s Diner en Coruscant. Viejo amigo de Obi-Wan Kenobi. Le ayudó a identificar el dardo Kamino que mató a Zam Wesell.',
    frase: '«¡Obi, viejo amigo! ¡Siéntate y toma un bocado!»'
  },
  'Lama Su': {
    era: 'República', avatar: '🧬',
    descripcion: 'Primer Ministro de Kamino. Supervisor del proyecto del Ejército Clon encargado por "Sifo-Dyas". Un ser alto y elegante del planeta océanico Kamino.',
    frase: '«El ejército está listo para el uso de la República.»'
  },
  'Taun We': {
    era: 'República', avatar: '🤍',
    descripcion: 'Coordinadora administrativa kaminoana. Asistió a Lama Su en el proyecto del Ejército Clon. Fue la responsable de atender a Obi-Wan en su visita a Kamino.',
    frase: '«El Maestro que realizó el encargo lleva diez años muerto.»'
  },
  'Jocasta Nu': {
    era: 'República', avatar: '📚',
    descripcion: 'Archivista Jefe del Templo Jedi. Guardian de los Archivos Jedi. Famosamente dijo que si algo no está en los archivos, no existe.',
    frase: '«Si no está en los Archivos, no existe.»'
  },
  'Wat Tambor': {
    era: 'República', avatar: '⚙️',
    descripcion: 'Supervisor Eminente de la Gremio Techno Union. Aliado con la Confederación de Sistemas Independientes. Capturado en Geonosis y luego ejecutado.',
    frase: '«El Gremio Techno Union está con la Confederación.»'
  },
  'San Hill': {
    era: 'República', avatar: '💰',
    descripcion: 'Presidente del Banco Intergaláctico de Comercio. Firmante de la alianza separatista en Geonosis. Financiero clave de la Confederación de Sistemas Independientes.',
    frase: '«El Banco garantiza los fondos para la causa.»'
  },
  'Shaak Ti': {
    era: 'República', avatar: '🔴',
    descripcion: 'Maestra Jedi togruta del Consejo Jedi. Supervisó el entrenamiento de los clones en Kamino. Una de las últimas sobrevivientes de la Orden 66.',
    frase: '«La Fuerza bendice este ejército y los Jedi que los guían.»'
  },
  'Grievous': {
    era: 'República', avatar: '🦿',
    descripcion: 'General de la Armada Separatista. Cyborg kaleesh que coleccionaba sables de luz de Jedi caídos. Entrenado en combate de sables por el Conde Dooku.',
    frase: '«¡Rinden su sable, Jedi! Tengo una colección que ampliar.»'
  },
  'Tarfful': {
    era: 'República', avatar: '🐻‍❄️',
    descripcion: 'Líder wookiee de Kashyyyk. Peleó junto a Yoda en la Batalla de Kashyyyk. Ayudó a Yoda a escapar de la Orden 66 en una pequeña nave.',
    frase: '«(rugido wookiee de despedida a Yoda)»'
  },
  'Raymus Antilles': {
    era: 'Imperio', avatar: '🚀',
    descripcion: 'Capitán del Tantive IV y el Profundidad Vengativa. Sirviente leal de la familia Organa. Murió a manos de Darth Vader al inicio de la Guerra Civil Galáctica.',
    frase: '«Somos enviados diplomáticos del Sistema de Alderaan.»'
  },
  'Sly Moore': {
    era: 'Imperio', avatar: '👤',
    descripcion: 'Jefa de Gabinete del Canciller Supremo Palpatine. Uma umbara misteriosa de habilidades mentales extraordinarias. Sombra silenciosa del futuro Emperador.',
    frase: '«El Senado pronto lo sabrá.»'
  },
  'Tion Medon': {
    era: 'Imperio', avatar: '🎭',
    descripcion: 'Administrador Port de Pau City, Utapau. Alertó en secreto a Obi-Wan Kenobi de la presencia del General Grievous en su ciudad.',
    frase: '«Hay diez mil droides de combate en mi ciudad, Maestro Jedi.»'
  },
  'Finn': {
    era: 'Resistencia', avatar: '🏃',
    descripcion: 'Ex soldado de asalto de la Primera Orden conocido como FN-2187. Desertó y se unió a la Resistencia. Sensible a la Fuerza y leal hasta la muerte.',
    frase: '«¡Somos suficientes!»'
  },
  'Rey': {
    era: 'Resistencia', avatar: '⭐',
    descripcion: 'Chatarrera de Jakku que descubrió ser nieta del Emperador Palpatine. La última Jedi entrenada por Luke Skywalker. Derrotó a Palpatine restaurando la paz.',
    frase: '«Soy Rey Skywalker.»'
  },
  'Poe Dameron': {
    era: 'Resistencia', avatar: '🛩️',
    descripcion: 'El mejor piloto de la Resistencia. Comandante del Escuadrón Negro. Hijo de ex pilotos rebeldes. Audaz, carismático y peligrosamente valiente.',
    frase: '«Soy Poe Dameron. El mejor piloto de la Resistencia.»'
  },
  'BB-8': {
    era: 'Resistencia', avatar: '🟠',
    descripcion: 'Droide astromecánico esférico y asistente de Poe Dameron. Portaba la ubicación de Luke Skywalker. Expresivo, leal y a menudo más valiente que los humanos.',
    frase: '«Beep boop bweep!» (¡👍 encendedor incluido!)'
  },
  'Captain Phasma': {
    era: 'Resistencia', avatar: '🔒',
    descripcion: 'Comandante de los soldados de asalto de la Primera Orden. Reconocible por su armadura cromada. Despiadada y eficiente. Villana icónica a pesar de poco tiempo en pantalla.',
    frase: '«Soldados como mis tropas son las herramientas del Imperio del mañana.»'
  },
  'Mas Amedda': {
    era: 'Imperio', avatar: '🔵',
    descripcion: 'Vicecanciller del Senado Galáctico bajo Valorum y Palpatine. Chagrian que sirvió como marioneta de Palpatine en el Senado. Speaker oficial del Canciller.',
    frase: '«El Senado cede sus poderes al Canciller Supremo.»'
  },
  'Ratts Tyerell': {
    era: 'República', avatar: '🏁',
    descripcion: 'Piloto de Pod-racing aleena. Pequeño pero agresivo competidor en la Carrera de la Boonta Eve en Tatooine. Murió en un túnel durante la carrera.',
    frase: '«¡Nadie me puede parar a mí!» (segundos antes de chocar)'
  },
  'Poggle the Lesser': {
    era: 'República', avatar: '🐞',
    descripcion: 'Archiduque de Geonosis y líder de los geonosianos. Ordenó la construcción del prototipo de la Estrella de la Muerte. Capturado, ejecutado por Palpatine.',
    frase: '«Las hordas geonosianas son incontables.»'
  },
  'Dormé': {
    era: 'República', avatar: '👩‍🏫',
    descripcion: 'Handmaiden y guardia de Padmé Amidala en Coruscant. Sobrevivió al intento de asesinato de Padmé siendo confundida con ella.',
    frase: '«Me quedo para proteger a Milady, aunque no esté aquí.»'
  },
  'Cliegg Lars': {
    era: 'República', avatar: '👨',
    descripcion: 'Granjero de humedad de Tatooine. Compró y liberó a Shmi Skywalker y se casó con ella. Padre de Owen Lars. Perdió su pierna buscando a Shmi.',
    frase: '«Luchamos durante treinta días para rescatarla de los Tusken.»'
  },
  'Dud Bolt': {
    era: 'República', avatar: '⚡',
    descripcion: 'Piloto de Pod-racing vulptex. Participante en la Carrera de la Boonta Eve. Uno de los muchos pilotos exóticos que competían contra el joven Anakin Skywalker.',
    frase: '«¡El podracer más rápido o el más astuto gana!»'
  },
  'Gasgano': {
    era: 'República', avatar: '🕷️',
    descripcion: 'Piloto de Pod-racing xexto de cuatro brazos. Su anatomía le daba ventaja manejando controles múltiples. Competidor destacado en la carrera de Boonta Eve.',
    frase: '«¡Cuatro brazos, cuatro controles, victoria asegurada!»'
  },
  'Ben Quadinaros': {
    era: 'República', avatar: '💀',
    descripcion: 'Piloto de Pod-racing toong. Su Pod no pudo arrancar al inicio de la Carrera de la Boonta Eve. Conocido por su épico fracaso antes de competir.',
    frase: '«¡Mi Pod! ¡No funciona!» (clásico)'
  },
  'Eeth Koth': {
    era: 'República', avatar: '🧘',
    descripcion: 'Maestro Jedi zabrak del Consejo Jedi. Capturado por el General Grievous y rescatado en combate por Jedi. Sobrevivió la Purga Jedi retirándose.',
    frase: '«La Fuerza guía mi camino aunque las cadenas sujeten mi cuerpo.»'
  },
  'Adi Gallia': {
    era: 'República', avatar: '🌺',
    descripcion: 'Maestra Jedi tholothiana del Consejo Jedi. Experta negociadora y piloto. Murió durante las Guerras Clon a manos de Savage Opress.',
    frase: '«Somos más útiles vivos para la República que muertos.»'
  },
  'Saesee Tiin': {
    era: 'República', avatar: '🦋',
    descripcion: 'Maestro Jedi iktotchi del Consejo Jedi. Reconocible por sus cuernos curvados. Hábil piloto de caza. Murió intentando arrestar a Palpatine.',
    frase: '«He visto este futuro antes.»'
  },
  'Yarael Poof': {
    era: 'República', avatar: '🦑',
    descripcion: 'Maestro Jedi quermian del Consejo Jedi, conocido por su cuello extremadamente largo y dos pares de brazos. Especialista en ilusiones con la Fuerza.',
    frase: '«La mente es la herramienta más poderosa de un Jedi.»'
  },
  'Taun We': {
    era: 'República', avatar: '🤍',
    descripcion: 'Coordinadora kaminoana que coordinó el proyecto del ejército clon. Grácil y eficiente en el manejo de los complejos laboratorios de clonación.',
    frase: '«Todos los clones tienen sus propiedades.»'
  },
  'Gregar Typho': {
    era: 'República', avatar: '💂',
    descripcion: 'Capitán de seguridad de la Senadora Padmé Amidala. Con un implante ocular debido a una batalla anterior. Guardián leal de Amidala en Coruscant.',
    frase: '«Mi trabajo es proteger a la Senadora con mi vida.»'
  },
  'Cordé': {
    era: 'República', avatar: '💔',
    descripcion: 'Handmaiden y doble de Padmé Amidala. Murió en el atentado con explosivos al aterrizar en Coruscant, salvando la vida de la Senadora.',
    frase: '«Me he fallado a mí misma... y a Milady. Lo siento.»'
  },
  'R4-P17': {
    era: 'República', avatar: '🔴',
    descripcion: 'Droide astromecánico de Obi-Wan Kenobi. Compañera fiel del Maestro Jedi en muchas misiones de la Guerra Clon. Destruida sobre Coruscant.',
    frase: '«¡Bweeeep!» (advertencia de peligro inminente)'
  },
  'Quarsh Panaka': {
    era: 'República', avatar: '🎖️',
    descripcion: 'Capitán de la guardia de la Reina Amidala de Naboo. Leal protector de la joven reina durante el bloqueo de Naboo. Más tarde sirvió al Imperio.',
    frase: '«Los protocolos de seguridad no se negocian, Majestad.»'
  },
  'Ric Olié': {
    era: 'República', avatar: '✈️',
    descripcion: 'Piloto jefe de la Nave Real de Naboo. Transportó a la Reina Amidala durante su escape del bloqueo de la Federación de Comercio.',
    frase: '«¡Rompemos el bloqueo o morimos en el intento!»'
  }
};

// Datos genéricos para personajes sin info específica
function getGenericExtra(name, id) {
  const eras = ['República', 'Imperio', 'Resistencia', 'Antigua'];
  const frases = [
    '«Mis acciones hablan por mí en la galaxia.»',
    '«En la oscuridad del espacio, elegimos nuestro destino.»',
    '«La Fuerza conecta a todos los seres vivos.»',
    '«Cada batalla forja un guerrero mejor.»',
    '«El honor es lo único que nadie puede quitarte.»',
    '«La galaxia es más grande de lo que imaginamos.»',
    '«Sobreviví para contar mi historia.»',
    '«Las estrellas son mi hogar.»'
  ];
  const era = eras[id % eras.length];
  return {
    era,
    avatar: '👤',
    descripcion: `Individuo registrado en los archivos galácticos. Ser reconocido en la galaxia durante la Era ${era}. Sus acciones, aunque menos documentadas, formaron parte del tapiz de la historia galáctica.`,
    frase: frases[id % frases.length]
  };
}

// Emojis por género
const GENDER_AVATAR = {
  male: '👨', female: '👩', hermaphrodite: '🟡',
  none: '🤖', 'n/a': '🤖', unknown: '❓'
};

// Nombres de películas de Star Wars
const FILM_NAMES = {
  1: 'Episodio IV: Una Nueva Esperanza',
  2: 'Episodio V: El Imperio Contraataca',
  3: 'Episodio VI: El Retorno del Jedi',
  4: 'Episodio I: La Amenaza Fantasma',
  5: 'Episodio II: El Ataque de los Clones',
  6: 'Episodio III: La Venganza de los Sith',
  7: 'Episodio VII: El Despertar de la Fuerza',
  8: 'Episodio VIII: Los Últimos Jedi',
  9: 'Episodio IX: El Ascenso de Skywalker'
};

// ── Cache para homeworlds y species ───────────────────────────
const homeworldCache = {};
const speciesCache   = {};

async function fetchName(url) {
  if (!url) return 'Desconocido';
  if (homeworldCache[url]) return homeworldCache[url];
  try {
    const r = await fetch(url);
    const d = await r.json();
    const n = d.name || 'Desconocido';
    homeworldCache[url] = n;
    speciesCache[url]   = n;
    return n;
  } catch { return 'Desconocido'; }
}

// ── Estado de la app ──────────────────────────────────────────
let allCharacters   = [];
let filteredChars   = [];
let homeworldNames  = {};
let speciesNames    = {};

// ── Generar estrellas de fondo ────────────────────────────────
function generateStars() {
  const container = document.getElementById('stars');
  const count = 200;
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star-dot';
    const size = Math.random() * 2.4 + 0.4;
    star.style.cssText = `
      width:${size}px; height:${size}px;
      top:${Math.random()*100}%;
      left:${Math.random()*100}%;
      --dur:${(Math.random()*3+2).toFixed(1)}s;
      --op:${(Math.random()*0.4+0.2).toFixed(2)};
      animation-delay:${(Math.random()*4).toFixed(2)}s;
    `;
    container.appendChild(star);
  }
}

// ── Fetch todas las páginas de SWAPI ─────────────────────────
async function fetchAllCharacters() {
  const loadBar  = document.getElementById('load-bar');
  const loadInfo = document.getElementById('load-info');

  let url      = 'https://swapi.dev/api/people/';
  let chars    = [];
  let page     = 0;
  let total    = 0;
  let fetched  = 0;

  while (url) {
    page++;
    loadInfo.textContent = `Descargando página ${page}...`;
    const res  = await fetch(url);
    const data = await res.json();

    if (page === 1) total = data.count;
    chars = chars.concat(data.results);
    fetched += data.results.length;

    const pct = Math.round((fetched / total) * 80);
    loadBar.style.width = pct + '%';

    url = data.next;
  }

loadInfo.textContent = 'Cargando imágenes y enriqueciendo datos...';
  loadBar.style.width  = '85%';

  // Recopilar URLs únicas de homeworld y species
  const hwUrls = [...new Set(chars.map(c => c.homeworld).filter(Boolean))];
  const spUrls = [...new Set(chars.flatMap(c => c.species).filter(Boolean))];

  // Fetch en paralelo
  await Promise.all([
    ...hwUrls.map(url => fetchName(url).then(n => homeworldNames[url] = n)),
    ...spUrls.map(url => fetchName(url).then(n => speciesNames[url]   = n))
  ]);

  loadBar.style.width = '100%';
  loadInfo.textContent = `${chars.length} registros cargados.`;

  return chars;
}

// ── Enriquecer personaje con datos extra ──────────────────────
function enrichChar(char, index) {
  const extra = CHAR_EXTRA[char.name] || getGenericExtra(char.name, index);
  const hw    = homeworldNames[char.homeworld] || 'Desconocido';
  const sp    = char.species.length ? (speciesNames[char.species[0]] || 'Desconocido') : 'Humano';
  const films = char.films.map(f => {
    const num = parseInt(f.match(/\/(\d+)\/$/)?.[1]);
    return FILM_NAMES[num] || `Film ${num}`;
  });

  // Extraer ID del URL
  const id = parseInt(char.url.match(/\/(\d+)\/$/)?.[1]) || index + 1;

  return {
    id, name: char.name,
    birthYear: char.birth_year || 'Desconocido',
    gender: char.gender || 'Desconocido',
    height: char.height !== 'unknown' ? `${char.height} cm` : 'Desconocido',
    mass: char.mass !== 'unknown' ? `${char.mass} kg` : 'Desconocido',
    hairColor: char.hair_color || 'Desconocido',
    eyeColor: char.eye_color || 'Desconocido',
    skinColor: char.skin_color || 'Desconocido',
    homeworld: hw,
    species: sp,
    filmsCount: char.films.length,
    films,
    ...extra
  };
}

// ── Traducir género ───────────────────────────────────────────
function translateGender(g) {
  const map = { male: 'Masculino', female: 'Femenino', hermaphrodite: 'Hermafrodita', none: 'Ninguno', 'n/a': 'N/A', unknown: 'Desconocido' };
  return map[g?.toLowerCase()] || g || 'Desconocido';
}

// ── Obtener clase de era ──────────────────────────────────────
function eraClass(era) {
  if (era?.includes('República'))  return 'era-República';
  if (era?.includes('Imperio'))    return 'era-Imperio';
  if (era?.includes('Resistencia'))return 'era-Resistencia';
  if (era?.includes('Antigua'))    return 'era-Antigua';
  return 'era-default';
}

// ── Mapa nombre → URL de imagen (llena desde Akabab API) ─────────────
let imageMap = {};

async function fetchCharacterImages() {
  try {
    const res  = await fetch('https://akabab.github.io/starwars-api/api/all.json');
    const data = await res.json();
    data.forEach(c => {
      if (c.name && c.image) imageMap[c.name.toLowerCase()] = c.image;
    });
  } catch (e) {
    console.warn('Akabab API no disponible, se usarán placeholders:', e);
  }
}

function getImageUrl(char) {
  return imageMap[char.name.toLowerCase()] || null;
}

// ── Iniciales para avatar fallback ─────────────────────────────
function getInitials(name) {
  return name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
}

// ── Calcular avatar emoji (ya no se usa en UI, solo internal) ────────
function getAvatar(char) {
  if (char.avatar && char.avatar !== '👤') return char.avatar;
  return GENDER_AVATAR[char.gender?.toLowerCase()] || '👤';
}

// ── Renderizar tarjeta ────────────────────────────────────────
function createCard(char) {
  const card = document.createElement('div');
  card.className = 'char-card';
  card.setAttribute('data-id', char.id);

  const era    = char.era || 'Desconocida';

  const imgUrl    = getImageUrl(char);
  const imgHtml   = imgUrl
    ? `<img src="${imgUrl}" alt="${char.name}" class="avatar-img" onerror="this.style.display='none';this.nextElementSibling.style.removeProperty('display');" />`
    : '';
  const initials  = getInitials(char.name);

  card.innerHTML = `
    <div class="card-id">ID-${String(char.id).padStart(4,'0')}</div>
    <div class="card-header">
      <div class="card-avatar">
        ${imgHtml}
        <span class="avatar-initials"${imgUrl ? ' style="display:none"' : ''}>${initials}</span>
      </div>
      <div class="card-title-wrap">
        <div class="card-name" title="${char.name}">${char.name.toUpperCase()}</div>
        <span class="card-era ${eraClass(era)}">${era.toUpperCase()}</span>
      </div>
    </div>
    <div class="card-stats">
      <div class="card-stat">
        <span class="cs-label">Especie</span>
        <span class="cs-val">${char.species}</span>
      </div>
      <div class="card-stat">
        <span class="cs-label">Planeta</span>
        <span class="cs-val" title="${char.homeworld}">${char.homeworld}</span>
      </div>
      <div class="card-stat">
        <span class="cs-label">Nacimiento</span>
        <span class="cs-val">${char.birthYear}</span>
      </div>
      <div class="card-stat">
        <span class="cs-label">Peliculas</span>
        <span class="cs-val">${char.filmsCount} apari${char.filmsCount === 1 ? 'ción' : 'ciones'}</span>
      </div>
    </div>
    <p class="card-desc">${char.descripcion}</p>
    <button class="card-btn">▶ VER ARCHIVO COMPLETO</button>
  `;

  card.addEventListener('click', () => openModal(char));
  return card;
}

// ── Renderizar grid ───────────────────────────────────────────
function renderGrid(chars) {
  const grid    = document.getElementById('characters-grid');
  const noRes   = document.getElementById('no-results');
  const resInfo = document.getElementById('results-info');
  const showTxt = document.getElementById('showing-text');

  grid.innerHTML = '';

  if (chars.length === 0) {
    noRes.classList.remove('hidden');
    resInfo.style.display = 'none';
    return;
  }

  noRes.classList.add('hidden');
  resInfo.style.display = 'block';
  showTxt.textContent = `Mostrando ${chars.length} de ${allCharacters.length} registros galácticos`;

  const frag = document.createDocumentFragment();
  chars.forEach(c => frag.appendChild(createCard(c)));
  grid.appendChild(frag);
}

// ── Filtrar + ordenar ─────────────────────────────────────────
function applyFilters() {
  const query  = document.getElementById('search-input').value.trim().toLowerCase();
  const gender = document.getElementById('filter-gender').value.toLowerCase();
  const era    = document.getElementById('filter-era').value;
  const sortBy = document.getElementById('sort-by').value;

  let result = allCharacters.filter(c => {
    const matchName   = !query  || c.name.toLowerCase().includes(query) || c.homeworld.toLowerCase().includes(query) || c.species.toLowerCase().includes(query) || c.era?.toLowerCase().includes(query);
    const matchGender = !gender || c.gender?.toLowerCase() === gender;
    const matchEra    = !era    || c.era?.includes(era);
    return matchName && matchGender && matchEra;
  });

  if (sortBy === 'name') {
    result.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'height') {
    result.sort((a, b) => {
      const ha = parseInt(a.height) || 0;
      const hb = parseInt(b.height) || 0;
      return hb - ha;
    });
  } else if (sortBy === 'birth') {
    result.sort((a, b) => {
      const parse = s => {
        if (!s || s === 'unknown') return 9999;
        const n = parseFloat(s.replace('BBY', '-').replace('ABY', ''));
        return s.includes('BBY') ? -n : +n;
      };
      return parse(a.birthYear) - parse(b.birthYear);
    });
  }

  filteredChars = result;
  renderGrid(filteredChars);
}

// ── Modal ─────────────────────────────────────────────────────
function openModal(char) {
  const overlay = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');
  const era     = char.era || 'Desconocida';

  const filmTags = char.films.map(f => `<span class="film-tag">${f}</span>`).join('');

  const imgUrl   = getImageUrl(char);
  const imgHtmlM  = imgUrl
    ? `<img src="${imgUrl}" alt="${char.name}" class="modal-avatar-img" onerror="this.style.display='none';this.nextElementSibling.style.removeProperty('display');" />`
    : '';
  const initials  = getInitials(char.name);

  content.innerHTML = `
    <div class="modal-top">
      <div class="modal-avatar">
        ${imgHtmlM}
        <span class="avatar-initials modal-initials"${imgUrl ? ' style="display:none"' : ''}>${initials}</span>
      </div>
      <div class="modal-header-info">
        <div class="modal-name">${char.name.toUpperCase()}</div>
        <div class="modal-badges">
          <span class="card-era ${eraClass(era)}">${era.toUpperCase()}</span>
          <span class="card-era era-default">${char.species.toUpperCase()}</span>
          <span class="card-era era-default">${translateGender(char.gender).toUpperCase()}</span>
        </div>
        <div class="modal-id">REGISTRO GALÁCTICO · ID-${String(char.id).padStart(6,'0')}</div>
      </div>
    </div>

    <!-- FRASE MÍTICA -->
    <div class="modal-quote-section">
      <div class="modal-quote-label">⚡ FRASE MÍTICA</div>
      <div class="modal-quote">${char.frase}</div>
    </div>

    <!-- DESCRIPCIÓN -->
    <div class="modal-desc-section">
      <div class="modal-section-title">DESCRIPCIÓN DE ARCHIVO</div>
      <p class="modal-desc">${char.descripcion}</p>
    </div>

    <!-- DATOS TÉCNICOS -->
    <div class="modal-desc-section">
      <div class="modal-section-title">DATOS BIOMÉTRICOS</div>
      <div class="modal-data-grid">
        <div class="data-cell">
          <div class="data-cell-label">Planeta natal</div>
          <div class="data-cell-val">${char.homeworld}</div>
        </div>
        <div class="data-cell">
          <div class="data-cell-label">Año de nacimiento</div>
          <div class="data-cell-val">${char.birthYear}</div>
        </div>
        <div class="data-cell">
          <div class="data-cell-label">Género</div>
          <div class="data-cell-val">${translateGender(char.gender)}</div>
        </div>
        <div class="data-cell">
          <div class="data-cell-label">Especie</div>
          <div class="data-cell-val">${char.species}</div>
        </div>
        <div class="data-cell">
          <div class="data-cell-label">Altura</div>
          <div class="data-cell-val">${char.height}</div>
        </div>
        <div class="data-cell">
          <div class="data-cell-label">Masa</div>
          <div class="data-cell-val">${char.mass}</div>
        </div>
        <div class="data-cell">
          <div class="data-cell-label">Color de ojos</div>
          <div class="data-cell-val">${char.eyeColor}</div>
        </div>
        <div class="data-cell">
          <div class="data-cell-label">Color de cabello</div>
          <div class="data-cell-val">${char.hairColor}</div>
        </div>
        <div class="data-cell">
          <div class="data-cell-label">Color de piel</div>
          <div class="data-cell-val">${char.skinColor}</div>
        </div>
        <div class="data-cell">
          <div class="data-cell-label">Apariciones</div>
          <div class="data-cell-val">${char.filmsCount} película(s)</div>
        </div>
      </div>
    </div>

    <!-- PELÍCULAS -->
    ${char.films.length > 0 ? `
    <div class="modal-desc-section">
      <div class="modal-section-title">APARICIONES EN ARCHIVO FÍLMICO</div>
      <div class="modal-films">${filmTags}</div>
    </div>` : ''}
  `;

  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
  document.body.style.overflow = '';
}

// ── Inicialización ────────────────────────────────────────────
async function init() {
  generateStars();

  try {
    // Carga imágenes y personajes en paralelo
    const [rawChars] = await Promise.all([
      fetchAllCharacters(),
      fetchCharacterImages()
    ]);

    allCharacters = rawChars.map((c, i) => enrichChar(c, i));

    // Actualizar header
    document.getElementById('total-count').textContent = allCharacters.length;
    document.getElementById('status-text').textContent = 'ACTIVO';
    document.getElementById('status-text').classList.remove('blink-text');

    // Ocultar loading
    const loading = document.getElementById('loading-screen');
    loading.style.opacity = '0';
    loading.style.transition = 'opacity 0.5s ease';
    setTimeout(() => loading.style.display = 'none', 500);

    // Mostrar info de resultados
    document.getElementById('results-info').style.display = 'block';

    // Render inicial
    applyFilters();

  } catch (err) {
    console.error('Error cargando datos:', err);
    document.getElementById('load-info').textContent = '⚠ Error de conexión. Recarga la página.';
    document.getElementById('load-info').style.color = '#ff1744';
  }

  // ── Eventos ─────────────────────────────────────────────────
  document.getElementById('search-input').addEventListener('input', applyFilters);
  document.getElementById('clear-btn').addEventListener('click', () => {
    document.getElementById('search-input').value = '';
    applyFilters();
  });
  document.getElementById('filter-gender').addEventListener('change', applyFilters);
  document.getElementById('filter-era').addEventListener('change', applyFilters);
  document.getElementById('sort-by').addEventListener('change', applyFilters);

  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Cerrar modal con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// ── Arrancar ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);
