
var student = {
    name: 'ram',
    rollNo: 2345,
    age: 22,
    gender: 'Male',
    getName: function(){
      return this.name
    },
   parents: {
     name: 'raju',
     age: 55,
     gender: 'Male',
     getAge: function(){
      return this.age
   },
      getName: function(){
      return this.name
    }
}
}
console.log(student.getName())
console.log(student.parents.getName())
console.log(student.parents.getName())
