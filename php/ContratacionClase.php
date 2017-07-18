<?php
session_start();
require_once 'MyPDO.php';


class ContratacionClase extends MyPDO {

//************************acá los atributos de las tablas**********************************************
	
	private  $columArt = array(
	'co_proyecto'=>'co_proyecto', 
	'co_proceso'=>'co_proceso', 
	'co_supervisor'=>'co_supervisor', 
	'co_usuario'=>'co_usuario',
	'tx_lider_proyecto'=>'tx_lider_proyecto',
	'tx_superintendencia'=>'tx_superintendencia',
	'nu_telefonico_lider'=>'nu_telefonico_lider',
	'tx_proyecto'=>'tx_proyecto',
	'tx_descripcion'=>'tx_descripcion',
	'nu_solped'=>'nu_solped',
	'nu_expediente'=>'nu_expediente',
	'nu_control_cf'=>'nu_control_cf',
	'co_orientacion'=>'co_orientacion',
	'tx_alcance'=>'tx_alcance',
	'co_tipo_contrato'=>'co_tipo_contrato',
	'co_modalidad'=>'co_modalidad',
	'co_naturaleza'=>'co_naturaleza',
	'co_regimen_lab'=>'co_regimen_lab',
	'co_mecanismo_verif'=>'co_mecanismo_verif',
	'co_estrategia_adj'=>'co_estrategia_adj',
	'co_rango'=>'co_rango',
	'tx_antecedente'=>'tx_antecedente',
	'nu_extension_lider'=>'nu_extension_lider',
	'fe_recomendacion'=>'fe_recomendacion',
	'nu_aporte_compromiso'=>'nu_aporte_compromiso',
	'tx_upc'=>'tx_upc',
	'co_comision'=>'co_comision');//'co_prioridad'=>'co_prioridad',
	
	//public $columFiltros = array('co_usuario'=>'co_usuario','co_naturaleza'=>'co_naturaleza','co_modalidad'=>'co_modalidad','co_regimen_lab'=>'co_regimen_lab');
	
