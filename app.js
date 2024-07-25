import express from 'express'
import { router as indexPath} from './router/index.js';
import { router as genericPath} from './router/generic.js';
import { router as elemPath} from './router/elements.js';
const app = express()
const port = 8080
app.use(express.static('public'));
app.set('view engine','hbs')


app.use('/', indexPath);
app.use('/elements',elemPath);
app.use('/generic', genericPath);


app.listen(port,()=>{console.log(port)})