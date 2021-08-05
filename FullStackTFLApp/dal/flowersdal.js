
var sql = require('./mysqlconnect');

var Flower = function(Flower){

    this.Id=Flower.id
    this.Title = Flower.title;
    this.Description = Flower.description;
    this.Quantity = Flower.quantity;
    this.UnitPrice = Flower.unitptice;
    this.likes=Flower.likes;
};


Flower.createFlower = function (newFlower, result) {  
        console.log("New flower to be added ");
        console.log(newFlower);
        sql.query("INSERT INTO flowers values (?,?,?,?,?,?)", [newFlower.Id,newFlower.Title,newFlower.Description,newFlower.Quantity,newFlower.UnitPrice,newFlower.likes], function (err, res) {
         if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  console.log(res.insertId);
                  result(null, res.insertId);
                }
            });           
};

Flower.getFlowerById = function (FlowerId, result) {
        sql.query("Select * from flowers where Id = ? ",FlowerId, function (err, res) {             
                if(err) {
                  console.log("error: ", err);
                  result(err, null);
                }
                else{
                  result(null, res);     
                }
            });   
};


Flower.getAllFlower = function (result) {
      console.log("Invoking dal getall Flowers");
      
        sql.query("Select * from flowers", function (err, res) {
                if(err) {
                  console.log("error: ", err);
                  result(null, err);
                }
                else{
                  console.log('Flowers : ', res);  
                  result(null, res);
                }
            });   
};

Flower.updateById = function(id, Flower, result){

  sql.query("UPDATE flowers SET Title = ? WHERE Id = ?", [Flower.Title, id], 
              function (err, res) {
                  if(err) {
                        console.log("error: ", err);
                        result(null, err);
                    }
                  else{   
                    result(null, res);
                    }
                }); 
};


Flower.remove = function(id, result){
    sql.query("DELETE FROM flowers WHERE Id = ?", [id],
                function (err, res) {
                  if(err) {
                      console.log("error: ", err);
                      result(null, err);
                  }
                  else{
                      result(null, res);
                  }
            }); 
};

module.exports=Flower;