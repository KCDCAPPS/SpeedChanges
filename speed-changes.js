var environmentProd = true;
var domain = ((environmentProd)? 'http://www.kapiticoast.govt.nz/' : 'http://uat.kapiticoast.govt.nz.testwin.gdmedia.tv/');

var pramRoads = 
{
	'PAEKĀKĀRIKI VILLAGE CENTRE - Beach Road': [{
		'Road': 'Beach Road',
		'FromTo': 'From SH1 to The Parade (223m).',
		'Current': '50',
		'Proposed': '30',
		'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map1-paekakariki-hill.gif',
		'ImageBlurb': '"70" section of <strong>SH1</strong> that includes the intersection with <strong>Beach Road</strong> and <strong>Paekakariki Hill Road</strong>. <strong>Paekakariki Hill Road</strong> Kapiti Coast District Council part from SH1 to the Council bounday at the Lookout',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map1-paekakariki-hill.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'PAEKĀKĀRIKI VILLAGE CENTRE - Ames Street': [{
		'Road': 'Ames Street',
		'FromTo': 'From Beach Road to 5 Ames Street (25m)',
		'Current': '50',
		'Proposed': '30',
		'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map1-paekakariki-hill.gif',
		'ImageBlurb': 'The current 70 km/h section (includes the intersection with Beach Road and Pāekākariki Hill Road)',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map1-paekakariki-hill.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'PAEKĀKĀRIKI VILLAGE CENTRE - The Parade': [{
		'Road': 'The Parade',
		'FromTo': 'From Beach Road to north end of 3 The Parade (37m)',
		'Current': '50',
		'Proposed': '30',
		'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map1-paekakariki-hill.gif',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map2-maungakotukutuku-valley-road.gif',
		'ImageBlurb': '221 <strong>Valley Road</strong> to <strong>Waterfall Road</strong> and all of <strong>Maungakotukutuku Road</strong>',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map2-maungakotukutuku-valley-road.pdf',
		'PdfName': 'Map 2: Maungakotukutuku Road and Valley Road'
	}],
	'PAEKĀKĀRIKI VILLAGE CENTRE - Wellington Road': [{
		'Road': 'Wellington Road',
		'FromTo': 'From Beach Road north to 11 Wellington Road (91m)',
		'Current': '50',
		'Proposed': '30',
		'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map1-paekakariki-hill.gif',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map2-maungakotukutuku-valley-road.gif',
		'ImageBlurb': '221 <strong>Valley Road</strong> to <strong>Waterfall Road</strong> and all of <strong>Maungakotukutuku Road</strong>',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map2-maungakotukutuku-valley-road.pdf',
		'PdfName': 'Map 2: Maungakotukutuku Road and Valley Road'
	}],
	'RAUMATI SOUTH VILLAGE CENTRE - Poplar Avenue': [{
		'Road': 'Poplar Avenue',
		'FromTo': 'From 23 Poplar Avenue to 45 Poplar Avenue (185m).',
		'Current': '40',
		'Proposed': '30',
		'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map2-maungakotukutuku-valley-road.gif',
		'ImageBlurb': '"70" section of <strong>Valley Road</strong>.',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map2-maungakotukutuku-valley-road.pdf',
		'PdfName': 'Map 2: Maungakotukutuku Road and Valley Road'
	}],
	'RAUMATI SOUTH VILLAGE CENTRE - Renown Road': [{
		'Road': 'Renown Road',
		'FromTo': 'From Poplar Avenue to 3 Renown Road (32m)',
		'Current': '40',
		'Proposed': '30',
		'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map3-poplar-ave-option1.gif',
		'ImageBlurb': '60m east <strong>Matai Road</strong> to <strong>The Esplanade</strong> extending 15m into <strong>Renown Road</strong>',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map3-poplar-ave-option1.pdf',
		'PdfName': 'Map 3: Poplar Avenue, Raumati South - Option 1'
	}],
	'RAUMATI SOUTH VILLAGE CENTRE - Glen Road' [{
		'Road': 'Glen Road',
		'FromTo': 'From Poplar Avenue to boundary between 3 and 5 Glen Road (55m)',
		'Current': '40',
		'Proposed': '30',
		'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map4-garden-road.gif',
		'ImageBlurb': '<strong>Garden Road</strong> looping around from <strong>Rosetta Road</strong>, Raumati Gardens, Waterfront Restaurant and Bar to <strong>Matatua Road</strong>.',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map4-garden-road.pdf',
		'PdfName': 'Map 4: Garden Road, Raumati Beach'
	}],
	'RAUMATI SOUTH VILLAGE CENTRE - Tennis Court Road' : [{
		'Road': 'Tennis Court Road',
		'FromTo': 'From Poplar Avenue to 2 Tennis Court Road (40m)',
		'Current': '40',
		'Proposed': '30',
		'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map5-nikau-valley.gif',
		'ImageBlurb': 'The "80" section of <strong>Nikau Palm Road</strong> located from 57m east of <strong>Te Topi Road</strong> to <strong>Maui Pomare Street</strong>.',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map5-nikau-valley.pdf',
		'PdfName': 'Map 5: Nikau Valley, Paraparaumu'
	}],
	'RAUMATI BEACH VILLAGE - Raumati Road': [{
		'Road': 'Raumati Road',
		'FromTo': 'From to Matatua Road to 23 Raumati Road (155m)',
		'Current': '50',
		'Proposed': '30',
		'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map5-nikau-valley.gif',
		'ImageBlurb': '<strong>Maui Pomare, Mahaki, Anlaby Roads</strong> and <strong>Angus</strong> and <strong>Eucalyptus Way</strong>',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map5-nikau-valley.pdf',
		'PdfName': 'Map 5: Nikau Valley, Paraparaumu'
	}],
	'RAUMATI BEACH VILLAGE - Margaret Road': [{
		'Road': 'Margaret Road',
		'FromTo': 'From Raumati Road to 30 Margaret Road (212m)',
		'Current': '50',
		'Proposed': '30',
		'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map6-reikorangi.gif',
		'ImageBlurb': '"100" section of <strong>Reikorangi Road</strong> and <strong>Akatarawa Road</strong> and full length of <strong>Ngatiawa Road</strong>, <strong>Mangaone South Road</strong>, <strong>Kents Road</strong>, <strong>Rangiora Road</strong> and <strong>Terrace Road</strong>.',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map6-reikorangi.pdf',
		'PdfName': 'Map 6: Reikorangi, Waikanae'
	}],
	'RAUMATI BEACH VILLAGE - Victor Road': [{
		'Road': 'Victor Road',
		'FromTo': 'Full length: From Rosetta Road to Margaret Road (127m)',
		'Current': '50',
		'Proposed': '30',
		'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map6-reikorangi.gif',
		'ImageBlurb': 'For the 100km/h section of <strong>Akatarawa Road</strong> from <strong>Reikorangi Road</strong> to the "50" km/h signs at 147 <strong>Akatarawa Road</strong> (100 m south of Ratadale Road).',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map6-reikorangi.pdf',
		'PdfName': 'Map 6: Reikorangi, Waikanae'
	}],
	'RAUMATI BEACH VILLAGE - Rosetta Road': [{
		'Road': 'Rosetta Road',
		'FromTo': 'From 351 Rosetta Road to Raumati Road (163m)',
		'Current': '50',
		'Proposed': '30',
		'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map6-reikorangi.gif',
		'ImageBlurb': '<strong>Reikorangi Road</strong> "70" section',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map6-reikorangi.pdf',
		'PdfName': 'Map 6: Reikorangi, Waikanae'
	}],
	'RAUMATI BEACH VILLAGE - Alexander Road': [{
		'Road': 'Alexander Road',
		'FromTo': 'From Raumati Road to 8 Alexander Road (45m)',
		'Current': '50',
		'Proposed': '30',
		'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map6-reikorangi.gif',
		'ImageBlurb': 'For the 100km/h section of <strong>Reikorangi Road</strong> from 580m south <strong>Poneke Drive</strong> to  <strong>Akatarawa Road</strong>',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map6-reikorangi.pdf',
		'PdfName': 'Map 6: Reikorangi, Waikanae'
	}],
	'RAUMATI BEACH VILLAGE - Kowhai Grove': [{
		'Road': 'Kowhai Grove',
		'FromTo': 'Full length: From Alexander Road to end (194m)',
		'Current': '50',
		'Proposed': '30',
		'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map7-ngarara-jacks-bush-smithfield.gif',
		'ImageBlurb': '<strong>Jacks Bush Road</strong> full length',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map7-ngarara-jacks-bush-smithfield.pdf',
		'PdfName': 'Map 7: Ngarara Road, Jacks Bush Road and Smithfield Road'
	}],
	'RAUMATI BEACH VILLAGE - Matatua Road': [{
		'Road': 'Matatua Road',
		'FromTo': 'From Raumati Road to 10 Matatua Road (116m)',
		'Current': '50',
		'Proposed': '30',
		'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map7-ngarara-jacks-bush-smithfield.gif',
		'ImageBlurb': '70 km/h section of <strong>Ngarara Road</strong>.',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map7-ngarara-jacks-bush-smithfield.pdf',
		'PdfName': 'Map 7: Ngarara Road, Jacks Bush Road and Smithfield Road'
	}],
	'OTAIHANGA and RATANUI - Killalea Place': [{
		'Road': 'Killalea Place',
		'FromTo': 'Full length: From Ratanui Road to end (670m)',
		'Current': '70',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is consistent with the adjoining 60 km/h on Ratanui Road.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map7-ngarara-jacks-bush-smithfield.gif',
		'ImageBlurb': '<strong>Smithfield Road</strong> full length.',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map7-ngarara-jacks-bush-smithfield.pdf',
		'PdfName': 'Map 7: Ngarara Road, Jacks Bush Road and Smithfield Road'
	}],
	'OTAIHANGA and RATANUI - Greendale Drive': [{
		'Road': 'Greendale Drive',
		'FromTo': 'Full length: From Otaihanga Road to end (1054m)',
		'Current': '70',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit in Greendale and King Arthur Drive and side roads (Lancelot Grove, Merlin Court, Sea Poppy Way and Grand Poppa Way) is consistent with the 60 km/h speed limit on the adjoining Otaihanga Road.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map8-pekapeka.gif',
		'ImageBlurb': '<strong>Te Kowhai</strong> and <strong>Gary Roads</strong>. <strong>Hadfield</strong> and <strong>Octavius Roads</strong>',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map8-pekapeka.pdf',
		'PdfName': 'Map 8: Peka Peka'
	}],
	'OTAIHANGA and RATANUI - King Arthur Drive':  [{
		'Road': 'King Arthur Drive',
		'FromTo': 'Full length: From Greendale Drive to end (1490m)',
		'Current': '70',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit in Greendale and King Arthur Drive and side roads (Lancelot Grove, Merlin Court, Sea Poppy Way and Grand Poppa Way) is consistent with the 60 km/h speed limit on the adjoining Otaihanga Road.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map9-tehoro.gif',
		'ImageBlurb': '<strong>Gear Road</strong> from 90m west of <strong>Settlement Road</strong> to the end. <strong>Settlement, Sutton</strong> and <strong>Best Roads</strong> - full length.',
		'PdfUrl':  domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map9-tehoro.pdf',
		'PdfName': 'Map 9: Te Horo'
	}],
	'OTAIHANGA and RATANUI - Lancelot Grove':  [{
		'Road': 'SLancelot Grove',
		'FromTo': 'Full length: From King Arthur Drive to end (180m)',
		'Current': '70',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit in Greendale and King Arthur Drive and side roads (Lancelot Grove, Merlin Court, Sea Poppy Way and Grand Poppa Way) is consistent with the 60 km/h speed limit on the adjoining Otaihanga Road.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map9-tehoro.gif',
		'ImageBlurb': '<strong>Settlement, Sutton</strong> and <strong>Best Roads</strong> - full length.',
		'PdfUrl':  domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map9-tehoro.pdf',
		'PdfName': 'Map 9: Te Horo'
	}],
	'OTAIHANGA and RATANUI - Merlin Court':  [{
		'Road': 'Merlin Court',
		'FromTo': 'Full length: From King Arthur Drive to end (223m)',
		'Current': '70',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit in Greendale and King Arthur Drive and side roads (Lancelot Grove, Merlin Court, Sea Poppy Way and Grand Poppa Way) is consistent with the 60 km/h speed limit on the adjoining Otaihanga Road.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map10-otaki.gif',
		'ImageBlurb': '"80" section of <strong>Waitohu Valley Road</strong>',
		'PdfUrl':  domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map10-otaki.pdf',
		'PdfName': 'Map 10: Ōtaki'
	}],
	'OTAIHANGA and RATANUI - Sea Poppy Way':  [{
		'Road': 'Sea Poppy Way',
		'FromTo': 'Full length: From Greendale Drive to end (176m)',
		'Current': '70',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit in Greendale and King Arthur Drive and side roads (Lancelot Grove, Merlin Court, Sea Poppy Way and Grand Poppa Way) is consistent with the 60 km/h speed limit on the adjoining Otaihanga Road.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map10-otaki.gif',
		'ImageBlurb': '"100" section of <strong>Waitohu Valley Road</strong>',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map10-otaki.pdf',
		'PdfName': 'Map 10: Ōtaki'
	}],
	'OTAIHANGA and RATANUI - Grand Poppa Way':  [{
		'Road': 'Grand Poppa Way',
		'FromTo': 'Full length: From Greendale Drive to end (238m)',
		'Current': '70',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit in Greendale and King Arthur Drive and side roads (Lancelot Grove, Merlin Court, Sea Poppy Way and Grand Poppa Way) is consistent with the 60 km/h speed limit on the adjoining Otaihanga Road.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map10-otaki.gif',
		'ImageBlurb': '<strong>Greenwood Boulevard</strong> and <strong>Sunglo Terrace</strong>',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map10-otaki.pdf',
		'PdfName': 'Map 10: Ōtaki'
	}]
};

var waikanaeRoads = 
{
	'WAIKANAE - Kebbell Drive': [{
		'Road': 'Kebbell Drive',
		'FromTo': 'Full length: From SH1 to Aston Road (865m).',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit best reflects the safety and use of these narrow windy no-exit roads, which provide access to rural residential properties.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map1-paekakariki-hill.gif',
		'ImageBlurb': '"70" section of <strong>SH1</strong> that includes the intersection with <strong>Beach Road</strong> and <strong>Paekakariki Hill Road</strong>. <strong>Paekakariki Hill Road</strong> Kapiti Coast District Council part from SH1 to the Council bounday at the Lookout',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map1-paekakariki-hill.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'WAIKANAE - Aston Road': [{
		'Road': 'Aston Road',
		'FromTo': 'Full length: From Kebell Drive to end (1184m)',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit best reflects the safety and use of these narrow windy no-exit roads, which provide access to rural residential properties.',
		'ImageBlurb': 'The current 70 km/h section (includes the intersection with Beach Road and Pāekākariki Hill Road)',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map1-paekakariki-hill.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'WAIKANAE - Huia Street': [{
		'Road': 'Huia Street',
		'FromTo': '70 km/h section: From 91 Huia Street to end (1.85m)',
		'Current': '70',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit best reflects the safety and use of these narrow windy no-exit roads, which provide access to rural residential properties.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map2-maungakotukutuku-valley-road.gif',
		'ImageBlurb': '221 <strong>Valley Road</strong> to <strong>Waterfall Road</strong> and all of <strong>Maungakotukutuku Road</strong>',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map2-maungakotukutuku-valley-road.pdf',
		'PdfName': 'Map 2: Maungakotukutuku Road and Valley Road'
	}],
	'WAIKANAE - Greenhill Road': [{
		'Road': 'Greenhill Road',
		'FromTo': 'Full length: From SH1 to end (1.6km)',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit best reflects the safety and use of these narrow windy no-exit roads, which provide access to rural residential properties.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map2-maungakotukutuku-valley-road.gif',
		'ImageBlurb': '221 <strong>Valley Road</strong> to <strong>Waterfall Road</strong> and all of <strong>Maungakotukutuku Road</strong>',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map2-maungakotukutuku-valley-road.pdf',
		'PdfName': 'Map 2: Maungakotukutuku Road and Valley Road'
	}],
	'WAIKANAE BEACH - Paetawa Road': [{
		'Road': 'Poplar Avenue',
		'FromTo': 'From start at Rutherford Drive to Paetawa Road frontage at between 5 and 3 Marram Way (66m).',
		'Current': '50',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit best reflects the safety and use of these adjoining sections of Paetawa Road and Rutherford Drive, which have few houses.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map2-maungakotukutuku-valley-road.gif',
		'ImageBlurb': '"70" section of <strong>Valley Road</strong>.',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map2-maungakotukutuku-valley-road.pdf',
		'PdfName': 'Map 2: Maungakotukutuku Road and Valley Road'
	}],
	'WAIKANAE BEACH - Rutherford Drive': [{
		'Road': 'Rutherford Drive,
		'FromTo': 'From 39 Rutherford Drive at 390m north of Reeves Street to end Paetawa Road (1082m',
		'Current': '50',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit best reflects the safety and use of these adjoining sections of Paetawa Road and Rutherford Drive, which have few houses.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map3-poplar-ave-option1.gif',
		'ImageBlurb': '60m east <strong>Matai Road</strong> to <strong>The Esplanade</strong> extending 15m into <strong>Renown Road</strong>',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map3-poplar-ave-option1.pdf',
		'PdfName': 'Map 3: Poplar Avenue, Raumati South - Option 1'
	}],
	'PEKA PEKA EAST OF SH1 - Peka Peka Road' [{
		'Road': 'Peka Peka Road',
		'FromTo': 'From SH1 to 94 Peka Peka Road (820m)',
		'Current': '80',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered to best reflect the safety and use of this windy undulating road which provides access to rural properties, Kensington Drive, Harrisons Garden Centre, SH1, Paetawa, Waikanae, and the Expressway shared path. This section of road is popular with cyclists, walkers and equestrians, but has no separate facilities (path) or shoulder for them to travel off the road. The proposed speed limit is consistent with the speed traffic travels through this section of road.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map4-garden-road.gif',
		'ImageBlurb': '<strong>Garden Road</strong> looping around from <strong>Rosetta Road</strong>, Raumati Gardens, Waterfront Restaurant and Bar to <strong>Matatua Road</strong>.',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map4-garden-road.pdf',
		'PdfName': 'Map 4: Garden Road, Raumati Beach'
	}],
	'PEKA PEKA EAST OF SH1 - Kensington Drive' [{
		'Road': 'Kensington Drive',
		'FromTo': 'Full length: From Peka Peka Road to end (518m)',
		'Current': '80',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit best reflects the safety and use of this no exit rural road.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map5-nikau-valley.gif',
		'ImageBlurb': 'The "80" section of <strong>Nikau Palm Road</strong> located from 57m east of <strong>Te Topi Road</strong> to <strong>Maui Pomare Street</strong>.',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map5-nikau-valley.pdf',
		'PdfName': 'Map 5: Nikau Valley, Paraparaumu'
	}],
	'PEKA PEKA EAST OF SH1 - Raukawa Road' [{
		'Road': 'Raukawa Road',
		'FromTo': 'Full length: From Peka Peka Road to end (770m)',
		'Current': '80',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit best reflects the safety and use of this no-exit road with rural lifestyle housing.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map5-nikau-valley.gif',
		'ImageBlurb': '<strong>Maui Pomare, Mahaki, Anlaby Roads</strong> and <strong>Angus</strong> and <strong>Eucalyptus Way</strong>',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map5-nikau-valley.pdf',
		'PdfName': 'Map 5: Nikau Valley, Paraparaumu'
	}],
	'PEKA PEKA EAST OF SH1 - Pingao Lane' [{
		'Road': 'Pingao Lane',
		'FromTo': 'Full length: From Paetawa Road north to end (491m)',
		'Current': '100',
		'Proposed': '50',
		'Rationale': 'These short no exit roads are off Paetawa Road just north of Peka Peka Road, which has a 50 km/hr speed limit. Both these short roads have a similar level of housing and layout to Paetawa Road and so should take on the same 50 km/h speed limit.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map6-reikorangi.gif',
		'ImageBlurb': '"100" section of <strong>Reikorangi Road</strong> and <strong>Akatarawa Road</strong> and full length of <strong>Ngatiawa Road</strong>, <strong>Mangaone South Road</strong>, <strong>Kents Road</strong>, <strong>Rangiora Road</strong> and <strong>Terrace Road</strong>.',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map6-reikorangi.pdf',
		'PdfName': 'Map 6: Reikorangi, Waikanae'
	}],
	'PEKA PEKA EAST OF SH1 - Pairuku Lane' [{
		'Road': 'Pairuku Lane',
		'FromTo': 'Full length: From Paetawa Road north to end (230m)',
		'Current': '100',
		'Proposed': '50',
		'Rationale': 'These short no exit roads are off Paetawa Road just north of Peka Peka Road, which has a 50 km/hr speed limit. Both these short roads have a similar level of housing and layout to Paetawa Road and so should take on the same 50 km/h speed limit.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map6-reikorangi.gif',
		'ImageBlurb': 'For the 100km/h section of <strong>Akatarawa Road</strong> from <strong>Reikorangi Road</strong> to the "50" km/h signs at 147 <strong>Akatarawa Road</strong> (100 m south of Ratadale Road).',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map6-reikorangi.pdf',
		'PdfName': 'Map 6: Reikorangi, Waikanae'
	}],
	'TE HAPUA ROAD AND SIDE ROADS - Te Hapua Road': [{
		'Road': 'Te Hapua Road',
		'FromTo': 'Full length: From SH1 to end (3060m)',
		'Current': '80',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered to best reflect the safety and use of Te Hapua Road, which is a windy rural residential no-exit road',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map6-reikorangi.gif',
		'ImageBlurb': '<strong>Reikorangi Road</strong> "70" section',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map6-reikorangi.pdf',
		'PdfName': 'Map 6: Reikorangi, Waikanae'
	}],
	'TE HAPUA ROAD AND SIDE ROADS - Derham Road': [{
		'Road': 'Derham Road',
		'FromTo': 'Full length: From Te Hapua to end (1925 m)',
		'Current': '80',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed for this windy undulating rural road.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map7-ngarara-jacks-bush-smithfield.gif',
		'ImageBlurb': '<strong>Jacks Bush Road</strong> full length',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map7-ngarara-jacks-bush-smithfield.pdf',
		'PdfName': 'Map 7: Ngarara Road, Jacks Bush Road and Smithfield Road'
	}]
};

var otakiRoads = 
{
	'TE HAPUA ROAD AND SIDE ROADS - Paul Faith Lane': [{
		'Road': 'Paul Faith Lane',
		'FromTo': 'Full length: From Derham to end (755m)',
		'Current': '80',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for this no-exit rural road and is consistent with the 60 km/h speed limit proposed for the adjoining Derham Road.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map1-paekakariki-hill.gif',
		'ImageBlurb': '"70" section of <strong>SH1</strong> that includes the intersection with <strong>Beach Road</strong> and <strong>Paekakariki Hill Road</strong>. <strong>Paekakariki Hill Road</strong> Kapiti Coast District Council part from SH1 to the Council bounday at the Lookout',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map1-paekakariki-hill.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'TE HAPUA ROAD AND SIDE ROADS - Morrison Road': [{
		'Road': 'Morrison Road',
		'FromTo': 'Full length: From Derham to Pukenamau (730m)',
		'Current': '80',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for this no-exit rural road and is consistent with the 60 km/h speed limit proposed for the adjoining Derham Road.',
		'ImageBlurb': 'The current 70 km/h section (includes the intersection with Beach Road and Pāekākariki Hill Road)',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map1-paekakariki-hill.pdf',
		'PdfName': 'Map 1: Paekākāriki Hill Road and SH1'
	}],
	'TE HAPUA ROAD AND SIDE ROADS - Puruaha Road': [{
		'Road': 'Puruaha Road',
		'FromTo': 'Full length: From Pukenamu Road to end (1338m)',
		'Current': '80',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for Purahau Road and adjoining short Mahurenga Lane, which both have rural residential development.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map2-maungakotukutuku-valley-road.gif',
		'ImageBlurb': '221 <strong>Valley Road</strong> to <strong>Waterfall Road</strong> and all of <strong>Maungakotukutuku Road</strong>',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map2-maungakotukutuku-valley-road.pdf',
		'PdfName': 'Map 2: Maungakotukutuku Road and Valley Road'
	}],
	'PAEKĀKĀRIKI VILLAGE CENTRE - Mahurenga Lane': [{
		'Road': 'Mahurenga Lane',
		'FromTo': 'Full length: From Puruaha Road to end (395 m)',
		'Current': '80',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for Purahau Road and adjoining short Mahurenga Lane, which both have rural residential development.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map2-maungakotukutuku-valley-road.gif',
		'ImageBlurb': '221 <strong>Valley Road</strong> to <strong>Waterfall Road</strong> and all of <strong>Maungakotukutuku Road</strong>',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map2-maungakotukutuku-valley-road.pdf',
		'PdfName': 'Map 2: Maungakotukutuku Road and Valley Road'
	}],
	'TE HORO BEACH NORTH - Te Horo Beach Road Part 1': [{
		'Road': 'Te Horo Beach Road Part 1',
		'FromTo': 'The 80km/h section the 50/80 sign on Te Horo Road to 70m east of the 1st one lane bridge (530m)',
		'Current': '80',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is safe and appropriate for this section of road with a one lane bridge and the intersection with Pukenamu Road.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map2-maungakotukutuku-valley-road.gif',
		'ImageBlurb': '"70" section of <strong>Valley Road</strong>.',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map2-maungakotukutuku-valley-road.pdf',
		'PdfName': 'Map 2: Maungakotukutuku Road and Valley Road'
	}],
	'TE HORO BEACH NORTH - Te Horo Beach Road Part 2': [{
		'Road': 'Te Horo Beach Road Part 2',
		'FromTo': 'The 80 km/h section from 80m west of the 2nd one lane bridge at 181 Te Horo Beach Road to SH1 (1600m).',
		'Current': '80',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is safe and appropriate for this windy section of road which includes a one lane bridge and extends to SH1.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map2-maungakotukutuku-valley-road.gif',
		'ImageBlurb': '"70" section of <strong>Valley Road</strong>.',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map2-maungakotukutuku-valley-road.pdf',
		'PdfName': 'Map 2: Maungakotukutuku Road and Valley Road'
	}],
	'TE HORO BEACH NORTH - Harakeke Road': [{
		'Road': 'Harakeke Road',
		'FromTo': 'Full length: From Te Horo Beach Road to end (2297 m)',
		'Current': '80',
		'Proposed': '60',
		'Rationale': 'The proposed 60km/h speed limit is considered the safe and appropriate speed limit for this no-exit rural road.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map4-garden-road.gif',
		'ImageBlurb': '<strong>Garden Road</strong> looping around from <strong>Rosetta Road</strong>, Raumati Gardens, Waterfront Restaurant and Bar to <strong>Matatua Road</strong>.',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map4-garden-road.pdf',
		'PdfName': 'Map 4: Garden Road, Raumati Beach'
	}],
	'TE HORO BEACH NORTH - Addington Road': [{
		'Road': 'Addington Road',
		'FromTo': 'Full length: From SH1 to end (1062m)',
		'Current': '70',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for this windy rural road and reflects the speed at which traffic travels.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map5-nikau-valley.gif',
		'ImageBlurb': 'The "80" section of <strong>Nikau Palm Road</strong> located from 57m east of <strong>Te Topi Road</strong> to <strong>Maui Pomare Street</strong>.',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map5-nikau-valley.pdf',
		'PdfName': 'Map 5: Nikau Valley, Paraparaumu'
	}],
	'TE HORO BEACH NORTH - Lethbridge Road': [{
		'Road': 'Lethbridge Road',
		'FromTo': 'Full length: From Te Waka Road to end (1024m)',
		'Current': '80',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for these windy rural roads and reflects the speed at which traffic travels.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map5-nikau-valley.gif',
		'ImageBlurb': '<strong>Maui Pomare, Mahaki, Anlaby Roads</strong> and <strong>Angus</strong> and <strong>Eucalyptus Way</strong>',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map5-nikau-valley.pdf',
		'PdfName': 'Map 5: Nikau Valley, Paraparaumu'
	}],
	'TE HORO BEACH NORTH - Swamp Road': [{
		'Road': 'Swamp Road',
		'FromTo': 'Full length: From Te Waka Road to end (1906 m)',
		'Current': '80',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for these windy rural roads and reflects the speed at which traffic travels.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map6-reikorangi.gif',
		'ImageBlurb': '"100" section of <strong>Reikorangi Road</strong> and <strong>Akatarawa Road</strong> and full length of <strong>Ngatiawa Road</strong>, <strong>Mangaone South Road</strong>, <strong>Kents Road</strong>, <strong>Rangiora Road</strong> and <strong>Terrace Road</strong>.',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map6-reikorangi.pdf',
		'PdfName': 'Map 6: Reikorangi, Waikanae'
	}],
	'TE HORO BEACH NORTH - Te Waka Road': [{
		'Road': 'Te Waka Road',
		'FromTo': 'Full length: From SH1 to Lethbridge Road (3178m)',
		'Current': '80',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for these windy rural roads and reflects the speed at which traffic travels.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map6-reikorangi.gif',
		'ImageBlurb': 'For the 100km/h section of <strong>Akatarawa Road</strong> from <strong>Reikorangi Road</strong> to the "50" km/h signs at 147 <strong>Akatarawa Road</strong> (100 m south of Ratadale Road).',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map6-reikorangi.pdf',
		'PdfName': 'Map 6: Reikorangi, Waikanae'
	}],
	'TE HORO East of SH1 - School Road': [{
		'Road': 'School Road',
		'FromTo': 'From 90m west of Hautere Cross Road to Hautere Cross Road (90m)',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for this short eastern section of School Road and is consistent with the proposed 60 km/h speed limit for the adjoining Hautere Cross Road section.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map6-reikorangi.gif',
		'ImageBlurb': '<strong>Reikorangi Road</strong> "70" section',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map6-reikorangi.pdf',
		'PdfName': 'Map 6: Reikorangi, Waikanae'
	}],
	'TE HORO East of SH1 - Arcus Road': [{
		'Road': 'Arcus Road',
		'FromTo': 'Full length: From School Road to end (1192m)',
		'Current': '50',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for this no-exit rural road.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map6-reikorangi.gif',
		'ImageBlurb': 'For the 100km/h section of <strong>Reikorangi Road</strong> from 580m south <strong>Poneke Drive</strong> to  <strong>Akatarawa Road</strong>',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map6-reikorangi.pdf',
		'PdfName': 'Map 6: Reikorangi, Waikanae'
	}],
	'TE HORO East of SH1 - Blackburne Road': [{
		'Road': 'Blackburne Road',
		'FromTo': 'Full length: From School Road /Hautere Cross Road intersection to end (372m)',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is appropriate for this short access road and is consistent with the 60 km/h speed limit proposed for the adjoining roads.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map7-ngarara-jacks-bush-smithfield.gif',
		'ImageBlurb': '<strong>Jacks Bush Road</strong> full length',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map7-ngarara-jacks-bush-smithfield.pdf',
		'PdfName': 'Map 7: Ngarara Road, Jacks Bush Road and Smithfield Road'
	}],
	'TE HORO East of SH1 - Mickell Road Part 1': [{
		'Road': 'Mickell Road Part 1',
		'FromTo': 'From Hautere Cross Road to end of straight (300m)',
		'Current': '100',
		'Proposed': '80',
		'Rationale': 'The proposed 80 km/h speed limit is considered the safe and appropriate speed limit and is consistent with the proposed 80 km/h speed limit for the adjoining section of Hautere Cross Road.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map7-ngarara-jacks-bush-smithfield.gif',
		'ImageBlurb': '70 km/h section of <strong>Ngarara Road</strong>.',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map7-ngarara-jacks-bush-smithfield.pdf',
		'PdfName': 'Map 7: Ngarara Road, Jacks Bush Road and Smithfield Road'
	}],
	'TE HORO East of SH1 - Mickell Road Part 2': [{
		'Road': 'Mickell Road Part 2',
		'FromTo': 'From end of straight to end of road (820m)',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for this windy narrow end section of this rural road.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map7-ngarara-jacks-bush-smithfield.gif',
		'ImageBlurb': '<strong>Smithfield Road</strong> full length.',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map7-ngarara-jacks-bush-smithfield.pdf',
		'PdfName': 'Map 7: Ngarara Road, Jacks Bush Road and Smithfield Road'
	}],
	'TE HORO East of SH1 - Catley Road': [{
		'Road': 'Catley Road',
		'FromTo': 'Full length (885m)',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for this windy rural no-exit road and is consistent with the 60 km/h speed limit proposed for the adjoining section of Hautere Cross Road.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map8-pekapeka.gif',
		'ImageBlurb': '<strong>Te Kowhai</strong> and <strong>Gary Roads</strong>. <strong>Hadfield</strong> and <strong>Octavius Roads</strong>',
		'PdfUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map8-pekapeka.pdf',
		'PdfName': 'Map 8: Peka Peka'
	}],
	'TE HORO East of SH1 - Mangaone North Road':  [{
		'Road': 'Mangaone North Road',
		'FromTo': 'From Hautere Cross Road to end (3892m)',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for this section of road and is consistent with the 60 km/h speed limit proposed for the adjoining section of Hautere Cross Road.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map9-tehoro.gif',
		'ImageBlurb': '<strong>Gear Road</strong> from 90m west of <strong>Settlement Road</strong> to the end. <strong>Settlement, Sutton</strong> and <strong>Best Roads</strong> - full length.',
		'PdfUrl':  domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map9-tehoro.pdf',
		'PdfName': 'Map 9: Te Horo'
	}],
	'TE HORO East of SH1 - Hautere Cross Road Part 1':  [{
		'Road': 'Hautere Cross Road Part 1'',
		'FromTo': 'From School Road to 218 Hautere Cross Road (at 150m south west of Mickell Road) (410m)',
		'Current': '100',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for this windy section of road and reflects the speed at which traffic travels.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map9-tehoro.gif',
		'ImageBlurb': '<strong>Settlement, Sutton</strong> and <strong>Best Roads</strong> - full length.',
		'PdfUrl':  domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map9-tehoro.pdf',
		'PdfName': 'Map 9: Te Horo'
	}],
	'TE HORO East of SH1 - Hautere Cross Road Part 2':  [{
		'Road': 'Hautere Cross Road Part 2',
		'FromTo': 'From 218 Hautere Cross Road to the current location of the 80/100 km/h speed limit sign at 348 Hautere Cross Road (i.e. 256m south west of Ōtaki Gorge Road) (1520m)',
		'Current': '100',
		'Proposed': '80',
		'Rationale': 'The proposed 80 km/h speed limit is considered the safe and appropriate speed limit for this straight section of road and reflects the speed at which traffic travels.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map10-otaki.gif',
		'ImageBlurb': '"80" section of <strong>Waitohu Valley Road</strong>',
		'PdfUrl':  domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/pdf/map10-otaki.pdf',
		'PdfName': 'Map 10: Ōtaki'
	}],
	'TE HORO East of SH1 - Hautere Cross Road Part 3':  [{
		'Road': 'Hautere Cross Road Part 3',
		'FromTo': 'From 348 Hautere Cross Road to Ōtaki Gorge Road to (250m)',
		'Current': '80',
		'Proposed': '60',
		'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for this section of road and the intersecting Ōtaki Gorge Road and reflects the speed at which traffic travels.',
		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map10-otaki.gif',
		'ImageBlurb': '"100" section of <strong>Waitohu Valley Road</strong>',
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