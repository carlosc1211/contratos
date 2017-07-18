/**
 * Grid theme for Highcharts JS
 * @author Torstein Hønsi
 */

Highcharts.theme = {
	colors: ['#4572A7','#AA4643','#89A54E','#80699B','#3D96AE',
						 '#DB843D','#92A8CD','#A47D7C','#B5CA92','#058DC7', 
						 '#50B432','#ED561B','#DDDF00','#24CBE5','#64E572', 
						 '#FF9655','#FFF263','#6AF9C4','#CD5C5C','#FF0000',
						 '#FF1493','#FF4500','#FFD700','#FFEFD5','#BDB76B',
						 '#E6E6FA','#4B0082','#ADFF2F','#2E8B57','#66CDAA',
						 '#00FFFF','#1E90FF','#000080','#B0C4DE','#FFDEAD',
						 '#BC8F8F','#D2691E','#A52A2A','#2F4F4F','#FAEBD7'],
	chart: {
		backgroundColor: {
			linearGradient: [0, 0, 1, 1],
			stops: [
				[0, 'rgb(255, 255, 255)'],
				[1, 'rgb(240, 240, 255)']
			],
		}
,
		borderWidth: 2,
		plotBackgroundColor: 'rgba(255, 255, 255, .9)',
		plotShadow: true,
		plotBorderWidth: 1
	},
	title: {
		style: { 
			color: '#000',
			font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
		}
	},
	subtitle: {
		style: { 
			color: '#666666',
			font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
		}
	},
	xAxis: {
		gridLineWidth: 1,
		lineColor: '#000',
		tickColor: '#000',
		labels: {
			style: {
				color: '#000',
				font: '11px Trebuchet MS, Verdana, sans-serif'
			}
		},
		title: {
			style: {
				color: '#333',
				fontWeight: 'bold',
				fontSize: '12px',
				fontFamily: 'Trebuchet MS, Verdana, sans-serif'

			}				
		}
	},
	yAxis: {
		minorTickInterval: 'auto',
		lineColor: '#000',
		lineWidth: 1,
		tickWidth: 1,
		tickColor: '#000',
		labels: {
			style: {
				color: '#000',
				font: '11px Trebuchet MS, Verdana, sans-serif'
			}
		},
		title: {
			style: {
				color: '#333',
				fontWeight: 'bold',
				fontSize: '12px',
				fontFamily: 'Trebuchet MS, Verdana, sans-serif'
			}				
		}
	},
	legend: {
		itemStyle: {			
			font: '9pt Trebuchet MS, Verdana, sans-serif',
			color: 'black'

		},
		itemHoverStyle: {
			color: '#039'
		},
		itemHiddenStyle: {
			color: 'gray'
		}
	},
	labels: {
		style: {
			color: '#99b'
		}
	},
navigation:{
buttonOptions:{
theme:{
stroke:'#CCCCCC'
}
}
}
};

// Apply the theme
var highchartsOptions = Highcharts.setOptions(Highcharts.theme);
	
