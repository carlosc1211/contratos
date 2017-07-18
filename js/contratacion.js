//********************************www.forosdelweb.com/1580596-post37.html********************************************
Ext.Ajax.timeout = 120000;
var co_ubicacion=0;
var co_proceso=0, i;
var accion;
var listaFiltros = [];
var formatoFecha = Ext.util.Format.dateRenderer('d-m-Y');
var global_tab;
var formatoMayusculas = Ext.util.Format.uppercase;
var fe_recomendacion= null;
var co_supervisor;
var co_analista;

//**************************************************DATOS CONTRATACION**********************************************
function datosContratacion(){
//*********************************************DATOS PANEL1*********************************************************
//datos = '"co_supervisor" : "'+Ext.getCmp("co_supervisor").getValue()+'", ';
if (convFecha (Ext.getCmp("fe_recomendacion").getValue())== '')
	var fecha_recomendacion = null;
else
	var fecha_recomendacion = 	convFecha (Ext.getCmp("fe_recomendacion").getValue());

datos =  '{"co_supervisor" : "'+Ext.getCmp("usuario_supervisor").getValue()+'", ';
datos += '"co_usuario" : "'+Ext.getCmp("usuario_analista").getValue()+'", ';
datos += '"tx_superintendencia" : "'+Ext.getCmp("tx_superintendencia").getValue()+'", ';
datos += '"tx_lider_proyecto" : "'+Ext.getCmp("tx_lider_proyecto").getValue()+'", ';
datos += '"nu_telefonico_lider" : "'+Ext.getCmp("nu_telefonico_lider").getValue()+'", ';
datos += '"nu_extension_lider" : "'+Ext.getCmp("nu_extension_lider").getValue()+'", ';


//***************************DATOS DE LA ESTRATEGIA POR SI SON MODIFICADOS*********************************************
datos += '"co_tipo_contrato" : "'+Ext.getCmp("co_tipo_contrato_contra").getValue()+'", ';
datos += '"co_modalidad" : "'+Ext.getCmp("co_modalidad_contra").getValue()+'", ';
datos += '"co_naturaleza" : "'+Ext.getCmp("co_naturaleza_contra").getValue()+'", ';
datos += '"co_regimen_lab" : "'+Ext.getCmp("co_regimen_lab_contra").getValue()+'", ';
datos += '"co_mecanismo_verif" : "'+Ext.getCmp("co_mecanismo_verif_contra").getValue()+'", ';
datos += '"co_estrategia_adj" : "'+Ext.getCmp("co_estrategia_adj_contra").getValue()+'", ';
datos += '"co_rango" : "'+Ext.getCmp("co_rango_contra").getValue()+'", '; 

//***************************************************FIN DATOS PANEL1********************************************************

//**********************************************DATOS PANEL2**************************************************************
datos += '"tx_descripcion" : "'+Ext.getCmp("tx_descripcion").getValue()+'", ';
datos += '"nu_solped" : "'+Ext.getCmp("nu_solped").getValue()+'", ';
datos += '"nu_expediente" : "'+Ext.getCmp("nu_expediente").getValue()+'", ';
datos += '"nu_control_cf" : "'+Ext.getCmp("nu_control_cf").getValue()+'", ';
datos += '"co_prioridad" : "'+Ext.getCmp("co_prioridad_contra").getValue()+'", ';
//datos += '"nu_orden_interna" : "'+Ext.getCmp("nu_orden_interna_contra").getValue()+'", ';
datos += '"co_orientacion" : "'+Ext.getCmp("co_orientacion_contra").getValue()+'", ';
datos += '"tx_alcance" : "'+Ext.getCmp("tx_alcance").getValue()+'", ';
datos += '"fe_recomendacion" : "'+fecha_recomendacion+'", ';
datos += '"tx_antecedente" : "'+Ext.getCmp("tx_antecedente").getValue()+'", ';
datos += '"co_comision" : "'+Ext.getCmp("co_comision_contra").getValue()+'"} ';
//datos += '"nu_aporte_compromiso" : "'+Ext.getCmp("nu_aporte_compromiso").getValue()+'", ';
//datos += '"tx_upc" : "'+Ext.getCmp("tx_upc").getValue()+'"} ';


//--------------------------------------------FIN DATOS PANEL2----------------------------------------------------------------

//return el JSON definido para guardar un proceso	
return datos;
}
//************************************************FIN DATOS CONTRATACION********************************************

//***************************************************DATOS EMPRESA**************************************************
function datosEmpresa(){

datos = '{"nu_rif" : "'+Ext.getCmp("nu_rif").getValue()+'", ';
datos += '"tx_empresa" : "'+Ext.getCmp("tx_empresa").getValue()+'", ';
datos += '"tx_representante" : "'+Ext.getCmp("tx_representante").getValue()+'", ';
datos += '"tx_ubi_empresa" : "'+Ext.getCmp("tx_ubi_empresa").getValue()+'", ';
datos += '"nu_acreedor" : "'+Ext.getCmp("nu_acreedor").getValue()+'", ';
datos += '"nu_van" : "'+Ext.getCmp("nu_van").getValue()+'", ';
datos += '"nu_telefonico" : "'+Ext.getCmp("nu_telefonico").getValue()+'", ';
datos += '"nu_telefonico_opcional" : "'+Ext.getCmp("nu_telefonico_opcional").getValue()+'", ';
datos += '"tx_observacion_empresa" : "'+Ext.getCmp("tx_observacion_empresa").getValue()+'", ';
datos += '"co_status_empresa" : "'+Ext.getCmp("co_status_empresa_contra").getValue()+'", ';
datos += '"co_tipo_empresa" : "'+Ext.getCmp("co_tipo_empresa_contra").getValue()+'"} ';
return datos;
}
//************************************************FIN DATOS EMPRESA*************************************************

