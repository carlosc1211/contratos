<?php 	
	//session_start();
	require_once 'ContratacionClase.php';	
	$objContratacion = new ContratacionClase();
	
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
			$resultado = $objContratacion->listar($_REQUEST['campo'], $_REQUEST['tabla']);
				//for($i=0; $i<count($resultado); $i++)
					//$resultado[$i]['resp'] = true;	
			
			//print_r($tot );
			$total = count($resultado);
			
		break;
		

		
		case 'refrescar':
			
			$filtros = $_REQUEST["filter"];	
			$resultado = $objContratacion->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"]);
				//for($i=0; $i<count($resultado); $i++)
					//$resultado[$i]['resp'] = true;	
			$tot = $objContratacion->contar();
			//print_r($resultado);
			//print_r($tot );
			$total = $tot[0]['cuenta'];
			//	if(is_object($objDocumento->pdo->monitor) && $objDocumento->pdo->monitor->notify_select)
			//	$objDocumento->pdo->popNotify(); // Libera posicion reg_padre
		
		break;
		
		case 'insertar': //  caso guardar nuevo registro
		    //echo "insertar";
			$datosContratacion=json_decode($registro['ResultadosCon'],true);
			$registro = json_decode($condicion, true);
			//$registro = array_filter($registro, "vacio");
			//print_r($datosContratacion); imprime el arreglo
			$resulta = $objContratacion->insertar($datosContratacion);
			//echo $resulta;
			
			$condicion['co_proceso']=$_REQUEST['condicion'];
			
			$resultado = $objContratacion->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"]);
			//$resultado=$this->convertArrayKeysToUtf88($resultado1);						
			
			for($i=0; $i<count($resultado); $i++)
				$resultados[$i]['resp'] =$resulta;
				$tot = $objContratacion->contar();
			$total = $tot[0]['cuenta'];
			
		break;
		
		case 'modificar': //  caso guardar modificaciones de un regristro
			
			$var_1 = $_REQUEST['ResultadosCon'];
			$var_1 = str_replace('\"','"',$var_1);	
			$condiciones['co_proceso']=$_REQUEST['co_proceso'];
			$var_2 = json_decode($var_1, true);
			$var_2 = array_filter($var_2, "vacio");	
			//print_r($var_2);
			$resulta= $objContratacion->actualizar($var_2, $condiciones);
			//echo $var_1;
			//echo "actualizar";
			//$filtros = $_REQUEST["filter"];
			$resultado= $objContratacion->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"]);
			//echo "actualizar2";
			$tot = $objContratacion->contar();
			$total = $tot[0]['cuenta'];
						
		break;
		
		case 'eliminar': //  caso  eliminar
	
			//echo "hola ";
			$condiciones['co_proceso']=$_REQUEST['co_proceso'];
			$resultado = $objContratacion->eliminar($condiciones);
			
			$resultado = $objContratacion->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"]);
			
			$tot = $objContratacion->contar();
			$total = $tot[0]['cuenta'];
		
		break;


	}	
			
			echo $resultado2='{"total":'.(($total)? $total : 0).', "ResultadosCon":'.json_encode($resultado).'}';
?>
