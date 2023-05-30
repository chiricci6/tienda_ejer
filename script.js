console.log("La eleccion ingresada es: " + opcion)
while(opcion!=10){ //hasta que la persona quiera salir
    switch(opcion){
        case 1: //gatos
            const gatos = {
                color: function(){
                    alert("Colores de gatos disponibles")
                    console.log("Naranja")
                    console.log("Negro")
                    console.log("Blanco")
                    console.log("Gris")
                    console.log("Tricolor")
                },
                peso: function(){
                    console.log("1 a 2 kg")
                    console.log("2 a 3 kg")
                    console.log("3 a 4 kg")
                    console.log("4 a 5 kg")
                },
            }
            alert("1. Por color // 2. Por peso")
            var seleccion=parseFloat(prompt("Ingrese un numero de opcion: "))
            seleccion=validar1(seleccion) //valida que sea valido
            console.log("La opcion seleccionada es: " + seleccion)
            if(seleccion==1){ //por color
                gatos.color() 
            }
            if(seleccion==2){ //llamo por peso
                gatos.peso()
            }
            break
        case 2:
            const mueble = {
                altura: function(){
                    console.log("200 cm")
                    console.log("205 cm")
                    console.log("210 cm")
                    console.log("215 cm")
                    console.log("220 cm")
                },
                colorm: function(){
                    console.log("Negro")
                    console.log("Blanco")
                    console.log("Madera oscura")
                    console.log("Madera clara")
                    console.log("Pino")
                },
            }
            alert("1. Por altura // 2. Por color")
            var seleccion=parseFloat(prompt("Ingrese un numero de opcion: "))
            seleccion=validar1(seleccion) //valida que sea valido
            console.log("La opcion seleccionada es: " + seleccion)
            if(seleccion==1){ //llamo por altura
                mueble.altura()
            }
            if(seleccion==2){ //llamo por color
                mueble.colorm()
            }
            break
        case 3:
            const celular = {
                marca: function(){
                    console.log("Samsung")
                    console.log("Motorola")
                    console.log("Xiaomi")
                },
                camaras: function(){
                    console.log("1 camara")
                    console.log("2 camaras")
                    console.log("3 camaras")
                    console.log("4 camaras")
                },
            }
            alert("1. Por marca // 2. Por cantidad de camaras")
            var seleccion=parseFloat(prompt("Ingrese un numero de opcion: "))
            seleccion=validar1(seleccion) //valida que sea valido
            console.log("La opcion seleccionada es: " + seleccion)
            if(seleccion==1){ //llamo por marca
                celular.marca()
            }
            if(seleccion==2){ //por cantidad de camaras
                celular.camaras()
            }
            break 
        case 10:
            break
    }
    alert("1. Gatos // 2. Muebles // 3. Celulares // 10. Salir")
    var opcion=parseFloat(prompt("Ingrese un numero de opcion: "))
    opcion=eleccion(opcion) //valida que sea valido
    console.log("La eleccion ingresada es: " + opcion)  
}