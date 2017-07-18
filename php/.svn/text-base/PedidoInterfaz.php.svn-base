<?php
	//session_start();
	require_once 'PedidoClase.php';	
	$objPedido = new PedidoClase();
	$accion = (isset($_POST['accion']) ? $_POST['accion'] : $_GET['accion']);
	
function vacio($var) {

						return ($var != '');

					 }
		//print_r($_REQUEST);

	$registro = array_filter($_REQUEST, "vacio");
	$filtro = str_replace('\"','"',$_REQUEST["filter"]);
	$filtros = json_decode($filtro, true);	
	
	switch ($accion) { // interruptor accion
		
		
		case 'listar':
			$filtros = $_REQUEST["filter"];	
			$resultado = $objPedido->listar($_REQUEST['campo'], $_REQUEST['tabla']);
				//for($i=0; $i<count($resultado); $i++)
					//$resultado[$i]['resp'] = true;	
			
			//print_r($tot );
			$total = count($resultado);
			break;
		

		
		case 'refrescar':
			
			$filtros = $_REQUEST["filter"];	
			$resultado = $objPedido->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST['co_contrato']);
				//for($i=0; $i<count($resultado); $i++)
					//$resultado[$i]['resp'] = true;	
			$tot = $objPedido->contar();
			//print_r($resultado);
			//print_r($tot );
			$total = $tot[0]['cuenta'];
			//	if(is_object($objDocumento->pdo->monitor) && $objDocumento->pdo->monitor->notify_select)
			//	$objDocumento->pdo->popNotify(); // Libera posicion reg_padre
		
		break;
		
		case 'insertar':	 		               //  caso guardar 
		    $cond = $_REQUEST['Resultados'];
			$cond = str_replace('\"','"',$cond);
			$condicion['co_pedido']=$_REQUEST['condicion'];
			$registro = json_decode($cond, true);
			//$registro = array_filter($registro, "vacio");
			
			$unidades['co_pedido']=$_REQUEST['co_pedido'];
		
			if(isset($registro['nu_pedido']))
				$unidades['nu_pedido']=$registro['nu_pedido'];
			
			if(isset($_REQUEST['co_contrato']))
				$unidades['co_contrato']=$_REQUEST['co_contrato'];
			
			if(isset($registro['co_moneda']))
				$unidades['co_moneda']=$registro['co_moneda'];
			
			if(isset($registro['nu_monto_total']))
			    $unidades['nu_monto_total']=$registro['nu_monto_total'];
			
			if(isset($registro['tx_detalles']))
			    $unidades['tx_detalles']=$registro['tx_detalles'];
			        
			/*if(isset($registro['co_usuario']))
			    $unidades['co_usuario']=$registro['co_usuario'];*/
			
			
			$filtros = $_REQUEST["filter"];		
			$resulta = $objPedido->insertar($unidades);
			$resultado = $objPedido->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"], $_REQUEST['co_contrato']);
				for($i=0; $i<count($resultado); $i++)
				$resultado[$i]['resp'] =$resulta;
				$tot = $objPedido->contar();
				$total = $tot[0]['cuenta'];

		break;
		
		
		case 'modificar': //  caso guardar modificaciones de un regristro
			
			$cond = $_REQUEST['Resultados'];
			$cond = str_replace('\"','"',$cond);
			$condicion['co_pedido']=$_REQUEST['condicion'];
			
			$registro = json_decode($cond, true);
		
			$registro = array_filter($registro, "vacio");
			if(isset($registro['nu_pedido']))
				$pedido['nu_pedido']=$registro['nu_pedido'];
			
			if(isset($registro['nu_monto_total']))
				$pedido['nu_monto_total']=$registro['nu_monto_total'];
			
			if(isset($registro['co_moneda']))
			    $pedido['co_moneda']=$registro['co_moneda'];
			    
			if(isset($registro['tx_detalles']))
			    $pedido['tx_detalles']=$registro['tx_detalles'];
			
			$filtros = $_REQUEST["filter"];		
			if(isset($registro['co_pedido']))
				$condicion['co_pedido']=$registro['co_pedido'];
			$resulta = $objPedido->actualizar($pedido, $condicion);
			/*if($_REQUEST['xaction']=='create'){//Si estamos creando un Usuario
			   $resulta = $objPedido->insertar($pedido);
			}
			else{//Si es un update
				if(isset($registro['co_pedido']))
				$condicion['co_pedido']=$registro['co_pedido'];
				$resulta = $objPedido->actualizar($pedido, $condicion);
			}*/
			
			
			$resultado = $objPedido->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"], $_REQUEST['co_contrato']);
		
			for($i=0; $i<count($resultado); $i++)
				$resultado[$i]['resp'] =$resulta;
			
			$tot = $objPedido->contar();
				$total = $tot[0]['cuenta'];

		break;
		
		case 'eliminar': //  caso  eliminar
		
			$condiciones['co_pedido']=$_REQUEST['co_pedido'];
			$resultado = $objPedido->eliminar($condiciones);
			$filtros = $_REQUEST["filter"];	
			$resultado = $objPedido->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"], $_REQUEST['co_contrato']);
			$tot = $objPedido->contar();
			$total = $tot[0]['cuenta'];
		break;
		
	   case 'buscar_pedido': 
			$co_pedido=$_REQUEST['co_pedido'];
			$resultado = $objPedido->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"], "",$co_pedido);
	   break;

	}	
		echo $resultado2='{"total":'.(($total)? $total : 0).', "Resultados":'.json_encode($resultado).'}';
	
?>
