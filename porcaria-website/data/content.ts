import { Feature, ProcessStep } from '@/lib/types';

export const siteContent = {
  // General
  siteName: 'Porca-Ria',
  tagline: 'Carnes & Bacon Artesanal',

  // Homepage
  home: {
    hero: {
      title: 'Tradição e Sabor Artesanal',
      subtitle: 'Conheça a história de José Américo. Uma paixão de berço transformada em carnes e bacon artesanais.',
      cta: 'Descubra os Nossos Produtos',
    },
    features: [
      {
        icon: 'Award',
        title: 'Tradição Real',
        description: 'Receitas que atravessaram gerações, da avó à mãe e ao José Américo.',
      },
      {
        icon: 'Leaf',
        title: 'Saúde e Qualidade',
        description: 'Bacon artesanal livre de químicos. Zero conservantes, apenas o cuidado da nossa família.',
      },
      {
        icon: 'Heart',
        title: 'Feito à Mão',
        description: 'Cada peça é produzida com o carinho de quem ama o que faz.',
      },
    ] as Feature[],
    productsSection: {
      title: 'Nossos Produtos',
      subtitle: 'Bacon artesanal e o famoso leitão do Zé — tradição e sabor para sua mesa.',
      cta: 'Ver Todos os Produtos',
    },
  },

  // About Page
  about: {
    title: 'Sobre a Porca-Ria',
    hero: {
      title: 'A Nossa História',
      text: 'Conheça a história de José Américo. Após 40 anos como administrador, ele decidiu transformar em negócio uma paixão que vem de berço: a charcutaria artesanal.',
    },
    joseAmerico: {
      title: 'José Américo',
      bio: 'Após 40 anos como administrador, decidiu transformar em negócio uma paixão que vem de berço: a charcutaria artesanal. O amor pela cozinha começou na infância, observando uma receita que atravessou gerações.',
    },
    story: {
      title: 'Uma Herança de Família',
      intro: 'O amor pela cozinha começou na infância, observando a evolução de uma receita que atravessou gerações:',
      steps: [
        { who: 'A Avó', text: 'Fazia o tradicional leitão assado, dividido ao meio.' },
        { who: 'A Mãe', text: 'Aperfeiçoou a técnica, assando o leitão inteiro.' },
        { who: 'José Américo', text: 'Inovou ao criar um método para assar o leitão inteiro e de pé, adaptado inclusive para fornos residenciais.' },
      ],
    },
    process: {
      title: 'Nosso Processo Artesanal',
      subtitle: 'Cada etapa é realizada com cuidado e dedicação',
      steps: [
        {
          number: 1,
          title: 'Seleção das Carnes',
          description: 'Escolhemos apenas carnes de qualidade superior de produtores de confiança.',
        },
        {
          number: 2,
          title: 'Tempero Tradicional',
          description: 'Aplicamos misturas de especiarias naturais seguindo receitas que atravessaram gerações.',
        },
        {
          number: 3,
          title: 'Cura Natural',
          description: 'Permitimos que o tempo faça o seu trabalho, com cura lenta em condições controladas.',
        },
        {
          number: 4,
          title: 'Controle de Qualidade',
          description: 'Cada produto é rigorosamente verificado antes de chegar até si.',
        },
      ] as ProcessStep[],
    },
    commitment: {
      title: 'Nosso Compromisso',
      text: 'Sem conservantes artificiais. Sem corantes. Sem atalhos. Apenas ingredientes naturais, técnicas tradicionais e muito amor pelo que fazemos. Este é o compromisso da Porca-Ria com você — o cuidado da nossa família direto para a sua mesa.',
    },
  },

  // Products Page
  products: {
    title: 'Nossos Produtos',
    subtitle: 'Bacon artesanal e o famoso leitão do Zé. Tradição e sabor para sua mesa.',
    categories: {
      bacon: {
        title: 'Bacon Artesanal',
        description: 'O verdadeiro sabor da fazenda na sua mesa. Nosso bacon é feito com muito amor e um diferencial importante: zero conservantes. É um produto natural, pensado para levar o cuidado da nossa família diretamente para a sua. Já disponível para pronta entrega!',
      },
      especialidades: {
        title: 'O Famoso Leitão do Zé',
        description: 'Quer surpreender em um evento ou jantar especial? A técnica exclusiva de assar o leitão inteiro e de pé está disponível sob encomenda. Consulte nossos prazos e garanta essa experiência única.',
      },
    },
  },

  // Contact Page
  contact: {
    title: 'Entre em Contato',
    subtitle: 'Estamos aqui para responder suas dúvidas e encomendas',
    form: {
      nameLabel: 'Nome Completo',
      namePlaceholder: 'Seu nome',
      emailLabel: 'E-mail',
      emailPlaceholder: 'seu@email.com',
      phoneLabel: 'Telefone (opcional)',
      phonePlaceholder: '(11) XXXXX-XXXX',
      subjectLabel: 'Assunto',
      subjectOptions: [
        { value: 'informacao', label: 'Informação Geral' },
        { value: 'encomenda', label: 'Encomenda' },
        { value: 'leitao', label: 'Encomenda do Leitão do Zé' },
        { value: 'parceria', label: 'Parceria' },
        { value: 'outro', label: 'Outro' },
      ],
      messageLabel: 'Mensagem',
      messagePlaceholder: 'Escreva sua mensagem aqui...',
      submitButton: 'Enviar Mensagem',
      submittingButton: 'A enviar...',
      successMessage: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
      errorMessage: 'Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato diretamente.',
    },
    info: {
      title: 'Informações de Contato',
      address: {
        label: 'Endereço',
        value: 'Porca-Ria - Carnes & Bacon Artesanal\nSão Paulo - SP\nBrasil',
      },
      email: {
        label: 'E-mail',
        value: 'contato@porca-ria.com.br',
      },
      phone: {
        label: 'Telefone',
        value: '+55 (11) XXXX-XXXX',
      },
      hours: {
        label: 'Horário de Funcionamento',
        value: 'Segunda a Sexta: 9h às 18h\nSábado: 9h às 13h\nDomingo: Fechado',
      },
    },
  },

  // History Page
  history: {
    title: 'A Nossa História',
    subtitle: 'O leitão do Zé em imagens — tradição de família em cada mesa.',
    hero: {
      title: 'Uma tradição em fotos',
      text: 'Do forno à mesa, o famoso leitão do Zé é uma herança que atravessa gerações. Estas imagens contam um pouco dessa história.',
    },
    timeline: [
      {
        year: '2017',
        title: 'Na cozinha',
        description: 'O leitão assado na cozinha de casa — a receita que veio da avó e ganhou o mundo.',
        image: '/images/leitao_ze_kitchen_2017.jpg',
        imageAlt: 'Leitão do Zé na cozinha',
      },
      {
        year: 'Natal em família',
        title: 'À mesa',
        description: 'O leitão no centro da mesa em festas de família. Tradição que une gerações.',
        image: '/images/leitao_christmas_family_table.jpg',
        imageAlt: 'Mesa de Natal com leitão',
      },
      {
        year: 'Tradição viva',
        title: 'O preparo',
        description: 'Cada detalhe conta: do tempero ao acabamento. O cuidado que faz a diferença.',
        image: '/images/leitao_olives_kitchen.jpg',
        imageAlt: 'Preparação do leitão',
      },
      {
        year: '2025',
        title: 'À sua mesa',
        description: 'O mesmo sabor e carinho, agora para encomenda. O famoso leitão do Zé para a sua festa.',
        image: '/images/leitao_ze_table_2025.jpg',
        imageAlt: 'Leitão na mesa',
      },
    ],
  },

  // Navigation
  nav: {
    home: 'Início',
    about: 'Sobre',
    history: 'História',
    products: 'Produtos',
    contact: 'Contato',
  },

  // Footer
  footer: {
    about: {
      title: 'Porca-Ria',
      text: 'Carnes e bacon artesanais de José Américo. Tradição de família, zero conservantes e o cuidado de quem ama o que faz — para sua mesa.',
    },
    links: {
      title: 'Links Úteis',
      items: [
        { label: 'Início', href: '/' },
        { label: 'Sobre Nós', href: '/sobre' },
        { label: 'História', href: '/historia' },
        { label: 'Produtos', href: '/produtos' },
        { label: 'Contato', href: '/contato' },
      ],
    },
    contact: {
      title: 'Contato',
      email: 'contato@porca-ria.com.br',
      phone: '+55 (11) XXXX-XXXX',
    },
    copyright: '© 2026 Porca-Ria. Todos os direitos reservados.',
  },
};
