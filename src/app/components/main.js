//import $a from 'antipode';
import $a from './$a';
import tmp from './main.tpl.html';
import scss from './main.css';

import configModules from '../config.modules';

const collection = new $a.Collection();
let list;

new $a.Component({
	name: 'main',
	directive: 'app',
	template: tmp,
	data: {
		world: 'world !'
		
	},
	on: {
		deleteAll () {
			console.log('deleteAll !! collection = ', collection, list);
			collection.cut(0, collection.models.length);
			list.reset();
		},

		keepVisible() {

			let vis = list.get('numVisibleItems'),
				first =  list.get('first');

			first > 0 && collection.cut(0, first);
			collection.cut(Math.min(vis, collection.models.length));
			list.gotoRecord(0);

			list.reset();
		},

		removePrev() {
			let first = list.get('first');

			console.log('removePrev !!');
			if (first > 0) {
				let cnt = Math.round(Math.random() * first);
				let firstModel = collection.models[first];
				console.log('first , cnt = ', first, cnt);
				collection.cut(0, cnt);
				list.reset();
				let ndx = collection.models.indexOf(firstModel);
				console.log('ndx = ', ndx);
				list.gotoRecord(ndx);
			}
		},

		removeNext() {
			console.log('removeNext !!');

			let first = list.get('first');
			let vis = list.get('numVisibleItems');
			let firstModel = collection.models[first];
			let from = Math.min(first + vis, collection.models.length);

			let cnt = Math.round(Math.random() * (collection.models.length - from) );
			let start = collection.models.length - cnt;
console.log('from, start , cnt = ', from, start, cnt);
			collection.cut(start, cnt);
			let ndx = collection.models.indexOf(firstModel);
			list.reset();

			list.gotoRecord(ndx);

			console.log('from, start , cnt = ', from, start, cnt, collection.models.length);

		}
	}
})
.render()

console.log('configModules = ', configModules);



$a.xhr.getJSON(
        'http://localhost:3005/records/0/2000',
        //'http://localhost:3005/children/0',
        function(response) {
          //this.Indexer[id] = response;
          //this.expandTree(this.Indexer[id], after);
          //let r = response.forEach((i)=>{ i.title = i.name});
          console.log('response = ', response);
          collection.initial(response);
          /*Collection.initial(response);
          infoBlock.set('total', response.length);
          infoBlock.render();*/



		list = new $a.iList({
				collection,
				directive: 'smplist',
				data: {
					numItems: 13 // Note: visible items is equal: numItems - 3
				},
				components: [
					{name: 'item', kind: $a.Component, template: '<div style="position: absolute; width:100%; left: 0; padding-left:5px; height: 20px; transform: translate3d(0, 0, 0); ">{{name}}</div>'}
				]
			})
			.render();
			console.log('list = ', list);


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
//console.log('list = ', list);

export default {};