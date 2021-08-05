



var taskController=require("./controllers/taskscontroller");
var flowerController=require("./controllers/flowerscontroller");
var orderController=require("./controllers/ordercontroller");
var orderDetailController=require("./controllers/orderdetailcontroller");
var staffController=require("./controllers/staffcontroller");
var credentialController=require("./controllers/credentialscontroller");
var customerController=require("./controllers/customerscontroller");


module.exports=function(app){
  

    app.route("/api/tasks")
    .get(taskController.getAll)            
    .post(taskController.insert);         

    app.route("/api/tasks/:id")
      .get(taskController.getBy)       
      .put(taskController.update)           
      .delete(taskController.remove);    
    
    app.route("/api/flowers")              
    .get(flowerController.getAll)           
    .post(flowerController.insert);        

    app.route('/api/flowers/:id')
    .get(flowerController.getBy)           
    .put(flowerController.update)         
    .delete(flowerController.remove);      

   
    app.route("/api/orders")              
    .get(orderController.getAll)           
    .post(orderController.insert);         

    app.route('/api/orders/:id')
    .get(orderController.getBy)         
    .put(orderController.update)       
    .delete(orderController.remove); 


    app.route("/api/orderdetails")              
    .get(orderDetailController.getAll)            
    .post(orderDetailController.insert);        

    app.route('/api/orderdetails/:id')
    .get(orderDetailController.getBy)           
    .put(orderDetailController.update)          
    .delete(orderDetailController.remove); 

    app.route("/api/staff")              
    .get(staffController.getAll)           
    .post(staffController.insert);         

    app.route('/api/staff/:id')
    .get(staffController.getBy)           
    .put(staffController.update)          
    .delete(staffController.remove); 

    app.route("/api/credentials")              
    .get(credentialController.getAll)           
    .post(credentialController.insert);        

    app.route('/api/credentials/:id')
    .get(credentialController.getBy)         
    .put(credentialController.update)          
    .delete(credentialController.remove); 

    app.route("/api/customers")              
    .get(customerController.getAll)             
    .post(customerController.insert);         

    app.route('/api/customers/:id')
    .get(customerController.getBy)           
    .put(customerController.update)          
    .delete(customerController.remove); 
};


 
