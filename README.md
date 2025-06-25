# SOCC - Sistema de Organização e Controle de Calendário

Este projeto é um sistema web para gerenciamento de calendários acadêmicos, permitindo criar, editar e excluir eventos por semestre letivo. Ele é dividido em duas partes principais: **Backend** (Java + Spring) e **Frontend** (Vite + React).

---

## 🧱 Estrutura do Projeto

```bash
.
├── Backend/                # Aplicação backend Java com Maven
│   ├── src/               # Código-fonte principal e testes
│   ├── target/            # Artefatos gerados pelo Maven
│   ├── pom.xml            # Gerenciador de dependências Maven
│   └── README.md          # (Opcional) instruções específicas do backend
│
├── Frontend/              # Aplicação frontend com Vite + React
│   └── socc-front/
│       ├── public/        # Arquivos estáticos
│       ├── src/           # Código-fonte React
│       ├── index.html     # Página HTML principal
│       ├── vite.config.js # Configurações do Vite
│       └── package*.json  # Dependências do projeto
│
└── 
````

---

## 🚀 Tecnologias Utilizadas

### Backend

* Java 17+
* Spring Framework (presumido)
* Maven

### Frontend

* React 18+
* Vite
* TailwindCSS ou CSS Modules (dependendo da escolha no projeto)
* Axios (presumido para chamadas API)

---

## 🔧 Como rodar o projeto

### 📦 Backend

> Requisitos: Java 17+, Maven

```bash
cd Backend
mvn clean install
mvn spring-boot:run
```

A aplicação backend estará disponível em `http://localhost:8080`.

---

### 🌐 Frontend

> Requisitos: Node.js 18+

```bash
cd Frontend/socc-front
npm install
npm run dev
```

A aplicação frontend estará disponível em `http://localhost:5173`.

---
## 📆 Funcionalidades
* Visualizar calendário acadêmico por semestre
* Criar, editar e excluir eventos do calendário
* Integração com backend via API REST
* Interface limpa e responsiva
---

## 🛠️ Em desenvolvimento

* Autenticação de usuários
* Filtros e ordenações avançadas no calendário
---

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

---

## 📄 Licença

Este projeto está licenciado sob a licença MIT.
