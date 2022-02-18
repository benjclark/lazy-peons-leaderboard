// utility

// some consts
const HOUR = 60 * 60
const MINUTE = 60

function getTimeString(timeInSecs) {
  const hours = Math.floor(timeInSecs / HOUR)
  const mins = Math.floor((timeInSecs / MINUTE) % 60)
  const secs = Math.floor(timeInSecs % 60)

  return `${hours}h ${mins}m ${secs}s`
}

function getSecondsString(h, m, s) {
  return parseInt(HOUR * h) + parseInt(MINUTE * m) + parseInt(s)
}

async function insertData(db, tableName, seedData) {
  let { data, error } = await db.from(tableName).insert(seedData)

  if (error) {
    console.error(error)
    return false
  }

  console.log(`Success! Added data to '${tableName}'`)
  console.log(data)
}
