#language: pt

Funcionalidade: Busca de clientes

    @searchCustomer
    Cenário: Pesquisar cliente por CNPJ
        Dado Estou na tela de consulta de clientes do CRM
        Quando Realizar realizar de cliente por CNPJ
        Então Devo visualizar a tela de extrato do cliente pesquisado por default