const express = require('express');
const path = require('path')

const app = express();

console.log(__dirname)
app.use(express.static(path.join(__dirname, '..', 'build')))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
})

app.listen(process.env.PORT || 80, () => console.log('server started'))
