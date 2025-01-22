const express=require('express')
const app = express();
const port=3000

app.get('/assistant/greet',(req,res)=>{
    const name = req.query.name
    const day = new Date().getDay();
    
    let dayMessage='';

    if (day===1) {
        dayMessage = "Happy Monday! Start your week with energy!"
    }
    else if (day===5) {
        dayMessage = "It's Friday! The weekend is near!"
    }
    else {
        dayMessage = "Have a wonderful day!"
    }

    const response = {
        welcomeMessage: `Hello ${name}, Welcome to our assistant app!`,
        dayMessage: dayMessage
    }

    res.send({
        "welcomeMessage": `Hello ${name}, Welcome to our assistant app!`,
        "dayMessage": dayMessage
    });

});

app.listen(port,()=>{
    console.log(`Virtual assistant API is running on port ${port}`);
})

