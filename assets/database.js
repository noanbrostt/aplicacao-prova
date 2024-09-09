var response;
switch (acao) {
    case 2:
        response = `[{"co_prova":1,"co_processo":null,"co_fila":1,"no_prova":"SAC_GERAL","ic_status":1,"status_prova":"Prova
        Finalizada"},{"co_prova":3,"co_processo":null,"co_fila":2,"no_prova":"HABITACAO_CLIENTES, SAC_HABITACAO OU
        CONTRATO_HABITACAO","ic_status":1,"status_prova":"Prova
        Finalizada"},{"co_prova":5,"co_processo":null,"co_fila":4,"no_prova":"COM_RENEGOCIACAO","ic_status":1,"status_prova":"Prova
        Finalizada"},{"co_prova":6,"co_processo":null,"co_fila":5,"no_prova":"CID_FGTS","ic_status":1,"status_prova":"Prova
        Finalizada"},{"co_prova":8,"co_processo":null,"co_fila":7,"no_prova":"STE_IBC","ic_status":1,"status_prova":"Prova
        Finalizada"},{"co_prova":9,"co_processo":null,"co_fila":8,"no_prova":"CID_BOLSAS E
        CID_PROGRAMAS_SOCIAIS","ic_status":1,"status_prova":"Prova
        Finalizada"},{"co_prova":10,"co_processo":null,"co_fila":9,"no_prova":"SAC_ COMERCIAL E
        COM_COMERCIAL_CLIENTES","ic_status":1,"status_prova":"Prova Finalizada"}]`;
        break;

    case 3:
        response = `[{"co_prova":1,"no_prova":"SAC_GERAL","co_pergunta":4,"de_pergunta":"Com relação a tabulação das chamadas no 2CX,
            selecione a opção correta para o SAC:","alternativas":"42:-DA tabulação “LIGAÇÃO FINALIZADA COM SUCESSO” deve ser
            utilizada em todas as chamadas, com exceção das ligações transferidas.;.;43:-DAs tabulações “LIGAÇÃO MUDA”, “LIGACAO
            INTERROMPIDA” e “LIGACAO COM FALHA” devem ser utilizadas em todos os atendimentos em que não foram passadas as
            informações completas para o cliente.;.;44:-DApós realizar as duas tentativas de call-back, se o cliente não atender
            deve ser utilizado a tabulação “TRASFERÊNCIA REALIZADA COM SUCESSO.;.;45:-DA tabulação “LIGAÇÃO FINALIZADA COM SUCESSO”
            deve ser usada nos casos em que todas as orientações foram passadas ou em que o cliente foi transferido. A tabulação
            “LIGAÇÃO INTERROMPIDA” deve ser usada nas situações em que não foi passado informação completa para o
            cliente."},{"co_prova":1,"no_prova":"SAC_GERAL","co_pergunta":5,"de_pergunta":"Quando o cliente tiver interesse na
            consulta deregistro do MEDPIX, qual o procedimento correto a ser seguido:","alternativas":"46:-DTransferir a ligação
            para fila SAC GOLPES E FRAUDES.;.;47:-DRealizar a consulta para a vítima independente de qual banco ela utilize, desde
            que a Caixa esteja envolvida.;.;48:-DRealizar a consulta apenas para vítimas que fizeram a transação da Caixa para outro
            banco.;.;49:-DRealizar a consulta apenas para vítimas que fizeram a transação de outro banco para
            Caixa."},{"co_prova":1,"no_prova":"SAC_GERAL","co_pergunta":7,"de_pergunta":"Veja as orientações sobre as orientações
            que devem ser passadas após realizar o cancelamento do seguro prestamistae selecione a opção CORRETA: \n \t\tI.\tA CAIXA
            VIDA E PREVIDÊNCIA poderá entrar em contato por telefone com um DDD 82, dentro de um prazo de cerca de 5(cinco) dias
            úteis. Fique atento às chamadas em seu telefone, assim como desbloquear o recebimento de telefones
            desconhecidos\n\t\tII.\tEm caso de aprovação do pedido de cancelamento, a devolução dos valores ocorrerá em até 15 dias
            úteis, podendo ocorrer por devolução em conta ou em forma de amortização (abatimento) do saldo devedor do contrato de
            empréstimo, de acordo com as condições específicas do seu contrato.\n\t\tIII.\tO contato com o resultado de seu pedido
            de cancelamento será feito pela seguradora, por telefone e por e-mail, por isso, reforçamos que desbloqueie o
            recebimento de chamadas de telefones desconhecidos e que além da caixa de entrada, confira também o lixo eletrônico e
            SPAM.\n\t\tIV.\tO pedido de cancelamento e de estorno foi feito, o cancelamento ocorrerá de forma imediato, porém o
            estorno será realizado em 15 dias úteis na conta que o cliente selecionou para pagamento das prestações do contrato de
            empréstimo.\n\t\tV.\tSerá solicitado o cancelamento e para mais detalhes sobre a solicitação, o cliente poderá entrar em
            contato com a CAIXA VIDA E PREVIDÊNCIA. Basta informar o número de protocolo fornecido","alternativas":"56:-DEstão
            corretas as opções I, II, III e V.;.;57:-DEstão corretas as opções I, III, IV e V;.;58:-DApenas as opções I e IV estão
            corretas.;.;59:-DTodas as opções estão corretas."},{"co_prova":1,"no_prova":"SAC_GERAL","co_pergunta":6,"de_pergunta":"O
            que fazer quando o cliente informar que não reconhece a transação realizada em sua
            conta?","alternativas":"51:-DTransferir para SAC COMERCIAL.;.;52:-DTransferir a ligação para SAC GOLPES E
            FRAUDES.;.;53:-DUtilizar o script “CONTAS - PROCEDIMENTO - REGISTRO DE CONTESTAÇÃO E CONSULTA EM CONTA POR FRAUDE”, que
            está na fila SAC CONTESTAÇÃO.;.;54:-DUtilizar o script “CONTAS - PROCEDIMENTO - REGISTRO DE CONTESTAÇÃO E CONSULTA EM
            CONTA POR FRAUDE”, que está na fila SAC GOLPES E
            FRAUDES."},{"co_prova":1,"no_prova":"SAC_GERAL","co_pergunta":1,"de_pergunta":"Qual procedimento deve ser seguido para
            consultar a resposta de uma reclamação?","alternativas":"38:-DConsultar apenas através do CPF do cliente, selecionando a
            opção ouvidoria ou SAC.;.;39:-DConsultar apenas através do CPF do cliente, selecionando a opção ouvidoria ou
            interna.;.;40:-DConsultar através do número do protocolo e CPF, selecionando a opção de ouvidoria ou
            interna.;.;41:-DConsultar através do número do protocolo e CPF, selecionado a opção ouvidoria ou SAC."}]`;
        break;

    default:
        break;
}