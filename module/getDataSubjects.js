/////////////////////////////////////////IMPORTS///////////////////////////////////////////////////////////////////////////

const { cursos } = require("../banco/cursos.js")

///////////////////////////////////////////GET SUBJECTS LIST///////////////////////////////////////////////////////////////

const getAllSubjects = function(){

    jsonSubjects = {}

    let status = false
   
    let arraySubjects = []
 
    cursos.forEach(nome =>{
        arraySubjects.push(nome.nome)
    })
    
    jsonSubjects = arraySubjects

    if(jsonSubjects != ''){
        status = true
        return jsonSubjects
    }else{
        status = false
    }

    
 
}
console.log(getAllSubjects())

module.exports ={
    getAllSubjects
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//cursos[0].nome