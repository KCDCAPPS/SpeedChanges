var domain = ''

var allRoads = 
{
	'Paraparaumu Roads': {
		'PAEKĀKĀRIKI VILLAGE CENTRE - Beach Road': [{
			'Road': 'Beach Road',
			'FromTo': 'From SH1 to The Parade (223m).',
			'Current': '50',
			'Proposed': '30',
			'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map1-paekakariki-village-centre.gif',
			'ImageBlurb': '<strong>Beach Road</strong>(full length).',
			'PdfUrl': domain + 'assets/pdfs/map1-paekakariki-village-centre.pdf',
			'PdfName': 'Map 1: Paekākāriki Village Centre'
		}],
		'PAEKĀKĀRIKI VILLAGE CENTRE - Ames Street': [{
			'Road': 'Ames Street',
			'FromTo': 'From Beach Road to 5 Ames Street (25m)',
			'Current': '50',
			'Proposed': '30',
			'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map1-paekakariki-village-centre.gif',
			'ImageBlurb': '<strong>Ames Street</strong> from Beach Road to 5 Ames Street.',
			'PdfUrl': domain + 'assets/pdfs/map1-paekakariki-village-centre.pdf',
			'PdfName': 'Map 1: Paekākāriki Village Centre'
		}],
		'PAEKĀKĀRIKI VILLAGE CENTRE - The Parade': [{
			'Road': 'The Parade',
			'FromTo': 'From Beach Road to north end of 3 The Parade (37m)',
			'Current': '50',
			'Proposed': '30',
			'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map1-paekakariki-hill.gif',
			'ImageUrl': domain + 'assets/images/map1-paekakariki-village-centre.gif',
			'ImageBlurb': '<strong>The Parade</strong> from Beach Road to north end of 3 The Parade.',
			'PdfUrl': domain + 'assets/pdfs/map1-paekakariki-village-centre.pdf',
			'PdfName': 'Map 1: Paekākāriki Village Centre'
		}],
		'PAEKĀKĀRIKI VILLAGE CENTRE - Wellington Road': [{
			'Road': 'Wellington Road',
			'FromTo': 'From Beach Road north to 11 Wellington Road (91m)',
			'Current': '50',
			'Proposed': '30',
			'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',		'ImageUrl': domain + 'globalassets/your-council/projects/kapiti-speed-limits-review/images/map1-paekakariki-hill.gif',
			'ImageUrl': domain + 'assets/images/map1-paekakariki-village-centre.gif',
			'ImageBlurb': '<strong>Wellington Road</strong> from Beach Road north to 11 Wellington Road.',
			'PdfUrl': domain + 'assets/pdfs/map1-paekakariki-village-centre.pdf',
			'PdfName': 'Map 1: Paekākāriki Village Centre'
		}],
		'RAUMATI SOUTH VILLAGE CENTRE - Poplar Avenue': [{
			'Road': 'Poplar Avenue',
			'FromTo': 'From 23 Poplar Avenue to 45 Poplar Avenue (185m).',
			'Current': '40',
			'Proposed': '30',
			'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map2-raumati-south-village-centre.gif',
			'ImageBlurb': '<strong>Poplar Avenue</strong> from 23 Poplar Avenue to 45 Poplar Avenue.',
			'PdfUrl': domain + 'assets/pdfs/map2-raumati-south-village-centre.pdf',
			'PdfName': 'Map 2: Raumati South Village Centre'
		}],
		'RAUMATI SOUTH VILLAGE CENTRE - Renown Road': [{
			'Road': 'Renown Road',
			'FromTo': 'From Poplar Avenue to 3 Renown Road (32m)',
			'Current': '40',
			'Proposed': '30',
			'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map2-raumati-south-village-centre.gif',
			'ImageBlurb': '<strong>Renown Road</strong> from Poplar Avenue to 3 Renown Road.',
			'PdfUrl': domain + 'assets/pdfs/map2-raumati-south-village-centre.pdf',
			'PdfName': 'Map 2: Raumati South Village Centre'
		}],
		'RAUMATI SOUTH VILLAGE CENTRE - Glen Road' : [{
			'Road': 'Glen Road',
			'FromTo': 'From Poplar Avenue to boundary between 3 and 5 Glen Road (55m)',
			'Current': '40',
			'Proposed': '30',
			'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map2-raumati-south-village-centre.gif',
			'ImageBlurb': '<strong>Glen Road</strong> from Poplar Avenue to 5 Glen Road..',
			'PdfUrl': domain + 'assets/pdfs/map2-raumati-south-village-centre.pdf',
			'PdfName': 'Map 2: Raumati South Village Centre'
		}],
		'RAUMATI SOUTH VILLAGE CENTRE - Tennis Court Road' : [{
			'Road': 'Tennis Court Road',
			'FromTo': 'From Poplar Avenue to 2 Tennis Court Road (40m)',
			'Current': '40',
			'Proposed': '30',
			'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map2-raumati-south-village-centre.gif',
			'ImageBlurb': '<strong>Tennis Court Road</strong> from Poplar Avenue to 2 Tennis Court Road.',
			'PdfUrl': domain + 'assets/pdfs/map2-raumati-south-village-centre.pdf',
			'PdfName': 'Map 2: Raumati South Village Centre'
		}],
		'RAUMATI BEACH VILLAGE - Raumati Road': [{
			'Road': 'Raumati Road',
			'FromTo': 'From to Matatua Road to 23 Raumati Road (155m)',
			'Current': '50',
			'Proposed': '30',
			'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map3-raumati-beach-village-centre.gif',
			'ImageBlurb': '<strong>Raumati Road</strong> from Matatua Road to 23 Raumati Road.',
			'PdfUrl': domain + 'assets/pdfs/map3-raumati-beach-village-centre.pdf',
			'PdfName': 'Map 3: Raumati Beach Village Centre'
		}],
		'RAUMATI BEACH VILLAGE - Margaret Road': [{
			'Road': 'Margaret Road',
			'FromTo': 'From Raumati Road to 30 Margaret Road (212m)',
			'Current': '50',
			'Proposed': '30',
			'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map3-raumati-beach-village-centre.gif',
			'ImageBlurb': '<strong>Margaret Road</strong> from Raumati Road to 30 Margaret Road.',
			'PdfUrl': domain + 'assets/pdfs/map3-raumati-beach-village-centre.pdf',
			'PdfName': 'Map 3: Raumati Beach Village Centre'
		}],
		'RAUMATI BEACH VILLAGE - Victor Road': [{
			'Road': 'Victor Road',
			'FromTo': 'Full length: From Rosetta Road to Margaret Road (127m)',
			'Current': '50',
			'Proposed': '30',
			'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map3-raumati-beach-village-centre.gif',
			'ImageBlurb': '<strong>Victor Road<strong> (full length).',
			'PdfUrl': domain + 'assets/pdfs/map3-raumati-beach-village-centre.pdf',
			'PdfName': 'Map 3: Raumati Beach Village Centre'
		}],
		'RAUMATI BEACH VILLAGE - Rosetta Road': [{
			'Road': 'Rosetta Road',
			'FromTo': 'From 351 Rosetta Road to Raumati Road (163m)',
			'Current': '50',
			'Proposed': '30',
			'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map3-raumati-beach-village-centre.gif',
			'ImageBlurb': '<strong>Rosetta Road</strong> from 351 Rosetta Road to Raumati Road.',
			'PdfUrl': domain + 'assets/pdfs/map3-raumati-beach-village-centre.pdf',
			'PdfName': 'Map 3: Raumati Beach Village Centre'
		}],
		'RAUMATI BEACH VILLAGE - Alexander Road': [{
			'Road': 'Alexander Road',
			'FromTo': 'From Raumati Road to 8 Alexander Road (45m)',
			'Current': '50',
			'Proposed': '30',
			'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map3-raumati-beach-village-centre.gif',
			'ImageBlurb': '<strong>Alexander Road</strong> from Raumati Road to 8 Alexander Road.',
			'PdfUrl': domain + 'assets/pdfs/map3-raumati-beach-village-centre.pdf',
			'PdfName': 'Map 3: Raumati Beach Village Centre'
		}],
		'RAUMATI BEACH VILLAGE - Kowhai Grove': [{
			'Road': 'Kowhai Grove',
			'FromTo': 'Full length: From Alexander Road to end (194m)',
			'Current': '50',
			'Proposed': '30',
			'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map3-raumati-beach-village-centre.gif',
			'ImageBlurb': '<strong>Kowhai Grove<strong> (full length).',
			'PdfUrl': domain + 'assets/pdfs/map3-raumati-beach-village-centre.pdf',
			'PdfName': 'Map 3: Raumati Beach Village Centre'
		}],
		'RAUMATI BEACH VILLAGE - Matatua Road': [{
			'Road': 'Matatua Road',
			'FromTo': 'From Raumati Road to 10 Matatua Road (116m)',
			'Current': '50',
			'Proposed': '30',
			'Rationale': 'The proposed 30 km/h speed limit is appropriate for a local village/town centre area, with a lot of pedestrian activity and vehicle movements. 30 km/h also reflects the speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map3-raumati-beach-village-centre.gif',
			'ImageBlurb': '<strong>Matatua Road</strong> from Raumati Road to 10 Matatua Road.',
			'PdfUrl': domain + 'assets/pdfs/map3-raumati-beach-village-centre.pdf',
			'PdfName': 'Map 3: Raumati Beach Village Centre'
		}],
		'OTAIHANGA and RATANUI - Killalea Place': [{
			'Road': 'Killalea Place',
			'FromTo': 'Full length: From Ratanui Road to end (670m)',
			'Current': '70',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is consistent with the adjoining 60 km/h on Ratanui Road.',
			'ImageUrl': domain + 'assets/images/map4-otaihanga.gif',
			'ImageBlurb': '<strong>Killalea Place</strong> (full length).',
			'PdfUrl': domain + 'assets/pdfs/map4-otaihanga.pdf',
			'PdfName': 'Map 4: Otaihanga'
		}],
		'OTAIHANGA and RATANUI - Greendale Drive': [{
			'Road': 'Greendale Drive',
			'FromTo': 'Full length: From Otaihanga Road to end (1054m)',
			'Current': '70',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit in Greendale and King Arthur Drive and side roads (Lancelot Grove, Merlin Court, Sea Poppy Way and Grand Poppa Way) is consistent with the 60 km/h speed limit on the adjoining Otaihanga Road.',
			'ImageUrl': domain + 'assets/images/map4-otaihanga.gif',
			'ImageBlurb': '<strong>Greendale Drive</strong> (full length).',
			'PdfUrl': domain + 'assets/pdfs/map4-otaihanga.pdf',
			'PdfName': 'Map 4: Otaihanga'
		}],
		'OTAIHANGA and RATANUI - King Arthur Drive':  [{
			'Road': 'King Arthur Drive',
			'FromTo': 'Full length: From Greendale Drive to end (1490m)',
			'Current': '70',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit in Greendale and King Arthur Drive and side roads (Lancelot Grove, Merlin Court, Sea Poppy Way and Grand Poppa Way) is consistent with the 60 km/h speed limit on the adjoining Otaihanga Road.',
			'ImageUrl': domain + 'assets/images/map4-otaihanga.gif',
			'ImageBlurb': '<strong>King Arthur Drive</strong> (full length).',
			'PdfUrl': domain + 'assets/pdfs/map4-otaihanga.pdf',
			'PdfName': 'Map 4: Otaihanga'
		}],
		'OTAIHANGA and RATANUI - Lancelot Grove':  [{
			'Road': 'SLancelot Grove',
			'FromTo': 'Full length: From King Arthur Drive to end (180m)',
			'Current': '70',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit in Greendale and King Arthur Drive and side roads (Lancelot Grove, Merlin Court, Sea Poppy Way and Grand Poppa Way) is consistent with the 60 km/h speed limit on the adjoining Otaihanga Road.',
			'ImageUrl': domain + 'assets/images/map4-otaihanga.gif',
			'ImageBlurb': '<strong>Lancelot Grove</strong> (full length).',
			'PdfUrl': domain + 'assets/pdfs/map4-otaihanga.pdf',
			'PdfName': 'Map 4: Otaihanga'
		}],
		'OTAIHANGA and RATANUI - Merlin Court':  [{
			'Road': 'Merlin Court',
			'FromTo': 'Full length: From King Arthur Drive to end (223m)',
			'Current': '70',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit in Greendale and King Arthur Drive and side roads (Lancelot Grove, Merlin Court, Sea Poppy Way and Grand Poppa Way) is consistent with the 60 km/h speed limit on the adjoining Otaihanga Road.',
			'ImageUrl': domain + 'assets/images/map4-otaihanga.gif',
			'ImageBlurb': '<strong>Merlin Court</strong> (full length).',
			'PdfUrl': domain + 'assets/pdfs/map4-otaihanga.pdf',
			'PdfName': 'Map 4: Otaihanga'
		}],
		'OTAIHANGA and RATANUI - Sea Poppy Way':  [{
			'Road': 'Sea Poppy Way',
			'FromTo': 'Full length: From Greendale Drive to end (176m)',
			'Current': '70',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit in Greendale and King Arthur Drive and side roads (Lancelot Grove, Merlin Court, Sea Poppy Way and Grand Poppa Way) is consistent with the 60 km/h speed limit on the adjoining Otaihanga Road.',
			'ImageUrl': domain + 'assets/images/map4-otaihanga.gif',
			'ImageBlurb': '<strong>Sea Poppy Way</strong> (full length).',
			'PdfUrl': domain + 'assets/pdfs/map4-otaihanga.pdf',
			'PdfName': 'Map 4: Otaihanga'
		}],
		'OTAIHANGA and RATANUI - Grand Poppa Way':  [{
			'Road': 'Grand Poppa Way',
			'FromTo': 'Full length: From Greendale Drive to end (238m)',
			'Current': '70',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit in Greendale and King Arthur Drive and side roads (Lancelot Grove, Merlin Court, Sea Poppy Way and Grand Poppa Way) is consistent with the 60 km/h speed limit on the adjoining Otaihanga Road.',
			'ImageUrl': domain + 'assets/images/map4-otaihanga.gif',
			'ImageBlurb': '<strong>Grand Poppa Way</strong> (full length).',
			'PdfUrl': domain + 'assets/pdfs/map4-otaihanga.pdf',
			'PdfName': 'Map 4: Otaihanga'
		}]
	},
	'waikanae Roads': {
		'WAIKANAE - Kebbell Drive': [{
			'Road': 'Kebbell Drive',
			'FromTo': 'Full length: From SH1 to Aston Road (865m).',
			'Current': '100',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit best reflects the safety and use of these narrow windy no-exit roads, which provide access to rural residential properties.',
			'ImageUrl': domain + 'assets/images/map5-kebbel-drive-and-aston-road-waikanae.gif',
			'ImageBlurb': '<strong>Kebbell Drive</strong> (full length).',
			'PdfUrl': domain + 'assets/pdfs/map5-kebbel-drive-and-aston-road-waikanae.pdf',
			'PdfName': 'Map 5: Kebbell Drive and Aston Road, Waikanae'
		}],
		'WAIKANAE - Aston Road': [{
			'Road': 'Aston Road',
			'FromTo': 'Full length: From Kebell Drive to end (1184m)',
			'Current': '100',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit best reflects the safety and use of these narrow windy no-exit roads, which provide access to rural residential properties.',
			'ImageUrl': domain + 'assets/images/map5-kebbel-drive-and-aston-road-waikanae.gif',
			'ImageBlurb': '<strong>Aston Road</strong> (full length).',
			'PdfUrl': domain + 'assets/pdfs/map5-kebbel-drive-and-aston-road-waikanae.pdf',
			'PdfName': 'Map 5: Kebbell Drive and Aston Road, Waikanae'
		}],
		'WAIKANAE - Huia Street': [{
			'Road': 'Huia Street',
			'FromTo': '70 km/h section: From 91 Huia Street to end (1.85m)',
			'Current': '70',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit best reflects the safety and use of these narrow windy no-exit roads, which provide access to rural residential properties.',
			'ImageUrl': domain + 'assets/images/map6-huia-street-and-greenhill-road-waikanae.gif',
			'ImageBlurb': '<strong>Huia Street</strong> 70 km/h section from 91 Huia Street to end.',
			'PdfUrl': domain + 'assets/images/map6-huia-street-and-greenhill-road-waikanae.pdf',
			'PdfName': 'Map 6: Huia Street and Greenhill Road, Waikanae'
		}],
		'WAIKANAE - Greenhill Road': [{
			'Road': 'Greenhill Road',
			'FromTo': 'Full length: From SH1 to end (1.6km)',
			'Current': '100',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit best reflects the safety and use of these narrow windy no-exit roads, which provide access to rural residential properties.',
			'ImageUrl': domain + 'assets/images/map6-huia-street-and-greenhill-road-waikanae.gif',
			'ImageBlurb': '<strong>Greenhill Road</strong> (full length).',
			'PdfUrl': domain + 'assets/images/map6-huia-street-and-greenhill-road-waikanae.pdf',
			'PdfName': 'Map 6: Huia Street and Greenhill Road, Waikanae'
		}],
		'WAIKANAE BEACH - Paetawa Road': [{
			'Road': 'Poplar Avenue',
			'FromTo': 'From start at Rutherford Drive to Paetawa Road frontage at between 5 and 3 Marram Way (66m).',
			'Current': '50',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit best reflects the safety and use of these adjoining sections of Paetawa Road and Rutherford Drive, which have few houses.',
			'ImageUrl': domain + 'assets/images/map7-waikanae-beach.gif',
			'ImageBlurb': '<strong>Paetawa Road</strong> and <strong>Rutherford Drive</strong> from 5 Marram Way frontage on Paetawa Road to 39 Rutherford Drive.',
			'PdfUrl': domain + 'assets/images/map7-waikanae-beach.pdf',
			'PdfName': 'Map 7: Waikanae beach.gif'
		}],
		'WAIKANAE BEACH - Rutherford Drive': [{
			'Road': 'Rutherford Drive',
			'FromTo': 'From 39 Rutherford Drive at 390m north of Reeves Street to end Paetawa Road (1082m',
			'Current': '50',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit best reflects the safety and use of these adjoining sections of Paetawa Road and Rutherford Drive, which have few houses.',
			'ImageUrl': domain + 'assets/images/map7-waikanae-beach.gif',
			'ImageBlurb': '<strong>Paetawa Road</strong> and <strong>Rutherford Drive</strong> from 5 Marram Way frontage on Paetawa Road to 39 Rutherford Drive.',
			'PdfUrl': domain + 'assets/images/map7-waikanae-beach.pdf',
			'PdfName': 'Map 7: Waikanae beach.gif'
		}],
		'PEKA PEKA EAST OF SH1 - Peka Peka Road' : [{
			'Road': 'Peka Peka Road',
			'FromTo': 'From SH1 to 94 Peka Peka Road (820m)',
			'Current': '80',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is considered to best reflect the safety and use of this windy undulating road which provides access to rural properties, Kensington Drive, Harrisons Garden Centre, SH1, Paetawa, Waikanae, and the Expressway shared path. This section of road is popular with cyclists, walkers and equestrians, but has no separate facilities (path) or shoulder for them to travel off the road. The proposed speed limit is consistent with the speed traffic travels through this section of road.',
			'ImageUrl': domain + 'assets/images/map8-peka-peka.gif',
			'ImageBlurb': '<strong>Peka Peka Road</strong> from SH1 to 94 Peka Peka Road.',
			'PdfUrl': domain + 'assets/pdfs/map8-peka-peka.pdf',
			'PdfName': 'Map 8: Peka Peka'
		}],
		'PEKA PEKA EAST OF SH1 - Kensington Drive' : [{
			'Road': 'Kensington Drive',
			'FromTo': 'Full length: From Peka Peka Road to end (518m)',
			'Current': '80',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit best reflects the safety and use of this no exit rural road.',
			'ImageUrl': domain + 'assets/images/map8-peka-peka.gif',
			'ImageBlurb': '<strong>Kensington Drive</strong> (full lengths).',
			'PdfUrl': domain + 'assets/pdfs/map8-peka-peka.pdf',
			'PdfName': 'Map 8: Peka Peka'
		}],
		'PEKA PEKA EAST OF SH1 - Raukawa Road' : [{
			'Road': 'Raukawa Road',
			'FromTo': 'Full length: From Peka Peka Road to end (770m)',
			'Current': '80',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit best reflects the safety and use of this no-exit road with rural lifestyle housing.',
			'ImageUrl': domain + 'assets/images/map8-peka-peka.gif',
			'ImageBlurb': '<strong>Raukawa Road</strong> (full lengths).',
			'PdfUrl': domain + 'assets/pdfs/map8-peka-peka.pdf',
			'PdfName': 'Map 8: Peka Peka'
		}],
		'PEKA PEKA EAST OF SH1 - Pingao Lane' : [{
			'Road': 'Pingao Lane',
			'FromTo': 'Full length: From Paetawa Road north to end (491m)',
			'Current': '100',
			'Proposed': '50',
			'Rationale': 'These short no exit roads are off Paetawa Road just north of Peka Peka Road, which has a 50 km/hr speed limit. Both these short roads have a similar level of housing and layout to Paetawa Road and so should take on the same 50 km/h speed limit.',
			'ImageUrl': domain + 'assets/images/map8-peka-peka.gif',
			'ImageBlurb': '<strong>Pingao Lane</strong> (full lengths).',
			'PdfUrl': domain + 'assets/pdfs/map8-peka-peka.pdf',
			'PdfName': 'Map 8: Peka Peka'
		}],
		'PEKA PEKA EAST OF SH1 - Pairuku Lane' : [{
			'Road': 'Pairuku Lane',
			'FromTo': 'Full length: From Paetawa Road north to end (230m)',
			'Current': '100',
			'Proposed': '50',
			'Rationale': 'These short no exit roads are off Paetawa Road just north of Peka Peka Road, which has a 50 km/hr speed limit. Both these short roads have a similar level of housing and layout to Paetawa Road and so should take on the same 50 km/h speed limit.',
			'ImageUrl': domain + 'assets/images/map8-peka-peka.gif',
			'ImageBlurb': '<strong>Pairuku Lane</strong> (full lengths).',
			'PdfUrl': domain + 'assets/pdfs/map8-peka-peka.pdf',
			'PdfName': 'Map 8: Peka Peka'
		}],
		'TE HAPUA ROAD AND SIDE ROADS - Te Hapua Road' : [{
			'Road': 'Te Hapua Road',
			'FromTo': 'Full length: From SH1 to end (3060m)',
			'Current': '80',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is considered to best reflect the safety and use of Te Hapua Road, which is a windy rural residential no-exit road',
			'ImageUrl': domain + 'assets/images/map9-te-hapua-road-and-side-roads-te-horo.gif',
			'ImageBlurb': '<strong>Reikorangi Road</strong> "70" section',
			'PdfUrl': domain + 'assets/pdfs/map9-te-hapua-road-and-side-roads-te-horo.pdf',
			'PdfName': 'Map 9: Te Hapua Road and side roads, Te Horo'
		}],
		'TE HAPUA ROAD AND SIDE ROADS - Derham Road' : [{
			'Road': 'Derham Road',
			'FromTo': 'Full length: From Te Hapua to end (1925 m)',
			'Current': '80',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed for this windy undulating rural road.',
			'ImageUrl': domain + 'assets/images/map9-te-hapua-road-and-side-roads-te-horo.gif',
			'ImageBlurb': '<strong>Derham Road</strong> (full lengths).',
			'PdfUrl': domain + 'assets/pdfs/map9-te-hapua-road-and-side-roads-te-horo.pdf',
			'PdfName': 'Map 9: Te Hapua Road and side roads, Te Horo'
		}]
	}, 
	'Otaki Roads' : {
		'TE HAPUA ROAD AND SIDE ROADS - Paul Faith Lane' : [{
			'Road': 'Paul Faith Lane',
			'FromTo': 'Full length: From Derham to end (755m)',
			'Current': '80',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for this no-exit rural road and is consistent with the 60 km/h speed limit proposed for the adjoining Derham Road.',
			'ImageUrl': domain + 'assets/images/map9-te-hapua-road-and-side-roads-te-horo.gif',
			'ImageBlurb': '<strong>Paul Faith Lane</strong> (full lengths).',
			'PdfUrl': domain + 'assets/pdfs/map9-te-hapua-road-and-side-roads-te-horo.pdf',
			'PdfName': 'Map 9: Te Hapua Road and side roads, Te Horo'
		}],
		'TE HAPUA ROAD AND SIDE ROADS - Morrison Road' : [{
			'Road': 'Morrison Road',
			'FromTo': 'Full length: From Derham to Pukenamau (730m)',
			'Current': '80',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for this no-exit rural road and is consistent with the 60 km/h speed limit proposed for the adjoining Derham Road.',
			'ImageUrl': domain + 'assets/images/map9-te-hapua-road-and-side-roads-te-horo.gif',
			'ImageBlurb': '<strong>Morrison Road</strong> (full lengths).',
			'PdfUrl': domain + 'assets/pdfs/map9-te-hapua-road-and-side-roads-te-horo.pdf',
			'PdfName': 'Map 9: Te Hapua Road and side roads, Te Horo'
		}],
		'TE HAPUA ROAD AND SIDE ROADS - Puruaha Road' : [{
			'Road': 'Puruaha Road',
			'FromTo': 'Full length: From Pukenamu Road to end (1338m)',
			'Current': '80',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for Purahau Road and adjoining short Mahurenga Lane, which both have rural residential development.',
			'ImageUrl': domain + 'assets/images/map9-te-hapua-road-and-side-roads-te-horo.gif',
			'ImageBlurb': '<strong>Puruaha Road</strong> (full lengths).',
			'PdfUrl': domain + 'assets/pdfs/map9-te-hapua-road-and-side-roads-te-horo.pdf',
			'PdfName': 'Map 9: Te Hapua Road and side roads, Te Horo'
		}],
		'TE HAPUA ROAD AND SIDE ROAD - Mahurenga Lane' : [{
			'Road': 'Mahurenga Lane',
			'FromTo': 'Full length: From Puruaha Road to end (395 m)',
			'Current': '80',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for Purahau Road and adjoining short Mahurenga Lane, which both have rural residential development.',
			'ImageUrl': domain + 'assets/images/map9-te-hapua-road-and-side-roads-te-horo.gif',
			'ImageBlurb': '<strong>Mahurenga Lane</strong> (full lengths).',
			'PdfUrl': domain + 'assets/pdfs/map9-te-hapua-road-and-side-roads-te-horo.pdf',
			'PdfName': 'Map 9: Te Hapua Road and side roads, Te Horo'
		}],
		'TE HORO BEACH NORTH - Te Horo Beach Road Part 1' : [{
			'Road': 'Te Horo Beach Road Part 1',
			'FromTo': 'The 80km/h section the 50/80 sign on Te Horo Road to 70m east of the 1st one lane bridge (530m)',
			'Current': '80',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is safe and appropriate for this section of road with a one lane bridge and the intersection with Pukenamu Road.',
			'ImageUrl': domain + 'assets/images/map10-te-horo-beach-north.gif',
			'ImageBlurb': '<strong>Te Horo Beach Road</strong> from the 50/80 km/h speed limit signs to just past the 1st one lane bridge and',
			'PdfUrl': domain + 'assets/pdfs/map10-te-horo-beach-north.pdf',
			'PdfName': 'Map 10: Te Horo Beach north'
		}],
		'TE HORO BEACH NORTH - Te Horo Beach Road Part 2' : [{
			'Road': 'Te Horo Beach Road Part 2',
			'FromTo': 'The 80 km/h section from 80m west of the 2nd one lane bridge at 181 Te Horo Beach Road to SH1 (1600m).',
			'Current': '80',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is safe and appropriate for this windy section of road which includes a one lane bridge and extends to SH1.',
			'ImageUrl': domain + 'assets/images/map10-te-horo-beach-north.gif',
			'ImageBlurb': '<strong>Te Horo Beach Road</strong> from 80m west of the 2nd one way bridge to SH1',
			'PdfUrl': domain + 'assets/pdfs/map10-te-horo-beach-north.pdf',
			'PdfName': 'Map 10: Te Horo Beach north'
		}],
		'TE HORO BEACH NORTH - Harakeke Road' : [{
			'Road': 'Harakeke Road',
			'FromTo': 'Full length: From Te Horo Beach Road to end (2297 m)',
			'Current': '80',
			'Proposed': '60',
			'Rationale': 'The proposed 60km/h speed limit is considered the safe and appropriate speed limit for this no-exit rural road.',
			'ImageUrl': domain + 'assets/images/map10-te-horo-beach-north.gif',
			'ImageBlurb': '<strong>Harakeke Road</strong> (full lengths).',
			'PdfUrl': domain + 'assets/pdfs/map10-te-horo-beach-north.pdf',
			'PdfName': 'Map 10: Te Horo Beach north'
		}],
		'TE HORO BEACH NORTH - Addington Road' : [{
			'Road': 'Addington Road',
			'FromTo': 'Full length: From SH1 to end (1062m)',
			'Current': '70',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for this windy rural road and reflects the speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map10-te-horo-beach-north.gif',
			'ImageBlurb': '<strong>Addington Road</strong> (full lengths).',
			'PdfUrl': domain + 'assets/pdfs/map10-te-horo-beach-north.pdf',
			'PdfName': 'Map 10: Te Horo Beach north'
		}],
		'TE HORO BEACH NORTH - Lethbridge Road' : [{
			'Road': 'Lethbridge Road',
			'FromTo': 'Full length: From Te Waka Road to end (1024m)',
			'Current': '80',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for these windy rural roads and reflects the speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map10-te-horo-beach-north.gif',
			'ImageBlurb': '<strong>Lethbridge Road</strong> (full lengths).',
			'PdfUrl': domain + 'assets/pdfs/map10-te-horo-beach-north.pdf',
			'PdfName': 'Map 10: Te Horo Beach north'
		}],
		'TE HORO BEACH NORTH - Swamp Road' : [{
			'Road': 'Swamp Road',
			'FromTo': 'Full length: From Te Waka Road to end (1906 m)',
			'Current': '80',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for these windy rural roads and reflects the speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map10-te-horo-beach-north.gif',
			'ImageBlurb': '<strong>Swamp Road</strong> (full lengths).',
			'PdfUrl': domain + 'assets/pdfs/map10-te-horo-beach-north.pdf',
			'PdfName': 'Map 10: Te Horo Beach north'
		}],
		'TE HORO BEACH NORTH - Te Waka Road' : [{
			'Road': 'Te Waka Road',
			'FromTo': 'Full length: From SH1 to Lethbridge Road (3178m)',
			'Current': '80',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for these windy rural roads and reflects the speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map10-te-horo-beach-north.gif',
			'ImageBlurb': '<strong>Te Waka Road</strong> (full lengths).',
			'PdfUrl': domain + 'assets/pdfs/map10-te-horo-beach-north.pdf',
			'PdfName': 'Map 10: Te Horo Beach north'
		}],
		'TE HORO East of SH1 - School Road' : [{
			'Road': 'School Road',
			'FromTo': 'From 90m west of Hautere Cross Road to Hautere Cross Road (90m)',
			'Current': '100',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for this short eastern section of School Road and is consistent with the proposed 60 km/h speed limit for the adjoining Hautere Cross Road section.',
			'ImageUrl': domain + 'assets/images/map11-te-horo-east-of-sh1.gif',
			'ImageBlurb': '<strong>School Road</strong> from 90m west of Hautere Cross Road to Hautere Cross Road.',
			'PdfUrl': domain + 'assets/images/map11-te-horo-east-of-sh1.pdf',
			'PdfName': 'Map 11: Te Horo east of SH1'
		}],
		'TE HORO East of SH1 - Arcus Road' : [{
			'Road': 'Arcus Road',
			'FromTo': 'Full length: From School Road to end (1192m)',
			'Current': '50',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for this no-exit rural road.',
			'ImageUrl': domain + 'assets/images/map11-te-horo-east-of-sh1.gif',
			'ImageBlurb': '<strong>Arcus Road</strong> (full lengths).',
			'PdfUrl': domain + 'assets/pdfs/map11-te-horo-east-of-sh1.pdf',
			'PdfName': 'Map 11: Te Horo east of SH1'
		}],
		'TE HORO East of SH1 - Blackburne Road' : [{
			'Road': 'Blackburne Road',
			'FromTo': 'Full length: From School Road /Hautere Cross Road intersection to end (372m)',
			'Current': '100',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is appropriate for this short access road and is consistent with the 60 km/h speed limit proposed for the adjoining roads.',
			'ImageUrl': domain + 'assets/images/map11-te-horo-east-of-sh1.gif',
			'ImageBlurb': '<strong>Blackburne Road</strong> (full lengths).',
			'PdfUrl': domain + 'assets/pdfs/map11-te-horo-east-of-sh1.pdf',
			'PdfName': 'Map 11: Te Horo east of SH1'
		}],
		'TE HORO East of SH1 - Mickell Road Part 1' : [{
			'Road': 'Mickell Road Part 1',
			'FromTo': 'From Hautere Cross Road to end of straight (300m)',
			'Current': '100',
			'Proposed': '80',
			'Rationale': 'The proposed 80 km/h speed limit is considered the safe and appropriate speed limit and is consistent with the proposed 80 km/h speed limit for the adjoining section of Hautere Cross Road.',
			'ImageUrl': domain + 'assets/images/map11-te-horo-east-of-sh1.gif',
			'ImageBlurb': '<strong>Mickell Road</strong> from Hautere Cross Road to end of straight section.',
			'PdfUrl': domain + 'assets/pdfs/map11-te-horo-east-of-sh1.pdf',
			'PdfName': 'Map 11: Te Horo east of SH1'
		}],
		'TE HORO East of SH1 - Mickell Road Part 2' : [{
			'Road': 'Mickell Road Part 2',
			'FromTo': 'From end of the straight section to end of road (820m)',
			'Current': '100',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for this windy narrow end section of this rural road.',
			'ImageUrl': domain + 'assets/images/map11-te-horo-east-of-sh1.gif',
			'ImageBlurb': '<strong>Mickell Road</strong> from end of straight section to end of road.',
			'PdfUrl': domain + 'assets/pdfs/map11-te-horo-east-of-sh1.pdf',
			'PdfName': 'Map 11: Te Horo east of SH1'
		}],
		'TE HORO East of SH1 - Catley Road' : [{
			'Road': 'Catley Road',
			'FromTo': 'Full length (885m)',
			'Current': '100',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for this windy rural no-exit road and is consistent with the 60 km/h speed limit proposed for the adjoining section of Hautere Cross Road.',
			'ImageUrl': domain + 'assets/images/map11-te-horo-east-of-sh1.gif',
			'ImageBlurb': '<strong>Catley Road</strong> (full lengths).',
			'PdfUrl': domain + 'assets/pdfs/map11-te-horo-east-of-sh1.pdf',
			'PdfName': 'Map 11: Te Horo east of SH1'
		}],
		'TE HORO East of SH1 - Mangaone North Road' :  [{
			'Road': 'Mangaone North Road',
			'FromTo': 'From Hautere Cross Road to end (3892m)',
			'Current': '100',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for this section of road and is consistent with the 60 km/h speed limit proposed for the adjoining section of Hautere Cross Road.',
			'ImageUrl': domain + 'assets/images/map11-te-horo-east-of-sh1.gif',
			'ImageBlurb': '<strong>Mangaone North Road</strong> from Hautere Cross Road to end.',
			'PdfUrl': domain + 'assets/pdfs/map11-te-horo-east-of-sh1.pdf',
			'PdfName': 'Map 11: Te Horo east of SH1'
		}],
		'TE HORO East of SH1 - Hautere Cross Road Part 1' :  [{
			'Road': 'Hautere Cross Road Part 1',
			'FromTo': 'From School Road to 218 Hautere Cross Road (at 150m south west of Mickell Road) (410m)',
			'Current': '100',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for this windy section of road and reflects the speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map11-te-horo-east-of-sh1.gif',
			'ImageBlurb': '<strong>Hautere Cross Road</strong> from School Road to 150m south west of Mickell Road.',
			'PdfUrl': domain + 'assets/pdfs/map11-te-horo-east-of-sh1.pdf',
			'PdfName': 'Map 11: Te Horo east of SH1'
		}],
		'TE HORO East of SH1 - Hautere Cross Road Part 2' :  [{
			'Road': 'Hautere Cross Road Part 2',
			'FromTo': 'From 218 Hautere Cross Road to the current location of the 80/100 km/h speed limit sign at 348 Hautere Cross Road (i.e. 256m south west of Ōtaki Gorge Road) (1520m)',
			'Current': '100',
			'Proposed': '80',
			'Rationale': 'The proposed 80 km/h speed limit is considered the safe and appropriate speed limit for this straight section of road and reflects the speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map11-te-horo-east-of-sh1.gif',
			'ImageBlurb': '<strong>Hautere Cross Road<strong> from 256m south of Ōtaki Gorge Road to 150m south west of Mickell Road.',
			'PdfUrl': domain + 'assets/pdfs/map11-te-horo-east-of-sh1.pdf',
			'PdfName': 'Map 11: Te Horo east of SH1'
		}],
		'TE HORO East of SH1 - Hautere Cross Road Part 3' :  [{
			'Road': 'Hautere Cross Road Part 3',
			'FromTo': 'From 348 Hautere Cross Road to Ōtaki Gorge Road to (250m)',
			'Current': '80',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for this section of road and the intersecting Ōtaki Gorge Road and reflects the speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map11-te-horo-east-of-sh1.gif',
			'ImageBlurb': '<strong>Hautere Cross Road<strong> from 348 Hautere Cross Road to Ōtaki Gorge Road to (250m)',
			'PdfUrl': domain + 'assets/pdfs/map11-te-horo-east-of-sh1.pdf',
			'PdfName': 'Map 11: Te Horo east of SH1'
		}],
		'ŌTAKI GORGE ROAD - Harper Road' :  [{
			'Road': 'Harper Road',
			'FromTo': 'Full length: From Ōtaki Gorge Road to end (605m)',
			'Current': '100',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for these narrow rural no-exit roads.',
			'ImageUrl': domain + 'assets/images/map13-otaki-gorge-road-west.gif',
			'ImageBlurb': '<strong>Harper Road</strong> (full length).',
			'PdfUrl': domain + 'assets/pdfs/map13-otaki-gorge-road-west.pdf',
			'PdfName': 'Map 13: Ōtaki Gorge Road west'
		}],
		'ŌTAKI GORGE ROAD - Totaranui Road' :  [{
			'Road': 'Totaranui Road',
			'FromTo': 'Full length: From Ōtaki Gorge Road to end (430m)',
			'Current': '100',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for these narrow rural no-exit roads.',
			'ImageUrl': domain + 'assets/images/map13-otaki-gorge-road-west.gif',
			'ImageBlurb': '<strong>Totaranui Road</strong> (full length).',
			'PdfUrl': domain + 'assets/pdfs/map13-otaki-gorge-road-west.pdf',
			'PdfName': 'Map 13: Ōtaki Gorge Road west'
		}],
		'ŌTAKI GORGE ROAD - Old Hautere Road' :  [{
			'Road': 'Old Hautere Road',
			'FromTo': 'Full length: From SH1 to Otaki Gorge Road (3184m)',
			'Current': '100',
			'Proposed': '80',
			'Rationale': 'The proposed 80 km/h speed limit reflects the environment of this road.',
			'ImageUrl': domain + 'assets/images/map13-otaki-gorge-road-west.gif',
			'ImageBlurb': '<strong>Old Hautere Road</strong> from SH1 to Ōtaki Gorge Road (full length).',
			'PdfUrl': domain + 'assets/pdfs/map13-otaki-gorge-road-west.pdf',
			'PdfName': 'Map 13: Ōtaki Gorge Road west'
		}],
		'ŌTAKI GORGE ROAD - Ōtaki Gorge Road Part 1' :  [{
			'Road': 'Ōtaki Gorge Road Part 1',
			'FromTo': '<strong>Ōtaki Gorge Road</strong> from 550m south east of SH1 to the start of 80 km/h speed limit at 210m west of Hautere Cross Road.',
			'Current': '100',
			'Proposed': '80',
			'Rationale': 'The proposed 80 km/h speed limit reflects the environment of this road.',
			'ImageUrl': domain + 'assets/images/map13-otaki-gorge-road-west.gif',
			'ImageBlurb': '<strong>Hautere Cross Road<strong> from 348 Hautere Cross Road to Ōtaki Gorge Road to (250m)',
			'PdfUrl': domain + 'assets/pdfs/map13-otaki-gorge-road-west.pdf',
			'PdfName': 'Map 13: Ōtaki Gorge Road west'
		}],
		'ŌTAKI GORGE ROAD - Ōtaki Gorge Road Part 2' :  [{
			'Road': 'Ōtaki Gorge Road Part 2',
			'FromTo': '‘Totara Tunnel’ - The 80 km/h section from 205m north of Hautere Cross Road to 1890m south of Hautere Cross Road at 617 Ōtaki Gorge Road (2095m)',
			'Current': '80',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for this section of road, which is narrowed by Totara trees planted along both sides of the road, and has a number of property accesses. The road is popular for horse riding, walking and cycling. The trees limit visibility of vulnerable road users using the road, as well as residents accessing their properties.',
			'ImageUrl': domain + 'assets/images/map13-otaki-gorge-road-west.gif',
			'ImageBlurb': '<strong>Ōtaki Gorge Road</strong> from 210m west of Hautere Cross Road to 617 Ōtaki Gorge Road (know as the ‘Totara Tunnel’). From 348 <strong>Hautere Cross Road</strong> to Ōtaki Gorge Road.',
			'PdfUrl': domain + 'assets/pdfs/map13-otaki-gorge-road-west.pdf',
			'PdfName': 'Map 13: Ōtaki Gorge Road west'
		}],
		'ŌTAKI GORGE ROAD - Ōtaki Gorge Road Part 3' :  [{
			'Road': 'Ōtaki Gorge Road Part 3',
			'FromTo': 'From 617 to end of Ōtaki Gorge Road (8.7km)',
			'Current': '100',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for this section of Ōtaki Gorge Road through to where it ends at Ōtaki Forks as the entrance to the Tararua Forest Park',
			'ImageUrl': domain + 'assets/images/map12-otaki-gorge-road-east.gif',
			'ImageBlurb': '<strong>Ōtaki Gorge Road</strong> section from 617 to end at Ōtaki Forks.',
			'PdfUrl': domain + 'assets/pdfs/map12-otaki-gorge-road-east.pdf',
			'PdfName': 'Map 12: Ōtaki Gorge Road east'
		}],
		'ŌTAKI GORGE ROAD - Kaitawa Road' :  [{
			'Road': 'Kaitawa Road',
			'FromTo': 'Full length: From Ōtaki Gorge Road to end (1164m)',
			'Current': '100',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for these interconnecting narrow windy rural roads off the suspension bridge in Ōtaki Gorge Road, and reflects speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map12-otaki-gorge-road-east.gif',
			'ImageBlurb': '<strong>Kaitawa Road</strong> (full length).',
			'PdfUrl': domain + 'assets/pdfs/map12-otaki-gorge-road-east.pdf',
			'PdfName': 'Map 12: Ōtaki Gorge Road east'
		}],
		'ŌTAKI GORGE ROAD - Parenga Road' :  [{
			'Road': 'Parenga Road',
			'FromTo': 'Full length: From Kaitawa Road to end (950m)',
			'Current': '100',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for these interconnecting narrow windy rural roads off the suspension bridge in Ōtaki Gorge Road, and reflects speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map12-otaki-gorge-road-east.gif',
			'ImageBlurb': '<strong>Parenga Road</strong> (full length).',
			'PdfUrl': domain + 'assets/pdfs/map12-otaki-gorge-road-east.pdf',
			'PdfName': 'Map 12: Ōtaki Gorge Road east'
		}],
		'ŌTAKI GORGE ROAD - Waihoanga Road' :  [{
			'Road': 'Waihoanga Road',
			'FromTo': 'Full length: From Kaitawa Road to end (310m)',
			'Current': '100',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for these interconnecting narrow windy rural roads off the suspension bridge in Ōtaki Gorge Road, and reflects speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map12-otaki-gorge-road-east.gif',
			'ImageBlurb': '<strong>Waihoanga Road</strong> (full length).',
			'PdfUrl': domain + 'assets/pdfs/map12-otaki-gorge-road-east.pdf',
			'PdfName': 'Map 12: Ōtaki Gorge Road east'
		}],
		'ŌTAKI TOWNSHIP NORTH - Convent Road' :  [{
			'Road': 'Convent Road',
			'FromTo': 'From start of 80 km/h speed limit at 40m north Bennetts Road to end at Wairongomai Road (309m)',
			'Current': '100',
			'Proposed': '60',
			'Rationale': 'The proposed 60km/h speed limit is considered the safe and appropriate speed limit for these adjoining narrow windy rural roads and reflects speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map14-otaki-township-north.gif',
			'ImageBlurb': '<strong>Convent Road</strong> from start of 100 km/h speed limit north of Bennetts Road to end.',
			'PdfUrl': domain + 'assets/pdfs/map14-otaki-township-north.pdf',
			'PdfName': 'Map 14: Ōtaki Township north'
		}],
		'ŌTAKI TOWNSHIP NORTH - Wairongamai Road' :  [{
			'Road': 'Wairongamai Road',
			'FromTo': 'From Old Coach Road north to end (3322m)',
			'Current': '100',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for these interconnecting narrow windy rural roads off the suspension bridge in Ōtaki Gorge Road, and reflects speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map14-otaki-township-north.gif',
			'ImageBlurb': '<strong>Wairongamai Road</strong> (full length).',
			'PdfUrl': domain + 'assets/pdfs/map14-otaki-township-north.pdf',
			'PdfName': 'Map 14: Ōtaki Township north'
		}],
		'ŌTAKI TOWNSHIP NORTH - Old Coach Road north' :  [{
			'Road': 'Old Coach Road north',
			'FromTo': 'From Wairongamai Road to end (950m north) (840m south)',
			'Current': '100',
			'Proposed': '60',
			'Rationale': 'The proposed 60 km/h speed limit is considered the safe and appropriate speed limit for these interconnecting narrow windy rural roads off the suspension bridge in Ōtaki Gorge Road, and reflects speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map14-otaki-township-north.gif',
			'ImageBlurb': '<strong>Wairongamai Road</strong> (full length).',
			'PdfUrl': domain + 'assets/pdfs/map14-otaki-township-north.pdf',
			'PdfName': 'Map 14: Ōtaki Township north'
		}],
		'RURAL ROADS OFF SH1 NORTH OF ŌTAKI - Taylors Road (SH1 –end)' :  [{
			'Road': 'Taylors Road (SH1 –end)',
			'FromTo': 'Full length: From SH1 to end (157m (left) 3010 m (right) )',
			'Current': '100',
			'Proposed': '60',
			'Rationale': 'The proposed 60km/h speed limit is considered the safe and appropriate speed limit for these three narrow windy rural roads and reflects the speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map15-otaki-north.gif',
			'ImageBlurb': '<strong>Taylors Road</strong> (full length).',
			'PdfUrl': domain + 'assets/pdfs/map15-otaki-north.pdf',
			'PdfName': 'Map 15: Ōtaki north'
		}],
		'RURAL ROADS OFF SH1 NORTH OF ŌTAKI - Forest Lakes Road' :  [{
			'Road': 'Forest Lakes Road',
			'FromTo': 'Full length: From SH1 to end (1500m)',
			'Current': '100',
			'Proposed': '60',
			'Rationale': 'The proposed 60km/h speed limit is considered the safe and appropriate speed limit for these three narrow windy rural roads and reflects the speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map15-otaki-north.gif',
			'ImageBlurb': '<strong>Forest Lakes Road</strong> (full length).',
			'PdfUrl': domain + 'assets/pdfs/map15-otaki-north.pdf',
			'PdfName': 'Map 15: Ōtaki north'
		}],
		'RURAL ROADS OFF SH1 NORTH OF ŌTAKI - Atkins Road' :  [{
			'Road': 'Atkins Road',
			'FromTo': 'Full length: From SH1 to end (500m)',
			'Current': '100',
			'Proposed': '60',
			'Rationale': 'The proposed 60km/h speed limit is considered the safe and appropriate speed limit for these three narrow windy rural roads and reflects the speed at which traffic travels.',
			'ImageUrl': domain + 'assets/images/map15-otaki-north.gif',
			'ImageBlurb': '<strong>Atkins Road</strong> (full length).',
			'PdfUrl': domain + 'assets/pdfs/map15-otaki-north.pdf',
			'PdfName': 'Map 15: Ōtaki north'
		}]
		
	}
};

