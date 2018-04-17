
export const getCheckins = async () => {
    return new Promise((resolve, reject) => {
        const data = {
            "count": 1189,
            "items": [
                {
                    "id": "5ad25e07b2958f003969e887",
                    "createdAt": 1523736071,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "editableUntil": 1523822471000,
                    "venue": {
                        "id": "56c73a4a498ea736d7388245",
                        "name": "Ludlow Coffee Supply",
                        "contact": {
                            "phone": "2127777465",
                            "formattedPhone": "(212) 777-7465",
                            "facebook": "1743525479212616",
                            "facebookUsername": "ludlowcoffeesupply",
                            "facebookName": "Ludlow Coffee Supply"
                        },
                        "location": {
                            "address": "176 Ludlow St",
                            "crossStreet": "East Houston",
                            "lat": 40.721711037947095,
                            "lng": -73.98752102186039,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.721711037947095,
                                    "lng": -73.98752102186039
                                }
                            ],
                            "postalCode": "10002",
                            "cc": "US",
                            "city": "New York",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "176 Ludlow St (East Houston)",
                                "New York, NY 10002"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1e0931735",
                                "name": "Coffee Shop",
                                "pluralName": "Coffee Shops",
                                "shortName": "Coffee Shop",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 40,
                            "usersCount": 1319,
                            "checkinsCount": 2484
                        },
                        "url": "http://www.ludlowcoffeesupply.com",
                        "hasMenu": true,
                        "menu": {
                            "type": "Menu",
                            "label": "Menu",
                            "anchor": "View Menu",
                            "url": "https://foursquare.com/v/ludlow-coffee-supply/56c73a4a498ea736d7388245/menu",
                            "mobileUrl": "https://foursquare.com/v/56c73a4a498ea736d7388245/device_menu"
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "159429924"
                        },
                        "storeId": ""
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "53fe77e54b9048855b3648b6",
                        "name": "Lappy Toppy",
                        "image": {
                            "prefix": "https://irs2.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/laptop_4d7599.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 42
                        },
                        "pickerPosition": {
                            "page": 1,
                            "index": 18
                        },
                        "teaseText": "Check in at offices to unlock this sticker.",
                        "unlockText": "You're totally not reading BuzzFeed all day. Here’s a sticker for being so productive. Now back to that “Which Sticker Are You?” quiz.",
                        "bonusText": "Use at Offices for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5ad24f4498fbfc002c9707f7",
                    "createdAt": 1523732292,
                    "type": "checkin",
                    "entities": [
                        {
                            "indices": [
                                5,
                                9
                            ],
                            "type": "user",
                            "id": "43915299"
                        }
                    ],
                    "shout": "with Kate",
                    "timeZoneOffset": -240,
                    "with": [
                        {
                            "id": "43915299",
                            "firstName": "Kate",
                            "lastName": "Findlay",
                            "gender": "female",
                            "relationship": "friend",
                            "photo": {
                                "prefix": "https://igx.4sqi.net/img/user/",
                                "suffix": "/JBM32XXYVDSRWJYP.jpg"
                            }
                        }
                    ],
                    "editableUntil": 1523818692000,
                    "venue": {
                        "id": "44f2fa97f964a52010381fe3",
                        "name": "SoHo Park",
                        "contact": {
                            "phone": "2122192129",
                            "formattedPhone": "(212) 219-2129"
                        },
                        "location": {
                            "address": "62 Prince St",
                            "crossStreet": "at Lafayette St",
                            "lat": 40.723668668566816,
                            "lng": -73.99660135916726,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.723668668566816,
                                    "lng": -73.99660135916726
                                }
                            ],
                            "postalCode": "10012",
                            "cc": "US",
                            "city": "New York",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "62 Prince St (at Lafayette St)",
                                "New York, NY 10012"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d16c941735",
                                "name": "Burger Joint",
                                "pluralName": "Burger Joints",
                                "shortName": "Burgers",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/burger_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 235,
                            "usersCount": 13466,
                            "checkinsCount": 20708
                        },
                        "hasMenu": true,
                        "menu": {
                            "type": "Menu",
                            "label": "Menu",
                            "anchor": "View Menu",
                            "url": "https://foursquare.com/v/soho-park/44f2fa97f964a52010381fe3/menu",
                            "mobileUrl": "https://foursquare.com/v/44f2fa97f964a52010381fe3/device_menu"
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "52421613"
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "554149287b28d289d6e8e7e4",
                        "name": "Patty",
                        "image": {
                            "prefix": "https://irs3.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/burger_95a993.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 64
                        },
                        "pickerPosition": {
                            "page": 2,
                            "index": 16
                        },
                        "teaseText": "Check in at burger joints to unlock this sticker.",
                        "unlockText": "Know what’s better than a quarter pounder with cheese? Two quarter pounders with cheese. We'll get the defibrillator ready, you grab the ketchup.",
                        "bonusText": "Use at Burger Joints for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5ad245e3d3cce8002cb5a20c",
                    "createdAt": 1523729891,
                    "type": "checkin",
                    "entities": [
                        {
                            "indices": [
                                5,
                                9
                            ],
                            "type": "user",
                            "id": "43915299"
                        }
                    ],
                    "shout": "with Kate",
                    "timeZoneOffset": -240,
                    "with": [
                        {
                            "id": "43915299",
                            "firstName": "Kate",
                            "lastName": "Findlay",
                            "gender": "female",
                            "relationship": "friend",
                            "photo": {
                                "prefix": "https://igx.4sqi.net/img/user/",
                                "suffix": "/JBM32XXYVDSRWJYP.jpg"
                            }
                        }
                    ],
                    "editableUntil": 1523816291000,
                    "venue": {
                        "id": "56cb2d99498eb620bee31423",
                        "name": "Rapha NYC",
                        "contact": {
                            "twitter": "rapha"
                        },
                        "location": {
                            "address": "159 Prince St",
                            "lat": 40.72596825325445,
                            "lng": -74.00122621589483,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.72596825325445,
                                    "lng": -74.00122621589483
                                }
                            ],
                            "postalCode": "10012",
                            "cc": "US",
                            "city": "New York",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "159 Prince St",
                                "New York, NY 10012"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d103951735",
                                "name": "Clothing Store",
                                "pluralName": "Clothing Stores",
                                "shortName": "Apparel",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/apparel_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 15,
                            "usersCount": 745,
                            "checkinsCount": 1577
                        },
                        "url": "http://www.rapha.cc/us/en_US/",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5ad11e8e3149b9002cd82774",
                    "createdAt": 1523654286,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "editableUntil": 1523818797682,
                    "venue": {
                        "id": "4f53d65de4b0b589399898a1",
                        "name": "Artsy",
                        "contact": {
                            "twitter": "artsy"
                        },
                        "location": {
                            "address": "401 Broadway",
                            "lat": 40.71887928587247,
                            "lng": -74.0027432503005,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.71887928587247,
                                    "lng": -74.0027432503005
                                }
                            ],
                            "postalCode": "10013",
                            "cc": "US",
                            "city": "New York",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "401 Broadway",
                                "New York, NY 10013"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d125941735",
                                "name": "Tech Startup",
                                "pluralName": "Tech Startups",
                                "shortName": "Tech Startup",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/technology_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 6,
                            "usersCount": 649,
                            "checkinsCount": 2917
                        },
                        "venueRatingBlacklisted": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5ace7a75a2c00b002caebcb5",
                    "createdAt": 1523481205,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "5a7b5bd63b4e002096baf92b",
                        "name": "Hungry Ghost",
                        "contact": {},
                        "location": {
                            "address": "721 Metropolitan Ave",
                            "lat": 40.71456352958734,
                            "lng": -73.94502382371094,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.71456352958734,
                                    "lng": -73.94502382371094
                                }
                            ],
                            "postalCode": "11211",
                            "cc": "US",
                            "neighborhood": "Williamsburg",
                            "city": "New York",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "721 Metropolitan Ave",
                                "New York, NY 11211"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1e0931735",
                                "name": "Coffee Shop",
                                "pluralName": "Coffee Shops",
                                "shortName": "Coffee Shop",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 4,
                            "usersCount": 96,
                            "checkinsCount": 200
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5aca3991237dee002b835e25",
                    "createdAt": 1523202449,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "4dd10cf4b0fb25f6e3817b33",
                        "name": "Bagelsmith",
                        "contact": {
                            "phone": "3472940046",
                            "formattedPhone": "(347) 294-0046"
                        },
                        "location": {
                            "address": "566 Lorimer St",
                            "crossStreet": "at Metropolitan Ave",
                            "lat": 40.714049,
                            "lng": -73.949311,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.714049,
                                    "lng": -73.949311
                                }
                            ],
                            "postalCode": "11211",
                            "cc": "US",
                            "city": "Brooklyn",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "566 Lorimer St (at Metropolitan Ave)",
                                "Brooklyn, NY 11211"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d179941735",
                                "name": "Bagel Shop",
                                "pluralName": "Bagel Shops",
                                "shortName": "Bagels",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/bagels_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 104,
                            "usersCount": 4789,
                            "checkinsCount": 16509
                        },
                        "url": "http://bagelsmith.com",
                        "delivery": {
                            "id": "258954",
                            "url": "https://www.seamless.com/menu/bagelsmith-566-lorimer-st-brooklyn/258954?affiliate=1131&utm_source=foursquare-affiliate-network&utm_medium=affiliate&utm_campaign=1131&utm_content=258954",
                            "provider": {
                                "name": "seamless",
                                "icon": {
                                    "prefix": "https://igx.4sqi.net/img/general/cap/",
                                    "sizes": [
                                        40,
                                        50
                                    ],
                                    "name": "/delivery_provider_seamless_20180129.png"
                                }
                            }
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "70498251"
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5ac99a38fe3740002b641a38",
                    "createdAt": 1523161656,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "588fc49cf68d8d04baa98763",
                        "name": "Mezcaleria La Milagrosa Agave Bar and Listening Room",
                        "contact": {
                            "phone": "7185991499",
                            "formattedPhone": "(718) 599-1499"
                        },
                        "location": {
                            "address": "149 Havemeyer St",
                            "crossStreet": "S2nd",
                            "lat": 40.71180292789438,
                            "lng": -73.95736813604361,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.71180292789438,
                                    "lng": -73.95736813604361
                                }
                            ],
                            "postalCode": "11211",
                            "cc": "US",
                            "city": "Brooklyn",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "149 Havemeyer St (S2nd)",
                                "Brooklyn, NY 11211"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d116941735",
                                "name": "Bar",
                                "pluralName": "Bars",
                                "shortName": "Bar",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 15,
                            "usersCount": 326,
                            "checkinsCount": 413
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5ac98155dd12f80038a22b00",
                    "createdAt": 1523155285,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "4b525a4ef964a520d17827e3",
                        "name": "Tabaré",
                        "contact": {
                            "phone": "3473350187",
                            "formattedPhone": "(347) 335-0187",
                            "facebook": "221386369785",
                            "facebookUsername": "TabareRestaurant",
                            "facebookName": "Tabaré Restaurant"
                        },
                        "location": {
                            "address": "221 S 1st St",
                            "crossStreet": "btw Driggs & Roebling",
                            "lat": 40.71306928884032,
                            "lng": -73.95903127129245,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.71306928884032,
                                    "lng": -73.95903127129245
                                }
                            ],
                            "postalCode": "11211",
                            "cc": "US",
                            "city": "Brooklyn",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "221 S 1st St (btw Driggs & Roebling)",
                                "Brooklyn, NY 11211"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1cd941735",
                                "name": "South American Restaurant",
                                "pluralName": "South American Restaurants",
                                "shortName": "South American",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/argentinian_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 96,
                            "usersCount": 2844,
                            "checkinsCount": 4032
                        },
                        "url": "http://www.tabarenyc.com",
                        "hasMenu": true,
                        "menu": {
                            "type": "Menu",
                            "label": "Menu",
                            "anchor": "View Menu",
                            "url": "https://foursquare.com/v/tabar%C3%A9/4b525a4ef964a520d17827e3/menu",
                            "mobileUrl": "https://foursquare.com/v/4b525a4ef964a520d17827e3/device_menu",
                            "externalUrl": "http://tabarenyc.com/tabare_wp/menu1/"
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "78888804"
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5ac91e4131fd14002b830638",
                    "createdAt": 1523129921,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "4a0752b5f964a5204a731fe3",
                        "name": "Artist & Fleas",
                        "contact": {
                            "phone": "9174884203",
                            "formattedPhone": "(917) 488-4203"
                        },
                        "location": {
                            "address": "70 N. 7th Street",
                            "crossStreet": "btwn Wythe & Kent Ave",
                            "lat": 40.71987097978785,
                            "lng": -73.9613524414537,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.71987097978785,
                                    "lng": -73.9613524414537
                                }
                            ],
                            "postalCode": "11249",
                            "cc": "US",
                            "city": "Brooklyn",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "70 N. 7th Street (btwn Wythe & Kent Ave)",
                                "Brooklyn, NY 11249"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1f7941735",
                                "name": "Flea Market",
                                "pluralName": "Flea Markets",
                                "shortName": "Flea Market",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/fleamarket_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 58,
                            "usersCount": 7995,
                            "checkinsCount": 11170
                        },
                        "url": "https://www.artistsandfleas.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "81942245"
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5ac9080216ef67002bf145b2",
                    "createdAt": 1523124226,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "4a234718f964a520cb7d1fe3",
                        "name": "Beco",
                        "contact": {
                            "phone": "7185991645",
                            "formattedPhone": "(718) 599-1645",
                            "twitter": "becobarbrooklyn",
                            "instagram": "becobar",
                            "facebook": "200400930107861",
                            "facebookUsername": "becobar.bk",
                            "facebookName": "Beco Bar"
                        },
                        "location": {
                            "address": "45 Richardson St",
                            "crossStreet": "btwn Lorimer St & Union Ave",
                            "lat": 40.71833051925473,
                            "lng": -73.95031166529657,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.71833051925473,
                                    "lng": -73.95031166529657
                                }
                            ],
                            "postalCode": "11211",
                            "cc": "US",
                            "city": "Brooklyn",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "45 Richardson St (btwn Lorimer St & Union Ave)",
                                "Brooklyn, NY 11211"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d16b941735",
                                "name": "Brazilian Restaurant",
                                "pluralName": "Brazilian Restaurants",
                                "shortName": "Brazilian",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/argentinian_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 164,
                            "usersCount": 4383,
                            "checkinsCount": 8892
                        },
                        "url": "http://www.becobar.com",
                        "hasMenu": true,
                        "delivery": {
                            "id": "516604",
                            "url": "https://www.seamless.com/menu/beco-45-richardson-st-brooklyn/516604?affiliate=1131&utm_source=foursquare-affiliate-network&utm_medium=affiliate&utm_campaign=1131&utm_content=516604",
                            "provider": {
                                "name": "seamless",
                                "icon": {
                                    "prefix": "https://igx.4sqi.net/img/general/cap/",
                                    "sizes": [
                                        40,
                                        50
                                    ],
                                    "name": "/delivery_provider_seamless_20180129.png"
                                }
                            }
                        },
                        "menu": {
                            "type": "Menu",
                            "label": "Menu",
                            "anchor": "View Menu",
                            "url": "http://www.becobar.com/#menus",
                            "mobileUrl": "http://www.becobar.com/#menus",
                            "externalUrl": "http://www.becobar.com/#menus"
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "56688313"
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "5963b5ddbab2f604cf800490",
                        "name": "Foam-o",
                        "image": {
                            "prefix": "https://irs2.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/Cafes_776a64.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 248
                        },
                        "pickerPosition": {
                            "page": 10,
                            "index": 8
                        },
                        "teaseText": "Check in at cafés to unlock this sticker.",
                        "unlockText": "I’ll have a single-origin, double roast, triple whip, half-caf with sprinkles. Thanks a latte."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5ac8f7892f97ec002b263ac4",
                    "createdAt": 1523120009,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "49ee79c6f964a5205f681fe3",
                        "name": "US Post Office",
                        "contact": {},
                        "location": {
                            "address": "263 S 4th St",
                            "crossStreet": "at Marcy Ave.",
                            "lat": 40.70977901159198,
                            "lng": -73.95743630948795,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.70977901159198,
                                    "lng": -73.95743630948795
                                }
                            ],
                            "postalCode": "11211",
                            "cc": "US",
                            "city": "Brooklyn",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "263 S 4th St (at Marcy Ave.)",
                                "Brooklyn, NY 11211"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d172941735",
                                "name": "Post Office",
                                "pluralName": "Post Offices",
                                "shortName": "Post Office",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/postoffice_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 70,
                            "usersCount": 1336,
                            "checkinsCount": 4335
                        },
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5ac7bffec5b11c003802ce7b",
                    "createdAt": 1523040254,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "5596bee2498ea7a4f9980cbd",
                        "name": "Black Star Bakery",
                        "contact": {
                            "phone": "7187820060",
                            "formattedPhone": "(718) 782-0060",
                            "facebook": "920454937978053",
                            "facebookName": "Black Star Bakery&Cafe"
                        },
                        "location": {
                            "address": "595 Metropolitan Ave",
                            "crossStreet": "btwn Lorimer & Leonard St",
                            "lat": 40.71412901373741,
                            "lng": -73.94903884062,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.71412901373741,
                                    "lng": -73.94903884062
                                }
                            ],
                            "postalCode": "11211",
                            "cc": "US",
                            "city": "Brooklyn",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "595 Metropolitan Ave (btwn Lorimer & Leonard St)",
                                "Brooklyn, NY 11211"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d16a941735",
                                "name": "Bakery",
                                "pluralName": "Bakeries",
                                "shortName": "Bakery",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/bakery_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 19,
                            "usersCount": 681,
                            "checkinsCount": 1699
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "52a659800000000000000006",
                        "name": "Joey Beans",
                        "image": {
                            "prefix": "https://irs0.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/coffee_f4b66b.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 8
                        },
                        "pickerPosition": {
                            "page": 0,
                            "index": 8
                        },
                        "teaseText": "Check in at coffee shops to unlock this sticker.",
                        "unlockText": "Who cares if your flat white just cost ya $10 bucks. You're getting free wi-fi! Free, extremely slow wi-fi. Drink it up.",
                        "bonusText": "Use at Coffee Shops for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5ac6c43f838e59002b10d27c",
                    "createdAt": 1522975807,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "55d660c6498e2fa7bf8e13f4",
                        "name": "Ode to Babel",
                        "contact": {},
                        "location": {
                            "address": "772 Dean St",
                            "lat": 40.679466295291746,
                            "lng": -73.96456093161021,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.679466295291746,
                                    "lng": -73.96456093161021
                                }
                            ],
                            "postalCode": "11238",
                            "cc": "US",
                            "city": "Brooklyn",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "772 Dean St",
                                "Brooklyn, NY 11238"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d11e941735",
                                "name": "Cocktail Bar",
                                "pluralName": "Cocktail Bars",
                                "shortName": "Cocktail",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/cocktails_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 9,
                            "usersCount": 512,
                            "checkinsCount": 736
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5ac692a2c8b2fb002b922892",
                    "createdAt": 1522963106,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "57c1c0a4498e444b9e67da26",
                        "name": "Nicky's Vietnamese Sandwiches",
                        "contact": {
                            "phone": "7183888890",
                            "formattedPhone": "(718) 388-8890"
                        },
                        "location": {
                            "address": "574 Lorimer Street",
                            "crossStreet": "Devoe Street",
                            "lat": 40.71344032200082,
                            "lng": -73.94926381146598,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.71344032200082,
                                    "lng": -73.94926381146598
                                }
                            ],
                            "postalCode": "11211",
                            "cc": "US",
                            "city": "Brooklyn",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "574 Lorimer Street (Devoe Street)",
                                "Brooklyn, NY 11211"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d14a941735",
                                "name": "Vietnamese Restaurant",
                                "pluralName": "Vietnamese Restaurants",
                                "shortName": "Vietnamese",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/vietnamese_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 6,
                            "usersCount": 189,
                            "checkinsCount": 306
                        },
                        "delivery": {
                            "id": "565123",
                            "url": "https://www.seamless.com/menu/nickys-vietnamese-sandwiches-554-lorimer-st-brooklyn/565123?affiliate=1131&utm_source=foursquare-affiliate-network&utm_medium=affiliate&utm_campaign=1131&utm_content=565123",
                            "provider": {
                                "name": "seamless",
                                "icon": {
                                    "prefix": "https://igx.4sqi.net/img/general/cap/",
                                    "sizes": [
                                        40,
                                        50
                                    ],
                                    "name": "/delivery_provider_seamless_20180129.png"
                                }
                            }
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5ac529a0911fc4002bfcd53e",
                    "createdAt": 1522870688,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "4f53d65de4b0b589399898a1",
                        "name": "Artsy",
                        "contact": {
                            "twitter": "artsy"
                        },
                        "location": {
                            "address": "401 Broadway",
                            "lat": 40.71887928587247,
                            "lng": -74.0027432503005,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.71887928587247,
                                    "lng": -74.0027432503005
                                }
                            ],
                            "postalCode": "10013",
                            "cc": "US",
                            "city": "New York",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "401 Broadway",
                                "New York, NY 10013"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d125941735",
                                "name": "Tech Startup",
                                "pluralName": "Tech Startups",
                                "shortName": "Tech Startup",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/technology_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 6,
                            "usersCount": 649,
                            "checkinsCount": 2917
                        },
                        "venueRatingBlacklisted": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5ac3fc7d60d11b002b9d5d6b",
                    "createdAt": 1522793597,
                    "type": "checkin",
                    "entities": [],
                    "shout": "I’m home baby!!",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "3fd66200f964a5200fe41ee3",
                        "name": "Pianos",
                        "contact": {
                            "phone": "2125053733",
                            "formattedPhone": "(212) 505-3733",
                            "twitter": "pianosnyc",
                            "facebook": "43108655697",
                            "facebookUsername": "pianosnyc",
                            "facebookName": "PIANOS"
                        },
                        "location": {
                            "address": "158 Ludlow St",
                            "crossStreet": "at Stanton St",
                            "lat": 40.72111085158351,
                            "lng": -73.98786106009348,
                            "postalCode": "10002",
                            "cc": "US",
                            "city": "New York",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "158 Ludlow St (at Stanton St)",
                                "New York, NY 10002"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1e9931735",
                                "name": "Rock Club",
                                "pluralName": "Rock Clubs",
                                "shortName": "Rock Club",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/musicvenue_rockclub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 263,
                            "usersCount": 24402,
                            "checkinsCount": 45331
                        },
                        "url": "http://pianosnyc.com",
                        "hasMenu": true,
                        "menu": {
                            "type": "Prices",
                            "label": "Prices",
                            "anchor": "View Prices",
                            "url": "https://foursquare.com/v/pianos/3fd66200f964a5200fe41ee3/menu",
                            "mobileUrl": "https://foursquare.com/v/3fd66200f964a5200fe41ee3/device_menu"
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "70051153"
                        }
                    },
                    "likes": {
                        "count": 1,
                        "groups": [
                            {
                                "type": "friends",
                                "count": 1,
                                "items": [
                                    {
                                        "id": "34228610",
                                        "firstName": "Caramia🔥",
                                        "gender": "female",
                                        "relationship": "friend",
                                        "photo": {
                                            "prefix": "https://igx.4sqi.net/img/user/",
                                            "suffix": "/34228610-NOSY3G5K2QO0MOLJ.jpg"
                                        }
                                    }
                                ]
                            }
                        ],
                        "summary": "Caramia🔥"
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5ac3cdc79fca56002bbefe9e",
                    "createdAt": 1522781639,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "4f53d65de4b0b589399898a1",
                        "name": "Artsy",
                        "contact": {
                            "twitter": "artsy"
                        },
                        "location": {
                            "address": "401 Broadway",
                            "lat": 40.71887928587247,
                            "lng": -74.0027432503005,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.71887928587247,
                                    "lng": -74.0027432503005
                                }
                            ],
                            "postalCode": "10013",
                            "cc": "US",
                            "city": "New York",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "401 Broadway",
                                "New York, NY 10013"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d125941735",
                                "name": "Tech Startup",
                                "pluralName": "Tech Startups",
                                "shortName": "Tech Startup",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/technology_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 6,
                            "usersCount": 649,
                            "checkinsCount": 2917
                        },
                        "venueRatingBlacklisted": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5ac2bd2e911fc4002bc81be3",
                    "createdAt": 1522711854,
                    "type": "checkin",
                    "entities": [],
                    "shout": "They won’t give me my mail 😭",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "4b16e835f964a52049bf23e3",
                        "name": "Office 11211",
                        "contact": {
                            "phone": "7187820151",
                            "formattedPhone": "(718) 782-0151",
                            "twitter": "office11211",
                            "facebook": "223139925927",
                            "facebookUsername": "Office11211",
                            "facebookName": "Office 11211"
                        },
                        "location": {
                            "address": "190 Bedford Ave",
                            "crossStreet": "at N 7th St.",
                            "lat": 40.71760998214336,
                            "lng": -73.95800329708752,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.71760998214336,
                                    "lng": -73.95800329708752
                                }
                            ],
                            "postalCode": "11249",
                            "cc": "US",
                            "city": "Brooklyn",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "190 Bedford Ave (at N 7th St.)",
                                "Brooklyn, NY 11249"
                            ]
                        },
                        "categories": [
                            {
                                "id": "52f2ab2ebcbc57f1066b8b1f",
                                "name": "Shipping Store",
                                "pluralName": "Shipping Stores",
                                "shortName": "Shipping Store",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/default_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 9,
                            "usersCount": 299,
                            "checkinsCount": 1043
                        },
                        "url": "http://office11249.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "39236396"
                        },
                        "storeId": ""
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5ac25634f427de002b209237",
                    "createdAt": 1522685492,
                    "type": "checkin",
                    "entities": [],
                    "shout": "Back in the office 🙌🏾",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "4f53d65de4b0b589399898a1",
                        "name": "Artsy",
                        "contact": {
                            "twitter": "artsy"
                        },
                        "location": {
                            "address": "401 Broadway",
                            "lat": 40.71887928587247,
                            "lng": -74.0027432503005,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.71887928587247,
                                    "lng": -74.0027432503005
                                }
                            ],
                            "postalCode": "10013",
                            "cc": "US",
                            "city": "New York",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "401 Broadway",
                                "New York, NY 10013"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d125941735",
                                "name": "Tech Startup",
                                "pluralName": "Tech Startups",
                                "shortName": "Tech Startup",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/technology_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 6,
                            "usersCount": 649,
                            "checkinsCount": 2917
                        },
                        "venueRatingBlacklisted": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 1,
                        "groups": [
                            {
                                "type": "friends",
                                "count": 1,
                                "items": [
                                    {
                                        "id": "64122382",
                                        "firstName": "Andrew",
                                        "lastName": "Shum",
                                        "gender": "male",
                                        "relationship": "friend",
                                        "photo": {
                                            "prefix": "https://igx.4sqi.net/img/user/",
                                            "suffix": "/64122382-SEJLTE4VE5JF5CZG.jpg"
                                        }
                                    }
                                ]
                            }
                        ],
                        "summary": "Andrew Shum"
                    },
                    "like": false,
                    "sticker": {
                        "id": "53fe77e54b9048855b3648b6",
                        "name": "Lappy Toppy",
                        "image": {
                            "prefix": "https://irs2.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/laptop_4d7599.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 42
                        },
                        "pickerPosition": {
                            "page": 1,
                            "index": 18
                        },
                        "teaseText": "Check in at offices to unlock this sticker.",
                        "unlockText": "You're totally not reading BuzzFeed all day. Here’s a sticker for being so productive. Now back to that “Which Sticker Are You?” quiz.",
                        "bonusText": "Use at Offices for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5ac238300868a200380b5f6d",
                    "createdAt": 1522677808,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "4c8b17cf4fb7199cccf931a3",
                        "name": "401 Broadway",
                        "contact": {
                            "phone": "2124006083",
                            "formattedPhone": "(212) 400-6083"
                        },
                        "location": {
                            "address": "401 Broadway",
                            "crossStreet": "at Walker St",
                            "lat": 40.71881054846865,
                            "lng": -74.00269043100626,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.71881054846865,
                                    "lng": -74.00269043100626
                                }
                            ],
                            "postalCode": "10013",
                            "cc": "US",
                            "city": "New York",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "401 Broadway (at Walker St)",
                                "New York, NY 10013"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d130941735",
                                "name": "Building",
                                "pluralName": "Buildings",
                                "shortName": "Building",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/default_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 2,
                            "usersCount": 497,
                            "checkinsCount": 3113
                        },
                        "venueRatingBlacklisted": true,
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "storeId": ""
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5ac1a0650c9f310033ddaaba",
                    "createdAt": 1522638949,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "49e298b0f964a52040621fe3",
                        "name": "Mother's",
                        "contact": {
                            "phone": "7183847778",
                            "formattedPhone": "(718) 384-7778"
                        },
                        "location": {
                            "address": "347 Graham Ave",
                            "crossStreet": "btwn Metropolitan Ave. & Conselyea St.",
                            "lat": 40.71487632562948,
                            "lng": -73.94445591367176,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.71487632562948,
                                    "lng": -73.94445591367176
                                }
                            ],
                            "postalCode": "11211",
                            "cc": "US",
                            "city": "Brooklyn",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "347 Graham Ave (btwn Metropolitan Ave. & Conselyea St.)",
                                "Brooklyn, NY 11211"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d16c941735",
                                "name": "Burger Joint",
                                "pluralName": "Burger Joints",
                                "shortName": "Burgers",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/burger_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 93,
                            "usersCount": 3329,
                            "checkinsCount": 8720
                        },
                        "url": "http://mothersbrooklyn.com",
                        "hasMenu": true,
                        "delivery": {
                            "id": "325682",
                            "url": "https://www.seamless.com/menu/mothers-347-graham-ave-brooklyn/325682?affiliate=1131&utm_source=foursquare-affiliate-network&utm_medium=affiliate&utm_campaign=1131&utm_content=325682",
                            "provider": {
                                "name": "seamless",
                                "icon": {
                                    "prefix": "https://igx.4sqi.net/img/general/cap/",
                                    "sizes": [
                                        40,
                                        50
                                    ],
                                    "name": "/delivery_provider_seamless_20180129.png"
                                }
                            }
                        },
                        "menu": {
                            "type": "Menu",
                            "label": "Menu",
                            "anchor": "View Menu",
                            "url": "https://foursquare.com/v/mothers/49e298b0f964a52040621fe3/menu",
                            "mobileUrl": "https://foursquare.com/v/49e298b0f964a52040621fe3/device_menu"
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5ac14ceaa2c00b002bc5a06b",
                    "createdAt": 1522617578,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "43a52546f964a520532c1fe3",
                        "name": "John F. Kennedy International Airport (JFK)",
                        "contact": {
                            "phone": "7182444444",
                            "formattedPhone": "(718) 244-4444",
                            "twitter": "jfkairport",
                            "instagram": "jfkairport",
                            "facebook": "102286653195916",
                            "facebookName": "John F.Kennedy International Airport"
                        },
                        "location": {
                            "address": "JFK Expy",
                            "crossStreet": "Van Wyck Expy",
                            "lat": 40.6437110512739,
                            "lng": -73.782646651983,
                            "postalCode": "11430",
                            "cc": "US",
                            "neighborhood": "Jamai",
                            "city": "Queens",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "JFK Expy (Van Wyck Expy)",
                                "Queens, NY 11430"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1ed931735",
                                "name": "Airport",
                                "pluralName": "Airports",
                                "shortName": "Airport",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/airport_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 3150,
                            "usersCount": 481402,
                            "checkinsCount": 1976339
                        },
                        "url": "http://www.panynj.gov/airports/jfk.html",
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "63652169"
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5ac051ebe4c459002b25a2c6",
                    "createdAt": 1522553323,
                    "type": "checkin",
                    "private": true,
                    "visibility": "private",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "51ec2a7f498e59164d60fb3a",
                        "name": "Villa Thérèse",
                        "contact": {},
                        "location": {
                            "address": "Nerette",
                            "lat": 18.517664382230645,
                            "lng": -72.28757224427727,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.517664382230645,
                                    "lng": -72.28757224427727
                                }
                            ],
                            "cc": "HT",
                            "country": "Haiti",
                            "formattedAddress": [
                                "Nerette",
                                "Ayiti"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d132951735",
                                "name": "Hotel Pool",
                                "pluralName": "Hotel Pools",
                                "shortName": "Pool",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/pool_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 1,
                            "usersCount": 77,
                            "checkinsCount": 130
                        },
                        "venueRatingBlacklisted": true,
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Foursquare for iOS",
                        "url": "https://foursquare.com/download/#/iphone"
                    }
                },
                {
                    "id": "5abe6322bed483002b4aa850",
                    "createdAt": 1522426658,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "52d07267498e4a926c9882f3",
                        "name": "5 Coins Fritay a Gogo",
                        "contact": {},
                        "location": {
                            "address": "Petion-Ville",
                            "lat": 18.514970684273553,
                            "lng": -72.28954012864526,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.514970684273553,
                                    "lng": -72.28954012864526
                                }
                            ],
                            "postalCode": "6110",
                            "cc": "HT",
                            "city": "Pétionville",
                            "state": "West",
                            "country": "Haiti",
                            "formattedAddress": [
                                "Petion-Ville",
                                "6110 Pétionville",
                                "Ayiti"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d144941735",
                                "name": "Caribbean Restaurant",
                                "pluralName": "Caribbean Restaurants",
                                "shortName": "Caribbean",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/caribbean_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 2,
                            "usersCount": 36,
                            "checkinsCount": 115
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5abe42f89deb7d002b247d14",
                    "createdAt": 1522418424,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4b491cdef964a5205e6626e3",
                        "name": "Toussaint Louverture International Airport (Aeroport International Toussaint Louverture (PAP))",
                        "contact": {},
                        "location": {
                            "address": "Boul. Toussaint-Louverture",
                            "crossStreet": "Maïs Gaté",
                            "lat": 18.57555941745207,
                            "lng": -72.29514156164844,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.57555941745207,
                                    "lng": -72.29514156164844
                                }
                            ],
                            "cc": "HT",
                            "city": "Port-au-Prince",
                            "state": "Département de l'Ouest",
                            "country": "Haiti",
                            "formattedAddress": [
                                "Boul. Toussaint-Louverture (Maïs Gaté)",
                                "Pòtoprens",
                                "Ayiti"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1ed931735",
                                "name": "Airport",
                                "pluralName": "Airports",
                                "shortName": "Airport",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/airport_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 53,
                            "usersCount": 2050,
                            "checkinsCount": 6392
                        },
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5abe03cffdb9a7002b0d251f",
                    "createdAt": 1522402255,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "4b89fb5df964a5200d5a32e3",
                        "name": "Miami International Airport (MIA)",
                        "contact": {
                            "phone": "3058767000",
                            "formattedPhone": "(305) 876-7000",
                            "twitter": "iflymia",
                            "facebook": "616123971750197",
                            "facebookUsername": "IflyMIA",
                            "facebookName": "Miami International Airport - MIA"
                        },
                        "location": {
                            "address": "2100 NW 42nd Ave",
                            "lat": 25.795563700239175,
                            "lng": -80.27812957763672,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 25.795563700239175,
                                    "lng": -80.27812957763672
                                }
                            ],
                            "postalCode": "33142",
                            "cc": "US",
                            "city": "Miami",
                            "state": "FL",
                            "country": "United States",
                            "formattedAddress": [
                                "2100 NW 42nd Ave",
                                "Miami, FL 33142"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1ed931735",
                                "name": "Airport",
                                "pluralName": "Airports",
                                "shortName": "Airport",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/airport_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 2435,
                            "usersCount": 302304,
                            "checkinsCount": 891424
                        },
                        "url": "http://www.miami-airport.com",
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "85489309"
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5abd8e84d552c7002bc22836",
                    "createdAt": 1522372228,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "4b78749df964a52095cf2ee3",
                        "name": "Puerto Sagua Restaurant",
                        "contact": {
                            "phone": "3056731115",
                            "formattedPhone": "(305) 673-1115"
                        },
                        "location": {
                            "address": "700 Collins Ave",
                            "crossStreet": "at 7th St",
                            "lat": 25.777102511501347,
                            "lng": -80.1325848698616,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 25.777102511501347,
                                    "lng": -80.1325848698616
                                }
                            ],
                            "postalCode": "33139",
                            "cc": "US",
                            "city": "Miami Beach",
                            "state": "FL",
                            "country": "United States",
                            "formattedAddress": [
                                "700 Collins Ave (at 7th St)",
                                "Miami Beach, FL 33139"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d154941735",
                                "name": "Cuban Restaurant",
                                "pluralName": "Cuban Restaurants",
                                "shortName": "Cuban",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/cuban_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 349,
                            "usersCount": 10738,
                            "checkinsCount": 14057
                        },
                        "hasMenu": true,
                        "menu": {
                            "type": "Menu",
                            "label": "Menu",
                            "anchor": "View Menu",
                            "url": "https://foursquare.com/v/puerto-sagua-restaurant/4b78749df964a52095cf2ee3/menu",
                            "mobileUrl": "https://foursquare.com/v/4b78749df964a52095cf2ee3/device_menu"
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5abc6c33bb2a47002bb7e4a9",
                    "createdAt": 1522297907,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4f53df99e4b063296e985bc2",
                        "name": "Sky Bar",
                        "contact": {},
                        "location": {
                            "address": "Parque Lleras",
                            "lat": 6.208317046403808,
                            "lng": -75.56783922644023,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.208317046403808,
                                    "lng": -75.56783922644023
                                }
                            ],
                            "cc": "CO",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Parque Lleras",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d116941735",
                                "name": "Bar",
                                "pluralName": "Bars",
                                "shortName": "Bar",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 1,
                            "usersCount": 203,
                            "checkinsCount": 231
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5abc580fbb2a47002bb7e407",
                    "createdAt": 1522292751,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "59fd0f4dc47cf96da83264fd",
                        "name": "Belisario",
                        "contact": {},
                        "location": {
                            "lat": 6.207102,
                            "lng": -75.565683,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.207102,
                                    "lng": -75.565683
                                }
                            ],
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d116941735",
                                "name": "Bar",
                                "pluralName": "Bars",
                                "shortName": "Bar",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 2,
                            "usersCount": 39,
                            "checkinsCount": 42
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5abc3203c62b49002bb77c38",
                    "createdAt": 1522283011,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4b44dd0ef964a520a0fe25e3",
                        "name": "El Tesoro Parque Comercial",
                        "contact": {
                            "phone": "+5743211010",
                            "formattedPhone": "+57 4 3211010",
                            "twitter": "el_tesoro",
                            "facebook": "89274320014",
                            "facebookUsername": "eltesoroparquecomercial",
                            "facebookName": "El Tesoro Parque Comercial"
                        },
                        "location": {
                            "address": "Carrera 25A # 1A Sur - 45",
                            "crossStreet": "Tr. Superior",
                            "lat": 6.19719977329494,
                            "lng": -75.55912166435517,
                            "postalCode": "050022",
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Carrera 25A # 1A Sur - 45 (Tr. Superior)",
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1fd941735",
                                "name": "Shopping Mall",
                                "pluralName": "Shopping Malls",
                                "shortName": "Mall",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/mall_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 225,
                            "usersCount": 9611,
                            "checkinsCount": 39566
                        },
                        "url": "http://www.eltesoro.com.co",
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "91925956"
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5abc1978f0ca95002bcb72d1",
                    "createdAt": 1522276728,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4bf0a840b315c9b6994a93ff",
                        "name": "Medellín Beer Factory",
                        "contact": {},
                        "location": {
                            "address": "Calle 10",
                            "lat": 6.208773082383819,
                            "lng": -75.56554782731055,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.208773082383819,
                                    "lng": -75.56554782731055
                                }
                            ],
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Calle 10",
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d11b941735",
                                "name": "Pub",
                                "pluralName": "Pubs",
                                "shortName": "Pub",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 62,
                            "usersCount": 1274,
                            "checkinsCount": 1948
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5abc044a23a2e6002be0ff1b",
                    "createdAt": 1522271306,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "589e37db9b615c0bdae9f042",
                        "name": "Barbería 10A",
                        "contact": {},
                        "location": {
                            "lat": 6.21036,
                            "lng": -75.56807,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.21036,
                                    "lng": -75.56807
                                }
                            ],
                            "cc": "CO",
                            "city": "Envigado",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Envigado, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "54541900498ea6ccd0202697",
                                "name": "Health & Beauty Service",
                                "pluralName": "Health & Beauty Services",
                                "shortName": "Health & Beauty",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/salon_barber_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 0,
                            "usersCount": 6,
                            "checkinsCount": 19
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5ab805b90ff4f9002b97d2c1",
                    "createdAt": 1522009529,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4cdc973fcea2224be45f8c4c",
                        "name": "Palmahia",
                        "contact": {},
                        "location": {
                            "address": "Carrera 42 # 85b - 121",
                            "lat": 6.190958385170901,
                            "lng": -75.5837051973903,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.190958385170901,
                                    "lng": -75.5837051973903
                                }
                            ],
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Carrera 42 # 85b - 121",
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1e5931735",
                                "name": "Music Venue",
                                "pluralName": "Music Venues",
                                "shortName": "Music Venue",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/musicvenue_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 27,
                            "usersCount": 947,
                            "checkinsCount": 1313
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "52a65980000000000000000f",
                        "name": "Groupie",
                        "image": {
                            "prefix": "https://irs1.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/music_3aa223.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 38
                        },
                        "pickerPosition": {
                            "page": 1,
                            "index": 14
                        },
                        "teaseText": "Check in at music venues to unlock this sticker.",
                        "unlockText": "Wrist stamp? Check. Ear plugs? Check. Laid back foot-tapping-and-head-bobbing-stance? No way! Shoulder your way to the front and get into it!",
                        "bonusText": "Use at Music Venues for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5ab029091543c75b20fc3a0a",
                    "createdAt": 1521494281,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4f6271b5e4b045fbd1e7849a",
                        "name": "Blux",
                        "contact": {},
                        "location": {
                            "lat": 6.212891535946524,
                            "lng": -75.56079527251752,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.212891535946524,
                                    "lng": -75.56079527251752
                                }
                            ],
                            "cc": "CO",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4d954b06a243a5684965b473",
                                "name": "Residential Building (Apartment / Condo)",
                                "pluralName": "Residential Buildings (Apartments / Condos)",
                                "shortName": "Residential",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/apartment_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 1,
                            "usersCount": 67,
                            "checkinsCount": 143
                        },
                        "venueRatingBlacklisted": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5aaf12158ad62e62591aedd1",
                    "createdAt": 1521422869,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4c74736b1b30a09300dfec09",
                        "name": "Centro Comercial Puerta del Norte",
                        "contact": {
                            "phone": "+5744827792",
                            "formattedPhone": "+57 4 4827792"
                        },
                        "location": {
                            "address": "Diagonal 55 #34-67",
                            "lat": 6.339093716466584,
                            "lng": -75.54365677172021,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.339093716466584,
                                    "lng": -75.54365677172021
                                }
                            ],
                            "cc": "CO",
                            "neighborhood": "Niquia",
                            "city": "Bello",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Diagonal 55 #34-67",
                                "Bello, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1fd941735",
                                "name": "Shopping Mall",
                                "pluralName": "Shopping Malls",
                                "shortName": "Mall",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/mall_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 59,
                            "usersCount": 1950,
                            "checkinsCount": 7124
                        },
                        "url": "http://www.puertadelnorte.com",
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5aaee32f947c0570e0d2ce77",
                    "createdAt": 1521410863,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "59af494246e1b61a811d151a",
                        "name": "Happy Shots",
                        "contact": {},
                        "location": {
                            "lat": 6.342311,
                            "lng": -75.54125,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.342311,
                                    "lng": -75.54125
                                }
                            ],
                            "postalCode": "051050",
                            "cc": "CO",
                            "city": "Bello",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Bello, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d11e941735",
                                "name": "Cocktail Bar",
                                "pluralName": "Cocktail Bars",
                                "shortName": "Cocktail",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/cocktails_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 0,
                            "usersCount": 6,
                            "checkinsCount": 10
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5aaddb8fb8fd9d63413f8b12",
                    "createdAt": 1521343375,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4d7ae48f082e6ea8461c2208",
                        "name": "Pit Stop Medellín Hostel",
                        "contact": {},
                        "location": {
                            "address": "Carrera 43D",
                            "lat": 6.207447424224434,
                            "lng": -75.57364793630128,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.207447424224434,
                                    "lng": -75.57364793630128
                                }
                            ],
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Carrera 43D",
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1ee931735",
                                "name": "Hostel",
                                "pluralName": "Hostels",
                                "shortName": "Hostel",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/hostel_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 9,
                            "usersCount": 251,
                            "checkinsCount": 433
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5aac36a8c97f28748daf60b8",
                    "createdAt": 1521235624,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4cc331e23d7fa1cdb512a45f",
                        "name": "Mondongo's",
                        "contact": {
                            "twitter": "mondongos_"
                        },
                        "location": {
                            "address": "Calle 10 #38 - 38",
                            "crossStreet": "Cll 10 # 38-38",
                            "lat": 6.209672698045178,
                            "lng": -75.56782071424949,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.209672698045178,
                                    "lng": -75.56782071424949
                                }
                            ],
                            "postalCode": "050021",
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Calle 10 #38 - 38 (Cll 10 # 38-38)",
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1be941735",
                                "name": "Latin American Restaurant",
                                "pluralName": "Latin American Restaurants",
                                "shortName": "Latin American",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/latinamerican_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 121,
                            "usersCount": 2920,
                            "checkinsCount": 3953
                        },
                        "url": "http://www.mondongos.com.co",
                        "menu": {
                            "type": "Menu",
                            "label": "Menu",
                            "anchor": "View Menu",
                            "url": "http://mondongos.com.co/carta-menu/1/#main",
                            "mobileUrl": "http://mondongos.com.co/carta-menu/1/#main",
                            "externalUrl": "http://mondongos.com.co/carta-menu/1/#main"
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "87823084"
                        },
                        "storeId": ""
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5aabdabbb1538e3ee401c1cc",
                    "createdAt": 1521212091,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "567dbf67498eb5432fc55432",
                        "name": "PANORAMA Rooftop",
                        "contact": {},
                        "location": {
                            "address": "Calle 8 No. 34 - 33 Provenza",
                            "lat": 6.207220550816134,
                            "lng": -75.56557682376472,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.207220550816134,
                                    "lng": -75.56557682376472
                                }
                            ],
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Calle 8 No. 34 - 33 Provenza",
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d117941735",
                                "name": "Beer Garden",
                                "pluralName": "Beer Gardens",
                                "shortName": "Beer Garden",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/beergarden_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 20,
                            "usersCount": 306,
                            "checkinsCount": 445
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": true,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5aa9360392e7a97b9369aa19",
                    "createdAt": 1521038851,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "5047d630e4b0424d58c50009",
                        "name": "Juan Valdez Café",
                        "contact": {},
                        "location": {
                            "lat": 10.44522145387935,
                            "lng": -75.51625391362214,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 10.44522145387935,
                                    "lng": -75.51625391362214
                                }
                            ],
                            "cc": "CO",
                            "city": "Cartagena",
                            "state": "Bolívar",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Cartagena de Indias, Bolívar",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d16d941735",
                                "name": "Café",
                                "pluralName": "Cafés",
                                "shortName": "Café",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/cafe_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 20,
                            "usersCount": 795,
                            "checkinsCount": 960
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5aa7eb5ab37e2b657d35f831",
                    "createdAt": 1520954202,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "558cb56e498ebfc819c000e0",
                        "name": "Castellana DF",
                        "contact": {},
                        "location": {
                            "lat": 10.421856394383328,
                            "lng": -75.54667596398824,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 10.421856394383328,
                                    "lng": -75.54667596398824
                                }
                            ],
                            "cc": "CO",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1c0941735",
                                "name": "Mediterranean Restaurant",
                                "pluralName": "Mediterranean Restaurants",
                                "shortName": "Mediterranean",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/mediterranean_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 4,
                            "usersCount": 84,
                            "checkinsCount": 92
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5aa74f32d4cc984a4e5058da",
                    "createdAt": 1520914226,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "56ecf121498e3aa68341604b",
                        "name": "Alquímico",
                        "contact": {
                            "phone": "+573188450433",
                            "formattedPhone": "+57 318 8450433",
                            "instagram": "alquimicoctg"
                        },
                        "location": {
                            "address": "Calle de Colegio",
                            "lat": 10.423675550603264,
                            "lng": -75.54966304517278,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 10.423675550603264,
                                    "lng": -75.54966304517278
                                }
                            ],
                            "postalCode": "130001",
                            "cc": "CO",
                            "city": "Cartagena",
                            "state": "Bolívar",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Calle de Colegio",
                                "Cartagena de Indias, Bolívar",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d11f941735",
                                "name": "Nightclub",
                                "pluralName": "Nightclubs",
                                "shortName": "Nightclub",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/nightclub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 44,
                            "usersCount": 659,
                            "checkinsCount": 776
                        },
                        "url": "http://www.alquimico.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5aa71c79c3658859efd63f5f",
                    "createdAt": 1520901241,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4ced55575de16ea84f82b596",
                        "name": "Restaurante La Mulata",
                        "contact": {},
                        "location": {
                            "address": "Calle de Quero",
                            "lat": 10.426304276967029,
                            "lng": -75.54672984638918,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 10.426304276967029,
                                    "lng": -75.54672984638918
                                }
                            ],
                            "cc": "CO",
                            "city": "Cartagena",
                            "state": "Bolívar",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Calle de Quero",
                                "Cartagena de Indias, Bolívar",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d144941735",
                                "name": "Caribbean Restaurant",
                                "pluralName": "Caribbean Restaurants",
                                "shortName": "Caribbean",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/caribbean_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 229,
                            "usersCount": 1639,
                            "checkinsCount": 2083
                        },
                        "url": "http://lamulatacartagena.blogspot.com.co/p/menu.html?m=1",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5aa708594acb1908444ba979",
                    "createdAt": 1520896089,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4b5239cbf964a520057127e3",
                        "name": "Café del Mar",
                        "contact": {
                            "phone": "+5756646513",
                            "formattedPhone": "+57 5 6646513"
                        },
                        "location": {
                            "address": "C.Baluarte Santo Domingo",
                            "crossStreet": "Cra 2",
                            "lat": 10.424492018952652,
                            "lng": -75.55407593329257,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 10.424492018952652,
                                    "lng": -75.55407593329257
                                }
                            ],
                            "cc": "CO",
                            "city": "Cartagena",
                            "state": "Bolívar",
                            "country": "Colombia",
                            "formattedAddress": [
                                "C.Baluarte Santo Domingo (Cra 2)",
                                "Cartagena de Indias, Bolívar",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d121941735",
                                "name": "Lounge",
                                "pluralName": "Lounges",
                                "shortName": "Lounge",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/default_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 322,
                            "usersCount": 8437,
                            "checkinsCount": 10986
                        },
                        "url": "http://www.cafedelmarcartagena.com.co",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5aa5e54f59c4232b1232ee3c",
                    "createdAt": 1520821583,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "572d503a498e9d523e2d72df",
                        "name": "Cuba 1940s",
                        "contact": {},
                        "location": {
                            "lat": 10.428016824979048,
                            "lng": -75.54787415311657,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 10.428016824979048,
                                    "lng": -75.54787415311657
                                }
                            ],
                            "cc": "CO",
                            "city": "Cartagena",
                            "state": "Bolívar",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Cartagena de Indias, Bolívar",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d154941735",
                                "name": "Cuban Restaurant",
                                "pluralName": "Cuban Restaurants",
                                "shortName": "Cuban",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/cuban_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 10,
                            "usersCount": 188,
                            "checkinsCount": 207
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5aa5b17942d8c24ccd54a5d0",
                    "createdAt": 1520808313,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4ff236cae4b0afc114e91a8a",
                        "name": "Centro Histórico de Cartagena / Ciudad Amurallada",
                        "contact": {},
                        "location": {
                            "lat": 10.424203397846842,
                            "lng": -75.5488990963779,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 10.424203397846842,
                                    "lng": -75.5488990963779
                                }
                            ],
                            "cc": "CO",
                            "city": "Cartagena",
                            "state": "Bolívar",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Cartagena de Indias, Bolívar",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4deefb944765f83613cdba6e",
                                "name": "Historic Site",
                                "pluralName": "Historic Sites",
                                "shortName": "Historic Site",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/historicsite_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 259,
                            "usersCount": 10341,
                            "checkinsCount": 23145
                        },
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5aa5753d1987ec750590eaff",
                    "createdAt": 1520792893,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4db251b56e817f90df1a7ecb",
                        "name": "Playa de Castillo Grande",
                        "contact": {},
                        "location": {
                            "lat": 10.394599492662772,
                            "lng": -75.55257202462525,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 10.394599492662772,
                                    "lng": -75.55257202462525
                                }
                            ],
                            "cc": "CO",
                            "city": "Cartagena",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Cartagena de Indias",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1e2941735",
                                "name": "Beach",
                                "pluralName": "Beaches",
                                "shortName": "Beach",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/beach_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 31,
                            "usersCount": 951,
                            "checkinsCount": 1723
                        },
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5aa48ac2e0c0c9240dce36fb",
                    "createdAt": 1520732866,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4d84f73999b78cfa96e4c31f",
                        "name": "El Coroncoro",
                        "contact": {
                            "phone": "+573145410393",
                            "formattedPhone": "+57 314 5410393"
                        },
                        "location": {
                            "address": "Cra. 10 #39-22",
                            "crossStreet": "Calle 31 o Calle de la Magdalena",
                            "lat": 10.423370247689558,
                            "lng": -75.54554448482497,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 10.423370247689558,
                                    "lng": -75.54554448482497
                                }
                            ],
                            "cc": "CO",
                            "city": "Cartagena",
                            "state": "Bolívar",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Cra. 10 #39-22 (Calle 31 o Calle de la Magdalena)",
                                "Cartagena de Indias, Bolívar",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d144941735",
                                "name": "Caribbean Restaurant",
                                "pluralName": "Caribbean Restaurants",
                                "shortName": "Caribbean",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/caribbean_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 9,
                            "usersCount": 75,
                            "checkinsCount": 99
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5aa4369732b61d783a5f0d55",
                    "createdAt": 1520711319,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4c7047a3d97fa143f4a7f5ca",
                        "name": "Playa Blanca",
                        "contact": {},
                        "location": {
                            "lat": 10.216914456830521,
                            "lng": -75.61410556860736,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 10.216914456830521,
                                    "lng": -75.61410556860736
                                }
                            ],
                            "cc": "CO",
                            "city": "Isla de Baru",
                            "state": "Colombia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Isla de Baru, Colombia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1e2941735",
                                "name": "Beach",
                                "pluralName": "Beaches",
                                "shortName": "Beach",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/beach_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 107,
                            "usersCount": 2618,
                            "checkinsCount": 2915
                        },
                        "url": "http://www.islasdelrosario.com.co",
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5aa424a849281431d62a5e34",
                    "createdAt": 1520706728,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4e0b3066091a24e92f01c4be",
                        "name": "Centro Comercial Caribe Plaza",
                        "contact": {
                            "phone": "+5756692362",
                            "formattedPhone": "+57 5 6692362",
                            "twitter": "caribeplaza",
                            "facebook": "301872953202932",
                            "facebookUsername": "caribeplaza",
                            "facebookName": "Caribe Plaza"
                        },
                        "location": {
                            "address": "Cll 29D # 22 - 108",
                            "lat": 10.414472970063873,
                            "lng": -75.52958965301514,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 10.414472970063873,
                                    "lng": -75.52958965301514
                                }
                            ],
                            "cc": "CO",
                            "city": "Cartagena",
                            "state": "Bolívar",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Cll 29D # 22 - 108",
                                "Cartagena de Indias, Bolívar",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1fd941735",
                                "name": "Shopping Mall",
                                "pluralName": "Shopping Malls",
                                "shortName": "Mall",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/mall_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 61,
                            "usersCount": 2803,
                            "checkinsCount": 12284
                        },
                        "url": "http://www.cccaribeplaza.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5aa35ec85d891b334e1c8504",
                    "createdAt": 1520656072,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4ff236cae4b0afc114e91a8a",
                        "name": "Centro Histórico de Cartagena / Ciudad Amurallada",
                        "contact": {},
                        "location": {
                            "lat": 10.424203397846842,
                            "lng": -75.5488990963779,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 10.424203397846842,
                                    "lng": -75.5488990963779
                                }
                            ],
                            "cc": "CO",
                            "city": "Cartagena",
                            "state": "Bolívar",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Cartagena de Indias, Bolívar",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4deefb944765f83613cdba6e",
                                "name": "Historic Site",
                                "pluralName": "Historic Sites",
                                "shortName": "Historic Site",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/historicsite_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 259,
                            "usersCount": 10341,
                            "checkinsCount": 23145
                        },
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5aa31531cad1b66201a48d2b",
                    "createdAt": 1520637233,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4c13f76c77cea593c9d3cf60",
                        "name": "Éxito",
                        "contact": {
                            "phone": "+5756640337",
                            "formattedPhone": "+57 5 6640337"
                        },
                        "location": {
                            "address": "Cl 38 10 - 85",
                            "crossStreet": "San Diego",
                            "lat": 10.42749224400411,
                            "lng": -75.54532142953641,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 10.42749224400411,
                                    "lng": -75.54532142953641
                                }
                            ],
                            "postalCode": "130001",
                            "cc": "CO",
                            "city": "Cartagena",
                            "state": "Bolívar",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Cl 38 10 - 85 (San Diego)",
                                "Cartagena de Indias, Bolívar",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "52f2ab2ebcbc57f1066b8b46",
                                "name": "Supermarket",
                                "pluralName": "Supermarkets",
                                "shortName": "Supermarket",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/food_grocery_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 11,
                            "usersCount": 577,
                            "checkinsCount": 1236
                        },
                        "url": "http://www.exito.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5aa2fcbda0215b585b87563e",
                    "createdAt": 1520630973,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4b5239cbf964a520057127e3",
                        "name": "Café del Mar",
                        "contact": {
                            "phone": "+5756646513",
                            "formattedPhone": "+57 5 6646513"
                        },
                        "location": {
                            "address": "C.Baluarte Santo Domingo",
                            "crossStreet": "Cra 2",
                            "lat": 10.424492018952652,
                            "lng": -75.55407593329257,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 10.424492018952652,
                                    "lng": -75.55407593329257
                                }
                            ],
                            "cc": "CO",
                            "city": "Cartagena",
                            "state": "Bolívar",
                            "country": "Colombia",
                            "formattedAddress": [
                                "C.Baluarte Santo Domingo (Cra 2)",
                                "Cartagena de Indias, Bolívar",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d121941735",
                                "name": "Lounge",
                                "pluralName": "Lounges",
                                "shortName": "Lounge",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/default_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 322,
                            "usersCount": 8437,
                            "checkinsCount": 10986
                        },
                        "url": "http://www.cafedelmarcartagena.com.co",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5aa2f298e65d0c1710aad513",
                    "createdAt": 1520628376,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4e244d3c18501a60d2ff841d",
                        "name": "Torre del Reloj",
                        "contact": {},
                        "location": {
                            "address": "Centro",
                            "lat": 10.42307227687408,
                            "lng": -75.54929482179794,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 10.42307227687408,
                                    "lng": -75.54929482179794
                                }
                            ],
                            "cc": "CO",
                            "city": "Cartagena",
                            "state": "Bolívar",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Centro",
                                "Cartagena de Indias, Bolívar",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4deefb944765f83613cdba6e",
                                "name": "Historic Site",
                                "pluralName": "Historic Sites",
                                "shortName": "Historic Site",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/historicsite_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 50,
                            "usersCount": 3041,
                            "checkinsCount": 4679
                        },
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5aa18f865ba046254656239d",
                    "createdAt": 1520537478,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "5871c2539b7eac78e687581d",
                        "name": "Edificio Marbella 47",
                        "contact": {},
                        "location": {
                            "address": "Calle 47",
                            "crossStreet": "Carrera 4",
                            "lat": 10.435084,
                            "lng": -75.53535,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 10.435084,
                                    "lng": -75.53535
                                }
                            ],
                            "postalCode": "130002",
                            "cc": "CO",
                            "city": "Cartagena",
                            "state": "Bolívar",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Calle 47 (Carrera 4)",
                                "Cartagena de Indias, Bolívar",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4d954b06a243a5684965b473",
                                "name": "Residential Building (Apartment / Condo)",
                                "pluralName": "Residential Buildings (Apartments / Condos)",
                                "shortName": "Residential",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/apartment_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 0,
                            "usersCount": 9,
                            "checkinsCount": 13
                        },
                        "venueRatingBlacklisted": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5aa18ae84420d86359f81bb9",
                    "createdAt": 1520536296,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4bb28fbf42959c74d307212c",
                        "name": "Aeropuerto Internacional Rafael Nuñez (CTG)",
                        "contact": {
                            "phone": "+5756664613",
                            "formattedPhone": "+57 5 6664613",
                            "twitter": "aerocartagena"
                        },
                        "location": {
                            "address": "Cll 71 # 3 - 89",
                            "lat": 10.445269705772132,
                            "lng": -75.51632772969657,
                            "cc": "CO",
                            "neighborhood": "Crespo, Cartagena, Bolívar",
                            "city": "Cartagena",
                            "state": "Bolívar",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Cll 71 # 3 - 89",
                                "Cartagena de Indias, Bolívar",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1ed931735",
                                "name": "Airport",
                                "pluralName": "Airports",
                                "shortName": "Airport",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/airport_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 296,
                            "usersCount": 25681,
                            "checkinsCount": 53299
                        },
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5aa1696cf0b49069e18a3702",
                    "createdAt": 1520527724,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "524dccb48bbd194ed45cbe14",
                        "name": "José María Córdova International Airport (MDE) (Aeropuerto Internacional José María Córdova)",
                        "contact": {
                            "phone": "+5744025110",
                            "formattedPhone": "+57 4 4025110",
                            "twitter": "aeropuertomde",
                            "facebook": "186482984697744",
                            "facebookUsername": "AeropuertoRionegro",
                            "facebookName": "Aeropuerto Internacional José María Córdova"
                        },
                        "location": {
                            "address": "Via Medellin - Rionegro",
                            "lat": 6.165430295662665,
                            "lng": -75.42388916015625,
                            "postalCode": "054047",
                            "cc": "CO",
                            "neighborhood": "Vereda Sajonia",
                            "city": "Rionegro",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Via Medellin - Rionegro",
                                "Rionegro, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1ed931735",
                                "name": "Airport",
                                "pluralName": "Airports",
                                "shortName": "Airport",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/airport_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 430,
                            "usersCount": 28889,
                            "checkinsCount": 113424
                        },
                        "url": "http://www.aeropuertorionegro.co",
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5aa0e08d6dcf0454e71fa957",
                    "createdAt": 1520492685,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4b901b60f964a520087633e3",
                        "name": "Centro Comercial Sandiego",
                        "contact": {
                            "phone": "+5744480624",
                            "formattedPhone": "+57 4 4480624",
                            "instagram": "sandiegocc",
                            "facebook": "135228129824601",
                            "facebookUsername": "CentroComercialSandiego",
                            "facebookName": "Centro Comercial Sandiego"
                        },
                        "location": {
                            "address": "Calle 33 # 42B-06",
                            "lat": 6.235544411556842,
                            "lng": -75.56930941635298,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.235544411556842,
                                    "lng": -75.56930941635298
                                }
                            ],
                            "cc": "CO",
                            "neighborhood": "San Diego",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Calle 33 # 42B-06",
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1fd941735",
                                "name": "Shopping Mall",
                                "pluralName": "Shopping Malls",
                                "shortName": "Mall",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/mall_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 113,
                            "usersCount": 5227,
                            "checkinsCount": 18588
                        },
                        "url": "http://www.sandiego.com.co",
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5aa09fde8194fc7016069adf",
                    "createdAt": 1520476126,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4dafa26af7b149e03f39040e",
                        "name": "Son Havana",
                        "contact": {
                            "phone": "+5744129644",
                            "formattedPhone": "+57 4 4129644"
                        },
                        "location": {
                            "address": "Cra 73",
                            "crossStreet": "44 - 56",
                            "lat": 6.25026302531861,
                            "lng": -75.592047958881,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.25026302531861,
                                    "lng": -75.592047958881
                                }
                            ],
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Cra 73 (44 - 56)",
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d116941735",
                                "name": "Bar",
                                "pluralName": "Bars",
                                "shortName": "Bar",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 31,
                            "usersCount": 451,
                            "checkinsCount": 907
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a9dfbd74a7aae6b07079a53",
                    "createdAt": 1520303063,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4f6e2088e4b0e42842f936e6",
                        "name": "Pizzería Olivia",
                        "contact": {
                            "phone": "+5743313885",
                            "formattedPhone": "+57 4 3313885",
                            "twitter": "pizzeriaolivia",
                            "facebook": "289323421139618",
                            "facebookUsername": "PizzeriaOlivia",
                            "facebookName": "Olivia"
                        },
                        "location": {
                            "address": "Calle 30Sur # 43a - 47",
                            "lat": 6.177221694742994,
                            "lng": -75.58569964757145,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.177221694742994,
                                    "lng": -75.58569964757145
                                }
                            ],
                            "cc": "CO",
                            "neighborhood": "Jardines, envigado",
                            "city": "Envigado",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Calle 30Sur # 43a - 47",
                                "Envigado, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1ca941735",
                                "name": "Pizza Place",
                                "pluralName": "Pizza Places",
                                "shortName": "Pizza",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/pizza_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 91,
                            "usersCount": 1272,
                            "checkinsCount": 2094
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "storeId": ""
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 1,
                        "items": [
                            {
                                "id": "5a9dfbe6e97dfb6936bed153",
                                "createdAt": 1520303078,
                                "source": {
                                    "name": "Swarm for iOS",
                                    "url": "https://www.swarmapp.com"
                                },
                                "prefix": "https://igx.4sqi.net/img/general/",
                                "suffix": "/14017658_nSb_CKwaxWEL10yz5rsjlfhXLetRjfXf5U_NsZQcKgs.jpg",
                                "width": 1440,
                                "height": 1920,
                                "user": {
                                    "id": "14017658",
                                    "firstName": "Luc",
                                    "lastName": "Succes",
                                    "gender": "male",
                                    "relationship": "self",
                                    "photo": {
                                        "prefix": "https://igx.4sqi.net/img/user/",
                                        "suffix": "/14017658-ZDOGONBT2KNZSARJ.jpg"
                                    }
                                },
                                "visibility": "public"
                            }
                        ],
                        "layout": {
                            "name": "single"
                        }
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a9dc94f95a72234ce7bc377",
                    "createdAt": 1520290127,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "59597186a0215b25938b8702",
                        "name": "Smart Fit La 10",
                        "contact": {},
                        "location": {
                            "address": "Calle 10 # 43E - 60",
                            "lat": 6.211903,
                            "lng": -75.573722,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.211903,
                                    "lng": -75.573722
                                }
                            ],
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Calle 10 # 43E - 60",
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d175941735",
                                "name": "Gym / Fitness Center",
                                "pluralName": "Gyms or Fitness Centers",
                                "shortName": "Gym / Fitness",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/gym_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 0,
                            "usersCount": 16,
                            "checkinsCount": 74
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a9785c281635b37dbd436b1",
                    "createdAt": 1519879618,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4f07ebc3e4b0803b684c78f9",
                        "name": "Envy Rooftop",
                        "contact": {},
                        "location": {
                            "address": "Calle 9a #37 -16",
                            "crossStreet": "Parque lleras",
                            "lat": 6.208922918834555,
                            "lng": -75.56700488331215,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.208922918834555,
                                    "lng": -75.56700488331215
                                }
                            ],
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Calle 9a #37 -16 (Parque lleras)",
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d11f941735",
                                "name": "Nightclub",
                                "pluralName": "Nightclubs",
                                "shortName": "Nightclub",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/nightclub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 34,
                            "usersCount": 1109,
                            "checkinsCount": 1463
                        },
                        "url": "http://www.thecharlee.com/envy-roof-top/",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 1,
                        "items": [
                            {
                                "id": "5a9785c503132029d8664ce1",
                                "createdAt": 1519879621,
                                "source": {
                                    "name": "Swarm for iOS",
                                    "url": "https://www.swarmapp.com"
                                },
                                "prefix": "https://igx.4sqi.net/img/general/",
                                "suffix": "/14017658__ZXH1FWmJ2fEDnwgqL0B0rQB63TIjCoZ2iU3PiulLs8.jpg",
                                "width": 1440,
                                "height": 1920,
                                "user": {
                                    "id": "14017658",
                                    "firstName": "Luc",
                                    "lastName": "Succes",
                                    "gender": "male",
                                    "relationship": "self",
                                    "photo": {
                                        "prefix": "https://igx.4sqi.net/img/user/",
                                        "suffix": "/14017658-ZDOGONBT2KNZSARJ.jpg"
                                    }
                                },
                                "visibility": "public"
                            }
                        ],
                        "layout": {
                            "name": "single"
                        }
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a932035ba57b47e90ea44fe",
                    "createdAt": 1519591477,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4b44dd0ef964a520a0fe25e3",
                        "name": "El Tesoro Parque Comercial",
                        "contact": {
                            "phone": "+5743211010",
                            "formattedPhone": "+57 4 3211010",
                            "twitter": "el_tesoro",
                            "facebook": "89274320014",
                            "facebookUsername": "eltesoroparquecomercial",
                            "facebookName": "El Tesoro Parque Comercial"
                        },
                        "location": {
                            "address": "Carrera 25A # 1A Sur - 45",
                            "crossStreet": "Tr. Superior",
                            "lat": 6.19719977329494,
                            "lng": -75.55912166435517,
                            "postalCode": "050022",
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Carrera 25A # 1A Sur - 45 (Tr. Superior)",
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1fd941735",
                                "name": "Shopping Mall",
                                "pluralName": "Shopping Malls",
                                "shortName": "Mall",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/mall_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 225,
                            "usersCount": 9611,
                            "checkinsCount": 39566
                        },
                        "url": "http://www.eltesoro.com.co",
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "91925956"
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a93073b5c68384af785a8d4",
                    "createdAt": 1519585083,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "59056add0f013c7625f460eb",
                        "name": "Gato",
                        "contact": {},
                        "location": {
                            "lat": 6.208309077264661,
                            "lng": -75.56578998580267,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.208309077264661,
                                    "lng": -75.56578998580267
                                }
                            ],
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d155941735",
                                "name": "Gastropub",
                                "pluralName": "Gastropubs",
                                "shortName": "Gastropub",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/gastropub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 5,
                            "usersCount": 105,
                            "checkinsCount": 139
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a8f9d65c036352cfd6e6666",
                    "createdAt": 1519361381,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4cf86e0ce8e254814790d762",
                        "name": "Bendito Seas",
                        "contact": {},
                        "location": {
                            "lat": 6.210091075137258,
                            "lng": -75.56748559999393,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.210091075137258,
                                    "lng": -75.56748559999393
                                }
                            ],
                            "cc": "CO",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d119941735",
                                "name": "Hookah Bar",
                                "pluralName": "Hookah Bars",
                                "shortName": "Hookah Bar",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/hookahbar_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 16,
                            "usersCount": 430,
                            "checkinsCount": 595
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a8e28601acf11426fa8a171",
                    "createdAt": 1519265888,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4f6271b5e4b045fbd1e7849a",
                        "name": "Blux",
                        "contact": {},
                        "location": {
                            "lat": 6.212891535946524,
                            "lng": -75.56079527251752,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.212891535946524,
                                    "lng": -75.56079527251752
                                }
                            ],
                            "cc": "CO",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4d954b06a243a5684965b473",
                                "name": "Residential Building (Apartment / Condo)",
                                "pluralName": "Residential Buildings (Apartments / Condos)",
                                "shortName": "Residential",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/apartment_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 1,
                            "usersCount": 67,
                            "checkinsCount": 143
                        },
                        "venueRatingBlacklisted": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a8e12da95d9860984de0c02",
                    "createdAt": 1519260378,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "59597186a0215b25938b8702",
                        "name": "Smart Fit La 10",
                        "contact": {},
                        "location": {
                            "address": "Calle 10 # 43E - 60",
                            "lat": 6.211903,
                            "lng": -75.573722,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.211903,
                                    "lng": -75.573722
                                }
                            ],
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Calle 10 # 43E - 60",
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d175941735",
                                "name": "Gym / Fitness Center",
                                "pluralName": "Gyms or Fitness Centers",
                                "shortName": "Gym / Fitness",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/gym_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 0,
                            "usersCount": 16,
                            "checkinsCount": 74
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a8b54cb625a665201aa4270",
                    "createdAt": 1519080651,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4f6271b5e4b045fbd1e7849a",
                        "name": "Blux",
                        "contact": {},
                        "location": {
                            "lat": 6.212891535946524,
                            "lng": -75.56079527251752,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.212891535946524,
                                    "lng": -75.56079527251752
                                }
                            ],
                            "cc": "CO",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4d954b06a243a5684965b473",
                                "name": "Residential Building (Apartment / Condo)",
                                "pluralName": "Residential Buildings (Apartments / Condos)",
                                "shortName": "Residential",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/apartment_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 1,
                            "usersCount": 67,
                            "checkinsCount": 143
                        },
                        "venueRatingBlacklisted": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a8b261fc0f16375e8f7f67d",
                    "createdAt": 1519068703,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4b76e11ef964a520a2662ee3",
                        "name": "Premium Plaza Centro Comercial",
                        "contact": {
                            "phone": "+5744487071",
                            "formattedPhone": "+57 4 4487071",
                            "twitter": "ccpremiumplaza"
                        },
                        "location": {
                            "address": "Cra 43A",
                            "crossStreet": "Calle 30",
                            "lat": 6.2294937217306385,
                            "lng": -75.5704179742259,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.2294937217306385,
                                    "lng": -75.5704179742259
                                }
                            ],
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Cra 43A (Calle 30)",
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1fd941735",
                                "name": "Shopping Mall",
                                "pluralName": "Shopping Malls",
                                "shortName": "Mall",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/mall_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 136,
                            "usersCount": 5500,
                            "checkinsCount": 22600
                        },
                        "url": "http://www.ccpremiumplaza.com",
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a85fc626fd626415e876c4c",
                    "createdAt": 1518730338,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "501fea4de4b05e0d96afc368",
                        "name": "Pergamino Café",
                        "contact": {},
                        "location": {
                            "address": "Cra 37 # 8A -37",
                            "lat": 6.2082329788547455,
                            "lng": -75.56700340241234,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.2082329788547455,
                                    "lng": -75.56700340241234
                                }
                            ],
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Cra 37 # 8A -37",
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d16d941735",
                                "name": "Café",
                                "pluralName": "Cafés",
                                "shortName": "Café",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/cafe_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 166,
                            "usersCount": 1971,
                            "checkinsCount": 4583
                        },
                        "url": "http://www.pergamino.co",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "88155346"
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a7e7240e7a23724879937a0",
                    "createdAt": 1518236224,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "567dbf67498eb5432fc55432",
                        "name": "PANORAMA Rooftop",
                        "contact": {},
                        "location": {
                            "address": "Calle 8 No. 34 - 33 Provenza",
                            "lat": 6.207220550816134,
                            "lng": -75.56557682376472,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.207220550816134,
                                    "lng": -75.56557682376472
                                }
                            ],
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Calle 8 No. 34 - 33 Provenza",
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d117941735",
                                "name": "Beer Garden",
                                "pluralName": "Beer Gardens",
                                "shortName": "Beer Garden",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/beergarden_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 20,
                            "usersCount": 306,
                            "checkinsCount": 445
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": true,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a73a8bf97cf5a04fe529cd4",
                    "createdAt": 1517529279,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "589e37db9b615c0bdae9f042",
                        "name": "Barbería 10A",
                        "contact": {},
                        "location": {
                            "lat": 6.21036,
                            "lng": -75.56807,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.21036,
                                    "lng": -75.56807
                                }
                            ],
                            "cc": "CO",
                            "city": "Envigado",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Envigado, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "54541900498ea6ccd0202697",
                                "name": "Health & Beauty Service",
                                "pluralName": "Health & Beauty Services",
                                "shortName": "Health & Beauty",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/salon_barber_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 0,
                            "usersCount": 6,
                            "checkinsCount": 19
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a6f8f3869e77b476625d42a",
                    "createdAt": 1517260600,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "59cd505e9d6a1941f3f349c6",
                        "name": "Selina Coworking",
                        "contact": {},
                        "location": {
                            "lat": 6.207609972569589,
                            "lng": -75.56424464953012,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.207609972569589,
                                    "lng": -75.56424464953012
                                }
                            ],
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d174941735",
                                "name": "Coworking Space",
                                "pluralName": "Coworking Spaces",
                                "shortName": "Coworking Space",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/office_coworkingspace_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 1,
                            "usersCount": 39,
                            "checkinsCount": 112
                        },
                        "venueRatingBlacklisted": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "53fe77e54b9048855b3648b6",
                        "name": "Lappy Toppy",
                        "image": {
                            "prefix": "https://irs2.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/laptop_4d7599.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 42
                        },
                        "pickerPosition": {
                            "page": 1,
                            "index": 18
                        },
                        "teaseText": "Check in at offices to unlock this sticker.",
                        "unlockText": "You're totally not reading BuzzFeed all day. Here’s a sticker for being so productive. Now back to that “Which Sticker Are You?” quiz.",
                        "bonusText": "Use at Offices for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a6f2642610f0407370b3063",
                    "createdAt": 1517233730,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "58cd7e1be0adac0132ae1cdc",
                        "name": "Toucan Café",
                        "contact": {},
                        "location": {
                            "lat": 6.210185041504231,
                            "lng": -75.56909126757073,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.210185041504231,
                                    "lng": -75.56909126757073
                                }
                            ],
                            "cc": "CO",
                            "neighborhood": "El Poblado",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1e0931735",
                                "name": "Coffee Shop",
                                "pluralName": "Coffee Shops",
                                "shortName": "Coffee Shop",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 1,
                            "usersCount": 49,
                            "checkinsCount": 126
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a6b84a786bc4925581ae418",
                    "createdAt": 1516995751,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "59cd505e9d6a1941f3f349c6",
                        "name": "Selina Coworking",
                        "contact": {},
                        "location": {
                            "lat": 6.207609972569589,
                            "lng": -75.56424464953012,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.207609972569589,
                                    "lng": -75.56424464953012
                                }
                            ],
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d174941735",
                                "name": "Coworking Space",
                                "pluralName": "Coworking Spaces",
                                "shortName": "Coworking Space",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/office_coworkingspace_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 1,
                            "usersCount": 39,
                            "checkinsCount": 112
                        },
                        "venueRatingBlacklisted": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a6aa1510336936c30bc664c",
                    "createdAt": 1516937553,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "59a0a9cb65cdf84526252554",
                        "name": "Florez Food Garden",
                        "contact": {},
                        "location": {
                            "lat": 6.206745,
                            "lng": -75.565129,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.206745,
                                    "lng": -75.565129
                                }
                            ],
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d116941735",
                                "name": "Bar",
                                "pluralName": "Bars",
                                "shortName": "Bar",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 2,
                            "usersCount": 16,
                            "checkinsCount": 16
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 1,
                        "groups": [
                            {
                                "type": "friends",
                                "count": 1,
                                "items": [
                                    {
                                        "id": "58749",
                                        "firstName": "Kim",
                                        "lastName": "Phạm",
                                        "gender": "female",
                                        "relationship": "friend",
                                        "photo": {
                                            "prefix": "https://igx.4sqi.net/img/user/",
                                            "suffix": "/58749-0OKRZUTUUS5EM4N0.jpg"
                                        }
                                    }
                                ]
                            }
                        ],
                        "summary": "Kim Phạm"
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a68d6864a1cc00a42d33f92",
                    "createdAt": 1516820102,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "595d428650a6f05c630e175e",
                        "name": "Tinkko",
                        "contact": {},
                        "location": {
                            "address": "Carrera 42 No 3 Sur 81, Torre 1 Piso 15",
                            "lat": 6.200093,
                            "lng": -75.572771,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.200093,
                                    "lng": -75.572771
                                }
                            ],
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Carrera 42 No 3 Sur 81, Torre 1 Piso 15",
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d174941735",
                                "name": "Coworking Space",
                                "pluralName": "Coworking Spaces",
                                "shortName": "Coworking Space",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/office_coworkingspace_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 0,
                            "usersCount": 15,
                            "checkinsCount": 53
                        },
                        "venueRatingBlacklisted": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "53fe77e54b9048855b3648b6",
                        "name": "Lappy Toppy",
                        "image": {
                            "prefix": "https://irs2.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/laptop_4d7599.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 42
                        },
                        "pickerPosition": {
                            "page": 1,
                            "index": 18
                        },
                        "teaseText": "Check in at offices to unlock this sticker.",
                        "unlockText": "You're totally not reading BuzzFeed all day. Here’s a sticker for being so productive. Now back to that “Which Sticker Are You?” quiz.",
                        "bonusText": "Use at Offices for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 1,
                        "items": [
                            {
                                "id": "5a68d68881635b0538af6012",
                                "createdAt": 1516820104,
                                "source": {
                                    "name": "Swarm for iOS",
                                    "url": "https://www.swarmapp.com"
                                },
                                "hasSticker": true,
                                "prefix": "https://igx.4sqi.net/img/general/",
                                "suffix": "/14017658_Lu0jNW6CWzqpz5zpyAAHi6sQAc2G0UTyT2pkdGOaSvY.jpg",
                                "width": 1440,
                                "height": 1920,
                                "user": {
                                    "id": "14017658",
                                    "firstName": "Luc",
                                    "lastName": "Succes",
                                    "gender": "male",
                                    "relationship": "self",
                                    "photo": {
                                        "prefix": "https://igx.4sqi.net/img/user/",
                                        "suffix": "/14017658-ZDOGONBT2KNZSARJ.jpg"
                                    }
                                },
                                "visibility": "friends"
                            }
                        ],
                        "layout": {
                            "name": "single"
                        }
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a67c053b8fd9d5837992f12",
                    "createdAt": 1516748883,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "589e37db9b615c0bdae9f042",
                        "name": "Barbería 10A",
                        "contact": {},
                        "location": {
                            "lat": 6.21036,
                            "lng": -75.56807,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.21036,
                                    "lng": -75.56807
                                }
                            ],
                            "cc": "CO",
                            "city": "Envigado",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Envigado, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "54541900498ea6ccd0202697",
                                "name": "Health & Beauty Service",
                                "pluralName": "Health & Beauty Services",
                                "shortName": "Health & Beauty",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/salon_barber_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 0,
                            "usersCount": 6,
                            "checkinsCount": 19
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a6444331b0ea508f806c3f4",
                    "createdAt": 1516520499,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4e83ca73d5fb8ba08d577255",
                        "name": "Rose Park",
                        "contact": {},
                        "location": {
                            "lat": 6.21191580112795,
                            "lng": -75.56586392103152,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.21191580112795,
                                    "lng": -75.56586392103152
                                }
                            ],
                            "cc": "CO",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4d954b06a243a5684965b473",
                                "name": "Residential Building (Apartment / Condo)",
                                "pluralName": "Residential Buildings (Apartments / Condos)",
                                "shortName": "Residential",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/apartment_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 0,
                            "usersCount": 58,
                            "checkinsCount": 267
                        },
                        "venueRatingBlacklisted": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a641980e97dfb64e365d5ac",
                    "createdAt": 1516509568,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4daf98f94df00ee01d3ded4b",
                        "name": "Chupitos",
                        "contact": {
                            "twitter": "chupitos"
                        },
                        "location": {
                            "address": "Cra 37A",
                            "crossStreet": "8A 1-99",
                            "lat": 6.208228237015649,
                            "lng": -75.56742122669979,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.208228237015649,
                                    "lng": -75.56742122669979
                                }
                            ],
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Cra 37A (8A 1-99)",
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d116941735",
                                "name": "Bar",
                                "pluralName": "Bars",
                                "shortName": "Bar",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 31,
                            "usersCount": 891,
                            "checkinsCount": 1239
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 1,
                        "groups": [
                            {
                                "type": "friends",
                                "count": 1,
                                "items": [
                                    {
                                        "id": "58749",
                                        "firstName": "Kim",
                                        "lastName": "Phạm",
                                        "gender": "female",
                                        "relationship": "friend",
                                        "photo": {
                                            "prefix": "https://igx.4sqi.net/img/user/",
                                            "suffix": "/58749-0OKRZUTUUS5EM4N0.jpg"
                                        }
                                    }
                                ]
                            }
                        ],
                        "summary": "Kim Phạm"
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 1
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a62c34c6fd6263df8ef3b92",
                    "createdAt": 1516421964,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "5559603e498eb8398f8f8333",
                        "name": "Vintrash",
                        "contact": {
                            "phone": "+5743664631",
                            "formattedPhone": "+57 4 3664631",
                            "instagram": "vintrashbar"
                        },
                        "location": {
                            "address": "Carrera 35 # 8A - 39",
                            "lat": 6.207819216402517,
                            "lng": -75.56594433824485,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.207819216402517,
                                    "lng": -75.56594433824485
                                }
                            ],
                            "postalCode": "050021",
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Carrera 35 # 8A - 39",
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d11f941735",
                                "name": "Nightclub",
                                "pluralName": "Nightclubs",
                                "shortName": "Nightclub",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/nightclub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 17,
                            "usersCount": 463,
                            "checkinsCount": 885
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a616ec3d8096e75cc2acb6e",
                    "createdAt": 1516334787,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4cf86e0ce8e254814790d762",
                        "name": "Bendito Seas",
                        "contact": {},
                        "location": {
                            "lat": 6.210091075137258,
                            "lng": -75.56748559999393,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.210091075137258,
                                    "lng": -75.56748559999393
                                }
                            ],
                            "cc": "CO",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d119941735",
                                "name": "Hookah Bar",
                                "pluralName": "Hookah Bars",
                                "shortName": "Hookah Bar",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/hookahbar_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 16,
                            "usersCount": 430,
                            "checkinsCount": 595
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a615af715173e5c848b0826",
                    "createdAt": 1516329719,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "54947a55498e855d5f512e54",
                        "name": "Bonhomía",
                        "contact": {
                            "facebook": "1559754067591828",
                            "facebookUsername": "bonhomiasalumeria",
                            "facebookName": "Bonhomía"
                        },
                        "location": {
                            "address": "Carrera 37 # 8 - 53",
                            "crossStreet": "Vía Primavera",
                            "lat": 6.207843508528635,
                            "lng": -75.56719163270115,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.207843508528635,
                                    "lng": -75.56719163270115
                                }
                            ],
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Carrera 37 # 8 - 53 (Vía Primavera)",
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "52e81612bcbc57f1066b79f1",
                                "name": "Bistro",
                                "pluralName": "Bistros",
                                "shortName": "Bistro",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/default_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 35,
                            "usersCount": 536,
                            "checkinsCount": 701
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 1,
                        "groups": [
                            {
                                "type": "friends",
                                "count": 1,
                                "items": [
                                    {
                                        "id": "72928697",
                                        "firstName": "Shotta",
                                        "lastName": "Brian",
                                        "gender": "male",
                                        "relationship": "friend",
                                        "photo": {
                                            "prefix": "https://igx.4sqi.net/img/user/",
                                            "suffix": "/72928697-5SSDYADUOWLP3SLG.jpg"
                                        }
                                    }
                                ]
                            }
                        ],
                        "summary": "Shotta Brian"
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 1,
                        "items": [
                            {
                                "id": "5a615afd018cbb2eb2cae201",
                                "createdAt": 1516329725,
                                "source": {
                                    "name": "Swarm for iOS",
                                    "url": "https://www.swarmapp.com"
                                },
                                "prefix": "https://igx.4sqi.net/img/general/",
                                "suffix": "/14017658_xpaPzuMIdd8fcgbX5HdSesnvM9TayQZ8vbsfQKlrwus.jpg",
                                "width": 1440,
                                "height": 1920,
                                "user": {
                                    "id": "14017658",
                                    "firstName": "Luc",
                                    "lastName": "Succes",
                                    "gender": "male",
                                    "relationship": "self",
                                    "photo": {
                                        "prefix": "https://igx.4sqi.net/img/user/",
                                        "suffix": "/14017658-ZDOGONBT2KNZSARJ.jpg"
                                    }
                                },
                                "visibility": "public"
                            }
                        ],
                        "layout": {
                            "name": "single"
                        }
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a60d394dec1d630b2bd6229",
                    "createdAt": 1516295060,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "584377565a58693fa14e4940",
                        "name": "Bar Chiquita",
                        "contact": {},
                        "location": {
                            "address": "Carrera 37 #10-37",
                            "crossStreet": "Local 205",
                            "lat": 6.20948085603088,
                            "lng": -75.5665494463889,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.20948085603088,
                                    "lng": -75.5665494463889
                                }
                            ],
                            "postalCode": "050021",
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Carrera 37 #10-37 (Local 205)",
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d11e941735",
                                "name": "Cocktail Bar",
                                "pluralName": "Cocktail Bars",
                                "shortName": "Cocktail",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/cocktails_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 0,
                            "usersCount": 76,
                            "checkinsCount": 119
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "394130537"
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a60d03b464d650a0619e1a7",
                    "createdAt": 1516294203,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4b7209d1f964a520826b2de3",
                        "name": "Parque de El Poblado",
                        "contact": {
                            "twitter": "la"
                        },
                        "location": {
                            "lat": 6.210339909103692,
                            "lng": -75.57095235299738,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.210339909103692,
                                    "lng": -75.57095235299738
                                }
                            ],
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d164941735",
                                "name": "Plaza",
                                "pluralName": "Plazas",
                                "shortName": "Plaza",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/plaza_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 67,
                            "usersCount": 4057,
                            "checkinsCount": 14505
                        },
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a60a8315d891b560cdedcd8",
                    "createdAt": 1516283953,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "571b9bee498e95f805701486",
                        "name": "Tomasa y al alma",
                        "contact": {},
                        "location": {
                            "lat": 6.212933,
                            "lng": -75.571263,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.212933,
                                    "lng": -75.571263
                                }
                            ],
                            "cc": "CO",
                            "neighborhood": "Manila",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d143941735",
                                "name": "Breakfast Spot",
                                "pluralName": "Breakfast Spots",
                                "shortName": "Breakfast",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/breakfast_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 4,
                            "usersCount": 59,
                            "checkinsCount": 92
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 1,
                        "groups": [
                            {
                                "type": "friends",
                                "count": 1,
                                "items": [
                                    {
                                        "id": "72928697",
                                        "firstName": "Shotta",
                                        "lastName": "Brian",
                                        "gender": "male",
                                        "relationship": "friend",
                                        "photo": {
                                            "prefix": "https://igx.4sqi.net/img/user/",
                                            "suffix": "/72928697-5SSDYADUOWLP3SLG.jpg"
                                        }
                                    }
                                ]
                            }
                        ],
                        "summary": "Shotta Brian"
                    },
                    "like": false,
                    "sticker": {
                        "id": "52a659800000000000000004",
                        "name": "Sunny Side",
                        "image": {
                            "prefix": "https://irs2.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/brunch_bd54b0.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 77
                        },
                        "pickerPosition": {
                            "page": 3,
                            "index": 5
                        },
                        "teaseText": "Check in at breakfast spots to unlock this sticker.",
                        "unlockText": "Rise and shine! Start your day with eggs, bacon and this sticker. And no you can’t substitute it for the hash browns.",
                        "bonusText": "Use at Breakfast Spots for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a5fd5bcda708066ce0cf56e",
                    "createdAt": 1516230076,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "59597186a0215b25938b8702",
                        "name": "Smart Fit La 10",
                        "contact": {},
                        "location": {
                            "address": "Calle 10 # 43E - 60",
                            "lat": 6.211903,
                            "lng": -75.573722,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.211903,
                                    "lng": -75.573722
                                }
                            ],
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Calle 10 # 43E - 60",
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d175941735",
                                "name": "Gym / Fitness Center",
                                "pluralName": "Gyms or Fitness Centers",
                                "shortName": "Gym / Fitness",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/gym_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 0,
                            "usersCount": 16,
                            "checkinsCount": 74
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a5e713a8264447a2759bd72",
                    "createdAt": 1516138810,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4cbb962c4495721e5282567a",
                        "name": "Black Sheep Hostel",
                        "contact": {
                            "phone": "+5745807837",
                            "formattedPhone": "+57 4 5807837"
                        },
                        "location": {
                            "address": "Transversal 5A #45-133",
                            "crossStreet": "Patio Bonito",
                            "lat": 6.207317941513575,
                            "lng": -75.57560739877333,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.207317941513575,
                                    "lng": -75.57560739877333
                                }
                            ],
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Transversal 5A #45-133 (Patio Bonito)",
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1ee931735",
                                "name": "Hostel",
                                "pluralName": "Hostels",
                                "shortName": "Hostel",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/hostel_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 7,
                            "usersCount": 223,
                            "checkinsCount": 494
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a5e3ffc82a7500e21e93583",
                    "createdAt": 1516126204,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "563a3665cd10493f529ce9af",
                        "name": "Hija Mia Coffee Roasters",
                        "contact": {},
                        "location": {
                            "lat": 6.212608,
                            "lng": -75.570759,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.212608,
                                    "lng": -75.570759
                                }
                            ],
                            "cc": "CO",
                            "neighborhood": "Manila",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d16d941735",
                                "name": "Café",
                                "pluralName": "Cafés",
                                "shortName": "Café",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/cafe_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 9,
                            "usersCount": 44,
                            "checkinsCount": 73
                        },
                        "url": "http://hijamiacoffee.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "5963b5ddbab2f604cf800490",
                        "name": "Foam-o",
                        "image": {
                            "prefix": "https://irs2.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/Cafes_776a64.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 248
                        },
                        "pickerPosition": {
                            "page": 10,
                            "index": 8
                        },
                        "teaseText": "Check in at cafés to unlock this sticker.",
                        "unlockText": "I’ll have a single-origin, double roast, triple whip, half-caf with sprinkles. Thanks a latte."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a5d71dd97461771e570944a",
                    "createdAt": 1516073437,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "59056add0f013c7625f460eb",
                        "name": "Gato",
                        "contact": {},
                        "location": {
                            "lat": 6.208309077264661,
                            "lng": -75.56578998580267,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.208309077264661,
                                    "lng": -75.56578998580267
                                }
                            ],
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d155941735",
                                "name": "Gastropub",
                                "pluralName": "Gastropubs",
                                "shortName": "Gastropub",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/gastropub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 5,
                            "usersCount": 105,
                            "checkinsCount": 139
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a5d2355ad910e7b13d73e28",
                    "createdAt": 1516053333,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "58853a46084be50765baf4eb",
                        "name": "El Secreto del Este",
                        "contact": {},
                        "location": {
                            "address": "Carrera 25 # 3 - 45",
                            "crossStreet": "Mall del Este",
                            "lat": 6.198779,
                            "lng": -75.557277,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 6.198779,
                                    "lng": -75.557277
                                }
                            ],
                            "postalCode": "050021",
                            "cc": "CO",
                            "city": "Medellín",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Carrera 25 # 3 - 45 (Mall del Este)",
                                "Medellín, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1c4941735",
                                "name": "Restaurant",
                                "pluralName": "Restaurants",
                                "shortName": "Restaurant",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/default_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 1,
                            "usersCount": 3,
                            "checkinsCount": 3
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 1
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a5ca9f895a72210f4e4f950",
                    "createdAt": 1516022264,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "524dccb48bbd194ed45cbe14",
                        "name": "José María Córdova International Airport (MDE) (Aeropuerto Internacional José María Córdova)",
                        "contact": {
                            "phone": "+5744025110",
                            "formattedPhone": "+57 4 4025110",
                            "twitter": "aeropuertomde",
                            "facebook": "186482984697744",
                            "facebookUsername": "AeropuertoRionegro",
                            "facebookName": "Aeropuerto Internacional José María Córdova"
                        },
                        "location": {
                            "address": "Via Medellin - Rionegro",
                            "lat": 6.165430295662665,
                            "lng": -75.42388916015625,
                            "postalCode": "054047",
                            "cc": "CO",
                            "neighborhood": "Vereda Sajonia",
                            "city": "Rionegro",
                            "state": "Antioquia",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Via Medellin - Rionegro",
                                "Rionegro, Antioquia",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1ed931735",
                                "name": "Airport",
                                "pluralName": "Airports",
                                "shortName": "Airport",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/airport_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 430,
                            "usersCount": 28889,
                            "checkinsCount": 113424
                        },
                        "url": "http://www.aeropuertorionegro.co",
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a5c95231b0ea52cb2ae7030",
                    "createdAt": 1516016931,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4b793d31f964a5205bf02ee3",
                        "name": "El Dorado International Airport (BOG) (Aeropuerto Internacional El Dorado (BOG))",
                        "contact": {
                            "phone": "+5712662000",
                            "formattedPhone": "+57 1 2662000",
                            "twitter": "bog_eldorado",
                            "instagram": "bogeldorado",
                            "facebook": "212815918743214",
                            "facebookUsername": "ELDORADOBOG",
                            "facebookName": "Aeropuerto Internacional El Dorado"
                        },
                        "location": {
                            "address": "Avenida Calle 26 # 110 - 00",
                            "crossStreet": "Av. El Dorado",
                            "lat": 4.697944069236215,
                            "lng": -74.14121990583001,
                            "postalCode": "11001000",
                            "cc": "CO",
                            "city": "Bogotá",
                            "state": "Bogota D.C.",
                            "country": "Colombia",
                            "formattedAddress": [
                                "Avenida Calle 26 # 110 - 00 (Av. El Dorado)",
                                "Bogotá, Bogotá D.C.",
                                "Colombia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1ed931735",
                                "name": "Airport",
                                "pluralName": "Airports",
                                "shortName": "Airport",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/airport_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 1962,
                            "usersCount": 94464,
                            "checkinsCount": 399281
                        },
                        "url": "http://www.eldorado.aero",
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "36248952"
                        },
                        "storeId": ""
                    },
                    "likes": {
                        "count": 1,
                        "groups": [
                            {
                                "type": "friends",
                                "count": 1,
                                "items": [
                                    {
                                        "id": "65890496",
                                        "firstName": "Connor",
                                        "lastName": "McEwen",
                                        "gender": "male",
                                        "relationship": "friend",
                                        "photo": {
                                            "prefix": "https://igx.4sqi.net/img/user/",
                                            "suffix": "/65890496_apYCxnTq_VeJBtc7ox_8fP6u3xzMo1EsA7VDCFtd2N2xMx7Yox7k9Jvr_SwEdznys2TZI0e1c.jpg"
                                        }
                                    }
                                ]
                            }
                        ],
                        "summary": "Connor McEwen"
                    },
                    "like": false,
                    "sticker": {
                        "id": "54b59bd0e50851c96b4e8c8a",
                        "name": "Jetsetter",
                        "image": {
                            "prefix": "https://irs2.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/airplane_cff7ac.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 10
                        },
                        "pickerPosition": {
                            "page": 0,
                            "index": 10
                        },
                        "teaseText": "Check in at airports to unlock this sticker.",
                        "unlockText": "$50 for bags? $25 for legroom? $30 for a pillow?! At least this sticker is free. Now turn off your phone before it takes down this plane.",
                        "bonusText": "Use at Airports for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 2
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a5c09fed807ee4711347a47",
                    "createdAt": 1515981310,
                    "type": "checkin",
                    "entities": [],
                    "shout": "Best Haitian food in Miami",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "55dd5897498ee13c23d02e47",
                        "name": "Ivan's Cookhouse",
                        "contact": {
                            "phone": "3059444826",
                            "formattedPhone": "(305) 944-4826",
                            "facebook": "768882389859268",
                            "facebookUsername": "ivanscookhouse",
                            "facebookName": "Ivan's Cookhouse"
                        },
                        "location": {
                            "address": "14815 Biscayne Blvd",
                            "lat": 25.92612115911157,
                            "lng": -80.15917627873905,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 25.92612115911157,
                                    "lng": -80.15917627873905
                                }
                            ],
                            "postalCode": "33181",
                            "cc": "US",
                            "city": "North Miami",
                            "state": "FL",
                            "country": "United States",
                            "formattedAddress": [
                                "14815 Biscayne Blvd",
                                "North Miami, FL 33181"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d142941735",
                                "name": "Asian Restaurant",
                                "pluralName": "Asian Restaurants",
                                "shortName": "Asian",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/asian_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 2,
                            "usersCount": 21,
                            "checkinsCount": 22
                        },
                        "url": "http://ivanscookhouse.com",
                        "menu": {
                            "type": "Menu",
                            "label": "Menu",
                            "anchor": "View Menu",
                            "url": "http://ivanscookhouse.com/menu/",
                            "mobileUrl": "http://ivanscookhouse.com/menu/",
                            "externalUrl": "http://ivanscookhouse.com/menu/"
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 1,
                        "groups": [
                            {
                                "type": "friends",
                                "count": 1,
                                "items": [
                                    {
                                        "id": "11400",
                                        "firstName": "Barry",
                                        "lastName": "Hoggard",
                                        "gender": "male",
                                        "relationship": "friend",
                                        "photo": {
                                            "prefix": "https://igx.4sqi.net/img/user/",
                                            "suffix": "/2KILNZE0OHQGERZ5.jpg"
                                        }
                                    }
                                ]
                            }
                        ],
                        "summary": "Barry Hoggard"
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a5ba64d1b0ea508f806d916",
                    "createdAt": 1515955789,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4c79588481bca093ad0dfd14",
                        "name": "Miami Beach",
                        "contact": {},
                        "location": {
                            "address": "Miami Beach",
                            "lat": 25.788299357706848,
                            "lng": -80.12775421142578,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 25.788299357706848,
                                    "lng": -80.12775421142578
                                }
                            ],
                            "postalCode": "33139",
                            "cc": "US",
                            "city": "Miami Beach",
                            "state": "FL",
                            "country": "United States",
                            "formattedAddress": [
                                "Miami Beach",
                                "Miami Beach, FL 33139"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1e2941735",
                                "name": "Beach",
                                "pluralName": "Beaches",
                                "shortName": "Beach",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/beach_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 158,
                            "usersCount": 22758,
                            "checkinsCount": 36734
                        },
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a5b92419b047333ca6e3008",
                    "createdAt": 1515950657,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4eda5cdb8231efe38f575c32",
                        "name": "The Social Club",
                        "contact": {
                            "phone": "3056041800",
                            "formattedPhone": "(305) 604-1800"
                        },
                        "location": {
                            "address": "1717 Collins Ave",
                            "lat": 25.79280941498965,
                            "lng": -80.128767635582,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 25.79280941498965,
                                    "lng": -80.128767635582
                                }
                            ],
                            "postalCode": "33139",
                            "cc": "US",
                            "city": "Miami Beach",
                            "state": "FL",
                            "country": "United States",
                            "formattedAddress": [
                                "1717 Collins Ave",
                                "Miami Beach, FL 33139"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d116941735",
                                "name": "Bar",
                                "pluralName": "Bars",
                                "shortName": "Bar",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 27,
                            "usersCount": 1282,
                            "checkinsCount": 1900
                        },
                        "url": "http://www.socialclubatsurfcomber.com",
                        "hasMenu": true,
                        "menu": {
                            "type": "Menu",
                            "label": "Menu",
                            "anchor": "View Menu",
                            "url": "https://foursquare.com/v/the-social-club/4eda5cdb8231efe38f575c32/menu",
                            "mobileUrl": "https://foursquare.com/v/4eda5cdb8231efe38f575c32/device_menu"
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a5b8979bcbf7a7a5bfeecb4",
                    "createdAt": 1515948409,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4c264843f7ced13aef0e266d",
                        "name": "Agua Spa",
                        "contact": {
                            "phone": "3056732900",
                            "formattedPhone": "(305) 673-2900",
                            "twitter": "morganshotels",
                            "facebook": "65500976667",
                            "facebookUsername": "MorgansHotelGroup",
                            "facebookName": "Morgans Hotel Group"
                        },
                        "location": {
                            "address": "1685 Collins Ave",
                            "crossStreet": "at Delano Hotel",
                            "lat": 25.79228819969709,
                            "lng": -80.1293726769266,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 25.79228819969709,
                                    "lng": -80.1293726769266
                                }
                            ],
                            "postalCode": "33139",
                            "cc": "US",
                            "city": "Miami Beach",
                            "state": "FL",
                            "country": "United States",
                            "formattedAddress": [
                                "1685 Collins Ave (at Delano Hotel)",
                                "Miami Beach, FL 33139"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1ed941735",
                                "name": "Spa",
                                "pluralName": "Spas",
                                "shortName": "Spa",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/spa_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 8,
                            "usersCount": 110,
                            "checkinsCount": 142
                        },
                        "url": "http://backofhouse.morganshotelgroup.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a5a72bffd9d732651bdbd45",
                    "createdAt": 1515877055,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "4f52aaf9e4b03be36334b3ff",
                        "name": "The Wynwood Walls",
                        "contact": {},
                        "location": {
                            "address": "167 NW 25th St",
                            "crossStreet": "off NW 2nd Ave",
                            "lat": 25.80109844526163,
                            "lng": -80.19952613459574,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 25.80109844526163,
                                    "lng": -80.19952613459574
                                }
                            ],
                            "postalCode": "33127",
                            "cc": "US",
                            "neighborhood": "Wynwood-Edgewater",
                            "city": "Miami",
                            "state": "FL",
                            "country": "United States",
                            "formattedAddress": [
                                "167 NW 25th St (off NW 2nd Ave)",
                                "Miami, FL 33127"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1e2931735",
                                "name": "Art Gallery",
                                "pluralName": "Art Galleries",
                                "shortName": "Art Gallery",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/artgallery_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 214,
                            "usersCount": 14096,
                            "checkinsCount": 18535
                        },
                        "url": "http://thewynwoodwalls.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 1,
                        "groups": [
                            {
                                "type": "friends",
                                "count": 1,
                                "items": [
                                    {
                                        "id": "34228610",
                                        "firstName": "Caramia🔥",
                                        "gender": "female",
                                        "relationship": "friend",
                                        "photo": {
                                            "prefix": "https://igx.4sqi.net/img/user/",
                                            "suffix": "/34228610-NOSY3G5K2QO0MOLJ.jpg"
                                        }
                                    }
                                ]
                            }
                        ],
                        "summary": "Caramia🔥"
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 1,
                        "items": [
                            {
                                "id": "5a5a72c7270ee73507e594c9",
                                "createdAt": 1515877063,
                                "source": {
                                    "name": "Swarm for iOS",
                                    "url": "https://www.swarmapp.com"
                                },
                                "hasSticker": true,
                                "prefix": "https://igx.4sqi.net/img/general/",
                                "suffix": "/14017658_kAKSBKAX7j5q27CzEAJlAgwSG8_lmhiq0uXLBLkqnqk.jpg",
                                "width": 1440,
                                "height": 1920,
                                "user": {
                                    "id": "14017658",
                                    "firstName": "Luc",
                                    "lastName": "Succes",
                                    "gender": "male",
                                    "relationship": "self",
                                    "photo": {
                                        "prefix": "https://igx.4sqi.net/img/user/",
                                        "suffix": "/14017658-ZDOGONBT2KNZSARJ.jpg"
                                    }
                                },
                                "visibility": "friends"
                            }
                        ],
                        "layout": {
                            "name": "single"
                        }
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a581ca1dab4b11ccb35d514",
                    "createdAt": 1515723937,
                    "type": "checkin",
                    "timeZoneOffset": -300,
                    "venue": {
                        "id": "50f84bcee4b0688fecfe6ced",
                        "name": "Fiorito",
                        "contact": {
                            "phone": "3057542899",
                            "formattedPhone": "(305) 754-2899",
                            "twitter": "fioritomiami",
                            "facebook": "290980957686859",
                            "facebookUsername": "fioritomiami",
                            "facebookName": "Fiorito"
                        },
                        "location": {
                            "address": "5555 NE 2nd Ave",
                            "lat": 25.827146911414328,
                            "lng": -80.19183736337303,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 25.827146911414328,
                                    "lng": -80.19183736337303
                                }
                            ],
                            "postalCode": "33137",
                            "cc": "US",
                            "city": "Miami",
                            "state": "FL",
                            "country": "United States",
                            "formattedAddress": [
                                "5555 NE 2nd Ave",
                                "Miami, FL 33137"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d107941735",
                                "name": "Argentinian Restaurant",
                                "pluralName": "Argentinian Restaurants",
                                "shortName": "Argentinian",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/argentinian_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 42,
                            "usersCount": 581,
                            "checkinsCount": 990
                        },
                        "url": "http://fioritomiami.com",
                        "hasMenu": true,
                        "menu": {
                            "type": "Menu",
                            "label": "Menu",
                            "anchor": "View Menu",
                            "url": "https://foursquare.com/v/fiorito/50f84bcee4b0688fecfe6ced/menu",
                            "mobileUrl": "https://foursquare.com/v/50f84bcee4b0688fecfe6ced/device_menu",
                            "externalUrl": "http://fioritomiami.com/menu/"
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a534ac76e46503e982e56c3",
                    "createdAt": 1515408071,
                    "type": "checkin",
                    "timeZoneOffset": 60,
                    "venue": {
                        "id": "5831bcbf9398ab3e7c5f5f54",
                        "name": "Unicorners",
                        "contact": {},
                        "location": {
                            "lat": 48.863293,
                            "lng": 2.354814,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 48.863293,
                                    "lng": 2.354814
                                }
                            ],
                            "postalCode": "75003",
                            "cc": "FR",
                            "city": "Paris",
                            "state": "Île-de-France",
                            "country": "France",
                            "formattedAddress": [
                                "75003 Paris",
                                "France"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1e0931735",
                                "name": "Coffee Shop",
                                "pluralName": "Coffee Shops",
                                "shortName": "Coffee Shop",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 4,
                            "usersCount": 55,
                            "checkinsCount": 93
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 2,
                        "groups": [
                            {
                                "type": "friends",
                                "count": 2,
                                "items": [
                                    {
                                        "id": "428870427",
                                        "firstName": "Julia",
                                        "lastName": "Kallweit",
                                        "gender": "female",
                                        "relationship": "friend",
                                        "photo": {
                                            "prefix": "https://igx.4sqi.net/img/user/",
                                            "suffix": "/428870427_2pgZdlIw_Bdw89wWBU0OJuPUxyAwKY0LwJUckCp7asDKPYLR6eLfMVAj_xWs6htw5PpW_Ls5L.jpg"
                                        }
                                    },
                                    {
                                        "id": "64122382",
                                        "firstName": "Andrew",
                                        "lastName": "Shum",
                                        "gender": "male",
                                        "relationship": "friend",
                                        "photo": {
                                            "prefix": "https://igx.4sqi.net/img/user/",
                                            "suffix": "/64122382-SEJLTE4VE5JF5CZG.jpg"
                                        }
                                    }
                                ]
                            }
                        ],
                        "summary": "Julia Kallweit & Andrew Shum"
                    },
                    "like": false,
                    "sticker": {
                        "id": "52a659800000000000000006",
                        "name": "Joey Beans",
                        "image": {
                            "prefix": "https://irs0.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/coffee_f4b66b.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 8
                        },
                        "pickerPosition": {
                            "page": 0,
                            "index": 8
                        },
                        "teaseText": "Check in at coffee shops to unlock this sticker.",
                        "unlockText": "Who cares if your flat white just cost ya $10 bucks. You're getting free wi-fi! Free, extremely slow wi-fi. Drink it up.",
                        "bonusText": "Use at Coffee Shops for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 1,
                        "items": [
                            {
                                "id": "5a534acc5d891b0cfdd51fb2",
                                "createdAt": 1515408076,
                                "source": {
                                    "name": "Swarm for iOS",
                                    "url": "https://www.swarmapp.com"
                                },
                                "prefix": "https://igx.4sqi.net/img/general/",
                                "suffix": "/14017658__-pxDVeTywCY-1n1b391cDWJ0zOmdo4KFyItUABUITE.jpg",
                                "width": 1440,
                                "height": 1920,
                                "user": {
                                    "id": "14017658",
                                    "firstName": "Luc",
                                    "lastName": "Succes",
                                    "gender": "male",
                                    "relationship": "self",
                                    "photo": {
                                        "prefix": "https://igx.4sqi.net/img/user/",
                                        "suffix": "/14017658-ZDOGONBT2KNZSARJ.jpg"
                                    }
                                },
                                "visibility": "public"
                            }
                        ],
                        "layout": {
                            "name": "single"
                        }
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a5260b7a423625a427c4cf7",
                    "createdAt": 1515348151,
                    "type": "checkin",
                    "timeZoneOffset": 60,
                    "venue": {
                        "id": "4b3dfa47f964a5209e9725e3",
                        "name": "Café Crème",
                        "contact": {
                            "phone": "+33142720406",
                            "formattedPhone": "+33 1 42 72 04 06",
                            "facebook": "116479375077072",
                            "facebookUsername": "cafecremeparis03",
                            "facebookName": "Café Crème"
                        },
                        "location": {
                            "address": "4 rue Dupetit-Thouars",
                            "lat": 48.864942583119074,
                            "lng": 2.3626585430111193,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 48.864942583119074,
                                    "lng": 2.3626585430111193
                                }
                            ],
                            "postalCode": "75003",
                            "cc": "FR",
                            "city": "Paris",
                            "state": "Île-de-France",
                            "country": "France",
                            "formattedAddress": [
                                "4 rue Dupetit-Thouars",
                                "75003 Paris",
                                "France"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d16d941735",
                                "name": "Café",
                                "pluralName": "Cafés",
                                "shortName": "Café",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/cafe_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 63,
                            "usersCount": 2054,
                            "checkinsCount": 4286
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a52479e9cadd93628119223",
                    "createdAt": 1515341726,
                    "type": "checkin",
                    "timeZoneOffset": 60,
                    "venue": {
                        "id": "4adcda0af964a520623421e3",
                        "name": "Pompidou Centre – National Museum of Modern Art (Centre Pompidou – Musée National d'Art Moderne)",
                        "contact": {
                            "phone": "+33144781233",
                            "formattedPhone": "+33 1 44 78 12 33",
                            "twitter": "centrepompidou",
                            "instagram": "centrepompidou",
                            "facebook": "20307174595",
                            "facebookUsername": "centrepompidou.fr",
                            "facebookName": "Centre Pompidou"
                        },
                        "location": {
                            "address": "Place Georges Pompidou",
                            "lat": 48.860444581042955,
                            "lng": 2.3524904251098633,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 48.860444581042955,
                                    "lng": 2.3524904251098633
                                }
                            ],
                            "postalCode": "75004",
                            "cc": "FR",
                            "city": "Paris",
                            "state": "Île-de-France",
                            "country": "France",
                            "formattedAddress": [
                                "Place Georges Pompidou",
                                "75004 Paris",
                                "France"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d18f941735",
                                "name": "Art Museum",
                                "pluralName": "Art Museums",
                                "shortName": "Art Museum",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/museum_art_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 583,
                            "usersCount": 55159,
                            "checkinsCount": 76886
                        },
                        "url": "http://www.centrepompidou.fr",
                        "menu": {
                            "type": "Prices",
                            "label": "Prices",
                            "anchor": "View Prices",
                            "url": "https://www.centrepompidou.fr/fr/Collections/Les-oeuvres",
                            "mobileUrl": "https://www.centrepompidou.fr/fr/Collections/Les-oeuvres",
                            "externalUrl": "https://www.centrepompidou.fr/fr/Collections/Les-oeuvres"
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "storeId": ""
                    },
                    "likes": {
                        "count": 1,
                        "groups": [
                            {
                                "type": "friends",
                                "count": 1,
                                "items": [
                                    {
                                        "id": "11400",
                                        "firstName": "Barry",
                                        "lastName": "Hoggard",
                                        "gender": "male",
                                        "relationship": "friend",
                                        "photo": {
                                            "prefix": "https://igx.4sqi.net/img/user/",
                                            "suffix": "/2KILNZE0OHQGERZ5.jpg"
                                        }
                                    }
                                ]
                            }
                        ],
                        "summary": "Barry Hoggard"
                    },
                    "like": false,
                    "sticker": {
                        "id": "52a659800000000000000002",
                        "name": "Lisa",
                        "image": {
                            "prefix": "https://irs3.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/art_142b5b.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 41
                        },
                        "pickerPosition": {
                            "page": 1,
                            "index": 17
                        },
                        "teaseText": "Check in at museums to unlock this sticker.",
                        "unlockText": "That guy sees the artist’s dark and troubled past. You see a pile of cans. Admit it, you're here for the free wine. Wait, there’s no wine in here?!",
                        "bonusText": "Use at Museums or Art Galleries for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a5242784c954c491852826d",
                    "createdAt": 1515340408,
                    "type": "checkin",
                    "timeZoneOffset": 60,
                    "venue": {
                        "id": "4adcda1df964a520293921e3",
                        "name": "Forum des Halles",
                        "contact": {
                            "phone": "+33144769656",
                            "formattedPhone": "+33 1 44 76 96 56",
                            "twitter": "forumdeshalles",
                            "instagram": "forumdeshalles",
                            "facebook": "401822732951",
                            "facebookUsername": "forum.des.halles",
                            "facebookName": "Le Forum des Halles"
                        },
                        "location": {
                            "address": "101 rue Berger",
                            "lat": 48.86197624150042,
                            "lng": 2.3468899726867676,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 48.86197624150042,
                                    "lng": 2.3468899726867676
                                }
                            ],
                            "postalCode": "75001",
                            "cc": "FR",
                            "city": "Paris",
                            "state": "Île-de-France",
                            "country": "France",
                            "formattedAddress": [
                                "101 rue Berger",
                                "75001 Paris",
                                "France"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1fd941735",
                                "name": "Shopping Mall",
                                "pluralName": "Shopping Malls",
                                "shortName": "Mall",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/mall_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 95,
                            "usersCount": 15710,
                            "checkinsCount": 34159
                        },
                        "url": "http://www.rivetoile.com",
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a4ebb856c08d1633929d4bb",
                    "createdAt": 1515109253,
                    "type": "checkin",
                    "timeZoneOffset": 60,
                    "venue": {
                        "id": "4b41084ef964a520c1bf25e3",
                        "name": "Charlotte Bar",
                        "contact": {
                            "phone": "+33628982081",
                            "formattedPhone": "+33 6 28 98 20 81",
                            "twitter": "charlottebar1",
                            "facebook": "154033777947918",
                            "facebookUsername": "CharlotteBarBastille",
                            "facebookName": "Charlotte bar Bastille"
                        },
                        "location": {
                            "address": "10 rue de Lappe",
                            "lat": 48.85403702430994,
                            "lng": 2.3719971165965448,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 48.85403702430994,
                                    "lng": 2.3719971165965448
                                }
                            ],
                            "postalCode": "75011",
                            "cc": "FR",
                            "city": "Paris",
                            "state": "Île-de-France",
                            "country": "France",
                            "formattedAddress": [
                                "10 rue de Lappe",
                                "75011 Paris",
                                "France"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d11e941735",
                                "name": "Cocktail Bar",
                                "pluralName": "Cocktail Bars",
                                "shortName": "Cocktail",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/cocktails_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 13,
                            "usersCount": 492,
                            "checkinsCount": 657
                        },
                        "url": "http://www.charlotte-bar.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a4d52e83fcee87abb86f8f2",
                    "createdAt": 1515016936,
                    "type": "checkin",
                    "timeZoneOffset": 60,
                    "venue": {
                        "id": "599325c0f870fd22a1af4cf5",
                        "name": "Les Baux de Paris",
                        "contact": {
                            "phone": "+33147079158",
                            "formattedPhone": "+33 1 47 07 91 58",
                            "facebook": "1907328752839859",
                            "facebookUsername": "lesbauxdeparis",
                            "facebookName": "Les Baux de Paris"
                        },
                        "location": {
                            "address": "71 rue Mouffetard",
                            "lat": 48.842297543801735,
                            "lng": 2.3498645424842834,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 48.842297543801735,
                                    "lng": 2.3498645424842834
                                }
                            ],
                            "postalCode": "75005",
                            "cc": "FR",
                            "city": "Paris",
                            "state": "Île-de-France",
                            "country": "France",
                            "formattedAddress": [
                                "71 rue Mouffetard",
                                "75005 Paris",
                                "France"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d10c941735",
                                "name": "French Restaurant",
                                "pluralName": "French Restaurants",
                                "shortName": "French",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/french_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 0,
                            "usersCount": 11,
                            "checkinsCount": 11
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a4ca7b52105c30f22931d18",
                    "createdAt": 1514973109,
                    "type": "checkin",
                    "timeZoneOffset": 60,
                    "venue": {
                        "id": "4e552b70ae60e3d6b7f6ea7a",
                        "name": "Starbucks Coffee",
                        "contact": {
                            "phone": "+33140410776",
                            "formattedPhone": "+33 1 40 41 07 76",
                            "twitter": "starbucksfrance",
                            "facebook": "188336880869",
                            "facebookUsername": "StarbucksFrance",
                            "facebookName": "Starbucks France"
                        },
                        "location": {
                            "address": "77 rue Rambuteau",
                            "crossStreet": "Rue Saint-Denis",
                            "lat": 48.86212515693982,
                            "lng": 2.3495961648616857,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 48.86212515693982,
                                    "lng": 2.3495961648616857
                                }
                            ],
                            "postalCode": "75001",
                            "cc": "FR",
                            "city": "Paris",
                            "state": "Île-de-France",
                            "country": "France",
                            "formattedAddress": [
                                "77 rue Rambuteau (Rue Saint-Denis)",
                                "75001 Paris",
                                "France"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1e0931735",
                                "name": "Coffee Shop",
                                "pluralName": "Coffee Shops",
                                "shortName": "Coffee Shop",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 35,
                            "usersCount": 2451,
                            "checkinsCount": 3835
                        },
                        "url": "http://www.starbucks.fr",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "52a659800000000000000006",
                        "name": "Joey Beans",
                        "image": {
                            "prefix": "https://irs0.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/coffee_f4b66b.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 8
                        },
                        "pickerPosition": {
                            "page": 0,
                            "index": 8
                        },
                        "teaseText": "Check in at coffee shops to unlock this sticker.",
                        "unlockText": "Who cares if your flat white just cost ya $10 bucks. You're getting free wi-fi! Free, extremely slow wi-fi. Drink it up.",
                        "bonusText": "Use at Coffee Shops for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a468285da2e0040011261fd",
                    "createdAt": 1514570373,
                    "type": "checkin",
                    "timeZoneOffset": 60,
                    "venue": {
                        "id": "59dcad1bd48ec167af686a64",
                        "name": "Le Sourire au Pied de l'Échelle",
                        "contact": {
                            "phone": "+33157408970",
                            "formattedPhone": "+33 1 57 40 89 70",
                            "facebook": "1890131634587530",
                            "facebookUsername": "lesourireaupieddelechelle",
                            "facebookName": "Caviste le sourire au pied de l'échelle"
                        },
                        "location": {
                            "address": "106 rue de la Roquette",
                            "lat": 48.856519045985316,
                            "lng": 2.3774228990077972,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 48.856519045985316,
                                    "lng": 2.3774228990077972
                                }
                            ],
                            "postalCode": "75011",
                            "cc": "FR",
                            "city": "Paris",
                            "state": "Île-de-France",
                            "country": "France",
                            "formattedAddress": [
                                "106 rue de la Roquette",
                                "75011 Paris",
                                "France"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d119951735",
                                "name": "Wine Shop",
                                "pluralName": "Wine Shops",
                                "shortName": "Wine Shop",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/food_wineshop_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 0,
                            "usersCount": 5,
                            "checkinsCount": 5
                        },
                        "url": "http://www.cavistelesourireaupieddelechelle.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a46781e51950e09cb5df04b",
                    "createdAt": 1514567710,
                    "type": "checkin",
                    "timeZoneOffset": 60,
                    "venue": {
                        "id": "4adcda1df964a520293921e3",
                        "name": "Forum des Halles",
                        "contact": {
                            "phone": "+33144769656",
                            "formattedPhone": "+33 1 44 76 96 56",
                            "twitter": "forumdeshalles",
                            "instagram": "forumdeshalles",
                            "facebook": "401822732951",
                            "facebookUsername": "forum.des.halles",
                            "facebookName": "Le Forum des Halles"
                        },
                        "location": {
                            "address": "101 rue Berger",
                            "lat": 48.86197624150042,
                            "lng": 2.3468899726867676,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 48.86197624150042,
                                    "lng": 2.3468899726867676
                                }
                            ],
                            "postalCode": "75001",
                            "cc": "FR",
                            "city": "Paris",
                            "state": "Île-de-France",
                            "country": "France",
                            "formattedAddress": [
                                "101 rue Berger",
                                "75001 Paris",
                                "France"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1fd941735",
                                "name": "Shopping Mall",
                                "pluralName": "Shopping Malls",
                                "shortName": "Mall",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/mall_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 95,
                            "usersCount": 15710,
                            "checkinsCount": 34159
                        },
                        "url": "http://www.rivetoile.com",
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a464b4b01235838929b01c5",
                    "createdAt": 1514556235,
                    "type": "checkin",
                    "timeZoneOffset": 60,
                    "venue": {
                        "id": "4adcda15f964a520af3721e3",
                        "name": "UGC Ciné Cité Les Halles",
                        "contact": {
                            "phone": "+33146372824",
                            "formattedPhone": "+33 1 46 37 28 24",
                            "twitter": "ugccinemas",
                            "facebook": "181584025225562",
                            "facebookUsername": "UGCcinemas",
                            "facebookName": "UGC"
                        },
                        "location": {
                            "address": "7 place de la Rotonde",
                            "crossStreet": "Niveau -3 – Place Carrée",
                            "lat": 48.86248514828933,
                            "lng": 2.344083712924106,
                            "postalCode": "75001",
                            "cc": "FR",
                            "city": "Paris",
                            "state": "Île-de-France",
                            "country": "France",
                            "formattedAddress": [
                                "7 place de la Rotonde (Niveau -3 – Place Carrée)",
                                "75001 Paris",
                                "France"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d180941735",
                                "name": "Multiplex",
                                "pluralName": "Multiplexes",
                                "shortName": "Cineplex",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/movietheater_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 104,
                            "usersCount": 8115,
                            "checkinsCount": 44732
                        },
                        "url": "http://www.ugc.fr/cinema.html?code=HORIZ",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a462e4669e77b7b17215d87",
                    "createdAt": 1514548806,
                    "type": "checkin",
                    "timeZoneOffset": 60,
                    "venue": {
                        "id": "5535621c498ec2336c36ed7f",
                        "name": "Nossa Churrasqueira",
                        "contact": {
                            "phone": "+33953679386",
                            "formattedPhone": "+33 9 53 67 93 86",
                            "twitter": "nossaparis",
                            "facebook": "1561932460711709",
                            "facebookUsername": "NossaParis",
                            "facebookName": "NOSSA"
                        },
                        "location": {
                            "address": "1 rue de l'École Polytechnique",
                            "lat": 48.8473706224662,
                            "lng": 2.3481693863868713,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 48.8473706224662,
                                    "lng": 2.3481693863868713
                                }
                            ],
                            "postalCode": "75005",
                            "cc": "FR",
                            "city": "Paris",
                            "state": "Île-de-France",
                            "country": "France",
                            "formattedAddress": [
                                "1 rue de l'École Polytechnique",
                                "75005 Paris",
                                "France"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4def73e84765ae376e57713a",
                                "name": "Portuguese Restaurant",
                                "pluralName": "Portuguese Restaurants",
                                "shortName": "Portuguese",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/portuguese_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 13,
                            "usersCount": 115,
                            "checkinsCount": 299
                        },
                        "url": "http://nossa-paris.com",
                        "menu": {
                            "type": "Menu",
                            "label": "Menu",
                            "anchor": "View Menu",
                            "url": "https://www.facebook.com/download/1591476644457392/Menu%20NOSSA%20Version%20Finale.pdf",
                            "mobileUrl": "https://www.facebook.com/download/1591476644457392/Menu%20NOSSA%20Version%20Finale.pdf",
                            "externalUrl": "https://www.facebook.com/download/1591476644457392/Menu%20NOSSA%20Version%20Finale.pdf"
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "127412291"
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "53fe77d24b9048855b3648b4",
                        "name": "Tasty",
                        "image": {
                            "prefix": "https://irs3.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/knifefork_fad538.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 46
                        },
                        "pickerPosition": {
                            "page": 1,
                            "index": 22
                        },
                        "teaseText": "Mmmmm Mmmmm Mmmmm Mmmmm Mmmmm",
                        "unlockText": "You sure love dining out. Can we interest you in today’s special? It’s a gluten-free, grass-fed, farm-to-table sticker. Enjoy!",
                        "bonusText": "Use at Restaurants for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a461bf3fd9d7336c448696c",
                    "createdAt": 1514544115,
                    "type": "checkin",
                    "timeZoneOffset": 60,
                    "venue": {
                        "id": "4adcda09f964a520ea3321e3",
                        "name": "Panthéon",
                        "contact": {
                            "phone": "+33144321800",
                            "formattedPhone": "+33 1 44 32 18 00",
                            "twitter": "lecmn",
                            "facebook": "109795535711831",
                            "facebookUsername": "museeplansreliefs",
                            "facebookName": "Musée des Plans-Reliefs"
                        },
                        "location": {
                            "address": "Place du Panthéon",
                            "lat": 48.846229,
                            "lng": 2.346084,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 48.846229,
                                    "lng": 2.346084
                                }
                            ],
                            "postalCode": "75005",
                            "cc": "FR",
                            "city": "Paris",
                            "state": "Île-de-France",
                            "country": "France",
                            "formattedAddress": [
                                "Place du Panthéon",
                                "75005 Paris",
                                "France"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d12d941735",
                                "name": "Monument / Landmark",
                                "pluralName": "Monuments / Landmarks",
                                "shortName": "Landmark",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/government_monument_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 137,
                            "usersCount": 15205,
                            "checkinsCount": 19344
                        },
                        "url": "http://www.monuments-nationaux.fr",
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a456398c47cf94f6ff00335",
                    "createdAt": 1514496920,
                    "type": "checkin",
                    "timeZoneOffset": 60,
                    "venue": {
                        "id": "4adcda1df964a520293921e3",
                        "name": "Forum des Halles",
                        "contact": {
                            "phone": "+33144769656",
                            "formattedPhone": "+33 1 44 76 96 56",
                            "twitter": "forumdeshalles",
                            "instagram": "forumdeshalles",
                            "facebook": "401822732951",
                            "facebookUsername": "forum.des.halles",
                            "facebookName": "Le Forum des Halles"
                        },
                        "location": {
                            "address": "101 rue Berger",
                            "lat": 48.86197624150042,
                            "lng": 2.3468899726867676,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 48.86197624150042,
                                    "lng": 2.3468899726867676
                                }
                            ],
                            "postalCode": "75001",
                            "cc": "FR",
                            "city": "Paris",
                            "state": "Île-de-France",
                            "country": "France",
                            "formattedAddress": [
                                "101 rue Berger",
                                "75001 Paris",
                                "France"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1fd941735",
                                "name": "Shopping Mall",
                                "pluralName": "Shopping Malls",
                                "shortName": "Mall",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/mall_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 95,
                            "usersCount": 15710,
                            "checkinsCount": 34159
                        },
                        "url": "http://www.rivetoile.com",
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a4504184febd57380d00861",
                    "createdAt": 1514472472,
                    "type": "checkin",
                    "entities": [],
                    "shout": "#hustlesesh",
                    "timeZoneOffset": 60,
                    "venue": {
                        "id": "58284cce48fb4015bece2ea6",
                        "name": "Delirio",
                        "contact": {
                            "phone": "+33781828867",
                            "formattedPhone": "+33 7 81 82 88 67",
                            "facebook": "1700458976859208",
                            "facebookUsername": "DelirioParis",
                            "facebookName": "Delirio"
                        },
                        "location": {
                            "address": "39 rue Amelot",
                            "crossStreet": "Rue du Chemin Vert",
                            "lat": 48.856937,
                            "lng": 2.368818,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 48.856937,
                                    "lng": 2.368818
                                }
                            ],
                            "postalCode": "75011",
                            "cc": "FR",
                            "city": "Paris",
                            "state": "Île-de-France",
                            "country": "France",
                            "formattedAddress": [
                                "39 rue Amelot (Rue du Chemin Vert)",
                                "75011 Paris",
                                "France"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d16d941735",
                                "name": "Café",
                                "pluralName": "Cafés",
                                "shortName": "Café",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/cafe_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 5,
                            "usersCount": 85,
                            "checkinsCount": 96
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "5963b5ddbab2f604cf800490",
                        "name": "Foam-o",
                        "image": {
                            "prefix": "https://irs2.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/Cafes_776a64.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 248
                        },
                        "pickerPosition": {
                            "page": 10,
                            "index": 8
                        },
                        "teaseText": "Check in at cafés to unlock this sticker.",
                        "unlockText": "I’ll have a single-origin, double roast, triple whip, half-caf with sprinkles. Thanks a latte."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a44f180666116094717962c",
                    "createdAt": 1514467712,
                    "type": "checkin",
                    "timeZoneOffset": 60,
                    "venue": {
                        "id": "4b573fe1f964a520482d28e3",
                        "name": "Café de l'Industrie",
                        "contact": {
                            "phone": "+33147001353",
                            "formattedPhone": "+33 1 47 00 13 53"
                        },
                        "location": {
                            "address": "16 rue Saint-Sabin",
                            "lat": 48.85568358175519,
                            "lng": 2.371623970144957,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 48.85568358175519,
                                    "lng": 2.371623970144957
                                }
                            ],
                            "postalCode": "75011",
                            "cc": "FR",
                            "city": "Paris",
                            "state": "Île-de-France",
                            "country": "France",
                            "formattedAddress": [
                                "16 rue Saint-Sabin",
                                "75011 Paris",
                                "France"
                            ]
                        },
                        "categories": [
                            {
                                "id": "52e81612bcbc57f1066b79f1",
                                "name": "Bistro",
                                "pluralName": "Bistros",
                                "shortName": "Bistro",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/default_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 172,
                            "usersCount": 3829,
                            "checkinsCount": 6948
                        },
                        "url": "http://www.cafedelindustrieparis.fr",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "5963b5ddbab2f604cf800490",
                        "name": "Foam-o",
                        "image": {
                            "prefix": "https://irs2.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/Cafes_776a64.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 248
                        },
                        "pickerPosition": {
                            "page": 10,
                            "index": 8
                        },
                        "teaseText": "Check in at cafés to unlock this sticker.",
                        "unlockText": "I’ll have a single-origin, double roast, triple whip, half-caf with sprinkles. Thanks a latte."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a423d23da5e5617fc9688e8",
                    "createdAt": 1514290467,
                    "type": "checkin",
                    "timeZoneOffset": 60,
                    "venue": {
                        "id": "4b83878df964a520dc0831e3",
                        "name": "Le Drapeau",
                        "contact": {
                            "phone": "+33142720288",
                            "formattedPhone": "+33 1 42 72 02 88",
                            "facebook": "609744642444421",
                            "facebookUsername": "ledrapeaumarais",
                            "facebookName": "Le Drapeau - Quartier du Marais PARIS"
                        },
                        "location": {
                            "address": "10 rue du Temple",
                            "crossStreet": "Rue de la Verrerie",
                            "lat": 48.85799846312331,
                            "lng": 2.353030093909688,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 48.85799846312331,
                                    "lng": 2.353030093909688
                                }
                            ],
                            "postalCode": "75004",
                            "cc": "FR",
                            "city": "Paris",
                            "state": "Île-de-France",
                            "country": "France",
                            "formattedAddress": [
                                "10 rue du Temple (Rue de la Verrerie)",
                                "75004 Paris",
                                "France"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d116941735",
                                "name": "Bar",
                                "pluralName": "Bars",
                                "shortName": "Bar",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 28,
                            "usersCount": 880,
                            "checkinsCount": 1001
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "5963b5ddbab2f604cf800490",
                        "name": "Foam-o",
                        "image": {
                            "prefix": "https://irs2.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/Cafes_776a64.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 248
                        },
                        "pickerPosition": {
                            "page": 10,
                            "index": 8
                        },
                        "teaseText": "Check in at cafés to unlock this sticker.",
                        "unlockText": "I’ll have a single-origin, double roast, triple whip, half-caf with sprinkles. Thanks a latte."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a423220d8096e379c0e20b6",
                    "createdAt": 1514287648,
                    "type": "checkin",
                    "timeZoneOffset": 60,
                    "venue": {
                        "id": "5314c230e4b0d805d37ba357",
                        "name": "Les Halles",
                        "contact": {},
                        "location": {
                            "lat": 48.8618345763003,
                            "lng": 2.3467627344698743,
                            "cc": "FR",
                            "city": "Paris",
                            "state": "Île-de-France",
                            "country": "France",
                            "formattedAddress": [
                                "Paris",
                                "France"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4f2a25ac4b909258e854f55f",
                                "name": "Neighborhood",
                                "pluralName": "Neighborhoods",
                                "shortName": "Neighborhood",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/neighborhood_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 11,
                            "usersCount": 5507,
                            "checkinsCount": 9399
                        },
                        "venueRatingBlacklisted": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a3f8773da5ede64e49be5b3",
                    "createdAt": 1514112883,
                    "type": "checkin",
                    "timeZoneOffset": 60,
                    "venue": {
                        "id": "4ab474c6f964a520387120e3",
                        "name": "Paris Charles de Gaulle Airport (CDG) (Aéroport Paris-Charles de Gaulle)",
                        "contact": {
                            "phone": "+33148622280",
                            "formattedPhone": "+33 1 48 62 22 80",
                            "twitter": "parisaeroport",
                            "facebook": "289966983831",
                            "facebookUsername": "parisaeroport",
                            "facebookName": "Paris Aéroport"
                        },
                        "location": {
                            "address": "Route de la Commune",
                            "lat": 49.004893657859974,
                            "lng": 2.570991017812539,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 49.004893657859974,
                                    "lng": 2.570991017812539
                                }
                            ],
                            "postalCode": "95700",
                            "cc": "FR",
                            "city": "Roissy-en-France",
                            "state": "Île-de-France",
                            "country": "France",
                            "formattedAddress": [
                                "Route de la Commune",
                                "95700 Roissy-en-France",
                                "France"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1ed931735",
                                "name": "Airport",
                                "pluralName": "Airports",
                                "shortName": "Airport",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/airport_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 2282,
                            "usersCount": 307396,
                            "checkinsCount": 683603
                        },
                        "url": "http://www.parisaeroport.fr",
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a3f1e6e4aa3f8277c126689",
                    "createdAt": 1514085998,
                    "type": "checkin",
                    "timeZoneOffset": 120,
                    "venue": {
                        "id": "4adcdb27f964a520dd6121e3",
                        "name": "Helsinki Airport (HEL) (Helsinki-Vantaan lentoasema)",
                        "contact": {
                            "phone": "+35820708000",
                            "formattedPhone": "+358 20 708000",
                            "twitter": "helsinkiairport",
                            "facebook": "112767378739350",
                            "facebookUsername": "helsinkiairport",
                            "facebookName": "Helsinki Airport"
                        },
                        "location": {
                            "address": "Lentäjänkuja 1",
                            "crossStreet": "Lentoasemantie",
                            "lat": 60.31912855684579,
                            "lng": 24.968297481536865,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 60.31912855684579,
                                    "lng": 24.968297481536865
                                }
                            ],
                            "postalCode": "01530",
                            "cc": "FI",
                            "neighborhood": "Lentokenttä",
                            "city": "Vantaa",
                            "state": "Uusimaa",
                            "country": "Finland",
                            "formattedAddress": [
                                "Lentäjänkuja 1 (Lentoasemantie)",
                                "01530 Vantaa",
                                "Suomi"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1ed931735",
                                "name": "Airport",
                                "pluralName": "Airports",
                                "shortName": "Airport",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/airport_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 832,
                            "usersCount": 112051,
                            "checkinsCount": 519841
                        },
                        "url": "http://www.helsinkiairport.fi",
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a3e7061fc9e944b9b0ebb6a",
                    "createdAt": 1514041441,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4af833a6f964a5205a0b22e3",
                        "name": "Suvarnabhumi Airport (BKK) (ท่าอากาศยานสุวรรณภูมิ)",
                        "contact": {
                            "phone": "+6621321888",
                            "formattedPhone": "+66 2 132 1888",
                            "facebook": "1444560869129611",
                            "facebookUsername": "AOTofficial",
                            "facebookName": "AOT Official"
                        },
                        "location": {
                            "address": "999 Moo 1 Debaratana Rd",
                            "lat": 13.692347417285157,
                            "lng": 100.75143530995157,
                            "postalCode": "10540",
                            "cc": "TH",
                            "city": "Bang Phli",
                            "state": "Samut Prakan",
                            "country": "Thailand",
                            "formattedAddress": [
                                "999 Moo 1 Debaratana Rd",
                                "Bang Phli",
                                "สมุทรปราการ 10540",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1ed931735",
                                "name": "Airport",
                                "pluralName": "Airports",
                                "shortName": "Airport",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/airport_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 3476,
                            "usersCount": 343092,
                            "checkinsCount": 1406764
                        },
                        "url": "http://www.suvarnabhumiairport.com",
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "storeId": ""
                    },
                    "likes": {
                        "count": 2,
                        "groups": [
                            {
                                "type": "friends",
                                "count": 2,
                                "items": [
                                    {
                                        "id": "40181799",
                                        "firstName": "Jose",
                                        "lastName": "Reyes",
                                        "gender": "male",
                                        "relationship": "friend",
                                        "photo": {
                                            "prefix": "https://igx.4sqi.net/img/user/",
                                            "suffix": "/DRD4KIT4W5B5AWAF.jpg"
                                        }
                                    },
                                    {
                                        "id": "64049740",
                                        "firstName": "taina",
                                        "gender": "female",
                                        "relationship": "friend",
                                        "photo": {
                                            "prefix": "https://igx.4sqi.net/img/user/",
                                            "suffix": "/64049740-PPJTXFGECRNF3I02.jpg"
                                        }
                                    }
                                ]
                            }
                        ],
                        "summary": "Jose Reyes & taina"
                    },
                    "like": false,
                    "sticker": {
                        "id": "54b59bd0e50851c96b4e8c8a",
                        "name": "Jetsetter",
                        "image": {
                            "prefix": "https://irs2.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/airplane_cff7ac.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 10
                        },
                        "pickerPosition": {
                            "page": 0,
                            "index": 10
                        },
                        "teaseText": "Check in at airports to unlock this sticker.",
                        "unlockText": "$50 for bags? $25 for legroom? $30 for a pillow?! At least this sticker is free. Now turn off your phone before it takes down this plane.",
                        "bonusText": "Use at Airports for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a3de57779187134fd4d0dfc",
                    "createdAt": 1514005879,
                    "type": "checkin",
                    "entities": [],
                    "shout": "Last brekkie here 🙁",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "532ecc30498e96e0e223d31a",
                        "name": "Rustic & Blue",
                        "contact": {},
                        "location": {
                            "address": "Nimmanhaemin soi 7",
                            "lat": 18.798159848362317,
                            "lng": 98.96743127546091,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.798159848362317,
                                    "lng": 98.96743127546091
                                }
                            ],
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "Nimmanhaemin soi 7",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1dc931735",
                                "name": "Tea Room",
                                "pluralName": "Tea Rooms",
                                "shortName": "Tea Room",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/tearoom_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 81,
                            "usersCount": 1172,
                            "checkinsCount": 1735
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 2,
                        "groups": [
                            {
                                "type": "friends",
                                "count": 2,
                                "items": [
                                    {
                                        "id": "40181799",
                                        "firstName": "Jose",
                                        "lastName": "Reyes",
                                        "gender": "male",
                                        "relationship": "friend",
                                        "photo": {
                                            "prefix": "https://igx.4sqi.net/img/user/",
                                            "suffix": "/DRD4KIT4W5B5AWAF.jpg"
                                        }
                                    },
                                    {
                                        "id": "58749",
                                        "firstName": "Kim",
                                        "lastName": "Phạm",
                                        "gender": "female",
                                        "relationship": "friend",
                                        "photo": {
                                            "prefix": "https://igx.4sqi.net/img/user/",
                                            "suffix": "/58749-0OKRZUTUUS5EM4N0.jpg"
                                        }
                                    }
                                ]
                            }
                        ],
                        "summary": "Jose Reyes & Kim Phạm"
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 1,
                        "items": [
                            {
                                "id": "5a3de57a5c68380e433f35dd",
                                "createdAt": 1514005882,
                                "source": {
                                    "name": "Swarm for iOS",
                                    "url": "https://www.swarmapp.com"
                                },
                                "prefix": "https://igx.4sqi.net/img/general/",
                                "suffix": "/14017658_8wLmWQw8I-WDNeNugRjw8Py_Xyzyu2XsHPDgmm3BaTg.jpg",
                                "width": 1440,
                                "height": 1920,
                                "user": {
                                    "id": "14017658",
                                    "firstName": "Luc",
                                    "lastName": "Succes",
                                    "gender": "male",
                                    "relationship": "self",
                                    "photo": {
                                        "prefix": "https://igx.4sqi.net/img/user/",
                                        "suffix": "/14017658-ZDOGONBT2KNZSARJ.jpg"
                                    }
                                },
                                "visibility": "public"
                            }
                        ],
                        "layout": {
                            "name": "single"
                        }
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a3c9d77588e366192fc471e",
                    "createdAt": 1513921911,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "52e077f811d2a2e7620c2ccf",
                        "name": "MAYA (เมญ่า)",
                        "contact": {
                            "phone": "+6652081555",
                            "formattedPhone": "+66 52 081 555",
                            "twitter": "mayachiangmai",
                            "facebook": "131800340305321",
                            "facebookUsername": "maya.chiangmai",
                            "facebookName": "MAYA Chiang Mai"
                        },
                        "location": {
                            "address": "55 Moo 5 Huai Kaew Rd",
                            "crossStreet": "at Rincome Intersection",
                            "lat": 18.80214483127594,
                            "lng": 98.96739331368553,
                            "postalCode": "50300",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "55 Moo 5 Huai Kaew Rd (at Rincome Intersection)",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50300",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1fd941735",
                                "name": "Shopping Mall",
                                "pluralName": "Shopping Malls",
                                "shortName": "Mall",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/mall_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 112,
                            "usersCount": 18752,
                            "checkinsCount": 80633
                        },
                        "url": "http://www.mayashoppingcenter.com",
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a3beb99f79faa7a82781321",
                    "createdAt": 1513876377,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4c72cd1f8efc370477ee137d",
                        "name": "Spicy",
                        "contact": {},
                        "location": {
                            "address": "Kodchasan Rd",
                            "lat": 18.791915625092848,
                            "lng": 98.99398719154928,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.791915625092848,
                                    "lng": 98.99398719154928
                                }
                            ],
                            "postalCode": "50000",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "Kodchasan Rd",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50000",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d11f941735",
                                "name": "Nightclub",
                                "pluralName": "Nightclubs",
                                "shortName": "Nightclub",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/nightclub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 23,
                            "usersCount": 464,
                            "checkinsCount": 655
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a3ba9682496236ca2c5f324",
                    "createdAt": 1513859432,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4ba1c8d7f964a5202ccc37e3",
                        "name": "Ginger & Kafé",
                        "contact": {},
                        "location": {
                            "address": "199 Moonmuang Rd. T. Sriphum",
                            "lat": 18.792755388031292,
                            "lng": 98.99317731930185,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.792755388031292,
                                    "lng": 98.99317731930185
                                }
                            ],
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "199 Moonmuang Rd. T. Sriphum",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d16d941735",
                                "name": "Café",
                                "pluralName": "Cafés",
                                "shortName": "Café",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/cafe_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 41,
                            "usersCount": 961,
                            "checkinsCount": 1235
                        },
                        "url": "http://www.thehousethailand.com/kafe.php",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 1,
                        "groups": [
                            {
                                "type": "friends",
                                "count": 1,
                                "items": [
                                    {
                                        "id": "35930729",
                                        "firstName": "Jen",
                                        "lastName": "S",
                                        "gender": "female",
                                        "relationship": "friend",
                                        "photo": {
                                            "prefix": "https://igx.4sqi.net/img/user/",
                                            "suffix": "/Y51AUGKBGA0A1SN1.jpg"
                                        }
                                    }
                                ]
                            }
                        ],
                        "summary": "Jen S"
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 1,
                        "items": [
                            {
                                "id": "5a3ba96b588e361d05d08dfe",
                                "createdAt": 1513859435,
                                "source": {
                                    "name": "Swarm for iOS",
                                    "url": "https://www.swarmapp.com"
                                },
                                "prefix": "https://igx.4sqi.net/img/general/",
                                "suffix": "/14017658_Tc5vKROCpHxXIRDLa7llVgzw5_7dxGH3VB8NcyN-n8k.jpg",
                                "width": 1440,
                                "height": 1920,
                                "user": {
                                    "id": "14017658",
                                    "firstName": "Luc",
                                    "lastName": "Succes",
                                    "gender": "male",
                                    "relationship": "self",
                                    "photo": {
                                        "prefix": "https://igx.4sqi.net/img/user/",
                                        "suffix": "/14017658-ZDOGONBT2KNZSARJ.jpg"
                                    }
                                },
                                "visibility": "public"
                            }
                        ],
                        "layout": {
                            "name": "single"
                        }
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a3b8a4ec36588064a3b96b2",
                    "createdAt": 1513851470,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "52e077f811d2a2e7620c2ccf",
                        "name": "MAYA (เมญ่า)",
                        "contact": {
                            "phone": "+6652081555",
                            "formattedPhone": "+66 52 081 555",
                            "twitter": "mayachiangmai",
                            "facebook": "131800340305321",
                            "facebookUsername": "maya.chiangmai",
                            "facebookName": "MAYA Chiang Mai"
                        },
                        "location": {
                            "address": "55 Moo 5 Huai Kaew Rd",
                            "crossStreet": "at Rincome Intersection",
                            "lat": 18.80214483127594,
                            "lng": 98.96739331368553,
                            "postalCode": "50300",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "55 Moo 5 Huai Kaew Rd (at Rincome Intersection)",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50300",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1fd941735",
                                "name": "Shopping Mall",
                                "pluralName": "Shopping Malls",
                                "shortName": "Mall",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/mall_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 112,
                            "usersCount": 18752,
                            "checkinsCount": 80633
                        },
                        "url": "http://www.mayashoppingcenter.com",
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a3b71574b78c55d714ace24",
                    "createdAt": 1513845079,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "52c6f4a8498eaf89c166f31f",
                        "name": "Ombra Caffe",
                        "contact": {
                            "phone": "+6653215347",
                            "formattedPhone": "+66 53 215 347"
                        },
                        "location": {
                            "address": "21/8 Ratchaphuek Rd.",
                            "lat": 18.799773063017483,
                            "lng": 98.97480044377454,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.799773063017483,
                                    "lng": 98.97480044377454
                                }
                            ],
                            "postalCode": "50300",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "21/8 Ratchaphuek Rd.",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50300",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1e0931735",
                                "name": "Coffee Shop",
                                "pluralName": "Coffee Shops",
                                "shortName": "Coffee Shop",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 25,
                            "usersCount": 378,
                            "checkinsCount": 950
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a39fcf9e4c459542b3a60c7",
                    "createdAt": 1513749753,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "52e077f811d2a2e7620c2ccf",
                        "name": "MAYA (เมญ่า)",
                        "contact": {
                            "phone": "+6652081555",
                            "formattedPhone": "+66 52 081 555",
                            "twitter": "mayachiangmai",
                            "facebook": "131800340305321",
                            "facebookUsername": "maya.chiangmai",
                            "facebookName": "MAYA Chiang Mai"
                        },
                        "location": {
                            "address": "55 Moo 5 Huai Kaew Rd",
                            "crossStreet": "at Rincome Intersection",
                            "lat": 18.80214483127594,
                            "lng": 98.96739331368553,
                            "postalCode": "50300",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "55 Moo 5 Huai Kaew Rd (at Rincome Intersection)",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50300",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1fd941735",
                                "name": "Shopping Mall",
                                "pluralName": "Shopping Malls",
                                "shortName": "Mall",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/mall_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 112,
                            "usersCount": 18752,
                            "checkinsCount": 80633
                        },
                        "url": "http://www.mayashoppingcenter.com",
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a39ef7986bc497299ecdd3b",
                    "createdAt": 1513746297,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "55800c41498e00d81f0f9e0b",
                        "name": "SS1254372 Cafe",
                        "contact": {
                            "phone": "+66938319394",
                            "formattedPhone": "+66 93 831 9394",
                            "facebook": "1600322533576589",
                            "facebookUsername": "ss1254372cafe",
                            "facebookName": "SS1254372 Cafe"
                        },
                        "location": {
                            "address": "22/1 Nimmana Haeminda 17",
                            "lat": 18.794846186366527,
                            "lng": 98.96836972629917,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.794846186366527,
                                    "lng": 98.96836972629917
                                }
                            ],
                            "postalCode": "50300",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "22/1 Nimmana Haeminda 17",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50300",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d143941735",
                                "name": "Breakfast Spot",
                                "pluralName": "Breakfast Spots",
                                "shortName": "Breakfast",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/breakfast_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 33,
                            "usersCount": 733,
                            "checkinsCount": 1202
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "131625166"
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a34e86f916bc1586c9e8399",
                    "createdAt": 1513416815,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4cfcdd66c671721ed0bdca18",
                        "name": "Baan Pai Terrace",
                        "contact": {},
                        "location": {
                            "lat": 19.359702050592166,
                            "lng": 98.44145151043466,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 19.359702050592166,
                                    "lng": 98.44145151043466
                                }
                            ],
                            "postalCode": "58130",
                            "cc": "TH",
                            "city": "Pai",
                            "state": "Changwat Mae Hong Son",
                            "country": "Thailand",
                            "formattedAddress": [
                                "Pai",
                                "จังหวัดแม่ฮ่องสอน 58130",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d149941735",
                                "name": "Thai Restaurant",
                                "pluralName": "Thai Restaurants",
                                "shortName": "Thai",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/thai_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 10,
                            "usersCount": 465,
                            "checkinsCount": 525
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a34e2084f0e582a51dc7344",
                    "createdAt": 1513415176,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "52345e5811d2cc7dcf6507d1",
                        "name": "Pai Circus School & Guesthouse",
                        "contact": {
                            "phone": "+66851442662",
                            "formattedPhone": "+66 85 144 2662"
                        },
                        "location": {
                            "address": "323 M.1 T.Mae hee",
                            "lat": 19.361946576986913,
                            "lng": 98.44811690887651,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 19.361946576986913,
                                    "lng": 98.44811690887651
                                }
                            ],
                            "cc": "TH",
                            "city": "Pai",
                            "state": "Changwat Mae Hong Son",
                            "country": "Thailand",
                            "formattedAddress": [
                                "323 M.1 T.Mae hee",
                                "Pai",
                                "จังหวัดแม่ฮ่องสอน",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1ee931735",
                                "name": "Hostel",
                                "pluralName": "Hostels",
                                "shortName": "Hostel",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/hostel_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 3,
                            "usersCount": 126,
                            "checkinsCount": 214
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a34a45d2bf9a92a5bac2d74",
                    "createdAt": 1513399389,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "5848d92bb12d9f194b796b06",
                        "name": "aYa Service",
                        "contact": {},
                        "location": {
                            "lat": 18.803959,
                            "lng": 98.996884,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.803959,
                                    "lng": 98.996884
                                }
                            ],
                            "cc": "TH",
                            "country": "Thailand",
                            "formattedAddress": [
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d124951735",
                                "name": "Automotive Shop",
                                "pluralName": "Automotive Shops",
                                "shortName": "Automotive",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/automotive_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 0,
                            "usersCount": 48,
                            "checkinsCount": 57
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a348c72b9a5a8456376bbd0",
                    "createdAt": 1513393266,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "55f293d9498e7eab816abc5e",
                        "name": "Healthy B Cafe (เฮลธี่ บี คาเฟ่)",
                        "contact": {},
                        "location": {
                            "address": "Nimmanhemin Soi 5 Road",
                            "lat": 18.79849612809674,
                            "lng": 98.96896327643697,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.79849612809674,
                                    "lng": 98.96896327643697
                                }
                            ],
                            "postalCode": "50200",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "Nimmanhemin Soi 5 Road",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50200",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d16d941735",
                                "name": "Café",
                                "pluralName": "Cafés",
                                "shortName": "Café",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/cafe_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 13,
                            "usersCount": 144,
                            "checkinsCount": 346
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a32652d25fb7b3b24fa4005",
                    "createdAt": 1513252141,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "52e077f811d2a2e7620c2ccf",
                        "name": "MAYA (เมญ่า)",
                        "contact": {
                            "phone": "+6652081555",
                            "formattedPhone": "+66 52 081 555",
                            "twitter": "mayachiangmai",
                            "facebook": "131800340305321",
                            "facebookUsername": "maya.chiangmai",
                            "facebookName": "MAYA Chiang Mai"
                        },
                        "location": {
                            "address": "55 Moo 5 Huai Kaew Rd",
                            "crossStreet": "at Rincome Intersection",
                            "lat": 18.80214483127594,
                            "lng": 98.96739331368553,
                            "postalCode": "50300",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "55 Moo 5 Huai Kaew Rd (at Rincome Intersection)",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50300",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1fd941735",
                                "name": "Shopping Mall",
                                "pluralName": "Shopping Malls",
                                "shortName": "Mall",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/mall_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 112,
                            "usersCount": 18752,
                            "checkinsCount": 80633
                        },
                        "url": "http://www.mayashoppingcenter.com",
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a3233b58e886a703dfb723e",
                    "createdAt": 1513239477,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4edb67c9e300851bfab697f2",
                        "name": "SKILL BARBER",
                        "contact": {},
                        "location": {
                            "lat": 18.799143589826503,
                            "lng": 98.97187162603731,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.799143589826503,
                                    "lng": 98.97187162603731
                                }
                            ],
                            "cc": "TH",
                            "city": "อ.เมืองเชียงใหม่",
                            "state": "จ.เชียงใหม่",
                            "country": "Thailand",
                            "formattedAddress": [
                                "อ.เมืองเชียงใหม่",
                                "จ.เชียงใหม่",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d110951735",
                                "name": "Salon / Barbershop",
                                "pluralName": "Salons / Barbershops",
                                "shortName": "Salon / Barbershop",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/salon_barber_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 11,
                            "usersCount": 302,
                            "checkinsCount": 502
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a320c37419a9e2834cb6981",
                    "createdAt": 1513229367,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4c73348313228cfaa1512d65",
                        "name": "The Salad Concept",
                        "contact": {
                            "phone": "+6653894455",
                            "formattedPhone": "+66 53 894 455"
                        },
                        "location": {
                            "address": "49/9-10 Nimmana Haeminda Rd.",
                            "crossStreet": "at Lane 13",
                            "lat": 18.796798079493563,
                            "lng": 98.96638870239258,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.796798079493563,
                                    "lng": 98.96638870239258
                                }
                            ],
                            "postalCode": "50000",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "49/9-10 Nimmana Haeminda Rd. (at Lane 13)",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50000",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1bd941735",
                                "name": "Salad Place",
                                "pluralName": "Salad Places",
                                "shortName": "Salad",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/salad_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 293,
                            "usersCount": 9908,
                            "checkinsCount": 18487
                        },
                        "url": "http://www.thesaladconcept.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a30a4d05f68b922f2e5e233",
                    "createdAt": 1513137360,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "55f293d9498e7eab816abc5e",
                        "name": "Healthy B Cafe (เฮลธี่ บี คาเฟ่)",
                        "contact": {},
                        "location": {
                            "address": "Nimmanhemin Soi 5 Road",
                            "lat": 18.79849612809674,
                            "lng": 98.96896327643697,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.79849612809674,
                                    "lng": 98.96896327643697
                                }
                            ],
                            "postalCode": "50200",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "Nimmanhemin Soi 5 Road",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50200",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d16d941735",
                                "name": "Café",
                                "pluralName": "Cafés",
                                "shortName": "Café",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/cafe_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 13,
                            "usersCount": 144,
                            "checkinsCount": 346
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a30067579f6c76f1ea62775",
                    "createdAt": 1513096821,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4bc96141511f952192b7adc7",
                        "name": "Warm Up Café (วอร์มอัพ คาเฟ่)",
                        "contact": {
                            "phone": "+6653400677",
                            "formattedPhone": "+66 53 400 677"
                        },
                        "location": {
                            "address": "40 Nimmana Haeminda Rd.",
                            "crossStreet": "Lane 17",
                            "lat": 18.79515155839826,
                            "lng": 98.9650959827282,
                            "postalCode": "50200",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "40 Nimmana Haeminda Rd. (Lane 17)",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50200",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d11f941735",
                                "name": "Nightclub",
                                "pluralName": "Nightclubs",
                                "shortName": "Nightclub",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/nightclub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 265,
                            "usersCount": 20515,
                            "checkinsCount": 63032
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a2e839a772fbc6d283a7464",
                    "createdAt": 1512997786,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4bc70dea15a7ef3b81a278da",
                        "name": "Kiat Nam (เกียรตินำ)",
                        "contact": {},
                        "location": {
                            "address": "Nimmana Haeminda Road Lane 11",
                            "lat": 18.796879698942313,
                            "lng": 98.96775792204134,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.796879698942313,
                                    "lng": 98.96775792204134
                                }
                            ],
                            "postalCode": "50200",
                            "cc": "TH",
                            "city": "Su Thep",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "Nimmana Haeminda Road Lane 11",
                                "Su Thep",
                                "เชียงใหม่ 50200",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d142941735",
                                "name": "Asian Restaurant",
                                "pluralName": "Asian Restaurants",
                                "shortName": "Asian",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/asian_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 38,
                            "usersCount": 2633,
                            "checkinsCount": 4407
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "5963b5ddbab2f604cf800490",
                        "name": "Foam-o",
                        "image": {
                            "prefix": "https://irs2.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/Cafes_776a64.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 248
                        },
                        "pickerPosition": {
                            "page": 10,
                            "index": 8
                        },
                        "teaseText": "Check in at cafés to unlock this sticker.",
                        "unlockText": "I’ll have a single-origin, double roast, triple whip, half-caf with sprinkles. Thanks a latte."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a2e7e7a83e3807bf81e8f48",
                    "createdAt": 1512996474,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4c47f296972c0f47a4802521",
                        "name": "Kad Rin Come Night Market (กาดรินคํา)",
                        "contact": {
                            "phone": "+6653213393",
                            "formattedPhone": "+66 53 213 393"
                        },
                        "location": {
                            "address": "49/23 ม.5 ถ.ห้วยแก้ว",
                            "lat": 18.80242763292635,
                            "lng": 98.9663939352924,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.80242763292635,
                                    "lng": 98.9663939352924
                                }
                            ],
                            "postalCode": "50300",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "49/23 ม.5 ถ.ห้วยแก้ว",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50300",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1f7941735",
                                "name": "Flea Market",
                                "pluralName": "Flea Markets",
                                "shortName": "Flea Market",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/fleamarket_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 24,
                            "usersCount": 3485,
                            "checkinsCount": 5743
                        },
                        "url": "http://www.kadrincome.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a2a1ce4898bdc44bde2e616",
                    "createdAt": 1512709348,
                    "type": "checkin",
                    "entities": [],
                    "shout": "Just found out they don’t serve food 💔",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "52c6f4a8498eaf89c166f31f",
                        "name": "Ombra Caffe",
                        "contact": {
                            "phone": "+6653215347",
                            "formattedPhone": "+66 53 215 347"
                        },
                        "location": {
                            "address": "21/8 Ratchaphuek Rd.",
                            "lat": 18.799773063017483,
                            "lng": 98.97480044377454,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.799773063017483,
                                    "lng": 98.97480044377454
                                }
                            ],
                            "postalCode": "50300",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "21/8 Ratchaphuek Rd.",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50300",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1e0931735",
                                "name": "Coffee Shop",
                                "pluralName": "Coffee Shops",
                                "shortName": "Coffee Shop",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 25,
                            "usersCount": 378,
                            "checkinsCount": 950
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a293d9e4c954c0e934e0004",
                    "createdAt": 1512652190,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "570a8f97498e709b5880704f",
                        "name": "Beast Burger",
                        "contact": {
                            "phone": "+66801241414",
                            "formattedPhone": "+66 80 124 1414"
                        },
                        "location": {
                            "address": "14 Nimmanhemin 17",
                            "lat": 18.79510937143474,
                            "lng": 98.96770448317649,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.79510937143474,
                                    "lng": 98.96770448317649
                                }
                            ],
                            "postalCode": "50200",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "14 Nimmanhemin 17",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50200",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d16c941735",
                                "name": "Burger Joint",
                                "pluralName": "Burger Joints",
                                "shortName": "Burgers",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/burger_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 26,
                            "usersCount": 465,
                            "checkinsCount": 620
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "554149287b28d289d6e8e7e4",
                        "name": "Patty",
                        "image": {
                            "prefix": "https://irs3.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/burger_95a993.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 64
                        },
                        "pickerPosition": {
                            "page": 2,
                            "index": 16
                        },
                        "teaseText": "Check in at burger joints to unlock this sticker.",
                        "unlockText": "Know what’s better than a quarter pounder with cheese? Two quarter pounders with cheese. We'll get the defibrillator ready, you grab the ketchup.",
                        "bonusText": "Use at Burger Joints for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 1,
                        "items": [
                            {
                                "id": "5a293da232b61d4503be3140",
                                "createdAt": 1512652194,
                                "source": {
                                    "name": "Swarm for iOS",
                                    "url": "https://www.swarmapp.com"
                                },
                                "prefix": "https://igx.4sqi.net/img/general/",
                                "suffix": "/14017658_x__odXBibeoqkcWgp44Wu6527N6MfQq8AJFp6CzIcvg.jpg",
                                "width": 1440,
                                "height": 1920,
                                "user": {
                                    "id": "14017658",
                                    "firstName": "Luc",
                                    "lastName": "Succes",
                                    "gender": "male",
                                    "relationship": "self",
                                    "photo": {
                                        "prefix": "https://igx.4sqi.net/img/user/",
                                        "suffix": "/14017658-ZDOGONBT2KNZSARJ.jpg"
                                    }
                                },
                                "visibility": "public"
                            }
                        ],
                        "layout": {
                            "name": "single"
                        }
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a28f6b092e7a90340c85537",
                    "createdAt": 1512634032,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4e61ea02b0fb188e8d77307c",
                        "name": "Green Bamboo Massage",
                        "contact": {},
                        "location": {
                            "lat": 18.782974381169858,
                            "lng": 98.99194774901046,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.782974381169858,
                                    "lng": 98.99194774901046
                                }
                            ],
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "เมืองเชียงใหม่",
                                "เชียงใหม่",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1ed941735",
                                "name": "Spa",
                                "pluralName": "Spas",
                                "shortName": "Spa",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/spa_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 8,
                            "usersCount": 193,
                            "checkinsCount": 231
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a28d8312d2fd9090d584921",
                    "createdAt": 1512626225,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "50f147e8e4b08ef90fa63aee",
                        "name": "Curry Scoop",
                        "contact": {
                            "phone": "+66868960986",
                            "formattedPhone": "+66 86 896 0986"
                        },
                        "location": {
                            "address": "Nimmanhaeminda 13",
                            "lat": 18.796506043471982,
                            "lng": 98.9685395529647,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.796506043471982,
                                    "lng": 98.9685395529647
                                }
                            ],
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "Nimmanhaeminda 13",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "55a59bace4b013909087cb30",
                                "name": "Japanese Curry Restaurant",
                                "pluralName": "Japanese Curry Restaurants",
                                "shortName": "Japanese Curry",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/default_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 8,
                            "usersCount": 264,
                            "checkinsCount": 354
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a278ecc1acf1124be5234dd",
                    "createdAt": 1512541900,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "52c6f4a8498eaf89c166f31f",
                        "name": "Ombra Caffe",
                        "contact": {
                            "phone": "+6653215347",
                            "formattedPhone": "+66 53 215 347"
                        },
                        "location": {
                            "address": "21/8 Ratchaphuek Rd.",
                            "lat": 18.799773063017483,
                            "lng": 98.97480044377454,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.799773063017483,
                                    "lng": 98.97480044377454
                                }
                            ],
                            "postalCode": "50300",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "21/8 Ratchaphuek Rd.",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50300",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1e0931735",
                                "name": "Coffee Shop",
                                "pluralName": "Coffee Shops",
                                "shortName": "Coffee Shop",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 25,
                            "usersCount": 378,
                            "checkinsCount": 950
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "52a659800000000000000006",
                        "name": "Joey Beans",
                        "image": {
                            "prefix": "https://irs0.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/coffee_f4b66b.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 8
                        },
                        "pickerPosition": {
                            "page": 0,
                            "index": 8
                        },
                        "teaseText": "Check in at coffee shops to unlock this sticker.",
                        "unlockText": "Who cares if your flat white just cost ya $10 bucks. You're getting free wi-fi! Free, extremely slow wi-fi. Drink it up.",
                        "bonusText": "Use at Coffee Shops for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 1,
                        "items": [
                            {
                                "id": "5a278ed1e1f22827e02f6c36",
                                "createdAt": 1512541905,
                                "source": {
                                    "name": "Swarm for iOS",
                                    "url": "https://www.swarmapp.com"
                                },
                                "prefix": "https://igx.4sqi.net/img/general/",
                                "suffix": "/14017658_AtjjfH1yDa3nrw2dNIfjCEbJX4LqREPoQpHH8rfFyho.jpg",
                                "width": 1440,
                                "height": 1920,
                                "user": {
                                    "id": "14017658",
                                    "firstName": "Luc",
                                    "lastName": "Succes",
                                    "gender": "male",
                                    "relationship": "self",
                                    "photo": {
                                        "prefix": "https://igx.4sqi.net/img/user/",
                                        "suffix": "/14017658-ZDOGONBT2KNZSARJ.jpg"
                                    }
                                },
                                "visibility": "public"
                            }
                        ],
                        "layout": {
                            "name": "single"
                        }
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a2787a0b040567bb854362d",
                    "createdAt": 1512540064,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "55800c41498e00d81f0f9e0b",
                        "name": "SS1254372 Cafe",
                        "contact": {
                            "phone": "+66938319394",
                            "formattedPhone": "+66 93 831 9394",
                            "facebook": "1600322533576589",
                            "facebookUsername": "ss1254372cafe",
                            "facebookName": "SS1254372 Cafe"
                        },
                        "location": {
                            "address": "22/1 Nimmana Haeminda 17",
                            "lat": 18.794846186366527,
                            "lng": 98.96836972629917,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.794846186366527,
                                    "lng": 98.96836972629917
                                }
                            ],
                            "postalCode": "50300",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "22/1 Nimmana Haeminda 17",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50300",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d143941735",
                                "name": "Breakfast Spot",
                                "pluralName": "Breakfast Spots",
                                "shortName": "Breakfast",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/breakfast_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 33,
                            "usersCount": 733,
                            "checkinsCount": 1202
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "131625166"
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a277bc035d3fc293826e36a",
                    "createdAt": 1512537024,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "532ecc30498e96e0e223d31a",
                        "name": "Rustic & Blue",
                        "contact": {},
                        "location": {
                            "address": "Nimmanhaemin soi 7",
                            "lat": 18.798159848362317,
                            "lng": 98.96743127546091,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.798159848362317,
                                    "lng": 98.96743127546091
                                }
                            ],
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "Nimmanhaemin soi 7",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1dc931735",
                                "name": "Tea Room",
                                "pluralName": "Tea Rooms",
                                "shortName": "Tea Room",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/tearoom_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 81,
                            "usersCount": 1172,
                            "checkinsCount": 1735
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 1,
                        "items": [
                            {
                                "id": "5a277bc34f0e581e2cfbb81f",
                                "createdAt": 1512537027,
                                "source": {
                                    "name": "Swarm for iOS",
                                    "url": "https://www.swarmapp.com"
                                },
                                "prefix": "https://igx.4sqi.net/img/general/",
                                "suffix": "/14017658_3_mEARUZzLh9OdqOs6mJRrRmgqaVByyCEHxB9X14A7A.jpg",
                                "width": 1440,
                                "height": 1920,
                                "user": {
                                    "id": "14017658",
                                    "firstName": "Luc",
                                    "lastName": "Succes",
                                    "gender": "male",
                                    "relationship": "self",
                                    "photo": {
                                        "prefix": "https://igx.4sqi.net/img/user/",
                                        "suffix": "/14017658-ZDOGONBT2KNZSARJ.jpg"
                                    }
                                },
                                "visibility": "public"
                            }
                        ],
                        "layout": {
                            "name": "single"
                        }
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a26d1f5356b4966ad842a0f",
                    "createdAt": 1512493557,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4c72cd1f8efc370477ee137d",
                        "name": "Spicy",
                        "contact": {},
                        "location": {
                            "address": "Kodchasan Rd",
                            "lat": 18.791915625092848,
                            "lng": 98.99398719154928,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.791915625092848,
                                    "lng": 98.99398719154928
                                }
                            ],
                            "postalCode": "50000",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "Kodchasan Rd",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50000",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d11f941735",
                                "name": "Nightclub",
                                "pluralName": "Nightclubs",
                                "shortName": "Nightclub",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/nightclub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 23,
                            "usersCount": 464,
                            "checkinsCount": 655
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a26c422018cbb50b385f9b4",
                    "createdAt": 1512490018,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4b7ff4adf964a520c94630e3",
                        "name": "Zoe in Yellow",
                        "contact": {},
                        "location": {
                            "address": "ถนนราชวิถี",
                            "crossStreet": "กาดบุญอยู่เดิม",
                            "lat": 18.79086100184418,
                            "lng": 98.99039479338417,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.79086100184418,
                                    "lng": 98.99039479338417
                                }
                            ],
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "ถนนราชวิถี (กาดบุญอยู่เดิม)",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d116941735",
                                "name": "Bar",
                                "pluralName": "Bars",
                                "shortName": "Bar",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 58,
                            "usersCount": 3551,
                            "checkinsCount": 7301
                        },
                        "url": "http://zoeinyellowchiangmai.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a266f0260255e2a18e5ca2e",
                    "createdAt": 1512468226,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4b6cf6dcf964a52080602ce3",
                        "name": "Siam T.V. (สยามทีวี)",
                        "contact": {
                            "phone": "+6653282222",
                            "formattedPhone": "+66 53 282 222"
                        },
                        "location": {
                            "address": "Chang Lor Rd",
                            "crossStreet": "Phra Singh",
                            "lat": 18.781086483907526,
                            "lng": 98.98363818554976,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.781086483907526,
                                    "lng": 98.98363818554976
                                }
                            ],
                            "postalCode": "50200",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "Chang Lor Rd (Phra Singh)",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50200",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d122951735",
                                "name": "Electronics Store",
                                "pluralName": "Electronics Stores",
                                "shortName": "Electronics",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/technology_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 42,
                            "usersCount": 2912,
                            "checkinsCount": 6232
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a262f84872f7d53e5084390",
                    "createdAt": 1512451972,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "54508322498e019be8ce2ee2",
                        "name": "Punspace (ปันสเปซ)",
                        "contact": {
                            "phone": "+66896318264",
                            "formattedPhone": "+66 89 631 8264",
                            "twitter": "punspace",
                            "facebook": "466466946737210",
                            "facebookUsername": "punspace",
                            "facebookName": "Punspace"
                        },
                        "location": {
                            "address": "7/2 Rachadamnoen Road, Soi 4",
                            "lat": 18.78652820970983,
                            "lng": 98.991507721815,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.78652820970983,
                                    "lng": 98.991507721815
                                }
                            ],
                            "postalCode": "50200",
                            "cc": "TH",
                            "neighborhood": "Prasingha",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "7/2 Rachadamnoen Road, Soi 4",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50200",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d174941735",
                                "name": "Coworking Space",
                                "pluralName": "Coworking Spaces",
                                "shortName": "Coworking Space",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/office_coworkingspace_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 11,
                            "usersCount": 194,
                            "checkinsCount": 646
                        },
                        "url": "http://www.punspace.com",
                        "venueRatingBlacklisted": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a2625ead807ee5895f0529a",
                    "createdAt": 1512449514,
                    "type": "checkin",
                    "entities": [],
                    "shout": "Didnt know I was walking into America",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4d0722f3a26854814548c5bd",
                        "name": "Butter Is Better Bakery",
                        "contact": {
                            "phone": "+66810316993",
                            "formattedPhone": "+66 81 031 6993"
                        },
                        "location": {
                            "lat": 18.780306374163054,
                            "lng": 98.99961900457711,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.780306374163054,
                                    "lng": 98.99961900457711
                                }
                            ],
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "เมืองเชียงใหม่",
                                "เชียงใหม่",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d143941735",
                                "name": "Breakfast Spot",
                                "pluralName": "Breakfast Spots",
                                "shortName": "Breakfast",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/breakfast_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 49,
                            "usersCount": 427,
                            "checkinsCount": 792
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 1,
                        "items": [
                            {
                                "id": "5a2625ed1ffe972a82ebab53",
                                "createdAt": 1512449517,
                                "source": {
                                    "name": "Swarm for iOS",
                                    "url": "https://www.swarmapp.com"
                                },
                                "prefix": "https://igx.4sqi.net/img/general/",
                                "suffix": "/14017658_-YkNy5k7hDSYXJTxc23VKliCvFrOS1tu4Bau2Qgufew.jpg",
                                "width": 1440,
                                "height": 1920,
                                "user": {
                                    "id": "14017658",
                                    "firstName": "Luc",
                                    "lastName": "Succes",
                                    "gender": "male",
                                    "relationship": "self",
                                    "photo": {
                                        "prefix": "https://igx.4sqi.net/img/user/",
                                        "suffix": "/14017658-ZDOGONBT2KNZSARJ.jpg"
                                    }
                                },
                                "visibility": "public"
                            }
                        ],
                        "layout": {
                            "name": "single"
                        }
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a24cd9b16ef67733e2019a5",
                    "createdAt": 1512361371,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "52656f2611d25185cacec260",
                        "name": "The Larder Cafe and Bar",
                        "contact": {
                            "phone": "+6652001594",
                            "formattedPhone": "+66 52 001 594",
                            "facebook": "619862318043996",
                            "facebookUsername": "Larder.cm",
                            "facebookName": "The Larder Cafe and Bar"
                        },
                        "location": {
                            "address": "333/9 Sukkasem Rd",
                            "crossStreet": "Nimmanhaemin Rd",
                            "lat": 18.799133335013096,
                            "lng": 98.96619808662975,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.799133335013096,
                                    "lng": 98.96619808662975
                                }
                            ],
                            "postalCode": "50200",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "333/9 Sukkasem Rd (Nimmanhaemin Rd)",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50200",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d16d941735",
                                "name": "Café",
                                "pluralName": "Cafés",
                                "shortName": "Café",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/cafe_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 103,
                            "usersCount": 637,
                            "checkinsCount": 1347
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "76753687"
                        },
                        "storeId": ""
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a2405b389e4905c611294a7",
                    "createdAt": 1512310195,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4bbdbcf2593fef3bafbc0356",
                        "name": "P.T. Residence (พีทีเรสซิเดนซ์)",
                        "contact": {
                            "phone": "+6653894665",
                            "formattedPhone": "+66 53 894 665"
                        },
                        "location": {
                            "address": "51 Siri Mangkalajarn Rd.",
                            "lat": 18.797569237218298,
                            "lng": 98.97131536081517,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.797569237218298,
                                    "lng": 98.97131536081517
                                }
                            ],
                            "cc": "TH",
                            "city": "Su Thep",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "51 Siri Mangkalajarn Rd.",
                                "Su Thep",
                                "เชียงใหม่",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4d954b06a243a5684965b473",
                                "name": "Residential Building (Apartment / Condo)",
                                "pluralName": "Residential Buildings (Apartments / Condos)",
                                "shortName": "Residential",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/apartment_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 14,
                            "usersCount": 333,
                            "checkinsCount": 3245
                        },
                        "venueRatingBlacklisted": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a239947065ef51f76f38a39",
                    "createdAt": 1512282439,
                    "type": "checkin",
                    "entities": [],
                    "shout": "Very cool workspace",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "52e7301d11d28d41291438f7",
                        "name": "C.A.M.P. AIS - Creative And Meeting Place (ซี เอ เอ็ม พี)",
                        "contact": {
                            "phone": "+6652081199",
                            "formattedPhone": "+66 52 081 199",
                            "facebook": "273293422846558",
                            "facebookName": "CAMP"
                        },
                        "location": {
                            "address": "MAYA",
                            "crossStreet": "5th Fl, #507-509",
                            "lat": 18.802245894689335,
                            "lng": 98.9668385434249,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.802245894689335,
                                    "lng": 98.9668385434249
                                }
                            ],
                            "postalCode": "50300",
                            "cc": "TH",
                            "neighborhood": "Chang Phuak",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "MAYA (5th Fl, #507-509)",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50300",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1e0931735",
                                "name": "Coffee Shop",
                                "pluralName": "Coffee Shops",
                                "shortName": "Coffee Shop",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 72,
                            "usersCount": 4769,
                            "checkinsCount": 16564
                        },
                        "url": "http://www.ais.co.th/campais/",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 1,
                        "items": [
                            {
                                "id": "5a23994bb3d8e261851ba704",
                                "createdAt": 1512282443,
                                "source": {
                                    "name": "Swarm for iOS",
                                    "url": "https://www.swarmapp.com"
                                },
                                "prefix": "https://igx.4sqi.net/img/general/",
                                "suffix": "/14017658_OfThPIS0vj6aD7OYf2Q1G4Y2KYal_d5AJlO2ZiOQ2Zw.jpg",
                                "width": 1079,
                                "height": 1920,
                                "user": {
                                    "id": "14017658",
                                    "firstName": "Luc",
                                    "lastName": "Succes",
                                    "gender": "male",
                                    "relationship": "self",
                                    "photo": {
                                        "prefix": "https://igx.4sqi.net/img/user/",
                                        "suffix": "/14017658-ZDOGONBT2KNZSARJ.jpg"
                                    }
                                },
                                "visibility": "public"
                            }
                        ],
                        "layout": {
                            "name": "single"
                        }
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a23941de55d8b50a01fe476",
                    "createdAt": 1512281117,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "52e077f811d2a2e7620c2ccf",
                        "name": "MAYA (เมญ่า)",
                        "contact": {
                            "phone": "+6652081555",
                            "formattedPhone": "+66 52 081 555",
                            "twitter": "mayachiangmai",
                            "facebook": "131800340305321",
                            "facebookUsername": "maya.chiangmai",
                            "facebookName": "MAYA Chiang Mai"
                        },
                        "location": {
                            "address": "55 Moo 5 Huai Kaew Rd",
                            "crossStreet": "at Rincome Intersection",
                            "lat": 18.80214483127594,
                            "lng": 98.96739331368553,
                            "postalCode": "50300",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "55 Moo 5 Huai Kaew Rd (at Rincome Intersection)",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50300",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1fd941735",
                                "name": "Shopping Mall",
                                "pluralName": "Shopping Malls",
                                "shortName": "Mall",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/mall_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 112,
                            "usersCount": 18752,
                            "checkinsCount": 80633
                        },
                        "url": "http://www.mayashoppingcenter.com",
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "53f2863b4b90933f78c3a694",
                        "name": "Retail Therapy",
                        "image": {
                            "prefix": "https://irs0.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/shopping_866748.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 24
                        },
                        "pickerPosition": {
                            "page": 1,
                            "index": 0
                        },
                        "teaseText": "Check in at shopping malls to unlock this sticker.",
                        "unlockText": "Shop till you drop! This shopping bag will help you carry all your finds. How much did you spend? Who cares! You still have your ex’s card.",
                        "bonusText": "Use at various Shopping Places for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a238d43f870fd5c1f179b6b",
                    "createdAt": 1512279363,
                    "type": "checkin",
                    "entities": [
                        {
                            "indices": [
                                5,
                                11
                            ],
                            "type": "user",
                            "id": "458913413"
                        },
                        {
                            "indices": [
                                13,
                                21
                            ],
                            "type": "user",
                            "id": "457412860"
                        },
                        {
                            "indices": [
                                23,
                                28
                            ],
                            "type": "user",
                            "id": "9787790"
                        }
                    ],
                    "shout": "with Leslie, Michelle, Liviu",
                    "timeZoneOffset": 420,
                    "with": [
                        {
                            "id": "458913413",
                            "firstName": "Leslie",
                            "lastName": "Thornton",
                            "gender": "female",
                            "relationship": "friend",
                            "photo": {
                                "prefix": "https://igx.4sqi.net/img/user/",
                                "suffix": "/458913413_GQI1dZPz_IsoLK5sm86HoIHpe71MUgAJTigDn0Txp7SQ7MBiOgeft_-bLPb0upo2iZQC83pDL.jpg"
                            }
                        },
                        {
                            "id": "457412860",
                            "firstName": "Michelle",
                            "lastName": "Lawson",
                            "gender": "female",
                            "relationship": "friend",
                            "photo": {
                                "prefix": "https://igx.4sqi.net/img/user/",
                                "suffix": "/457412860_5yNAPGkF_DroVM1AKsiJsAhAr-X4tBEjKad72bhIBGoLITeztzGUZ2Ve7jb_AthzVqy4aWZ3b.jpg"
                            }
                        },
                        {
                            "id": "9787790",
                            "firstName": "Liviu",
                            "lastName": "Chis",
                            "gender": "male",
                            "relationship": "friend",
                            "photo": {
                                "prefix": "https://igx.4sqi.net/img/user/",
                                "suffix": "/2Z2Q3XBVHKOP0INX.jpg"
                            }
                        }
                    ],
                    "venue": {
                        "id": "51a96312498e5a9d360d455c",
                        "name": "Food4thought",
                        "contact": {
                            "phone": "+66946192225",
                            "formattedPhone": "+66 94 619 2225",
                            "facebook": "400935493337517",
                            "facebookUsername": "Food4ThoughtCM",
                            "facebookName": "Food4Thought"
                        },
                        "location": {
                            "address": "15/14 Moo 1 Sudjai Alley",
                            "crossStreet": "Canal Road",
                            "lat": 18.806096011058226,
                            "lng": 98.96137774729385,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.806096011058226,
                                    "lng": 98.96137774729385
                                }
                            ],
                            "postalCode": "50200",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "15/14 Moo 1 Sudjai Alley (Canal Road)",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50200",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1bd941735",
                                "name": "Salad Place",
                                "pluralName": "Salad Places",
                                "shortName": "Salad",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/salad_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 25,
                            "usersCount": 196,
                            "checkinsCount": 469
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "91171996"
                        },
                        "storeId": ""
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "5963b5ddbab2f604cf800490",
                        "name": "Foam-o",
                        "image": {
                            "prefix": "https://irs2.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/Cafes_776a64.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 248
                        },
                        "pickerPosition": {
                            "page": 10,
                            "index": 8
                        },
                        "teaseText": "Check in at cafés to unlock this sticker.",
                        "unlockText": "I’ll have a single-origin, double roast, triple whip, half-caf with sprinkles. Thanks a latte."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a22cabb2e26800741369077",
                    "createdAt": 1512229563,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4bc96141511f952192b7adc7",
                        "name": "Warm Up Café (วอร์มอัพ คาเฟ่)",
                        "contact": {
                            "phone": "+6653400677",
                            "formattedPhone": "+66 53 400 677"
                        },
                        "location": {
                            "address": "40 Nimmana Haeminda Rd.",
                            "crossStreet": "Lane 17",
                            "lat": 18.79515155839826,
                            "lng": 98.9650959827282,
                            "postalCode": "50200",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "40 Nimmana Haeminda Rd. (Lane 17)",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50200",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d11f941735",
                                "name": "Nightclub",
                                "pluralName": "Nightclubs",
                                "shortName": "Nightclub",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/nightclub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 265,
                            "usersCount": 20515,
                            "checkinsCount": 63032
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a22b6012632ec61825da6aa",
                    "createdAt": 1512224257,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "createdBy": {
                        "id": "9787790",
                        "firstName": "Liviu",
                        "lastName": "Chis",
                        "gender": "male",
                        "relationship": "friend",
                        "photo": {
                            "prefix": "https://igx.4sqi.net/img/user/",
                            "suffix": "/2Z2Q3XBVHKOP0INX.jpg"
                        }
                    },
                    "venue": {
                        "id": "4dbab7635da389d2c241ae85",
                        "name": "Why Not Italian Food",
                        "contact": {
                            "phone": "+6653289262",
                            "formattedPhone": "+66 53 289 262",
                            "twitter": "whynot_cm",
                            "facebook": "120885044655716",
                            "facebookUsername": "whynotchiangmai",
                            "facebookName": "Why Not? Italian Restaurant & Wine Bar"
                        },
                        "location": {
                            "address": "14 Nimmanhemin Road, Soi 11",
                            "lat": 18.796798989047105,
                            "lng": 98.96790995969937,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.796798989047105,
                                    "lng": 98.96790995969937
                                }
                            ],
                            "postalCode": "50200",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "14 Nimmanhemin Road, Soi 11",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50200",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d110941735",
                                "name": "Italian Restaurant",
                                "pluralName": "Italian Restaurants",
                                "shortName": "Italian",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/italian_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 26,
                            "usersCount": 528,
                            "checkinsCount": 760
                        },
                        "url": "http://whynotchiangmai.com",
                        "menu": {
                            "type": "Menu",
                            "label": "Menu",
                            "anchor": "View Menu",
                            "url": "http://whynotchiangmai.com/why-not-menu/",
                            "mobileUrl": "http://whynotchiangmai.com/why-not-menu/",
                            "externalUrl": "http://whynotchiangmai.com/why-not-menu/"
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "200370696"
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for Android",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a2298abc9f907599bc7a705",
                    "createdAt": 1512216747,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4bbdbcf2593fef3bafbc0356",
                        "name": "P.T. Residence (พีทีเรสซิเดนซ์)",
                        "contact": {
                            "phone": "+6653894665",
                            "formattedPhone": "+66 53 894 665"
                        },
                        "location": {
                            "address": "51 Siri Mangkalajarn Rd.",
                            "lat": 18.797569237218298,
                            "lng": 98.97131536081517,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.797569237218298,
                                    "lng": 98.97131536081517
                                }
                            ],
                            "cc": "TH",
                            "city": "Su Thep",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "51 Siri Mangkalajarn Rd.",
                                "Su Thep",
                                "เชียงใหม่",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4d954b06a243a5684965b473",
                                "name": "Residential Building (Apartment / Condo)",
                                "pluralName": "Residential Buildings (Apartments / Condos)",
                                "shortName": "Residential",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/apartment_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 14,
                            "usersCount": 333,
                            "checkinsCount": 3245
                        },
                        "venueRatingBlacklisted": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a2285b4a2c00b3bc4f9feca",
                    "createdAt": 1512211892,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "createdBy": {
                        "id": "9787790",
                        "firstName": "Liviu",
                        "lastName": "Chis",
                        "gender": "male",
                        "relationship": "friend",
                        "photo": {
                            "prefix": "https://igx.4sqi.net/img/user/",
                            "suffix": "/2Z2Q3XBVHKOP0INX.jpg"
                        }
                    },
                    "venue": {
                        "id": "4f3cd96ce4b054d240863ca1",
                        "name": "Doi Pui (ดอยปุย)",
                        "contact": {},
                        "location": {
                            "lat": 18.815703955715673,
                            "lng": 98.88464013502164,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.815703955715673,
                                    "lng": 98.88464013502164
                                }
                            ],
                            "postalCode": "50200",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50200",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d159941735",
                                "name": "Trail",
                                "pluralName": "Trails",
                                "shortName": "Trail",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/hikingtrail_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 4,
                            "usersCount": 968,
                            "checkinsCount": 1011
                        },
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 1,
                        "groups": [
                            {
                                "type": "friends",
                                "count": 1,
                                "items": [
                                    {
                                        "id": "58749",
                                        "firstName": "Kim",
                                        "lastName": "Phạm",
                                        "gender": "female",
                                        "relationship": "friend",
                                        "photo": {
                                            "prefix": "https://igx.4sqi.net/img/user/",
                                            "suffix": "/58749-0OKRZUTUUS5EM4N0.jpg"
                                        }
                                    }
                                ]
                            }
                        ],
                        "summary": "Kim Phạm"
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for Android",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a20eebd82a750453bc251fa",
                    "createdAt": 1512107709,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "54b4e1d5498e7d670004b06e",
                        "name": "Clay Studio Coffee in the Garden (เคลย์สตูดิโอ คอฟฟี่อินเดอะการ์เด้น)",
                        "contact": {
                            "phone": "+6653278187",
                            "formattedPhone": "+66 53 278 187"
                        },
                        "location": {
                            "address": "Prapokklao 2 Rd.",
                            "crossStreet": "Ratchamanka 6 Rd.",
                            "lat": 18.782049201179625,
                            "lng": 98.98731673167835,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.782049201179625,
                                    "lng": 98.98731673167835
                                }
                            ],
                            "postalCode": "50200",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "Prapokklao 2 Rd. (Ratchamanka 6 Rd.)",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50200",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1e0931735",
                                "name": "Coffee Shop",
                                "pluralName": "Coffee Shops",
                                "shortName": "Coffee Shop",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 50,
                            "usersCount": 403,
                            "checkinsCount": 513
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "52a659800000000000000006",
                        "name": "Joey Beans",
                        "image": {
                            "prefix": "https://irs0.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/coffee_f4b66b.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 8
                        },
                        "pickerPosition": {
                            "page": 0,
                            "index": 8
                        },
                        "teaseText": "Check in at coffee shops to unlock this sticker.",
                        "unlockText": "Who cares if your flat white just cost ya $10 bucks. You're getting free wi-fi! Free, extremely slow wi-fi. Drink it up.",
                        "bonusText": "Use at Coffee Shops for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a20ebed1543c70928d673fc",
                    "createdAt": 1512106989,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "54508322498e019be8ce2ee2",
                        "name": "Punspace (ปันสเปซ)",
                        "contact": {
                            "phone": "+66896318264",
                            "formattedPhone": "+66 89 631 8264",
                            "twitter": "punspace",
                            "facebook": "466466946737210",
                            "facebookUsername": "punspace",
                            "facebookName": "Punspace"
                        },
                        "location": {
                            "address": "7/2 Rachadamnoen Road, Soi 4",
                            "lat": 18.78652820970983,
                            "lng": 98.991507721815,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.78652820970983,
                                    "lng": 98.991507721815
                                }
                            ],
                            "postalCode": "50200",
                            "cc": "TH",
                            "neighborhood": "Prasingha",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "7/2 Rachadamnoen Road, Soi 4",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50200",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d174941735",
                                "name": "Coworking Space",
                                "pluralName": "Coworking Spaces",
                                "shortName": "Coworking Space",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/office_coworkingspace_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 11,
                            "usersCount": 194,
                            "checkinsCount": 646
                        },
                        "url": "http://www.punspace.com",
                        "venueRatingBlacklisted": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "53fe77e54b9048855b3648b6",
                        "name": "Lappy Toppy",
                        "image": {
                            "prefix": "https://irs2.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/laptop_4d7599.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 42
                        },
                        "pickerPosition": {
                            "page": 1,
                            "index": 18
                        },
                        "teaseText": "Check in at offices to unlock this sticker.",
                        "unlockText": "You're totally not reading BuzzFeed all day. Here’s a sticker for being so productive. Now back to that “Which Sticker Are You?” quiz.",
                        "bonusText": "Use at Offices for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a20478059c42328c2e9a0fd",
                    "createdAt": 1512064896,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4bc96141511f952192b7adc7",
                        "name": "Warm Up Café (วอร์มอัพ คาเฟ่)",
                        "contact": {
                            "phone": "+6653400677",
                            "formattedPhone": "+66 53 400 677"
                        },
                        "location": {
                            "address": "40 Nimmana Haeminda Rd.",
                            "crossStreet": "Lane 17",
                            "lat": 18.79515155839826,
                            "lng": 98.9650959827282,
                            "postalCode": "50200",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "40 Nimmana Haeminda Rd. (Lane 17)",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50200",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d11f941735",
                                "name": "Nightclub",
                                "pluralName": "Nightclubs",
                                "shortName": "Nightclub",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/nightclub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 265,
                            "usersCount": 20515,
                            "checkinsCount": 63032
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a2023d2c0af573793e3fbfb",
                    "createdAt": 1512055762,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4bbdbcf2593fef3bafbc0356",
                        "name": "P.T. Residence (พีทีเรสซิเดนซ์)",
                        "contact": {
                            "phone": "+6653894665",
                            "formattedPhone": "+66 53 894 665"
                        },
                        "location": {
                            "address": "51 Siri Mangkalajarn Rd.",
                            "lat": 18.797569237218298,
                            "lng": 98.97131536081517,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.797569237218298,
                                    "lng": 98.97131536081517
                                }
                            ],
                            "cc": "TH",
                            "city": "Su Thep",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "51 Siri Mangkalajarn Rd.",
                                "Su Thep",
                                "เชียงใหม่",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4d954b06a243a5684965b473",
                                "name": "Residential Building (Apartment / Condo)",
                                "pluralName": "Residential Buildings (Apartments / Condos)",
                                "shortName": "Residential",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/apartment_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 14,
                            "usersCount": 333,
                            "checkinsCount": 3245
                        },
                        "venueRatingBlacklisted": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a200b7a7dc9e124fc3272ee",
                    "createdAt": 1512049530,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4b7ff4adf964a520c94630e3",
                        "name": "Zoe in Yellow",
                        "contact": {},
                        "location": {
                            "address": "ถนนราชวิถี",
                            "crossStreet": "กาดบุญอยู่เดิม",
                            "lat": 18.79086100184418,
                            "lng": 98.99039479338417,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.79086100184418,
                                    "lng": 98.99039479338417
                                }
                            ],
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "ถนนราชวิถี (กาดบุญอยู่เดิม)",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d116941735",
                                "name": "Bar",
                                "pluralName": "Bars",
                                "shortName": "Bar",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 58,
                            "usersCount": 3551,
                            "checkinsCount": 7301
                        },
                        "url": "http://zoeinyellowchiangmai.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a1fed63fd16bb0988258fcc",
                    "createdAt": 1512041827,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4cde8e6e94c3b60c340266ea",
                        "name": "Anusarn Market (ตลาดอนุสาร)",
                        "contact": {},
                        "location": {
                            "address": "Anusan Sunthon Rd.",
                            "crossStreet": "Chang Klan Rd.",
                            "lat": 18.782694166206834,
                            "lng": 99.00081827780029,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.782694166206834,
                                    "lng": 99.00081827780029
                                }
                            ],
                            "postalCode": "50100",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "Anusan Sunthon Rd. (Chang Klan Rd.)",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50100",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1f7941735",
                                "name": "Flea Market",
                                "pluralName": "Flea Markets",
                                "shortName": "Flea Market",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/fleamarket_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 38,
                            "usersCount": 3798,
                            "checkinsCount": 5195
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 1,
                        "items": [
                            {
                                "id": "5a1fed66bfc6d02923b67064",
                                "createdAt": 1512041830,
                                "source": {
                                    "name": "Swarm for iOS",
                                    "url": "https://www.swarmapp.com"
                                },
                                "prefix": "https://igx.4sqi.net/img/general/",
                                "suffix": "/14017658_gQ_3MSmq6ipodDGS8gUmw0ygLYuSMpkd-pGMt7sg6t8.jpg",
                                "width": 1440,
                                "height": 1920,
                                "user": {
                                    "id": "14017658",
                                    "firstName": "Luc",
                                    "lastName": "Succes",
                                    "gender": "male",
                                    "relationship": "self",
                                    "photo": {
                                        "prefix": "https://igx.4sqi.net/img/user/",
                                        "suffix": "/14017658-ZDOGONBT2KNZSARJ.jpg"
                                    }
                                },
                                "visibility": "public"
                            }
                        ],
                        "layout": {
                            "name": "single"
                        }
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a1fd49dd69ed025b8eb8e51",
                    "createdAt": 1512035485,
                    "type": "checkin",
                    "entities": [],
                    "shout": "They seem legit but pray for my hairline",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4edb67c9e300851bfab697f2",
                        "name": "SKILL BARBER",
                        "contact": {},
                        "location": {
                            "lat": 18.799143589826503,
                            "lng": 98.97187162603731,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.799143589826503,
                                    "lng": 98.97187162603731
                                }
                            ],
                            "cc": "TH",
                            "city": "อ.เมืองเชียงใหม่",
                            "state": "จ.เชียงใหม่",
                            "country": "Thailand",
                            "formattedAddress": [
                                "อ.เมืองเชียงใหม่",
                                "จ.เชียงใหม่",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d110951735",
                                "name": "Salon / Barbershop",
                                "pluralName": "Salons / Barbershops",
                                "shortName": "Salon / Barbershop",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/salon_barber_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 11,
                            "usersCount": 302,
                            "checkinsCount": 502
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 1,
                        "groups": [
                            {
                                "type": "friends",
                                "count": 1,
                                "items": [
                                    {
                                        "id": "43915299",
                                        "firstName": "Kate",
                                        "lastName": "Findlay",
                                        "gender": "female",
                                        "relationship": "friend",
                                        "photo": {
                                            "prefix": "https://igx.4sqi.net/img/user/",
                                            "suffix": "/JBM32XXYVDSRWJYP.jpg"
                                        }
                                    }
                                ]
                            }
                        ],
                        "summary": "Kate Findlay"
                    },
                    "like": false,
                    "sticker": {
                        "id": "54b59d7de50827cdc0f45206",
                        "name": "Clippy",
                        "image": {
                            "prefix": "https://irs1.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/scissors_74b12e.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 81
                        },
                        "pickerPosition": {
                            "page": 3,
                            "index": 9
                        },
                        "teaseText": "Check in at salons to unlock this sticker.",
                        "unlockText": "Is today the day you try something new? Layers? Bangs? Frosted Tips? Mullet? Oh, we dare you! #swarmmullet",
                        "bonusText": "Use at Salons or Barber Shops for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 1,
                        "items": [
                            {
                                "id": "5a1fd4a02496232efb9ddcd3",
                                "createdAt": 1512035488,
                                "source": {
                                    "name": "Swarm for iOS",
                                    "url": "https://www.swarmapp.com"
                                },
                                "hasSticker": true,
                                "prefix": "https://igx.4sqi.net/img/general/",
                                "suffix": "/14017658_27tYVJcZ_NFGHfSEvYwnF-Jf2AliaygX1fzZH_XGRt0.jpg",
                                "width": 1079,
                                "height": 1920,
                                "user": {
                                    "id": "14017658",
                                    "firstName": "Luc",
                                    "lastName": "Succes",
                                    "gender": "male",
                                    "relationship": "self",
                                    "photo": {
                                        "prefix": "https://igx.4sqi.net/img/user/",
                                        "suffix": "/14017658-ZDOGONBT2KNZSARJ.jpg"
                                    }
                                },
                                "visibility": "friends"
                            }
                        ],
                        "layout": {
                            "name": "single"
                        }
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a1fb3c42b98444ef27d0cb5",
                    "createdAt": 1512027076,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "54508322498e019be8ce2ee2",
                        "name": "Punspace (ปันสเปซ)",
                        "contact": {
                            "phone": "+66896318264",
                            "formattedPhone": "+66 89 631 8264",
                            "twitter": "punspace",
                            "facebook": "466466946737210",
                            "facebookUsername": "punspace",
                            "facebookName": "Punspace"
                        },
                        "location": {
                            "address": "7/2 Rachadamnoen Road, Soi 4",
                            "lat": 18.78652820970983,
                            "lng": 98.991507721815,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.78652820970983,
                                    "lng": 98.991507721815
                                }
                            ],
                            "postalCode": "50200",
                            "cc": "TH",
                            "neighborhood": "Prasingha",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "7/2 Rachadamnoen Road, Soi 4",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50200",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d174941735",
                                "name": "Coworking Space",
                                "pluralName": "Coworking Spaces",
                                "shortName": "Coworking Space",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/office_coworkingspace_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 11,
                            "usersCount": 194,
                            "checkinsCount": 646
                        },
                        "url": "http://www.punspace.com",
                        "venueRatingBlacklisted": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "53fe77e54b9048855b3648b6",
                        "name": "Lappy Toppy",
                        "image": {
                            "prefix": "https://irs2.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/laptop_4d7599.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 42
                        },
                        "pickerPosition": {
                            "page": 1,
                            "index": 18
                        },
                        "teaseText": "Check in at offices to unlock this sticker.",
                        "unlockText": "You're totally not reading BuzzFeed all day. Here’s a sticker for being so productive. Now back to that “Which Sticker Are You?” quiz.",
                        "bonusText": "Use at Offices for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a1fa1ff9e3b6508f1cbc0e8",
                    "createdAt": 1512022527,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "50fb5eb5e4b0096f8b9dc246",
                        "name": "Punspace",
                        "contact": {
                            "phone": "+66896318264",
                            "formattedPhone": "+66 89 631 8264",
                            "twitter": "punspace"
                        },
                        "location": {
                            "address": "14 Siri Mangkalajarn Lane 11",
                            "lat": 18.793486286643763,
                            "lng": 98.97233682454213,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.793486286643763,
                                    "lng": 98.97233682454213
                                }
                            ],
                            "postalCode": "50200",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "14 Siri Mangkalajarn Lane 11",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50200",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d174941735",
                                "name": "Coworking Space",
                                "pluralName": "Coworking Spaces",
                                "shortName": "Coworking Space",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/office_coworkingspace_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 9,
                            "usersCount": 247,
                            "checkinsCount": 660
                        },
                        "url": "http://www.punspace.com",
                        "venueRatingBlacklisted": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a1f8bf61b0ea569f2ddd6ba",
                    "createdAt": 1512016886,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "532ecc30498e96e0e223d31a",
                        "name": "Rustic & Blue",
                        "contact": {},
                        "location": {
                            "address": "Nimmanhaemin soi 7",
                            "lat": 18.798159848362317,
                            "lng": 98.96743127546091,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.798159848362317,
                                    "lng": 98.96743127546091
                                }
                            ],
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "Nimmanhaemin soi 7",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1dc931735",
                                "name": "Tea Room",
                                "pluralName": "Tea Rooms",
                                "shortName": "Tea Room",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/tearoom_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 81,
                            "usersCount": 1172,
                            "checkinsCount": 1735
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 1,
                        "groups": [
                            {
                                "type": "friends",
                                "count": 1,
                                "items": [
                                    {
                                        "id": "43915299",
                                        "firstName": "Kate",
                                        "lastName": "Findlay",
                                        "gender": "female",
                                        "relationship": "friend",
                                        "photo": {
                                            "prefix": "https://igx.4sqi.net/img/user/",
                                            "suffix": "/JBM32XXYVDSRWJYP.jpg"
                                        }
                                    }
                                ]
                            }
                        ],
                        "summary": "Kate Findlay"
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a1e82101543c721189dae1b",
                    "createdAt": 1511948816,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4bbdbcf2593fef3bafbc0356",
                        "name": "P.T. Residence (พีทีเรสซิเดนซ์)",
                        "contact": {
                            "phone": "+6653894665",
                            "formattedPhone": "+66 53 894 665"
                        },
                        "location": {
                            "address": "51 Siri Mangkalajarn Rd.",
                            "lat": 18.797569237218298,
                            "lng": 98.97131536081517,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.797569237218298,
                                    "lng": 98.97131536081517
                                }
                            ],
                            "cc": "TH",
                            "city": "Su Thep",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "51 Siri Mangkalajarn Rd.",
                                "Su Thep",
                                "เชียงใหม่",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4d954b06a243a5684965b473",
                                "name": "Residential Building (Apartment / Condo)",
                                "pluralName": "Residential Buildings (Apartments / Condos)",
                                "shortName": "Residential",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/apartment_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 14,
                            "usersCount": 333,
                            "checkinsCount": 3245
                        },
                        "venueRatingBlacklisted": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a1e820f75eee44fed23bfe6",
                    "createdAt": 1511948815,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "5892118246563a4f59c18351",
                        "name": "Chiang Mai Scooter Rental Co. LTD",
                        "contact": {},
                        "location": {
                            "address": "PT Residence Building, 51 Sirimangkalajarn Rd",
                            "lat": 18.79745,
                            "lng": 98.971375,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.79745,
                                    "lng": 98.971375
                                }
                            ],
                            "postalCode": "50200",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "PT Residence Building, 51 Sirimangkalajarn Rd",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50200",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1ef941735",
                                "name": "Rental Car Location",
                                "pluralName": "Rental Car Locations",
                                "shortName": "Rental Car",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/airport_rentalcar_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 0,
                            "usersCount": 16,
                            "checkinsCount": 19
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a1e5f4035d3fc1a85b1fe41",
                    "createdAt": 1511939904,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "55800c41498e00d81f0f9e0b",
                        "name": "SS1254372 Cafe",
                        "contact": {
                            "phone": "+66938319394",
                            "formattedPhone": "+66 93 831 9394",
                            "facebook": "1600322533576589",
                            "facebookUsername": "ss1254372cafe",
                            "facebookName": "SS1254372 Cafe"
                        },
                        "location": {
                            "address": "22/1 Nimmana Haeminda 17",
                            "lat": 18.794846186366527,
                            "lng": 98.96836972629917,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 18.794846186366527,
                                    "lng": 98.96836972629917
                                }
                            ],
                            "postalCode": "50300",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "22/1 Nimmana Haeminda 17",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50300",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d143941735",
                                "name": "Breakfast Spot",
                                "pluralName": "Breakfast Spots",
                                "shortName": "Breakfast",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/breakfast_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 33,
                            "usersCount": 733,
                            "checkinsCount": 1202
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "131625166"
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 1,
                        "items": [
                            {
                                "id": "5a1e5f4265cdf81b0b5e5196",
                                "createdAt": 1511939906,
                                "source": {
                                    "name": "Swarm for iOS",
                                    "url": "https://www.swarmapp.com"
                                },
                                "prefix": "https://igx.4sqi.net/img/general/",
                                "suffix": "/14017658_UYHl2MwXIiWo7jwMcjkkuIrI7suNAnwpgOvjzbZnACc.jpg",
                                "width": 1079,
                                "height": 1920,
                                "user": {
                                    "id": "14017658",
                                    "firstName": "Luc",
                                    "lastName": "Succes",
                                    "gender": "male",
                                    "relationship": "self",
                                    "photo": {
                                        "prefix": "https://igx.4sqi.net/img/user/",
                                        "suffix": "/14017658-ZDOGONBT2KNZSARJ.jpg"
                                    }
                                },
                                "visibility": "public"
                            }
                        ],
                        "layout": {
                            "name": "single"
                        }
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a1d45f09deb7d52c60d474c",
                    "createdAt": 1511867888,
                    "type": "checkin",
                    "private": true,
                    "visibility": "private",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4b8e687ff964a520422133e3",
                        "name": "Chiang Mai International Airport (CNX) (ท่าอากาศยานเชียงใหม่)",
                        "contact": {
                            "phone": "+6653270222",
                            "formattedPhone": "+66 53 270 222"
                        },
                        "location": {
                            "address": "60 Mahidol Rd",
                            "lat": 18.76969394542492,
                            "lng": 98.96809439047483,
                            "postalCode": "50100",
                            "cc": "TH",
                            "city": "Mueang Chiang Mai",
                            "state": "Chiang Mai",
                            "country": "Thailand",
                            "formattedAddress": [
                                "60 Mahidol Rd",
                                "เมืองเชียงใหม่",
                                "เชียงใหม่ 50100",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1ed931735",
                                "name": "Airport",
                                "pluralName": "Airports",
                                "shortName": "Airport",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/airport_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 744,
                            "usersCount": 82762,
                            "checkinsCount": 285255
                        },
                        "url": "http://www.airportthai.co.th/chiang_mai/en/home.php",
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Foursquare for iOS",
                        "url": "https://foursquare.com/download/#/iphone"
                    }
                },
                {
                    "id": "5a1d26c79fca567b48051ebd",
                    "createdAt": 1511859911,
                    "type": "checkin",
                    "private": true,
                    "visibility": "private",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4b2df07cf964a5201bdc24e3",
                        "name": "Don Mueang International Airport (DMK) (ท่าอากาศยานดอนเมือง)",
                        "contact": {
                            "phone": "+6625351679",
                            "formattedPhone": "+66 2 535 1679",
                            "facebook": "138834389474970",
                            "facebookName": "Don Mueang International Airport"
                        },
                        "location": {
                            "address": "222 Vibhavadi Rangsit Rd",
                            "lat": 13.920005927655293,
                            "lng": 100.60226784943612,
                            "postalCode": "10210",
                            "cc": "TH",
                            "city": "Don Mueang",
                            "state": "Bangkok",
                            "country": "Thailand",
                            "formattedAddress": [
                                "222 Vibhavadi Rangsit Rd",
                                "ดอนเมือง",
                                "กรุงเทพมหานคร 10210",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1ed931735",
                                "name": "Airport",
                                "pluralName": "Airports",
                                "shortName": "Airport",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/airport_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 1528,
                            "usersCount": 171950,
                            "checkinsCount": 656929
                        },
                        "url": "http://www.airportthai.co.th/donmueang/th/home.php",
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Foursquare for iOS",
                        "url": "https://foursquare.com/download/#/iphone"
                    }
                },
                {
                    "id": "5a1bf3138b98fd147464a790",
                    "createdAt": 1511781139,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4b0d131ff964a520a04323e3",
                        "name": "Paragon Cineplex (พารากอน ซีนีเพล็กซ์)",
                        "contact": {
                            "phone": "+6621294635",
                            "formattedPhone": "+66 2 129 4635",
                            "twitter": "majorgroup"
                        },
                        "location": {
                            "address": "Siam Paragon",
                            "crossStreet": "5th-6th Fl",
                            "lat": 13.746112904352838,
                            "lng": 100.53511854853555,
                            "postalCode": "10330",
                            "cc": "TH",
                            "city": "Pathum Wan",
                            "state": "Bangkok",
                            "country": "Thailand",
                            "formattedAddress": [
                                "Siam Paragon (5th-6th Fl)",
                                "ปทุมวัน",
                                "กรุงเทพมหานคร 10330",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d180941735",
                                "name": "Multiplex",
                                "pluralName": "Multiplexes",
                                "shortName": "Cineplex",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/movietheater_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 272,
                            "usersCount": 54121,
                            "checkinsCount": 180547
                        },
                        "url": "http://www.majorcineplex.com/cinema/paragon-cineplex",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a1bca0259c4237af0dd019a",
                    "createdAt": 1511770626,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4e05622cfa767637fd1df751",
                        "name": "Starbucks (สตาร์บัคส์)",
                        "contact": {
                            "phone": "+6626461430",
                            "formattedPhone": "+66 2 646 1430",
                            "twitter": "starbucks",
                            "facebook": "170412482765",
                            "facebookUsername": "StarbucksThailand",
                            "facebookName": "Starbucks Thailand"
                        },
                        "location": {
                            "address": "CentralWorld - 3rd Fl",
                            "crossStreet": "#A305",
                            "lat": 13.746034127241094,
                            "lng": 100.53966522216797,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 13.746034127241094,
                                    "lng": 100.53966522216797
                                }
                            ],
                            "postalCode": "10330",
                            "cc": "TH",
                            "city": "Pathum Wan",
                            "state": "Bangkok",
                            "country": "Thailand",
                            "formattedAddress": [
                                "CentralWorld - 3rd Fl (#A305)",
                                "ปทุมวัน",
                                "กรุงเทพมหานคร 10330",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1e0931735",
                                "name": "Coffee Shop",
                                "pluralName": "Coffee Shops",
                                "shortName": "Coffee Shop",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 58,
                            "usersCount": 9937,
                            "checkinsCount": 18479
                        },
                        "url": "http://www.starbucks.co.th",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a1ba6480a08ab5cbe7d9f5c",
                    "createdAt": 1511761480,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4b7960f0f964a5209bf62ee3",
                        "name": "BTS Nana (E3) (BTS นานา)",
                        "contact": {
                            "phone": "+6626176000",
                            "formattedPhone": "+66 2 617 6000",
                            "twitter": "bts_skytrain"
                        },
                        "location": {
                            "address": "Sukhumvit Rd",
                            "lat": 13.740458362480375,
                            "lng": 100.5555400746451,
                            "postalCode": "10110",
                            "cc": "TH",
                            "city": "Vadhana",
                            "state": "Bangkok",
                            "country": "Thailand",
                            "formattedAddress": [
                                "Sukhumvit Rd",
                                "วัฒนา",
                                "กรุงเทพมหานคร 10110",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d129951735",
                                "name": "Train Station",
                                "pluralName": "Train Stations",
                                "shortName": "Train Station",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/trainstation_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 35,
                            "usersCount": 14490,
                            "checkinsCount": 34806
                        },
                        "url": "http://www.bts.co.th",
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a1b13ca83e3804b1884d520",
                    "createdAt": 1511723978,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "542c2ac7498ea28b892a13c2",
                        "name": "Sugar Club",
                        "contact": {},
                        "location": {
                            "address": "Sukhumvit Soi 11",
                            "lat": 13.742998915057166,
                            "lng": 100.55663469869708,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 13.742998915057166,
                                    "lng": 100.55663469869708
                                }
                            ],
                            "cc": "TH",
                            "city": "Bangkok Riverside",
                            "state": "Bangkok",
                            "country": "Thailand",
                            "formattedAddress": [
                                "Sukhumvit Soi 11",
                                "Bangkok Riverside",
                                "กรุงเทพมหานคร",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d11f941735",
                                "name": "Nightclub",
                                "pluralName": "Nightclubs",
                                "shortName": "Nightclub",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/nightclub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 9,
                            "usersCount": 453,
                            "checkinsCount": 850
                        },
                        "url": "http://www.thaibis.com/a-z/s/sugar-club",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a1ad06716ef675f1f436e03",
                    "createdAt": 1511706727,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4c2f7415452620a1b4851d0f",
                        "name": "Thip Samai (ทิพย์สมัย (ผัดไทยประตูผี))",
                        "contact": {
                            "phone": "+6622266666",
                            "formattedPhone": "+66 2 226 6666",
                            "facebook": "763600886997887",
                            "facebookUsername": "thipsamaipadthai",
                            "facebookName": "ทิพย์สมัย ผัดไทยประตูผี - Thipsamai Restaurant"
                        },
                        "location": {
                            "address": "313 Maha Chai Rd.",
                            "lat": 13.752800218436755,
                            "lng": 100.50477772951126,
                            "postalCode": "10200",
                            "cc": "TH",
                            "neighborhood": "Pom Prap Sattru Phai",
                            "city": "Phra Nakhon",
                            "state": "Bangkok",
                            "country": "Thailand",
                            "formattedAddress": [
                                "313 Maha Chai Rd.",
                                "พระนคร",
                                "กรุงเทพมหานคร 10200",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1d1941735",
                                "name": "Noodle House",
                                "pluralName": "Noodle Houses",
                                "shortName": "Noodles",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/ramen_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 403,
                            "usersCount": 19723,
                            "checkinsCount": 30422
                        },
                        "url": "http://www.thipsamai.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "57fbaacc498e4805f8ea2971",
                        "name": "Mr. Noodles",
                        "image": {
                            "prefix": "https://irs3.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/ramen_bb433a.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 72
                        },
                        "pickerPosition": {
                            "page": 3,
                            "index": 0
                        },
                        "teaseText": "Check in at noodle houses to unlock this sticker.",
                        "unlockText": "Udon need to hear it from us. Ramen is pho-nomenal….we’ll let you stew on that one. #souppuns",
                        "bonusText": "Use at Ramen Restaurant, Soba Restaurants, Udon Restaurants, Noodle Houses for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a195904c0cacb126f95fe21",
                    "createdAt": 1511610628,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "58401adc0319b81fb6b6966a",
                        "name": "Talad Neon",
                        "contact": {},
                        "location": {
                            "address": "Phetchaburi Rd",
                            "lat": 13.749607439530799,
                            "lng": 100.54392046824856,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 13.749607439530799,
                                    "lng": 100.54392046824856
                                }
                            ],
                            "postalCode": "10400",
                            "cc": "TH",
                            "city": "Ratchathewi",
                            "state": "Bangkok",
                            "country": "Thailand",
                            "formattedAddress": [
                                "Phetchaburi Rd",
                                "ราชเทวี",
                                "กรุงเทพมหานคร 10400",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "53e510b7498ebcb1801b55d4",
                                "name": "Night Market",
                                "pluralName": "Night Markets",
                                "shortName": "Night Market",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/fleamarket_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 11,
                            "usersCount": 2865,
                            "checkinsCount": 3628
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a18fae0625a6622d90e2bda",
                    "createdAt": 1511586528,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "5018f90ee4b08d7ed9ed6501",
                        "name": "Crêpes & Co.",
                        "contact": {
                            "phone": "+6626520208",
                            "formattedPhone": "+66 2 652 0208",
                            "twitter": "crepesandco"
                        },
                        "location": {
                            "address": "59/4 Lang Suan Rd.",
                            "lat": 13.739325883115383,
                            "lng": 100.54356455187077,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 13.739325883115383,
                                    "lng": 100.54356455187077
                                }
                            ],
                            "postalCode": "10330",
                            "cc": "TH",
                            "city": "Pathum Wan",
                            "state": "Bangkok",
                            "country": "Thailand",
                            "formattedAddress": [
                                "59/4 Lang Suan Rd.",
                                "ปทุมวัน",
                                "กรุงเทพมหานคร 10330",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "52e81612bcbc57f1066b79f2",
                                "name": "Creperie",
                                "pluralName": "Creperies",
                                "shortName": "Creperie",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/creperie_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 56,
                            "usersCount": 1290,
                            "checkinsCount": 1997
                        },
                        "url": "http://www.crepesnco.com",
                        "menu": {
                            "type": "Menu",
                            "label": "Menu",
                            "anchor": "View Menu",
                            "url": "http://www.crepesnco.com/menu",
                            "mobileUrl": "http://www.crepesnco.com/menu",
                            "externalUrl": "http://www.crepesnco.com/menu"
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "5963b5dcbab2f604cf800481",
                        "name": "Bon Appétit",
                        "image": {
                            "prefix": "https://irs0.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/FrenchRestaurants_47b543.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 216
                        },
                        "pickerPosition": {
                            "page": 9,
                            "index": 0
                        },
                        "teaseText": "Check in at French restaurants to unlock this sticker.",
                        "unlockText": "Pardon my French, but this tastes like crepe! (which is great, because that's exactly what I ordered.)"
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a185cb9b23dfa5ce7cbcd60",
                    "createdAt": 1511546041,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "542c2ac7498ea28b892a13c2",
                        "name": "Sugar Club",
                        "contact": {},
                        "location": {
                            "address": "Sukhumvit Soi 11",
                            "lat": 13.742998915057166,
                            "lng": 100.55663469869708,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 13.742998915057166,
                                    "lng": 100.55663469869708
                                }
                            ],
                            "cc": "TH",
                            "city": "Bangkok Riverside",
                            "state": "Bangkok",
                            "country": "Thailand",
                            "formattedAddress": [
                                "Sukhumvit Soi 11",
                                "Bangkok Riverside",
                                "กรุงเทพมหานคร",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d11f941735",
                                "name": "Nightclub",
                                "pluralName": "Nightclubs",
                                "shortName": "Nightclub",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/nightclub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 9,
                            "usersCount": 453,
                            "checkinsCount": 850
                        },
                        "url": "http://www.thaibis.com/a-z/s/sugar-club",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a18513b5f68b92d6e6d542e",
                    "createdAt": 1511543099,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4d03cb5fa2685481a000b4bd",
                        "name": "MIXX",
                        "contact": {
                            "phone": "+6626560382",
                            "formattedPhone": "+66 2 656 0382",
                            "facebook": "129071060488380",
                            "facebookUsername": "mixxbangkok",
                            "facebookName": "MIXX Discotheque Bangkok"
                        },
                        "location": {
                            "address": "973 Phloen Chit Rd",
                            "crossStreet": "at InterContinental Bangkok, B Fl.",
                            "lat": 13.744351870580347,
                            "lng": 100.54127636081125,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 13.744351870580347,
                                    "lng": 100.54127636081125
                                }
                            ],
                            "postalCode": "10330",
                            "cc": "TH",
                            "city": "Pathum Wan",
                            "state": "Bangkok",
                            "country": "Thailand",
                            "formattedAddress": [
                                "973 Phloen Chit Rd (at InterContinental Bangkok, B Fl.)",
                                "ปทุมวัน",
                                "กรุงเทพมหานคร 10330",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d11f941735",
                                "name": "Nightclub",
                                "pluralName": "Nightclubs",
                                "shortName": "Nightclub",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/nightclub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 43,
                            "usersCount": 1625,
                            "checkinsCount": 3853
                        },
                        "url": "http://www.mixx-discotheque.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a1818208496ca4f809276d3",
                    "createdAt": 1511528480,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "5630fcb4498e6064cbf85824",
                        "name": "Havana Social",
                        "contact": {
                            "phone": "+66614503750",
                            "formattedPhone": "+66 61 450 3750",
                            "facebook": "384863961704539",
                            "facebookUsername": "havanasocialbkk",
                            "facebookName": "Havana Social"
                        },
                        "location": {
                            "address": "Sukumvit 11",
                            "lat": 13.745619983639996,
                            "lng": 100.55593186028506,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 13.745619983639996,
                                    "lng": 100.55593186028506
                                }
                            ],
                            "postalCode": "10110",
                            "cc": "TH",
                            "neighborhood": "Watthana",
                            "city": "Vadhana",
                            "state": "Bangkok",
                            "country": "Thailand",
                            "formattedAddress": [
                                "Sukumvit 11",
                                "วัฒนา",
                                "กรุงเทพมหานคร 10110",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d11e941735",
                                "name": "Cocktail Bar",
                                "pluralName": "Cocktail Bars",
                                "shortName": "Cocktail",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/cocktails_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 50,
                            "usersCount": 728,
                            "checkinsCount": 1020
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a17e0bf8496ca30aff99961",
                    "createdAt": 1511514303,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4ceb69b1d27560fca3439b3a",
                        "name": "The Grand Palace (พระบรมมหาราชวัง)",
                        "contact": {},
                        "location": {
                            "address": "Na Phra Lan Rd",
                            "crossStreet": "Maha Rat Rd & Sanam Chai Rd",
                            "lat": 13.751448324318707,
                            "lng": 100.49138991277133,
                            "postalCode": "10200",
                            "cc": "TH",
                            "city": "Phra Nakhon",
                            "state": "Bangkok",
                            "country": "Thailand",
                            "formattedAddress": [
                                "Na Phra Lan Rd (Maha Rat Rd & Sanam Chai Rd)",
                                "พระนคร",
                                "กรุงเทพมหานคร 10200",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "52e81612bcbc57f1066b7a14",
                                "name": "Palace",
                                "pluralName": "Palaces",
                                "shortName": "Palace",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/default_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 381,
                            "usersCount": 39167,
                            "checkinsCount": 52182
                        },
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a16eb8b2632ec6076dfe547",
                    "createdAt": 1511451531,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "4f3e1cd0e4b0869411a454be",
                        "name": "Above Eleven",
                        "contact": {
                            "phone": "+6622079300",
                            "formattedPhone": "+66 2 207 9300",
                            "twitter": "aboveeleven"
                        },
                        "location": {
                            "address": "38/8 Sukhumvit 11",
                            "crossStreet": "at Frasier Suites Sukhumvit Hotel",
                            "lat": 13.745572913538028,
                            "lng": 100.55659867107269,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 13.745572913538028,
                                    "lng": 100.55659867107269
                                }
                            ],
                            "postalCode": "10110",
                            "cc": "TH",
                            "city": "Vadhana",
                            "state": "Bangkok",
                            "country": "Thailand",
                            "formattedAddress": [
                                "38/8 Sukhumvit 11 (at Frasier Suites Sukhumvit Hotel)",
                                "วัฒนา",
                                "กรุงเทพมหานคร 10110",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1d5941735",
                                "name": "Hotel Bar",
                                "pluralName": "Hotel Bars",
                                "shortName": "Hotel Bar",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/hotel_bar_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 158,
                            "usersCount": 4161,
                            "checkinsCount": 5846
                        },
                        "url": "http://aboveeleven.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "33758804"
                        },
                        "storeId": ""
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a1668fb9e3b652fbde984e2",
                    "createdAt": 1511418107,
                    "type": "checkin",
                    "timeZoneOffset": 420,
                    "venue": {
                        "id": "509bb1a2e4b08e75e684637e",
                        "name": "Apoteka Luxury Bar & Lounge",
                        "contact": {
                            "phone": "+66906267655",
                            "formattedPhone": "+66 90 626 7655"
                        },
                        "location": {
                            "address": "Sukhumvit 11",
                            "lat": 13.745039372153597,
                            "lng": 100.55628055299246,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 13.745039372153597,
                                    "lng": 100.55628055299246
                                }
                            ],
                            "postalCode": "10110",
                            "cc": "TH",
                            "city": "Phra Nakhon",
                            "state": "Bangkok",
                            "country": "Thailand",
                            "formattedAddress": [
                                "Sukhumvit 11",
                                "พระนคร",
                                "กรุงเทพมหานคร 10110",
                                "ประเทศไทย"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d11e941735",
                                "name": "Cocktail Bar",
                                "pluralName": "Cocktail Bars",
                                "shortName": "Cocktail",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/cocktails_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 27,
                            "usersCount": 700,
                            "checkinsCount": 1124
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a14cdf012f0a90b10879d6e",
                    "createdAt": 1511312880,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "53dca6e0498e6037bfa6adeb",
                        "name": "Milk & Madu Cafe",
                        "contact": {},
                        "location": {
                            "address": "Jl. Raya Pantai Berawa No. 52",
                            "crossStreet": "Canggu",
                            "lat": -8.660876499446369,
                            "lng": 115.14568177575022,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.660876499446369,
                                    "lng": 115.14568177575022
                                }
                            ],
                            "cc": "ID",
                            "city": "Badung",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jl. Raya Pantai Berawa No. 52 (Canggu)",
                                "Badung",
                                "Bali",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d16d941735",
                                "name": "Café",
                                "pluralName": "Cafés",
                                "shortName": "Café",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/cafe_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 74,
                            "usersCount": 750,
                            "checkinsCount": 1386
                        },
                        "url": "http://www.milkandmadu.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "5963b5ddbab2f604cf800490",
                        "name": "Foam-o",
                        "image": {
                            "prefix": "https://irs2.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/Cafes_776a64.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 248
                        },
                        "pickerPosition": {
                            "page": 10,
                            "index": 8
                        },
                        "teaseText": "Check in at cafés to unlock this sticker.",
                        "unlockText": "I’ll have a single-origin, double roast, triple whip, half-caf with sprinkles. Thanks a latte."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a13f832a5a3152cfa5a6a95",
                    "createdAt": 1511258162,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "4d993414c19fb60ccf32c065",
                        "name": "Deus Ex Machina",
                        "contact": {
                            "phone": "+623613683395",
                            "formattedPhone": "+62 361 3683395",
                            "facebook": "138737329478074",
                            "facebookUsername": "DeusBali",
                            "facebookName": "Deus Bali"
                        },
                        "location": {
                            "address": "Jalan Batu Mejan No. 8",
                            "lat": -8.651382199524123,
                            "lng": 115.13335155473051,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.651382199524123,
                                    "lng": 115.13335155473051
                                }
                            ],
                            "postalCode": "80361",
                            "cc": "ID",
                            "city": "Canggu",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jalan Batu Mejan No. 8",
                                "Canggu",
                                "Bali 80361",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "5032833091d4c4b30a586d60",
                                "name": "Motorcycle Shop",
                                "pluralName": "Motorcycle Shops",
                                "shortName": "Motorcycle Shop",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/motorcycle_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 144,
                            "usersCount": 3550,
                            "checkinsCount": 7564
                        },
                        "url": "http://deustemple.com",
                        "menu": {
                            "type": "Products",
                            "label": "Products",
                            "anchor": "View Products",
                            "url": "http://cdn.deuscustoms.com/wp-content/uploads/2013/03/NOVEMBER_REVISED-MENU-1_web.pdf",
                            "mobileUrl": "http://cdn.deuscustoms.com/wp-content/uploads/2013/03/NOVEMBER_REVISED-MENU-1_web.pdf",
                            "externalUrl": "http://cdn.deuscustoms.com/wp-content/uploads/2013/03/NOVEMBER_REVISED-MENU-1_web.pdf"
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "storeId": ""
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a12d280002f4c4c3060ec9e",
                    "createdAt": 1511182976,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "50755502e4b07ef70e9b4608",
                        "name": "Beachwalk XXI",
                        "contact": {
                            "phone": "+623618465621",
                            "formattedPhone": "+62 361 8465621",
                            "twitter": "cinema21"
                        },
                        "location": {
                            "address": "Beachwalk, Lt. 2",
                            "crossStreet": "Jl. Pantai Kuta",
                            "lat": -8.716629556531698,
                            "lng": 115.16986012458801,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.716629556531698,
                                    "lng": 115.16986012458801
                                }
                            ],
                            "postalCode": "80361",
                            "cc": "ID",
                            "city": "Badung",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Beachwalk, Lt. 2 (Jl. Pantai Kuta)",
                                "Badung",
                                "Bali 80361",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d180941735",
                                "name": "Multiplex",
                                "pluralName": "Multiplexes",
                                "shortName": "Cineplex",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/movietheater_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 86,
                            "usersCount": 8430,
                            "checkinsCount": 23051
                        },
                        "url": "http://www.21cineplex.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "53f28c7d4b90933f78c3a69b",
                        "name": "Big Poppy",
                        "image": {
                            "prefix": "https://irs1.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/clapper_7c0fc6.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 37
                        },
                        "pickerPosition": {
                            "page": 1,
                            "index": 13
                        },
                        "teaseText": "Check in at movie theaters to unlock this sticker.",
                        "unlockText": "This sticker’s also available in IMAX 3D but it’s gonna cost you another 50 check-ins. Enjoy the show, and try to ignore those teens sucking face.",
                        "bonusText": "Use at Movie Theaters for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a0f06972a7ab66269996ed8",
                    "createdAt": 1510934167,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "520246f1498e85ea59838dc7",
                        "name": "La Favela",
                        "contact": {
                            "phone": "+62361730010",
                            "formattedPhone": "+62 361 730010",
                            "facebook": "120321401484354",
                            "facebookName": "La Favela Bali"
                        },
                        "location": {
                            "address": "Jl. Laksmana No. 117X (Oberoi)",
                            "lat": -8.683915,
                            "lng": 115.162894,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.683915,
                                    "lng": 115.162894
                                }
                            ],
                            "postalCode": "80361",
                            "cc": "ID",
                            "neighborhood": "Seminyak, Bali",
                            "city": "Badung",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jl. Laksmana No. 117X (Oberoi)",
                                "Badung",
                                "Bali 80361",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1c4941735",
                                "name": "Restaurant",
                                "pluralName": "Restaurants",
                                "shortName": "Restaurant",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/default_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 169,
                            "usersCount": 4164,
                            "checkinsCount": 7258
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a0e88c665cdf819a5a7333f",
                    "createdAt": 1510901958,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "4e7dd12f77c837d97a7d0e5d",
                        "name": "Finn's Beach Club",
                        "contact": {
                            "phone": "+623618446327",
                            "formattedPhone": "+62 361 8446327",
                            "twitter": "finnsbeachclub",
                            "facebook": "202215029814214",
                            "facebookUsername": "finnsbeachclub",
                            "facebookName": "Finns Beach Club"
                        },
                        "location": {
                            "address": "Jalan Pantai Berawa",
                            "lat": -8.66680102726313,
                            "lng": 115.13916866905537,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.66680102726313,
                                    "lng": 115.13916866905537
                                }
                            ],
                            "cc": "ID",
                            "neighborhood": "Berawa",
                            "city": "Canggu",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jalan Pantai Berawa",
                                "Canggu",
                                "Bali",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "52e81612bcbc57f1066b7a0d",
                                "name": "Beach Bar",
                                "pluralName": "Beach Bars",
                                "shortName": "Beach Bar",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/default_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 117,
                            "usersCount": 4251,
                            "checkinsCount": 5575
                        },
                        "url": "http://www.finnsbeachclub.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "203307398"
                        },
                        "storeId": ""
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a0e7f6548b04e58ecf6d207",
                    "createdAt": 1510899557,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "4c876ebce602b1f7d984c77a",
                        "name": "Hog Wild in Bali",
                        "contact": {
                            "phone": "+623618476722",
                            "formattedPhone": "+62 361 8476722",
                            "twitter": "hogwildinbali",
                            "facebook": "741630842599846",
                            "facebookUsername": "hogwildinbali",
                            "facebookName": "Hog Wild in Bali"
                        },
                        "location": {
                            "address": "Jalan Batubelig No. 41",
                            "lat": -8.673221112885999,
                            "lng": 115.14925003051758,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.673221112885999,
                                    "lng": 115.14925003051758
                                }
                            ],
                            "postalCode": "80361",
                            "cc": "ID",
                            "city": "Badung",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jalan Batubelig No. 41",
                                "Badung",
                                "Bali 80361",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1df931735",
                                "name": "BBQ Joint",
                                "pluralName": "BBQ Joints",
                                "shortName": "BBQ",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/bbqalt_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 245,
                            "usersCount": 10180,
                            "checkinsCount": 13650
                        },
                        "url": "http://hogwildinbali.com",
                        "menu": {
                            "type": "Menu",
                            "label": "Menu",
                            "anchor": "View Menu",
                            "url": "http://hogwildinbali.com/menu/food/",
                            "mobileUrl": "http://hogwildinbali.com/menu/food/",
                            "externalUrl": "http://hogwildinbali.com/menu/food/"
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "55563a0d2beaa0fbc4d1dc3d",
                        "name": "T-Bone",
                        "image": {
                            "prefix": "https://irs3.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/cow_476493.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 29
                        },
                        "pickerPosition": {
                            "page": 1,
                            "index": 5
                        },
                        "teaseText": "Check in at steakhouses to unlock this sticker.",
                        "unlockText": "\"Oh my. What are these lines drawn all over me? I sure hope I'm getting fitted for a suit...\"",
                        "bonusText": "Use at steakhouses for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a0d4e24446ea61c6919fe30",
                    "createdAt": 1510821412,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "5613a9f7498e5ccae113c814",
                        "name": "Monggo",
                        "contact": {},
                        "location": {
                            "lat": -8.653722632983415,
                            "lng": 115.13054850244748,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.653722632983415,
                                    "lng": 115.13054850244748
                                }
                            ],
                            "cc": "ID",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1c4941735",
                                "name": "Restaurant",
                                "pluralName": "Restaurants",
                                "shortName": "Restaurant",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/default_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 6,
                            "usersCount": 72,
                            "checkinsCount": 102
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a0a75066661167f5b308e46",
                    "createdAt": 1510634758,
                    "type": "checkin",
                    "private": true,
                    "visibility": "private",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "4d993414c19fb60ccf32c065",
                        "name": "Deus Ex Machina",
                        "contact": {
                            "phone": "+623613683395",
                            "formattedPhone": "+62 361 3683395",
                            "facebook": "138737329478074",
                            "facebookUsername": "DeusBali",
                            "facebookName": "Deus Bali"
                        },
                        "location": {
                            "address": "Jalan Batu Mejan No. 8",
                            "lat": -8.651382199524123,
                            "lng": 115.13335155473051,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.651382199524123,
                                    "lng": 115.13335155473051
                                }
                            ],
                            "postalCode": "80361",
                            "cc": "ID",
                            "city": "Canggu",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jalan Batu Mejan No. 8",
                                "Canggu",
                                "Bali 80361",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "5032833091d4c4b30a586d60",
                                "name": "Motorcycle Shop",
                                "pluralName": "Motorcycle Shops",
                                "shortName": "Motorcycle Shop",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/motorcycle_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 144,
                            "usersCount": 3550,
                            "checkinsCount": 7564
                        },
                        "url": "http://deustemple.com",
                        "menu": {
                            "type": "Products",
                            "label": "Products",
                            "anchor": "View Products",
                            "url": "http://cdn.deuscustoms.com/wp-content/uploads/2013/03/NOVEMBER_REVISED-MENU-1_web.pdf",
                            "mobileUrl": "http://cdn.deuscustoms.com/wp-content/uploads/2013/03/NOVEMBER_REVISED-MENU-1_web.pdf",
                            "externalUrl": "http://cdn.deuscustoms.com/wp-content/uploads/2013/03/NOVEMBER_REVISED-MENU-1_web.pdf"
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "storeId": ""
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Foursquare for iOS",
                        "url": "https://foursquare.com/download/#/iphone"
                    }
                },
                {
                    "id": "5a0901b1780eee5e333627c1",
                    "createdAt": 1510539697,
                    "type": "checkin",
                    "private": true,
                    "visibility": "private",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "574a8a12498ec640838bb80f",
                        "name": "The Roots Barbershop Canggu",
                        "contact": {
                            "phone": "+6287713132013",
                            "formattedPhone": "+62 877-1313-2013",
                            "twitter": "therootsbarber"
                        },
                        "location": {
                            "address": "Jl. Pantai Berawa no. 52, Canggu",
                            "lat": -8.660886,
                            "lng": 115.145622,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.660886,
                                    "lng": 115.145622
                                }
                            ],
                            "postalCode": "80361",
                            "cc": "ID",
                            "city": "Badung",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jl. Pantai Berawa no. 52, Canggu",
                                "Badung",
                                "Bali 80361",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d110951735",
                                "name": "Salon / Barbershop",
                                "pluralName": "Salons / Barbershops",
                                "shortName": "Salon / Barbershop",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/salon_barber_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 5,
                            "usersCount": 34,
                            "checkinsCount": 74
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Foursquare for iOS",
                        "url": "https://foursquare.com/download/#/iphone"
                    }
                },
                {
                    "id": "5a0838b7f193c0352170eba8",
                    "createdAt": 1510488247,
                    "type": "checkin",
                    "private": true,
                    "visibility": "private",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "595ca848029a55239dd9b6cb",
                        "name": "The Chicken Shop",
                        "contact": {},
                        "location": {
                            "lat": -8.660097,
                            "lng": 115.140789,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.660097,
                                    "lng": 115.140789
                                }
                            ],
                            "postalCode": "80361",
                            "cc": "ID",
                            "city": "Badung",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Badung",
                                "Bali 80361",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4d4ae6fc7a7b7dea34424761",
                                "name": "Fried Chicken Joint",
                                "pluralName": "Fried Chicken Joints",
                                "shortName": "Fried Chicken",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/friedchicken_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 0,
                            "usersCount": 11,
                            "checkinsCount": 18
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Foursquare for iOS",
                        "url": "https://foursquare.com/download/#/iphone"
                    }
                },
                {
                    "id": "5a07d12d03369323b4050976",
                    "createdAt": 1510461741,
                    "type": "checkin",
                    "private": true,
                    "visibility": "private",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "5983d9840d8a0f59000497fc",
                        "name": "Two Trees Eatery",
                        "contact": {
                            "phone": "+623619077067",
                            "formattedPhone": "+62 361 9077067",
                            "instagram": "twotreeseatery",
                            "facebook": "204058573436369",
                            "facebookUsername": "twotreeseatery",
                            "facebookName": "Two Trees Eatery"
                        },
                        "location": {
                            "address": "99 jalan pantai berawa,",
                            "lat": -8.661387,
                            "lng": 115.13948,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.661387,
                                    "lng": 115.13948
                                }
                            ],
                            "postalCode": "80361",
                            "cc": "ID",
                            "city": "Canggu",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "99 jalan pantai berawa,",
                                "Canggu",
                                "Bali 80361",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1c4941735",
                                "name": "Restaurant",
                                "pluralName": "Restaurants",
                                "shortName": "Restaurant",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/default_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 11,
                            "usersCount": 32,
                            "checkinsCount": 42
                        },
                        "url": "https://twotreeseatery.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "442785289"
                        },
                        "storeId": ""
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Foursquare for iOS",
                        "url": "https://foursquare.com/download/#/iphone"
                    }
                },
                {
                    "id": "5a0531ac3d479120ad6f2973",
                    "createdAt": 1510289836,
                    "type": "checkin",
                    "private": true,
                    "visibility": "private",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "4e7dd12f77c837d97a7d0e5d",
                        "name": "Finn's Beach Club",
                        "contact": {
                            "phone": "+623618446327",
                            "formattedPhone": "+62 361 8446327",
                            "twitter": "finnsbeachclub",
                            "facebook": "202215029814214",
                            "facebookUsername": "finnsbeachclub",
                            "facebookName": "Finns Beach Club"
                        },
                        "location": {
                            "address": "Jalan Pantai Berawa",
                            "lat": -8.66680102726313,
                            "lng": 115.13916866905537,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.66680102726313,
                                    "lng": 115.13916866905537
                                }
                            ],
                            "cc": "ID",
                            "neighborhood": "Berawa",
                            "city": "Canggu",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jalan Pantai Berawa",
                                "Canggu",
                                "Bali",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "52e81612bcbc57f1066b7a0d",
                                "name": "Beach Bar",
                                "pluralName": "Beach Bars",
                                "shortName": "Beach Bar",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/default_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 117,
                            "usersCount": 4251,
                            "checkinsCount": 5575
                        },
                        "url": "http://www.finnsbeachclub.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "203307398"
                        },
                        "storeId": ""
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Foursquare for iOS",
                        "url": "https://foursquare.com/download/#/iphone"
                    }
                },
                {
                    "id": "5a03b1c24ce0667aeb19df99",
                    "createdAt": 1510191554,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "5494d059498e855d5f5715cf",
                        "name": "Coffee n Oven",
                        "contact": {},
                        "location": {
                            "lat": -8.660760787379107,
                            "lng": 115.143480823714,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.660760787379107,
                                    "lng": 115.143480823714
                                }
                            ],
                            "cc": "ID",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d16a941735",
                                "name": "Bakery",
                                "pluralName": "Bakeries",
                                "shortName": "Bakery",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/bakery_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 38,
                            "usersCount": 199,
                            "checkinsCount": 483
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 1,
                        "groups": [
                            {
                                "type": "friends",
                                "count": 1,
                                "items": [
                                    {
                                        "id": "40181799",
                                        "firstName": "Jose",
                                        "lastName": "Reyes",
                                        "gender": "male",
                                        "relationship": "friend",
                                        "photo": {
                                            "prefix": "https://igx.4sqi.net/img/user/",
                                            "suffix": "/DRD4KIT4W5B5AWAF.jpg"
                                        }
                                    }
                                ]
                            }
                        ],
                        "summary": "Jose Reyes"
                    },
                    "like": false,
                    "sticker": {
                        "id": "52a659800000000000000004",
                        "name": "Sunny Side",
                        "image": {
                            "prefix": "https://irs2.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/brunch_bd54b0.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 77
                        },
                        "pickerPosition": {
                            "page": 3,
                            "index": 5
                        },
                        "teaseText": "Check in at breakfast spots to unlock this sticker.",
                        "unlockText": "Rise and shine! Start your day with eggs, bacon and this sticker. And no you can’t substitute it for the hash browns.",
                        "bonusText": "Use at Breakfast Spots for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 1,
                        "items": [
                            {
                                "id": "5a03b1de4420d874e5c018d1",
                                "createdAt": 1510191582,
                                "source": {
                                    "name": "Swarm for iOS",
                                    "url": "https://www.swarmapp.com"
                                },
                                "prefix": "https://igx.4sqi.net/img/general/",
                                "suffix": "/14017658_3LW_CLoT9ru7y9yYNbKK6Z80d4hShFJ3pz2m3uAbB_A.jpg",
                                "width": 1919,
                                "height": 1440,
                                "user": {
                                    "id": "14017658",
                                    "firstName": "Luc",
                                    "lastName": "Succes",
                                    "gender": "male",
                                    "relationship": "self",
                                    "photo": {
                                        "prefix": "https://igx.4sqi.net/img/user/",
                                        "suffix": "/14017658-ZDOGONBT2KNZSARJ.jpg"
                                    }
                                },
                                "visibility": "public"
                            }
                        ],
                        "layout": {
                            "name": "single"
                        }
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a02e6c84ce0667aeb19e169",
                    "createdAt": 1510139592,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "4d6106a3865a224bf13fb285",
                        "name": "Echo Beach (Pantai Echo)",
                        "contact": {},
                        "location": {
                            "address": "Jalan Pantai Sentosa",
                            "crossStreet": "Canggu",
                            "lat": -8.655106257510093,
                            "lng": 115.1251328401028,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.655106257510093,
                                    "lng": 115.1251328401028
                                }
                            ],
                            "cc": "ID",
                            "city": "Badung",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jalan Pantai Sentosa (Canggu)",
                                "Badung",
                                "Bali",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1e2941735",
                                "name": "Beach",
                                "pluralName": "Beaches",
                                "shortName": "Beach",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/beach_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 55,
                            "usersCount": 4290,
                            "checkinsCount": 7434
                        },
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a012d87ff0306636b79a486",
                    "createdAt": 1510026631,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "574a8a12498ec640838bb80f",
                        "name": "The Roots Barbershop Canggu",
                        "contact": {
                            "phone": "+6287713132013",
                            "formattedPhone": "+62 877-1313-2013",
                            "twitter": "therootsbarber"
                        },
                        "location": {
                            "address": "Jl. Pantai Berawa no. 52, Canggu",
                            "lat": -8.660886,
                            "lng": 115.145622,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.660886,
                                    "lng": 115.145622
                                }
                            ],
                            "postalCode": "80361",
                            "cc": "ID",
                            "city": "Badung",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jl. Pantai Berawa no. 52, Canggu",
                                "Badung",
                                "Bali 80361",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d110951735",
                                "name": "Salon / Barbershop",
                                "pluralName": "Salons / Barbershops",
                                "shortName": "Salon / Barbershop",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/salon_barber_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 5,
                            "usersCount": 34,
                            "checkinsCount": 74
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "54b59d7de50827cdc0f45206",
                        "name": "Clippy",
                        "image": {
                            "prefix": "https://irs1.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/scissors_74b12e.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 81
                        },
                        "pickerPosition": {
                            "page": 3,
                            "index": 9
                        },
                        "teaseText": "Check in at salons to unlock this sticker.",
                        "unlockText": "Is today the day you try something new? Layers? Bangs? Frosted Tips? Mullet? Oh, we dare you! #swarmmullet",
                        "bonusText": "Use at Salons or Barber Shops for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "5a003ebf5315932709f636ff",
                    "createdAt": 1509965503,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "59b4dd3aee71203bd8533538",
                        "name": "La Brisa",
                        "contact": {
                            "instagram": "labrisabali"
                        },
                        "location": {
                            "address": "Jalan Pantai Batu Mejan (Echo Beach)",
                            "lat": -8.654533307543362,
                            "lng": 115.12488765365538,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.654533307543362,
                                    "lng": 115.12488765365538
                                }
                            ],
                            "cc": "ID",
                            "city": "Canggu, North Kuta",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jalan Pantai Batu Mejan (Echo Beach)",
                                "Canggu, North Kuta",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1c4941735",
                                "name": "Restaurant",
                                "pluralName": "Restaurants",
                                "shortName": "Restaurant",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/default_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 13,
                            "usersCount": 275,
                            "checkinsCount": 322
                        },
                        "url": "http://labrisabali.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59fee5fffdb9a76eaa2505bd",
                    "createdAt": 1509877247,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "5470a114498e9bd69eff806d",
                        "name": "Lacalita",
                        "contact": {
                            "phone": "+6282247312217",
                            "formattedPhone": "+62 822-4731-2217"
                        },
                        "location": {
                            "address": "Jl. Pantai Batu Bolong No.68",
                            "lat": -8.655700717593847,
                            "lng": 115.13170859468552,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.655700717593847,
                                    "lng": 115.13170859468552
                                }
                            ],
                            "postalCode": "80361",
                            "cc": "ID",
                            "city": "Canggu",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jl. Pantai Batu Bolong No.68",
                                "Canggu",
                                "Bali 80361",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d11e941735",
                                "name": "Cocktail Bar",
                                "pluralName": "Cocktail Bars",
                                "shortName": "Cocktail",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/cocktails_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 7,
                            "usersCount": 182,
                            "checkinsCount": 233
                        },
                        "url": "http://lacalitabali.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 1,
                        "items": [
                            {
                                "id": "59fee605002f4c7d1150aab0",
                                "createdAt": 1509877253,
                                "source": {
                                    "name": "Swarm for iOS",
                                    "url": "https://www.swarmapp.com"
                                },
                                "prefix": "https://igx.4sqi.net/img/general/",
                                "suffix": "/14017658_glzC60L2to1qUUQjlmysBj8z_0f45FzZaVZy_NfrgUA.jpg",
                                "width": 1440,
                                "height": 1920,
                                "user": {
                                    "id": "14017658",
                                    "firstName": "Luc",
                                    "lastName": "Succes",
                                    "gender": "male",
                                    "relationship": "self",
                                    "photo": {
                                        "prefix": "https://igx.4sqi.net/img/user/",
                                        "suffix": "/14017658-ZDOGONBT2KNZSARJ.jpg"
                                    }
                                },
                                "visibility": "public"
                            }
                        ],
                        "layout": {
                            "name": "single"
                        }
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59feaaf39deb7d53fc985737",
                    "createdAt": 1509862131,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "createdBy": {
                        "id": "9787790",
                        "firstName": "Liviu",
                        "lastName": "Chis",
                        "gender": "male",
                        "relationship": "friend",
                        "photo": {
                            "prefix": "https://igx.4sqi.net/img/user/",
                            "suffix": "/2Z2Q3XBVHKOP0INX.jpg"
                        }
                    },
                    "venue": {
                        "id": "4d8f32563bfef04d3ceda886",
                        "name": "Single Fin",
                        "contact": {
                            "phone": "+62361769941",
                            "formattedPhone": "+62 361 769941",
                            "facebook": "140336452699195",
                            "facebookUsername": "singlefinbali",
                            "facebookName": "Single Fin ~ Bali"
                        },
                        "location": {
                            "address": "Jalan Mamo",
                            "crossStreet": "Labuan Sait",
                            "lat": -8.814981380574077,
                            "lng": 115.0888441772578,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.814981380574077,
                                    "lng": 115.0888441772578
                                }
                            ],
                            "cc": "ID",
                            "neighborhood": "Uluwatu",
                            "city": "Badung",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jalan Mamo (Labuan Sait)",
                                "Badung",
                                "Bali",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "52e81612bcbc57f1066b7a0d",
                                "name": "Beach Bar",
                                "pluralName": "Beach Bars",
                                "shortName": "Beach Bar",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/default_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 160,
                            "usersCount": 4494,
                            "checkinsCount": 6024
                        },
                        "url": "http://singlefinbali.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for Android",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59fea1ffb6eedb16ae9b8165",
                    "createdAt": 1509859839,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "createdBy": {
                        "id": "9787790",
                        "firstName": "Liviu",
                        "lastName": "Chis",
                        "gender": "male",
                        "relationship": "friend",
                        "photo": {
                            "prefix": "https://igx.4sqi.net/img/user/",
                            "suffix": "/2Z2Q3XBVHKOP0INX.jpg"
                        }
                    },
                    "venue": {
                        "id": "5958f7fb35d3fc2b1ff0aacd",
                        "name": "La Baracca",
                        "contact": {},
                        "location": {
                            "lat": -8.816336,
                            "lng": 115.096139,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.816336,
                                    "lng": 115.096139
                                }
                            ],
                            "postalCode": "80361",
                            "cc": "ID",
                            "city": "Badung",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Badung",
                                "Bali 80361",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d110941735",
                                "name": "Italian Restaurant",
                                "pluralName": "Italian Restaurants",
                                "shortName": "Italian",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/italian_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 2,
                            "usersCount": 38,
                            "checkinsCount": 44
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for Android",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59fddcdf7564f7283e9dbfc4",
                    "createdAt": 1509809375,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "4c1894b6fe5a76b0543b0215",
                        "name": "Padang-Padang Beach",
                        "contact": {},
                        "location": {
                            "address": "Jalan Labuan Sait, Pecatu Village",
                            "crossStreet": "Jalan Padang-Padang",
                            "lat": -8.811711709135908,
                            "lng": 115.10371685028076,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.811711709135908,
                                    "lng": 115.10371685028076
                                }
                            ],
                            "postalCode": "80364",
                            "cc": "ID",
                            "city": "Uluwatu",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jalan Labuan Sait, Pecatu Village (Jalan Padang-Padang)",
                                "Uluwatu",
                                "Bali 80364",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1e2941735",
                                "name": "Beach",
                                "pluralName": "Beaches",
                                "shortName": "Beach",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/beach_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 222,
                            "usersCount": 11745,
                            "checkinsCount": 13808
                        },
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59fd8d63a22db744123de8f2",
                    "createdAt": 1509789027,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "4d8f32563bfef04d3ceda886",
                        "name": "Single Fin",
                        "contact": {
                            "phone": "+62361769941",
                            "formattedPhone": "+62 361 769941",
                            "facebook": "140336452699195",
                            "facebookUsername": "singlefinbali",
                            "facebookName": "Single Fin ~ Bali"
                        },
                        "location": {
                            "address": "Jalan Mamo",
                            "crossStreet": "Labuan Sait",
                            "lat": -8.814981380574077,
                            "lng": 115.0888441772578,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.814981380574077,
                                    "lng": 115.0888441772578
                                }
                            ],
                            "cc": "ID",
                            "neighborhood": "Uluwatu",
                            "city": "Badung",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jalan Mamo (Labuan Sait)",
                                "Badung",
                                "Bali",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "52e81612bcbc57f1066b7a0d",
                                "name": "Beach Bar",
                                "pluralName": "Beach Bars",
                                "shortName": "Beach Bar",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/default_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 160,
                            "usersCount": 4494,
                            "checkinsCount": 6024
                        },
                        "url": "http://singlefinbali.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59fb77274c9be617a59f05b7",
                    "createdAt": 1509652263,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "4be5d60e2468c9281ea20043",
                        "name": "Deejay Club",
                        "contact": {},
                        "location": {
                            "address": "Jalan Kartika Plaza",
                            "crossStreet": "Kuta",
                            "lat": -8.727942505089134,
                            "lng": 115.17157894892871,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.727942505089134,
                                    "lng": 115.17157894892871
                                }
                            ],
                            "postalCode": "80361",
                            "cc": "ID",
                            "city": "Badung",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jalan Kartika Plaza (Kuta)",
                                "Badung",
                                "Bali 80361",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d11f941735",
                                "name": "Nightclub",
                                "pluralName": "Nightclubs",
                                "shortName": "Nightclub",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/nightclub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 29,
                            "usersCount": 877,
                            "checkinsCount": 2527
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59fb40c90f013c20b93f170f",
                    "createdAt": 1509638345,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "520246f1498e85ea59838dc7",
                        "name": "La Favela",
                        "contact": {
                            "phone": "+62361730010",
                            "formattedPhone": "+62 361 730010",
                            "facebook": "120321401484354",
                            "facebookName": "La Favela Bali"
                        },
                        "location": {
                            "address": "Jl. Laksmana No. 117X (Oberoi)",
                            "lat": -8.683915,
                            "lng": 115.162894,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.683915,
                                    "lng": 115.162894
                                }
                            ],
                            "postalCode": "80361",
                            "cc": "ID",
                            "neighborhood": "Seminyak, Bali",
                            "city": "Badung",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jl. Laksmana No. 117X (Oberoi)",
                                "Badung",
                                "Bali 80361",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1c4941735",
                                "name": "Restaurant",
                                "pluralName": "Restaurants",
                                "shortName": "Restaurant",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/default_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 169,
                            "usersCount": 4164,
                            "checkinsCount": 7258
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59faa58e67a9fe29ac955858",
                    "createdAt": 1509598606,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "5494d059498e855d5f5715cf",
                        "name": "Coffee n Oven",
                        "contact": {},
                        "location": {
                            "lat": -8.660760787379107,
                            "lng": 115.143480823714,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.660760787379107,
                                    "lng": 115.143480823714
                                }
                            ],
                            "cc": "ID",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d16a941735",
                                "name": "Bakery",
                                "pluralName": "Bakeries",
                                "shortName": "Bakery",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/bakery_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 38,
                            "usersCount": 199,
                            "checkinsCount": 483
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59f468b5446ea663facd45b2",
                    "createdAt": 1509189813,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "createdBy": {
                        "id": "9787790",
                        "firstName": "Liviu",
                        "lastName": "Chis",
                        "gender": "male",
                        "relationship": "friend",
                        "photo": {
                            "prefix": "https://igx.4sqi.net/img/user/",
                            "suffix": "/2Z2Q3XBVHKOP0INX.jpg"
                        }
                    },
                    "venue": {
                        "id": "50d93f4519a928c3576aa778",
                        "name": "Heli Lounge Bar",
                        "contact": {
                            "facebook": "403186673089001",
                            "facebookUsername": "Heliloungebar",
                            "facebookName": "Heli Lounge Bar"
                        },
                        "location": {
                            "address": "Level 34, Menara KH",
                            "crossStreet": "Jalan Sultan Ismail",
                            "lat": 3.151160805273113,
                            "lng": 101.70985947910278,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 3.151160805273113,
                                    "lng": 101.70985947910278
                                }
                            ],
                            "cc": "MY",
                            "city": "Kuala Lumpur",
                            "state": "Kuala Lumpur",
                            "country": "Malaysia",
                            "formattedAddress": [
                                "Level 34, Menara KH (Jalan Sultan Ismail)",
                                "Kuala Lumpur, Kuala Lumpur",
                                "Malaysia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d121941735",
                                "name": "Lounge",
                                "pluralName": "Lounges",
                                "shortName": "Lounge",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/default_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 149,
                            "usersCount": 7721,
                            "checkinsCount": 9609
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for Android",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59f24733898bdc79941c0fd4",
                    "createdAt": 1509050163,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "createdBy": {
                        "id": "9787790",
                        "firstName": "Liviu",
                        "lastName": "Chis",
                        "gender": "male",
                        "relationship": "friend",
                        "photo": {
                            "prefix": "https://igx.4sqi.net/img/user/",
                            "suffix": "/2Z2Q3XBVHKOP0INX.jpg"
                        }
                    },
                    "venue": {
                        "id": "5666abf0498efd47d7b47517",
                        "name": "Zion",
                        "contact": {
                            "phone": "+60320726887",
                            "formattedPhone": "+60 3-2072 6887",
                            "twitter": "zionclubkl",
                            "facebook": "1517656805192905",
                            "facebookUsername": "theZionKL",
                            "facebookName": "Zion Club KL"
                        },
                        "location": {
                            "address": "31, Jalan Changkat",
                            "lat": 3.1477473009026227,
                            "lng": 101.70749790912241,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 3.1477473009026227,
                                    "lng": 101.70749790912241
                                }
                            ],
                            "postalCode": "50200",
                            "cc": "MY",
                            "city": "Kuala Lumpur",
                            "state": "Kuala Lumpur",
                            "country": "Malaysia",
                            "formattedAddress": [
                                "31, Jalan Changkat",
                                "50200 Kuala Lumpur, Kuala Lumpur",
                                "Malaysia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d11f941735",
                                "name": "Nightclub",
                                "pluralName": "Nightclubs",
                                "shortName": "Nightclub",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/nightclub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 13,
                            "usersCount": 2785,
                            "checkinsCount": 5468
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for Android",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59f0c6e5851de56b2dd7ba09",
                    "createdAt": 1508951781,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "55cb7811498e3444a9b6f3eb",
                        "name": "Zouk Club Kuala Lumpur",
                        "contact": {
                            "phone": "+60321103888",
                            "formattedPhone": "+60 3-2110 3888",
                            "twitter": "zoukclubkl",
                            "facebook": "20870926514",
                            "facebookUsername": "zoukclubkl",
                            "facebookName": "Zouk Club KL"
                        },
                        "location": {
                            "address": "436 Jalan Tun Razak",
                            "lat": 3.1416994152782793,
                            "lng": 101.7213999593813,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 3.1416994152782793,
                                    "lng": 101.7213999593813
                                }
                            ],
                            "postalCode": "50400",
                            "cc": "MY",
                            "city": "Kuala Lumpur",
                            "state": "Kuala Lumpur",
                            "country": "Malaysia",
                            "formattedAddress": [
                                "436 Jalan Tun Razak",
                                "50400 Kuala Lumpur, Kuala Lumpur",
                                "Malaysia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d11f941735",
                                "name": "Nightclub",
                                "pluralName": "Nightclubs",
                                "shortName": "Nightclub",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/nightclub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 84,
                            "usersCount": 14014,
                            "checkinsCount": 34474
                        },
                        "url": "http://www.zoukclub.com.my",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59f0724a4ce06672a3eaae8d",
                    "createdAt": 1508930122,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "createdBy": {
                        "id": "9787790",
                        "firstName": "Liviu",
                        "lastName": "Chis",
                        "gender": "male",
                        "relationship": "friend",
                        "photo": {
                            "prefix": "https://igx.4sqi.net/img/user/",
                            "suffix": "/2Z2Q3XBVHKOP0INX.jpg"
                        }
                    },
                    "venue": {
                        "id": "4d12d125d6e06a31efd77461",
                        "name": "Kuala Lumpur International Airport 2 (KLIA2)",
                        "contact": {
                            "phone": "+60387777000",
                            "formattedPhone": "+60 3-8777 7000",
                            "twitter": "my_airports"
                        },
                        "location": {
                            "address": "Terminal Building",
                            "crossStreet": "Jalan KLIA 2/1",
                            "lat": 2.74388331917132,
                            "lng": 101.68581265783389,
                            "postalCode": "64000",
                            "cc": "MY",
                            "neighborhood": "Sepang",
                            "city": "Sepang",
                            "state": "Selangor",
                            "country": "Malaysia",
                            "formattedAddress": [
                                "Terminal Building (Jalan KLIA 2/1)",
                                "64000 Sepang, Selangor",
                                "Malaysia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1eb931735",
                                "name": "Airport Terminal",
                                "pluralName": "Airport Terminals",
                                "shortName": "Terminal",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/airport_gate_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 858,
                            "usersCount": 173969,
                            "checkinsCount": 626144
                        },
                        "url": "http://www.klia.com.my",
                        "venueRatingBlacklisted": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 1,
                        "groups": [
                            {
                                "type": "friends",
                                "count": 1,
                                "items": [
                                    {
                                        "id": "38389448",
                                        "firstName": "Leandro",
                                        "lastName": "Quezada",
                                        "gender": "male",
                                        "relationship": "friend",
                                        "photo": {
                                            "prefix": "https://igx.4sqi.net/img/user/",
                                            "suffix": "/TZU2CG4X1MGKKPF1.jpg"
                                        }
                                    }
                                ]
                            }
                        ],
                        "summary": "Leandro Quezada"
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for Android",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59f02763207955554d00cece",
                    "createdAt": 1508910947,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "4b6cf0daf964a5202f5f2ce3",
                        "name": "Ngurah Rai International Airport (DPS) (Bandar Udara Internasional Ngurah Rai)",
                        "contact": {
                            "phone": "+62361751011",
                            "formattedPhone": "+62 361 751011",
                            "twitter": "baliairport",
                            "facebook": "193051787548631",
                            "facebookUsername": "dfsairportbalingurahrai",
                            "facebookName": "DFS"
                        },
                        "location": {
                            "address": "Jalan Airport Ngurah Rai",
                            "crossStreet": "Tuban",
                            "lat": -8.746885892775962,
                            "lng": 115.1670829414063,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.746885892775962,
                                    "lng": 115.1670829414063
                                }
                            ],
                            "postalCode": "80361",
                            "cc": "ID",
                            "city": "Badung",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jalan Airport Ngurah Rai (Tuban)",
                                "Badung",
                                "Bali 80361",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1ed931735",
                                "name": "Airport",
                                "pluralName": "Airports",
                                "shortName": "Airport",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/airport_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 2666,
                            "usersCount": 226289,
                            "checkinsCount": 587044
                        },
                        "url": "http://www.baliairport.com",
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "66065195"
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59eec0416bdee672edcb313d",
                    "createdAt": 1508819009,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "574a8a12498ec640838bb80f",
                        "name": "The Roots Barbershop Canggu",
                        "contact": {
                            "phone": "+6287713132013",
                            "formattedPhone": "+62 877-1313-2013",
                            "twitter": "therootsbarber"
                        },
                        "location": {
                            "address": "Jl. Pantai Berawa no. 52, Canggu",
                            "lat": -8.660886,
                            "lng": 115.145622,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.660886,
                                    "lng": 115.145622
                                }
                            ],
                            "postalCode": "80361",
                            "cc": "ID",
                            "city": "Badung",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jl. Pantai Berawa no. 52, Canggu",
                                "Badung",
                                "Bali 80361",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d110951735",
                                "name": "Salon / Barbershop",
                                "pluralName": "Salons / Barbershops",
                                "shortName": "Salon / Barbershop",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/salon_barber_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 5,
                            "usersCount": 34,
                            "checkinsCount": 74
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59eeae47bb2a476ba2ef20e4",
                    "createdAt": 1508814407,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "5983d9840d8a0f59000497fc",
                        "name": "Two Trees Eatery",
                        "contact": {
                            "phone": "+623619077067",
                            "formattedPhone": "+62 361 9077067",
                            "instagram": "twotreeseatery",
                            "facebook": "204058573436369",
                            "facebookUsername": "twotreeseatery",
                            "facebookName": "Two Trees Eatery"
                        },
                        "location": {
                            "address": "99 jalan pantai berawa,",
                            "lat": -8.661387,
                            "lng": 115.13948,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.661387,
                                    "lng": 115.13948
                                }
                            ],
                            "postalCode": "80361",
                            "cc": "ID",
                            "city": "Canggu",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "99 jalan pantai berawa,",
                                "Canggu",
                                "Bali 80361",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1c4941735",
                                "name": "Restaurant",
                                "pluralName": "Restaurants",
                                "shortName": "Restaurant",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/default_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 11,
                            "usersCount": 32,
                            "checkinsCount": 42
                        },
                        "url": "https://twotreeseatery.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "442785289"
                        },
                        "storeId": ""
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59ec3f61002f4c7c01158459",
                    "createdAt": 1508654945,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "createdBy": {
                        "id": "9787790",
                        "firstName": "Liviu",
                        "lastName": "Chis",
                        "gender": "male",
                        "relationship": "friend",
                        "photo": {
                            "prefix": "https://igx.4sqi.net/img/user/",
                            "suffix": "/2Z2Q3XBVHKOP0INX.jpg"
                        }
                    },
                    "venue": {
                        "id": "4e4f367ed164978659c7ea7d",
                        "name": "Bar & Cafe Bali Lembongan",
                        "contact": {},
                        "location": {
                            "lat": -8.682711317875222,
                            "lng": 115.43328754258968,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.682711317875222,
                                    "lng": 115.43328754258968
                                }
                            ],
                            "cc": "ID",
                            "city": "Kecamatan Nusapenida",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Kecamatan Nusapenida",
                                "Bali",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d14e941735",
                                "name": "American Restaurant",
                                "pluralName": "American Restaurants",
                                "shortName": "American",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/default_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 13,
                            "usersCount": 293,
                            "checkinsCount": 335
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for Android",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59eb150b9e3b657661a07a7a",
                    "createdAt": 1508578571,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "createdBy": {
                        "id": "9787790",
                        "firstName": "Liviu",
                        "lastName": "Chis",
                        "gender": "male",
                        "relationship": "friend",
                        "photo": {
                            "prefix": "https://igx.4sqi.net/img/user/",
                            "suffix": "/2Z2Q3XBVHKOP0INX.jpg"
                        }
                    },
                    "venue": {
                        "id": "5909dea175a6ea4feda4f9a7",
                        "name": "Warung Oishii Sari Merta",
                        "contact": {},
                        "location": {
                            "address": "Jl Sunset",
                            "lat": -8.685772,
                            "lng": 115.43034,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.685772,
                                    "lng": 115.43034
                                }
                            ],
                            "postalCode": "80771",
                            "cc": "ID",
                            "city": "Nusa Lembongan",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jl Sunset",
                                "Nusa Lembongan",
                                "Bali 80771",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d142941735",
                                "name": "Asian Restaurant",
                                "pluralName": "Asian Restaurants",
                                "shortName": "Asian",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/asian_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 1,
                            "usersCount": 39,
                            "checkinsCount": 46
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 1,
                        "groups": [
                            {
                                "type": "friends",
                                "count": 1,
                                "items": [
                                    {
                                        "id": "119641",
                                        "firstName": "Rahul",
                                        "lastName": "Sen",
                                        "gender": "male",
                                        "relationship": "friend",
                                        "photo": {
                                            "prefix": "https://igx.4sqi.net/img/user/",
                                            "suffix": "/4IJ5SAV3X3WHBQEN.jpg"
                                        }
                                    }
                                ]
                            }
                        ],
                        "summary": "Rahul Sen"
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for Android",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59e8c660ff1902279c076512",
                    "createdAt": 1508427360,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "55ffe529498efeb0557c539b",
                        "name": "Pretty Poison",
                        "contact": {},
                        "location": {
                            "address": "Jalan Subak Canggu",
                            "lat": -8.652698647560218,
                            "lng": 115.13788450422635,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.652698647560218,
                                    "lng": 115.13788450422635
                                }
                            ],
                            "cc": "ID",
                            "city": "Badung",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jalan Subak Canggu",
                                "Badung",
                                "Bali",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d11e941735",
                                "name": "Cocktail Bar",
                                "pluralName": "Cocktail Bars",
                                "shortName": "Cocktail",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/cocktails_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 14,
                            "usersCount": 386,
                            "checkinsCount": 637
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59e75ad52bf9a92d3fa6839d",
                    "createdAt": 1508334293,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "4d6106a3865a224bf13fb285",
                        "name": "Echo Beach (Pantai Echo)",
                        "contact": {},
                        "location": {
                            "address": "Jalan Pantai Sentosa",
                            "crossStreet": "Canggu",
                            "lat": -8.655106257510093,
                            "lng": 115.1251328401028,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.655106257510093,
                                    "lng": 115.1251328401028
                                }
                            ],
                            "cc": "ID",
                            "city": "Badung",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jalan Pantai Sentosa (Canggu)",
                                "Badung",
                                "Bali",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1e2941735",
                                "name": "Beach",
                                "pluralName": "Beaches",
                                "shortName": "Beach",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/beach_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 55,
                            "usersCount": 4290,
                            "checkinsCount": 7434
                        },
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59e7114579f6c71f807400b5",
                    "createdAt": 1508315461,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "createdBy": {
                        "id": "9787790",
                        "firstName": "Liviu",
                        "lastName": "Chis",
                        "gender": "male",
                        "relationship": "friend",
                        "photo": {
                            "prefix": "https://igx.4sqi.net/img/user/",
                            "suffix": "/2Z2Q3XBVHKOP0INX.jpg"
                        }
                    },
                    "venue": {
                        "id": "574fd82f498ee997a10fee2a",
                        "name": "Finns Beach Club Berawa",
                        "contact": {},
                        "location": {
                            "lat": -8.666848,
                            "lng": 115.139399,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.666848,
                                    "lng": 115.139399
                                }
                            ],
                            "cc": "ID",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Indonesia"
                            ]
                        },
                        "categories": [],
                        "verified": false,
                        "stats": {
                            "tipCount": 0,
                            "usersCount": 26,
                            "checkinsCount": 34
                        },
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for Android",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59dedb14c97f287530966e80",
                    "createdAt": 1507777300,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "574a8a12498ec640838bb80f",
                        "name": "The Roots Barbershop Canggu",
                        "contact": {
                            "phone": "+6287713132013",
                            "formattedPhone": "+62 877-1313-2013",
                            "twitter": "therootsbarber"
                        },
                        "location": {
                            "address": "Jl. Pantai Berawa no. 52, Canggu",
                            "lat": -8.660886,
                            "lng": 115.145622,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.660886,
                                    "lng": 115.145622
                                }
                            ],
                            "postalCode": "80361",
                            "cc": "ID",
                            "city": "Badung",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jl. Pantai Berawa no. 52, Canggu",
                                "Badung",
                                "Bali 80361",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d110951735",
                                "name": "Salon / Barbershop",
                                "pluralName": "Salons / Barbershops",
                                "shortName": "Salon / Barbershop",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/salon_barber_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 5,
                            "usersCount": 34,
                            "checkinsCount": 74
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59dd7032aa6c950efc1e1b33",
                    "createdAt": 1507684402,
                    "type": "checkin",
                    "private": true,
                    "visibility": "private",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "522f038a11d257b2a0710b33",
                        "name": "Canggu Club Fitness Centre",
                        "contact": {
                            "phone": "+623618483939",
                            "formattedPhone": "+62 361 8483939"
                        },
                        "location": {
                            "address": "Jl. Pantai Berawa, Banjar Tegal Gundul",
                            "crossStreet": "Canggu",
                            "lat": -8.662153091028097,
                            "lng": 115.14782179359851,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.662153091028097,
                                    "lng": 115.14782179359851
                                }
                            ],
                            "postalCode": "80361",
                            "cc": "ID",
                            "city": "Badung",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jl. Pantai Berawa, Banjar Tegal Gundul (Canggu)",
                                "Badung",
                                "Bali 80361",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d176941735",
                                "name": "Gym",
                                "pluralName": "Gyms",
                                "shortName": "Gym",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/gym_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 3,
                            "usersCount": 123,
                            "checkinsCount": 965
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Foursquare for iOS",
                        "url": "https://foursquare.com/download/#/iphone"
                    }
                },
                {
                    "id": "59dcb23365211f2b4bdfbf4f",
                    "createdAt": 1507635763,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "4badb40df964a52035643be3",
                        "name": "Canggu Club",
                        "contact": {
                            "phone": "+623618483939",
                            "formattedPhone": "+62 361 8483939",
                            "twitter": "cangguclub"
                        },
                        "location": {
                            "address": "Jalan Pantai Berawa",
                            "crossStreet": "Banjar Tegal Gundul",
                            "lat": -8.662271285165888,
                            "lng": 115.14778034459196,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.662271285165888,
                                    "lng": 115.14778034459196
                                }
                            ],
                            "postalCode": "80361",
                            "cc": "ID",
                            "neighborhood": "Canggu",
                            "city": "Badung",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jalan Pantai Berawa (Banjar Tegal Gundul)",
                                "Badung",
                                "Bali 80361",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "52e81612bcbc57f1066b7a2e",
                                "name": "Sports Club",
                                "pluralName": "Sports Clubs",
                                "shortName": "Sports Club",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/sports_outdoors_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 21,
                            "usersCount": 992,
                            "checkinsCount": 2471
                        },
                        "url": "http://www.cangguclub.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59dc6653d4cc984a22f55c75",
                    "createdAt": 1507616339,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "522f038a11d257b2a0710b33",
                        "name": "Canggu Club Fitness Centre",
                        "contact": {
                            "phone": "+623618483939",
                            "formattedPhone": "+62 361 8483939"
                        },
                        "location": {
                            "address": "Jl. Pantai Berawa, Banjar Tegal Gundul",
                            "crossStreet": "Canggu",
                            "lat": -8.662153091028097,
                            "lng": 115.14782179359851,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.662153091028097,
                                    "lng": 115.14782179359851
                                }
                            ],
                            "postalCode": "80361",
                            "cc": "ID",
                            "city": "Badung",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jl. Pantai Berawa, Banjar Tegal Gundul (Canggu)",
                                "Badung",
                                "Bali 80361",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d176941735",
                                "name": "Gym",
                                "pluralName": "Gyms",
                                "shortName": "Gym",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/gym_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 3,
                            "usersCount": 123,
                            "checkinsCount": 965
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59d9f47732b61d02b454da3b",
                    "createdAt": 1507456119,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "58fad4c5b6eedb7719c0973f",
                        "name": "Banh Mi & Beans",
                        "contact": {
                            "facebook": "308873252864504",
                            "facebookUsername": "banhmiandbeans",
                            "facebookName": "Banh Mi & Beans"
                        },
                        "location": {
                            "address": "Jalan Raya Semat 30",
                            "crossStreet": "Gg. Jalak 20",
                            "lat": -8.654018375572447,
                            "lng": 115.142216821323,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.654018375572447,
                                    "lng": 115.142216821323
                                }
                            ],
                            "cc": "ID",
                            "city": "Canggu",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jalan Raya Semat 30 (Gg. Jalak 20)",
                                "Canggu",
                                "Bali",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1c5941735",
                                "name": "Sandwich Place",
                                "pluralName": "Sandwich Places",
                                "shortName": "Sandwiches",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/deli_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 5,
                            "usersCount": 18,
                            "checkinsCount": 25
                        },
                        "url": "http://banhmiandbeans.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "411331258"
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "52a65980000000000000001f",
                        "name": "Earl of Sandwich",
                        "image": {
                            "prefix": "https://irs0.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/sub_55cff8.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 79
                        },
                        "pickerPosition": {
                            "page": 3,
                            "index": 7
                        },
                        "teaseText": "Check in at sandwich places to unlock this sticker.",
                        "unlockText": "Please, your highness, relish in this sandwich sticker. It really cuts the mustard. And that's no bologna!",
                        "bonusText": "Use at Sandwich Shops for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59d75b322f97ec17db340189",
                    "createdAt": 1507285810,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "542e2008498e08f48d420d52",
                        "name": "Dojo Bali",
                        "contact": {
                            "phone": "+6281238166144",
                            "formattedPhone": "+62 812-3816-6144",
                            "facebook": "1611409015771063",
                            "facebookUsername": "dojobali",
                            "facebookName": "Dojo Bali"
                        },
                        "location": {
                            "address": "Jalan Batu Mejan 88",
                            "lat": -8.653501070698514,
                            "lng": 115.12676028870366,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.653501070698514,
                                    "lng": 115.12676028870366
                                }
                            ],
                            "cc": "ID",
                            "city": "Canggu",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jalan Batu Mejan 88",
                                "Canggu",
                                "Bali",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d174941735",
                                "name": "Coworking Space",
                                "pluralName": "Coworking Spaces",
                                "shortName": "Coworking Space",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/office_coworkingspace_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 14,
                            "usersCount": 230,
                            "checkinsCount": 940
                        },
                        "url": "http://www.dojobali.org",
                        "venueRatingBlacklisted": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59d4c01565cdf87150b67d77",
                    "createdAt": 1507115029,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "51b99d4c498e6c14f85f48f1",
                        "name": "Old Man's",
                        "contact": {
                            "phone": "+623618469159",
                            "formattedPhone": "+62 361 8469159",
                            "facebook": "453325781414046",
                            "facebookUsername": "oldmansbali",
                            "facebookName": "Old Man's"
                        },
                        "location": {
                            "address": "Jalan Batu Bolong",
                            "lat": -8.659138304529552,
                            "lng": 115.13069963267942,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.659138304529552,
                                    "lng": 115.13069963267942
                                }
                            ],
                            "postalCode": "80361",
                            "cc": "ID",
                            "neighborhood": "Canggu",
                            "city": "Badung",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jalan Batu Bolong",
                                "Badung",
                                "Bali 80361",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d117941735",
                                "name": "Beer Garden",
                                "pluralName": "Beer Gardens",
                                "shortName": "Beer Garden",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/beergarden_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 78,
                            "usersCount": 2694,
                            "checkinsCount": 5176
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59d446b5bcbf7a1f71b7594d",
                    "createdAt": 1507083957,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "542e2008498e08f48d420d52",
                        "name": "Dojo Bali",
                        "contact": {
                            "phone": "+6281238166144",
                            "formattedPhone": "+62 812-3816-6144",
                            "facebook": "1611409015771063",
                            "facebookUsername": "dojobali",
                            "facebookName": "Dojo Bali"
                        },
                        "location": {
                            "address": "Jalan Batu Mejan 88",
                            "lat": -8.653501070698514,
                            "lng": 115.12676028870366,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.653501070698514,
                                    "lng": 115.12676028870366
                                }
                            ],
                            "cc": "ID",
                            "city": "Canggu",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jalan Batu Mejan 88",
                                "Canggu",
                                "Bali",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d174941735",
                                "name": "Coworking Space",
                                "pluralName": "Coworking Spaces",
                                "shortName": "Coworking Space",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/office_coworkingspace_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 14,
                            "usersCount": 230,
                            "checkinsCount": 940
                        },
                        "url": "http://www.dojobali.org",
                        "venueRatingBlacklisted": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59d435822e26802e7f6e5cce",
                    "createdAt": 1507079554,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "50f8c129e4b03d5962f4e80f",
                        "name": "Hungry Bird Coffee",
                        "contact": {
                            "phone": "+628986191008",
                            "formattedPhone": "+62 898-6191-008"
                        },
                        "location": {
                            "address": "Jl. Pantai Berawa No. 33",
                            "lat": -8.655997290386406,
                            "lng": 115.14110329002847,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.655997290386406,
                                    "lng": 115.14110329002847
                                }
                            ],
                            "postalCode": "80361",
                            "cc": "ID",
                            "city": "Badung",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jl. Pantai Berawa No. 33",
                                "Badung",
                                "Bali 80361",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1e0931735",
                                "name": "Coffee Shop",
                                "pluralName": "Coffee Shops",
                                "shortName": "Coffee Shop",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 72,
                            "usersCount": 543,
                            "checkinsCount": 1409
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "47587359"
                        },
                        "storeId": ""
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "52a659800000000000000006",
                        "name": "Joey Beans",
                        "image": {
                            "prefix": "https://irs0.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/coffee_f4b66b.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 8
                        },
                        "pickerPosition": {
                            "page": 0,
                            "index": 8
                        },
                        "teaseText": "Check in at coffee shops to unlock this sticker.",
                        "unlockText": "Who cares if your flat white just cost ya $10 bucks. You're getting free wi-fi! Free, extremely slow wi-fi. Drink it up.",
                        "bonusText": "Use at Coffee Shops for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59d39957ca18ea2fe2079b6b",
                    "createdAt": 1507039575,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "55ffe529498efeb0557c539b",
                        "name": "Pretty Poison",
                        "contact": {},
                        "location": {
                            "address": "Jalan Subak Canggu",
                            "lat": -8.652698647560218,
                            "lng": 115.13788450422635,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.652698647560218,
                                    "lng": 115.13788450422635
                                }
                            ],
                            "cc": "ID",
                            "city": "Badung",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jalan Subak Canggu",
                                "Badung",
                                "Bali",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d11e941735",
                                "name": "Cocktail Bar",
                                "pluralName": "Cocktail Bars",
                                "shortName": "Cocktail",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/cocktails_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 14,
                            "usersCount": 386,
                            "checkinsCount": 637
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59d311bc67a9fe5e49b36021",
                    "createdAt": 1507004860,
                    "type": "checkin",
                    "timeZoneOffset": 480,
                    "venue": {
                        "id": "51b99d4c498e6c14f85f48f1",
                        "name": "Old Man's",
                        "contact": {
                            "phone": "+623618469159",
                            "formattedPhone": "+62 361 8469159",
                            "facebook": "453325781414046",
                            "facebookUsername": "oldmansbali",
                            "facebookName": "Old Man's"
                        },
                        "location": {
                            "address": "Jalan Batu Bolong",
                            "lat": -8.659138304529552,
                            "lng": 115.13069963267942,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": -8.659138304529552,
                                    "lng": 115.13069963267942
                                }
                            ],
                            "postalCode": "80361",
                            "cc": "ID",
                            "neighborhood": "Canggu",
                            "city": "Badung",
                            "state": "Bali",
                            "country": "Indonesia",
                            "formattedAddress": [
                                "Jalan Batu Bolong",
                                "Badung",
                                "Bali 80361",
                                "Indonesia"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d117941735",
                                "name": "Beer Garden",
                                "pluralName": "Beer Gardens",
                                "shortName": "Beer Garden",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/beergarden_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 78,
                            "usersCount": 2694,
                            "checkinsCount": 5176
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59d2181595d9864f86077aa4",
                    "createdAt": 1506940949,
                    "type": "checkin",
                    "entities": [],
                    "shout": "Delayed flight - next stop Bali 😊",
                    "timeZoneOffset": 180,
                    "venue": {
                        "id": "5136d9f6e4b052e6acffa193",
                        "name": "Hamad International Airport (DOH) (مطار حمد الدولي)",
                        "contact": {
                            "phone": "+97444679888",
                            "formattedPhone": "+974 4467 9888",
                            "twitter": "hiaqatar",
                            "facebook": "222878281188793",
                            "facebookUsername": "HIAQatar",
                            "facebookName": "Hamad International Airport"
                        },
                        "location": {
                            "address": "Qatar",
                            "crossStreet": "Airport rd",
                            "lat": 25.260696541016696,
                            "lng": 51.61216658018172,
                            "cc": "QA",
                            "city": "Doha",
                            "state": "Baladīyat ad Dawḩah",
                            "country": "Qatar",
                            "formattedAddress": [
                                "Qatar (Airport rd)",
                                "الدوحة",
                                "قطر"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1ed931735",
                                "name": "Airport",
                                "pluralName": "Airports",
                                "shortName": "Airport",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/airport_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 994,
                            "usersCount": 76366,
                            "checkinsCount": 181680
                        },
                        "url": "http://dohahamadairport.com",
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "sticker": {
                        "id": "54b59bd0e50851c96b4e8c8a",
                        "name": "Jetsetter",
                        "image": {
                            "prefix": "https://irs2.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/airplane_cff7ac.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 10
                        },
                        "pickerPosition": {
                            "page": 0,
                            "index": 10
                        },
                        "teaseText": "Check in at airports to unlock this sticker.",
                        "unlockText": "$50 for bags? $25 for legroom? $30 for a pillow?! At least this sticker is free. Now turn off your phone before it takes down this plane.",
                        "bonusText": "Use at Airports for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59d051c475eee44aa38a0b6e",
                    "createdAt": 1506824644,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "57c98c00498ede2ae6ad9755",
                        "name": "Arlo SoHo",
                        "contact": {
                            "phone": "2123427000",
                            "formattedPhone": "(212) 342-7000",
                            "twitter": "arlohotels"
                        },
                        "location": {
                            "address": "231 Hudson St",
                            "lat": 40.724387023154726,
                            "lng": -74.00796015938302,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.724387023154726,
                                    "lng": -74.00796015938302
                                }
                            ],
                            "postalCode": "10013",
                            "cc": "US",
                            "city": "New York",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "231 Hudson St",
                                "New York, NY 10013"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1fa931735",
                                "name": "Hotel",
                                "pluralName": "Hotels",
                                "shortName": "Hotel",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/travel/hotel_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 15,
                            "usersCount": 1370,
                            "checkinsCount": 2659
                        },
                        "url": "http://www.arlohotels.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "417203865"
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59cf1cb1646e38437e32d778",
                    "createdAt": 1506745521,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "createdBy": {
                        "id": "43915299",
                        "firstName": "Kate",
                        "lastName": "Findlay",
                        "gender": "female",
                        "relationship": "friend",
                        "photo": {
                            "prefix": "https://igx.4sqi.net/img/user/",
                            "suffix": "/JBM32XXYVDSRWJYP.jpg"
                        }
                    },
                    "venue": {
                        "id": "5029935fe4b0be6a06a0383e",
                        "name": "Dream Baby",
                        "contact": {
                            "phone": "2125298463",
                            "formattedPhone": "(212) 529-8463",
                            "twitter": "dreambabybar",
                            "facebook": "259566944160562",
                            "facebookUsername": "DreamBabyAvenueB",
                            "facebookName": "Dream Baby"
                        },
                        "location": {
                            "address": "162-164 Avenue B",
                            "crossStreet": "at E 10th St",
                            "lat": 40.72705143835091,
                            "lng": -73.97979021725706,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.72705143835091,
                                    "lng": -73.97979021725706
                                }
                            ],
                            "postalCode": "10009",
                            "cc": "US",
                            "city": "New York",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "162-164 Avenue B (at E 10th St)",
                                "New York, NY 10009"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d11e941735",
                                "name": "Cocktail Bar",
                                "pluralName": "Cocktail Bars",
                                "shortName": "Cocktail",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/cocktails_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 46,
                            "usersCount": 4226,
                            "checkinsCount": 7155
                        },
                        "url": "http://dreambabybar.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "79481336"
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59bad2fa78782c4de69f6db4",
                    "createdAt": 1505415930,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "59a973319deb7d7216f3df34",
                        "name": "Irving Farm Coffee Roasters",
                        "contact": {
                            "phone": "6463987146",
                            "formattedPhone": "(646) 398-7146"
                        },
                        "location": {
                            "address": "78 W 3rd St",
                            "crossStreet": "Thompson",
                            "lat": 40.72963372769418,
                            "lng": -73.99865128740952,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.72963372769418,
                                    "lng": -73.99865128740952
                                }
                            ],
                            "postalCode": "10012",
                            "cc": "US",
                            "city": "New York",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "78 W 3rd St (Thompson)",
                                "New York, NY 10012"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1e0931735",
                                "name": "Coffee Shop",
                                "pluralName": "Coffee Shops",
                                "shortName": "Coffee Shop",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 11,
                            "usersCount": 446,
                            "checkinsCount": 642
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59ba0029b1ec130c5c2b3944",
                    "createdAt": 1505361961,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "3fd66200f964a5200fe41ee3",
                        "name": "Pianos",
                        "contact": {
                            "phone": "2125053733",
                            "formattedPhone": "(212) 505-3733",
                            "twitter": "pianosnyc",
                            "facebook": "43108655697",
                            "facebookUsername": "pianosnyc",
                            "facebookName": "PIANOS"
                        },
                        "location": {
                            "address": "158 Ludlow St",
                            "crossStreet": "at Stanton St",
                            "lat": 40.72111085158351,
                            "lng": -73.98786106009348,
                            "postalCode": "10002",
                            "cc": "US",
                            "city": "New York",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "158 Ludlow St (at Stanton St)",
                                "New York, NY 10002"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1e9931735",
                                "name": "Rock Club",
                                "pluralName": "Rock Clubs",
                                "shortName": "Rock Club",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/musicvenue_rockclub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 263,
                            "usersCount": 24402,
                            "checkinsCount": 45331
                        },
                        "url": "http://pianosnyc.com",
                        "hasMenu": true,
                        "menu": {
                            "type": "Prices",
                            "label": "Prices",
                            "anchor": "View Prices",
                            "url": "https://foursquare.com/v/pianos/3fd66200f964a5200fe41ee3/menu",
                            "mobileUrl": "https://foursquare.com/v/3fd66200f964a5200fe41ee3/device_menu"
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "70051153"
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59b94d947269fe79c278b0ae",
                    "createdAt": 1505316244,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "44dc96e4f964a520b0361fe3",
                        "name": "Think Coffee",
                        "contact": {
                            "phone": "2122286226",
                            "formattedPhone": "(212) 228-6226",
                            "twitter": "thinkcoffeenyc",
                            "facebook": "269293536484453",
                            "facebookUsername": "thinkcoffeenyc",
                            "facebookName": "Think Coffee"
                        },
                        "location": {
                            "address": "248 Mercer St",
                            "crossStreet": "btwn W 3rd & W 4th St",
                            "lat": 40.7283482548441,
                            "lng": -73.99525076150893,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.7283482548441,
                                    "lng": -73.99525076150893
                                }
                            ],
                            "postalCode": "10012",
                            "cc": "US",
                            "city": "New York",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "248 Mercer St (btwn W 3rd & W 4th St)",
                                "New York, NY 10012"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1e0931735",
                                "name": "Coffee Shop",
                                "pluralName": "Coffee Shops",
                                "shortName": "Coffee Shop",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 326,
                            "usersCount": 13244,
                            "checkinsCount": 36335
                        },
                        "url": "http://thinkcoffee.com",
                        "hasMenu": true,
                        "menu": {
                            "type": "Menu",
                            "label": "Menu",
                            "anchor": "View Menu",
                            "url": "https://foursquare.com/v/think-coffee/44dc96e4f964a520b0361fe3/menu",
                            "mobileUrl": "https://foursquare.com/v/44dc96e4f964a520b0361fe3/device_menu"
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 1,
                        "groups": [
                            {
                                "type": "friends",
                                "count": 1,
                                "items": [
                                    {
                                        "id": "13737453",
                                        "firstName": "Alex",
                                        "lastName": "Wawroski",
                                        "gender": "male",
                                        "relationship": "friend",
                                        "photo": {
                                            "prefix": "https://igx.4sqi.net/img/user/",
                                            "suffix": "/HDSP5ENWWNT4K135.jpg"
                                        }
                                    }
                                ]
                            }
                        ],
                        "summary": "Alex Wawroski"
                    },
                    "like": false,
                    "sticker": {
                        "id": "52a659800000000000000006",
                        "name": "Joey Beans",
                        "image": {
                            "prefix": "https://irs0.4sqi.net/img/sticker/",
                            "sizes": [
                                60,
                                94,
                                150,
                                300
                            ],
                            "name": "/coffee_f4b66b.png"
                        },
                        "stickerType": "unlockable",
                        "group": {
                            "name": "collectible",
                            "index": 8
                        },
                        "pickerPosition": {
                            "page": 0,
                            "index": 8
                        },
                        "teaseText": "Check in at coffee shops to unlock this sticker.",
                        "unlockText": "Who cares if your flat white just cost ya $10 bucks. You're getting free wi-fi! Free, extremely slow wi-fi. Drink it up.",
                        "bonusText": "Use at Coffee Shops for a bonus.",
                        "points": 2,
                        "bonusStatus": "Use once per week. Recharges Sunday at midnight."
                    },
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59b85dc38c812a39c5e5b7d8",
                    "createdAt": 1505254851,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "56c73a4a498ea736d7388245",
                        "name": "Ludlow Coffee Supply",
                        "contact": {
                            "phone": "2127777465",
                            "formattedPhone": "(212) 777-7465",
                            "facebook": "1743525479212616",
                            "facebookUsername": "ludlowcoffeesupply",
                            "facebookName": "Ludlow Coffee Supply"
                        },
                        "location": {
                            "address": "176 Ludlow St",
                            "crossStreet": "East Houston",
                            "lat": 40.721711037947095,
                            "lng": -73.98752102186039,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.721711037947095,
                                    "lng": -73.98752102186039
                                }
                            ],
                            "postalCode": "10002",
                            "cc": "US",
                            "city": "New York",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "176 Ludlow St (East Houston)",
                                "New York, NY 10002"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d1e0931735",
                                "name": "Coffee Shop",
                                "pluralName": "Coffee Shops",
                                "shortName": "Coffee Shop",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/coffeeshop_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 40,
                            "usersCount": 1319,
                            "checkinsCount": 2484
                        },
                        "url": "http://www.ludlowcoffeesupply.com",
                        "hasMenu": true,
                        "menu": {
                            "type": "Menu",
                            "label": "Menu",
                            "anchor": "View Menu",
                            "url": "https://foursquare.com/v/ludlow-coffee-supply/56c73a4a498ea736d7388245/menu",
                            "mobileUrl": "https://foursquare.com/v/56c73a4a498ea736d7388245/device_menu"
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "159429924"
                        },
                        "storeId": ""
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59b853e8d4cc982bc05c361b",
                    "createdAt": 1505252328,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "4da097216fd254815487629b",
                        "name": "First Choice Barbershop",
                        "contact": {},
                        "location": {
                            "address": "156 Stanton St",
                            "crossStreet": "at Suffolk St",
                            "lat": 40.72044795108111,
                            "lng": -73.98510902068456,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.72044795108111,
                                    "lng": -73.98510902068456
                                }
                            ],
                            "postalCode": "10002",
                            "cc": "US",
                            "city": "New York",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "156 Stanton St (at Suffolk St)",
                                "New York, NY 10002"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d110951735",
                                "name": "Salon / Barbershop",
                                "pluralName": "Salons / Barbershops",
                                "shortName": "Salon / Barbershop",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/shops/salon_barber_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 6,
                            "usersCount": 66,
                            "checkinsCount": 375
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59b5dee3ad910e5548c6ac72",
                    "createdAt": 1505091299,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "5188501e498e65952a9a6a9e",
                        "name": "Ludlow Studios",
                        "contact": {
                            "phone": "6465989846",
                            "formattedPhone": "(646) 598-9846",
                            "instagram": "ludlow_studios"
                        },
                        "location": {
                            "address": "40 Ludlow St",
                            "crossStreet": "Grand Street",
                            "lat": 40.716250940041455,
                            "lng": -73.99027818899935,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.716250940041455,
                                    "lng": -73.99027818899935
                                }
                            ],
                            "postalCode": "10002",
                            "cc": "US",
                            "city": "New York",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "40 Ludlow St (Grand Street)",
                                "New York, NY 10002"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d173941735",
                                "name": "Auditorium",
                                "pluralName": "Auditoriums",
                                "shortName": "Auditorium",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/auditorium_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 3,
                            "usersCount": 439,
                            "checkinsCount": 556
                        },
                        "url": "http://www.ludlowstudios.com",
                        "venueRatingBlacklisted": true,
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "83742136"
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59b4e59666f3cd1763ad1406",
                    "createdAt": 1505027478,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "4ac6bb7ff964a52014b620e3",
                        "name": "The Woods",
                        "contact": {
                            "phone": "7187824955",
                            "formattedPhone": "(718) 782-4955",
                            "twitter": "thewoodsbk",
                            "facebook": "107368579428597",
                            "facebookUsername": "thewoodsbk",
                            "facebookName": "The Woods"
                        },
                        "location": {
                            "address": "48 S 4th St",
                            "crossStreet": "btwn Kent & Wythe Ave",
                            "lat": 40.71276262869612,
                            "lng": -73.96636730051527,
                            "postalCode": "11249",
                            "cc": "US",
                            "city": "Brooklyn",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "48 S 4th St (btwn Kent & Wythe Ave)",
                                "Brooklyn, NY 11249"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d116941735",
                                "name": "Bar",
                                "pluralName": "Bars",
                                "shortName": "Bar",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 199,
                            "usersCount": 14471,
                            "checkinsCount": 26570
                        },
                        "url": "http://www.thewoodsbk.com",
                        "hasMenu": true,
                        "menu": {
                            "type": "Menu",
                            "label": "Menu",
                            "anchor": "View Menu",
                            "url": "https://foursquare.com/v/the-woods/4ac6bb7ff964a52014b620e3/menu",
                            "mobileUrl": "https://foursquare.com/v/4ac6bb7ff964a52014b620e3/device_menu"
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "88605909"
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59b38e6383e380675e7e4a6e",
                    "createdAt": 1504939619,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "581128ee38fa253edc2ae3f7",
                        "name": "Blink East Village",
                        "contact": {
                            "phone": "2122023300",
                            "formattedPhone": "(212) 202-3300",
                            "twitter": "blinkfitness"
                        },
                        "location": {
                            "address": "98 Avenue A",
                            "lat": 40.72563055906304,
                            "lng": -73.9835899442335,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.72563055906304,
                                    "lng": -73.9835899442335
                                }
                            ],
                            "postalCode": "10009",
                            "cc": "US",
                            "city": "New York",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "98 Avenue A",
                                "New York, NY 10009"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d176941735",
                                "name": "Gym",
                                "pluralName": "Gyms",
                                "shortName": "Gym",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/gym_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 4,
                            "usersCount": 257,
                            "checkinsCount": 2895
                        },
                        "url": "http://blinkfitness.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "storeId": "653"
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59b22755cad1b628c7d58357",
                    "createdAt": 1504847701,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "5119a4cfe4b0a044992e3230",
                        "name": "LOT45",
                        "contact": {
                            "phone": "3475059155",
                            "formattedPhone": "(347) 505-9155"
                        },
                        "location": {
                            "address": "411 Troutman St",
                            "crossStreet": "at Wyckoff Ave",
                            "lat": 40.70696632006549,
                            "lng": -73.92262107488088,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 40.70696632006549,
                                    "lng": -73.92262107488088
                                }
                            ],
                            "postalCode": "11237",
                            "cc": "US",
                            "city": "Brooklyn",
                            "state": "NY",
                            "country": "United States",
                            "formattedAddress": [
                                "411 Troutman St (at Wyckoff Ave)",
                                "Brooklyn, NY 11237"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d11e941735",
                                "name": "Cocktail Bar",
                                "pluralName": "Cocktail Bars",
                                "shortName": "Cocktail",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/cocktails_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 21,
                            "usersCount": 2164,
                            "checkinsCount": 3040
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "48060211"
                        },
                        "storeId": ""
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59ace4c2b9ac3878ea19ecf3",
                    "createdAt": 1504502978,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "578e6e8f498e1eaca1845dac",
                        "name": "Azure On The Park",
                        "contact": {
                            "phone": "4048734334",
                            "formattedPhone": "(404) 873-4334"
                        },
                        "location": {
                            "address": "1020 Piedmont Ave NE",
                            "crossStreet": "10th St",
                            "lat": 33.781815,
                            "lng": -84.38143,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 33.781815,
                                    "lng": -84.38143
                                }
                            ],
                            "postalCode": "30309",
                            "cc": "US",
                            "city": "Atlanta",
                            "state": "GA",
                            "country": "United States",
                            "formattedAddress": [
                                "1020 Piedmont Ave NE (10th St)",
                                "Atlanta, GA 30309"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4d954b06a243a5684965b473",
                                "name": "Residential Building (Apartment / Condo)",
                                "pluralName": "Residential Buildings (Apartments / Condos)",
                                "shortName": "Residential",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/apartment_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 0,
                            "usersCount": 37,
                            "checkinsCount": 63
                        },
                        "url": "http://azuremidtown.com",
                        "venueRatingBlacklisted": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59ab83eb112c6c293d6d9cf1",
                    "createdAt": 1504412651,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "4b5a7f69f964a5204fc828e3",
                        "name": "Havana Club",
                        "contact": {
                            "phone": "4049414847",
                            "formattedPhone": "(404) 941-4847",
                            "twitter": "havana_clubatl"
                        },
                        "location": {
                            "address": "3112 Piedmont Rd NE",
                            "lat": 33.84102405429794,
                            "lng": -84.37042641264355,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 33.84102405429794,
                                    "lng": -84.37042641264355
                                }
                            ],
                            "postalCode": "30305",
                            "cc": "US",
                            "city": "Atlanta",
                            "state": "GA",
                            "country": "United States",
                            "formattedAddress": [
                                "3112 Piedmont Rd NE",
                                "Atlanta, GA 30305"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d11f941735",
                                "name": "Nightclub",
                                "pluralName": "Nightclubs",
                                "shortName": "Nightclub",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/nightclub_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 54,
                            "usersCount": 4108,
                            "checkinsCount": 9071
                        },
                        "url": "http://www.havanaclubatl.com",
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "36455695"
                        },
                        "storeId": ""
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59ab48ab780eee34c58e49b0",
                    "createdAt": 1504397483,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "578e6e8f498e1eaca1845dac",
                        "name": "Azure On The Park",
                        "contact": {
                            "phone": "4048734334",
                            "formattedPhone": "(404) 873-4334"
                        },
                        "location": {
                            "address": "1020 Piedmont Ave NE",
                            "crossStreet": "10th St",
                            "lat": 33.781815,
                            "lng": -84.38143,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 33.781815,
                                    "lng": -84.38143
                                }
                            ],
                            "postalCode": "30309",
                            "cc": "US",
                            "city": "Atlanta",
                            "state": "GA",
                            "country": "United States",
                            "formattedAddress": [
                                "1020 Piedmont Ave NE (10th St)",
                                "Atlanta, GA 30309"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4d954b06a243a5684965b473",
                                "name": "Residential Building (Apartment / Condo)",
                                "pluralName": "Residential Buildings (Apartments / Condos)",
                                "shortName": "Residential",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/building/apartment_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": false,
                        "stats": {
                            "tipCount": 0,
                            "usersCount": 37,
                            "checkinsCount": 63
                        },
                        "url": "http://azuremidtown.com",
                        "venueRatingBlacklisted": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        }
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                },
                {
                    "id": "59aaf7afc876c83f052b1864",
                    "createdAt": 1504376751,
                    "type": "checkin",
                    "timeZoneOffset": -240,
                    "venue": {
                        "id": "4a4bd8fbf964a520ccac1fe3",
                        "name": "The Flying Biscuit Cafe",
                        "contact": {
                            "phone": "4048748887",
                            "formattedPhone": "(404) 874-8887",
                            "twitter": "flyingbiscuit93",
                            "facebook": "120745667939605",
                            "facebookUsername": "FlyingBiscuitMidtown",
                            "facebookName": "The Flying Biscuit Cafe - Midtown"
                        },
                        "location": {
                            "address": "1001 Piedmont Ave NE",
                            "crossStreet": "10th St",
                            "lat": 33.781896158256416,
                            "lng": -84.38028663396835,
                            "labeledLatLngs": [
                                {
                                    "label": "display",
                                    "lat": 33.781896158256416,
                                    "lng": -84.38028663396835
                                }
                            ],
                            "postalCode": "30309",
                            "cc": "US",
                            "city": "Atlanta",
                            "state": "GA",
                            "country": "United States",
                            "formattedAddress": [
                                "1001 Piedmont Ave NE (10th St)",
                                "Atlanta, GA 30309"
                            ]
                        },
                        "categories": [
                            {
                                "id": "4bf58dd8d48988d143941735",
                                "name": "Breakfast Spot",
                                "pluralName": "Breakfast Spots",
                                "shortName": "Breakfast",
                                "icon": {
                                    "prefix": "https://ss3.4sqi.net/img/categories_v2/food/breakfast_",
                                    "suffix": ".png"
                                },
                                "primary": true
                            }
                        ],
                        "verified": true,
                        "stats": {
                            "tipCount": 173,
                            "usersCount": 7916,
                            "checkinsCount": 11636
                        },
                        "url": "http://www.flyingbiscuit.com",
                        "hasMenu": true,
                        "delivery": {
                            "id": "259168",
                            "url": "https://www.grubhub.com/restaurant/the-flying-biscuit-cafe---midtown-1001-piedmont-ave-ne-atlanta/259168?affiliate=1131&utm_source=foursquare-affiliate-network&utm_medium=affiliate&utm_campaign=1131&utm_content=259168",
                            "provider": {
                                "name": "grubhub",
                                "icon": {
                                    "prefix": "https://igx.4sqi.net/img/general/cap/",
                                    "sizes": [
                                        40,
                                        50
                                    ],
                                    "name": "/delivery_provider_grubhub_20180129.png"
                                }
                            }
                        },
                        "menu": {
                            "type": "Menu",
                            "label": "Menu",
                            "anchor": "View Menu",
                            "url": "https://foursquare.com/v/the-flying-biscuit-cafe/4a4bd8fbf964a520ccac1fe3/menu",
                            "mobileUrl": "https://foursquare.com/v/4a4bd8fbf964a520ccac1fe3/device_menu"
                        },
                        "allowMenuUrlEdit": true,
                        "beenHere": {
                            "lastCheckinExpiredAt": 0
                        },
                        "venuePage": {
                            "id": "90490634"
                        },
                        "storeId": "Midtown"
                    },
                    "likes": {
                        "count": 0,
                        "groups": []
                    },
                    "like": false,
                    "isMayor": false,
                    "photos": {
                        "count": 0,
                        "items": []
                    },
                    "posts": {
                        "count": 0,
                        "textCount": 0
                    },
                    "comments": {
                        "count": 0
                    },
                    "source": {
                        "name": "Swarm for iOS",
                        "url": "https://www.swarmapp.com"
                    }
                }
            ]
        }

        data.items.forEach((item, i) => item.index = i + 1)

        resolve(data)
    })
}

export const getCitiesByCountry = async () => {
    const checkins = await getCheckins()
    const countries = {}

    for (let checkIn of checkins.items) {
        const location = checkIn.venue.location
        const countryName = location.country
        const country = countries[countryName] || { name: countryName, cities: {} }

        const city = location.city
        if(country.cities[city]) {
            country.cities[city].items.push(checkIn)
        } else {
            country.cities[city] = {
                name: city,
                items: [checkIn]
            }
        }

        countries[countryName] = country
    }

    return countries
}