var AWS = require("aws-sdk") //Se importa librería
const config = require("../config/config.js") //Se llama archivo creado previamente de configuración
AWS.config.update(config.aws_local_config) //Se define en AWS la configuración local
const doClient = new AWS.DynamoDB.DocumentClient() //Se crea el cliente de AWS

const saveData= function(id, name, email, peliculas_favoritas){ //Se define la función encargada de crear los datos en la table de Dynamo
    var object = { //Crear objeto para almacenar en la base de datos
        "id": id,
        "name": name,
        "email": email,
        "created_at": new Date().toString(),
        "peliculas_favoritas": peliculas_favoritas
    }

const params = {
    TableName: config.table_course, //Nombre de la table donde se almacenará la información
    Item: object //Datos a insertar
}

doClient.put(params, function(err, data) { //Se llama función del objeto encargado de crear información
    if(err)
        console.log("Error: ", err) 
    else
        console.log("Datos almacenados correctamente ", data)
    })
}

peliculas_favoritasA = [
[
    {
        "nombre": "The Dark Knight",
        "id_pelicula": "1",
        "fecha_estreno": "2008-07-14"
    },
    {
        "nombre": "Enola Holmes",
        "id_pelicula": "8",
        "fecha_estreno": "2020-09-23"
    }
],

[
    {
        "nombre": "The Dark Knight",
        "id_pelicula": "1",
        "fecha_estreno": "2008-07-14"
    },
    {
        "nombre": "Enola Holmes",
        "id_pelicula": "8",
        "fecha_estreno": "2020-09-23"
    },
    {
        "nombre": "El Hoyo",
        "id_pelicula": "3",
        "fecha_estreno": "2019-11-08"
    },
    {
        "nombre": "Invencible ",
        "id_pelicula": "10",
        "fecha_estreno": "2014-12-25"
    }
],
[
    
    {
        "nombre": "El Hoyo",
        "id_pelicula": "3",
        "fecha_estreno": "2019-11-08"
    },
    {
        "nombre": "Invencible ",
        "id_pelicula": "10",
        "fecha_estreno": "2014-12-25"
    },
    {
        "nombre": "The Dark Knight",
        "id_pelicula": "1",
        "fecha_estreno": "2008-07-14"
    },
    {
        "nombre": "Enola Holmes",
        "id_pelicula": "8",
        "fecha_estreno": "2020-09-23"
    },
    {
        "nombre": "Su Ultimo Deseo",
        "id_pelicula": "9",
        "fecha_estreno": "2020-02-21"
    },
    {
        "nombre": "El Show de Trouman",
        "id_pelicula": "4",
        "fecha_estreno": "1998-06-01"
    }
],

[
    {
        "nombre": "The Dark Knight",
        "id_pelicula": "1",
        "fecha_estreno": "2008-07-14"
    },
    {
        "nombre": "Enola Holmes",
        "id_pelicula": "8",
        "fecha_estreno": "2020-09-23"
    },
    {
        "nombre": "El Hoyo",
        "id_pelicula": "3",
        "fecha_estreno": "2019-11-08"
    },
    {
        "nombre": "Invencible ",
        "id_pelicula": "10",
        "fecha_estreno": "2014-12-25"
    }
]
]


data = [
[38	,"Maria@gmail.com",	"Maria Hernandez"],
[39	,"jaime@gmail.com",	"Jaime Cardenas"],
[40	,"lina@gmail.com",	"Lina Maduro"],
[41	,"Carlos123@gmail.com", "Carlos Restrepo"],
[42	,"lola@gmail.com",	"Lola Murillo"],
[43	,"marta@gmail.com",	"Marta Gomez"],
[44	,"david@gmail.com",	"David Gutierrez"],
[45	,"camila@gmail.com",	"Camila Pineda"],
[46	,"camilo@gmail.com",	"Camilo Rendon"],
[47	,"juana@gmail.com",	"Juana Duran"],
[48	,"valeria@gmail.com",	"Valeria Mercury"],
[49	,"oscar@gmail.com",	"Oscar Garcia"],
[50,	"mateo@gmail.com",	"Mateo Jimenez"],
[51,	"enrique@gmail.com",	"Enrique Alvarez"],
[52,	"rodolfo@gmail.com",	"Rodolfo Traba"]
]



for (const dato of data) {
   
    saveData(dato[0].toString(), dato[2], dato[1], peliculas_favoritasA[ Math.floor( Math.random() * 4) ] )
}
  
