<?php
	require ('../Spreadsheet/Excel/Writer.php');
	include('../config/conf.php');
	include_once('../php/FuncionesFecha.php');
	require_once 'MyPDO.php';	
	session_start();
	
	$libro = new Spreadsheet_Excel_Writer();	
	if (PEAR::isError($hoja)){
		die($hoja->getMessage());
	}
	$libro->setVersion(8);
	$hoja =& $libro->addWorksheet('Procesos Planificados');
		
//************************ESTABLECEMOS LOS FORMATOS DE LAS CELDAS*****************************
	
	$C_tope=$libro->addFormat(array('fgcolor' => 'red',
									'bold' => 1,
									'color' => 'white',
									'border' => 1,
									'bordercolor' => 'grey',
									'text-transform'=> 'uppercase'));
									
	$E_centrado1 =$libro->addFormat(array('vAlign' => 'vcenter','text-transform'=> 'uppercase'));
	
	$E_centrado2 =$libro->addFormat(array('halign' => 'center','vAlign' => 'vcenter'));
	
//**********************************Letra Negra Grande****************************************
	
	$N_grande =$libro->addFormat(array('Size' => 30,
                                       'bold' => 4,
                                       'text-transform' => 'uppercase',
                                       'fgcolor' => 'white',
									   'halign' => 'center'));
	

//*****************************ESTABLECEMOS LA COLUMNA DE CADA CAMPO**************************
	
	$columna=array();
	$columna['fe_especificaciones']=1;
	$columna['tx_ubicacion']=2;
	$columna['tx_proyecto']=3;
	
//************************************ESTABLECEMOS LOS NOMBRE DE COLUMNAS***************************
	$header=array();
	$header[$columna['fe_especificaciones']]='Fecha de Solicitud de Inicio';
	$header[$columna['tx_ubicacion']]='Ubicación';
	$header[$columna['tx_proyecto']]='Proyecto';
	

//******************************************CONSTRUIMOS LA HOJA****************************************
	
	$hoja->insertBitmap (0,0,'../images/pdvsa_eyp.bmp',0,2,1.5,1.5);
	$hoja->write(0,0,utf8_decode("GERENCIA DE CONTRATACIÒN ''CONTRATOS POR INICIAR''"),$N_grande);
	$hoja->mergeCells(0,0,6,20);
	foreach($header as $key => $value){
		$hoja->write(8,$key,utf8_decode($value),$C_tope);
	}
//******************************************COLOCAMOS EL ANCHO DE LAS COLUMNAS***************************
	
	//$hoja->setColumn($columna[''],$columna[''],20);
	$hoja->setColumn($columna['fe_especificaciones'],$columna['fe_especificaciones'],23);
	$hoja->setColumn($columna['tx_ubicacion'],$columna['tx_ubicacion'],18);
	$hoja->setColumn($columna['tx_proyecto'],$columna['tx_proyecto'],50);
	
//**********************************************************************************************************
	function convertArrayKeysToUtf88($array) {
    $convertedArray1 = array();
    $convertedArray = array();
	foreach($array as $key => $value){
		if(mb_check_encoding($value, 'UTF-8'))
		{
			$value = utf8_decode($value);
			}
      $convertedArray[$key] = $value;
    }
    //$convertedArray1[] = $convertedArray;
	//}
    return $convertedArray;
	}

