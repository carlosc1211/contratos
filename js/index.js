var loadMask = new Ext.LoadMask(Ext.getBody(), {msg:"Por favor espere..."});
var imagen = new Ext.BoxComponent ({autoEl: {tag: 'img', src: 'images/imagen3.png'}}); 

//myMask.show();
Ext.onReady(function() {
	//WinLogin.show();
	//WinProceso.show();
	var index = new Ext.Viewport({
	layout:'border',
	
	
	items:[
	{
		region:'center',
		xtype: 'grouptabpanel',
		id:'grouptabpanel',
    	tabWidth: 150,
    	activeGroup: 0,
    	/*listeners: {
					'click':function(){
					alert('aqui');
					}
					},*/
    	items: [{
    		mainItem: 0,
    		
    		items: [
    		{
            title: 'Men&uacute;..',
            tabTip: 'Dashboard tabtip',           
            layout: 'fit',
            items: [imagen]
            },
            {
    		title: 'Planificaci&oacute;n',
    		id:'menu_planificacion',
    		name:'menu_planificacion',
    		iconCls: 'x-icon-tickets',
            tabTip: 'Gesti&oacute;n general  de la Planificaci&oacute;n',
            style: 'padding: 10px;',	
            layout: 'fit',//layout: 'fit', "mediante esta configuraciÃ³n todos los elementos que contenga el panel se ajustarÃ¡n en ancho y alto para ocupar el tamaÃ±o del panel"
             	//llamado al Formulario
               
                items: [{
                         xtype: 'panel',
                         height: 469, 
                          width: 644,
                          title: 'Gesti&oacute;n del Proceso de Planificaci&oacuten',
                    
						}],	
			    items: [grid_planificacion]	
			 },
			 {
    			title: 'Contrataci&oacute;n',
    			id:'menu_contratacion',
    			name:'menu_contratacion',
				//disabled:true, //bloquea el campo
                layout: 'fit',
                iconCls: 'x-icon-tickets',
                tabTip: 'Gesti&oacute;n de Proceso de Contrataci&oacuten',
                style: 'padding: 10px;',
             items: [{
                         xtype: 'panel',
                         height: 469,
                          width: 644,
                          title: 'Gesti&oacute;n del Proceso de Contrataci&oacuten',
                    
						}],	
				items: [contra],
    		},
    		{
    			title: 'Adm. de Contratos',
    			id:'menu_administracion_contratos',
    			name:'menu_administracion_contratos',
				disabled:false,
                layout: 'fit',
                iconCls: 'x-icon-users',
                tabTip: 'Gesti&oacute;n del Proceso de Administraci&oacute;n de Contratos',
                style: 'padding: 10px;',
                 items: [simple]  		
    		},
    		]},
    		
    		{
    		expanded: true,
    		items:[{
				title: 'Reportes y Graficas',
				id:'menu_reportes',
                iconCls: 'x-icon-configuration',
                tabTip: 'Configuration tabtip',
                style: 'padding: 10px;'//,                    html: Ext.example.shortBogusMarkup 
            },
    		
    		{
    			title: 'Informes y Reportes',
    			id:'menu_reporte',
    			name:'menu_reporte',
				//disabled:true,
                iconCls: 'x-icon-users',
                tabTip: 'Generar Informes y Reportes de los Procesos',
                style: 'padding: 10px;',//,    				//html: Ext.example.shortBogusMarkup			
				items:[panel_informe]				
    		},
    		{
				title: 'Gr&aacute;ficas',
				id:'menu_graficas',
				name:'menu_graficas',
				//disabled:true,
                iconCls: 'x-icon-users',
                tabTip: 'Gesti&oacute;n General de Gr&aacute;ficas',
				style: 'padding: 10px;',
				items:[container_reportes]
			},
			]},		
    		
    	{
			expanded: true,
            
            items: [{
				title: 'Administraci&oacute;n',
				id:'menu_administracion',
                iconCls: 'x-icon-configuration',
                tabTip: 'Configuration tabtip',
                style: 'padding: 10px;'//,                    html: Ext.example.shortBogusMarkup 
            },{
                title: 'Usuarios',
                id:'menu_usuarios',
    			name:'menu_usuarios',
                iconCls: 'x-icon-templates',
                tabTip: 'Administracion de Usuarios',
                style: 'padding: 10px;',//                   html: Ext.example.shortBogusMarkup
                items: [grid_usuarios]
			},{
				title: 'Tablas',
    			id:'menu_tablas',
    			name:'menu_tablas',
    			iconCls: 'x-icon-tickets',
                tabTip: 'Administracion General de Tablas',
                style: 'padding: 10px;',	
                layout: 'fit',//layout: 'fit', "mediante esta configuraciÃ³n todos los elementos que contenga el panel se ajustarÃ¡n en ancho y alto para ocupar el tamaÃ±o del panel"
             	//llamado al Formulario
               items: [{
                         xtype: 'panel',
                         height: 469,
                          width: 644,
                          title: 'Administracion General de Tablas',
                    
						}],	
			    items: [grid_tablas]
			},
            ]},
		
		]},
		 {
			region: 'south',
			xtype: 'statusbar',
			items: [{
					xtype   : 'label',
					html    : '<b>Fecha:</b>&nbsp;'
				},{
					xtype   : 'label',
					id:'statusbarFecha',
					text    : ''
				},'-',' ',' ',{
					xtype   : 'label',
					html    : '<b>Nombre:</b>&nbsp;'
				}				
				,{
					xtype: 'label',
					id      : 'statusbarIndicador',
					text    : ''/*,
					handler : function() {

						new Ext.Window({
							title      	: 'Datos de Usuario',
							width      	: 400,
							height     	: 200,
							expandible 	: true,
							layout     	: 'fit',
							modal      	: false,
							draggable  	: false,
							resizable  	: false,
							modal		: true,
							html       	: '<h1>Info. NO Disponible en estos momentos</h1>'
						}).show();
						
					}*/
				},
				{
					xtype: 'label',
					id: 'indicadorSesion',
					hidden:true
				}
		
				,'-',' ',' ',{
					xtype   : 'label',
					html    : '<b>Rol:</b>&nbsp;'
				},{
					xtype   : 'label',
					id      : 'statusbarRol',
					text    : ''
				},'-',' ',' ',{
					text    : '<b>Salir</b>&nbsp;',
					handler : function() {
                                                cerrar_sesion();
						Ext.getCmp('tx_usuario').setValue('');
						Ext.getCmp('tx_password').setValue('');
						Ext.getCmp("buttonIngresar").disable();
						Ext.getCmp("co_rol").disable();
						Ext.getCmp("co_rol").store.removeAll();
						Ext.getCmp("co_rol").reset();
						WinLogin.show();
					}
			}]
		}
	]
	
});
WinLogin.on({'show':function(){
			Ext.getCmp('tx_usuario').focus(true);
		}
	});
	
});	
