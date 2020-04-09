// Create a router to hold our routes
let router = require('express').Router()

// Define routes
// GET /projects
router.get('/', (req, res) => {
    res.render('projects', { page: 'Projects' })
})

// GET /projects/1
router.get('/1', (req, res) => {
    res.render('projectDetail', { 
        page: 'Projects',
        num: 'ONE'
    })
})

// GET /projects/2
router.get('/2', (req, res) => {
    res.render('projectDetail', { 
        page: 'Projects',
        num: 'TWO'
    })
})

// Export the routes (so that we can include them in another file)
module.exports = router