//**************************************************FUNCION FILTROS*************************************************
function filtro(co_proceso){

datos = '{"co_proceso" : "'+co_proceso+'"} ';

return datos;
}
//*************************************************FIN FUNCION FILTROS**********************************************
//**************************************************STORE CONTRATACION***********************************************
var writer = new Ext.data.JsonWriter();
var store_contratacion = new Ext.data.JsonStore({  
     id:'store_contratacion',
     url:'php/ContratacionInterfaz.php',
	 writer: writer,
	 batch:false,
	 totalProperty:'total',
	 root: 'ResultadosCon',
	 idProperty: 'co_proceso',
	 fields: [
			{name:'tx_usuario'},
			{name: 'co_proceso'},
			{name: 'co_usuario'},
			{name: 'co_supervisor'},
			{name: 'tx_indicador'},
			{name: 'tx_supervisor'},
			{name: 'co_proyecto'},
			{name: 'tx_proyecto'},
			{name: 'co_ubicacion'},
			{name: 'tx_ubicacion_contra'},
			{name: 'tx_lugar_ejecucion_contra'},
			{name: 'co_organizacion'},
			{name: 'tx_organizacion'},
			{name:'co_naturaleza'},
			{name:'tx_naturaleza'},
			{name: 'nu_plazo_ejec'},
			{name: 'co_modalidad'},
			{name: 'tx_modalidad'},
			{name: 'co_regimen_lab'},
			{name: 'tx_regimen_lab'},
			{name: 'nu_extension_lider'},
			{name: 'tx_superintendencia', type:'string'},
			{name: 'tx_lider_proyecto', type:'string'},
			{name: 'fe_especificaciones_con'},
			{name: 'nu_telefonico_lider', type:'string'},
			{name: 'tx_descripcion'},
			{name: 'co_prioridad'},
			{name: 'tx_prioridad'},
			//{name: 'nu_orden_interna_contra'},
			{name: 'co_orientacion'},
			{name: 'tx_orientacion'},
			{name: 'tx_alcance'},
			{name: 'tx_antecedente'},
			{name: 'co_tipo_presupuesto'},
			{name: 'tx_tipo_presupuesto'},
			{name: 'co_rango'},
			{name: 'tx_rango'},	
			{name: 'co_mecanismo_verif'},
			{name: 'tx_mecanismo_verif'},
			{name: 'co_tipo_contrato'},
			{name: 'tx_tipo_contrato'},
			{name: 'co_estrategia_adj'},
			{name: 'tx_estrategia_adj'},
			{name: 'fe_recomendacion'},
			{name: 'nu_solped'},
			{name: 'nu_expediente'},
			{name: 'nu_control_cf'},
			{name: 'tx_upc'},
			{name: 'nu_aporte_compromiso'},
			{name: 'co_comision'},
			{name: 'tx_comision'}


			],
     
     baseParams: {  accion:'refrescar',
					filter: ''
		           //tx_indicador:Usuario.usuario
				 },
	 
	 
	 listeners:  {
					update : function(store, record,operation) {   
																// function actualizar // update
																//alert(operation);
																if(operation=='edit'){
																						//store_contratacion.commitChanges(); 
																					  }
															     },
					remove : function(store, record,index){
															 store.reload({params:{co_proceso:record.get('co_proceso')}});
			                                                }
				  }

});
//store_contratacion.reload({params:{tab:'pendientes'}})
//*******************************************FIN STORE CONTRATACION*************************************************************
//*********************************************GRID CONTRATACION*****************************************************************
grid_contratacion = new Ext.grid.GridPanel({
		id:'grid_contratacion', //identificacion del var grid_contratacion = new Ext.grid.GridPanel
		name:'grid_contratacion',
		title: 'Gesti&oacute;n del Proceso de Contrataci&oacute;n',
		store: store_contratacion,
		//width: 1100,
		anchor:'100%',
		height: 700,
		//layout: 'fit',
		// plugins:[expander],
		// region:'center',
		margins: '0 5 5 5',
        stripeRows: true,
		autoScroll:false,

//******************************************COLUMNAS DEL GRID DE CONTRATACION***************************************************
      columns:[ new Ext.grid.RowNumberer(), //expander,
					{
						header: 'Fecha de recepcion',
						width: 100,
						sortable: true,
						dataIndex: 'fe_especificaciones_con'
					},{
					   header: 'Supervisor',
					   width: 100,
					   sortable: true, 
					   dataIndex: 'tx_supervisor'         
					},{
					   header: 'Analista',
					   width: 100,
					   sortable: true, 
					   dataIndex: 'tx_usuario'         
					},{
					   header: 'Descripci&oacute;n del Proceso',
					   width: 100,
					   sortable: true, 
					   renderer: Ext.util.Format.uppercase,
					   dataIndex: 'tx_proyecto'         
					},{
						header: 'Solped',
						width: 100,
						sortable: true,
						dataIndex: 'nu_solped'
					},{
						header: 'Expediente',
						width: 100,
						sortable: true,
						dataIndex: 'nu_expediente'
					},{
						header: 'N&uacute;mero de Control C.F',
						width: 100,
						sortable: true,
						dataIndex: 'nu_control_cf'
					},{
					   header: 'Fecha recomendacion',
					   width: 100,
					   sortable: true, 
					   renderer: fn_fe_especificaciones,
					   dataIndex: 'fe_recomendacion'         
					},
					/*{	header: 'Filial', // encabezamiento del campo del grid_contratacion
						width: 100,
						sortable: true,
						//dataIndex: ''
					},{
						header: 'Direcci&oacute;n Ejecutiva',
						width: 100,
						sortable: true,
						//dataIndex: ''
					},{
						header: 'Divisi&oacute;n',
						width: 100,
						sortable: true,
						//dataIndex: ''
					},{
						header: 'Distrito',
						width: 100,
						sortable: true,
						//dataIndex: ''
					},*/{
						header: 'Gerencia',
						width: 100,
						sortable: true,
						dataIndex: 'tx_organizacion'
					},{
						header: 'Superintendencia',
						width: 100,
						sortable: true,
						renderer: Ext.util.Format.uppercase,
						dataIndex: 'tx_superintendencia'
					},{
						header: 'Lider de Proyecto',
						width: 100,
						sortable: true,
						renderer: Ext.util.Format.uppercase,
						dataIndex: 'tx_lider_proyecto'
					},{
						header: 'Numero Lider de Proyecto',
						width: 100,
						sortable: true,
						dataIndex: 'nu_telefonico_lider'
					},{
					   header: 'Plazo de Ejecuci&oacute;n',
					   width: 100,
					   sortable: true, 
					   dataIndex: 'nu_plazo_ejec'
					},{
					   header: 'Naturaleza',
					   width: 100,
					   sortable: true,
					   dataIndex: 'tx_naturaleza'
					},{
					   header: 'Modalidad',
					   width: 100,
					   sortable: true, 
					   dataIndex: 'tx_modalidad'         
					},{
					   header: 'Regimen Laboral',
					   width: 100,
					   sortable: true, 
					   dataIndex: 'tx_regimen_lab'        
					},{
					   header: 'Descripci&oacute;n del Proceso',
					   width: 100,
					   sortable: true, 
					   renderer: Ext.util.Format.uppercase,
					   dataIndex: 'tx_descripcion'        
					},{
					   header: 'Antecedentes del Proceso',
					   width: 100,
					   sortable: true, 
					   renderer: Ext.util.Format.uppercase,
					   dataIndex: 'tx_antecedente'        
					},{
						header: 'Prioridad',
						width: 100,
						sortable: true,
						dataIndex: 'tx_prioridad'
					},{
						header: 'Orden Interna o CeCo',
						width: 100,
						sortable: true,
						//dataIndex: 'nu_orden_interna_contra'
					},{
						header: 'Orientaci&oacute;n',
						width: 100,
						sortable: true,
						dataIndex: 'tx_orientacion'
					},{
						header: 'Lugar de Ejecuci&oacute;n',
						width: 100,
						sortable: true,
						renderer: Ext.util.Format.uppercase,
						dataIndex: 'tx_lugar_ejecucion_contra'
					}/*,{
						header: 'Tipo de Contrataci&oacute;n',
						width: 100,
						sortable: true,
						//dataIndex: ''
					},{
					   header: 'Empresa',
					   width: 100,
					   sortable: true,
					   //dataIndex: ''                 
					}*/
					], 
					
		sm: new Ext.grid.RowSelectionModel({
		//singleSelect: true,
		listeners: {
			rowselect: function(sm, row, rec){
//**************************************para que los id no tengan problema	************************************************
			Ext.getCmp('fe_especificaciones_con').setValue(rec.data.fe_especificaciones);
			Ext.getCmp('tx_lugar_ejecucion_contra').setValue(rec.data.tx_lugar_ejecucion);
			Ext.getCmp('co_tipo_contrato_contra').setValue(rec.data.tx_lugar_ejecucion);
			Ext.getCmp('co_modalidad_contra').setValue(rec.data.tx_modalidad);
			Ext.getCmp('co_naturaleza_contra').setValue(rec.data.tx_naturaleza);
			Ext.getCmp('co_regimen_lab_contra').setValue(rec.data.tx_regimen_lab);
			Ext.getCmp('co_mecanismo_verif_contra').setValue(rec.data.tx_mecanismo_verif);
			Ext.getCmp('co_estrategia_adj_contra').setValue(rec.data.tx_estrategia_adj);
			Ext.getCmp('co_rango_contra').setValue(rec.data.tx_rango);
			Ext.getCmp("co_prioridad_contra").setValue(rec.data.tx_prioridad);
			Ext.getCmp("usuario_supervisor").setValue(rec.data.tx_usuario);
			Ext.getCmp("usuario_analista").setValue(rec.data.tx_usuario);
//***************************CARGAMOS EL STORE DEL COMBO ANALISTA RESPONSABLE SI AUN NO TIENE ASIGNADO************************
			if(rec.data.co_supervisor!=null && rec.data.co_usuario==null){
				Ext.getCmp('usuario_analista').clearValue();
				Ext.getCmp('usuario_analista').store.reload({params:{accion:'usuarios',supervisor:rec.data.co_supervisor}});
				Ext.getCmp('usuario_analista').enable();
			}
		}
   }
}),
//********************************************TOOLBAR PRINCIPAL************************************************
			tbar: [
				{
				iconCls: 'proceso-add',
				
				disabled:false,
				text: 'Nuevo Proceso',
				
				handler: function () 	{
					
										Wincontratacion.show();
										//console.log('nuevo proceso');
										Wincontratacion.setTitle("Nuevo Proceso de Contratacion");
										//accion= 'insertar';
										
										}, 
				},{
				
				iconCls: 'proceso-delete',
				text: 'Eliminar Proceso',
				disabled: true,
				handler: function () {
						//----------seleciona la fila del grid_contratacion-------------------------
									fila = grid_contratacion.getSelectionModel(); 
						//----------seleciona la celda del grid_contratacion------------------------
									celda = fila.getSelected();        
									var gstore = grid_contratacion.getStore();
						//---------------------manda a cargar el store------------------------------
									gstore.load({            
												params:{
						//----------------tx_indicador:Ext.getCmp('tx_usuario').getValue(),---------
														co_proceso: celda.data.co_proceso,
						//----------------------accion:'eliminar'-----------------------------------
													   },
												});
									gstore.remove(celda);
									   }
				},
				/*
//************************************REPORTE POR RANGO**************************************************************
				{
				iconCls: 'plan-add',
				disabled:false,
				text: 'Rango del Reporte',
				handler: function () 	{
										win.show();		
										
										}, 
				},
//***************************************FIN REPORTE POR RANGO******************************************************	*/
				'', '', 
				{			
				iconCls: 'exportar-excel',
				id:'boton_exportar_excel_contratacion',
				text: 'Exportar',
				//disabled: true,
				handler: function(){
                window.location = 'php/contratacionxls.php';}
				},'', '',
				
				{/*text: 'Rango del Reporte',
				iconCls: 'Nuevo',
				//id:'Nuevo',
				handler : function(){
            	Ext.ux.Printer.printAutomatically = false;
            	Ext.ux.Printer.print(grid_contratacion);
            }*/
            }],
//*********************************************CARGAR DATOS EN EL FORMULARIO (dobleclick)********************************************
listeners: {
			'rowdblclick': function (grid, rowIndex, e) {
										
										fila=grid.getSelectionModel();
										rec=fila.getSelected();
										
										panel_datos_generales.getForm().reset();
										panel_datos_proceso.getForm().reset();
										panel_tab_empresa.getForm().reset();
										panel_unidades.getForm().reset();
										panel_cronograma.getForm().reset();
										panel_seguimiento.getForm().reset();
										panel_actividades.getForm().reset();
										//console.log('clicked1');
										
										Wincontratacion.setTitle('N&deg; Solped '+grid.store.getAt(rowIndex).get('nu_solped'));
										panel_datos_generales.getForm().loadRecord(rec);
										panel_datos_proceso.getForm().loadRecord(rec);
										panel_tab_empresa.getForm().loadRecord(rec);
										panel_unidades.getForm().loadRecord(rec);
										panel_cronograma.getForm().loadRecord(rec);
										panel_seguimiento.getForm().loadRecord(rec);
										panel_actividades.getForm().loadRecord(rec);
										
										
										//formPanel_contratacion.getForm().reset();
										//formPanel_contratacion.getForm().loadRecord(rec);
										co_proceso=rec.data.co_proceso;
										co_supervisor=rec.data.co_supervisor;
										co_analista=rec.data.co_usuario;
										//console.log('clicked 2');
										
//*******************************************************cargar el valor de cada combo*****************************************************
				Ext.getCmp("usuario_supervisor").setValue(rec.data.co_supervisor);
				Ext.getCmp("usuario_analista").setValue(rec.data.co_usuario);
				Ext.getCmp("co_organizacion_contra").setValue(rec.data.co_organizacion);
				Ext.getCmp("co_naturaleza_contra").setValue(rec.data.co_naturaleza);
				Ext.getCmp("co_regimen_lab_contra").setValue(rec.data.co_regimen_lab);
				Ext.getCmp("co_modalidad_contra").setValue(rec.data.co_modalidad);
				Ext.getCmp("co_prioridad_contra").setValue(rec.data.co_prioridad);
				Ext.getCmp("co_orientacion_contra").setValue(rec.data.co_orientacion);
				Ext.getCmp("co_tipo_presupuesto_contra").setValue(rec.data.co_tipo_presupuesto);
				Ext.getCmp("co_estrategia_adj_contra").setValue(rec.data.co_estrategia_adj);
				Ext.getCmp("co_mecanismo_verif_contra").setValue(rec.data.co_mecanismo_verif);
				Ext.getCmp("co_rango_contra").setValue(rec.data.co_rango);
				Ext.getCmp("co_tipo_contrato_contra").setValue(rec.data.co_tipo_contrato);
				Ext.getCmp("co_comision_contra").setValue(rec.data.co_comision);
				
				if((rec.data.fe_recomendacion == '0000-00-00') || (rec.data.fe_recomendacion=="") || (rec.data.fe_recomendacion==null)) {
					Ext.getCmp("fe_recomendacion").enable();
					Ext.getCmp("fe_recomendacion").setValue('');
                }else
					{
					Ext.getCmp("fe_recomendacion").setValue(rec.data.fe_recomendacion);
					Ext.getCmp("fe_recomendacion").disable();	
				}
				Wincontratacion.show();
										
//**********************************************************cargar el nombre de cada valor******************************************************
				Ext.getCmp("usuario_supervisor").setRawValue(rec.data.tx_supervisor);
				Ext.getCmp("usuario_analista").setRawValue(rec.data.tx_usuario);
				Ext.getCmp("co_organizacion_contra").setRawValue(rec.data.tx_organizacion);
				Ext.getCmp("co_naturaleza_contra").setRawValue(rec.data.tx_naturaleza);
				Ext.getCmp("co_regimen_lab_contra").setRawValue(rec.data.tx_regimen_lab);
				Ext.getCmp("co_modalidad_contra").setRawValue(rec.data.tx_modalidad);
				Ext.getCmp("co_prioridad_contra").setRawValue(rec.data.tx_prioridad);
				Ext.getCmp("co_orientacion_contra").setRawValue(rec.data.tx_orientacion);
				Ext.getCmp("co_tipo_presupuesto_contra").setRawValue(rec.data.tx_tipo_presupuesto);
				Ext.getCmp("co_estrategia_adj_contra").setRawValue(rec.data.tx_estrategia_adj);
				Ext.getCmp("co_mecanismo_verif_contra").setRawValue(rec.data.tx_mecanismo_verif);
				Ext.getCmp("co_rango_contra").setRawValue(rec.data.tx_rango);
				Ext.getCmp("co_tipo_contrato_contra").setRawValue(rec.data.tx_tipo_contrato);
				Ext.getCmp("co_comision_contra").setRawValue(rec.data.tx_comision);
				
				store_unidades.reload({params:{ "filter[0][data][comparison]":'eq',"filter[0][data][type]":'numeric',"filter[0][data][value]":co_proceso,"filter[0][field]":'co_proceso' }});
				store_resultados.reload({params:{ co_proceso:co_proceso }});
				store_empresa.reload({params:{ co_proceso:co_proceso }});
				comboEmpresa_adjudicataria.store.reload({params:{co_proceso:co_proceso}});
				//OJO ACTIVAR CRONOGRAMA
				store_cronograma.reload({params:{condicion:co_proceso,
												fe_recomendacion:rec.data.fe_recomendacion
												}});
				accion='modificar';
				
				
							},
			/*'rowclick': function (grid, rowIndex, e) {
										fila=grid.getSelectionModel();
										rec=fila.getSelected();
										co_proceso=rec.data.co_proceso;
							}*/
			}
}); 
//********************************************FIN GRID DE CONTRATACION*******************************************************
//**********************************************FORMULARIO PANEL 1***********************************************************
//*********************************************PANEL DATOS GENERALES*********************************************************
var panel_datos_generales = new Ext.FormPanel({
	id:'panel_datos_generales',
	name:'panel_datos_generales',		
	region:'center',
	bodyStyle: 'padding:5px 5px 0',
	width: 430,
	height: 475,
	autoScroll: true,

	items: [{
      xtype:'fieldset',
      title: 'Responsable',
      autoHeight:true,
					labelAlign: 'top',
					labelWidth: 100,
					//collapsed: true,
					collapsible: true,
					layout: 'column',
					defaults: {anchor: '130%'},
					width:400,
    items: [{
			   columnWidth: .5,
			   layout: 'form',
		items: [GetComboDinamico('usuario_supervisor','co_usuario','Supervisor Responsable','usuario_supervisores_contratacion','')]    
            },
			{   columnWidth: .5,
			   layout: 'form',
		items: [GetComboLocal('usuario_analista','co_usuario','Analista Responsable', true)] 
            }]

		
    },{
							xtype:'fieldset',
							title: 'Datos del Solicitante',
							collapsed: true,
							collapsible: true,
							autoHeight:true,
							//labelAlign: 'top',
							labelWidth: 160,
							width:400,
							
							
							items: [{
											xtype: 'datefield',
											id:'fe_especificaciones_con',
											fieldLabel: 'Fecha de recepci&oacute;n de Especificaciones t&eacute;cnicas',
											//name: '',
											anchor: '100%',
											disabled:true
										
								   },{
					columnWidth: .5,
					layout: 'form',
					items: [{
						xtype: 'textfield',
						id:'tx_ubicacion_contra',
						fieldLabel: 'Ubicaci&oacute;n',
						disabled:true,
						anchor: '100%'
					}]
			},{
					columnWidth: .5,
					layout: 'form',
					width:473,//tamaño del combo
					items: [GetCombo('co_organizacion_contra','co_organizacion','Organizaci&oacute;n', true)]
				},{
					columnWidth: .5,
					layout: 'form',
					items: [{xtype: 'textfield',
											id:'tx_superintendencia',
											fieldLabel: 'Superintendencia Usuaria',
											name: 'tx_superintendencia',
											style: 'text-transform:uppercase; font:normal 12px tahoma,arial,helvetica,sans-serif; !important;',
											anchor: '100%'}]
				
				},{
											xtype: 'textfield',
											id:'tx_lider_proyecto',
											fieldLabel: 'Lider de Proyecto',
											name: 'tx_lider_proyecto',
											style: 'text-transform:uppercase; font:normal 12px tahoma,arial,helvetica,sans-serif; !important;',
											anchor: '100%'
								},{
											xtype: 'textfield',
											id:'nu_extension_lider',
											fieldLabel: 'Extensi&oacute;n del Lider',
											name: 'nu_extension_lider',
											anchor: '100%'
								},{
											xtype: 'textfield',
											id:'nu_telefonico_lider',
											fieldLabel: 'N&uacute;mero telef&oacute;nico del Lider',
											name: 'nu_telefonico_lider',
											anchor: '100%'
								},{
											xtype: 'textarea',
											id:'tx_proyecto',
											fieldLabel: 'Descripci&oacute;n del Proyecto',
											style: 'text-transform:uppercase; font:normal 12px tahoma,arial,helvetica,sans-serif; !important;',
											anchor: '100%',
											name: 'tx_proyecto',
												
								},{
					
											xtype: 'textfield',
											id:'tx_lugar_ejecucion_contra',
											fieldLabel: 'Lugar de Ejecuci&oacute;n',
											disabled:true,
											style: 'text-transform:uppercase; font:normal 12px tahoma,arial,helvetica,sans-serif; !important;',
											anchor: '100%'
						
						}
					]//Items 1er fieldset
            },{
							xtype:'fieldset',
							title: 'Estrategia de Contrataci&oacute;n',
							collapsed: true, //aparezca contraido
							collapsible: true,
							autoHeight:true,
							//labelAlign: 'top',
							width:400,
							labelWidth: 170,
							items :[{
											xtype: 'textfield',
						id:'nu_plazo_ejec',
						fieldLabel: 'Plazo de Ejecuci&oacute;n',
						anchor: '100%'
								  },{
					columnWidth: 1,
					layout: 'form',
					width:473,//tamaño del combo
					items: [GetCombo('co_tipo_contrato_contra','co_tipo_contrato','Tipo de Contrato')]
			},{
					columnWidth: 1,
					layout: 'form',
					width:473,//tamaño del combo
					items: [GetCombo('co_modalidad_contra','co_modalidad','Modalidad de la Contrataci&oacute;n')]
				},{
					columnWidth: 1,
					layout: 'form',
					width:473,//tamaño del combo
					items: [GetCombo('co_naturaleza_contra','co_naturaleza','Naturaleza de la Contrataci&oacute;n')]
				},{
					columnWidth: .5,
					layout: 'form',
					width:473,//tamaño del combo
					items: [GetCombo('co_regimen_lab_contra','co_regimen_lab','Regimen Laboral')]
				},{
					columnWidth: 1,
					layout: 'form',
					width:473,//tamaño del combo
					items: [GetCombo('co_mecanismo_verif_contra','co_mecanismo_verif','Mecanismo de Verificaci&oacute;n')]
				},{
					columnWidth: .5,
					layout: 'form',
					width:473,//tamaño del combo
					items: [GetCombo('co_estrategia_adj_contra','co_estrategia_adj','Estrategia de Adjudicaci&oacute;n')]
				},{
					columnWidth: 1,
					layout: 'form',
					width:473,//tamaño del combo
					items: [GetCombo('co_rango_contra','co_rango','Categor&iacute;as de la Contrataci&oacute;n (UT)')]
				}]//2do Items
              }],// items del container
       listeners: {
									
									fmayusculas: function(field,e){
									//	console.log.(field);
										field.setValue(field.getValue().toUpperCase()); //evento para colocar las letras en mayúsculas
									},
						},
			buttonAlign: 'center', 	
			buttons: [{
			text: 'Guardar',
			id:'boton_guardar_datos_generales',
				
			listeners: {
			'click': function () { 
									store_contratacion.reload({
										params:{
											ResultadosCon: datosContratacion(),
                                			accion: 'modificar',
											co_proceso:co_proceso,
											tabcon: global_tab
										},
										callback:function (r,options, success){
											if(success==true && Ext.getCmp("usuario_supervisor").getValue()!='' && Ext.getCmp("usuario_supervisor").getValue()!=co_supervisor){
												//ENVIAMOS CORREO CUANDO SE ASIGNE SUPERVISOR
												Ext.Ajax.request({
													url: 'lib/mailer/sendmail.php',
													params:{
														co_usuario_asignado:Ext.getCmp("usuario_supervisor").getValue(),
														co_usuario_asignador:co_usuario,
														co_proceso:co_proceso,
														co_tipo:2
													}
												});
											}
											if(success==true && Ext.getCmp("usuario_analista").getValue()!='' && Ext.getCmp("usuario_analista").getValue()!=co_usuario){
												//ENVIAMOS CORREO CUANDO SE ASIGNE ANALISTA
												Ext.Ajax.request({
													url: 'lib/mailer/sendmail.php',
													params:{
														co_usuario_asignado:Ext.getCmp("usuario_analista").getValue(),
														co_usuario_asignador:co_usuario,
														co_proceso:co_proceso,
														co_tipo:2
													}
												});
											}
										}
									});
									Wincontratacion.hide();
								  }
			}
			}, {
				text: 'Cerrar',
				id:'boton_cerrar_datos_generales',
				listeners: {
							'click': function () {
													Wincontratacion.hide();
												   }
						   }
						  
			   }]
 });
