<?php
require_once 'MyPDO.php';

class AdministracionClase extends MyPDO 
{
	//acá los atributos de las tablas
	private  $columArt = array(
								'co_contrato'=>'co_contrato', 
								'co_proceso'=>'co_proceso',
								'nu_contrato_sap'=>'nu_contrato_sapp',
								'co_usuario'=>'co_usuario',
								'co_empresa'=>'co_empresa',
								'nu_solped_contrato'=>'nu_solped_contrato',
								'nu_expediente_contrato'=>'nu_expediente_contrato',
								'tx_observacion_empresa'=>'tx_observacion',
								'monto_modificado'=>'monto_modificado',
								'nu_monto_disponible_calculado'=>'nu_monto_disponible_calculado',
								'nu_nuevo_plazo'=>'nu_nuevo_plazo',
								'nu_nuevo_plazo_modif'=>'nu_nuevo_plazo_modif',
								'nu_contrato_comision'=>'nu_contrato_comision',	
								'fe_carta_preliminar'=>'fe_carta_preliminar',
								'fe_firma_contrato'=>'fe_firma_contrato',
								'co_cierre_procedimiento'=>'co_cierre_procedimiento',
								'nu_monto_total_adjudicado'=>'nu_monto_total_adjudicado',
								'nu_monto_total_adjudicado_bsf'=>'nu_monto_total_adjudicado_bs',
								'nu_monto_total_adjudicado_dol'=>'nu_monto_total_adjudicado_dol',
								'nu_monto_total_adjudicado_euro'=>'nu_monto_total_adjudicado_euro',
								'fe_inicio'=>'fe_inicio',
								'fe_culminacion'=>'fe_culminacion',
								'co_supervisor'=>'co_supervisor',
								'fe_estimada'=>'fe_estimada',
								'nu_ejecucion'=>'nu_ejecucion',
								'nu_monto_adjudicado_equivalente'=>'nu_monto_adjudicado_equivalente',
								'nu_aporte_compromiso_contrato'=>'nu_aporte_compromiso_contrato',
								'nu_upc'=>'nu_upcc',
								'fe_prorroga_inicio'=>'fe_prorroga_inicio',
								'co_ubicacion'=>'co_organizacion_adnim',
								'co_ubicacion_usuario'=>'co_ubicacion_usuario',
								'co_organizacion_usuario'=>'co_organizacion_usuario',
								'co_organizacion'=>'co_organizacion'
								
							  );

