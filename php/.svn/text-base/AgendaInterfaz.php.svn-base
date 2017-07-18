<?php 	
	//session_start();
	require_once 'AgendaClase.php';	
	$objAgenda = new AgendaClase();
	$accion = (isset($_POST['accion']) ? $_POST['accion'] : $_GET['accion']);
	
function vacio($var) {

    return ($var != '');

}
	$registro = array_filter($_REQUEST, "vacio");
	$filtro = str_replace('\"','"',$_REQUEST["filter"]);
	$filtros = json_decode($filtro, true);	
	switch ($accion) {                                       // interruptor accion
		/*
		case 'buscar':

			$cond = $_REQUEST['condiciones'];
			$cond = str_replace('\"','"',$cond);
			$cond	= str_replace('\"','"',$cond);
			$condiciones = json_decode($cond, true);
			$condiciones = array_filter($condiciones, "vacio");
			$resultado = $objSistema->buscar($condiciones['ID']);
			
			break;
*/
		case 'refrescar':
			
			$filtros = $_REQUEST["filter"];	
			$resultado = $objAgenda->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST["tx_indicador"]);
			
			//for($i=0; $i<count($resultado); $i++)
				//$resultado[$i]['resp'] = true;		
			$tot = $objAgenda->contar();
			//print_r($tot );
			$total = $tot[0]['cuenta'];
		//	if(is_object($objDocumento->pdo->monitor) && $objDocumento->pdo->monitor->notify_select)
		//	$objDocumento->pdo->popNotify(); // Libera posicion reg_padre
		break;
		
		case 'insertar':
			$datos=json_decode($registro['Resultados'],true);
			
			$insert = $objAgenda->insertar($datos);
			$resultado = $objAgenda->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST["tx_indicador"]);
			$tot = $objAgenda->contar();
			
			$total = $tot[0]['cuenta'];
		break;
		case 'modificar':	 		               //  caso guardar 

			$cond = $_REQUEST['Resultados'];
			//print_r($_REQUEST['Resultados']);
			$cond = str_replace('\"','"',$cond);
			$condicion['co_agenda']=$_REQUEST['condicion'];
			
			$registro = json_decode($cond, true);
			//print_r($registro);
			$registro = array_filter($registro, "vacio");
			if(isset($registro['nu_agenda']))
				$agenda['nu_agenda']=$registro['nu_agenda'];
			if(isset($registro['co_comision']))
				$agenda['co_comision']=$registro['co_comision'];
			if(isset($registro['co_tipo_reunion']))
			    $agenda['co_tipo_reunion']=$registro['co_tipo_reunion'];
			if(isset($registro['co_trimestre']))
			    $agenda['co_trimestre']=$registro['co_trimestre'];
			if(isset($registro['fe_agenda']))
			    $agenda['fe_agenda']=$registro['fe_agenda'];//"'+NOW()+'";//$registro['fe_agenda'];
			$filtros = $_REQUEST["filter"];		

			$resulta = $objAgenda->actualizar($agenda, $condicion);
			$resultado = $objAgenda->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST["tx_indicador"]);
		
			for($i=0; $i<count($resultado); $i++)
				$resultados[$i]['resp'] =$resulta;
			
			$tot = $objAgenda->contar();
				$total = $tot[0]['cuenta'];

		break;
		case 'eliminar':                                         //  caso  eliminar
			$condiciones['co_agenda']=$_REQUEST['co_agenda'];
			$resultado = $objAgenda->eliminar($condiciones);
			$filtros = $_REQUEST["filter"];
			$resultado = $objAgenda->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"],$_REQUEST["tx_indicador"]);
			$tot = $objAgenda->contar();
			$total = $tot[0]['cuenta'];
		break;
	 /* case 'datosSIPROCONDB':
			//echo "prueba";
			require_once 'MyPDO.php';
			//require_once('../lib/ldap/activedirectory.php');
			//require_once('../lib/ldap/activedirectory_valores.php');
			//$resultado = ActiveDirectory_valores(strtolower($_REQUEST['tx_usuario']));
			//print_r($resultado);
			$resultado=verificar_expediente_i($_REQUEST['nu_expediente']);
			//print_r($resultado);
			$resultado=array("nu_expediente"=>utf8_decode($resultado['givenName'][0]),"tx_descripcion"=>utf8_decode($resultado['sn'][0]));
			$total=0;
			//$output=array("tx_nombre"=>utf8_decode($datosUser['givenName'][0]),"tx_apellido"=>utf8_decode($datosUser['sn'][0]));
			//echo "{success: true, data:".json_encode(array_latin_to_utf($output))."}";
		break;*/

	}	
	echo $resultado2='{"total":'.(($total)? $total : 0).', "Resultados":'.json_encode($resultado).'}';
?>
