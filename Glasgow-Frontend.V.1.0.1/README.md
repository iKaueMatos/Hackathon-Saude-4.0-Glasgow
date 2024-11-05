# Hackathon 4.0 Saúde Front-end | Glasgow 🧠

---

## 📌 Índice

- [Visão Geral](#-visão-geral)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Instalação e Configuração](#-instalação-e-configuração)
- [Comandos Disponíveis](#-comandos-disponíveis)
- [Configuração de Ambiente](#-configuração-de-ambiente)
- [Estilos e Componentes](#-estilos-e-componentes)
- [Boas Práticas e Contribuições](#-boas-práticas-e-contribuições)
- [Licença](#-licença)

---

## 📋 Visão Geral

**PrimárIA** é um sistema de atenção primária à saúde voltado para a web e dispositivos móveis. Com ele, pacientes podem acompanhar e gerenciar aspectos importantes da saúde, como condições crônicas, exames, receitas, alimentação e receber alertas personalizados. O sistema é projetado para melhorar a prevenção e o acesso à informação através de uma integração com IA, que fornece respostas a dúvidas de saúde e orienta os usuários sobre os locais mais adequados para atendimento. 

Além disso, o sistema é integrado ao **WhatsApp** por meio de um chatbot com IA, facilitando o acesso a informações de saúde pelo aplicativo de mensagens.

---

## 📁 Estrutura do Projeto

A estrutura de diretórios do projeto segue a organização padrão para aplicações React. Abaixo estão os principais diretórios e uma breve explicação sobre cada um:

```
Glasgow-Frontend/
├── public/                  # Arquivos públicos e ícones
├── src/
│   ├── assets/              # Imagens e ícones do projeto
│   ├── components/          # Componentes reutilizáveis
│   ├── context/             # Context personalizados
│   ├── pages/               # Páginas da aplicação
│   ├── api/                 # Configuração de APIs e serviços externos
│   └── App.tsx              # Componente principal da aplicação
├── .env                     # Variáveis de ambiente
└── package.json             # Dependências e scripts do projeto
```

---

## 🛠️ Tecnologias Utilizadas

O front-end foi construído utilizando as seguintes tecnologias e ferramentas:

- **React.js** – Biblioteca para construção de interfaces de usuário dinâmicas.
- **TypeScript** – Tipagem estática que traz mais segurança ao código.
- **Tailwind CSS** – Framework de CSS utilitário para estilização rápida e responsiva.
- **Vite** – Ferramenta moderna para desenvolvimento e build rápido de projetos.
- **React Router** – Gerenciamento de rotas e navegação entre páginas.
- **React Query** – Gerenciamento de dados assíncronos com cache e sincronização.
- **Axios** – Cliente HTTP para consumo de APIs REST.
- **Sonner** – Biblioteca para exibir notificações.
- **React Hook Form** – Manipulação de formulários com validação.

---

## 🔧 Instalação e Configuração

### Pré-requisitos

Para rodar o projeto localmente, você precisará de:

- **Node.js** (v14 ou superior)
- **NPM** ou **Yarn** como gerenciador de pacotes

### Passo a Passo para Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/iKaueMatos/Glasgow-Frontend.git
   ```
2. **Acesse o diretório do projeto:**
   ```bash
   cd Glasgow-Frontend
   ```
3. **Instale as dependências:**
   ```bash
   npm install
   ```

---

## 📜 Comandos Disponíveis

- **Iniciar o servidor de desenvolvimento:**
  ```bash
  npm run dev
  ```
  Inicia o servidor de desenvolvimento com hot-reload, facilitando o desenvolvimento.

- **Build de Produção:**
  ```bash
  npm run build
  ```
  Gera uma versão otimizada da aplicação para produção.

- **Visualizar Build de Produção:**
  ```bash
  npm run preview
  ```
  Serve a aplicação gerada pelo comando `build` para visualização final.

---

## ⚙️ Configuração de Ambiente

Para configurar variáveis de ambiente, crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```plaintext
REACT_APP_API_BASE_URL=https://sua-api-url.com
REACT_APP_WHATSAPP_BOT_TOKEN=seu-token-whatsapp-bot
```

Essas variáveis podem ser acessadas pelo código através de `process.env`.

---

## 🎨 Estilos e Componentes

O estilo do projeto é gerenciado com **Tailwind CSS** para garantir consistência e responsividade. Componentes principais são organizados no diretório `src/components` e são projetados para serem reutilizáveis em várias partes da aplicação.

### Estrutura de Componentes

Os componentes são agrupados conforme suas responsabilidades. Exemplos incluem:

- **Form** – Componentes para manipulação de formulários (ex.: `Input`, `Button`, `FormWrapper`).
- **Layout** – Estruturas principais de layout (ex.: `Header`, `Footer`, `Sidebar`).
- **Feedback** – Elementos para notificações e feedback visual (ex.: `LoadingSpinner`, `Notification`).

### Customização com Tailwind

Para customizar as classes do **Tailwind CSS**, edite o arquivo `tailwind.config.js`. Nele você pode configurar temas, cores, espaçamentos e breakpoints.

---

## 💡 Boas Práticas e Contribuições

Para manter a qualidade e a organização do código:

1. **Padronize os commits** usando mensagens claras e seguindo o padrão convencional.
2. **Faça uso de TypeScript** para garantir tipagem e evitar erros.
3. **Descreva Pull Requests** detalhadamente, mencionando o que foi alterado e a motivação.
4. **Escreva código modular** e utilize hooks personalizados sempre que possível.

### Guia de Contribuição

1. **Fork** o repositório e crie uma nova branch para a sua feature.
2. **Desenvolva** e faça commit das suas mudanças com uma mensagem clara.
3. **Abra um Pull Request** descrevendo as mudanças realizadas.

---

## 📝 Licença

Este projeto está licenciado sob a **Licença MIT**. Para mais detalhes, consulte o arquivo [LICENSE](https://opensource.org/licenses/MIT).

---

Para dúvidas ou suporte, sinta-se à vontade para abrir uma **issue** no repositório. Agradecemos sua contribuição!
