const Song = Backbone.Model.extend({
    /* Backbone automatically calls the initialize function when the model is instantiated. Similar to constructor()
    method of classes. */
    initialize() {
        console.log('A new song has been created.');
    }
});

/* We instantiate a model with the new operator, as shown below. */
const song = new Song();