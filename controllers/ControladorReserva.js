//una clase controlador establñece los metodos (ACCIONES)
//que vamos a realizar en BD
//DEFINO LAS RUTAS PARA EL ARCHIVO DE RUTAS

export class ControladorReserva{

    constructor(){}

    agregarReserva(request,response){
        try{
            response.status(200).json({
                "mensaje":"Exito en la operacion",
                "datos":null
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Fallamos en la consulta"+error,
                "datos":null
            })
        }
    }
    consultarReservas(request,response){
        try{
            response.status(200).json({
                "mensaje":"Exito en la operacion de busqueda de reservas",
                "datos":null
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Fallo en la operacion"+error,
                "datos":null
            })
        }
    }
    consultarReserva(request,response){
        try{
            response.status(200).json({
                "mensaje":"Exito en la operacion de busqueda de una reserva",
                "datos":null
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallo en la operacion"+error,
                "datos":null
            })
        }
    }
    editarReserva(request,response){
        try{
            response.status(200).json({
                "mensaje":"Exito en la operacion de edicion",
                "datos":null
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"Exito en la operacion"+error,
                "datos":null
            })
        }
    }

    
}