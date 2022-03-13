import connect from './connect.js'

const animalCollection = connect().collection('animal')

export const getAllAnimals = async () => {

    try{
        const anapshot = await animalCollection.get()
        const result = snapshot.docs.map( doc => {
            const animal = doc.data()
            animal.id = doc.id
            return animal
        })

        return result
    }

    catch(error){
        console.error(error)
    }
    
}
export const createAnimal = async (animal) => {
    try{

        const result = await animalCollection.add(animal)
        animal.id = result.id
        return animal 
    }
    catch(error){
        console.log(error)
    }


}