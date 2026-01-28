# 🚀 Guia de Deploy

## Opções de Hospedagem

### 1. GitHub Pages (Recomendado - Grátis)

O projeto já está num repositório Git. Para fazer deploy:

#### Passo a passo:

1. **Commit das alterações:**
```bash
git add .
git commit -m "Website completo para clínicas"
git push origin main
```

2. **Ativar GitHub Pages:**
   - Vai ao repositório no GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Save

3. **Aguarda 2-5 minutos**
   - O site estará disponível em: `https://0xnunomiranda.github.io/nunomiranda-dev/`
   - Ou no domínio custom se configurado no CNAME

#### Domínio Custom (já configurado):

O ficheiro `CNAME` já existe com: `www.nunomiranda.dev`

Para ativar:
1. No GitHub Pages settings, adiciona: `www.nunomiranda.dev`
2. No DNS do domínio, cria:
   - Tipo: CNAME
   - Nome: www
   - Valor: 0xnunomiranda.github.io
   - TTL: 3600

3. Aguarda propagação DNS (até 24h)

### 2. Netlify (Alternativa Grátis)

1. **Criar conta:** https://netlify.com
2. **Deploy:**
   - New site from Git
   - Conecta repositório GitHub
   - Build settings:
     - Build command: (deixar vazio)
     - Publish directory: `/`
   - Deploy

3. **Domínio custom:**
   - Domain settings → Add custom domain
   - Seguir instruções DNS

### 3. Vercel (Alternativa Grátis)

1. **Criar conta:** https://vercel.com
2. **Deploy:**
   - Import Project
   - GitHub repository
   - Deploy

3. **Configurações automáticas** (sem build necessário)

### 4. Hosting Tradicional

Se preferires hosting pago (Hostinger, Dreamhost, etc.):

1. **Faz upload via FTP:**
   - index.html
   - landing.html
   - styles.css
   - script.js
   - CNAME (opcional)

2. **Pasta raiz:** public_html ou www

3. **Permissões:** 644 para ficheiros

## 🔧 Antes do Deploy

### Checklist Final:

- [ ] Testa localmente em diferentes browsers
- [ ] Verifica todos os links
- [ ] Testa responsividade (mobile/tablet/desktop)
- [ ] Confirma contactos (telefone, email)
- [ ] Verifica ortografia
- [ ] Testa formulários (se adicionares)
- [ ] Valida HTML: https://validator.w3.org/
- [ ] Valida CSS: https://jigsaw.w3.org/css-validator/

### Teste Local:

```bash
# Opção 1: Python
python3 -m http.server 8000

# Opção 2: Node.js (se tiveres)
npx http-server

# Acede em: http://localhost:8000
```

## 📊 Após Deploy

### Google Analytics (Recomendado)

1. **Criar conta:** https://analytics.google.com
2. **Criar propriedade**
3. **Obter código de tracking**
4. **Adicionar ao `<head>` do HTML:**

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Google Search Console

1. **Adicionar propriedade:** https://search.google.com/search-console
2. **Verificar propriedade:**
   - Método: Tag HTML
   - Adiciona meta tag ao `<head>`
3. **Submeter sitemap** (criar depois)

### Google My Business

1. **Criar perfil:** https://business.google.com
2. **Categoria:** Serviços Empresariais
3. **Adicionar website:** www.nunomiranda.dev
4. **Preencher informação completa**
5. **Adicionar fotos (se quiseres)**

## 🔍 SEO Inicial

### 1. robots.txt (criar na raiz)

```txt
User-agent: *
Allow: /

Sitemap: https://www.nunomiranda.dev/sitemap.xml
```

### 2. sitemap.xml (criar na raiz)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.nunomiranda.dev/</loc>
    <lastmod>2026-01-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.nunomiranda.dev/landing.html</loc>
    <lastmod>2026-01-28</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

## 📱 Testes Pós-Deploy

### Ferramentas:

1. **PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Testa performance e SEO

2. **Mobile-Friendly Test**
   - https://search.google.com/test/mobile-friendly
   - Verifica compatibilidade mobile

3. **GTmetrix**
   - https://gtmetrix.com/
   - Análise de performance

4. **WAVE**
   - https://wave.webaim.org/
   - Teste de acessibilidade

### Browsers:

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## 🔒 HTTPS

### GitHub Pages:
- Ativa automaticamente
- Pode demorar até 24h com domínio custom

### Netlify/Vercel:
- HTTPS automático
- Certificado Let's Encrypt gratuito

### Hosting Tradicional:
- Verifica se fornecedor oferece SSL grátis
- Let's Encrypt ou certificado pago

## 📈 Monitorização

### Métricas Importantes:

1. **Tráfego:**
   - Visitantes únicos
   - Páginas vistas
   - Taxa de rejeição

2. **Comportamento:**
   - Tempo médio na página
   - Scroll depth
   - Cliques em CTAs

3. **Conversões:**
   - Contactos recebidos
   - Origem dos contactos
   - Taxa de conversão

### Ferramentas Gratuitas:

- Google Analytics
- Google Search Console
- Hotjar (mapas de calor) - plano grátis
- Microsoft Clarity - alternativa grátis

## 🚨 Troubleshooting

### Site não aparece:

1. **Verifica DNS:**
```bash
nslookup www.nunomiranda.dev
```

2. **Limpa cache do browser:**
   - Ctrl + Shift + R (Windows/Linux)
   - Cmd + Shift + R (Mac)

3. **Testa em modo incógnito**

### CSS não carrega:

1. Verifica caminhos dos ficheiros
2. Confirma `styles.css` está no mesmo diretório
3. Inspeciona console do browser (F12)

### Links não funcionam:

1. Verifica anchors (#) estão corretos
2. Testa navegação smooth scroll
3. Verifica IDs das secções

## 📞 Suporte Técnico

### Problemas GitHub Pages:
- https://docs.github.com/pages

### Problemas Netlify:
- https://docs.netlify.com/

### Problemas DNS:
- Contacta fornecedor do domínio

## ✅ Checklist Final Deploy

- [ ] Website testado localmente
- [ ] Todos os links funcionam
- [ ] Contactos corretos
- [ ] Responsive em mobile
- [ ] Deploy feito com sucesso
- [ ] HTTPS ativo
- [ ] Google Analytics instalado
- [ ] Google Search Console configurado
- [ ] Sitemap submetido
- [ ] robots.txt criado
- [ ] Testes de performance OK
- [ ] Testes de acessibilidade OK
- [ ] Partilhado em redes sociais
- [ ] LinkedIn atualizado
- [ ] Google My Business criado

## 🎉 Próximos Passos

1. **Semana 1:**
   - Monitoriza analytics diariamente
   - Corrige qualquer problema
   - Recolhe feedback

2. **Semana 2-4:**
   - Ajusta baseado em dados
   - Otimiza conversões
   - Adiciona conteúdo se necessário

3. **Mês 2+:**
   - Adiciona testemunhos
   - Expande conteúdo
   - Considera blog

---

**Boa sorte com o lançamento! 🚀**

Para qualquer dúvida:
- Email: nuno_miranda@outlook.com
- GitHub: @0xNunoMiranda
