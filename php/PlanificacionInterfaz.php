<?php 	
	session_start();
	require_once 'PlanificacionClase.php';	
	$objPlanificacion = new PlanificacionClase();
	
	$accion = (isset($_POST['accion']) ? $_POST['accion'] : $_GET['accion']);
	
function vacio($var) {

						return ($var != '');

					 }
		//print_r($_REQUEST);

	$registro = array_filter($_REQUEST, "vacio");
	$filtro = str_replace('\"','"',$_REQUEST["filter"]);
	$filtros = json_decode($filtro, true);	
	
	switch ($accion) { //*******************************INTERRUPTOR ACCION***************************************
		
		case 'listar':
			$filtros = $_REQUEST["filter"];	
			$resultado = $objPlanificacion->listar($_REQUEST['campo'], $_REQUEST['tabla']);
				//for($i=0; $i<count($resultado); $i++)
					//$resultado[$i]['resp'] = true;	
			
			//print_r($tot );
			$total = count($resultado);
			
		break;
		
		case 'buscar':

			$resultado = $objPlanificacion->buscar($condiciones['co_proyecto']);
			
		break;
		
		case 'refrescar':
			
			$filtros = $_REQUEST["filter"];	
			$resultado = $objPlanificacion->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"]);
				//for($i=0; $i<count($resultado); $i++)
					//$resultado[$i]['resp'] = true;	
			$tot = $objPlanificacion->contar();
			//print_r($tot );
			$total = $tot[0]['cuenta'];
			//	if(is_object($objDocumento->pdo->monitor) && $objDocumento->pdo->monitor->notify_select)
			//	$objDocumento->pdo->popNotify(); // Libera posicion reg_padre
		
		break;
		
		 //*******************************GUARDAR NUEVO REGISTRO***************************
		case 'insertar':
		    //echo "insertar";
			$datosPlanificacion=json_decode($registro['Resultados'],true);
			$condicion = str_replace('\"','"',$condicion);	
			$registro = json_decode($condicion, true);
			$datosPlanificacion['co_ubicacion_usuario']=$_SESSION['co_ubicacion'];
			$datosPlanificacion['co_organizacion_usuario']=$_SESSION['co_organizacion'];
			//$registro = array_filter($registro, "vacio");
			//print_r($registro);
			//print_r($datosPlanificacion); //imprime el arreglo
			$resulta = $objPlanificacion->insertarLastId($datosPlanificacion);
			//print_r($resulta);
			//echo '|'.$datosPlanificacion['fe_especificaciones'].'|';
			if($datosPlanificacion['fe_especificaciones']!='null'){
				
				require_once 'ContratacionClase.php';	
				$objContratacion = new ContratacionClase();
				//$proceso['fe_especificaciones']=$registro['fe_especificaciones'];
				$proceso['nu_plazo_ejec']=$datosPlanificacion['nu_plazo_ejec'];
				$proceso['co_tipo_contrato']=$datosPlanificacion['co_tipo_contrato'];
				$proceso['co_modalidad']=$datosPlanificacion['co_modalidad'];
				$proceso['co_naturaleza']=$datosPlanificacion['co_naturaleza'];
				$proceso['co_regimen_lab']=$datosPlanificacion['co_regimen_lab'];
				$proceso['co_mecanismo_verif']=$datosPlanificacion['co_mecanismo_verif'];
				$proceso['co_estrategia_adj']=$datosPlanificacion['co_estrategia_adj'];
				$proceso['co_rango']=$datosPlanificacion['co_rango'];
				//$proceso['']=$registro[''];
				$proceso['co_proyecto']=$resulta;
				$res = $objContratacion->insertar($proceso);
				//$condicion['co_proyecto']=$registro['co_proyecto'];
				//$resulta = $objContratacion->insertar($registro, $condiciones);
			}
			
			$condicion['co_proyecto']=$_REQUEST['condicion'];
			
			$resultado = $objPlanificacion->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"]);
			//$resultado=$this->convertArrayKeysToUtf88($resultado1);						
			
			for($i=0; $i<count($resultado); $i++)
				$resultados[$i]['resp'] =$resulta;
				$tot = $objPlanificacion->contar();
			$total = $tot[0]['cuenta'];
                        $co_proyecto=$resulta;
		break;
		
		//**********************CASO GUARDAR MODIFICACIONES DE UN REGISTRO*****************************************************
		case 'modificar': 
			
			
			$condicion = $_REQUEST['Resultados'];
			$condiciones = str_replace('\"','"',$condiciones);	
			$condiciones['co_proyecto']=$_REQUEST['co_proyecto'];
			$registro = json_decode($condicion, true);
			$registro = array_filter($registro, "vacio");	
			//print_r($registro);			
			$resulta= $objPlanificacion->actualizar($registro, $condiciones);
						
			if($registro['fe_especificaciones']== 0000-00-00 )
			{
				//~ 
		    }
			else{//Si es un update
			//echo "1";
			 require_once 'ContratacionClase.php';	
			
			$objContratacion = new ContratacionClase();
			//echo "3";
			if(isset($_REQUEST['co_proyecto'])){
				//echo "2";
				//$proceso['fe_especificaciones']=$registro['fe_especificaciones'];
				$proceso['nu_plazo_ejec']=$registro['nu_plazo_ejec'];
				$proceso['co_tipo_contrato']=$registro['co_tipo_contrato'];
				$proceso['co_modalidad']=$registro['co_modalidad'];
				$proceso['co_naturaleza']=$registro['co_naturaleza'];
				$proceso['co_regimen_lab']=$registro['co_regimen_lab'];
				$proceso['co_mecanismo_verif']=$registro['co_mecanismo_verif'];
				$proceso['co_estrategia_adj']=$registro['co_estrategia_adj'];
				$proceso['co_rango']=$registro['co_rango'];
				//$proceso['']=$registro[''];
				$proceso['co_proyecto']=$_REQUEST['co_proyecto'];
				$res = $objContratacion->insertar($proceso);
				//$condicion['co_proyecto']=$registro['co_proyecto'];
				//$resulta = $objContratacion->insertar($registro, $condiciones);
			} 
				 	
			 }
			//$filtros = $_REQUEST["filter"];
			$resultado= $objPlanificacion->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"]);
			
			$tot = $objPlanificacion->contar();
			$total = $tot[0]['cuenta'];
						
		break;
		
		//************************************CASO ELIMINAR**************************************************
		case 'eliminar': 
	
			$condiciones['co_proyecto']=$_REQUEST['co_proyecto'];
			$resultado = $objPlanificacion->eliminar($condiciones);
			
			$resultado = $objPlanificacion->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"]);
			
			$tot = $objPlanificacion->contar();
			$total = $tot[0]['cuenta'];
		
		break;


	}	
			
			echo $resultado2='{"total":'.(($total)? $total : 0).',"co_proyecto":'.(($co_proyecto)? $co_proyecto : 0).', "Resultados":'.json_encode($resultado).'}';
?>
