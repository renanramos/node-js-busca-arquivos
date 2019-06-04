const yargs = require('yargs')
const util = require('./util/util')

yargs.command({
    command: 'filter',
    describe: 'Filtra arquivos em diretório por tipo/extensão',
    builder:{
        pasta:{
            describe: 'Diretório onde será feita busca dos arquivos',
            demandOption: true,
            type: 'string'
        },
        extensao:{
            describe: 'Extensão do arquivo',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        util.buscaArquivos(argv, (listaDeArquivos) => {
            listaDeArquivos.forEach((arq, index) => {
                console.log(`${index} : ${arq}`)
            });
        })
    }
})

yargs.parse()