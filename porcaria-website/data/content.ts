import { Feature, ProcessStep } from '@/lib/types';

export const siteContent = {
  // General
  siteName: 'Porca-Ria',
  tagline: 'Carnes & Bacon Artesanal',

  // Homepage
  home: {
    hero: {
      title: 'Sabores Autênticos da Tradição Italiana',
      subtitle: 'Carnes e bacon artesanais, produzidos com paixão italiana e dedicação desde 2026',
      cta: 'Descubra os Nossos Produtos',
    },
    features: [
      {
        icon: 'Award',
        title: '100% Artesanal',
        description: 'Cada produto é elaborado manualmente, seguindo técnicas ancestrais de cura e tempero.',
      },
      {
        icon: 'Leaf',
        title: 'Ingredientes Naturais',
        description: 'Apenas ingredientes naturais, sem conservantes artificiais ou aditivos químicos.',
      },
      {
        icon: 'Heart',
        title: 'Tradição Italiana',
        description: 'Sabores autênticos que preservam e celebram a rica tradição culinária italiana trazida por José.',
      },
    ] as Feature[],
    productsSection: {
      title: 'Produtos em Destaque',
      subtitle: 'Conheça alguns de nossos produtos artesanais',
      cta: 'Ver Todos os Produtos',
    },
  },

  // About Page
  about: {
    title: 'Sobre a Porca-Ria',
    hero: {
      title: 'A Nossa História',
      text: 'A Porca-Ria nasceu da paixão de José pela cura artesanal de carnes e pela preservação das tradições culinárias de suas raízes italianas. Localizada no tradicional bairro do Cambuci, em São Paulo, cada produto é elaborado com técnicas ancestrais italianas, combinando o melhor da tradição com padrões modernos de qualidade e higiene.',
    },
    story: {
      title: 'Tradição e Qualidade',
      paragraphs: [
        'Fundada em 2026 por José no bairro do Cambuci, em São Paulo, a Porca-Ria é mais do que um negócio – é uma celebração da arte milenar da charcutaria italiana. Com orgulho em suas raízes italianas, José trouxe para o Brasil as receitas e técnicas transmitidas de geração em geração em sua família. Dedicamo-nos a criar produtos que honram essas receitas tradicionais italianas enquanto satisfazem os paladares brasileiros contemporâneos.',
        'Trabalhamos exclusivamente com carnes selecionadas de produtores brasileiros, garantindo não só a qualidade superior, mas também o apoio à economia local de São Paulo. Cada peça é temperada com especiarias naturais seguindo métodos italianos autênticos e curada lentamente, permitindo que os sabores se desenvolvam de forma natural e harmoniosa.',
        'Nosso compromisso é simples: criar produtos autênticos, saborosos e saudáveis, sem atalhos ou compromissos. É este respeito pela tradição italiana e pela qualidade que define cada produto Porca-Ria, unindo o melhor da Itália com o coração de São Paulo.',
      ],
    },
    process: {
      title: 'Nosso Processo Artesanal',
      subtitle: 'Cada etapa é realizada com cuidado e dedicação',
      steps: [
        {
          number: 1,
          title: 'Seleção das Carnes',
          description: 'Escolhemos apenas carnes de qualidade superior de produtores brasileiros de confiança.',
        },
        {
          number: 2,
          title: 'Tempero Tradicional',
          description: 'Aplicamos misturas de especiarias naturais seguindo receitas tradicionais italianas da família de José.',
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
      text: 'Sem conservantes artificiais. Sem corantes. Sem atalhos. Apenas ingredientes naturais, técnicas tradicionais italianas e muito amor pelo que fazemos. Este é o compromisso da Porca-Ria e das raízes italianas de José com você, direto do Cambuci para sua mesa.',
    },
  },

  // Products Page
  products: {
    title: 'Nossos Produtos',
    subtitle: 'Explore nossa seleção de carnes e bacon artesanais',
    categories: {
      bacon: {
        title: 'Bacon Artesanal',
        description: 'Nosso bacon é curado lentamente com sal marinho e especiarias naturais, resultando em sabor intenso e textura perfeita.',
      },
      carnes: {
        title: 'Carnes Curadas',
        description: 'Carnes selecionadas, temperadas e curadas seguindo métodos tradicionais italianos.',
      },
      especialidades: {
        title: 'Especialidades',
        description: 'Produtos únicos que representam o melhor de nossa tradição e criatividade.',
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
        value: 'Porca-Ria - Carnes & Bacon Artesanal\nCambuci\nSão Paulo - SP\nBrasil',
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

  // Navigation
  nav: {
    home: 'Início',
    about: 'Sobre',
    products: 'Produtos',
    contact: 'Contato',
  },

  // Footer
  footer: {
    about: {
      title: 'Porca-Ria',
      text: 'Carnes e bacon artesanais do Cambuci, São Paulo. Produzidos com paixão italiana e dedicação. Sabores autênticos da tradição italiana de José.',
    },
    links: {
      title: 'Links Úteis',
      items: [
        { label: 'Início', href: '/' },
        { label: 'Sobre Nós', href: '/sobre' },
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
