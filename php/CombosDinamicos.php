<?php 	
session_start();
	require_once 'MyPDO.php';
	$obj = new MyPDO();
	$accion = (isset($_POST['accion']) ? $_POST['accion'] : $_GET['accion']);
/*
 * 
 * name: vacio
 * @param accion a ejecutar
 * @return json con los datos del combo seleccionado
 */
function vacio($var) {
    return ($var != '');
}
//if($accion=='comision',$tx_indicador)

	$registro = array_filter($_REQUEST, "vacio");
	switch ($accion) {
		//----------------------------------------------------
//*****************************************************USUARIOS**************************************************************
//*******************************************COMBOS DE ADMINISTRACI0N********************************************************
		case 'usuario':
			$query ="SELECT co_rol, co_organizacion, co_ubicacion,co_usuario, CONCAT(tx_usuario,' [',tx_indicador,']') AS tx_usuario 
						FROM c001t_usuario 
							WHERE  bo_activo = 1 
							AND co_ubicacion=".$_SESSION['co_ubicacion']." 
							AND co_organizacion=".$_SESSION['co_organizacion']." 
							AND co_supervisor= ".$_SESSION['co_usuario'];
			$r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------
		case 'datos_usuario':
			$query ="SELECT u.*, s.tx_usuario AS tx_supervisor
					FROM c001t_usuario u
					LEFT JOIN c001t_usuario s ON u.co_supervisor=s.co_usuario
					WHERE u.co_usuario= ".$_SESSION['co_usuario'];
			$r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------
		case 'usuario_supervisores':
			$query ="SELECT co_rol, co_organizacion, co_ubicacion,co_usuario, CONCAT(tx_usuario,' [',tx_indicador,']') AS tx_usuario 
						FROM c001t_usuario 
							WHERE  bo_activo = 1 
							AND co_ubicacion=".$_SESSION['co_ubicacion']." 
							AND co_organizacion=".$_SESSION['co_organizacion']."
							AND co_usuario IN (SELECT DISTINCT co_supervisor 
												FROM c001t_usuario 
												WHERE co_ubicacion=".$_SESSION['co_ubicacion']."  
												AND co_organizacion=".$_SESSION['co_organizacion']." 
												AND co_supervisor IS NOT NULL )";
			$r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------
		case 'usuario_supervisores_contratacion':
			$query ="SELECT co_rol, co_organizacion, co_ubicacion,co_usuario, CONCAT(tx_usuario,' [',tx_indicador,']') AS tx_usuario 
						FROM c001t_usuario 
							WHERE  bo_activo = 1 
							AND co_ubicacion=".$_SESSION['co_ubicacion']." 
							AND co_organizacion=".$_SESSION['co_organizacion']." 
							AND co_rol IN (4,5) 
							AND co_usuario IN (SELECT DISTINCT co_supervisor 
												FROM c001t_usuario 
												WHERE co_ubicacion=".$_SESSION['co_ubicacion']."  
												AND co_organizacion=".$_SESSION['co_organizacion']."
												AND co_supervisor IS NOT NULL )";
			$r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------
		case 'usuario_supervisores_administracion':
			$query ="SELECT co_rol, co_organizacion, co_ubicacion,co_usuario, CONCAT(tx_usuario,' [',tx_indicador,']') AS tx_usuario 
						FROM c001t_usuario 
							WHERE  bo_activo = 1 
							AND co_ubicacion=".$_SESSION['co_ubicacion']." 
							AND co_organizacion=".$_SESSION['co_organizacion']." 
							AND co_rol IN (7,8) 
							AND co_usuario IN (SELECT DISTINCT co_supervisor 
												FROM c001t_usuario 
												WHERE co_ubicacion=".$_SESSION['co_ubicacion']."  
												AND co_organizacion=".$_SESSION['co_organizacion']."
												AND co_supervisor IS NOT NULL )";
			$r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------		
		case 'usuarios':
			$query ="SELECT co_usuario,CONCAT(tx_usuario,' [',tx_indicador,']') AS tx_usuario 
						FROM c001t_usuario 
						WHERE bo_activo = 1 
						AND co_ubicacion=".$_SESSION['co_ubicacion']." 
						AND co_organizacion=".$_SESSION['co_organizacion']." 
						AND co_supervisor =" .$_REQUEST['supervisor'];
			$r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------
		case'rol':
			$query = "SELECT * FROM i001t_rol ";
			$r = $obj->pdo->_query($query);
                        //$obj->pdo->_query("SET character_set_results = 'utf8'");
			echo '{"Resultados":'.json_encode($r).'}';
		break;
//---------------------------------------------------------------------------------------------------------------------------------
		case 'tabla':
			$query = "SELECT tx_tablas,CONCAT(tx_desc_tablas,' -> ',tx_tablas)  AS tx_desc_tablas FROM i020_tablas";			
			$r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
//---------------------------------------------------------------------------------------------------------------------------------
		case 'datos_tabla':
			$query = "SELECT * FROM ".$_REQUEST["tx_tablas"];	
			//echo $query;		
			$r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
//---------------------------------------------------------------------------------------------------------------------------------
		case'roles_usuario':
			$query = "(SELECT u.co_rol,r.tx_rol,nu_order
						FROM c001t_usuario u,i001t_rol r
						WHERE u.co_rol=r.co_rol AND u.tx_indicador='$_REQUEST[tx_indicador]')
						UNION 
						(SELECT ur.co_rol,r.tx_rol,nu_order
						FROM c001t_usuario u, i001t_rol r, c016t_usuario_rol ur
						WHERE u.co_usuario=ur.co_usuario AND ur.co_rol=r.co_rol AND u.tx_indicador='$_REQUEST[tx_indicador]')
						";
			$r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------
		case 'ubicacion':
			$cad='';
			if(isset($_REQUEST['co_padre']))
			$cad=" AND co_padre=".$_REQUEST['co_padre'];
			$query = "SELECT co_ubicacion,tx_ubicacion
            FROM i002t_ubicacion
            WHERE co_tipo_ubicacion= ".$_REQUEST['co_tipo_ubicacion']."$cad";
            //if($_REQUEST['co_tipo_ubicacion']==3)
            //echo $query;
            $r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;		
