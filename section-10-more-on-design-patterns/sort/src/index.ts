import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';

const numberCollection = new NumbersCollection([10,3,-5,50]);
numberCollection.sort();
console.log(numberCollection.data);


const charactersCollection = new CharactersCollection('Xavb');
charactersCollection.sort();
console.log(charactersCollection.data);


const linkedList = new LinkedList;
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();