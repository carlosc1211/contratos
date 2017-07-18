<?php
require_once 'MyPDO.php';


class EmpresaProcesoClase extends MyPDO {

	//acá los atributos de las tablas
	private  $empresaproceso = array(
	'co_empresa'=>'co_empresa',
	'co_proceso'=>'co_proceso',
	'co_contrato'=>'co_contrato',
	'tx_representante'=>'tx_representante',
	'nu_van'=>'nu_van',
	'nu_telefonico'=>'nu_telefonico',
	'co_status_empresa'=>'co_status_empresa',
	'nu_telefonico_opcional'=>'nu_telefonico_opcional',
	'tx_observacion_empresa'=>'tx_observacion_empresa');
	
	private  $empresa = array(
	'co_empresa'=>'co_empresa',
	'nu_rif'=>'nu_rif',
	'tx_empresa'=>'tx_empresa',
	'nu_acreedor'=>'nu_acreedor',
	'co_tipo_empresa'=>'co_tipo_empresa',
	'tx_ubi_empresa'=>'tx_ubi_empresa');	
	
	public $columFiltros = array('nu_van'=>'nu_van','nu_telefonico'=>'nu_telefonico','nu_telefonico_opcional'=>'nu_telefonico_opcional','tx_observacion_empresa'=>'tx_observacion_empresa');
	public function convertArrayKeysToUtf88($array1){
    $convertedArray1 = array();
    $convertedArray = array();
    foreach($array1 as $array) {
    foreach($array as $key => $value){
      if(!mb_check_encoding($value, 'UTF-8')) 
      {$value = utf8_encode($value);}
      $convertedArray[$key] = $value;
    }
    $convertedArray1[] = $convertedArray;
}
	return $convertedArray1;
}
   	public function mostrar($start='0', $limit='0', $sort = "", $dir = "ASC"){
		global $filtros;
		$query = "
				SELECT*FROM (c002t_empresa em, i036t_empresa_proceso ep)
				LEFT JOIN i024t_tipo_empresa AS te ON em.co_tipo_empresa=te.co_tipo_empresa
				LEFT JOIN i004t_status_empresa AS se ON ep.co_status_empresa=se.co_status_empresa
				WHERE em.co_empresa = ep.co_empresa ".$this->filtrarQuery($filtros);			
					
		if ($sort != "") {
			$query .= " ORDER BY ".$sort." ".$dir;
		}
		else{
			$query .= " ORDER BY co_empresa";
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
				 
		$contar = "	
				SELECT count(*) as cuenta FROM i036t_empresa_proceso ".$this->filtrarQuery($filtros);
							
		$r = $this->pdo->_query($contar);
				 
		return $r;
		} 
	 
		public function listar($campo,$tabla) {
		$query =  "SELECT DISTINCT $campo AS id, $tabla.* FROM $tabla ";
		//echo $query;
		$r = $this->pdo->_query($query);
		return $r;
		}  
    
		public function insertar($registro){
		$this->pdo->beginTransaction();
		$registro = array_intersect_key($registro, $this->empresa);
		$oper1 = $this->pdo->_insert('c002t_empresa', $registro);
		$co_empresa = $this->pdo->_query('SELECT LAST_INSERT_ID() as co_empresa'); 

		if($oper1==1 ){
		$respuesta['resp']=true;
		$this->pdo->commit(); return $respuesta;
		}
		
		else{
			$respuesta['resp']=' 1.-'.$oper1;
			echo ' 1.-'.$oper1."<BR>";
			$this->pdo->rollback(); return $respuesta;
		}
	}  
		public function insertarEmpresaContrato($registro)  {
		$registro = array_intersect_key($registro, $this->empresaproceso);
		$oper1 = $this->pdo->_insert('i036t_empresa_proceso', $registro);
		if($oper1==1 ){
			$respuesta['resp']=true;
			return $respuesta;
		}	  
}
		public function actualizar($registro, $condiciones) {
		/*echo '<pre>';
			$result = mysql_query("SET NAMES 'utf8'", $conex);
			print_r($usrDocEdo);
			print_r($Resultados);
			print_r($condiciones);
			echo '</pre>';	
*/
		
		$oper2 = $this->pdo->_update('i036t_empresa_proceso', $registro, $condiciones);
		//print_r($Resultados);
	
		if($oper2){
				
			return true;
		}
		else{
			return "Ha ocurrido un error al intentar actualizar los datos del Documento."; //$oper1.$oper2;
		}
  } 

  public function eliminar($condiciones) {
  	//echo $condiciones;
  	$r = $this->pdo->_delete('i036t_empresa_proceso', $condiciones);  
	return $r;
  } // end of member function eliminarDocumento
 

}
   
?>
  