	public function convertArrayKeysToUtf88($array1){
		$convertedArray1 = array();
		$convertedArray = array();
		foreach($array1 as $array){
		foreach($array as $key => $value){
			
			  if(!mb_check_encoding($value, 'UTF-8')){
				  $value = utf8_encode($value); 
				  }

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
				$ubicacion=" c.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND c.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_Por_Asignar="c.co_usuario IS NULL AND c.co_supervisor IS NULL";
				$usuario_En_Proceso=" (c.co_usuario IS NOT NULL OR c.co_supervisor IS NOT NULL) ";
				$usuario_Cerrado="c.co_usuario is not null AND c.co_supervisor is not null AND mo.co_tipo_modificacion IS NOT NULL";
			break;
			case 8://Supervisor de Administracion
				$ubicacion=" c.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND c.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_Por_Asignar="c.co_usuario IS NULL AND c.co_supervisor=".$_SESSION['co_usuario']."";
				$usuario_En_Proceso="c.co_usuario is not null AND c.co_supervisor=".$_SESSION['co_usuario']."";
				$usuario_Cerrado="c.co_usuario is not null AND c.co_supervisor=".$_SESSION['co_usuario']." AND mo.co_tipo_modificacion IS NOT NULL";
			break;
			case 9://Analista de Administracion
				$ubicacion=" c.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND c.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_Por_Asignar="c.co_usuario=".$_SESSION['co_usuario']." AND c.fe_inicio IS NULL";
				$usuario_En_Proceso="c.co_usuario=".$_SESSION['co_usuario']." AND c.fe_inicio IS NOT NULL  AND mo.co_tipo_modificacion IS NULL";
				$usuario_Cerrado="c.co_usuario=".$_SESSION['co_usuario']." AND mo.co_tipo_modificacion IS NOT NULL";
			break;
			case 11://Gerente de Region
				$ubicacion=" py.co_ubicacion_usuario=".$_SESSION['co_ubicacion']." AND py.co_organizacion_usuario=".$_SESSION['co_organizacion']."  ";
				$usuario_porcontratar="p.co_usuario IS NULL OR p.co_supervisor IS NULL";
				$usuario_proceso="p.co_usuario is not null AND p.co_supervisor is not null";
				$usuario_adjudicados="p.co_usuario is not null AND p.co_supervisor is not null";
			break;
		}
		
		switch($_REQUEST['tab']){
			case 'Por_Asignar': 
				$condicion="where c.co_cierre_procedimiento = 1 AND $usuario_Por_Asignar AND $ubicacion ";
			break;
			case 'En_Proceso': 
				$condicion="where c.co_cierre_procedimiento = 1 AND $usuario_En_Proceso AND $ubicacion ";
			break;
			case 'Cerrado': 
				$condicion="where c.co_cierre_procedimiento = 1 AND $usuario_Cerrado AND $ubicacion ";
			break;
		}
	
  	
		global $filtros;
		 
		$query = "SELECT c.*,o.*,e.*,te.*,pr.*,proy.*,u.*, ep.nu_telefonico,ep.nu_telefonico_opcional, tm.co_tipo_modificacion, tv.co_tipo_variacion, mo.fe_valor,
		
					(SELECT co_ubicacion FROM i002t_ubicacion u_div WHERE u_div.co_ubicacion=ubi.co_padre) AS co_divisionn,
					(SELECT tx_ubicacion FROM i002t_ubicacion u_div WHERE u_div.co_ubicacion=ubi.co_padre) AS tx_division,
					(SELECT co_padre FROM i002t_ubicacion u_div WHERE u_div.co_ubicacion=ubi.co_padre) AS co_division_padre,
					(SELECT co_ubicacion FROM i002t_ubicacion u_dir WHERE u_dir.co_ubicacion=co_division_padre) AS co_direccion,
					(SELECT tx_ubicacion FROM i002t_ubicacion u_dir WHERE u_dir.co_ubicacion=co_division_padre) AS tx_direccion,
					(SELECT co_padre FROM i002t_ubicacion u_dir WHERE u_dir.co_ubicacion=co_division_padre) AS co_direccion_padre,
					(SELECT co_ubicacion FROM i002t_ubicacion u_fil WHERE u_fil.co_ubicacion=co_direccion_padre) AS co_filiall,
					(SELECT tx_ubicacion FROM i002t_ubicacion u_fil WHERE u_fil.co_ubicacion=co_direccion_padre) AS tx_filial,
					(SELECT co_padre FROM i002t_ubicacion u_fil WHERE u_fil.co_ubicacion=co_direccion_padre) AS co_filial_padre,
					c.co_ubicacion AS co_distritoo, ubi.tx_ubicacion AS tx_distrito,
					c.co_ubicacion, CONCAT(tx_ubicacion) AS tx_ubicacion_final,
					(SELECT tx_usuario FROM c001t_usuario u WHERE u.co_usuario=c.co_supervisor) AS tx_supervisor						
					
		FROM c011t_contrato c
				 
						LEFT JOIN c002t_empresa e ON c.co_empresa= e.co_empresa
						LEFT JOIN i024t_tipo_empresa te ON e.co_tipo_empresa=te.co_tipo_empresa
						LEFT JOIN c004t_proceso pr ON pr.co_proceso=c.co_proceso
						LEFT JOIN c003t_proyecto proy ON proy.co_proyecto=pr.co_proyecto
						LEFT JOIN i002t_ubicacion AS ubi ON c.co_ubicacion= ubi.co_ubicacion
						LEFT JOIN i036t_empresa_proceso ep ON e.co_empresa=ep.co_empresa
						LEFT JOIN c001t_usuario u ON u.co_usuario=c.co_usuario
						LEFT JOIN i005t_organizacion o ON  u.co_organizacion=o.co_organizacion
						LEFT JOIN c007t_modificaciones mo ON mo.co_contrato=c.co_contrato AND co_tipo_modificacion=20 AND nu_modificacion=1 AND fe_valor
						LEFT JOIN i015t_tipo_modificacion tm ON tm.co_tipo_modificacion=mo.co_tipo_modificacion
						LEFT JOIN i029t_tipo_variacion tv ON tv.co_tipo_variacion=tm.co_tipo_variacion
						
		$condicion";			
					
		if ($sort != "") {
			$query .= " ORDER BY ".$sort." ".$dir;
		}
		else{
			$query .= " ORDER BY co_contrato";
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
					count(*) as cuenta FROM c011t_contrato ".$this->filtrarQuery($filtros);
							
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
		$r = $this->pdo->_insertLastId('c011t_contrato', $registro);
			/*if($r==1 )
				{
				 //echo "prueba";
				 return true;
				}
			 
			else
				{
				  return "Ha ocurrido un error al intentar insertar los datos del Documento."; //$oper1.$oper2;
				}*/
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
			$oper2 = $this->pdo->_update('c011t_contrato', $registro, $condiciones);
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
		$r = $this->pdo->_delete('c011t_contrato', $condiciones);  
		return $r;
	  } // end of member function eliminarDocumento 	

}
	
?>
