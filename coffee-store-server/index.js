const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

 
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_pass}@cluster0.9jtha6u.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db('coffeeDB');
    const coffeeCollection = database.collection('coffeeCollection');
    const userCollection = database.collection('user');

    app.get('/coffee', async(req, res)=>{
      const cursor = coffeeCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.get('/coffee/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const coffee = await coffeeCollection.findOne(query);
      res.send(coffee);
    })

    app.post('/coffee', async(req, res)=>{
        const newCoffee = req.body;
        // console.log(newCoffee);
        const result = await coffeeCollection.insertOne(newCoffee);
        res.send(result);
    })

    app.delete('/coffee/:id', async(req, res) =>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await coffeeCollection.deleteOne(query);
      res.send(result);
    })

    app.put('/coffee/:id', async(req, res) =>{
      const id = req.params.id;
      const updatedCoffee = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = {upsert: true};
      const coffee = {
        $set:{
          coffeeName: updatedCoffee.coffeeName,
          chef: updatedCoffee.chef,
          supplier: updatedCoffee.supplier,
          taste: updatedCoffee.taste,
          category: updatedCoffee.category,
          details: updatedCoffee.details,
          photoUrl: updatedCoffee.photoUrl
        }
      }
      const result = await coffeeCollection.updateOne(filter, coffee, options);
      res.send(result);
    })

    // user apis
    app.get('/user', async(req, res) => {
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    app.post('/user', async(req, res) =>{ 
      const user = req.body;
      const result = await userCollection.insertOne(user);
      res.send(result);
    })

    app.delete('/user/:id', async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await userCollection.deleteOne(query);
      res.send(result);
    })

    app.patch('/signin', async(req, res) =>{
      const user = req.body;
      const filter = {email: user.email};
      const updateDoc = {
        $set:{
          lastLoggedAt: user.lastLoggedAt
        }
      }
      const result = await userCollection.updateOne(filter, updateDoc);
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) =>{
    res.send('coffee shop server is running');
})

app.listen(port, ()=>{
    console.log(`coffee shop server is running on port: ${port}`);
})