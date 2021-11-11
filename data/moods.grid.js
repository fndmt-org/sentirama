const metNeeds = [
    { set:'met', category_es: 'Esperanza', value_es: 'Aliento' },
    { set:'met', category_es: 'Esperanza', value_es: 'Esperanza' },
    { set:'met', category_es: 'Esperanza', value_es: 'Espectante' },
    { set:'met', category_es: 'Esperanza', value_es: 'Optimista' },

    { set:'met', category_es: 'Confianza', value_es: 'Capaz'},
    { set:'met', category_es: 'Confianza', value_es: 'Confienza'},
    { set:'met', category_es: 'Confianza', value_es: 'Fuerte'},
    { set:'met', category_es: 'Confianza', value_es: 'Illusión'},
    { set:'met', category_es: 'Confianza', value_es: 'Orgullo'},
    { set:'met', category_es: 'Confianza', value_es: 'Recepetividad'},
    { set:'met', category_es: 'Confianza', value_es: 'Seguridad'},

    { set:'met', category_es: 'Afecto', value_es: 'Afecto'},
    { set:'met', category_es: 'Afecto', value_es: 'Amoro'},
    { set:'met', category_es: 'Afecto', value_es: 'Cariño'},
    { set:'met', category_es: 'Afecto', value_es: 'Compasión'},
    { set:'met', category_es: 'Afecto', value_es: 'Comprensión'},
    { set:'met', category_es: 'Afecto', value_es: 'Simpatía'},
    { set:'met', category_es: 'Afecto', value_es: 'Ternura'},

    { set:'met', category_es: 'Euforia', value_es: 'Euforia'},
    { set:'met', category_es: 'Euforia', value_es: 'Exultante'},
    { set:'met', category_es: 'Euforia', value_es: 'Efusión'},

    { set:'met', category_es: 'Inspiración', value_es: 'Impresión'},
    { set:'met', category_es: 'Inspiración', value_es: 'Inspiración'},
    { set:'met', category_es: 'Inspiración', value_es: 'Maravillad@'},

    { set:'met', category_es: 'Interés', value_es: 'Apertura'},
    { set:'met', category_es: 'Interés', value_es: 'Atención'},
    { set:'met', category_es: 'Interés', value_es: 'Atracción'},
    { set:'met', category_es: 'Interés', value_es: 'Compromiso'},
    { set:'met', category_es: 'Interés', value_es: 'Curiosidad'},
    { set:'met', category_es: 'Interés', value_es: 'Decisión'},
    { set:'met', category_es: 'Interés', value_es: 'Disposición'},
    { set:'met', category_es: 'Interés', value_es: 'Inspiración'},
    { set:'met', category_es: 'Interés', value_es: 'Interes'},
    { set:'met', category_es: 'Interés', value_es: 'Intriga'},
    { set:'met', category_es: 'Interés', value_es: 'Involucración'},
    { set:'met', category_es: 'Interés', value_es: 'Motivación'},

    { set:'met', category_es: 'Descanso', value_es: 'Descanso'},
    { set:'met', category_es: 'Descanso', value_es: 'Refresco'},
    { set:'met', category_es: 'Descanso', value_es: 'Renovación'},
    { set:'met', category_es: 'Descanso', value_es: 'Restauración'},

    { set:'met', category_es: 'Entusiasmo', value_es: 'Animo'},
    { set:'met', category_es: 'Entusiasmo', value_es: 'Pasión'},
    { set:'met', category_es: 'Entusiasmo', value_es: 'Entusiasmo'},
    { set:'met', category_es: 'Entusiasmo', value_es: 'Estimulo'},
    { set:'met', category_es: 'Entusiasmo', value_es: 'Exitación'},
    { set:'met', category_es: 'Entusiasmo', value_es: 'Fascinación'},
    { set:'met', category_es: 'Entusiasmo', value_es: 'Illusión'},
    { set:'met', category_es: 'Entusiasmo', value_es: 'Impresión'},
    { set:'met', category_es: 'Entusiasmo', value_es: 'Sorprendid@'},

    { set:'met', category_es: 'Paz', value_es: 'Alivio'},
    { set:'met', category_es: 'Paz', value_es: 'Sosiego'},
    { set:'met', category_es: 'Paz', value_es: 'Calma'},
    { set:'met', category_es: 'Paz', value_es: 'Cercanía'},
    { set:'met', category_es: 'Paz', value_es: 'Cómodidad'},
    { set:'met', category_es: 'Paz', value_es: 'Desahogo'},
    { set:'met', category_es: 'Paz', value_es: 'Despreocupación'},
    { set:'met', category_es: 'Paz', value_es: 'Lúcidez'},
    { set:'met', category_es: 'Paz', value_es: 'Plácidez'},
    { set:'met', category_es: 'Paz', value_es: 'Realización'},
    { set:'met', category_es: 'Paz', value_es: 'Relajación'},
    { set:'met', category_es: 'Paz', value_es: 'Satisfacción'},

    { set:'met', category_es: 'Felicidad', value_es: 'Alegría'},
    { set:'met', category_es: 'Felicidad', value_es: 'Complacencia'},
    { set:'met', category_es: 'Felicidad', value_es: 'Felicidad'},
    { set:'met', category_es: 'Felicidad', value_es: 'Gozo'},

    { set:'met', category_es: 'Gratitud', value_es: 'Agradecimiento'},
    { set:'met', category_es: 'Gratitud', value_es: 'Conmoción'},
    { set:'met', category_es: 'Gratitud', value_es: 'Emoción'},
    { set:'met', category_es: 'Gratitud', value_es: 'Generocidad'},

];

