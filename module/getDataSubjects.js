/////////////////////////////////////////IMPORTS///////////////////////////////////////////////////////////////////////////

const { cursos } = require("../banco/cursos.js")

///////////////////////////////////////////GET SUBJECTS LIST///////////////////////////////////////////////////////////////

const getAllSubjects = function(){

    jsonSubjects = {}
   
    let arraySubjects = []
 
    cursos.forEach(nome =>{
        arraySubjects.push(nome.nome)
    })
    
    jsonSubjects = arraySubjects

    return jsonSubjects
 
}
console.log(getAllSubjects())

module.exports ={
    getAllSubjects
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//cursos[0].nome