<?php	
    
function getRealIP()
{
 
   if( $_SERVER['HTTP_X_FORWARDED_FOR'] != '' )
   {
      $client_ip = 
         ( !empty($_SERVER['REMOTE_ADDR']) ) ? 
            $_SERVER['REMOTE_ADDR'] 
            : 
            ( ( !empty($_ENV['REMOTE_ADDR']) ) ? 
               $_ENV['REMOTE_ADDR'] 
               : 
               "unknown" );
 
      // los proxys van añadiendo al final de esta cabecera
      // las direcciones ip que van "ocultando". Para localizar la ip real
      // del usuario se comienza a mirar por el principio hasta encontrar 
      // una dirección ip que no sea del rango privado. En caso de no 
      // encontrarse ninguna se toma como valor el REMOTE_ADDR
 
      $entries = preg_split('/[, ]/', $_SERVER['HTTP_X_FORWARDED_FOR']);
 
      reset($entries);
      while (list(, $entry) = each($entries)) 
      {
         $entry = trim($entry);
         if ( preg_match("/^([0-9]+\.[0-9]+\.[0-9]+\.[0-9]+)/", $entry, $ip_list) )
         {
            // http://www.faqs.org/rfcs/rfc1918.html
            $private_ip = array(
                  '/^0\./', 
                  '/^127\.0\.0\.1/', 
                  '/^192\.168\..*/', 
                  '/^172\.((1[6-9])|(2[0-9])|(3[0-1]))\..*/', 
                  '/^10\..*/');
 
            $found_ip = preg_replace($private_ip, $client_ip, $ip_list[1]);
 
            if ($client_ip != $found_ip)
            {
               $client_ip = $found_ip;
               break;
            }
         }
      }
   }
   else
   {
      $client_ip = 
         ( !empty($_SERVER['REMOTE_ADDR']) ) ? 
            $_SERVER['REMOTE_ADDR'] 
            : 
            ( ( !empty($_ENV['REMOTE_ADDR']) ) ? 
               $_ENV['REMOTE_ADDR'] 
               : 
               "unknown" );
   }
 
   return $client_ip;
 
}
	//-------------------------------------
	function fecha(){
		$mes = date("n");
		$mesArray = array(
		1 => "Enero",
		2 => "Febrero",
		3 => "Marzo",
		4 => "Abril",
		5 => "Mayo",
		6 => "Junio",
		7 => "Julio",
		8 => "Agosto",
		9 => "Septiembre",
		10 => "Octubre",
		11 => "Noviembre",
		12 => "Diciembre"
		);

		$semana = date("D");
		$semanaArray = array(
		"Mon" => "Lunes",
		"Tue" => "Martes",
		"Wed" => "Miercoles",
		"Thu" => "Jueves",
		"Fri" => "Viernes",
		"Sat" => "Sábado",
		"Sun" => "Domingo",
		);

		$mesReturn = $mesArray[$mes];
		$semanaReturn = $semanaArray[$semana];
		$dia = date("d");
		$año = date ("Y");
		return $semanaReturn." ".$dia." de ".$mesReturn." de ".$año;
	}
	//-------------------------------------
	function pascua ($anno){
		# Constantes mágicas
		$M = 24;
		$N = 5;
		#Cálculo de residuos
		$a = $anno % 19;
		$b = $anno % 4;
		$c = $anno % 7;
		$d = (19*$a + $M) % 30;
		$e = (2*$b+4*$c+6*$d + $N) % 7;
		# Decidir entre los 2 casos:
		if ( $d + $e < 10 ) {
			$dia = $d + $e + 22;
			$mes = 3; // marzo
		}
		else {
			$dia = $d + $e - 9;
			$mes = 4; //abril
		}
		#Excepciones especiales (según artículo)
		if ( $dia == 26  and $mes == 4 ) { // 4 = abril
			$dia = 19;
		}
		if ( $dia == 25 and $mes == 4 and $d==28 and $e == 6 and $a >10 ) { // 4 = abril
			$dia = 18;
		}
		$ret = $dia.'-'.$mes.'-'.$anno;
		return ($ret);
	}
	//-------------------------------------
	function dateDifference($d1, $d2){
		$v1 = split("-", $d1);
		$date1 = mktime(0, 0, 0, intval($v1[1]), intval($v1[2]), intval($v1[0]));
		$v2 = split("-", $d2);
		$date2 = mktime(0, 0, 0, intval($v2[1]), intval($v2[2]), intval($v2[0]));
		$dateDiff = $date2 - $date1;
		return floor($dateDiff/(60*60*24));
	}
	//------------------------------------------------
	function agregar_mes($fecha) {
		list($ano, $mes, $dia) = explode("-", $fecha);
		$factor=0;
		if($dia>=28)
			$factor=1;
		$mfac=$mes+$factor;
		$ndias = date("t",mktime(0, 0, 0, $mes+$factor, 1, $ano));
		$nueva = mktime(0, 0, 0, $mes, $dia, $ano) + $ndias * 24 * 60 * 60;
		$nuevafecha = date("Y-m-d", $nueva);
		return($nuevafecha);
     }
	//-------------------------------------
	function EsFeriado($ano,$mes,$dia)
	{
		$row=array();
		//INCLUIR LAS FECHAS CONSIDERADAS FERIADOS
		array_push($row,array('01','01',null));//1er de Enero
		array_push($row,array('19','04',null));//Firma del Acta de Independencia
		array_push($row,array('01','05',null));//Dia del Trabajador
		array_push($row,array('24','06',null));//Batalla de Carabobo
		array_push($row,array('05','07',null));//Dia de la Independencia
		array_push($row,array('24','07',null));//Natalicio del Libertador
		array_push($row,array('12','10',null));//Dia de la resistencia indigena
		array_push($row,array('24','12',null));//Dia de Navidad
		array_push($row,array('25','12',null));//Dia de Navidad
		array_push($row,array('31','12',null));//Año Nuevo
		//FECHAS CAMBIANTES
		$pascua=explode("-",pascua($ano));
		$fecha=explode("-",date("d-m-Y", mktime(0,0,0,$pascua[1],$pascua[0]-48,$pascua[2])));
		array_push($row,array($fecha[0],$fecha[1],null));//Lunes de Carnaval
		$fecha=explode("-",date("d-m-Y", mktime(0,0,0,$pascua[1],$pascua[0]-47,$pascua[2])));
		array_push($row,array($fecha[0],$fecha[1],null));//Martes de Carnaval
		$fecha=explode("-",date("d-m-Y", mktime(0,0,0,$pascua[1],$pascua[0]-3,$pascua[2])));
		array_push($row,array($fecha[0],$fecha[1],null));//Jueves Santo
		$fecha=explode("-",date("d-m-Y", mktime(0,0,0,$pascua[1],$pascua[0]-2,$pascua[2])));
		array_push($row,array($fecha[0],$fecha[1],null));//Viernes Santo
		//-------------------------------------
		$sw=0;$i=0;
		while($row[$i])
		{
			if($row[$i][0]==$dia && $row[$i][1]==$mes)
				$sw=1;
			$i++;
		}
		return $sw;
	}
	//-------------------------------------
	function AddDays($fecha, $ndias)
	{
		list($ano, $mes, $dia) = explode("-", $fecha);
		$nueva = mktime(0, 0, 0, $mes, $dia, $ano) + $ndias * 24 * 60 * 60;
		$nuevafecha = date("Y-m-d", $nueva);
		return($nuevafecha);
	}
	//-------------------------------------
	function AddWorkDays($fecha, $ndias){
		$dias_hab=0;
		while($dias_hab<$ndias){
			$fecha=AddDays($fecha, 1);
			list($ano, $mes, $dia) = split("-", $fecha);
			if (date("N", mktime(0, 0, 0, $mes, $dia, $ano)) != 6 && date("N", mktime(0, 0, 0, $mes, $dia, $ano)) != 7 && !EsFeriado($ano,$mes,$dia))
				$dias_hab += 1;
		}
		return $fecha;
	}
	//-------------------------------------
	function calculoDiasHab($fe_ini,$fe_fin){
		$v1 = explode("-", $fe_ini);
		$date1 = mktime(0, 0, 0, intval($v1[1]), intval($v1[2]), intval($v1[0]));
		$fe_ini = date("Y-m-d", $date1);
		$v2 = explode("-", $fe_fin);
		$date2 = mktime(0, 0, 0, intval($v2[1]), intval($v2[2]), intval($v2[0]));
		$fe_fin = date("Y-m-d", $date2);
		$dias_hab=0;
		$fe_temp=$fe_ini;
		while($fe_temp!=$fe_fin){
			$fe_temp=AddDays($fe_temp, 1);
			list($ano, $mes, $dia) = explode("-", $fe_temp);
			if (date("N", mktime(0, 0, 0, $mes, $dia, $ano)) != 6 && date("N", mktime(0, 0, 0, $mes, $dia, $ano)) != 7 && !EsFeriado($ano,$mes,$dia))
				$dias_hab += 1;
		}
		return $dias_hab;
	}
	//-------------------------------------
?>
