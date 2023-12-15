# Instruções de Instalação do Projeto

1. Instale o Visual Studio Code
    O Visual Studio Code é um editor de código gratuito e de código aberto desenvolvido pela Microsoft. Ele é um ótimo editor para desenvolvimento web e é necessário para usar o app.
    https://code.visualstudio.com/

2. Abra o código no Visual Studio Code

3. Abra o Projeto
    Para fazer isso, abra o Visual Studio Code e clique em Arquivo > Abrir. Navegue até a pasta do código do app e clique em Abrir.

4. Instale as dependências se necessário
    Verifique se tem o node e o ionic instalado na máquina com o comando:
        node -v
        ionic -v
    Se não houver baixe o node pelo site oficial:
        https://nodejs.org/en/
    Mesmo caso com o Ionic:
        https://ionicframework.com/docs/intro/cli
    Se você não encontrar as pastas node_modules e .angular, abra o terminal do Visual Studio Code (pressione Ctrl+ ou Cmd+ no macOS).
    No terminal, digite o seguinte comando:
        npm i
    Este comando instalará as dependências necessárias para o app.

5. Inicie o teste do projeto
    Para iniciar o teste do projeto, abra o terminal do Visual Studio Code e digite o seguinte comando:
        ionic serve
    O app será iniciado no seu navegador padrão.
