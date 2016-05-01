//import $a from 'antipode';
import $a from './$a';
import tmp from './main.tpl.html';
import scss from './main.scss';

new $a.Component({
	name: 'main',
	directive: 'app',
	template: tmp,
	data: {
		world: 'world !'
		
	}
})
.render()

export default {};