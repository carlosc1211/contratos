var writer = new Ext.data.JsonWriter();
var row=0;
var store_usuarios = new Ext.data.JsonStore({    ////////////////////////////////////////////
	url: 'php/UsuariosInterfaz.php',
	writer: writer,
	batch:false,
	autoSave:false,
	totalProperty:'total',
	root: 'Resultados',
	idProperty: 'co_usuario',
	autoLoad: false,
	fields: [
	   {name: 'co_usuario',type:'integer'},
           {name: 'tx_indicador',type:'string'},
           {name: 'tx_usuario', type: 'string'},
           {name: 'co_ubicacion',type:'integer'},
           {name: 'tx_ubicacion',type:'string'},
           {name: 'co_organizacion',type:'integer'},
           {name: 'tx_organizacion',type:'string'},
           {name: 'co_supervisor',type:'integer'},
           {name: 'tx_supervisor',type:'string'},
           {name: 'co_rol',type:'integer'},
           {name: 'tx_rol',type:'string'},
           {name: 'bo_activo',type:'integer'}
           ],
    baseParams: { 
		start:0,limit:1000,sort:'',dir:'',
		filter:'',
		accion:'refrescar'
	},
	listeners: {
        update : function(store, record,operation) {   // function actualizar ///////////////////////////////////////  update
			//alert(operation);
			if(operation=='edit'){
				
			//store_agenda.commitChanges(); 
			}
        },
		remove : function(store, record,index) {
			store.reload({params:{co_usuario:record.get('co_usuario')}});
        }
    }
});
//store_usuarios.load();

//var nombre = new Ext.form.TextField({disabled:true});

//var apellido = new Ext.form.TextField({disabled:true});

var indicadorTextField = new Ext.form.TextField({
	enableKeyEvents:true,
	maskRe:/[a-z_]/i,
	listeners:{
	     keyup:{
			fn: function(field,e){
				field.setValue(field.getValue().toUpperCase());
				Ext.Ajax.request({
					url: 'php/UsuariosInterfaz.php',
					params:{
						accion:'datosLDAP',
						filter:'',
						tx_usuario:field.getValue()
					},
					success: function(response,options){
						obj = Ext.util.JSON.decode(response.responseText);
						//console.log(obj);
						if(obj.Resultados.tx_indicador)
							store_usuarios.getAt(row).set('tx_indicador',obj.Resultados.tx_indicador);
							//nombre.setValue(obj.Resultados.tx_nombre);
						else
							store_usuarios.getAt(row).set('tx_indicador',(''));
						if(obj.Resultados.tx_usuario)
						    store_usuarios.getAt(row).set('tx_usuario',obj.Resultados.tx_usuario);
						
							//apellido.setValue(obj.Resultados.tx_apellido);
						else
							store_usuarios.getAt(row).set('tx_usuario',(''));
					}										
				});
			}
		}
	}
});
//Combo ubicacion
var ComboUbicacionTotal= GetComboGrid('ubicacion_total','co_ubicacion_total','');
ComboUbicacionTotal.on('select', function(combo,record,index){
	sm = grid_usuarios.getSelectionModel();
	fila = sm.getSelected();
	fila.set('co_ubicacion',record.data.co_ubicacion_total);
});
//Combo organizacion
var ComboOrganizacion= GetComboGrid('organizacion','co_organizacion','');
ComboOrganizacion.on('select', function(combo,record,index){
	sm = grid_usuarios.getSelectionModel();
	fila = sm.getSelected();
	fila.set('co_organizacion',record.data.co_organizacion);
});
//Combo supervisor
var ComboSupervisor= GetComboGrid('supervisor','co_supervisor','');
ComboSupervisor.on('select', function(combo,record,index){
	sm = grid_usuarios.getSelectionModel();
	fila = sm.getSelected();
	fila.set('co_supervisor',record.data.co_supervisor);
});
//Combo rol
var ComboRol= GetComboGrid('rol','co_rol','');
ComboRol.on('select', function(combo,record,index){
	sm = grid_usuarios.getSelectionModel();
	fila = sm.getSelected();
	fila.set('co_rol',record.data.co_rol);
});
/*var comboRol = new Ext.form.ComboBox({
        store: new Ext.data.JsonStore({
			url: 'php/CombosDinamicos.php',
			root: 'Resultados',
			idProperty: 'co_rol',
			baseParams: {accion:'rol'},
			fields:['co_rol','tx_rol']
		}),
        displayField:'tx_rol',
        typeAhead: true,
        allowBlank: false,
        mode: 'remote',
        forceSelection: true,
        triggerAction: 'all',
        emptyText:'Selecione...',
        selectOnFocus:true,
        
        listeners:{Cambiamos el valor de co_comision en store_agenda                              
			select: function(combo,record,index){
			fila = grid_usuarios.getSelectionModel();
			celda = fila.getSelectedCell();
			grid_usuarios.store.getAt(celda[0]).set('co_rol',record.data.co_rol);
			}
		}
	});*/
