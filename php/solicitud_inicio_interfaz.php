<?php 	
	session_start();
	require_once 'Solicitud_Inicio_clase.php';	
	
	$objDocumentos= new solicitudInicioClase();
	$accion = (isset($_POST['accion']) ? $_POST['accion'] : $_GET['accion']);
	
	
	
function vacio($var) {

 
    return ($var != '');

					 }
	$registro = array_filter($_REQUEST, "vacio");
	$filtro = str_replace('\"','"',$_REQUEST["filter"]);
	$filtros = json_decode($filtro, true);	
	
	switch ($accion) {
			case 'refrescar':

			$filtros = $_REQUEST["filter"];	
			$resultado = $objDocumentos->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"], $_REQUEST['co_proyecto']);
			
			//for($i=0; $i<count($resultado); $i++)
				//$resultado[$i]['resp'] = true;		
			$tot = $objDocumentos->contar();
			//print_r($tot );
			$total = $tot[0]['cuenta'];
		//	if(is_object($objDocumento->pdo->monitor) && $objDocumento->pdo->monitor->notify_select)
		//	$objDocumento->pdo->popNotify(); // Libera posicion reg_padre
			break;
			
			case 'buscar':

			$resultado = $objDocumentos->buscar($condiciones['ID']);
			
			break;
					//  caso guardar 
			case 'insertar':	
					//echo ;
					$cond = $_REQUEST['Resultados'];
					$cond = str_replace('\"','"',$cond);
					$condiciones=array('co_proyecto'=>$_REQUEST['co_proyecto'] );
					
					
					$registro = json_decode($cond, true);
					//$registro = array_filter($registro, "vacio");
					$documento['co_solicitud']=$_REQUEST['co_solicitud'];
					$documento['co_proyecto']=$_REQUEST['co_proyecto'];
								
					$filtros = $_REQUEST["filter"];		
					
					$resulta = $objDocumentos->insertar($documento);
					$resultado = $objDocumentos->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"]);
		
					for($i=0; $i<count($resultado); $i++)
					$resultado[$i]['resp'] =$resulta;
			
					$tot = $objDocumentos->contar();
					$total = $tot[0]['cuenta'];

		break;
		
		case 'modificar':	 		               //  caso guardar 
		

			$cond = $_REQUEST['Resultados'];
			$cond = str_replace('\"','"',$cond);
			$condicion['co_proyecto']=$_REQUEST['condicion'];
			
			$registro = json_decode($cond, true);
		
			$registro = array_filter($registro, "vacio");
			if(isset($registro['co_solicitud']))
				$documento['co_solicitud']=$registro['co_solicitud'];
			if(isset($registro['co_proyecto']))
				$documento['co_proyecto']=$registro['co_proyecto'];			
												
			$filtros = $_REQUEST["filter"];		
			
			if($_REQUEST['xaction']=='create'){//Si estamos creando un Usuario
			   //$resulta = $objFormulario->insertar();
			}
			else{//Si es un update
				if(isset($registro['co_proyecto']))
				$condicion['co_proyecto']=$registro['co_proyecto'];
				$resulta = $objDocumentos->actualizar($documento, $condicion);
			}
			
			
			$resultado = $objDocumentos->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"]);
		
			for($i=0; $i<count($resultado); $i++)
				$resultado[$i]['resp'] =$resulta;
			
			$tot = $objDocumentos->contar();
				$total = $tot[0]['cuenta'];

		break;
		case 'eliminar':  //  caso  eliminar
			$condiciones['co_proyecto']=$_REQUEST['co_proyecto'];
			$resultado = $objDocumentos->eliminar($condiciones);
			$filtros = $_REQUEST["filter"];	
			$resultado = $objDocumentos->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"]);
			$tot = $objDocumentos->contar();
			$total = $tot[0]['cuenta'];
		break;

	}	
	if($accion!='login')
		echo $resultado2='{"total":'.(($total)?$total: 0).',"Resultados":'.json_encode($resultado).'}';

?>
		
		

