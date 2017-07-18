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
							uc.nb_usuario AS nb_coordinador,
							u_ort.nb_usuario AS nb_ortografico,
							u_tec.nb_usuario AS nb_tecnico,
							u_adm.nb_usuario AS nb_administrativo
							FROM (c006t_usr_doc_estado AS ude,c001t_documento AS d,i005t_estado AS e, c002t_usuario AS uc)
							LEFT JOIN c002t_usuario AS us ON d.co_indicador_sol=us.co_indicador
							LEFT JOIN c002t_usuario AS u_ort ON d.co_indicador_rev_ort=u_ort.co_indicador
							LEFT JOIN c002t_usuario AS u_tec ON d.co_indicador_rev_tec=u_tec.co_indicador
							LEFT JOIN c002t_usuario AS u_adm ON d.co_indicador_rev_adm=u_adm.co_indicador
							WHERE ude.co_control_doc=d.co_control_doc AND ude.co_estado=e.co_estado AND
							d.co_indicador_coordinador=uc.co_indicador AND
							ude.co_control_doc=$co_control_doc AND ude.nu_correc_doc=$nu_correc_doc AND ude.co_estado=$co_estado");
		$row=mysql_fetch_assoc($result);
		$contenido='GERENCIA AUTOMATIZACIÓN, INFORMÁTICA Y TELECOMUNICACIONES<br />
					COMITÉ DE REVISIÓN DE DOCUMENTOS REGIÓN ORIENTE<br /><br />';
		$asunto="Documento N&deg; ".$row['co_control_doc']." | Estado:".$row['nb_estado'];
		$contenido.='
					N° de control: '.$row['co_control_doc'].'<br />
					Título del documento: '.$row['tx_desc_doc'].'<br />
					Solicitante: '.$row['nb_solicitante'].' [ '.$row['co_indicador_sol'].' ]<br />
					Coordinador asignado: '.$row['nb_coordinador'].' [ '.$row['co_indicador_coordinador'].' ]<br />
					Recibido el: '.$row['fe_ho_registro'].'<br />
					Estado del documento: <b>'.$row['nb_estado'].'</b><br />
					Estado actualizado el: '.$row['fe_ho_cambio'].'<br />
					Estado actualizado por: '.$row['co_indicador_cam'].'<br />';
		switch($co_estado){
			case 1:
				$asunto.=' | ACUSE DE RECIBO';
			break;
			case ($co_estado>=2 && $co_estado<=5):
				$contenido.='
				Revisor redacción/ortografía: '.$row['nb_ortografico'].' [ '.$row['co_indicador_rev_ort'].' ]<br />
				Revisor técnico: '.$row['nb_tecnico'].' [ '.$row['co_indicador_rev_tec'].' ]<br />
				Revisor administrativo: '.$row['nb_administrativo'].' [ '.$row['co_indicador_rev_adm'].' ]<br />';
			break;
		}			
		$contenido.='<br />
		Si requiere información adicional o realizar el seguimiento a un documento ya introducido,
		puede utilizar cuaquiera de las siguientes vías:<br />
		- Ingresar con Mozilla Firefox a la siguiente dirección web <b>http://orimat100/gesdoc</b><br />
		- Enviar una nota al correo	electrónico <b>comiterevait@pdvsa.com</b><br />';
		mysql_query("UPDATE c006t_usr_doc_estado 
					SET nu_notificacion=1 
					WHERE co_control_doc=$co_control_doc AND nu_correc_doc=$nu_correc_doc AND co_estado=$co_estado");
		//$asunto.=' | SISTEMA EN PERIODO DE PRUEBA';
		
		return array('asunto'=>$asunto,'cuerpo'=>$contenido,'solicitante'=>$row['co_indicador_sol'],'coordinador'=>$row['co_indicador_coordinador']);
	}
	/***************************************/	
	//function EnviarMail($co_control_doc,$nu_correc_doc,$co_estado){
		$co_control_doc='000550';
		$nu_correc_doc='0';
		$co_estado='5';
		$mail = new PHPMailer();
		$mail->IsSMTP();
		$mail->Host = "plcguaapl01";
		//$mail->AddReplyTo("prueba@pdvsa.com", "prueba");
		$mail->WordWrap = 30;
		//$mail->From = $from;
		$mail->From = "COMITEREVAIT@PDVSA.COM";
		$mail->FromName = "COMITE DE REVISION DE DOCUMENTACION DE LA GERENCIA DE AIT ORIENTE";
		$mail->IsHTML(true);  // set email format to HTML
		$correo=createMail($co_control_doc,$nu_correc_doc,$co_estado);
		$mail->Subject = html_entity_decode($correo['asunto']);
		$mail->Body    = DarFormatoHTML($correo['cuerpo']);
		/*ENVIADO A*/
		//$mail->AddAddress($correo['solicitante']."@PDVSA.COM");
		//$mail->AddCC("COMITEREVAIT@PDVSA.COM");
		//$mail->AddCC($correo['coordinador']."@PDVSA.COM");
		$mail->AddBCC("SUNIAGAR@PDVSA.COM");
		$mail->Send();
	//}	
?>
