function consultar() {

    var fecha = new Date(2014, 00, 01);
    var fechaMaxima = new Date(2050, 00, 01);
    var anioDomingo = 0;

    //var dias=["D", "L", "M", "X", "J", "V", "S"];
    

    for (let i=2014; i <= 2050; i++) {
        var fecha=new Date (i, 0, 1); 
        var diaSemana = fecha.getDay();

        if (fecha.getDay() == 0) {
            console.log(fecha); 
            
            anioDomingo++;
        }
    }

    console.log ("Desde 2014 a 2050 hay " + anioDomingo + " domingos."); 

}