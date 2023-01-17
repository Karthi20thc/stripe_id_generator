const express = require('express')
const app = express()
const port = 9000

// 
const IdGenerator = require('stripe-id-generator');

const generator = new IdGenerator();
const id = generator.new('cus');

console.log(id); // cus_lO1DEQWBbQAACfHO

app.get('/', (req, res) => {
  res.send(id)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})