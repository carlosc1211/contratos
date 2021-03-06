Ext.Ajax.timeout = 120000; 
var fecha = new Date();
var co_ubicacion=0;
var co_proyecto=0, i;
var accion;
var listaFiltros = [];
var co_solicitud=0;
var fe_especificaciones= null;
var fe_inicio_estimada_p = '';
var formatoMayusculas = Ext.util.Format.uppercase;
//--------------------------------------------FUNCION FECHA----------------------------------------------------------------------
function fn_fe_especificaciones(val){
	//console.log(val);
        if((val == '0000-00-00') || (val=="") || (val==null)) {
			//val="";
            return null;
           // alert("hola");
        }else {
           	
           	//var fechaEnt= convFechaDMY(val);
           	//var fechaEnt1= new Date(val);
           	var fh = val.split(" ");
			var fecha = fh[0].split("-");
			
			//var var_dia=fecha[2]+1;
			//var_fecha=fecha[0] + fecha[1] + fecha[2];
			fechahora = fecha[2]+ "-" + fecha[1] + "-" + fecha[0];

           return fechahora;
            
        }

    }
//--------------------------------------------FUNCION FECHA----------------------------------------------------------------------

//--------------------------------------------DATOS PLANIFICACION----------------------------------------------------------------
function datosPlanificacion(){
	var fecha_plani1 = convFecha (Ext.getCmp("fe_inicio_estimada_p").getValue());
	var fecha_plani2 = convFecha (Ext.getCmp("fe_inicio_estimada_a").getValue());
		if (convFecha (Ext.getCmp("fe_especificaciones").getValue())== '')
			var fecha_plani3 = null;
		else
			var fecha_plani3 = 	convFecha (Ext.getCmp("fe_especificaciones").getValue());
	//REVISAMOS CUAL COMBO DE UBICACION TIENE EL ULTIMO VALOR
	if(Ext.getCmp("co_filial").getValue()!='')
		co_ubicacion=Ext.getCmp("co_filial").getValue();
	if(Ext.getCmp("co_direccion").getValue()!='')
		co_ubicacion=Ext.getCmp("co_direccion").getValue();
	if(Ext.getCmp("co_division").getValue()!='')
		co_ubicacion=Ext.getCmp("co_division").getValue();
	if(Ext.getCmp("co_distrito").getValue()!='')
		co_ubicacion=Ext.getCmp("co_distrito").getValue();
	//alert (Ext.getCmp("tx_proyecto_").getValue().replace('""',''));
	datos = '{"nu_anio" : "'+Ext.getCmp("nu_anio").getValue()+'", ';
	datos += '"tx_proyecto" : "'+Ext.getCmp("tx_proyecto_").getValue()+'", ';
	datos += '"co_usuario" : "'+Ext.getCmp("super_plani").getValue()+'", ';
	datos += '"co_ubicacion" : "'+co_ubicacion+'", ';
	//datos += '"co_ubicacion" : "'+Ext.getCmp("co_distrito").getValue()+'", ';
	//datos += '"tx_ubicacion_final" : "'+Ext.getCmp("tx_ubicacion_final").getValue()+'", ';
	//datos += '"co_filial" : "'+Ext.getCmp("co_filial").getValue()+'", ';
	//datos += '"co_direccion" : "'+Ext.getCmp("co_direccion").getValue()+'", ';
	//datos += '"co_division" : "'+Ext.getCmp("co_division").getValue()+'", ';
	//~ datos += '"co_distrito" : "'+Ext.getCmp("co_distrito").getValue()+'", ';
	datos += '"tx_ubicacion_etc" : "'+Ext.getCmp("tx_ubicacion_etc").getValue()+'", ';
	datos += '"co_organizacion" : "'+Ext.getCmp("co_organizacion_plani").getValue()+'", ';
	datos += '"co_naturaleza" : "'+Ext.getCmp("co_naturaleza_plani").getValue()+'", ';
	datos += '"co_regimen_lab" : "'+Ext.getCmp("co_regimen_lab_plani").getValue()+'", ';
	datos += '"co_modalidad" : "'+Ext.getCmp("co_modalidad_plani").getValue()+'", ';
	datos += '"co_mecanismo_verif" : "'+Ext.getCmp("co_mecanismo_verif_plani").getValue()+'", ';
	datos += '"co_rango" : "'+Ext.getCmp("co_rango").getValue()+'", ';
	datos += '"co_prioridad" : "'+Ext.getCmp("co_prioridad_plani").getValue()+'", ';
	datos += '"tx_lugar_ejecucion" : "'+Ext.getCmp("tx_lugar_ejecucion").getValue()+'" , ';
	datos += '"nu_plazo_ejec" : "'+Ext.getCmp("nu_plazo_ejec_").getValue()+'" , ';
	datos += '"co_tipo_act" : "'+Ext.getCmp("co_tipo_act_plani").getValue()+'", ';
	datos += '"nu_renglon" : "'+Ext.getCmp("nu_renglon_").getValue()+'", ';
	datos += '"nu_contratos_asociados" : "'+Ext.getCmp("nu_contratos_asociados").getValue()+'", ';
	datos += '"nu_orden_interna" : "'+Ext.getCmp("nu_orden_interna").getValue()+'", ';
	datos += '"fe_inicio_estimada_p" : "'+fecha_plani1+'", ';
	datos += '"fe_inicio_estimada_a" : "'+fecha_plani2+'", ';
	datos +=  '"fe_especificaciones" : "'+fecha_plani3+'", ';
	datos += '"tx_obser" : "'+Ext.getCmp("tx_obser").getValue()+'", ';
	datos += '"monto_max_rango" : "'+Ext.getCmp("monto_max_rango").getValue()+'", ';
	datos += '"co_tipo_contrato" : "'+Ext.getCmp("co_tipo_contrato_plani").getValue()+'", ';
	datos += '"co_estrategia_adj" : "'+Ext.getCmp("co_estrategia_adj_plani").getValue()+'", ';
	datos += '"co_tipo_proyecto" : "'+Ext.getCmp("co_tipo_proyecto").getValue()+'", ';
	datos += '"co_tipo_presupuesto" : "'+Ext.getCmp("co_tipo_presupuesto_plani").getValue()+'" }';
	
//return el JSON definido para guardar un proceso	
return datos;
}
//--------------------------------------------DATOS PLANIFICACION----------------------------------------------------------------

