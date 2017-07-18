<?php 	
	session_start();
	require_once 'RecobroClase.php';	
	
	$objRecobro = new RecobroClase();
	$accion = (isset($_POST['accion']) ? $_POST['accion'] : $_GET['accion']);
	global $filtros;
	
	
function vacio($var) {

    return ($var != '');

}

	$registro = array_filter($_REQUEST, "vacio");
	//print_r($_REQUEST["filter"]);
	$filtros = str_replace('\"','"',$_REQUEST["filter"]);
	$_SESSION["filtros"]=$filtros ;
	//$filtros = json_decode($filtro, true);
	//print_r($filtros);	
	switch ($accion) {
		
	case 'refrescar':

			//$filtros = $_REQUEST["filter"];	
			$resultado = $objRecobro->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST['co_contrato'],$_REQUEST['tipo_recobro']);
			
			//for($i=0; $i<count($resultado); $i++)
				//$resultado[$i]['resp'] = true;		
			
			//print_r($resultado );
			$tot = $objRecobro->contar();
			$total = $tot[0]['cuenta'];
		//	if(is_object($objDocumento->pdo->monitor) && $objDocumento->pdo->monitor->notify_select)
		//	$objDocumento->pdo->popNotify(); // Libera posicion reg_padre
			break;
	
	case 'insertar':
		 		               //  caso guardar 
		    $cond = $_REQUEST['Resultados'];
			$cond = str_replace('\"','"',$cond);
			$condicion['co_recobro']=$_REQUEST['co_recobro'];
			$registro = json_decode($cond, true);
			$registro = array_filter($registro, "vacio");
			
			//$recobro['co_recobro']=$_REQUEST['co_recobro'];
		
			if(isset($_REQUEST['tipo_recobro']))
				$recobro['co_tipo_recobro']=$_REQUEST['tipo_recobro'];
								
			if(isset($registro['tx_tipo_recobro']))
				$recobro['tx_tipo_recobro']=$registro['tx_tipo_recobro'];
			
			if(isset($_REQUEST['co_contrato']))
				$recobro['co_contrato']=$_REQUEST['co_contrato'];
			
			if(isset($registro['nu_porc_recobro']))
				$recobro['nu_porc_recobro']=$registro['nu_porc_recobro'];
			
			if(isset($registro['nu_recobro']))
			    $recobro['nu_recobro']=$registro['nu_recobro'];
			
			/*if(isset($registro['nu_monto_recobrado_calculado']))
			    $recobro['nu_monto_recobrado_calculado']=$registro['nu_monto_recobrado_calculado'];*/
			        
			/*if(isset($registro['nu_monto_pendiente_recobro']))
			    $recobro['nu_monto_pendiente_recobro']=$registro['nu_monto_pendiente_recobro'];*/
			    
			if(isset($registro['nu_monto_recobrado']))
			    $recobro['nu_monto_recobrado']=$registro['nu_monto_recobrado'];
			
			if(isset($registro['co_moneda']))
			    $recobro['co_moneda']=$registro['co_moneda'];
			    
			
			$filtros = $_REQUEST["filter"];		
			$resulta = $objRecobro->insertar($recobro);
			$resultado = $objRecobro->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST['co_contrato'],$_REQUEST['tipo_recobro']);
				for($i=0; $i<count($resultado); $i++)
				$resultado[$i]['resp'] =$resulta;
				$tot = $objRecobro->contar();
				$total = $tot[0]['cuenta'];

		break;
		
		case 'modificar':	 		               //  caso guardar 
		//echo "hola ";
			$cond = $_REQUEST['Resultados'];
			$cond = str_replace('\"','"',$cond);
			//$condicion['co_recobro']=$_REQUEST['co_recobro'];
			$registro = json_decode($cond, true);
			//print_r($registro);
			$registro = array_filter($registro, "vacio");
			$condicion['co_recobro'] = $_REQUEST['co_recobro'];
						
			/*if(isset($registro['co_tipo_recobro']))
				$recobro['co_tipo_recobro']=$registro['co_tipo_recobro'];
				
			if(isset($registro['tx_tipo_recobro']))
				$recobro['tx_tipo_recobro']=$registro['tx_tipo_recobro'];*/
			
			if(isset($_REQUEST['tipo_recobro']))
				$recobro['co_tipo_recobro']=$_REQUEST['tipo_recobro'];
								
			if(isset($registro['tx_tipo_recobro']))
				$recobro['tx_tipo_recobro']=$registro['tx_tipo_recobro'];
			
			if(isset($_REQUEST['co_contrato']))
				$recobro['co_contrato']=$_REQUEST['co_contrato'];
			
			if(isset($registro['nu_porc_recobro']))
				$recobro['nu_porc_recobro']=$registro['nu_porc_recobro'];
			
			/*if(isset($registro['nu_recobro']))
			    $recobro['nu_recobro']=$registro['nu_recobro'];
			
			if(isset($registro['nu_monto_pagado_recobro']))
			    $recobro['nu_monto_pagado_recobro']=$registro['nu_monto_pagado_recobro'];*/
			        
			if(isset($registro['nu_monto_pendiente_recobro']))
			    $recobro['nu_monto_pendiente_recobro']=$registro['nu_monto_pendiente_recobro'];
			    
			if(isset($registro['nu_monto_recobrado']))
			    $recobro['nu_monto_recobrado']=$registro['nu_monto_recobrado'];
			
			if(isset($registro['co_moneda']))
			    $recobro['co_moneda']=$registro['co_moneda'];
						
			$resulta = $objRecobro->actualizar($recobro, $condicion);
			$resultado = $objRecobro->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST['co_contrato'],$_REQUEST['tipo_recobro']);
		
			/*for($i=0; $i<count($resultado); $i++)
				$resultado[$i]['resp'] =$resulta;*/
			
			/*$tot = $objRecobro->contar();
				$total = $tot[0]['cuenta'];*/

		break;
		
		case 'eliminar':  //  caso  eliminar
			$condiciones['co_recobro']=$_REQUEST['co_recobro'];
			$resultado = $objRecobro->eliminar($condiciones);
			$filtros = $_REQUEST["filter"];	
			$resultado = $objRecobro->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST['co_contrato'],$_REQUEST['tipo_recobro']);
			$tot = $objRecobro->contar();
			$total = $tot[0]['cuenta'];
		break;
		
		case 'buscar': 
			$co_contrato=$_REQUEST['co_contrato'];
			$resultado = $objRecobro->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"], "",$co_contrato);
	   break;

	}	
	if($accion!='login')
		echo $resultado2='{"total":'.(($total)? $total : 0).', "Resultados":'.json_encode($resultado).'}';

?>
