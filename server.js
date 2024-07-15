const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/telegraph/:url', async (req, res) => {
  const telegraphUrl = req.params.url;
  try {
    const response = await fetch(telegraphUrl);
    if (!response.ok) {
      throw new Error(Telegraph request failed: ${response.status});
    }
    const telegraphContent = await response.text();
    res.send(telegraphContent); // Send the Telegraph content to the iframe
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
