export function findIndex(array, id) {
  let index = 0

  for (const item of array) {
    if (item.user_id.toString() === id) {
      return index
    }
    index++
  }

  return -1
}