/*var comboActivo = new Ext.form.ComboBox({
        store: new Ext.data.JsonStore({
			url: 'php/CombosDinamicos.php',
			root: 'Resultados',
			idProperty: 'co_estatus_usuario',
			baseParams: {accion:'activo'},
			fields:['co_estatus_usuario','tx_estatus_usuario']
		}),
        displayField:'tx_estatus_usuario',
        typeAhead: true,
        allowBlank: false,
        mode: 'remote',
        forceSelection: true,
        triggerAction: 'all',
        emptyText:'Selecione',
        selectOnFocus:true,
        
        listeners:{                             
			select: function(combo,record,index){
			fila = grid_usuarios.getSelectionModel();
			celda = fila.getSelectedCell();
			grid_usuarios.store.getAt(celda[0]).set('co_estatus_usuario',record.data.co_estatus_usuario);
			}
		}
	});*/
var grid_usuarios = new Ext.grid.EditorGridPanel({   // grid  usuarios
        id:'grid_usuarios', //identificacion del var grid_usuario = new Ext.grid.EditorGridPanel
		name:'grid_usuarios',
		sm: new Ext.grid.RowSelectionModel(),
        store: store_usuarios,
        width: 1050,
        height: 750,
        region:'center',
        margins: '0 5 5 5',
        clicksToEdit: 1,
     //   plugins: [editor_grid_usuarios],
        tbar: [{
            iconCls: 'agenda-add',
            text: 'Nuevo Usuario', // boton Agregar Agenda
            handler: function(){
				//store_agenda.setBaseParam('accion','insertar');
                var record = new grid_usuarios.store.recordType();
				grid_usuarios.store.insert(0, record);   // permite posicionarse en la fila correspondiente
				grid_usuarios.getView().getRowClass=function (record,index,rowParams,store){
					if(index==0)
						return 'red-row';
					else
						return '';
				}
				//editor_grid_agenda.startEditing(0);   // permite editar el recordType en la posición que se le asigne.
            }
        }, '-', {
			iconCls: 'guardar',
			text: 'Guardar Usuario',
			id: 'guardarr',
		    handler: function(){
			
				Ext.MessageBox.confirm("[CONTRATOS]","Guardar ?", function(btn){
					if(btn == 'yes'){
						records_modificados=store_usuarios.getModifiedRecords();
						Ext.each(records_modificados,function(fila,i){
							if(fila.data.tx_indicador==undefined || fila.data.tx_usuario==undefined ){
								WinError("Debe completar toda la informaci&oacute;n");
							}
							else{
								if(fila.data.co_usuario==null )
									accion='insertar';
								else
									accion='modificar';
								store_usuarios.reload({
									params:{
										accion:accion,
										condicion:fila.data.co_usuario,
										filter:'',
										Resultados:Ext.util.JSON.encode(fila.getChanges())
									}
								});			
								fila.commit();				
								grid_usuarios.getView().getRowClass=function (record,index,rowParams,store){
								return '';
							}
						  }
						});
					}
				});
				
			}
		}, '-',{
           //ref: '../removeBtn',
            iconCls: 'eliminar-usuario-add',
            text: 'Eliminar Usuario',                         // boton Eliminar Agenda
          /* handler: function(){
				Ext.MessageBox.confirm("[CONTRATOS]","Desea Eliminar El Usuario ?", function(btn){
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
        }],*/
           
            
             handler: function () {
						var rec = grid_usuarios.getSelectionModel().getSelected();
						if (!rec) {
							return false;
						}
						//grid_usuarios.store.remove(rec);
						grid_usuarios.store.reload({            // manda a recargar el store_agenda 
							params:{
								co_usuario:rec.get('co_usuario'),  //  elimina y se ubica en la celda 0
								accion:'eliminar'
							}
						});
						//alert(rec.get('co_usuario'));
						
            //disabled: true,
            /*handler: function(){
				Ext.MessageBox.confirm("Desea Eliminar El Usuario ?", function(btn){
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
		});*/
					
				
            }
        }
        ],
        
// Columnas del grid_usuarios
        columns: [
        new Ext.grid.RowNumberer(),
        {
            header: 'Indicador',
            dataIndex: 'tx_indicador',
	    width: 120,
            sortable: true,
            editor: indicadorTextField,//new Ext.form.TextField,
            disabled:true
        },{
            header: 'Nombre',
            dataIndex: 'tx_usuario',
            //align: 'center',
            width: 160,
            //editor: new Ext.form.TextField,
            disabled:true
        },{
           header: 'Ubicaci&oacute;n',
            dataIndex: 'tx_ubicacion',
            width: 160,
            sortable: true,
            editor:ComboUbicacionTotal,
            disabled:true
                      
        },{
           header: 'Organizaci&oacute;n',
            dataIndex: 'tx_organizacion',
            width: 160,
            sortable: true,
            editor:ComboOrganizacion,
            disabled:true
                      
        },{
           header: 'Supervisor',
            dataIndex: 'tx_supervisor',
            width: 160,
            sortable: true,
            editor:ComboSupervisor,
            disabled:true
                      
        },{
           header: 'Rol',
            dataIndex: 'tx_rol',
            width: 160,
            sortable: true,
            editor:ComboRol,
            disabled:true
                      
        }],
		listeners: {
	        rowclick : function(Grid,rowIndex,e) {
				row=rowIndex;
	        }
	    }
    });  
