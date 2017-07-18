<?php
    session_start();
    require_once 'MyPDO.php';
    $objSesion = new MyPDO();
    $objSesion->_update("c014t_log_usuarios", array("fe_salida"=>date("Y-m-d H:i:s")), array("co_sesion"=>$_SESSION['co_sesion']));
    session_destroy();
    session_unset();
?>
