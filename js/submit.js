const form = document.getElementById('submit-form')
const container = document.getElementById('container')
const buttonContainer = document.getElementById('button-container')

// map input names to database keys
const formMap = {
  name: 'player_id',
  'player-class': 'player_class_id',
  sex: 'sex_id',
  race: 'race_id',
  date: 'date',
  'youtube-link': 'youtube_link_url',
}

// on form submit
form.addEventListener('submit', formSubmit)

function formSubmit(e) {
  e.preventDefault()
  // 'this' is the same as form (the DOM element)
  const formData = new FormData(this)

  // reduce the formData input values to a data object to send back to database
  const dataToSend = [...formData.entries()].reduce(reduceFormData, {})

  dataToSend['split_times'] = getSplitTimesFromForm()

  insertData(db, 'speed_run_entry', dataToSend)

  container.innerHTML = "<h1>Thanks for your submission</h1>"
  buttonContainer.innerHTML = ""

}

function reduceFormData(acc, [key, value]) {
  // format the date so the database understands
  acc[formMap[key]] = key === 'date' ? value.split('-').join(',') : value

  return acc
}

function getSplitTimesFromForm() {
  const levelDivs = document.getElementById('times').querySelectorAll('div')

  // map the inputs of each level div element (for split times)
  // return them as seconds of time to create correct '2022-01-19' style date format
  const results = [...levelDivs].map((levelDiv) => {
    const [h, m, s] = [...levelDiv.querySelectorAll('input')].map(
      ({ value }) => value
    )

    const secondsTime = getSecondsString(h, m, s)

    if (isNaN(secondsTime)) {
      return null
    }

    return secondsTime
  })

  return results
}
