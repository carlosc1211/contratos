<?php
session_start();
require_once 'MyPDO.php';


class ResultadosClase extends MyPDO {

	//acá los atributos de las tablas
	private  $columArt = array('co_proceso'=>'co_proceso','co_contrato'=>'co_contrato','nu_contrato_sap'=>'nu_contrato_sap','nu_contrato_comision'=>'nu_contrato_comision','fe_carta_preliminar'=>'fe_carta_preliminar','fe_firma_contrato'=>'fe_firma_contrato','co_cierre_procedimiento'=>'co_cierre_procedimiento','nu_monto_total_adjudicado'=>'nu_monto_total_adjudicado','nu_monto_total_adjudicado_bsf'=>'nu_monto_total_adjudicado_bsf','nu_monto_total_adjudicado_dol'=>'nu_monto_total_adjudicado_dol','nu_monto_total_adjudicado_euro'=>'nu_monto_total_adjudicado_euro','nu_aporte_compromiso'=>'nu_aporte_compromiso','nu_upc'=>'nu_upc');
	
	public $columFiltros = array('co_usuario'=>'co_usuario','nu_contrato_sap'=>'nu_contrato_sap','nu_contrato_comision'=>'nu_contrato_comision','fe_carta_preliminar'=>'fe_carta_preliminar','fe_firma_contrato'=>'fe_firma_contrato','co_cierre_procedimiento'=>'co_cierre_procedimiento','nu_monto_total_adjudicado'=>'nu_monto_total_adjudicado','nu_monto_total_adjudicado_bsf'=>'nu_monto_total_adjudicado_bsf','nu_monto_total_adjudicado_dol'=>'nu_monto_total_adjudicado_dol','nu_monto_total_adjudicado_euro'=>'nu_monto_total_adjudicado_euro','nu_aporte_compromiso'=>'nu_aporte_compromiso','nu_upc'=>'nu_upc');
	
	public function mostrar($start='0', $limit='0', $sort = "", $dir = "ASC", $co_proceso ){

  	
		//global $filtros;
		 
		$query = " SELECT con.*, cp.*

		FROM c011t_contrato con
		LEFT JOIN i040t_cierre_procedimiento AS cp ON con.co_cierre_procedimiento= cp.co_cierre_procedimiento
		WHERE co_proceso='".$co_proceso."' "; //.$this->filtrarQuery($_SESSION["filtros"]);		
					
		if ($sort != "") {
			$query .= " ORDER BY ".$sort." ".$dir;
		}
		else{
			$query .= " ORDER BY co_contrato DESC  ";
		}
		
		if ($limit != "") {
			$query .= 'LIMIT '.$start.' , '.$limit;
		}	
			//echo $query;	
		 $r = $this->pdo->_query($query);

		
		//print_r($r);	 
		return $r;
  } 


	public function contar(){
		
		global $filtros;
				 
		 $contar = "SELECT
					count(*) as cuenta FROM c011t_contrato ";
							
		 $r = $this->pdo->_query($contar);
				 
		return $r;
	  } 
	 
	public function listar($campo,$tabla) {
		
		$query =  "SELECT DISTINCT $campo AS id, $tabla.* FROM $tabla ";
		//echo $query;
		$r = $this->pdo->_query($query);
			
		return $r;
	 }  
    
    public function buscar() {		
	$query = "SELECT fe_firma_contrato FROM c011t_contrato WHERE co_contrato=".$_REQUEST['co_contrato']." ";
	$r = $this->pdo->_query($query);
	return $r;
	 } 
    
    public function insertar($registro)  {
		//echo "prueba insertar";
		 
	$registro = array_intersect_key($registro, $this->columArt);
		 

		$r = $this->pdo->_insert('c011t_contrato', $registro);

		if($r==1 ){
			return true;
		}
		else{
			return "Ha ocurrido un error al  insertar los datos del Documento."; //$oper1.$oper2;
		}

		return $r;  

  } 

 
  public function actualizar($registro, $condicion) {
	/*	echo '<pre>';
			//$result = mysql_query("SET NAMES 'utf8'", $conex);
			
			//print_r($Resultados);
			//print_r($condiciones);
			echo '</pre>';	
*/
		

		
		$oper2 = $this->pdo->_update('c011t_contrato', $registro, $condicion);
	//print_r($condicion);
		//echo '<pre>';
		//print_r($this->columArt);
		//echo '</pre>';

		if($oper2){
				
			return true;
		}
		else{
			return "Ha ocurrido un error al intentar actualizar los datos del Documento."; //$oper1.$oper2;
		}
		
		return $r;  
		
  } 

  public function eliminar($condiciones) {
  	//echo $condiciones;
  	$r = $this->pdo->_delete('c011t_contrato', $condiciones);  
	return $r;
  } // end of member function eliminarDocumento
 

}
   
?>
