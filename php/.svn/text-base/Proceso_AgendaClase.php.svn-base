<?php
require_once 'MyPDO.php';


class ProcesoAgendaClase extends MyPDO {

	//acá los atributos de las tablas
	private  $columArt = array('co_proceso'=>'co_proceso','co_agenda'=>'co_agenda',  'nu_orden'=>'nu_orden', 'nu_acta'=>'nu_acta', 'co_tipo_agenda'=>'co_tipo_agenda', 'co_acta'=>'co_acta', 'tx_recomendacion'=>'tx_recomendacion', 'co_resumen_recomendado'=>'co_resumen_recomendado');
	
	public $columFiltros = array('nu_orden'=>'nu_orden');
	
public function mostrar($start='0', $limit='0', $sort = "", $dir = "ASC",$condicion){
  	
		global $filtros;
		//print_r($_REQUEST['condicion']);
		//colocar los campos de la tabla proceso  
		$query = "SELECT * FROM  c003t_proceso_agenda pa, c001t_proceso p 
                  
                  WHERE    pa.co_proceso = p.co_proceso and pa.co_agenda='".$condicion."'".$this->filtrarQuery($filtros);
		if ($sort != "") {
			$query .= " ORDER BY ".$sort." ".$dir;
		}
		else{
			$query .= " ORDER BY pa.co_proceso ";
		}
		
		if ($limit != "") {
			$query .= 'LIMIT '.$start.' , '.$limit;
		}	
		//echo $query;	
		 $r = $this->pdo->_query($query);
		return $r;
} 
public function mostrarPorProceso($start='0', $limit='0', $sort = "", $dir = "ASC",$condicion){
		global $filtros;
		//print_r($_REQUEST['condicion']);
		//colocar los campos de la tabla proceso  
		$query = "SELECT *
					FROM (c002t_agenda a,c003t_proceso_agenda pa)
					LEFT  JOIN i005t_trimestre t ON a.co_trimestre=t.co_trimestre
					LEFT JOIN i007t_tipo_reunion tr ON a.co_tipo_reunion=tr.co_tipo_reunion
					LEFT JOIN i016t_resumen_recomendado rr ON pa.co_resumen_recomendado=rr.co_resumen_recomendado
					LEFT  JOIN i014t_acta ac ON pa.co_acta=ac.co_acta
					LEFT  JOIN i006t_tipo_agenda ta ON pa.co_tipo_agenda=ta.co_tipo_agenda
					WHERE pa.co_agenda=a.co_agenda AND pa.co_proceso='".$condicion."'".$this->filtrarQuery($filtros);
		if ($sort != "") {
			$query .= " ORDER BY ".$sort." ".$dir;
		}
		else{
			$query .= " ORDER BY a.fe_agenda DESC";
		}
		
		if ($limit != "") {
			$query .= 'LIMIT '.$start.' , '.$limit;
		}	
		//echo $query;	
		 $r = $this->pdo->_query($query);
		return $r;
} 
public function contar(){
		global $filtros;
				 
		 $contar = "SELECT
					count(*) as cuenta FROM c003t_proceso_agenda ".$this->filtrarQuery($filtros);
							
		 $r = $this->pdo->_query($contar);
	
			 
		return $r;
	  } 
	 
public function buscar($codigo) {
		
		$query =  "SELECT * FROM c003t_proceso_agenda WHERE nu_expediente = '".$codigo."' ";
		//echo $query;
		$r = $this->pdo->_query($query);
			
		return $r;
	 }  
  
public function insertar($registro)  {
 //print_r($registro);
		$registro = array_intersect_key($registro, $this->columArt);
		$r = $this->pdo->_insert('c003t_proceso_agenda', $registro);
		if($r==1 ){
			//echo "prueba";
			return true;
		}
		else{
			return "Ha ocurrido un error al intentar insertar los datos del Documento."; //$oper1.$oper2;
		}

		return $r;  

  }   
   
  public function actualizar($registro, $condiciones) {
		/*echo '<pre>';
			print_r($usrDocEdo);
			print_r($columnas);
			print_r($condiciones);
			echo '</pre>';	
*/
		$registro = array_intersect_key($registro, $this->columArt);
		$oper2 = $this->pdo->_update('c003t_proceso_agenda', $registro, $condiciones);
		

		if($oper2){
			//echo "pruebas";
			return true;
		}
		else{
			return "Ha ocurrido un error al intentar actualizar los datos del Documento."; //$oper1.$oper2;
		}
  } 

  public function eliminar($condiciones) {
  	//echo $condiciones;
	$r = $this->pdo->_delete('c003t_proceso_agenda', $condiciones);
	
	return $r;
  } // end of member function eliminarDocumento
 

}
   
?>
  