//--------------------------------------------STORE PLANIFICACION----------------------------------------------------------------
var writer = new Ext.data.JsonWriter();
var store_planificacion = new Ext.data.JsonStore({  
     id:'store_planificacion',
	 url: 'php/PlanificacionInterfaz.php', 
	 writer: writer,
	 //reader:reader,
	 batch:false,
	 //autoSave:false,
	 totalProperty:'total',
	 root: 'Resultados',
	 //pruneModifiedRecords:true,
	 idProperty: 'co_proyecto',
	 fields: [
				{name: 'co_proyecto'},
				{name: 'nu_anio'},
				{name: 'tx_proyecto_'},
				{name: 'co_usuario'},
				{name: 'tx_usuario'},
				{name: 'co_ubicacion'},
				{name: 'co_tipo_ubicacion'},
				{name: 'tx_ubicacion'},
				{name: 'tx_ubicacion_final'},
				{name: 'co_filial'},
				{name: 'co_direccion'},
				{name: 'co_division'},
				{name: 'tx_filial'},
				{name: 'tx_direccion'},
				{name: 'tx_division'},
				{name: 'co_distrito'},
				{name: 'tx_distrito'},
				{name: 'co_organizacion'},
				{name: 'tx_organizacion'},
				{name: 'co_naturaleza'},
				{name: 'tx_naturaleza'},
				{name: 'co_regimen_lab'},
				{name: 'tx_regimen_lab'},
				{name: 'co_modalidad'},
				{name: 'tx_modalidad'},
				{name: 'co_mecanismo_verif'},
				{name: 'tx_mecanismo_verif'},
				{name: 'co_rango'},
				{name: 'tx_rango'},	
				{name: 'monto_max'},
				{name: 'nu_plazo_ejec_'},
				{name: 'co_tipo_act'},
				{name: 'tx_tipo_act'},
				{name: 'nu_renglon_'},
				{name: 'co_prioridad'},
				{name: 'tx_prioridad'},
				{name: 'fe_inicio_estimada_p'} ,
				{name: 'fe_inicio_estimada_a'},
				{name: 'fe_especificaciones'},
				{name: 'co_tipo_proyecto'},
				{name: 'tx_tipo_proyecto'},
				{name: 'co_tipo_presupuesto'},
				{name: 'tx_tipo_presupuesto'},
				{name: 'co_solicitud_inicio'},
				{name: 'tx_obser'},
				{name: 'monto_max_rango'},
				{name: 'nu_contratos_asociados'},
				{name: 'tx_lugar_ejecucion'},
				{name: 'co_tipo_contrato'},
				{name: 'tx_tipo_contrato'},
				{name: 'co_estrategia_adj'},
				{name: 'tx_estrategia_adj'},
				{name: 'tx_ubicacion_etc'},
				{name: 'nu_orden_interna'}
				
			],
     
     baseParams: { 
				   start:0,limit:1000,sort:'',dir:'',
				   filter:'',
				   accion:'refrescar',
		           //tx_indicador:Usuario.usuario
				 },
	 
	 listeners:  {
					update : function(store, record,operation) {   
																// function actualizar // update
																//alert(operation);
																if(operation=='edit'){
																						//store_planificacion.commitChanges(); 
																					  }
															     },
					remove : function(store, record,index){
															store.reload({params:{co_proyecto:record.get('co_proyecto')}});
			                                               }

	
				  }

});
//--------------------------------------------STORE PLANIFICACION----------------------------------------------------------------

//--------------------------------------------PLUGINS EXPANDER-------------------------------------------------------------------
var expander = new Ext.ux.grid.RowExpander({
		expandOnDblClick:false,
        tpl : new Ext.Template(
								'<p><br/><b>Descripci&oacute;n:  </b> {tx_proyecto_}</p>',
								'<p><b>Organizaci&oacute;n:</b> {tx_organizacion}</p>',
								'<p><b>Lugar de Ejecuci&oacute;n:</b> {tx_lugar_ejecucion}</p>',
								'<p><b>Plazo de Ejecuci&oacute;n (N\xB0 d&iacute;as):</b> {nu_plazo_ejec_}</p>',
								'<p><b>Naturaleza de la Contratac&oacute;n:</b> {tx_naturaleza}</p>',
								'<p><b>Fecha de recepci&oacute;n de Solicitud de Inicio:</b> {fe_especificaciones}</p>',
								'<p><b>Comentarios Generales u Observaciones:</b> {tx_obser}</p><br/>'

							  )
});  
//--------------------------------------------PLUGINS EXPANDER-------------------------------------------------------------------


