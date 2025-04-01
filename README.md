# Chamados
Uma API que deverá permitir a criação de chamados contendo o título, a categoria, a descrição, o prazo para ser solucionado, a situação, a data de criação(data atual) e a data de solução(data atual + 3 dias). Além de que cada novo chamado terá a situação de NOVO.
Uma API que deverá permitir a criação,listagem e exclusão de chamados contendo: 
    + o título(texto), 
    + a categoria(Seleção - Relação N:1), 
    + a descrição(texto), o prazo para ser solucionado(Data), 
    + a situação(Seleção - Relação N:1(Não pode ser preenchido pelo usuário e ao iniciar deve ter a situação 'NOVO' e deve poder ser alterado para 'EM ANDAMENTO' ou 'FINALIZADO'(ao finalizar a data de conclusão deve ser salva com a data atual))), 
    + a data de criação(data atual) e a data de solução(data atual + 3 dias).
Essa api deve estar no framework laravel. 
O projeto deve usar orientação a objetos.
Como banco de dados utilizarei o postgresql.
