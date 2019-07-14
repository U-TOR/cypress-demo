Cypress.io Testing Demo Project
===============================

This project shows Cypress.io tools on ["RealWorld example app"](https://github.com/gothinkster/realworld). We used React + Redux client + Node/Express server. Also, [Testing Workshop](https://github.com/kentcdodds/testing-workshop) project was a good inspiration for this Project

Requirements:
-------------
- Node
- Docker or Mongo 

Run app 
-------

1. Install dependencies 
    ```
    npm run dev:install
    ```
2. Start DB    
    a. With Mongo 
    ```
    mongod --config /usr/local/etc/mongod.conf
    ```   
    _or_   
    b. With Docker 
    ```
    npm run mongo:start
    ```
3. Run servers 
   ```
   npm run dev:run
   ```


Workshop steps: 
---------

1. _8b26a_ - Cypress install
    ```
    npm install cypress --save-dev
    $(npm bin)/cypress open
    ```
2. Add signup test
3. _a63b3_ - Seed DB plugin   
    a. Install Mongoose module    
    ```
    npm install --save-dev mongoose
    ```
    b. Add plugin
    ```
    const url = 'mongodb://localhost:27017';
    const dbName = 'conduit';
    const client = new MongoClient(url);

    client.connect(function(err) {
        const db = client.db(dbName);
        db.collection('users').findOneAndDelete({ email: email });
        client.close();
    });

    return null;
    ```
    