//--------------------------------------------FILTROS PLANIFICACION--------------------------------------------------------------
var filtro_planificacion= new Ext.ux.grid.GridFilters({
local: true,
filters:[
					{type: 'int',  dataIndex: 'nu_anio'},
					{type: 'string',  dataIndex: 'tx_proyecto_'},
					
					{type: 'list', dataIndex: 'tx_organizacion', store: new Ext.data.JsonStore ({  
							 url: 'php/PlanificacionInterfaz.php', 
							 root: 'Resultados',
							 fields: [ {name: 'tx_organizacion'} ],
							 baseParams: {accion:'listar',campo:'tx_organizacion',tabla:'i005t_organizacion'}
						}), labelField: 'tx_organizacion'},
					
					{type: 'list',  dataIndex: 'tx_naturaleza', store: new Ext.data.JsonStore ({  
							 url: 'php/PlanificacionInterfaz.php', 
							 root: 'Resultados',					
							 fields: [ {name: 'tx_naturaleza'} ],
							 baseParams: {accion:'listar',campo:'tx_naturaleza',tabla:'i008t_naturaleza'}
						}), labelField: 'tx_naturaleza'},
					
					{type: 'list',  dataIndex: 'tx_regimen_lab',store: new Ext.data.JsonStore ({  
							 url: 'php/PlanificacionInterfaz.php', 
							 root: 'Resultados',					
							 fields: [ {name: 'tx_regimen_lab'} ],
							 baseParams: {accion:'listar',campo:'tx_regimen_lab',tabla:'i007t_regimen_lab'}
						}), labelField:'tx_regimen_lab'},
					
					{type: 'list',  dataIndex: 'tx_modalidad',store: new Ext.data.JsonStore ({  
							 url: 'php/PlanificacionInterfaz.php', 
							 root: 'Resultados',					
							 fields: [ {name: 'tx_modalidad'} ],
							 baseParams: {accion:'listar',campo:'tx_modalidad',tabla:'i006t_modalidad'}
						}), labelField:'tx_modalidad'},
					
					{type: 'list',  dataIndex: 'tx_mecanismo_verif', store: new Ext.data.JsonStore ({  
							 url: 'php/PlanificacionInterfaz.php', 
							 root: 'Resultados',					
							 fields: [ {name: 'tx_mecanismo_verif'} ],
							 baseParams: {accion:'listar',campo:'tx_mecanismo_verif',tabla:'i016t_mecanismo_verif'}
						}), labelField:'tx_mecanismo_verif'},
					
					{type: 'list',  dataIndex: 'tx_rango', store: new Ext.data.JsonStore ({  
							 url: 'php/PlanificacionInterfaz.php', 
							 root: 'Resultados',					
							 fields: [ {name: 'tx_rango'} ],
							 baseParams: {accion:'listar',campo:'tx_rango',tabla:'i017t_rango'}
						}), labelField:'tx_rango'},
					
					{type: 'list',  dataIndex: 'tx_tipo_act', store: new Ext.data.JsonStore ({  
							 url: 'php/PlanificacionInterfaz.php', 
							 root: 'Resultados',					
							 fields: [ {name: 'tx_tipo_act'} ],
							 baseParams: {accion:'listar',campo:'tx_tipo_act',tabla:'i019t_tipo_act'}
						}), labelField:'tx_tipo_act'},
					
					{type: 'list',  dataIndex: 'tx_tipo_presupuesto', store: new Ext.data.JsonStore ({  
							 url: 'php/PlanificacionInterfaz.php', 
							 root: 'Resultados',					
							 fields: [ {name: 'tx_tipo_presupuesto'} ],
							 baseParams: {accion:'listar',campo:'tx_tipo_presupuesto',tabla:'i018t_tipo_presupuesto'}
						}), labelField:'tx_tipo_presupuesto'},
					
					{type: 'date',  dataIndex: 'fe_inicio_estimada_p'},
					{type: 'date',  dataIndex: 'fe_inicio_estimada_a'},
					{type: 'string',  dataIndex: 'nu_renglon_'}																			

	   ]
});
/*store_filtros.load({params: {accion:'listar'}, callback: function(){
					listaFiltros = [];
					  //console.log(grid_planificacion.initialConfig.filter);
					//grid_planificacion.initialConfig.filter.options = store_filtros.collect('tx_organizacion');
					alert(store_filtros.getCount());
					  for(i=0; i< store_filtros.getCount(); i++){
						  listaFiltros.push(store_filtros.getAt(i).data.tx_organizacion);
					  }
					  console.log(filtro_planificacion);
					  filtro_planificacion.filters.items[2] = {type: 'list',  dataIndex: 'tx_organizacion', options:listaFiltros, phpMode: true};
					  
					}
	});
*/
//--------------------------------------------FILTROS PLANIFICACION--------------------------------------------------------------

//--------------------------------------------COLUMNAS DEL GRID PLANIFICACION----------------------------------------------------
var columnas_planificacion = new Ext.grid.ColumnModel([
expander, new Ext.grid.RowNumberer(),
        	{	
						header: 'A&ntilde;o', // encabezamiento del campo del grid_planificacion
						width: 40,
						sortable: true,
						dataIndex: 'nu_anio'
			},{
						header: 'Registrado por',
						width: 120,
						sortable: true,
						dataIndex: 'tx_usuario'
			},{
						header: 'Descripci&oacute;n del Proceso',
						width: 450,
						sortable: true,
						renderer: Ext.util.Format.uppercase,
						dataIndex: 'tx_proyecto_'
			},{
						header: 'Ubicaci&oacute;n',
						width: 180,
						sortable: true,
						dataIndex: 'tx_ubicacion_final'
			},{
					   header: 'Organizaci&oacute;n',
					   width: 120,
					   sortable: true,   
					   dataIndex: 'tx_organizacion'      
			},{
						header: 'Edificio/Torrre/Campo',
						width: 180,
						sortable: true,
						renderer: Ext.util.Format.uppercase,
						dataIndex: 'tx_ubicacion_etc'
			},{
					   header: 'Lugar de ejecuci&oacute;n',
					   width: 105,
					   sortable: true, 
					   renderer: Ext.util.Format.uppercase,
					   dataIndex: 'tx_lugar_ejecucion'
		    },{
					   header: 'Orden Interna',
					   width: 100,
					   sortable: true, 
					   dataIndex: 'nu_orden_interna'    
			},{
					   header: 'Rengl&oacute;n Presupuestario',
					   width: 100,
					   sortable: true, 
					   dataIndex: 'nu_renglon_'    
			},{
					   header: 'Prioridad',
					   width: 100,
					   sortable: true, 
					   dataIndex: 'tx_prioridad'    
			},{
					   header: 'Plazo de ejecuci&oacute;n',
					   width: 105,
					   sortable: true, 
					   dataIndex: 'nu_plazo_ejec_'   
		    },{
					   header: 'Tipo de presupuesto',
					   width: 115,
					   sortable: true,         
					   dataIndex: 'tx_tipo_presupuesto'
			},{
					   header: 'Tipo de Proceso',
					   width: 115,
					   sortable: true,         
					   dataIndex: 'tx_tipo_proyecto'
			},{
					   header: 'Frecuencia',
					   width: 95,
					   sortable: true,
					   dataIndex: 'tx_tipo_act'        
			},{
					  // xtype:'datecolumn',
					   header: 'Fecha de recepci&oacute;n',
					   width: 100,
					   sortable: true,
					   renderer: fn_fe_especificaciones,         
					   dataIndex: 'fe_especificaciones',					   
					   format: 'd-m-Y'      
			},{
					   //xtype:'datecolumn',
					   header: 'Fecha estima de inicio del Procedimiento',
					   width: 100,
					   sortable: true,
					   renderer: fn_fe_especificaciones,
					   dataIndex: 'fe_inicio_estimada_p',
					   format: 'd-m-Y'     
			},{
					  // xtype:'datecolumn',
					   header: 'Fecha estima de inicio de la actividad',
					   width: 100,
					   sortable: true,    
					   renderer: fn_fe_especificaciones,     
					   dataIndex: 'fe_inicio_estimada_a', 
					   format: 'd-m-Y'      
			},{	
					   header: 'Naturaleza de la Contrataci&oacute;n',
					   width: 150,
					   sortable: true,
					   dataIndex: 'tx_naturaleza'         
			},{
					   header: 'Estrategia de Adjudicaci&oacute;n',
					   width: 100,
					   sortable: true, 
					   dataIndex: 'tx_estrategia_adj'    
			},{
					   header: 'Contratos Asociados',
					   width: 100,
					   sortable: true, 
					   dataIndex: 'nu_contratos_asociados'    
			},{
					   header: 'Tipo de Contratos',
					   width: 100,
					   sortable: true, 
					   dataIndex: 'tx_tipo_contrato'    
			},{
					   header: 'Regimen Legal',
					   width: 90,
					   sortable: true,         
					   dataIndex: 'tx_regimen_lab'
			},{
					   header: 'Modalidad',
					   width: 140,
					   sortable: true,         
					   dataIndex: 'tx_modalidad'
			},{
					   header: 'Mecanismo de Verificaci&oacute;n',
					   width: 120,
					   sortable: true,         
					   dataIndex: 'tx_mecanismo_verif' 
			},{
					   header: 'Categor&iacute;as de Contrataci&oacute;n',
					   width: 155,
					   sortable: true,  
					   dataIndex: 'tx_rango'       
			},{
					   header: 'Monto',
					   width: 100,
					   sortable: true, 
						dataIndex: 'monto_max_rango'    
			},{
					   header: 'Observaci&oacute;n',
					   width: 100,
					   sortable: true, 
					   renderer: Ext.util.Format.uppercase,
					   dataIndex: 'tx_obser'    
					}]
);
//--------------------------------------------COLUMNAS DEL GRID PLANIFICACION----------------------------------------------------

