var accion='';
var co_contrato='';
var co_cierre_procedimiento=1;
var co_tipo_modificacion=20;
var co_pedido='';
var co_recobro='';
var co_valuacion='';
var co_unidades='';
var nuevo_dato=1;
var nuevo_anticipo=1;
var nuevo_aporte=1;
var nuevo_condiciones=1;
var nuevo_valuacion=1;
var nuevo_modificacion=1;
var nuevo_Fianzas=1;
var nuevo_Paralizaciones=1;
var nuevo_Variaciones=1;
var nuevo_cierre=1;
var nuevo_usuario=1;

function limpiarFormu(){
/*
Ext.getCmp("nu_contrato_comision").setValue('');
Ext.getCmp("nu_solped_contrato").setValue('');
Ext.getCmp("nu_contrato_sapp").setValue('');
//Ext.getCmp("nu_contrato_comision").setValue('');
Ext.getCmp("nu_expediente_contrato").setValue('');
Ext.getCmp("fe_inicio").setValue('');
Ext.getCmp("fe_culminacion").setValue('');
Ext.getCmp("fe_prorroga_inicio").setValue('');
Ext.getCmp("fe_estimada").setValue('');
Ext.getCmp("fe_carta_preliminar").setValue('');
Ext.getCmp("nu_ejecucion").setValue('');
Ext.getCmp("fe_firma_contrato").setValue('');
Ext.getCmp("tx_observacion").setValue('');
Ext.getCmp("nu_monto_total_adjudicado_bs").setValue('');
Ext.getCmp("nu_monto_total_adjudicado_dol").setValue('');
Ext.getCmp("nu_monto_total_adjudicado_euro").setValue('');
Ext.getCmp("nu_monto_total_adjudicado").setValue('');
//Ext.getCmp("usuarios").store.reload({params:{accion:'datos_usuario'}});
//Ext.getCmp("usuarios").setValue(Ext.getCmp("usuarios").store.getAt(0).get('co_usuario'));
//Ext.getCmp("usuarios").setValue(Ext.getCmp("usuarios").store.getAt(0).get('co_supervisor'));
//Ext.getCmp("usuario").setValue('');
Ext.getCmp("usuarios").setValue(tx_usuario);
Ext.getCmp("usuario").setValue(tx_supervisor);
//Ext.getCmp("usuarios").setValue(co_usuario);
*/
Ext.getCmp("co_filial").setValue('');
Ext.getCmp("co_direccion").setValue('');
Ext.getCmp("co_division").setValue('');
Ext.getCmp("co_distrito").setValue('');
//Ext.getCmp("co_organizacion").setValue('');
/*
Ext.getCmp("tx_empresaa").setValue('');
Ext.getCmp("nu_rif").setValue('');
Ext.getCmp("nu_acreedorr").setValue('');
Ext.getCmp("tx_ubi_empresa").setValue('');
Ext.getCmp("nu_telefonicoo").setValue('');
Ext.getCmp("nu_telefonico_opcionall").setValue('');
Ext.getCmp("tx_tipo_empresaa").setValue('');
Ext.getCmp("nu_aporte_compromiso_contrato").setValue('');
Ext.getCmp("nu_upcc").setValue('');
Ext.getCmp("nu_porc_recobro").setValue('');
Ext.getCmp("nu_recobro").setValue('');
Ext.getCmp("nu_monto_pagado_recobro").setValue('');
Ext.getCmp("nu_monto_pendiente_recobro").setValue('');
Ext.getCmp("nu_monto_recobrado").setValue('');
Ext.getCmp("tx_moneda").setValue('');
Ext.getCmp("nu_porc_recobro2").setValue('');
Ext.getCmp("nu_recobro2").setValue('');
Ext.getCmp("nu_monto_pagado_recobro2").setValue('');
Ext.getCmp("nu_monto_pendiente_recobro2").setValue('');
Ext.getCmp("nu_monto_recobrado2").setValue('');
Ext.getCmp("co_moneda_2").setValue('');
Ext.getCmp("nu_porc_recobro3").setValue('');
Ext.getCmp("nu_recobro3").setValue('');
Ext.getCmp("nu_monto_pagado_recobro3").setValue('');
Ext.getCmp("nu_monto_pendiente_recobro3").setValue('');
Ext.getCmp("nu_monto_recobrado3").setValue('');
Ext.getCmp("co_moneda_3").setValue('');
Ext.getCmp("pedido").setValue('');
Ext.getCmp("nu_monto_total").setValue('');
Ext.getCmp("tx_moneda_v").setValue('');
Ext.getCmp("nu_monto_consumido_calculado").setValue('');
Ext.getCmp("nu_monto_disponible_calculado").setValue('');
Ext.getCmp("fe_periodoi").setValue('');
Ext.getCmp("fe_periodof").setValue('');
Ext.getCmp("nu_valuacion").setValue('');
Ext.getCmp("fe_recibido").setValue('');
Ext.getCmp("fe_aprobacion").setValue('');
Ext.getCmp("fe_entrega").setValue('');
Ext.getCmp("tx_detalle_serv").setValue('');
Ext.getCmp("co_modificacion").setValue('');
Ext.getCmp("nu_valor").setValue('');
Ext.getCmp("co_monedaaaaa").setValue('');
Ext.getCmp("fe_valor").setValue('');
Ext.getCmp("tx_descripcion_mod").setValue('');
Ext.getCmp("fianza").setValue('');
Ext.getCmp("nu_valorr").setValue('');
Ext.getCmp("co_monedaa").setValue('');
Ext.getCmp("fe_valorr").setValue('');
Ext.getCmp("tx_descripcion_mods").setValue('');
Ext.getCmp("paralizaciones").setValue('');
Ext.getCmp("nu_valor_r").setValue('');
Ext.getCmp("comonedaa").setValue('');
Ext.getCmp("fe_valorr_r").setValue('');
Ext.getCmp("tx_descripcion_mods_s").setValue('');
Ext.getCmp("variaciones").setValue('');
Ext.getCmp("nu_valor_rr").setValue('');
Ext.getCmp("coomonedaa").setValue('');
Ext.getCmp("fe_valor_rr").setValue('');
Ext.getCmp("tx_descripcion_mod_ss").setValue('');
Ext.getCmp("co_cierre").setValue('');
Ext.getCmp("monto_totalllaa").setValue('');
Ext.getCmp("mone").setValue('');
Ext.getCmp("fe_registro4").setValue('');
Ext.getCmp("tx_desctipcion4").setValue('');
Ext.getCmp("co_moneda").setValue('');
*/
/*
//para limpar el grid
Ext.getCmp("GridPedido").store.removeAll();
Ext.getCmp("GridAnticipo").store.removeAll();
Ext.getCmp("GridAporte").store.removeAll();
Ext.getCmp("GridCondiciones").store.removeAll();
Ext.getCmp("GridValuacion").store.removeAll();
Ext.getCmp("gridmodificaciones").store.removeAll();
Ext.getCmp("grid_control").store.removeAll();
Ext.getCmp("cierre").store.removeAll();
*/	
}
/*
function datosAnticipo(){
	
	datos = '{"nu_porc_recobro" : "'+Ext.getCmp("nu_porc_recobro").getValue()+'",';
	datos += '"nu_recobro" : "'+Ext.getCmp("nu_recobro").getValue()+'", ';
	datos += '"nu_monto_pagado_recobro" : "'+Ext.getCmp("nu_monto_pagado_recobro").getValue()+'", ';
	datos += '"nu_monto_recobrado" : "'+Ext.getCmp("nu_monto_recobrado").getValue()+'", ';
	datos += ' "nu_monto_pendiente_recobro" : "'+Ext.getCmp("nu_monto_pendiente_recobro").getValue()+'", ';
	datos += '"co_moneda" : "'+Ext.getCmp("tx_moneda").getValue()+'"}';
	
	return datos;
}
function datosAporte(){
	
	datos = '{"nu_porc_recobro" : "'+Ext.getCmp("nu_porc_recobro2").getValue()+'", ';
	datos += '"nu_recobro" : "'+Ext.getCmp("nu_recobro2").getValue()+'", ';
	datos += '"nu_monto_pagado_recobro" : "'+Ext.getCmp("nu_monto_pagado_recobro2").getValue()+'", ';
	datos += '"nu_monto_recobrado" : "'+Ext.getCmp("nu_monto_pendiente_recobro2").getValue()+'", ';
	datos += '"nu_monto_pendiente_recobro" : "'+Ext.getCmp("nu_monto_recobrado2").getValue()+'", ';
	datos += '"co_moneda" : "'+Ext.getCmp("co_moneda_2").getValue()+'"}';
	
	return datos;
}
function datosCondiciones(){
	
	datos = '{"nu_porc_recobro" : "'+Ext.getCmp("nu_porc_recobro3").getValue()+'", ';
	datos += '"nu_recobro" : "'+Ext.getCmp("nu_recobro3").getValue()+'", ';
	datos += '"nu_monto_pagado_recobro" : "'+Ext.getCmp("nu_monto_pagado_recobro3").getValue()+'", ';
	datos += '"nu_monto_recobrado" : "'+Ext.getCmp("nu_monto_pendiente_recobro3").getValue()+'", ';
	datos += '"nu_monto_pendiente_recobro" : "'+Ext.getCmp("nu_monto_recobrado3").getValue()+'", ';
	datos += '"co_moneda" : "'+Ext.getCmp("co_moneda_3").getValue()+'"}';
	
	return datos;
}
function datosvaluaciones(){
	
	datos = '{"fe_periodoi" : "'+convFecha(Ext.getCmp("fe_periodoi").getValue())+'", ';
	datos += '"fe_periodof" : "'+convFecha(Ext.getCmp("fe_periodof").getValue())+'", ';
	datos += '"nu_monto_disponible_calculado" : "'+Ext.getCmp("nu_monto_disponible_calculado").getValue()+'", ';
	datos += '"fe_recibido" : "'+convFecha(Ext.getCmp("fe_recibido").getValue())+'", ';
	datos += '"fe_entrega" : "'+convFecha(Ext.getCmp("fe_entrega").getValue())+'", ';
	datos += '"tx_detalle_serv" : "'+Ext.getCmp("tx_detalle_serv").getValue()+'", ';
	datos += '"co_moneda" : "'+Ext.getCmp("tx_moneda_v").getValue()+'", ';
	datos += '"nu_monto_consumido_calculado" : "'+Ext.getCmp("nu_monto_consumido_calculado").getValue()+'", ';
	datos += '"nu_valuacion" : "'+Ext.getCmp("nu_valuacion").getValue()+'", ';
	datos += '"co_pedido" : "'+Ext.getCmp("pedido").getValue()+'", ';
	datos += '"fe_aprobacion" : "'+convFecha(Ext.getCmp("fe_aprobacion").getValue())+'"}';
	
	return datos;
}
function datosModificaciones(){
	
	datos = '{"co_tipo_modificacion" : "'+Ext.getCmp("co_modificacion").getValue()+'", ';
	datos += '"nu_valor" : "'+Ext.getCmp("nu_valor").getValue()+'", ';
	//datos += '"nu_modificacion" : "'+Ext.getCmp("nu_modificacion").getValue()+'", ';
	datos += '"co_moneda" : "'+Ext.getCmp("co_monedaaaaa").getValue()+'", ';
	datos += '"tx_moneda" : "'+Ext.getCmp("co_monedaaaaa").getValue()+'", ';
	datos += '"fe_valor" : "'+convFecha(Ext.getCmp("fe_valor").getValue())+'", ';
	//datos += '"tx_tipo_modificacion" : "'+Ext.getCmp("tx_tipo_modificacion").getValue()+'", ';
	//datos += '"co_tipo_variacion" : "'+Ext.getCmp("co_tipo_variacion").getValue()+'", ';
	//datos += '"tx_tipo_variacion" : "'+Ext.getCmp("tx_tipo_variacion").getValue()+'", ';
	//datos += '"fe_registro" : "'+convFecha(Ext.getCmp("fe_registro").getValue())+'", ';
	datos += '"tx_descripcion_mod" : "'+Ext.getCmp("tx_descripcion_mod").getValue()+'"}';
	
	return datos;
}
function datosFianzas(){
	
	datos = '{"co_tipo_modificacion" : "'+Ext.getCmp("fianza").getValue()+'", ';
	datos += '"nu_valor" : "'+Ext.getCmp("nu_valorr").getValue()+'", ';
	//datos += '"nu_modificacion" : "'+Ext.getCmp("nu_modificacion").getValue()+'", ';
	datos += '"co_moneda" : "'+Ext.getCmp("co_monedaa").getValue()+'", ';
	//datos += '"tx_moneda" : "'+Ext.getCmp("co_monedaaaaa").getValue()+'", ';
	datos += '"fe_valor" : "'+convFecha(Ext.getCmp("fe_valorr").getValue())+'", ';
	datos += '"tx_descripcion_mod" : "'+Ext.getCmp("tx_descripcion_mods").getValue()+'"}';
	
	return datos;
}
function datosParalizaciones(){
	
	datos = '{"co_tipo_modificacion" : "'+Ext.getCmp("paralizaciones").getValue()+'", ';
	datos += '"nu_valor" : "'+Ext.getCmp("nu_valor_r").getValue()+'", ';
	//datos += '"nu_modificacion" : "'+Ext.getCmp("nu_modificacion").getValue()+'", ';
	datos += '"co_moneda" : "'+Ext.getCmp("comonedaa").getValue()+'", ';
	//datos += '"tx_moneda" : "'+Ext.getCmp("co_monedaaaaa").getValue()+'", ';
	datos += '"fe_valor" : "'+convFecha(Ext.getCmp("fe_valorr_r").getValue())+'", ';
	datos += '"tx_descripcion_mod" : "'+Ext.getCmp("tx_descripcion_mods_s").getValue()+'"}';
	
	return datos;
}
function datosVariaciones(){
	
	datos = '{"co_tipo_modificacion" : "'+Ext.getCmp("variaciones").getValue()+'", ';
	datos += '"nu_valor" : "'+Ext.getCmp("nu_valor_rr").getValue()+'", ';
	//datos += '"nu_modificacion" : "'+Ext.getCmp("nu_modificacion").getValue()+'", ';
	datos += '"co_moneda" : "'+Ext.getCmp("coomonedaa").getValue()+'", ';
	//datos += '"tx_moneda" : "'+Ext.getCmp("co_monedaaaaa").getValue()+'", ';
	datos += '"fe_valor" : "'+convFecha(Ext.getCmp("fe_valor_rr").getValue())+'", ';
	datos += '"tx_descripcion_mod" : "'+Ext.getCmp("tx_descripcion_mod_ss").getValue()+'"}';
	
	return datos;
}
function datosCierre(){
	
	datos = '{"co_tipo_modificacion" : "'+Ext.getCmp("co_cierre").getValue()+'", ';
	datos += '"nu_valor" : "'+Ext.getCmp("monto_totalllaa").getValue()+'", ';
	datos += '"co_moneda" : "'+Ext.getCmp("mone").getValue()+'", ';
	datos += '"fe_valor" : "'+convFecha(Ext.getCmp("fe_registro4").getValue())+'", ';
	datos += '"tx_descripcion_mod" : "'+Ext.getCmp("tx_desctipcion4").getValue()+'"}';
	
	return datos;
}
function datosusuario(){
	
	datos = '{"co_supervisor" : "'+Ext.getCmp("usuario").getValue()+'", ';
	datos += '"co_usuario" : "'+Ext.getCmp("usuarios").getValue()+'"}';
	
	return datos;
}
*/
function datoscontrato(){

	if(Ext.getCmp("co_filial").getValue()!='')co_ubicacion=Ext.getCmp("co_filial").getValue();
	if(Ext.getCmp("co_direccion").getValue()!='')co_ubicacion=Ext.getCmp("co_direccion").getValue();
	if(Ext.getCmp("co_division").getValue()!='')co_ubicacion=Ext.getCmp("co_division").getValue();
	if(Ext.getCmp("co_distrito").getValue()!='')co_ubicacion=Ext.getCmp("co_distrito").getValue();
	if(Ext.getCmp("co_organizacion").getValue()!='')i005t_organizacion=Ext.getCmp("co_organizacion").getValue();
	
	if(IsNumeric(Ext.getCmp("usuarios").getValue())!=true)tem_co_usuario=co_usuario;
	else
	tem_co_usuario=Ext.getCmp("usuarios").getValue();
	
	if(IsNumeric(Ext.getCmp("usuario").getValue())!=true)
	tem_co_supervisor=co_supervisor;
	else
	tem_co_supervisor=Ext.getCmp("usuario").getValue();
	
	datos = '{"co_filial" : "'+Ext.getCmp("co_filial").getValue()+'", ';
	//datos += '"co_ubicacion" : "'+co_ubicacion+'", ';
	datos += '"co_direccion" : "'+Ext.getCmp("co_direccion").getValue()+'", ';
	datos += '"co_division" : "'+Ext.getCmp("co_division").getValue()+'", ';
	datos += '"co_distrito" : "'+Ext.getCmp("co_distrito").getValue()+'", ';
	datos += '"co_organizacion" : "'+Ext.getCmp("co_organizacion").getValue()+'", ';
	/*
	datos += '"tx_empresa" : "'+Ext.getCmp("tx_empresaa").getValue()+'", ';
	datos += '"nu_rif" : "'+Ext.getCmp("nu_rif").getValue()+'", ';
	datos += '"nu_acreedor" : "'+Ext.getCmp("nu_acreedorr").getValue()+'", ';
	datos += '"nu_telefonico" : "'+Ext.getCmp("nu_telefonicoo").getValue()+'", ';
	datos += '"nu_telefonico_opcional" : "'+Ext.getCmp("nu_telefonico_opcionall").getValue()+'", ';
	datos += '"co_tipo_empresa" : "'+Ext.getCmp("tx_tipo_empresaa").getValue()+'", ';
	datos += '"nu_contrato_sap" : "'+Ext.getCmp("nu_contrato_sapp").getValue()+'", ';
	datos += '"nu_solped_contrato" : "'+Ext.getCmp("nu_solped_contrato").getValue()+'", ';
	datos += '"nu_contrato_comision" : "'+Ext.getCmp("nu_contrato_comision").getValue()+'", ';
	datos += '"nu_expediente_contrato" : "'+Ext.getCmp("nu_expediente_contrato").getValue()+'", ';
	datos += '"fe_inicio" : "'+convFecha(Ext.getCmp("fe_inicio").getValue())+'", ';
	datos += '"fe_culminacion" : "'+convFecha(Ext.getCmp("fe_culminacion").getValue())+'", ';
	datos += '"fe_prorroga_inicio" : "'+convFecha(Ext.getCmp("fe_prorroga_inicio").getValue())+'", ';
	datos += '"fe_estimada" : "'+convFecha(Ext.getCmp("fe_estimada").getValue())+'", ';
	datos += '"fe_carta_preliminar" : "'+convFecha(Ext.getCmp("fe_carta_preliminar").getValue())+'", ';
	datos += '"nu_ejecucion" : "'+Ext.getCmp("nu_ejecucion").getValue()+'", ';
	datos += '"fe_firma_contrato" : "'+convFecha(Ext.getCmp("fe_firma_contrato").getValue())+'", ';
	datos += '"tx_observacion_empresa" : "'+Ext.getCmp("tx_observacion").getValue()+'", ';
	datos += '"nu_monto_total_adjudicado_bsf" : "'+Ext.getCmp("nu_monto_total_adjudicado_bs").getValue()+'", ';
	datos += '"nu_monto_total_adjudicado_dol" : "'+Ext.getCmp("nu_monto_total_adjudicado_dol").getValue()+'", ';
	datos += '"nu_monto_total_adjudicado_euro" : "'+Ext.getCmp("nu_monto_total_adjudicado_euro").getValue()+'", ';
	datos += '"nu_monto_total_adjudicado" : "'+Ext.getCmp("nu_monto_total_adjudicado").getValue()+'", ';
	datos += '"nu_aporte_compromiso_contrato" : "'+Ext.getCmp("nu_aporte_compromiso_contrato").getValue()+'", ';
	datos += '"co_supervisor" : "'+tem_co_supervisor+'", ';
	datos += '"co_usuario" : "'+tem_co_usuario+'", ';
	datos += '"co_cierre_procedimiento" : "'+co_cierre_procedimiento+'", ';
	datos += '"nu_upc" : "'+Ext.getCmp("nu_upcc").getValue()+'"}';
	*/
	return datos;
}
function validacion_guardar(){
	var valido=1;
	if(Ext.getCmp("co_filial").getValue()!='')co_ubicacion=Ext.getCmp("co_filial").getValue();
	if(Ext.getCmp("co_direccion").getValue()!='')co_ubicacion=Ext.getCmp("co_direccion").getValue();
	if(Ext.getCmp("co_division").getValue()!='')co_ubicacion=Ext.getCmp("co_division").getValue();
	if(Ext.getCmp("co_distrito").getValue()!='')co_ubicacion=Ext.getCmp("co_distrito").getValue();
	if (co_ubicacion==0)
		valido=0;
		/*
	if (Ext.getCmp("nu_rif").getValue()=='')
		valido=0;
	if (Ext.getCmp("nu_solped_contrato").getValue()=='')
		valido=0;
	if (Ext.getCmp("nu_monto_total_adjudicado").getValue()=='')
		valido=0;
	//console.log (co_ubicacion+'|'+valido);						*/
	return valido;
}

