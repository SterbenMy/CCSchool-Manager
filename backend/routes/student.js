const router = require('express').Router();
let Student = require('../models/student.model');

router.route('/').get((req, res) => {
    Student.find()
        .then(student => res.json(student))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res)=>{
    const nume = req.body.nume;
    const prenume = req.body.prenume;
    const ani = Number(req.body.ani);
    const mail = req.body.mail;
    const gen = req.body.gen;
    const clasa = req.body.clasa;

    const newStudent = new Student({
        nume,
        prenume,
        ani,
        mail,
        gen,
        clasa,
    });

    newStudent.save()
    .then(() => res.json('Student adaugat!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').get((req, res) => {
    Student.findById(req.params.id)
      .then(student => res.json(student))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Student.findByIdAndDelete(req.params.id)
      .then(() => res.json('Studentul a fost sters.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Student.findById(req.params.id)
      .then(student => {
        student.nume = req.body.nume;
        student.prenume = req.body.prenume;
        student.ani = Number(req.body.ani);
        student.mail = req.body.mail;
        student.gen = req.body.gen;
        student.clasa = req.body.clasa;
      
  
        student.save()
          .then(() => res.json('Student modificat'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;