//--------------------------------------------GRID PLANIFICACION-----------------------------------------------------------------
var grid_planificacion = new Ext.grid.GridPanel({
id:'grid_planificacion', //identificacion del var grid_planificacion = new Ext.grid.GridPanel
name:'grid_planificacion',
title: 'Gesti&oacute;n del Proceso de Planificaci&oacute;n',
store: store_planificacion,
width: 1100,
anchor:'100%',
height: 350,
plugins:[expander,filtro_planificacion],
region:'center',
margins: '0 5 5 5',
stripeRows: true,
cm:columnas_planificacion,
				

//--------------------------------------------TOOLBAR PRINCIPAL------------------------------------------------------------------
		tbar: [{
				iconCls: 'plan-add',
				text: 'Nuevo Proceso',
				id:'boton-nuevo-proceso',
				
				handler: function () 	{
				Ext.getCmp('boton-guardar-planificacion').enable();						
				Ext.getCmp('boton-guardar-planificacion2').enable();
				//console.log('nuevo');
				
				//Borra los datos del formulario despues de hacer una modificacion en un formPanel
									
				//Ext.getCmp("").setValue('');
				Ext.getCmp("nu_anio").setValue(fecha.getFullYear());
				Ext.getCmp("tx_proyecto_").setValue('');
				Ext.getCmp("tx_ubicacion_etc").setValue('');
				Ext.getCmp("super_plani").setValue(Ext.getCmp("super_plani").store.getAt(0).get('co_usuario'));
				//Ext.getCmp("super_plani").expand();
				//Ext.getCmp("super_plani").select(0);
				Ext.getCmp("co_filial").setValue('');
				Ext.getCmp("co_direccion").setValue('');
				Ext.getCmp("co_division").setValue('');
				Ext.getCmp("co_distrito").setValue('');
				Ext.getCmp("co_organizacion_plani").setValue('');
				Ext.getCmp("co_naturaleza_plani").setValue('');
				Ext.getCmp("co_regimen_lab_plani").setValue('');
				Ext.getCmp("co_modalidad_plani").setValue('');
				Ext.getCmp("co_mecanismo_verif_plani").setValue('');
				Ext.getCmp("co_rango").setValue('');
				Ext.getCmp("monto_max_rango").setValue('');
				Ext.getCmp("nu_orden_interna").setValue('');
				Ext.getCmp("nu_plazo_ejec_").setValue('');
				Ext.getCmp("tx_lugar_ejecucion").setValue('');
				Ext.getCmp("nu_contratos_asociados").setValue('');
				Ext.getCmp("co_tipo_act_plani").setValue('');
				Ext.getCmp("co_tipo_proyecto").setValue('');
				Ext.getCmp("co_prioridad_plani").setValue();
				Ext.getCmp("fe_inicio_estimada_p").setValue('');
				Ext.getCmp("fe_inicio_estimada_a").setValue('');
				Ext.getCmp("nu_renglon_").setValue('');
				Ext.getCmp("fe_especificaciones").setValue('');
				Ext.getCmp("tx_obser").setValue('');
				//Ext.getCmp("nu_monto_original_").setValue('');
				Ext.getCmp("co_tipo_presupuesto_plani").setValue('');
				Ext.getCmp("co_tipo_contrato_plani").setValue('');
				Ext.getCmp("co_estrategia_adj_plani").setValue('');
										
				//Borra los datos del formulario despues de hacer una modificacion en un Panel (no funciona)
				//panel_tab_inicio_plani.getForm().reset();
				panel_tab_solicitud_inicio.getForm().reset();
				//panel_tab_recepcion.getForm().reset();
				
				WinPlanificacion.setTitle("Nuevo Proceso");
										
				//console.log('nuevo proceso');
				//store_planificacion.setBaseParam('accion','insertar');
				accion= 'insertar';
				
				WinPlanificacion.show();
				
				} //handler
				}, '', '', {
				
				iconCls: 'plan-delete',
				text: 'Eliminar Proceso',
				id:'boton-eliminar-proceso',
				//disabled: true,
				handler: function () {
										// seleciona la fila del grid_planificacion
										fila = grid_planificacion.getSelectionModel(); 
										// seleciona la celda del grid_planificacion
										celda = fila.getSelected();        
										var gstore = grid_planificacion.getStore();
										// manda a cargar el store
										gstore.load({            
													params:{
															//tx_indicador:Ext.getCmp('tx_usuario').getValue(),
															co_proyecto: celda.data.co_proyecto,
															accion:'eliminar'
														   },
													});
										gstore.remove(celda);
									   }
				}, '', '', {
				
				iconCls: 'exportar-excel',
				text: 'Exportar',
				id:'boton-exportar-excel-proceso',
				//disabled: true,
				handler: function(){
                window.location = 'php/planificacionxls.php';}
				}, '', '', {
            text: 'Imprimir',
            iconCls: 'printer',
            id:'boton-imprimir-proceso',
            handler : function(){
            	Ext.ux.Printer.printAutomatically = true;
            	Ext.ux.Printer.print(grid_planificacion);
            	
            }
            }],
				
//--------------------------------------------TOOLBAR PRINCIPAL------------------------------------------------------------------				

//--------------------------------------------BBAR PRINCIPAL---------------------------------------------------------------------
bbar: ['->', //ME PERMITE POSICIONAR EL BBAR EN LADO DERECHO
/*{
text: 'All Filter Data',
tooltip: 'Get Filter Data for Grid',
handler: function () 
				{
				var data = Ext.encode(grid_planificacion.filters.getFilterData());
				Ext.Msg.alert('All Filter Data',data);
				} 
	},*/{
text: 'Limpiar Filtros',
handler: function () 
		{
		grid_planificacion.filters.clearFilters();
		} 
}],
//--------------------------------------------BBAR PRINCIPAL---------------------------------------------------------------------
				
				//CARGAR DATOS EN EL FORMULARIO (dobleclick)
				listeners: {
								'rowdblclick': function (grid, rowIndex, e) {
										fila=grid.getSelectionModel();
										rec=fila.getSelected();
										WinPlanificacion.setTitle("Proceso");
										panel_tab_inicio_plani.getForm().loadRecord(rec);
										panel_tab_solicitud_inicio.getForm().loadRecord(rec);
										panel_tab_recepcion.getForm().loadRecord(rec);
										co_proyecto=rec.data.co_proyecto;
										co_ubicacion=rec.data.co_ubicacion;
				//cargar el valor de cada combo
				if((rec.data.fe_especificaciones == '0000-00-00') || (rec.data.fe_especificaciones=="") || (rec.data.fe_especificaciones==null)) 
				{
				Ext.getCmp("fe_especificaciones").setValue('');
				Ext.getCmp('boton-guardar-planificacion').enable();						
				Ext.getCmp('boton-guardar-planificacion2').enable();
				Ext.getCmp("super_plani").setValue(rec.data.co_usuario);
				Ext.getCmp("co_filial").setValue(rec.data.co_filial);
				Ext.getCmp("co_direccion").setValue(rec.data.co_direccion);
     			Ext.getCmp("co_division").setValue(rec.data.co_division);
				Ext.getCmp("co_distrito").setValue(rec.data.co_distrito);
				Ext.getCmp("co_organizacion_plani").setValue(rec.data.co_organizacion);
				Ext.getCmp("co_naturaleza_plani").setValue(rec.data.co_naturaleza);
				Ext.getCmp("co_regimen_lab_plani").setValue(rec.data.co_regimen_lab);
				Ext.getCmp("co_modalidad_plani").setValue(rec.data.co_modalidad);
				Ext.getCmp("co_modalidad_plani").setValue(rec.data.co_modalidad);
				Ext.getCmp("co_mecanismo_verif_plani").setValue(rec.data.co_mecanismo_verif);
				Ext.getCmp("co_rango").setValue(rec.data.co_rango);
				Ext.getCmp("co_prioridad_plani").setValue(rec.data.co_prioridad);
				Ext.getCmp("co_tipo_act_plani").setValue(rec.data.co_tipo_act);
				Ext.getCmp("co_tipo_proyecto").setValue(rec.data.co_tipo_proyecto);
				Ext.getCmp("co_tipo_presupuesto_plani").setValue(rec.data.co_tipo_presupuesto);
				Ext.getCmp("co_tipo_contrato_plani").setValue(rec.data.co_tipo_contrato);
				Ext.getCmp("co_estrategia_adj_plani").setValue(rec.data.co_estrategia_adj);
					
				if((rec.data.fe_inicio_estimada_p == '0000-00-00') || (rec.data.fe_inicio_estimada_p=="") || (rec.data.fe_inicio_estimada_p==null)) {
					Ext.getCmp("fe_inicio_estimada_p").setValue('');
                }else
				Ext.getCmp("fe_inicio_estimada_p").setValue(rec.data.fe_inicio_estimada_p);
				
				if((rec.data.fe_inicio_estimada_a == '0000-00-00') || (rec.data.fe_inicio_estimada_a=="") || (rec.data.fe_inicio_estimada_a==null)) {
					Ext.getCmp("fe_inicio_estimada_a").setValue('');
                }else
				Ext.getCmp("fe_inicio_estimada_a").setValue(rec.data.fe_inicio_estimada_a);
                }
                
                else
                {
				Ext.getCmp("fe_especificaciones").setValue(rec.data.fe_especificaciones);
				Ext.getCmp('boton-guardar-planificacion').disable();
				Ext.getCmp('boton-guardar-planificacion2').disable();	
				}
				WinPlanificacion.show();
										
				//cargar el nombre de cada valor
				Ext.getCmp("super_plani").setRawValue(rec.data.tx_usuario);
				Ext.getCmp("co_filial").setRawValue(rec.data.tx_filial);
				Ext.getCmp("co_direccion").setRawValue(rec.data.tx_direccion);
				Ext.getCmp("co_division").setRawValue(rec.data.tx_division);
				Ext.getCmp("co_distrito").setRawValue(rec.data.tx_distrito);
				Ext.getCmp("co_organizacion_plani").setRawValue(rec.data.tx_organizacion);
				Ext.getCmp("co_naturaleza_plani").setRawValue(rec.data.tx_naturaleza);
				Ext.getCmp("co_regimen_lab_plani").setRawValue(rec.data.tx_regimen_lab);
				Ext.getCmp("co_modalidad_plani").setRawValue(rec.data.tx_modalidad);
				Ext.getCmp("co_mecanismo_verif_plani").setRawValue(rec.data.tx_mecanismo_verif);
				Ext.getCmp("co_rango").setRawValue(rec.data.tx_rango);
				Ext.getCmp("co_prioridad_plani").setRawValue(rec.data.tx_prioridad);
				Ext.getCmp("co_tipo_act_plani").setRawValue(rec.data.tx_tipo_act);
				Ext.getCmp("co_tipo_proyecto").setRawValue(rec.data.tx_tipo_proyecto);
				Ext.getCmp("co_tipo_presupuesto_plani").setRawValue(rec.data.tx_tipo_presupuesto);
				Ext.getCmp("co_estrategia_adj_plani").setRawValue(rec.data.tx_estrategia_adj);
				Ext.getCmp("co_tipo_contrato_plani").setRawValue(rec.data.tx_tipo_contrato);
									
				accion='modificar';
				
				}		
							}


}); 
//--------------------------------------------GRID PLANIFICACION-----------------------------------------------------------------

