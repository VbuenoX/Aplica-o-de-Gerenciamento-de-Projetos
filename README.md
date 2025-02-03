````markdown
# Documentação da API - Gerenciamento de Projetos

Esta API permite criar e gerenciar projetos e suas respectivas tarefas. A seguir, a descrição dos endpoints disponíveis, incluindo exemplos de requisições e respostas.

## Base URL

```
http://localhost:3001/api
```

> **Observação:** Durante o desenvolvimento, o servidor roda na porta `3001` (ou conforme configurado em `.env`).

---

## Endpoints

### Projetos

#### 1. Criar um Projeto

- **Endpoint:** `POST /api/projetos`
- **Descrição:** Cria um novo projeto.
- **Corpo da Requisição (JSON):**

  ```json
  {
    "nome": "Projeto Exemplo",
    "descricao": "Descrição do projeto",
    "dataInicio": "2025-02-01"
  }
  ```

- **Resposta de Sucesso (201 - Created):**

  ```json
  {
    "id": 1,
    "nome": "Projeto Exemplo",
    "descricao": "Descrição do projeto",
    "dataInicio": "2025-02-01T00:00:00.000Z"
  }
  ```

#### 2. Listar Todos os Projetos

- **Endpoint:** `GET /api/projetos`
- **Descrição:** Retorna uma lista com todos os projetos cadastrados.
- **Resposta de Sucesso (200 - OK):**

  ```json
  [
    {
      "id": 1,
      "nome": "Projeto Exemplo",
      "descricao": "Descrição do projeto",
      "dataInicio": "2025-02-01T00:00:00.000Z"
    },
    {
      "id": 2,
      "nome": "Outro Projeto",
      "descricao": "Outra descrição",
      "dataInicio": "2025-03-15T00:00:00.000Z"
    }
  ]
  ```

---

### Tarefas

#### 1. Criar uma Tarefa

- **Endpoint:** `POST /api/tarefas`
- **Descrição:** Cria uma nova tarefa associada a um projeto.
- **Corpo da Requisição (JSON):**

  ```json
  {
    "projetoId": 1,
    "titulo": "Tarefa Exemplo",
    "descricao": "Descrição da tarefa",
    "dataConclusao": "2025-02-10"
  }
  ```

- **Resposta de Sucesso (201 - Created):**

  ```json
  {
    "id": 1,
    "titulo": "Tarefa Exemplo",
    "descricao": "Descrição da tarefa",
    "dataConclusao": "2025-02-10T00:00:00.000Z",
    "concluida": false,
    "projetoId": 1
  }
  ```

#### 2. Listar Tarefas de um Projeto

- **Endpoint:** `GET /api/tarefas/:projetoId`
- **Descrição:** Retorna todas as tarefas associadas a um projeto específico.
- **Parâmetro de URL:**
  - `projetoId` (número) - ID do projeto.
- **Exemplo de URL:** `GET /api/tarefas/1`
- **Resposta de Sucesso (200 - OK):**

  ```json
  [
    {
      "id": 1,
      "titulo": "Tarefa Exemplo",
      "descricao": "Descrição da tarefa",
      "dataConclusao": "2025-02-10T00:00:00.000Z",
      "concluida": false,
      "projetoId": 1
    }
  ]
  ```

#### 3. Marcar uma Tarefa como Concluída

- **Endpoint:** `PATCH /api/tarefas/:id/concluir`
- **Descrição:** Marca a tarefa identificada por `id` como concluída.
- **Parâmetro de URL:**
  - `id` (número) - ID da tarefa.
- **Exemplo de URL:** `PATCH /api/tarefas/1/concluir`
- **Resposta de Sucesso (200 - OK):**

  ```json
  {
    "message": "Tarefa concluída!"
  }
  ```

#### 4. Excluir uma Tarefa

- **Endpoint:** `DELETE /api/tarefas/:id`
- **Descrição:** Exclui a tarefa identificada por `id`.
- **Parâmetro de URL:**
  - `id` (número) - ID da tarefa.
- **Exemplo de URL:** `DELETE /api/tarefas/1`
- **Resposta de Sucesso (200 - OK):**

  ```json
  {
    "message": "Tarefa excluída com sucesso!"
  }
  ```

---

## Considerações Gerais

- **Formato de Datas:**  
  As datas são enviadas e retornadas no padrão ISO 8601 (`YYYY-MM-DDTHH:MM:SS.sssZ`).

- **Tratamento de Erros:**  
  Em caso de erro (por exemplo, projeto não encontrado ou dados incompletos), a API retornará um objeto JSON com a propriedade `error` e o status HTTP correspondente (como 404 ou 500).

- **CORS:**  
  Se estiver integrando com um frontend que roda em outra origem, certifique-se de que o middleware de CORS está configurado no backend.

---

## Exemplos de Uso com cURL

### Criar um Projeto

```bash
curl -X POST http://localhost:3000/api/projetos \
  -H "Content-Type: application/json" \
  -d '{
        "nome": "Projeto Exemplo",
        "descricao": "Descrição do projeto",
        "dataInicio": "2025-02-01"
      }'
```

### Listar Projetos

```bash
curl http://localhost:3000/api/projetos
```

### Criar uma Tarefa

```bash
curl -X POST http://localhost:3000/api/tarefas \
  -H "Content-Type: application/json" \
  -d '{
        "projetoId": 1,
        "titulo": "Tarefa Exemplo",
        "descricao": "Descrição da tarefa",
        "dataConclusao": "2025-02-10"
      }'
```

### Listar Tarefas de um Projeto

```bash
curl http://localhost:3000/api/tarefas/1
```

### Marcar uma Tarefa como Concluída

```bash
curl -X PATCH http://localhost:3000/api/tarefas/1/concluir
```

### Excluir uma Tarefa

```bash
curl -X DELETE http://localhost:3000/api/tarefas/1
```

---
