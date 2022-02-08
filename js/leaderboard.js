// leaderboard ordered-list element
const leaderboardEl = document.querySelector('.leaderboard')

// start the fans please
init()

// generate li element with speed run data entry
function generateSpeedRunEntry(speedRunEntry, index) {
  const {
    split_times,
    player: { name: playerName },
    race: { name: raceName },
    player_class: { name: playerClassName },
    sex,
    youtube_link_url,
    date,
  } = speedRunEntry

  const rank = index + 1
  const lastTime = getTimeString(split_times[split_times.length - 1])

  const dateObj = new Date(date)
  const dateString = `${dateObj.getDate()}/${
    dateObj.getMonth() + 1
  }/${dateObj.getFullYear()}`

  return `
    <tr>
      <td class="rank">${rank}</td>
      <td class="player">${playerName}</td>
      <td class="player-class">${playerClassName}</td>
      <td class="race">${raceName}</td>
      <td class="date">${dateString}</td>
      <td class="time">${lastTime}</td>
      <td><a class="link" href="${youtube_link_url}">Video</a></td>
    </tr>
  `
}

function populateLeaderboard(speedRunEntries) {
  const sortedSpeedRunData = speedRunEntries.sort((a, b) => {
    const aLastTime = a.split_times[a.split_times.length - 1]
    const bLastTime = b.split_times[b.split_times.length - 1]
    return aLastTime < bLastTime ? -1 : aLastTime > bLastTime ? 1 : 0
  })
  const listItems = sortedSpeedRunData.map(generateSpeedRunEntry)
  leaderboardEl.innerHTML = listItems.join('')
}

async function init() {
  let { data: speedRunEntries, error } = await db.from('speed_run_entry')
    .select(`
    date,
    player_class (
      name
    ),
    race (
      name
    ),
    player (
      name
    ),
    split_times,
    youtube_link_url
  `)

  if (error) {
    console.error(error)
  }

  populateLeaderboard(speedRunEntries)
}
