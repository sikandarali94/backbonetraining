const Song = Backbone.Model.extend({
    /* Backbone automatically calls the initialize function when the model is instantiated. Similar to constructor()
    method of classes. */
    initialize() {
        console.log('A new song has been created.');
    },
    /* We can set default attribute by defining the defaults object, as shown below. */
    defaults: {
        genre: 'Jazz'
    }
});

/* We instantiate a model with the new operator, as shown below. */
/* We can also set the attributes when initializing the model. */
const song = new Song({
    title: 'Blue in Green',
    artist: 'Miles Davis',
    publishYear: 1959
});

/* We use the set() method to set an attribute of a Backbone model. First argument is the attribute name and the
second argument is the attribute value. */
song.set('title', 'Blue in Green');

/* We can also pass a JS object into the set method to set multiple attributes at once. */
song.set({
    artist: 'Miles Davis',
    publishYear: 1959
});

/* If we wanted to get a JSON representation of our attribute model we just call the .toJSON() method, as shown
below. */
const jsonSong = song.toJSON();

/* We can get an attribute by calling the get() method, as shown below. */
song.get('title');

/* We can remove an attribute by calling the unset() method, as shown below. */
song.unset('title');

/* We can remove all attributes of a model by calling the clear() method, as shown below. */
song.clear();

/* To check if a model has a particular attribute, we use the has() method (which returns a boolean), as shown below. */
song.has('title');