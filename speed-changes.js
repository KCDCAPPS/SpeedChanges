var roads = 
{
	'Paekakariki Hill Road': [{
		"From": "KCDC side",
		"Current": "70",
		"Proposed": "60",
		"Image": ""
	}],
	'Hill Road': [{
		"From": "KCDC side",
		"Current": "70",
		"Proposed": "60",
		"Image": ""
	}],
	'Road Road': [{
		"From": "KCDC side",
		"Current": "70",
		"Proposed": "60",
		"Image": ""
	}]
};

function addNewRoad(road, attributes, count){
	//Allow an external site to be added, so we will need to check to see if the URL contains a https or www as all internal links exclude this and all external ones requires either of these and can contain both.
	//Remember -1 means not found. This allows us to easily change between production and uat with allowing for externally linked pages such as the QE2 park link which goes to a central government page
	//var parkUrl = (parkAttributes.Webpage.indexOf('http') == -1 &&  parkAttributes.Webpage.indexOf('www') == -1) ? domain + parkAttributes.Webpage : parkAttributes.Webpage;
	console.log('attributes');
	console.log(attributes);
	console.log(attributes['Current']);
	
	
	var parkList = [
		'<div class="panel panel-default">',
			'<div class="panel-heading ' + ((count == 0) ? '' : 'collapsed') + '" data-toggle="collapse" data-parent="#accordion" data-target="#collapse' + count + '" >',
				'<h4 class="panel-title">',
					'<a class="accordion-toggle">' + road + '</a>',
				'</h4>',
			'</div>',
			'<div id="collapse' + count + '" class="panel-collapse collapse ' + ((count == 0) ? 'in' : '') + '">',
				'<div class="panel-body">',
					'<div>',
						'<p><strong>Road name: </strong>' + road + '</p>',
						'<p><strong>Start position:</strong> State Highway 2</p>',
						'<p><strong>End position:</strong> Fraser Road</p>',
						'<p><strong>Current speed:</strong> ' + attributes['Current'] + ' km/hr</p>',
						'<p><strong>Proposed speed:</strong> ' + attributes['Proposed'] + ' km/hr</p>', 
						'<p><strong>Road characteristics</strong></p>',
						'<ul>',
							'<li>Land use = Rural </li>',
							'<li>Number of lanes: 2 </li>',
							'<li>Road Width: 5.3 m</li>',
							'<li>Daily Traffic: &nbsp;325</li>',
						'</ul>',
						'<p><strong>Locality plan</strong></p>',
						'<p>',
							'<span class="sf-Image-wrapper" data-sfref="[images|OpenAccessDataProvider|tmb:lg]79d3db3e-36f3-61b3-b84d-ff0000681c44">',
								'<img alt="AVON RD" data-displaymode="Thumbnail" src="http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/paekakariki.png,,37077?epieditmode=False" title="AVON RD">',
							'</span>',
						'</p>',
						'<p>"70" section of <strong>SH1</strong> that includes the intersection with <strong>Beach Road</strong> and <strong>Paekakariki Hill Road</strong>. <strong>Paekakariki Hill Road</strong> Kapiti Coast District Council part from SH1 to the Council bounday at the Lookout</p>',
						'</ br>',
						'<p><strong>Full PDF:</strong><a href="http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/1027-kap-speed-review-map1-05-19feb2017.pdf"> Map 1: Paekākāriki Hill Road and SH1<a/> </p>',
					'</div>',
				'</div>',
			'</div>',
		'</div>'
	]

	$( "#accordion" ).append( parkList.join(' ') );
}		


$(document).ready(function() {
	//Add accordion element
	$('<div id="accordion" class="panel-group"></div>' ).insertAfter( "#top-element" );
	
	//$('#accordion2').append()
	var count = 0;
	$.each(roads, function(road, attrs) {
		console.log(attrs);
		addNewRoad(road, attrs[0], count++);
		/*$.each(attrs, function(i, item) {
		});*/
	});	
	
});