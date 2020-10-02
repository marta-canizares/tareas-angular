let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');


let app = express();

// consiguracion del cors con url y estatus
let corsOpt = {
    origin: 'http://localhost:4200',
    optionsSucessStatus: 200
}

let tareas = [{ trabajo: 'Primera tarea', usuario: 'Marta' },
{ trabajo: 'Segunda Tarea', usuario: 'Romeo' }];


// parserar las peticiones en JSON
app.use(bodyParser.json());



// Enrutador express
let api = express.Router();

api.use(cors());

// PETICION GET
api.get('/tareas', cors(corsOpt), (req, res) => {
    res.json(tareas);
});


// PETICION POST
api.post('/tarea', cors(corsOpt), (req, res) => {
    tareas.push(req.body);
    res.json(req.body);
});


app.use('/api', api)

app.listen(7070);