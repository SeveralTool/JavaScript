$(document).on('click', '#correo', function(e){
    e.preventDefault()
    let valor = $(this)[0].parentElement
    correo = $(valor).find('input').val()
    console.log(correo)
    if(correo.length >= 7 && /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(correo) == true ) {
        $.post('update.php',{correo}, function(response){
            console.log(response)
        })
    }else{
        $('#CORREO').val("Ingrese un correo valido")
        $('#CORREO').css("border-color","red")
        setTimeout(() => {
            $('#CORREO').val("")    
        }, 3000);
    }
})


// SeveralTool
