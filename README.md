# Template GULP para Projetos

Este repositório contém um template GULP para automatização de tarefas em projetos web. O GULP é uma ferramenta que simplifica a concatenação, minificação e outras tarefas comuns no desenvolvimento web.

## Recursos e Funcionalidades

- Concatenação de arquivos CSS em um único arquivo (main.css) para estilos do projeto e (plugins.css) para estilos de bibliotecas externas.
- Concatenação de arquivos JS em um único arquivo (all.js) para scripts do projeto e (plugins.js) para scripts de bibliotecas externas.
- Minificação de arquivos CSS e JS usando gulp-uglify.
- Adição automática de prefixes CSS usando autoprefixer.
- Integração do Browsersync para atualização automática do navegador em mudanças nos arquivos (HTML, CSS, SCSS e JS).
- Utilização do gulp-babel para tornar o JavaScript compatível com navegadores mais antigos.

## Como Usar

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Clone este repositório para a sua máquina local.
3. Abra o terminal e navegue até o diretório do projeto.
4. Execute o seguinte comando para instalar as dependências:

yarn

5. Após a instalação das dependências, digite o seguinte comando para iniciar o GULP:

gulp

Isso iniciará o processo de automatização de tarefas. O GULP irá concatenar, minificar e realizar outras tarefas configuradas conforme &nbsp;&nbsp;&nbsp;&nbsp;necessário.
