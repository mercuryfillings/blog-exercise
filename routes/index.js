const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))
router.get('/articles', controllers.getArticles)
router.get('/articles/:id', controllers.getArticle)
router.post('/articles', controllers.createArticle)
router.put('/articles/:id', controllers.updateArticle)
router.delete('/articles/:id', controllers.deleteArticle)

module.exports = router