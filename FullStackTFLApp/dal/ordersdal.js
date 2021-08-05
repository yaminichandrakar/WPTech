
var sql= require('./mysqlconnect');

//Define model which is going to be mapped with each field of Tasks table

var Order = function(orders){
  this.orderid = orders.orderid;
  this.orderdate = orders.orderdate;
  this.customerid = orders.customerid;
  this.amount=orders.amount;
};


Order.createTask = function (neworders, result) {    
  sql.query("INSERT INTO orders values (?,?,?,?)",[neworders.orderid,neworders.orderdate,neworders.customerid,neworders.amount], function (err, res)  {
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

Order.getTaskById = function (orderId, result) {
    sql.query("Select * from orders where orderid = ? ", orderId, function (err, res) {             
            if(err) {
              console.log("error: ", err);
              result(err, null);
            }
            else{
              result(null, res);     
            }
        });   
};

Order.getAllTask = function (result) {
    console.log("Invoking dal getall orders");
    
      sql.query("Select * from orders", function (err, res) {
              if(err) {
                console.log("error: ", err);
                result(null, err);
              }
              else{
                console.log('orders : ', res);  
                result(null, res);
              }
          });   
};


Order.updateById = function(orderid, Order, result){
    sql.query("UPDATE orders SET amount = ? WHERE orderid = ?", [Order.amount, orderid], function (err, res) {
            if(err) {
                  console.log("error: ", err);
                  result(null, err);
               }
             else{   
               result(null, res);
              }
      }); 
  };

  Order.remove = function(orderid, result){
    sql.query("DELETE FROM orders WHERE orderid = ?", [orderid], function (err, res) {
                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                    result(null, res);
                }
            }); 
};

module.exports=Order;