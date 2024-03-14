# TI_360_Form_Aut
## Automação de formulário utilizando Cypress

Este é um projeto básico em Cypress para demonstrar como escrever testes de automação simples capturando elementos dentro de um formulário e automatizando todo processo de preenchimento e seleção, mapeando cenarios de testes possiveis para testes de regressão

Realizei automação desse formulário, que foi feito com html/Css e javaScript para fins te pratica de testes automatizados,e ajudar novas pessoas que desejem praticar automação, realizei o deploy assim facilitando os testes.

**fomulário (deploy)**: https://ti360form.netlify.app

**repositório**: https://github.com/edugitQA/Formulario_Ti360


## Pré-requisitos
- Python versão mais recente
- Visual Studio Code: Editor de código-fonte.
- Node.js instalado (versão 12 ou superior)
- Cypress instalado globalmente ou localmente no projeto

## Instalação

1. Clone este repositório: `git clone https://github.com/edugitQA/TI_360_Form_Aut.git
2. Acesse o diretório do projeto: `cd meu-projeto-cypress`
3. instale a biblioteca do selenium `npm install selenium-webdriver`
4. Caso não tenha instale o cypress `npm install cypress`
3. Instale as dependências do projeto: `npm install`

## Executando os Testes

Para executar os testes, você pode usar o Cypress Test Runner ou executá-los em modo headless.

### Test Runner

1. Abra o Cypress Test Runner: `npx cypress open`
2. Clique no arquivo de teste que deseja executar.

### Modo Headless

Para executar os testes em modo headless (sem interface gráfica):

```bash
npx cypress run
