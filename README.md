# PrimárIA - Documento de Requisitos do Produto

---

### 1. **Visão Geral**

**Projeto:** Desenvolvido durante o Hackathon Saúde 4.0 pelo time Glasgow composto pelos seguintes integrantes: 

- [**Jéssica Debortolo**](https://www.linkedin.com/in/jessicadebortolo/)** - Product Manager & UX/UI
- [**Davi Torres**](https://www.linkedin.com/in/torresdavi/) - Product Manager & Business viability
- [**Thais Silva**](https://www.linkedin.com/in/thais-silva-7ab630186/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app) - UX/UI
- [**Matheus Monteiro**](https://www.linkedin.com/in/dev-monteiro295/) - Fullstack Developer
- [**Kauê Matos**](https://www.linkedin.com/in/ikauematos/) - Fullstack Developer

---

**Nome do Produto:** PrimárIA

**Resumo do Produto:**

![logo](https://freckle-dry-c20.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F683ff889-697a-4646-97b5-f9452cff14ab%2F51be22a0-d4b6-4beb-be3b-7bbb97b789d8%2FUntitled.png?table=block&id=156695df-3a52-4e35-b80e-a85f67da794d&spaceId=683ff889-697a-4646-97b5-f9452cff14ab&width=330&userId=&cache=v2)

PrimárIA é um software web e mobile de atenção primária à saúde, destinado a ajudar pacientes no acompanhamento de doenças crônicas, exames, receitas, alimentação, e alertas de saúde, melhorando assim a conscientização da prevenção. Inclui uma IA integrada com banco de dados de saúde que tenha acesso ao histórico médico, responda dúvidas e forneça informações importantes sobre qual é o local correto para buscar atendimento de acordo com a gravidade e evitar filas desnecessárias, centralizando tudo em um só lugar. Além disso, será integrado com o WhatsApp através de um chatbot com IA para oferecer suporte e informações diretamente pelo aplicativo de mensagens.

---

### 2. **Objetivos do Produto**

**Facilitar o acompanhamento de doenças crônicas:** Oferecer uma plataforma para que os pacientes possam monitorar e gerenciar suas condições de saúde de forma eficaz.

- **Aumentar a adesão ao tratamento:** Alertas para vencimento de receitas e medições de glicose e pressão.
- **Educação em saúde:** Fornecer informações sobre alimentos e cuidados relevantes para doenças específicas.
- **Acessibilidade e conveniência:** Disponível no formato mobile para fácil acesso em qualquer lugar.

---

### 3. **Escopo do Projeto**

**Principais Funcionalidades:**

1. **Perfil do Paciente:**
    - Cadastro com informações pessoais e médicas.
    - Histórico de doenças e tratamentos.
2. **Gerenciamento de Doenças Crônicas:**
    - Entrada de dados sobre glicose, pressão arterial e outros indicadores de saúde.
    - Visualização de gráficos e tendências dos dados inseridos.
3. **Acompanhamento de Exames e Receitas:**
    - Registro de exames realizados e receitas médicas.
    - Alertas para vencimento de receitas e realização de novos exames.
4. **Alertas e Lembretes:**
    - Notificações para medir glicose e pressão arterial.
    - Lembretes de medicamentos e consultas médicas.
5. **Informações e Dicas de Saúde:**
    - Recomendações de alimentos e cuidados para diferentes doenças.
    - Artigos e conteúdos relevantes de saúde.
6. **IA para Dúvidas:**
    - Chatbot com inteligência artificial para responder perguntas e fornecer informações de saúde.
    - Integração com WhatsApp para suporte e informações via chatbot com IA.

---

### 4. **Requisitos Funcionais**

**Módulo de Cadastro:**

- Os pacientes devem poder se cadastrar com nome, idade, sexo, histórico médico e informações de contato.
- Autenticação via e-mail e senha.

**Módulo de Monitoramento:**

- Interface para entrada de dados diários de glicose e pressão arterial.
- Geração de gráficos para visualização de tendências.
- Capacidade de exportar dados para PDF ou Excel.

**Módulo de Exames e Receitas:**

- Entrada de informações sobre exames realizados (tipo, data, resultados).
- Registro e visualização de receitas médicas com datas de vencimento.
- Alertas automáticos para renovação de receitas.

**Módulo de Notificações:**

- Configuração de alertas personalizados para medições e medicamentos.
- Notificações push para lembretes de consultas e exames.

**Módulo de Educação em Saúde:**

- Artigos e vídeos sobre alimentação e cuidados para doenças específicas.
- Recomendações personalizadas com base nas condições de saúde do paciente.

**Módulo de IA:**

- Chatbot treinado para responder perguntas frequentes sobre saúde.
- Integração com banco de dados de saúde para fornecer informações precisas.
- Integração com WhatsApp para oferecer suporte via chatbot com IA.

---

### 5. **Requisitos Não Funcionais**

- **Usabilidade:** Interface intuitiva e fácil de usar, acessível para todas as idades.
- **Segurança:** Proteção de dados pessoais e médicos com criptografia.
- **Performance:** Resposta rápida e eficiente em todas as funcionalidades.
- **Compatibilidade:** Web First - Responsivo. Disponível para Desktop, Android e iOS.
- **Manutenibilidade:** Código modular e bem documentado para facilitar atualizações futuras.

---

### 6. **Cronograma**

**Fase 1: Planejamento e Design** 

- Pesquisa e definição de requisitos.
- Criação de wireframes e design da interface.

**Fase 2: Desenvolvimento**

- Implementação do backend e frontend.
- Integração dos módulos e funcionalidades.

**Fase 3: Testes e Validação** 

- Testes unitários e de integração.
- Beta testing com usuários selecionados.

**Fase 4: Lançamento e Monitoramento**

- Lançamento oficial nas lojas de aplicativos.
- Monitoramento de desempenho e feedback dos usuários.

---

### 7. **Stakeholders**

- **Usuários Finais:** Pacientes com doenças crônicas.
- **Médicos e Profissionais de Saúde:** Para fornecer feedback e garantir a precisão das informações.
- **Equipe de Desenvolvimento:** Desenvolvedores backend, frontend e IA.
- **Gerente de Produto:** Responsável pela coordenação e execução do projeto.
- **Designers UX/UI:** Para garantir uma experiência de usuário intuitiva e eficiente.

---

### 8. **Métricas de Sucesso**

- **Adoção e Engajamento:** Número de downloads e usuários ativos mensalmente.
- **Satisfação do Usuário:** Feedback e avaliações nas lojas de aplicativos.
- **Eficiência no Monitoramento:** Redução de consultas de emergência devido à melhor gestão das doenças crônicas.
- **Retenção:** Taxa de retenção de usuários após 3 e 6 meses.

---

### 9. **Riscos e Mitigações**

- **Baixa Adoção:** Investir em campanhas de marketing e parcerias com clínicas e hospitais.
- **Problemas de Segurança:** Implementar rigorosos protocolos de segurança e auditorias regulares.
- **Feedback Negativo:** Estabelecer canais de comunicação para resolver problemas rapidamente e implementar melhorias contínuas.

---

### 10. **Jornada do Usuário**

**Etapas da Jornada:**

1. **Acorda às 7:30**
    - Toma café da manhã e seu remédio para controlar a hipertensão.
    - Vai ao trabalho.
2. **Após o Almoço**
    - Sente um mal-estar e decide ir ao hospital aferir sua pressão.
    - Fica impaciente por esperar 30 minutos na triagem, devido a pacientes com fraturas.
3. **Atendimento no Hospital**
    - Aferição da pressão mostra alteração, espera mais 40 minutos para ser atendida pela médica.
    - Médica sugere substituição do medicamento e orienta procurar uma UBS para acompanhamento.
4. **No Dia Seguinte**
    - Acorda, toma café e o novo remédio.
    - Vai à UBS aferir a pressão e relata o ocorrido.
    - É informada que poderia ter enviado mensagem para a Agente Comunitária de Saúde para esclarecer dúvidas.
5. **Desde Então**
    - Consulta a assistente virtual para dúvidas sobre saúde, medicamentos e agendamentos de exames.

---

### 10. **Validação de Ideias e Hipóteses**

Realizamos pesquisas abrangentes para validar nossas ideias e hipóteses. Durante essa fase, foram conduzidas entrevistas com potenciais usuários e especialistas em saúde, além de questionários distribuídos a um público-alvo selecionado. Os principais insights obtidos foram:

- **Necessidade de Monitoramento Contínuo:** Muitos pacientes expressaram a necessidade de uma ferramenta que os ajudasse a acompanhar suas condições crônicas de forma contínua e integrada.

![grafico](https://freckle-dry-c20.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F683ff889-697a-4646-97b5-f9452cff14ab%2Fe08b93e4-902c-4966-b78d-54380795ec80%2FUntitled.png?table=block&id=17041622-17b1-40cd-a0ba-0de3cae376dd&spaceId=683ff889-697a-4646-97b5-f9452cff14ab&width=2000&userId=&cache=v2)

- **Importância dos Alertas:** A maioria dos entrevistados destacou a importância de receber alertas e lembretes para a tomada de medicamentos e realização de exames.

![grafico](https://freckle-dry-c20.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F683ff889-697a-4646-97b5-f9452cff14ab%2Fb6835a68-df1a-4096-a7d9-9fe66d43bad9%2Fddd9ecda-8fc7-4977-b3ba-2466d54d081f.png?table=block&id=557590c6-2f01-4ee8-a01c-a53f9876be88&spaceId=683ff889-697a-4646-97b5-f9452cff14ab&width=960&userId=&cache=v2)

- **Preferência por Informações Confiáveis:** Houve uma forte preferência por um sistema que fornecesse informações confiáveis sobre saúde, dietas e medicamentos.

![grafico](https://freckle-dry-c20.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F683ff889-697a-4646-97b5-f9452cff14ab%2Fca856eca-e9cd-4ab5-a85f-80b400d81bc4%2Ff52de7b4-52a1-4190-8e2f-81b8eddf1a5a.png?table=block&id=011bef39-688e-49b5-ad23-3f85f6779cb8&spaceId=683ff889-697a-4646-97b5-f9452cff14ab&width=960&userId=&cache=v2)

- **Interesse em Assistente Virtual:** O interesse em um assistente virtual capaz de esclarecer dúvidas de saúde foi alto, com muitos afirmando que isso aumentaria a confiança no uso do aplicativo.
    
    ![grafico](https://freckle-dry-c20.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F683ff889-697a-4646-97b5-f9452cff14ab%2F43da19ff-9c3a-4cfd-b2a3-e75b39ba6d90%2F45baf140-4dba-49ad-b05a-81ddd77f2c3a.png?table=block&id=5487f56e-b04a-4541-bb16-f12460c96d0b&spaceId=683ff889-697a-4646-97b5-f9452cff14ab&width=1050&userId=&cache=v2)
    

*Esses insights foram cruciais para o desenvolvimento das funcionalidades e melhorias do PrimárIA, assegurando que o produto final atenda às reais necessidades dos usuários.*

---

### **11. Benefícios do Sistema**

- Conhecimento e cuidado com a saúde evitam visitas desnecessárias ao hospital, diminuindo assim o tempo de espera para quem realmente precisa do serviço com urgência.
- Sistema integrado facilita o acompanhamento contínuo da saúde.
- Assistente virtual previne complicações, auxilia em dúvidas, orienta o usuário, melhorando assim a qualidade de vida.