//*********************************************FIN PANEL DATOS GENERALES*****************************************************
//*************************************************FORMULARIO PANEL 2********************************************************
var panel_datos_proceso = new Ext.FormPanel({
	id:'panel_datos_proceso',
	name:'panel_datos_proceso',	
	labelAlign: 'top',
	bodyStyle: 'padding:5px 5px 0',
	width: 430,
	height: 475,
	layout:'column',
	autoScroll: true,
	items:[{
				  columnWidth: 1,
				   layout: 'form',
	items:[{
						xtype: 'textarea',
						id:'tx_descripcion',
						name:'tx_descripcion',
						fieldLabel: 'Descripci&oacute;n del Proceso',
						style: 'text-transform:uppercase; font:normal 12px tahoma,arial,helvetica,sans-serif; !important;',
						anchor: '98%',
						vtype: 'validosEsp'
						
					},{ 
					xtype:'fieldset',
					title: 'Datos',
					autoHeight:true,
					labelAlign: 'top',
					labelWidth: 100,
					//collapsed: true,
					collapsible: true,
					layout: 'column',
					defaults: {anchor: '130%'},
					width:400,
						
		items: [{
					columnWidth: .5,
					layout: 'form',
					width:180,
					items: [{
						xtype: 'textfield',
						id:'nu_solped',
						fieldLabel: 'N&uacute;mero de Solped',
						//disabled:true,
						anchor: '80%'
					}]
			},{
					columnWidth: .5,
					layout: 'form',
					width:180,
					items: [{
						xtype: 'textfield',
						id:'nu_expediente',
						fieldLabel: 'N&uacute;mero de Expediente',
						//disabled:true,
						anchor: '80%'
					}]
			},{
					columnWidth: .5,
					layout: 'form',
					width:180,
					items: [{
						xtype: 'textfield',
						id:'nu_control_cf',
						//CF CLASIFICACION FINANCIERA
						fieldLabel: 'N&uacute;mero de Control C.F',
						//disabled:true,
						anchor: '80%'
					}]
			},{
					columnWidth: .5,
					layout: 'form',
					width:180,
					items: [GetCombo('co_prioridad_contra','co_prioridad','Prioridad de la Contrataci&oacute;n', true)]
					},{
					columnWidth: .5,
					layout: 'form',
					width:180,
					items: [GetCombo('co_tipo_presupuesto_contra', 'co_tipo_presupuesto','Tipo de Presupuesto', true)]
					
					},{
					columnWidth: .5,
					layout: 'form',
					width:280,
					items: [GetCombo('co_orientacion_contra','co_orientacion','Orientaci&oacute;n del Negocio')]
					},{
					columnWidth: 1,
					layout: 'form',
					width:390,
					items: [{
						xtype: 'textarea',
						id:'tx_alcance',
						fieldLabel: 'Alcance',
						style: 'text-transform:uppercase; font:normal 12px tahoma,arial,helvetica,sans-serif; !important;',
						vtype: 'validosEsp',
						anchor: '90%'
						
						}]
					},{
					columnWidth: 1,
					layout: 'form',
					width:390,
					items: [{
						xtype: 'textarea',
						id:'tx_antecedente',
						fieldLabel: 'Antecedentes',
						style: 'text-transform:uppercase; font:normal 12px tahoma,arial,helvetica,sans-serif; !important;',
						vtype: 'validosEsp',
						anchor: '90%'
						
						}]
					}
			]},{
					xtype:'fieldset',
					title: 'Comisi&oacute;n',
					autoHeight:true,
					labelAlign: 'top',
					labelWidth: 100,
					//collapsed: true,
					collapsible: true,
					layout: 'column',
					defaults: {anchor: '130%'},
					width:400,
							
							
							
							items: [{
					 columnWidth: .5,
			  layout: 'form',
			  width:180,
					
					items: [GetCombo('co_comision_contra','co_comision','Comisi&oacute;n')],
					
				},/*{
					 columnWidth: .5,
			  layout: 'form',
			  width:180,
					items: [{
						xtype: 'textfield',
						id:'nu_comison',
						fieldLabel: 'N&uacute;mero Contrato Comisi&oacute;n',
						//disabled:true,
						anchor: '80%'
					}]
			},*/{ columnWidth: .5,
			  layout: 'form',
			  width:180,
					items: [{
											xtype: 'datefield',
											id:'fe_recomendacion',
											fieldLabel: 'Fecha de Recomendaci&oacute;n de Inicio',
											name: 'fe_recomendacion',
											anchor: '80%',
											disabled:true
										
								   }]
								   }]//Items 1er fieldset
            },/*{
					xtype:'fieldset',
					title: 'Compromiso de Responsabilidad Social',
					autoHeight:true,
					labelAlign: 'top',
					labelWidth: 100,
					//collapsed: true,
					collapsible: true,
					layout: 'column',
					defaults: {anchor: '130%'},
					width:400,
							
					items: [{
					columnWidth: .5,
					layout: 'form',
					width:130,
					items: [{
											xtype: 'spinnerfield',
											id:'nu_aporte_compromiso',
											name:'nu_aporte_compromiso',
											fieldLabel: 'Aporte al Fondo',
											anchor: '80%',
											minValue: 0,
											//allowDecimals: true,
											//decimalPrecision: 1,
											incrementValue: 0.5,
											maxValue: 10,
											//alternateIncrementValue: 1.1,
            	//acelerar: true,
											//disabled:true
										
								   }]
								   },{
					columnWidth: 1,
					layout: 'form',
					width:360,
					items: [{
											xtype: 'textfield',
											id:'tx_upc',
											fieldLabel: 'Upc',
											name: 'tx_upc',
											anchor: '100%'
											//disabled:true
										
								   }]
								   }
					]//Items 2do fieldset
            },	*/
									
			]
			}],
			 
buttonAlign:'center', 
			buttons: [{
				text: 'Guardar',
				id:'boton_guardar_datos_procesos',
				listeners: {
			'click': function () { 
									store_contratacion.reload({params:{ResultadosCon: datosContratacion(),
                                										accion: 'modificar',
																		co_proceso:co_proceso,				 
																		//"filter[0][data][comparison]":'eq',"filter[0][data][type]":'numeric',"filter[0][data][value]":co_proceso,"filter[0][field]":'co_proceso'
																		//condicion: '',
																		tabcon: global_tab				 
																		}
															   });
									Wincontratacion.hide();
								  }
			}
			}, {
				text: 'Cerrar',
				id:'boton_cerrar_datos_procesos',
				listeners: {
							'click': function () {
													Wincontratacion.hide();
												   }
						   }
			   }]	


});
//**********************************************FIN FORMULARIO PANEL 2*******************************************************

