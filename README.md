# Nuno Miranda - Website Pessoal

[![Deploy Status](https://img.shields.io/badge/deploy-GitHub%20Pages-success)](https://github.com/0xNunoMiranda/nunomiranda-dev)
[![SSL Status](https://img.shields.io/badge/SSL-HTTPS%20Enabled-brightgreen)](https://www.nunomiranda.dev)
[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fwww.nunomiranda.dev)](https://www.nunomiranda.dev)

Website pessoal com serviços digitais para pequenas e médias empresas, hospedado no GitHub Pages com SSL/HTTPS gratuito.

## 🌐 Website

**URL:** [https://www.nunomiranda.dev](https://www.nunomiranda.dev)

## 🔒 Configuração SSL/HTTPS

Este website utiliza SSL/HTTPS gratuito fornecido automaticamente pelo GitHub Pages através do Let's Encrypt. O certificado é renovado automaticamente, garantindo sempre uma ligação segura.

### Como funciona

O GitHub Pages oferece **SSL gratuito e automático** para domínios personalizados. Não é necessário:
- ❌ Gerar certificados manualmente
- ❌ Configurar servidores SSL
- ❌ Renovar certificados (renovação automática)

Apenas precisas de:
- ✅ Configurar o domínio personalizado no GitHub Pages
- ✅ Adicionar os registos DNS corretos no teu fornecedor de domínio
- ✅ Ativar a opção "Enforce HTTPS" nas definições

## 📋 Configuração Passo a Passo

### 1. Configurar o Domínio Personalizado no GitHub

1. Vai ao repositório no GitHub
2. Clica em **Settings** (Definições)
3. No menu lateral, clica em **Pages**
4. Em **Custom domain**, insere: `www.nunomiranda.dev`
5. Clica em **Save** (Guardar)
6. Aguarda a verificação DNS (pode demorar alguns minutos)

### 2. Configurar os Registos DNS

Acede ao painel de controlo DNS do teu fornecedor de domínio (onde compraste `nunomiranda.dev`) e adiciona os seguintes registos:

#### Opção A: Usar www.nunomiranda.dev (Recomendado)

| Tipo  | Nome/Host | Valor/Target              | TTL  |
|-------|-----------|---------------------------|------|
| CNAME | www       | 0xnunomiranda.github.io   | 3600 |

#### Opção B: Usar nunomiranda.dev (Apex Domain)

Se quiseres que o domínio principal (sem www) também funcione:

| Tipo  | Nome/Host | Valor/Target              | TTL  |
|-------|-----------|---------------------------|------|
| A     | @         | 185.199.108.153           | 3600 |
| A     | @         | 185.199.109.153           | 3600 |
| A     | @         | 185.199.110.153           | 3600 |
| A     | @         | 185.199.111.153           | 3600 |
| CNAME | www       | 0xnunomiranda.github.io   | 3600 |

**Notas importantes:**
- Os valores exatos de "Nome/Host" podem variar conforme o fornecedor de domínio
- Alguns fornecedores usam `@` para o domínio principal, outros usam `nunomiranda.dev` ou deixam em branco
- O TTL (Time To Live) pode ser ajustado conforme necessário

### 3. Ativar HTTPS

Depois de configurar o domínio e os registos DNS:

1. Volta a **Settings** > **Pages** no GitHub
2. Aguarda até aparecer uma mensagem de sucesso na verificação DNS
3. Marca a opção **"Enforce HTTPS"**
4. Aguarda alguns minutos para o certificado SSL ser gerado

⏱️ **Tempo estimado:** 5-15 minutos após a propagação DNS

### 4. Verificar se o SSL está Ativo

1. Acede a `https://www.nunomiranda.dev` no teu browser
2. Verifica se aparece um **cadeado verde** ou **ícone de segurança** na barra de endereços
3. Clica no cadeado para ver os detalhes do certificado
4. Confirma que o certificado é válido e emitido por "Let's Encrypt"

## 🔧 Troubleshooting (Resolução de Problemas)

### O domínio não está a funcionar

**Problema:** Ao aceder ao domínio, aparece um erro ou página não encontrada.

**Solução:**
- Verifica se os registos DNS estão corretos no teu fornecedor de domínio
- A propagação DNS pode demorar até **24 horas** (normalmente 1-2 horas)
- Usa ferramentas como [DNS Checker](https://dnschecker.org) para verificar a propagação
- Limpa a cache DNS do teu computador:
  - **Windows:** `ipconfig /flushdns` no Prompt de Comandos
  - **macOS:** `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder` no Terminal
  - **Linux:** `sudo systemd-resolve --flush-caches` no Terminal

### Erro "Certificate not yet created"

**Problema:** Aparece mensagem de erro sobre o certificado SSL.

**Solução:**
- Este erro é **temporário** e normal durante a configuração inicial
- O GitHub demora alguns minutos a gerar o certificado SSL
- Aguarda 10-30 minutos e tenta novamente
- Certifica-te de que o domínio DNS já propagou (usa [DNS Checker](https://dnschecker.org))
- Se o erro persistir após 24h, remove e adiciona o domínio personalizado novamente

### A opção "Enforce HTTPS" está desativada

**Problema:** Não consegues marcar a opção "Enforce HTTPS".

**Solução:**
- O certificado SSL ainda não foi gerado
- Aguarda alguns minutos após adicionar o domínio personalizado
- Atualiza a página de Settings > Pages
- Verifica se não há erros na verificação DNS
- Se após 1 hora ainda não funcionar, verifica os registos DNS

### O site funciona com HTTP mas não com HTTPS

**Problema:** `http://www.nunomiranda.dev` funciona mas `https://www.nunomiranda.dev` não.

**Solução:**
- O certificado SSL ainda está a ser gerado
- Aguarda alguns minutos e tenta novamente
- Verifica se "Enforce HTTPS" está ativado em Settings > Pages
- Limpa a cache do browser (Ctrl+Shift+Delete ou Cmd+Shift+Delete)

### Aviso de certificado inválido ou não seguro

**Problema:** O browser mostra aviso sobre certificado inválido.

**Solução:**
- Pode ser cache do browser - limpa a cache e tenta novamente
- Verifica se o domínio em CNAME está correto (`www.nunomiranda.dev`)
- Certifica-te de que estás a aceder ao domínio correto (com ou sem www)
- Se tiveres mudado recentemente o domínio, aguarda algumas horas

### Como forçar HTTPS após ativação

Uma vez ativado "Enforce HTTPS", o GitHub Pages redireciona automaticamente todo o tráfego HTTP para HTTPS. Não é necessária configuração adicional.

## 🛠️ Desenvolvimento Local

Para trabalhar localmente no website:

```bash
# Clonar o repositório
git clone https://github.com/0xNunoMiranda/nunomiranda-dev.git
cd nunomiranda-dev

# Abrir o ficheiro index.html no browser
# Ou usar um servidor local simples:

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (se tiveres o package 'http-server' instalado)
npx http-server -p 8000
```

Depois acede a `http://localhost:8000` no teu browser.

## 📁 Estrutura do Projeto

```
nunomiranda-dev/
├── .github/
│   └── workflows/
│       └── deploy-check.yml    # Workflow de CI/CD
├── CNAME                        # Configuração do domínio personalizado
├── index.html                   # Página principal
├── styles.css                   # Estilos CSS
├── script.js                    # JavaScript
└── README.md                    # Este ficheiro
```

## 🚀 Deploy

O deploy é **automático**. Sempre que fazes push para o branch `main`, o GitHub Pages atualiza o website automaticamente em poucos minutos.

```bash
git add .
git commit -m "Descrição das alterações"
git push origin main
```

## 🔍 Verificação de Qualidade

Este projeto inclui um workflow de CI/CD (`.github/workflows/deploy-check.yml`) que valida automaticamente:
- ✅ Integridade dos ficheiros HTML
- ✅ Verificação de links quebrados (futuro)

## 📚 Recursos Úteis

- [Documentação oficial do GitHub Pages](https://docs.github.com/pt/pages)
- [Configurar domínio personalizado](https://docs.github.com/pt/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Sobre HTTPS no GitHub Pages](https://docs.github.com/pt/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)
- [Verificar propagação DNS](https://dnschecker.org)
- [Let's Encrypt](https://letsencrypt.org) - Fornecedor dos certificados SSL gratuitos

## 📞 Contacto

Para questões ou sugestões relacionadas com o website, abre uma [issue](https://github.com/0xNunoMiranda/nunomiranda-dev/issues) neste repositório.

---

**Nota:** Este website utiliza SSL/HTTPS gratuito fornecido automaticamente pelo GitHub Pages. O certificado é gerido e renovado automaticamente, sem qualquer custo ou configuração manual necessária.
