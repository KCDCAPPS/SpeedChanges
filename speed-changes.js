var environmentProd = true;
var domain = ((environmentProd)? 'http://www.kapiticoast.govt.nz' : 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv')

var roads = 
{
	'Paekākāriki Hill Road': [{
		'FromTo': 'Kāpiti Coast District Council part from SH1 to the Council boundary at the summit',
		'Current': '70',
		'Proposed': '60',
		'Rationale': 'Paekākāriki Hill Road traverses south from SH1 to Pauatahanui. The northern section has a 70 km/h speed limit from SH1 to the Porirua City Council boundary at the Lookout, where it changes to 60 km/h for the remainder of its length. The proposed 60 km/h speed limit is considered to best reflect the safety and use of this narrow windy road and would mean the entire length of Paekākāriki Hill Road would have the same 60 km/hr speed limit.',
		'ImageUrl': domain + 'your-council/projects/kapiti-speed-limits-review/images/map1-paekakariki-hill.gif',
		'ImageBlurb': '"70" section of <strong>SH1</strong> that includes the intersection with <strong>Beach Road</strong> and <strong>Paekakariki Hill Road</strong>. <strong>Paekakariki Hill Road</strong> Kapiti Coast District Council part from SH1 to the Council bounday at the Lookout',
		'PdfUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/1027-kap-speed-review-map1-05-19feb2017.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'SH1 at Paekākāriki': [{
		'FromTo': '"70" section (includes the intersection with Beach Road and Paekākāriki Hill Road)',
		'Current': '70',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered to best reflect the safety and use of this section of SH1, in particular with the traffic movements at the intersections with Paekākāriki Hill Road and also Beach Road.',
		'ImageUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/paekakariki.png',
		'ImageBlurb': '"70" section of <strong>SH1</strong> that includes the intersection with <strong>Beach Road</strong> and <strong>Paekakariki Hill Road</strong>. <strong>Paekakariki Hill Road</strong> Kapiti Coast District Council part from SH1 to the Council bounday at the Lookout',
		'PdfUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/1027-kap-speed-review-map1-05-19feb2017.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'Maungakotukutuku Road': [{
		'FromTo': 'Full length',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered to best reflect the safety and use of this section of SH1, in particular with the traffic movements at the intersections with Paekākāriki Hill Road and also Beach Road.',
		'ImageUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/paekakariki.png',
		'ImageBlurb': '"70" section of <strong>Valley Road</strong>. 221 <strong>Valley Road</strong> to <strong>Waterfall Road</strong> and all of <strong>Maungakotukutuku Road</strong>',
		'PdfUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/1027-kap-speed-review-map1-05-19feb2017.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'Valley Road 100 km/h section': [{
		'FromTo': '"100" section (i.e. from Waterfall Road to 221 Valley Road)',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered to best reflect the safety and use of these roads, which are narrow, windy and popular with cyclists and pedestrians.',
		'ImageUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/paekakariki.png',
		'ImageBlurb': '"70" section of <strong>Valley Road</strong>. 221 <strong>Valley Road</strong> to <strong>Waterfall Road</strong> and all of <strong>Maungakotukutuku Road</strong>',
		'PdfUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/1027-kap-speed-review-map1-05-19feb2017.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'Valley Road 70 km/h section': [{
		'FromTo': 'From 60m east of Matai Road to The Esplanade and extending 15m into Renown Road',
		'Current': '60',
		'Proposed': '40',
		'Rationale': '40 km/h is considered the safe and appropriate speed limit given the use of this road by cyclists and pedestrians and the link to Queen Elizabeth Park shared path; 40 km/hr also reflects the speed traffic actually travels at currently.',
		'ImageUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/paekakariki.png',
		'ImageBlurb': '"70" section of <strong>Valley Road</strong>. 221 <strong>Valley Road</strong> to <strong>Waterfall Road</strong> and all of <strong>Maungakotukutuku Road</strong>',
		'PdfUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/1027-kap-speed-review-map1-05-19feb2017.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'Poplar Avenue': [{
		'FromTo': 'Full length',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered to best reflect the safety and use of this section of SH1, in particular with the traffic movements at the intersections with Paekākāriki Hill Road and also Beach Road.',
		'ImageUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/paekakariki.png',
		'ImageBlurb': '60m east <strong>Matai Road</strong> to <strong>The Esplanade</strong> extending 15m into <strong>Renown Road</strong>',
		'PdfUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/1027-kap-speed-review-map1-05-19feb2017.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'Garden Road and Matatua Road extension': [{
		'FromTo': 'From Rosetta Road through Garden Road and around to Matatua Road',
		'Current': '50',
		'Proposed': '20',
		'Rationale': '20 km/hr is considered appropriate for this beach access road which is traffic calmed and where pedestrian and cyclists and motor vehicles share the road.',
		'ImageUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/paekakariki.png',
		'ImageBlurb': '<strong>Garden Road</strong> looping around from <strong>Rosetta Road</strong>, Raumati Gardens, Waterfront Restaurant and Bar to <strong>Matatua Road</strong>.',
		'PdfUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/1027-kap-speed-review-map1-05-19feb2017.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'Nikau Palm Road': [{
		'FromTo': '"80" section (i.e. from 57m east of Te Topi Road to Maui Pomare Street)',
		'Current': '80',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered to best reflect the safety and use of these roads, and the rural lifestyle nature of the area.',
		'ImageUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/paekakariki.png',
		'ImageBlurb': 'The "80" section of <strong>Nikau Palm Road</strong> located from 57m east of <strong>Te Topi Road</strong> to <strong>Maui Pomare Street</strong>.',
		'PdfUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/1027-kap-speed-review-map1-05-19feb2017.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'Maui Pomare, Mahaki, Anlaby Roads and Angus and Eucalyptus Way': [{
		'FromTo': 'Full length',
		'Current': '70',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered to best reflect the safety and use of these roads, and the rural lifestyle nature of the area.',
		'ImageUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/paekakariki.png',
		'ImageBlurb': '<strong>Maui Pomare, Mahaki, Anlaby Roads</strong> and <strong>Angus</strong> and <strong>Eucalyptus Way</strong>',
		'PdfUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/1027-kap-speed-review-map1-05-19feb2017.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'Ngatiawa, Mangaone South, Kents Road, Rangiora Road': [{
		'FromTo': 'Full length',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered to best reflect the safety and use of these narrow windy roads which are popular for cyclists and include access to tramping tracks including the Te Araroa walkway.',
		'ImageUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/paekakariki.png',
		'ImageBlurb': '<strong>Akatarawa</strong> from <strong>Reikorangi Road</strong> to 147 <strong>Akatarawa Road</strong>, <strong>Ngatiawa</strong>, <strong>Mangaone South</strong>, and all side roads (<strong>Kents Road</strong>, <strong>Rangiora Road</strong>) <strong>Reikorangi Road</strong>.',
		'PdfUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/1027-kap-speed-review-map1-05-19feb2017.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'Akatarawa Road': [{
		'FromTo': '"100" section (i.e. from Reikorangi Road to 147 Akatarawa Road)',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered to best reflect the safety and use of these narrow windy roads which are popular for cyclists and include access to tramping tracks including the Te Araroa walkway.',
		'ImageUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/paekakariki.png',
		'ImageBlurb': '<strong>Akatarawa</strong> from <strong>Reikorangi Road</strong> to 147 <strong>Akatarawa Road</strong>, <strong>Ngatiawa</strong>, <strong>Mangaone South</strong>, and all side roads (<strong>Kents Road</strong>, <strong>Rangiora Road</strong>) <strong>Reikorangi Road</strong>.',
		'PdfUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/1027-kap-speed-review-map1-05-19feb2017.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'Reikorangi Road 70km section': [{
		'FromTo': '"70" section (i.e. from 95m south Poneke Drive to 580m south Poneke Drive)',
		'Current': '70',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered to best reflect the safety and use of these narrow windy roads which are popular for cyclists and include access to tramping tracks including the Te Araroa walkway.',
		'ImageUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/paekakariki.png',
		'ImageBlurb': '<strong>Reikorangi Road</strong> from end of 50 east to end of <strong>Reikorangi Road</strong>',
		'PdfUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/1027-kap-speed-review-map1-05-19feb2017.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'Reikorangi Road 100km section': [{
		'FromTo': '"100" section (I.e. from 580m south Poneke Drive to Akatarawa Road)',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered to best reflect the safety and use of these narrow windy roads which are popular for cyclists and include access to tramping tracks including the Te Araroa walkway.',
		'ImageUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/paekakariki.png',
		'ImageBlurb': '<strong>Akatarawa</strong> from <strong>Reikorangi Road</strong> to 147 <strong>Akatarawa Road</strong>, <strong>Ngatiawa</strong>, <strong>Mangaone South</strong>, and all side roads (<strong>Kents Road</strong>, <strong>Rangiora Road</strong>) <strong>Reikorangi Road</strong>.',
		'PdfUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/1027-kap-speed-review-map1-05-19feb2017.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'Jacks Bush Road': [{
		'FromTo': 'Full length',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered to best reflect the safety and use of these narrow windy roads and would be consistent with the 60 km/h speed limit on the adjoining Nga Manu Road and Maurice Smith Way. Ngarara Road is also used to access a tourist destination – the Nga Manu Reserve',
		'ImageUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/paekakariki.png',
		'ImageBlurb': '"70" section of <strong>Ngarara</strong> and <strong>Jacks Bush Road</strong>.',
		'PdfUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/1027-kap-speed-review-map1-05-19feb2017.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'Ngarara Road': [{
		'FromTo': '"70"section (i.e. from Ferndale Drive north to the end)',
		'Current': '70',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered to best reflect the safety and use of these narrow windy roads and would be consistent with the 60 km/h speed limit on the adjoining Nga Manu Road and Maurice Smith Way. Ngarara Road is also used to access a tourist destination – the Nga Manu Reserve',
		'ImageUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/paekakariki.png',
		'ImageBlurb': '"70" section of <strong>Ngarara</strong> and <strong>Jacks Bush Road</strong>.',
		'PdfUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/1027-kap-speed-review-map1-05-19feb2017.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'Smithfield Road': [{
		'FromTo': 'Full length',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered to best reflect the safety and use of these narrow windy roads and would be consistent with the 60 km/h speed limit on the adjoining Nga Manu Road and Maurice Smith Way. Ngarara Road is also used to access a tourist destination – the Nga Manu Reserve',
		'ImageUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/paekakariki.png',
		'ImageBlurb': '<strong>Smithfield Road</strong> full length.',
		'PdfUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/1027-kap-speed-review-map1-05-19feb2017.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'Hadfield and Octavius Roads; Te Kowhai and Gary Roads': [{
		'FromTo': 'Full length',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered to best reflect the safety and use of these narrow rural roads. The current 100km/h speed limit is out of context with the adjoining 80 km/h speed limits at the Peka Peka expressway interchange.',
		'ImageUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/paekakariki.png',
		'ImageBlurb': '<strong>Te Kowhai</strong> and <strong>Gary Roads</strong>. <strong>Hadfield</strong> and <strong>Octavius Roads</strong>',
		'PdfUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/1027-kap-speed-review-map1-05-19feb2017.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'Gear Road': [{
		'FromTo': 'From 90m west of Settlement Road to the end.',
		'Current': '80',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered to best reflect the safety and use of these narrow roads which also provide access to lifestyle properties and a Lavender Farm which is a tourist destination.',
		'ImageUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/paekakariki.png',
		'ImageBlurb': '<strong>Gear Road</strong> from 90m west of <strong>Settlement Road</strong> to the end. <strong>Settlement, Sutton</strong> and <strong>Best Roads</strong> - full length.',
		'PdfUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/1027-kap-speed-review-map1-05-19feb2017.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'Settlement, Sutton and Best Roads': [{
		'FromTo': 'Full length',
		'Current': '80',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered to best reflect the safety and use of these narrow roads which also provide access to lifestyle properties and a Lavender Farm which is a tourist destination.',
		'ImageUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/paekakariki.png',
		'ImageBlurb': '<strong>Gear Road</strong> from 90m west of <strong>Settlement Road</strong> to the end. <strong>Settlement, Sutton</strong> and <strong>Best Roads</strong> - full length.',
		'PdfUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/1027-kap-speed-review-map1-05-19feb2017.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'Waitohu Valley Road 80km section': [{
		'FromTo': '"80" section (i.e. from 77 to 277 Waitohu Valley Road)',
		'Current': '80',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered to best reflect the safety and use of these narrow windy roads.',
		'ImageUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/paekakariki.png',
		'ImageBlurb': '"80" section of <strong>Waitohu Valley Road</strong>',
		'PdfUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/1027-kap-speed-review-map1-05-19feb2017.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'Waitohu Valley Road 100km section': [{
		'FromTo': '"100" section (i.e. from 277 Waitohu Valley Road north to Council boundary)',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered to best reflect the safety and use of these narrow windy roads.',
		'ImageUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/paekakariki.png',
		'ImageBlurb': '"100" section of <strong>Waitohu Valley Road</strong>',
		'PdfUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/1027-kap-speed-review-map1-05-19feb2017.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'Greenwood Boulevard, Sunglo Terrace': [{
		'FromTo': 'Full length',
		'Current': '80',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered to best reflect the safety and use of these narrow windy roads.',
		'ImageUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/paekakariki.png',
		'ImageBlurb': '<strong>Greenwood Boulevard</strong> and <strong>Sunglo Terrace</strong>',
		'PdfUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/1027-kap-speed-review-map1-05-19feb2017.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'Ringawati Road': [{
		'FromTo': 'Full length',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered to best reflect the safety and use of these narrow windy roads.',
		'ImageUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/paekakariki.png',
		'ImageBlurb': '<strong>Ringawati Road</strong> and "100" section of <strong>Rahui Road</strong>',
		'PdfUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/1027-kap-speed-review-map1-05-19feb2017.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'Rahui Roads': [{
		'FromTo': '"100" section (i.e. from 186 Rahui Road east to end)',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered to best reflect the safety and use of these narrow windy roads.',
		'ImageUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/paekakariki.png',
		'ImageBlurb': '<strong>Ringawati Road</strong> and "100" section of <strong>Rahui Road</strong>',
		'PdfUrl': 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/EPiServer/CMS/Content/globalassets/our-district/beaches/speed-changes/1027-kap-speed-review-map1-05-19feb2017.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
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
						'<p><strong>From/to: </strong>' + attributes['FromTo'] +  '</p>',
						'<p><strong>Current speed:</strong> ' + attributes['Current'] + ' km/hr</p>',
						'<p><strong>Proposed speed:</strong> ' + attributes['Proposed'] + ' km/hr</p>', 
						'<p><strong>RATIONALE FOR PROPOSED CHANGE: </strong>' + attributes['Rationale'] + '</p>',
						'<p><strong>Road Map:</strong></p>',
						'<div class=>',
							'<img class="img-responsive" alt="' + road + '" src="' + attributes['ImageUrl'] + '" title="' + road + '" style="margin: 0 auto; padding: 3px; border: 1px solid #ddd; border-radius: 3px; transition: all 0.2s ease-in-out; width: 85%; height: 85%;" >',
						'</p>',
						'<p>' + attributes['ImageBlurb'] + '</p>',
						'<br>',
						'<p><strong>Full PDF: </strong><a target="_blank" href="' + attributes['PdfUrl'] + '">' + attributes['PdfName'] + '<a/></p>',
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