//********************************************FORMULARIO PANEL 3 EMPRESA*****************************************************
var store_empresa = new Ext.data.JsonStore({
	id:'store_empresa',
	url: 'php/EmpresaInterfaz.php',
	writer: writer,
	batch:false,
	totalProperty: 'total',
	root: 'ResultadosEmp',
	idProperty: 'co_empresa',
	
	fields: [
		{name: 'co_empresa'},
		{name: 'nu_rif'},
		{name: 'tx_empresa'},
		{name: 'tx_representante'},
		{name: 'nu_acreedor'},
		{name: 'nu_van'},
		{name: 'nu_telefonico'},
		{name: 'nu_telefonico_opcional'},
		{name: 'tx_observacion_empresa'},
		{name: 'co_tipo_empresa_contra'},
		{name: 'tx_tipo_empresa'},
		{name: 'co_status_empresa_contra'},
		{name: 'tx_status_empresa'},
		{name: 'tx_ubi_empresa'},
		{name: 'id_empresa_proceso'}
		
			],
	 baseParams: { 
				   start:0,limit:1000,sort:'',dir:'',
				   //filter:'',
				   accion:'refrescar'
		           //tx_indicador:Usuario.usuario
				 }
});
//store_empresa.load();

var grid_empresa = new Ext.grid.GridPanel ({
	id:'grid_empresa', //identificacion del var grid_planificacion = new Ext.grid.GridPanel
		name:'grid_empresa',
		store: store_empresa,
        frame: true,
        height: 380,
        stripeRows: true,
		columns:[
				new Ext.grid.RowNumberer(),
	{
		header: 'RIF',
		dataIndex: 'nu_rif',
		sortable: true,
		width: 90		
	},{
		
		header: 'Empresa',
		dataIndex: 'tx_empresa',
		sortable: true,
		width: 120
	},{
		header: 'Status',
		dataIndex: 'tx_status_empresa',
		sortable: true,
		width: 120
	},{
		header: 'Observaci&oacute;n',
		dataIndex: 'tx_observacion_empresa',
		sortable: true,
		width: 220
	}],
	//CARGAR DATOS EN EL FORMULARIO (dobleclick)
				listeners: {
								'rowdblclick': function (grid, rowIndex, e) {
										fila=grid.getSelectionModel();
										rec=fila.getSelected();
										//panel_tab_empresa().reset();
										panel_tab_empresa.getForm().loadRecord(rec);
										co_empresa=rec.data.co_empresa;
										id_empresa_proceso=rec.data.id_empresa_proceso;
								//console.log(id_empresa_proceso);
Ext.getCmp("co_tipo_empresa_contra").setValue(rec.data.co_tipo_empresa);
Ext.getCmp("co_status_empresa_contra").setValue(rec.data.co_status_empresa);
				Wincontratacion.show();
										
		//cargar el nombre de cada valor
	
		
				Ext.getCmp("co_tipo_empresa_contra").setRawValue(rec.data.tx_tipo_empresa);					
				Ext.getCmp("co_status_empresa_contra").setRawValue(rec.data.tx_status_empresa);
										//console.log(co_empresa);
			accion='modificar';

																												
								}		
							}	
});

