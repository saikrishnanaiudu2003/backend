const mongoose = require('mongoose')
const configureDB=async(req,res)=>{
    try{
        await mongoose.connect('mongodb+srv://myAtlasDBUser:Sai123@myatlasclusteredu.qifwasp.mongodb.net/task?retryWrites=true&w=majority&appName=myAtlasClusterEDU',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        
        )
        console.log('db connected')
        
    }catch(e){
        console.log('error connecting db')
    }
}
module.exports=configureDB
