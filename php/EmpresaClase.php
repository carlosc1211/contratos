<?php
session_start();
require_once 'MyPDO.php';

class EmpresaClase extends MyPDO {
//acá los atributos de las tablas
	private  $empresa = array(
	'co_empresa'=>'co_empresa',
	'nu_rif'=>'nu_rif',
	'tx_empresa'=>'tx_empresa',
	'nu_acreedor'=>'nu_acreedor',
	'co_tipo_empresa'=>'co_tipo_empresa',
	'tx_ubi_empresa'=>'tx_ubi_empresa');
	
	public $columFiltros = array('nu_rif'=>'nu_rif',
	'tx_empresa'=>'tx_empresa',
	'nu_acreedor'=>'nu_acreedor',
	'co_tipo_empresa'=>'co_tipo_empresa',
	'tx_ubi_empresa'=>'tx_ubi_empresa');
	
	
	private  $empresaproceso = array('co_empresa'=>'co_empresa',
	'co_proceso'=>'co_proceso',
	'co_contrato'=>'co_contrato',
	'tx_representante'=>'tx_representante',
	'nu_van'=>'nu_van',
	'nu_telefonico'=>'nu_telefonico',
	'co_status_empresa'=>'co_status_empresa',
	'nu_telefonico_opcional'=>'nu_telefonico_opcional',
	'tx_observacion_empresa'=>'tx_observacion_empresa');
	
	private $lastid;
	public function getLastId()
	{ 	
	return $this->lastid;	
	}
	//ñ
	/* public function convertArrayKeysToUtf88($array1) {
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
   
	*/
	public function mostrar($start='0', $limit='0', $sort = "", $dir = "ASC", $co_proceso){

  	
		//global $filtros;
		 
		$query = "SELECT *
FROM (c002t_empresa em, i036t_empresa_proceso ep)
LEFT JOIN i024t_tipo_empresa AS te ON em.co_tipo_empresa=te.co_tipo_empresa
LEFT JOIN i004t_status_empresa AS se ON ep.co_status_empresa=se.co_status_empresa

WHERE em.co_empresa = ep.co_empresa AND co_proceso='".$co_proceso."' ";

	if ($sort != "") {
			$query .= " ORDER BY ".$sort." ".$dir;
		}
		else{
			$query .= " ORDER BY id_empresa_proceso ";
		}
		
		if ($limit != "") {
			$query .= ' LIMIT '.$start.' , '.$limit;
		}	
		//echo $query;
		$r = $this->pdo->_query($query);
		//$resultado=$this->convertArrayKeysToUtf88($r);
		return $r;
  }  


	public function contar(){
		
		//global $filtros;
				 
		 $contar = "SELECT
					count(*) as cuenta FROM c002t_empresa emp
					WHERE emp.co_proceso='".$co_proceso."' ".
							
		 $r = $this->pdo->_query($contar);
				//print_r($r);			 
		return $r;
	  } 
	 
	public function listar($campo,$tabla) {
		
		$query =  "SELECT DISTINCT $campo AS id, $tabla.* FROM $tabla ";
		//echo $query;
		$r = $this->pdo->_query($query);

		return $r;
	 }  
	 public function buscar($rif) {
		
		$query =  "SELECT * FROM c002t_empresa WHERE nu_rif='$rif' ";
		//echo $query;
		$r = $this->pdo->_query($query);

		return $r;
	 } 
	 
	 
	 
	  public function insertar($datosEmpresa,$co_proceso)  {
	 
	  $this->pdo->beginTransaction();


		$registro = array_intersect_key($datosEmpresa, $this->empresa);
		$oper1 = $this->pdo->_insert('c002t_empresa', $registro);
		$co_empresa = $this->pdo->_query('SELECT LAST_INSERT_ID() as co_empresa'); 
		$registro['co_empresa']= $co_empresa[0]['co_empresa'];
		//print_r($registro);

		$registro2 = array_intersect_key($datosEmpresa, $this->empresaproceso);
		$registro2['co_proceso']= $co_proceso;
		$registro2['co_empresa']= $co_empresa[0]['co_empresa'];
		//print_r($registro2);
		$oper2 = $this->pdo->_insert('i036t_empresa_proceso', $registro2);
	
		if($oper1==1 && $oper2==1){

	//	$respuesta['resp']=true;
		$this->pdo->commit(); //return $respuesta;

		}
		else{

			//$respuesta['resp']=' 1.-'.$oper1.'2 -'.$oper2;

			echo ' 1.-'.$oper1.'2 -'.$oper2."<BR>";

			$this->pdo->rollback();// return $respuesta;
		}
			 
} 
	 
	 public function insertarEmpresa($datosAdministracion)  {
		$registro = array_intersect_key($datosAdministracion, $this->empresa);
		$r = $this->pdo->_insertLastId('c002t_empresa', $registro);
		/*$datosAdministracion['co_empresa']=$r;
		$oper2 = $this->pdo->_insert('i036t_empresa_proceso', $datosAdministracion);*/
		//echo $r;
			/*if($r==1 )
				{
				 //echo "prueba";
				 return true;
				}
			 
			else
				{
				  return "Ha ocurrido un error al intentar insertar los datos del Documento."; //$oper1.$oper2;
				}*/
			return $r; 
      }  

   
  public function actualizar($datosEmpresa, $condicionEmpresa, $condicionEmpProc) {
	  
	//	$this->pdo->beginTransaction();

		$registro = array_intersect_key($datosEmpresa, $this->empresa);
		
		$oper1 = $this->pdo->_update('c002t_empresa',  $registro , $condicionEmpresa );
		
//	print_r($registro);

		

		$registro2 = array_intersect_key($datosEmpresa, $this->empresaproceso);
		
		$oper2 = $this->pdo->_update('i036t_empresa_proceso', $registro2 , $condicionEmpProc);

//	print_r($registro2);

	/*	if($oper1==1  && $oper2==1){

	//	$respuesta['resp']=true;
		$this->pdo->commit(); //return $respuesta;

		}
		else{

			//$respuesta['resp']=' 1.-'.$oper1.'2 -'.$oper2;

			echo ' 1.-'.$oper1.'2 -'.$oper2."<BR>";

			$this->pdo->rollback();// return $respuesta;
		}*/
  } 

  public function eliminar($condiciones) {
  	//echo $condiciones;
  	$r = $this->pdo->_delete('c002t_empresa', $condiciones);  
	return $r;
  } // end of member function eliminarDocumento
 

}
   
?>
  
