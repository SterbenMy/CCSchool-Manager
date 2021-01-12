const router = require('express').Router();
let Class = require('../models/class.model');

router.route('/').get((req, res) => {
    Class.find()
        .then(clasa => res.json(clasa))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res)=>{
    const numeclasa = req.body.numeclasa;
    const an = Number(req.body.an);

    const newClass = new Class({
        numeclasa,
        an,
    });

    newClass.save()
    .then(() => res.json('Clasa adaugata!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').get((req, res) => {
    Class.findById(req.params.id)
      .then(clasa => res.json(clasa))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Class.findByIdAndDelete(req.params.id)
      .then(() => res.json('Clasa a fost sters.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Class.findById(req.params.id)
      .then(clasa => {
        clasa.numeclasa = req.body.numeclasa;
        clasa.an = Number(req.body.an);
    
         clasa.save()
          .then(() => res.json('Clasa modificata'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


module.exports = router;