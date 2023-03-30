
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

const getStudentsForStatus = function(a){

    let status = false

if(a.toUpperCase() == "CURSANDO" || a.toLowerCase()=="cursando"){
    a = "Cursando"
}

else if(a.toUpperCase()=="FINALIZADO" || a.toUpperCase()=="finalizado"){
    a = "Finalizado"
}
else{
    console.log("Please insert valid data, which can be 'Cursando' or 'Finalizado '\n make sure to also check your spelling ;)")
    return status
}

    let arrayAllStudents =[]
    jsonStudentsStatus ={}

    //this part get all students and put on an array
    arrayAllStudents.push(getAllStudents())

    //this filter duh
    const arrayStudentsStatus = arrayAllStudents[0].filter( arrayAllStudents => arrayAllStudents.status == a )

    jsonStudentsStatus = arrayStudentsStatus

    if(jsonStudentsStatus != ''){

        status = true
        return jsonStudentsStatus
    }

}
console.log(getStudentsForStatus("Finalizado"))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// GET STUDENTS FOR SUBJECT

// const getStudentForSubject = function(subject){

//     let arrayAllStudents =[]

//     arrayAllStudents.push(getAllStudents())

//     console.log(arrayAllStudents)

//     const result = arrayAllStudents.filter(arrayStudents => arrayStudents == subject )

//     console.log(result)

//     return subject
// }
// getStudentForSubject("002")
// console.log(getStudentForSubject("002"))