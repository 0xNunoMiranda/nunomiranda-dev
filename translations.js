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
        'hero.title': 'Esteja online, organize mensagens e marque clientes sem stress nem interrupções.',
        'hero.subtitle': 'Planos simples, limites claros. Tu trabalhas, nós cuidamos do resto.',
        'hero.cta.primary': 'Peça uma proposta grátis',
        'hero.cta.secondary': 'Veja exemplos em ação',
        'hero.note': 'Resposta rápida. Sem compromisso.',

        // Para quem é
        'for.title': 'Para quem é este serviço',
        'for.intro': 'Pensado para pequenos negócios locais que querem estar descansados.',
        'for.item1.title': 'Não queres lidar com contas, painéis ou tecnologia',
        'for.item1.desc': 'Preferes falar com uma pessoa e não mexer em botões. Explico tudo em linguagem simples.',
        'for.item2.title': 'Queres que clientes consigam marcar e perguntar com facilidade',
        'for.item2.desc': 'Mensagens organizadas, marcações claras. Tudo fica registado sem perder nada.',
        'for.item3.title': 'Queres um site que funcione e seja atualizado por alguém',
        'for.item3.desc': 'Site limpo e moderno, atualizado quando precisas. Não tens de mexer em nada.',
        'for.cta': 'Escolha um plano agora',

        // O que faço
        'services.title': 'Como isso poupa tempo e dores de cabeça',
        'services.intro': 'Trabalho para que o teu negócio esteja bem apresentado online e para que o atendimento por mensagens seja organizado, simples e tranquilo.',
        'services.item1.title': 'Site limpo e atualizado sem esforço',
        'services.item1.desc': 'Site limpo, moderno e fácil de ler. Atualizo textos, horários e preços quando precisas. Não tens de mexer em nada.',
        'services.item2.title': 'Mensagens organizadas e prioritárias',
        'services.item2.desc': 'As mensagens chegam ordenadas para responder com calma e sem interromper o trabalho.',
        'services.item3.title': 'Respostas profissionais fora de horas',
        'services.item3.desc': 'Mensagens claras quando estás fechado. O cliente sente-se atendido e sabe quando terá resposta.',
        'services.item4.title': 'Pedidos e contactos sempre organizados',
        'services.item4.desc': 'Tudo fica registado: quem pediu o quê, quando e por onde. Nada se perde.',
        'services.cta': 'Veja os planos e preços',
        'services.trust': 'Nada funciona sem controlo humano. Nada é enviado sem alguém rever e validar primeiro.',

        // Planos
        'pricing.title': 'Planos simples. Preços claros. Sem surpresas.',
        'pricing.includes': 'Inclui:',
        'pricing.limits': 'Limites:',

        'pricing.starter.name': 'PLANO STARTER<br>Presença Online',
        'pricing.starter.initial.label': '100€',
        'pricing.starter.initial.suffix': '/ pagamento inicial',
        'pricing.starter.subtitle': 'Ideal para quem só quer estar online e não pensar mais nisso.',
        'pricing.starter.feature1': 'Criação de website informativo',
        'pricing.starter.feature2': 'Website estático profissional',
        'pricing.starter.feature3': 'Correções simples incluídas',
        'pricing.starter.feature4': 'Apoio básico',
        'pricing.starter.limit1': 'Até 1 alteração simples por mês',
        'pricing.starter.limit2': 'Alterações maiores combinadas e orçamentadas à parte',
        'pricing.starter.maintenance': 'Manutenção: 10€ / mês',
        'pricing.starter.renewal': 'Renovação anual: 100€',

        'pricing.shop.name': 'PLANO ECOMMERCE<br>Loja Online',
        'pricing.shop.initial.label': '200€',
        'pricing.shop.initial.suffix': '/ pagamento inicial',
        'pricing.shop.subtitle': 'Vender online sem pensar em tecnologia. Produtos, ficheiros e formas de pagamento incluídos.',
        'pricing.shop.includes.starter': 'Inclui o Plano Starter.',
        'pricing.shop.feature1': 'Loja online funcional',
        'pricing.shop.feature2': 'Atualizações feitas com cuidado',
        'pricing.shop.feature3': 'Pequenos ajustes incluídos',
        'pricing.shop.feature4': 'Apoio contínuo',
        'pricing.shop.maintenance': 'Manutenção da loja: 40€ / mês',

        'pricing.support.name': 'PLANO AGENT<br>Chat e Voz Assistidos',
        'pricing.support.price.label': '200€',
        'pricing.support.price.suffix': '/ pagamento inicial',
        'pricing.support.subtitle': 'Fluxos de Mensagens / Chamadas (semi)automáticas',
        'pricing.support.includes.starter': 'Inclui o Plano Starter.',
        'pricing.support.feature1': 'Atendimento por chat assistido',
        'pricing.support.feature2': 'Mensagens fora de horas preparadas com antecedência',
        'pricing.support.feature3': 'Organização de pedidos e contactos por tema',
        'pricing.support.feature4': 'Resumos claros do que foi pedido',
        'pricing.support.setup': 'A partir de 20€ / mês',

        'pricing.note.title': 'Nota importante:',
        'pricing.note.text': 'Todos os preços são falados com calma antes de avançar. Se for preciso algo fora do combinado, explico primeiro, sem pressão. Sem letras pequenas.',

        // Exemplos
        'examples.title': 'Exemplos práticos',
        'examples.intro': 'Alguns exemplos de como este tipo de serviço pode ajudar no dia a dia de um negócio local:',
        'examples.barbershop.title': 'Barbearia',
        'examples.barbershop.desc': 'O João quer marcar um corte para sábado às 10h. Envia uma mensagem enquanto o barbeiro está a cortar o cabelo a outro cliente. O pedido fica registado automaticamente. Se o João ligar, a chamada recebe uma resposta clara a explicar como marcar ou que será contactado de seguida. No painel, o barbeiro vê: pedidos de marcação, dia e hora pretendidos, contactos do cliente. Quando tem tempo, confirma a marcação com uma mensagem simples. O João recebe a confirmação sem precisar de ligar nem insistir.',
        'examples.test': 'Testar',
        'examples.florist.title': 'Florista',
        'examples.florist.desc': 'A Maria quer encomendar um ramo para domingo, aniversário da mãe. Envia uma mensagem na quinta-feira ou liga fora de horas. Recebe uma resposta clara com as opções e valores. A encomenda fica registada por: data, tipo de ramo, ocasião. No painel, a florista vê todas as encomendas organizadas por dia. Se quiser, a Maria pode concluir o pedido pela loja online. No domingo, tudo está preparado sem stress nem confusões.',
        'examples.clinic.title': 'Clínica de estética',
        'examples.clinic.desc': 'A Ana quer marcar um tratamento para a próxima semana. Envia mensagem às 22h ou liga quando a clínica já está fechada. Recebe uma resposta profissional a informar que será contactada no dia seguinte. No painel da clínica: os pedidos ficam organizados, tratamentos e horários ficam claros, nada se perde. No dia seguinte, a marcação é confirmada rapidamente. A Ana sente atendimento profissional, mesmo fora de horas.',
        'examples.restaurant.title': 'Restaurante',
        'examples.restaurant.desc': 'O Pedro quer reservar uma mesa para 6 pessoas no sábado à noite. Envia mensagem durante a hora de almoço ou liga quando o restaurante está cheio. Em vez de interromper o serviço: a mensagem fica registada, a chamada recebe resposta automática com instruções claras. No painel: reservas organizadas por dia e hora, pedidos especiais destacados. Quando há tempo, a reserva é confirmada. O Pedro recebe uma resposta clara e não precisa de voltar a ligar.',
        'examples.bakery.title': 'Padaria',
        'examples.bakery.desc': 'A Sofia quer encomendar um bolo de aniversário para sexta-feira. Envia mensagem ou liga para pedir informações. Recebe resposta clara com opções, preços e prazos. O pedido fica registado por data. Se quiser, a encomenda pode ser finalizada pela loja online. No painel: todos os bolos por dia, detalhes de cada encomenda, nada esquecido. Na sexta-feira, o bolo está pronto como combinado.',
        'examples.workshop.title': 'Oficina',
        'examples.workshop.desc': 'O Rui precisa de fazer a revisão do carro. Envia mensagem ou liga a pedir orçamento e disponibilidade. Enquanto o mecânico está a trabalhar: o pedido fica registado, a chamada é atendida com informação básica. No painel: pedidos por responder, orçamentos enviados, marcações pendentes. Quando termina o trabalho atual, responde com o orçamento e datas disponíveis. O Rui marca sem chamadas repetidas nem confusão.',
        'examples.note': 'Em todas as situações, a ideia é a mesma: menos chamadas, menos confusão, mais tranquilidade.',

        // Sobre
        'about.title': 'Sobre mim',
        'about.p1': 'Chamo-me Nuno Miranda. Trabalho diretamente com donos de pequenos negócios que querem soluções simples, estáveis e claras.',
        'about.p2': 'Já trabalhei com empresas locais e reduzi chamadas repetidas e confusões. Aprendi que o mais importante é ter alguém do outro lado que assume responsabilidade e fala a mesma língua.',
        'about.p3': 'Explico tudo de forma simples, sem termos complicados. Acompanho ao longo do tempo, não só no início. Se algo não fizer sentido, ajustamos em conjunto.',

        // CTA Final
        'cta.title': 'Pronto para estar online sem stress? Escolha um plano ou peça uma proposta grátis.',
        'cta.button.plans': 'Ver planos',
        'cta.button.contact': 'Peça uma proposta grátis',

        // Contacto
        'contact.title': 'Contactos',
        'contact.phone': 'Telefone:',
        'contact.email': 'Email:',
        'contact.website': 'Website:',
        'contact.location': 'Localização:',
        'contact.location.value': 'Portugal | Vila Nova de Gaia',
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
        'hero.title': 'Be online, organize messages and book clients without stress or interruptions.',
        'hero.subtitle': 'Simple plans, clear limits. You work, we take care of the rest.',
        'hero.cta.primary': 'Request a free quote',
        'hero.cta.secondary': 'See examples in action',
        'hero.note': 'Quick reply. No obligation.',

        // Who it is for
        'for.title': 'Who this service is for',
        'for.intro': 'Made for small local businesses who want peace of mind.',
        'for.item1.title': 'You don\'t want to deal with accounts, panels or technology',
        'for.item1.desc': 'You prefer to speak with a person and not touch buttons. I explain everything in plain language.',
        'for.item2.title': 'You want clients to be able to book and ask easily',
        'for.item2.desc': 'Organised messages, clear bookings. Everything is recorded without losing anything.',
        'for.item3.title': 'You want a website that works and is updated by someone',
        'for.item3.desc': 'Clean and modern website, updated when you need it. You don\'t have to touch anything.',
        'for.cta': 'Choose a plan now',

        // What I do
        'services.title': 'How this saves time and headaches',
        'services.intro': 'I help your business look good online and keep customer messages organised, simple and under control.',
        'services.item1.title': 'Clean website updated without effort',
        'services.item1.desc': 'Clean, modern and easy-to-read website. I update texts, hours and prices when you need it. You don\'t have to touch anything.',
        'services.item2.title': 'Organised and prioritised messages',
        'services.item2.desc': 'Messages arrive ordered so you can reply calmly without interrupting your work.',
        'services.item3.title': 'Professional responses outside business hours',
        'services.item3.desc': 'Clear messages when you\'re closed. Customers feel taken care of and know when they\'ll get a reply.',
        'services.item4.title': 'Requests and contacts always organised',
        'services.item4.desc': 'Everything is recorded: who asked what, when and through which channel. Nothing is lost.',
        'services.cta': 'See plans and prices',
        'services.trust': 'Nothing runs without human control. Nothing is sent without someone checking and approving first.',

        // Plans
        'pricing.title': 'Simple plans. Clear prices. No surprises.',
        'pricing.includes': 'Includes:',
        'pricing.limits': 'Limits:',

        'pricing.starter.name': 'STARTER PLAN<br>Online Presence',
        'pricing.starter.initial.label': '€100',
        'pricing.starter.initial.suffix': '/ initial setup',
        'pricing.starter.subtitle': 'Ideal for those who just want to be online and not think about it anymore.',
        'pricing.starter.feature1': 'Creation of an informational website',
        'pricing.starter.feature2': 'Professional static website',
        'pricing.starter.feature3': 'Small corrections included',
        'pricing.starter.feature4': 'Basic support',
        'pricing.starter.limit1': 'Up to 1 simple change per month',
        'pricing.starter.limit2': 'Bigger changes are agreed and quoted beforehand',
        'pricing.starter.maintenance': 'Maintenance: €10 / month',
        'pricing.starter.renewal': 'Yearly renewal: €100',

        'pricing.shop.name': 'ECOMMERCE PLAN<br>Online Shop',
        'pricing.shop.initial.label': '€200',
        'pricing.shop.initial.suffix': '/ initial payment',
        'pricing.shop.subtitle': 'Sell online without thinking about technology. Products, files and payment methods included.',
        'pricing.shop.includes.starter': 'Includes the Starter Plan.',
        'pricing.shop.feature1': 'Working online shop',
        'pricing.shop.feature2': 'Careful updates',
        'pricing.shop.feature3': 'Small tweaks included',
        'pricing.shop.feature4': 'Ongoing support',
        'pricing.shop.maintenance': 'Shop maintenance: €40 / month',

        'pricing.support.name': 'AGENT PLAN<br>Assisted Chat & Voice',
        'pricing.support.price.label': '€200',
        'pricing.support.price.suffix': '/ initial payment',
        'pricing.support.subtitle': 'Message / Call (semi) automated flows',
        'pricing.support.includes.starter': 'Includes the Starter Plan.',
        'pricing.support.feature1': 'Assisted chat handling',
        'pricing.support.feature2': 'Prepared out-of-hours messages',
        'pricing.support.feature3': 'Requests and contacts organised by topic',
        'pricing.support.feature4': 'Clear summaries of what was requested',
        'pricing.support.setup': 'From €20 / month',

        'pricing.note.title': 'Important note:',
        'pricing.note.text': 'Prices are always discussed calmly before moving forward. If something outside the original agreement is needed, I explain it first, with no pressure. No fine print.',

        // Examples
        'examples.title': 'Practical examples',
        'examples.intro': 'Real situations where this kind of service helps in the daily life of a local business:',
        'examples.barbershop.title': 'Barbershop',
        'examples.barbershop.desc': 'John wants to book a haircut for Saturday at 10am. He sends a message while the barber is cutting another client\'s hair. The request is automatically registered. If John calls, the call receives a clear response explaining how to book or that he will be contacted shortly. In the panel, the barber sees: booking requests, desired day and time, customer contacts. When he has time, he confirms the booking with a simple message. John receives the confirmation without needing to call or insist.',
        'examples.test': 'Test',
        'examples.florist.title': 'Florist',
        'examples.florist.desc': 'Maria wants to order a bouquet for Sunday, her mother\'s birthday. She sends a message on Thursday or calls outside business hours. She receives a clear response with options and prices. The order is registered by: date, type of bouquet, occasion. In the panel, the florist sees all orders organised by day. If she wants, Maria can complete the order through the online shop. On Sunday, everything is prepared without stress or confusion.',
        'examples.clinic.title': 'Beauty clinic',
        'examples.clinic.desc': 'Ana wants to book a treatment for next week. She sends a message at 10pm or calls when the clinic is already closed. She receives a professional response informing her that she will be contacted the next day. In the clinic panel: requests are organised, treatments and schedules are clear, nothing is lost. The next day, the booking is confirmed quickly. Ana feels professional service, even outside business hours.',
        'examples.restaurant.title': 'Restaurant',
        'examples.restaurant.desc': 'Pedro wants to book a table for 6 people on Saturday night. He sends a message during lunchtime or calls when the restaurant is full. Instead of interrupting service: the message is registered, the call receives an automatic response with clear instructions. In the panel: reservations organised by day and time, special requests highlighted. When there\'s time, the reservation is confirmed. Pedro receives a clear response and doesn\'t need to call again.',
        'examples.bakery.title': 'Bakery',
        'examples.bakery.desc': 'Sofia wants to order a birthday cake for Friday. She sends a message or calls to ask for information. She receives a clear response with options, prices and deadlines. The order is registered by date. If she wants, the order can be completed through the online shop. In the panel: all cakes by day, details of each order, nothing forgotten. On Friday, the cake is ready as agreed.',
        'examples.workshop.title': 'Auto Repair Shop',
        'examples.workshop.desc': 'Rui needs to get his car serviced. He sends a message or calls to ask for a quote and availability. While the mechanic is working: the request is registered, the call is answered with basic information. In the panel: requests to respond to, quotes sent, pending bookings. When he finishes the current job, he replies with the quote and available dates. Rui books without repeated calls or confusion.',
        'examples.note': 'In every case the idea is the same: fewer calls, less confusion, more peace of mind.',

        // About
        'about.title': 'About me',
        'about.p1': 'My name is Nuno Miranda. I work directly with small business owners who want simple, stable and clear solutions.',
        'about.p2': 'I have worked with local businesses and reduced repeated calls and confusion. What matters most is having someone responsible on the other side, who speaks your language.',
        'about.p3': 'I explain everything in plain language, without complex terms. I stay with you over time, not only at the beginning. If something doesn\'t feel right, we adjust together.',

        // CTA Final
        'cta.title': 'Ready to be online without stress? Choose a plan or request a free quote.',
        'cta.button.plans': 'See plans',
        'cta.button.contact': 'Request a free quote',

        // Contact
        'contact.title': 'Contact',
        'contact.phone': 'Phone:',
        'contact.email': 'Email:',
        'contact.website': 'Website:',
        'contact.location': 'Location:',
        'contact.location.value': 'Portugal | Vila Nova de Gaia',
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
        'hero.title': 'Esté online, organice mensajes y reserve clientes sin estrés ni interrupciones.',
        'hero.subtitle': 'Planes simples, límites claros. Usted trabaja, nosotros cuidamos del resto.',
        'hero.cta.primary': 'Solicite un presupuesto gratis',
        'hero.cta.secondary': 'Vea ejemplos en acción',
        'hero.note': 'Respuesta rápida. Sin compromiso.',

        // Para quién es
        'for.title': 'Para quién es este servicio',
        'for.intro': 'Pensado para pequeños negocios locales que quieren estar tranquilos.',
        'for.item1.title': 'No quiere tratar con cuentas, paneles o tecnología',
        'for.item1.desc': 'Prefiere hablar con una persona y no tocar botones. Explico todo con palabras sencillas.',
        'for.item2.title': 'Quiere que los clientes puedan reservar y preguntar con facilidad',
        'for.item2.desc': 'Mensajes organizados, reservas claras. Todo queda registrado sin perder nada.',
        'for.item3.title': 'Quiere una web que funcione y sea actualizada por alguien',
        'for.item3.desc': 'Web limpia y moderna, actualizada cuando necesita. No tiene que tocar nada.',
        'for.cta': 'Elija un plan ahora',

        // Qué hago
        'services.title': 'Cómo esto ahorra tiempo y dolores de cabeza',
        'services.intro': 'Ayudo a que su negocio se vea bien online y a que los mensajes de clientes estén organizados y bajo control.',
        'services.item1.title': 'Web limpia y actualizada sin esfuerzo',
        'services.item1.desc': 'Web limpia, moderna y fácil de leer. Actualizo textos, horarios y precios cuando necesita. Usted no tiene que tocar nada.',
        'services.item2.title': 'Mensajes organizados y prioritarios',
        'services.item2.desc': 'Los mensajes llegan ordenados para responder con calma y sin interrumpir el trabajo.',
        'services.item3.title': 'Respuestas profesionales fuera de horario',
        'services.item3.desc': 'Mensajes claros cuando está cerrado. El cliente se siente atendido y sabe cuándo tendrá respuesta.',
        'services.item4.title': 'Pedidos y contactos siempre organizados',
        'services.item4.desc': 'Todo queda registrado: quién pidió qué, cuándo y por dónde. Nada se pierde.',
        'services.cta': 'Vea planes y precios',
        'services.trust': 'Nada funciona sin control humano. Nada se envía sin que alguien lo revise antes.',

        // Planes
        'pricing.title': 'Planes simples. Precios claros. Sin sorpresas.',
        'pricing.includes': 'Incluye:',
        'pricing.limits': 'Límites:',

        'pricing.starter.name': 'PLAN STARTER<br>Presencia Online',
        'pricing.starter.initial.label': '100€',
        'pricing.starter.initial.suffix': '/ pago inicial',
        'pricing.starter.subtitle': 'Ideal para quien solo quiere estar online y no pensar más en ello.',
        'pricing.starter.feature1': 'Creación de web informativa',
        'pricing.starter.feature2': 'Web estática profesional',
        'pricing.starter.feature3': 'Correcciones sencillas incluidas',
        'pricing.starter.feature4': 'Apoyo básico',
        'pricing.starter.limit1': 'Hasta 1 cambio sencillo al mes',
        'pricing.starter.limit2': 'Cambios mayores se hablan y se presupuestan aparte',
        'pricing.starter.maintenance': 'Mantenimiento: 10€ / mes',
        'pricing.starter.renewal': 'Renovación anual: 100€',

        'pricing.shop.name': 'PLAN ECOMMERCE<br>Tienda Online',
        'pricing.shop.initial.label': '200€',
        'pricing.shop.initial.suffix': '/ pago inicial',
        'pricing.shop.subtitle': 'Vender online sin pensar en tecnología. Productos, archivos y formas de pago incluidos.',
        'pricing.shop.includes.starter': 'Incluye el Plan Starter.',
        'pricing.shop.feature1': 'Tienda online funcional',
        'pricing.shop.feature2': 'Actualizaciones cuidadas',
        'pricing.shop.feature3': 'Pequeños ajustes incluidos',
        'pricing.shop.feature4': 'Apoyo continuo',
        'pricing.shop.maintenance': 'Mantenimiento de la tienda: 40€ / mes',

        'pricing.support.name': 'PLAN AGENT<br>Chat y Voz Asistidos',
        'pricing.support.price.label': '200€',
        'pricing.support.price.suffix': '/ pago inicial',
        'pricing.support.subtitle': 'Flujos de Mensajes / Llamadas (semi) automáticos',
        'pricing.support.includes.starter': 'Incluye el Plan Starter.',
        'pricing.support.feature1': 'Atención asistida por chat',
        'pricing.support.feature2': 'Mensajes preparados para fuera de horario',
        'pricing.support.feature3': 'Organización de pedidos y contactos por tema',
        'pricing.support.feature4': 'Resúmenes claros de lo que se ha pedido',
        'pricing.support.setup': 'Desde 20€ / mes',

        'pricing.note.title': 'Nota importante:',
        'pricing.note.text': 'Los precios se hablan siempre con calma antes de avanzar. Si hace falta algo fuera de lo acordado, se explica primero, sin presión. Sin letra pequeña.',

        // Ejemplos
        'examples.title': 'Ejemplos prácticos',
        'examples.intro': 'Algunas formas en que este tipo de servicio ayuda en el día a día de un negocio local:',
        'examples.barbershop.title': 'Barbería',
        'examples.barbershop.desc': 'Juan quiere reservar un corte para el sábado a las 10h. Envía un mensaje mientras el barbero está cortando el pelo a otro cliente. El pedido queda registrado automáticamente. Si Juan llama, la llamada recibe una respuesta clara explicando cómo reservar o que será contactado a continuación. En el panel, el barbero ve: pedidos de reserva, día y hora deseados, contactos del cliente. Cuando tiene tiempo, confirma la reserva con un mensaje simple. Juan recibe la confirmación sin necesitar llamar ni insistir.',
        'examples.test': 'Probar',
        'examples.florist.title': 'Floristería',
        'examples.florist.desc': 'María quiere encargar un ramo para el domingo, cumpleaños de su madre. Envía un mensaje el jueves o llama fuera de horario. Recibe una respuesta clara con las opciones y precios. El pedido queda registrado por: fecha, tipo de ramo, ocasión. En el panel, la florista ve todos los pedidos organizados por día. Si quiere, María puede completar el pedido por la tienda online. El domingo, todo está preparado sin estrés ni confusiones.',
        'examples.clinic.title': 'Clínica de estética',
        'examples.clinic.desc': 'Ana quiere reservar un tratamiento para la próxima semana. Envía un mensaje a las 22h o llama cuando la clínica ya está cerrada. Recibe una respuesta profesional informando que será contactada al día siguiente. En el panel de la clínica: los pedidos quedan organizados, tratamientos y horarios quedan claros, nada se pierde. Al día siguiente, la reserva se confirma rápidamente. Ana siente atención profesional, incluso fuera de horario.',
        'examples.restaurant.title': 'Restaurante',
        'examples.restaurant.desc': 'Pedro quiere reservar una mesa para 6 personas el sábado por la noche. Envía un mensaje durante la hora del almuerzo o llama cuando el restaurante está lleno. En lugar de interrumpir el servicio: el mensaje queda registrado, la llamada recibe respuesta automática con instrucciones claras. En el panel: reservas organizadas por día y hora, pedidos especiales destacados. Cuando hay tiempo, la reserva se confirma. Pedro recibe una respuesta clara y no necesita volver a llamar.',
        'examples.bakery.title': 'Panadería',
        'examples.bakery.desc': 'Sofía quiere encargar una tarta de cumpleaños para el viernes. Envía un mensaje o llama para pedir información. Recibe respuesta clara con opciones, precios y plazos. El pedido queda registrado por fecha. Si quiere, el pedido puede finalizarse por la tienda online. En el panel: todas las tartas por día, detalles de cada pedido, nada olvidado. El viernes, la tarta está lista como se acordó.',
        'examples.workshop.title': 'Taller',
        'examples.workshop.desc': 'Rui necesita hacer la revisión del coche. Envía un mensaje o llama pidiendo presupuesto y disponibilidad. Mientras el mecánico está trabajando: el pedido queda registrado, la llamada es atendida con información básica. En el panel: pedidos por responder, presupuestos enviados, reservas pendientes. Cuando termina el trabajo actual, responde con el presupuesto y fechas disponibles. Rui reserva sin llamadas repetidas ni confusión.',
        'examples.note': 'En todos los casos la idea es la misma: menos llamadas, menos confusión, más tranquilidad.',

        // Sobre mí
        'about.title': 'Sobre mí',
        'about.p1': 'Me llamo Nuno Miranda. Trabajo directamente con dueños de pequeños negocios que valoran soluciones sencillas y claras.',
        'about.p2': 'He trabajado con empresas locales y reducido llamadas repetidas y confusiones. Lo importante es tener a alguien responsable al otro lado que hable claro.',
        'about.p3': 'Explico todo en lenguaje sencillo. Acompaño con el tiempo, no solo al principio. Si algo no encaja, lo ajustamos juntos.',

        // CTA Final
        'cta.title': '¿Listo para estar online sin estrés? Elija un plan o solicite un presupuesto gratis.',
        'cta.button.plans': 'Ver planes',
        'cta.button.contact': 'Solicite un presupuesto gratis',

        // Contacto
        'contact.title': 'Contacto',
        'contact.phone': 'Teléfono:',
        'contact.email': 'Email:',
        'contact.website': 'Web:',
        'contact.location': 'Localización:',
        'contact.location.value': 'Portugal | Vila Nova de Gaia',
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
            // Usar innerHTML se a tradução contém HTML (como <br>)
            if (translation.includes('<br>') || translation.includes('<')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Atualizar botão de idioma
    const langBtn = document.querySelector('.lang-btn');
    if (langBtn) {
        let langText = 'PT';
        if (lang === 'en') langText = 'EN';
        else if (lang === 'es') langText = 'ES';
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
