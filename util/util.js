const fs = require('fs')
const path = require('path')

const _getFiles = (argv, callback) => {
    let pasta = argv.pasta;
    let extensao = argv.extensao
    let listaArquivos = []

    fs.readdir(pasta, (error, arquivos)=>{
        if(error) return console.log(error)

        arquivos.forEach((arquivo) => {
            if (path.extname(arquivo) === `.`+extensao){
                listaArquivos.push(arquivo)
            }
        });

        callback(listaArquivos)
    })
}

module.exports = {
    buscaArquivos : _getFiles
}