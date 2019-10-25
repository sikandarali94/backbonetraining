const Song = Backbone.Model.extend({
    /* Backbone automatically calls the initialize function when the model is instantiated. Similar to constructor()
    method of classes. */
    initialize() {
        console.log('A new song has been created.');
    },
    /* We can set default attribute by defining the defaults object, as shown below. */
    defaults: {
        genre: 'Jazz'
    },
    /* Say we wanted to enforce that every instance of the Song model should have a title attribute. We validate this
    using the validate method (this method is passed all attributes as an object; Backbone expects that we return a
    string error message if validation fails), as shown below. */
    validate(attrs) {
        if (!attrs.title) {
            return 'Title is required';
        }
    }
});

/* We instantiate a model with the new operator, as shown below. */
/* We can also set the attributes when initializing the model. */
const song = new Song({
    artist: 'Miles Davis',
    publishYear: 1959
});

/* We can check if a model is valid or not by calling the .isValid() method, as shown below. */
console.log(song.isValid());

/* To get the last validation error message we can access the validationError property (in our case, the error message
is: 'Title is required'), as shown below. */
console.log(song.validationError);

/* We use the set() method to set an attribute of a Backbone model. First argument is the attribute name and the
second argument is the attribute value. */
song.set('title', 'Blue in Green');

console.log(song.isValid());

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

const Animal = Backbone.Model.extend({
    walk() {
        console.log('Animal walking...');
    }
});

/* So if we want to inherit properties and methods from a model, we use the .extend() method, as shown below. */
const Dog = Animal.extend({
    /* If method of the model inheriting from a super model is the same, the method of the model is the one executed.
    However, if we want to call the method of the super model, we can call it through the prototype, as shown below.*/
    walk() {
        Animal.prototype.walk.apply(this);
        console.log('Dog walking...');
    }
});

const dog = new Dog();

dog.walk();

/* Backbone has models that can be synchronized with a persistent store using a RESTFul API on the server. It offers
three methods to work with a persistent store: fetch() [GET], save() [POST/PUT] and destroy() [DELETE]. All these
methods are asynchronous and accept a success and error callback We set the URL of the API using the urlRoot property
(this is compulsory otherwise there would an error if we use any of the RESTful methods), as shown below. */
const Spotify = Backbone.Model.extend({
    urlRoot: '/api/songs',
    /* By convention, Backbone assumes our models have an attribute called id which is use for uniquely identifying
    models. However. if we use a different convention (as is the case here) we can use the idAttribute to tell
    Backbone which property of our model is used as the identifier (in our case, the identifier is songId). */
    songId: 1,
    idAttribute: 'songId'
});

/* Below is how we simply use one the RESTful methods. The second example demonstrates the usage of success and error
callbacks. The third example demonstrates how the save method uses callbacks differently compared to the other RESTful
methods; the first method is where we supply the hash of the attributes that we want to set and save; it is a shortcut
rather than using the .set() method and then calling the .save() method; either way is fine. */

// song.destroy();

// song.fetch({
//     success() {
//         console.log('Success');
//     },
//     error() {
//         console.log('Failure');
//     }
// });

// song.save({}, {
//     success() {
//         console.log('Success');
//     },
//     error() {
//         console.log('Failure');
//     }
// });