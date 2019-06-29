(function(){
    /**
     * Assignment for Joseph:
     * if the header already says "Hello Guyz" make the header go back to saying "Hello World" 
     */
    document.querySelector('button').addEventListener('click', function() {
        document.querySelector('h1').innerHTML = 'Hello Guyz';
    });
})();

