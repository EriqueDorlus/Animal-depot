import express from 'express'
import { getAllAnimals, createAnimal, updateAnimal, getAnimalById, deleteAnimal, getAnimalsByFilter } from './src/animals.js';
 
const app = express();
app.use(express.json())

app.get(`/animals/:id`,async (req, res) => {
    try{
        const { id } =req.params
        const result = await getAnimalById(id)
        res.status(200).send(result)

    } catch (error) {
        res.status(500).send(error) 
    }

    
})

app.get('/animals', async (req, res) => {
    const {name, race, color, age} = req.query 
    const filter = {name, race, color, age}

        try {
        const result = await getAnimalsByFilter()
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
    //res.send('Dogs')

})

app.delete('/animals/:id', async (req, res) => {
    const { id } = req.params 

    try {
        const result = await deleteAnimal(id)
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.post('/animals', async (req, res) => {
    const animal = req.body;
    try{
        const result = await createAnimal(animal)
        res.status(201).send.length(result)
    }catch(error) {
        res.status(500).send(error)
    }
    

})

app.patch('/animals/:id', async (req, res)=>{
    const updateInput = req.body
    const { id } = req.params

    if(!updateInput) {
        res.status(400).send("Empty body")
        return
        
    }

    try {
        const result = await updateAnimal(id, updateInput)
        res.status(202).send(result)
    } catch (error) {
        res.status(500).send(error)
    }
})
const port = 5600
app.listen(port, () => { 
    
    console.log(`We are listening ${port}`)
} )
