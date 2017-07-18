<?php 	
	session_start();
	require_once 'EmpresaClase.php';
	$objEmpresa = new EmpresaClase();
	$accion = (isset($_POST['accion']) ? $_POST['accion'] : $_GET['accion']);
	global $filtros;
	
function vacio($var) {

						return ($var != '');

					 }
	$registro = array_filter($_REQUEST, "vacio");
	$filtros = str_replace('\"','"',$_REQUEST["filter"]);
	$_SESSION["filtros"]=$filtros; 
	
	switch ($accion) { // interruptor accion
		
	
		case 'refrescar':
			//echo 'entro2';
			//$filtros = $_REQUEST["filter"];	
			$resultado = $objEmpresa->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST['co_proceso']);
			$tot = $objEmpresa->contar();
			//print_r($tot );
			$total =  count ($resultado);	
		
		break;
		
		case 'insertar': //  caso guardar nuevo registro
		    //echo "insertar";
			$datosEmpresa=json_decode($registro['ResultadosEmp'],true);
			$registro = json_decode($condicion, true);
			//$condicion['co_empresa']=$_REQUEST['condicion'];
			//$empresa['co_proceso']=$_REQUEST['co_proceso'];
			//$registro = array_filter($registro, "vacio");
			//print_r($registro);
			//echo "000";
			//print_r($datosEmpresa); //imprime el arreglo
			
			 
			 $co_proceso= $_REQUEST['co_proceso'];
			$result = $objEmpresa->insertar($datosEmpresa,$co_proceso);
		
			$resultado = $objEmpresa->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST['co_proceso']);
			//$resultado=$this->convertArrayKeysToUtf88($resultado1);						
			
			//for($i=0; $i<count($resultado); $i++)
			//	$resultados[$i]['resp'] =$result;
			//	$tot = $objEmpresa->contar();
				//print_r($tot);
			//$total = $tot[0]['cuenta1'];
			
		break;
		
		
		case 'modificar': //  caso guardar nuevo registro
		    //echo "insertar";
			$datosEmpresa=json_decode($registro['ResultadosEmp'],true);
			$registro = json_decode($condicion, true);
			
			//$empresa['co_proceso']=$_REQUEST['co_proceso'];
			//$registro = array_filter($registro, "vacio");
			//print_r($registro);
			//echo "000";
			//print_r($datosEmpresa); //imprime el arreglo
			//$condicion['co_empresa']=$_REQUEST['condicion'];
			
			 //print_r($datosEmpresa);
		   $condicionEmpProc['id_empresa_proceso'] = $_REQUEST['id_empresa_proceso'];
		   $condicionEmpProc['co_proceso'] = $_REQUEST['co_proceso'];
		   $condicionEmp    ['co_empresa'] = $_REQUEST['co_empresa'];
			
			$result = $objEmpresa->actualizar($datosEmpresa,$condicionEmp,$condicionEmpProc);
		
			$resultado = $objEmpresa->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST['co_proceso']);
			//print_r($resultado);
			//$resultado=$this->convertArrayKeysToUtf88($resultado1);						
			
			//for($i=0; $i<count($resultado); $i++)
			//	$resultados[$i]['resp'] =$result;
			//	$tot = $objEmpresa->contar();
				//print_r($tot);
			//$total = $tot[0]['cuenta1'];
			
		break;
	
	case 'buscar_rif': 
			$resultado = $objEmpresa->buscar($_REQUEST['nu_riff']);
	   break;
		
	}	
			
			echo $resultado1='{"total":'.(($total)? $total : 0).', "ResultadosEmp":'.json_encode($resultado).'}';
			
?>
