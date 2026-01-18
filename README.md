# Portfólio Arquitetônico - Andressa Salszbrun

Um portfólio moderno e responsivo para arquiteta, desenvolvido com React, TypeScript, Tailwind CSS e Vite. O site apresenta projetos arquitetônicos com recursos interativos como comparação Antes/Depois e integração com calendário para agendamentos.

## 🚀 Funcionalidadess

- ✨ Design moderno e responsivo
- 🎨 Sistema de design tokens personalizável
- 📱 Totalmente responsivo
- 🖼️ Galeria de projetos com filtros
- 🔄 Slider interativo Antes/Depois
- 📅 Integração com calendário (Cal.com)
- 📧 Formulário de contato funcional
- 🌐 Otimizado para SEO
- 📊 Integração com Google Analytics
- 🇧🇷 Interface em português brasileiro

## 🛠️ Tecnologias

- **React 18** - Framework principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS
- **Radix UI** - Componentes acessíveis
- **React Hook Form** - Formulários
- **Lucide React** - Ícones
- **Sonner** - Notificações toast

## 📦 Instalação e Execução Local

Siga os passos abaixo para iniciar o projeto em sua máquina local:

1. **Clone o repositório** (se ainda não o fez):
```bash
git clone <url-do-repositorio>
cd "website pro/main website"
```

2. **Instale as dependências**:
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**:
```bash
npm run dev
```

4. **Acesse o site**:
O servidor iniciará geralmente em `http://localhost:5173`. Copie e cole este endereço no seu navegador.

## 🌍 Deploy no Cloudflare Pages

### Pré-requisitos
- Conta no Cloudflare
- Repositório no GitHub/GitLab
- Node.js 18+ configurado

### Passo a Passo

1. **Preparar o Repositório**
   ```bash
   # Certifique-se de que o código está commitado
   git add .
   git commit -m "Preparar para deploy"
   git push origin main
   ```

2. **Configurar Cloudflare Pages**
   - Acesse [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Vá para "Pages" no menu lateral
   - Clique em "Create a project"
   - Conecte seu repositório GitHub/GitLab
   - Selecione o repositório do portfólio

3. **Configurações de Build**
   ```
   Framework preset: React
   Build command: npm run build
   Build output directory: dist
   Root directory: / (deixar vazio)
   Node.js version: 18.x
   ```

4. **Variáveis de Ambiente**
   
   No painel do Cloudflare Pages, vá em Settings > Environment variables e adicione:

   **Produção:**
   ```
   VITE_CAL_BOOKING_URL=https://cal.com/pardus.arch/30min
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

   **Notas:**
   - `VITE_CAL_BOOKING_URL`: Link para agendamento no Cal.com. Padrão: `https://cal.com/pardus.arch/30min`
   - `VITE_GA_MEASUREMENT_ID`: ID de metrificação do Google Analytics (GA4).
   - `VITE_CONTACT_EMAIL`: (Opcional) Uso futuro para formulários de contato.

5. **Deploy**
   - Clique em "Save and Deploy"
   - O Cloudflare irá automaticamente fazer o build e deploy
   - Seu site estará disponível em: `https://seu-projeto.pages.dev`

### Domínio Personalizado

1. No painel do Cloudflare Pages:
   - Vá para "Custom domains"
   - Clique em "Set up a custom domain"
   - Digite seu domínio (ex: `www.andressaarch.com`)
   - Siga as instruções para configurar o DNS

## 🔧 Configurações

### Cal.com (Agendamento)

1. Crie uma conta em [Cal.com](https://cal.com)
2. Configure seus horários disponíveis
3. Copie o link do seu perfil público
4. Adicione a variável `VITE_CAL_BOOKING_URL=https://cal.com/seu-usuario`

### Google Analytics

1. Acesse [Google Analytics](https://analytics.google.com/)
2. Crie uma propriedade GA4
3. Copie o Measurement ID (formato: G-XXXXXXXXXX)
4. Adicione a variável `VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX`

### Formulário de Contato

O formulário atual funciona no frontend. Para funcionalidade completa:

**Opção 1: Formspree (Recomendado)**
```bash
# Instalar
npm install @formspree/react

# Configurar em ContactForm.tsx
const FORM_ID = "seu-form-id";
```

**Opção 2: EmailJS**
```bash
# Instalar
npm install @emailjs/browser

# Configurar chaves de API
VITE_EMAILJS_SERVICE_ID=seu-service-id
VITE_EMAILJS_TEMPLATE_ID=seu-template-id
VITE_EMAILJS_PUBLIC_KEY=sua-public-key
```

## 📱 Recursos de SEO

- Meta tags dinâmicas
- Open Graph para redes sociais
- Structured data (JSON-LD)
- Sitemap automático
- Robots.txt otimizado
- URLs semânticas

## 🎨 Personalização

### Cores e Temas

Edite `src/index.css` para personalizar as cores:

```css
:root {
  --primary: 28 25% 23%;     /* Cor principal */
  --warm: 32 32% 72%;        /* Cor de destaque */
  --background: 0 0% 100%;   /* Fundo */
}
```

### Conteúdo

1. **Projetos**: Edite `src/components/ProjectGrid.tsx`
2. **Informações pessoais**: Edite `src/components/About.tsx`
3. **Dados de contato**: Edite `src/components/Contact.tsx`

## 📊 Analytics e Monitoramento

### Métricas Importantes

- **Page Views**: Visualizações de página
- **Session Duration**: Tempo na sessão
- **Bounce Rate**: Taxa de rejeição
- **Contact Form Submissions**: Envios do formulário
- **WhatsApp Clicks**: Cliques no WhatsApp
- **Calendar Bookings**: Agendamentos

### Configurar Eventos Personalizados

```javascript
// Rastrear cliques no portfólio
gtag('event', 'project_view', {
  event_category: 'Portfolio',
  event_label: 'Nome do Projeto'
});

// Rastrear envios do formulário
gtag('event', 'contact_form_submit', {
  event_category: 'Contact',
  event_label: 'Form Submission'
});
```

## 🚀 Performance

### Otimizações Implementadas

- Lazy loading de imagens
- Compressão de assets
- Tree shaking automático
- Minificação CSS/JS
- Cache estratégico

### Métricas Alvo (Lighthouse)

- **Performance**: >90
- **Accessibility**: >95
- **Best Practices**: >95
- **SEO**: >95

## 🔄 Atualizações

### Deploy Automático

O Cloudflare Pages monitora seu repositório. Para atualizar:

```bash
git add .
git commit -m "Atualizar conteúdo"
git push origin main
```

O deploy será automático após o push.

### Versionamento

Use tags semânticas para releases:

```bash
git tag -a v1.0.0 -m "Primeira versão"
git push origin v1.0.0
```

## 🆘 Solução de Problemas

### Build Falha

1. Verifique Node.js versão 18+
2. Limpe cache: `npm run build -- --force`
3. Verifique variáveis de ambiente

### Formulário Não Funciona

1. Verifique configuração do serviço de email
2. Teste em ambiente local
3. Verifique console para erros

### Analytics Não Carrega

1. Verifique Measurement ID
2. Teste com adblocker desabilitado
3. Aguarde 24-48h para dados aparecerem

## 📞 Suporte

Para dúvidas sobre configuração:

1. Consulte a documentação do Cloudflare Pages
2. Verifique logs de build no dashboard
3. Teste localmente com `npm run build && npm run preview`

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

**Desenvolvido com ❤️ para arquitetos modernos**