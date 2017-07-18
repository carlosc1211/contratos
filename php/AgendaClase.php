<?php
require_once 'MyPDO.php';


class agendaClase extends MyPDO {

	//acá los atributos de las tablas
	private  $columArt = array('co_agenda'=>'co_agenda','nu_agenda'=>'nu_agenda','co_comision'=>'co_comision','co_tipo_reunion'=>'co_tipo_reunion','co_trimestre'=>'co_trimestre','fe_agenda'=>'fe_agenda');
	
	public $columFiltros = array('nu_agenda'=>'nu_agenda','co_comision'=>'co_comision','co_tipo_reunion'=>'co_tipo_reunion', 'co_trimestre'=>'co_trimestre','fe_agenda'=>'fe_agenda','tx_indicador'=>'tx_indicador');
	
	public function mostrar($start='0', $limit='0', $sort = "", $dir = "ASC",$tx_indicador = ""){
  	
		global $filtros;
		 
		$query = "SELECT *
FROM (c002t_agenda a,c008t_usuario_comision uc,c006t_usuario u)

LEFT JOIN i004t_comision c ON a.co_comision=c.co_comision

LEFT JOIN i007t_tipo_reunion tr ON a.co_tipo_reunion=tr.co_tipo_reunion

LEFT JOIN i005t_trimestre t ON a.co_trimestre=t.co_trimestre

WHERE a.co_comision=uc.co_comision AND uc.co_usuario=u.co_usuario AND tx_indicador='$tx_indicador'".$this->filtrarQuery($filtros);			
					
		if ($sort != "") {
			$query .= " ORDER BY ".$sort." ".$dir;
		}
		else{
			$query .= " ORDER BY co_agenda ";
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
					count(*) as cuenta FROM c002t_agenda ".$this->filtrarQuery($filtros);
							
		 $r = $this->pdo->_query($contar);
	
			 
		return $r;
	  } 
	 
	 public function buscar($codigo) {
		
		//$query =  "SELECT * FROM c002t_agenda WHERE tx_usuario = '".$codigo."' ";
		$query = "SELECT *
FROM (c002t_agenda a,c008t_usuario_comision uc,c006t_usuario u)
LEFT JOIN i004t_comision c ON a.co_comision=c.co_comision
LEFT JOIN i007t_tipo_reunion tr ON a.co_tipo_reunion=tr.co_tipo_reunion
LEFT JOIN i005t_trimestre t ON a.co_trimestre=t.co_trimestre
WHERE a.co_comision=uc.co_comision AND uc.co_usuario=u.co_usuario AND tx_indicador='".$codigo."'";
		//echo $query;
		$r = $this->pdo->_query($query);
			
		return $r;
	 }  
  
  public function insertar($registro)  {
 
		$registro = array_intersect_key($registro, $this->columArt);
		$r = $this->pdo->_insert('c002t_agenda', $registro);
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
		$oper2 = $this->pdo->_update('c002t_agenda', $registro, $condiciones);
		

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
  	$r = $this->pdo->_delete('c003t_proceso_agenda', $condiciones); //elimina primero el registro de proceso_agenda y a la vez
	$r = $this->pdo->_delete('c002t_agenda', $condiciones);	        //elimina de segundo el registro de la agenda    
	return $r;
  } // end of member function eliminarDocumento
 

}
   
?>
  
