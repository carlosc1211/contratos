<?php  
    //error_reporting(E_ALL & ~E_NOTICE);
    
    function ActiveDirectory($usua,$pass)
    {
    include '../config/conf.php';
    if ((!$usua=='')&&(!$pass=='')){
       $ds=ldap_connect($SERVIDOR_LDAP);
       @ldap_set_option($ds,LDAP_OP_PROTOCOL_VERSION, 3);
       $bind=@ldap_bind($ds,$usua."@PDVSA.COM",$pass);
       return $bind;
    }
    else{
       $bind=0;
    }
    return $bind;
    }
?>
