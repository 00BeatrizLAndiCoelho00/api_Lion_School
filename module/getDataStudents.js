
const { alunos } = require("../banco/alunos.js")

///////////////////////////////////////////GET STUDENTS LIST///////////////////////////////////////////////////////////////

const getAllStudents = function(){

    let status = false

    jsonStudents= {}
   
    let arrayStudents = []
 
    alunos.forEach(alunos =>{
        arrayStudents.push(alunos)
    })
    
    jsonStudents = arrayStudents

    if(jsonStudents != ''){
        status = true
        return jsonStudents
    } else{
        console.log("")
        return status
    }
    
}

//console.log(getAllStudents())

getAllStudents()


///////////////////////////////////////////GET ALL STUDENTS STATUS ///////////////////////////////////////////////////////////////

// const getStudentsForStatus = function(a){

//     let status = false

// if(a.toUpperCase() == "CURSANDO" || a.toLowerCase()=="cursando"){
//     a = "Cursando"
// }

// else if(a.toUpperCase()=="FINALIZADO" || a.toUpperCase()=="finalizado"){
//     a = "Finalizado"
// }
// else{
//     console.log("Please insert valid data, which can be 'Cursando' or 'Finalizado '\n make sure to also check your spelling ;)")
//     return status
// }

//     let arrayAllStudents =[]
//     jsonStudentsStatus ={}

//     //this part get all students and put on an array
//     arrayAllStudents.push(getAllStudents())

//     //this filter duh
//     const arrayStudentsStatus = arrayAllStudents[0].filter( arrayAllStudents => arrayAllStudents.status == a )

//     jsonStudentsStatus = arrayStudentsStatus

//     if(jsonStudentsStatus != ''){

//         status = true
//         return jsonStudentsStatus
//     }

//}
//console.log(getStudentsForStatus("Finalizado"))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// GET STUDENTS FOR SUBJECT

const getStudentForSubject = function(a){

    let status = false 
    
    if(a == "DS" ){
        a = "001 - Técnico em Desenvolvimento de Sistemas"
    }
    else if(a == "RDS"){
        a = "001 - Técnico em Redes de Computadores"
    }
    else{
        console.log("Please insert valid data, which can be 'DS' or 'RDS' \n make sure to also check your spelling ;)")
        return status
    }

    let arrayAllStudents =[]
    let jsonStudentsSubject ={}

    arrayAllStudents.push(getAllStudents())

    const arrayStudentsSubject = arrayAllStudents[0].filter( arrayAllStudents => arrayAllStudents.curso[0].nome == a  )

    jsonStudentsSubject = arrayStudentsSubject

    if(jsonStudentsSubject != ''){
        status = true
        return jsonStudentsSubject
    }
    return jsonStudentsSubject
}
//"001 - Técnico em Redes de Computadores"
//"001 - Técnico em Desenvolvimento de Sistemas"
//console.log(getStudentForSubject("RDS"))
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const getStudentsForStatus = function(desirableSubject,desirableStatus){

    let status = false

    if(desirableSubject == ''){
        console.log("Please insert valid data on the first endpoint, which can be 'DS' or 'RDS'\n make sure to also check your spelling ;)")
        return status
    }

    let arrayAllStudents =[]
    jsonStudentsStatus ={}

    //this part get all students and put on an array
    arrayAllStudents.push(getStudentForSubject(desirableSubject))

    //this filter duh
    const arrayStudentsStatus = arrayAllStudents[0].filter( arrayAllStudents => arrayAllStudents.status == desirableStatus )

    jsonStudentsStatus = arrayStudentsStatus

    
        if(arrayStudentsStatus == ''){
                 console.log("Please insert valid data, which can be 'Cursando' or 'Finalizado'\n make sure to also check your spelling ;)")
                return status
            }else{
                status = true
                return jsonStudentsStatus
           
            }

}
console.log(getStudentsForStatus("RDS","Cursando"))


