const express = require('express');
const app = express();
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index');
// const UserRepository = require('./repository/user-repository');
const UserService = require('./services/user-service');
const db = require('./models/index');


const prepareAndStartServer = () => {
     
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api',apiRoutes);
    
    app.listen(PORT,async () => {
        console.log(`server started on port: ${PORT}`);
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter:true});
        }
       
      

        // const service = new UserService();
        // const newToken = service.createToken({email: 'anjali@admin.com',id:1});
        // console.log("new token is",newToken);
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuamFsaUBhZG1pbi5jb20iLCJpZCI6MSwiaWF0IjoxNzE2ODY4NDIzLCJleHAiOjE3MTY4NzIwMjN9.QWllb3zz-GofUa85w2Meyhz1eIj7w5Okyu-LuCoAdik'
        // const response = service.verifyToken(token);
        // console.log(response);
    });
}

prepareAndStartServer();