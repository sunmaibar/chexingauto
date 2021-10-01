const setupTags = cars => {
  const allTags = {}
  cars.forEach(car => {
    car.tags.tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1
      } else {
        allTags[tag] = 1
      }
    })
  })
  const newTags = Object.entries(allTags)
  return newTags
}

export default setupTags
