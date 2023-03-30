const { alunos } = require("../banco/alunos.js")

///////////////////////////////////////////GET STUDENTS LIST///////////////////////////////////////////////////////////////

const getAllStudents = function(){

    let status = false

    jsonStudents= {}
   
    let arrayStudents = []
 
    alunos.forEach(alunos =>{
        arrayStudents.push(alunos.nome)
    })
    
    jsonStudents = arrayStudents

    if(jsonStudents != ''){
        status = true
        return jsonStudents
    } else{
        return status
    }
    
 

}

//console.log(getAllStudents())

getAllStudents()


///////////////////////////////////////////GET STUDENTS FOR EACH  LIST///////////////////////////////////////////////////////////////

const getStudentsForStatus = function(){

    let status = false

    jsonStudents= {}
   
    let arrayStudents = []
 
    alunos.forEach(alunos =>{
        arrayStudents.push(alunos.status)
    })
    
    jsonStudents = arrayStudents

    if(jsonStudents != ''){
        status = true
        return jsonStudents
    } else{
        return status
    }
    

}
console.log(getStudentsForStatus())

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////