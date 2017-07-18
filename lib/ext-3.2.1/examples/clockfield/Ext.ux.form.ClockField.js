Ext.ns('Ext.ux.form');
Ext.ux.form.ClockField = Ext.extend(Ext.form.TriggerField, {
    startTime: {
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        ampm: new Date().dateFormat('A')
    },
    value: null,
    enableKeyEvents: true,
    imagesPath: "Ext.ux.form.ClockField/images",
    faceImage: "clock_face.gif",
    hourHandImage: "clock_hours.gif",
    minuteHandImage: "clock_minutes.gif",
    centerImage: "clock_center.gif",
    closeImage: "close_image.gif",
    clockBgColor: 'white',
    clockBorder: '1px solid lightgrey',
    clockSize: {
        width: 142,
        height: 142
    },
    format : "g:i A",
    hourHandSize: {
        width: 67,
        height: 68
    },
    minuteHandSize: {
        width: 111,
        height: 112
    },
    centerSize: {
        width: 7,
        height: 6
    },
    ampmStyle: {
        'fontSize': '10pt',
        'fontWeight': 'bold',
        'color': '#999999',
        'textDecoration': 'none',
        'cursor': 'pointer'
    },
    initComponent: function() {
        Ext.ux.form.ClockField.superclass.initComponent.call(this);
    },
    onTriggerClick : function(){
        if(this.disabled){
            return;
        }
        if(this.isExpanded()){
            this.collapse();
            this.el.focus();
        }else {
            this.onFocus({});
            this.el.focus();
            this.expand();
        }
    },
    isExpanded: function() {
    	return (this.clockContainer.getStyle('visibility') == 'visible' ? true : false);
    },
    expand: function() {
    	if (this.disabled) { return; }
    	var w = this.el.getWidth();
    	this.clockContainer.alignTo(this.el,'bl');
		this.clockContainer.setSize(w,this.clockSize.height);
        this.clockContainer.setStyle({
            'padding-left': (w - this.clockSize.width) / 2 + 'px',
            'visibility':'visible'
        });
        var cw = this.clockContainer.getWidth();
        if (cw > w) {
        	this.clockContainer.setWidth(w);
        } else if (cw < this.clockSize.width) {
        	this.clockContainer.setWidth(this.clockSize.width)
        	this.clockContainer.setStyle({
		        'padding': 0
		    });
        }
    },
    disable: function(ct, position) {
        Ext.ux.form.ClockField.superclass.disable.call(this);
        this.collapse();
    },
	collapse: function() {
		this.clockContainer.setStyle({'visibility':'hidden'});
	},
    onRender: function(ct, position) {
    	Ext.ux.form.ClockField.superclass.onRender.call(this, ct, position);
        this.moveEl = {};
        this.moveEl['move'] = false;
        if (this.value) {
        	if (Ext.isDate(this.value)) {
        	   this.time.minute = this.value.getMinutes();
        	   this.time.hour = this.value.getHours();
        	   this.time.ampm = this.value.dateFormat('A');
        	} else if (typeof(this.value) == "object") {
        		this.time = this.value;
        	} else if (typeof(this.value) == "string") {
        		var t = this.parseDate(this.value);
        		this.time.hour = parseInt(t.formatDate('h'));
        		this.time.minute = parseInt(t.formatDate('i'));
        		this.time.ampm = t.formatDate('A');
        	}
        } else {
        	this.time = this.startTime;
        }
        this.clockContainer = new Ext.Layer({
            shadow: this.shadow,
            style: {
            	'-moz-user-select':'none',
            	'position': 'absolute',
			    'z-index': 24000
            }
        });
        this.clockContainer.setStyle({
        	'background-color':this.clockBgColor,
        	'border':this.clockBorder
        });
        this.clockFace = Ext.DomHelper.append(this.clockContainer, {
                tag: 'img',
                src: this.imagesPath+"/"+this.faceImage,
                style: {
                	'-moz-user-select':'none',
                	'position': 'absolute',
                	'z-index': 24001
                }
            },true);
        this.minuteHand = Ext.DomHelper.append(this.clockContainer, {
        	tag: 'div',
    		style:{
    			'-moz-user-select':'none',
                'width': this.minuteHandSize.width + 'px',
                'height': this.minuteHandSize.height + 'px',
                'margin-top':((this.clockSize.height - this.minuteHandSize.height)/2) + 'px',
	            'margin-left':((this.clockSize.width - this.minuteHandSize.width)/2) + 'px',
                'position':'absolute',
                'z-index':24002,
                'background':'url('+this.imagesPath+"/"+this.minuteHandImage+') no-repeat top left'
            }
        },true);
        this.hourHand = Ext.DomHelper.append(this.clockContainer, {
            tag: 'div',
            style:{
            	'-moz-user-select':'none',
            	'margin-top':((this.clockSize.height - this.hourHandSize.height)/2) + 'px',
                'margin-left':((this.clockSize.width - this.hourHandSize.width)/2) + 'px',
                'width':this.hourHandSize.width + 'px',
                'height':this.hourHandSize.height + 'px',
                'position':'absolute',
                'z-index':24003,
                'background':'url('+this.imagesPath+"/"+this.hourHandImage+') no-repeat top left'
            }
        },true);
        this.middleImg = Ext.DomHelper.append(this.clockContainer, {
            tag: 'img',
            src:this.imagesPath+"/"+this.centerImage,
            style:{
            	'-moz-user-select':'none',
            	'position':'absolute',
                'z-index':24004,
                'margin-top':((this.clockSize.height - this.centerSize.height)/2) + 'px',
	            'margin-left':((this.clockSize.width - this.centerSize.width)/2) + 'px'
            }
        },true);
        this.ampm = Ext.DomHelper.append(this.clockContainer, {
        	tag: 'div',
        	style: this.ampmStyle
        },true);
        this.ampm.update(this.time.ampm);
        this.ampm.setStyle({
        	'position':'absolute',
            'z-index':24005,
            'display':'block',
            '-moz-user-select':'none',
            'margin-top':((this.clockSize.height + (this.clockSize.height/4))/2) + 'px',
            'margin-left':((this.clockSize.width-20)/2) + 'px'
        });
        this.ampm.on("click", function(){
            this.toggleAmPm();
        },this);
        this.moveHands();
        this.clockContainer.on("mousedown", function(e){
        	this.moveEl['move'] = true;
        	this.moveEl['originalTime'] = this.time;
        	var el = Ext.get(e.target);
            var coord = this.getCoords();
            var ang = this.clickAngle({x:e.xy[0], y:e.xy[1]}, coord);
            var h_ang = (this.time.hour%12) * 30;
            var m_ang = this.time.minute * 6;
            this.moveEl['coord'] = coord;
            if (Math.abs(ang - m_ang) < Math.abs(ang - h_ang)) {
                this.moveEl['el'] = "minute";
            } else if(Math.abs(ang - m_ang) > Math.abs(ang - h_ang)) {
                this.moveEl['el'] = "hour";
            } else {
	            if (el.getStyle("background-image").indexOf(this.hourHandImage) != -1) {
	                this.moveEl['el'] = "hour";
	            }
	            else {
	                this.moveEl['el'] = "minute";
	            }
            }
        },this);
        this.clockContainer.on("mouseup", function(){
            this.moveEl = {};
            this.moveEl['move'] = false;
        },this);  
        this.clockContainer.on("mousemove", function(e) {
		    if (this.moveEl['move']) {
		    	this.el.focus();
		        var add, ang_by;
		        var ang = this.clickAngle({
		            x: e.xy[0],
		            y: e.xy[1]
		        }, this.moveEl.coord);
		        if (this.moveEl.el == "hour") { 
		        	ang_by = 30;
		        } else {
		        	ang_by = 6;
		        }
		        if (this.moveEl.el == "hour") {
		            var h = Math.round(ang / ang_by);
		            if (!isNaN(h)) this.time.hour = h;
		        } else {
		            var m = Math.round(ang / ang_by);
		            if (m == 60) { m = 0; }
		            if (!isNaN(m)) this.time.minute = m;
		        }
		        this.moveHands();
		        this.fireEvent("change");
		    }
		},this);
		this.on('blur',function() {
			if (!this.moveEl['move']) { 
                this.collapse();
			}
		});
		this.on('keydown',this.updateTime,this,{buffer: 200});
    },
    getCoords: function() {
        var position = this.clockFace.getXY(), size = this.clockFace.getSize();
        var obj = {left: this.clockFace.getLeft(), top: Math.round(this.clockFace.getY()), width: size.width, height: size.height};
        obj.right = obj.left + obj.width;
        obj.bottom = obj.top + obj.height;
        return obj;
    },
    toggleAmPm: function() {
    	if (this.time.ampm == "AM") {
    		this.time.ampm = "PM";
    	} else {
    		this.time.ampm = "AM";
    	}
    	this.ampm.update(this.time.ampm);
    	this.updateValue();
	},
    moveHands: function(){
        this.hourHand.setStyle({"background-position":(((this.time.hour % 12) *  this.hourHandSize.width) * -1) + 'px'});
        this.minuteHand.setStyle({"background-position":((this.time.minute * this.minuteHandSize.width) * -1) + 'px'});
        this.updateValue();
    },
    updateValue: function() {
        if (this.rendered) {
        	var min = String(this.time.minute);
        	if (min.length == 1) { min = '0' + this.time.minute; }
        	var t = this.time.hour + ':' + min + ' ' + this.time.ampm;
            this.el.dom.value = this.formatDate(this.parseDate(t)) || '';
        }
    },
    getValue : function(){
    	var v = this.el.dom.value;
        return this.formatDate(this.parseDate(v)) || '';
    },
    getRawValue: function() {
    	return this.el.dom.value;
    },
    updateTime: function(e) {
    	var v = this.parseDate(this.getValue());
    	if (Ext.isDate(v)) {
			this.time.minute = v.getMinutes();
			this.time.hour = v.getHours();
			this.time.ampm = v.dateFormat('A');
			this.moveHands();
    	}
    },
    setValue : function(value){
        if (value) {
            if (Ext.isDate(value)) {
               this.time.minute = value.getMinutes();
               this.time.hour = value.getHours();
               this.time.ampm = value.dateFormat('A');
            } else if (typeof(value) == "object") {
                this.time = value;
            } else if (typeof(value) == "string") {
                var t = this.parseDate(value);
                this.time.hour = parseInt(t.formatDate('h'));
                this.time.minute = parseInt(t.formatDate('i'));
                this.time.ampm = t.formatDate('A');
            }
            this.updateValue();
        }
        this.moveHands();
    },
    validateValue : Ext.form.DateField.prototype.validateValue,
    parseDate : Ext.form.DateField.prototype.parseDate,
    formatDate : Ext.form.DateField.prototype.formatDate,
    clickAngle: function(pnt, coord){
        var c_x = coord.width/2;
        var c_y = coord.height/2;
        var x = pnt.x + window.scrollX - coord.left;
        var y = pnt.y + window.scrollY - coord.top;
        var t_x = c_x;
        var t_y = y;
        var CA = t_x - x;
        var CO = t_y - c_y;
        var AO = Math.sqrt(Math.pow(CA, 2) + Math.pow(CO, 2));
        var ang = Math.round((Math.acos((Math.pow(Math.abs(CA), 2) - Math.pow(Math.abs(AO), 2) - Math.pow(CO, 2))/(2 * CO * AO))) * 180/Math.PI);
        if (x < c_x) { ang = 360 - ang; }
        return ang;
    }
});
Ext.reg('clockfield', Ext.ux.form.ClockField);