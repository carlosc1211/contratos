<?php
	header('Content-type: text/html; charset=ISO-8859-1');
	require("class.phpmailer.php");
	foreach (array_keys($_REQUEST) as $k)
	{
		$_REQUEST[$k]=stripslashes(urldecode($_REQUEST[$k]));
	}
	set_time_limit(0);
	function DarFormatoHTML($contenido)
	{
		$contenido = str_replace("á","&aacute;",$contenido);
		$contenido = str_replace("é","&eacute;",$contenido);
		$contenido = str_replace("í","&iacute;",$contenido);
		$contenido = str_replace("ó","&oacute;",$contenido);
		$contenido = str_replace("ú","&uacute;",$contenido);
		$contenido = str_replace("ñ","&ntilde;",$contenido);
		$contenido = str_replace("Á","&Aacute;",$contenido);
		$contenido = str_replace("É","&Eacute;",$contenido);
		$contenido = str_replace("Í","&Iacute;",$contenido);
		$contenido = str_replace("Ó","&Oacute;",$contenido);
		$contenido = str_replace("Ú","&Uacute;",$contenido);
		$contenido = str_replace("Ñ","&Ntilde;",$contenido);
		$contenido = str_replace("°","&deg;",$contenido);
		$contenido =str_replace('ü','&uuml;',$contenido);
		$contenido =str_replace('¡','&iexcl;',$contenido);
		return $contenido;
	}
	/*CONSTRUYE EL CONTENIDO DEL MENSAJE*/
	function createMail($co_control_doc,$nu_correc_doc,$co_estado){
		include_once('../config.php');
		$conn=mysql_connect($dbhost,$dbuser,$dbpasswd);
		mysql_select_db($dbname,$conn);
		$result=mysql_query("SELECT ude.*,e.*,d.*,
							us.nb_usuario AS nb_solicitante,
							uc.nb_usuario AS nb_coordinador
							FROM c006t_usr_doc_estado AS ude,c001t_documento AS d,i005t_estado AS e, c002t_usuario AS us, c002t_usuario AS uc
							WHERE ude.co_control_doc=d.co_control_doc AND ude.co_estado=e.co_estado AND
							d.co_indicador_sol=us.co_indicador AND d.co_indicador_coordinador=uc.co_indicador AND
							ude.co_control_doc=$co_control_doc AND ude.nu_correc_doc=$nu_correc_doc AND ude.co_estado=$co_estado");
		$row=mysql_fetch_assoc($result);
		$contenido='GERENCIA AUTOMATIZACIÓN, INFORMÁTICA Y TELECOMUNICACIONES<br/>
					COMITÉ DE REVISIÓN DE DOCUMENTOS REGIÓN ORIENTE<br/><br/>';
		$asunto="Documento N&deg; ".$row['co_control_doc']." | Estado:".$row['nb_estado'];
		$contenido.='
					N° de control: '.$row['co_control_doc'].'<br/>
					Título del documento: '.$row['tx_desc_doc'].'<br/>
					Solicitante: '.$row['nb_solicitante'].' [ '.$row['co_indicador_sol'].' ]<br/>
					Coordinador asignado: '.$row['nb_coordinador'].' [ '.$row['co_indicador_coordinador'].' ]<br/>
					Recibido el: '.$row['fe_ho_registro'].'<br/>
					Estado del documento: <b>'.$row['nb_estado'].'</b><br/>
					Estado actualizado el: '.$row['fe_ho_cambio'].'<br/>
					Estado actualizado por: '.$row['co_indicador_cam'].'<br/>';
		switch($co_estado){
			case 2:
				$contenido.='
				Revisor redacción/ortografía: '.$row['co_indicador_rev_ort'].'<br/>
				Revisor técnico: '.$row['co_indicador_rev_tec'].'<br/>
				Revisor administrativo: '.$row['co_indicador_rev_adm'].'<br/>';
			break;
		}			
		$contenido.='<br/>
		Si requiere información adicional o realizar el seguimiento a un documento ya introducido,
		puede utilizar cuaquiera de las siguientes vías:<br/>
		- Ingresar con Mozilla Firefox a la siguiente dirección web <b>http://orimat100/gesdoc</b><br/>
		- Enviar una nota al correo	electrónico <b>comiterevait@pdvsa.com</b><br/>';
		mysql_query("UPDATE c006t_usr_doc_estado 
					SET nu_notificacion=1 
					WHERE co_control_doc=000020 AND nu_correc_doc=0 AND co_estado=1");
		$asunto.=' | SISTEMA EN PERIODO DE PRUEBA';
		return array('asunto'=>$asunto,'cuerpo'=>$contenido,'solicitante'=>$row['co_indicador_coordinador']);
	}
	/***************************************/	
	function EnviarMail($co_control_doc,$nu_correc_doc,$co_estado){
		$mail = new PHPMailer();
		$mail->IsSMTP();
		$mail->Host = "plcguaapl01";
		//$mail->AddReplyTo("prueba@pdvsa.com", "prueba");
		$mail->WordWrap = 30;
		//$mail->From = $from;
		$mail->From = "COMITEREVAIT@PDVSA.COM";
		$mail->FromName = "COMITE DE REVISION DE DOCUMENTOS";
		$mail->IsHTML(true);  // set email format to HTML
		$correo=createMail($co_control_doc,$nu_correc_doc,$co_estado);
		$mail->Subject = html_entity_decode($correo['asunto']);
		$mail->Body    = DarFormatoHTML($correo['cuerpo']);
		//$mail->AddAddress($to);
		$mail->AddAddress("SUNIAGAR@PDVSA.COM");
		$mail->AddAddress("COMITEREVAIT@PDVSA.COM");
		$mail->AddAddress($correo['solicitante']."@PDVSA.COM");
		$mail->Send();
	}	
	//echo "ENVIADO";
	/*
	$from=$_REQUEST["from"];
	$fromName=$_REQUEST["fromName"];
	$mensaje=$_REQUEST["mensaje"];
	$asunto=$_REQUEST["asunto"];
	$destinatarios=split(",",$_REQUEST["destinatarios"]);
			   
	require("class.phpmailer.php");
		
	$mail = new PHPMailer();
	$mail->IsSMTP();
	$mail->Host = "167.175.55.154";
	$mail->WordWrap = 30;
	$mail->From = $from;
	$mail->FromName = $fromName;
	$mail->IsHTML(true);  // set email format to HTML
	$mail->Body    = DarFormatoHTML($mensaje);
	$mail->Subject = $asunto;

	for ($i=0;$i<count($destinatarios);$i++)
	{
		$mail->AddAddress($destinatarios[$i]);
	}

	echo $mail->Send();*/
?>
