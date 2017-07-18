<?php
/*require_once 'MyPDO.php';

class tablaClase extends MyPDO{

	//acá los atributos de las tablas
private  $columArt = array(
							'tx_tablas'=>'tx_tablas',
							'tx_desc_tablas'=>'tx_desc_tablas'
							);
	
	//public $columFiltros = array( 'tx_rol'=>'tx_rol');
public function convertArrayKeysToUtf88($array1) {
    $convertedArray1 = array();
    $convertedArray = array();
    foreach($array1 as $array) {
    foreach($array as $key => $value) {
      if(!mb_check_encoding($value, 'UTF-8')) 
      {$value = utf8_encode($value); }

      $convertedArray[$key] = $value;

    }
    $convertedArray1[] = $convertedArray;
}
    return $convertedArray1;
  }
	
public function mostrar($start='0', $limit='0', $sort = "", $dir = "ASC"){

switch($_SESSION['co_rol']){
			
			case 0://Administrador del Sistema
				$ubicacion="0=0";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
			case 12://Administrador del Area
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
			case 1://Gerente de Area
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
			case 2://Lider de Planificacion
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
			case 3://Supervisor de Planificacion
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
			case 10://Analista de Planificacion
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
			case 4://Lider de Contratacion
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
			case 5://Supervisor de Contratacion
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario IS NULL AND p.co_supervisor=".$_SESSION['co_usuario']."";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor=".$_SESSION['co_usuario']."";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor=".$_SESSION['co_usuario']."";
			break;
			case 6://Analista de Contratacion
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario=".$_SESSION['co_usuario']." AND p.nu_solped IS NULL";
				$usuario_proceso="p.co_usuario=".$_SESSION['co_usuario']." AND p.nu_solped IS NOT NULL";
				$usuario_adjudicados="p.co_usuario=".$_SESSION['co_usuario']." AND p.nu_solped IS NOT NULL";
			break;
			case 7://Lider de Administracion
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
			case 8://Supervisor de Administracion
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
			case 9://Analista de Administracion
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
			case 11://Gerente de Region
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
		}
 	
		global $filtros;
		 
		$query = "SELECT * 
					FROM i020_tablas ".$this->filtrarQuery($filtros);			
					
		if ($sort != "") {
			$query .= " ORDER BY ".$sort." ".$dir;
		}
		else{
			$query .= " ORDER BY tx_tablas";
		}
		
		if ($limit != "") {
			$query .= ' LIMIT '.$start.' , '.$limit;
		}	
			//echo	$query;
		 $r = $this->pdo->_query($query);
			 
		return $r;
}

public function contar(){
	
		global $filtros;
				 
		$contar = "SELECT count(*) as cuenta FROM i020_tablas".$this->filtrarQuery($filtros);
							
		 $r = $this->pdo->_query($contar);
	
			 
		return $r;
	  }

public function listar($campo,$tabla) {
		
		$query =  "SELECT DISTINCT $campo AS id, $tabla.* FROM $tabla ";
		//echo $query;
		$r = $this->pdo->_query($query);
		return $r;
	 }  
	 
public function buscar($codigo) {
		
		$query =  "SELECT * FROM i020_tablas WHERE tx_tablas = '".$codigo."' ";
		//echo $query;
		$r = $this->pdo->_query($query);
			
		return $r;
	 }  
  
public function insertar($registro)  {
 
		$registro = array_intersect_key($registro, $this->columArt);
		$r = $this->pdo->_insert('i020_tablas', $registro);

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
/*		$oper2 = $this->pdo->_update('i020_tablas ', $registro, $condiciones);
		

		if($oper2){
			return true;
		}
		else{
			return "Ha ocurrido un error al intentar actualizar los datos del Documento."; //$oper1.$oper2;
		}
  } 

public function eliminar($condiciones) {
  	
	$r = $this->pdo->_delete('i020_tablas', $condiciones);
	
	return $r;
  } // end of member function eliminarDocumento
 

}
   
?>
