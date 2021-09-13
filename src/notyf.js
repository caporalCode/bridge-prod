import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'

// Create an instance of Notyf
export const NOTYF = new Notyf({
	duration: 2000,
	position: {
		x: 'center',
		y: 'top',
	},
	dismissible: true,
	types: [
		{
			type: 'success',
			background: '#38b000',
		},
		{
			type: 'error',
			background: 'indianred',
		},
	],
})
