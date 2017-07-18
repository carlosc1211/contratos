<?php
	header('Content-type: text/html; charset=ISO-8859-1');
	require("class.phpmailer.php");
	/*foreach (array_keys($_REQUEST) as $k)
	{
		$_REQUEST[$k]=stripslashes(urldecode($_REQUEST[$k]));
	}*/
	//set_time_limit(0);
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
		$contenido =str_replace("ü","&uuml;",$contenido);
		$contenido =str_replace("¡","&iexcl;",$contenido);
		return $contenido;
	}
	/*CONSTRUYE EL CONTENIDO DEL MENSAJE*/
	function createMail($co_usuario_asignado,$co_usuario_asignador,$co_proceso,$co_tipo){
		include_once('../../config/conf.php');
		$usuario_asignado=array();
		$usuario_asignador=array();
		$conn=mysql_connect($BD_HOST,$BD_USER,$BD_PASSWORD);
		mysql_select_db($BD_NAME,$conn);
		switch($co_tipo){
			case 1:
				$result0=mysql_query("SELECT *,CONCAT(tx_rango, ' (',monto_min,' Bs. a ',monto_max,' Bs.)') AS tx_categoria
									FROM c003t_proyecto py
									LEFT JOIN i002t_ubicacion u ON py.co_ubicacion=u.co_ubicacion
									LEFT JOIN i005t_organizacion o ON py.co_organizacion=o.co_organizacion
									LEFT JOIN i020t_prioridad pr ON py.co_prioridad=pr.co_prioridad
									LEFT JOIN i018t_tipo_presupuesto tp ON py.co_tipo_presupuesto=tp.co_tipo_presupuesto
									LEFT JOIN i017t_rango cat ON py.co_rango=cat.co_rango
									WHERE co_proyecto=$co_proceso");
				$data=mysql_fetch_assoc($result0);
				$result1=mysql_query("SELECT * FROM c001t_usuario WHERE co_rol=4 AND co_ubicacion=$data[co_ubicacion_usuario] AND co_organizacion=$data[co_organizacion_usuario]");
				while($row=mysql_fetch_assoc($result1)){
					array_push($usuario_asignado,$row['tx_indicador']);
				}
				$result2=mysql_query("SELECT * FROM c001t_usuario WHERE co_usuario=$data[co_usuario] OR(co_rol=2 AND co_ubicacion=$data[co_ubicacion_usuario] AND co_organizacion=$data[co_organizacion_usuario])");
				while($row=mysql_fetch_assoc($result2)){
					array_push($usuario_asignador,$row['tx_indicador']);
				}
				$result2=mysql_query("SELECT * FROM c001t_usuario WHERE co_usuario=$data[co_usuario]");
				$row=mysql_fetch_assoc($result2);
				$cuerpo_msj="<b>Año:</b> $data[nu_anio]<br />
					<b>Descripción del Proceso:</b> $data[tx_proyecto]<br />
					<b>Ubicación:</b> $data[tx_ubicacion]<br />
					<b>Organización:</b> $data[tx_organizacion]<br />
					<b>Prioridad:</b> $data[tx_prioridad]<br />
					<b>Tipo de Presupuesto:</b> $data[tx_tipo_presupuesto]<br />
					<b>Categoría de Contratación:</b> $data[tx_categoria]<br />";
			break;
			case 2:
				$result0=mysql_query("SELECT *,CONCAT(tx_rango, ' (',monto_min,' Bs. a ',monto_max,' Bs.)') AS tx_categoria
									FROM c004t_proceso p
									LEFT JOIN c003t_proyecto py ON p.co_proyecto=py.co_proyecto
									LEFT JOIN i002t_ubicacion u ON py.co_ubicacion=u.co_ubicacion
									LEFT JOIN i005t_organizacion o ON py.co_organizacion=o.co_organizacion
									LEFT JOIN i020t_prioridad pr ON py.co_prioridad=pr.co_prioridad
									LEFT JOIN i018t_tipo_presupuesto tp ON py.co_tipo_presupuesto=tp.co_tipo_presupuesto
									LEFT JOIN i017t_rango cat ON py.co_rango=cat.co_rango
									WHERE co_proceso=$co_proceso");
				$data=mysql_fetch_assoc($result0);
				$result1=mysql_query("SELECT * FROM c001t_usuario WHERE co_usuario=$co_usuario_asignado");
				while($row=mysql_fetch_assoc($result1)){
					array_push($usuario_asignado,$row['tx_indicador']);
				}
				$result2=mysql_query("SELECT * FROM c001t_usuario WHERE co_usuario=$co_usuario_asignador");
				while($row=mysql_fetch_assoc($result2)){
					array_push($usuario_asignador,$row['tx_indicador']);
				}
				$result2=mysql_query("SELECT * FROM c001t_usuario WHERE co_usuario=$co_usuario_asignador");
				$row=mysql_fetch_assoc($result2);
				$cuerpo_msj="<b>N° Solped:</b> $data[nu_solped]<br />
					<b>N° Expediente:</b> $data[nu_expediente]<br />
					<b>Descripción del Proceso:</b> $data[tx_descripcion]<br />
					<b>Ubicación:</b> $data[tx_ubicacion]<br />
					<b>Organización:</b> $data[tx_organizacion]<br />
					<b>Prioridad:</b> $data[tx_prioridad]<br />
					<b>Tipo de Presupuesto:</b> $data[tx_tipo_presupuesto]<br />
					<b>Categoría de Contratación:</b> $data[tx_categoria]<br />";
			break;
		}
		$asunto="[CONTRATOS] Proceso asignado";
		$contenido="GERENCIA DE CONTRATACIÓN<br />
					Se le informa que el usuario <b>$row[tx_usuario]</b> le ha asignado un proceso a su bandeja de trabajo,
					los datos del mismo son los siguientes:<br /><br />";
		/*for($i=0;$usuario_asignado[$i];$i++)
			$contenido.="Para: ".$usuario_asignado[$i]."@PDVSA.COM<br />";
		for($i=0;$usuario_asignador[$i];$i++)
			$contenido.="CC: ".$usuario_asignador[$i]."@PDVSA.COM<br />";*/
		$contenido.=$cuerpo_msj;
		$contenido.="<br />
		Por favor ingresar con Mozilla Firefox a la siguiente dirección web <b>http://orimat100/contratos</b> 
		para poder visualizar el proceso.<br />";
		//$asunto.=' | SISTEMA EN PERIODO DE PRUEBA';
		
		return array('asunto'=>$asunto,'cuerpo'=>$contenido,'asignado'=>$usuario_asignado,'asignador'=>$usuario_asignador);
	}
	/***************************************/	
	function EnviarMail($co_usuario_asignado,$co_usuario_asignador,$co_proceso,$co_tipo){
		$mail = new PHPMailer();
		$mail->IsSMTP();
		$mail->Host = "plcguaapl01";
		//$mail->AddReplyTo("prueba@pdvsa.com", "prueba");
		$mail->WordWrap = 30;
		//$mail->From = $from;
		$mail->From = "CONTRATOS@PDVSA.COM";
		$mail->FromName = "SISTEMA DE CONTRATACION";
		$mail->IsHTML(true);  // set email format to HTML
		$correo=createMail($co_usuario_asignado,$co_usuario_asignador,$co_proceso,$co_tipo);
		//print_r($correo);
		$mail->Subject = html_entity_decode($correo['asunto']);
		$mail->Body    = DarFormatoHTML($correo['cuerpo']);
		/*ENVIADO A*/
		for($i=0;$correo['asignado'][$i];$i++)
			$mail->AddAddress($correo['asignado'][$i]."@PDVSA.COM");
		for($i=0;$correo['asignador'][$i];$i++)
			$mail->AddCC($correo['asignador'][$i]."@PDVSA.COM");
		$mail->AddBCC("SUNIAGAR@PDVSA.COM");
		$mail->Send();
	}	
	//EnviarMail(1,2,1,2);
	EnviarMail($_REQUEST['co_usuario_asignado'],$_REQUEST['co_usuario_asignador'],$_REQUEST['co_proceso'],$_REQUEST['co_tipo']);
	
?>
