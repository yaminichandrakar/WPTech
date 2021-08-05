var OrderDet=require('../dal/orderdetails');

exports.getAll = function(req, res) {
    console.log("calling controller function");
    OrderDet.getAllTask(function(err, order) {
      if (err)
        res.send(err);
      res.send( order);
    });
  };

  exports.insert = function(req, res) {
   
    var new_task = new OrderDet(req.body);
  
    
     if(!new_task.flowerid || !new_task.quantity){
        res.status(400).send({ error:true, message: 'Please provide task/status' });
      }
     else{
        OrderDet.createTask(new_task, function(err, order) {
        if (err)
        res.send(err);
      res.json(order);
      });
    }
  };

  exports.getBy = function(req, res) {
    OrderDet.getTaskById(req.params.id, function(err, order) {
      if (err)
        res.send(err);
      res.json(order);
    });
  };

  exports.update = function(req, res) {
    OrderDet.updateById(req.params.id, new OrderDet(req.body), function(err,  order) {
      if (err)
        res.send(err);
      res.json(order);
    });
  };
  
  exports.remove = function(req, res) {
    OrderDet.remove( req.params.id, function(err,order) {
      if (err)
        res.send(err);
      res.json({ message: 'Task successfully deleted' });
    });
  };