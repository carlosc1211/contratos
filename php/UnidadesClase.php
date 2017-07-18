<?php
session_start();
require_once 'MyPDO.php';


class UnidadesClase extends MyPDO {

	//acá los atributos de las tablas
	private  $columArt = array('id_unidades'=>'id_unidades','co_contrato'=>'co_contrato','co_proceso'=>'co_proceso','co_unidades'=>'co_unidades', 'fe_entrega'=>'fe_entrega','fe_recibido'=>'fe_recibido', 'tx_detalle'=>'tx_detalle','co_usuario'=>'co_usuario','nu_incremento'=>'nu_incremento','tx_unidades'=>'tx_unidades');
	
	public $columFiltros = array('co_proceso'=>'co_proceso','co_unidades'=>'co_unidades', 'fe_entrega'=>'fe_entrega','fe_recibido'=>'fe_recibido', 'tx_detalle'=>'tx_detalle','co_usuario'=>'co_usuario','tx_unidades'=>'tx_unidades');
	
	public function mostrar($start='0', $limit='0', $sort = "", $dir = "ASC", $co_proceso="", $co_contrato=""){

		//global $filtros;
		 //print_r($_SESSION["filtros"]);
		$cadena="";
		if ($co_contrato!="")
			$cadena="AND cu.co_contrato=$co_contrato ";
		if ($co_proceso!="")
			$cadena.="AND cu.co_proceso=$co_proceso ";
		$query = "SELECT *, uni.co_unidades, uni.tx_unidades
					FROM c009t_control_unidades cu
						LEFT JOIN i014t_unidades AS uni ON cu.co_unidades= uni.co_unidades 
				
				WHERE  0=0 $cadena ".$this->filtrarQuery($_SESSION["filtros"]);				
					
		if ($sort != "") {
			$query .= " ORDER BY ".$sort." ".$dir;
		}
		else{
			$query .= " ORDER BY id_unidades DESC  ";
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
		//global $filtros;
				 
		 $contar = "SELECT
					count(*) as cuenta FROM c009t_control_unidades cu

WHERE cu.co_proceso='".$co_proceso."' ".$this->filtrarQuery($_SESSION["filtros"]);
							
		 $r = $this->pdo->_query($contar);
	
		//echo $contar;
		//print_r($r);
		return $r;
	  } 
	 
	 public function buscar($codigo) {
		
		$query =  "SELECT * FROM c009t_control_unidades WHERE tx_unidades = '".$codigo."' ";
		//echo $query;
		$r = $this->pdo->_query($query);
			
		return $r;
	 }  
  
  public function insertar($registro)  {
 
		$registro = array_intersect_key($registro, $this->columArt);
		 

		$r = $this->pdo->_insert('c009t_control_unidades', $registro);

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
		$oper2 = $this->pdo->_update('c009t_control_unidades', $registro, $condiciones);
		

		if($oper2){
			return true;
		}
		else{
			return "Ha ocurrido un error al intentar actualizar los datos del Documento."; //$oper1.$oper2;
		}
  } 

  public function eliminar($condiciones) {
  	
	$r = $this->pdo->_delete('c009t_control_unidades', $condiciones);
	
	return $r;
  } // end of member function eliminarDocumento
 

}
   
?>