//*************************************************CONECTAMOS A LA BD******************************************
		
	$conexion = mysql_connect("orimat100", "root", "MySQL1");
	mysql_select_db("contratos_test", $conexion);
	//mysql_query ("SET NAMES 'utf8'");
	$result=mysql_query("
	
	SELECT fe_especificaciones,tx_ubicacion,tx_proyecto
	FROM c003t_proyecto,i002t_ubicacion
	WHERE fe_especificaciones= '2013-01-01' AND '2013-01-31'");
	

	$fila=9;$fila_ini=9;
	$temp_co_control='1';$i=0;

	
	while($row = mysql_fetch_array($result)){
	$resultado=convertArrayKeysToUtf88($row);
		
//***************************************************CARGAMOS LAS FILAS***********************************************
		
		$hoja->write($fila,$columna['rownum'],html_entity_decode($resultado['rownum'].""),$E_centrado2);
		$hoja->write($fila,$columna['fe_especificaciones'],html_entity_decode($resultado['fe_especificaciones']),$E_centrado2);
		$hoja->write($fila,$columna['tx_ubicacion'],html_entity_decode($resultado['tx_ubicacion']),$E_centrado1);
		$hoja->write($fila,$columna['tx_proyecto'],html_entity_decode($resultado['tx_proyecto']),$E_centrado1);		
		
		
		/*if($temp_co_control!=$row['co_proceso']){
			$hoja->mergeCells($fila_ini,$columna['rownum'],$fila-1,$columna['rownum']);
			$hoja->mergeCells($fila_ini,$columna['tx_supervisor'],$fila-1,$columna['tx_supervisor']);
			$hoja->mergeCells($fila_ini,$columna['tx_usuario'],$fila-1,$columna['tx_usuario']);
			$hoja->mergeCells($fila_ini,$columna['fe_especificaciones'],$fila-1,$columna['fe_especificaciones']);
			$hoja->mergeCells($fila_ini,$columna['tx_ubicacion'],$fila-1,$columna['tx_ubicacion']);
			$hoja->mergeCells($fila_ini,$columna['tx_organizacion'],$fila-1,$columna['tx_organizacion']);
			$hoja->mergeCells($fila_ini,$columna['tx_superintendencia'],$fila-1,$columna['tx_superintendencia']);
			$hoja->mergeCells($fila_ini,$columna['tx_lider_proyecto'],$fila-1,$columna['tx_lider_proyecto']);
			$hoja->mergeCells($fila_ini,$columna['nu_telefonico_lider'],$fila-1,$columna['nu_telefonico_lider']);
			$hoja->mergeCells($fila_ini,$columna['nu_extension_lider'],$fila-1,$columna['nu_extension_lider']);
			$hoja->mergeCells($fila_ini,$columna['tx_proyecto'],$fila-1,$columna['tx_proyecto']);
			$hoja->mergeCells($fila_ini,$columna['tx_lugar_ejecucion'],$fila-1,$columna['tx_lugar_ejecucion']);
			$hoja->mergeCells($fila_ini,$columna['nu_plazo_ejec'],$fila-1,$columna['nu_plazo_ejec']);
			$hoja->mergeCells($fila_ini,$columna['tx_tipo_contrato'],$fila-1,$columna['tx_tipo_contrato']); 
			$hoja->mergeCells($fila_ini,$columna['tx_modalidad'],$fila-1,$columna['tx_modalidad']);
			$hoja->mergeCells($fila_ini,$columna['tx_naturaleza'],$fila-1,$columna['tx_naturaleza']);
			$hoja->mergeCells($fila_ini,$columna['tx_regimen_lab'],$fila-1,$columna['tx_regimen_lab']);
			$hoja->mergeCells($fila_ini,$columna['tx_mecanismo_verif'],$fila-1,$columna['tx_mecanismo_verif']);
			$hoja->mergeCells($fila_ini,$columna['tx_estrategia_adj'],$fila-1,$columna['tx_estrategia_adj']);
			$hoja->mergeCells($fila_ini,$columna['tx_rango'],$fila-1,$columna['tx_rango']);
			$hoja->mergeCells($fila_ini,$columna['tx_descripcion'],$fila-1,$columna['tx_descripcion']);
			$hoja->mergeCells($fila_ini,$columna['nu_solped'],$fila-1,$columna['nu_solped']);
			$hoja->mergeCells($fila_ini,$columna['nu_expediente'],$fila-1,$columna['nu_expediente']);
			$hoja->mergeCells($fila_ini,$columna['nu_control_cf'],$fila-1,$columna['nu_control_cf']);
			$hoja->mergeCells($fila_ini,$columna['tx_prioridad'],$fila-1,$columna['tx_prioridad']);
			$hoja->mergeCells($fila_ini,$columna['tx_tipo_presupuesto'],$fila-1,$columna['tx_tipo_presupuesto']);
			$hoja->mergeCells($fila_ini,$columna['tx_orientacion'],$fila-1,$columna['tx_orientacion']);
			$hoja->mergeCells($fila_ini,$columna['tx_alcance'],$fila-1,$columna['tx_alcance']);
			$hoja->mergeCells($fila_ini,$columna['tx_antecedente'],$fila-1,$columna['tx_antecedente']);
			$hoja->mergeCells($fila_ini,$columna['tx_comision'],$fila-1,$columna['tx_comision']);
			$hoja->mergeCells($fila_ini,$columna['fe_recomendacion'],$fila-1,$columna['fe_recomendacion']);
			
			
			$temp_co_control=$row['co_proceso'];
			$fila_ini=$fila;
		}*/
		$fila++;$i++;
											}
			//echo $hoja;							
			/*$hoja->mergeCells($fila_ini,$columna['rownum'],$fila-1,$columna['rownum']);
			$hoja->mergeCells($fila_ini,$columna['tx_supervisor'],$fila-1,$columna['tx_supervisor']);
			$hoja->mergeCells($fila_ini,$columna['tx_usuario'],$fila-1,$columna['tx_usuario']);
			$hoja->mergeCells($fila_ini,$columna['fe_especificaciones'],$fila-1,$columna['fe_especificaciones']);
			$hoja->mergeCells($fila_ini,$columna['tx_ubicacion'],$fila-1,$columna['tx_ubicacion']);
			$hoja->mergeCells($fila_ini,$columna['tx_organizacion'],$fila-1,$columna['tx_organizacion']);
			$hoja->mergeCells($fila_ini,$columna['tx_superintendencia'],$fila-1,$columna['tx_superintendencia']);
			$hoja->mergeCells($fila_ini,$columna['tx_lider_proyecto'],$fila-1,$columna['tx_lider_proyecto']);
			$hoja->mergeCells($fila_ini,$columna['nu_telefonico_lider'],$fila-1,$columna['nu_telefonico_lider']);
			$hoja->mergeCells($fila_ini,$columna['nu_extension_lider'],$fila-1,$columna['nu_extension_lider']);
			$hoja->mergeCells($fila_ini,$columna['tx_proyecto'],$fila-1,$columna['tx_proyecto']);
			$hoja->mergeCells($fila_ini,$columna['tx_lugar_ejecucion'],$fila-1,$columna['tx_lugar_ejecucion']);
			$hoja->mergeCells($fila_ini,$columna['nu_plazo_ejec'],$fila-1,$columna['nu_plazo_ejec']);
			$hoja->mergeCells($fila_ini,$columna['tx_tipo_contrato'],$fila-1,$columna['tx_tipo_contrato']); 
			$hoja->mergeCells($fila_ini,$columna['tx_modalidad'],$fila-1,$columna['tx_modalidad']);
			$hoja->mergeCells($fila_ini,$columna['tx_naturaleza'],$fila-1,$columna['tx_naturaleza']);
			$hoja->mergeCells($fila_ini,$columna['tx_regimen_lab'],$fila-1,$columna['tx_regimen_lab']);
			$hoja->mergeCells($fila_ini,$columna['tx_mecanismo_verif'],$fila-1,$columna['tx_mecanismo_verif']);
			$hoja->mergeCells($fila_ini,$columna['tx_estrategia_adj'],$fila-1,$columna['tx_estrategia_adj']);
			$hoja->mergeCells($fila_ini,$columna['tx_rango'],$fila-1,$columna['tx_rango']);
			$hoja->mergeCells($fila_ini,$columna['tx_descripcion'],$fila-1,$columna['tx_descripcion']);
			$hoja->mergeCells($fila_ini,$columna['nu_solped'],$fila-1,$columna['nu_solped']);
			$hoja->mergeCells($fila_ini,$columna['nu_expediente'],$fila-1,$columna['nu_expediente']);
			$hoja->mergeCells($fila_ini,$columna['nu_control_cf'],$fila-1,$columna['nu_control_cf']);
			$hoja->mergeCells($fila_ini,$columna['tx_prioridad'],$fila-1,$columna['tx_prioridad']);
			$hoja->mergeCells($fila_ini,$columna['tx_tipo_presupuesto'],$fila-1,$columna['tx_tipo_presupuesto']);
			$hoja->mergeCells($fila_ini,$columna['tx_orientacion'],$fila-1,$columna['tx_orientacion']);
			$hoja->mergeCells($fila_ini,$columna['tx_alcance'],$fila-1,$columna['tx_alcance']);
			$hoja->mergeCells($fila_ini,$columna['tx_antecedente'],$fila-1,$columna['tx_antecedente']);
			$hoja->mergeCells($fila_ini,$columna['tx_comision'],$fila-1,$columna['tx_comision']);
			$hoja->mergeCells($fila_ini,$columna['fe_recomendacion'],$fila-1,$columna['fe_recomendacion']);/**/
			
	$tiempo=date("d").date("m").date("y")."_".date("H").date("i").date("s");	
	$libro->send('CONTRATOS_'.$tiempo.'.xls');
	$libro->close();
	mysql_close($conexion);
	
?>