//--------------------------------------------------------------------------------------------------------------------------------
		case 'ubicacion_total':
			$query = "SELECT co_ubicacion AS co_ubicacion_total,tx_ubicacion AS tx_ubicacion_total
            FROM i002t_ubicacion
            ORDER BY co_ubicacion";
            $r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------
		/*case 'direccion':
			$query = "SELECT co_ubicacion,tx_ubicacion
            FROM i002t_ubicacion
            WHERE co_tipo_ubicacion=2 AND co_padre=".$_REQUEST['co_padre'];
            $r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;*/
//--------------------------------------------------------------------------------------------------------------------------------			
		case 'organizacion':
			$query = "SELECT * 
					FROM i005t_organizacion 
					ORDER BY tx_organizacion";			
			$r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------
		case 'organizacion_ubicacion':
			$cad='';
			if(isset($_REQUEST['co_padre']))
				$cad=" AND uo.co_ubicacion=".$_REQUEST['co_padre'];
			$query = "SELECT * 
					FROM i005t_organizacion o, i011t_ubicacion_organizacion uo
					WHERE uo.co_organizacion=o.co_organizacion
					$cad
					ORDER BY tx_organizacion";			
			$r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------
		case 'naturaleza':
			$query = "SELECT * FROM i008t_naturaleza ORDER BY tx_naturaleza";			
			$r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------
		case 'regimen_lab':
			$query = "SELECT * FROM i007t_regimen_lab ";			
			$r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------		
		case 'modalidad':
			$query = "SELECT * FROM i006t_modalidad ORDER BY tx_modalidad";			
			$r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------		
		case 'mecanismo_verif':
			$query = "SELECT * FROM i016t_mecanismo_verif ";			
			$r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------				
		case 'rango':
			$query = "SELECT co_rango,CONCAT(tx_rango,' (',ut_minimo,' - ' ,ut_maximo,' UT)') AS tx_rango, monto_max FROM i017t_rango ";			
			$r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------				
		case 'tipo_presupuesto':
			$query = "SELECT * FROM i018t_tipo_presupuesto ORDER BY tx_tipo_presupuesto";			
			$r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------		
		case 'tipo_proyecto':
			$query = "SELECT * FROM i010t_tipo_proyecto ORDER BY tx_tipo_proyecto";			
			$r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------				
		case 'tipo_act':
			$query = "SELECT * FROM i019t_tipo_act ORDER BY tx_tipo_act";			
			$r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------		
		case'solicitud':
		$query = "SELECT * FROM i030t_solicitud_documentos ORDER BY tx_solicitud";
		$r = $obj->pdo->_query($query);
		echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------		
		case'numero':
		$query = "SELECT * FROM i031t_proceso_generados ";
		$r = $obj->pdo->_query($query);
		echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------		
		case'tipo_empresa':
		$query = "SELECT * FROM i024t_tipo_empresa ORDER BY tx_tipo_empresa";
		$r = $obj->pdo->_query($query);
		echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------		
		case'prioridad':
		$query = "SELECT * FROM i020t_prioridad ";
		$r = $obj->pdo->_query($query);
		echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------			
		case'orientacion':
		$query = "SELECT * FROM i021t_orientacion ORDER BY tx_orientacion";
		$r = $obj->pdo->_query($query);
		echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------		
		case 'comision':
			$query = "SELECT * FROM i022t_comision ";			
			$r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------
		case'status_empresa':
		$query = "SELECT * FROM i004t_status_empresa ORDER BY tx_status_empresa";
		$r = $obj->pdo->_query($query);
		echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------		
		case'unidades':
		$query = "SELECT * FROM i014t_unidades ORDER BY tx_unidades ASC ";
		$r = $obj->pdo->_query($query);
		echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------		
		case'tipo_contrato':
		$query = "SELECT * FROM i034t_tipo_contrato ORDER BY co_tipo_contrato ASC ";
		$r = $obj->pdo->_query($query);
		echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------	
		case'estrategia_adj':
		$query = "SELECT * FROM i035t_estrategia_adj ORDER BY co_estrategia_adj ASC ";
		$r = $obj->pdo->_query($query);
		echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------		
		case 'supervisor':
        if($_SESSION['co_rol']!=0){
        $condicion=" WHERE  co_ubicacion=$_SESSION[co_ubicacion] AND co_organizacion=$_SESSION[co_organizacion]";                    
              }
		$query = "SELECT co_usuario AS co_supervisor,CONCAT(tx_usuario,' [',tx_indicador,']') AS tx_supervisor
				FROM c001t_usuario 
        $condicion
				ORDER BY tx_indicador";		
        $obj->pdo->_query("SET character_set_results = 'utf8'");
        $r = $obj->pdo->_query($query);
                echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------		
		case 'empresa_adjudicataria':
			$query = "SELECT em.co_empresa, em.tx_empresa
					FROM (c002t_empresa em, i036t_empresa_proceso ep)
					LEFT JOIN i024t_tipo_empresa AS te ON em.co_tipo_empresa=te.co_tipo_empresa
					WHERE em.co_empresa = ep.co_empresa AND ep.co_proceso='".$_REQUEST['co_proceso']."' 
					AND ep.co_status_empresa = 3";			
			$r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------
		/*$query = "SELECT co_usuario,CONCAT(tx_usuario,' [',tx_indicador,']') AS tx_usuario FROM c001t_usuario ";			
			$r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;*/