const unmetNeeds = [
    { set:'unmet', category_es:'Anhelo', value_es:'Añorancia'},
    { set:'unmet', category_es:'Anhelo', value_es:'Celos'},
    { set:'unmet', category_es:'Anhelo', value_es:'Deseo'},
    { set:'unmet', category_es:'Anhelo', value_es:'Envidia'},
    { set:'unmet', category_es:'Anhelo', value_es:'Melancólia'},
    { set:'unmet', category_es:'Anhelo', value_es:'Nostálgia'},
    { set:'unmet', category_es:'Anhelo', value_es:'Soledad'},

    { set:'unmet', category_es:'Aversión', value_es:'Asco'},
    { set:'unmet', category_es:'Aversión', value_es:'Horror'},
    { set:'unmet', category_es:'Aversión', value_es:'Desprecio'},
    { set:'unmet', category_es:'Aversión', value_es:'Odio'},
    { set:'unmet', category_es:'Aversión', value_es:'Repugnancia'},

    { set:'unmet', category_es:'Desconexión', value_es:'Aburrimiento'},
    { set:'unmet', category_es:'Desconexión', value_es:'Afectación'},
    { set:'unmet', category_es:'Desconexión', value_es:'Aislamiento'},
    { set:'unmet', category_es:'Desconexión', value_es:'Apatía'},
    { set:'unmet', category_es:'Desconexión', value_es:'Desconección'},
    { set:'unmet', category_es:'Desconexión', value_es:'Desidia'},
    { set:'unmet', category_es:'Desconexión', value_es:'Distante'},
    { set:'unmet', category_es:'Desconexión', value_es:'Fríaldad'},
    { set:'unmet', category_es:'Desconexión', value_es:'Indiferentcia'},

    { set:'unmet', category_es:'Enfadado', value_es:'Disgusto'},
    { set:'unmet', category_es:'Enfadado', value_es:'Enfado'},
    { set:'unmet', category_es:'Enfadado', value_es:'Furia'},
    { set:'unmet', category_es:'Enfadado', value_es:'Indignación'},
    { set:'unmet', category_es:'Enfadado', value_es:'Molestia'},
    { set:'unmet', category_es:'Enfadado', value_es:'Resentimiento'},

    { set:'unmet', category_es:'Tensión', value_es:'Ansiedad'},
    { set:'unmet', category_es:'Tensión', value_es:'Conmoción'},
    { set:'unmet', category_es:'Tensión', value_es:'Desborde'},
    { set:'unmet', category_es:'Tensión', value_es:'Estres'},
    { set:'unmet', category_es:'Tensión', value_es:'Irritable'},
    { set:'unmet', category_es:'Tensión', value_es:'Nervios'},
    { set:'unmet', category_es:'Tensión', value_es:'Sobrecarga'},
    { set:'unmet', category_es:'Tensión', value_es:'Tensión'},

    { set:'unmet', category_es:'Miedo', value_es:'Congoja'},
    { set:'unmet', category_es:'Miedo', value_es:'Susto'},
    { set:'unmet', category_es:'Miedo', value_es:'Temor'},
    { set:'unmet', category_es:'Miedo', value_es:'Terror'},
    { set:'unmet', category_es:'Miedo', value_es:'Desconfianza'},
    { set:'unmet', category_es:'Miedo', value_es:'Preocupación'},

    { set:'unmet', category_es:'Cansancio', value_es:'Cansancio'},
    { set:'unmet', category_es:'Cansancio', value_es:'Débil'},
    { set:'unmet', category_es:'Cansancio', value_es:'Dolor'},
    { set:'unmet', category_es:'Cansancio', value_es:'Fatiga'},
    { set:'unmet', category_es:'Cansancio', value_es:'Aflicción'},
    { set:'unmet', category_es:'Cansancio', value_es:'Angustia'},
    { set:'unmet', category_es:'Cansancio', value_es:'Desconsolación'},

    { set:'unmet', category_es:'Confusión', value_es:'Bloqueo'},
    { set:'unmet', category_es:'Confusión', value_es:'Confusión'},
    { set:'unmet', category_es:'Confusión', value_es:'Desorientación'},
    { set:'unmet', category_es:'Confusión', value_es:'División'},
    { set:'unmet', category_es:'Confusión', value_es:'Duda'},
    { set:'unmet', category_es:'Confusión', value_es:'Escepticismo'},
    { set:'unmet', category_es:'Confusión', value_es:'Indescisión'},
    { set:'unmet', category_es:'Confusión', value_es:'Pensando'},
    { set:'unmet', category_es:'Confusión', value_es:'Pérdida'},
    { set:'unmet', category_es:'Confusión', value_es:'Perplejidad'},
    { set:'unmet', category_es:'Confusión', value_es:'Vacilante'},

    { set:'unmet', category_es:'Inquietud', value_es:'Agitación'},
    { set:'unmet', category_es:'Inquietud', value_es:'Agobio'},
    { set:'unmet', category_es:'Inquietud', value_es:'Alarma'},
    { set:'unmet', category_es:'Inquietud', value_es:'Arrepetimiento'},
    { set:'unmet', category_es:'Inquietud', value_es:'Verguenza'},
    { set:'unmet', category_es:'Inquietud', value_es:'Desconcertación'},
    { set:'unmet', category_es:'Inquietud', value_es:'Escándalo'},
    { set:'unmet', category_es:'Inquietud', value_es:'Incómodidad'},
    { set:'unmet', category_es:'Inquietud', value_es:'Inquietud'},
    { set:'unmet', category_es:'Inquietud', value_es:'Intranquilidad'},
    { set:'unmet', category_es:'Inquietud', value_es:'Preocupación'},
    { set:'unmet', category_es:'Inquietud', value_es:'Sobresalto'},
    { set:'unmet', category_es:'Inquietud', value_es:'Sorpresa'},

    { set:'unmet', category_es:'Irritación', value_es:'Consternación'},
    { set:'unmet', category_es:'Irritación', value_es:'Frustración'},
    { set:'unmet', category_es:'Irritación', value_es:'Impaciencia'},
    { set:'unmet', category_es:'Irritación', value_es:'Irritación'},
    { set:'unmet', category_es:'Irritación', value_es:'Malhumor'},
    { set:'unmet', category_es:'Irritación', value_es:'Molestia'},

    { set:'unmet', category_es:'Vulnerabilidad', value_es:'Frágilidad'},
    { set:'unmet', category_es:'Vulnerabilidad', value_es:'Impotencia'},
    { set:'unmet', category_es:'Vulnerabilidad', value_es:'Inseguridad'},
    { set:'unmet', category_es:'Vulnerabilidad', value_es:'Sensible'},
    { set:'unmet', category_es:'Vulnerabilidad', value_es:'Tímidez'},
    { set:'unmet', category_es:'Vulnerabilidad', value_es:'Vulnerabilidad'},

    { set:'unmet', category_es:'Tristeza', value_es:'Decepción'},
    { set:'unmet', category_es:'Tristeza', value_es:'Depreción'},
    { set:'unmet', category_es:'Tristeza', value_es:'Desgracia'},
    { set:'unmet', category_es:'Tristeza', value_es:'Desilusion'},
    { set:'unmet', category_es:'Tristeza', value_es:'Infelicidad'},
    { set:'unmet', category_es:'Tristeza', value_es:'Tristeza'},
]

const moods = [
    ...metNeeds,
    ...unmetNeeds,
];

module.exports = moods;