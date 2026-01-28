# 🌙 Dark Mode & 🌐 Multi-idioma

## Alterações Implementadas

### ✅ Dark Mode como Padrão

O website agora utiliza **dark mode como padrão**, com opção de alternar para light mode.

#### Cores Dark Mode (Padrão):
- **Background primário:** `#0f172a` (azul escuro)
- **Background secundário:** `#1e293b`
- **Texto:** `#e2e8f0` (branco suave)
- **Primária:** `#3b82f6` (azul brilhante)
- **Bordas:** `#334155`

#### Cores Light Mode (Opcional):
- **Background primário:** `#ffffff`
- **Background secundário:** `#f8fafc`
- **Texto:** `#1e293b` (escuro)
- **Primária:** `#1e40af` (azul profundo)
- **Bordas:** `#e2e8f0`

### ✅ Sistema Multi-idioma

Suporta **PT-PT (padrão)** e **EN (inglês)**.

#### Ficheiros:
- **translations.js** - Todas as traduções
- **script.js** - Sistema de troca de idioma
- **index.html** - Atributos `data-i18n` no conteúdo

## 🎨 Como Usar

### Alternar Tema

1. **Via Interface:**
   - Clica no botão ☀️ (sol) na navegação
   - Alterna entre dark mode (🌙) e light mode (☀️)
   - Preferência é guardada em localStorage

2. **Via JavaScript:**
```javascript
// Ativar light mode
document.body.classList.add('light-mode');

// Ativar dark mode (padrão)
document.body.classList.remove('light-mode');
```

3. **Via localStorage:**
```javascript
// O tema é automaticamente guardado
localStorage.getItem('theme'); // 'dark' ou 'light'
```

### Alternar Idioma

1. **Via Interface:**
   - Clica no botão de idioma (PT/EN) na navegação
   - Seleciona "Português" ou "English"
   - Preferência é guardada em localStorage

2. **Via JavaScript:**
```javascript
// Carregar português
loadLanguage('pt-PT');

// Carregar inglês
loadLanguage('en');
```

3. **Via localStorage:**
```javascript
// O idioma é automaticamente guardado
localStorage.getItem('preferredLanguage'); // 'pt-PT' ou 'en'
```

## 🔧 Personalização

### Adicionar Novo Idioma

1. **Edita `translations.js`:**

```javascript
const translations = {
    'pt-PT': { /* ... */ },
    'en': { /* ... */ },
    'es': { // Adicionar espanhol
        'nav.services': 'Servicios',
        'nav.pricing': 'Precios',
        // ... resto das traduções
    }
};
```

2. **Adiciona opção no HTML:**

```html
<div class="lang-dropdown">
    <div class="lang-option active" data-lang="pt-PT">Português</div>
    <div class="lang-option" data-lang="en">English</div>
    <div class="lang-option" data-lang="es">Español</div>
</div>
```

### Adicionar Nova Tradução

1. **Define a chave em `translations.js`:**

```javascript
'pt-PT': {
    'new.section.title': 'Novo Título',
    // ...
},
'en': {
    'new.section.title': 'New Title',
    // ...
}
```

2. **Usa no HTML:**

```html
<h2 data-i18n="new.section.title">Novo Título</h2>
```

### Alterar Cores do Dark Mode

**Edita `styles.css`:**

```css
:root {
    /* Dark Mode (Padrão) */
    --primary-color: #3b82f6;      /* Cor primária */
    --bg-primary: #0f172a;         /* Background principal */
    --bg-secondary: #1e293b;       /* Background secundário */
    --text-color: #e2e8f0;         /* Cor do texto */
    /* ... */
}
```

### Alterar Cores do Light Mode

**Edita `styles.css`:**

```css
body.light-mode {
    --primary-color: #1e40af;      /* Cor primária */
    --bg-primary: #ffffff;         /* Background principal */
    --bg-secondary: #f8fafc;       /* Background secundário */
    --text-color: #1e293b;         /* Cor do texto */
    /* ... */
}
```

