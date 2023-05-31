# projeto17-shortly

O Shortly é um sistema encurtador de URLs desenvolvido utilizando Node.js, Express e PostgreSQL. Ele foi criado para resolver o problema de compartilhar URLs longas e complexas, tornando mais fácil e conveniente compartilhar links com amigos.

## Problema
Passar uma URL gigante de um meme, vídeo ou qualquer outra coisa na internet para um(a) amigo(a) pode ser uma situação embaraçosa. Além disso, a pessoa que recebe o link muitas vezes precisa escrever o link caractere por caractere, o que é uma tarefa tediosa e propensa a erros.

## Solução
O Shortly é a solução para esse problema! Com ele, você pode encurtar URLs longas em links curtos e fáceis de compartilhar. Basta fornecer a URL original e o Shortly gerará um link curto exclusivo que direciona para a página desejada.

## Funcionalidades
O Shortly possui as seguintes funcionalidades:

- Encurtamento de URLs longas em links curtos e amigáveis.
- Redirecionamento automático de links curtos para a URL original.
- Estatísticas de acesso aos links encurtados, incluindo número de cliques, data e hora.
- Personalização de links curtos para uma melhor identificação.
- Interface amigável e responsiva para uma experiência de usuário agradável.


## Estrutura do projeto
-O projeto foi desenvolvido seguindo a arquitetura de routes, controllers e middlewares, além de adotar o padrão Repository. A estrutura do projeto é organizada de forma modular e escalável, facilitando a manutenção e o desenvolvimento contínuo.

O front-end do Shortly está disponível no seguinte repositório: <a href="https://github.com/gabriel-victor933/projeto17-shortly-front">Shortly Front-end</a>.

## Tecnologias utilizadas
O Shortly utiliza as seguintes tecnologias:

- Node.js: plataforma de desenvolvimento JavaScript do lado do servidor.
- Express: framework web rápido e flexível para Node.js.
- PostgreSQL: sistema de gerenciamento de banco de dados relacional.

## Configuração do ambiente
Para configurar o ambiente de desenvolvimento do Shortly, siga as etapas abaixo:
1. Clone o repositório do projeto:
`git clone https://github.com/seu-usuario/projeto-shortly-backend.git`

2. Instale as dependências do projeto:
`cd projeto-shortly-backend
npm install`

3. Configure as variáveis de ambiente. Conecte o banco de dados local ao servidor criando uma variável de ambiente chamana DATA_BASE_URL.
`DATA_BASE_URL = postgresql://nomedousuario:senha@localhost5432/nomedb`

4. Inicie o servidor local:
`npm start`

5. O Shortly estará disponível em http://localhost:5000.
