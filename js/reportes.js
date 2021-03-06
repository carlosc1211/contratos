//libreria Highcharts se utilizo en las graficas
	Ext.QuickTips.init();
//------------------------------------------------------------------------	
//PANEL GRAFICA
		var panelGrafica = new Ext.Panel({
		id: 'panelGrafica',
		width: '100%',
		height: 700,
		layout:'form',
		align:'center'
	});
//------------------------------------------------------------------------
function crearGraficaTorta(array, titulo, subtitulo) {
	//alert(titulo);
		var now = new Date();
		chart = new Highcharts.Chart({ 
			colors: [	'#4572A7','#AA4643','#89A54E','#80699B','#3D96AE',
						'#DB843D','#92A8CD','#A47D7C','#B5CA92','#058DC7',
						'#50B432','#ED561B','#DDDF00','#24CBE5','#64E572',
						'#FF9655','#FFF263','#6AF9C4','#CD5C5C','#FF0000',
						'#FF1493','#FF4500','#FFD700','#FFEFD5','#BDB76B',
						'#E6E6FA','#4B0082','#ADFF2F','#2E8B57','#66CDAA',
						'#00FFFF','#1E90FF','#000080','#B0C4DE','#FFDEAD',
						'#BC8F8F','#D2691E','#A52A2A','#2F4F4F','#FAEBD7'],
			chart: {
				height:520,
				renderTo: 'panelGrafica',
				plotBackgroundColor: null,
				plotBorderWidth: null,
				plotShadow: false
			},
			title:{
				text:titulo
			},
			subtitle:{
				text:subtitulo
			},
			credits: {
				text: 'http://localhost/contratos '+now.format("d/m/Y H:i:s"),
				href: ''
			},
			tooltip: {
				formatter: function () {
					return /*'<b>' + this.point.name + '</b>: ' +*/this.percentage.toFixed(1) + '%';
				}
			},
			plotOptions: {
				pie: {
						stacking:'percent',
						allowPointSelect: true,
						cursor: 'pointer',
						dataLabels: {
							enabled: true,
							color: '#000000',
							connectorColor: '#000000',
							formatter: function () {
							return /*'<b>' + this.point.name + '</b>: ' +*/ this.percentage.toFixed(1) + '%';					
						}
					},
					showInLegend:true,
				}
			},
			exporting: {
				url: 'http://167.175.215.199/exporting-server/index.php'
			},
			series: [{
				type: 'pie',
				name: 'Browser share',
				data: array
			}]
		});
	}
//--------------------------------------------------------
function crearGraficaBarraMulti(array, titulo, subtitulo) {
		var now = new Date();
		chart = new Highcharts.Chart({
			colors: [	'#4572A7','#AA4643','#89A54E','#80699B','#3D96AE',
						'#DB843D','#92A8CD','#A47D7C','#B5CA92','#058DC7', 
						'#50B432','#ED561B','#DDDF00','#24CBE5','#64E572', 
						'#FF9655','#FFF263','#6AF9C4','#CD5C5C','#FF0000',
						'#FF1493','#FF4500','#FFD700','#FFEFD5','#BDB76B',
						'#E6E6FA','#4B0082','#ADFF2F','#2E8B57','#66CDAA',
						'#00FFFF','#1E90FF','#000080','#B0C4DE','#FFDEAD',
						'#BC8F8F','#D2691E','#A52A2A','#2F4F4F','#FAEBD7'],
			chart: {
				height:350,
				renderTo: 'panelGrafica',
				defaultSeriesType: 'column'
			},
			title: {
				text: titulo
			},
			subtitle: {
				text: subtitulo
			},
			xAxis: {
				categories:array.categoria,
				labels: {
					rotation: -30,
					align: 'right',
					style: {
						font: 'normal 9px Verdana, sans-serif'
					}
				 }
			},
			yAxis: {
				min: 0,
				allowDecimals: true,
				title: {
					text: 'Cantidad (Nro)'
				}
			},
			plotOptions: {
						line: {
							dataLabels: {
								enabled: true
							},
							enableMouseTracking: false
						}
			},
			credits: {
				text: 'http://localhost/contratos '+now.format("d/m/Y H:i:s"),
				href: ''
			},
			tooltip: {
				formatter: function () {
					return '' + this.series.name + ': ' + this.y + '';
				}
			},
			exporting: {
				url: 'http://167.175.215.199/exporting-server/index.php'
			},
			plotOptions: {
				/*series: {
					stacking: 'normal'					
				 },*/
				column: {
					dataLabels: {
						color: '#000000',
						enabled: true,
						style: {
							font: 'normal 8px Verdana, sans-serif'
						}
					
					},
					pointPadding: 0.2,
					borderWidth: 0,
				}
			},
			series: array.data
			});
	} 

