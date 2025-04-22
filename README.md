Atividade Prática Avançada II: API REST Completa com Node.js, Validações, Camada de Serviço e Filtros

Objetivo:
Desenvolver uma API REST robusta para gerenciamento de tarefas com múltiplas funcionalidades, aplicando os princípios de modularização, validação, organização em camadas (MVC simplificado), tratamento de erros e uso de filtros por query parameters e path parameters.

Etapas da Atividade

1. Configuração Inicial
- Instalar o Node.js e verificar a instalação.
- Criar a pasta do projeto e inicializar com npm init -y.

2. Instalação de Pacotes
- Instalar os seguintes pacotes:
  - express: framework principal.
  - uuid: geração de identificadores únicos.
  - joi: validação de dados.
  - morgan (opcional): para log de requisições.

3. Estrutura Avançada do Projeto
Organizar o projeto com as seguintes pastas e arquivos:

api-tarefas/
├── src/
│   ├── controllers/
│   │   └── tarefasController.js
│   ├── routes/
│   │   └── tarefasRoutes.js
│   ├── services/
│   │   └── tarefasService.js
│   ├── middlewares/
│   │   └── validateTarefa.js
│   ├── utils/
│   │   └── logger.js
│   ├── database/
│   │   └── fakeDb.js
│   └── app.js
├── package.json

4. Implementação da API REST

Módulo de Validação (Middleware)
- Validar os campos obrigatórios: titulo, descricao, concluida.
- Impedir que tarefas com menos de 3 caracteres no título sejam aceitas.

Módulo de Serviço (Service Layer)
- Implementar a lógica de negócio:
  - Adicionar tarefa.
  - Atualizar tarefa.
  - Listar tarefas (com e sem filtros).
  - Deletar tarefa.
  - Marcar tarefa como concluída (rota exclusiva).

Módulo de Controlador (Controller)
- Responsável por orquestrar os serviços e formatar as respostas HTTP (status, mensagens, dados).

Rotas RESTful
- GET /tarefas: lista todas as tarefas.
- GET /tarefas?concluida=true: retorna apenas tarefas concluídas.
- GET /tarefas/:id: retorna uma tarefa específica.
- POST /tarefas: cria uma nova tarefa.
- PUT /tarefas/:id: atualiza todos os campos da tarefa.
- PATCH /tarefas/:id/concluir: atualiza apenas o campo concluida para true.
- DELETE /tarefas/:id: remove a tarefa da lista.

Módulo de Logs
- Criar um utilitário simples que registre no console as ações do sistema, como:
  - “Tarefa criada com sucesso.”
  - “Tentativa de criação com dados inválidos.”
  - “Tarefa deletada.”

5. Recursos Avançados Adicionais
- Criar um módulo fakeDb.js que simula um banco de dados em memória (usando arrays).
- Tratar todos os erros com mensagens claras, status HTTP adequados e respostas padronizadas.
- Criar um README.md no projeto explicando como executar o sistema e quais endpoints estão disponíveis.


Observação Final
O aluno deverá gravar um vídeo demonstrando toda a aplicação em funcionamento, incluindo:
- A execução no terminal.
- Os testes com Postman ou Insomnia.
- A explicação de como o código está estruturado.
- A validação e tratamento de erros.
- Os filtros aplicados via query e path.
