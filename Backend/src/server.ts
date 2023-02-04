import app from "./app";
import AppDataSource from "./data-source";
import "dotenv/config"

(async () => {

    await AppDataSource.initialize()
    .then(()=>{
        console.log("data source initialized")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
    // let port = 3050
    app.listen(process.env.PORT, () => {
        console.log(`Servidor executando na porta ${process.env.PORT}`)
        console.log(`http://${process.env.HOST}:${process.env.PORT}`)
    })    
})()