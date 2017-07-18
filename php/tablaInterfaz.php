<?php 	
	/*//session_start();
	require_once 'tablaClase.php';	
	$objtabla = new tablaClase();
	$accion = (isset($_POST['accion']) ? $_POST['accion'] : $_GET['accion']);
	
		
function vacio($var) {

    return ($var != '');

}
	$registro = array_filter($_REQUEST, "vacio");
	$filtro = str_replace('\"','"',$_REQUEST["filter"]);
	$filtros = json_decode($filtro, true);	
	
	switch ($accion) {

		case 'listar':
			$filtros = $_REQUEST["filter"];	
			$resultado = $objtabla->listar($_REQUEST['campo'], $_REQUEST['tabla']);
				//for($i=0; $i<count($resultado); $i++)
					//$resultado[$i]['resp'] = true;	
			
			//print_r($tot );
			$total = count($resultados);
			
		break;
		
		case 'refrescar':
		$filtros = $_REQUEST["filter"];	
		$resultado = $objtabla->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"]);
			
			//for($i=0; $i<count($resultado); $i++)
				//$resultado[$i]['resp'] = true;		
			$tot = $objtabla->contar();
			//print_r($tot );
			$total = $tot[0]['cuenta'];
		//	if(is_object($objDocumento->pdo->monitor) && $objDocumento->pdo->monitor->notify_select)
		//	$objDocumento->pdo->popNotify(); // Libera posicion reg_padre
			break;
		
		case 'insertar':	 		               //  caso guardar 
			$cond = $_REQUEST['columnas'];
			$cond = str_replace('\"','"',$cond);
			$registro = json_decode($cond, true);
			$registro = array_filter($registro, "vacio");
			
			/*if(isset($registro['co_rol']))
				$cate['co_rol']=strtoupper($registro['co_rol']);
			
			if(isset($registro['tx_rol']))
				$cate['tx_rol']=strtoupper($registro['tx_rol']);*/
/*			
			$filtros = $_REQUEST["filter"];		
			$resulta = $tablaInterfaz->insertar($cate);
			$resultado = $tablaInterfaz->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"]);
		
			for($i=0; $i<count($resultado); $i++)
				$resultado[$i]['resp'] =$resulta;
			
			$tot = $tablaInterfaz->contar();
			$total = $tot[0]['cuenta'];

		break;
		
		case 'actualizar':
			
			$datos = $_REQUEST['columnas'];
			$cond = $_REQUEST['condiciones']; 
			$datos = str_replace('\"','"',$datos);
			$cond = str_replace('\"','"',$cond);
			//echo "->".$cond;
			$registro = json_decode($datos, true);
			$condiciones = json_decode($cond, true);
			//print_r($registro);
			$registro = array_filter($registro, "vacio");
			$condiciones = array_filter($condiciones, "vacio");
			
			$filtros = $_REQUEST["filter"];		
			
			
			/*$condicion['co_rol']=$registro['co_rol'];
			$registro['tx_rol']=strtoupper($registro['tx_rol']);
			$resulta = $tablaInterfaz->actualizar($registro, $condiciones);*/
/*
			$resultados = $tablaInterfaz->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"]);
		
			for($i=0; $i<count($resultados); $i++)
				$resultado[$i]['resp'] =$resulta;
			
			$tot = $tablaInterfaz->contar();
				$total = $tot[0]['cuenta'];
			
		break;
		case 'eliminar': 
			$cond = $_REQUEST['condiciones'];
			$cond = str_replace('\"','"',$cond);
			$condiciones = json_decode($cond, true);
			$condiciones = array_filter($condiciones, "vacio");
                                        //  caso  eliminar
			$resultado = $tablaInterfaz->eliminar($condiciones);
			$filtros = $_REQUEST["filter"];	
			$resultado = $tablaInterfaz->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"]);
			$tot = $tablaInterfaz->contar();
			$total = $tot[0]['cuenta'];
		break;

	}	
	echo $resultados='{"total":'.(($total)? $total : 0).', "resultados":'.json_encode($resultados).'}';

?>
