const express = require('express');
const path=require('path');
const server=express();

server.use(express.static(path.join(__dirname,'./')));
server.listen(3000,()=>{
    console.log('app listening at port 3000')
});