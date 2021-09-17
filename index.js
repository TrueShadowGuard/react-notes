const express = require('express');
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, 'front', 'build')))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'front', 'build', 'index.html'))
})

app.listen(process.env.PORT || 80, () => console.log('server started'))
