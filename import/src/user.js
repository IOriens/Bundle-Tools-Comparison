import { data } from './data'

const getName = function () {
  return data.firstName + ' ' + data.familyName
}

export default { getName }
