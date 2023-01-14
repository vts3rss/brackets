module.exports = function check(str, bracketsConfig) {
  let array = []
  let dict = {}
  for (let i of bracketsConfig) {
    dict[i[0]] = i[1]
  }

  for (let i of str) {
    if (dict[array.at(-1)] === i) {
      array.pop(i)
    } else {
      array.push(i)
    }
  }

  return array.length === 0 ? true : false
}
