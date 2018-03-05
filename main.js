const Bacon = require('baconjs');
const translate = require('google-translate-api');

function getInGerman(word) {
    const promise = translate(word, {to: 'german'});

    const stream = Bacon.fromPromise(promise);
    return stream
}

const stream = new Bacon.Bus();

stream
    .flatMap(word => getInGerman(word))
    .onValue(word => console.log(word.text));

stream.push('engineering');
stream.push('dog');
stream.push('steak');