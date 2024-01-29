let home = 0
let away = 0

function updateHomeTeam() {
    home += 1
    console.log('home', home)

    const newHomeScore = document.getElementById('homeScore')
    newHomeScore.innerText = home
}

function updateHomeTeamThreePoints() {
    home += 3

    const newHomeScore = document.getElementById('homeScore')
    newHomeScore.innerText = home
}

function updateAwayTeam() {
    away += 1;
    console.log('away', away)

    const newAwayScore = document.getElementById('awayScore')
    newAwayScore.innerText = away
}

function updateAwayTeamThreePoints() {
    away += 3

    const newAwayScore = document.getElementById('awayScore')
    newAwayScore.innerText = away
}

function resetScoreBoard() {
    home = 0
    away = 0

    const newAwayScore = document.getElementById('awayScore')
    newAwayScore.innerText = away

    const newHomeScore = document.getElementById('homeScore')
    newHomeScore.innerText = home
}

// function updateScore()