Promise.reject().catch(function () {
    return 'Hello World';
})
    .then(function (value) {
        console.log(`fulfilled: ${value}`); // 'fulfilled: Hello World'
    })
    .catch(function (value) {
        console.log(`rejected: ${value}`);
    })