//********************************************STORE_ADMINISTRACION********************************************************
var writer = new Ext.data.JsonWriter();
var store_administracion = new Ext.data.JsonStore({     
	 id:'store_administracion',
	 url: 'php/AdministracionInterfaz.php', 
	 writer: writer,
	 batch:false,
	 root: 'Resultados',
	 baseParams: {accion:'refrescar'},
        fields: [
        /*
					{name:'co_contrato'},
					{name:'nu_solped_contrato'},            	 //tabla proceso
					{name:'nu_contrato_sap'},       			 //tabla  contrato
					{name:'nu_contrato_comision'},       		 //tabla  contrato
					{name:'nu_expediente_contrato'},        	 //tabla proceso
					{name:'fe_inicio'},                			 //tabla contrato
					{name:'fe_culminacion'},          			 //tabla contrato
					{name:'fe_prorroga_inicio'},             	 //tabla contrato
					{name:'fe_estimada'},             			 //tabla contrato
					{name:'fe_carta_preliminar'},     			 //tabla contrato
					{name:'nu_ejecucion'},         				 //tabla contrato
					{name:'fe_firma_contrato'},      			 //tabla contrato
					{name:'tx_observacion_empresa'}, 			 //tabla contrato
					{name:'nu_monto_total_adjudicado_bsf'},		 //tabla contrato
					{name:'nu_monto_total_adjudicado_dol'},		 //tabla contrato
					{name:'nu_monto_total_adjudicado_euro'},	 //tabla contrato
					{name:'nu_monto_adjudicado_equivalente'},	 //tabla contrato
					{name:'nu_monto_total_adjudicado'},   		 //tabla contrato
					{name:'co_usuario'},					 	 //tabla usuario(2id= usuario y usuarios "para poder limpiar en un nuevo registro")
					{name:'co_supervisor'},
					{name:'tx_supervisor'},
					{name:'tx_usuario'},
					{name:'tx_indicador'},
					{name:'co_ubicacion'}, 					 //colocar los 4... revisar lo que esta pasando en esos combos
			*/		
					{name:'co_direccion'},
					{name:'tx_direccion'},
					{name:'tx_ubicacion_final'},
					{name:'tx_filial'},
					{name:'co_filial'},
					{name:'tx_distrito'},
					{name:'co_distrito'},
					{name:'co_organizacion'},
					{name:'co_division'},
					{name:'tx_division'},			
			/*		
					{name:'tx_empresa'},                   	 //tabla empresa
					{name:'co_empresa'},
					{name:'nu_rif'},					 	 //tabla empresa
					{name:'nu_acreedor'}, 					 //tabla empresa
					{name:'tx_ubi_empresa'},				 //tabla empresa
					{name:'nu_telefonico'},					 //tabla empresa_proceso
					{name:'nu_telefonico_opcional'},		 //tabla empresa_proceso
					{name:'co_tipo_empresa'},				 //tabla tipo_empresa
					{name:'tx_tipo_empresa'},
					{name:'tx_organizacion'},
					{name:'nu_monto_valuacion'},
					{name:'nu_telefonico'},
					{name:'nu_aporte_compromiso_contrato'},
					{name:'nu_upc'}
				*/      
				],
				
				//"co_division_padre":"3","co_direccion_padre":"1","co_filial_padre":null,"co_distritoo":"10","tx_distrito":"EM GUIRIA","tx_ubicacion_final":"EM GUIRIA","tx_supervisor"
				
baseParams: {  accion:'refrescar',
			   filter: ''
		           //tx_indicador:Usuario.usuario
			},
listeners:  {
					update : function(store,record,operation) {   
																// function actualizar // update
																//alert(operation);
																if(operation=='edit'){
																						//store_Administracion.commitChanges(); 
																					  }
															     },
				remove : function(store, record,index){store.reload({params:{co_contrato:record.get('co_contrato')}});}
			}
});
//store_administracion.reload({params:{tab:'pendientes'}});
//******************************************FIN STORE ADMINISTRACION******************************************************

//********************************************GRID ADMINISTRACION*********************************************************
var grid = new Ext.grid.GridPanel({
    store: store_administracion, 
    title: 'Gesti&oacute;n de Administraci&oacute;n de Contratos',
	//width:1082,
    anchor:'100%',
    height: 800, //ojo despues pasar a 800
	margins: '0 5 5 5',
    //region:'center',
    stripeRows: true,
    autoScroll:false, 
    id:'grid_administracion',
           
	columns:[
				new Ext.grid.RowNumberer(),
				
				{header: 'N&deg; SOLP', width: 80, sortable: true, dataIndex: 'nu_solped_contrato'},
				/*{header: 'N&deg; Contrato SAP', width: 80, sortable: true, dataIndex: 'nu_contrato_sap'},*/
				/*{header: 'N&deg; Contrato Comision', width: 80, sortable: true, dataIndex: 'nu_contrato_comision'},*/
				{header: 'Supervisor', width: 80, sortable: true, dataIndex: 'tx_supervisor'},
				{header: 'Analista', width: 80, sortable: true, dataIndex: 'tx_usuario'},
				{header: 'Organizaci&oacute;n', width: 80, sortable: true, dataIndex: 'tx_organizacion'},
				{header: 'Nombre de la Empresa', width: 125, sortable: true, dataIndex: 'tx_empresa'},
				{header: 'N&deg; Telefonico', width: 95, sortable: true, dataIndex: 'nu_telefonico'},
				{header: 'Tipo de Empresa', width: 100, sortable: true, dataIndex: 'tx_tipo_empresa'},
				/*{header: 'Observacion', width: 125, sortable: true, dataIndex: 'tx_descripcion'},*/
				
				{header: 'Fecha de Inicio', width: 95, sortable: true, renderer:formato_fecha, format:'d-m-Y', dataIndex: 'fe_inicio'},
				{header: 'Fecha de Culminaci&oacute;n', width: 120, sortable: true, renderer:formato_fecha, format:'d-m-Y', dataIndex: 'fe_culminacion'},
				{header: 'Monto Contratado', width: 95, sortable: true, /*renderer: 'usMoney', */ dataIndex: 'nu_monto_total_adjudicado'},
				{header: 'Dias de Pr&oacute;rroga', width: 100, sortable: true, dataIndex: 'nu_nuevo_plazo'},
				{header: 'Monto Modificado', width: 110, sortable: true, /*renderer: 'usMoney',*/ dataIndex: 'nu_monto_modificado'}
			],
	
	listeners: 	{
					'rowdblclick': function (grid,rowIndex,e) 
					{
						accion='modificar';
						//co_cierre_procedimiento:1;
						co_contrato=grid.store.getAt(rowIndex).get('co_contrato');
						//console.log(grid.store.getAt(rowIndex).get('co_contrato'));
						win.setTitle('N&deg; SOLP: '+grid.store.getAt(rowIndex).get('nu_solped_contrato')); //para colocar nombre al encabezado de la ventana dependiendo de (x)campo del formularia
						win.show(this);
						
						store_Anticipo.reload({params:{co_contrato:co_contrato}});
						store_Aporte.reload({params:{co_contrato:co_contrato}});
						store_Condiciones.reload({params:{co_contrato:co_contrato}});
						store_Valuacion.reload({params:{co_contrato:co_contrato}});
						store_Modificaciones.reload({params:{co_contrato:co_contrato}});
						store_Cierre.reload({params:{co_contrato:co_contrato}});
						store_control.reload({params:{co_contrato:co_contrato}});
						
						
						GridPedido.store.reload
									({    
										params:
										{
											co_contrato:co_contrato,  
											accion:'refrescar'
										}
									});
					}
				},
					   //Carga los datos en el formulario 	    
	sm: new Ext.grid.RowSelectionModel
	({
		singleSelect: true,
		listeners: {
						rowselect: function(sm, row, rec)  
						{
							 DatosFom.getForm().loadRecord(rec);
							 PedidoFom.getForm().loadRecord(rec);
							 AnticipoFom.getForm().loadRecord(rec);
							 AporteFom.getForm().loadRecord(rec);
							 CondicionesFom.getForm().loadRecord(rec);
							 ValuacionesFom.getForm().loadRecord(rec);
							 ModificacionesFom.getForm().loadRecord(rec);
							 controlFom.getForm().loadRecord(rec);
							 CierreFom.getForm().loadRecord(rec);
							 
							 //recargar el combo pedido
							 Ext.getCmp('pedido').store.reload({params:{accion:'pedido',valor:rec.data.co_contrato}});
							 Ext.getCmp('tx_tipo_empresaa').store.reload({params:{accion:'tipo_empresa'}});
							 
							 //para que los id no tengan problemas
							 /*Ext.getCmp('tx_descripcionp').setValue(rec.data.tx_descripcion);*/
							 Ext.getCmp('tx_empresaa').setValue(rec.data.tx_empresa);
							 Ext.getCmp('nu_rif').setValue(rec.data.nu_rif);
							 Ext.getCmp('nu_telefonicoo').setValue(rec.data.nu_telefonico);
							 Ext.getCmp('nu_telefonico_opcionall').setValue(rec.data.nu_telefonico_opcional);
							 Ext.getCmp('tx_tipo_empresaa').setValue(rec.data.tx_tipo_empresa);
							 //Ext.getCmp('nu_monto_valuacionn').setValue(rec.data.nu_monto_valuacion);
							 Ext.getCmp('nu_solped_contrato').setValue(rec.data.nu_solped_contrato);
							 Ext.getCmp('nu_expediente_contrato').setValue(rec.data.nu_expediente_contrato);
							 Ext.getCmp('nu_acreedorr').setValue(rec.data.nu_acreedor);
							 Ext.getCmp('nu_contrato_sapp').setValue(rec.data.nu_contrato_sap);
							 Ext.getCmp('nu_monto_total_adjudicado_bs').setValue(rec.data.nu_monto_total_adjudicado_bsf);
							 Ext.getCmp('tx_observacion').setValue(rec.data.tx_observacion_empresa);
							 Ext.getCmp('nu_upcc').setValue(rec.data.nu_upc);
							 Ext.getCmp('nu_aporte_compromiso_contrato').setValue(rec.data.nu_aporte_compromiso_contrato);
							 //cargar el valor en el combo
							 Ext.getCmp("co_filiall").setValue(rec.data.co_filiall);
							 Ext.getCmp("co_direccionn").setValue(rec.data.co_direccion);
							 Ext.getCmp("co_divisionn").setValue(rec.data.co_divisionn);
							 Ext.getCmp("co_distritoo").setValue(rec.data.co_distritoo);
							 Ext.getCmp("co_organizacion_adnim").setValue(rec.data.co_organizacion);
							 Ext.getCmp("pedido").setValue(rec.data.co_pedido);
							 Ext.getCmp("tx_tipo_empresaa").setValue(rec.data.co_tipo_empresa);
							 //cargar el valor en el combo
							 Ext.getCmp("usuarios").setRawValue(rec.data.co_usuario);
							 Ext.getCmp("usuario").setValue(rec.data.co_supervisor);
						} 
				   }
	}),

//-------------------------------------------------------...TOOLBAR PRINCIPAL...--------------------------------------------------------
	tbar: 
		[{
			text: 	 'Nuevo Contrato', 
			id:'boton_nuevo_contrato',
			iconCls: 'nuevo-archivo-a', 
			
			handler: function () 	
			{	
				
				limpiarFormu();
				//DatosFom.getForm().reset();nuevo=1;
				//DatosFom.getForm () .reset () ;	
				win.setTitle('Nuevo Contrato');
				accion= 'insertar';
				co_contrato='';
				//co_cierre_procedimiento=1;
				win.show();
			},
			/*params: 
					{ 
					  accion: 'refrescar' 
					},*/	
			
		},
		{
			text: 'Eliminar Contrato',	
			iconCls:'eliminar-archivo-a',
			id:'boton_eliminar_contrato',
			disabled:false,
			handler: function () {
						
						var rec = grid.getSelectionModel().getSelected();
						if (!rec) {
							return false;
						}
						//grid.store.remove(rec);
						 Ext.MessageBox.confirm("[ SISCO ]","Desea Eliminar El Registro Seleccionado?", function(btn)
						   {
							  if(btn == 'yes')
							  {//Ext.Msg.alert("se ha eliminado correctamente el registro", "");
												
									grid.store.reload
									({    
										params:
										{
											//Id:grid_administracion,  
											accion:'eliminar'
										}
									});
									
									grid.store.remove(rec);
								}
							  })
					
		},
		
	},
		{
			iconCls:'exportar-excel',
				text: 'Exportar',
				id:'boton_exportar_excel_administracion',
				//disabled: true,
				handler: function(){
                window.location = 'php/AdministracionExportar.php';}
           },'', '',{ 
			
			text: 'Imprimir',
            iconCls: 'printer',
            id:'boton_imprimir_administracion',
            /* handler : function(){
           	Ext.ux.Printer.printAutomatically = false;
           	Ext.ux.Printer.print(grid_planificacion);
           	},
            */
            }],
/*		bbar: 
			
				new Ext.PagingToolbar({
				pageSize: 25,
				store: store_administracion, // OJO buscar una forma que no traiga todos los campos que estan en procesos y cerrados, que es lo que hace en este momento...
				displayInfo: true,
				displayMsg: 'Archivos {0} - {1} de {2}',
				emptyMsg: "No no hay"
            /*items:[
					'-', {
					pressed: true,
					enableToggle:true,
					text: 'provando',
					//cls: 'x-btn-text-icon details',
					toggleHandler: function(btn, pressed){
						var view = grid.getView();
						view.showPreview = pressed;
						view.refresh();
                }
            }
            ]*/
      });