function addNewRoad(area, title, attributes, count){
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
							/*'<img class="img-responsive" alt="' + title + '" src="' + attributes['ImageUrl'] + '" title="' + title + '" style="margin: 0 auto; padding: 3px; border: 1px solid #ddd; border-radius: 3px; transition: all 0.2s ease-in-out; width: 85%; height: 85%;" >',*/
							'<img class="img-responsive" alt="' + title + '" src="' + attributes['ImageUrl'] + '" title="' + title + '" style="margin: 0 auto; padding: 3px; border: 1px solid #ddd; border-radius: 3px; transition: all 0.2s ease-in-out;" >',
						'</p>',
						'<p style="text-align:center">' + attributes['ImageBlurb'] + '</p>',
						'<br>',
						'<p><strong>Full PDF: </strong><a target="_blank" href="' + attributes['PdfUrl'] + '">' + attributes['PdfName'] + '<a/></p>',
					'</div>',
				'</div>',
			'</div>',
		'</div>'
	];

	$( "#" + area ).append( parkList.join(' ') );
}		

$(document).ready(function() {
	//Add accordion element
	$('<div id="accordion" class="panel-group"></div>' ).insertAfter( "#top-element" );

	var count = 0;
	$.each(allRoads, function(area, attrs) {
		var newChild = $('#first-div').append('<div id="' + area.replace(/\s/g, '') +'" class="panel-group"></div>')
		$('<h3>' + area + '</h3>' ).insertBefore( '#' + area.replace(/\s/g, '') );
		$.each(attrs, function(road, roadAttr) {
			addNewRoad(area.replace(/\s/g, ''), road, roadAttr[0], count++)
		});
	});	
	
});