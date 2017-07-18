<?php  
error_reporting(E_ALL & ~E_NOTICE);
function ActiveDirectory_valores($usua)
{
    include '../config/conf.php';   
$ds=ldap_connect($SERVIDOR_LDAP);  // Debe ser un servidor LDAP valido!
if ($ds) {
    if($sr=@ldap_search( $ds,"OU=Usuarios,DC=pdvsa,DC=com","uid=$usua*"))
	{
			$info = ldap_get_entries($ds, $sr);
			return $info;
		   ldap_close($ds);
	}
	else return 0;
}
 else {
   return 2;
}
}
function ActiveDirectory_nombre($usua)
{
    include '../config/conf.php';
$ds=ldap_connect($SERVIDOR_LDAP);  // Debe ser un servidor LDAP valido!
if ($ds) {
    if($sr=@ldap_search( $ds,"OU=Usuarios,DC=pdvsa,DC=com","givenname=$usua*"))
	{
			$info = ldap_get_entries($ds, $sr);
			return $info;
		   ldap_close($ds);
	}
	else return 0;
}
 else {
   return 2;
}
}
function ActiveDirectory_apellido($usua)
{
    include '../config/conf.php';
$ds=ldap_connect($SERVIDOR_LDAP);  // Debe ser un servidor LDAP valido!
if ($ds) {
    if($sr=@ldap_search( $ds,"OU=Usuarios,DC=pdvsa,DC=com","sn=$usua*"))
	{
			$info = ldap_get_entries($ds, $sr);
			return $info;
		   ldap_close($ds);
	}
	else return 0;
}
 else {
   return 2;
}
}// end of  ActiveDirectory_valores($usua)


?>