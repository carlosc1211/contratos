<?php
require_once 'MyPDO.php';

class PedidoClase extends MyPDO 
{
	//acá los atributos de las tablas
	private  $columArt = array(
								'co_pedido'=>'co_pedido', 
								'co_contrato'=>'co_contrato',
								'co_empresa'=>'co_empresa',
								'co_usuario'=>'co_usuario',
								'co_moneda'=>'co_moneda',
								'tx_monada'=>'tx_monada',
								'nu_pedido'=>'nu_pedido',
								'tx_detalles'=>'tx_detalles',
								'nu_monto_total'=>'nu_monto_total',
								'nu_monto_consumido_calculado'=>'nu_monto_consumido_calculado',
								'nu_monto_disponible_calculado'=>'nu_monto_disponible_calculado'
								
							  );
	public $columFiltros = array('co_pedido'=>'co_pedido','co_contrato'=>'co_contrato','co_empresa'=>'co_empresa','co_usuario'=>'co_usuario',
								'nu_pedido'=>'nu_pedido','tx_detalles'=>'tx_detalles','nu_monto_total'=>'nu_monto_total',
								'nu_monto_total_modificado_bs'=>'nu_monto_total_modificado_bs','nu_monto_total_modificado_dol'=>'nu_monto_total_modificado_dol',
								'nu_monto_total_modificado_euro'=>'nu_monto_total_modificado_euro','co_moneda'=>'co_moneda','tx_moneda'=>'tx_moneda');
	
	//ñ
	public function convertArrayKeysToUtf88($array1) 
	{
		$convertedArray1 = array();
		$convertedArray = array();
		foreach($array1 as $array) 
		{
			foreach($array as $key => $value) 
			{
			  if(!mb_check_encoding($value, 'UTF-8')) 
			  {$value = utf8_encode($value); }

			  $convertedArray[$key] = $value;

			}
			$convertedArray1[] = $convertedArray;
		}
		return $convertedArray1;
	}
	public function mostrar($start='0', $limit='0', $sort = "", $dir = "ASC", $co_contrato = "", $co_pedido = "")
	 {
  	
		global $filtros;
		$cadena="";
		if ($co_contrato!="")
			$cadena=" p.co_contrato=$co_contrato ";
		if ($co_pedido!="")
			$cadena=" p.co_pedido=$co_pedido ";
		$query = "SELECT  p.*, m.* ,c.nu_contrato_sap, 
					(SELECT SUM(nu_valuacion) FROM c006t_contrato_valuaciones cv WHERE p.co_pedido=cv.co_pedido)AS nu_monto_consumido_calculado,
					(nu_monto_total - (SELECT SUM(nu_valuacion) FROM c006t_contrato_valuaciones cv WHERE p.co_pedido=cv.co_pedido)) AS nu_monto_disponible_calculado
				 FROM i013t_pedido p
					LEFT JOIN c013t_moneda m ON m.co_moneda = p.co_moneda
					LEFT JOIN c011t_contrato c ON c.co_contrato = p.co_contrato
					WHERE $cadena";			
					
		if ($sort != "") {
			$query .= " ORDER BY ".$sort." ".$dir;
		}
		else{
			$query .= " ORDER BY co_pedido";
		}
		
		if ($limit != "") {
			$query .= ' LIMIT '.$start.' , '.$limit;
		}	
				//echo $query;
		 $r = $this->pdo->_query($query);
		$resultado=$this->convertArrayKeysToUtf88($r);
		return $resultado;
       }
       
	  public function contar()
	  {
		global $filtros;
				 
		 $contar = "SELECT
					count(*) as cuenta FROM i013t_pedido ".$this->filtrarQuery($filtros);
							
		 $r = $this->pdo->_query($contar);
				 
		return $r;
	  } 
	  
	  public function listar($campo,$tabla) 
	  {
		
		$query =  "SELECT DISTINCT $campo AS id, $tabla.* FROM $tabla ";
		//echo $query;
		$r = $this->pdo->_query($query);
			
		return $r;
	  }
	  public function insertar($registro)  
	  {
		$registro = array_intersect_key($registro, $this->columArt);
		$r = $this->pdo->_insert('i013t_pedido', $registro);
			if($r==1 )
				{
				 //echo "prueba";
				 return true;
				}
			 
			else
				{
				  return "Ha ocurrido un error al intentar insertar los datos del Documento."; //$oper1.$oper2;
				}
			return $r; 
      } 
       public function actualizar($registro, $condiciones) 
       {
			/*echo '<pre>';
				$result = mysql_query("SET NAMES 'utf8'", $conex);
				print_r($usrDocEdo);
				print_r($Resultados);
				print_r($condiciones);
				echo '</pre>';	
			*/
			$registro = array_intersect_key($registro, $this->columArt);
			$oper2 = $this->pdo->_update('i013t_pedido', $registro, $condiciones);
			//print_r($Resultados);
			//echo 'hola1';
			if($oper2)
				{	
					return true;
				}
			else{
				  return "Ha ocurrido un error al intentar actualizar los datos del Documento."; //$oper1.$oper2;
				}
      }
      public function eliminar($condiciones) 
      {
		//echo $condiciones;
		$r = $this->pdo->_delete('i013t_pedido', $condiciones);  
		return $r;
	  } // end of member function eliminarDocumento 	

}
	
?>
