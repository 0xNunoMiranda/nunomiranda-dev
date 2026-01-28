// Sistema de Traduções
const translations = {
    'pt-PT': {
        // Navegação
        'nav.services': 'Serviços',
        'nav.pricing': 'Preços',
        'nav.about': 'Sobre',
        'nav.contact': 'Contacto',
        
        // Hero
        'hero.title': 'Demasiados emails de pacientes, pedidos e mensagens para responder todos os dias?',
        'hero.subtitle': 'Organizo os emails e pedidos da tua clínica para saberes o que é urgente, o que pode esperar e o que já tem resposta preparada — sempre com controlo total da tua parte.',
        'hero.cta.primary': 'Falar comigo sobre a minha clínica',
        'hero.cta.secondary': 'Ver como funciona — sem compromisso',
        
        // Serviços
        'services.title': 'Como posso ajudar',
        'services.intro': 'Numa clínica, cada email pode ser um paciente à espera de resposta. O problema é que nem tudo é urgente — mas tudo chega misturado.',
        'services.item1.title': 'Organização e triagem de emails',
        'services.item1.desc': 'Separo o que é urgente do que pode esperar. Recebes uma lista organizada, não uma caixa de correio cheia.',
        'services.item2.title': 'Separação de pedidos de marcação, dúvidas e mensagens internas',
        'services.item2.desc': 'Marcações, dúvidas de pacientes, orçamentos e emails internos ficam organizados em categorias claras.',
        'services.item3.title': 'Sugestões de resposta para perguntas frequentes',
        'services.item3.desc': 'Para perguntas comuns, preparo respostas que apenas precisas de rever e enviar.',
        'services.item3.highlight': 'Sempre revistas por ti.',
        'services.item4.title': 'Resumos claros de mensagens longas',
        'services.item4.desc': 'Mensagens extensas transformadas em resumos simples. Percebes logo o essencial sem ler tudo.',
        'services.item5.title': 'Relatórios simples e fáceis de entender',
        'services.item5.desc': 'Vês como está a correr: quantos pedidos, quantas respostas, o que está em atraso. Sem complicações.',
        
        // Exemplo
        'example.title': 'Exemplo real',
        'example.intro': 'Uma clínica recebe pedidos de marcação, orçamentos, dúvidas de pacientes e emails internos todos os dias.',
        'example.text': 'Em vez de leres tudo, recebes uma lista organizada:',
        'example.urgent': 'Urgente',
        'example.urgent.desc': '(responder hoje)',
        'example.bookings': 'Marcações',
        'example.faq': 'Dúvidas frequentes',
        'example.later': 'Para tratar mais tarde',
        'example.conclusion': 'Se um paciente faz uma pergunta comum, já tens uma resposta sugerida. Só precisas de rever e enviar.',
        'example.trust': 'Nenhuma resposta é enviada automaticamente. Tens sempre a palavra final.',
        
        // Preços
        'pricing.title': 'Preços claros. Sem letras pequenas. Sem surpresas.',
        'pricing.base.name': 'PLANO BASE',
        'pricing.base.price': '30€',
        'pricing.base.period': '/ mês',
        'pricing.base.subtitle': 'Ideal para clínicas pequenas.',
        'pricing.base.includes': 'Inclui:',
        'pricing.base.feature1': 'Organização e triagem de emails',
        'pricing.base.feature2': 'Sugestões de resposta (sempre revistas por ti)',
        'pricing.base.feature3': 'Resumos claros de pedidos e mensagens',
        'pricing.base.limits': 'Limites:',
        'pricing.base.limit1': 'Até 500 emails por mês',
        'pricing.base.limit2': 'Uso normal de uma caixa de correio',
        'pricing.base.limit3': 'Suporte básico por email',
        'pricing.base.note': 'Todas as sugestões são sempre revistas por ti antes de qualquer envio.',
        'pricing.base.setup': 'Configuração inicial: 100€',
        'pricing.base.setup.once': '(pagamento único)',
        
        'pricing.pro.badge': 'Recomendado',
        'pricing.pro.name': 'PLANO PRO',
        'pricing.pro.price': '50€',
        'pricing.pro.period': '/ mês',
        'pricing.pro.subtitle': 'Para clínicas com mais volume e necessidade de organização interna.',
        'pricing.pro.includes': 'Inclui tudo do Plano Base, mais:',
        'pricing.pro.feature1': 'Assistente interno para consultar documentos e procedimentos da clínica',
        'pricing.pro.feature2': 'Relatórios mensais simples e organizados',
        'pricing.pro.feature3': 'Acompanhamento mais próximo',
        'pricing.pro.limits': 'Limites:',
        'pricing.pro.limit1': 'Até 1.000 emails por mês',
        'pricing.pro.limit2': 'Até 50 documentos internos (máx. 100 páginas no total)',
        'pricing.pro.limit3': 'Até 300 consultas internas por mês',
        'pricing.pro.limit4': '1 relatório mensal incluído',
        'pricing.pro.setup': 'Configuração inicial: 150€',
        'pricing.pro.setup.once': '(pagamento único)',
        
        'pricing.addons.title': 'Serviços opcionais (Add-ons)',
        'pricing.addon1.title': 'Apoio ao atendimento via WhatsApp — +20€ / mês',
        'pricing.addon1.feature1': 'Até 300 mensagens por mês',
        'pricing.addon1.feature2': 'Sugestões de resposta, sempre com validação humana',
        'pricing.addon2.title': 'Mensagens de voz ou necessidades específicas',
        'pricing.addon2.feature1': 'Serviço opcional',
        'pricing.addon2.feature2': 'Preço ajustado conforme volume',
        'pricing.addon2.feature3': 'Limites definidos antes de avançar',
        'pricing.note.title': 'Nota importante:',
        'pricing.note.text': 'Todos os serviços têm limites mensais claros. Se os limites forem atingidos, aviso antes de qualquer custo extra. Serviços externos podem ter custos adicionais, sempre comunicados com antecedência.',
        
        'pricing.cta': 'Começar',
        
        // Como funciona
        'howto.title': 'Como funciona',
        'howto.step1.title': 'Conversa inicial',
        'howto.step1.desc': 'Falamos sobre o dia a dia da tua clínica e vemos, de forma honesta, se faz sentido trabalhar juntos.',
        'howto.step2.title': 'Proposta clara',
        'howto.step2.desc': 'Recebes uma proposta simples, com preços e limites bem definidos.',
        'howto.step3.title': 'Implementação',
        'howto.step3.desc': 'Configuro tudo e começamos. Estou disponível para esclarecer dúvidas.',
        'howto.step4.title': 'Acompanhamento contínuo',
        'howto.step4.desc': 'Mantemo-nos em contacto e ajustamos se necessário.',
        
        // Sobre
        'about.title': 'Sobre mim',
        'about.p1': 'Chamo-me Nuno Miranda. Trabalho com sistemas que organizam informação e facilitam o dia a dia de pequenas empresas. Não vendo tecnologia complicada — ajudo a resolver problemas práticos de forma simples.',
        'about.p2': 'Tenho formação em Engenharia Informática e mais de 5 anos de experiência a trabalhar diretamente com empresas reais, incluindo na área da saúde. Ao longo deste tempo, aprendi que as melhores soluções são as que funcionam sem criar mais problemas.',
        'about.p3': 'Trabalho de forma clara e direta. Se algo não funcionar como deve, ajusto. Se não conseguir resolver um problema, digo com honestidade. Prefiro ter clientes satisfeitos a longo prazo do que fazer promessas que não consigo cumprir.',
        
        // Porque trabalhar comigo
        'why.title': 'Porque trabalhar comigo',
        'why.item1.title': 'Contacto direto comigo',
        'why.item1.desc': 'Falas sempre comigo, não com equipas ou assistentes.',
        'why.item2.title': 'Linguagem clara e sem jargão',
        'why.item2.desc': 'Explico tudo de forma simples, sem termos técnicos.',
        'why.item3.title': 'Preços transparentes',
        'why.item3.desc': 'Sabes sempre quanto pagas e porquê.',
        'why.item4.title': 'Sem contratos longos',
        'why.item4.desc': 'Possibilidade de cancelar quando quiseres.',
        'why.item5.title': 'Responsabilidade',
        'why.item5.desc': 'Se algo não funcionar, ajusto. É essa a garantia.',
        
        // CTA Final
        'cta.title': 'Se a tua clínica recebe emails todos os dias e sentes que estás sempre atrasado nas respostas, este serviço foi feito para ti.',
        'cta.button': 'Falar comigo',
        
        // Contacto
        'contact.title': 'Contactos',
        'contact.phone': 'Telefone:',
        'contact.email': 'Email:',
        'contact.website': 'Website:',
        'contact.location': 'Localização:',
        'contact.location.value': 'Portugal',
        'contact.note': 'Se preferires, liga-me diretamente ou envia um email. Responderei assim que possível.',
        
        // Footer
        'footer.social': 'Redes profissionais:',
        'footer.rights': 'Todos os direitos reservados.',
    },
    
    'en': {
        // Navigation
        'nav.services': 'Services',
        'nav.pricing': 'Pricing',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        
        // Hero
        'hero.title': 'Too many patient emails, requests and messages to answer every day?',
        'hero.subtitle': 'I organize your clinic\'s emails and requests so you know what\'s urgent, what can wait, and what already has a prepared response — always with full control on your part.',
        'hero.cta.primary': 'Talk to me about my clinic',
        'hero.cta.secondary': 'See how it works — no commitment',
        
        // Services
        'services.title': 'How I can help',
        'services.intro': 'In a clinic, every email could be a patient waiting for a response. The problem is that not everything is urgent — but everything arrives mixed together.',
        'services.item1.title': 'Email organization and triage',
        'services.item1.desc': 'I separate what\'s urgent from what can wait. You receive an organized list, not a full inbox.',
        'services.item2.title': 'Separation of appointment requests, questions and internal messages',
        'services.item2.desc': 'Appointments, patient questions, quotes and internal emails are organized in clear categories.',
        'services.item3.title': 'Response suggestions for frequent questions',
        'services.item3.desc': 'For common questions, I prepare responses that you just need to review and send.',
        'services.item3.highlight': 'Always reviewed by you.',
        'services.item4.title': 'Clear summaries of long messages',
        'services.item4.desc': 'Lengthy messages transformed into simple summaries. You immediately understand the essential without reading everything.',
        'services.item5.title': 'Simple and easy-to-understand reports',
        'services.item5.desc': 'You see how things are going: how many requests, how many responses, what\'s overdue. No complications.',
        
        // Example
        'example.title': 'Real example',
        'example.intro': 'A clinic receives appointment requests, quotes, patient questions and internal emails every day.',
        'example.text': 'Instead of reading everything, you receive an organized list:',
        'example.urgent': 'Urgent',
        'example.urgent.desc': '(respond today)',
        'example.bookings': 'Appointments',
        'example.faq': 'Frequent questions',
        'example.later': 'To handle later',
        'example.conclusion': 'If a patient asks a common question, you already have a suggested response. You just need to review and send.',
        'example.trust': 'No response is sent automatically. You always have the final word.',
        
        // Pricing
        'pricing.title': 'Clear prices. No fine print. No surprises.',
        'pricing.base.name': 'BASE PLAN',
        'pricing.base.price': '€30',
        'pricing.base.period': '/ month',
        'pricing.base.subtitle': 'Ideal for small clinics.',
        'pricing.base.includes': 'Includes:',
        'pricing.base.feature1': 'Email organization and triage',
        'pricing.base.feature2': 'Response suggestions (always reviewed by you)',
        'pricing.base.feature3': 'Clear summaries of requests and messages',
        'pricing.base.limits': 'Limits:',
        'pricing.base.limit1': 'Up to 500 emails per month',
        'pricing.base.limit2': 'Normal use of one mailbox',
        'pricing.base.limit3': 'Basic email support',
        'pricing.base.note': 'All suggestions are always reviewed by you before any sending.',
        'pricing.base.setup': 'Initial setup: €100',
        'pricing.base.setup.once': '(one-time payment)',
        
        'pricing.pro.badge': 'Recommended',
        'pricing.pro.name': 'PRO PLAN',
        'pricing.pro.price': '€50',
        'pricing.pro.period': '/ month',
        'pricing.pro.subtitle': 'For clinics with more volume and internal organization needs.',
        'pricing.pro.includes': 'Includes everything from Base Plan, plus:',
        'pricing.pro.feature1': 'Internal assistant to consult clinic documents and procedures',
        'pricing.pro.feature2': 'Simple and organized monthly reports',
        'pricing.pro.feature3': 'Closer monitoring',
        'pricing.pro.limits': 'Limits:',
        'pricing.pro.limit1': 'Up to 1,000 emails per month',
        'pricing.pro.limit2': 'Up to 50 internal documents (max. 100 pages total)',
        'pricing.pro.limit3': 'Up to 300 internal queries per month',
        'pricing.pro.limit4': '1 monthly report included',
        'pricing.pro.setup': 'Initial setup: €150',
        'pricing.pro.setup.once': '(one-time payment)',
        
        'pricing.addons.title': 'Optional services (Add-ons)',
        'pricing.addon1.title': 'WhatsApp support — +€20 / month',
        'pricing.addon1.feature1': 'Up to 300 messages per month',
        'pricing.addon1.feature2': 'Response suggestions, always with human validation',
        'pricing.addon2.title': 'Voice messages or specific needs',
        'pricing.addon2.feature1': 'Optional service',
        'pricing.addon2.feature2': 'Price adjusted according to volume',
        'pricing.addon2.feature3': 'Limits defined before proceeding',
        'pricing.note.title': 'Important note:',
        'pricing.note.text': 'All services have clear monthly limits. If limits are reached, I notify before any extra cost. External services may have additional costs, always communicated in advance.',
        
        'pricing.cta': 'Get Started',
        
        // How it works
        'howto.title': 'How it works',
        'howto.step1.title': 'Initial conversation',
        'howto.step1.desc': 'We talk about your clinic\'s daily routine and see, honestly, if it makes sense to work together.',
        'howto.step2.title': 'Clear proposal',
        'howto.step2.desc': 'You receive a simple proposal, with well-defined prices and limits.',
        'howto.step3.title': 'Implementation',
        'howto.step3.desc': 'I set everything up and we begin. I\'m available to clarify questions.',
        'howto.step4.title': 'Ongoing monitoring',
        'howto.step4.desc': 'We stay in touch and adjust if necessary.',
        
        // About
        'about.title': 'About me',
        'about.p1': 'My name is Nuno Miranda. I work with systems that organize information and facilitate the daily life of small businesses. I don\'t sell complicated technology — I help solve practical problems in a simple way.',
        'about.p2': 'I have a degree in Computer Engineering and over 5 years of experience working directly with real companies, including in healthcare. Over this time, I\'ve learned that the best solutions are those that work without creating more problems.',
        'about.p3': 'I work clearly and directly. If something doesn\'t work as it should, I adjust. If I can\'t solve a problem, I say so honestly. I prefer to have satisfied long-term clients than make promises I can\'t keep.',
        
        // Why work with me
        'why.title': 'Why work with me',
        'why.item1.title': 'Direct contact with me',
        'why.item1.desc': 'You always talk to me, not to teams or assistants.',
        'why.item2.title': 'Clear language without jargon',
        'why.item2.desc': 'I explain everything simply, without technical terms.',
        'why.item3.title': 'Transparent prices',
        'why.item3.desc': 'You always know how much you pay and why.',
        'why.item4.title': 'No long contracts',
        'why.item4.desc': 'Possibility to cancel whenever you want.',
        'why.item5.title': 'Responsibility',
        'why.item5.desc': 'If something doesn\'t work, I adjust. That\'s the guarantee.',
        
        // CTA Final
        'cta.title': 'If your clinic receives emails every day and you feel you\'re always behind on responses, this service was made for you.',
        'cta.button': 'Talk to me',
        
        // Contact
        'contact.title': 'Contact',
        'contact.phone': 'Phone:',
        'contact.email': 'Email:',
        'contact.website': 'Website:',
        'contact.location': 'Location:',
        'contact.location.value': 'Portugal',
        'contact.note': 'If you prefer, call me directly or send an email. I\'ll respond as soon as possible.',
        
        // Footer
        'footer.social': 'Professional networks:',
        'footer.rights': 'All rights reserved.',
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
