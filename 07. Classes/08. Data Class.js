class Request {
    constructor(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.versoin = version;
        this.message = message;
    }
    response;
    fulfilled = false;
    
}

let myData = new Request("GET", "http://google.com", "HTTP/1.1", "")
console.log(myData);