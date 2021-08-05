
var sql= require('./mysqlconnect');

var OrderDet = function(orderdetails){
  this.orderdetailid = orderdetails.orderdetailid;
  this.orderId = orderdetails.orderid;
  this.flowerid = orderdetails.flowerid;
  this.quantity = orderdetails.quantity
};

OrderDet.createTask = function (neworders, result) {    
  sql.query("INSERT INTO Orderdetails values (?,?,?,?)", [neworders.orderdetailid,neworders.orderId,neworders.flowerid,neworders.quantity], function (err, res) {
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

OrderDet.getTaskById = function (orderdetId, result) {
    sql.query("Select * from orderdetails where orderdetailid = ? ", orderdetId, function (err, res) {             
            if(err) {
              console.log("error: ", err);
              result(err, null);
            }
            else{
              result(null, res);     
            }
        });   
};


OrderDet.getAllTask = function (result) {
    console.log("Invoking dal getall orderdetails");
    
      sql.query("Select * from orderdetails", function (err, res) {
              if(err) {
                console.log("error: ", err);
                result(null, err);
              }
              else{
                console.log('orderdetails : ', res);  
                result(null, res);
              }
          });   
};


OrderDet.updateById = function(orderdetailid, OrderDet, result){
    sql.query("UPDATE orderdetails SET quantity = ? WHERE orderdetailid = ?", [OrderDet.quantity, orderdetailid], function (err, res) {
            if(err) {
                  console.log("error: ", err);
                  result(null, err);
               }
             else{   
               result(null, res);
              }
      }); 
  };

  OrderDet.remove = function(orderdetid, result){
    sql.query("DELETE FROM orderdetails WHERE orderdetailid = ?", [orderdetid], function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                    result(null, res);
                }
            }); 
};

module.exports=OrderDet;