<?php
    session_start();
    require_once 'MyPDO.php';
    if (isset($_SESSION['tx_usuario'])) {
        $objSesion = new MyPDO();
        $objSesion->_update("c014t_log_usuarios", array("fe_salida"=>date("Y-m-d H:i:s")), array("co_sesion"=>$_SESSION['co_sesion']));
        echo "{success:true,indicador:'" . $_SESSION['tx_usuario'] . "'}";
    } else {
        echo "{success:false,indicador:'" . $_SESSION['tx_usuario'] . "'}";
    }
?>
