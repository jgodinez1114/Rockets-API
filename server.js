const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

let players = {
    'hakeem': {
        'DOB': 'January 21, 1963',
        'age': 58,
        'birthName': 'Hakeem Abdul Olajuwon',
        'birthLocation': 'Lagos, Nigeria',
        'nickname': 'The Dream'
    },
    'clyde': {
        'DOB': 'June 22, 1962',
        'age': 59,
        'birthName': 'Clyde Austin Drexler',
        'birthLocation': 'New Orleans, Louisiana',
        'nickname': 'Clyde the Glide'
    },
    'unknown': {
        'DOB': 'unknown',
        'age': null,
        'birthName': 'unknown',
        'birthLocation': 'unknown',
        'nickname': 'unknown'
    }
}   // players object
// cors module needed for cross origin requeests
app.use(cors())
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

// set up the query parameter for this route
app.get('/api/players/:playername', (request, response) => {
    // save user input
    const playerName = request.params.playername.toLowerCase().trim()
    console.log(playerName)
    // check if player data exists
    if (players[playerName]) {
        response.json(players[playerName])
    } else {
        response.json(players['unknown'])
    }

})
// necessary listening function for the server
app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);

})