# Hackathon 4.0 Saúde | Glasgow Backend - Incompleto 🧠

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/iKaueMatos/Glasgow)](https://github.com/iKaueMatos/Glasgow/issues)

## 📜 Índice
* 🔍 Visão Geral
* 🛠️ Tecnologias Utilizadas
* 🔧 Ferramentas Adicionais
* 📈 Funcionalidades
* 🔐 Serviço de Autenticação
* 📝 Serviço de Acompanhamento e Consultas Médicas
* 🖥️ Chatbot de Suporte via WhatsApp
* 💾 Integração com Banco de Dados
* 💻 Como Rodar Localmente
* 🎯 Contribuições
* 📞 Contato

---

## 🔍 Visão Geral
O projeto PrimárIA foi desenvolvido durante o Hackathon Saúde 4.0 com o objetivo de criar uma plataforma de atenção primária à saúde, facilitando o acompanhamento de pacientes com doenças crônicas. Este sistema oferece suporte através de uma inteligência artificial integrada que acessa o histórico médico, fornece respostas para dúvidas e orienta sobre os locais mais adequados para atendimento conforme a gravidade dos casos, evitando filas desnecessárias. O PrimárIA centraliza informações de saúde em um só lugar e permite que pacientes recebam suporte e alertas diretamente pelo WhatsApp, através de um chatbot de IA.

---

## 🛠️ Tecnologias Utilizadas
* **Node.js**: Runtime para construção de aplicações backend.
* **Express.js**: Framework web para construção de APIs.
* **TypeScript**: Superset do JavaScript com tipagem estática.
* **Prisma**: ORM para gerenciamento de dados e integração com o banco de dados.
* **Docker**: Para containerização e facilidade de deploy.
* **MySQL**: Banco de dados relacional.

---

## 🔧 Ferramentas Adicionais
* **Docker Compose**: Facilita a configuração de ambientes de desenvolvimento.
* **Swagger**: Documentação interativa da API.
* **Postman**: Testes manuais e automação de testes de API.
* **Jest**: Para testes unitários e de integração.
* **Axios**: Biblioteca para fazer requisições HTTP.

---

## 📈 Funcionalidades
* **Acompanhamento de Doenças Crônicas**: Facilita o monitoramento e armazenamento de informações sobre doenças crônicas e exames.
* **Receitas e Dietas**: Mantém o registro e atualização de receitas médicas e planos de alimentação.
* **Alertas de Saúde**: Notificações para o acompanhamento preventivo de saúde.
* **Chatbot com IA para Suporte**: Suporte por meio de chatbot no WhatsApp, respondendo dúvidas comuns e alertas personalizados.

---

## 🔐 Serviço de Autenticação
A aplicação utiliza autenticação baseada em JWT para garantir acesso seguro às funcionalidades, com armazenamento de senhas criptografadas.

---

## 📝 Serviço de Acompanhamento e Consultas Médicas
Este serviço acessa o banco de dados para buscar informações do histórico médico dos pacientes, permitindo respostas rápidas e eficazes para consultas sobre exames, receitas e orientações de saúde.

---

## 🖥️ Chatbot de Suporte via WhatsApp
A plataforma oferece suporte direto aos pacientes por meio de um chatbot integrado ao WhatsApp, permitindo que usuários façam consultas sobre medicamentos, agendamento de exames e recebam lembretes de saúde.

---

## 💾 Integração com Banco de Dados
Os dados dos pacientes são armazenados de forma segura em um banco de dados MySQL, com Prisma como ORM, proporcionando consultas e atualizações rápidas e confiáveis.

---

## 💻 Como Rodar Localmente
1. **Pré-requisitos**:
   * Docker e Docker Compose instalados.
   * Configuração das variáveis de ambiente.

2. **Instalar Dependências**:
   ```bash
   npm install
   ```

3. **Configurar Variáveis de Ambiente**:
   Crie um arquivo `.env` e defina as variáveis, como `NODE_ENV`, `DB_HOST`, `DB_USER`, `DB_PASSWORD`, entre outras.

4. **Iniciar o Docker Compose**:
   ```bash
   docker-compose up -d
   ```

5. **Iniciar o Servidor**:
   ```bash
   npm run start:dev
   ```

6. **Acessar o Swagger para Documentação**:
   Acesse `http://localhost:3000/api` para explorar a documentação e testar os endpoints.

---

## 🎯 Contribuições
Contribuições são bem-vindas! Abra um **Pull Request** ou **Issue** para colaborar com melhorias e novas funcionalidades.

**Como Contribuir**:
1. Faça um fork do repositório.
2. Crie uma branch: `git checkout -b feature/nova-funcionalidade`.
3. Adicione seus commits e envie um Pull Request.

---

## 📞 Contato
Para dúvidas ou sugestões, entre em contato:

**Email**: ikauedeveloper@gmail.com  
**LinkedIn**: [ikauematos](https://www.linkedin.com/in/ikauematos/)  

---
