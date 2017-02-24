import user from './user'
import Cat from './Cat'

import './nonsense'

console.log(user.getName())

const kitty = new Cat('Kitty')
kitty.getName


user.version = 1
console.log(`Version info added in main app: ${user.version}`)
