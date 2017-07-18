<?php
require_once 'MyPDO.php';
require_once 'FuncionesFecha.php';	

class CronogramaClase extends MyPDO {

	//acá los atributos de las tablas
	private  $columArt = array(	'co_proceso'=>'co_proceso',
								'co_modalidad_actividad'=>'co_modalidad_actividad', 
								'co_modalidad'=>'co_modalidad', 
								'co_actividad'=>'co_actividad', 
								'co_mecanismo_verif'=>'co_mecanismo_verif', 
								'in_orden'=>'in_orden', 
								'nu_cantidad_dias'=>'nu_cantidad_dias',
								'tx_modalidad'=>'tx_modalidad', 
								'tx_mecanismo_verif'=>'tx_mecanismo_verif',
								'tx_actividad'=>'tx_actividad', 
								'tx_abreviatura_actv'=>'tx_abreviatura_actv',
								'fe_programada'=>'fe_programada',
								'fe_planificada'=>'fe_planificada', 
								'fe_real'=>'fe_real',  
								'bo_alerta'=>'bo_alerta');
								
	public function insertar($registro){
		//print_r ($registro); 
		$registro = array_intersect_key($registro, $this->columArt);
		$r = $this->pdo->_insert('c012t_proceso_modalidad_actividad', $registro);
		
		if($r==1 ){
			return true;
		}
		else{
			return "Ha ocurrido un error al intentar insertar los datos del Documento."; //$oper1.$oper2;
		}
		return $r;  
	}	
							
/*
 * 
 * name: eliminar
 * @param $condiciones="Modalidad de contratacion"
 * @return Todas las actividades asociadas a la modalidad de contratacion recibida
 */
	public function eliminar($condiciones) {
		$r = $this->pdo->_delete('c012t_proceso_modalidad_actividad', $condiciones); //elimina primero el registro de proceso_agenda y a la vez
		return $r;
	  } 	
/*
 * 
 * name: mostrar
 * @param $co_modalidad="Modalidad de contratacion"
 * @return Todas las actividades asociadas a la modalidad de contratacion recibida
 */
	public function mostrar($co_proceso,$fe_recomendacion){
		$query="SELECT pma.co_proceso,pma.co_modalidad_actividad,tx_actividad,fe_programada,fe_planificada,fe_real
FROM c012t_proceso_modalidad_actividad pma,i025t_modalidad_actividad ma, i026t_actividad a
WHERE pma.co_modalidad_actividad=ma.co_modalidad_actividad 
AND ma.co_actividad=a.co_actividad
AND co_proceso='".$co_proceso."'
ORDER BY ma.in_orden,ma.co_modalidad_actividad";
		$r = $this->pdo->_query($query);
		if(!$r){
			$query="SELECT p.co_proceso,ma.co_modalidad_actividad,tx_actividad,NULL AS fe_programada,NULL AS fe_planificada,NULL AS fe_real,nu_cantidad_dias
FROM i025t_modalidad_actividad ma,i026t_actividad a,c004t_proceso p
WHERE ma.co_actividad=a.co_actividad AND ma.co_modalidad=p.co_modalidad AND ma.co_mecanismo_verif=p.co_mecanismo_verif
AND p.co_proceso='".$co_proceso."'
ORDER BY ma.in_orden,ma.co_modalidad_actividad";
			$r = $this->pdo->_query($query);
			$fe_temp=$fe_recomendacion;
			for($i=0;$r[$i];$i++){
				$fe_temp=AddWorkDays($fe_temp, $r[$i]['nu_cantidad_dias']);
				$r[$i]['fe_programada']=$fe_temp;
				$r[$i]['fe_planificada']=$fe_temp;
			}
		}		
		return $r;
	}					
}
