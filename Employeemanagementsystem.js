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
const employeedb = [employee1,employee2,employee3]

function displayEmployeeById(id){
   const emp = employeedb.find(e=>e.id === id)
   if(!emp){
    console.log("employee not found")
   }
   console.log(`employee details:
    name:${emp.name}
    department:${emp.department}
    salary: ${emp.salary}`)
}

function displayemployees(){
    console.log("list of employees")
    employeedb.forEach(emp =>{
        console.log(`name:${emp.name},department:${emp.department},salary:${emp.salary}`)
    })

}


console.log(employee1)
//Object.freeze(employee1)


employee1.update({salary : 9000})
displayemployees()
displayEmployeeById("1")