//******************************************FIN GRID ADMINISTRACION*******************************************************

//************************************I FORMULARIO DATOS GENERALES DEL CONTRATO*******************************************
var DatosFom = new Ext.FormPanel
({
        id:'DatosFom',
        labelAlign: 'top',
        url: 'php/AdministracionInterfaz.php',
		frame:true,
		//layout: 'form',
		autoScroll: true,		
	    bodyStyle: 'padding: 5px 5px 0',
	    //width:450,
		height:440,
		buttonAlign:'center',
		defaults: {
					anchor: '95%',
					allowBlank: false,
					selectOnFocus: true,
					msgTarget: 'side'
				  },
items: 
	[{
      xtype:'fieldset',
      title: 'Asignar el Responsable',
      collapsible: true,
      collapsed: true,
      autoHeight:true,
      layout: 'column',
      
     items: [{
			   columnWidth: .5,
			   layout: 'form',
		items: [GetComboDinamico('usuario','co_usuario','Supervisor Responsable','usuario_supervisores_administracion')]    
            },
			{   columnWidth: .5,
			   layout: 'form',
		items: [GetComboLocal('usuarios','co_usuario','Analista Responsable',true)]
            }],
        
        buttonAlign:'center',
		buttons: [{
					text:'Asignar',
				    id:'boton_guardar_asignar', 
				    iconCls: 'asignar',
				    
				    url: 'php/AdministracionInterfaz.php',
					handler: function()
						 {
							Ext.MessageBox.confirm("[CONTRATOS]","Guardar?", function(btn)
							{
								if(btn == 'yes')
								{
									sm = grid.getSelectionModel();
									fila = sm.getSelected(); 
									store_administracion.reload
									({
										params:
										{
											accion:accion,
											co_contrato:co_contrato,
											Resultados:datosusuario()
										}
									});			
									//win.hide();
									//DatosFom.getForm().reset();	 
								}
							})
						}				
				}]
	},{
		xtype:'fieldset',
        title: 'Ubicaci&oacute;n de la Gerencia Solicitante',
        collapsible: true,
        collapsed: true,
        autoHeight:true,
        layout: 'column',
		items: [{
					layout: 'form',
					columnWidth: .5,
			items: [GetComboUbicacion('co_filial','Filial o Negocio',1,'co_direccionn','co_organizacion_adnim',true)]
				},{
					columnWidth: .5,
					layout: 'form',	
			items: [GetComboUbicacion('co_direccion','Direcci&oacute;n',2,'co_division','co_organizacion')] 
				},{
					columnWidth: .5,
					layout: 'form',
			items: [GetComboUbicacion('co_division','Divisi&oacute;n',3,'co_distrito','co_organizacion')]
				},{
					columnWidth: .5,
					layout: 'form',
			items: [GetComboUbicacion('co_distrito','Distrito',4,'co_organizacion')]  
				},{
					columnWidth: .5,
					layout: 'form',
			items: [GetComboDinamico('co_organizacion','co_organizacion','Organizaci&oacute;n','organizacion_ubicacion',false,'local')]
				},]
	},
/*	{
		  xtype:'fieldset',
		  title: 'Datos de la Empresa',
		  collapsible: true,
		  collapsed: true,
		  autoHeight:true,
		  layout: 'column',      
		  items: [{
					columnWidth: .5,
					layout: 'form',
					items: [{fieldLabel: 'RIF', id:'nu_rif', xtype: 'textfield', anchor: '90%',
						listeners:{
							 keyup:{
								fn: function(field,e){
									field.setValue(field.getValue().toUpperCase());
									Ext.Ajax.request({
										url: 'php/EmpresaInterfaz.php',
										params:{
											accion:'buscar_rif',
											filter:'',
											nu_rif:field.getValue()
										},
										success: function(response,options){
											obj = Ext.util.JSON.decode(response.responseText);
											//console.log(obj);			
											if(obj.ResultadosEmp[0].tx_empresa)
												Ext.getCmp("tx_empresa").setValue(obj.ResultadosEmp[0].tx_empresa);
											else
												Ext.getCmp("tx_empresa").setValue('');			
												
											if(obj.ResultadosEmp[0].nu_acreedor)
												Ext.getCmp("nu_acreedorr").setValue(obj.ResultadosEmp[0].nu_acreedor);
											else
												Ext.getCmp("nu_acreedorr").setValue('');
												
											if(obj.ResultadosEmp[0].nu_telefonico)
												Ext.getCmp("nu_telefonicoo").setValue(obj.ResultadosEmp[0].nu_telefonico);
											else
												Ext.getCmp("nu_telefonicoo").setValue('');
												
											if(obj.ResultadosEmp[0].nu_telefonico_opcional)
												Ext.getCmp("nu_telefonico_opcionall").setValue(obj.ResultadosEmp[0].nu_telefonico_opcional);
											else
												Ext.getCmp("nu_telefonico_opcionall").setValue('');
												
											if(obj.ResultadosEmp[0].co_tipo_empresa)
												Ext.getCmp("tx_tipo_empresaa").setValue(obj.ResultadosEmp[0].co_tipo_empresa);
											else
												Ext.getCmp("tx_tipo_empresaa").setValue('');
										}										
									});
								}
							}
						}
						}]   
				},{
					columnWidth: .5,
					layout: 'form', 
			items: [{fieldLabel: 'Nombre de la Empresa', id:'tx_empresaa', xtype: 'textfield', anchor: '90%'}]  
				},{
					columnWidth: .5,
					layout: 'form',
			items: [{fieldLabel: 'N&deg Acreedor', id:'nu_acreedorr', xtype: 'numberfield', anchor: '90%'}]
				},{
					columnWidth: .5,
					layout: 'form',
			items: [{fieldLabel: 'N&deg Telef&oacute;nico', id:'nu_telefonicoo', xtype: 'textfield', anchor: '90%'}]    
				},{
					columnWidth: .5,
					layout: 'form',
			items: [{fieldLabel: 'N&deg Telefonico Opcional', id:'nu_telefonico_opcionall', xtype: 'textfield', anchor: '90%'}]
				},{
					columnWidth: .5,
					layout: 'form',
			items: [GetCombo('tx_tipo_empresaa','co_tipo_empresa','Tipo de Empresa','')]
				},]
	},																																		
    {
        xtype:'fieldset',
        title: 'Inicio del Contrato',
        collapsible: true,
        autoHeight:true,
        collapsed: true,
        layout: 'column',
                    
        items: [{
			   columnWidth: .5,
			   layout: 'form',
         items: [{fieldLabel: 'N&deg Contrato SAP', id:'nu_contrato_sapp', xtype: 'numberfield', anchor: '90%'}]
             },{
               columnWidth: .5,
			   layout: 'form',
         items: [{fieldLabel: 'N&deg; SOLP', id:'nu_solped_contrato', xtype: 'numberfield', anchor: '90%' , allowBlank:false}]   
		     },{
			   columnWidth: .5,
			   layout: 'form',
         items: [{fieldLabel: 'N&deg Contrato Comisi&oacute;n', id:'nu_contrato_comision', xtype: 'numberfield', anchor: '90%'}]
             },{
			   columnWidth: .5,
			   layout: 'form',
         items: [{fieldLabel: 'N&deg Expediente', id:'nu_expediente_contrato', xtype: 'numberfield', anchor: '90%'}]
             },{
			   columnWidth: .5,
			   layout: 'form',
		 items: [{fieldLabel: 'Fecha Inicio del Contrato', id:'fe_inicio', format:'d/m/Y', xtype: 'datefield', anchor: '90%'}] 
		// renderer:formato_fecha, format:'d-m-Y', dataIndex: 'fe_recibido'}, format:'d/m/Y'
		     },{
			   columnWidth: .5,
			   layout: 'form',
		 items: [{fieldLabel: 'Fecha de Finalizaci&oacute;n', id:'fe_culminacion', format:'d/m/Y', xtype: 'datefield', anchor: '90%'}]
		     },{
			   columnWidth: .5,
			   layout: 'form',
		 items: [{fieldLabel: 'Fecha Prorroga de Inicio', id:'fe_prorroga_inicio', format:'d/m/Y', xtype: 'datefield', anchor: '90%'}]
		     },{
		 	   columnWidth: .5,
			   layout: 'form',
		 items: [{fieldLabel: 'Fecha Estimada de Inicio', id:'fe_estimada', format:'d/m/Y', xtype: 'datefield', anchor: '90%'}]
		     },{
			   columnWidth: .5,
			   layout: 'form',
         items: [{fieldLabel: 'Carta de Inicio Preliminar', id:'fe_carta_preliminar', format:'d/m/Y', xtype: 'datefield', anchor: '90%'}]               
			 },{
			   columnWidth: .5,
			   layout: 'form',
         items: [{fieldLabel: 'Tiempo de Ejecuci&oacute;n',id:'nu_ejecucion', xtype: 'numberfield', anchor: '90%'}]
             },{
			   columnWidth: .5,
			   layout: 'form',
		 items: [{fieldLabel: 'Fecha Firma del Contrato', id:'fe_firma_contrato', format:'d/m/Y', xtype: 'datefield', anchor: '90%'}]
		     },{
				columnWidth: 1.1,
				layout: 'form',
		 items: [{fieldLabel: 'Descripci&oacute;n', id:'tx_observacion', xtype: 'textarea', anchor: '90%', allowBlank:false}]
			 },]
    },
    {
      xtype:'fieldset',
      title: 'Monto Original del Contrato',
      collapsible: true,
      collapsed: true,
      autoHeight:true,
      layout: 'column',
      
		 items: [{
				   columnWidth: .5,
				   layout: 'form',
         items: [{fieldLabel: 'Monto en Bs', id:'nu_monto_total_adjudicado_bs', xtype: 'numberfield', anchor: '90%'}]
			},{
				columnWidth: .5,
				layout: 'form',
		 items: [{fieldLabel: 'Monto en $', id:'nu_monto_total_adjudicado_dol', xtype: 'numberfield', anchor: '90%'}]
			},{
				columnWidth: .5,
				layout: 'form',
		 items: [{fieldLabel: 'Monto en Euro', id:'nu_monto_total_adjudicado_euro', xtype: 'numberfield', anchor: '90%'}]
			},{
				columnWidth: .5,
				layout: 'form',
		 items: [{fieldLabel: 'Monto Total en (Bs)', id:'nu_monto_total_adjudicado', xtype: 'numberfield', anchor: '90%'}]
			}]
    },
	{
		  xtype:'fieldset',
		  title: 'Compromiso de Responsabilidad Social',
		  collapsible: true,
		  collapsed: true,
		  autoHeight:true,
		  layout: 'column',       
		  items: [{
					columnWidth: .5,
					layout: 'form',
			items: [{fieldLabel: 'Aporte al Fondo Social (%)', id:'nu_aporte_compromiso_contrato', xtype: 'spinnerfield', anchor: '90%'}]   
				},{
					columnWidth: .5,
					layout: 'form',
			items: [{fieldLabel: 'Desarrollo de UPC (%)', id:'nu_upcc', xtype: 'spinnerfield', anchor: '90%'}]    
				},]
	},
 */
 ],
    buttons:[{
				text:'Guardar',
				id: 'boton_guardar_tabpanel_DatosFom',
				handler: function(){
					
					Ext.MessageBox.confirm("[CONTRATOS]","Seguro que Deseas Guardar?", function(btn){
						if(btn == 'yes'){
							sm = grid.getSelectionModel();
							fila = sm.getSelected();
							if(nuevo_dato){
							temp_dato=null;
						}
							else{
							temp_dato=fila.data.co_contrato;
						}
							if(validacion_guardar()==1){
								store_administracion.reload({
								params:{
									accion:accion,
									co_contrato:temp_dato,
									co_contrato:co_contrato,
									tab:tab,
									Resultados:datoscontrato()
								}
							});
							win.hide();	
						}
						else{
							WinError("COMPLETE LOS DATOS POR FAVOR");
						}
					}
				})
			}
		},{
			text:'Cerrar',
			id:'boton_cerrar',
			listeners:{
				'click':function(){
					win.hide();
					}
				}
			}]
	   });


