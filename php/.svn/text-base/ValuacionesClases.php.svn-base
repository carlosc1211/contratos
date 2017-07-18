<?php
require_once 'MyPDO.php';

class ValuacionesClases extends MyPDO 
{
	//acá los atributos de las tablas
	private  $columArt = array(
								'co_contrato'=>'co_contrato',
								'co_valuacion'=>'co_valuacion',
								'nu_valuacion'=>'nu_valuacion',
								'co_usuario'=>'co_usuario',
								'fe_periodoi'=>'fe_periodoi',
								'fe_periodof'=>'fe_periodof',
								'fe_recibido'=>'fe_recibido',
								'nu_monto_valuacion'=>'nu_monto_valuacion',
								'fe_aprobacion'=>'fe_aprobacion',
								'fe_entrega'=>'fe_entrega',
								'tx_detalle_serv'=>'tx_detalle_serv',
								'nu_monto_consumido_calculado'=>'nu_monto_consumido_calculado',
								'nu_monto_disponible_calculado'=>'nu_monto_disponible_calculado',
								'co_pedido'=>'co_pedido',
								'nu_pedido'=>'nu_pedido',
								'co_moneda'=>'co_moneda',
								'tx_moneda'=>'tx_moneda'
								
							  );
	/*public $columFiltros = array('co_contrato'=>'co_contrato','co_valuacion'=>'co_valuacion','nu_valuacion'=>'nu_valuacion',
								 'co_usuario'=>'co_usuario','fe_periodoi'=>'fe_periodoi','fe_periodof'=>'fe_periodof',
								 'nu_monto_valuacion'=>'nu_monto_valuacion','fe_recibido'=>'fe_recibido','fe_aprobacion'=>'fe_aprobacion',
								 'fe_entrega'=>'fe_entrega','tx_detalle_serv'=>'tx_detalle_serv','co_pedido'=>'co_pedido',
								 'nu_pedido'=>'nu_pedido','co_moneda'=>'co_moneda','tx_moneda'=>'tx_moneda_v');*/
	
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
	public function mostrar($start='0', $limit='0', $sort = "", $dir = "ASC",$co_contrato, $co_pedido)
	{
	 
		//global $filtros;
		$cadena="WHERE p.co_contrato=$co_contrato";
		if ($co_pedido!='')
			$cadena.=" AND cv.co_pedido=$co_pedido";
		$query = "SELECT cv.*, m.*, p.*,c.co_contrato,
					(SELECT SUM(nu_valuacion) FROM c006t_contrato_valuaciones cv WHERE p.co_pedido=cv.co_pedido)AS nu_monto_consumido_calculado,
					(nu_monto_total - (SELECT SUM(nu_valuacion) FROM c006t_contrato_valuaciones cv WHERE p.co_pedido=cv.co_pedido)) AS nu_monto_disponible_calculado
					
					FROM c006t_contrato_valuaciones cv
					
						LEFT JOIN i013t_pedido p ON p.co_pedido= cv.co_pedido
						LEFT JOIN c011t_contrato c ON c.co_contrato= p.co_contrato
						LEFT JOIN c013t_moneda m ON m.co_moneda= p.co_moneda $cadena";			
					
		if ($sort != "") {
			$query .= " ORDER BY ".$sort." ".$dir;
		}
		else{
			$query .= " ORDER BY cv.co_valuacion";
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
					count(*) as cuenta FROM c006t_contrato_valuaciones".$this->filtrarQuery($filtros);
							
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
	  public function buscar($codigo) {
		
		$query =  "SELECT *, p.nu_pedido FROM c006t_contrato_valuaciones cv, i013t_pedido p
						WHERE cv.co_pedido= p.co_pedido AND cv.co_pedido='".$codigo."' ";
		//echo $query;
		$r = $this->pdo->_query($query);
			
		return $r;
	 }  
	  public function insertar($registro)  
	  {
		$registro = array_intersect_key($registro, $this->columArt);
		$r = $this->pdo->_insert('c006t_contrato_valuaciones', $registro);
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
		
			$oper2 = $this->pdo->_update('c006t_contrato_valuaciones', $registro, $condiciones);
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
		$r = $this->pdo->_delete('c006t_contrato_valuaciones', $condiciones);  
		return $r;
	  } // end of member function eliminarDocumento 	
						  
}
	
?>
