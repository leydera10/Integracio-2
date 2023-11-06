import mongoose from "mongoose";

mongoose.connect("mongodb+srv://leiderasis30:M2UCwmWsQlIGwGKC@cluster0.f7btw4v.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Conectado a la base de datos")
})
.catch(error => {
    console.error("Error al conectarse a la base de datos, error"+error)
})