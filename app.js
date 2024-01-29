let home = 0
let away = 0

// function updateHomeTeam() {
//     home += 1
//     console.log('home', home)

//     const newHomeScore = document.getElementById('homeScore')
//     newHomeScore.innerText = home
// }

// function updateHomeTeamThreePoints() {
//     home += 3

//     const newHomeScore = document.getElementById('homeScore')
//     newHomeScore.innerText = home
// }

// function updateAwayTeam() {
//     away += 1
//     console.log('away', away)

//     const newAwayScore = document.getElementById('awayScore')
//     newAwayScore.innerText = away
// }

// function updateAwayTeamThreePoints() {
//     away += 3

//     const newAwayScore = document.getElementById('awayScore')
//     newAwayScore.innerText = away
// }

// NOTE below are the condensed functions

function resetScoreBoard() {
    home = 0
    away = 0
    drawScoreboard()
}

function updateHomeScore(points) {
    home += points
    if (home >= 10) {
        console.log('home is the winner')
        document.getElementById('winnerBanner').innerText = "Home Team is the Winner!"
        resetScoreBoard()
    }
    drawScoreboard()
}

function updateAwayScore(points) {
    away += points
    if (away >= 10) {
        console.log('away is the winner')
        document.getElementById('winnerBanner').innerText = "Away Team is the Winner!"
        resetScoreBoard()
    }
    drawScoreboard()
}

function removeHomePoint(minusPoint) {
    if (home > 0) {
        home += minusPoint
    }
    drawScoreboard()
}

function removeAwayPoint(minusPoint) {
    if (away > 0) {
        away += minusPoint
    }
    drawScoreboard()
}


function drawScoreboard() {
    const newHomeScore = document.getElementById('homeScore')
    newHomeScore.innerText = home

    const newAwayScore = document.getElementById('awayScore')
    newAwayScore.innerText = away
}


// NOTE i was trying to combine the two update score functions under here

// function updateScore(points) {
//     if (points == 1, 'home') {
//         home += 1
//     }
//     else if (points == 1, 'away') {
//         away += 1
//     }
//     drawScoreboard()
// }