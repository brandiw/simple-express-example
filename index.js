// Grab any node modules we want to use
let express = require('express')
let layouts = require('express-ejs-layouts')

// Declare my app instance
let app = express()

// Tell express which templating language we want to use
app.set('view engine', 'ejs')

// Tell express where the static files (e.g., css, images, etc) live
app.use(express.static('static'))

// Tell express to use the layouts
app.use(layouts)

// Declare routes
app.get('/', (req, res) => {
    let fruits = ['peach', 'coconut', 'mango', 'strawberry', 'blueberry', 'oranges']
    res.render('home', { 
        name: 'Brandi', 
        fruits: fruits,
        page: 'Home' 
    })
})

app.get('/about', (req, res) => {
    res.render('about', { page: 'About' })
})

app.get('/add/:x/:y', (req, res) => {
    let result = parseInt(req.params.x) + parseInt(req.params.y)
    res.send(result.toString())
})

// Include routes from controllers
// arg1: relative path
// arg2: require the controller file
app.use('/projects', require('./controllers/projects'))

// Pick a port to listen on
app.listen(3000)