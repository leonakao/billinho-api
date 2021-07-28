# Billinho API

O Projeto consiste no desenvolvimento de uma API para cadastro e consulta de alunos, assim como suas matrículas e mensalidades.

Princípios/Técnicas/Conceitos utilizados:
- Clean Code
- SOLID
- Design Patterns
- Keep It Simple, Stupid (KISS)
- Don't Repeat Yourself (DRY)

Tecnologias/Ferramentas utilizadas:
- NodeJs
- NestJs
- Typescript
- TypeORM
- Swagger

## Instruções

O projeto foi desenvolvido com a utilização do Docker, junto ao Kool.

O [Kool](https://kool.dev) é uma ferramenta utlizada para simplificação do uso do Docker e padronização do ambiente de desenvolvimento frente a vários projetos e diferentes desenvolvedores. É recomendável a instalação do mesmo para execução do projeto, porém ela não é obrigatória.

### Criação e Configurações Iniciais

#### Clonando o Projeto

1. `git clone git@github.com:leonakaodev/billinho-api.git` - Clona o projeto para o seu computador
2. `cd billinho-api` - Acessa o diretório recém criado do projeto

#### Configurando o projeto

**Usando Kool:**

1. `kool run setup`

**Apenas Docker:**

1. `cp .env.example .env` - Copia as variáveis de ambiente.
2. `docker-compose up --build -d` - Inicializa os containers em background
3. `docker exec billinho-api_app_1 yarn` - Instala as dependências via yarn
4. `docker exec billinho-api_app_1 yarn typeorm migration:run` - Executa as migrations do TypeOrm

*Note:* "billinho-api_app_1" é o nome do container que está rodando o app, em caso de erros, verifique se ele está correto.

#### Inicializações Futuras

**Usando Kool:**

1. `kool start`

**Apenas Docker:**

1. `docker-compose up --build -d`

## Aplicação e Considerações

### Rotas

Foi utilizado o swagger para documentar as rotas da aplicação, verifique: `http://localhost:3000/api`

### Arquitetura

O projeto atualmente consiste em uma arquitetura monolítica, aonde o Client acessa a API e posteriormente a API acessa o banco de dados. Essa única aplicação é responsável pelo cadastro dos alunos e das matrículas, ficando responsável também por gerar as mensalidades.

Visto que as matrículas não tem qualquer interação direta com os Alunos, é possível esta API em dois serviços distintos. Um para cadastro dos alunos e outro para criação das matrículas e mensalidades. Podendo ambos utilizarem o mesmo banco de dados, ou não.

### Modelagem de Banco

![image](https://user-images.githubusercontent.com/49794183/127354119-e90f4896-aa76-4de1-844e-ebc039f9a065.png)

### Diretórios

Aleḿ dos diretórios padrões seguridos pelo Laravel, foram criados mais 3 diretórios para organizar e separar as funcionalidades dentro do projeto:

1. **Repositories** - Responsáveis por intermediar a relação entre a aplicação e o acesso/modificação do banco de dados
2. **Services** - Responsáveis por gerenciar as regras de negócios, utilizar os repositórios e são consumidos pelos controllers.
3. **Utils** - Códigos mais simples que podem ser utilizados em diferentes locais da aplicação para realizar uma ação específica.
4. **Rules** - Regras de validação customizadas, são utilizados durante a validação da requisição da API.

## Testes

A fim de garantir as restrições especificadas para o projeto, a respeito das mensalidades geradas automaticamente, foram criados alguns testes:

### Rodar

```bash
# Using kool
kool run yarn test

# Using only docker
docker exec billinho-api_app_1 yarn test
```

![image](https://user-images.githubusercontent.com/49794183/127355127-f34cd79d-cb24-4425-b1f1-4dbc6ee0203e.png)

## Demonstrações

Seguem em anexo algumas imagens demonstrando o funcionamento da aplicação:

### Alunos

#### Criação

![image](https://user-images.githubusercontent.com/49794183/127356860-f2bf6dcd-69b7-44ca-8e7f-fa1e93e42b52.png)

#### Listagem

![image](https://user-images.githubusercontent.com/49794183/127356937-9e8a544c-5ff4-49b4-b245-e3e716fd75e6.png)

### Matrículas

#### Criação

![image](https://user-images.githubusercontent.com/49794183/127357093-736c6d98-98e9-4fec-a015-dcca4039b847.png)

#### Listagem

![image](https://user-images.githubusercontent.com/49794183/127357337-4828522f-832d-4b09-895d-e4dbde96415c.png)
