var environmentProd = true;
var domain = ((environmentProd)? 'http://www.kapiticoast.govt.nz/' : 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/');

var roads = 
{
	'Paekākāriki Hill Road': [{
		'Road': 'Paekākāriki Hill Road (3.3km long)',
		'FromTo': 'from SH1 to the Council boundary at the lookout (3.3 km long).',
		'Current': '70',
		'Proposed': '60',
		'Rationale': 'Paekākāriki Hill Road traverses south from SH1 to Pauatahanui. The northern section has a 70 km/h speed limit from SH1 to the Porirua City Council boundary at the Summit/Lookout, where it changes to 60 km/h for the remainder of its length. The proposed 60 km/h speed limit is considered to best reflect the safety and use of this narrow, windy road and would mean the entire length of Paekākāriki Hill Road would have the same 60 km/h speed limit. The average speed vehicles travel this 3.3km section of road (and indeed the entire 17 km length of Paekākāriki Hill Road) is well below 60 km/h so the proposed speed limit will not mean slower travel times and will also mean traffic is travelling at similar speeds reducing the chance of conflicts.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map1-paekakariki-hill.gif',
		'ImageBlurb': '"70" section of <strong>SH1</strong> that includes the intersection with <strong>Beach Road</strong> and <strong>Paekakariki Hill Road</strong>. <strong>Paekakariki Hill Road</strong> Kapiti Coast District Council part from SH1 to the Council bounday at the Lookout',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map1-paekakariki-hill.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'SH1 at Paekākāriki': [{
		'Road': 'SH1 at Paekākāriki (approximately 850m long)',
		'FromTo': 'the current 70 km/h section (includes the intersection with Beach Road and Paekākāriki Hill Road)',
		'Current': '70',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered by the NZTA to best reflect the safety and use of this section of SH1, in particular with the traffic movements at the intersections with Paekākāriki Hill Road and also Beach Road.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map1-paekakariki-hill.gif',
		'ImageBlurb': 'The current 70 km/h section (includes the intersection with Beach Road and Pāekākariki Hill Road)',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map1-paekakariki-hill.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'Maungakotukutuku Road': [{
		'Road': 'Maungakotukutuku Road (6.5 km long including 3.7km gravel road)',
		'FromTo': 'Full length',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered by the NZTA to best reflect the safety and use of this rural road, which is narrow, windy and popular with cyclists and pedestrians with access to the DOC Akatarawa Reserve and to Whareroa Park. The current average travel speeds on this road are well below 60 km/h so the proposed speed limit will not mean slower travel times. The NZTA has identified this road as one of its national priorities for a speed limit change.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map2-maungakotukutuku-valley-road.gif',
		'ImageBlurb': '221 <strong>Valley Road</strong> to <strong>Waterfall Road</strong> and all of <strong>Maungakotukutuku Road</strong>',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map2-maungakotukutuku-valley-road.pdf',
		'PdfName': 'Map 2: Maungakotukutuku Road and Valley Road'
	}],
	'Valley Road - 1st Section': [{
		'Road': 'Valley Road : 1st section',
		'FromTo': 'for the 100 km/h section from Waterfall Road to 221 Valley Road (1km long – including 635m to the north of Maungakotukutuku Road and 365m to the south).',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'A 60 km/h speed limit is considered most appropriate by NZTA, taking into account the road environment, including lack of a sealed shoulder and use by cyclists and pedestrians. The road environment changes at Maungakotukutuku Road. While the 635m length to the north is relatively straight but undulating, the 365m length to the south of Maungakotukutuku Road narrows and becomes windy towards Waterfall Road (which has a 60 km/h speed limit).',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map2-maungakotukutuku-valley-road.gif',
		'ImageBlurb': '221 <strong>Valley Road</strong> to <strong>Waterfall Road</strong> and all of <strong>Maungakotukutuku Road</strong>',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map2-maungakotukutuku-valley-road.pdf',
		'PdfName': 'Map 2: Maungakotukutuku Road and Valley Road'
	}],
	'Valley Road - 2nd Section': [{
		'Road': 'Valley Road : 2nd section (1.3 km long)',
		'FromTo': 'for the 70 km/h section of Valley Road. From Kapiti Golf Course at 104 Valley Road to the Palm Grove Christian Holiday Camp at 221 Valley Road.',
		'Current': '70',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit reflects the average traffic speed for this section of Valley Road and is considered by the NZTA to best reflect the safety and use of this road. The road is on the urban fringe of Paraparaumu and provides access to a number of properties including a golf course, and youth camp. The road is undulating (which in places restricts the view along the road) and is popular with cyclists and pedestrians.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map2-maungakotukutuku-valley-road.gif',
		'ImageBlurb': '"70" section of <strong>Valley Road</strong>.',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map2-maungakotukutuku-valley-road.pdf',
		'PdfName': 'Map 2: Maungakotukutuku Road and Valley Road'
	}],
	'Poplar Avenue - Option 1': [{
		'Road': 'Poplar Avenue (750m long)',
		'FromTo': 'for the section from 60m east of Matai Road to The Esplanade, extending 15m north into Renown Road',
		'Current': '50',
		'Proposed': '40',
		'Rationale': '40 km/h is considered by the NZTA as the safe and appropriate speed limit given the use of this road by cyclists and pedestrians, and the link to Queen Elizabeth Park shared path. The road from Matai to The Esplanade is windy, has a number of ‘blind’ intersections and includes a pedestrianized shopping area. This option was developed for simplicity (1 speed limit).  NZTA has identified the section of road from Glen Road to the Esplanade as one of its priority roads for speed limit change throughout NZ.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map3-poplar-ave-option1.gif',
		'ImageBlurb': '60m east <strong>Matai Road</strong> to <strong>The Esplanade</strong> extending 15m into <strong>Renown Road</strong>',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map3-poplar-ave-option1.pdf',
		'PdfName': 'Map 3: Poplar Avenue, Raumati South - Option 1'
	}],
	'Poplar Avenue - Option 2': [{
		'Road': 'Poplar Avenue',
		'FromTo': 'As per option 1 but with 30 km/h through the shops: <br /> • 40 km/h (for 340m) from 60m east Matai Road to 35m east Tennis Court Road/ outside 45 Poplar Ave) <br /> • 30 km/h (for 205m) from 35m east of Tennis Court Road to 45m south of Renown Road outside 23 Poplar Ave, extending 15m north into Renown Road (Raumati South shopping area) <br /> • 40 km/h (for 205m) from 23 Poplar Ave to The Esplanade',
		'Current': '50',
		'Proposed': '40 km/h and 30',
		'Rationale': 'Based on engagement feedback received, we are providing an option that will include a 40 km/h speed limit from 65m east of Poplar Avenue to The Esplanade as for option 1 with a 30 km/h speed limit through the Raumati South shopping area.  The proposed speed limit reflects the road environment which is windy, has blind intersections and has a shopping centre that has been engineered to give a slow speed environment through. The proposed speed limits also reflect the current average speed traffic travel along these sections of Poplar Avenue so will not delay traffic..',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map3-poplar-ave-option2.gif',
		'ImageBlurb': '60m east <strong>Matai Road</strong> to 35m east of <strong>Tennis Court Road</strong>, 35m east of <strong>Tennis Court Road</strong> (outside 45 Poplar Avenue) to 45m south of <strong>Renown Road</strong> (outside 23 Poplar Avenue) extending 15m north into <strong>Renown Road</strong>. and 45m south of <strong>Renown Road</strong> to <strong>The Esplanade</strong>.',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map3-poplar-ave-option2.pdf',
		'PdfName': 'Map 3: Poplar Avenue, Raumati South - Option 2'
	}],
	'Garden Road and Matatua Road extension': [{
		'Road': 'Garden Road (440m long)',
		'FromTo': 'for the section from Rosetta Road through Garden Road and around to Matatua Road',
		'Current': '50',
		'Proposed': '20',
		'Rationale': 'The proposed 20 km/h speed limit is considered by NZTA to best reflect the safety and use of this road, which is traffic calmed and provides access to the beach and MacLean Park for pedestrians, cyclists and motorists and also serves as a car park. 20 km/h is the speed limit used for reserves and is commonly used in car parks.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map4-garden-road.gif',
		'ImageBlurb': '<strong>Garden Road</strong> looping around from <strong>Rosetta Road</strong>, Raumati Gardens, Waterfront Restaurant and Bar to <strong>Matatua Road</strong>.',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map4-garden-road.pdf',
		'PdfName': 'Map 4: Garden Road, Raumati Beach'
	}],
	'Nikau Palm Road': [{
		'Road': 'Nikau Palm Road (1km long)',
		'FromTo': 'for the 80 km/h section of Nikau Palm Road from 57m east of Te Topi Road to Maui Pomare Road',
		'Current': '80',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h is considered by the NZTA to best reflect the safety and use of this no exit road, which provides access to rural properties within the Valley catchment and to walkways to Nikau Reserve and to Valley Road. The average speed vehicles travel on this road is below 60 km/h so the proposed speed limit will not mean slower travel times.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map5-nikau-valley.gif',
		'ImageBlurb': 'The "80" section of <strong>Nikau Palm Road</strong> located from 57m east of <strong>Te Topi Road</strong> to <strong>Maui Pomare Street</strong>.',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map5-nikau-valley.pdf',
		'PdfName': 'Map 5: Nikau Valley, Paraparaumu'
	}],
	'Maui Pomare, Mahaki, Anlaby Roads and Angus and Eucalyptus Way': [{
		'Road': 'Maui Pomare Road (1.3km), Mahaki Road (0.6km), Anlaby Road (1.7km), Angus Way (300m), Eucalyptus Way (300m)',
		'FromTo': 'Full length',
		'Current': '70',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered by the NZTA to best reflect the safety and use of these roads, which are all no exit and provide access to rural properties and adjacent Nikau Reserve Walkway.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map5-nikau-valley.gif',
		'ImageBlurb': '<strong>Maui Pomare, Mahaki, Anlaby Roads</strong> and <strong>Angus</strong> and <strong>Eucalyptus Way</strong>',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map5-nikau-valley.pdf',
		'PdfName': 'Map 5: Nikau Valley, Paraparaumu'
	}],
	'Ngatiawa Road, Mangaone South Road, Kents Road, Rangiora Road and Terrace Road': [{
		'Road': 'Ngatiawa Road (4km) , Mangaone South Road (5.3km), Kents Road (800m), Rangiora Road (2.1km), Terrace Road (1.4km)',
		'FromTo': 'Full length',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h for these roads is considered by the NZTA to best reflect the safety and use of these narrow, windy roads which are popular for cyclists and include access to tramping tracks, such as the Te Araroa walkway (off Mangaone South Road, Kapakapanui. These roads are also subject to logging activity. Having an area wide 60km/h will provide consistency across all these roads. The average speeds vehicles travel over the length of these roads is below 60 km/h so the proposed speed limit should not mean slower travel times.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map6-reikorangi.gif',
		'ImageBlurb': '"100" section of <strong>Reikorangi Road</strong> and <strong>Akatarawa Road</strong> and full length of <strong>Ngatiawa Road</strong>, <strong>Mangaone South Road</strong>, <strong>Kents Road</strong>, <strong>Rangiora Road</strong> and <strong>Terrace Road</strong>.',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map6-reikorangi.pdf',
		'PdfName': 'Map 6: Reikorangi, Waikanae'
	}],
	'Akatarawa Road': [{
		'Road': 'Akatarawa Road (3.6km long)',
		'FromTo': 'for the 100 km/h section of Akatarawa Road from Reikorangi Road to the  ‘50’ km/h signs at 147 Akatarawa Road (100m south of Ratadale Road)',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h is considered by the NZTA to best reflect the safety and use of this very narrow, windy road which is popular for cyclists and serves as a through route to Upper Hutt. The average speed vehicles travel over this road is below 60 km/h so the proposed speed limit will not mean slower travel times. To clarify Council would also like to reaffirm the ‘50’ from 147 Akatarawa Road to the Hutt City boundary is to stay ‘50’ as signed rather than be changed to 60.  While ‘50’ is not now used in rural areas, this was considered an exception as it was installed as part of a Land Transport Safety Authority (now NZTA), regional speed limit/speed zone study in 2006. The ’50’ reflects the road environment on both Council’s side and Hutt City’s side, and is consistent with their ‘50’ speed limit..',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map6-reikorangi.gif',
		'ImageBlurb': 'For the 100km/h section of <strong>Akatarawa Road</strong> from <strong>Reikorangi Road</strong> to the "50" km/h signs at 147 <strong>Akatarawa Road</strong> (100 m south of Ratadale Road).',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map6-reikorangi.pdf',
		'PdfName': 'Map 6: Reikorangi, Waikanae'
	}],
	'Reikorangi Road 70km section': [{
		'Road': 'Reikorangi Road (485m long)',
		'FromTo': 'for the 70 km/h section from 90m south Poneke Drive to 580m south Poneke Drive',
		'Current': '70',
		'Proposed': '60',
		'Rationale': 'This road is on the urban fringe of Waikanae, and includes access to the water treatment plant. The proposed 60 km/h is considered by the NZTA to best reflect the road environment and use, given 70 km/h is no longer an option for speed limits.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map6-reikorangi.gif',
		'ImageBlurb': '<strong>Reikorangi Road</strong> "70" section',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map6-reikorangi.pdf',
		'PdfName': 'Map 6: Reikorangi, Waikanae'
	}],
	'Reikorangi Road 100km section': [{
		'Road': 'Reikorangi Road (1.7km long)',
		'FromTo': 'for the 100 km/h section of Reikorangi Road from 580m south Poneke Drive to Akatarawa Road',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'While this road includes some straight sections the straights are interrupted by bends in the road, which has narrow shoulders, and is popular for cyclists, pedestrians and is used to access tramping tracks, including the Kapakapanui and Te Araroa walkway. 100km/h is considered inappropriate and most traffic travels well below 100 km/h. The proposed 60 km/h is considered by the NZTA to best reflect the road environment and use..',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map6-reikorangi.gif',
		'ImageBlurb': 'For the 100km/h section of <strong>Reikorangi Road</strong> from 580m south <strong>Poneke Drive</strong> to  <strong>Akatarawa Road</strong>',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map6-reikorangi.pdf',
		'PdfName': 'Map 6: Reikorangi, Waikanae'
	}],
	'Jacks Bush Road': [{
		'Road': 'Jacks Bush Road (300m long)',
		'FromTo': 'Full length',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h is considered by the NZTA to best reflect the safety and use of this no exit road which provides access to rural residential properties is consistent with the 60 km/h speed limit proposed for the adjoining Ngarara Road.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map7-ngarara-jacks-bush-smithfield.gif',
		'ImageBlurb': '<strong>Jacks Bush Road</strong> full length',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map7-ngarara-jacks-bush-smithfield.pdf',
		'PdfName': 'Map 7: Ngarara Road, Jacks Bush Road and Smithfield Road'
	}],
	'Ngarara Road': [{
		'Road': 'Ngarara Road (2.8km long)',
		'FromTo': 'for the 70 km/h section of Ngarara Road from Ferndale Drive north to the end',
		'Current': '70',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h is considered by the NZTA to best reflect the safety and use of this narrow, windy road and would be consistent with the 60 km/h speed limit on the adjoining Nga Manu Reserve Road and Maurice Smith Way. Ngarara Road is also used to access a tourist destination – The Nga Manu Reserve. The current average travel speeds on Ngarara Road are below 60 km/h so the proposed speed limit will not mean slower travel times and is unlikely to increase travel times as it’s appropriate for the road environment. ',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map7-ngarara-jacks-bush-smithfield.gif',
		'ImageBlurb': '70 km/h section of <strong>Ngarara Road</strong>.',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map7-ngarara-jacks-bush-smithfield.pdf',
		'PdfName': 'Map 7: Ngarara Road, Jacks Bush Road and Smithfield Road'
	}],
	'Smithfield Road': [{
		'Road': 'Smithfield Road,  Ngarara Road to end (400m long) ',
		'FromTo': 'Full length',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'Smithfield Road is accessed off Ngarara. The proposed 60 km/h is considered by the NZTA to best reflect the safety and use of this short no exit rural road which is used to access rural property. The proposed 60 km/h speed limit is consistent with the proposed 60 km/h speed limit on Ngarara Road and with the current 60 km/h speed limits on other roads in this area (Maurice Smith Way and with Nga Manu Reserve Road).',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map7-ngarara-jacks-bush-smithfield.gif',
		'ImageBlurb': '<strong>Smithfield Road</strong> full length.',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map7-ngarara-jacks-bush-smithfield.pdf',
		'PdfName': 'Map 7: Ngarara Road, Jacks Bush Road and Smithfield Road'
	}],
	'Hadfield and Octavius Roads; Te Kowhai and Gary Roads': [{
		'Road': 'Hadfield Road (810m), Octavius Road (420m), Te Kowhai Road (370m), Gary Road (890m)',
		'FromTo': 'Full length',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h is considered by the NZTA to best reflect the safety and use of these narrow rural roads which provide access to rural properties. The current 100 km/h speed limit is out of context with the adjoining much higher quality expressway off ramps at the Peka Peka expressway which have a 80 km/h speed limit. The current average travel speeds on these roads are below 60 km/h so the proposed speed limit will not mean slower travel times.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map8-pekapeka.gif',
		'ImageBlurb': '<strong>Te Kowhai</strong> and <strong>Gary Roads</strong>. <strong>Hadfield</strong> and <strong>Octavius Roads</strong>',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map8-pekapeka.pdf',
		'PdfName': 'Map 8: Peka Peka'
	}],
	'Gear Road': [{
		'Road': 'Gear Road (1.3m long)',
		'FromTo': 'for the section of Gear Road from 90m west of Settlement Road to the end of Gear Road',
		'Current': '80',
		'Proposed': '60',
		'Rationale': 'Gear Road narrows and the terrain becomes more undulating from the approach to Settlement Road intersection to the end, the terrain also limits visibility at this intersection. The proposed 60 km/h is considered by the NZTA to best reflect the safety and use of this end of Gear Road, which provides access to rural lifestyle properties and to a Lavender Farm which is a tourist destination.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map9-tehoro.gif',
		'ImageBlurb': '<strong>Gear Road</strong> from 90m west of <strong>Settlement Road</strong> to the end. <strong>Settlement, Sutton</strong> and <strong>Best Roads</strong> - full length.',
		'PdfUrl':  domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map9-tehoro.pdf',
		'PdfName': 'Map 9: Te Horo'
	}],
	'Settlement, Sutton and Best Roads': [{
		'Road': 'Settlement Road (1.6 km), Sutton Road (350m), Best Road (370m)',
		'FromTo': 'Full length',
		'Current': '80',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h is considered by the NZTA to best reflect the safety and use of these narrow roads, which also provides access to rural properties and a Lavender Farm (off Settlement Road) which is a tourist destination. The current average travel speeds on these roads are below 60 km/h so the proposed speed limit will not mean slower travel times.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map9-tehoro.gif',
		'ImageBlurb': '<strong>Settlement, Sutton</strong> and <strong>Best Roads</strong> - full length.',
		'PdfUrl':  domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map9-tehoro.pdf',
		'PdfName': 'Map 9: Te Horo'
	}],
	'Waitohu Valley Road 80km section': [{
		'Road': 'Waitohu Valley Road (2km long)',
		'FromTo': 'for the 80 km/h section of Waitohu Valley Road from number 77 to 277 Waitohu Valley Road',
		'Current': '80',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h is considered by the NZTA to best reflect the safety and use of this road which is near a school and on the urban fringe of Ōtaki. The average traffic speed currently travel this road is below 60 km/h. This road also connects to Horowhenua District Council and provides access to the local Quarry.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map10-otaki.gif',
		'ImageBlurb': '"80" section of <strong>Waitohu Valley Road</strong>',
		'PdfUrl':  domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map10-otaki.pdf',
		'PdfName': 'Map 10: Ōtaki'
	}],
	'Waitohu Valley Road 100km section': [{
		'Road': 'Waitohu Valley Road (740m long)',
		'FromTo': 'for the 100 km/h section of Waitohu Valley Road from number 277 Waitohu Valley Road to the Council boundary',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h is considered by the NZTA to best reflect the safety and use of this narrow, windy road. The average traffic speed currently travel this road is below 60 km/h. This road also connects to Horowhenua District Council and provides access to the local Quarry.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map10-otaki.gif',
		'ImageBlurb': '"100" section of <strong>Waitohu Valley Road</strong>',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map10-otaki.pdf',
		'PdfName': 'Map 10: Ōtaki'
	}],
	'Greenwood Boulevard, Sunglo Terrace': [{
		'Road': 'Greenwood Boulevard (1.2 km), Sunglo Terrace (600m)',
		'FromTo': 'Full length',
		'Current': '80',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h is considered by the NZTA to best reflect the safety and use of these narrow roads which provide access to rural properties. The average traffic speed currently travel this road is below 60 km/h..',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map10-otaki.gif',
		'ImageBlurb': '<strong>Greenwood Boulevard</strong> and <strong>Sunglo Terrace</strong>',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map10-otaki.pdf',
		'PdfName': 'Map 10: Ōtaki'
	}],
	'Ringawhati Road': [{
		'Road': 'Ringawhati Road (1.8 km long)',
		'FromTo': 'Full length',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h is considered by the NZTA to best reflect the safety and use of this rural road which lies between Rahui Road and Waitohu Valley Road The average traffic speed currently travel this road is below 60 km/h.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map10-otaki.gif',
		'ImageBlurb': '<strong>Ringawhati Road</strong> and "100" section of <strong>Rahui Road</strong> and <strong>Waimanu Road</strong>',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map10-otaki.pdf',
		'PdfName': 'Map 10: Ōtaki'
	}],
	'Rahui Road': [{
		'Road': 'Rahui Road (13.4 km), Waimanu Road (500m)',
		'FromTo': 'for the 100 km/h section of Rahui Road from 186 Rahui Road east to the end of Rahui Road',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h is considered by the NZTA to best reflect the safety and use of these narrow, windy roads that serve to access rural properties. The average traffic speed currently travel this road is below 60 km/h.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map10-otaki.gif',
		'ImageBlurb': '<strong>Ringawati Road</strong> and "100" section of <strong>Rahui Road</strong>',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map10-otaki.pdf',
		'PdfName': 'Map 10: Ōtaki'
	}]
};

function addNewRoad(title, attributes, count){
	//Allow an external site to be added, so we will need to check to see if the URL contains a https or www as all internal links exclude this and all external ones requires either of these and can contain both.
	//Remember -1 means not found. This allows us to easily change between production and uat with allowing for externally linked pages such as the QE2 park link which goes to a central government page
	
	var parkList = [
		'<div class="panel panel-default">',
			'<div class="panel-heading ' + ((count == 0) ? '' : 'collapsed') + '" data-toggle="collapse" data-parent="#accordion" data-target="#collapse' + count + '" >',
				'<h4 class="panel-title">',
					'<a class="accordion-toggle">' + title + '</a>',
				'</h4>',
			'</div>',
			'<div id="collapse' + count + '" class="panel-collapse collapse ' + ((count == 0) ? 'in' : '') + '">',
				'<div class="panel-body">',
					'<div>',
						'<p><strong>Road name: </strong>' + attributes['Road'] + '</p>',
						'<p><strong>From/to: </strong>' + attributes['FromTo'] +  '</p>',
						'<p><strong>Current speed:</strong> ' + attributes['Current'] + ' km/h</p>',
						'<p><strong>Proposed speed:</strong> ' + attributes['Proposed'] + ' km/h</p>', 
						'<p><strong>Why a change is proposed: </strong>' + attributes['Rationale'] + '</p>',
						'<p><strong>Road Map:</strong></p>',
						'<div class=>',
							'<img class="img-responsive" alt="' + title + '" src="' + attributes['ImageUrl'] + '" title="' + title + '" style="margin: 0 auto; padding: 3px; border: 1px solid #ddd; border-radius: 3px; transition: all 0.2s ease-in-out; width: 85%; height: 85%;" >',
						'</p>',
						'<p style="text-align:center">' + attributes['ImageBlurb'] + '</p>',
						'<br>',
						'<p><strong>Full PDF: </strong><a target="_blank" href="' + attributes['PdfUrl'] + '">' + attributes['PdfName'] + '<a/></p>',
					'</div>',
				'</div>',
			'</div>',
		'</div>'
	];

	$( "#accordion" ).append( parkList.join(' ') );
}		


$(document).ready(function() {
	//Add accordion element
	$('<div id="accordion" class="panel-group"></div>' ).insertAfter( "#top-element" );

	var count = 0;
	$.each(roads, function(road, attrs) {
		addNewRoad(road, attrs[0], count++);
	});	
	
});