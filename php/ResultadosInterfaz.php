<?php 	
	session_start();
	require_once 'ResultadosClase.php';	
	$objContrato = new ResultadosClase();
	
	$accion = (isset($_POST['accion']) ? $_POST['accion'] : $_GET['accion']);
	
function vacio($var) {

						return ($var != '');

					 }
		//print_r($_REQUEST);

	$registro = array_filter($_REQUEST, "vacio");
	//print_r($_REQUEST["filter"]);
	$filtros = str_replace('\"','"',$_REQUEST["filter"]);
	//$_SESSION["filtros"]=$filtros ;
	
	switch ($accion) { // interruptor accion
		
		
		case 'listar':
			$filtros = $_REQUEST["filter"];	
			$resultado = $objContrato->listar($_REQUEST['campo'], $_REQUEST['tabla']);
				//for($i=0; $i<count($resultado); $i++)
					//$resultado[$i]['resp'] = true;	
			
			//print_r($tot );
			$total = count($resultado);
			
		break;
		
		case 'buscar':

		$resultado = $objContrato->buscar($condiciones['co_contrato']);
			
		break;
		
		case 'refrescar':
			
			//$filtros = $_REQUEST["filter"];	
			$resultado = $objContrato->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST['co_proceso']);
				//for($i=0; $i<count($resultado); $i++)
					//$resultado[$i]['resp'] = true;	
			$tot = $objContrato->contar();
			//print_r($tot );
			//$total =  $tot[0]['cuenta'];
			//	if(is_object($objDocumento->pdo->monitor) && $objDocumento->pdo->monitor->notify_select)
			//	$objDocumento->pdo->popNotify(); // Libera posicion reg_padre
		
		break;
		
		case 'insertar': //  caso guardar nuevo registro
		    //echo "insertar";
			 $cond = $_REQUEST['Resultados'];
			$cond = str_replace('\"','"',$cond);
			$condicion['co_proceso']=$_REQUEST['condicion'];
			$registro = json_decode($cond, true);
			//$registro = array_filter($registro, "vacio");
			
			$contrato['co_proceso']=$_REQUEST['co_proceso'];
			//$contrato['co_contrato']=$_REQUEST['co_contrato'];

			if(isset($registro['nu_contrato_sap']))
				$contrato['nu_contrato_sap']=$registro['nu_contrato_sap'];
			
			if(isset($registro['nu_contrato_comision']))
				$contrato['nu_contrato_comision']=$registro['nu_contrato_comision'];
			
			if(isset($registro['co_empresa']))
			    $contrato['co_empresa']=$registro['co_empresa'];
			
			if(isset($registro['fe_carta_preliminar']))
			    $contrato['fe_carta_preliminar']=$registro['fe_carta_preliminar'];
			        
			if(isset($registro['fe_firma_contrato']))
			    $contrato['fe_firma_contrato']=$registro['fe_firma_contrato'];
			
			if(isset($registro['co_cierre_procedimiento']))
			    $contrato['co_cierre_procedimiento']=$registro['co_cierre_procedimiento'];
			 
			if(isset($registro['nu_monto_total_adjudicado']))
			    $contrato['nu_monto_total_adjudicado']=$registro['nu_monto_total_adjudicado'];
			
			if(isset($registro['nu_monto_total_adjudicado_bsf']))
			    $contrato['nu_monto_total_adjudicado_bsf']=$registro['nu_monto_total_adjudicado_bsf'];
			
			if(isset($registro['nu_monto_total_adjudicado_dol']))
			    $contrato['nu_monto_total_adjudicado_dol']=$registro['nu_monto_total_adjudicado_dol'];
			
			if(isset($registro['nu_monto_total_adjudicado_euro']))
			    $contrato['nu_monto_total_adjudicado_euro']=$registro['nu_monto_total_adjudicado_euro'];

			if(isset($registro['nu_aporte_compromiso']))
			    $contrato['nu_aporte_compromiso']=$registro['nu_aporte_compromiso'];
			
			if(isset($registro['nu_upc']))
			    $contrato['nu_upc']=$registro['nu_upc'];
			
			//$filtros = $_REQUEST["filter"];		
			//print_r ($contrato);
			$resulta = $objContrato->insertar($contrato);
			
			$resultado = $objContrato->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST['co_proceso']);
				for($i=0; $i<count($resultado); $i++)
				$resultado[$i]['resp'] =$resulta;
				$tot = $objContrato->contar();
				$total = $tot[0]['cuenta'];

			
		break;
		
		case 'modificar': //  caso guardar modificaciones de un regristro
			
			
			$cond = $_REQUEST['Resultados'];
			$cond = str_replace('\"','"',$cond);	
			$condicion['co_proceso']=$_REQUEST['co_proceso'];
			$condicion['co_contrato']=$_REQUEST['co_contrato'];
			$registro = json_decode($cond, true);
		
			$registro = array_filter($registro, "vacio");	
			//print_r($condicion);			//no los recibo
			//print_r($condicion2);	
			
			if(isset($registro['nu_contrato_sap']))
				$contrato['nu_contrato_sap']=$registro['nu_contrato_sap'];
			
			if(isset($registro['nu_contrato_comision']))
				$contrato['nu_contrato_comision']=$registro['nu_contrato_comision'];
			
			if(isset($registro['co_empresa']))
			    $contrato['co_empresa']=$registro['co_empresa'];
			
			if(isset($registro['fe_carta_preliminar']))
			    $contrato['fe_carta_preliminar']=$registro['fe_carta_preliminar'];
			        
			if(isset($registro['fe_firma_contrato']))
			    $contrato['fe_firma_contrato']=$registro['fe_firma_contrato'];
			
			if(isset($registro['co_cierre_procedimiento']))
			    $contrato['co_cierre_procedimiento']=$registro['co_cierre_procedimiento'];
			 
			if(isset($registro['nu_monto_total_adjudicado']))
			    $contrato['nu_monto_total_adjudicado']=$registro['nu_monto_total_adjudicado'];
			
			if(isset($registro['nu_monto_total_adjudicado_bsf']))
			    $contrato['nu_monto_total_adjudicado_bsf']=$registro['nu_monto_total_adjudicado_bsf'];
			
			if(isset($registro['nu_monto_total_adjudicado_dol']))
			    $contrato['nu_monto_total_adjudicado_dol']=$registro['nu_monto_total_adjudicado_dol'];
			
			if(isset($registro['nu_monto_total_adjudicado_euro']))
			    $contrato['nu_monto_total_adjudicado_euro']=$registro['nu_monto_total_adjudicado_euro'];
			    
			if(isset($registro['nu_aporte_compromiso']))
			    $contrato['nu_aporte_compromiso']=$registro['nu_aporte_compromiso'];
			
			if(isset($registro['nu_upc']))
			    $contrato['nu_upc']=$registro['nu_upc'];
			 
			 /*if(isset($registro['co_proceso']))
				$condicion['co_proceso']=$registro['co_proceso'];
				
			if(isset($registro['co_contrato']))
				$condicion['co_contrato']=$registro['co_contrato'];*/

			$resulta= $objContrato->actualizar($contrato, $condicion);
				
			$resultado= $objContrato->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"], $_REQUEST['co_proceso']);
			//print_r($contrato);
			for($i=0; $i<count($resultado); $i++)
				$resultado[$i]['resp'] =$resulta;
			$tot = $objContrato->contar();
			$total = $tot[0]['cuenta'];
		
						
		break;
		
		case 'eliminar': //  caso  eliminar
	
			//echo "hola ";
			$condiciones['co_contrato']=$_REQUEST['co_contrato'];
			$resultado = $objContrato->eliminar($condiciones);
			
			$resultado = $objContrato->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"]);
			
			$tot = $objContrato->contar();
			$total = $tot[0]['cuenta'];
		
		break;


	}	
			
			echo $resultado2='{"total":'.(($total)? $total : 0).', "Resultados":'.json_encode($resultado).'}';
?>
