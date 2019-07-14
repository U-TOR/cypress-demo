// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const MongoClient = require('mongodb').MongoClient;

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

    on('task', {
        deleteUser (email) {
            const url = 'mongodb://localhost:27017';
            const dbName = 'conduit';
            const client = new MongoClient(url);

            client.connect(function(err) {
                const db = client.db(dbName);
                db.collection('users').findOneAndDelete({ email: email });
                client.close();
            });

            return null;
        }
    })
}
