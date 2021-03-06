Ext.Ajax.timeout = 120000;

// 
// name: validar_sesion
// @param
// @return
function validar_sesion(){
	Ext.Ajax.request({
		url: 'php/validar_sesion.php',
		timeout:60000,
		callback: function(options, success, response) {
			var json = Ext.util.JSON.decode(response.responseText);
			if (json.success) {
				//console.log('sesion SI existe');
			}
			else{
				//console.log('sesion NO existe');
				WinLogin.show();
			}
		}
	});
}
// 
// name: validar_sesion
// @param
// @return
function cerrar_sesion(){
	Ext.Ajax.request({
		url: 'php/cerrar_sesion.php'
	});
}
// 
// name: desconocido
// @param
// @return
function formato_fecha(val){
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
function IsNumeric(expression)
{
	return (String(expression).search(/^\d+$/) != -1);
}
// 
// name: WinInfo
// @param mensaje: Mensaje que se quiere mostrar en la ventana
// @return Una ventana de Información con el mensaje recibido
function WinInfo(mensaje){
	Ext.Msg.show({
		title: 'Informaci&oacute;n',
		msg: mensaje,
		buttons: Ext.Msg.OK,
		animEl: 'elId',
		icon: Ext.MessageBox.INFO,
	});
}
// 
// name: WinError
// @param mensaje: Mensaje que se quiere mostrar en la ventana
// @return Una ventana de error con el mensaje recibido
function WinError(mensaje){
	Ext.Msg.show({
		title: 'ERROR',
		msg: mensaje,
		buttons: Ext.Msg.OK,
		animEl: 'elId',
		icon: Ext.MessageBox.ERROR
	});
}
// 
// name: GetCombo
// @param
// @return
function GetCombo(id,nombre,etiqueta,disabled){
	co_nombre=nombre;
	tx_nombre='tx_'+nombre.substring(3);
	accion=nombre.substring(3);
	disabled=disabled||false;
	var combo = new Ext.form.ComboBox({
		name: id,
		id: id,
		emptyText: 'Seleccione...',
		//hiddenName: nombre+"hide",
		//forceSelection: true,
		//value:co_nombre,
		valueField:co_nombre,
		fieldLabel:etiqueta,
		displayField:tx_nombre,
		editable: false,
		disabled: disabled,
		anchor: '80%',
		listWidth:220,
		typeAhead:true,
		mode: 'remote',
		triggerAction:'all',
	
	store: new Ext.data.JsonStore({
		url: 'php/CombosDinamicos.php',
		root: 'Resultados',
		idProperty: co_nombre,
		baseParams: {
					accion: accion
		            },
		fields: [co_nombre, tx_nombre]
		})
});
	return combo;
}
// 
// name: GetCombo
// @param
// @return
function GetComboXY(id,nombre,accion,disabled,x,y){
	co_nombre=nombre;
	tx_nombre='tx_'+nombre.substring(3);
	accion=accion;
	disabled=disabled||false;
	var combo = new Ext.form.ComboBox({
		name: id,
		id: id,
		emptyText: 'Seleccione...',
		valueField:co_nombre,
		fieldLabel:'',
		displayField:tx_nombre,
		editable: false,
		disabled: disabled,
		width:160,
		listWidth:220,
		typeAhead:true,
		mode: 'local',
		triggerAction:'all',
		x:x,
		y:y,
	store: new Ext.data.JsonStore({
		url: 'php/CombosDinamicos.php',
		root: 'Resultados',
		idProperty: co_nombre,
		baseParams: {
					accion: accion
		            },
		fields: [co_nombre, tx_nombre]
		})
});
	return combo;
}
// 
// name: GetCombo
// @param
// @return
function GetComboDinamico(id,nombre,etiqueta,accion,disabled,mode){
	co_nombre=nombre;
	tx_nombre='tx_'+nombre.substring(3);
	accion=accion;
	disabled=disabled||false;
	mode=mode||'remote';
	//console.log(id+'->'+mode);
	var combo = new Ext.form.ComboBox({
		name: id,
		id: id,
		emptyText: 'Seleccione...',
		//hiddenName: nombre+"hide",
		//forceSelection: true,
		//value:co_nombre,
		valueField:co_nombre,
		fieldLabel:etiqueta,
		displayField:tx_nombre,
		editable: false,
		disabled: disabled,
		anchor: '80%',
		listWidth:220,
		typeAhead:true,
		mode: mode,
		triggerAction:'all',
	
	store: new Ext.data.JsonStore({
		url: 'php/CombosDinamicos.php',
		root: 'Resultados',
		autoLoad:true,
		idProperty: co_nombre,
		baseParams: {
					accion: accion
		            },
		fields: [co_nombre, tx_nombre]
		})
});
	return combo;
}
// 
// name: GetCombo
// @param
// @return
function GetComboForm(id,nombre,etiqueta,disabled){
	co_nombre=nombre;
	tx_nombre='tx_'+nombre.substring(3);
	accion=nombre.substring(3);
	disabled=disabled||false;
	var combo = new Ext.form.ComboBox({
		name: id,
		id: id,
		emptyText: 'Seleccione...',
		hiddenName: nombre,
		//forceSelection: true,
		//value:co_nombre,
		valueField:co_nombre,
		fieldLabel:etiqueta,
		displayField:tx_nombre,
		editable: false,
		disabled: disabled,
		anchor: '80%',
		listWidth:220,
		typeAhead:true,
		mode: 'remote',
		triggerAction:'all',
	
	store: new Ext.data.JsonStore({
		url: 'php/CombosDinamicos.php',
		root: 'Resultados',
		idProperty: co_nombre,
		baseParams: {
					accion: accion
		            },
		fields: [co_nombre, tx_nombre]
		})
});
	return combo;
}
// 
// name: GetCombo
// @param
// @return
function GetComboLocal(id,nombre,etiqueta,disabled){
	co_nombre=nombre;
	tx_nombre='tx_'+nombre.substring(3);
	accion=nombre.substring(3);
	disabled=disabled||false;
	var combo = new Ext.form.ComboBox({
		name: id,
		id: id,
		emptyText: 'Seleccione...',
		//hiddenName: nombre+"hide",
		//forceSelection: true,
		//value:co_nombre,
		valueField:co_nombre,
		fieldLabel:etiqueta,
		displayField:tx_nombre,
		editable: false,
		disabled: disabled,
		anchor: '80%',
		listWidth:220,
		typeAhead:true,
		mode: 'local',
		triggerAction:'all',
	
	store: new Ext.data.JsonStore({
		url: 'php/CombosDinamicos.php',
		root: 'Resultados',
		idProperty: co_nombre,
		baseParams: {
					accion: accion
		            },
		fields: [co_nombre, tx_nombre]
		})
});
	return combo;
}
// 
// name: GetCombo
// @param
// @return
function GetComboGrid(id,nombre,etiqueta,disabled){
	co_nombre=nombre;
	tx_nombre='tx_'+nombre.substring(3);
	accion=nombre.substring(3);
	disabled=disabled||false;
	var combo = new Ext.form.ComboBox({
		name: id,
		id: id,
		emptyText: 'Seleccione...',
		hiddenName: nombre+"hide",
		forceSelection: true,
		//value:co_nombre,
		valueField:tx_nombre,
		fieldLabel:etiqueta,
		displayField:tx_nombre,
		editable: false,
		disabled: disabled,
		anchor: '80%',
		listWidth:220,
		typeAhead:true,
		mode: 'remote',
		triggerAction:'all',
	
	store: new Ext.data.JsonStore({
		url: 'php/CombosDinamicos.php',
		root: 'Resultados',
		idProperty: co_nombre,
		baseParams: {
					accion: accion
		            },
		fields: [co_nombre, tx_nombre]
		})
});
	return combo;
}
// 
// name: GetComboParametros
// @param
// @return
function GetComboParametros(valor,nombre,alias,etiqueta){
	co_nombre=valor;
	tx_nombre=nombre;
	tx_alias=alias;
	accion=valor.substring(3);
	var combo = new Ext.form.ComboBox({
		name: co_nombre,
		id: co_nombre,
		emptyText: 'Seleccione..',
		//hiddenName: nombre+"hide",
		//forceSelection: true,
		valueField:valor,
		fieldLabel:etiqueta,
		displayField:tx_nombre,
		editable: false,
		anchor: '80%',
		listWidth:220,
		typeAhead:true,
		mode: 'remote',
		triggerAction:'all',
		store: new Ext.data.JsonStore({
			url: 'php/CombosDinamicos.php',
			root: 'Resultados',
			idProperty: co_nombre,
			baseParams: {
				accion: accion
			},
			fields: [co_nombre, tx_nombre,tx_alias]
		})
	});
	return combo;
}
// 
// name: GetComboTipo
// @param
// @return
function GetComboTipo(id,nombre,etiqueta,tipo){
	co_nombre=nombre;
	tx_nombre='tx_'+nombre.substring(3);
	accion=nombre.substring(3);
	var combo = new Ext.form.ComboBox({
		name: id,
		id: id,
		emptyText: 'Seleccione..',
		//hiddenName: nombre+"hide",
		//forceSelection: true,
		valueField:co_nombre,
		fieldLabel:etiqueta,
		displayField:tx_nombre,
		editable: false,
		anchor: '80%',
		listWidth:220,
		typeAhead:true,
		mode: 'remote',
		triggerAction:'all',
		store: new Ext.data.JsonStore({
			url: 'php/CombosDinamicos.php',
			root: 'Resultados',
			idProperty: co_nombre,
			baseParams: {
				accion: accion,
				tipo:tipo
			},
			fields: [co_nombre, tx_nombre]
		})
	});
	return combo;
}
// 
// name: GetComboTipoId
// @param
// @return
function GetComboValor(id,nombre,etiqueta,valor){
	co_nombre=nombre;
	tx_nombre='tx_'+nombre.substring(3);
	accion=nombre.substring(3);
	var combo = new Ext.form.ComboBox({
		name: id,
		id: id,
		emptyText: 'Seleccione..',
		//hiddenName: nombre+"hide",
		//forceSelection: true,
		valueField:co_nombre,
		fieldLabel:etiqueta,
		displayField:tx_nombre,
		editable: false,
		anchor: '80%',
		listWidth:220,
		typeAhead:true,
		mode: 'remote',
		triggerAction:'all',
		store: new Ext.data.JsonStore({
			url: 'php/CombosDinamicos.php',
			root: 'Resultados',
			idProperty: co_nombre,
			baseParams: {
				accion: accion
			},
			fields: [co_nombre, tx_nombre]
		})
	});
	return combo;
}
// 
// name: GetComboTipoId
// @param
// @return
function GetComboValor1(id,nombre,etiqueta,valor){
	co_nombre=nombre;
	tx_nombre='tx_'+nombre.substring(3);
	accion=nombre.substring(3);
	var combo = new Ext.form.ComboBox({
		name: id,
		id: id,
		emptyText: 'Seleccione..',
		//hiddenName: nombre+"hide",
		//forceSelection: true,
		valueField:co_nombre,
		fieldLabel:etiqueta,
		displayField:tx_nombre,
		editable: false,
		anchor: '80%',
		listWidth:220,
		typeAhead:true,
		mode: 'local',
		triggerAction:'all',
		store: new Ext.data.JsonStore({
			url: 'php/CombosDinamicos.php',
			root: 'Resultados',
			idProperty: co_nombre,
			baseParams: {
				accion: accion,
				valor:valor
			},
			fields: [co_nombre, tx_nombre]
		})
	});
	return combo;
}
// 
// name: GetComboUbicacion
// @param
// @return
function GetComboUbicacion(nombre,etiqueta,tipo_ubi,combo_hijo,combo_organizacion,disabled){
	
	co_nombre='co_ubicacion';
	tx_nombre='tx_ubicacion';
	accion='ubicacion';
	
	var combo = new Ext.form.ComboBox({
		name: nombre,
		id: nombre,
		emptyText: 'Seleccione..',
		
		//hiddenName: nombre+"hide",
		//forceSelection: true,
		fieldLabel:etiqueta,
		valueField:co_nombre,
		displayField:tx_nombre,
		editable: false,
		anchor: '80%',
		listWidth:220,
		typeAhead:true,
		mode: 'local',
		triggerAction:'all',
		store: new Ext.data.JsonStore({
			url: 'php/CombosDinamicos.php',
			root: 'Resultados',
			idProperty: co_nombre,
			baseParams: {
				accion: 'ubicacion',
				co_tipo_ubicacion:tipo_ubi
				
			},
			fields: [co_nombre, tx_nombre],
			listeners: {
				'load': function (store, records, options){
					//Ext.getCmp(combo_hijo).clearValue();
					//Ext.getCmp(combo_hijo).store.removeAll();
				},
				'clear': function (store, records, options){
					Ext.getCmp(combo_hijo).clearValue();
					Ext.getCmp(combo_hijo).store.removeAll();
				}
			}
		}),
		listeners: {
			'select': function (combo, record, index){
				if(typeof combo_hijo != "undefined"){
					Ext.getCmp(combo_hijo).clearValue();
					Ext.getCmp(combo_hijo).store.reload({params:{co_padre:combo.getValue()}});
				}
				if(typeof combo_organizacion != "undefined"){
					Ext.getCmp(combo_organizacion).clearValue();
					Ext.getCmp(combo_organizacion).store.reload({params:{co_padre:combo.getValue()}});
				}	
			}
		}
	});
	return combo;
}


/*******************************************************************************************/
	//		VTypes : Tipos de validacion,  son un conjunto de funciones que permiten validar la entrada de datos en los campos
	// del formulario, utilizando la libreria Ext-Js podemos definir nuevos tipos de validaciones.
	// Add the additional 'advanced' VTypes
	// Add the additional 'advanced' VTypes
	Ext.apply(Ext.form.VTypes, {
		daterange : function(val, field) {
			var date = field.parseDate(val);
	
			if(!date){
				return;
			}
			if (field.startDateField && (!this.dateRangeMax || (date.getTime() != this.dateRangeMax.getTime()))) {
				var start = Ext.getCmp(field.startDateField);
				start.setMaxValue(date);
				start.validate();
				this.dateRangeMax = date;
			} 
			else if (field.endDateField && (!this.dateRangeMin || (date.getTime() != this.dateRangeMin.getTime()))) {
				var end = Ext.getCmp(field.endDateField);
				end.setMinValue(date);
				end.validate();
				this.dateRangeMin = date;
			}
			/*
			 * Always return true since we're only using this vtype to set the
			 * min/max allowed values (these are tested for after the vtype test)
			 */
			return true;
		},
	
		password : function(val, field) {
			if (field.initialPassField) {
				var pwd = Ext.getCmp(field.initialPassField);
				return (val == pwd.getValue());
			}
			return true;
		},
	
		passwordText : 'Passwords do not match',		
		
		phone : function(){
			var re = /^(\d{4}[-]?){1}(\d{7})$/;
			return function(v) {
				return re.test(v);
			}
		}(),
		phoneText : 'No es un nmero de telfono vlido. Debe tener el formato ###-####### (guion opcional).',
		phoneMask : /[\d-]/,
		
		// Validacion con formato de solo numeros

		numero : function(){
			var re = /^[0-9]+$/i;
			return function(v) {
				return re.test(v);
			}
		}(),
		numeroText : 'Este campo solo admite n&uacute;meros...',
		numeroMask : /[0-9]/i,
		
		// Validacion con formato de solo letras
		alfanum : function(){
			var re = /^([-_a-zA-Z0-9 (INSERT|DELETE)])+$/i;
			return function(v) {
				return re.test(v);
			}
		}(), 
		alfanumText : 'Este campo solo admite caracteres alfanumericos...',
		alfanumMask : /([-_a-zA-Z0-9 ])/i,
	
	// Validacion con formato de solo letras
		letras : function(){
			var re = /^([.a-zA-Z ])+$/i;
			return function(v) {
				return re.test(v);
			}
		}(),
		letrasText : 'Este campo solo admite caracteres alfabeticos...',
		letrasMask : /([.a-zA-Z ])/i,
	
	// Validacion con formato 
		validos : function(){
			var re = /^([-_.,a-zA-Z0-9\/:#&+*;\)\( ])+$/i;
			return function(v) {
				return re.test(v);
			}
		}(),
		validosText : 'Este campo solo admite caracteres alfanumericos y simbolos estandares...',
		validosMask : /([-_.,a-zA-Z0-9\/:#&+*;\)\( ])/i,
	
	// Validacion con formato alfanumerico incluyendo la ñÑ
		validosEsp : function(){
			var re = /^([-_.,a-zA-Z0-9\/:ñÑ#%&+*;\)\( ])+$/i;
			return function(v) {
				return re.test(v);
			}
		}(),
		validosEspText : 'Este campo solo admite caracteres alfanumericos y simbolos estandares...',
		validosEspMask : /([-_.,a-zA-Z0-9\/:ñÑ#%&+*;\)\( ])/i,
		
	// Validacion con formato de hora militar ##:##(0:00 - 23:59)
		time : function(){
			var re = /^([0-1]?[0-9]|[2][0-3]):([0-5][0-9])$/i;
			return function(v) {
				return re.test(v);
			}
		}(),
		timeText : 'No es una hora valida. Debe escribirse en el formato "hh:mm" dentro del rango "0:00 - 23:59".',
		timeMask : /[\d:]/i
	});


	/*******************************************************************************************/
