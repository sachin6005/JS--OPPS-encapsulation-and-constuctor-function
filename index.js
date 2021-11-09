
    var make= 'Ford'
    var model= 'mustang'
    var year= 1969
    var owner= 'sachin'

 function getMake(){
   return make;
 }
 function getModel(){
   return model;
 }
 function getYear(){
   return year;
 }
 function getOwner(){
   return owner;
 }

var car = {
        make: 'Ford',
        model: 'mustang',
        year: 1969,
        owner: 'sachin',
        getMake: function(){
          return this.make
        },
        getModel: function(){
          return this.model
        },
        getYear: function(){
          return this.year
        },
        getOwner: function(){
          return this.owner
        }
   }
console.log(car.getMake())
console.log(car.getYear())
console.log(car.owner)
console.log(car.getModel())