//--------------------------------------------FORMULARIO PLANIFICACION INICIO----------------------------------------------------
var panel_tab_inicio_plani = new Ext.FormPanel({
id:'panel_tab_inicio_plani',
name:'panel_tab_inicio_plani',
layout: 'form',
labelAlign: 'top',
width: 450,
height: 450,
items:[{ layout: 'column',
		items:[{
				columnWidth: .5,
				layout: 'form',
			    items: [{
						xtype: 'spinnerfield',
						minValue: 2000,
						maxValue: 2099,
						value:fecha.getFullYear(),
						id:'nu_anio',
						name:'nu_anio',
						fieldLabel: 'A&ntilde;o',
						//blankText: "El campo A&ntilde;o es requerido",
						//allowBlank:false,
						//disabled: true,
						anchor: '80%'
					  }]
			 },{
			   columnWidth: .5,
			   layout: 'form',
			   width:180,
			   items: [GetComboDinamico('super_plani','co_usuario','Registrado por','datos_usuario',true,'local')]    
            },{
				columnWidth: 1,
				layout: 'form',
				items:[{
						xtype: 'textarea',
						id:'tx_proyecto_',
						name:'tx_proyecto_',
						fieldLabel: 'Descripci&oacute;n del Proceso',
						style: 'text-transform:uppercase; font:normal 12px tahoma,arial,helvetica,sans-serif; !important;',
						anchor: '90%',
						vtype: 'validosEsp'
					}]
			},{
				columnWidth: 0.9,
				layout: 'form',
				items:  [{ 
						xtype:'fieldset',
						defaults: {anchor: '230%'},
						title: 'Ubicaci&oacute;n',
						autoHeight:true,
						collapsed: true,
						collapsible: true,
						layout: 'column',
						items: 
						[{
							layout: 'form',
							columnWidth: .5,
							items: [GetComboUbicacion('co_filial','Filial o Negocio',1,'co_direccion','co_organizacion_plani')]
						}, {
							columnWidth: .5,
							layout: 'form',
							
							items: [GetComboUbicacion('co_direccion','Direcci&oacute;n',2,'co_division','co_organizacion_plani')] 
						}, {
							columnWidth: .5,
							layout: 'form',
							items: [GetComboUbicacion('co_division','Divisi&oacute;n',3,'co_distrito','co_organizacion_plani')]
						}, {
							columnWidth: .5,
							layout: 'form',
							items: [GetComboUbicacion('co_distrito','Distrito',4,'co_organizacion_plani')]
						}, {
							columnWidth: .5,
							layout: 'form',
							items: [GetComboDinamico('co_organizacion_plani','co_organizacion','Organizaci&oacute;n','organizacion_ubicacion',false,'local')]  
						}, {
							columnWidth: .5,
							layout: 'form',
							items: [{
									xtype: 'textfield',
									id:'tx_ubicacion_etc',
									fieldLabel: 'Edificio/Torre/Campo',
									style: 'text-transform:uppercase; font:normal 12px tahoma,arial,helvetica,sans-serif; !important;',
									//disabled:true,
									anchor: '80%'
								   }]
						},{
							columnWidth: .5,
							layout: 'form',
							items: [{
									xtype: 'textfield',
									id:'tx_lugar_ejecucion',
									fieldLabel: 'Lugar de Ejecuci&oacute;n',
									style: 'text-transform:uppercase; font:normal 12px tahoma,arial,helvetica,sans-serif; !important;',
									anchor: '80%'
									}]
						}
						]},	//items fieldset ubicacion
						{
						xtype:'fieldset',
						defaults: {anchor: '230%'},
						title: 'Informaci&oacute;n Presupuestaria',
						autoHeight:true,
						collapsed: true,
						collapsible: true,
						layout: 'column',
						items: 
						[{
						columnWidth: .5,
						layout: 'form',
						width:180,
						items: [{
								xtype: 'textfield',
								id:'nu_orden_interna',
								fieldLabel: 'Orden Interna o CeCo',
								anchor: '80%'
								}]
						},{
							columnWidth: .5,
							layout: 'form',
							items: [{
									xtype: 'textfield',
									id:'nu_renglon_',
									fieldLabel: 'Renglon Presupuestario',
									anchor: '80%'
						            }]
						},{
							columnWidth: .5,
							layout: 'form',
							width:180,
							items: [GetCombo('co_prioridad_plani','co_prioridad','Prioridad de la Contrataci&oacute;n')]
						},{
							columnWidth: 0.5,
							layout: 'form',
							items: [{
									xtype: 'numberfield',
									id:'nu_plazo_ejec_',
									fieldLabel: 'Plazo de Ejecuci&oacute;n  (N\xB0 d&iacute;as)',
									anchor: '80%'
								   }]
						},{
							columnWidth: .5,
							layout: 'form',
							items: [GetCombo('co_tipo_presupuesto_plani', 'co_tipo_presupuesto','Tipo de Presupuesto')]
						},{
							columnWidth: .5,
							layout: 'form',
							items: [GetCombo('co_tipo_proyecto','co_tipo_proyecto','Tipo de Proceso')]		
						},{
							columnWidth: .5,
							layout: 'form',
							items: [GetCombo('co_tipo_act_plani','co_tipo_act','Frecuencia')]		
						}]
					    }]
						},//fielset
			
			{
				columnWidth: .5,
				layout: 'form',
				items: [{
						xtype: 'datefield',
						//vtype:'daterange',
						id:'fe_inicio_estimada_p',
						fieldLabel: 'Fecha de Inicio de Procedimiento (Estimado)',
						anchor: '80%',
						format: 'd-m-Y',
						//endDateField: 'fe_inicio_estimada_a'
					}]
			},{
					columnWidth: .5,
					layout: 'form',
					items: [{
							fieldLabel: 'Fecha de Inicio de la obra o servicio (Estimada)',
							xtype: 'datefield',
							//vtype:'daterange',
							id:'fe_inicio_estimada_a',
							format: 'd-m-Y',
							anchor: '80%',
							//startDateField: 'fe_inicio_estimada_p'
						   }]
			 },{
							 columnWidth: .5,
							 layout: 'form',
							 items: [{
									xtype: 'datefield',
									id:'fe_especificaciones',
									name:'fe_especificaciones',
									fieldLabel: '<b>Recepci&oacute;n de Solicitud de Inicio</b>',
									anchor: '80%',
									format: 'd-m-Y'
								  }]
						}]
		  }], //items tab
		  listeners: {
									
									fmayusculas: function(field,e){
										field.setValue(field.getValue().toUpperCase()); //evento para colocar las letras en mayúsculas
									},
						},
	//Botones
	buttonAlign: 'center', 	
	buttons: [{
		text: 'Guardar',
		id:'boton-guardar-planificacion',
		listeners: {
			'click': function () { 
				if(Ext.getCmp("fe_especificaciones").getValue()==''){
					store_planificacion.reload({
						params:{
							Resultados: datosPlanificacion(),
							accion: accion,
							co_proyecto:co_proyecto,
						}				
					});
					WinPlanificacion.hide();
				}
				else{
					Ext.MessageBox.confirm("[CONTRATOS]","&iquest;Desea guardar el proceso? Inmediatamente ser&aacute; notificado el Lider de Contrataci&oacute;n", function(btn){
						if(btn == 'yes'){
                                                        Ext.Ajax.request({
                                                            url: 'php/PlanificacionInterfaz.php',
								params:{
									Resultados: datosPlanificacion(),
									accion: accion,
									co_proyecto:co_proyecto,
								},
                                                                success: function(r,o){
                                                                    obj = Ext.util.JSON.decode(r.responseText);
                                                                    store_planificacion.loadData(obj);
                                                                    if(obj.co_proyecto!=0)
                                                                        co_proyecto=obj.co_proyecto;
                                                                    //ENVIAMOS CORREO CUANDO SE ASIGNE LA FECHA
                                                                    Ext.Ajax.request({
                                                                        url: 'lib/mailer/sendmail.php',
                                                                        params:{
                                                                            co_usuario_asignado:0,
                                                                            co_usuario_asignador:0,
                                                                            co_proceso:co_proyecto,
                                                                            co_tipo:1
                                                                        }
                                                                    });
                                                                }
							});
							WinPlanificacion.hide();
						}
					});
				}
			}
		}
	},{
		text: 'Cerrar',
		id:'boton-cerrar-planificacion',
		listeners: {
			'click': function () {
				WinPlanificacion.hide();
			}
		}
	}]
});
//--------------------------------------------FORMULARIO PLANIFICACION INICIO----------------------------------------------------

