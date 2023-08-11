const { Router } = require('express');
const { getUsuarios, deleteUsuarios, postUsuarios, putUsuarios, patchUsuarios } = require('../controllers/usuarios');

const router = Router();

router.get('/', getUsuarios);

router.delete('/', deleteUsuarios);

router.post('/', postUsuarios);

router.put('/:id', putUsuarios);

router.patch('/', patchUsuarios);




module.exports = router;