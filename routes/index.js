const request = require('request')

const   express = require('express'),
        router  = new express.Router()


router.get('/', (req, res) => {
        
        res.render('index')
        
})

router.get('/rotas', (req, res) => {
        
        res.render('rotas')
        
})

router.get('/rotas/rota-01', (req, res) => {
        
        res.render('rotas/stories/rota-01')
        
})

router.get('/sitemap.xml', (req, res) => {
        res.header('Content-Type', 'text/xml');
        res.render('sitemap')
})

module.exports = router;