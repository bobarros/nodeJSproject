const   express                 = require('express'),
        compression             = require('compression'), 
        app                     = express(),
        port                    = process.env.PORT || 3000,
        indexRoutes             = require('./routes/index')
        request                 = require('request')

app.set('view engine', 'ejs')
app.use(compression())
app.use('/img', express.static(__dirname + '/public/img', { maxAge:31536000000 }))
app.use('/css', express.static(__dirname + '/public/css', { maxAge:31536000000 }))
app.use('/fonts', express.static(__dirname + '/public/fonts', { maxAge:31536000000 }))
app.use(express.static(__dirname + '/public', { maxAge:604800000 })) //604800

app.use('/', indexRoutes)

app.get( '*' , (req, res) => {
        res.status(404).render('administrativo/page404')
});

app.listen(port, () => {
    console.log('At host:' + port)
});
