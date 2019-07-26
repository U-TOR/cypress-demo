Cypress.io Testing Demo Project [![Build Status](https://travis-ci.com/vikmaksimenko/cypress_demo.svg?branch=master)](https://travis-ci.com/vikmaksimenko/cypress_demo)
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
3. Restore a data to DB    
    a. With Mongo 
    ```
    npm mongo:restore:local
    ```   
    _or_   
    b. With Docker 
    ```
    npm mongo:restore
    ```
4. Run servers 
   ```
   npm run dev:run
   ```
5. Run tests: 
    ```
    npm run cy:run:record
    ```
6. (Optional) To run tests with Mochawesome reporter, call 
    ```
    npm run e2e_mochawesome
    ```
    See reports on http://cypress-demo.surge.sh/

Cypress Dashboard
-----------------

To view test runs in Cypress Dashboard, follow https://dashboard.cypress.io/#/projects/3v3cpa/runs

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
4. Add test for posts: 
    a. Restore DB with user testuser@test.com/1q1q1q from backup
    ```
    npm run mongo:restore
    ```    
    b. To login, do POST with creds to /api/users/login and set them to local storage to "jwt"
    c. Add test. Use fixtures for post data
5. Show cypress dashboard
    