//--------------------------------------------------------------------------------------------------------------------------------
	case 'pedido':
			$query = "SELECT co_pedido,nu_pedido AS tx_pedido FROM i013t_pedido WHERE co_contrato=".$_REQUEST['valor'];		
			$r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------
	case 'tipo_variacion':
		
			$query = "SELECT co_tipo_variacion,tx_tipo_variacion FROM i029t_tipo_variacion WHERE co_tipo_variacion order by tx_tipo_variacion";
            $r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------		
	case 'tipo_modificacion':

			$query = "SELECT * FROM i015t_tipo_modificacion WHERE co_tipo_variacion =".$_REQUEST['tipo'];
            $r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------		
	case 'moneda':
			$query = "SELECT * FROM   c013t_moneda  WHERE bo_activo = 1 ORDER BY tx_moneda  ";			
			$r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------
	case'unidadess':
		$query = "SELECT * FROM i014t_unidades   ";
		//echo $query;
		$r = $obj->pdo->_query($query);
		
		echo '{"Resultados":'.json_encode($r).'}';
		break;
//--------------------------------------------------------------------------------------------------------------------------------
	case 'co_ubicacion':
			$query = "SELECT co_ubicacion, tx_ubicacion FROM i002t_ubicacion WHERE bo_activo = 1 AND  co_tipo_ubicacion= ".$_REQUEST['co_tipo_ubicacion'];
            //if($_REQUEST['co_tipo_ubicacion']==3)
            //echo $query;
            $r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break; 
		
//********************************************GRAFICAS**********************************************
 	case 'tipo_grafico':
			$query="SELECT * FROM i037t_tipo_grafico";
			$r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
		case 'unidad_reporte':
			$query="SELECT * FROM i038t_unidad_reporte";
			$r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
		case 'reporte':
			$query="SELECT * FROM i039t_reporte";
			$r = $obj->pdo->_query($query);
			echo '{"Resultados":'.json_encode($r).'}';
		break;
		
		case 'cierre_procedimiento':
		$query="SELECT * FROM i040t_cierre_procedimiento";
		$r = $obj->pdo->_query($query);
		echo '{"Resultados":'.json_encode($r).'}';
		break;
	}	
?>
