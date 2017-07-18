<?php 	
	session_start();
	require_once 'UnidadesClase.php';	
	
	$objUnidades = new UnidadesClase();
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
			$resultado = $objUnidades->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST['co_proceso'],$_REQUEST['co_contrato']);
			
			//for($i=0; $i<count($resultado); $i++)
				//$resultado[$i]['resp'] = true;		
			
			//print_r($resultado );
			$tot = $objUnidades->contar();
			$total = $tot[0]['cuenta'];
		//	if(is_object($objDocumento->pdo->monitor) && $objDocumento->pdo->monitor->notify_select)
		//	$objDocumento->pdo->popNotify(); // Libera posicion reg_padre
			break;
	
	case 'insertar':	 		               //  caso guardar 
		    $cond = $_REQUEST['Resultados'];
			$cond = str_replace('\"','"',$cond);
			$registro = json_decode($cond, true);
			$registro = array_filter($registro, "vacio");
			
			if(isset($_REQUEST['co_proceso']))
				$unidades['co_proceso']=$_REQUEST['co_proceso'];
			
			if(isset($_REQUEST['co_contrato']))
				$unidades['co_contrato']=$_REQUEST['co_contrato'];
						
			if(isset($registro['co_unidades']))
				$unidades['co_unidades']=$registro['co_unidades'];
				
			if(isset($registro['fe_entrega']))
				$unidades['fe_entrega']=$registro['fe_entrega'];
				
			if(isset($registro['fe_recibido']))
				$unidades['fe_recibido']=$registro['fe_recibido'];
				
			if(isset($registro['tx_detalle']))
				$unidades['tx_detalle']=$registro['tx_detalle'];
				
			if(isset($registro['co_usuario']))
				$unidades['co_usuario']=$registro['co_usuario'];
			
			
			$filtros = $_REQUEST["filter"];		
			$resulta = $objUnidades->insertar($unidades);
			$resultado = $objUnidades->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST['co_proceso'],$_REQUEST['co_contrato']);
				for($i=0; $i<count($resultado); $i++)
				$resultado[$i]['resp'] =$resulta;
				$tot = $objUnidades->contar();
				$total = $tot[0]['cuenta'];

		break;
		
		case 'modificar':	 		               //  caso guardar 
		
			$cond = $_REQUEST['Resultados'];
			$cond = str_replace('\"','"',$cond);
			$condicion['id_unidades']=$_REQUEST['condicion'];
			$registro = json_decode($cond, true);
			$registro = array_filter($registro, "vacio");
			$condicion['co_proceso'] = $_REQUEST['co_proceso'];
			 
				if(isset($_REQUEST['co_contrato']))
					$unidades['co_contrato']=$_REQUEST['co_contrato'];
						
				if(isset($registro['co_unidades']))
					$unidades['co_unidades']=$registro['co_unidades'];
				
				if(isset($registro['fe_entrega']))
					$unidades['fe_entrega']=$registro['fe_entrega'];
				
				if(isset($registro['fe_recibido']))
					$unidades['fe_recibido']=$registro['fe_recibido'];
				
				if(isset($registro['tx_detalle']))
					$unidades['tx_detalle']=$registro['tx_detalle'];
				
				if(isset($registro['co_usuario']))
					$unidades['co_usuario']=$registro['co_usuario'];
			
				if(isset($registro['id_unidades']))
					$condicion['id_unidades']=$registro['id_unidades'];
						
			$resulta = $objUnidades->actualizar($unidades, $condicion);
			$resultado = $objUnidades->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST['co_proceso'],$_REQUEST['co_contrato']);
		
			for($i=0; $i<count($resultado); $i++)
				$resultado[$i]['resp'] =$resulta;
			
			$tot = $objUnidades->contar();
				$total = $tot[0]['cuenta'];

		break;
		
		case 'eliminar':  //  caso  eliminar
			$condiciones['id_unidades']=$_REQUEST['id_unidades'];
			$resultado = $objUnidades->eliminar($condiciones);
			$filtros = $_REQUEST["filter"];	
			$resultado = $objUnidades->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST['co_proceso'],$_REQUEST['co_contrato']);
			$tot = $objUnidades->contar();
			$total = $tot[0]['cuenta'];
		break;

		

	}	
	if($accion!='login')
		echo $resultado2='{"total":'.(($total)? $total : 0).', "Resultados":'.json_encode($resultado).'}';

?>
