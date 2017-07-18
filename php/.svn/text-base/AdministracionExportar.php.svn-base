<?php

	require ('../Spreadsheet/Excel/Writer.php');
	include('../config/conf.php');
	require_once 'MyPDO.php';
	session_start();
	//************************************************
	function convertArrayKeysToUtf88($array) {
		$convertedArray1 = array();
		$convertedArray = array();
		
		foreach($array as $key => $value) {
		  if(mb_check_encoding($value, 'UTF-8')) 
		  {		
			  $value = utf8_decode($value); }

		  $convertedArray[$key] = $value;

		}
		//$convertedArray1[] = $convertedArray;
		//}
		return $convertedArray;
	}
	//************************************************
	$libro = new Spreadsheet_Excel_Writer();	
	if (PEAR::isError($hoja)){
		
		die($hoja->getMessage());
	}
	$libro->setVersion(8);
	$hoja =& $libro->addWorksheet('Administracion de Contratos');
	//ESTABLECEMOS LOS FORMATOS DE LAS CELDAS
	$C_tope=$libro->addFormat(array('fgcolor' => 'red',
									'bold' => 1,
									'color' => 'white',
									'border' => 1,
									'bordercolor' => 'grey',
									'text-transform'=> 'uppercase'));
	$C_tope2=$libro->addFormat(array('fgcolor' => 'yellow',
									'bold' => 1,
									'color' => 'black',
									'border' => 2,
									'bordercolor' => 'black',
									'halign' => 'center',
									'text-transform'=> 'uppercase'));
	$C_tope3=$libro->addFormat(array('fgcolor' => 'blue',
									'bold' => 1,
									'color' => 'white',
									'border' => 2,
									'bordercolor' => 'black',
									'halign' => 'center',
									'text-transform'=> 'uppercase'));
									
	$E_centrado1 =$libro->addFormat(array('vAlign' => 'vcenter','border' => 1,'text-transform'=> 'uppercase'));
	
	$E_centrado2 =$libro->addFormat(array('halign' => 'center','border' => 1,'vAlign' => 'vcenter'));
	//Letra Negra Grande
	$N_grande =$libro->addFormat(array('Size' => 12,
                                       'bold' => 1,
                                       'text-transform' => 'uppercase',
                                       'fgcolor' => 'white',
									   'halign' => 'center'));
	

	//ESTABLECEMOS LA COLUMNA DE CADA CAMPO
	$columna=array();
	$columna['nu_solped_contrato']=0;
	$columna['nu_contrato_sap']=1;
	$columna['tx_distrito']=2;
	$columna['tx_organizacion']=3;
	$columna['tx_usuario']=4;
	$columna['nu_expediente_contrato']=5;
	$columna['tx_regimen_lab']=6;
	$columna['tx_observacion_empresa']=7;
	$columna['tx_tipo_act']=8;
	$columna['tx_orientacion']=9;
	$columna['tx_empresa']=10;
	$columna['nu_rif']=11;
	$columna['nu_acreedor']=12;
	$columna['tx_tipo_empresa']=13;
	$columna['nu_telefonico']=14;
	$columna['nu_telefonico_opcional']=15;
	$columna['fe_carta_preliminar']=16;
	$columna['fe_firma_contrato']=17;
	$columna['fe_prorroga_inicio']=18;
	$columna['fe_inicio']=19;
	$columna['fe_culminacion']=20;
	$columna['nu_ejecucion']=21;
	$columna['nu_monto_total_adjudicado_dol']=22;
	$columna['nu_monto_total_adjudicado_bsf']=23;
	$columna['nu_monto_total_adjudicado_euro']=24;
	$columna['nu_monto_total_adjudicado']=25;
	$columna['tx_lugar_ejecucion']=26;
	$columna['nu_pedido']=27;
	$columna['nu_monto_total']=28;
	$columna['nu_valuaciones']=29;
	$columna['nu_monto_valuacion']=30;
	$columna['fe_entrega']=31;
	$columna['nu_monto_restante']=32;
	//$columna['ant.fe_valor']=36;
	$columna['ant.nu_modificaciones']=33;
	$columna['ant.fe_valor']=34;
	$columna['ant.nu_monto_modificaciones']=35;
	//$columna['monto_suma_anticipo']=36;
	//$columna['ant.fe_valor']=36;
	$columna['fiel.nu_modificaciones']=36;
	$columna['fiel.fe_valor']=37;
	$columna['fiel.nu_monto_modificaciones']=38;
	//$columna['monto_suma_fielcumplimiento']=40;
	//$columna['co_pedido']=29;
	$columna['camb.nu_modificaciones']=39;
	$columna['camb.fe_valor']=40;
	$columna['camb.nu_monto_modificaciones']=41;
	$columna['monto_suma_cambiocantidad']=42;
	//$columna['co_pedido']=29;
	$columna['camba.nu_modificaciones']=43;
	$columna['camba.fe_valor']=44;
	$columna['camba.nu_monto_modificaciones']=45;
	$columna['monto_suma_cambioalcance']=46;
	//$columna['co_pedido']=29;
	$columna['pj.nu_modificaciones']=47;
	$columna['pj.fe_valor']=48;
	$columna['pj.nu_monto_modificaciones']=49;
	$columna['monto_suma_periejecucion']=50;
	//$columna['co_pedido']=29;
	$columna['alccp.nu_modificaciones']=51;
	$columna['alccp.fe_valor']=52;
	//$columna['alccp.nu_monto_modificaciones']=59;
	//$columna['monto_suma_ajustelaboral']=60;
	//$columna['co_pedido']=29;
	$columna['tea.nu_modificaciones']=53;
	$columna['tea.fe_valor']=54;
	$columna['tea.nu_monto_modificaciones']=55;
	//$columna['monto_suma_tarjetaelectronica']=64;
	//$columna['co_pedido']=29;
	$columna['fp.nu_modificaciones']=56;
	$columna['fp.fe_valor']=57;
	//$columna['fp.nu_monto_modificaciones']=71;
	//$columna['monto_suma_fechaparalizacion']=72;
	//$columna['co_pedido']=29;
	$columna['fr.nu_modificaciones']=58;
	$columna['fr.fe_valor']=59;
	//$columna['fr.nu_monto_modificaciones']=67;
	//$columna['monto_suma_fecharegistro']=68;
	//$columna['co_pedido']=29;
	//$columna['ffi.nu_modificaciones']=60;
	$columna['ffi.fe_valor']=60;
	//$columna['ffi.nu_monto_modificaciones']=75;
	//$columna['monto_suma_firmafiniquito']=76;
	

	
	//ESTABLECEMOS LOS NOMBRE DE COLUMNAS
	$header=array();
	$header[$columna['nu_solped_contrato']]='N° SOLP';
	$header[$columna['nu_contrato_sap']]='N° Contratos Sap';
	$header[$columna['tx_distrito']]='Ubicación';
	$header[$columna['tx_organizacion']]='Organización';
	$header[$columna['tx_usuario']]='Supervisor';
	$header[$columna['nu_expediente_contrato']]='N° Expediente';
	$header[$columna['tx_regimen_lab']]='Regimen Laboral';
	$header[$columna['tx_observacion_empresa']]='Descripción';
	$header[$columna['tx_tipo_act']]='Frecuencia';
	$header[$columna['tx_orientacion']]='Orientación del Negocio';
	$header[$columna['tx_empresa']]='Nombre de la Empresa';
	$header[$columna['nu_rif']]='Rif';
	$header[$columna['nu_acreedor']]='N° Acreedor';
	$header[$columna['tx_tipo_empresa']]='Tipo de Empresa';
	$header[$columna['nu_telefonico']]='Numero Telefonico';
	$header[$columna['nu_telefonico_opcional']]='Numero Telefonico Opcional';
	$header[$columna['fe_carta_preliminar']]='Fecha Carta Preliminar';
	$header[$columna['fe_firma_contrato']]='Fecha Firma de Contrato';
	$header[$columna['fe_prorroga_inicio']]='Fecha Porroga Inicio';
	$header[$columna['fe_inicio']]='Fecha Inicio';
	$header[$columna['fe_culminacion']]='Fecha Culminacion';
	$header[$columna['nu_ejecucion']]='N° Ejecución';
	$header[$columna['nu_monto_total_adjudicado_dol']]='Monto en Dolares';
	$header[$columna['nu_monto_total_adjudicado_bsf']]='Monto en Bs';
	$header[$columna['nu_monto_total_adjudicado_euro']]='Monto en Euro';
	$header[$columna['nu_monto_total_adjudicado']]='Monto Total';
	$header[$columna['tx_lugar_ejecucion']]='Lugar en Ejecución';
	$header[$columna['nu_pedido']]='N° Pedido';
	$header[$columna['nu_monto_total']]='Monto del Pedido';
	$header[$columna['nu_valuaciones']]='N° de Valuaciones';
	$header[$columna['nu_monto_valuacion']]='Monto Pedido';
	$header[$columna['fe_entrega']]='Fecha entrega de HES';
	$header[$columna['nu_monto_restante']]='Monto Por Pagar';
	//$header[$columna['nu_monto_restante']]='Monto Por Pagar';
	$header[$columna['ant.nu_modificaciones']]='N° Anticipo';
	$header[$columna['ant.fe_valor']]='Fecha Anticipo';
	$header[$columna['ant.nu_monto_modificaciones']]='Monto total Anticipo';
	//$header[$columna['monto_suma_anticipo']]='Monto Anticipo';
	$header[$columna['fiel.nu_modificaciones']]='N° Fiel Cumplimiento';
	$header[$columna['fiel.fe_valor']]='Fecha Fiel Cumplimiento';
	$header[$columna['fiel.nu_monto_modificaciones']]='Monto total Fiel Cumplimiento';
	//$header[$columna['monto_suma_fielcumplimiento']]='Monto Fiel Cumplimiento';
	$header[$columna['camb.nu_modificaciones']]='N° Cambio Cantidad';
	$header[$columna['camb.fe_valor']]='Fecha Cambio Cantidad';
	$header[$columna['camb.nu_monto_modificaciones']]='Monto Cambio Cantidad';
	$header[$columna['monto_suma_cambiocantidad']]='Monto total Cambio Cantidad';
	
	$header[$columna['camba.nu_modificaciones']]='N° Cambio Alcance';
	$header[$columna['camba.fe_valor']]='Fecha Cambio Alcance';
	$header[$columna['camba.nu_monto_modificaciones']]='Monto total Cambio Alcance';
	$header[$columna['monto_suma_cambioalcance']]='Monto Cambio Alcance';
	
	$header[$columna['pj.nu_modificaciones']]='N° Periodo Ejecución';
	$header[$columna['pj.fe_valor']]='Fecha Periodo Ejecución';
	$header[$columna['pj.nu_monto_modificaciones']]='Monto Periodo Ejecución';
	$header[$columna['monto_suma_periejecucion']]='Monto total Periodo Ejecución';
	
	$header[$columna['alccp.nu_modificaciones']]='N° Ajuste CCP';
	$header[$columna['alccp.fe_valor']]='Fecha Ajuste CCP';
	//$header[$columna['alccp.nu_monto_modificaciones']]='Monto Ajuste CCP';
	//$header[$columna['monto_suma_ajustelaboral']]='Monto total Ajuste CCP';
	
	$header[$columna['tea.nu_modificaciones']]='N° Tarjeta Electronica';
	$header[$columna['tea.fe_valor']]='Fecha Tarjeta Electronica';
	$header[$columna['tea.nu_monto_modificaciones']]='Monto Tarjeta Electronica';
	//$header[$columna['monto_suma_tarjetaelectronica']]='Monto total Tarjeta Electronica';
		
	$header[$columna['fp.nu_modificaciones']]='N° Paralización';
	$header[$columna['fp.fe_valor']]='Fecha Paralización';
	//$header[$columna['fp.nu_monto_modificaciones']]='Monto Paralización';
	//$header[$columna['monto_suma_ajustelaboral']]='Monto total Paralización';
	
	$header[$columna['fr.nu_modificaciones']]='N° Registro';
	$header[$columna['fr.fe_valor']]='Fecha Registro';
	//$header[$columna['fr.nu_monto_modificaciones']]='Monto Registro';
	//$header[$columna['monto_suma_fechaparalizacion']]='Monto total Registro';
	
	//$header[$columna['ffi.nu_modificaciones']]='N° Firma de Finiquito';
	$header[$columna['ffi.fe_valor']]='Fecha Firma de Finiquito';
	//$header[$columna['ffi.nu_monto_modificaciones']]='Monto Firma de Finiquito';
	//$header[$columna['monto_suma_firmafiniquito']]='Monto total Firma de Finiquito';
	
	
	//CONSTRUIMOS LA HOJA
	$hoja->insertBitmap (0,0,'../images/pdvsa_eyp.bmp',3,3,0.6,0.6);
	$hoja->write(0,3,utf8_decode("GERENCIA DE CONTRATACIÓN
REPORTE DE LOS CONTRATOS DE ADMINISTRACIÓN DE CONTRATOS"),$N_grande);
	$hoja->mergeCells(0,3,3,12);
	foreach($header as $key => $value){
		$hoja->write(8,$key,utf8_decode($value),$C_tope);
	}
	$hoja->write(7,12,html_entity_decode('Datos de la Empresa'),$C_tope2);
	$hoja->mergeCells(7,12,7,15);
	$hoja->write(6,16,html_entity_decode('Inicio del Contrato'),$C_tope3);
	$hoja->mergeCells(6,16,6,26);
	$hoja->write(7,22,html_entity_decode('Monto del Contrato'),$C_tope2);
	$hoja->mergeCells(7,22,7,25);
	$hoja->write(7,27,html_entity_decode('Pedido'),$C_tope2);
	$hoja->mergeCells(7,27,7,28);
	$hoja->write(7,29,html_entity_decode('Valuaciones'),$C_tope2);
	$hoja->mergeCells(7,29,7,32);
	$hoja->write(6,33,html_entity_decode('Fianza'),$C_tope3);
	$hoja->mergeCells(6,33,6,38);
	$hoja->write(7,33,html_entity_decode('Anticipo'),$C_tope2);
	$hoja->mergeCells(7,33,7,35);
	$hoja->write(7,36,html_entity_decode('Fiel Cumplimiento'),$C_tope2);
	$hoja->mergeCells(7,36,7,38);
	$hoja->write(6,39,html_entity_decode('Modificaciones'),$C_tope3);
	$hoja->mergeCells(6,39,6,50);
	$hoja->write(7,39,html_entity_decode('Cambio en Cantidad'),$C_tope2);
	$hoja->mergeCells(7,39,7,42);
	$hoja->write(7,43,html_entity_decode('Cambio en el Alcance'),$C_tope2);
	$hoja->mergeCells(7,43,7,46);
	$hoja->write(7,47,html_entity_decode('Periodo de Ejecucion'),$C_tope2);
	$hoja->mergeCells(7,47,7,50);
	$hoja->write(6,51,html_entity_decode('Variaciones'),$C_tope3);
	$hoja->mergeCells(6,51,6,55);
	$hoja->write(7,51,html_entity_decode('Ajuste de Labor CCP'),$C_tope2);
	$hoja->mergeCells(7,51,7,52);
	$hoja->write(7,53,html_entity_decode('Tarjeta Electronica'),$C_tope2);
	$hoja->mergeCells(7,53,7,55);
	$hoja->write(6,56,html_entity_decode('Paralizaciones'),$C_tope3);
	$hoja->mergeCells(6,56,6,59);
	$hoja->write(7,56,html_entity_decode('Paralizacion'),$C_tope2);
	$hoja->mergeCells(7,56,7,57);
	$hoja->write(7,58,html_entity_decode('Inicio'),$C_tope2);
	$hoja->mergeCells(7,58,7,59);
	
	//COLOCAMOS EL ANCHO DE LAS COLUMNAS
	//$hoja->setColumn($columna[''],$columna[''],20);
	$hoja->setColumn($columna['nu_solped_contrato'],$columna['nu_solped_contrato'],10);
	$hoja->setColumn($columna['nu_contrato_sap'],$columna['nu_contrato_sap'],18);
	$hoja->setColumn($columna['tx_distrito'],$columna['tx_distrito'],18);
	$hoja->setColumn($columna['tx_organizacion'],$columna['tx_organizacion'],40);
	$hoja->setColumn($columna['tx_usuario'],$columna['tx_usuario'],40);
	$hoja->setColumn($columna['nu_expediente_contrato'],$columna['nu_expediente_contrato'],20);
	$hoja->setColumn($columna['tx_regimen_lab'],$columna['tx_regimen_lab'],15);
	$hoja->setColumn($columna['tx_observacion_empresa'],$columna['tx_observacion_empresa'],100);
	$hoja->setColumn($columna['tx_tipo_act'],$columna['tx_tipo_act'],40);
	$hoja->setColumn($columna['tx_orientacion'],$columna['tx_orientacion'],23);
	$hoja->setColumn($columna['tx_empresa'],$columna['tx_empresa'],20);
	$hoja->setColumn($columna['nu_rif'],$columna['nu_rif'],15);
	$hoja->setColumn($columna['nu_acreedor'],$columna['nu_acreedor'],15);
	$hoja->setColumn($columna['tx_tipo_empresa'],$columna['tx_tipo_empresa'],20);
	$hoja->setColumn($columna['nu_telefonico'],$columna['nu_telefonico'],20);
	$hoja->setColumn($columna['nu_telefonico_opcional'],$columna['nu_telefonico_opcional'],25);
	$hoja->setColumn($columna['fe_carta_preliminar'],$columna['fe_carta_preliminar'],18);
	$hoja->setColumn($columna['fe_firma_contrato'],$columna['fe_firma_contrato'],18);
	$hoja->setColumn($columna['fe_prorroga_inicio'],$columna['fe_prorroga_inicio'],18);
	$hoja->setColumn($columna['fe_inicio'],$columna['fe_inicio'],18);
	$hoja->setColumn($columna['fe_culminacion'],$columna['fe_culminacion'],18);
	$hoja->setColumn($columna['nu_ejecucion'],$columna['nu_ejecucion'],15);
	$hoja->setColumn($columna['nu_monto_total_adjudicado_dol'],$columna['nu_monto_total_adjudicado_dol'],30);
	$hoja->setColumn($columna['nu_monto_total_adjudicado_bsf'],$columna['nu_monto_total_adjudicado_bsf'],30);
	$hoja->setColumn($columna['nu_monto_total_adjudicado_euro'],$columna['nu_monto_total_adjudicado_euro'],30);
	$hoja->setColumn($columna['nu_monto_total_adjudicado'],$columna['nu_monto_total_adjudicado'],30);
	$hoja->setColumn($columna['tx_lugar_ejecucion'],$columna['tx_lugar_ejecucion'],20);
	$hoja->setColumn($columna['nu_pedido'],$columna['nu_pedido'],20);
	$hoja->setColumn($columna['nu_monto_total'],$columna['nu_monto_total'],25);
	$hoja->setColumn($columna['nu_valuaciones'],$columna['nu_valuaciones'],15);
	$hoja->setColumn($columna['nu_monto_valuacion'],$columna['nu_monto_valuacion'],15);
	$hoja->setColumn($columna['fe_entrega'],$columna['fe_entrega'],15);
	$hoja->setColumn($columna['nu_monto_restante'],$columna['nu_monto_restante'],15);	
	$hoja->setColumn($columna['ant.nu_modificaciones'],$columna['ant.nu_modificaciones'],15); 
	$hoja->setColumn($columna['ant.fe_valor'],$columna['ant.fe_valor'],20);
	$hoja->setColumn($columna['ant.nu_monto_modificaciones'],$columna['ant.nu_monto_modificaciones'],20);
	//$hoja->setColumn($columna['monto_suma_anticipo'],$columna['monto_suma_anticipo'],18);
	$hoja->setColumn($columna['fiel.nu_modificaciones'],$columna['fiel.nu_modificaciones'],15); 
	$hoja->setColumn($columna['fiel.fe_valor'],$columna['fiel.fe_valor'],20);
	$hoja->setColumn($columna['fiel.nu_monto_modificaciones'],$columna['fiel.nu_monto_modificaciones'],20);
	//$hoja->setColumn($columna['monto_suma_fielcumplimiento'],$columna['monto_suma_fielcumplimiento'],18);
	$hoja->setColumn($columna['camb.nu_modificaciones'],$columna['camb.nu_modificaciones'],15); 
	$hoja->setColumn($columna['camb.fe_valor'],$columna['camb.fe_valor'],20);
	$hoja->setColumn($columna['camb.nu_monto_modificaciones'],$columna['camb.nu_monto_modificaciones'],20);
	$hoja->setColumn($columna['monto_suma_cambiocantidad'],$columna['monto_suma_cambiocantidad'],18);	
	$hoja->setColumn($columna['camba.nu_modificaciones'],$columna['camba.nu_modificaciones'],15); 
	$hoja->setColumn($columna['camba.fe_valor'],$columna['camba.fe_valor'],20);
	$hoja->setColumn($columna['camba.nu_monto_modificaciones'],$columna['camba.nu_monto_modificaciones'],20);
	$hoja->setColumn($columna['monto_suma_cambioalcance'],$columna['monto_suma_cambioalcance'],18);	
	$hoja->setColumn($columna['pj.nu_modificaciones'],$columna['pj.nu_modificaciones'],15); 
	$hoja->setColumn($columna['pj.fe_valor'],$columna['pj.fe_valor'],20);
	$hoja->setColumn($columna['pj.nu_monto_modificaciones'],$columna['pj.nu_monto_modificaciones'],20);
	$hoja->setColumn($columna['monto_suma_periejecucion'],$columna['monto_suma_periejecucion'],18);	
	$hoja->setColumn($columna['alccp.nu_modificaciones'],$columna['alccp.nu_modificaciones'],15); 
	$hoja->setColumn($columna['alccp.fe_valor'],$columna['alccp.fe_valor'],20);
	$hoja->setColumn($columna['alccp.nu_monto_modificaciones'],$columna['alccp.nu_monto_modificaciones'],20);
	$hoja->setColumn($columna['monto_suma_ajustelaboral'],$columna['monto_suma_ajustelaboral'],18);	
	$hoja->setColumn($columna['tea.nu_modificaciones'],$columna['tea.nu_modificaciones'],15); 
	$hoja->setColumn($columna['tea.fe_valor'],$columna['tea.fe_valor'],20);
	$hoja->setColumn($columna['tea.nu_monto_modificaciones'],$columna['tea.nu_monto_modificaciones'],20);
	//$hoja->setColumn($columna['monto_suma_tarjetaelectronica'],$columna['monto_suma_tarjetaelectronica'],18);	
	$hoja->setColumn($columna['fp.nu_modificaciones'],$columna['fp.nu_modificaciones'],15); 
	$hoja->setColumn($columna['fp.fe_valor'],$columna['fp.fe_valor'],20);
	//$hoja->setColumn($columna['fp.nu_monto_modificaciones'],$columna['fp.nu_monto_modificaciones'],20);
	//$hoja->setColumn($columna['monto_suma_ajustelaboral'],$columna['monto_suma_ajustelaboral'],18);
	$hoja->setColumn($columna['fr.nu_modificaciones'],$columna['fr.nu_modificaciones'],15); 
	$hoja->setColumn($columna['fr.fe_valor'],$columna['fr.fe_valor'],20);
	//$hoja->setColumn($columna['fr.nu_monto_modificaciones'],$columna['fr.nu_monto_modificaciones'],20);
	//$hoja->setColumn($columna['monto_suma_fechaparalizacion'],$columna['monto_suma_fechaparalizacion'],18);	
	//$hoja->setColumn($columna['ffi.nu_modificaciones'],$columna['ffi.nu_modificaciones'],15); 
	$hoja->setColumn($columna['ffi.fe_valor'],$columna['ffi.fe_valor'],20);
	//$hoja->setColumn($columna['ffi.nu_monto_modificaciones'],$columna['ffi.nu_monto_modificaciones'],20);
	//$hoja->setColumn($columna['monto_suma_firmafiniquito'],$columna['monto_suma_firmafiniquito'],18);	
	
		 
	switch($_SESSION['co_rol']){
			case 0://Administrador del Sistema
				$ubicacion="0=0";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
			case 1://Gerente de Area
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
			case 2://Lider de Planificacion
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
			case 3://Supervisor de Planificacion
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
			case 10://Analista de Planificacion
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
			case 4://Lider de Contratacion
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
			case 5://Supervisor de Contratacion
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario IS NULL AND p.co_supervisor=".$_SESSION['co_usuario']."";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor=".$_SESSION['co_usuario']."";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor=".$_SESSION['co_usuario']."";
			break;
			case 6://Analista de Contratacion
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario=".$_SESSION['co_usuario']." AND p.nu_solped IS NULL";
				$usuario_proceso="p.co_usuario=".$_SESSION['co_usuario']." AND p.nu_solped IS NOT NULL";
				$usuario_adjudicados="p.co_usuario=".$_SESSION['co_usuario']." AND p.nu_solped IS NOT NULL";
			break;
			case 7://Lider de Administracion
				$ubicacion=" c.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND c.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_Por_Asignar="c.co_usuario IS NULL OR c.co_supervisor IS NULL";
				$usuario_En_Proceso="c.co_usuario is not null AND c.co_supervisor is not null";
				$usuario_Cerrado="c.co_usuario is not null AND c.co_supervisor is not null";
			break;
			case 8://Supervisor de Administracion
				$ubicacion=" c.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND c.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_Por_Asignar="c.co_usuario IS NULL AND c.co_supervisor=".$_SESSION['co_usuario']."";
				$usuario_En_Proceso="c.co_usuario is not null AND c.co_supervisor=".$_SESSION['co_usuario']."";
				$usuario_Cerrado="c.co_usuario is not null AND c.co_supervisor=".$_SESSION['co_usuario']."";
			break;
			case 9://Analista de Administracion
				$ubicacion=" c.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND c.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_Por_Asignar="c.co_usuario=".$_SESSION['co_usuario']." AND c.fe_inicio IS NULL";
				$usuario_En_Proceso="c.co_usuario=".$_SESSION['co_usuario']." AND c.fe_inicio IS NOT NULL";
				$usuario_Cerrado="c.co_usuario=".$_SESSION['co_usuario']." ";
			break;
			case 11://Gerente de Region
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
		}
	
		
	//CONECTAMOS A LA BD
	$conexion = mysql_connect("orimat100", "root", "MySQL1");
	mysql_select_db("contratos", $conexion);
	//mysql_query ("SET NAMES 'utf8'");
	$result=mysql_query("
		
SELECT    c.co_contrato, c.nu_contrato_sap, c.co_usuario, c.co_empresa, c.tx_observacion_empresa, c.nu_contrato_comision, c.fe_carta_preliminar, c.fe_firma_contrato, c.co_cierre_procedimiento, c.nu_monto_total_adjudicado, c.nu_monto_total_adjudicado_bsf, c.nu_monto_total_adjudicado_dol, c.nu_monto_total_adjudicado_euro, c.fe_inicio, c.fe_culminacion,
		c.fe_estimada, c.nu_ejecucion, c.nu_aporte_compromiso_contrato, c.nu_upc, c.fe_prorroga_inicio, c.co_ubicacion, c.nu_solped_contrato, c.nu_expediente_contrato, pro.co_ubicacion, pro.co_organizacion, pr.co_regimen_lab, pro.co_tipo_act, pro.tx_lugar_ejecucion,pro.co_tipo_contrato,em.co_empresa,em.tx_empresa,em.nu_rif,em.nu_acreedor,te.co_tipo_empresa,
		org.tx_organizacion,rl.tx_regimen_lab, ta.tx_tipo_act,pr.co_comision,com.tx_comision,te.tx_tipo_empresa,ep.nu_telefonico,ep.nu_telefonico_opcional,cipro.tx_cierre_procedimiento,c.co_supervisor,
		p.co_pedido, p.nu_pedido,CONCAT(p.nu_monto_total,' ',REPLACE ('E', '&euro;',mo.tx_moneda)) AS nu_monto_total, val.co_pedido, val.nu_valuaciones, val.nu_monto_valuacion, val.fe_entrega,(p.nu_monto_total-val.nu_monto_valuacion) AS nu_monto_restante,
		ant.nu_modificaciones, ant.nu_monto_modificaciones,(c.nu_monto_total_adjudicado+ant.nu_monto_modificaciones) AS monto_suma_anticipo, ant.fe_valor,
		fiel.nu_modificaciones, fiel.nu_monto_modificaciones,(c.nu_monto_total_adjudicado+fiel.nu_monto_modificaciones) AS monto_suma_fielcumplimiento, fiel.fe_valor,
		camb.nu_modificaciones, camb.nu_monto_modificaciones,(c.nu_monto_total_adjudicado+camb.nu_monto_modificaciones) AS monto_suma_cambiocantidad, camb.fe_valor,
		camba.nu_modificaciones, camba.nu_monto_modificaciones,(c.nu_monto_total_adjudicado+camba.nu_monto_modificaciones) AS monto_suma_cambioalcance, camba.fe_valor,
		pj.nu_modificaciones, pj.nu_monto_modificaciones,(c.nu_monto_total_adjudicado+pj.nu_monto_modificaciones) AS monto_suma_periejecucion, pj.fe_valor,
		alccp.nu_modificaciones, alccp.nu_monto_modificaciones,(c.nu_monto_total_adjudicado+alccp.nu_monto_modificaciones) AS monto_suma_ajustelaboral,alccp.fe_valor,
		tea.nu_modificaciones, tea.nu_monto_modificaciones,(c.nu_monto_total_adjudicado+tea.nu_monto_modificaciones) AS monto_suma_tarjetaelectronica,tea.fe_valor,
		ffi.nu_modificaciones, ffi.nu_monto_modificaciones,(c.nu_monto_total_adjudicado+ffi.nu_monto_modificaciones) AS monto_suma_firmafiniquito,ffi.fe_valor,
		fr.nu_modificaciones, fr.nu_monto_modificaciones,(c.nu_monto_total_adjudicado+fr.nu_monto_modificaciones) AS monto_suma_fecharegistro,fr.fe_valor,
		fp.nu_modificaciones, fp.nu_monto_modificaciones,(c.nu_monto_total_adjudicado+fp.nu_monto_modificaciones) AS monto_suma_fechaparalizacion,fp.fe_valor
		
			FROM c011t_contrato AS c 

				LEFT JOIN c004t_proceso AS pr ON pr.co_proceso=c.co_proceso
				LEFT JOIN c003t_proyecto AS pro ON pro.co_proyecto=pr.co_proyecto
				LEFT JOIN i002t_ubicacion AS ub ON ub.co_ubicacion=c.co_ubicacion
				LEFT JOIN i005t_organizacion AS org ON org.co_organizacion=pro.co_organizacion
				LEFT JOIN c001t_usuario AS us ON us.co_supervisor=c.co_supervisor
				LEFT JOIN i007t_regimen_lab AS rl ON rl.co_regimen_lab=pro.co_regimen_lab
				LEFT JOIN i019t_tipo_act AS ta ON ta.co_tipo_act=pro.co_tipo_act
				LEFT JOIN i021t_orientacion AS ori ON ori.co_orientacion=pr.co_orientacion
				LEFT JOIN c002t_empresa AS em ON em.co_empresa=c.co_empresa
				LEFT JOIN i024t_tipo_empresa AS te ON te.co_tipo_empresa=em.co_tipo_empresa
				LEFT JOIN i036t_empresa_proceso AS ep ON ep.co_contrato=c.co_contrato
				LEFT JOIN i022t_comision AS com ON com.co_comision=pr.co_comision
				LEFT JOIN i040t_cierre_procedimiento AS cipro ON cipro.co_cierre_procedimiento=c.co_cierre_procedimiento
				LEFT JOIN i013t_pedido AS p ON p.co_contrato=c.co_contrato
				LEFT JOIN c013t_moneda AS mo ON mo.co_moneda=p.co_moneda
				LEFT JOIN (SELECT co_pedido,COUNT(co_pedido) AS nu_valuaciones,SUM(nu_monto_valuacion) AS nu_monto_valuacion,MAX(fe_entrega) AS fe_entrega
				FROM c006t_contrato_valuaciones
				GROUP BY co_pedido) AS val ON val.co_pedido=p.co_pedido
				LEFT JOIN (SELECT co_contrato,co_tipo_modificacion, COUNT(co_contrato) AS nu_modificaciones, SUM(nu_valor) AS nu_monto_modificaciones, MAX(fe_valor) AS fe_valor
				FROM c007t_modificaciones 
				WHERE co_tipo_modificacion=1
				GROUP BY co_contrato,co_tipo_modificacion) AS ant ON ant.co_contrato=c.co_contrato
				LEFT JOIN (SELECT co_contrato,co_tipo_modificacion, COUNT(co_contrato) AS nu_modificaciones, SUM(nu_valor) AS nu_monto_modificaciones, MAX(fe_valor) AS fe_valor
				FROM c007t_modificaciones 
				WHERE co_tipo_modificacion=2
				GROUP BY co_contrato,co_tipo_modificacion) AS fiel ON fiel.co_contrato=c.co_contrato
				LEFT JOIN (SELECT co_contrato,co_tipo_modificacion, COUNT(co_contrato) AS nu_modificaciones, SUM(nu_valor) AS nu_monto_modificaciones, MAX(fe_valor) AS fe_valor
				FROM c007t_modificaciones 
				WHERE co_tipo_modificacion=4
				GROUP BY co_contrato,co_tipo_modificacion) AS camb ON camb.co_contrato=c.co_contrato
				LEFT JOIN (SELECT co_contrato,co_tipo_modificacion, COUNT(co_contrato) AS nu_modificaciones, SUM(nu_valor) AS nu_monto_modificaciones, MAX(fe_valor) AS fe_valor
				FROM c007t_modificaciones 
				WHERE co_tipo_modificacion=5
				GROUP BY co_contrato,co_tipo_modificacion) AS camba ON camba.co_contrato=c.co_contrato
				LEFT JOIN (SELECT co_contrato,co_tipo_modificacion, COUNT(co_contrato) AS nu_modificaciones, SUM(nu_valor) AS nu_monto_modificaciones, MAX(fe_valor) AS fe_valor
				FROM c007t_modificaciones 
				WHERE co_tipo_modificacion=6
				GROUP BY co_contrato,co_tipo_modificacion) AS pj ON pj.co_contrato=c.co_contrato
				LEFT JOIN (SELECT co_contrato,co_tipo_modificacion, COUNT(co_contrato) AS nu_modificaciones, SUM(nu_valor) AS nu_monto_modificaciones, MAX(fe_valor) AS fe_valor
				FROM c007t_modificaciones 
				WHERE co_tipo_modificacion=8
				GROUP BY co_contrato,co_tipo_modificacion) AS alccp ON alccp.co_contrato=c.co_contrato
				LEFT JOIN (SELECT co_contrato,co_tipo_modificacion, COUNT(co_contrato) AS nu_modificaciones, SUM(nu_valor) AS nu_monto_modificaciones, MAX(fe_valor) AS fe_valor
				FROM c007t_modificaciones 
				WHERE co_tipo_modificacion=14
				GROUP BY co_contrato,co_tipo_modificacion) AS tea ON tea.co_contrato=c.co_contrato
				LEFT JOIN (SELECT co_contrato,co_tipo_modificacion, COUNT(co_contrato) AS nu_modificaciones, SUM(nu_valor) AS nu_monto_modificaciones, MAX(fe_valor) AS fe_valor
				FROM c007t_modificaciones 
				WHERE co_tipo_modificacion=20
				GROUP BY co_contrato,co_tipo_modificacion) AS ffi ON ffi.co_contrato=c.co_contrato
				LEFT JOIN (SELECT co_contrato,co_tipo_modificacion, COUNT(co_contrato) AS nu_modificaciones, SUM(nu_valor) AS nu_monto_modificaciones, MAX(fe_valor) AS fe_valor
				FROM c007t_modificaciones 
				WHERE co_tipo_modificacion=21
				GROUP BY co_contrato,co_tipo_modificacion) AS fp ON fp.co_contrato=c.co_contrato
				LEFT JOIN (SELECT co_contrato,co_tipo_modificacion, COUNT(co_contrato) AS nu_modificaciones, SUM(nu_valor) AS nu_monto_modificaciones, MAX(fe_valor) AS fe_valor
				FROM c007t_modificaciones 
				WHERE co_tipo_modificacion=22
				GROUP BY co_contrato,co_tipo_modificacion) AS fr ON fr.co_contrato=c.co_contrato
				
				ORDER BY  c.co_contrato");
		
		/*SELECT * 

		FROM c011t_contrato AS c 

		LEFT JOIN c004t_proceso AS pr ON pr.co_proceso=c.co_proceso
		LEFT JOIN c003t_proyecto AS pro ON pro.co_proyecto=pr.co_proyecto
		LEFT JOIN i002t_ubicacion AS ub ON ub.co_ubicacion=c.co_ubicacion
		LEFT JOIN i005t_organizacion AS org ON org.co_organizacion=pro.co_organizacion
		LEFT JOIN c001t_usuario AS us ON us.co_supervisor=c.co_supervisor
		LEFT JOIN i007t_regimen_lab AS rl ON rl.co_regimen_lab=pro.co_regimen_lab
		LEFT JOIN i013t_pedido AS p ON p.co_contrato=c.co_contrato
		LEFT JOIN i019t_tipo_act AS ta ON ta.co_tipo_act=pro.co_tipo_act
		LEFT JOIN i021t_orientacion AS ori ON ori.co_orientacion=pr.co_orientacion
		LEFT JOIN c002t_empresa AS em ON em.co_empresa=c.co_empresa
		LEFT JOIN i036t_empresa_proceso AS ep ON ep.co_contrato=c.co_contrato
		LEFT JOIN c007t_modificaciones AS mo ON mo.co_contrato=c.co_contrato
		LEFT JOIN i015t_tipo_modificacion AS tm ON tm.co_tipo_modificacion=mo.co_tipo_modificacion
		LEFT JOIN i029t_tipo_variacion AS va ON va.co_tipo_variacion=tm.co_tipo_variacion
		 * 
		 * 
		 * SELECT 
		(@rownum:=@rownum+1) AS rownum,
        c001t_usuario.*, c.*,o.*,e.*,te.*,pr.*,proy.*,u.*, ep.nu_telefonico,ep.nu_telefonico_opcional,
        
		FROM  (SELECT @rownum:=0) r, c011t_contrato c
						LEFT JOIN c002t_empresa e ON c.co_empresa= e.co_empresa
						LEFT JOIN i024t_tipo_empresa te ON e.co_tipo_empresa=te.co_tipo_empresa
						LEFT JOIN c004t_proceso pr ON pr.co_proceso=c.co_proceso
						LEFT JOIN c003t_proyecto proy ON proy.co_proyecto=pr.co_proyecto
						LEFT JOIN i002t_ubicacion AS ubi ON proy.co_ubicacion= ubi.co_ubicacion
						LEFT JOIN i036t_empresa_proceso ep ON e.co_empresa=ep.co_empresa
						LEFT JOIN c001t_usuario u ON u.co_usuario=c.co_usuario
						LEFT JOIN i005t_organizacion o ON  u.co_organizacion=o.co_organizacion
		$condicion
		ORDER BY c011t_contrato.co_contrato");*/
	//$r = $this->pdo->_query($result);
	//$resultado=$this->convertArrayKeysToUtf88($r);
	
	//$r = pdo->_query($result);

	//return $resultado;
	//print_r($result);
	$fila=9;$fila_ini=8;
	$temp_co_contrato='';$i=0;
	//utf8_encode($result);
	//COLOCAMOS EL ESTILO RESPECTIVO DEPENDIENDO DEL ESTADO DEL DOC
	
	while($row = mysql_fetch_array($result)){
		/*
echo "<pre>";
print_r($row);
echo "</pre>";
*/

		$resultado=convertArrayKeysToUtf88($row);
	//echo "<pre>";	
		//print_r($resultado);
//echo "</pre>";		
		//CARGAMOS LOS DATOS
		//$hoja->write($fila,$columna['tx_acta'],html_entity_decode($row['tx_acta']),$E_centrado1);
		//$hoja->write($fila,$columna['tx_recomendacion'],html_entity_decode($row['tx_recomendacion']),$E_centrado1);
		//$hoja->write($fila,$columna['fe_agenda'],html_entity_decode($row['fe_agenda']),$E_centrado1);
		
		//CARGAMOS LAS FILAS
		//$hoja->write($fila,$columna['rownum'],html_entity_decode($resultado['rownum'].""),$E_centrado1);
		$hoja->write($fila,$columna['nu_solped_contrato'],html_entity_decode($resultado['nu_solped_contrato']." "),$E_centrado2);
		$hoja->write($fila,$columna['nu_contrato_sap'],html_entity_decode($resultado['nu_contrato_sap']." "),$E_centrado2);
		$hoja->write($fila,$columna['tx_distrito'],html_entity_decode($resultado['tx_distrito']." "),$E_centrado2);
		$hoja->write($fila,$columna['tx_organizacion'],html_entity_decode($resultado['tx_organizacion']),$E_centrado1);
		$hoja->write($fila,$columna['tx_usuario'],html_entity_decode($resultado['tx_usuario']),$E_centrado1);
		$hoja->write($fila,$columna['nu_expediente_contrato'],html_entity_decode($resultado['nu_expediente_contrato']),$E_centrado2);
		$hoja->write($fila,$columna['tx_regimen_lab'],html_entity_decode($resultado['tx_regimen_lab']),$E_centrado2);	
		$hoja->write($fila,$columna['tx_observacion_empresa'],html_entity_decode($resultado['tx_observacion_empresa']),$E_centrado1);
		$hoja->write($fila,$columna['tx_tipo_act'],html_entity_decode($resultado['tx_tipo_act']),$E_centrado1);
		$hoja->write($fila,$columna['tx_orientacion'],html_entity_decode($resultado['tx_orientacion']),$E_centrado1);		
		$hoja->write($fila,$columna['tx_empresa'],html_entity_decode($resultado['tx_empresa']),$E_centrado1);		
		$hoja->write($fila,$columna['nu_rif'],html_entity_decode($resultado['nu_rif']),$E_centrado1);
		$hoja->write($fila,$columna['nu_acreedor'],html_entity_decode($resultado['nu_acreedor']),$E_centrado2);
		$hoja->write($fila,$columna['tx_tipo_empresa'],html_entity_decode($resultado['tx_tipo_empresa']),$E_centrado1);
		$hoja->write($fila,$columna['nu_telefonico'],html_entity_decode($resultado['nu_telefonico']),$E_centrado2);
		$hoja->write($fila,$columna['nu_telefonico_opcional'],html_entity_decode($resultado['nu_telefonico_opcional']),$E_centrado2);
		$hoja->write($fila,$columna['fe_carta_preliminar'],html_entity_decode($resultado['fe_carta_preliminar']),$E_centrado1);
		$hoja->write($fila,$columna['fe_firma_contrato'],html_entity_decode($resultado['fe_firma_contrato']),$E_centrado2);
		$hoja->write($fila,$columna['fe_prorroga_inicio'],html_entity_decode($resultado['fe_prorroga_inicio']),$E_centrado2);
		$hoja->write($fila,$columna['fe_inicio'],html_entity_decode($resultado['fe_inicio']),$E_centrado2);
		$hoja->write($fila,$columna['fe_culminacion'],html_entity_decode($resultado['fe_culminacion']),$E_centrado2);
		$hoja->write($fila,$columna['nu_ejecucion'],html_entity_decode($resultado['nu_ejecucion']),$E_centrado2);
		$hoja->write($fila,$columna['nu_monto_total_adjudicado_dol'],html_entity_decode($resultado['nu_monto_total_adjudicado_dol']),$E_centrado1);
		$hoja->write($fila,$columna['nu_monto_total_adjudicado_bsf'],html_entity_decode($resultado['nu_monto_total_adjudicado_bsf']),$E_centrado1);
		$hoja->write($fila,$columna['nu_monto_total_adjudicado_euro'],html_entity_decode($resultado['nu_monto_total_adjudicado_euro']),$E_centrado1);
		$hoja->write($fila,$columna['nu_monto_total_adjudicado'],html_entity_decode($resultado['nu_monto_total_adjudicado']),$E_centrado1);
		$hoja->write($fila,$columna['tx_lugar_ejecucion'],html_entity_decode($resultado['tx_lugar_ejecucion']),$E_centrado2);
		$hoja->write($fila,$columna['nu_pedido'],html_entity_decode($resultado['nu_pedido']),$E_centrado2);
		$hoja->write($fila,$columna['nu_monto_total'],html_entity_decode($resultado['nu_monto_total']),$E_centrado2);
		$hoja->write($fila,$columna['nu_valuaciones'],html_entity_decode($resultado['nu_valuaciones']),$E_centrado2);
		$hoja->write($fila,$columna['nu_monto_valuacion'],html_entity_decode($resultado['nu_monto_valuacion']),$E_centrado2);
		$hoja->write($fila,$columna['fe_entrega'],html_entity_decode($resultado['fe_entrega']),$E_centrado2);
		$hoja->write($fila,$columna['nu_monto_restante'],html_entity_decode($resultado['nu_monto_restante']),$E_centrado1);
		$hoja->write($fila,$columna['nu_modificaciones'],html_entity_decode($resultado['nu_modificaciones']),$E_centrado2);
		$hoja->write($fila,$columna['nu_monto_modificaciones'],html_entity_decode($resultado['nu_monto_modificaciones']),$E_centrado2);
		$hoja->write($fila,$columna['monto_suma_modificacion'],html_entity_decode($resultado['monto_suma_modificacion']),$E_centrado2);
		$hoja->write($fila,$columna['fe_valor'],html_entity_decode($resultado['fe_valor']),$E_centrado2);
		$hoja->write($fila,$columna['ant.nu_modificaciones'],html_entity_decode($resultado['ant.nu_modificaciones']),$E_centrado1);
		$hoja->write($fila,$columna['ant.fe_valor'],html_entity_decode($resultado['ant.fe_valor']),$E_centrado1);
		$hoja->write($fila,$columna['ant.nu_monto_modificaciones'],html_entity_decode($resultado['ant.nu_monto_modificaciones']),$E_centrado2);
		$hoja->write($fila,$columna['fiel.nu_modificaciones'],html_entity_decode($resultado['ant.nu_modificaciones']),$E_centrado1);
		$hoja->write($fila,$columna['fiel.fe_valor'],html_entity_decode($resultado['ant.fe_valor']),$E_centrado1);
		$hoja->write($fila,$columna['fiel.nu_monto_modificaciones'],html_entity_decode($resultado['fiel.nu_monto_modificaciones']),$E_centrado2);
		$hoja->write($fila,$columna['camb.nu_modificaciones'],html_entity_decode($resultado['camb.nu_modificaciones']),$E_centrado1);
		$hoja->write($fila,$columna['camb.fe_valor'],html_entity_decode($resultado['camb.fe_valor']),$E_centrado1);
		$hoja->write($fila,$columna['camb.nu_monto_modificaciones'],html_entity_decode($resultado['camb.nu_monto_modificaciones']),$E_centrado2);
		$hoja->write($fila,$columna['monto_suma_cambiocantidad'],html_entity_decode($resultado['monto_suma_cambiocantidad']),$E_centrado2);
		$hoja->write($fila,$columna['camba.nu_modificaciones'],html_entity_decode($resultado['camba.nu_modificaciones']),$E_centrado1);
		$hoja->write($fila,$columna['camba.fe_valor'],html_entity_decode($resultado['camba.fe_valor']),$E_centrado1);
		$hoja->write($fila,$columna['camba.nu_monto_modificaciones'],html_entity_decode($resultado['camba.nu_monto_modificaciones']),$E_centrado2);
		$hoja->write($fila,$columna['monto_suma_cambioalcance'],html_entity_decode($resultado['monto_suma_cambioalcance']),$E_centrado2);
		$hoja->write($fila,$columna['pj.nu_modificaciones'],html_entity_decode($resultado['pj.nu_modificaciones']),$E_centrado1);
		$hoja->write($fila,$columna['pj.fe_valor'],html_entity_decode($resultado['pj.fe_valor']),$E_centrado1);
		$hoja->write($fila,$columna['pj.nu_monto_modificaciones'],html_entity_decode($resultado['pj.nu_monto_modificaciones']),$E_centrado2);
		$hoja->write($fila,$columna['monto_suma_periejecucion'],html_entity_decode($resultado['monto_suma_periejecucion']),$E_centrado2);
		$hoja->write($fila,$columna['alccp.nu_modificaciones'],html_entity_decode($resultado['alccp.nu_modificaciones']),$E_centrado1);
		$hoja->write($fila,$columna['alccp.fe_valor'],html_entity_decode($resultado['alccp.fe_valor']),$E_centrado1);
		$hoja->write($fila,$columna['tea.nu_modificaciones'],html_entity_decode($resultado['tea.nu_modificaciones']),$E_centrado1);
		$hoja->write($fila,$columna['tea.fe_valor'],html_entity_decode($resultado['tea.fe_valor']),$E_centrado1);
		$hoja->write($fila,$columna['tea.nu_monto_modificaciones'],html_entity_decode($resultado['tea.nu_monto_modificaciones']),$E_centrado2);
		$hoja->write($fila,$columna['fp.nu_modificaciones'],html_entity_decode($resultado['fp.nu_modificaciones']),$E_centrado1);
		$hoja->write($fila,$columna['fp.fe_valor'],html_entity_decode($resultado['fp.fe_valor']),$E_centrado1);
		$hoja->write($fila,$columna['fr.nu_modificaciones'],html_entity_decode($resultado['fr.nu_modificaciones']),$E_centrado1);
		$hoja->write($fila,$columna['fr.fe_valor'],html_entity_decode($resultado['fr.fe_valor']),$E_centrado1);
		$hoja->write($fila,$columna['ffi.fe_valor'],html_entity_decode($resultado['ffi.fe_valor']),$E_centrado1);
		

		
		if($temp_co_contrato!=$row['co_contrato']){
			$hoja->mergeCells($fila_ini,$columna['nu_solped_contrato'],$fila-1,$columna['nu_solped_contrato']);
			$hoja->mergeCells($fila_ini,$columna['nu_contrato_sap'],$fila-1,$columna['nu_contrato_sap']);
			$hoja->mergeCells($fila_ini,$columna['tx_distrito'],$fila-1,$columna['tx_distrito']);
			$hoja->mergeCells($fila_ini,$columna['tx_organizacion'],$fila-1,$columna['tx_organizacion']);
			$hoja->mergeCells($fila_ini,$columna['tx_usuario'],$fila-1,$columna['tx_usuario']);
			$hoja->mergeCells($fila_ini,$columna['nu_expediente_contrato'],$fila-1,$columna['nu_expediente_contrato']);
			$hoja->mergeCells($fila_ini,$columna['tx_regimen_lab'],$fila-1,$columna['tx_regimen_lab']);
			$hoja->mergeCells($fila_ini,$columna['tx_observacion_empresa'],$fila-1,$columna['tx_observacion_empresa']);
			$hoja->mergeCells($fila_ini,$columna['tx_tipo_act'],$fila-1,$columna['tx_tipo_act']);
			$hoja->mergeCells($fila_ini,$columna['tx_orientacion'],$fila-1,$columna['tx_orientacion']);
			$hoja->mergeCells($fila_ini,$columna['tx_empresa'],$fila-1,$columna['tx_empresa']);
			$hoja->mergeCells($fila_ini,$columna['nu_rif'],$fila-1,$columna['nu_rif']);
			$hoja->mergeCells($fila_ini,$columna['nu_acreedor'],$fila-1,$columna['nu_acreedor']);
			$hoja->mergeCells($fila_ini,$columna['tx_tipo_empresa'],$fila-1,$columna['tx_tipo_empresa']);
			$hoja->mergeCells($fila_ini,$columna['nu_telefonico'],$fila-1,$columna['nu_telefonico']);
			$hoja->mergeCells($fila_ini,$columna['nu_telefonico_opcional'],$fila-1,$columna['nu_telefonico_opcional']);
			$hoja->mergeCells($fila_ini,$columna['fe_carta_preliminar'],$fila-1,$columna['fe_carta_preliminar']);
			$hoja->mergeCells($fila_ini,$columna['fe_firma_contrato'],$fila-1,$columna['fe_firma_contrato']);
			$hoja->mergeCells($fila_ini,$columna['fe_prorroga_inicio'],$fila-1,$columna['fe_prorroga_inicio']); 
			$hoja->mergeCells($fila_ini,$columna['fe_inicio'],$fila-1,$columna['fe_inicio']);
			$hoja->mergeCells($fila_ini,$columna['fe_culminacion'],$fila-1,$columna['fe_culminacion']);
			$hoja->mergeCells($fila_ini,$columna['nu_ejecucion'],$fila-1,$columna['nu_ejecucion']);
			$hoja->mergeCells($fila_ini,$columna['nu_monto_total_adjudicado_dol'],$fila-1,$columna['nu_monto_total_adjudicado_dol']);
			$hoja->mergeCells($fila_ini,$columna['nu_monto_total_adjudicado_bsf'],$fila-1,$columna['nu_monto_total_adjudicado_bsf']);
			$hoja->mergeCells($fila_ini,$columna['nu_monto_total_adjudicado_euro'],$fila-1,$columna['nu_monto_total_adjudicado_euro']);
			$hoja->mergeCells($fila_ini,$columna['nu_monto_total_adjudicado'],$fila-1,$columna['nu_monto_total_adjudicado']);
			$hoja->mergeCells($fila_ini,$columna['tx_lugar_ejecucion'],$fila-1,$columna['tx_lugar_ejecucion']);
			//$hoja->mergeCells($fila_ini,$columna['nu_modificaciones'],$fila-1,$columna['nu_modificaciones']);			
			$hoja->mergeCells($fila_ini,$columna['ant.nu_modificaciones'],$fila-1,$columna['ant.nu_modificaciones']);
			$hoja->mergeCells($fila_ini,$columna['ant.fe_valor'],$fila-1,$columna['ant.fe_valor']);
			$hoja->mergeCells($fila_ini,$columna['ant.nu_monto_modificaciones'],$fila-1,$columna['ant.nu_monto_modificaciones']);	
			$hoja->mergeCells($fila_ini,$columna['fiel.nu_modificaciones'],$fila-1,$columna['fiel.nu_modificaciones']);
			$hoja->mergeCells($fila_ini,$columna['fiel.fe_valor'],$fila-1,$columna['fiel.fe_valor']);
			$hoja->mergeCells($fila_ini,$columna['fiel.nu_monto_modificaciones'],$fila-1,$columna['fiel.nu_monto_modificaciones']);
			$hoja->mergeCells($fila_ini,$columna['camb.nu_modificaciones'],$fila-1,$columna['camb.nu_modificaciones']);
			$hoja->mergeCells($fila_ini,$columna['camb.fe_valor'],$fila-1,$columna['camb.fe_valor']);
			$hoja->mergeCells($fila_ini,$columna['camb.nu_monto_modificaciones'],$fila-1,$columna['camb.nu_monto_modificaciones']);
			$hoja->mergeCells($fila_ini,$columna['monto_suma_cambiocantidad'],$fila-1,$columna['monto_suma_cambiocantidad']);
			$hoja->mergeCells($fila_ini,$columna['camba.nu_modificaciones'],$fila-1,$columna['camba.nu_modificaciones']);
			$hoja->mergeCells($fila_ini,$columna['camba.fe_valor'],$fila-1,$columna['camba.fe_valor']);
			$hoja->mergeCells($fila_ini,$columna['camba.nu_monto_modificaciones'],$fila-1,$columna['camba.nu_monto_modificaciones']);
			$hoja->mergeCells($fila_ini,$columna['monto_suma_cambioalcance'],$fila-1,$columna['monto_suma_cambioalcance']);
			$hoja->mergeCells($fila_ini,$columna['pj.nu_modificaciones'],$fila-1,$columna['pj.nu_modificaciones']);
			$hoja->mergeCells($fila_ini,$columna['pj.fe_valor'],$fila-1,$columna['pj.fe_valor']);
			$hoja->mergeCells($fila_ini,$columna['pj.nu_monto_modificaciones'],$fila-1,$columna['pj.nu_monto_modificaciones']);
			$hoja->mergeCells($fila_ini,$columna['monto_suma_periejecucion'],$fila-1,$columna['monto_suma_periejecucion']);
			$hoja->mergeCells($fila_ini,$columna['alccp.nu_modificaciones'],$fila-1,$columna['alccp.nu_modificaciones']);
			$hoja->mergeCells($fila_ini,$columna['alccp.fe_valor'],$fila-1,$columna['alccp.fe_valor']);
			$hoja->mergeCells($fila_ini,$columna['tea.nu_modificaciones'],$fila-1,$columna['tea.nu_modificaciones']);
			$hoja->mergeCells($fila_ini,$columna['tea.fe_valor'],$fila-1,$columna['tea.fe_valor']);
			$hoja->mergeCells($fila_ini,$columna['tea.nu_monto_modificaciones'],$fila-1,$columna['tea.nu_monto_modificaciones']);
			$hoja->mergeCells($fila_ini,$columna['fp.nu_modificaciones'],$fila-1,$columna['fp.nu_modificaciones']);
			$hoja->mergeCells($fila_ini,$columna['fp.fe_valor'],$fila-1,$columna['fp.fe_valor']);
			$hoja->mergeCells($fila_ini,$columna['fr.nu_modificaciones'],$fila-1,$columna['fr.nu_modificaciones']);
			$hoja->mergeCells($fila_ini,$columna['fr.fe_valor'],$fila-1,$columna['fr.fe_valor']);
			$hoja->mergeCells($fila_ini,$columna['ffi.fe_valor'],$fila-1,$columna['ffi.fe_valor']);
	
			
			$temp_co_contrato=$row['co_contrato'];
			$fila_ini=$fila;
		}
		$fila++;$i++;
											}
				//echo $hoja;							
											
			$hoja->mergeCells($fila_ini,$columna['nu_solped_contrato'],$fila-1,$columna['nu_solped_contrato']);
			$hoja->mergeCells($fila_ini,$columna['nu_contrato_sap'],$fila-1,$columna['nu_contrato_sap']);
			$hoja->mergeCells($fila_ini,$columna['tx_distrito'],$fila-1,$columna['tx_distrito']);
			$hoja->mergeCells($fila_ini,$columna['tx_organizacion'],$fila-1,$columna['tx_organizacion']);
			$hoja->mergeCells($fila_ini,$columna['tx_usuario'],$fila-1,$columna['tx_usuario']);
			$hoja->mergeCells($fila_ini,$columna['nu_expediente_contrato'],$fila-1,$columna['nu_expediente_contrato']);
			$hoja->mergeCells($fila_ini,$columna['tx_regimen_lab'],$fila-1,$columna['tx_regimen_lab']);
			$hoja->mergeCells($fila_ini,$columna['tx_observacion_empresa'],$fila-1,$columna['tx_observacion_empresa']);
			$hoja->mergeCells($fila_ini,$columna['tx_tipo_act'],$fila-1,$columna['tx_tipo_act']);
			$hoja->mergeCells($fila_ini,$columna['tx_orientacion'],$fila-1,$columna['tx_orientacion']);
			$hoja->mergeCells($fila_ini,$columna['tx_empresa'],$fila-1,$columna['tx_empresa']);
			$hoja->mergeCells($fila_ini,$columna['nu_rif'],$fila-1,$columna['nu_rif']);
			$hoja->mergeCells($fila_ini,$columna['nu_acreedor'],$fila-1,$columna['nu_acreedor']);
			$hoja->mergeCells($fila_ini,$columna['tx_tipo_empresa'],$fila-1,$columna['tx_tipo_empresa']);
			$hoja->mergeCells($fila_ini,$columna['nu_telefonico'],$fila-1,$columna['nu_telefonico']);
			$hoja->mergeCells($fila_ini,$columna['nu_telefonico_opcional'],$fila-1,$columna['nu_telefonico_opcional']);
			$hoja->mergeCells($fila_ini,$columna['fe_carta_preliminar'],$fila-1,$columna['fe_carta_preliminar']);
			$hoja->mergeCells($fila_ini,$columna['fe_firma_contrato'],$fila-1,$columna['fe_firma_contrato']);
			$hoja->mergeCells($fila_ini,$columna['fe_prorroga_inicio'],$fila-1,$columna['fe_prorroga_inicio']); 
			$hoja->mergeCells($fila_ini,$columna['fe_inicio'],$fila-1,$columna['fe_inicio']);
			$hoja->mergeCells($fila_ini,$columna['fe_culminacion'],$fila-1,$columna['fe_culminacion']);
			$hoja->mergeCells($fila_ini,$columna['nu_ejecucion'],$fila-1,$columna['nu_ejecucion']);
			$hoja->mergeCells($fila_ini,$columna['nu_monto_total_adjudicado_dol'],$fila-1,$columna['nu_monto_total_adjudicado_dol']);
			$hoja->mergeCells($fila_ini,$columna['nu_monto_total_adjudicado_bsf'],$fila-1,$columna['nu_monto_total_adjudicado_bsf']);
			$hoja->mergeCells($fila_ini,$columna['nu_monto_total_adjudicado_euro'],$fila-1,$columna['nu_monto_total_adjudicado_euro']);
			$hoja->mergeCells($fila_ini,$columna['nu_monto_total_adjudicado'],$fila-1,$columna['nu_monto_total_adjudicado']);
			$hoja->mergeCells($fila_ini,$columna['tx_lugar_ejecucion'],$fila-1,$columna['tx_lugar_ejecucion']);
			$hoja->mergeCells($fila_ini,$columna['nu_modificaciones'],$fila-1,$columna['nu_modificaciones']);
			//$hoja->mergeCells($fila_ini,$columna['monto_suma_modificacion'],$fila-1,$columna['monto_suma_modificacion']);
			$hoja->mergeCells($fila_ini,$columna['ant.nu_modificaciones'],$fila-1,$columna['ant.nu_modificaciones']);
			$hoja->mergeCells($fila_ini,$columna['ant.fe_valor'],$fila-1,$columna['ant.fe_valor']);
			$hoja->mergeCells($fila_ini,$columna['ant.nu_monto_modificaciones'],$fila-1,$columna['ant.nu_monto_modificaciones']);	
			$hoja->mergeCells($fila_ini,$columna['fiel.nu_modificaciones'],$fila-1,$columna['fiel.nu_modificaciones']);
			$hoja->mergeCells($fila_ini,$columna['fiel.fe_valor'],$fila-1,$columna['fiel.fe_valor']);
			$hoja->mergeCells($fila_ini,$columna['fiel.nu_monto_modificaciones'],$fila-1,$columna['fiel.nu_monto_modificaciones']);
			$hoja->mergeCells($fila_ini,$columna['camb.nu_modificaciones'],$fila-1,$columna['camb.nu_modificaciones']);
			$hoja->mergeCells($fila_ini,$columna['camb.fe_valor'],$fila-1,$columna['camb.fe_valor']);
			$hoja->mergeCells($fila_ini,$columna['camb.nu_monto_modificaciones'],$fila-1,$columna['camb.nu_monto_modificaciones']);
			$hoja->mergeCells($fila_ini,$columna['camba.nu_modificaciones'],$fila-1,$columna['camba.nu_modificaciones']);
			$hoja->mergeCells($fila_ini,$columna['camba.fe_valor'],$fila-1,$columna['camba.fe_valor']);
			$hoja->mergeCells($fila_ini,$columna['camba.nu_monto_modificaciones'],$fila-1,$columna['camba.nu_monto_modificaciones']);
			$hoja->mergeCells($fila_ini,$columna['pj.nu_modificaciones'],$fila-1,$columna['pj.nu_modificaciones']);
			$hoja->mergeCells($fila_ini,$columna['pj.fe_valor'],$fila-1,$columna['pj.fe_valor']);
			$hoja->mergeCells($fila_ini,$columna['pj.nu_monto_modificaciones'],$fila-1,$columna['pj.nu_monto_modificaciones']);
			$hoja->mergeCells($fila_ini,$columna['alccp.nu_modificaciones'],$fila-1,$columna['alccp.nu_modificaciones']);
			$hoja->mergeCells($fila_ini,$columna['alccp.fe_valor'],$fila-1,$columna['alccp.fe_valor']);
			$hoja->mergeCells($fila_ini,$columna['fp.nu_modificaciones'],$fila-1,$columna['fp.nu_modificaciones']);
			$hoja->mergeCells($fila_ini,$columna['fp.fe_valor'],$fila-1,$columna['fp.fe_valor']);
			$hoja->mergeCells($fila_ini,$columna['fr.nu_modificaciones'],$fila-1,$columna['fr.nu_modificaciones']);
			$hoja->mergeCells($fila_ini,$columna['fr.fe_valor'],$fila-1,$columna['fr.fe_valor']);
			//$hoja->mergeCells($fila_ini,$columna['nu_monto_total'],$fila-1,$columna['nu_monto_total']);

	$tiempo=date("d").date("m").date("y")."_".date("H").date("i").date("s");	
	$libro->send('CONTRATOS_'.$tiempo.'.xls');
	$libro->close();
	mysql_close($conexion);
	
?>