//--------------------------------------------FORMULARIO ESTRATEGIAS-------------------------------------------------------------
var panel_tab_recepcion = new Ext.FormPanel({
	id:'panel_tab_recepcion',
	name:'panel_tab_recepcion',
	layout: 'form',
	labelAlign: 'top',
	width: 420,
	height: 475,
	enableScroll: true,
	items:[{ layout: 'column',
		     items:[{
				columnWidth: .5,
				layout: 'form',
				items: [GetCombo('co_naturaleza_plani','co_naturaleza','Naturaleza de la Contrataci&oacute;n')]
			},{
					columnWidth: .5,
					layout: 'form',
					items: [GetCombo('co_estrategia_adj_plani','co_estrategia_adj','Estrategia de Adjudicaci&oacute;n')]		
			},{
					columnWidth: .5,
					layout: 'form',
					items: [{
						xtype: 'spinnerfield',
						fieldLabel: 'N\xB0 de contratos Asociados',
						minValue: 0,
						maxValue: 100,
						id:'nu_contratos_asociados',
						name: 'nu_contratos_asociados',
						anchor: '80%'
					}]
         	}/*,{
					columnWidth: .5,
					layout: 'form',
					items: [{
						xtype: 'textfield',
						id:'nu_monto_original_',
						fieldLabel: 'Monto',
						anchor: '80%'
					}]
				}*/]
			},{
					xtype:'fieldset',
					//id:'fsdocumentos', el arreglo de la solicitud de inicio
					title: 'Estrategia de Contrataci&oacute;n',
					//collapsed: true,
					collapsible: true,
					
					autoHeight:true,
					//labelAlign: 'top',
					
					
					layout: 'column',
					anchor: '100%',
							items:[
				{	columnWidth: .5,
					layout: 'form',
					items: [GetCombo('co_tipo_contrato_plani','co_tipo_contrato','Tipo de Contrato')]
				}, {
					columnWidth: .5,
					layout: 'form',
					items: [GetCombo('co_regimen_lab_plani','co_regimen_lab','Regimen Laboral')]
				}, {
					columnWidth: .5,
					layout: 'form',
					items: [GetCombo('co_modalidad_plani','co_modalidad','Modalidad de la Contrataci&oacute;n')]
				}, {
					columnWidth: .5,
					layout: 'form',
					items: [GetCombo('co_mecanismo_verif_plani','co_mecanismo_verif','Mecanismo de Verificaci&oacute;n')]
				},{
					columnWidth: .5,
					layout: 'form',
					items: [GetComboParametros('co_rango','tx_rango','monto_max','Categor&iacute;as de la Contrataci&oacute;n')]
				},{
					columnWidth: .5,
					layout: 'form',
						items: [{
						xtype: 'textfield',
						id:'monto_max_rango',
						name:'monto_max_rango',
						fieldLabel: 'Monto (Bs)',
						disabled:true,
						anchor: '80%'
					}]
				}]
							
            },{
				    columnWidth: 1,
				    layout: 'form',
				    items:[{
						xtype: 'textarea',
						id:'tx_obser',
						name:'tx_obser',
						fieldLabel: 'Comentarios Generales u Observaciones',
						style: 'text-transform:uppercase; font:normal 12px tahoma,arial,helvetica,sans-serif; !important;',
						anchor: '100%',
						vtype: 'validosEsp'
					
					}]
				},
           ],
//Botones
buttonAlign: 'center', 	
buttons: [{
text: 'Guardar',
id:'boton-guardar-planificacion2',
listeners: {
				'click': function () { 
										store_planificacion.reload({params:{Resultados: datosPlanificacion(),
																	accion: accion,
																	co_proyecto:co_proyecto,					 
																	       }
																   });
										WinPlanificacion.hide();
								     }
							}
			},{
text: 'Cerrar',
id:'boton_cerrar_procesos',
listeners: {
				'click': function () {
										WinPlanificacion.hide();
										//formPanel_planificacion.getForm().reset();
									 }
			}
			 }]
});

