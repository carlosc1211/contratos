<?php
	//session_start();
	require_once 'ModificacionesClases.php';	
	$objModificaciones = new ModificacionesClases();
	$accion = (isset($_POST['accion']) ? $_POST['accion'] : $_GET['accion']);
	
function vacio($var) {

    return ($var != '');

}

	$registro = array_filter($_REQUEST, "vacio");
	//print_r($_REQUEST["filter"]);
	$filtros = str_replace('\"','"',$_REQUEST["filter"]);
	$_SESSION["filtros"]=$filtros ;
	//$filtros = json_decode($filtro, true);
	//print_r($filtros);	
	switch ($accion) {
		
		case 'listar':
			$filtros = $_REQUEST["filter"];	
			$resultado = $objModificaciones->listar($_REQUEST['campo'], $_REQUEST['tabla']);
				//for($i=0; $i<count($resultado); $i++)
					//$resultado[$i]['resp'] = true;	
			
			//print_r($tot );
			$total = count($resultado);
			
		break;
		
	/*case 'refrescar':

			//$filtros = $_REQUEST["filter"];	
			$resultado = $objModificaciones->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST['co_contrato']);
			
			//for($i=0; $i<count($resultado); $i++)
				//$resultado[$i]['resp'] = true;		
			
			//print_r($resultado );
			$tot = $objModificaciones->contar();
			$total = $tot[0]['cuenta'];
		//	if(is_object($objDocumento->pdo->monitor) && $objDocumento->pdo->monitor->notify_select)
		//	$objDocumento->pdo->popNotify(); // Libera posicion reg_padre
			break;*/

		
		case 'refrescar':
			
			$filtros = $_REQUEST["filter"];	
			$resultado = $objModificaciones->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST['co_contrato'],$_REQUEST['tipo_variacion']);
				//for($i=0; $i<count($resultado); $i++)
					//$resultado[$i]['resp'] = true;	
			//$tot = $objModificaciones->contar();
			//print_r($resultado);
			//print_r($tot );
			//$total = $tot[0]['cuenta'];
			//	if(is_object($objDocumento->pdo->monitor) && $objDocumento->pdo->monitor->notify_select)
			//	$objDocumento->pdo->popNotify(); // Libera posicion reg_padre
		
		break;
		
		case 'insertar': //  caso guardar nuevo registro
		    //echo "insertar";
			$cond = $_REQUEST['Resultados'];
			$cond = str_replace('\"','"',$cond);
			//$condicion['co_contrato']=$_REQUEST['co_contrato'];
			$registro = json_decode($cond, true);
			$registro = array_filter($registro, "vacio");
			//echo $resulta;
			
			if(isset($_REQUEST['co_contrato']))
				$modificacion['co_contrato']=$_REQUEST['co_contrato'];
			
			if(isset($registro['co_tipo_modificacion']))
				$modificacion['co_tipo_modificacion']=$registro['co_tipo_modificacion'];
			$r=$objModificaciones->_query("SELECT MAX(nu_modificacion ) AS nu_modificacion 
										FROM c007t_modificaciones 
										WHERE co_contrato=$modificacion[co_contrato] AND co_tipo_modificacion=$modificacion[co_tipo_modificacion] 
										GROUP BY co_contrato, co_tipo_modificacion");
			$modificacion['nu_modificacion']=$r[0]['nu_modificacion']+1;
			/*echo "SELECT MAX(nu_modificacion ) AS nu_modificacion 
										FROM c007t_modificaciones 
										WHERE co_contrato=$modificacion[co_contrato] AND co_tipo_modificacion=$modificacion[co_tipo_modificacion] 
										GROUP BY co_contrato, co_tipo_modificacion";*/
			//print_r($r);
			
			if(isset($registro['tx_descripcion_mod']))
				$modificacion['tx_descripcion_mod']=$registro['tx_descripcion_mod'];
			
			if(isset($registro['nu_valor']))
				$modificacion['nu_valor']=$registro['nu_valor'];
			
			if(isset($registro['fe_valor']))
			    $modificacion['fe_valor']=$registro['fe_valor'];
			
			if(isset($registro['fe_registro']))
			    $modificacion['fe_registro']=$registro['fe_registro'];
			
			if(isset($registro['co_moneda']))
			    $modificacion['co_moneda']=$registro['co_moneda'];
			
			$filtros = $_REQUEST["filter"];		
			$resulta = $objModificaciones->insertar($modificacion);
			$resultado = $objModificaciones->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST['co_contrato'],$_REQUEST['tipo_variacion']);
			//$resultado=$this->convertArrayKeysToUtf88($resultado1);						
			
			/*for($i=0; $i<count($resultado); $i++)
				$resultados[$i]['resp'] =$resulta;
				$tot = $objModificaciones->contar();
			$total = $tot[0]['cuenta'];*/
			
		break;
				
		case 'modificar': //  caso guardar modificaciones de un regristro
			
			
				
			$cond = $_REQUEST['Resultados'];
			$cond = str_replace('\"','"',$cond);
			$registro = json_decode($cond, true);
			//print_r($registro);
			$registro = array_filter($registro, "vacio");
			//print_r($registro);	
			if(isset($_REQUEST['co_contrato']))
				$condiciones['co_contrato']=$_REQUEST['co_contrato'];
			
			if(isset($_REQUEST['co_tipo_modificacion']))
				$condiciones['co_tipo_modificacion']=$_REQUEST['co_tipo_modificacion'];
								
			if(isset($_REQUEST['nu_modificacion']))
				$condiciones['nu_modificacion']=$_REQUEST['nu_modificacion'];
			
			if(isset($registro['co_tipo_modificacion']))
				$modificacion['co_tipo_modificacion']=$registro['co_tipo_modificacion'];
				
			if(isset($registro['tx_descripcion_mod']))
				$modificacion['tx_descripcion_mod']=$registro['tx_descripcion_mod'];
			
			if(isset($registro['nu_valor']))
				$modificacion['nu_valor']=$registro['nu_valor'];
			
			if(isset($registro['fe_valor']))
			    $modificacion['fe_valor']=$registro['fe_valor'];
			
			if(isset($registro['fe_registro']))
			    $modificacion['fe_registro']=$registro['fe_registro'];
			
			if(isset($registro['co_moneda']))
			    $modificacion['co_moneda']=$registro['co_moneda'];
			    
			$resulta= $objModificaciones->actualizar($modificacion, $condiciones);
			$resultado = $objModificaciones->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST['co_contrato'],$_REQUEST['tipo_variacion']);
		
						
		break;
		
		case 'eliminar': //  caso  eliminar
	
			//echo "hola ";
			$condiciones['co_tipo_modificacion']=$_REQUEST['co_tipo_modificacion'];
			//$condiciones['nu_modificacion']=$_REQUEST['nu_modificacion'];
			$resultado = $objModificaciones->eliminar($condiciones);
			
			$resultado = $objModificaciones->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST['co_contrato'],$_REQUEST['tipo_variacion']);
			$tot = $objModificaciones->contar();
			$total = $tot[0]['cuenta'];
		
		break;


	}	
			
			echo $resultado2='{"total":'.(($total)? $total : 0).', "Resultados":'.json_encode($resultado).'}';
?>
