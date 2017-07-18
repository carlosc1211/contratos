<?php 	
	//session_start();
	require_once 'ProcesoClase.php';	
	$objProceso = new ProcesoClase();
	$accion = (isset($_POST['accion']) ? $_POST['accion'] : $_GET['accion']);
	
function vacio($var) {

    return ($var != '');

}
	$registro = array_filter($_REQUEST, "vacio");
	$filtro = str_replace('\"','"',$_REQUEST["filter"]);
	$filtros = json_decode($filtro, true);	
	switch ($accion) {                                       // interruptor accion
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
			$resultado = $objProceso->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST['tx_indicador']);
			
			//for($i=0; $i<count($resultado); $i++)
				//$resultado[$i]['resp'] = true;		
			$tot = $objProceso->contar();
			//print_r($tot );
			$total = $tot[0]['cuenta'];
		//	if(is_object($objDocumento->pdo->monitor) && $objDocumento->pdo->monitor->notify_select)
		//	$objDocumento->pdo->popNotify(); // Libera posicion reg_padre
		break;
		case 'insertar':
			$cond = $_REQUEST['columnas'];
			$cond = str_replace('\"','"',$cond);			
			$registros = json_decode($cond, true);
			$registros = array_filter($registros, "vacio");
			$objProceso->insertar($registros);
			$resultado = $objProceso->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"]);
			$tot = $objProceso->contar();
			$total = $tot[0]['cuenta'];
		break;
		case 'modificar':	 		               //  caso guardar 
			$cond = $_REQUEST['columnas'];
			$cond = str_replace('\"','"',$cond);			
			$registros = json_decode($cond, true);
			$registros = array_filter($registros, "vacio");
			$condicion['co_proceso']=$_REQUEST['co_proceso'];
			$objProceso->actualizar($registros,$condicion);
			$resultado = $objProceso->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"]);
			/*
			$cond = $_REQUEST['Resultados'];
			$cond = str_replace('\"','"',$cond);
			
			
			$registro = json_decode($cond, true);
		
			$registro = array_filter($registro, "vacio");
			if(isset($registro['nu_agenda']))
				$agenda['nu_agenda']=$registro['nu_agenda'];
			if(isset($registro['co_comision']))
				$agenda['co_comision']=$registro['co_comision'];
			if(isset($registro['co_tipo_reunion']))
			    $agenda['co_tipo_reunion']=$registro['co_tipo_reunion'];
			if(isset($registro['co_trimestre']))
			    $agenda['co_trimestre']=$registro['co_trimestre'];
			if(isset($registro['fe_agenda']))
			    $agenda['fe_agenda']='2000-01-01';//"'+NOW()+'";//$registro['fe_agenda'];
			$filtros = $_REQUEST["filter"];		
			//print_r($agenda);
			if($_REQUEST['xaction']=='create'){//Si estamos creando una agenda
			   $resulta = $objAgenda->insertar($agenda);
			}
			else{//Si es un update
				if(isset($registro['co_agenda']))
				$condicion['co_agenda']=$registro['co_agenda'];
				$resulta = $objAgenda->actualizar($agenda, $condicion);
			}
			
			
			$resultado = $objAgenda->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"]);
		
			for($i=0; $i<count($resultado); $i++)
				$resultado[$i]['resp'] =$resulta;
			
			$tot = $objAgenda->contar();
				$total = $tot[0]['cuenta'];*/

		break;
		case 'eliminar':                                         //  caso  eliminar
			$condiciones['co_proceso']=$_REQUEST['co_proceso'];
			$resultado = $objProceso->eliminar($condiciones);
			$filtros = $_REQUEST["filter"];	
			$resultado = $objProceso->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"]);
			$tot = $objProceso->contar();
			$total = $tot[0]['cuenta'];
		break;

	}	
	echo $resultado2='{"total":'.(($total)? $total : 0).', "Resultados":'.json_encode($resultado).'}';
?>
