//ASIGNACION DE VARIABLES PARA LOS BOTONES EN DOM

const BotonUser = document.getElementById('btn-user')
const BotonHistorial = document.getElementById('btn-historial')
const BotonUserResponsive = document.getElementById('btn-user-res')
const BotonHistorialResponsive = document.getElementById('btn-historial-res')
const BotonPedidos = document.getElementById('btn-pedidos')
const BotonPedidosResponsive = document.getElementById('btn-pedidos-res')
const VentanaUser = document.getElementById('user')
const VentanaPedidos = document.getElementById('pedidos')
const VentanaHistorial = document.getElementById('historial')

//ASIGNACION DE ACCIONES POR CADA BOTON

BotonUser.addEventListener('click',function(){
    BotonUser.style.color = "red" //CAMBIAR COLOR
    BotonPedidos.style.color = "white" //CAMBIAR COLOR
    BotonHistorial.style.color = "white" //CAMBIAR COLOR
    BotonUserResponsive.style.color = "red" //CAMBIAR COLOR
    BotonPedidosResponsive.style.color = "white" //CAMBIAR COLOR
    BotonHistorialResponsive.style.color = "white" //CAMBIAR COLOR
    VentanaUser.style.display = "block" //MUESTRA ESTA VENTANA
    VentanaPedidos.style.display = "none" //OCULTA ESTA VENTANA
    VentanaHistorial.style.display = "none" //OCULTA ESTA VENTANA =>
})

BotonUserResponsive.addEventListener('click',function(){
    BotonUserResponsive.style.color = "red"
    BotonPedidosResponsive.style.color = "white"
    BotonHistorialResponsive.style.color = "white"
    BotonUser.style.color = "red"
    BotonPedidos.style.color = "white"
    BotonHistorial.style.color = "white"
    VentanaUser.style.display = "block"
    VentanaPedidos.style.display = "none"
    VentanaHistorial.style.display = "none"
})

BotonPedidos.addEventListener('click',function(){
    BotonUser.style.color = "white"
    BotonPedidos.style.color = "red"
    BotonHistorial.style.color = "white"
    BotonUserResponsive.style.color = "white"
    BotonPedidosResponsive.style.color = "red"
    BotonHistorialResponsive.style.color = "white"
    VentanaUser.style.display = "none"
    VentanaPedidos.style.display = "block"
    VentanaHistorial.style.display = "none"
})

BotonPedidosResponsive.addEventListener('click',function(){
    BotonUserResponsive.style.color = "white"
    BotonPedidosResponsive.style.color = "red"
    BotonHistorialResponsive.style.color = "white"
    BotonUser.style.color = "white"
    BotonPedidos.style.color = "red"
    BotonHistorial.style.color = "white"
    VentanaUser.style.display = "none"
    VentanaPedidos.style.display = "block"
    VentanaHistorial.style.display = "none"
})

BotonHistorial.addEventListener('click', function(){
    BotonUser.style.color = "white"
    BotonPedidos.style.color = "white"
    BotonHistorial.style.color = "red"
    BotonUserResponsive.style.color = "white"
    BotonPedidosResponsive.style.color = "white"
    BotonHistorialResponsive.style.color = "red"
    VentanaUser.style.display = "none"
    VentanaPedidos.style.display = "none"
    VentanaHistorial.style.display = "block"
})

BotonHistorialResponsive.addEventListener('click', function(){
    BotonUserResponsive.style.color = "white"
    BotonPedidosResponsive.style.color = "white"
    BotonHistorialResponsive.style.color = "red"
    BotonUser.style.color = "white"
    BotonPedidos.style.color = "white"
    BotonHistorial.style.color = "red"
    VentanaUser.style.display = "none"
    VentanaPedidos.style.display = "none"
    VentanaHistorial.style.display = "block"
})

//SeveralTool