Ext.getCmp('usuario').on('select', function(combo,record,index){
		Ext.getCmp('usuarios').clearValue();
		Ext.getCmp('usuarios').store.reload({params:{accion:'usuarios',supervisor:record.data.co_usuario}});
		Ext.getCmp('usuarios').enable();
});	
Ext.getCmp('co_filial').on('select', function(combo,record,index){
		Ext.getCmp('co_direccion').clearValue();
		Ext.getCmp('co_division').clearValue();
		Ext.getCmp('co_distrito').clearValue();
		Ext.getCmp('co_organizacion').clearValue();
		Ext.getCmp('co_direccion').store.reload({params:{ubicacion:record.data.co_ubicacion}});
		Ext.getCmp('co_direccion').enable();
		
});
//cargar el combo de ubicacion.
Ext.getCmp('co_filial').store.load(),
Ext.getCmp('co_direccion').store.load(),
Ext.getCmp('co_division').store.load(),
Ext.getCmp('co_distrito').store.load()
//Ext.getCmp('co_organizacion_adnim').store.load()
//******************************************FIN FORMULARIO DATOS GENERALES*************************************************

/*
//*****************************************II FORMULARIO PEDIDO************************************************************
var ComboMoneda = new Ext.form.ComboBox
({
        store: new Ext.data.JsonStore({
		url: 'php/CombosDinamicos.php',
		root: 'Resultados',
		idProperty: 'co_moneda',
		baseParams: {accion:"moneda"},
		fields:['co_moneda','tx_moneda']
		}),
		
	    name: 'co_moneda',
		id: 'co_moneda',
		emptyText: 'Seleccione...',
		//hiddenName: nombre+"hide",
		forceSelection: true,
		//value:co_nombre,
		valueField:'tx_moneda',
		//fieldLabel:etiqueta,
		displayField:'tx_moneda',
		
		anchor: '80%',
		listWidth:220,
	
		mode: 'remote',
		triggerAction:'all',
        
	listeners:{//Cambiamos el valor de co_cierre_procedimiento en store_resultados                             
			select: function(combo,record,index){
				fila = GridPedido.getSelectionModel();
				celda = fila.getSelectedCell();
				GridPedido.store.getAt(celda[0]).set('co_moneda',record.data.co_moneda);
			}
		}

        //applyTo: 'local-states'
    });
//*****************************************STORE PEDIDO********************************************************************
var store_Pedido = new Ext.data.JsonStore
({
	id:'store_Pedido',
	url:'php/PedidoInterfaz.php',
	//writer: writer,
	totalProperty: 'total',
	root: 'Resultados',
	idProperty: 'Pedido',
	baseParams: {accion:'refrescar'},
	fields:  [
			   {name: 'co_pedido', type: 'string'},
			   {name: 'nu_pedido', type: 'string'},
			   {name: 'nu_monto_total', type: 'string'},
			   {name: 'tx_moneda', type: 'string'},
			   {name: 'co_moneda', type: 'string'},
			   {name: 'tx_detalles', type: 'string'},
			   {name: 'nu_monto_total_modificado_bs', type: 'string'},
			   {name: 'nu_monto_total_modificado_dol', type: 'string'},
			   {name: 'nu_monto_total_modificado_euro', type: 'string'}   
			
			 ]

});
//store_Usuario.load();
//*****************************************FIN STORE PEDIDO****************************************************************
//*****************************************GRID PEDIDO*********************************************************************
var GridPedido = new Ext.grid.EditorGridPanel
({
	store: store_Pedido,
	//reander: reander,
	sm: new Ext.grid.CellSelectionModel(),
	id: 'GridPedido',
    title: 'Pedido',
    height: 420,
    //stateful: true,
    frame: true,
    clicksToEdit: 1,
 
	columns:[	
				new Ext.grid.RowNumberer(),
				{header: 'N&deg; Pedido', dataIndex: 'nu_pedido', width: 100, editor: new Ext.form.TextField({allowBlank: false})},
				{header: 'Monto', dataIndex: 'nu_monto_total', width: 100, editor: new Ext.form.TextField({allowBlank: false})},
				{header: 'Moneda', dataIndex: 'tx_moneda', width: 100, editor: ComboMoneda},
				{header: 'Descripci&oacute;n', dataIndex: 'tx_detalles', width: 200, editor: new Ext.form.TextField({allowBlank: false})}        		
			],


   tbar:[{
            text: 'Nuevo Pedido',
            id:'boton_nuevo_pedido',
            iconCls: 'agregar',
            handler: function(){
								var Pedido = GridPedido.getStore().recordType;
								var P = new Pedido({
													nu_pedido:'',
													tx_observacion:''});
								GridPedido.stopEditing();
								store_Pedido.insert(0, P);
								GridPedido.startEditing(0, 0);
							  }
        }, '-',
        {
            text: 'Eliminar',
            iconCls: 'icon-delete',
            id:'boton_eliminar_nuevo_pedido',
            //disabled: true,
             handler: function(){
				Ext.MessageBox.confirm("[SISCOM]","Desea Eliminar ESte Registro ?", function(btn){
					if(btn == 'yes'){
                //editor.stopEditing();                    // no deja ningún tipo de edición activos
                fila = GridPedido.getSelectionModel(); // seleciona la fila del grid_agenda
                celda = fila.getSelectedCell();        // seleciona la celda del grid_agenda
                GridPedido.store.reload({            // manda a recargar el store_agenda 
					params:{
						co_pedido:GridPedido.store.getAt(celda[0]).get('co_pedido'),  //  elimina y se ubica en la celda 0
						co_contrato:co_contrato,
						accion:'eliminar'
					}
					
				});
			}
		});
			//GridPedido.store.remove(rec);		
				
            }
       
        }, '-',
		{text: 'Guardar',
         iconCls: 'guardar',
         id:'boton_guardar_pedido',
         //disabled: true,
         handler: function () {Ext.MessageBox.confirm("[SISCOM]","Guardar ?", function(btn){
					if(btn == 'yes'){
						records_modificados=store_Pedido.getModifiedRecords();
						Ext.each(records_modificados,function(fila,i){
							if(fila.data.nu_pedido==undefined || fila.data.nu_monto_total==undefined){
								WinError("Debe completar toda la informaci&oacute;n");
							}
							else{
								if(fila.data.co_pedido==null )
									accion='insertar';
								else
									accion='modificar';
								store_Pedido.reload({
									params:{
										accion:accion,
										condicion:fila.data.co_pedido,
										co_contrato:co_contrato,
										filter:'',
										Resultados:Ext.util.JSON.encode(fila.getChanges())
									}
								});			
								fila.commit();				
								GridPedido.getView().getRowClass=function (record,index,rowParams,store){
								return '';
							}
						  }
						});
					}
				});			  
			 GridPedido.store.reload
		}	
		}, ]
});
  //grid.render('GridUsuario');
//****************************************FIN GRID PEDIDO******************************************************************
//*************************************** PANEL PEDIDO**********************************************************************
var PedidoFom = new Ext.FormPanel
({
       
	id:'PedidoFom',
	labelAlign: 'top',
	frame:true,
	autoScroll: true,
	bodyStyle: 'padding:5px 5px 0',
	height:440,    

        items: [GridPedido,]
 }); 
//*****************************************FIN PANEL PEDIDO*****************************************************************
//*****************************************FIN FORMULARIO PEDIDO***********************************************************

//**************************************III FORMULARIO VALUACIONES*********************************************************
//****************************************STORE DE VALUACIONES*************************************************************
var store_Valuacion = new Ext.data.JsonStore
({
	 id:'store_Valuacion',
	 writer: writer,
	 url:'php/ValuacionesInterfaz.php',
	 root: 'Resultados',
	 idProperty: 'co_pedido',
	 baseParams: {accion:'refrescar'},
	 
fields: [
		   {name: 'co_usuario', type: 'varchar'},
		   {name: 'co_valuacion', type: 'varchar'},
		   {name: 'co_contrato', type: 'varchar'},
		   {name: 'co_pedido', type: 'varchar'},
		   {name: 'nu_pedido', type: 'varchar'}, 
		   {name: 'nu_valuacion', type: 'varchar'},
		   {name: 'fe_periodoi'},
		   {name: 'fe_periodof'},
		   {name: 'nu_monto_disponible_calculado'},
		   {name: 'fe_recibido'},
		   {name: 'fe_aprobacion'},
		   {name: 'fe_entrega'},
		   {name: 'tx_detalle_serv', type: 'varchar'},
		   {name: 'co_monada', type: 'varchar'},
		   {name: 'nu_monto_consumido_calculado'},
		   {name: 'nu_monto_total', type: 'varchar'},
		   {name: 'tx_moneda', type: 'varchar'}
		]
    });
//****************************************FIN STORE VALUACIONES************************************************************
//*****************************************GRID DE VALUACIONES*************************************************************
var GridValuacion = new Ext.grid.GridPanel
({
    store: store_Valuacion,
    id:'GridValuacion',
    title: 'Valuaciones',
    height: 250,
    frame: true,
    clicksToEdit: 1,

	columns:[  
				new Ext.grid.RowNumberer(),
				{header: 'N&deg; Pedido', width: 80, sortable: true, dataIndex: 'nu_pedido'},
				{header: 'Desde',  width: 70, sortable: true, renderer:formato_fecha, format:'d-m-Y', dataIndex: 'fe_periodoi'},
				{header: 'Hasta',  width: 70, sortable: true, renderer:formato_fecha, format:'d-m-Y', dataIndex: 'fe_periodof'},
				{header: 'Monto', width: 80, sortable: true, dataIndex: 'nu_valuacion'},	
				{header: 'Fecha Recibido por Supervisor', width: 70, sortable: true, renderer:formato_fecha, format:'d-m-Y', dataIndex: 'fe_recibido'},
				{header: 'Fecha Aprobaci&oacute;n', width: 70, sortable: true, renderer:formato_fecha, format:'d-m-Y', dataIndex: 'fe_aprobacion'},
				{header: 'Fecha Entrega HES', width: 70, sortable: true, renderer:formato_fecha, format:'d-m-Y', dataIndex: 'fe_entrega'},
				{header: 'Descripci&oacute;n', width: 100, sortable: true, dataIndex: 'tx_detalle_serv'}	
			],
			
 
 listeners: {
				'rowclick': function (grid, rowIndex, e) 
				{
					//console.log('rowclick');
					nuevo_valuacion=0;
					fila=GridValuacion.getSelectionModel();
					rec=fila.getSelected();
					ValuacionesFom.getForm().loadRecord(rec);
					co_contrato=rec.data.co_contrato;
					co_pedido=rec.data.co_pedido;
					//Ext.getCmp("tx_moneda_v").setValue(rec.data.co_moneda);	
					//Ext.getCmp("nu_valuacionn").setValue(rec.data.nu_valuacion);				
					Ext.getCmp("tx_moneda_v").setRawValue(rec.data.tx_moneda);
					Ext.getCmp("pedido").setRawValue(rec.data.nu_pedido);
					//Ext.getCmp("nu_pedido").setRawValue(rec.data.co_pedido);
					accion='modificar';																				
				}		
			 },	
			
			tbar:[{
            text: 'Nuevo',
            id:'boton_nuevo_valuacion',
            iconCls: 'nuevo-archivo',
            handler: function()
					{
						//console.log('Nuevo');
						Ext.getCmp("nu_monto_total").setValue('');
						Ext.getCmp("nu_monto_consumido_calculado").setValue('');
						Ext.getCmp("nu_monto_disponible_calculado").setValue('');
						Ext.getCmp("fe_periodoi").setValue('');
						Ext.getCmp("fe_periodof").setValue('');
						Ext.getCmp("nu_valuacion").setValue('');
						Ext.getCmp("fe_recibido").setValue('');
						Ext.getCmp("fe_aprobacion").setValue('');
						Ext.getCmp("fe_entrega").setValue('');
						Ext.getCmp("tx_detalle_serv").setValue('');
						Ext.getCmp("pedido").setValue('');
						Ext.getCmp("tx_moneda_v").setValue('');
						//ValuacionesFom.getForm().reset();
						nuevo_valuacion=1;
					}/*,
			params: 
					{ 
						accion: 'refrescar',
						co_contrato:co_contrato, 
					},*/																							/*
        }, '-', 
        {
            text: 'Eliminar',
            iconCls: 'eliminar-archivo',
            id:'boton_eliminar_nuevo_valuacion',
            //disabled: true,
             handler: function()
             {
				Ext.MessageBox.confirm("[SISCOM]","Desea Eliminar Este Anticipo ?", function(btn)
				{
					if(btn == 'yes')
					{
						sm = GridValuacion.getSelectionModel();
						fila = sm.getSelected();
						GridValuacion.store.reload
						({ 
							params:
							{
								co_valuacion:fila.get('co_valuacion'),
								co_contrato:co_contrato,
								accion:'eliminar'
							}
					
						});
					}
				});
            }
			}, '-',
			{
				text: 'Guardar',
				 iconCls: 'guardar-archivo',
				 id:'boton_guardar_valuacion',
				  handler: function () 
				  {
					  Ext.MessageBox.confirm("[CONTRATOS]","Guardar ?", function(btn)
					  {
						  if(btn == 'yes')
						  {
							  sm = GridValuacion.getSelectionModel();
							  fila = sm.getSelected(); 
							  if(nuevo_valuacion)
							  {
								  accion='insertar';
								  temp_pedido=null;
							  }
							  else
							  {
								  accion='modificar';
								  temp_pedido=fila.data.co_valuacion;
							  }
							  store_Valuacion.reload
							  ({
								  params:
								  {
									  accion:accion,
									  co_valuacion:temp_pedido,
									  co_contrato:co_contrato,
									  //co_pedido:co_pedido,
									  Resultados:datosvaluaciones()
								   }
							   }); 
							   //ValuacionesFom().reset();
						   }
					   });
					   
					}
			 }, 
		]
 });
//**********************************************FIN GRID*******************************************************************
//**************************************PANEL DE LAS VALUACIONES***********************************************************
var ValuacionesFom = new Ext.FormPanel
({
    
    id:'ValuacionesFom',   
	labelAlign: 'top',
	frame:true,
	//layout: 'form',
	autoScroll: true,
	bodyStyle: 'padding:5px 5px 0',
	//width:450,
	height:440,
	//autoScroll: true,	
	    items:[{
			   xtype:'fieldset',
			   title: 'Monto Pedido',
			   collapsible: true,
			   autoHeight:true,
			   collapsed: true,
			   layout: 'column',
			   labelAlign: 'top',
			   labelWidth: 70,
		items: [{
			   columnWidth: .6,
			   layout: 'form',
			   
		 items: [GetComboValor1('pedido','co_pedido','N&deg; Pedido',0)]	  
			},
		    {
			   columnWidth: .5,
			   layout: 'form',
		items: [{fieldLabel: 'Monto Contrato', id:'nu_monto_total', xtype: 'textfield', anchor: '90%',disabled:true}]
			},
			{
				columnWidth: .3,
				layout:'form',
		items:	 [GetCombo('tx_moneda_v','co_moneda','Moneda',true)] 
						},
			{
			   columnWidth: .5,
			   layout: 'form',
		items: [{fieldLabel: 'Monto Consumido', id:'nu_monto_consumido_calculado', xtype: 'textfield', anchor: '90%',disabled:true}]
			},
			{
			   columnWidth: .5,
			   layout: 'form',
		items: [{fieldLabel: 'Monto Disponible', id:'nu_monto_disponible_calculado', xtype: 'textfield', anchor: '90%',disabled:true}]
			},		
	        ]
	      },	
		  {
			  xtype:'fieldset',
			  title: 'Valuaciones',
			  id:'valuacion_pedido',
			  collapsible: true,
			  disabled: true,
			  autoHeight:true,
			  collapsed: true,
			  labelAlign: 'top',
			  layout: 'column',
			  labelWidth: 70,
			  
				  items: [{
						   columnWidth: .5,
						   layout: 'form',
					items: [{fieldLabel: 'Desde', id:'fe_periodoi', xtype: 'datefield', anchor: '90%',format:'d/m/Y'}]  
						},
						{
						   columnWidth: .5,
						   layout: 'form',    
					 items: [{fieldLabel: 'Hasta', id:'fe_periodof', xtype: 'datefield', anchor: '90%',format:'d/m/Y'}]    
						},
						{
						   columnWidth: .5,
						   layout: 'form',
					 items: [{fieldLabel: 'Monto', id:'nu_valuacion', xtype: 'textfield', anchor: '90%'}]
						},
						{
						   columnWidth: .5,
						   layout: 'form',  
					 items: [{fieldLabel: 'Fecha Recibido por el Admi', id:'fe_recibido', xtype: 'datefield', anchor: '90%',format:'d/m/Y'}]
						},  
						{
						   columnWidth: .5,
						   layout: 'form', 
					 items: [{fieldLabel: 'Fecha de Aprobaci&oacute;n', id:'fe_aprobacion', xtype: 'datefield', anchor: '90%',format:'d/m/Y'}]	
						},
						{
						   columnWidth: .5,
						   layout: 'form',
					 items: [{fieldLabel: 'Fecha de Entrega HES',id:'fe_entrega',xtype: 'datefield', anchor: '90%',format:'d/m/Y'}]	
						 },
						 {
							columnWidth: 1.1,
							layout: 'form',
					 items: [{fieldLabel: 'Descripci&oacute;n',id:'tx_detalle_serv',xtype: 'textarea',anchor: '90%'}]
						 } 
					   ] 
			     },
			    
                GridValuacion,                		 
	        ]
 }); 
 Ext.getCmp('pedido').on('select', function(combo,record,index){
	 
	 Ext.getCmp('GridValuacion').store.reload({params:
								  {
									  accion:'buscar',
									  //co_valuacion:temp_pedido,
									  //co_contrato:co_contrato,
									  co_pedido:record.get('co_pedido')
									  
								   }});
	 
	Ext.Ajax.request
	({
		url: 'php/PedidoInterfaz.php',
		params:
		{
			accion:'buscar_pedido',
			filter:'',
			co_pedido:record.data.co_pedido
		},
			success: function (response, option)
			{
				obj= Ext.util.JSON.decode(response.responseText);
				Ext.getCmp('nu_monto_total').setValue(obj.Resultados[0].nu_monto_total);
				Ext.getCmp('nu_monto_consumido_calculado').setValue(obj.Resultados[0].nu_monto_consumido_calculado);
				Ext.getCmp('nu_monto_disponible_calculado').setValue(obj.Resultados[0].nu_monto_disponible_calculado);
				Ext.getCmp('tx_moneda').setValue(obj.Resultados[0].tx_moneda);
				Ext.getCmp('valuacion_pedido').enable();
			}
	});
	
});	
//****************************************FIN PANEL VALUACIONES************************************************************
//****************************************FIN FORMULARIO VALUACIONES*******************************************************

//*****************************************IV FORMULARIO ANTICIPO**********************************************************
//*********************************************STORE ANTICIPO**************************************************************
var store_Anticipo = new Ext.data.JsonStore
({
	id:'store_Anticipo',
	writer: writer,
	url: 'php/RecobroInterfaz.php',
	root: 'Resultados',
	idProperty: 'Anticipo',
	baseParams: {accion:'refrescar',tipo_recobro:1},
	
fields: [
		   {name: 'co_tipo_recobro', type: 'varchar'},
		   {name: 'nu_porc_recobro', type: 'varchar'},
		   {name: 'nu_recobro', type: 'varchar'}, 
		   {name: 'nu_monto_pagado_recobro', type: 'varchar'},
		   {name: 'nu_monto_recobro_calculado'},
		   {name: 'nu_monto_disponible_calculador'},
		   {name: 'nu_monto_pendiente_recobro', type: 'varchar'},
		   {name: 'nu_monto_recobrado', type: 'varchar'},
		   {name: 'co_moneda', type: 'varchar'},
		   {name: 'tx_moneda', type: 'varchar'},
		   {name: 'co_recobro', type: 'varchar'},
		   {name: 'co_contrato', type: 'varchar'},
		   {name: 'tx_tipo_recobro', type: 'varchar'} 
		]
});
//********************************************FIN STORE ANTICIPO***********************************************************
//**********************************************GRID ANTICIPO**************************************************************
var GridAnticipo = new Ext.grid.GridPanel
({
    store: store_Anticipo,
    title:'Anticipo',
    id:'GridAnticipo',
    //sm: new Ext.grid.CellSelectionModel(),
    frame: true,
    height: 230,
    clicksToEdit: 1,
    
	columns:[  
				new Ext.grid.RowNumberer(),
				{header: '% del Anticipo', width: 50, sortable: true, dataIndex: 'nu_porc_recobro'},
				{header: 'N&deg; de Otorgado', width: 50, sortable: true, dataIndex: 'nu_recobro'},
				{header: 'Monto Recobrado', width: 150, sortable: true, dataIndex: 'nu_monto_recobrado'},
				{header: 'Moneda', width: 50, sortable: true, dataIndex: 'tx_moneda'}
			],
	
	listeners: {
				'rowclick': function (grid, rowIndex, e) 
				{
					nuevo_anticipo=0;
					fila=GridAnticipo.getSelectionModel();
					rec=fila.getSelected();
					AnticipoFom.getForm().loadRecord(rec);
					co_recobro=rec.data.co_recobro;
					co_tipo_recobro=rec.data.co_tipo_recobro;
					Ext.getCmp("tx_moneda").setValue(rec.data.co_moneda);					
					Ext.getCmp("tx_moneda").setRawValue(rec.data.tx_moneda);
					accion='modificar';																							
				}		
			 },	
			
			tbar:[{
            text: 'Nuevo',
            id:'boton_nuevo_Anticipo',
            iconCls: 'nuevo-archivo',
            handler: function(){
								AnticipoFom.getForm().reset();
								nuevo_anticipo=1;
								//console.log()
								store_Anticipo.getCount();
								Ext.getCmp("nu_recobro").setValue(store_Anticipo.getCount()+1); 
							  },
			params: 
				{ 
					accion: 'refrescar',
					co_contrato:co_contrato, 
				},
        }, '-', 
        {
            text: 'Eliminar',
            iconCls: 'eliminar-archivo',
            id:'boton_eliminar_nuevo_Anticipo',
            //disabled: true,
             handler: function(){
				Ext.MessageBox.confirm("[SISCOM]","Desea Eliminar Este Anticipo ?", function(btn){
					if(btn == 'yes'){
                //editor.stopEditing();                    // no deja ningún tipo de edición activos
                sm = GridAnticipo.getSelectionModel(); // seleciona la fila del grid_agenda
                fila = sm.getSelected();        // seleciona la celda del grid_agenda
                GridAnticipo.store.reload({            // manda a recargar el store_agenda 
					params:{
						co_recobro:fila.get('co_recobro'),  //  elimina y se ubica en la celda 0
						co_contrato:co_contrato,
						accion:'eliminar'
					}
					
				});
			}
		});
			//GridAnticipo.store.remove(rec);		
				
            }
       
        }, '-',
		{text: 'Guardar',
         iconCls: 'guardar-archivo',
         id:'boton_guardar_Anticipo',
         handler: function () {Ext.MessageBox.confirm("[CONTRATOS]","Guardar ?", function(btn){
			 if(btn == 'yes'){
				sm = GridAnticipo.getSelectionModel();
                fila = sm.getSelected(); 
				if(nuevo_anticipo){
					accion='insertar';
					temp_recobro=null;
				}
				else{
					accion='modificar';
					temp_recobro=fila.data.co_recobro;
				} 
				
				store_Anticipo.reload({
									params:{
										accion:accion,
										co_recobro:temp_recobro,
										co_contrato:co_contrato,
										tipo_recobro:1,
										Resultados:datosAnticipo()
									}
								});			
								
						 
					}
				});
		}
			
			
		}, 
		]
});
//*********************************************FIN GRID ANTICIPO***********************************************************
//**********************************************PANEL ANTICIPO*************************************************************
var AnticipoFom = new Ext.FormPanel
({   
    id:'AnticipoFom',
	labelAlign: 'top',
	frame:true,
	url: 'php/RecobroInterfaz.php',
	//layout: 'form',
	autoScroll: true,
	bodyStyle: 'padding:5px 5px 0',
	//width:450,
	height:440,
	  
	items:[{
			   xtype:'fieldset',
			   title: 'Anticipo',
			   collapsible: false,
			   id:'seguimiento_anticipo',
			   autoHeight:true,
			   //collapsed: true,
			   layout: 'column',
			   labelAlign: 'top',
			   labelWidth: 70,
			   
				items:[{
					   columnWidth: .5,
					   layout: 'form',
				  items: [{fieldLabel: '% del Anticipo', id:'nu_porc_recobro', xtype: 'spinnerfield', anchor: '90%'}] 
                    },
					{
					   columnWidth: .5,
					   layout: 'form',
					   
				 items: [{fieldLabel: 'N&deg; de Anticipo Otorgado', id:'nu_recobro', xtype: 'spinnerfield', anchor: '90%', disabled:true}]    
					},		
					{
					   columnWidth: .5,
					   layout: 'form',
				 items: [{fieldLabel: 'Monto Pagado', id:'nu_monto_pagado_recobro', xtype: 'textfield', anchor: '90%'}]
					},
					{
					   columnWidth: .5,
					   layout: 'form',
				 items: [{fieldLabel: 'Monto Pendiente', id:'nu_monto_pendiente_recobro', xtype: 'textfield', anchor: '90%'}]
					},
					{
					   columnWidth: .5,
					   layout: 'form',
				 items: [{fieldLabel: 'Monto Recobrado', id:'nu_monto_recobrado', xtype: 'textfield', anchor: '90%'}]
					},
					
					{  columnWidth: .2,
						layout: 'form',
				 items: [GetCombo('tx_moneda','co_moneda','Moneda')] 
					}, 		
				 ]
			 },
             GridAnticipo,
	      ]	
 });
Ext.getCmp('nu_porc_recobro').on('select', function(record,index){
	 
	 
	 
	Ext.Ajax.request
	({
		url: 'php/RecobroInterfaz.php',
		params:
		{
			accion:'buscar',
			filter:'',
			co_recobro:record.data.co_recobro
		},
			success: function (response, option)
			{
				obj= Ext.util.JSON.decode(response.responseText);
				Ext.getCmp('nu_monto_recobrado_calculado').setValue(obj.Resultados[0].nu_monto_recobrado_calculado);
			}
	});
	
});


var store_Aporte = new Ext.data.JsonStore
({
	id:'store_Aporte',
	writer: writer,
	url: 'php/RecobroInterfaz.php',
	root: 'Resultados',
	idProperty: 'co_tipo_recobro',
	baseParams: {accion:'refrescar',tipo_recobro:2},
	
fields: [
		   {name: 'co_tipo_recobro', type: 'varchar'},
		   {name: 'nu_porc_recobro', type: 'varchar'},
		   {name: 'nu_recobro', type: 'varchar'}, 
		   {name: 'nu_monto_pagado_recobro', type: 'varchar'},
		   {name: 'nu_monto_pendiente_recobro', type: 'varchar'},
		   {name: 'nu_monto_recobrado', type: 'varchar'},
		   {name: 'co_moneda', type: 'varchar'},
		   {name: 'tx_moneda', type: 'varchar'},
		   {name: 'co_recobro', type: 'varchar'},
		   {name: 'co_contrato', type: 'varchar'},
		   {name: 'tx_tipo_recobro', type: 'varchar'} 
		]
});
var GridAporte = new Ext.grid.GridPanel 
({
    store: store_Aporte,
    title:'Aporte',
    id:'GridAporte',
    //sm: new Ext.grid.CellSelectionModel(),
	//stripeRows: true,
    //width:410,
    frame: true,
    height: 230,
    clicksToEdit: 1,
    
	columns:[  
				new Ext.grid.RowNumberer(),
				{header: '% del Anticipo', width: 50, sortable: true, dataIndex: 'nu_porc_recobro'},
				{header: 'N&deg; de Otorgado', width: 50, sortable: true, dataIndex: 'nu_recobro'},
				{header: 'Monto Pagado', width: 137, sortable: true, dataIndex: 'nu_monto_pagado_recobro'},
				{header: 'Moneda', width: 90, sortable: true, dataIndex: 'tx_moneda'},
				{header: 'Monto Recobrado', width: 137, sortable: true, dataIndex: 'nu_monto_recobrado'},
				{header: 'Monto Pendiente', width: 137, sortable: true, dataIndex: 'nu_monto_pendiente_recobro'}
			],
			
	listeners: {
				'rowclick': function (grid, rowIndex, e) 
				{
					nuevo_aporte=0;
					fila=GridAporte.getSelectionModel();
					rec=fila.getSelected();
					co_recobro=rec.data.co_recobro;
					co_tipo_recobro=rec.data.co_tipo_recobro;
					//para cargar el formulario.
					Ext.getCmp("nu_porc_recobro2").setValue(rec.data.nu_porc_recobro);	
					Ext.getCmp("nu_recobro2").setValue(rec.data.nu_recobro);
					Ext.getCmp("nu_monto_pagado_recobro2").setValue(rec.data.nu_monto_pagado_recobro);
					Ext.getCmp("co_moneda_2").setValue(rec.data.co_moneda);
					Ext.getCmp("nu_monto_recobrado2").setValue(rec.data.nu_monto_recobrado);
					Ext.getCmp("nu_monto_pendiente_recobro2").setValue(rec.data.nu_monto_pendiente_recobro);
							
					Ext.getCmp("co_moneda_2").setRawValue(rec.data.tx_moneda);
					accion='modificar';																			
				}		
			},
			
	tbar:[{
            text: 'Nuevo',
            id:'boton_nuevo_Aporte',
            iconCls: 'nuevo-archivo',
			handler: function(){
								AporteFom.getForm().reset();
								nuevo_aporte=1;
								//console.log()
								store_Aporte.getCount();
								Ext.getCmp("nu_recobro2").setValue(store_Aporte.getCount()+1); 
							  },
			params: 
			{ 
				accion: 'refrescar',
				co_contrato:co_contrato, 
			},
        }, '-',
        {
            text: 'Eliminar',
            iconCls: 'eliminar-archivo',
            id:'boton_eliminar_nuevo_Aporte',
            //disabled: true,
            handler: function(){
				Ext.MessageBox.confirm("[SISCOM]","Desea Eliminar Este Anticipo ?", function(btn){
					if(btn == 'yes'){
                //editor.stopEditing();                    // no deja ningún tipo de edición activos
                sm = GridAporte.getSelectionModel(); // seleciona la fila del grid_agenda
                fila = sm.getSelected();        // seleciona la celda del grid_agenda
                GridAporte.store.reload({            // manda a recargar el store_agenda 
					params:{
						co_recobro:fila.get('co_recobro'),  //  elimina y se ubica en la celda 0
						co_contrato:co_contrato,
						accion:'eliminar'
					}
					
				});
			}
		});
			//GridAnticipo.store.remove(rec);		
				
            }
       
        }, '-',
		{
			 text: 'Guardar',
			 iconCls: 'guardar-archivo',
			 id:'boton_guardar_Aporte',
			 handler: function () 
			 {
				 Ext.MessageBox.confirm("[CONTRATOS]","Guardar ?", function(btn)
				 {
					 if(btn == 'yes')
					 {
						sm = GridAporte.getSelectionModel();
						fila = sm.getSelected(); 
						if(nuevo_aporte){
							accion='insertar';
							temp_recobro=null;
						}
						else
						{
							accion='modificar';
							temp_recobro=fila.data.co_recobro;
						} 
						
						store_Aporte.reload
						({
							params:
							{
								accion:accion,
								co_recobro:temp_recobro,
								co_contrato:co_contrato,
								tipo_recobro:2,
								Resultados:datosAporte()
							}
						});				 
					}
				});
			}
		}, 
	]
});
var AporteFom = new Ext.FormPanel
({ 
	id:'AporteFom',
	labelAlign: 'top',
	url: 'php/RecobroInterfaz.php',
	frame:true,
	autoScroll: true,
	bodyStyle: 'padding:5px 5px 0',
	height:440,
	
	items:[{
			   xtype:'fieldset',
			   title: 'Aporte',
			   id:'seguimiento_aporte',
			   collapsible: false,
			   autoHeight:true,
			   //collapsed: true,
			   layout: 'column',
			   labelAlign: 'top',
			   labelWidth: 70,
			   
				items:[{
					   columnWidth: .5,
					   layout: 'form',
				  items: [{fieldLabel: '% del Aporte', id:'nu_porc_recobro2', xtype: 'spinnerfield', anchor: '90%'}] 
                    },
					{
					   columnWidth: .5,
					   layout: 'form',
					   
				 items: [{fieldLabel: 'N&deg; de Aporte Otorgado', id:'nu_recobro2', xtype: 'spinnerfield', anchor: '90%', disabled:true}]    
					},		
					{
					   columnWidth: .5,
					   layout: 'form',
				 items: [{fieldLabel: 'Monto Pagado', id:'nu_monto_pagado_recobro2', xtype: 'textfield', anchor: '90%'}]
					},
					{
					   columnWidth: .5,
					   layout: 'form',
				 items: [{fieldLabel: 'Monto Pendiente', id:'nu_monto_pendiente_recobro2', xtype: 'textfield', anchor: '90%'}]
					},
					{
					   columnWidth: .5,
					   layout: 'form',
				 items: [{fieldLabel: 'Monto Recobrado', id:'nu_monto_recobrado2', xtype: 'textfield', anchor: '90%'}]
					},
					
					{  columnWidth: .2,
						layout: 'form',
				 items: [GetCombo('co_moneda_2','co_moneda','Moneda')] 
					}, 		
				 ]
			 },
             GridAporte,
	      ]	
	
});
/*Ext.getCmp('nu_porc_recobro2').on('select', function(combo,record,index){
	 
	/* Ext.getCmp('GridValuacion').store.reload({params:
								  {
									  accion:'buscar',
									  //co_valuacion:temp_pedido,
									  //co_contrato:co_contrato,
									  co_pedido:record.get('co_pedido')
									  
								   }});
	 
	Ext.Ajax.request
	({
		url: 'php/RecobroInterfaz.php',
		params:
		{
			accion:'buscar',
			filter:'',
			co_contrato:record.data.nu_aporte_compromiso_contrato
		},
			success: function (response, option)
			{
				obj= Ext.util.JSON.decode(response.responseText);
				Ext.getCmp('nu_aporte_compromiso_contrato').setValue(obj.Resultados[0].nu_aporte_compromiso_contrato);
				
			}
	});
});	*/																														/*
var store_Condiciones = new Ext.data.JsonStore
({
	id:'store_Condiciones',
	writer: writer,
	url: 'php/RecobroInterfaz.php',
	root: 'Resultados',
	idProperty: 'co_tipo_recobro',
	baseParams: {accion:'refrescar',tipo_recobro:3},
	
fields: [
		   {name: 'co_tipo_recobro', type: 'varchar'},
		   {name: 'nu_porc_recobro', type: 'varchar'},
		   {name: 'nu_recobro', type: 'varchar'}, 
		   {name: 'nu_monto_pagado_recobro', type: 'varchar'},
		   {name: 'nu_monto_pendiente_recobro', type: 'varchar'},
		   {name: 'nu_monto_recobrado', type: 'varchar'},
		   {name: 'co_moneda', type: 'varchar'},
		   {name: 'tx_moneda', type: 'varchar'},
		   {name: 'co_recobro', type: 'varchar'},
		   {name: 'co_contrato', type: 'varchar'},
		   {name: 'tx_tipo_recobro', type: 'varchar'} 
		]
});
var GridCondiciones = new Ext.grid.GridPanel
({
    store: store_Condiciones,
    title:'Otras Condiciones',
    id:'GridCondiciones',
    frame: true,
    height: 230,
    clicksToEdit: 1,
    
	columns:[  
				new Ext.grid.RowNumberer(),
				{header: '% del Anticipo', width: 50, sortable: true, dataIndex: 'nu_porc_recobro'},
				{header: 'N&deg; de Otorgado', width: 50, sortable: true, dataIndex: 'nu_recobro'},
				{header: 'Monto Pagado', width: 137, sortable: true, dataIndex: 'nu_monto_pagado_recobro'},
				{header: 'Moneda', width: 90, sortable: true, dataIndex: 'tx_moneda'},
				{header: 'Monto Recobrado', width: 137, sortable: true, dataIndex: 'nu_monto_recobrado'},
				{header: 'Monto Pendiente', width: 137, sortable: true, dataIndex: 'nu_monto_pendiente_recobro'}
			],
			
	listeners: {
				'rowclick': function (grid, rowIndex, e) 
				{
					nuevo_condiciones=0;
					fila=GridCondiciones.getSelectionModel();
					rec=fila.getSelected();
					co_recobro=rec.data.co_recobro;
					co_tipo_recobro=rec.data.co_tipo_recobro;
					//para cargar el formulario
					Ext.getCmp("nu_porc_recobro3").setValue(rec.data.nu_porc_recobro);	
					Ext.getCmp("nu_recobro3").setValue(rec.data.nu_recobro);
					Ext.getCmp("nu_monto_pagado_recobro3").setValue(rec.data.nu_monto_pagado_recobro);
					Ext.getCmp("co_moneda_3").setValue(rec.data.co_moneda);
					Ext.getCmp("nu_monto_recobrado3").setValue(rec.data.nu_monto_recobrado);
					Ext.getCmp("nu_monto_pendiente_recobro3").setValue(rec.data.nu_monto_pendiente_recobro);
									
					Ext.getCmp("co_moneda_3").setRawValue(rec.data.tx_moneda);
					accion='modificar';																			
				}		
			},
			
	tbar:[{
            text: 'Nuevo',
            id:'boton_nuevo_condiciones',
            iconCls: 'nuevo-archivo',
            handler: function(){
								CondicionesFom.getForm().reset();
								nuevo_condiciones=1;
								//console.log()
								store_Condiciones.getCount();
								Ext.getCmp("nu_recobro3").setValue(store_Condiciones.getCount()+1); 
							  },
			params: 
			{ 
				accion: 'refrescar',
				co_contrato:co_contrato, 
			},
        }, '-',
        {
            text: 'Eliminar',
            iconCls: 'eliminar-archivo',
            id:'boton_eliminar_nuevo_condiciones',
            //disabled: true,
            handler: function()
            {
				Ext.MessageBox.confirm("[SISCOM]","Desea Eliminar Este Anticipo ?", function(btn)
				{
				  if(btn == 'yes')
				  {                
					sm = GridCondiciones.getSelectionModel();
					fila = sm.getSelected();       
					GridCondiciones.store.reload
					({         
						params:
						{
							co_recobro:fila.get('co_recobro'),  //  elimina y se ubica en la celda 0
							co_contrato:co_contrato,
							accion:'eliminar'
						}
					});
				 }
			   });	
            }
         }, '-',
		 {
			 text: 'Guardar',
			 iconCls: 'guardar-archivo',
			 id:'boton_guardar_condiciones',
			 //disabled: true,
			 handler: function () 
				 {
					 Ext.MessageBox.confirm("[CONTRATOS]","Guardar ?", function(btn)
					 {
						 if(btn == 'yes')
						 {
							sm = GridCondiciones.getSelectionModel();
							fila = sm.getSelected(); 
							if(nuevo_condiciones){
								accion='insertar';
								temp_recobro=null;
							}
							else
							{
								accion='modificar';
								temp_recobro=fila.data.co_recobro;
							} 
							
							store_Condiciones.reload
							({
								params:
								{
									accion:accion,
									co_recobro:temp_recobro,
									co_contrato:co_contrato,
									tipo_recobro:3,
									Resultados:datosCondiciones()
								}
							});				 
						}
					});
				}
			}, 
	]
});
var CondicionesFom = new Ext.FormPanel
({ 
	id:'CondicionesFom',
	labelAlign: 'top',
	url: 'php/RecobroInterfaz.php',
	frame:true,
	autoScroll: true,
	bodyStyle: 'padding:5px 5px 0',
	height:440,
	
	items:[{
			   xtype:'fieldset',
			   title: 'Otras Condiciones',
			   id:'seguimiento_condiciones',
			   collapsible: false,
			   autoHeight:true,
			   //collapsed: true,
			   layout: 'column',
			   labelAlign: 'top',
			   labelWidth: 70,
			   
				items:[{
					   columnWidth: .5,
					   layout: 'form',
				  items: [{fieldLabel: '% de Otras Condiciones', id:'nu_porc_recobro3', xtype: 'spinnerfield', anchor: '90%'}] 
                    },
					{
					   columnWidth: .5,
					   layout: 'form',
					   
				 items: [{fieldLabel: 'N&deg; Otorgado', id:'nu_recobro3', xtype: 'spinnerfield', anchor: '90%', disabled:true}]    
					},		
					{
					   columnWidth: .5,
					   layout: 'form',
				 items: [{fieldLabel: 'Monto Pagado', id:'nu_monto_pagado_recobro3', xtype: 'textfield', anchor: '90%'}]
					},
					{
					   columnWidth: .5,
					   layout: 'form',
				 items: [{fieldLabel: 'Monto Pendiente', id:'nu_monto_pendiente_recobro3', xtype: 'textfield', anchor: '90%'}]
					},
					{
					   columnWidth: .5,
					   layout: 'form',
				 items: [{fieldLabel: 'Monto Recobrado', id:'nu_monto_recobrado3', xtype: 'textfield', anchor: '90%'}]
					},
					
					{  columnWidth: .2,
						layout: 'form',
				 items: [GetCombo('co_moneda_3','co_moneda','Moneda')] 
					}, 		
				 ]
			 },
             GridCondiciones,
	      ]	
	
}); 
//**********************************************FIN PANEL ANTICIPO************************************************************
//**********************************************FIN FORMULARIO ANTICIPO*******************************************************


//*********************************************V FORMULARIO MODIFICACIONES****************************************************
//************************************************STORE DE MODIFICACIONES*******************************************************
var store_Modificaciones = new Ext.data.JsonStore
({
	id:'store_Modificaciones',
	url: 'php/ModificacionesInterfaz.php',
	writer: writer,
	root: 'Resultados',
	//autoLoad: true,
	idProperty: 'TipoModificacion',
	baseParams: {accion:'refrescar',tipo_variacion:'1,2,3,4'},

	fields: [
			   {name: 'co_tipo_modificacion', type: 'varchar'},
			   {name: 'co_tipo_variacion', type: 'varchar'},
			   {name: 'co_contrato', type: 'varchar'},
			   {name: 'co_usuario', type: 'varchar'},
			   {name: 'tx_tipo_modificacion', type: 'varchar'},
			   {name: 'tx_tipo_variacion', type: 'varchar'},
			   {name: 'fe_registro', type: 'date'},
			   {name: 'nu_valor', type: 'varchar'},
			   {name: 'fe_valor'}, 
			   {name: 'tx_descripcion_mod', type: 'varchar'},
			   {name: 'tx_moneda', type: 'varchar'},
			   {name: 'nu_modificacion', type: 'varchar'}
			   
			]
});
var expander_modificacion = new Ext.ux.grid.RowExpander
({
		expandOnDblClick:false,
        tpl : new Ext.Template(
								
								'<p><b>Tipo de Modificacion:</b> {tx_tipo_variacion}</p><br/>',
								'<p><b>Tipo de Modalidad:</b> {tx_tipo_modificacion}</p><br/>'
							  )
});
var filtro_modificacion= new Ext.ux.grid.GridFilters
({
local: true,
filters:[
										
					{type: 'list', dataIndex: 'tx_tipo_variacion', store: new Ext.data.JsonStore ({  
							 url: 'php/ModificacionesInterfaz.php', 
							 root: 'Resultados',
							 fields: [ {name: 'tx_tipo_variacion'} ],
							 baseParams: {accion:'listar',campo:'tx_tipo_variacion',tabla:'i029t_tipo_variacion'}
						}), labelField: 'tx_tipo_variacion'},
					
					{type: 'list',  dataIndex: 'tx_tipo_modificacion', store: new Ext.data.JsonStore ({  
							 url: 'php/ModificacionesInterfaz.php', 
							 root: 'Resultados',					
							 fields: [ {name: 'tx_tipo_modificacion'} ],
							 baseParams: {accion:'listar',campo:'tx_tipo_modificacion',tabla:'i015t_tipo_modificacion'}
						}), labelField: 'tx_tipo_modificacion'}																		

	   ]
});
//************************************************FIN STORE MODIFICACIONES*******************************************************
//*************************************************GRID DE MODIFICACIONES********************************************************
var GridModificaciones = new Ext.grid.GridPanel
({
    store: store_Modificaciones, 
    title:'Modificaciones y Variaciones',
    id:'gridmodificaciones',
    plugins:[expander_modificacion,filtro_modificacion],
    height: 230,
    frame: true,
    //singleSelect: true,
    //autoLoad: true,
    clicksToEdit: 1,
    
	columns:[  
				new Ext.grid.RowNumberer(),
				
				{header: 'Tipo de Modificacion', width: 120, sortable: true, dataIndex: 'tx_tipo_variacion'},
				{header: 'Tipo de Modalidad', width: 150, sortable: true, dataIndex: 'tx_tipo_modificacion'},
				{header: 'Fechas', width: 70, sortable: true,renderer:formato_fecha, format:'d-m-Y', dataIndex: 'fe_valor'},
				{header: 'Valor', width: 80, sortable: true, dataIndex: 'nu_valor'},
				{header: 'Moneda', width: 75, sortable: true, dataIndex: 'tx_moneda'},
				{header: 'Descripci&oacute;n', width: 150, sortable: true, dataIndex: 'tx_descripcion_mod'}	
			],
	
	listeners: {
				'rowclick': function (grid, rowIndex, e) 
				{
					
					nuevo_modificacion=0;
					fila=GridModificaciones.getSelectionModel();
					rec=fila.getSelected();
					co_tipo_variacion=rec.data.co_tipo_variacion;
					
						Ext.getCmp("co_modificacion").setValue('');
						Ext.getCmp("nu_valor").setValue('');
						Ext.getCmp("co_monedaaaaa").setValue('');
						Ext.getCmp("fe_valor").setValue('');
						Ext.getCmp("tx_descripcion_mod").setValue('');
						Ext.getCmp("fianza").setValue('');
						Ext.getCmp("nu_valorr").setValue('');
						Ext.getCmp("co_monedaa").setValue('');
						Ext.getCmp("fe_valorr").setValue('');
						Ext.getCmp("tx_descripcion_mods").setValue('');
						Ext.getCmp("paralizaciones").setValue('');
						Ext.getCmp("nu_valor_r").setValue('');
						Ext.getCmp("comonedaa").setValue('');
						Ext.getCmp("fe_valorr_r").setValue('');
						Ext.getCmp("tx_descripcion_mods_s").setValue('');
						Ext.getCmp("variaciones").setValue('');
						Ext.getCmp("nu_valor_rr").setValue('');
						Ext.getCmp("coomonedaa").setValue('');
						Ext.getCmp("fe_valor_rr").setValue('');
						Ext.getCmp("tx_descripcion_mod_ss").setValue('');
						
					switch(co_tipo_variacion){
						case '1':
							//Fianzas nuevo_Fianzas=0;
							Ext.getCmp("fianza").setValue(rec.data.tx_tipo_modificacion);
							Ext.getCmp("nu_valorr").setValue(rec.data.nu_valor);
							Ext.getCmp("co_monedaa").setValue(rec.data.co_moneda);
							Ext.getCmp("fe_valorr").setValue(rec.data.fe_valor);
							Ext.getCmp("tx_descripcion_mods").setValue(rec.data.tx_descripcion_mod);
							Ext.getCmp("co_monedaa").setRawValue(rec.data.tx_moneda);
						break;
						case '2':
							//modificacion nuevo_modificacion=0;
							Ext.getCmp("co_modificacion").setValue(rec.data.tx_tipo_modificacion);
							Ext.getCmp("nu_valor").setValue(rec.data.nu_valor);
							Ext.getCmp("co_monedaaaaa").setValue(rec.data.co_moneda);
							Ext.getCmp("fe_valor").setValue(rec.data.fe_valor);
							Ext.getCmp("tx_descripcion_mod").setValue(rec.data.tx_descripcion_mod);
							Ext.getCmp("co_monedaaaaa").setRawValue(rec.data.tx_moneda);
						break;
						case '3':
							//Paralizaciones nuevo_Paralizaciones=0;
							Ext.getCmp("paralizaciones").setValue(rec.data.tx_tipo_modificacion);
							Ext.getCmp("nu_valor_r").setValue(rec.data.nu_valor);
							Ext.getCmp("comonedaa").setValue(rec.data.co_moneda);
							Ext.getCmp("fe_valorr_r").setValue(rec.data.fe_valor);
							Ext.getCmp("tx_descripcion_mods_s").setValue(rec.data.tx_descripcion_mod);
							Ext.getCmp("comonedaa").setRawValue(rec.data.tx_moneda);
						break;
						case '4':
							//Variaciones nuevo_Variaciones=0;
							Ext.getCmp("variaciones").setValue(rec.data.tx_tipo_modificacion);
							Ext.getCmp("nu_valor_rr").setValue(rec.data.nu_valor);
							Ext.getCmp("coomonedaa").setValue(rec.data.co_moneda);
							Ext.getCmp("fe_valor_rr").setValue(rec.data.fe_valor);
							Ext.getCmp("tx_descripcion_mod_ss").setValue(rec.data.tx_descripcion_mod);
							Ext.getCmp("coomonedaa").setRawValue(rec.data.tx_moneda);
						break;
					}
					
					accion='modificar';																			
				}		
			},
			 
			tbar:[{
					text: 'Nuevo',
					id:'boton_nueva_modificacion',
					iconCls: 'nuevo-archivo',
					handler: function()
					{
						
						Ext.getCmp("co_modificacion").setValue('');
						Ext.getCmp("nu_valor").setValue('');
						Ext.getCmp("co_monedaaaaa").setValue('');
						Ext.getCmp("fe_valor").setValue('');
						Ext.getCmp("tx_descripcion_mod").setValue('');
						Ext.getCmp("fianza").setValue('');
						Ext.getCmp("nu_valorr").setValue('');
						Ext.getCmp("co_monedaa").setValue('');
						Ext.getCmp("fe_valorr").setValue('');
						Ext.getCmp("tx_descripcion_mods").setValue('');
						Ext.getCmp("paralizaciones").setValue('');
						Ext.getCmp("nu_valor_r").setValue('');
						Ext.getCmp("comonedaa").setValue('');
						Ext.getCmp("fe_valorr_r").setValue('');
						Ext.getCmp("tx_descripcion_mods_s").setValue('');
						Ext.getCmp("variaciones").setValue('');
						Ext.getCmp("nu_valor_rr").setValue('');
						Ext.getCmp("coomonedaa").setValue('');
						Ext.getCmp("fe_valor_rr").setValue('');
						Ext.getCmp("tx_descripcion_mod_ss").setValue('');
					},	
				}]
});
//*************************************************FIN GRID MODIFICACIONES******************************************************
//**************************************************PANEL MODIFICACIONES*******************************************************
 var ModificacionesFom = new Ext.FormPanel({ 
    id:'ModificacionesFom',
	labelAlign: 'top',
	frame:true,
	autoScroll: true,
	bodyStyle: 'padding:5px 5px 0',
	height:440,
	  
	   items:[{
			  layout: 'column',
	    },   
        {
               xtype:'fieldset',
               title: 'Modificaciones',
               //id:'modificaciones'
               collapsible: true,
               autoHeight:true,
               collapsed: true,
               layout: 'column',
               labelAlign: 'top',
               //allowBlank:false 
        items: [{
               columnWidth: .6,
			   layout: 'form', 
	
          items: [GetComboTipo('co_modificacion','co_tipo_modificacion','Modificaci&oacute;n ',2)]
            },
		    
            {
				columnWidth: .5,
				layout:'form', 
         items: [{fieldLabel: 'Monto', id:'nu_valor',  xtype: 'textfield', anchor: '80%'}]
		
			},
			{
				columnWidth: .3,
				layout:'form',
		 items:	 [GetCombo('co_monedaaaaa','co_moneda','Moneda')] 
		
			},
			{
			   columnWidth: .5,
			   layout: 'form', 
         items: [{fieldLabel: 'Fecha', id:'fe_valor', xtype: 'datefield', anchor: '90%'}]
            }, 
            {
			   columnWidth: 1.1,
			   layout: 'form',
         items: [{fieldLabel: 'Descripci&oacute;n', id:'tx_descripcion_mod', xtype: 'textarea',allowBlank: false, anchor: '90%'}]//ojo dos campos iguales en tablas diferentes a la hora de colocar los id
            }],
        
        buttons: [{
					//disabled:true,
					text:'Guardar Modificaci&oacute;n', 
				    id:'boton_guardar_modificar',
				    iconCls: 'modificar',
				    //disabled:true,
				    handler: function () 
				 {
					 Ext.MessageBox.confirm("[CONTRATOS]","Guardar ?", function(btn)
					 {
						 if(btn == 'yes')
						 {
							sm = GridModificaciones.getSelectionModel();
							fila = sm.getSelected(); 
							if(nuevo_modificacion){
								accion='insertar';
								temp_modificacion=null;
							}
							else
							{
								accion='modificar';
								temp_modificacion=fila.data.nu_modificacion;
							}
							store_Modificaciones.reload
							({
								params:
								{
									
									accion:accion,
									nu_modificacion:temp_modificacion,
									co_contrato:co_contrato,
									tipo_modificacion:2,
									Resultados:datosModificaciones()
								}
							});			
							ModificacionesFom.getForm().reset();	 
						}
					});
				}
				}]
	 },
	 {
               xtype:'fieldset',
               title: 'Fianzas',
               collapsible: true,
               autoHeight:true,
               collapsed: true,
               layout: 'column',
               labelAlign: 'top',
        
        items: [{
               columnWidth: .6,
			   layout: 'form', 
		 items: [GetComboTipo('fianza','co_tipo_modificacion','Fianza',1)]
		    },
		    {     
			   columnWidth: .5,
			   layout: 'form',
         items: [{fieldLabel: 'Monto', id:'nu_valorr', xtype: 'textfield', anchor: '90%'}]
            },
		    {  columnWidth: .3,
			   layout: 'form',
		items: [GetCombo('co_monedaa','co_moneda','Tipo de Moneda ')] 
			}, 
			{
			   columnWidth: .5,
			   layout: 'form', 
         items: [{fieldLabel: 'Fecha', id:'fe_valorr', xtype: 'datefield', anchor: '90%'}]
            }, 
            {
			   columnWidth: 1.1,
			   layout: 'form',
         items: [{fieldLabel: 'Descripci&oacute;n', id:'tx_descripcion_mods', xtype: 'textarea',allowBlank: false, anchor: '90%'}]//ojo dos campos iguales en tablas diferentes a la hora de colocar los id
            }],
            buttons: [{text:'Guardar Fianzas', 
				   id:'boton_guardar_fianzas', 
				   iconCls: 'modificar',
				   url: 'php/AdministracionInterfaz.php',
				  
				  handler: function()
				{
					 Ext.MessageBox.confirm("[CONTRATOS]","Guardar ?", function(btn)
					 {
						 if(btn == 'yes')
						 {
							sm = GridModificaciones.getSelectionModel();
							fila = sm.getSelected(); 
							if(nuevo_Fianzas){
								accion='insertar';
								temp_modificacion=null;
							}
							else
							{
								accion='modificar';
								temp_modificacion=fila.data.nu_modificacion;
							}
							store_Modificaciones.reload
							({
								params:
								{
									
									accion:accion,
									nu_modificacion:temp_modificacion,
									co_contrato:co_contrato,
									tipo_modificacion:1,
									Resultados:datosFianzas()
								}
							});			
							ModificacionesFom.getForm().reset();	 
						}
					});
				}
				  
				}]
     },
     {
               xtype:'fieldset',
               title: 'Paralizaciones',
               collapsible: true,
               autoHeight:true,
               collapsed: true,
               layout: 'column',
               labelAlign: 'top',
        
        items: [{
               columnWidth: .6,
			   layout: 'form', 
		 items: [GetComboTipo('paralizaciones','co_tipo_modificacion','Paralizaciones',3)]
		    },
		    {     
			   columnWidth: .5,
			   layout: 'form',
         items: [{fieldLabel: 'Monto', id:'nu_valor_r', xtype: 'textfield', anchor: '90%'}]
            },
		    {  columnWidth: .3,
			   layout: 'form',
		items: [GetCombo('comonedaa','co_moneda','Tipo de Moneda ')] 
			}, 
			{
			   columnWidth: .5,
			   layout: 'form', 
         items: [{fieldLabel: 'Fecha', id:'fe_valorr_r', xtype: 'datefield', anchor: '90%'}]
            }, 
            {
			   columnWidth: 1.1,
			   layout: 'form',
         items: [{fieldLabel: 'Descripci&oacute;n', id:'tx_descripcion_mods_s', xtype: 'textarea',allowBlank: false, anchor: '90%'}]//ojo dos campos iguales en tablas diferentes a la hora de colocar los id
            }],
             buttons: [{text:'Guardar Paralizaciones', 
				   id:'boton_guardar_paralizaciones', 
				   iconCls: 'modificar',
				   url: 'php/AdministracionInterfaz.php',
				  
				  handler: function()
				{
					 Ext.MessageBox.confirm("[CONTRATOS]","Guardar ?", function(btn)
					 {
						 if(btn == 'yes')
						 {
							sm = GridModificaciones.getSelectionModel();
							fila = sm.getSelected(); 
							if(nuevo_Paralizaciones){
								accion='insertar';
								temp_modificacion=null;
							}
							else
							{
								accion='modificar';
								temp_modificacion=fila.data.nu_modificacion;
							}
							store_Modificaciones.reload
							({
								params:
								{
									
									accion:accion,
									nu_modificacion:temp_modificacion,
									co_contrato:co_contrato,
									tipo_modificacion:3,
									Resultados:datosParalizaciones()
								}
							});			
							ModificacionesFom.getForm().reset();	 
						}
					});
				}
				  
				}]
     },
     {
               xtype:'fieldset',
               title: 'Variaciones',
               collapsible: true,
               autoHeight:true,
               collapsed: true,
               layout: 'column',
               labelAlign: 'top',
        
        items: [{
               columnWidth: .6,
			   layout: 'form', 
		 items: [GetComboTipo('variaciones','co_tipo_modificacion','Variaciones',4)]
		    },
		    {     
			   columnWidth: .5,
			   layout: 'form',
         items: [{fieldLabel: 'Monto', id:'nu_valor_rr', xtype: 'textfield', anchor: '90%'}]
            },
		    {  columnWidth: .3,
			   layout: 'form',
		items: [GetCombo('coomonedaa','co_moneda','Tipo de Moneda ')] 
			}, 
			{
			   columnWidth: .5,
			   layout: 'form', 
         items: [{fieldLabel: 'Fecha', id:'fe_valor_rr', xtype: 'datefield', anchor: '90%'}]
            }, 
            {
			   columnWidth: 1.1,
			   layout: 'form',
         items: [{fieldLabel: 'Descripci&oacute;n', id:'tx_descripcion_mod_ss', xtype: 'textarea',allowBlank: false, anchor: '90%'}]//ojo dos campos iguales en tablas diferentes a la hora de colocar los id
            }],
             buttons: [{text:'Guardar Variaciones', 
				   id:'boton_guardar_variaciones', 
				   iconCls: 'modificar',
				   url: 'php/AdministracionInterfaz.php',
				  
				  handler: function()
				 {
					 Ext.MessageBox.confirm("[CONTRATOS]","Guardar ?", function(btn)
					 {
						 if(btn == 'yes')
						 {
							sm = GridModificaciones.getSelectionModel();
							fila = sm.getSelected(); 
							if(nuevo_Variaciones){
								accion='insertar';
								temp_modificacion=null;
							}
							else
							{
								accion='modificar';
								temp_modificacion=fila.data.nu_modificacion;
							}
							store_Modificaciones.reload
							({
								params:
								{
									
									accion:accion,
									nu_modificacion:temp_modificacion,
									co_contrato:co_contrato,
									tipo_modificacion:4,
									Resultados:datosVariaciones()
								}
							});			
							ModificacionesFom.getForm().reset();	 
						}
					});
				}
				  
				}]
     },
    GridModificaciones, 
  ] 
  
 });  
 /*Ext.getCmp('variacionn').on('select', function(combo,record,index){
		Ext.getCmp('variacion').clearValue();
		Ext.getCmp('variacion').store.reload({params:{tipo_variacion:record.data.co_tipo_variacion}});
		Ext.getCmp('variacion').enable();
});*/	
//**************************************************FIN PANEL MODIFICACIONES**************************************************
//************************************************FIN FORMULARIO MODIFICACIONES***********************************************

																																		/*
//*************************************************STORE_CONTROL**************************************************************
var store_control = new Ext.data.JsonStore
({
	id:'store_control',
	writer: writer,
	url:'php/UnidadesInterfaz.php',
	root: 'Resultados',
	idProperty: 'id_unidades',
	baseParams:{accion:'refrescar'},
	fields: [
			{name: 'co_unidades'},
			{name: 'tx_unidades'},
			{name: 'fe_entrega'},
			{name: 'fe_recibido'},
			{name: 'id_unidades'},
			{name: 'co_contrato'},
			{name: 'tx_detalle'}
			
			]

});

var ComboApoyo = GetComboGrid('unidadess','co_unidades','')
ComboApoyo.on('select', function(combo,record,index)
	{
		fila = grid_control.getSelectionModel();
		celda = fila.getSelectedCell();
		grid_control.store.getAt(celda[0]).set('co_unidades',record.data.co_unidades);
	});		
//store_control.load();
//**********************************************FIN STORE CONTROL***********************************************************
//***********************************************GRID_CONTROL**************************************************************
var grid_control = new Ext.grid.EditorGridPanel
({
		store: store_control,
		id:'grid_control',
		sm: new Ext.grid.CellSelectionModel(),
		//width:415,
        height: 420,
        region:'center',
        frame:true,
        clicksToEdit: 1,
	 
	columns:[
				new Ext.grid.RowNumberer(),
				{header: 'Tipo de Tramite', dataIndex: 'tx_unidades', width: 150, editor: ComboApoyo },
				{header: 'Fecha de Entrega', dataIndex: 'fe_entrega', width: 110, renderer:formato_fecha, format:'d-m-Y', editor: new Ext.form.DateField({allowBlank: false})},
				{header: 'Fecha de Recibido', dataIndex: 'fe_recibido', width: 70, renderer:formato_fecha, format:'d-m-Y', editor: new Ext.form.DateField({allowBlank: false})},
				{header: 'Detalle', dataIndex: 'tx_detalle', width: 210, editor: new Ext.form.TextField({})}
			],
	tbar: [{
			text: 'Nuevo ',
            iconCls: 'agregar',
            id:'boton_nuevo_tramites',
            handler: function(){
								var Nuevo = grid_control.getStore().recordType;
								var n = new Nuevo({
													tx_unidades:'',
													fe_entrega: '',
													fe_recibido:'',
													tx_detalle:''});
								grid_control.stopEditing();
								store_control.insert(0, n);
								grid_control.startEditing(0, 0);
							  }
		   },'-',
		   {
            text: 'Eliminar',
            iconCls: 'icon-delete',
            id:'boton_eliminar_tramite',
            //disabled: true,
             handler: function(){
				Ext.MessageBox.confirm("[SISCOM]","Desea Eliminar Este Registro ?", function(btn){
					if(btn == 'yes'){
                //editor.stopEditing();                    // no deja ningún tipo de edición activos
                fila = grid_control.getSelectionModel();  // seleciona la fila del grid_agenda
                celda = fila.getSelectedCell();          // seleciona la celda del grid_agenda
                grid_control.store.reload({             // manda a recargar el store_agenda 
					params:{
						id_unidades:grid_control.store.getAt(celda[0]).get('id_unidades'),  //  elimina y se ubica en la celda 0
						co_contrato:co_contrato,
						accion:'eliminar'
					}
					
				});
			}
		});	
				
            }
       
        }, '-',
		{text: 'Guardar',
         iconCls: 'guardar',
         id:'boton_guardar_tramite',
         //disabled: true,
         handler: function () 
        
         {Ext.MessageBox.confirm("[SISCOM]","Guardar ?", function(btn){
					if(btn == 'yes'){
						records_modificados=store_control.getModifiedRecords();
						Ext.each(records_modificados,function(fila,i){
							if(fila.data.tx_unidades==undefined || fila.data.fe_entrega==undefined){
								WinError("Debe completar toda la informaci&oacute;n");
							}
							else{
								if(fila.data.id_unidades==null )
									accion='insertar';
								else
									accion='modificar';
								store_control.reload({
									params:{
										accion:accion,
										condicion:fila.data.id_unidades,
										co_contrato:co_contrato,
										filter:'',
										Resultados:Ext.util.JSON.encode(fila.getChanges())
									}
								});			
								fila.commit();				
								grid_control.getView().getRowClass=function (record,index,rowParams,store){
								return '';
							}
						  }
						});
					}
				});
					  
			 grid_control.store.reload
		}
			
			
		}, ]
		   /*{
					 Ext.MessageBox.confirm("[CONTRATOS]","Guardar ?", function(btn)
					 {
						 if(btn == 'yes')
						 {
							sm = GridModificaciones.getSelectionModel();
							fila = sm.getSelected(); 
							if(nuevo_modificacion){
								accion='insertar';
								temp_modificacion=null;
							}
							else
							{
								accion='modificar';
								temp_modificacion=fila.data.nu_modificacion;
							}
							store_Modificaciones.reload
							({
								params:
								{
									
									accion:accion,
									nu_modificacion:temp_modificacion,
									co_contrato:co_contrato,
									tipo_modificacion:2,
									Resultados:datosModificaciones()
								}
							});			
							ModificacionesFom.getForm().reset();	 
						}
					});
				}*/																													/*
});																																		*/
//**********************************************FIN GRID_CONTROL**************************************************************
//***********************************************PANEL CONTROL******************************************************************		
/*
var controlFom = new Ext.FormPanel
({
	id:'controlFom',
	labelAlign: 'top',
	frame:true,
	//layout: 'form',
	autoScroll: true,
	bodyStyle: 'padding:5px 5px 0',
	//width:450,
	height:440,
	//autoScroll: true,
	items:[{
			
		  },
		  grid_control,
		 ]
});
//************************************************FIN PANEL CONTROL***********************************************************
																																			/*
//*************************************************STORE CIERRE**************************************************************
var store_Cierre = new Ext.data.JsonStore
({
	id:'store_Cierre',
	writer: writer,
	url: 'php/ModificacionesInterfaz.php',
	root: 'Resultados',
	idProperty: 'tipocierre',
	baseParams: {accion:'refrescar',tipo_variacion:5},

	fields: [
			   {name: 'tx_tipo_modificacion', type: 'varchar'},
			   {name: 'co_tipo_modificacion', type: 'varchar'},
			   {name: 'co_tipo_variacion', type: 'varchar'},
			   {name: 'co_contrato', type: 'varchar'},
			   {name: 'co_usuario', type: 'varchar'},
			   {name: 'tx_tipo_variacion', type: 'varchar'},
			   {name: 'fe_registro', type: 'date'},
			   {name: 'nu_valor', type: 'varchar'},
			   {name: 'fe_valor'}, 
			   {name: 'tx_descripcion_mod', type: 'varchar'},
			   {name: 'tx_moneda', type: 'varchar'},
			   {name: 'nu_modificacion', type: 'varchar'}
			   
			]
});
var expander_cierre = new Ext.ux.grid.RowExpander
({
		expandOnDblClick:false,
        tpl : new Ext.Template(
								
								'<p><b>Tipo de Modalidad:</b> {tx_tipo_modificacion}</p><br/>'
							  )
});
var filtros_cierre= new Ext.ux.grid.GridFilters
({
local: true,
filters:[
										
					{type: 'list',  dataIndex: 'tx_tipo_modificacion', store: new Ext.data.JsonStore ({  
							 url: 'php/ModificacionesInterfaz.php', 
							 root: 'Resultados',					
							 fields: [ {name: 'tx_tipo_modificacion'} ],
							 baseParams: {accion:'listar',id:'tipo_modificacion_cierre',campo:'tx_tipo_modificacion',tabla:'i015t_tipo_modificacion'}
						}), labelField: 'tx_tipo_modificacion'}																		

	   ]
});
//*********************************************FIN STORE CIERRE**************************************************************
																																			
//*********************************************GRID CIERRE*******************************************************************
var GridCierre = new Ext.grid.GridPanel
({
    store: store_Cierre,
    title:'Cierre',
    id:'cierre',
    plugins:[expander_cierre,filtros_cierre],
    //sm: new Ext.grid.CellSelectionModel(),
	//stripeRows: true,
    //width:410,
    height: 230,
    frame: true,
    clicksToEdit: 1,
     
	columns:[  
				new Ext.grid.RowNumberer(),
				
				{header: 'Tipo de Modificacion', width: 120, sortable: true, dataIndex: 'tx_tipo_variacion'},
				{header: 'Tipo de Modalidad', width: 150, sortable: true, dataIndex: 'tx_tipo_modificacion'},
				{header: 'Fechas', width: 70, sortable: true,renderer:formato_fecha, format:'d-m-Y', dataIndex: 'fe_valor'},
				{header: 'Valor', width: 80, sortable: true, dataIndex: 'nu_valor'},
				{header: 'Moneda', width: 75, sortable: true, dataIndex: 'tx_moneda'},
				{header: 'Descripci&oacute;n', width: 150, sortable: true, dataIndex: 'tx_descripcion_mod'}	
			],
			
	listeners: {
				'rowclick': function (grid, rowIndex, e) 
				{
					nuevo_cierre=0;
					fila=GridCierre.getSelectionModel();
					rec=fila.getSelected();
					//CierreFom.getForm().loadRecord(rec);
					co_tipo_variacion=rec.data.co_tipo_variacion;
					switch(co_tipo_variacion){
						case '5':
					//nu_modificacion=rec.data.nu_modificacion;
							Ext.getCmp("co_cierre").setValue(rec.data.co_tipo_modificacion);
							Ext.getCmp("monto_totalllaa").setValue(rec.data.nu_valor);
							Ext.getCmp("mone").setValue(rec.data.co_moneda);
							Ext.getCmp("fe_registro4").setValue(rec.data.fe_valor);
							Ext.getCmp("tx_desctipcion4").setValue(rec.data.tx_descripcion_mod);
							Ext.getCmp("mone").setRawValue(rec.data.tx_moneda);
							Ext.getCmp("co_cierre").setRawValue(rec.data.tx_tipo_modificacion);
							}
							accion='modificar';	
							
																							
				}		
			},
			
			tbar:[{
            text: 'Nuevo',
            id:'boton_nuevo_Cierre',
            iconCls: 'nuevo-archivo',
            handler: function() 
            
				{
						//console.log('Nuevo');
						Ext.getCmp("co_cierre").setValue('');
						Ext.getCmp("monto_totalllaa").setValue('');
						Ext.getCmp("mone").setValue('');
						Ext.getCmp("fe_registro4").setValue('');
						Ext.getCmp("tx_desctipcion4").setValue('');
						
						//ValuacionesFom.getForm().reset();
						nuevo_cierre=1;
					}
        }, '-',
        {
            text: 'Eliminar',
            iconCls: 'eliminar-archivo',
            id:'boton_eliminar_nuevo_cierre',
            //disabled: true,
             handler: function(){
				Ext.MessageBox.confirm("[SISCOM]","Desea Eliminar Este Anticipo ?", function(btn)
				{
				  if(btn == 'yes')
				  {                
					sm = GridCierre.getSelectionModel();
					fila = sm.getSelected();       
					GridCierre.store.reload
					({         
						params:
						{
							nu_modificacion:fila.get('nu_modificacion'),  //  elimina y se ubica en la celda 0
							co_contrato:co_contrato,
							accion:'eliminar'
						}
					});
				 }
			   });	
            }
       
        }, '-',
		{text: 'Guardar',
         iconCls: 'guardar-archivo',
         id:'boton_guardar_cierre',
         //disabled: true,
         handler: function ()  
         {
					 Ext.MessageBox.confirm("[CONTRATOS]","Guardar ?", function(btn)
					 {
						 if(btn == 'yes')
						 {
							sm = GridCierre.getSelectionModel();
							fila = sm.getSelected(); 
							if(nuevo_cierre){
								accion='insertar';
								temp_modificacion=null;
							}
							else
							{
								accion='modificar';
								temp_modificacion=fila.data.nu_modificacion;
							}
							store_Cierre.reload
							({
								params:
								{
									
									accion:accion,
									nu_modificacion:temp_modificacion,
									co_contrato:co_contrato,
									tipo_modificacion:5,
									Resultados:datosCierre(co_tipo_modificacion=20)
								}
							});	
							
							//ModificacionesFom.getForm().reset();	 
						
						}
								
					});
				}
		}, ]
});
//********************************************FIN GRID CIERRE*******************************************************************
//*********************************************PANEL CIERRE********************************************************************
var CierreFom = new Ext.FormPanel
({   
        id:'CierreFom',
		frame:true,
		labelAlign: 'top',
		autoScroll: true,		
	    bodyStyle: 'padding:5px 5px 0',
	    height: 440,
	   
	    items:[{
			  layout: 'column',
	    },
	    {
			  xtype:'fieldset',
			  title: 'Cierre',
			  collapsible: true,
			  autoHeight:true,
			  collapsed: true,
			  labelAlign: 'top',
			  layout: 'column',
					  
				items:[{
					   columnWidth: .6,
					   layout: 'form',
				 items: [GetComboTipo('co_cierre','co_tipo_modificacion','Cierre',5)]
                    },
                    {     
					   columnWidth: .5,
					   layout: 'form',
				 items: [{fieldLabel: 'Monto', id:'monto_totalllaa', xtype: 'textfield', anchor: '90%'}]
					},
					{  columnWidth: .3,
					   layout: 'form',
				items: [GetCombo('mone','co_moneda','Tipo de Moneda ')] 
					}, 
					{
					   columnWidth: .5,
					   layout: 'form',
				 items: [{fieldLabel: 'Fecha', id:'fe_registro4', xtype: 'datefield', anchor: '90%'}]    
					},		
					{
					   columnWidth: 1,
					   layout: 'form',
				 items: [{fieldLabel: 'Desctipci&oacute;n', id:'tx_desctipcion4', xtype: 'textarea', anchor: '100%'}]
					},	
				 ]
			 },
             GridCierre,
	      ]	
 });      
//*****************************************FIN PANEL CIERRE********************************************************************
*/
//***************************************WINDOW ADMINISTRACION******************************************************************
var win;
var button = Ext.get('show-btn');
// create the window on the first click and reuse on subsequent clicks
 if(!win){
    win = new Ext.Window({					
		id:'win',
		modal: true,					
		closable: true,
		layout:'fit',
		width:400,
		height:499,
		closeAction:'hide',
		plain: true,
		buttonAlign:'center',
		autoScroll: true,
		resizable:false,


			items: new Ext.TabPanel
			({
				activeTab: 0,
				plain:true,
				//width:30,
				//height: 100,
				enableTabScroll: true,				
				closable: true,	
			 	items:
					  [
						{title: 'Datos Gerales', items: DatosFom,},
					//	{title: 'Pedido', items: PedidoFom},
					//	{title: 'Anticipo', items: AnticipoFom},
					//	{title: 'Aporte', items: AporteFom},
					//	{title: 'Otras Condiciones', items: CondicionesFom},
					//	{title: 'Valuaciones', items: ValuacionesFom},
					//	{title: 'Modificaciones y Variaciones', items: ModificacionesFom},
					//	{title: 'Gesti&oacute;n de Tramites', items: controlFom},
					//	{title: 'Cierre del Contrato', items: CierreFom}
						
					  ], 
					 		  
			}), 
			
			//for(var i=0;i<10;i++){this.addTab(i+1);}
			
			 /*buttons:[{
						 text:'Guardar',
						 id: 'boton_guardar_tabpanel',
						 iconCls:'guardar',
						 handler: function()
						 {
							 Ext.Msg.alert('SISCOM...', 'Seguro que Deseas Guardar?');
							 }			
					},
					{
						text: 'Cerrar',
						id: 'boton_cerrar_tabpanel',
						iconCls:'Cerrar', 
						handler: function()
							   {
								 win.hide();
							   }
					},
				],*/
    });
    };
