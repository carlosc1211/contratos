<?php
require_once 'MyPDO.php';


class UsuarioClase extends MyPDO {

	//acá los atributos de las tablas
	private  $columArt = array('co_usuario'=>'co_usuario', 'tx_indicador'=>'tx_indicador','tx_usuario'=>'tx_usuario',
								'co_ubicacion'=>'co_ubicacion','co_organizacion'=>'co_organizacion','co_supervisor'=>'co_supervisor',
								'co_rol'=>'co_rol', 'bo_activo'=>'bo_activo');
	
	public $columFiltros = array('tx_indicador'=>'tx_indicador', 'tx_usuario'=>'tx_usuario','co_rol'=>'co_rol', 'bo_activo'=>'bo_activo');
	
	public function mostrar($start='0', $limit='0', $sort = "", $dir = "ASC"){

		global $filtros;
                if($_SESSION['co_rol']!=0){
                    $condicion=" AND  u.co_ubicacion=$_SESSION[co_ubicacion] AND u.co_organizacion=$_SESSION[co_organizacion]";                    
                }
                
		$query = "SELECT u.co_usuario,u.tx_indicador,u.tx_usuario,
					u.co_ubicacion,ubi.tx_ubicacion,
					u.co_organizacion,o.tx_organizacion,
					u.co_supervisor,sup.tx_indicador AS tx_supervisor,
					u.co_rol,ru.tx_rol
					FROM (c001t_usuario u, i001t_rol ru,i002t_ubicacion ubi,i005t_organizacion o)
					LEFT JOIN c001t_usuario sup ON u.co_supervisor=sup.co_usuario
					WHERE ru.co_rol = u.co_rol  
					AND u.co_ubicacion=ubi.co_ubicacion 
					AND u.co_organizacion=o.co_organizacion 
					AND u.bo_activo = 1 $condicion ".$this->filtrarQuery($filtros);			
					
		if ($sort != "") {
			$query .= " ORDER BY ".$sort." ".$dir;
		}
		else{
			$query .= " ORDER BY ubi.tx_ubicacion,o.tx_organizacion,u.tx_indicador ";
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
					count(*) as cuenta FROM c001t_usuario ".$this->filtrarQuery($filtros);
							
		 $r = $this->pdo->_query($contar);
	
			 
		return $r;
	  } 
	 
	 public function buscar($codigo) {
		
		$query =  "SELECT u.*, s.tx_usuario AS tx_supervisor,tx_rol
					FROM c001t_usuario u
					LEFT JOIN  c001t_usuario s ON u.co_supervisor=s.co_usuario
					LEFT JOIN i001t_rol r ON u.co_rol=r.co_rol
					WHERE  u.tx_indicador = '".$codigo."' ";
		//echo $query;
		$r = $this->pdo->_query($query);
		//print_r($r);	
		return $r;
	 }  
  
  public function insertar($registro)  {
 
		//$query =  "SELECT * FROM i001t_rol WHERE tx_rol = '".$registro['tx_rol']."' ";
		//echo $query;
		//$r = $this->pdo->_query($query);
		//$registro['co_rol'] = $r[0]['co_rol'];
		$registro['bo_activo']=1;
		$registro = array_intersect_key($registro, $this->columArt);
		 //print_r ($registro);

		 $r = $this->pdo->_insert('c001t_usuario', $registro);

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
		$oper2 = $this->pdo->_update('c001t_usuario', $registro, $condiciones);
		

		if($oper2){
			return true;
		}
		else{
			return "Ha ocurrido un error al intentar actualizar los datos del Documento."; //$oper1.$oper2;
		}
  } 

  public function eliminar($condiciones) {
  	
	$r = $this->pdo->_delete('c001t_usuario', $condiciones);
	
	return $r;
  } // end of member function eliminarDocumento
 

}
   
?>
