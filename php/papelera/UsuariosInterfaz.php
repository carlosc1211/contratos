<?php 	session_start();
	require_once 'UsuariosClass.php';
	$objSistema = new UsuariosClass();
	$accion = (isset($_POST['accion']) ? $_POST['accion'] : $_GET['accion']);
	
function vacio($var) {

    return ($var != '');

}

	$registro = array_filter($_REQUEST, "vacio");
	$filtro = str_replace('\"','"',$_REQUEST["filter"]);
	$filtros = json_decode($filtro, true);	


	switch ($accion) {

		/*
		case 'buscar':

			$cond = $_REQUEST['condiciones'];
			$cond = str_replace('\"','"',$cond);
			$cond	= str_replace('\"','"',$cond);
			$condiciones = json_decode($cond, true);
			$condiciones = array_filter($condiciones, "vacio");
			$resultado = $objSistema->buscar($condiciones['ID']);
			
			break;
*/
		case 'refrescar':

			$filtros = $_REQUEST["filter"];	
			$resultado = $objSistema->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"]);
			
			//for($i=0; $i<count($resultado); $i++)
				//$resultado[$i]['resp'] = true;		
			$tot = $objSistema->contar();
			//print_r($tot );
			$total = $tot[0]['cuenta'];
		//	if(is_object($objDocumento->pdo->monitor) && $objDocumento->pdo->monitor->notify_select)
		//	$objDocumento->pdo->popNotify(); // Libera posicion reg_padre

			break;
		/*
		case 'insertar':	 		
		

			$cond = $_REQUEST['registro'];
			$cond = str_replace('\"','"',$cond);
			
			
			$registro = json_decode($cond, true);
		
			$registro = array_filter($registro, "vacio");
			$filtros = $_REQUEST["filter"];		
			
			$resulta = $objSistema->insertar($registro);	
			
			$resultado = $objSistema->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"]);
		
			for($i=0; $i<count($resultado); $i++)
				$resultado[$i]['resp'] =$resulta;
			
			$tot = $objSistema->contarDocumento();
				$total = $tot[0]['cuenta'];

			break;*/

	}

		echo $resultado2='{"total":'.(($total)? $total : 0).', "Resultados":'.json_encode($resultado).'}';

?>