//~ //--------------------------------------------------------
function crearGraficaBarra (array, titulo, subtitulo){
		 var now = new Date();
		 chart = new Highcharts.Chart({
			 colors: [	 '#4572A7','#AA4643','#89A54E','#80699B','#3D96AE',
						 '#DB843D','#92A8CD','#A47D7C','#B5CA92','#058DC7', 
						 '#50B432','#ED561B','#DDDF00','#24CBE5','#64E572', 
						 '#FF9655','#FFF263','#6AF9C4','#CD5C5C','#FF0000',
						 '#FF1493','#FF4500','#FFD700','#FFEFD5','#BDB76B',
						 '#E6E6FA','#4B0082','#ADFF2F','#2E8B57','#66CDAA',
						 '#00FFFF','#1E90FF','#000080','#B0C4DE','#FFDEAD',
						 '#BC8F8F','#D2691E','#A52A2A','#2F4F4F','#FAEBD7'],
			 chart: {
				height:350,
				renderTo: 'panelGrafica',
				defaultSeriesType: 'column',
				
			 },
			 title: {
				 text: titulo
			 },
			 subtitle: {
				 text: subtitulo
			 },
			 xAxis: {
				 categories: [
				 ' ']
			 },
			 yAxis: {
				 min: 0,
				 allowDecimals: false,
				 title: {
				 text: 'Cantidad (Nro)'
				 }
			 },
			credits: {
			 text: 'http://localhost/contratos '+now.format("d/m/Y H:i:s"),
			 href: ''
			},
			tooltip: {
			 formatter: function () {
			 return '' + this.series.name + ': ' + this.y + '';
			 }
			 },
			legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
			exporting: {
				
				url: 'http://167.175.215.199/exporting-server/index.php'//ruta para descargar la imagen
			 },
			 plotOptions: {
				 column: {
				dataLabels: {
				 color: '#000000',
						 enabled: true,
						 style: {
						 font: 'normal 12px Verdana, sans-serif'
						 }
					 },
					 pointPadding: 0.3,
					 borderWidth: 0
				 }
			 },
			 series: array
		 });
	 }

 //--------------------------------------------------------
function crearGraficaLinea(array, titulo, subtitulo) {
		var now = new Date();
		chart = new Highcharts.Chart({
			chart: {
				height:350,
				renderTo: 'panelGrafica',
				defaultSeriesType: 'line'
			},
			title: {
				text: titulo
				
			},
			subtitle: {
				text: subtitulo
				
			},
			xAxis: {
				
				categories:array.categoria
			},
			yAxis: {
				min: 0,
				allowDecimals: false,
				title: {
					text: 'Cantidad (Nro)'
				}
			},
			credits: {
				text: 'http://localhost/contratos '+now.format("d/m/Y H:i:s"),
				href: ''
			},
			tooltip: {
				formatter: function () {
					return '' + this.series.name + ': ' + this.y + '';
				}
			},
			legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
			exporting: {
				//url: 'http://167.175.215.199/exporting-server/index.php'
			},
			plotOptions: {
         line: {
			 dataLabels: {
				 enabled: true
            },
            enableMouseTracking: true
         }
      },
			series: array.data
		});
	}
//~ //------------------------------------------------------------------------------------------
function crearGrafica(tipoGrafica, titulo, subtitulo){
	Ext.Ajax.request({
		url:'php/generador_grafica.php',
		params:{
			tipo:tipoGrafica,
			base: Ext.getCmp('base_grafica').getValue(),
			fe_ini: Ext.getCmp('fe_ini').getRawValue(),
			fe_fin: Ext.getCmp('fe_fin').getRawValue(),
			localidad: Ext.getCmp('co_unidad_reporte').getValue()
		},
		success: function(response){
			array = Ext.decode(response.responseText);
			
			switch(tipoGrafica){
				case 1:
				crearGraficaLinea(array,titulo,subtitulo);
				break;
				case 2:
				if(Ext.getCmp('base_grafica').getValue()!=5 && Ext.getCmp('base_grafica').getValue()!=7 && 
				Ext.getCmp('base_grafica').getValue()!=8 && Ext.getCmp('base_grafica').getValue()!=9 && Ext.getCmp('base_grafica').getValue()!=10)
				crearGraficaBarra(array,titulo,subtitulo);	
				else
				crearGraficaBarraMulti(array,titulo,subtitulo);
				break;
				case 3:
				crearGraficaTorta(array,titulo,subtitulo);
				break;
			}
		},
		failure: function(){
		//console.log('failure');
	}
});
}
//-----------------------------------------------------------------------------------

	
store=new Ext.data.ArrayStore({
					
					id: 0,
					fields: ['id','valor'],
					data: 	[[1, 'PLANIFICACION'],
							[2, 'CONTRATACION'],
							[3, 'ADMINISTRACION DE CONTRATOS']]
				});
		
		var Unidades =	[[1, 'PLANIFICACION'],
						[2, 'CONTRATACION'],
						[3, 'ADMINISTRACION DE CONTRATOS']];
	
		var DataLineal= [[7, 'Plan Vrs Real']

						];
		
		var DataBarra = [[1, 'PRIORIDAD'],
						[2, 'ORGANIZACION'],
						[3, 'MODALIDAD'],
						[4, 'NATURALEZA'],
						[6, 'UBICACION'],
						[7, 'PLAN-REAL'],
						[5, 'PRIORIDAD VS ORGANIZACION'],
						[8, 'NATURALEZA VS ORGANIZACION'],
						[9, 'MODALIDAD VS ORGANIZACION'],
						[10, 'UBICACION VS ORGANIZACION']
						];
				
	var DataCircular =	[[1, 'PRIORIDAD'],
						[2, 'ORGANIZACION'],
						[3, 'MODALIDAD'],						
						[4, 'NATURALEZA'],
						[6, 'UBICACION']	
						];

