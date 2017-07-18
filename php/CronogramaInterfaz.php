<?php
	require_once 'CronogramaClase.php';
	$objCronograma = new CronogramaClase();
	$accion = (isset($_POST['accion']) ? $_POST['accion'] : $_GET['accion']);
	function vacio($var) {
		return ($var != '');
	}
	$registro = array_filter($_REQUEST, "vacio");
	$filtro = str_replace('\"','"',$_REQUEST["filter"]);
	$filtros = json_decode($filtro, true);
	switch ($accion) {
		case 'refrescar':
			$resultado = $objCronograma->mostrar($_REQUEST['condicion'],$_REQUEST['fe_recomendacion']);
			echo $resultado2='{"total":'.(($total)? $total : 0).', "Resultados":'.json_encode($resultado).'}';
		break;
		case 'guardar':
			$condiciones['co_proceso']=$_REQUEST['condicion'];
			$resultado = $objCronograma->eliminar($condiciones);
			$datos=json_decode($registro['datos'],true);
			for($i=0; $i<count($datos); $i++){
				if(isset($datos[$i]['co_proceso']))
					$guardar['co_proceso']=$datos[$i]['co_proceso'];
				if(isset($datos[$i]['co_modalidad_actividad']))
					$guardar['co_modalidad_actividad']=$datos[$i]['co_modalidad_actividad'];
				if(isset($datos[$i]['fe_programada']))
					$guardar['fe_programada']=$datos[$i]['fe_programada'];	
				if(isset($datos[$i]['fe_planificada']))
					$guardar['fe_planificada']=$datos[$i]['fe_planificada'];	
				if(isset($datos[$i]['fe_real']))
					$guardar['fe_real']=$datos[$i]['fe_real'];
				
				$resultado = $objCronograma->insertar($guardar);
			}
			$resultado = $objCronograma->mostrar($_REQUEST['condicion'],$_REQUEST['fe_recomendacion']);
			echo $resultado2='{"total":'.(($total)? $total : 0).', "Resultados":'.json_encode($resultado).'}';
		break;
		
	}
?>
