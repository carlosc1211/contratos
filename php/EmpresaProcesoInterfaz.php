<?php 	
	//session_start();
	//echo 'entro';
	
	require_once 'EmpresaProcesoClase.php';
	$objEmpresaProceso = new EmpresaProcesoClase();
	$accion = (isset($_POST['accion']) ? $_POST['accion'] : $_GET['accion']);
	
function vacio($var) {
	return ($var != '');
}
		//print_r($_REQUEST);
$registro = array_filter($_REQUEST, "vacio");
$filtro = str_replace('\"','"',$_REQUEST["filter"]);
$filtros = json_decode($filtro, true);	

	switch ($accion) { // interruptor accion
		case 'refrescar':
		//echo 'entro2';
		//$filtros = $_REQUEST["filter"];	
		$resultado = $objEmpresaProceso->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"]);
		$tot = $objEmpresaProceso->contar();
		//print_r($tot );
		$total = $tot[0]['cuenta'];
	break;
		case 'insertar': //  caso guardar nuevo registro
	    //echo "insertar";
		$datosEmpresa=json_decode($registro['ResultadosEmp'],true);
		$registro = json_decode($condicion, true);
		$condicion['co_empresa']=$_REQUEST['condicion'];
		$empresa['co_proceso']=$_REQUEST['co_proceso'];
		$registro = array_filter($registro, "vacio");
		//print_r($datosEmpresa); //imprime el arreglo
		$result = $objEmpresaProceso->insertar($datosEmpresa);
		//echo $result;
	
		$resultado = $objEmpresaProceso->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"]);
		//$resultado=$this->convertArrayKeysToUtf88($resultado1);						
			for($i=0; $i<count($resultado); $i++)
			$resultados[$i]['resp'] =$result;
			$tot = $objEmpresaProceso->contar();
			$total = $tot[0]['cuenta'];
	break;
}	
	echo $resultado1='{"total":'.(($total)? $total : 0).', "ResultadosEmp":'.json_encode($resultado).'}';
?>

