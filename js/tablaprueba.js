store = new Ext.data.JsonStore({

		id:'store',
		url:'tablaInterfaz.php',
		root:'columnas',
		totalProperty:'total',
		idProperty:'co_rol',
		fields:[
		{name:'Codigo',type:'interger'},
		{name:'Nombre',type:'string'},
		]
});
/*
var comboRemote = new Ext.form.ComboBox({
	fieldLabel:'Tablas',
	name:'cmb-DBs',
	forceSelection:true,
	store: store,
	emptyText:'Selecciona',
	triggerAction:'all',
	editable:false,
	displayField:'Codigo',
	valueField:'Codigo',
});
*/
var panelTabla = new Ext.Panel({
		id: 'panelTabla',
		width: '100%',
		height: 700,
		layout:'form',
		align:'center'
	});
var container_tablas = new Ext.FormPanel({
	id:'container_tablas',
	width:'100%',
	border:false,
	
	items:[{
		xtype: 'combo',
		id: 'store',
		name: 'cmb-DBs',
		fieldLabel: 'Tablas',
		//hiddenName: 'nb_distrito',
		valueField: 'Codigo',
		store: store,
		mode: 'remote',
		triggerAction: 'all',
		typeAhead: false,
		displayField: 'valor',
		width: 195,
		tabIndex: 10,
		listWidth:195,
		selectOnFocus: true,
		emptyText: 'Seleccione...',
		forceSelection: true,
		editable: false,
		allowBlank: false,
	}],

})