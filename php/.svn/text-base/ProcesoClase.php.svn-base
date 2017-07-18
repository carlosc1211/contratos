<?php
require_once 'MyPDO.php';

class ProcesoClase extends MyPDO {

	//acá los atributos de las tablas
	private  $columArt = array(	'co_proceso'=>'co_proceso', 
								'nu_expediente'=>'nu_expediente', 
								'tx_descripcion'=>'tx_descripcion', 
								'co_organizacion'=>'co_organizacion', 
								'co_ubicacion'=>'co_ubicacion', 
								'fe_inicio'=>'fe_inicio',
								'co_modalidad'=>'co_modalidad', 
								'nu_solped'=>'nu_solped', 
								'co_regimen_lab'=>'co_regimen_lab', 
								'co_rango_cont'=>'co_rango_cont', 
								'nu_aporte'=>'nu_aporte',
								'nu_contribucion'=>'nu_contribucion', 
								'co_tipo_actividad'=>'co_tipo_actividad', 
								'tx_upc'=>'tx_upc', 
								'tx_rango_bsf_proceso'=>'tx_rango_bsf_proceso');
	
	public $columFiltros = array('fe_agenda'=>'nu_agenda', 'co_tipo_reunion'=>'co_trimestre', 'co_comision');
	
	public function mostrar($start='0', $limit='0', $sort = "", $dir = "ASC", $tx_usuario=""){
  	
		global $filtros;
		 
		$query = "SELECT *
					FROM (c001t_proceso p,c008t_usuario_comision uc,c006t_usuario us,
					(SELECT DISTINCT(co_comision),co_proceso 
					FROM c003t_proceso_agenda pa,c002t_agenda a
					WHERE a.co_agenda=pa.co_agenda) qc)
					LEFT JOIN i003t_organizacion o ON p.co_organizacion=o.co_organizacion
					LEFT JOIN i008t_tipo_actividad ta ON p.co_tipo_actividad=ta.co_tipo_actividad
					LEFT JOIN i009t_modalidad m ON p.co_modalidad=m.co_modalidad
					LEFT JOIN i012t_rango_cont rc ON p.co_rango_cont=rc.co_rango_cont
					LEFT JOIN i015t_regimen_lab rl ON p.co_regimen_lab=rl.co_regimen_lab
					LEFT JOIN i002t_ubicacion u ON p.co_ubicacion=u.co_ubicacion 
					WHERE p.co_proceso=qc.co_proceso AND uc.co_comision=qc.co_comision AND uc.co_usuario=us.co_usuario
					AND us.tx_indicador='$tx_usuario'
					 ".$this->filtrarQuery($filtros);			
					
		if ($sort != "") {
			$query .= " ORDER BY ".$sort." ".$dir;
		}
		else{
			$query .= " ORDER BY p.co_proceso ";
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
					count(*) as cuenta FROM c001t_proceso ".$this->filtrarQuery($filtros);
							
		 $r = $this->pdo->_query($contar);
	
			 
		return $r;
	  } 
	 
	 public function buscar($codigo) {
		
		$query =  "SELECT * FROM c001t_proceso WHERE nu_expediente = '".$codigo."' ";
		//echo $query;
		$r = $this->pdo->_query($query);
			
		return $r;
	 }  
  
  public function insertar($registro)  {
 
		$registro = array_intersect_key($registro, $this->columArt);
		$r = $this->pdo->_insert('c001t_proceso', $registro);
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
		$oper2 = $this->pdo->_update('c001t_proceso', $registro, $condiciones);
		

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
	$r = $this->pdo->_delete('c001t_proceso', $condiciones);
	
	return $r;
  } // end of member function eliminarDocumento
 

}
   
?>