//-----------------------------------------------------------------------------------
//CONTAINER REPORTES
var container_reportes = new Ext.FormPanel({
	title: 'Graficas',
	id:'formulario_reportes',
	width:'100%',
	border:false,
	
	items:[{
		xtype:'fieldset',
		autoheight:true,
		//layout: 'form',
			
			items:[{
				columnWidth: .5,
				layout:'form',
				frame: false,
				border: false,
				items: [{
					xtype: 'datefield',
					id: 'fe_ini',
					name: 'fe_ini',
					width: 195,
					//height:195,
					fieldLabel: 'Fecha Inicio'
					}]
			},{
				columnWidth: .5,
				layout: 'form',
				border: false,
				//frame: true,
				items: [{
					xtype: 'datefield',
					id: 'fe_fin',
					name: 'fe_fin',
					width: 195,
					fieldLabel: 'Fecha Fin'
					}]
			},{
				xtype: 'combo',
				id: 'tipo_grafica',
				name: 'tx_unidad_reporte',
				fieldLabel: 'Tipo de Gr&aacute;fica',
				//hiddenName: 'nb_distrito',
				valueField: 'id',
				store: new Ext.data.ArrayStore({
					id: 0,
					fields: ['id','valor'],
					data: 	[[1, 'LINEAL'],
							[2, 'BARRAS'],
							[3, 'CIRCULAR']]
				}),
				mode: 'local',
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
				
				
				
				listeners: {
					select: {
						fn: function(combo,record,index){
							Ext.getCmp('base_grafica').clearValue();
							//Ext.getCmp('estado_grafica').clearValue();
							Ext.getCmp('co_unidad_reporte').clearValue();
							store.removeAll();
							switch(index){
								case 0:
									Ext.getCmp('base_grafica').enable();
									//Ext.getCmp('estado_grafica').disable();
									Ext.getCmp('co_unidad_reporte').enable();
									store.loadData(DataLineal);
									//storeLocalidad.load({});
								break;
								case 1:
									Ext.getCmp('base_grafica').enable();
									Ext.getCmp('co_unidad_reporte').enable();
									store.loadData(DataBarra);
									//store_unidad_reporte.load({});
								break;
								case 2:
									Ext.getCmp('base_grafica').enable();
									Ext.getCmp('co_unidad_reporte').enable();
									store.loadData(DataCircular);
								break;
							}
						}
					}
				}
			
			
			
			},{
				columnWidth:.5,
				layout: 'form',
				border: false,
				//frame: true,
				width: 375,
				items:[GetCombo('co_unidad_reporte','co_unidad_reporte','Unidad de Reporte', true)],
				listeners: {
					select: {
						fn: function(combo,record,index){
							Ext.getCmp('base_grafica').clearValue();
							//Ext.getCmp('estado_grafica').clearValue();
							Ext.getCmp('co_unidad_reporte').clearValue();
							store.removeAll();
							switch(index){
								case 0:
									//Ext.getCmp('base_grafica').enable();
									//Ext.getCmp('estado_grafica').disable();
									Ext.getCmp('co_unidad_reporte').enable();
								//	store.loadData(DataLineal);
									//storeLocalidad.load({});
								break;
								case 1:
									Ext.getCmp('base_grafica').enable();
									Ext.getCmp('tipo_grafica').enable();
									store.loadData(DataBarra);
									//store_unidad_reporte.load({});
								break;
								case 2:
									Ext.getCmp('base_grafica').enable();
									Ext.getCmp('co_unidad_reporte').enable();
									store.loadData(DataCircular);
								break;
							}
						}
					}
				}
			},{
				xtype: 'combo',
				id: 'base_grafica',
				name: 'base_grafica',
				fieldLabel: 'Informacion Base',
				disabled:true,
				valueField: 'id',
				store:store,
				mode: 'local',
				triggerAction: 'all',
				listWidth:195,
				typeAhead: true,
				displayField: 'valor',
				width: 195,
				tabIndex: 10,
				selectOnFocus: true,
				emptyText: 'Seleccione...',
				forceSelection: true,
				editable: false,
				allowBlank: false,
				listeners: {
					/*select: {
						fn: function(combo,record,index){
							Ext.getCmp('estado_grafica').enable();
							if(index==0){
								//Ext.getCmp('estado_grafica').clearValue();
								//Ext.getCmp('estado_grafica').disable();
								//Ext.getCmp('unidad_reporte').enable();
							}
							else{
								//Ext.getCmp('estado_grafica').enable();
								//Ext.getCmp('unidad_reporte').disable();
							}
							if(index==1){
								Ext.getCmp('estado_grafica').clearValue();
								Ext.getCmp('estado_grafica').disable();
							}
							if(index==5){
								storeEstado.load({params:{tipo_estado:2}});
							}
							else{
								storeLocalidad.load({});
								storeEstado.load({params:{tipo_estado:1}});
							}
							if(index==7){
								Ext.getCmp('estado_grafica').clearValue();
								Ext.getCmp('estado_grafica').disable();
							}
						}
					}*/
				}
			},/*{
				xtype: 'combo',
				id: 'unidad_reporte',
				anchor: '30%',
				name: 'unidad_reporte',
				fieldLabel: 'Localidad',
				disabled:true,
				//hiddenName: 'tx_unidad_reporte',
				valueField: 'co_unidad_reporte',
				//store: store_unidad_reporte,
				mode: 'local',
				triggerAction: 'all',
				typeAhead: true,
				displayField: 'tx_unidad_reporte',
				width: 120,
				listWidth: 250,
				tabIndex: 10,
				selectOnFocus: true,
				emptyText: 'Seleccione...',
				forceSelection: true,
				editable: false,
				allowBlank: false
			},*/
			{	columnWidth:1,
				border: false,
				layout: 'form',
				items:[{
					buttonAlign: 'center',
					border: false,
					buttons:[{
					text: 'Graficar',
							handler: function(){
							tipoGrafica=Ext.getCmp('tipo_grafica').getValue();
							cad='';
					/*if(Ext.getCmp('base_grafica').getValue()!=1){
						cad=Ext.getCmp('estado_grafica').getRawValue();
						if(cad=='""')
							cad='Recibidos'
					}	*/	
					titulo='PROCESOS '+cad+' DE '+Ext.getCmp('co_unidad_reporte').getRawValue();
					if(tipoGrafica==1){
						titulo='Plan Vrs Real';
					}
					if(Ext.getCmp('base_grafica').getValue()==8){
						titulo='Documentos Gestionados';
					}
					if(Ext.getCmp('co_unidad_reporte').getValue()!=''){
						titulo+=' (POR '+Ext.getCmp('base_grafica').getRawValue()+')';
					}
					subtitulo='Desde '+Ext.getCmp('fe_ini').getRawValue() +cad+ ' al '+Ext.getCmp('fe_fin').getRawValue();
					crearGrafica(tipoGrafica, titulo, subtitulo);
					}
				}
				
				
				/*{
					text: 'Generar Reporte',
								id: 'boton_Generar_Reporte_WinReporte',
								listeners:{
										'click': function(){
										}
									}
								}
								*/]
           },panelGrafica]
}]}]});
		
//----------------------------------------------------------------------------------
//EVENTOS DEL PANEL
//Ext.getCmp('co_unidad_reporte').on('select',function(combo,record,index){
	//Ext.getCmp('co_tipo_grafico').setValue(record.data.co_unidad_reporte);});
//--------------------------------------------------------------------------------
//PANEL REPORTES XLS
 var planificacionxls = new Ext.Panel({
		renderTo: document.body,
		iconCls: 'reportes-add',
		//title: 'Reportes',
		width: 600,
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
                window.location = 'php/planificacionxls.php';}
			}]
		});
	
//PANEL REPORTES XLS
 var contratacionxls = new Ext.Panel({
		renderTo: document.body,
		iconCls: 'reportes-add',
		//title: 'Reportes',
		width: 600,
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
                window.location = 'php/contratacionxls.php';}
			}]
		});
//PANEL REPORTES XLS
 var administracionxls = new Ext.Panel({
		renderTo: document.body,
		iconCls: 'reportes-add',
		//title: 'Reportes',
		width: 600,
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
                window.location = 'php/administracionxls.php';}
			}]        			
		});
