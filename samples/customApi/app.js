var app = require('express')(),
    mobileApp = require('azure-mobile-apps')()

mobileApp.api.import('api')
app.use(mobileApp);    // Register the Azure Mobile Apps middleware
app.listen(process.env.PORT || 3000); 
