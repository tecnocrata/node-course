//Complex Callback
/* let myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("Success!"); // Yay! Everything went well!
    }, 10000);
});

myFirstPromise.then((successMessage) => {
    console.log("10 seconds again! " + successMessage);
}); */


let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
getText = function(url, callback) // How can I use this callback?
{
    let request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
        if (request.readyState == 4 && request.status == 200)
        {
            callback(request.responseText); // Another callback here
        }
    }; 
    request.open('GET', url);
    request.send();
}

function mycallback(data) {
   console.log(data);
}

getText('https://github.com/tecnocrata/', mycallback);
