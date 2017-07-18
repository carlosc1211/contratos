<?php
require_once 'MyPDO.php';


class solicitudInicioClase extends MyPDO {

	//acá los atributos de las tablas
	private  $columArt = array('co_proyecto'=>'co_proyecto','co_solicitud'=>'co_solicitud');
	
	public $columFiltros = array('co_proyecto'=>'co_proyecto','co_solicitud'=>'co_solicitud');
	
	public function mostrar($start='0', $limit='0', $sort = "", $dir = "ASC", $co_proyecto){

		global $filtros;
		 
		$query = "SELECT * FROM i032t_proyecto_solicitud WHERE 0=0".$this->filtrarQuery($filtros);	
						
					
	if ($sort != "") {
			$query .= " ORDER BY ".$sort." ".$dir;
		}
		else{
			$query .= " ORDER BY co_proyecto ";
		}
		
		if ($limit != "") {
			$query .= 'LIMIT '.$start.' , '.$limit;
		}	
		//		echo $query;		
		 $r = $this->pdo->_query($query);

		
			 
		return $r;
  } 		


	public function contar($co_proyecto){
		global $filtros;
				 
		 $contar = "SELECT * FROM i032t_proyecto_solicitud".$this->filtrarQuery($filtros);
							
		 $r = $this->pdo->_query($contar);
	
			 
		return $r;
	  } 
	//Aqui es donde estas modificando
public function buscar() {		
$query = "SELECT * FROM i032t_proyecto_solicitud WHERE co_proyecto=".$_REQUEST['co_proyecto']." ";
		
		 $r = $this->pdo->_query($query);

		
			 
		return $r;
	 }  
  
  public function insertar($registro)  {
 
		$registro = array_intersect_key($registro, $this->columArt);
		 
		$r = $this->pdo->_insert('i032t_proyecto_solicitud', $registro);
		//print_r($registro);

		if($r==1 ){
			return true;
		}
		else{
			return "Ha ocurrido un error al  insertar los datos del Documento."; //$oper1.$oper2;
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
		$oper2 = $this->pdo->_update('i032t_proyecto_solicitud', $registro, $condiciones);
		

		if($oper2){
			return true;
		}
		else{
			return "Ha ocurrido un error al intentar actualizar los datos del Documento."; //$oper1.$oper2;
		}
  } 

  public function eliminar($condiciones) {
  	
	$r = $this->pdo->_delete('i032t_proyecto_solicitud', $condiciones);
	
	return $r;
  } // end of member function eliminarDocumento
 

}
   
?>
