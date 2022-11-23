import { v4 as uuidv4 } from 'uuid'

export default (el, binding) => {
	console.dir(el)
	console.log(uuidv4())
	binding.value()
}
