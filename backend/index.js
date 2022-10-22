'use strict'

var mongoose=require('mongoose');
var app=require('./app');
var port=3700;

//Conectar con el servidor
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/Portafolio2')
	.then(()=>{
		console.log("Conexión a la base de datos con exito....");


		//Creacion del servidor
		app.listen(port,()=>{
			console.log("Servidor corriendo correctamente en la url:localhost:3700");
		});


	})
	.catch(err=>console.log(err));


