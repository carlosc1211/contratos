<?php
session_start();
require_once 'MyPDO.php';


class RecobroClase extends MyPDO {

	//acá los atributos de las tablas
	private  $columArt = array( 'nu_porc_recobro'=>'nu_porc_recobro',
								'nu_recobro'=>'nu_recobro',
								'nu_monto_pagado_recobro'=>'nu_monto_pagado_recobro', 
								'nu_monto_pendiente_recobro'=>'nu_monto_pendiente_recobro',
								'nu_monto_recobrado'=>'nu_monto_recobrado', 
								'co_moneda'=>'co_moneda',
								'tx_moneda'=>'tx_moneda',
								'co_recobro'=>'co_recobro',
								'co_tipo_recobro'=>'co_tipo_recobro',
								'co_contrato'=>'co_contrato',
								'co_tipo_recobro'=>'co_tipo_recobro',
								'tx_tipo_recobro'=>'tx_tipo_recobro',
								'nu_monto_recobro_calculado'=>'nu_monto_recobro_calculado',
								'nu_monto_disponible_calculador'=>'nu_monto_disponible_calculador'
								
							 );
	
	//public $columFiltros = array('co_proceso'=>'co_proceso','co_unidades'=>'co_unidades', 'fe_entrega'=>'fe_entrega','fe_recibido'=>'fe_recibido', 'tx_detalle'=>'tx_detalle','co_usuario'=>'co_usuario');
	
	public function mostrar($start='0', $limit='0', $sort = "", $dir = "ASC", $co_contrato,$tipo_recobro){

		//global $filtros;
		 //print_r($_SESSION["filtros"]);
		$cadena="WHERE c.co_contrato=$co_contrato";
		if ($tipo_recobro!='')
		 $cadena.=" AND r.co_tipo_recobro=$tipo_recobro";
		
		$query = "SELECT r.*, m.*, tr.*,c.co_contrato,
					(SELECT SUM(nu_monto_recobrado) FROM c015t_recobro r WHERE tr.co_tipo_recobro=r.co_tipo_recobro AND c.co_contrato=r.co_contrato)AS nu_monto_recobro_calculado,
					(nu_monto_recobrado - (SELECT SUM(nu_monto_pagado_recobro) FROM c015t_recobro r WHERE tr.co_tipo_recobro=r.co_tipo_recobro AND c.co_contrato=r.co_contrato)) AS nu_monto_disponible_calculador
								
					FROM c015t_recobro r
					
					
						LEFT JOIN c011t_contrato c ON c.co_contrato= r.co_contrato
						LEFT JOIN c013t_moneda m ON m.co_moneda= r.co_moneda
						LEFT JOIN i009t_tipo_recobro tr ON tr.co_tipo_recobro=r.co_tipo_recobro $cadena";
									
					
		if ($sort != "") {
			$query .= " ORDER BY ".$sort." ".$dir;
		}
		else{
			$query .= " ORDER BY co_recobro ";
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
					count(*) as cuenta FROM c015t_recobro re

					WHERE re.co_tipo_recobro='".$tipo_recobro."' AND re.co_contrato='".$co_contrato."' ".$this->filtrarQuery($_SESSION["filtros"]);
							
		 $r = $this->pdo->_query($contar);
	
		//echo $contar;
		//print_r($r);
		return $r;
	  }
	   public function listar($campo,$tabla) 
	  {
		
		$query =  "SELECT DISTINCT $campo AS id, $tabla.* FROM $tabla ";
		//echo $query;
		$r = $this->pdo->_query($query);
			
		return $r;
	  } 
	 
	 public function buscar($codigo) {
		
		$query =  "SELECT * FROM c015t_recobro WHERE co_tipo_recobro = '".$codigo."' ";
		//echo $query;
		$r = $this->pdo->_query($query);
			
		return $r;
	 }  
  
  public function insertar($registro)  {
 
		$registro = array_intersect_key($registro, $this->columArt);
		$r = $this->pdo->_insert('c015t_recobro', $registro);
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
		$oper2 = $this->pdo->_update('c015t_recobro', $registro, $condiciones);
		if($oper2){
			return true;
		}
		else{
			return "Ha ocurrido un error al intentar actualizar los datos del Documento."; //$oper1.$oper2;
		}
  } 

  public function eliminar($condiciones) {
  	
	$r = $this->pdo->_delete('c015t_recobro', $condiciones);
	
	return $r;
  } // end of member function eliminarDocumento
 

}
   
?>