var panel_tab_empresa = new Ext.FormPanel({
	id:'panel_tab_empresa',
	name:'panel_tab_empresa',	
	layout: 'form',
	labelAlign: 'top',
	bodyStyle: 'padding:5px 5px 0',
	width: 430,
	height: 475,
	items:[{
					xtype: 'container',
					width: 150,
					height: 45,
					labelAlign: 'top',
					layout: {
							type: 'absolute'
							},
                    
			items: [  {
                    xtype: 'label',
                    text: 'N\xB0 de RIF',
                    y: 10,
                },{
				
					xtype: 'textfield',
					id:'nu_rif',
					name: 'nu_rif',
					y: 5,
					x:70,
					vtype: 'alphanum'
					
			},{      
					xtype: 'button',
					text: ' Nueva ',
					id:'boton_nueva_rif',
					x: 325,
                    y: 5,
			    	handler: function(){
						panel_tab_empresa.getForm().reset();
						accion: 'insertar'
						Ext.getCmp('fieldsetEmpresas').expand();						
					}
			},{      
					xtype: 'button',
					text: 'Guardar',
					id:'boton_guardar_empresa',
					x: 375,
                    y: 5,
					listeners: {
					'click': function () { 
                                             if (rec.data.co_empresa==null){
								store_empresa.load({params:

								{ResultadosEmp: datosEmpresa(),
								accion: 'insertar',
								co_proceso:co_proceso,
								//id_empresa_proceso: rec.data.id_empresa_proceso,
								// co_empresa: rec.data.co_empresa

															 
								} 
								
							});//store
		}	else if (accion=='modificar'){
					
					store_empresa.load({params:

								{ResultadosEmp: datosEmpresa(),
								accion: 'modificar',
								co_proceso:co_proceso,
								id_empresa_proceso: rec.data.id_empresa_proceso,
								co_empresa: rec.data.co_empresa

															 
								} 
								
							});
							Ext.getCmp('fieldsetEmpresas').collapse();	
					
						  }  
	}
	
					  }//listener
			}],
			},{ 
					xtype:'fieldset',
					title: 'Empresas Participantes',
					id:'fieldsetEmpresas',
					autoHeight:true,
					labelAlign: 'top',
					labelWidth: 190,
					collapsed: true,
					collapsible: true,
					//width: 420,
					height: 345,
					layout: 'column',
					deferredRender : false,
						
		items: [{
				   columnWidth: 1.2,
				   layout: 'form',
		  items: [{
					xtype: 'textfield',
					id:'tx_empresa',
					fieldLabel: 'Nombre de la Empresa',
					style: 'text-transform:uppercase; font:normal 12px tahoma,arial,helvetica,sans-serif; !important;',
					anchor: '80%'
					}]
			},{
				   columnWidth: 1.2,
				   layout: 'form',
					
							 items: [{
										xtype: 'textfield',
										id:'tx_representante',
										fieldLabel: 'Representante Legal',
										style: 'text-transform:uppercase; font:normal 12px tahoma,arial,helvetica,sans-serif; !important;',
										vtype: 'validosEsp',
										anchor: '80%'	
									}]
			},{
				   columnWidth: 1.2,
				   layout: 'form',
					
							 items: [{
										xtype: 'textfield',
										id:'tx_ubi_empresa',
										fieldLabel: 'Ubicaci&oacute;n de la Empresa',
										style: 'text-transform:uppercase; font:normal 12px tahoma,arial,helvetica,sans-serif; !important;',
										vtype: 'validosEsp',
										anchor: '80%'	
									}]
			},{
										columnWidth: .5,
										layout: 'form',
								
							 items: [{
										xtype: 'textfield',
										id:'nu_acreedor',
										fieldLabel: 'N&uacute;mero Acreedor',
										anchor: '90%'
										}]
			},{
								   columnWidth: .5,
								   layout: 'form',
								
							 items: [{
										xtype: 'textfield',
										id:'nu_van',
										fieldLabel: 'Porcentaje VAN',
										anchor: '90%'	
										}]
			},{
								   columnWidth: .5,
								   layout: 'form',
								
							 items: [{
										xtype: 'textfield',
										id:'nu_telefonico',
										fieldLabel: 'N&uacute;mero Telef&oacute;nico',
										anchor: '90%'		
										}]
			},{
								   columnWidth: .5,
								   layout: 'form',
								
							 items: [{
										xtype: 'textfield',
										id:'nu_telefonico_opcional',
										fieldLabel: 'N&uacute;mero Telef&oacute;nico Opcional',
										anchor: '90%'		
										}]
									},{
								   columnWidth: .5,
								   layout: 'form',
								
							items: [GetCombo('co_tipo_empresa_contra','co_tipo_empresa','Tipo de Empresa')]
									},{
								   columnWidth: .5,
								   layout: 'form',
								
							items: [GetCombo('co_status_empresa_contra','co_status_empresa','Status de la Empresa')]
									},{
								   columnWidth: 1.2,
								   layout: 'form',
								
							 items: [{
										xtype: 'textarea',
										id:'tx_observacion_empresa',
										fieldLabel: 'Observaci&oacute;n',
										vtype: 'validosEsp',
										anchor: '80%'
										}]
									}]	
									},{
								columnWidth:1.12,
								  
								items:[grid_empresa]
					        }	
							   
	]							
});
//********************************************FIN FORMULARIO PANEL 3 EMPRESA*************************************************

//************************************************FORMULARIO PANEL 4*********************************************************
var reader = new Ext.data.JsonReader({
     //totalreader: 'total',
    //successProperty: 'success',
    idProperty: 'co_proceso',
    root: 'results',
	}, [
			{name: 'co_proceso'}, {name: 'nu_incremento'}, {name: 'co_unidades'}, {name: 'tx_unidades'},
			{name: 'fe_entrega',type: 'date',dateFormat: 'Y-m-d'}, {name: 'fe_recibido',type: 'date',dateFormat: 'Y-m-d'}, {name: 'tx_detalle'}
			]);
//**********************************************FIN FORMULARIO PANEL 4********************************************************			

//**********************************************FORMULARIO UNIDADES***********************************************************
var store_unidades = new Ext.data.JsonStore({
	id:'store_unidades',
	url:'php/UnidadesInterfaz.php',
	totalProperty: 'total',
	root: 'Resultados',
	idProperty: 'id_unidades',
	baseParams:{accion:'refrescar'},
	fields: [
			{name:'id_unidades'},{name: 'co_proceso'}, {name: 'nu_incremento'}, {name: 'co_unidades'}, {name: 'tx_unidades'},
			{name: 'fe_entrega',type: 'date',dateFormat: 'Y-m-d'}, {name: 'fe_recibido',type: 'date',dateFormat: 'Y-m-d'}, {name: 'tx_detalle'}
			],
	 baseParams: { 
				   start:0,limit:1000,sort:'',dir:'',
				   //filter:'',
				   accion:'refrescar'
		           //tx_indicador:Usuario.usuario
				 },
	 listeners: {
        update : function(store, record,operation) {   // function actualizar ///////////////////////////////////////  update
			//alert(operation);
			if(operation=='edit'){
				
			//store_agenda.commitChanges(); 
			}
        },
		remove : function(store, record,index) {
			store.reload({params:{id_unidades:record.get('id_unidades') }});
        }
    }
				 

});
//store_unidades.load();

/*var comboUnidades = GetComboGrid('unidades','co_unidades','');*/

var comboUnidades = new Ext.form.ComboBox({
        store: new Ext.data.JsonStore({
		url: 'php/CombosDinamicos.php',
		root: 'Resultados',
		idProperty: 'co_unidades',
		baseParams: {accion:"unidades"},
		fields:['co_unidades','tx_unidades']
		}),
	    name: 'co_unidades',
		id: 'co_unidades',
		emptyText: 'Seleccione...',
		//hiddenName: nombre+"hide",
		//forceSelection: true,
		//value:co_nombre,
		valueField:'tx_unidades',
		//fieldLabel:etiqueta,
		displayField:'tx_unidades',
		
		anchor: '80%',
		listWidth:220,
	
		mode: 'remote',
		triggerAction:'all',
        
	listeners:{//Cambiamos el valor de co_comision en store_agenda                             
			select: function(combo,record,index){
				fila = grid_unidades.getSelectionModel();
				celda = fila.getSelectedCell();
				grid_unidades.store.getAt(celda[0]).set('co_unidades',record.data.co_unidades);
			}
		}

        //applyTo: 'local-states'
    });

