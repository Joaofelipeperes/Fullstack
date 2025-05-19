# Projeto Spring Boot - API de Calendários

Grupo:
- Philippe Augusto Monteiro Silva
- Joao Felipe Peres Lima
- Andressa Almeida dos Santos
- Rilbert 

Este é um projeto backend desenvolvido com **Spring Boot**, que expõe uma API REST para gerenciar entidades do tipo `Calendario`. Ele fornece endpoints para operações básicas de **CRUD** (Create, Read, Update, Delete).

## 🚀 Tecnologias Utilizadas

- Java 17+
- Spring Boot
- Spring Web
- Spring Data JPA
- Banco de dados (H2, PostgreSQL, MySQL ou outro de sua escolha)
- Maven ou Gradle

## 📁 Estrutura do Projeto
```
src/
├── main/
│ ├── java/
│ │ └── com.fullstack.projeto/
│ │ ├── controller/
│ │ │ └── CalendarioResources.java
│ │ ├── model/
│ │ │ └── Calendario.java
│ │ └── repository/
│ │ └── CalendarioRepository.java
│ └── resources/
│ └── application.properties
```

## 📌 Endpoints da API

| Método | Rota               | Descrição                          |
|--------|--------------------|------------------------------------|
| GET    | `/calendarios`     | Lista todos os calendários         |
| GET    | `/calendarios/{id}`| Busca um calendário por ID         |
| POST   | `/calendarios`     | Cria um novo calendário            |
| PUT    | `/calendarios/{id}`| Atualiza um calendário existente   |
| DELETE | `/calendarios/{id}`| Remove um calendário por ID        |
| GET    | `/calendarios/welcome` | Mensagem de boas-vindas       |

## 📦 Como Executar

### 1. Clone o repositório:

```bash
git clone https://github.com/Joaofelipeperes/Fullstack.git
cd Fullstack
```

### 2. Configure o banco de dados no "application.properties"

Exemplo de configuração:

```
spring.datasource.url=jdbc:postgresql://localhost:5432/dev_full_stack
spring.datasource.username=postgres
spring.datasource.password=aula321
spring.datasource.driver-class-name=org.postgresql.Driver
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
```

### 3. Compile e execute o projeto:
```bash
mvn spring-boot:run
```

### 4. Acesse a API em: http://localhost:8080/calendarios

### 5. Exemplo de JSON para POST
```
{
  "nome": "Calendário Acadêmico 2025",
  "descricao": "Período letivo do primeiro semestre",
  "dataInicio": "2025-02-01",
  "dataFim": "2025-06-30"
}
```

## Testando a API

Você pode testar a API utilizando ferramentas como:

- Postman
- Insomnia
- Curl
- Swagger (se configurado)
