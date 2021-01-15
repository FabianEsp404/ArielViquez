<?php
    //Llamando a los campos
    $nombre = $_POST['nombre'];
    $email = $_POST['Email'];
    $mensaje = $_POST['Mensaje'];

    //Datos para el correo
    $destinatario = "fabi16viquez@hotmail.com";
    $asunto = "Contacto desde la página Web Viquez y Asociados";

    $carta = "De: $nombre \n";
    $carta.= "Correo: $email \n";
    $carta.= "Mensaje: $mensaje \n";

    //Enviando mensaje
    mail($destinatario,$asunto,$carta);
?>