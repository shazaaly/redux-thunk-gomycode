
let gen = {
  '-3': ["great grandfather", "great grandmother"],
  '-2': [" grandfather", " grandmother"],
  '-1': ["father", "mother"],
  '0': ["me"],
  '1': ['son', 'daugther'],
  '2': ["great son", "great daugthter"],
}
function getGen(x, y) {
  return x == 'm' ? gen[x][0] : gen[x][1]



}

console.log(getGen(-3, 'm'))