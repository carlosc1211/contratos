<?php 
	session_start();
	include_once("../conf/conf.php");

class MyPDO extends PDO {

   /*** Attributes: ***/
    private $engine;
    private $host;
    private $database;
    private $user;
    private $pass;
 
    public  $pdo; 

    public function __construct($pdo=NULL){
	 if ($pdo==NULL){
        $this->engine = $BD_TYPE;
		$this->host = $BD_HOST;
		$this->port = $BD_PORT;
		$this->database = $BD_NAME;
		$this->user = $BD_USER;
		$this->pass = $BD_PASSWORD;
		$dns = $this->engine.':dbname='.$this->database.";host=".$this->host;
		
		try {
      		parent::__construct( $dns, $this->user, $this->pass );
		} catch (PDOException $e) {
			echo 'Conexin Fallida: <br/> Ha ocurrido un error al intentar establecer conexin con el servidor. Por favor contacte con el administrador o custodio de esta aplicacin para notificarle acerca de este error. ' ;  //. $e->getMessage();
			exit;
		}
		
	    $this->pdo= $this;
		$this->reg_padre=NULL;
		$this->reg_padre_detalle=NULL;
	  }
	    else{
		$this->pdo = $pdo;
		$this->reg_padre[$this->cont]=$pdo->reg_padre[$pdo->cont];
	 }
	// $this->monitor = new Monitor($this->pdo);
    } 


	public function _insert($tabla, $atributos){
		//echo $atributos);
		$comillas = "";
	    $columnas = array_keys($atributos);
		$insert = "INSERT INTO ".$tabla." (";
		for($i=0 ; $i< count($columnas); $i++)
			$insert .= ($i+1 == count($columnas)) ? $columnas[$i].") VALUES (" : $columnas[$i].", ";
				
		for($i=0 ; $i< count($atributos); $i++){
			$comillas = ((substr_count($atributos[$columnas[$i]], '$-'))>=1) ? "" : "'";
			if((substr_count($atributos[$columnas[$i]], '$-'))>=1) $atributos[$columnas[$i]] = str_replace("$-","", $atributos[$columnas[$i]]); 
			$insert .= ($i+1 == count($atributos)) ? $comillas.$atributos[$columnas[$i]].$comillas.");" : $comillas.$atributos[$columnas[$i]].$comillas.", ";
		}
			$r = $this->pdo->exec($insert);
			//echo $insert;
			$error = $this->pdo->errorInfo();
			if(is_object($this->pdo->monitor) && $this->pdo->monitor->notify_insert)
					$this->pdo->Notify($error[2]." - ".$insert, 'detalle');
			if($r == NULL)
					return  get_class($this)." - ".__METHOD__." - ".$error[2]."\n";
			else				
				return $r;
	}


	public function _update($tabla, $atributos, $condiciones){
		$columnas = array_keys($atributos);
		$columCond = array_keys($condiciones);
		$update = "UPDATE ".$tabla." SET ";
		for($i=0 ; $i< count($columnas); $i++)
			$update .= ($i+1 == count($columnas)) ? $columnas[$i]."='".$atributos[$columnas[$i]]."'" : $columnas[$i]."='".$atributos[$columnas[$i]] ."', ";
		if(is_array($condiciones)){
			$update .= ' WHERE ';
			for($i=0 ; $i< count($condiciones); $i++)
				$update .= ($i+1 == count($condiciones)) ? $columCond[$i]."='".$condiciones[$columCond[$i]]."';" : $columCond[$i]."='".$condiciones[$columCond[$i]] ."' AND ";
		}
		//echo $update;
		$r = $this->pdo->exec($update);
		$error = $this->pdo->errorInfo();
		
		if(is_object($this->pdo->monitor) && $this->pdo->monitor->notify_update)
					$this->pdo->Notify($error[2]." - ".$update, 'detalle');
		if($r == NULL){
			return  get_class($this)." - ".__METHOD__." - ".$error[2]."\n";
		}
		else
			return true;
	}
	
	
	public function _delete($tabla, $condiciones){
		$columCond = array_keys($condiciones);
		$delete = "DELETE FROM ".$tabla;
		
		if(is_array($condiciones)){
			$delete .= ' WHERE ';
			for($i=0 ; $i< count($condiciones); $i++)
				$delete .= ($i+1 == count($condiciones)) ? $columCond[$i]."='".$condiciones[$columCond[$i]]."';" : $columCond[$i]."='".$condiciones[$columCond[$i]] ."' AND ";
		}
		$r = $this->pdo->exec($delete);
		$error = $this->pdo->errorInfo();
		if(is_object($this->pdo->monitor) && $this->pdo->monitor->notify_delete)
					$this->pdo->Notify($error[2]." - ".$delete, 'detalle');
		if($error[2]){
			return  get_class($this)." - ".__METHOD__." -  ".$error[2]."\n";
		}
		else
			return true;
	}
	
