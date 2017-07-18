<?php 	
	//session_start();
	require_once 'Proceso_AgendaClase.php';	
	require_once 'ProcesoClase.php';	
	$objProceso_Agenda = new ProcesoAgendaClase();
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
		   
		  	$cond = $_REQUEST['condicion'];
			$cond = str_replace('\"','"',$cond);
			//print_r($_REQUEST['condicion']);
			$resultado = $objProceso_Agenda->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST['condicion']);			
			
			$tot = $objProceso_Agenda->contar();
			//print_r($tot );
			$total = $tot[0]['cuenta'];
		//	if(is_object($objDocumento->pdo->monitor) && $objDocumento->pdo->monitor->notify_select)
		//	$objDocumento->pdo->popNotify(); // Libera posicion reg_padre
		break;
		case 'refrescarPorProceso':
		    $cond = $_REQUEST['condicion'];
			$cond = str_replace('\"','"',$cond);
			$resultado = $objProceso_Agenda->mostrarPorProceso($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST['condicion']);			
			$tot = $objProceso_Agenda->contar();
			$total = $tot[0]['cuenta'];
		break;
		case 'insertar':
			$cond = $_REQUEST['Resultados'];
			//print_r($_REQUEST['Resultados']);
			$cond = str_replace('\"','"',$cond);
			$proceso_agenda['co_agenda']=$_REQUEST['co_agenda'];
			$registro = json_decode($cond, true);
			$registro = array_filter($registro, "vacio");
			$resultado=$objProceso_Agenda->_query("SELECT co_proceso,tx_descripcion 
										FROM c001t_proceso 
										WHERE nu_expediente='".$registro['nu_expediente']."'");		
			//print_r($resultado);
			$proceso_agenda['co_proceso']=$resultado[0]['co_proceso'];	
			//$proceso_agenda['co_proceso']=$resultado['co_proceso'];	
			if(isset($registro['nu_orden']))
				$proceso_agenda['nu_orden']=$registro['nu_orden'];
			$filtros = $_REQUEST["filter"];		

			$resulta = $objProceso_Agenda->insertar($proceso_agenda);
			$resultado = $objProceso_Agenda->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"], 
			$_REQUEST['co_agenda'],$_REQUEST['tx_indicador']);
		
			for($i=0; $i<count($resultado); $i++)
				$resultado[$i]['resp'] =$resulta;
			
			$tot = $objProceso_Agenda->contar();
				$total = $tot[0]['cuenta'];

		break;
		case 'modificar':	 		               //  caso guardar 

			$cond = $_REQUEST['Resultados'];
			//print_r($_REQUEST['Resultados']);
			$cond = str_replace('\"','"',$cond);
			$registro = json_decode($cond, true);
			$registro = array_filter($registro, "vacio");
			if(isset($registro['nu_expediente'])){//Si se está actualizando el nu_expediente
				$resultado=$objProceso_Agenda->_query("SELECT co_proceso,tx_descripcion 
											FROM c001t_proceso 
											WHERE nu_expediente='".$registro['nu_expediente']."'");
				//if(isset($condicion['co_proceso']))
				$proceso_agenda['co_proceso']=$resultado[0]['co_proceso'];
			}
			
			$condicion=array();
			$condicion['co_proceso']=$_REQUEST['co_proceso'];
			$condicion['co_agenda']=$_REQUEST['co_agenda'];
			//print_r($registro);
			
			if(isset($condicion['co_proceso']))
				$proceso_agenda['co_proceso']=$resultado[0]['co_proceso'];			
			if(isset($registro['nu_expediente']))
				$proceso_agenda['nu_expediente']=$registro['nu_expediente'];			
			if(isset($registro['nu_orden']))
				$proceso_agenda['nu_orden']=$registro['nu_orden'];			
			if(isset($registro['tx_descripcion']))
			    $proceso_agenda['tx_descripcion']=$registro['tx_descripcion'];
			
			$filtros = $_REQUEST["filter"];		
			$resulta = $objProceso_Agenda->actualizar($proceso_agenda, $condicion);
			
			$resultado = $objProceso_Agenda->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],
			$_REQUEST['co_agenda']);
		
			for($i=0; $i<count($resultado); $i++)
				$resultado[$i]['resp'] =$resulta;
			
			$tot = $objProceso_Agenda->contar();
				$total = $tot[0]['cuenta'];
         break;
		case 'modificarProcesoAgenda':	 	           //  caso guardar 
			$cond = $_REQUEST['Resultados'];
			$cond = str_replace('\"','"',$cond);
			$registro = json_decode($cond, true);
			$registro = array_filter($registro, "vacio");
			$condicion=array();
			$condicion['co_proceso']=$_REQUEST['co_proceso'];
			$condicion['co_agenda']=$_REQUEST['co_agenda'];		
			if(isset($registro['nu_acta']))
			    $proceso_agenda['nu_acta']=$registro['nu_acta'];
			if(isset($registro['co_tipo_agenda']))
			    $proceso_agenda['co_tipo_agenda']=$registro['co_tipo_agenda'];
			if(isset($registro['co_acta']))
			    $proceso_agenda['co_acta']=$registro['co_acta'];
			if(isset($registro['tx_recomendacion']))
			    $proceso_agenda['tx_recomendacion']=$registro['tx_recomendacion'];
			if(isset($registro['co_resumen_recomendado']))
			    $proceso_agenda['co_resumen_recomendado']=$registro['co_resumen_recomendado'];
			//print_r($proceso_agenda);
			$filtros = $_REQUEST["filter"];		
			$resulta = $objProceso_Agenda->actualizar($proceso_agenda, $condicion);
			
			$resultado = $objProceso_Agenda->mostrarPorProceso($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST['co_proceso']);
		
			for($i=0; $i<count($resultado); $i++)
				$resultado[$i]['resp'] =$resulta;
			
			$tot = $objProceso_Agenda->contar();
				$total = $tot[0]['cuenta'];
         break;
		case 'eliminar':                                         //  caso  eliminar
			$condiciones['co_proceso']=$_REQUEST['co_proceso'];
			$condiciones['co_agenda']=$_REQUEST['co_agenda'];
			$resultado = $objProceso_Agenda->eliminar($condiciones);
			$filtros = $_REQUEST["filter"];	
			
			$resultado = $objProceso_Agenda->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],
			$_REQUEST['co_agenda']);
			
			for($i=0; $i<count($resultado); $i++)
				$resultado[$i]['resp'] =$resultado;
			
			$tot = $objProceso_Agenda->contar();
				$total = $tot[0]['cuenta'];
		
		break;
		
	  
	   case 'BuscarDescripcion':
			
			$resultado=$objProceso->buscar($_REQUEST['nu_expediente']);
			$resultado=array("tx_descripcion"=>$_REQUEST['co_proceso'],"tx_descripcion"=>$resultado[0]['tx_descripcion']);
			$total=0;
		break;
		case 'refrescar':
		   
		  	$cond = $_REQUEST['condicion'];
			$cond = str_replace('\"','"',$cond);
			//print_r($_REQUEST['condicion']);
			$resultado = $objProceso_Agenda->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST['condicion']);			
			
			$tot = $objProceso_Agenda->contar();
			//print_r($tot );
			$total = $tot[0]['cuenta'];
		//	if(is_object($objDocumento->pdo->monitor) && $objDocumento->pdo->monitor->notify_select)
		//	$objDocumento->pdo->popNotify(); // Libera posicion reg_padre
		break;
	}	
	echo $resultado2='{"total":'.(($total)? $total : 0).', "Resultados":'.json_encode($resultado).'}';
?>
