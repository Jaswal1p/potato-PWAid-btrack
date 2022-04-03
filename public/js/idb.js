// create variable to hold db connection
let db;

// establish a connection to IndexedDB database called 'potato_PWA' and set it to version 1
const request = indexedDB.open('potato_PWA', 1);

// this event will emit if the database version changes (nonexistant to version 1, V1 to V2, etc.)

request.onupgradeneeded = function(event) {
    // save a reference to the database
    const db = event.target.result;

    // create an object store (table) called `new_transaction`and set it to have an auto increment primary key of sorts
    db.createObjectStore('new_transaction', { autoIncrement: true}); 
};

// upon a successful
request.onsuccess = function(event) {
    // when db is successfully created with its object store (from onupgradeneeded event above) or simply established a connection, save reference to db in global variable

    db = event.target.result;

    // check if app is online, if yes run uploadTransaction() function to send all local db data to api

    if (navigator.online) {
       // uploadTrasaction();
    }
};

request.onerror = function(event) {
    // log error here
    console.log(event.target.errorCode);
};

