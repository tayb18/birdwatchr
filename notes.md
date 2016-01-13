Update package.json

By default Heroku will try and start server with "npm start", so add
"npm start: node app.js" to package.json

Add mongo to heroku

```
$ heroku addons:create mongolab
```

The MongoLab add-on contributes one config variable to the Heroku environment: MONGOLAB_URI

need to reconfigure app.js to use that or local dev url.
