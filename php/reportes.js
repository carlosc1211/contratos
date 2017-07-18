//PANEL REPORTES XLS
 var reportesxls = new Ext.Panel({
		//renderTo: document.body,
		iconCls: 'reportes-add',
		//title: 'Reportes',
		width: 1000,
		//~ height: 400,
		//~ maximizable: true,
		//~ modal: true,
		//~ closeAction: 'hide',
		//resizable: false,
		minWidth: 500,
		minHeight: 350,
		maximized: false,
		constrain: true,
        //items:[checkboxes],
        id:'btn_Generar_Reportes',
        buttonAlign: 'center',
        buttons:[
			{text:'GenerarReportes',
			handler: function(){
                window.location = 'php/reportesxls.php';}
			}]        			
		});
