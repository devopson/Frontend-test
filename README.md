A solução se baseia em gerenciar o 'body' do documento HTML com a diretiva do AngularJS. Dentro do arquivo app.js existe o controller 'heroListCtrl' que controla os bindings, os filtros, a renderização dos componentes dinâmicos e chamada à API da MARVEL.

Foi usada a biblioteca Materialize para aplicar estilos. Como não a mesma não foi extendida, não foi usado SASS, somente a inclusão da biblioteca CSS e JS via CDN.

Para completo funcionamento, no arquivo app.js é necesário informar as chaves pública e privada da API, basta colocar os valores nas variáveis $scope.pukey (Pública) e $scope.prkey (Privada).

A chamada da API solicita os primeiros 50 heróis da lista. Por única chamada o limite é 100, mas para fins de melhor performance foi restringido à 50. E sobre essa lista os filtros por nome e ano de modificação podem ser feitos. A lista informa um avatar com a imagem do herói, o nome e a data da ultima modificação.