	public function convertArrayKeysToUtf88($array1) {
    $convertedArray1 = array();
    $convertedArray = array();
    foreach($array1 as $array) {
    foreach($array as $key => $value) {
      if(!mb_check_encoding($value, 'UTF-8')) 
      {$value = utf8_encode($value); }

      $convertedArray[$key] = $value;

    }
    $convertedArray1[] = $convertedArray;
}
    return $convertedArray1;
  }
   
	
	public function mostrar($start='0', $limit='0', $sort = "", $dir = "ASC"){
		switch($_SESSION['co_rol']){
			
			case 0://Administrador del Sistema
				$ubicacion="0=0";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
			case 12://Administrador del Area
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
			case 1://Gerente de Area
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
			case 2://Lider de Planificacion
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
			case 3://Supervisor de Planificacion
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
			case 10://Analista de Planificacion
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
			case 4://Lider de Contratacion
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
			case 5://Supervisor de Contratacion
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario IS NULL AND p.co_supervisor=".$_SESSION['co_usuario']."";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor=".$_SESSION['co_usuario']."";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor=".$_SESSION['co_usuario']."";
			break;
			case 6://Analista de Contratacion
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario=".$_SESSION['co_usuario']." AND p.nu_solped IS NULL";
				$usuario_proceso="p.co_usuario=".$_SESSION['co_usuario']." AND p.nu_solped IS NOT NULL";
				$usuario_adjudicados="p.co_usuario=".$_SESSION['co_usuario']." AND p.nu_solped IS NOT NULL";
			break;
			case 7://Lider de Administracion
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
			case 8://Supervisor de Administracion
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
			case 9://Analista de Administracion
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
			case 11://Gerente de Region
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
		}
			
		switch($_REQUEST['tabcon']){
				case 'porcontratar': 
					$condicion="where $ubicacion AND ($usuario_porcontratar) ";
				break;
				case 'proceso_con': 
					$condicion="where $ubicacion AND ($usuario_proceso AND nu_contratos is NULL)";
				break;
				case 'adjudicados': 
					$condicion="where $ubicacion AND ($usuario_adjudicados AND nu_contratos<>0)";//modificar, no es asi. proceso adjudicado
				break;
				
		}
		
  	
		global $filtros;
		 
		$query = "SELECT p.co_proceso, p.co_proyecto,p.co_supervisor,
				(SELECT tx_usuario FROM c001t_usuario u WHERE u.co_usuario=p.co_supervisor) AS tx_supervisor,
				p.co_usuario, usu.tx_usuario, py.tx_proyecto, n.co_naturaleza, n.tx_naturaleza, 
				py.nu_plazo_ejec, mo.co_modalidad, mo.tx_modalidad, re.co_regimen_lab, re.tx_regimen_lab,
				org.co_organizacion, org.tx_organizacion, p.tx_superintendencia,
				p.tx_lider_proyecto, py.fe_especificaciones AS fe_especificaciones_con, p.nu_telefonico_lider,p.tx_descripcion,
				pri.co_prioridad, pri.tx_prioridad, ori.co_orientacion, ori.tx_orientacion,
				p.tx_alcance, p.tx_antecedente, tp.co_tipo_presupuesto, tp.tx_tipo_presupuesto, py.co_ubicacion, CONCAT(tx_tipo_ubicacion,' ',tx_ubicacion) AS tx_ubicacion_contra,
				py.tx_lugar_ejecucion AS tx_lugar_ejecucion_contra, ra.co_rango, ra.tx_rango, tpc.co_tipo_contrato, tpc.tx_tipo_contrato,
				ea.co_estrategia_adj, ea.tx_estrategia_adj, mv.co_mecanismo_verif, mv.tx_mecanismo_verif, p.nu_extension_lider, p.fe_recomendacion,
				p.nu_solped, p.nu_expediente, p.nu_control_cf, p.nu_aporte_compromiso, p.tx_upc, co.co_comision, co.tx_comision,
				nu_contratos
					FROM c004t_proceso AS p
					LEFT JOIN c003t_proyecto AS py ON py.co_proyecto=p.co_proyecto 
					LEFT JOIN c001t_usuario AS usu ON p.co_usuario= usu.co_usuario
					LEFT JOIN i002t_ubicacion AS ubi ON py.co_ubicacion= ubi.co_ubicacion
					LEFT JOIN i003t_tipo_ubicacion AS tubi ON ubi.co_tipo_ubicacion = tubi.co_tipo_ubicacion
					LEFT JOIN i008t_naturaleza AS n ON p.co_naturaleza=n.co_naturaleza
					LEFT JOIN i006t_modalidad AS mo ON p.co_modalidad=mo.co_modalidad
					LEFT JOIN i007t_regimen_lab AS re ON p.co_regimen_lab = re.co_regimen_lab
					LEFT JOIN i005t_organizacion AS org ON py.co_organizacion = org.co_organizacion
					LEFT JOIN i034t_tipo_contrato AS tpc ON p.co_tipo_contrato = tpc.co_tipo_contrato
					LEFT JOIN i017t_rango AS ra ON p.co_rango = ra.co_rango
					LEFT JOIN i035t_estrategia_adj AS ea ON p.co_estrategia_adj = ea.co_estrategia_adj
					LEFT JOIN i016t_mecanismo_verif AS mv ON p.co_mecanismo_verif = mv.co_mecanismo_verif
					LEFT JOIN i020t_prioridad AS pri ON py.co_prioridad= pri.co_prioridad
					LEFT JOIN i021t_orientacion AS ori ON p.co_orientacion = ori.co_orientacion 
					LEFT JOIN i018t_tipo_presupuesto AS tp ON py.co_tipo_presupuesto = tp.co_tipo_presupuesto
					LEFT JOIN i022t_comision AS co On p.co_comision = co.co_comision
					LEFT JOIN (SELECT co_proceso,COUNT(*) AS nu_contratos FROM c011t_contrato GROUP BY co_proceso) AS nu_con ON p.co_proceso=nu_con.co_proceso
					
		$condicion";		
					
		if ($sort != "") {
			$query .= " ORDER BY ".$sort." ".$dir;
		}
		else{
			$query .= " ORDER BY co_proceso";
		}
		
		if ($limit != "") {
			$query .= ' LIMIT '.$start.' , '.$limit;
		}	
		//echo $query;
		 $r = $this->pdo->_query($query);
		$resultado=$this->convertArrayKeysToUtf88($r);
		return $resultado;
  } 


	public function contar(){
		
		global $filtros;
				 
		 $contar = "SELECT
					count(*) as cuenta FROM c004t_proceso $condicion";
							
		 $r = $this->pdo->_query($contar);
				 
		return $r;
	  } 
	 
	public function listar($campo,$tabla) {
		
		$query =  "SELECT DISTINCT $campo AS id, $tabla.* FROM $tabla ";
		//echo $query;
		$r = $this->pdo->_query($query);
		return $r;
	 }  
    
    public function insertar($registro)  {
 
		$registro = array_intersect_key($registro, $this->columArt);
		$r = $this->pdo->_insert('c004t_proceso', $registro);
		if($r==1 ){
					//echo "prueba";
					return true;
				   }
		else{
			return "Ha ocurrido un error al intentar insertar los datos del Documento."; //$oper1.$oper2;
		    }
		
		return $r;  

  }  
  
  public function actualizar($var2, $condiciones) {
		/*echo '<pre>';
			$result = mysql_query("SET NAMES 'utf8'", $conex);
			print_r($usrDocEdo);
			print_r($Resultados);
			print_r($condiciones);
			echo '</pre>';	
*/
		//print_r($registro);
		$var_3 = array_intersect_key($var2, $this->columArt);
		//print_r($var_3);

		$oper2 = $this->pdo->_update('c004t_proceso', $var_3, $condiciones);
		//print_r($var_3);
	//echo 'hola1';
		if($oper2){
				
			return true;
		}
		else{
			return "Ha ocurrido un error al intentar actualizar los datos del Documento."; //$oper1.$oper2;
		}
  } 

  public function eliminar($condiciones) {
  	//echo $condiciones;
  	$r = $this->pdo->_delete('c004t_proceso', $condiciones);  
	return $r;
  } // end of member function eliminarDocumento
 

}
   
?>
