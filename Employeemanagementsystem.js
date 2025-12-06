class employee{
     constructor(id,name,department,salary){
         this.id = id,
         this.name = name,
         this.department = department,
         this.salary = salary
    }

    update(values){
        if(values.name)this.name = values.name
        if(values.department)this.department =  values.department
        if(values.salary)this.salary = values.salary
    }  
}
const employee1 = new employee("1","karthick","cse",5000)
const employee2 = new employee("2","rahul","mech",10000)
const employee3 = new employee("3","mehta","civil",2000)


function displayemployees(){
    console.log("list of employees")
    console.log(`name : ${employee1.name} ,  department:${employee1.department}, salary:${employee1.salary}`)
    console.log(`name : ${employee2.name} ,  department:${employee2.department}, salary:${employee2.salary}`)
    console.log(`name : ${employee3.name} ,  department:${employee3.department}, salary:${employee3.salary}`)

}
console.log(employee1)
//Object.freeze(employee1)


employee1.update({salary : 9000})
displayemployees()


