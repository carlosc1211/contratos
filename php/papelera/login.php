<?php
	include '../config/conf.php';
	require('../lib/ldap/activedirectory.php');
	require('../lib/ldap/activedirectory_valores.php');
	$conn = mysql_connect($BD_HOST,$BD_USER,$BD_PASSWORD);
	//selecciono la BBDD
	mysql_select_db($BD_NAME,$conn); 
	$result = mysql_query ('SELECT * FROM tr017_usuario WHERE in_activo=1 AND tx_usuario="'.strtoupper($_REQUEST['tx_usuario']).'"');
	$row = mysql_fetch_row ( $result );
	if($row!=null)   //estas en ldap? compara usuario y clave
	{  
		$ActiveD    = ActiveDirectory(strtolower($_REQUEST['tx_usuario']),$_REQUEST['tx_password']);
		$ActiveDVal = ActiveDirectory_valores(strtolower($_REQUEST['tx_usuario']));
		if($ActiveD==1)//1
		{ 
			echo "{resp: true}";
		}
		else{
			echo "{resp: false, errors: { reason: 'La contrase&ntilde;a propocionada no es la correcta' }}";
		}
	}
	else
	{
		echo "{resp: false, errors: { reason: 'El usuario ingresado no cuenta con acceso a este sistema' }}";
	}
?>



	
	
	
	

	
	
	
	