var grid_unidades = new Ext.grid.EditorGridPanel ({
		id:'grid_unidades', //identificacion del var grid_planificacion = new Ext.grid.GridPanel
		name:'grid_unidades',
		store: store_unidades,
      
       // anchor:'100%',
        
	height: 440,
        region:'center',
        frame:true,
        
columns:[new Ext.grid.RowNumberer(),
	{
		header: 'Unidades de Apoyo',
		dataIndex: 'tx_unidades',
		width: 190,
		editor: comboUnidades
	},{
		
		header: 'Fecha de Entrega',
		dataIndex: 'fe_entrega',
		xtype: 'datecolumn',
		format: 'd/m/Y',
		width: 110,
		 editor: {
					xtype: 'datefield',
                    format: 'd/m/Y',
                    //minValue: '01-01-06',
                    //disabledDays: [0, 6],
                   // disabledDaysText: 'Plants are not available on the weekends'
                }
	},{
		header: 'Fecha de Recibido',
		dataIndex: 'fe_recibido',
		xtype: 'datecolumn',
		format: 'd/m/Y',
		width: 110,
                editor: {
					xtype: 'datefield',
                    format: 'd/m/Y',
                    //minValue: '01-01-06',
                    //disabledDays: [0, 6],
                   // disabledDaysText: 'Plants are not available on the weekends'
                }
	},{
		header: 'Detalle',
		dataIndex: 'tx_detalle',
		sortable: true,
		width: 210,
		editor: new Ext.form.TextField({
                    allowBlank: false
                })
	}],
	tbar: [{
            iconCls: 'control-add',
            text: 'Nuevo',
            id:'boton_nuevo_unidades',
            handler: function(){
				
				for(i in Ext.getCmp('grouptabpanel').events)
		        //	alert(i);
				//store_agenda.setBaseParam('accion','insertar');
                var record = new grid_unidades.store.recordType();
				//editor_grid_agenda.stopEditing();       // permite ser mas rapida la busqueda de la funcionalidad del recordType
				grid_unidades.store.insert(0, record);   // permite posicionarse en la fila correspondiente
				grid_unidades.getView().getRowClass=function (record,index,rowParams,store){
					if(index==0)
						return 'red-row';
					else
						return '';
				}
				
				/*var unidades = grid_unidades.getStore().recordType;
								var U = new unidades({
													tx_unidad:'',
													fe_entrega:'',
													fe_recibido: '',
													tx_detalle:''
													});
								grid_unidades.stopEditing();
								store_unidades.insert(0, U);
								grid_unidades.startEditing(0, 0);
				
				*/
				
            /*var unidades = new grid_unidades.store.recordType;
           	grid_unidades.store.insert(0, unidades);   // permite posicionarse en la fila correspondiente
			grid_unidades.getView().getRowClass=function (unidades,index,rowParams,store){
			if(index==0)
						return 'red-row';
					else
						return '';
						
						          }*/
						          }
						          },{
			iconCls: 'control-save',
			text: 'Guardar',
			id:'boton_guardar_unidades',
			  handler: function(){
				
				Ext.MessageBox.confirm("[CONTRATOS]","Guardar ?", function(btn){
					if(btn == 'yes'){
						//~ fila = grid_unidades.getSelectionModel(); // seleciona la fila del grid_agenda
						//~ celda = fila.getSelectedCell(); 
						records_modificados=store_unidades.getModifiedRecords();
						Ext.each(records_modificados,function(fila,i){
							if(fila.data.fe_entrega==undefined /*|| fila.data.tx_detalle==undefined*/){
								WinError("Debe completar toda la informaci&oacute;n");
							}
							else{
								if(fila.data.id_unidades==null)
									accion='insertar';
								else
									accion='modificar';
								store_unidades.reload({
									params:{
										accion:accion,
										co_proceso:co_proceso,
										co_unidades:comboUnidades.getValue(),
										"filter[0][data][comparison]":'eq',"filter[0][data][type]":'numeric',"filter[0][data][value]":co_proceso,"filter[0][field]":'co_proceso',
										//filter:'', 
										condicion: fila.data.id_unidades,
										Resultados:Ext.util.JSON.encode(fila.getChanges())
									}
								});			
								fila.commit();				
								grid_unidades.getView().getRowClass=function (record,index,rowParams,store){
								return '';
							}
						  }
						});
					}
				});
				
			}
						
		  },{iconCls: 'control-delete',
            text: 'Eliminar', 
            id:'boton_eliminar_unidades',                        // boton Eliminar Agenda
            //disabled: true,
            handler: function(){
				Ext.MessageBox.confirm("[CONTRATOS]","Desea Eliminar la Unidad ?", function(btn){
					if(btn == 'yes'){
               // editor.stopEditing();                    // no deja ningún tipo de edición activos
                fila = grid_unidades.getSelectionModel(); // seleciona la fila del grid_agenda
                celda = fila.getSelectedCell();        // seleciona la celda del grid_agenda
                grid_unidades.store.reload({            // manda a recargar el store_agenda 
					params:{
						//tx_indicador:Ext.getCmp('tx_usuario').getValue(),
						id_unidades:grid_unidades.store.getAt(celda[0]).get('id_unidades'),//  elimina y se ubica en la celda 0
						co_proceso:co_proceso,
						accion:'eliminar',
						"filter[0][data][comparison]":'eq',"filter[0][data][type]":'numeric',"filter[0][data][value]":co_proceso,"filter[0][field]":'co_proceso'
					}
				});
				   grid_unidades.store.removeAll(); // va buscando paso a paso para eliminar los registros de Proceso Agenda y Agenda,buscar en el archivo Agenda clase
				 }
			});
            }
        }
        ]
         /*,
		  
		  listeners: {
     rowclick:function(grid_unidades, rowIndex, e) {
		//alert(grid_agenda.store.getAt(rowIndex).get('co_agenda'));
		accion='refrescar';
		co_proceso=grid_unidades.store.getAt(rowIndex).get('co_proceso');
		Ext.getCmp('grid_unidades').store.load({
			params:{
				accion:accion,
				"filter[0][data][comparison]":'eq',"filter[0][data][type]":'numeric',"filter[0][data][value]":co_proceso,"filter[0][field]":'co_proceso',
				//filter:'',
								//Resultados:Ext.util.JSON.encode(fila.getChanges())
			}
		});
						//store_proceso_agenda.load();
						//store_proceso_agenda.commitChanges();
       //alert(Ext.getCmp('grid_proceso_agenda').getColumnModel().getColumnHeader(3));
      //alert(rowIndex);
    }
  }	*/
	});


var panel_unidades = new Ext.FormPanel({
	id:'panel_unidades',
	name:'panel_unidades',	
	layout: 'form',
	labelAlign: 'top',
	width: 430,
	height: 475,
	items:[{
			columnWidth:1.12,
			items:[grid_unidades]
	  }],

});
//**********************************************FIN FORMULARIO UNIDADES*******************************************************

//*************************************************FORMULARIO PANEL 5*********************************************************

var store_cronograma = new Ext.data.JsonStore({
	url: 'php/CronogramaInterfaz.php',
	totalProperty: 'total',
	root: 'Resultados',
	idProperty: 'co_modalidad_actividad',
	baseParams:{accion:'refrescar'},
	fields: [
		{name: 'co_proceso',type: 'int'},
		{name: 'co_modalidad_actividad',type: 'int'},
		{name: 'tx_actividad',type: 'text'},
		{name: 'fe_programada',type: 'date',dateFormat: 'Y-m-d'},
		{name: 'fe_planificada',type: 'date',dateFormat: 'Y-m-d'},
		{name: 'fe_real',type: 'date',dateFormat: 'Y-m-d'}
	]
});

var grid_cronograma = new Ext.grid.EditorGridPanel({
	id:'grid_cronograma', 
	name:'grid_cronograma',
	store:store_cronograma,
    height: 435,
        region:'center',
        frame:true,
	columns:[{
		header: 'Nombre de la Actividad',
		dataIndex: 'tx_actividad',
		width: 200
	},{
		header: 'Fecha Original',
		dataIndex: 'fe_programada',
		xtype: 'datecolumn',
		format: 'd/m/Y',
		width: 110
	},{
		header: 'Fecha Planificada',
		dataIndex:'fe_planificada',
		xtype: 'datecolumn',
		format: 'd/m/Y',
		width: 110,
		editor: new Ext.form.DateField({})
	},{
		header: 'Fecha Real',
		dataIndex: 'fe_real',
		width: 110,
		xtype: 'datecolumn',
		format: 'd/m/Y',
		editor: new Ext.form.DateField({})
	}]
});

var panel_cronograma = new Ext.FormPanel({
	id:'panel_cronograma',
	name:'panel_cronograma',	
	layout: 'form',
	labelAlign: 'top',
	width: 430,
	height: 475,
	items:[grid_cronograma],
	buttons: [{
		text: 'Guardar',
		id:'boton_guardar_panel_cronograma',
		//disabled:true,
		listeners: {
			'click': function () {
				var jsondata=Ext.encode(Ext.pluck(store_cronograma.data.items,'data'));
				Ext.Ajax.request({
					url: 'php/CronogramaInterfaz.php',
					params: {
						accion:'guardar',
						datos:jsondata,
						condicion:co_proceso 
					}
				});
				Wincontratacion.hide();
			}
		}
	},{
		text: 'Cerrar',
		id:'boton_cerrar_panel_cronograma',
		listeners: {
			'click': function () {
				Wincontratacion.hide();
			}
		}
	}]
	
});
//*********************************************FIN FORMULARIO PANEL 5*********************************************************

