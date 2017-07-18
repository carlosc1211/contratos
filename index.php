<?php 
	include('config/conf.php');
	session_start();
	session_destroy();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>[<?php echo $NAME?>] | <?php echo $FULL_NAME?></title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<!-- ** CSS ** -->
<!-- Base  -->
<link rel="stylesheet" type="text/css" href="<?php echo $EXTJS?>/resources/css/ext-all.css" />
<!-- Tema -->
<link rel="stylesheet" type="text/css" href="<?php echo $EXTJS?>/resources/css/xtheme-gray.css" />
<!-- Extensiones -->
<link href="<?php echo $EXTJS?>/examples/ux/css/Spinner.css" rel="stylesheet" type="text/css"/> 
<link href="<?php echo $EXTJS?>/examples/ux/css/LockingGridView.css" rel="stylesheet" type="text/css"/>
<link href="<?php echo $GANTT?>/css/sch-gantt-all.css" rel="stylesheet" type="text/css"/>
<link href="<?php echo $EXTJS?>/examples/ux/css/GroupTab_grey.css" rel="stylesheet" type="text/css"/>
<link href="<?php echo $EXTJS?>/examples/ux/css/RowEditor.css" rel="stylesheet" type="text/css"/>

<!-- CONTRATO -->
<link rel="stylesheet" type="text/css" href="css/iconos.css" />
<link rel="stylesheet" type="text/css" href="css/grid.css" />
<!-- ** JAVASCRIPT ** -->
<!-- Base  -->
<script type="text/javascript" src="<?php echo $EXTJS?>/adapter/ext/ext-base.js"></script>
<script type="text/javascript" src="<?php echo $EXTJS?>/ext-all.js"></script>

<!-- Idioma  -->
<script type="text/javascript" src="<?php echo $EXTJS?>/src/locale/ext-lang-es.js"></script>
<!-- Extensiones -->
<script type="text/javascript" src="<?php echo $EXTJS?>/examples/ux/RowExpander.js"></script> 
<script type="text/javascript" src="<?php echo $EXTJS?>/examples/ux/GroupTabPanel.js"></script> 
<script type="text/javascript" src="<?php echo $EXTJS?>/examples/ux/GroupTab.js"></script>
<script type="text/javascript" src="<?php echo $EXTJS?>/examples/ux/RowEditor.js"></script> 
<script type="text/javascript" src="<?php echo $EXTJS?>/examples/ux/LockingGridView.js"></script> 
<script type="text/javascript" src="<?php echo $EXTJS?>/examples/ux/Spinner.js"></script> 
<script type="text/javascript" src="<?php echo $EXTJS?>/examples/ux/SpinnerField.js"></script> 
<script type="text/javascript" src="<?php echo $EXTJS?>/examples/ux/gridfilters/GridFilters.js"></script> 
<script type="text/javascript" src="<?php echo $EXTJS?>/examples/ux/Ext.ux.Printer.js"></script> 
<script type="text/javascript" src="<?php echo $EXTJS?>/examples/ux/statusbar/StatusBar.js"></script> 
<!-- Filtros -->
<script type="text/javascript" src="<?php echo $EXTJS?>/examples/ux/gridfilters/menu/RangeMenu.js"></script> 
<script type="text/javascript" src="<?php echo $EXTJS?>/examples/ux/gridfilters/menu/ListMenu.js"></script> 
<script type="text/javascript" src="<?php echo $EXTJS?>/examples/ux/gridfilters/GridFilters.js"></script> 
<script type="text/javascript" src="<?php echo $EXTJS?>/examples/ux/gridfilters/filter/Filter.js"></script> 
<script type="text/javascript" src="<?php echo $EXTJS?>/examples/ux/gridfilters/filter/StringFilter.js"></script> 
<script type="text/javascript" src="<?php echo $EXTJS?>/examples/ux/gridfilters/filter/DateFilter.js"></script> 
<script type="text/javascript" src="<?php echo $EXTJS?>/examples/ux/gridfilters/filter/ListFilter.js"></script> 
<script type="text/javascript" src="<?php echo $EXTJS?>/examples/ux/gridfilters/filter/NumericFilter.js"></script> 
<script type="text/javascript" src="<?php echo $EXTJS?>/examples/ux/gridfilters/filter/BooleanFilter.js"></script> 

<!-- HIGHCHART  -->
<script type="text/javascript" src="lib/HighCharts/js/jquery-1.4.js"></script>
<script type="text/javascript" src="lib/HighCharts/js/highcharts.js"></script>
<script type="text/javascript" src="lib/HighCharts/js/modules/exporting.js"></script>
<!--<script type="text/javascript" src="lib/HighCharts/js/themes/grid.js"></script>-->
<!--Gantt components 
<script src="<?php echo $GANTT?>/sch-gantt-base-debug.js" type="text/javascript"></script> 
<script src="<?php echo $GANTT?>/sch-gantt-all-debug.js" type="text/javascript"></script> -->

<!--Application files 
<script src="<?php echo $GANTT?>/demo-gantt.js" type="text/javascript"></script> 
<script src="<?php echo $GANTT?>/advanced.js" type="text/javascript"></script>
<script src="<?php echo $GANTT?>/basic.js" type="text/javascript"></script> -->

<!-- CONTRATO -->
<script type="text/javascript" src="js/common.js"></script>
<script type="text/javascript" src="js/funciones.js"></script>
<script type="text/javascript" src="js/login.js"></script>
<script type="text/javascript" src="js/usuarios.js"></script>
<script type="text/javascript" src="js/planificacion.js"></script>
<script type="text/javascript" src="js/contratacion.js"></script>
<!--script type="text/javascript" src="js/admin.js"></script>-->
<script type="text/javascript" src="js/administracion.js"></script>
<script type="text/javascript" src="js/tabla.js"></script>
<script type="text/javascript" src="js/informesxls.js"></script>
<script type="text/javascript" src="js/reportes.js"></script>
<script type="text/javascript" src="js/index.js"></script>

<!-- FIN ARCHIVOS -->
</head>
<body onLoad="setInterval('validar_sesion()',60000);">
<div id="west"></div>
<div id="north" ></div>
<div id="south"></div>
</body>
</html>
