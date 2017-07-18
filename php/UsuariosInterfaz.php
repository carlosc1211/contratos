<?php 	
	session_start();
	require_once 'UsuarioClase.php';	
	require_once 'FuncionesFecha.php';
	
	$objUsuario = new UsuarioClase();
	$accion = (isset($_POST['accion']) ? $_POST['accion'] : $_GET['accion']);
	
	function vacio($var) {

		return ($var != '');

	}

	$registro = array_filter($_REQUEST, "vacio");
	$filtro = str_replace('\"','"',$_REQUEST["filter"]);
	$filtros = json_decode($filtro, true);	
	switch ($accion) {
		
		case 'login':
			session_destroy();
			session_unset();
			session_start();
			$resultado=$objUsuario->buscar($_REQUEST['tx_usuario']);
			$tot = $objUsuario->contar();
			$total = $tot[0]['cuenta'];

			if($resultado!=null){   //estas en ldap? compara usuario y clave
				if($resultado[0] ['bo_activo']==1){
					require_once('../lib/ldap/activedirectory.php');
					require_once('../lib/ldap/activedirectory_valores.php');
					$ActiveD    = ActiveDirectory(strtolower($_REQUEST['tx_usuario']),$_REQUEST['tx_password']);
					$ActiveDVal = ActiveDirectory_valores(strtolower($_REQUEST['tx_usuario']));
					if(1/*$ActiveD==1*/){//1  de esta forma valida password con ldap if($ActiveD==1) de esta forma valida login con siprocon if(1)
						$_SESSION['co_usuario'] = $resultado[0] ['co_usuario'];
						$_SESSION['tx_usuario'] = $resultado[0] ['tx_usuario'];
						$_SESSION['co_rol'] = $_REQUEST['co_rol'];
						$resultado[0]['tx_rol']=$_REQUEST['tx_rol'];
						$_SESSION['co_ubicacion'] = $resultado[0] ['co_ubicacion'];
						$_SESSION['co_organizacion'] = $resultado[0] ['co_organizacion'];
						$_SESSION['co_supervisor'] = $resultado[0] ['co_supervisor'];
						$resultado[0]['fecha']=fecha();	
                                                $_SESSION['co_sesion']=$objUsuario->_insertLastId("c014t_log_usuarios", array("tx_indicador"=>$resultado[0]['tx_indicador'],"tx_ip"=>getRealIP()));
                                                echo '{resp: true,"total":'.(($total)? $total : 0).', "Resultados":'.json_encode($resultado).'}';
					}
					else{
						echo "{resp: false, errors: { reason: 'La contrase&ntilde;a proporcionada no es la correcta' }}";
					}
				}
				else{
					echo "{resp: false, errors: { reason: 'El usuario ingresado se encuentra desactivado del sistema. Contacte al administrador' }}";
				}
				
			}
			else{
				echo "{resp: false, errors: { reason: 'El usuario ingresado no cuenta con acceso a este sistema' }}";
			}
		break;
		
		case 'datosLDAP':
			//echo "prueba";
			  require_once('../lib/ldap/ldap.php');   
			//require_once('../lib/ldap/activedirectory.php');
			//require_once('../lib/ldap/activedirectory_valores.php');
			//$resultado = ActiveDirectory_valores(strtolower($_REQUEST['tx_usuario']));
			//print_r($resultado);
			$resultado=verificar_usuario_i($_REQUEST['tx_usuario']);
			//print_r($resultado);
			$resultado=array("tx_indicador"=>utf8_decode($resultado['UID'][0]),"tx_usuario"=>utf8_decode($resultado['givenName'][0].' '.$resultado['sn'][0]));
			$total=0;
			//$output=array("tx_nombre"=>utf8_decode($datosUser['givenName'][0]),"tx_apellido"=>utf8_decode($datosUser['sn'][0]));
			//echo "{success: true, data:".json_encode(array_latin_to_utf($output))."}";
		break;
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
			$resultado = $objUsuario->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"]);
			//$_REQUEST['tx_usuario']
			
			
			//for($i=0; $i<count($resultado); $i++)
				//$resultado[$i]['resp'] = true;		
			$tot = $objUsuario->contar();
			//print_r($tot );
			$total = $tot[0]['cuenta'];
		//	if(is_object($objDocumento->pdo->monitor) && $objDocumento->pdo->monitor->notify_select)
		//	$objDocumento->pdo->popNotify(); // Libera posicion reg_padre
			
		break;
					
		case 'insertar':	 		               //  caso guardar 
		    $cond = $_REQUEST['Resultados'];
			$cond = str_replace('\"','"',$cond);
			$condicion['co_usuario']=$_REQUEST['condicion'];
			$registro = json_decode($cond, true);
			$registro = array_filter($registro, "vacio");
			
			if(isset($registro['tx_indicador']))
				$usuario['tx_indicador']=strtoupper($registro['tx_indicador']);
			
			if(isset($registro['tx_usuario']))
				$usuario['tx_usuario']=$registro['tx_usuario'];
			    
			if(isset($registro['co_ubicacion']))
			    $usuario['co_ubicacion']=$registro['co_ubicacion'];
			
			if(isset($registro['co_organizacion']))
			    $usuario['co_organizacion']=$registro['co_organizacion'];
			if(isset($registro['co_supervisor']))
			    $usuario['co_supervisor']=$registro['co_supervisor'];
			if(isset($registro['co_rol']))
			    $usuario['co_rol']=$registro['co_rol'];
			$usuario['bo_activo']=1;
			    
			  // $usuario['co_rol']='5';
			
			$filtros = $_REQUEST["filter"];		
			$resulta = $objUsuario->insertar($usuario);
			$resultado = $objUsuario->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"]);
		
			for($i=0; $i<count($resultado); $i++)
			$resultado[$i]['resp'] =$resulta;
			$tot = $objUsuario->contar();
			$total = $tot[0]['cuenta'];

		break;
		
		case 'modificar':	 		               //  caso guardar 
			$cond = $_REQUEST['Resultados'];
			$cond = str_replace('\"','"',$cond);
			$condicion['co_usuario']=$_REQUEST['condicion'];
			
			$registro = json_decode($cond, true);
			$registro = array_filter($registro, "vacio");
		
			if(isset($registro['tx_indicador']))
				$usuario['tx_indicador']=$registro['tx_indicador'];
			
			if(isset($registro['tx_usuario']))
				$usuario['tx_usuario']=$registro['tx_usuario'];
			
			if(isset($registro['co_rol']))
			    $usuario['co_rol']=$registro['co_rol'];
		
			if(isset($registro['co_supervisor']))
			    $usuario['co_supervisor']=$registro['co_supervisor'];
		
			if(isset($registro['co_ubicacion']))
			    $usuario['co_ubicacion']=$registro['co_ubicacion'];
		
			if(isset($registro['co_organizacion']))
			    $usuario['co_organizacion']=$registro['co_organizacion'];
			
			$filtros = $_REQUEST["filter"];		
			
			if($_REQUEST['xaction']=='create'){//Si estamos creando un Usuario
			   $resulta = $objUsuario->insertar($usuario);
			}
			else{//Si es un update
				if(isset($registro['co_usuario']))
				$condicion['co_usuario']=$registro['co_usuario'];
				$resulta = $objUsuario->actualizar($usuario, $condicion);
			}
			
			$resultado = $objUsuario->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"]);
		
			for($i=0; $i<count($resultado); $i++)
				$resultado[$i]['resp'] =$resulta;
			
			$tot = $objUsuario->contar();
				$total = $tot[0]['cuenta'];

		break;
		
		case 'eliminar':                                         //  caso  eliminar
			$condiciones['co_usuario']=$_REQUEST['co_usuario'];
			$resultado = $objUsuario->eliminar($condiciones);
			$filtros = $_REQUEST["filter"];	
			$resultado = $objUsuario->mostrar($_REQUEST['start'], $_REQUEST['limit'], $_REQUEST["sort"], $_REQUEST["dir"]);
			$tot = $objUsuario->contar();
			$total = $tot[0]['cuenta'];
		break;

	}	
	if($accion!='login')
		echo $resultado2='{"total":'.(($total)? $total : 0).', "Resultados":'.json_encode($resultado).'}';

?>