Ext.getCmp('co_rango').on('select',function(combo,record,index){
	Ext.getCmp('monto_max_rango').setValue(record.data.monto_max);
});



//--------------------------------------------FORMULARIO ESTRATEGIAS-------------------------------------------------------------

//--------------------------------------------FORMULARIO SOLICITUD DE INICIO-----------------------------------------------------
var documentos = new Array();
Ext.Ajax.request({
				url: 'php/CombosDinamicos.php',
				params:{accion:'solicitud',
						filter:''
						},
	success: function (response, option){
				obj = Ext.util.JSON.decode(response.responseText);
	
		
				for(i=0;obj.Resultados[i];i++){
				panel_tab_solicitud_inicio.add(new Ext.form.Checkbox({
																	id: "co_solicitud"+obj.Resultados[i].co_solicitud,
																	name: "co_solicitud"+obj.Resultados[i].co_solicitud,
																	boxLabel: obj.Resultados[i].tx_solicitud,}
																	)
												)						
				//Arreglo para guardar el id de los documentos
					
				documentos[i]=  "co_solicitud"+obj.Resultados[i].co_solicitud;
				//console.log(documentos[i]);
											  }//CIERRA EL FOR
				//Ext.getCmp('fsdocumentos').add(documentos);//si quiciera colocar la lista dentro del fieldset
										}	
			
});
//Funcion para limpiar los checkbox
	function limpiar_todo(){
							for (i=0;documentos[i];i++){
														Ext.getCmp(documentos[i]).setValue(false);
														}
							}
  
