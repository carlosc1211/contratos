<?php
require_once 'MyPDO.php';


class UsuariosClass extends MyPDO {

	//acá los atributos de las tablas
	private  $columArt = array(	'co_usuario'=>'co_usuario', 
								'tx_indicador'=>'tx_indicador', 
								'tx_nombre'=>'tx_nombre', 
								'tx_apellido'=>'tx_apellido');
	
	public $columFiltros = array('co_usuario'=>'co_usuario', 
								'tx_indicador'=>'tx_indicador', 
								'tx_nombre'=>'tx_nombre', 
								'tx_apellido'=>'tx_apellido');
	
	public function mostrar($start='0', $limit='0', $sort = "", $dir = "ASC"){
  	
		global $filtros;
		 
		$query = "SELECT * FROM c011t_usuarios ".$this->filtrarQuery($filtros);			
					
		if ($sort != "") {
			$query .= " ORDER BY ".$sort." ".$dir;
		}
		else{
			$query .= " ORDER BY ID ";
		}
		
		if ($limit != "") {
			$query .= 'LIMIT '.$start.' , '.$limit;
		}	
				
		 $r = $this->pdo->_query($query);

		
			 
		return $r;
  } 

	public function contar(){
		global $filtros;
				 
		 $contar = "SELECT
					count(*) as cuenta FROM ilustraciones ".$this->filtrarQuery($filtros);
							
		 $r = $this->pdo->_query($contar);
	
			 
		return $r;
	  } 
	 
	 public function buscar($codigo) {
		
		$query =  "SELECT * WHERE ID = '".$codigo."' ";
		
		$r = $this->pdo->_query($query);
			
		return $r;
	 }  
  
  public function insertar($registro)  {
 
		$registro = array_intersect_key($registro, $this->columArt);
		 

		$r = $this->pdo->_insert('ilustraciones', $registro);

		if($r==1 ){
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
		$oper2 = $this->pdo->_update('ilustraciones', $columnas, $condiciones);
		

		if($oper2){
			return true;
		}
		else{
			return "Ha ocurrido un error al intentar actualizar los datos del Documento."; //$oper1.$oper2;
		}
  } 

  public function eliminar($condiciones) {
  	
	$r = $this->pdo->_delete('ilustraciones', $condiciones);
	
	return $r;
  } // end of member function eliminarDocumento
 
 
   public function guardarSalAGgd($datos) {
 
	$datos = str_replace('\"','"',$datos);
	$data = json_decode($datos, true);
	$data = array_filter($data, "vacio");
		
	foreach($data as $record) {
		$guardarSalAGgd = array_intersect_key($record, $this->columDoc);
	    
	    $usrDocEdo = array_intersect_key($record, $this->columUsrDocEdo);
		//$columnas = array_intersect_key($columnas, $this->columDoc);
		
		//print_r($guardarSalAGgd);
		//print_r($usrDocEdo);
		//foreach($record as $field => $value)
		//{
			
		$usrDocEdo['fe_ho_cambio']="'+NOW()+'";
		
	
		$oper2 = $this->pdo->_update('c001t_documento',array('fe_ho_sal_a_ggd'=>$guardarSalAGgd['fe_ho_sal_a_ggd']),array('co_control_doc'=>$guardarSalAGgd['co_control_doc']));
		
		$rr = $this->pdo->_insert('c006t_usr_doc_estado', $usrDocEdo);

	}
  
	//$value = utf8_decode($value);
	//$oper2=1;
	if ($oper2==1)
		{
		$resultado="{success:true, msj:'Documentos enviados exitosamente'}";
		}
	else 
		{
		$resultado="{success:false, msj:'Lo sentimos, ha ocurrido un error, no se ha podido enviar documentos'}";
		}
	return $resultado;  
	
  }// end of member function guardarSalAGgd
}
   
?>