	public function _query($query, $notify=true){
		if(is_object($this->pdo->monitor) && $this->pdo->monitor->notify_select)
			$this->pdo->Notify($query, 'detalle');
		$r = $this->pdo->query($query);
	//	echo $query;
		 if($r!=NULL){
	  		$result = $r->fetchALL(PDO::FETCH_ASSOC);
			return $result;
		} 
		else{
			$error = $this->pdo->errorInfo();
			return $error[2];
		}
	}
	
	public function _queryBind($query, $campo, $notify=true){
		$aux=NULL;
		if(is_object($this->pdo->monitor) && $this->pdo->monitor->notify_select)
			$this->pdo->Notify($query, 'detalle');
		$r = $this->pdo->query($query);
		 if($r!=NULL){
		 	$r->bindColumn($campo, $aux, PDO::PARAM_STR);
	  		$result = $r->fetch(PDO::FETCH_BOUND);
			return $aux;
		} 
		else{
			$error = $this->pdo->errorInfo();
			return $error[2];
		}
	}


  public function filtrarQuery($filter) {	
	$where = "";
	if (is_array($filter)) {	
		for ($i=0;$i<count($filter);$i++){
			switch($filter[$i]['data']['type']){
				case 'string' : 
					switch ($filter[$i]['data']['comparison']) {
						case 'ne' : 
							$qs .= " AND ".$this->columFiltros[$filter[$i]['field']]." NOT ILIKE '".$filter[$i]['data']['value']."%'"; 
						break;
						default:
							$qs .= " AND ".$this->columFiltros[$filter[$i]['field']]." ILIKE '".$filter[$i]['data']['value']."%'"; 
					}				
				break;
				case 'list' : 
					if (strstr($filter[$i]['data']['value'],',')){
						$fi = explode(',',$filter[$i]['data']['value']);
						for ($q=0;$q<count($fi);$q++){
							$fi[$q] = "'".$fi[$q]."'";
						}
						$filter[$i]['data']['value'] = implode(',',$fi);
						$qs .= " AND ".$this->columFiltros[$filter[$i]['field']]." IN (".$filter[$i]['data']['value'].")"; 
					}else{
						$qs .= " AND ".$this->columFiltros[$filter[$i]['field']]." = '".$filter[$i]['data']['value']."'"; 
					}
				break;
				case 'boolean' : 
					$qs .= " AND ".$this->columFiltros[$filter[$i]['field']]." = ".($filter[$i]['data']['value']); 
				break;
				case 'numeric' : 
					switch ($filter[$i]['data']['comparison']) {
						case 'eq' : 
							$qs .= " AND ".$this->columFiltros[$filter[$i]['field']]." = ".$filter[$i]['data']['value']; 
						break;
						case 'lt' : 
							$qs .= " AND ".$this->columFiltros[$filter[$i]['field']]." < ".$filter[$i]['data']['value']; 
						break;
						case 'gt' : 
							$qs .= " AND ".$this->columFiltros[$filter[$i]['field']]." > ".$filter[$i]['data']['value']; 
						break;
					}
				break;
				case 'date' : 
					switch ($filter[$i]['data']['comparison']) {
						case 'eq' : 
							$qs .= " AND ".$this->columFiltros[$filter[$i]['field']]." = '".date('Y-m-d',strtotime($filter[$i]['data']['value']))."'"; 
						break;
						case 'lt' : 
							$qs .= " AND ".$this->columFiltros[$filter[$i]['field']]." < '".date('Y-m-d',strtotime($filter[$i]['data']['value']))."'"; 
						break;
						case 'gt' : 
							$qs .= " AND ".$this->columFiltros[$filter[$i]['field']]." > '".date('Y-m-d',strtotime($filter[$i]['data']['value']))."'"; 
						break;
					}
				break;
			}
		}	
		$where .= $qs;
	}  
	return $where;
  }
  } // end of member function cargarConductores// end of MyPDO
?>
