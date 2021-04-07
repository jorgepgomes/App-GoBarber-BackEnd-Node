### 04 - INICIANDO BACK END

# INICIAR O BANCO DE DADOS NO DOCKER

$ docker start 2ca948c0f0dc
$ docker start mongodb
$ docker start redis

# EXECUTAR APLICAÇÃO

$ yarn dev:server

# Arquitetura:

- src
  - config
  - database
  - errors
  - middlewares
  - models
  - repositories
  - routes
  - services

Dominio: Qual a área de conhecimento daquele módulo/arquivo

DDD: Domain Driven Design (metodologia) -> BackEnd
TDD: Test Driven Development (metodolgia) -> BackEnd and FrontEnd

# Cache

Redis

TABELA

chave e valor

# Testes automatizados

$ yarn add jest -D

Que a nossa aplicacao continue funcionando idependente do numero de novas funcionalidades e do numero de devs no time.

1. Testes unitários (TDD)

Testam funcionalidades especificas da nossa aplicacao (precisam ser funcoes puras)

JAMAIS: Chama a uma API e efeito colateral.

2. Testes de integracao

Testam uma funcionalidade completa, passando por várias camadas da aplicacao.

Route -> Controller -> Servico -> Repositório -> ...

3. Testes E2E

Testes que simulam a acao do usuário dentro da nossa aplicacao.

1. Clique no input de email
2. Preencha diego@rocketseat.com.br
3. Clique no input de senha
4. Preencha 123456
5. Clique no botao "Logar"
6. Espero que a pagina tenha enviado o usuario para o dashboard

# TDD (Test Driven Development)

- Quando ele se cadastrar na aplicacao, ele deve receber um e-mail de boas-vindas;

## FUNCIONALIDADES

# Recuperacao de senha

**RF**

- O usuário deve poder recuperar sua senha informando seu e-mail
- O usuário deve receber um e-mail com instrucoes de recuperacao de senha;
- O usuário deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de dev;
- Utilizar Amazon SES para envios em producao;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuário precisa confirmr a nova senha ao resetar sua senha;

# Atualizacao do perfil

**RF**

- O usuário deve atualizar seu nome, email e senha;

**RN**

- O usuário nao pode alterar seu email para um email ja utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do Prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia especifico;
- O prestador deve receber uma notificacao sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificacoes nao lidas;

**RNF**

- Os agendamentos do prestador do dia devem ser armazenados em cache;
- As notificacoes do prestador devem ser armazenadas no MongoDB;
- As notificacoes do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificacao deve ter um status de lida ou nao-lida para que prestador possa controlar;

# Agendamento de servicos

**RF**

- O usuário deve poder listar todos prestadores de servico caddastrados;
- O usuário deve poder listar os dias de um mes com pelo um horário disponivel de um prestador;
- O usuário deve poder listar horários disponivel em um dia especifico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponiveis entre 8h as 18 (Primeiro as 8h, ultimo as 17h);
- O usuário nao pode agendar em um horário ja ocupado;
- O usuário nao pode agendar em um horario que ja passou;
- O usuário nao pode agendar servicoes consigo mesmo;
