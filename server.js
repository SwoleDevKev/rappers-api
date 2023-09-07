const express = require('express')
const app = express()
const Port = 8000

const rappers= { 
    '21 savage': {
    'birthname': 'Shéyaa Bin Abraham-Joseph' ,
    'age': 29 ,
    'birthlocation': 'London, England' 
     },
     'chance the rapper': {
        'age':29,
         'birthname': 'Chancellor Bennet',
         'birthLocation': 'Chicago, illinois',

     },
     'unknown': {
        'age':0,
        'birthname': 'unknown',
        'birthLocation': 'unknown' 
     }

}

app.get('/', (request,response) => {

   response.sendFile(__dirname +'/index.html')
})


app.get('/api/:name', (req,res)=> {
    const rapperName = req.params.name.toLowerCase()
    
    if (rappers[rapperName]){
        res.json(rappers[rapperName])
    } else {
        res.json(rappers['unknown'])
    }
    
})

app.listen( Port,()=> {
    console.log(`The server is now running on ${Port} ! Betta Go catch it!`)
})