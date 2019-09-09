#language: pt

Funcionalidade: Login no sistema CRM

    @login
    Cenário: Logar com usuário e senha corretos
        Dado Estou na tela de login do CRM
        Quando Realizar login com usuário e senha corretos
        Então Devo visualizar a tela para consulta de cliente

    @login
    Cenário: Logar com usuário correto e senha incorreta
        Dado Estou na tela de login do CRM
        Quando Realizar login com usuário correto e senha incorreta
        Então Devo visualizar a mensagem com o feedback de usuario e senha invalidos