
# API em Python utilizando framework Flask

Este é um projeto que implementa uma API para calcular o quadrado de um número.

# Funcionalidades

 - Envia um número via requisição POST para o endpoint /square.
 - Retorna o resultado do número elevado ao quadrado em formato JSON.

# Instalação

Primeiro, crie um ambiente virtual Python, se ainda não tiver sido criado, e instale as dependências do projeto executando o seguinte comando:
```bash
    pip install -r requirements.txt
```

# Executando

Para executar este projeto, execute o seguinte comando:
```bash
    python app.py
```

A aplicação será executada na porta 5000

# Testes

Para executar o teste unitário do backend, execute o seguinte comando:

```bash
    python test_app.py
```

# Docker
Se preferir utilizar um container Docker, já está configurado um container no arquivo docker-compose.yml. 
Para iniciá-lo, retorne para o diretório anterior e execute o seguinte comando:

```bash
    docker-compose up -d
```