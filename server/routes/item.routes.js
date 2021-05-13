const ItemController = require('../controllers/item.controller');

module.exports = app => {
    app.get('/api', ItemController.index);
    app.get('/api/items', ItemController.findAllItems);
    app.post('/api/items', ItemController.createItem);
    app.get('/api/items/:id', ItemController.getItem);
    app.put('/api/items/:id', ItemController.updateItem);
    app.delete('/api/items/:id', ItemController.deleteItem);
}