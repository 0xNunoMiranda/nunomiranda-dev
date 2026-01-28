# Website de Organização Administrativa para Clínicas

Website profissional para venda de serviços de organização administrativa, focado em clínicas e consultórios.

## 📁 Estrutura do Projeto

```
/
├── index.html          # Versão completa do website
├── landing.html        # Versão curta (landing page)
├── styles.css          # Estilos CSS
├── script.js           # JavaScript
├── CNAME              # Configuração de domínio
└── README.md          # Documentação
```

## 🎯 Características

### Versão Completa (index.html)

- **Hero Section**: Título impactante com CTA duplo
- **Serviços**: Explicação detalhada dos serviços
- **Exemplo Prático**: Caso real de utilização
- **Preços**: Planos Base e Pro com add-ons opcionais
- **Como Funciona**: 4 passos simples
- **Sobre**: Apresentação profissional
- **Porque Trabalhar Comigo**: Benefícios claros
- **CTA Final**: Chamada forte para ação
- **Contactos**: Informação completa

### Versão Curta (landing.html)

- Hero direto ao ponto
- O Problema
- A Solução
- Preços simplificados
- CTA e contactos

## 🎨 Design

### Cores

- **Primária**: #1e40af (Azul profissional)
- **Texto**: #1e293b (Escuro neutro)
- **Fundo Claro**: #f8fafc
- **Bordas**: #e2e8f0

### Tipografia

- Fonte: Inter (Google Fonts)
- Sistema responsivo com clamp()
- Foco em legibilidade

### Princípios

- Limpo e profissional
- Cores neutras e calmas
- Mobile-first
- Acessibilidade (WCAG AA)
- Performance otimizada

## 📱 Responsividade

- Desktop: Layout em grid (2-3 colunas)
- Tablet: Layout adaptativo
- Mobile: Uma coluna, menu hamburger

## 🚀 Como Usar

### Desenvolvimento Local

1. Clone ou faça download dos ficheiros
2. Abra `index.html` num navegador
3. Para a versão curta, abra `landing.html`

### Deploy

O site está pronto para deploy em:
- GitHub Pages
- Netlify
- Vercel
- Qualquer hosting estático

### Personalização

#### Alterar Preços

Edite as secções `.pricing-card` em:
- `index.html` (linhas ~190-280)
- `landing.html` (linhas ~80-130)

#### Alterar Contactos

Edite a secção `#contacto` em ambos os ficheiros.

#### Alterar Cores

Edite as variáveis CSS em `styles.css` (linhas 9-24):

```css
:root {
    --primary-color: #1e40af;
    --primary-dark: #1e3a8a;
    /* ... */
}
```

## 📋 Checklist de Conteúdo

✅ Headline focada em problema específico  
✅ Linguagem PT-PT, simples e direta  
✅ Sem termos técnicos (AI, IA, automação)  
✅ Foco em controlo do utilizador  
✅ Preços transparentes e claros  
✅ Limites bem definidos  
✅ Exemplos práticos  
✅ Contactos visíveis  
✅ CTA forte e claro  

## 🎯 Tom de Comunicação

- ✅ Português de Portugal
- ✅ Frases curtas
- ✅ Profissional mas próximo
- ✅ Sem buzzwords
- ✅ Sem promessas exageradas
- ✅ Foco em confiança

## 🔧 Funcionalidades JavaScript

- Smooth scroll para navegação
- Menu mobile responsivo
- Destaque de secção ativa
- Animações suaves (respeitando prefers-reduced-motion)
- Acessibilidade de teclado

## 📊 Performance

- HTML semântico
- CSS otimizado
- JavaScript vanilla (sem frameworks)
- Fontes Google com preconnect
- Imagens lazy-load ready

## ♿ Acessibilidade

- Estrutura HTML semântica
- ARIA labels
- Contraste WCAG AA
- Skip links
- Navegação por teclado
- Suporte a screen readers

## 📝 Notas

- Nenhuma resposta é enviada automaticamente (mensagem destacada)
- Todos os limites são claros
- Custos extras sempre comunicados
- Possibilidade de cancelar

## 🔄 Manutenção

### Atualizar Conteúdo

Edite diretamente os ficheiros HTML. O CSS é modular e fácil de manter.

### Adicionar Secções

Copie a estrutura de uma secção existente e ajuste o conteúdo.

### Testar Responsividade

Use as ferramentas de desenvolvedor do navegador (F12) para testar em diferentes dispositivos.

## 📞 Suporte

Para questões sobre o código ou personalização:
- Email: nuno_miranda@outlook.com
- Website: www.nunomiranda.dev

---

**Versão**: 1.0  
**Data**: Janeiro 2026  
**Autor**: Nuno Miranda
