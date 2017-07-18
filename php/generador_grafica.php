<?php
session_start();
include('../config/conf.php');
include_once('../php/FuncionesFecha.php');
$base_grafica = $_REQUEST['base'];	
$tipo_grafica = $_REQUEST['tipo'];
$co_unidad_reporte = $_REQUEST['localidad'];

if ($_REQUEST['estado'] != '') {
    $estado_grafica = $_REQUEST['estado'];
} 
else {
    $estado_grafica = 1;
}
$fe_ini= explode('/', $_REQUEST['fe_ini']);
$anio1= $fe_ini[2];
$fe_ini= $fe_ini[2] . "-" . $fe_ini[1] . "-" . $fe_ini[0];

$fe_fin= explode('/', $_REQUEST['fe_fin']);
$anio2= $fe_fin[2];
$fe_fin= $fe_fin[2] . "-" . $fe_fin[1] . "-" . $fe_fin[0];

$conexion = mysql_connect("localhost", "root", "");
mysql_select_db("contratos_test", $conexion);

if ($tipo_grafica == 1){
    $json = '';
    if ($localidad!= '1'){
		if (calculoDiasHab($fe_ini, $fe_fin) <= 15){
            $result = mysql_query("SELECT CONCAT(SUBSTRING(MONTHNAME(fe_inicio_estimada_p),1,3),'-',YEAR(fe_inicio_estimada_p)) AS nombre,
            	SUM(p.fe_especificaciones = p.fe_inicio_estimada_p) AS valor_real,
            	COUNT(p.fe_inicio_estimada_p) AS valor_plan
            	FROM  c003t_proyecto p
            	WHERE p.fe_inicio_estimada_p BETWEEN '$fe_ini' AND '$fe_fin' GROUP BY nombre ORDER BY YEAR(fe_inicio_estimada_p),
            	MONTH(fe_inicio_estimada_p),DAY(fe_inicio_estimada_p)");
        }
        if (calculoDiasHab($fe_ini, $fe_fin) > 15 && calculoDiasHab($fe_ini, $fe_fin) <= 45){
            $result = mysql_query(
            "SELECT  CONCAT(SUBSTRING(MONTHNAME(fe_inicio_estimada_p),1,3),'-',YEAR(fe_inicio_estimada_p)) AS nombre,
            SUM(p.fe_especificaciones = p.fe_inicio_estimada_p) AS valor_real,
            COUNT(p.fe_inicio_estimada_p) AS valor_plan FROM  c003t_proyecto p
            WHERE p.fe_inicio_estimada_p BETWEEN '$fe_ini' AND '$fe_fin' GROUP BY nombre ORDER BY YEAR(fe_inicio_estimada_p),
            MONTH(fe_inicio_estimada_p),DAY(fe_inicio_estimada_p)");
        }
        
        if (calculoDiasHab($fe_ini, $fe_fin) > 45){
            $result = mysql_query(
            "SELECT  CONCAT(SUBSTRING(MONTHNAME(fe_inicio_estimada_p),1,3),'-',YEAR(fe_inicio_estimada_p)) AS nombre,
            SUM(p.fe_especificaciones = p.fe_inicio_estimada_p) AS valor_real,
            COUNT(p.fe_inicio_estimada_p) AS valor_plan
            FROM  c003t_proyecto p
            WHERE p.fe_inicio_estimada_p BETWEEN '$fe_ini' AND '$fe_fin' GROUP BY nombre ORDER BY YEAR(fe_inicio_estimada_p),
            MONTH(fe_inicio_estimada_p),DAY(fe_inicio_estimada_p)	");
        }
    }
    
    //$result=mysql_query($query);
    $json = "";
    $json1 = "";
    $json2 = "";
    
    while ($row = mysql_fetch_array($result)){
       if ($cat != '')
           $cat.=",";
        
       $cat.="'" . $row['nombre'] . "'";
       if ($json1 != '')
           $json1.=",";
       
       $json1.="" . $row['valor_real'] . "";
       if ($json2 != '')
           $json2.=",";
       
       $json2.="" . $row['valor_plan'] . "";
    }
    
    $json.= "{name:'PROYECTOS RECIBIDOS', data:[$json1]}";
    $json.= ",{name:'PROYECTOS PLANIFICADOS', data:[$json2]}";
    echo "{data:[$json],categoria:[$cat]}";
}
else {
    switch ($_REQUEST['base']) {
//-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-**-*-*-*-
case 1://PRIORIDAD
            if ($co_unidad_reporte == 1) {
                $result = mysql_query("SELECT CONCAT(' [',tx_prioridad,']') AS nombre, 
						COUNT(p.co_prioridad ) AS valor
						FROM i020t_prioridad pri, c003t_proyecto p
						WHERE p.co_prioridad=pri.co_prioridad 
						AND p.fe_especificaciones BETWEEN '$fe_ini' AND '$fe_fin'
						GROUP BY p.co_prioridad");
            } 
            else {
				
                $result = mysql_query("SELECT p.co_proyecto, py.co_prioridad, p.fe_recomendacion, 
						CONCAT(' [',tx_prioridad,']') AS nombre, 
						COUNT(py.co_prioridad ) AS valor
						FROM c004t_proceso p
						LEFT JOIN c003t_proyecto AS py ON py.co_proyecto=p.co_proyecto 
						LEFT JOIN i020t_prioridad AS pri ON py.co_prioridad= pri.co_prioridad
						WHERE py.co_prioridad=pri.co_prioridad 
                        AND p.fe_recomendacion BETWEEN '$fe_ini' AND '$fe_fin'
						GROUP BY py.co_prioridad");
            }
            break;
//-------------------------------------------------------------------------------------------------------------------
case 2://ORGANIZACION
            if ($co_unidad_reporte == 1)
            {
                $result = mysql_query("SELECT CONCAT('[',tx_organizacion,']') AS nombre, 
						COUNT(p.co_organizacion ) AS valor
						FROM i005t_organizacion o, c003t_proyecto p
						WHERE p.co_organizacion = o.co_organizacion
						AND p.fe_especificaciones BETWEEN '$fe_ini' AND '$fe_fin'
						GROUP BY p.co_organizacion");
            }            
            if ($co_unidad_reporte == 2) 
            {
                $result = mysql_query("SELECT p.co_proyecto, py.co_organizacion, p.fe_recomendacion,
						CONCAT(' [',tx_organizacion,']') AS nombre,
						COUNT(py.co_organizacion ) AS valor
						FROM c004t_proceso p
						LEFT JOIN c003t_proyecto AS py ON py.co_proyecto=p.co_proyecto 
						LEFT JOIN i005t_organizacion AS o ON py.co_organizacion = o.co_organizacion
						WHERE py.co_organizacion=o.co_organizacion 
						AND p.fe_recomendacion BETWEEN '$fe_ini' AND '$fe_fin' 
						GROUP BY py.co_organizacion");
            }

            if ($co_unidad_reporte == 3) {
                $result = mysql_query("SELECT CONCAT(' [',tx_organizacion,']') AS nombre, 
						COUNT(c.co_organizacion ) AS valor
						FROM i005t_organizacion o, c011t_contrato c
						WHERE c.co_organizacion=o.co_organizacion 
						AND c.fe_carta_preliminar >= '$fe_ini'
						AND c.fe_carta_preliminar <= '$fe_fin'
						GROUP BY c.co_organizacion");
            }
            break;
//------------------------------------------------------------------------------------------------------------------------
case 3://MODALIDAD
            if ($co_unidad_reporte == 1){
                $result = mysql_query(
							"SELECT CONCAT(' [',tx_modalidad,']')AS nombre,
							COUNT(p.co_modalidad) AS valor
							FROM i006t_modalidad AS m, c003t_proyecto AS p
							WHERE p.co_modalidad = m.co_modalidad 
							AND p.fe_especificaciones BETWEEN '$fe_ini' AND '$fe_fin'
							GROUP BY p.co_modalidad ");
            } 
            if ($co_unidad_reporte==2){
                $result = mysql_query(
						"SELECT CONCAT(' [',tx_modalidad,']') AS nombre, 
						COUNT(p.co_modalidad ) AS valor
						FROM c004t_proceso p
						LEFT JOIN c003t_proyecto AS py ON py.co_proyecto=p.co_proyecto 
						LEFT JOIN i006t_modalidad AS mo ON p.co_modalidad = mo.co_modalidad
						WHERE p.co_modalidad=mo.co_modalidad 
                        AND p.fe_recomendacion BETWEEN '$fe_ini' AND '$fe_fin' 
						GROUP BY p.co_modalidad");
            }
            break;
//--------------------------------------------------------------------------------------------------------------------------------
case 4://NATURALEZA
            if ($co_unidad_reporte == 1){
                $result = mysql_query(
						"SELECT CONCAT(' [',tx_naturaleza,']') AS nombre, 
						COUNT(p.co_naturaleza ) AS valor
						FROM i008t_naturaleza na, c003t_proyecto p
						WHERE p.co_naturaleza=na.co_naturaleza 
						AND p.fe_especificaciones BETWEEN '$fe_ini' AND '$fe_fin'
						GROUP BY p.co_naturaleza ");
            } 
            if ($co_unidad_reporte==2){
                $result = mysql_query(
						"SELECT p.fe_recomendacion, p.co_naturaleza, CONCAT(' [',tx_naturaleza,']') AS nombre, 
						COUNT(p.co_naturaleza ) AS valor 
						FROM c004t_proceso AS p
						LEFT JOIN i008t_naturaleza AS n ON p.co_naturaleza=n.co_naturaleza
						LEFT JOIN c003t_proyecto AS py ON py.co_proyecto=p.co_proyecto 
						WHERE p.co_naturaleza=n.co_naturaleza 
                        AND p.fe_recomendacion BETWEEN '$fe_ini' AND '$fe_fin' 
						GROUP BY p.co_naturaleza");
            }

            break;
//---------------------------------------------------------------------------------------------------------------------------------------
case 5://PRIORIDAD * ORGANIZACION
			if ($co_unidad_reporte == 1){
				$query= "SELECT tx_organizacion_abreviada AS nombre,
				COUNT(p.co_prioridad) AS valor_total,
				COUNT(IF(p.co_prioridad=1,1,NULL)) AS valor_1,
				COUNT(IF(p.co_prioridad=2,1,NULL)) AS valor_2,
				COUNT(IF(p.co_prioridad=3,1,NULL)) AS valor_3,
				COUNT(IF(p.co_prioridad=4,1,NULL)) AS valor_4
				FROM c003t_proyecto p,i020t_prioridad pri,i005t_organizacion o
				WHERE p.co_organizacion=o.co_organizacion
				AND p.co_prioridad=pri.co_prioridad
				AND p.fe_especificaciones BETWEEN '$fe_ini' AND '$fe_fin' 
				GROUP BY p.co_organizacion
				ORDER BY valor_total DESC";

$result = mysql_query($query);
$cat = '';
$json = "";
$json1 = "";
$json2 = "";
$json3 = "";
$json4 = "";
$json5 = "";
while($row = mysql_fetch_array($result)){
	
	if ($cat != '')
	$cat.=",";
	$cat.="'" . $row['nombre']."'";
	
	if ($json1 != '')
	$json1.=",";
	$json1.="" . $row['valor_total']."";
							
	if ($json2 != '')
	$json2.=",";
	$json2.="" . $row['valor_1'] . "";
	
	if ($json3 != '')
	$json3.=",";
	$json3.="" . $row['valor_2'] . "";

	if ($json4 != '')
	$json4.=",";
	$json4.="" . $row['valor_3'] . "";

	if ($json5 != '')
	$json5.=",";
	$json5.="" . $row['valor_4'] . "";
}
	$json.= "{name:'Nro de Proyectos',data:[$json1]}";
	$json.= ",{name:'Prioridad P+',data:[$json2]}";
	$json.= ",{name:'Prioridad P1',data:[$json3]}";
	$json.= ",{name:'Prioridad P2',data:[$json4]}";
	$json.= ",{name:'Prioridad P3',data:[$json5]}";
	echo "{data:[$json],categoria:[$cat]}";
}
	else{
	$query=
	"SELECT py.co_organizacion, py.co_prioridad, p.fe_recomendacion, o.tx_organizacion_abreviada AS nombre,
	COUNT(py.co_prioridad) AS valor_total,
	COUNT(IF(py.co_prioridad=1,1,NULL)) AS valor_1,
	COUNT(IF(py.co_prioridad=2,1,NULL)) AS valor_2,
	COUNT(IF(py.co_prioridad=3,1,NULL)) AS valor_3,
	COUNT(IF(py.co_prioridad=4,1,NULL)) AS valor_4
	FROM c004t_proceso AS p
	LEFT JOIN c003t_proyecto AS py ON p.co_proyecto=py.co_proyecto 
	LEFT JOIN i005t_organizacion AS o ON py.co_organizacion = o.co_organizacion
	LEFT JOIN i020t_prioridad AS pri ON py.co_prioridad= pri.co_prioridad
	WHERE py.co_organizacion=o.co_organizacion AND py.co_prioridad=pri.co_prioridad
	AND p.fe_recomendacion BETWEEN '$fe_ini' AND '$fe_fin' 
	GROUP BY py.co_organizacion
	ORDER BY valor_total ASC";

	$result = mysql_query($query);
	$cat = '';
	$json = "";
	$json1 = "";
	$json2 = "";
	$json3 = "";
	$json4 = "";
	$json5 = "";
	while ($row = mysql_fetch_array($result)){
		
		if ($cat != '')
		$cat.=",";
		$cat.="'" . $row['nombre'] . "'";

		if ($json1 != '')
		$json1.=",";
		$json1.="" . $row['valor_total'] . "";

		if ($json2 != '')
		$json2.=",";
		$json2.="" . $row['valor_1'] . "";

		if ($json3 != '')
		$json3.=",";
		$json3.="" . $row['valor_2'] . "";

		if ($json4 != '')
		$json4.=",";
		$json4.="" . $row['valor_3'] . "";

		if ($json5 != '')
		$json5.=",";
		$json5.="" . $row['valor_4'] . "";
	}

		$json.= "{name:'Nro de Proyectos',data:[$json1]}";
		$json.= ",{name:'Prioridad P+',data:[$json2]}";
		$json.= ",{name:'Prioridad P1',data:[$json3]}";
		$json.= ",{name:'Prioridad P2',data:[$json4]}";
		$json.= ",{name:'Prioridad P3',data:[$json5]}";
		echo "{data:[$json],categoria:[$cat]}";
	}
break;
//------------------------------------------------------------------------------------------------------------------------------
case 6://UBICACION
			if ($co_unidad_reporte == 1){
				  $result = mysql_query(
								"SELECT CONCAT('[',tx_ubicacion,']') AS nombre, 
								COUNT(p.co_ubicacion ) AS valor
								FROM i002t_ubicacion u, c003t_proyecto p
								WHERE p.co_ubicacion=u.co_ubicacion 
                                AND p.fe_especificaciones BETWEEN '$fe_ini' AND '$fe_fin'
								GROUP BY p.co_ubicacion");
							}
			if ($co_unidad_reporte == 2){
				$result = mysql_query(
								"SELECT CONCAT('[',tx_ubicacion,']') AS nombre,
								COUNT(py.co_ubicacion) AS valor
								FROM i002t_ubicacion u, c004t_proceso p, c003t_proyecto py
								WHERE py.co_ubicacion=u.co_ubicacion 
								AND p.fe_recomendacion BETWEEN '$fe_ini' AND '$fe_fin'
								GROUP BY py.co_ubicacion");
							}	

            break;
//------------------------------------------------------------------------------------------------------------------------------------
case 7: //PLAN/REAL
	if ($co_unidad_reporte == 1){
	$query=	"SELECT  org.co_organizacion, org.tx_organizacion_abreviada,
	COUNT(c.co_contrato) AS valor_1, 
	COUNT(m.co_contrato) AS valor_2
	FROM c011t_contrato c
	LEFT JOIN i005t_organizacion org ON org.co_organizacion=c.co_organizacion
	LEFT JOIN c007t_modificaciones m ON m.co_contrato=c.co_contrato
	AND co_tipo_modificacion=20 
	AND nu_modificacion=1
	AND fe_valor BETWEEN '$fe_ini' AND '$fe_fin' 
	WHERE fe_culminacion BETWEEN '$fe_ini' AND '$fe_fin'
	GROUP BY org.co_organizacion
	ORDER BY valor_1 DESC ";
	
	$result = mysql_query($query);
    $cat = '';
    $json = "";
    $json1 = "";
    $json2 = "";
    
    while ($row = mysql_fetch_array($result)){
		if ($cat != '')
		$cat.=",";
        $cat.="'" . $row['tx_organizacion_abreviada'] . "'";

        if ($json1 != '')
        $json1.=",";
        $json1.="" . $row['valor_1'] . "";

        if ($json2 != '')
        $json2.=",";
        $json2.="" . $row['valor_2'] . "";
        
        }
        
        $json.= "{name:'PLAN',data:[$json1]}";
        $json.= ",{name:'REAL',data:[$json2]}";
		echo "{data:[$json],categoria:[$cat]}";
	}
break;

case 8://NATURALEZA * ORGANIZACION
            if ($co_unidad_reporte == 1){
                
                $query ="SELECT tx_organizacion_abreviada AS nombre,
				COUNT(p.co_naturaleza) AS valor_total,

				COUNT(IF(p.co_naturaleza=1,1,NULL)) AS valor_1,
				COUNT(IF(p.co_naturaleza=2,1,NULL)) AS valor_2,
				COUNT(IF(p.co_naturaleza=3,1,NULL)) AS valor_3,
				COUNT(IF(p.co_naturaleza=4,1,NULL)) AS valor_4,
				COUNT(IF(p.co_naturaleza=5,1,NULL)) AS valor_5,
				COUNT(IF(p.co_naturaleza=6,1,NULL)) AS valor_6,
				COUNT(IF(p.co_naturaleza=7,1,NULL)) AS valor_7,
				COUNT(IF(p.co_naturaleza=8,1,NULL)) AS valor_8
				
				FROM c003t_proyecto p,i008t_naturaleza na,i005t_organizacion o
				WHERE p.co_organizacion=o.co_organizacion
				AND p.co_naturaleza=na.co_naturaleza
				AND p.fe_especificaciones BETWEEN '$fe_ini' AND '$fe_fin' 
				GROUP BY p.co_organizacion	
				ORDER BY valor_total DESC";

				$result = mysql_query($query);
			    $cat = '';
			    $json = "";
			    $json1 = "";
			    $json2 = "";
			    $json3 = "";
			    $json4 = "";
			    $json5 = "";
			    $json6 = "";
			    $json7 = "";
			    $json8 = "";
			    $json9 = "";
			   while ($row = mysql_fetch_array($result)){
	
				if ($cat != '')
				$cat.=",";
		        $cat.="'" . $row['nombre'] . "'";

		        if ($json1 != '')
		        $json1.=",";
		        $json1.="" . $row['valor_total'] . "";

		        if ($json2 != '')
		        $json2.=",";
		        $json2.="" . $row['valor_1'] . "";
     
		        if ($json3 != '')
		        $json3.=",";
		        $json3.="" . $row['valor_2'] . "";

		        if ($json4 != '')
		        $json4.=",";
		        $json4.="" . $row['valor_3'] . "";

		        if ($json5 != '')
		        $json5.=",";
		        $json5.="" . $row['valor_4'] . "";

		        if ($json6 != '')
		        $json6.=",";
		        $json6.="" . $row['valor_5'] . "";

		        if ($json7 != '')
		        $json7.=",";
		        $json7.="" . $row['valor_6'] . "";

		        if ($json8 != '')
		        $json8.=",";
		        $json8.="" . $row['valor_7'] . "";

		        if ($json9 != '')
		        $json9.=",";
		        $json9.="" . $row['valor_8'] . "";
        }
           		$json.= "{name:'Numero de Proyectos',data:[$json1]}";
        		$json.= ",{name:'Servicios Comerciales',data:[$json2]}";
        		$json.= ",{name:'Obras',data:[$json3]}";
        		$json.= ",{name:'Bienes',data:[$json4]}";
        		$json.= ",{name:'Servicios Profesionales',data:[$json5]}";
        		$json.= ",{name:'Electromecanica',data:[$json6]}";
        		$json.= ",{name:'Infraestructura',data:[$json7]}";
        		$json.= ",{name:'Servicios Generales',data:[$json8]}";
        		$json.= ",{name:'Servicios Industriales',data:[$json9]}";
				
				echo "{data:[$json],categoria:[$cat]}";
			}
			
			else{
				$query=
				"SELECT tx_organizacion_abreviada AS nombre,
				COUNT(p.co_naturaleza) AS valor_total,
				COUNT(IF(p.co_naturaleza=1,1,NULL)) AS valor_1,
				COUNT(IF(p.co_naturaleza=2,1,NULL)) AS valor_2,
				COUNT(IF(p.co_naturaleza=3,1,NULL)) AS valor_3,
				COUNT(IF(p.co_naturaleza=4,1,NULL)) AS valor_4,
				COUNT(IF(p.co_naturaleza=5,1,NULL)) AS valor_5,
				COUNT(IF(p.co_naturaleza=6,1,NULL)) AS valor_6,
				COUNT(IF(p.co_naturaleza=7,1,NULL)) AS valor_7,
				COUNT(IF(p.co_naturaleza=8,1,NULL)) AS valor_8
				FROM c003t_proyecto p,i008t_naturaleza na,i005t_organizacion o, c004t_proceso pro
				WHERE p.co_organizacion=o.co_organizacion
				AND p.co_naturaleza=na.co_naturaleza
				AND pro.fe_recomendacion BETWEEN '$fe_ini' AND '$fe_fin' 
				GROUP BY p.co_organizacion	
				ORDER BY valor_total DESC";

				$result = mysql_query($query);
			    $cat = '';
			    $json = "";
			    $json1 = "";
			    $json2 = "";
			    $json3 = "";
			    $json4 = "";
			    $json5 = "";
			    $json6 = "";
			    $json7 = "";
			    $json8 = "";
			    $json9 = "";
			   while ($row = mysql_fetch_array($result)){
	
				if ($cat != '')
				$cat.=",";
		        $cat.="'" . $row['nombre'] . "'";

		        if ($json1 != '')
		        $json1.=",";
		        $json1.="" . $row['valor_total'] . "";

		        if ($json2 != '')
		        $json2.=",";
		        $json2.="" . $row['valor_1'] . "";
     
		        if ($json3 != '')
		        $json3.=",";
		        $json3.="" . $row['valor_2'] . "";

		        if ($json4 != '')
		        $json4.=",";
		        $json4.="" . $row['valor_3'] . "";

		        if ($json5 != '')
		        $json5.=",";
		        $json5.="" . $row['valor_4'] . "";

		        if ($json6 != '')
		        $json6.=",";
		        $json6.="" . $row['valor_5'] . "";

		        if ($json7 != '')
		        $json7.=",";
		        $json7.="" . $row['valor_6'] . "";

		        if ($json8 != '')
		        $json8.=",";
		        $json8.="" . $row['valor_7'] . "";

		        if ($json9 != '')
		        $json9.=",";
		        $json9.="" . $row['valor_8'] . "";
        }
           		$json.= "{name:'Numero de Proyectos',data:[$json1]}";
        		$json.= ",{name:'Servicios Comerciales',data:[$json2]}";
        		$json.= ",{name:'Obras',data:[$json3]}";
        		$json.= ",{name:'Bienes',data:[$json4]}";
        		$json.= ",{name:'Servicios Profesionales',data:[$json5]}";
        		$json.= ",{name:'Electromecanica',data:[$json6]}";
        		$json.= ",{name:'Infraestructura',data:[$json7]}";
        		$json.= ",{name:'Servicios Generales',data:[$json8]}";
        		$json.= ",{name:'Servicios Industriales',data:[$json9]}";
				
				echo "{data:[$json],categoria:[$cat]}";
			}
			break;
	case 9://MODALIDAD * ORGANIZACION
            if ($co_unidad_reporte == 1){
                
                $query ="SELECT tx_organizacion_abreviada AS nombre,
				COUNT(p.co_modalidad) AS valor_total,
				COUNT(IF(p.co_modalidad=1,1,NULL)) AS valor_1,
				COUNT(IF(p.co_modalidad=2,1,NULL)) AS valor_2,
				COUNT(IF(p.co_modalidad=3,1,NULL)) AS valor_3,
				COUNT(IF(p.co_modalidad=4,1,NULL)) AS valor_4,
				COUNT(IF(p.co_modalidad=5,1,NULL)) AS valor_5,
				COUNT(IF(p.co_modalidad=6,1,NULL)) AS valor_6,
				COUNT(IF(p.co_modalidad=7,1,NULL)) AS valor_7
					
				FROM c003t_proyecto p,i006t_modalidad mo,i005t_organizacion o
				WHERE p.co_organizacion=o.co_organizacion
				AND p.co_modalidad=mo.co_modalidad
				AND p.fe_especificaciones BETWEEN '$fe_ini' AND '$fe_fin' 
				GROUP BY p.co_organizacion	
				ORDER BY valor_total DESC ";

				$result = mysql_query($query);
			    $cat = '';
			    $json = "";
			    $json1 = "";
			    $json2 = "";
			    $json3 = "";
			    $json4 = "";
			    $json5 = "";
			    $json6 = "";
			    $json7 = "";
			    $json8 = "";
			    
			   while ($row = mysql_fetch_array($result)){
	
				if ($cat != '')
				$cat.=",";
		        $cat.="'" . $row['nombre'] . "'";

		        if ($json1 != '')
		        $json1.=",";
		        $json1.="" . $row['valor_total'] . "";

		        if ($json2 != '')
		        $json2.=",";
		        $json2.="" . $row['valor_1'] . "";
     
		        if ($json3 != '')
		        $json3.=",";
		        $json3.="" . $row['valor_2'] . "";

		        if ($json4 != '')
		        $json4.=",";
		        $json4.="" . $row['valor_3'] . "";

		        if ($json5 != '')
		        $json5.=",";
		        $json5.="" . $row['valor_4'] . "";

		        if ($json6 != '')
		        $json6.=",";
		        $json6.="" . $row['valor_5'] . "";

		        if ($json7 != '')
		        $json7.=",";
		        $json7.="" . $row['valor_6'] . "";

		        if ($json8 != '')
		        $json8.=",";
		        $json8.="" . $row['valor_7'] . "";

		    }
           		$json.= "{name:'Numero de Proyectos',data:[$json1]}";
        		$json.= ",{name:'LPC Concurso Abierto',data:[$json2]}";
        		$json.= ",{name:'LPC Concurso Cerrado',data:[$json3]}";
        		$json.= ",{name:'LPC Consulta de Precios',data:[$json4]}";
        		$json.= ",{name:'LPC Contratacion Directa',data:[$json5]}";
        		$json.= ",{name:'LPC Anunciado Internacional',data:[$json6]}";
        		$json.= ",{name:'Ni Competitivo',data:[$json7]}";
        		$json.= ",{name:'Ni no Competitivo',data:[$json8]}";
        		echo "{data:[$json],categoria:[$cat]}";
			}
			else{
				$query="SELECT tx_organizacion_abreviada AS nombre,
				COUNT(pro.co_modalidad) AS valor_total,
				COUNT(IF(pro.co_modalidad=1,1,NULL)) AS valor_1,
				COUNT(IF(pro.co_modalidad=2,1,NULL)) AS valor_2,
				COUNT(IF(pro.co_modalidad=3,1,NULL)) AS valor_3,
				COUNT(IF(pro.co_modalidad=4,1,NULL)) AS valor_4,
				COUNT(IF(pro.co_modalidad=5,1,NULL)) AS valor_5,
				COUNT(IF(pro.co_modalidad=6,1,NULL)) AS valor_6,
				COUNT(IF(pro.co_modalidad=7,1,NULL)) AS valor_7
				FROM c003t_proyecto p,i006t_modalidad mo,i005t_organizacion o, c004t_proceso pro
				WHERE p.co_organizacion=o.co_organizacion
				AND pro.co_modalidad=mo.co_modalidad
				AND pro.fe_recomendacion BETWEEN '$fe_ini' AND '$fe_fin' 
				GROUP BY p.co_organizacion	
				ORDER BY valor_total DESC ";
				
				$result = mysql_query($query);
			    $cat = '';
			    $json = "";
			    $json1 = "";
			    $json2 = "";
			    $json3 = "";
			    $json4 = "";
			    $json5 = "";
			    $json6 = "";
			    $json7 = "";
			    $json8 = "";
			    
			   while ($row = mysql_fetch_array($result)){
	
				if ($cat != '')
				$cat.=",";
		        $cat.="'" . $row['nombre'] . "'";

		        if ($json1 != '')
		        $json1.=",";
		        $json1.="" . $row['valor_total'] . "";

		        if ($json2 != '')
		        $json2.=",";
		        $json2.="" . $row['valor_1'] . "";
     
		        if ($json3 != '')
		        $json3.=",";
		        $json3.="" . $row['valor_2'] . "";

		        if ($json4 != '')
		        $json4.=",";
		        $json4.="" . $row['valor_3'] . "";

		        if ($json5 != '')
		        $json5.=",";
		        $json5.="" . $row['valor_4'] . "";

		        if ($json6 != '')
		        $json6.=",";
		        $json6.="" . $row['valor_5'] . "";

		        if ($json7 != '')
		        $json7.=",";
		        $json7.="" . $row['valor_6'] . "";

		        if ($json8 != '')
		        $json8.=",";
		        $json8.="" . $row['valor_7'] . "";

		    }
           		$json.= "{name:'Numero de Proyectos',data:[$json1]}";
        		$json.= ",{name:'LPC Concurso Abierto',data:[$json2]}";
        		$json.= ",{name:'LPC Concurso Cerrado',data:[$json3]}";
        		$json.= ",{name:'LPC Consulta de Precios',data:[$json4]}";
        		$json.= ",{name:'LPC Contratacion Directa',data:[$json5]}";
        		$json.= ",{name:'LPC Anunciado Internacional',data:[$json6]}";
        		$json.= ",{name:'Ni Competitivo',data:[$json7]}";
        		$json.= ",{name:'Ni no Competitivo',data:[$json8]}";
        		echo "{data:[$json],categoria:[$cat]}";
			}
		break;
case 10://UBICACION * ORGANIZACION
            if ($co_unidad_reporte == 1){
                
                $query ="SELECT tx_organizacion_abreviada AS nombre,
				COUNT(p.co_ubicacion) AS valor_total,
				COUNT(IF(p.co_ubicacion=1,1,NULL)) AS valor_1,
				COUNT(IF(p.co_ubicacion=2,1,NULL)) AS valor_2,
				COUNT(IF(p.co_ubicacion=3,1,NULL)) AS valor_3,
				COUNT(IF(p.co_ubicacion=4,1,NULL)) AS valor_4,
				COUNT(IF(p.co_ubicacion=5,1,NULL)) AS valor_5,
				COUNT(IF(p.co_ubicacion=6,1,NULL)) AS valor_6,
				COUNT(IF(p.co_ubicacion=7,1,NULL)) AS valor_7,
				COUNT(IF(p.co_ubicacion=8,1,NULL)) AS valor_8,
				COUNT(IF(p.co_ubicacion=9,1,NULL)) AS valor_9,
				COUNT(IF(p.co_ubicacion=10,1,NULL)) AS valor_10,
				COUNT(IF(p.co_ubicacion=11,1,NULL)) AS valor_11,
				COUNT(IF(p.co_ubicacion=12,1,NULL)) AS valor_12,
				COUNT(IF(p.co_ubicacion=13,1,NULL)) AS valor_13,
				COUNT(IF(p.co_ubicacion=14,1,NULL)) AS valor_14,
				COUNT(IF(p.co_ubicacion=15,1,NULL)) AS valor_15,
				COUNT(IF(p.co_ubicacion=16,1,NULL)) AS valor_16
					
				FROM c003t_proyecto p,i002t_ubicacion ub,i005t_organizacion o
				WHERE p.co_organizacion=o.co_organizacion
				AND p.co_ubicacion=ub.co_ubicacion
				AND p.fe_especificaciones BETWEEN '$fe_ini' AND '$fe_fin' 
				GROUP BY p.co_organizacion
				ORDER BY valor_total DESC";

				$result = mysql_query($query);
			    $cat = '';
			    $json = "";
			    $json1 = "";
			    $json2 = "";
			    $json3 = "";
			    $json4 = "";
			    $json5 = "";
			    $json6 = "";
			    $json7 = "";
			    $json8 = "";
			    $json9 = "";
			    $json10 = "";
			    $json11 = "";
			    $json12 = "";
			    $json13 = "";
			    $json14 = "";
			    $json15 = "";
			    $json16 = "";
			    $json17 = "";
			    
			   while ($row = mysql_fetch_array($result)){
	
				if ($cat != '')
				$cat.=",";
		        $cat.="'" . $row['nombre'] . "'";

		        if ($json1 != '')
		        $json1.=",";
		        $json1.="" . $row['valor_total'] . "";

		        if ($json2 != '')
		        $json2.=",";
		        $json2.="" . $row['valor_1'] . "";
     
		        if ($json3 != '')
		        $json3.=",";
		        $json3.="" . $row['valor_2'] . "";

		        if ($json4 != '')
		        $json4.=",";
		        $json4.="" . $row['valor_3'] . "";

		        if ($json5 != '')
		        $json5.=",";
		        $json5.="" . $row['valor_4'] . "";

		        if ($json6 != '')
		        $json6.=",";
		        $json6.="" . $row['valor_5'] . "";

		        if ($json7 != '')
		        $json7.=",";
		        $json7.="" . $row['valor_6'] . "";

		        if ($json8 != '')
		        $json8.=",";
		        $json8.="" . $row['valor_7'] . "";

		        if ($json9 != '')
		        $json9.=",";
		        $json9.="" . $row['valor_8'] . "";

		        if ($json10 != '')
		        $json10.=",";
		        $json10.="" . $row['valor_9'] . "";

		        if ($json11 != '')
		        $json11.=",";
		        $json11.="" . $row['valor_10'] . "";

		        if ($json12 != '')
		        $json12.=",";
		        $json12.="" . $row['valor_11'] . "";

		        if ($json13 != '')
		        $json13.=",";
		        $json13.="" . $row['valor_12'] . "";

		        if ($json14 != '')
		        $json14.=",";
		        $json14.="" . $row['valor_13'] . "";

		        if ($json15 != '')
		        $json15.=",";
		        $json15.="" . $row['valor_14'] . "";

		        if ($json16 != '')
		        $json16.=",";
		        $json16.="" . $row['valor_15'] . "";

		        if ($json17 != '')
		        $json17.=",";
		        $json17.="" . $row['valor_16'] . "";

		    }
           		$json.= "{name:'Numero de Proyectos',data:[$json1]}";
        		$json.= ",{name:'PDVSA PETROLEOS',data:[$json2]}";
        		$json.= ",{name:'PDVSA SERVICIOS',data:[$json3]}";
        		$json.= ",{name:'PRODUCCION ORIENTE',data:[$json4]}";
        		$json.= ",{name:'DIV COSTA AFUERA',data:[$json5]}";
        		$json.= ",{name:'DIV FURRIAL',data:[$json6]}";
        		$json.= ",{name:'DIV PUNTA DE MATA',data:[$json7]}";
        		$json.= ",{name:'DTTO ORIENTAL',data:[$json8]}";
        		$json.= ",{name:'EM WARAO',data:[$json9]}";
        		$json.= ",{name:'EM SUCRE',data:[$json10]}";
        		$json.= ",{name:'EM GUIRIA',data:[$json11]}";
        		$json.= ",{name:'EM PARIA',data:[$json12]}";
        		$json.= ",{name:'DTTO FURRIAL',data:[$json13]}";
        		$json.= ",{name:'EM BOQUERON',data:[$json14]}";
        		$json.= ",{name:'EM QUIRIQUIRE',data:[$json15]}";
        		$json.= ",{name:'DTTO PUNTA DE MATA',data:[$json16]}";
        		$json.= ",{name:'DTTO TRAVI',data:[$json17]}";
        		echo "{data:[$json],categoria:[$cat]}";
        	}else{
				$query="SELECT tx_organizacion_abreviada AS nombre,
				COUNT(p.co_ubicacion) AS valor_total,
				COUNT(IF(p.co_ubicacion=1,1,NULL)) AS valor_1,
				COUNT(IF(p.co_ubicacion=2,1,NULL)) AS valor_2,
				COUNT(IF(p.co_ubicacion=3,1,NULL)) AS valor_3,
				COUNT(IF(p.co_ubicacion=4,1,NULL)) AS valor_4,
				COUNT(IF(p.co_ubicacion=5,1,NULL)) AS valor_5,
				COUNT(IF(p.co_ubicacion=6,1,NULL)) AS valor_6,
				COUNT(IF(p.co_ubicacion=7,1,NULL)) AS valor_7,
				COUNT(IF(p.co_ubicacion=8,1,NULL)) AS valor_8,
				COUNT(IF(p.co_ubicacion=9,1,NULL)) AS valor_9,
				COUNT(IF(p.co_ubicacion=10,1,NULL)) AS valor_10,
				COUNT(IF(p.co_ubicacion=11,1,NULL)) AS valor_11,
				COUNT(IF(p.co_ubicacion=12,1,NULL)) AS valor_12,
				COUNT(IF(p.co_ubicacion=13,1,NULL)) AS valor_13,
				COUNT(IF(p.co_ubicacion=14,1,NULL)) AS valor_14,
				COUNT(IF(p.co_ubicacion=15,1,NULL)) AS valor_15,
				COUNT(IF(p.co_ubicacion=16,1,NULL)) AS valor_16
					
				FROM c003t_proyecto p,i002t_ubicacion ub,i005t_organizacion o, c004t_proceso pro
				WHERE p.co_organizacion=o.co_organizacion
				AND p.co_ubicacion=ub.co_ubicacion
				AND pro.fe_recomendacion BETWEEN '$fe_ini' AND '$fe_fin' 
				GROUP BY p.co_organizacion
				ORDER BY valor_total ASC";
        		
        		$result = mysql_query($query);
			    $cat = '';
			    $json = "";
			    $json1 = "";
			    $json2 = "";
			    $json3 = "";
			    $json4 = "";
			    $json5 = "";
			    $json6 = "";
			    $json7 = "";
			    $json8 = "";
			    $json9 = "";
			    $json10 = "";
			    $json11 = "";
			    $json12 = "";
			    $json13 = "";
			    $json14 = "";
			    $json15 = "";
			    $json16 = "";
			    $json17 = "";
			    
			   while ($row = mysql_fetch_array($result)){
	
				if ($cat != '')
				$cat.=",";
		        $cat.="'" . $row['nombre'] . "'";

		        if ($json1 != '')
		        $json1.=",";
		        $json1.="" . $row['valor_total'] . "";

		        if ($json2 != '')
		        $json2.=",";
		        $json2.="" . $row['valor_1'] . "";
     
		        if ($json3 != '')
		        $json3.=",";
		        $json3.="" . $row['valor_2'] . "";

		        if ($json4 != '')
		        $json4.=",";
		        $json4.="" . $row['valor_3'] . "";

		        if ($json5 != '')
		        $json5.=",";
		        $json5.="" . $row['valor_4'] . "";

		        if ($json6 != '')
		        $json6.=",";
		        $json6.="" . $row['valor_5'] . "";

		        if ($json7 != '')
		        $json7.=",";
		        $json7.="" . $row['valor_6'] . "";

		        if ($json8 != '')
		        $json8.=",";
		        $json8.="" . $row['valor_7'] . "";

		        if ($json9 != '')
		        $json9.=",";
		        $json9.="" . $row['valor_8'] . "";

		        if ($json10 != '')
		        $json10.=",";
		        $json10.="" . $row['valor_9'] . "";

		        if ($json11 != '')
		        $json11.=",";
		        $json11.="" . $row['valor_10'] . "";

		        if ($json12 != '')
		        $json12.=",";
		        $json12.="" . $row['valor_11'] . "";

		        if ($json13 != '')
		        $json13.=",";
		        $json13.="" . $row['valor_12'] . "";

		        if ($json14 != '')
		        $json14.=",";
		        $json14.="" . $row['valor_13'] . "";

		        if ($json15 != '')
		        $json15.=",";
		        $json15.="" . $row['valor_14'] . "";

		        if ($json16 != '')
		        $json16.=",";
		        $json16.="" . $row['valor_15'] . "";

		        if ($json17 != '')
		        $json17.=",";
		        $json17.="" . $row['valor_16'] . "";

		    }
           		$json.= "{name:'Numero de Proyectos',data:[$json1]}";
        		$json.= ",{name:'PDVSA PETROLEOS',data:[$json2]}";
        		$json.= ",{name:'PDVSA SERVICIOS',data:[$json3]}";
        		$json.= ",{name:'PRODUCCION ORIENTE',data:[$json4]}";
        		$json.= ",{name:'DIV COSTA AFUERA',data:[$json5]}";
        		$json.= ",{name:'DIV FURRIAL',data:[$json6]}";
        		$json.= ",{name:'DIV PUNTA DE MATA',data:[$json7]}";
        		$json.= ",{name:'DTTO ORIENTAL',data:[$json8]}";
        		$json.= ",{name:'EM WARAO',data:[$json9]}";
        		$json.= ",{name:'EM SUCRE',data:[$json10]}";
        		$json.= ",{name:'EM GUIRIA',data:[$json11]}";
        		$json.= ",{name:'EM PARIA',data:[$json12]}";
        		$json.= ",{name:'DTTO FURRIAL',data:[$json13]}";
        		$json.= ",{name:'EM BOQUERON',data:[$json14]}";
        		$json.= ",{name:'EM QUIRIQUIRE',data:[$json15]}";
        		$json.= ",{name:'DTTO PUNTA DE MATA',data:[$json16]}";
        		$json.= ",{name:'DTTO TRAVI',data:[$json17]}";
        		echo "{data:[$json],categoria:[$cat]}";

}
        		break;
}
//---------------------------------------------------------------------------------------------------------------------------------
	if ($_REQUEST['base'] != 5 && $_REQUEST['base'] !=7 && $_REQUEST['base'] !=8 && $_REQUEST['base'] !=9 && $_REQUEST['base'] !=10){
    $json = "[";
    while ($row = mysql_fetch_array($result)){
		if ($json != '[')
            $json.=",";
            switch ($tipo_grafica){
				
				case 2:
				$json.="{name:'" . $row['nombre'] . "',data:[" . $row['valor'] . "]}";
                break;
                
                case 3:
                $json.="['" . $row['nombre'] . "'," . $row['valor'] . "]";
                break;
			}
		}
	echo $json."]";
}
}
mysql_close($conexion);

?>
