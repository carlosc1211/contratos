<?php
require_once 'MyPDO.php';

class ModificacionesClases extends MyPDO 
{
	//acá los atributos de las tablas
	private  $columArt = array(
								'co_contrato'=>'co_contrato',
								'co_tipo_modificacion'=>'co_tipo_modificacion',
								'nu_modificacion'=>'nu_modificacion',								
								'tx_descripcion_mod'=>'tx_descripcion_mod',
								'co_usuario'=>'co_usuario',
								'nu_valor'=>'nu_valor',
								'fe_valor'=>'fe_valor',
								'fe_registro'=>'fe_registro',
								'co_moneda'=>'co_monedaaaaa',
								'tx_tipo_modificacion'=>'tx_tipo_modificacion',
								'co_tipo_variacion'=>'co_tipo_variacion',
								'tx_tipo_variacion'=>'tx_tipo_variacion'
							
							  );
	public $columFiltros = array('co_tipo_variacion'=>'co_tipo_variacion','tx_tipo_variacion'=>'tx_tipo_variacion','co_tipo_modificacion'=>'co_tipo_modificacion','tx_tipo_modificacion'=>'tx_tipo_modificacion');

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
	public function mostrar($start='0', $limit='0', $sort = "", $dir = "ASC",$co_contrato, $tipo_variacion='')
	 {
		if ($tipo_variacion!='')
			$cadena="AND tm.co_tipo_variacion IN ($tipo_variacion)";
		$query = "SELECT m.* , tv.*, tm.*,mo.*
					FROM c007t_modificaciones m
						LEFT JOIN i015t_tipo_modificacion tm ON m.co_tipo_modificacion= tm.co_tipo_modificacion 
						LEFT JOIN c011t_contrato c ON c.co_contrato= m.co_contrato 
						LEFT JOIN i029t_tipo_variacion tv ON tv.co_tipo_variacion= tm.co_tipo_variacion
						LEFT JOIN c013t_moneda mo ON m.co_moneda= mo.co_moneda 
					WHERE  m.co_contrato=$co_contrato $cadena";			
					
		if ($sort != "") {
			$query .= " ORDER BY ".$sort." ".$dir;
		}
		else{
			$query .= " ORDER BY m.nu_modificacion";
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
					count(*) as cuenta FROM c007t_modificaciones m 
					WHERE m.co_tipo_variacion='".$tipo_variacion."' AND m.co_contrato='".$co_contrato."' ".$this->filtrarQuery($_SESSION["filtros"]);
							
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
		$r = $this->pdo->_insert('c007t_modificaciones', $registro);
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
			//$registro = array_intersect_key($registro, $this->columArt);
			$oper2 = $this->pdo->_update('c007t_modificaciones', $registro, $condiciones);
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
		$r = $this->pdo->_delete('c007t_modificaciones', $condiciones);  
		return $r;
	  } // end of member function eliminarDocumento 	

}
	
?>
