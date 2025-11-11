const student = [];

function addStudents(students , marks){
    marks = Number(marks);
   students= students.toUpperCase();
    student.push({name: students,marks:marks})
}

function getGrade(){
    return student.map((students)=>{
        let grade = "F"
        if(students.marks >=90){
          grade ="A"
        }
        else if(students.marks>=70 && students.marks < 90 ){
            grade = "B"
        }
         else if(students.marks>=50 && students.marks < 70){
            grade = "c"
        }
        else{
            grade = "F"
        }
        return {...students , grade:grade}
        
    })
}

function topScore(){
    return student.filter((students)=>{
        return students.marks > 90
    })
}

function studentFind(name){
    return student.find((students)=>{
        return students.name == name
    })
}

function hasFailes(){
    return student.some((students)=>{
        students.marks < 50
    })
}

function display(){
     let grades = getGrade();
    console.log("students data")
    console.log("all students with grades")
    console.log("name  | score  | grade")

     grades.forEach((students)=>{
        console.log(`${students.name} | ${students.marks} | ${students.grade}`)
    })
}

addStudents("ravi mohan", 99 )
addStudents("ramesh",78)
addStudents("suresh",44)
display()
console.log("top scorers:", topScore())
console.log("FIND RAMESH:", studentFind("RAMESH"))
console.log("failed students:", hasFailes())