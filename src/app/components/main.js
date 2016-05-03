//import $a from 'antipode';
import $a from './$a';
import tmp from './main.tpl.html';
import scss from './main.css';

import configModules from '../config.modules';

new $a.Component({
	name: 'main',
	directive: 'app',
	template: tmp,
	data: {
		world: 'world !'
		
	}
})
.render()

console.log('configModules = ', configModules);

const collection = new $a.Collection();
collection.initial(configModules);

console.log('collection = ', collection);

const list = new $a.iList({
	collection,
	directive: 'smplist',
	data: {
		numItems: 13 // Note: visible items is equal: numItems - 3
	},
	components: [
		{name: 'item', kind: $a.Component, template: '<div style="position: absolute; height: 20px; transform: translate3d(0,0,0);">{{title}}</div>'}
	]
})
.render();

console.log('list = ', list);

export default {};