## 📱 Responsividade

### Desktop
- Botão de idioma e tema visíveis na navegação
- Dropdown de idioma aparece abaixo do botão

### Mobile
- Botões mantêm-se acessíveis
- Layout adaptado para ecrãs pequenos
- Touch targets adequados (mín. 44px)

## ♿ Acessibilidade

### Implementado:
- ✅ Transições suaves entre temas
- ✅ Contraste adequado em ambos os modos
- ✅ ARIA labels nos botões
- ✅ Navegação por teclado
- ✅ Focus states visíveis
- ✅ Respeita `prefers-color-scheme` (pode ser adicionado)

### Adicionar Detecção Automática de Tema do Sistema:

```javascript
// Detectar preferência do sistema
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    document.body.classList.add('light-mode');
}
```

## 🔍 Estrutura de Ficheiros

```
/
├── index.html              # HTML com atributos data-i18n
├── translations.js         # Sistema de traduções
├── script.js               # Lógica de tema e idioma
├── styles.css              # Estilos dark/light mode
└── DARK_MODE_MULTILANG.md  # Esta documentação
```

## 🎯 Fluxo de Funcionamento

### Carregamento da Página:

1. **Carrega tema guardado** (default: dark)
2. **Carrega idioma guardado** (default: pt-PT)
3. **Aplica traduções** aos elementos com data-i18n
4. **Atualiza interface** (botões, ícones)

### Troca de Tema:

1. User clica no botão de tema
2. Toggle da classe `light-mode` no body
3. Guarda preferência em localStorage
4. Atualiza ícone (☀️ ↔ 🌙)

### Troca de Idioma:

1. User seleciona idioma no dropdown
2. Função `loadLanguage()` é chamada
3. Atualiza atributo `lang` do HTML
4. Traduz todos os elementos com data-i18n
5. Guarda preferência em localStorage

## 💡 Dicas

### Performance:
- Traduções são carregadas uma vez
- LocalStorage evita chamadas repetidas
- Transições CSS são suaves mas eficientes

### SEO:
- Atributo `lang` atualizado dinamicamente
- Meta tags podem ser atualizadas via JS
- Considera criar páginas separadas para melhor SEO

### UX:
- Dark mode reduz fadiga visual
- Preferências são persistentes
- Interface intuitiva e familiar

## 🚀 Próximas Melhorias

### Sugeridas:

1. **Auto-detecção de idioma do browser:**
```javascript
const browserLang = navigator.language || navigator.userLanguage;
```

2. **Detecção de tema do sistema:**
```javascript
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
```

3. **Mais idiomas:**
   - Espanhol (ES)
   - Francês (FR)
   - Alemão (DE)

4. **Animações de transição:**
   - Fade entre temas
   - Slide no dropdown de idiomas

## ✅ Testes

### Checklist:

- [x] Dark mode funciona
- [x] Light mode funciona
- [x] Botão de toggle funciona
- [x] Preferência é guardada
- [x] PT-PT funciona
- [x] EN funciona
- [x] Troca de idioma funciona
- [x] Preferência de idioma é guardada
- [x] Mobile responsivo
- [x] Acessibilidade (teclado)
- [x] Contraste adequado
- [x] Sem erros no console

### Testar:

```bash
# Abrir index.html no browser
# 1. Testar troca de tema (☀️ ↔ 🌙)
# 2. Recarregar página (verificar persistência)
# 3. Testar troca de idioma (PT ↔ EN)
# 4. Recarregar página (verificar persistência)
# 5. Testar no mobile (responsividade)
# 6. Testar com teclado (Tab, Enter, Esc)
```

## 📞 Suporte

Para questões ou bugs:
- Email: nuno_miranda@outlook.com
- GitHub: @0xNunoMiranda

---

**Status:** ✅ Implementado  
**Versão:** 2.0  
**Data:** 28 de Janeiro de 2026  
**Dark Mode:** Padrão  
**Idiomas:** PT-PT (padrão), EN
