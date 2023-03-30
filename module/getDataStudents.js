const { stat } = require("fs")
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


///////////////////////////////////////////GET ALL STUDENTS STATUS ///////////////////////////////////////////////////////////////

const getStudentsForStatus = function(a){

   let status = false 

    let arrayStudents = []
 
    alunos.forEach(alunos =>{

        arrayStudents.push(alunos.status)
    })
    
   arrayStudents


   if(a == 'Cursando'){

    const result = arrayStudents.filter(arrayStudents => arrayStudents == 'Cursando' );
    
    let jsonCursando = {}
    jsonCursando = result

    status = true

    return jsonCursando
    
   }
   else if (a == 'Finalizado' ){

    const result = arrayStudents.filter(arrayStudents => arrayStudents == 'Finalizado' );
    
    let jsonCursando = {}
    jsonCursando = result

    status = true

    return jsonCursando

   }
   else {
    return status
   }




}
console.log(getStudentsForStatus('Finalizado'))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////