var panel_tab_solicitud_inicio = new Ext.FormPanel({
	id:'panel_tab_solicitud_inicio',
	name:'panel_tab_solicitud_inicio',
	layout: 'form',
	labelAlign: 'top',
	width: 445,
	height: 475,
	autoScroll: true,
buttons: [{	//Aquí se guardan los documentos
text: 'Guardar',
id:'boton_guardar_solicitud',
handler: function (){
					//Ajax para eliminar todos los registros de la tabla de documentos consignados
					Ext.Ajax.request({
					url: 'php/solicitud_inicio_interfaz.php',
					params:{accion:'eliminar',
					filter:'',
					co_proyecto:co_proyecto},
success: function (response, option){//console.log(co_proyecto+' '+ co_solicitud);
									;
									}
});
					//Codigo para guardar tipo de documentos en base de datos
					for(i=0;documentos[i];i++){
												if(Ext.getCmp(documentos[i]).getValue()==true){
																	//cad=Ext.getCmp(documentos[i]).name;
																	//console.log(documentos[i].replace('co_solicitud',''));
																	co_solicitud=documentos[i].replace('co_solicitud','');
					
					//ajax para guardar  en base de datos
					Ext.Ajax.request({
									url: 'php/solicitud_inicio_interfaz.php',
									params:{accion:'insertar',
									filter:'',
									co_proyecto:co_proyecto,
									co_solicitud:co_solicitud
									},
									success: function (response, option){
									
																		//console.log(co_proyecto+' '+ co_solicitud);
																		//WinPlanificacion.hide();
																		//Ventana de informacion que muestra que se han guardado los cambios
																		
																		WinInfo("Los datos han sido guardados exitosamente");
																		}
										});
														}
														}
														}
								},{ 
									text: 'Cancelar',
									id:'boton_cancelar_solicitud',
									handler: function(){
										//Funcion para limpiar los checkbox
										limpiar_todo();
										WinPlanificacion.hide();},
													}]
	
});

/*var winDocumentos = new Ext.Window({  
								title: "[CONTRATOS] Documentos Consignados", //Titulo de la Ventana 
								width: 400,  
								height:300, 
								autoScroll: true,
								listeners:  {	
											beforeshow: 
											function(window){
														//Funcion para limpiar los checkbox
														limpiar_todo();
														//console.log(co_proyecto);
												Ext.Ajax.request({
														url:'php/solicitud_inicio_interfaz.php',
														params:{ accion:'buscar',
														filter:'',
														co_proyecto:co_proyecto
																}, 
														success: 
																											
														function (response, option){
																 obj= Ext.util.JSON.decode(response.responseText);
																 //Recorrer la respuesta para saber que documentos estan guardados en bd
																 for(i=0;obj.Resultados[i];i++){
																	 Ext.getCmp("co_solicitud"+obj.Resultados[i].co_solicitud).setValue(true);
																	 //chb.checked();
																	  //console.log(chb);
																	 //chb.checked=1;
																	
																	 //console.log(chb.checked);
																 }
																 
																 }
																		});
													}},
								items:[panel_tab_solicitud_inicio]
});*/
//--------------------------------------------FORMULARIO SOLICITUD DE INICIO-----------------------------------------------------

//--------------------------------------------PANEL GENERAL----------------------------------------------------------------------
 var formPanel_planificacion = new Ext.Panel({
	id:'formPanel_planificacion',
	name:'formPanel_planificacion',
	labelAlign: 'top',
	frame: true,
	bodyStyle: 'padding:5px 5px 0',
	width: 480,
	height: 595,
	//autoScroll: true,
	items:{
		xtype: 'tabpanel',
		activeTab: 0,
		enableTabScroll: true,
		deferredRender : false,
		defaults: {
			autoHeight: true,
			bodyStyle: 'padding:10px'
		},
	items: [{title: 'Planificaci&oacute;n', items:panel_tab_inicio_plani },
			{title: 'Estrategia del Proceso', items:panel_tab_recepcion },
			{title:'Documentos Consignados', items:panel_tab_solicitud_inicio}
			]
	      }
});
/*store_filtros.on('load', function(){
console.log(store_filtros.data);
});*/
//--------------------------------------------PANEL GENERAL----------------------------------------------------------------------

//--------------------------------------------VENTANA PLANIFICACION--------------------------------------------------------------
var WinPlanificacion = new Ext.Window({
	id:'WinPlanificacion',
	name:'WinPlanificacion',
	title: 'Planificaci&oacute;n',
	layout:'column',
	height: 580,
	width: 495,
	modal: true,
	resizable:false,
	closeAction: 'hide',
	plain: true,
	items: [formPanel_planificacion], 
	//carga los checkbox por cada panel
	listeners:  {	
					beforeshow: 
					function(){
					//Funcion para limpiar los checkbox
					limpiar_todo();
					//console.log(co_proyecto);
												Ext.Ajax.request({
														url:'php/solicitud_inicio_interfaz.php',
														params:{ accion:'buscar',
														filter:'',
														co_proyecto:co_proyecto
																}, 
														success: 
																											
														function (response, option){
																 obj= Ext.util.JSON.decode(response.responseText);
																 //Recorrer la respuesta para saber que documentos estan guardados en bd
																 for(i=0;obj.Resultados[i];i++){
																	 Ext.getCmp("co_solicitud"+obj.Resultados[i].co_solicitud).setValue(true);
																	 //chb.checked();
																	  //console.log(chb);
																	 //chb.checked=1;
																	
																	 //console.log(chb.checked);
																 }
																 
																 }
																		});
													}
													
										
													},
});
//store_planificacion.load();
//--------------------------------------------VENTANA PLANIFICACION--------------------------------------------------------------

//Carga los combos de Ubicacion
Ext.getCmp('co_filial').store.load();

