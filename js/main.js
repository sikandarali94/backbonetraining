/* Backbone collections are ordered set of models. They are useful when we want to work with a group of models. We can
create a collection in two ways: we can pass the initial array of models when creating the collection OR we can call the
.add() method on an instantiated collection. A collection has two important properties: length and models. Length is the
number of models in the collection and models holds all the individual models within an array of the collection.
A collection has two ids: client ID (cid) and persistent ID. cid is assigned by Backbone; it is a temporary identifier
used by Backbone to keep track of objects. persistent ID is assigned by the server. */

const Song = Backbone.Model.extend();

const Songs = Backbone.Collection.extend({
    model: Song
});

/* Below is the first way to build a collection. */
const songs = new Songs([
    new Song({ title: 'Song 1' }),
    new Song({ title: 'Song 2' }),
    new Song({ title: 'Song 3' })
]);

/* Below is the second way to build a collection. */
songs.add(new Song({ title: 'Song 4'}));

/* .at() method returns a model at a given index, as shown below. */
console.log(songs.at(0));

/* We can also get a model using the client ID (cid) or the persistent ID using the .get() method, as shown below. */
console.log(songs.get('c1'));

/* We can also remove a model from a collection using the .remove() method and passing the reference of the model we
want to remove (either using index, client ID (cid) or the persistent ID), as shown below. */
songs.remove(songs.at(0));