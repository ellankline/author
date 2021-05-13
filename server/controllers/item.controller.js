const Item = require("../models/item.model");

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}

module.exports.findAllItems = (req, res) => {
    Item.find({})
        .then(allItems => res.json(allItems))
        .catch(err => res.json({message: "something went wrong", error: err}));
}

module.exports.createItem = (req, res) => {
    Item.create(req.body)
        .then(newlyCreatedItem => res.json(newlyCreatedItem))
        .catch(err => res.status(400).json(err));
}

module.exports.getItem = (req, res) => {
    Item.findOne({_id:req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.updateItem = (req, res) => {
    Item.findByIdAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(updatedItem => res.json(updatedItem))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteItem = (req, res) => {
    Item.deleteOne({_id: req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}