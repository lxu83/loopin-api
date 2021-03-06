var EventModel = require('../models/EventModel');

var Events = {
  getAll: function(req, res){
    EventModel.find(function(err, events) {
      if (err) res.send(err);
      res.json(events);
    });

  },

  create: function(req, res){
    var event = new EventModel();
    event.name = req.body.name;
    event.description = req.body.description;
    event.cancellable = true;

    event.save(function(err){
      if (err) res.send(err);
      res.json({ message: "event created"});
    });

  },

  remove: function(req, res){
    EventModel.remove({
      _id: req.params.event_id
    }, function (err, event){
      if (err) res.send(err);
      res.json({message: "event deleted"})
    });
  }

};

module.exports = Events;
