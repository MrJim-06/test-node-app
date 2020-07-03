import 'reflect-metadata'
import app from './app'

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server lintening on http://127.0.0.1:${port}`)
})