//**********************************************FORMULARIO PANEL 6*************************************************************
var store_actividades = new Ext.data.JsonStore({
	id:'store_actividades',
	//url: 'php/EmpresaInterfaz.php',
	writer: writer,
	batch:false,
	totalProperty: 'total',
	root: 'Resultados',
	idProperty: 'co_act',
	
	fields: [
		{name: 'co_act'},
		{name: 'nu_duracion'},
		{name: 'tx_des_act'},
		{name: 'fe_plani'},
		{name: 'fe_real_act'},
		{name: 'tx_accion_seguir'},
		{name: 'tx_detalle_status'}
			]
});

var grid_actividades = new Ext.grid.EditorGridPanel({
	id:'grid_actividades', 
	name:'grid_actividades',
	store:store_actividades,
    height: 435,
        region:'center',
        frame:true,
	
	
	columns:[{
		header: 'Nombre de la Actividad',
		dataIndex: 'tx_des_act',
		width: 200
	},{
		header: 'Acci&oacute;n a Seguir',
		dataIndex: 'tx_accion_seguir',
		width: 200
	},{
		header: 'Detalle Status',
		dataIndex: 'tx_detalle_status',
		width: 200
	},{
		header: 'Duracion',
		dataIndex: 'nu_duracion',
		xtype: 'datecolumn',
		format: 'd/m/Y',
		width: 110
	},/*{
		header: 'Fecha Planificada',
		dataIndex:'fe_plani',
		xtype: 'datecolumn',
		format: 'd/m/Y',
		width: 110,
		editor: new Ext.form.DateField({})
	},*/{
		header: 'Fecha de Ejecuci&oacute;n',
		dataIndex: 'fe_real_act',
		width: 110,
		xtype: 'datecolumn',
		format: 'd/m/Y',
		editor: new Ext.form.DateField({})
	}]
});

var panel_actividades = new Ext.FormPanel({
	id:'panel_actividades',
	name:'panel_actividades',	
	layout: 'form',
	
	labelAlign: 'top',
	width: 430,
	height: 475,
	items:[grid_actividades,
	{
					
											xtype: 'textfield',
											id:'tx_tiempoa',
											fieldLabel: 'Tiempo total del Proceso',
											anchor: '40%'
						
						}],
});
//**********************************************FIN FORMULARIO 6***************************************************************

//***********************************************PANEL RESULTADOS**************************************************************
var comboEmpresa_adjudicataria = new Ext.form.ComboBox({
        store: new Ext.data.JsonStore({
		url: 'php/CombosDinamicos.php',
		root: 'Resultados',
		idProperty: 'empresa_adjudicataria',
		baseParams: {accion:"empresa_adjudicataria"},
		fields:['co_empresa', 'tx_empresa']
		}),
	    name: 'co_empresa_adjudicataria',
		id: 'co_empresa_adjudicataria',
		emptyText: 'Seleccione...',
		//hiddenName: nombre+"hide",
		//forceSelection: true,
		//value:co_nombre,
		valueField:'tx_empresa',
		//fieldLabel:etiqueta,
		displayField:'tx_empresa',
		
		anchor: '80%',
		listWidth:220,
	
		mode: 'local',
		triggerAction:'all',
        
	listeners:{//Cambiamos el valor de co_cierre_procedimiento en store_resultados                             
			select: function(combo,record,index){
				fila = grid_resultados.getSelectionModel();
				celda = fila.getSelectedCell();
				grid_resultados.store.getAt(celda[0]).set('co_empresa',record.data.co_empresa);
			}
		}

        //applyTo: 'local-states'
    });
//******************************************COMBO RESULTADOS******************************************************
var comboResultados = new Ext.form.ComboBox({
        store: new Ext.data.JsonStore({
		url: 'php/CombosDinamicos.php',
		root: 'Resultados',
		idProperty: 'co_cierre_procedimiento',
		baseParams: {accion:"cierre_procedimiento"},
		fields:['co_cierre_procedimiento','tx_cierre_procedimiento']
		}),
	    name: 'co_cierre_procedimiento',
		id: 'co_cierre_procedimiento',
		emptyText: 'Seleccione...',
		//hiddenName: nombre+"hide",
		//forceSelection: true,
		//value:co_nombre,
		valueField:'tx_cierre_procedimiento',
		//fieldLabel:etiqueta,
		displayField:'tx_cierre_procedimiento',
		
		anchor: '80%',
		listWidth:220,
	
		mode: 'remote',
		triggerAction:'all',
        
	listeners:{//Cambiamos el valor de co_cierre_procedimiento en store_resultados                             
			select: function(combo,record,index){
				fila = grid_resultados.getSelectionModel();
				celda = fila.getSelectedCell();
				grid_resultados.store.getAt(celda[0]).set('co_cierre_procedimiento',record.data.co_cierre_procedimiento);
			}
		}

        //applyTo: 'local-states'
    });
//***********************************************STORE RESULTADOS*****************************************************
var store_resultados = new Ext.data.JsonStore({
	id:'store_resultados',
	url: 'php/ResultadosInterfaz.php',
	//writer: writer,
	//batch:false,
	totalProperty: 'total',
	root: 'Resultados',
	idProperty: 'co_contrato',
	baseParams:{accion:'refrescar'},
	fields: [
		{name: 'co_contrato'},
		{name: 'nu_contrato_sap'},
		{name: 'nu_contrato_comision'},
		{name: 'co_empresa'},
		{name: 'fe_carta_preliminar',type: 'date',dateFormat: 'Y-m-d'},
		{name: 'fe_firma_contrato',type: 'date',dateFormat: 'Y-m-d'},
		{name: 'tx_cierre_procedimiento'},
		{name: 'nu_monto_total_adjudicado'},
		{name: 'nu_monto_total_adjudicado_bsf'},
		{name: 'nu_monto_total_adjudicado_dol'},
		{name: 'nu_monto_total_adjudicado_euro'},
		{name: 'nu_aporte_compromiso'},
		{name: 'nu_upc'}
		//{name: ''}
		// faltaN MONTOS
			],
	listeners: {
        update : function(store,record,operation) {   // function actualizar ///////////////////////////////////////  update
			//alert(operation);
			if(operation=='edit'){
				
			//store_agenda.commitChanges(); 
			}
        },
		remove : function(store, record,index) {
			store.reload({params:{co_contrato:record.get('co_contrato') }});
        }
    }
});
//*****************************************************GRID RESULTADOS*********************************************************
var grid_resultados = new Ext.grid.EditorGridPanel({
	id:'grid_resultados', 
	name:'grid_resultados',
	store:store_resultados,
    height: 435,
    region:'center',
    frame:true,
	
	
	columns:[{
		header: 'N\xB0 Comisi&oacute;n',
		dataIndex: 'nu_contrato_comision',
		width: 100,
		sortable: true,
		editor: new Ext.form.TextField({
                    //allowBlank: false
                })
	},{
		header: 'Empresa',
		dataIndex: 'tx_empresa',
		width: 100,
		editor: comboEmpresa_adjudicataria
	},{
		header: 'Carta de inicio Preliminar',
		dataIndex: 'fe_carta_preliminar',
		xtype: 'datecolumn',
		format: 'd/m/Y',
		width: 110,
		editor: new Ext.form.DateField({})
	},{
		header: 'Fecha de Firma del Contrato',
		dataIndex: 'fe_firma_contrato',
		width: 110,
		xtype: 'datecolumn',
		format: 'd/m/Y',
		editor: new Ext.form.DateField({})
	},{
		header: 'Cierre de Procedimiento',
		dataIndex: 'tx_cierre_procedimiento',
		width: 150,
		editor: comboResultados
	},{
		header: 'N\xB0 Sap',
		dataIndex: 'nu_contrato_sap',
		width: 100,
		sortable: true,
		editor: new Ext.form.TextField({
                    //allowBlank: false
                })
	},{
		header: 'Monto Adjudicado (Total Bs)',
		dataIndex: 'nu_monto_total_adjudicado',
		width: 150,
		sortable: true,
		editor: new Ext.form.TextField({
                    allowBlank: false
                })
	},{
		header: 'Monto Adjudicado (Bs)',
		dataIndex: 'nu_monto_total_adjudicado_bsf',
		width: 150,
		sortable: true,
		editor: new Ext.form.TextField({
                    allowBlank: false
                })
	},{
		header: 'Monto Adjudicado ($)',
		dataIndex: 'nu_monto_total_adjudicado_dol',
		width: 150,
		sortable: true,
		editor: new Ext.form.TextField({
                    allowBlank: false
                })
	},{
		header: 'Monto Adjudicado (&euro;)',
		dataIndex: 'nu_monto_total_adjudicado_euro',
		width: 150,
		sortable: true,
		editor: new Ext.form.TextField({
                    allowBlank: false
                })
	},{ 
		header: 'Aporte al Fondo (%)',
		dataIndex: 'nu_aporte_compromiso',
		width: 150,
		sortable: true,
		editor: new Ext.form.TextField({
                    allowBlank: false
                })
	},{
		header: 'UPC(%)',
		dataIndex: 'nu_upc',
		width: 150,
		sortable: true,
		editor: new Ext.form.TextField({
                    allowBlank: false
                })
	}
	
	],
	/*listeners: {
		'rowclick': function (grid, rowIndex, e) {
										fila=grid.getSelectionModel();
										rec=fila.getSelected();
										co_proceso=rec.data.co_proceso;
							}
						},*/
//***********************************TOOLBARS***************************************************************************
	tbar: [{
            iconCls: 'contrato-add',
            text: 'Nuevo',
            id:'boton_nuevo_resultado_rif',
            handler: function(){
				
				for(i in Ext.getCmp('grouptabpanel').events)
		        //	alert(i);
				//store_agenda.setBaseParam('accion','insertar');
                var record = new grid_resultados.store.recordType();
				//editor_grid_agenda.stopEditing();       // permite ser mas rapida la busqueda de la funcionalidad del recordType
				grid_resultados.store.insert(0, record);   // permite posicionarse en la fila correspondiente
				grid_resultados.getView().getRowClass=function (record,index,rowParams,store){
					if(index==0)
						return 'red-row';
					else
						return '';
				}
			
						          }
			},{
			iconCls: 'contrato-save',
			text: 'Guardar',
			id:'boton_guardar_resultados_rif',
			  handler: function(){
				
				Ext.MessageBox.confirm("[CONTRATOS]","¿Guardar?", function(btn){
					if(btn == 'yes'){
						//~ fila = grid_unidades.getSelectionModel(); // seleciona la fila del grid_agenda
						//~ celda = fila.getSelectedCell(); 
						records_modificados=store_resultados.getModifiedRecords();
						Ext.each(records_modificados,function(fila,i){
							if(fila.data.nu_contrato_sap==undefined /*|| fila.data.tx_detalle==undefined*/){
								WinError("Debe completar toda la informaci&oacute;n");
							}
							else{
								if(fila.data.co_contrato==null)
									accion='insertar';
								else
									accion='modificar';
								store_resultados.reload({
									params:{
										accion:accion,
										co_proceso:co_proceso,
										co_contrato:fila.data.co_contrato,
										co_cierre_procedimiento:comboResultados.getValue(),
										"filter[0][data][comparison]":'eq',"filter[0][data][type]":'numeric',"filter[0][data][value]":co_proceso,"filter[0][field]":'co_proceso',
										//condicion1: co_proceso,
										//condicion2: fila.data.co_contrato,
										Resultados:Ext.util.JSON.encode(fila.getChanges())
									}
								});			
								fila.commit();				
								grid_resultados.getView().getRowClass=function (record,index,rowParams,store){
								return '';
							}
						  }
						});
					}
				});
				
			}
						
		  },{iconCls: 'contrato-delete',
            text: 'Eliminar',
            id:'boton_eliminar_resultados_rif',                         // boton Eliminar Agenda
            //disabled: true,
            handler: function(){
				Ext.MessageBox.confirm("[CONTRATOS]","Desea Eliminar el contrato ?", function(btn){
					if(btn == 'yes'){
               // editor.stopEditing();                    // no deja ningún tipo de edición activos
                fila = grid_resultados.getSelectionModel(); // seleciona la fila del grid_agenda
                celda = fila.getSelectedCell();        // seleciona la celda del grid_agenda
                grid_resultados.store.reload({            // manda a recargar el store_agenda 
					params:{
						//tx_indicador:Ext.getCmp('tx_usuario').getValue(),
						co_contrato:grid_resultados.store.getAt(celda[0]).get('co_contrato'),//  elimina y se ubica en la celda 0
						co_proceso:co_proceso,
						accion:'eliminar',
						"filter[0][data][comparison]":'eq',"filter[0][data][type]":'numeric',"filter[0][data][value]":co_contrato,"filter[0][field]":'co_contrato'
					}
				});
				   grid_resultados.store.removeAll(); // va buscando paso a paso para eliminar los registros de Proceso Agenda y Agenda,buscar en el archivo Agenda clase
				 }
			});
            }
        }
        ]
        
});


