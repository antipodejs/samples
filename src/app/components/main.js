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

$a.xhr.getJSON(
        'http://localhost:3005/records/0/1000000',
        //'http://localhost:3005/children/0',
        function(response) {
          //this.Indexer[id] = response;
          //this.expandTree(this.Indexer[id], after);
          let r = response.forEach((i)=>{ i.title = i.name});
          console.log('response = ', response);
          collection.initial(response);
          /*Collection.initial(response);
          infoBlock.set('total', response.length);
          infoBlock.render();*/



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


        }.bind(this)
      );

//collection.initial(configModules);

console.log('collection = ', collection);
/*
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
*/
console.log('list = ', list);

export default {};