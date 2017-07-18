/*!
 * Ext JS Library 3.2.1
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
var comboTabla = new Ext.form.ComboBox({
        store: new Ext.data.JsonStore({
			url: 'php/CombosDinamicos.php',
			root: 'Resultados',
			idProperty: 'tx_tablas',
			baseParams: {accion:'tabla'},
			fields:['tx_tablas','tx_desc_tablas']
		}),
        displayField:'tx_desc_tablas',
        typeAhead: true,
        allowBlank: false,
        mode: 'remote',
        width:250,
        forceSelection: true,
        triggerAction: 'all',
        emptyText:'Seleccione',
        selectOnFocus:true,
        editable: false,        
        listeners:{                        
			select: function(combo,record,index){
				Ext.Ajax.request({
					url: 'php/CombosDinamicos.php',
					baseParams: {
						accion:'desc_tablas',
						tx_tablas: record.data.tx_tablas
					},
					success: function (form, action){
						cm = grid_tablas.getColumnModel();
						i=0;tope=cm.getColumnCount();
						while(i<tope){
							name_store=cm.getDataIndex(0);
							grid_tablas.removeColumn(name_store,0);
							i++;
						}
						json = Ext.util.json_decode(form.responseText);
						for(var columnas in json.Resultados[0])
							grid_tablas.addColumn(
							{name:columnas},
							{
								header: columnas,
								align:'center',
								width: 120,
								dataIndex: columnas,
								editor: new Ext.form.TextField({})
							});
						
						store_tablas.removeAll();
						for(fil=0;fil<json.Resultados.length;fil++){
							record = new Ext.data.Record({});
							for(var col in json.Resultados[fil]){
								record.set(col,json.Resultados[fil][col]);
								//console.log(col+'->'+json.Resultados[fil][col]);
							}
							store_tablas.add(record);
						}
					}
				});
			}
		}
	});
//-------------------------------------------------------------------------------------------------------------
var store_tablas = new Ext.data.JsonStore({
	//url: 'php/tablaInterfaz.php',
	root: 'Resultados',
	fields: []
});
var grid_tablas = new Ext.grid.EditorGridPanel({   // grid  usuarios
        id:'grid_tablas', //identificacion del var grid_usuario = new Ext.grid.EditorGridPanel
		name:'grid_tablas',
        store: store_tablas,
        width: 1000,
        height: 350,
        region:'center',
        margins: '0 5 5 5',
		//plugins: [editor_grid_usuarios],
        tbar: [
        {
            iconCls: 'agenda-add',
            text: 'Agregar', // boton Agregar Agenda
            handler: function(){
				//store_agenda.setBaseParam('accion','insertar');
                var record = new grid_tablas.store.recordType();
				//editor_grid_agenda.stopEditing();       // permite ser mas rapida la busqueda de la funcionalidad del recordType
				grid_tablas.store.insert(0, record);   // permite posicionarse en la fila correspondiente
				grid_tablas.getView().getRowClass=function (record,index,rowParams,store){
					if(index==0)
						return 'red-row';
					else
						return '';
				}
				//editor_grid_agenda.startEditing(0);   // permite editar el recordType en la posición que se le asigne.
            }
        },{
			iconCls: 'guardar',
			text: 'Guardar',
		    handler: function(){
				Ext.MessageBox.confirm("[CONTRATOS]","¿Desea guardar?", function(btn){
					if(btn == 'yes'){
						records_modificados=store_tablas.getModifiedRecords();
						Ext.each(records_modificados,function(fila,i){
							/*if(fila.data.tx_indicador==undefined || fila.data.tx_nombre==undefined  || fila.data.tx_apellido==undefined || fila.data.co_rol==undefined || fila.data.co_estatus_usuario==undefined){
								WinError("Debe completar toda la informaci&oacute;n");
							}
							else{*/
								/*if(fila.data.co_usuario==null )
									accion='insertar';
								else*/
								accion='modificar';
								console.log(fila);
								store_tablas.reload({
									params:{
										accion:accion,
										//condicion:fila.data.,
										filter:'',
										Resultados:Ext.util.JSON.encode(fila.getChanges())
									}
								});		
								fila.commit();				
								grid_tablas.getView().getRowClass=function (record,index,rowParams,store){
									return '';
								}
						  //}
						});
					}
				});
			}
		},{
           //ref: '../removeBtn',
            iconCls: 'eliminar-usuario-add',
            text: 'Eliminar',                         // boton Eliminar Agenda
            //disabled: true,
            handler: function(){
				Ext.MessageBox.confirm("[CONTRATOS]","¿Desea Eliminar El Usuario?", function(btn){
					if(btn == 'yes'){
                //editor.stopEditing();                    // no deja ningún tipo de edición activos
                fila = grid_usuarios.getSelectionModel(); // seleciona la fila del grid_agenda
                celda = fila.getSelectedCell();        // seleciona la celda del grid_agenda
                grid_usuarios.store.reload({            // manda a recargar el store_agenda 
					params:{
						co_usuario:grid_usuarios.store.getAt(celda[0]).get('co_usuario'),  //  elimina y se ubica en la celda 0
						accion:'eliminar'
					}
				});
			}
		});
	}
},'->','Tabla:',comboTabla],
columns: []
});