var panel_seguimiento = new Ext.FormPanel({
	id:'panel_seguimiento',
	name:'panel_seguimiento',	
		//labelWidth: 130, 
    bodyStyle:'padding:5px 5px 0',
    width: 430,
	height: 475,
	autoScroll: true,
	//layout: 'form',
	
	//labelAlign: 'top',
	items:[grid_resultados ]
});
//

//---------------------------------------------------FORM DE CONTRATACION-------------------------------------------------------
var formPanel_contratacion = new Ext.Panel({
	id:'formPanel_contratacion',
	name:'formPanel_contratacion',
	labelAlign: 'top',
	frame: true,
	bodyStyle: 'padding:5px 5px 0',
	width: 480,
	height: 580,
	layout:'fit',
	
	items: {
		xtype: 'tabpanel',
		id: 'panel_con',
		activeTab: 0,
		enableTabScroll: true,
		deferredRender : false,
		defaults: {
			autoHeight: true,
			bodyStyle: 'padding:10px'
		},
		
		items: [{
			title: 'Datos Generales',
			items: [panel_datos_generales]
		},{
			title: 'Datos del Proceso',
			items: [panel_datos_proceso]
		},{
			title: 'Empresas Participantes',
			items: [panel_tab_empresa]
		},{
			title: 'Control de Documentos',
			items: [panel_unidades]
		},{
			title: 'Cronograma',
			items: [panel_cronograma]
		},{
			title: 'Control de actividades',
			items: [panel_actividades]
		},{
			title: 'Resultados',
			items: [panel_seguimiento]
		}],
		
		listeners:  {
					update : function(store, record,operation) {   
																// function actualizar // update
																//alert(operation);
																store.reload({params:{co_proyecto:record.get('co_proyecto')}});
																if(operation=='edit'){
																						//store_planificacion.commitChanges(); 
																					  }
															     }

	
				  }
	}
});
//--------------------------------------WINDOW DE CONTRATACION---------------------------------------------------------
var Wincontratacion = new Ext.Window({
	id:'Wincontratacion',
	name:'Wincontratacion',
	title: 'Proceso de Contrataci&oacute;n',
	//layout:'column',
	height: 580,
	width: 498,
	modal: true,//BLOQUEA EL PANEL D FONDO
	resizable:false,
	closeAction: 'hide',
	plain: true,
	items: [formPanel_contratacion]
	
});
//store_contratacion.load();
//*********************************************REPORTE XLS***************************************************************************
/*
store = new Ext.data.ArrayStore({
					id: 0,
					fields: ['id','valor'],
					data: 	[[1, 'Planificacion'],
							[2, 'Contratacion'],
							[3, 'Administracion']]
				});
var Unidades = [[1,'Planificacion'],
				[2, 'Contratacion'],
				[3, 'Administracion']];



var dateField1 = new Ext.form.DateField({
	id:'fe_ini',
	name:'fe_ini',
	fieldLabel:'Fecha Inicio',
	emptyText:'Inserte la Fecha',
	width:200
});
var dateField2 = new Ext.form.DateField({
	id:'fe_fin',
	name:'fe_fin',
	fieldLabel:'Fecha Fin',
	emptyText:'Inserte la Fecha',
	width:200
});

var comboLocal1 = new Ext.form.ComboBox({
	
				xtype: 'combo',
				//id: 'tipo_grafica',
				name: 'tx_unidad_reporte',
				fieldLabel: 'Ubicacion del Reporte',
				//hiddenName: 'nb_distrito',
				//valueField: 'id',
				store: new Ext.data.ArrayStore({
					id: 0,
					fields: ['id','valor'],
					data: 	[[1, 'Por Iniciar'],
							[2, 'En Proceso'],
							[3, 'Concluidos']]
				}),
				mode: 'local',
				triggerAction: 'all',
				typeAhead: false,
				displayField: 'valor',
				width: 200,
				tabIndex: 10,
				listWidth:195,
				selectOnFocus: true,
				emptyText: 'Seleccione...',
				forceSelection: true,
				editable: false,
				allowBlank: false,

});
var comboLocal2 = new Ext.form.ComboBox({
	fieldLabel:'Unidad del Reporte',
	forceSelection:false,
	store:Unidades,
	emptyText:'Seleccione',
	tiggerAction:'all',
	editable:false,
});
var win=new Ext.Window({
	title:'Rango del Reporte',
	bodyStyle:'padding:10px',
	modal:true,
	width:350,
	height:250,
	closeAction: 'hide',
	items:[dateField1,dateField2,comboLocal1,comboLocal2],
	layout:'form',
	
	buttonAlign:'center',
	buttons:[
	{
		text: 'Cerrar',
		id:'boton_cerrar_panel_cronograma',
		listeners: {
			'click': function () {
				win.hide();
			}
		}
	},{
				id:'boton_exportar',
				text: 'Exportar',
				//disabled: true,
				handler: function(){
                window.location = 'php/contratacionRangoxls.php';}
	}, 		
	]
});				
*/
//**********************************************FIN REPORTE XLS***************************************************************************
//--------------------------------------------TABS ADMINISTRACION----------------------------------------------------------------------
var contratacionTabs = new Ext.TabPanel
({
    activeTab: 0,
    plain:true,
    height: 0,  //la distancia entre el tab panel y el grid
    // autoWidth: true,

	title: 'Gesti&oacute;n del Proceso de Contrataci&oacute;n',
    items:[
			{
				title: 'Por Iniciar',
				listeners: 	{
					'activate': function (panel) 
					{
						store_contratacion.reload({params:{tabcon:'porcontratar'}});
						global_tab = 'porcontratar';
					}
				}
			},
			{
				title: 'En Proceso',
				listeners: 	{
					'activate': function (panel) 
					{
						store_contratacion.reload({params:{tabcon:'proceso_con'}});
						global_tab = 'proceso_con';
					}
				}
			},
			{
				title: 'Concluidos',
				listeners:{
					'activate': function (panel) 
					{
						store_contratacion.reload({params:{tabcon:'adjudicados'}});
						global_tab = 'adjudicados';
					}
				}
			},
			
			]
		});
var contra = new Ext.Panel ({
	//layout: 'fit',
	autoWidth: true,
	anchor:'100%',
	
	//height: 50,
	margins: '0 5 0 0',
	autoScroll:true, //coloca la barra al final y se ajusta al tamaño al minimizar
	items: [contratacionTabs,grid_contratacion]});

//----------------------------------------------------------------------------------------------

Ext.getCmp('usuario_supervisor').on('select', function(combo,record,index){
		Ext.getCmp('usuario_analista').clearValue();
		Ext.getCmp('usuario_analista').store.reload({params:{accion:'usuarios',supervisor:record.data.co_usuario}});
		Ext.getCmp('usuario_analista').enable();
});
Ext.getCmp('co_empresa_adjudicataria').store.load();
