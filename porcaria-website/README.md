# Porca-Ria Website

Website institucional para a Porca-Ria - Carnes & Bacon Artesanal, localizada no Cambuci, São Paulo, Brasil.

## Sobre o Projeto

Este é um website moderno e responsivo desenvolvido em Next.js 16, apresentando produtos artesanais de carnes e bacon com tradição italiana. O site inclui:

- 🏠 **Página Inicial**: Hero section com logo, features e produtos em destaque
- 📖 **Sobre**: História de José, raízes italianas, processo artesanal e compromissos da Porca-Ria
- 🥓 **Produtos**: Catálogo completo de bacon, carnes curadas e especialidades italianas
- 📧 **Contato**: Formulário de contato com validação e informações (Cambuci, São Paulo)

## Tecnologias Utilizadas

- **Next.js 16** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização responsiva
- **React Hook Form** - Gestão de formulários
- **Zod** - Validação de schemas
- **Lucide React** - Ícones modernos

## Começar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build de Produção

```bash
npm run build
npm start
```

## Estrutura do Projeto

```
porcaria-website/
├── app/                    # App Router do Next.js
│   ├── page.tsx           # Página inicial
│   ├── sobre/             # Página Sobre
│   ├── produtos/          # Página de Produtos
│   ├── contato/           # Página de Contato
│   └── api/contact/       # API do formulário
├── components/            # Componentes React
│   ├── layout/           # Header, Footer, Navigation
│   ├── home/             # Hero, Features, FeaturedProducts
│   ├── products/         # ProductCard, ProductGrid
│   ├── contact/          # ContactForm, ContactInfo
│   └── ui/               # Button, Card
├── data/                 # Conteúdo e dados
│   ├── products.ts       # Catálogo de produtos
│   └── content.ts        # Conteúdo do site
├── lib/                  # Utilitários
│   ├── types.ts          # Tipos TypeScript
│   └── utils.ts          # Funções auxiliares
└── public/images/        # Imagens otimizadas
```

## Configuração do Email (Opcional)

Para ativar o envio de emails através do formulário de contacto:

1. Crie uma conta em [Resend](https://resend.com)
2. Copie `.env.local.example` para `.env.local`
3. Adicione sua chave API da Resend
4. Descomente o código no arquivo `app/api/contact/route.ts`

## Design

O website utiliza uma paleta de cores rústica e artesanal:

- **Primária (Browns)**: #f2e8e5 → #3e2f2a
- **Accent (Orange)**: #f97316, #ea580c
- **Wood Tones**: #8b6f47, #5c4a3a

Fontes:
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

## Responsividade

- **Mobile**: 375px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## Deploy

### Railway (Recomendado)

Este projeto está configurado para deploy no [Railway](https://railway.app):

1. Crie uma conta no Railway
2. Conecte seu repositório GitHub
3. Railway detectará automaticamente o Next.js
4. Configure as variáveis de ambiente
5. Deploy automático!

Veja o guia completo em [DEPLOYMENT.md](DEPLOYMENT.md)

### Vercel (Alternativa)

Ou use [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

## Licença

© 2026 Porca-Ria. Todos os direitos reservados.
