// sorta db
const players = ['Ben', 'Jon', 'Rich']
const races = [
  'Human',
  'Dwarf',
  'Nightelf',
  'Gnome',
  'Tauren',
  'Undead',
  'Troll',
  'Orc',
]
const classes = [
  'Warrior',
  'Paladin',
  'Rogue',
  'Hunter',
  'Warlock',
  'Mage',
  'Priest',
  'Druid',
  'Shaman',
]
const genders = ['Male', 'Female']
const zones = [
  'Elwynn Forest',
  'Dun Morogh',
  'Teldrassil',
  'Dun Morogh',
  'Mulgore',
  'Tirisfal Glades',
  'Durotar',
  'Durotar',
]

// some consts
const HOUR = 60 * 60
const MINUTE = 60

// dummy data
const speedRunData = [
  {
    timesToLevel: [600, 1500, 1800, 2200, 2700, 3000, 3500, 4000, 5100],
    player: 2,
    race: 2,
    playerClass: 1,
    gender: 1,
    link: 'https://www.youtube.com/something',
    date: 1643907863060,
  },
  {
    timesToLevel: [600, 1500, 1800, 2200, 2700, 3000, 3500, 4000, 5430],
    player: 1,
    race: 2,
    playerClass: 3,
    gender: 1,
    link: 'https://www.youtube.com/somethingelse',
    date: 1643907823060,
  },
  {
    timesToLevel: [600, 1500, 1800, 2200, 2700, 3000, 3500, 4000, 5230],
    player: 0,
    race: 2,
    playerClass: 3,
    gender: 1,
    link: 'https://www.youtube.com/somethingelseese',
    date: 1643907823260,
  },
]

// leaderboard ordered-list element
const leaderboardEl = document.querySelector('.leaderboard')

// populate da bastard
populateLeaderboard()

// utility
function getTimeString(timeInSecs) {
  const hours = Math.floor(timeInSecs / HOUR)
  const mins = Math.floor((timeInSecs / MINUTE) % 60)
  const secs = Math.floor(timeInSecs % 60)

  return `${hours}h ${mins}m ${secs}s`
}

// generate li element with speed run data entry
function generateSpeedRunEntry(speedRunEntry, index) {
  const { timesToLevel, player, race, playerClass, gender, link, date } =
    speedRunEntry

  const rank = index + 1
  const lastTime = getTimeString(timesToLevel[timesToLevel.length - 1])

  const dateObj = new Date(date)
  const dateString = `${dateObj.getDate()}/${
    dateObj.getMonth() + 1
  }/${dateObj.getFullYear()}`

  return `
    <li>
      <span class="rank">${rank}</span>
      <span class="player-class">${classes[playerClass]}</span>
      <span class="race">${races[race]}</span>
      <span class="gender">${genders[gender]}</span>
      <span class="player">${players[player]}</span>
      <span class="time">${lastTime}</span>
      <span class="date">${dateString}</span>
      <a class="link" href="${link}">Video</a>
    </li>
  `
}

function populateLeaderboard() {
  const sortedSpeedRunData = speedRunData.sort((a, b) => {
    const aLastTime = a.timesToLevel[a.timesToLevel.length - 1]
    const bLastTime = b.timesToLevel[b.timesToLevel.length - 1]
    return aLastTime < bLastTime ? -1 : aLastTime > bLastTime ? 1 : 0
  })

  const listItems = sortedSpeedRunData.map(generateSpeedRunEntry)

  leaderboardEl.innerHTML = listItems.join('')
}
