import { data } from './data'

const getName = function () {
  return data.firstName + ' ' + data.familyName
}

console.log('Executed whiout invoking.')

export default { getName }
