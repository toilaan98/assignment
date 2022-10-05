import { faPlane,faBed,faTaxi, faCar} from '@fortawesome/free-solid-svg-icons';
 
export const navBar = [
	{
		"type": "Stays",
		"icon": faBed,
		"active": true
	},
	{
		"type": "Flights",
		"icon": faPlane,
		"active": false
	},
	{
		"type": "Car rentals",
		"icon": faCar,
		"active": false
	},
	{
		"type": "Attractions",
		"icon": faBed,
		"active": false
	},
	{
		"type": "Airport taxis",
		"icon": faTaxi,
		"active": false
	}
]