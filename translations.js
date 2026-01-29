// Sistema de Traduções
const translations = {
    'pt-PT': {
        // Navegação
        'nav.home': 'Início',
        'nav.for': 'Para quem',
        'nav.services': 'O que faço',
        'nav.pricing': 'Planos',
        'nav.examples': 'Exemplos',
        'nav.about': 'Sobre',
        'nav.contact': 'Contactos',

        // Hero
        'hero.title': 'Tratamos do seu site e do atendimento. Sem complicações.',
        'hero.subtitle': 'Preços simples. Apoio contínuo. Sem preocupações.',
        'hero.cta.primary': 'Falar comigo',
        'hero.note': 'Resposta rápida. Sem compromisso.',

        // Para quem é
        'for.title': 'Para quem é este serviço',
        'for.intro': 'Pensado para pequenos negócios locais que querem estar descansados: o site está tratado, o atendimento está organizado e sabem sempre quem chamar se algo falhar.',
        'for.item1.title': 'Pequenos negócios locais',
        'for.item1.desc': 'Barbearias, floristas, clínicas de estética, restaurantes e comércio local. Negócios que vivem do dia a dia e não querem perder tempo com “o site”.',
        'for.item2.title': 'Quem não quer lidar com tecnologia',
        'for.item2.desc': 'Donos de negócio que preferem falar com uma pessoa e não mexer em painéis, contas e botões. Explico tudo em linguagem simples.',
        'for.item3.title': 'Quem só quer que as coisas funcionem',
        'for.item3.desc': 'Se o seu objetivo é: “quero estar online, atender bem e não ter dores de cabeça”, este serviço é para si.',

        // O que faço
        'services.title': 'O que faço por si',
        'services.intro': 'Trabalho para que o seu negócio esteja bem apresentado online e para que o atendimento por mensagens seja organizado, simples e tranquilo.',
        'services.item1.title': 'Criação e manutenção de websites simples',
        'services.item1.desc': 'Crio um site escuro, limpo e fácil de ler. Atualizo textos, horários e preços quando for preciso. Não tem de mexer em nada.',
        'services.item2.title': 'Atendimento organizado por chat e mensagens',
        'services.item2.desc': 'Ajudo a organizar as mensagens que chegam. Marcações, dúvidas e pedidos ficam em listas simples, para responder com calma.',
        'services.item3.title': 'Mensagens automáticas fora de horas',
        'services.item3.desc': 'Preparo mensagens calmas e claras para quando o negócio está fechado, para que o cliente sinta que foi atendido e saiba quando terá resposta.',
        'services.item4.title': 'Organização de pedidos e contactos',
        'services.item4.desc': 'Junto pedidos parecidos, resumo mensagens longas e deixo tudo em registos claros: quem pediu o quê, quando e por onde.',
        'services.trust': 'Nada funciona sem controlo humano. Nada é enviado sem alguém rever e validar primeiro.',

        // Planos
        'pricing.title': 'Planos simples. Preços claros. Sem surpresas.',
        'pricing.includes': 'Inclui:',
        'pricing.limits': 'Limites:',

        'pricing.starter.name': 'PLANO STARTER — Presença Online',
        'pricing.starter.initial.label': '100€',
        'pricing.starter.initial.suffix': '/ pagamento inicial',
        'pricing.starter.subtitle': 'Ideal para quem só quer estar online e não pensar mais nisso.',
        'pricing.starter.feature1': 'Criação de website informativo',
        'pricing.starter.feature2': 'Website estático profissional',
        'pricing.starter.feature3': 'Correções simples incluídas',
        'pricing.starter.feature4': 'Apoio básico',
        'pricing.starter.limit1': 'Até 1 alteração simples por mês',
        'pricing.starter.limit2': 'Alterações maiores combinadas e orçamentadas à parte',
        'pricing.starter.renewal': 'Renovação anual: 100€ · Manutenção: 10€ / mês',

        'pricing.shop.name': 'ADD-ON — Loja Online Básica (PrestaShop)',
        'pricing.shop.initial.label': '350€',
        'pricing.shop.initial.suffix': '/ a partir de',
        'pricing.shop.subtitle': 'Para quem quer vender online sem complicações.',
        'pricing.shop.feature1': 'Loja online funcional',
        'pricing.shop.feature2': 'Atualizações feitas com cuidado',
        'pricing.shop.feature3': 'Pequenos ajustes incluídos',
        'pricing.shop.feature4': 'Apoio contínuo',
        'pricing.shop.maintenance': 'Manutenção da loja: 40€ / mês',

        'pricing.support.name': 'PLANO ATENDIMENTO — Chat e Voz Assistidos',
        'pricing.support.price.label': '30€',
        'pricing.support.price.suffix': '/ mês, a partir de',
        'pricing.support.subtitle': 'Para quem recebe muitas mensagens e quer tudo organizado.',
        'pricing.support.feature1': 'Atendimento por chat assistido',
        'pricing.support.feature2': 'Mensagens fora de horas preparadas com antecedência',
        'pricing.support.feature3': 'Organização de pedidos e contactos por tema',
        'pricing.support.feature4': 'Resumos claros do que foi pedido',
        'pricing.support.setup': 'Configuração inicial aplicada consoante o seu negócio.',

        'pricing.note.title': 'Nota importante:',
        'pricing.note.text': 'Todos os preços são falados com calma antes de avançar. Se for preciso algo fora do combinado, explico primeiro, sem pressão. Sem letras pequenas.',

        // Exemplos
        'examples.title': 'Exemplos práticos',
        'examples.intro': 'Alguns exemplos de como este tipo de serviço pode ajudar no dia a dia de um negócio local:',
        'examples.barbershop.title': 'Barbearia',
        'examples.barbershop.desc': 'Marcações por mensagem, respostas rápidas a horários e preços. Menos chamadas em hora de trabalho.',
        'examples.florist.title': 'Florista',
        'examples.florist.desc': 'Encomendas organizadas por data e ocasião, confirmações claras e registo simples do que já foi entregue.',
        'examples.clinic.title': 'Clínica de estética',
        'examples.clinic.desc': 'Marcações claras, lembretes preparados e mensagens profissionais fora de horas, sem parecerem frias.',
        'examples.restaurant.title': 'Restaurante',
        'examples.restaurant.desc': 'Reservas por mensagem, respostas simples sobre menus e horários. Menos chamadas, menos confusão.',
        'examples.note': 'Em todas as situações, a ideia é a mesma: menos chamadas, menos confusão, mais tranquilidade.',

        // Sobre
        'about.title': 'Sobre mim',
        'about.p1': 'Chamo-me Nuno Miranda. Trabalho diretamente com donos de pequenos negócios que querem soluções simples, estáveis e claras.',
        'about.p2': 'Já trabalhei com empresas reais, com rotinas apertadas e pouco tempo para “tratar do site”. Aprendi que o mais importante é ter alguém do outro lado que assume responsabilidade e fala a mesma língua.',
        'about.p3': 'Gosto de explicar tudo de forma simples, sem termos complicados. Acompanho ao longo do tempo, não só no início. Se algo não fizer sentido, preferimos ajustar em conjunto do que forçar uma solução.',

        // CTA Final
        'cta.title': 'Se quer ter o site tratado e o atendimento organizado, sem se preocupar com a parte técnica, posso ajudar.',
        'cta.button': 'Falar comigo',

        // Contacto
        'contact.title': 'Contactos',
        'contact.phone': 'Telefone:',
        'contact.email': 'Email:',
        'contact.website': 'Website:',
        'contact.location': 'Localização:',
        'contact.location.value': 'Portugal',
        'contact.note': 'Pode ligar, enviar email ou mensagem. O objetivo é tirar-lhe peso dos ombros, não acrescentar trabalho.',

        // Footer
        'footer.social': 'Redes profissionais:',
        'footer.rights': 'Todos os direitos reservados.',
    },

    'en': {
        // Navigation
        'nav.home': 'Home',
        'nav.for': 'Who it\'s for',
        'nav.services': 'What I do',
        'nav.pricing': 'Plans',
        'nav.examples': 'Examples',
        'nav.about': 'About',
        'nav.contact': 'Contact',

        // Hero
        'hero.title': 'We take care of your website and customer messages. No hassle.',
        'hero.subtitle': 'Simple prices. Ongoing support. No worries.',
        'hero.cta.primary': 'Talk to me',
        'hero.note': 'Quick reply. No obligation.',

        // Who it is for
        'for.title': 'Who this service is for',
        'for.intro': 'Made for small local businesses who want their website and customer messages handled without stress.',
        'for.item1.title': 'Small local businesses',
        'for.item1.desc': 'Barbershops, florists, beauty clinics, restaurants and local shops that live from the daily flow and don\'t want to “deal with the website”.',
        'for.item2.title': 'People who don\'t want to deal with tech',
        'for.item2.desc': 'Owners who prefer to speak with one person instead of touching panels, accounts and settings. I explain everything in plain language.',
        'for.item3.title': 'Those who just want things to work',
        'for.item3.desc': 'If your goal is “I want to be online, answer calmly and avoid headaches”, this service is for you.',

        // What I do
        'services.title': 'What I do for you',
        'services.intro': 'I help your business look good online and keep customer messages organised, simple and under control.',
        'services.item1.title': 'Creation and maintenance of simple websites',
        'services.item1.desc': 'I build a dark, clean and easy-to-read website. I update texts, hours and prices when needed. You don\'t have to touch anything.',
        'services.item2.title': 'Organised chat and message handling',
        'services.item2.desc': 'I help organise incoming messages. Bookings, questions and orders are grouped in simple lists so you can answer calmly.',
        'services.item3.title': 'Out-of-hours messages',
        'services.item3.desc': 'I prepare calm and clear messages for when you are closed, so customers feel taken care of and know when they will get a reply.',
        'services.item4.title': 'Organisation of requests and contacts',
        'services.item4.desc': 'I group similar requests, summarise long messages and keep clear records of who asked what, when and through which channel.',
        'services.trust': 'Nothing runs without human control. Nothing is sent without someone checking and approving first.',

        // Plans
        'pricing.title': 'Simple plans. Clear prices. No surprises.',
        'pricing.includes': 'Includes:',
        'pricing.limits': 'Limits:',

        'pricing.starter.name': 'STARTER PLAN — Online Presence',
        'pricing.starter.initial.label': '€100',
        'pricing.starter.initial.suffix': '/ initial setup',
        'pricing.starter.subtitle': 'Ideal for those who just want to be online and not think about it anymore.',
        'pricing.starter.feature1': 'Creation of an informational website',
        'pricing.starter.feature2': 'Professional static website',
        'pricing.starter.feature3': 'Small corrections included',
        'pricing.starter.feature4': 'Basic support',
        'pricing.starter.limit1': 'Up to 1 simple change per month',
        'pricing.starter.limit2': 'Bigger changes are agreed and quoted beforehand',
        'pricing.starter.renewal': 'Yearly renewal: €100 · Maintenance: €10 / month',

        'pricing.shop.name': 'ADD-ON — Basic Online Shop (PrestaShop)',
        'pricing.shop.initial.label': 'from €350',
        'pricing.shop.initial.suffix': '',
        'pricing.shop.subtitle': 'For those who want to sell online without complications.',
        'pricing.shop.feature1': 'Working online shop',
        'pricing.shop.feature2': 'Careful updates',
        'pricing.shop.feature3': 'Small tweaks included',
        'pricing.shop.feature4': 'Ongoing support',
        'pricing.shop.maintenance': 'Shop maintenance: €40 / month',

        'pricing.support.name': 'SERVICE PLAN — Assisted Chat & Voice',
        'pricing.support.price.label': 'from €30',
        'pricing.support.price.suffix': '/ month',
        'pricing.support.subtitle': 'For those who receive many messages and want everything organised.',
        'pricing.support.feature1': 'Assisted chat handling',
        'pricing.support.feature2': 'Prepared out-of-hours messages',
        'pricing.support.feature3': 'Requests and contacts organised by topic',
        'pricing.support.feature4': 'Clear summaries of what was requested',
        'pricing.support.setup': 'Initial setup applied according to your business.',

        'pricing.note.title': 'Important note:',
        'pricing.note.text': 'Prices are always discussed calmly before moving forward. If something outside the original agreement is needed, I explain it first, with no pressure. No fine print.',

        // Examples
        'examples.title': 'Practical examples',
        'examples.intro': 'Real situations where this kind of service helps in the daily life of a local business:',
        'examples.barbershop.title': 'Barbershop',
        'examples.barbershop.desc': 'Bookings by message, quick answers about prices and opening hours. Fewer calls during work.',
        'examples.florist.title': 'Florist',
        'examples.florist.desc': 'Orders organised by date and occasion, clear confirmations and a simple record of what was delivered.',
        'examples.clinic.title': 'Beauty clinic',
        'examples.clinic.desc': 'Clear appointments, prepared reminders and professional out-of-hours messages that still sound human.',
        'examples.restaurant.title': 'Restaurant',
        'examples.restaurant.desc': 'Bookings by message, simple answers about menus and hours. Fewer calls, less noise.',
        'examples.note': 'In every case the idea is the same: fewer calls, less confusion, more peace of mind.',

        // About
        'about.title': 'About me',
        'about.p1': 'My name is Nuno Miranda. I work directly with small business owners who want simple, stable and clear solutions.',
        'about.p2': 'I have real experience working with companies that have tight routines and little time to “deal with the website”. What matters most is having someone responsible on the other side, who speaks your language.',
        'about.p3': 'I like to explain everything in plain language, without complex terms. I stay with you over time, not only at the beginning. If something doesn\'t feel right, we adjust together instead of forcing a solution.',

        // CTA Final
        'cta.title': 'If you want your website and customer messages taken care of, without worrying about the technical side, I can help.',
        'cta.button': 'Talk to me',

        // Contact
        'contact.title': 'Contact',
        'contact.phone': 'Phone:',
        'contact.email': 'Email:',
        'contact.website': 'Website:',
        'contact.location': 'Location:',
        'contact.location.value': 'Portugal',
        'contact.note': 'You can call, send an email or a message. The goal is to take weight off your shoulders, not add more work.',

        // Footer
        'footer.social': 'Professional networks:',
        'footer.rights': 'All rights reserved.',
    },

    'es': {
        // Navegación
        'nav.home': 'Inicio',
        'nav.for': 'Para quién',
        'nav.services': 'Qué hago',
        'nav.pricing': 'Planes',
        'nav.examples': 'Ejemplos',
        'nav.about': 'Sobre mí',
        'nav.contact': 'Contacto',

        // Hero
        'hero.title': 'Cuidamos de su página web y de los mensajes de sus clientes. Sin complicaciones.',
        'hero.subtitle': 'Precios simples. Apoyo continuo. Sin preocupaciones.',
        'hero.cta.primary': 'Hablar conmigo',
        'hero.note': 'Respuesta rápida. Sin compromiso.',

        // Para quién es
        'for.title': 'Para quién es este servicio',
        'for.intro': 'Pensado para pequeños negocios locales que quieren su web y sus mensajes atendidos sin dolores de cabeza.',
        'for.item1.title': 'Pequeños negocios locales',
        'for.item1.desc': 'Barberías, floristerías, clínicas de estética, restaurantes y comercio local que no quieren perder tiempo con “la web”.',
        'for.item2.title': 'Quien no quiere tratar con tecnología',
        'for.item2.desc': 'Dueños que prefieren hablar con una persona y no con paneles y botones. Explico todo con palabras sencillas.',
        'for.item3.title': 'Quien solo quiere que todo funcione',
        'for.item3.desc': 'Si su idea es “quiero estar online, atender bien y no complicarme”, este servicio encaja bien.',

        // Qué hago
        'services.title': 'Qué hago por usted',
        'services.intro': 'Ayudo a que su negocio se vea bien online y a que los mensajes de clientes estén organizados y bajo control.',
        'services.item1.title': 'Creación y mantenimiento de webs sencillas',
        'services.item1.desc': 'Creo una web oscura, limpia y fácil de leer. Actualizo textos, horarios y precios cuando hace falta. Usted no tiene que tocar nada.',
        'services.item2.title': 'Atención organizada por chat y mensajes',
        'services.item2.desc': 'Organizo los mensajes que llegan. Reservas, dudas y pedidos quedan en listas claras para responder con calma.',
        'services.item3.title': 'Mensajes fuera de horario',
        'services.item3.desc': 'Preparo mensajes claros y tranquilos para cuando el negocio está cerrado, para que el cliente se sienta atendido.',
        'services.item4.title': 'Organización de pedidos y contactos',
        'services.item4.desc': 'Agrupo pedidos parecidos, resumo mensajes largos y dejo registrado quién pidió qué y cuándo.',
        'services.trust': 'Nada funciona sin control humano. Nada se envía sin que alguien lo revise antes.',

        // Planes
        'pricing.title': 'Planes simples. Precios claros. Sin sorpresas.',
        'pricing.includes': 'Incluye:',
        'pricing.limits': 'Límites:',

        'pricing.starter.name': 'PLAN STARTER — Presencia Online',
        'pricing.starter.initial.label': '100€',
        'pricing.starter.initial.suffix': '/ pago inicial',
        'pricing.starter.subtitle': 'Ideal para quien solo quiere estar online y no pensar más en ello.',
        'pricing.starter.feature1': 'Creación de web informativa',
        'pricing.starter.feature2': 'Web estática profesional',
        'pricing.starter.feature3': 'Correcciones sencillas incluidas',
        'pricing.starter.feature4': 'Apoyo básico',
        'pricing.starter.limit1': 'Hasta 1 cambio sencillo al mes',
        'pricing.starter.limit2': 'Cambios mayores se hablan y se presupuestan aparte',
        'pricing.starter.renewal': 'Renovación anual: 100€ · Mantenimiento: 10€ / mes',

        'pricing.shop.name': 'ADD-ON — Tienda Online Básica (PrestaShop)',
        'pricing.shop.initial.label': 'desde 350€',
        'pricing.shop.initial.suffix': '',
        'pricing.shop.subtitle': 'Para quien quiere vender online sin complicaciones.',
        'pricing.shop.feature1': 'Tienda online funcional',
        'pricing.shop.feature2': 'Actualizaciones cuidadas',
        'pricing.shop.feature3': 'Pequeños ajustes incluidos',
        'pricing.shop.feature4': 'Apoyo continuo',
        'pricing.shop.maintenance': 'Mantenimiento de la tienda: 40€ / mes',

        'pricing.support.name': 'PLAN ATENCIÓN — Chat y Voz Asistidos',
        'pricing.support.price.label': 'desde 30€',
        'pricing.support.price.suffix': '/ mes',
        'pricing.support.subtitle': 'Para quien recibe muchos mensajes y quiere todo organizado.',
        'pricing.support.feature1': 'Atención asistida por chat',
        'pricing.support.feature2': 'Mensajes preparados para fuera de horario',
        'pricing.support.feature3': 'Organización de pedidos y contactos por tema',
        'pricing.support.feature4': 'Resúmenes claros de lo que se ha pedido',
        'pricing.support.setup': 'Configuración inicial según su negocio.',

        'pricing.note.title': 'Nota importante:',
        'pricing.note.text': 'Los precios se hablan siempre con calma antes de avanzar. Si hace falta algo fuera de lo acordado, se explica primero, sin presión. Sin letra pequeña.',

        // Ejemplos
        'examples.title': 'Ejemplos prácticos',
        'examples.intro': 'Algunas formas en que este tipo de servicio ayuda en el día a día de un negocio local:',
        'examples.barbershop.title': 'Barbería',
        'examples.barbershop.desc': 'Reservas por mensaje, respuestas rápidas sobre horarios y precios. Menos llamadas en horas de trabajo.',
        'examples.florist.title': 'Floristería',
        'examples.florist.desc': 'Pedidos organizados por fecha y ocasión, confirmaciones claras y registro sencillo de lo entregado.',
        'examples.clinic.title': 'Clínica de estética',
        'examples.clinic.desc': 'Reservas claras, recordatorios preparados y mensajes profesionales fuera de horario, sin sonar fríos.',
        'examples.restaurant.title': 'Restaurante',
        'examples.restaurant.desc': 'Reservas por mensaje, respuestas sencillas sobre menús y horarios. Menos llamadas, menos lío.',
        'examples.note': 'En todos los casos la idea es la misma: menos llamadas, menos confusión, más tranquilidad.',

        // Sobre mí
        'about.title': 'Sobre mí',
        'about.p1': 'Me llamo Nuno Miranda. Trabajo directamente con dueños de pequeños negocios que valoran soluciones sencillas y claras.',
        'about.p2': 'Tengo experiencia real con empresas con poco tiempo para “tratar la web”. Lo importante es tener a alguien responsable al otro lado que hable claro.',
        'about.p3': 'Explico todo en lenguaje sencillo. Acompaño con el tiempo, no solo al principio. Si algo no encaja, lo ajustamos juntos.',

        // CTA Final
        'cta.title': 'Si quiere tener la web y la atención de mensajes bajo control, sin preocuparse por la parte técnica, puedo ayudar.',
        'cta.button': 'Hablar conmigo',

        // Contacto
        'contact.title': 'Contacto',
        'contact.phone': 'Teléfono:',
        'contact.email': 'Email:',
        'contact.website': 'Web:',
        'contact.location': 'Localización:',
        'contact.location.value': 'Portugal',
        'contact.note': 'Puede llamar, enviar un email o un mensaje. La idea es quitarle peso de encima, no añadir trabajo.',

        // Footer
        'footer.social': 'Redes profesionales:',
        'footer.rights': 'Todos los derechos reservados.',
    }
};

// Função para obter tradução
function t(key, lang = null) {
    const currentLang = lang || document.documentElement.lang || 'pt-PT';
    return translations[currentLang]?.[key] || translations['pt-PT'][key] || key;
}

// Função para carregar idioma
function loadLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // Atualizar todos os elementos com data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key, lang);
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } else {
            element.textContent = translation;
        }
    });
    
    // Atualizar botão de idioma
    const langBtn = document.querySelector('.lang-btn');
    if (langBtn) {
        const langText = lang === 'pt-PT' ? 'PT' : 'EN';
        langBtn.innerHTML = `<span>${langText}</span> <span style="font-size: 0.8em;">▼</span>`;
    }
    
    // Atualizar opções ativas
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.toggle('active', option.getAttribute('data-lang') === lang);
    });
}

// Exportar funções
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, t, loadLanguage };
}
