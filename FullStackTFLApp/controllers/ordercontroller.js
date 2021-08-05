var Order=require('../dal/ordersdal');



exports.getAll = function(req, res) {
    console.log("calling controller function");
    Order.getAllTask(function(err, order) {
      if (err)
        res.send(err);
      res.send( order);
    });
  };

  exports.insert = function(req, res) {
    
    var new_task = new Order(req.body);
  
   
     if(!new_task.orderid || !new_task.amount){
        res.status(400).send({ error:true, message: 'Please provide task/status' });
      }
     else{
        Order.createTask(new_task, function(err, order) {
        if (err)
        res.send(err);
      res.json(order);
      });
    }
  };

  exports.getBy = function(req, res) {
    Order.getTaskById(req.params.id, function(err, order) {
      if (err)
        res.send(err);
      res.json(order);
    });
  };

  exports.update = function(req, res) {
    Order.updateById(req.params.id, new Order(req.body), function(err,  order) {
      if (err)
        res.send(err);
      res.json(order);
    });
  };
  
  exports.remove = function(req, res) {
    Order.remove( req.params.id, function(err,order) {
      if (err)
        res.send(err);
      res.json({ message: 'Task successfully deleted' });
    });
  };