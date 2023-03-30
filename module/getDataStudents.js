const { alunos } = require("../banco/alunos.js")

///////////////////////////////////////////GET STUDENTS LIST///////////////////////////////////////////////////////////////

const getAllStudents = function(){

    jsonStudents= {}
   
    let arrayStudents = []
 
    alunos.forEach(alunos =>{
        arrayStudents.push(alunos.nome)
    })
    
    jsonStudents = arrayStudents
    return jsonStudents
 

}

getAllStudents()

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//console.log(alunos[0].nome)