//***************************************FIN WINDOW ADMINISTRACION**************************************************************
//***************************************TABS DEL GRID PRINCIPAL****************************************************************
var administracionTabs = new Ext.TabPanel({
    activeTab: 0,
    anchor:'100%',
    plain:true,
    width:1082,
	height: 0,
    items:[
			{
				title: 'Por Iniciar',
				listeners: 	{
					'activate': function (panel) 
					{
						tab='Por_Asignar';
						store_administracion.reload({params:{tab:tab}});
						//gobal_admi='Por Asignar';
					}
				}
			},
			{
				title: 'En Procesos',
				listeners: 	{
					'activate': function (panel) 
					{
						tab='En_Proceso';
						store_administracion.reload({params:{tab:tab}});
						//gobal_admi='En Proceso';
					}
				}
			},
			{
				title: 'Cerrados',
				listeners: 	{
					'activate': function (panel) 
					{
						tab='Cerrado';
						store_administracion.reload({params:{tab:tab}});
						//gobal_admi='Cerrado';
					}
				}
			}
          ]      
});
var simple = new Ext.FormPanel({
	items: [administracionTabs,grid]
	});
/*Ext.getCmp('co_filiall').store.load(),
//*******************************************FIN DEL TABS***********************************************************************
 * folder_add.png
 * folder_add.png
 * page_save.png
Ext.getCmp('co_direccionn').store.load(),
Ext.getCmp('co_divisionn').store.load(),
Ext.getCmp('co_distritoo').store.load()*/
