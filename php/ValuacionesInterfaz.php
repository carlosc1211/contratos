<?php 	
	session_start();
	require_once 'ValuacionesClases.php';	
	
	$objValuacion = new ValuacionesClases();
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
			$resultado = $objValuacion->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST['co_contrato'],$_REQUEST['co_pedido']);
			
			//for($i=0; $i<count($resultado); $i++)
				//$resultado[$i]['resp'] = true;		
			
			//print_r($resultado );
			$tot = $objValuacion->contar();
			$total = $tot[0]['cuenta'];
		//	if(is_object($objDocumento->pdo->monitor) && $objDocumento->pdo->monitor->notify_select)
		//	$objDocumento->pdo->popNotify(); // Libera posicion reg_padre
			break;
	
	case 'insertar':
		 		               //  caso guardar 
		    $cond = $_REQUEST['Resultados'];
			$cond = str_replace('\"','"',$cond);
			$condicion['co_valuacion']=$_REQUEST['co_valuacion'];
			$registro = json_decode($cond, true);
			$registro = array_filter($registro, "vacio");
			
			//$recobro['co_recobro']=$_REQUEST['co_recobro']; 'nu_monto_consumido_calculado'=>'nu_monto_consumido_calculado','nu_monto_disponible_calculado'=>'nu_monto_disponible_calculado',
		
			if(isset($registro['co_valuacion']))
				$valuacion['co_valuacion']=$registro['co_valuacion'];
				
			if(isset($registro['co_pedido']))
				$valuacion['co_pedido']=$registro['co_pedido'];
								
			if(isset($registro['nu_valuacion']))
				$valuacion['nu_valuacion']=$registro['nu_valuacion'];
			
			if(isset($registro['fe_periodoi']))
				$valuacion['fe_periodoi']=$registro['fe_periodoi'];
			
			if(isset($registro['fe_periodof']))
				$valuacion['fe_periodof']=$registro['fe_periodof'];
			
			if(isset($registro['nu_monto_valuacion']))
			    $valuacion['nu_monto_valuacion']=$registro['nu_monto_valuacion'];
			
			if(isset($registro['nu_valuacion']))
			    $valuacion['nu_valuacion']=$registro['nu_valuacion'];
			
			if(isset($registro['fe_recibido']))
			    $valuacion['fe_recibido']=$registro['fe_recibido'];
			        
			if(isset($registro['fe_aprobacion']))
			    $valuacion['fe_aprobacion']=$registro['fe_aprobacion'];
			    
			if(isset($registro['fe_entrega']))
			    $valuacion['fe_entrega']=$registro['fe_entrega'];
			   
		    if(isset($registro['tx_detalle_serv']))
			    $valuacion['tx_detalle_serv']=$registro['tx_detalle_serv'];
			    
			if(isset($registro['nu_pedido']))
			    $valuacion['nu_pedido']=$registro['nu_pedido'];
			
			if(isset($registro['co_moneda']))
			    $valuacion['co_moneda']=$registro['tx_moneda'];
			    
			
			$filtros = $_REQUEST["filter"];		
			$resulta = $objValuacion->insertar($valuacion);
			$resultado = $objValuacion->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST['co_contrato'],$_REQUEST['co_pedido']);
				for($i=0; $i<count($resultado); $i++)
				$resultado[$i]['resp'] =$resulta;
				$tot = $objValuacion->contar();
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
			$condicion['co_valuacion'] = $_REQUEST['co_valuacion'];
			
			if(isset($registro['co_valuacion']))
				$valuacion['co_valuacion']=$registro['co_valuacion'];
				
			if(isset($registro['co_pedido']))
				$valuacion['co_pedido']=$registro['co_pedido'];
								
			if(isset($registro['nu_valuacion']))
				$valuacion['nu_valuacion']=$registro['nu_valuacion'];
			
			if(isset($registro['fe_periodoi']))
				$valuacion['fe_periodoi']=$registro['fe_periodoi'];
			
			if(isset($registro['fe_periodof']))
				$valuacion['fe_periodof']=$registro['fe_periodof'];
			
			if(isset($registro['nu_monto_valuacion']))
			    $valuacion['nu_monto_valuacion']=$registro['nu_monto_valuacion'];
			
			if(isset($registro['nu_valuacion']))
			    $valuacion['nu_valuacion']=$registro['nu_valuacion'];
			
			if(isset($registro['fe_recibido']))
			    $valuacion['fe_recibido']=$registro['fe_recibido'];
			        
			if(isset($registro['fe_aprobacion']))
			    $valuacion['fe_aprobacion']=$registro['fe_aprobacion'];
			    
			if(isset($registro['fe_entrega']))
			    $valuacion['fe_entrega']=$registro['fe_entrega'];
			   
		    if(isset($registro['tx_detalle_serv']))
			    $valuacion['tx_detalle_serv']=$registro['tx_detalle_serv'];
			    
			if(isset($registro['nu_pedido']))
			    $valuacion['nu_pedido']=$registro['nu_pedido'];
			
			if(isset($registro['co_moneda']))
			    $valuacion['co_moneda']=$registro['tx_moneda'];
						
			$resulta = $objValuacion->actualizar($valuacion, $condicion);
			$resultado = $objValuacion->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST['co_contrato'],$_REQUEST['co_pedido']);
		
			/*for($i=0; $i<count($resultado); $i++)
				$resultado[$i]['resp'] =$resulta;*/
			
			/*$tot = $objRecobro->contar();
				$total = $tot[0]['cuenta'];*/

		break;
		
		case 'buscar': 
			$co_pedido=$_REQUEST['co_pedido'];
			$resultado = $objValuacion->buscar($co_pedido);
	   break;
		
		case 'eliminar':  //  caso  eliminar
			$condiciones['co_valuacion']=$_REQUEST['co_valuacion'];
			$resultado = $objValuacion->eliminar($condiciones);
			$filtros = $_REQUEST["filter"];	
			$resultado = $objValuacion->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST['co_contrato'],$_REQUEST['co_pedido']);
			$tot = $objValuacion->contar();
			$total = $tot[0]['cuenta'];
		break;

		

	}	
	if($accion!='login')
		echo $resultado2='{"total":'.(($total)? $total : 0).', "Resultados":'.json_encode($resultado).'}';

?>
