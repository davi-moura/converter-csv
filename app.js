var Reader = require("./Reader")
var Processor = require("./Processor")
var Table = require("./Table")

var leitor = new Reader()


async function main(){
    var dados = await leitor.Read("")
    var dadosProcessados = Processor.Process(dados)

    var lista = new Table(dadosProcessados)

}


main()