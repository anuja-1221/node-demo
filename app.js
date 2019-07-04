const express= require('express');
const app=express();
var port =process.env.PORT || 2000;
app.get('/',(req,res) => res.send('Hello World !'));
app.listen(port,()=> console.log('server is running on port '+port));
