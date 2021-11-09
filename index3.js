function student(pName,pRollno,pAge,pGender){
    this.name = pName;
    this.rollNo = pRollno;
    this.age = pAge;
    this.gender = pGender
  }
  
  var raju = new student('raju', 3444, 22, 'Male')
  var radha = new student('radha', 4356, 21, 'Female')
  
  console.log(raju)
    console.log(radha)