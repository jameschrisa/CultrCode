import { 
  MicroCommunity, 
  CommunityCategory, 
  CommunitySize, 
  Platform,
  AgeRange,
  Gender,
  NorthAmericanRegion 
} from '@/types/segments'

export const allMicroCommunities: MicroCommunity[] = [
  {
    "id": "mc-dark-academia",
    "name": "Dark Academia",
    "description": "A visual community centered around Dark Academia aesthetic, focusing on style, design, and creative expression",
    "category": "aesthetic",
    "size": "massive",
    "platform": "youtube",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "dark academia",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 55,
        "25-35": 30,
        "35-45": 12,
        "45-55": 3,
        "over-55": 0
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "southeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 9,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 11
    },
    "segments": [
      "QS1",
      "EB3",
      "EB2"
    ],
    "trends": [
      {
        "id": "trend-dark-academia",
        "name": "Dark Academia Trend",
        "description": "Current trending topic within the Dark Academia community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 85,
        "linkedHashtags": [
          "#darkacademia"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-dark-academia",
        "handle": "@darkacademia",
        "platform": "youtube",
        "followers": 72073,
        "tier": "micro",
        "engagement": 3.9,
        "niche": [
          "dark academia"
        ],
        "authenticity": 95,
        "collaboration": {
          "averageRate": 720,
          "responseRate": 73,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 87,
          "audienceMatch": 92
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "fashion-accessories",
        "penetration": 76,
        "sentiment": 89,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 77,
            "duration": "6 months",
            "reach": 39305
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 2.1,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 21,
        "oneYear": 59,
        "twoYear": 119,
        "confidence": 0.85
      }
    }
  },
  {
    "id": "mc-cottagecore",
    "name": "Cottagecore",
    "description": "A visual community centered around Cottagecore aesthetic, focusing on style, design, and creative expression",
    "category": "aesthetic",
    "size": "established",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "cottagecore",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 55,
        "25-35": 30,
        "35-45": 12,
        "45-55": 3,
        "over-55": 0
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "mountain-west-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 8,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 25
    },
    "segments": [
      "LE1",
      "LE3",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-cottagecore",
        "name": "Cottagecore Trend",
        "description": "Current trending topic within the Cottagecore community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 83,
        "linkedHashtags": [
          "#cottagecore"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-cottagecore",
        "handle": "@cottagecore",
        "platform": "discord",
        "followers": 231573,
        "tier": "macro",
        "engagement": 9.2,
        "niche": [
          "cottagecore"
        ],
        "authenticity": 81,
        "collaboration": {
          "averageRate": 2315,
          "responseRate": 64,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 92,
          "audienceMatch": 84
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "fashion-accessories",
        "penetration": 75,
        "sentiment": 77,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 81,
            "duration": "6 months",
            "reach": 100395
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 7.3,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 44,
        "oneYear": 28,
        "twoYear": 40,
        "confidence": 0.98
      }
    }
  },
  {
    "id": "mc-y2k-revival",
    "name": "Y2K Revival",
    "description": "A visual community centered around Y2K Revival aesthetic, focusing on style, design, and creative expression",
    "category": "aesthetic",
    "size": "emerging",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "y2k revival",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 55,
        "25-35": 30,
        "35-45": 12,
        "45-55": 3,
        "over-55": 0
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "mountain-west-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 18,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 17
    },
    "segments": [
      "LE1",
      "QS2",
      "QS1",
      "EB3"
    ],
    "trends": [
      {
        "id": "trend-y2k-revival",
        "name": "Y2K Revival Trend",
        "description": "Current trending topic within the Y2K Revival community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 76,
        "linkedHashtags": [
          "#y2krevival"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-y2k-revival",
        "handle": "@y2krevival",
        "platform": "reddit",
        "followers": 226939,
        "tier": "macro",
        "engagement": 4.2,
        "niche": [
          "y2k revival"
        ],
        "authenticity": 83,
        "collaboration": {
          "averageRate": 2269,
          "responseRate": 65,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 83,
          "audienceMatch": 94
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "fashion-accessories",
        "penetration": 58,
        "sentiment": 82,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 89,
            "duration": "6 months",
            "reach": 33175
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 15.6,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 32,
        "oneYear": 72,
        "twoYear": 69,
        "confidence": 1.00
      }
    }
  },
  {
    "id": "mc-minimalist-living",
    "name": "Minimalist Living",
    "description": "A visual community centered around Minimalist Living aesthetic, focusing on style, design, and creative expression",
    "category": "aesthetic",
    "size": "growing",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "minimalist living",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 55,
        "25-35": 30,
        "35-45": 12,
        "45-55": 3,
        "over-55": 0
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "western-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 16,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 16
    },
    "segments": [
      "LE1",
      "EB2"
    ],
    "trends": [
      {
        "id": "trend-minimalist-living",
        "name": "Minimalist Living Trend",
        "description": "Current trending topic within the Minimalist Living community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 80,
        "linkedHashtags": [
          "#minimalistliving"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-minimalist-living",
        "handle": "@minimalistliving",
        "platform": "discord",
        "followers": 501628,
        "tier": "macro",
        "engagement": 11.6,
        "niche": [
          "minimalist living"
        ],
        "authenticity": 92,
        "collaboration": {
          "averageRate": 5016,
          "responseRate": 66,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 82,
          "audienceMatch": 91
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "fashion-accessories",
        "penetration": 86,
        "sentiment": 85,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 75,
            "duration": "6 months",
            "reach": 92818
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 5.7,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 20,
        "oneYear": 40,
        "twoYear": 94,
        "confidence": 1.00
      }
    }
  },
  {
    "id": "mc-maximalist-decor",
    "name": "Maximalist Decor",
    "description": "A visual community centered around Maximalist Decor aesthetic, focusing on style, design, and creative expression",
    "category": "aesthetic",
    "size": "growing",
    "platform": "youtube",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "maximalist decor",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 55,
        "25-35": 30,
        "35-45": 12,
        "45-55": 3,
        "over-55": 0
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 15,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 46
    },
    "segments": [
      "QS1",
      "QS2",
      "LE2",
      "LE3"
    ],
    "trends": [
      {
        "id": "trend-maximalist-decor",
        "name": "Maximalist Decor Trend",
        "description": "Current trending topic within the Maximalist Decor community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 87,
        "linkedHashtags": [
          "#maximalistdecor"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-maximalist-decor",
        "handle": "@maximalistdecor",
        "platform": "youtube",
        "followers": 490837,
        "tier": "macro",
        "engagement": 9.8,
        "niche": [
          "maximalist decor"
        ],
        "authenticity": 92,
        "collaboration": {
          "averageRate": 4908,
          "responseRate": 81,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 81,
          "audienceMatch": 91
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "fashion-accessories",
        "penetration": 89,
        "sentiment": 86,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 85,
            "duration": "6 months",
            "reach": 95053
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 11.6,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 36,
        "oneYear": 44,
        "twoYear": 62,
        "confidence": 0.79
      }
    }
  },
  {
    "id": "mc-vintage-fashion",
    "name": "Vintage Fashion",
    "description": "A visual community centered around Vintage Fashion aesthetic, focusing on style, design, and creative expression",
    "category": "aesthetic",
    "size": "growing",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "vintage fashion",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 55,
        "25-35": 30,
        "35-45": 12,
        "45-55": 3,
        "over-55": 0
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "eastern-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 10,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 44
    },
    "segments": [
      "EB1",
      "EB3"
    ],
    "trends": [
      {
        "id": "trend-vintage-fashion",
        "name": "Vintage Fashion Trend",
        "description": "Current trending topic within the Vintage Fashion community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 87,
        "linkedHashtags": [
          "#vintagefashion"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-vintage-fashion",
        "handle": "@vintagefashion",
        "platform": "reddit",
        "followers": 466082,
        "tier": "macro",
        "engagement": 2.7,
        "niche": [
          "vintage fashion"
        ],
        "authenticity": 99,
        "collaboration": {
          "averageRate": 4660,
          "responseRate": 80,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 83,
          "audienceMatch": 80
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "fashion-accessories",
        "penetration": 69,
        "sentiment": 94,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 86,
            "duration": "6 months",
            "reach": 21970
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 16.7,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 26,
        "oneYear": 54,
        "twoYear": 59,
        "confidence": 0.87
      }
    }
  },
  {
    "id": "mc-art-nouveau",
    "name": "Art Nouveau",
    "description": "A visual community centered around Art Nouveau aesthetic, focusing on style, design, and creative expression",
    "category": "aesthetic",
    "size": "established",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "art nouveau",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 55,
        "25-35": 30,
        "35-45": 12,
        "45-55": 3,
        "over-55": 0
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 16,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 42
    },
    "segments": [
      "LE1",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-art-nouveau",
        "name": "Art Nouveau Trend",
        "description": "Current trending topic within the Art Nouveau community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 89,
        "linkedHashtags": [
          "#artnouveau"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-art-nouveau",
        "handle": "@artnouveau",
        "platform": "reddit",
        "followers": 114294,
        "tier": "macro",
        "engagement": 9.0,
        "niche": [
          "art nouveau"
        ],
        "authenticity": 99,
        "collaboration": {
          "averageRate": 1142,
          "responseRate": 64,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 94,
          "audienceMatch": 91
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "fashion-accessories",
        "penetration": 71,
        "sentiment": 92,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 94,
            "duration": "6 months",
            "reach": 21947
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 4.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 43,
        "oneYear": 36,
        "twoYear": 95,
        "confidence": 0.75
      }
    }
  },
  {
    "id": "mc-boho-chic",
    "name": "Boho Chic",
    "description": "A visual community centered around Boho Chic aesthetic, focusing on style, design, and creative expression",
    "category": "aesthetic",
    "size": "growing",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "boho chic",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 55,
        "25-35": 30,
        "35-45": 12,
        "45-55": 3,
        "over-55": 0
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 8,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 28
    },
    "segments": [
      "QS1",
      "LE3"
    ],
    "trends": [
      {
        "id": "trend-boho-chic",
        "name": "Boho Chic Trend",
        "description": "Current trending topic within the Boho Chic community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 74,
        "linkedHashtags": [
          "#bohochic"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-boho-chic",
        "handle": "@bohochic",
        "platform": "instagram",
        "followers": 296392,
        "tier": "macro",
        "engagement": 4.2,
        "niche": [
          "boho chic"
        ],
        "authenticity": 90,
        "collaboration": {
          "averageRate": 2963,
          "responseRate": 81,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 80,
          "audienceMatch": 85
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "fashion-accessories",
        "penetration": 61,
        "sentiment": 88,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 91,
            "duration": "6 months",
            "reach": 102140
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 3.7,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 33,
        "oneYear": 54,
        "twoYear": 64,
        "confidence": 0.76
      }
    }
  },
  {
    "id": "mc-industrial-design",
    "name": "Industrial Design",
    "description": "A visual community centered around Industrial Design aesthetic, focusing on style, design, and creative expression",
    "category": "aesthetic",
    "size": "established",
    "platform": "tiktok",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "industrial design",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 55,
        "25-35": 30,
        "35-45": 12,
        "45-55": 3,
        "over-55": 0
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 6,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 10
    },
    "segments": [
      "QS3",
      "QS1",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-industrial-design",
        "name": "Industrial Design Trend",
        "description": "Current trending topic within the Industrial Design community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 92,
        "linkedHashtags": [
          "#industrialdesign"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-industrial-design",
        "handle": "@industrialdesign",
        "platform": "tiktok",
        "followers": 48516,
        "tier": "micro",
        "engagement": 10.8,
        "niche": [
          "industrial design"
        ],
        "authenticity": 86,
        "collaboration": {
          "averageRate": 485,
          "responseRate": 69,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 89,
          "audienceMatch": 87
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "fashion-accessories",
        "penetration": 86,
        "sentiment": 82,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 79,
            "duration": "6 months",
            "reach": 101238
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 16.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 15,
        "oneYear": 64,
        "twoYear": 79,
        "confidence": 0.96
      }
    }
  },
  {
    "id": "mc-scandinavian-style",
    "name": "Scandinavian Style",
    "description": "A visual community centered around Scandinavian Style aesthetic, focusing on style, design, and creative expression",
    "category": "aesthetic",
    "size": "growing",
    "platform": "youtube",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "scandinavian style",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 55,
        "25-35": 30,
        "35-45": 12,
        "45-55": 3,
        "over-55": 0
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 13,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 19
    },
    "segments": [
      "EB2",
      "QS1",
      "LE2",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-scandinavian-style",
        "name": "Scandinavian Style Trend",
        "description": "Current trending topic within the Scandinavian Style community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 77,
        "linkedHashtags": [
          "#scandinavianstyle"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-scandinavian-style",
        "handle": "@scandinavianstyle",
        "platform": "youtube",
        "followers": 71758,
        "tier": "micro",
        "engagement": 7.3,
        "niche": [
          "scandinavian style"
        ],
        "authenticity": 85,
        "collaboration": {
          "averageRate": 717,
          "responseRate": 64,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 88,
          "audienceMatch": 86
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "fashion-accessories",
        "penetration": 55,
        "sentiment": 83,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 90,
            "duration": "6 months",
            "reach": 22247
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 15.7,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 16,
        "oneYear": 62,
        "twoYear": 42,
        "confidence": 0.87
      }
    }
  },
  {
    "id": "mc-goth-aesthetic",
    "name": "Goth Aesthetic",
    "description": "A visual community centered around Goth Aesthetic aesthetic, focusing on style, design, and creative expression",
    "category": "aesthetic",
    "size": "emerging",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "goth aesthetic",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 55,
        "25-35": 30,
        "35-45": 12,
        "45-55": 3,
        "over-55": 0
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "western-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 15,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 13
    },
    "segments": [
      "QS1",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-goth-aesthetic",
        "name": "Goth Aesthetic Trend",
        "description": "Current trending topic within the Goth Aesthetic community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 98,
        "linkedHashtags": [
          "#gothaesthetic"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-goth-aesthetic",
        "handle": "@gothaesthetic",
        "platform": "instagram",
        "followers": 173872,
        "tier": "macro",
        "engagement": 7.3,
        "niche": [
          "goth aesthetic"
        ],
        "authenticity": 88,
        "collaboration": {
          "averageRate": 1738,
          "responseRate": 65,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 92,
          "audienceMatch": 80
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "fashion-accessories",
        "penetration": 52,
        "sentiment": 75,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 78,
            "duration": "6 months",
            "reach": 88839
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 13.8,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 29,
        "oneYear": 46,
        "twoYear": 67,
        "confidence": 0.71
      }
    }
  },
  {
    "id": "mc-pastel-goth",
    "name": "Pastel Goth",
    "description": "A visual community centered around Pastel Goth aesthetic, focusing on style, design, and creative expression",
    "category": "aesthetic",
    "size": "established",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "pastel goth",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 55,
        "25-35": 30,
        "35-45": 12,
        "45-55": 3,
        "over-55": 0
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "central-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 9,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 31
    },
    "segments": [
      "EB2",
      "EB3"
    ],
    "trends": [
      {
        "id": "trend-pastel-goth",
        "name": "Pastel Goth Trend",
        "description": "Current trending topic within the Pastel Goth community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 90,
        "linkedHashtags": [
          "#pastelgoth"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-pastel-goth",
        "handle": "@pastelgoth",
        "platform": "reddit",
        "followers": 323950,
        "tier": "macro",
        "engagement": 6.1,
        "niche": [
          "pastel goth"
        ],
        "authenticity": 90,
        "collaboration": {
          "averageRate": 3239,
          "responseRate": 87,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 83,
          "audienceMatch": 84
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "fashion-accessories",
        "penetration": 83,
        "sentiment": 78,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 82,
            "duration": "6 months",
            "reach": 99773
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 12.5,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 33,
        "oneYear": 51,
        "twoYear": 85,
        "confidence": 0.83
      }
    }
  },
  {
    "id": "mc-kawaii-culture",
    "name": "Kawaii Culture",
    "description": "A visual community centered around Kawaii Culture aesthetic, focusing on style, design, and creative expression",
    "category": "aesthetic",
    "size": "emerging",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "kawaii culture",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 55,
        "25-35": 30,
        "35-45": 12,
        "45-55": 3,
        "over-55": 0
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "eastern-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 12,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 21
    },
    "segments": [
      "LE1",
      "QS1",
      "QS2",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-kawaii-culture",
        "name": "Kawaii Culture Trend",
        "description": "Current trending topic within the Kawaii Culture community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 76,
        "linkedHashtags": [
          "#kawaiiculture"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-kawaii-culture",
        "handle": "@kawaiiculture",
        "platform": "discord",
        "followers": 192180,
        "tier": "macro",
        "engagement": 8.9,
        "niche": [
          "kawaii culture"
        ],
        "authenticity": 82,
        "collaboration": {
          "averageRate": 1921,
          "responseRate": 72,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 94,
          "audienceMatch": 94
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "fashion-accessories",
        "penetration": 79,
        "sentiment": 90,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 75,
            "duration": "6 months",
            "reach": 84454
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 3.0,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 35,
        "oneYear": 57,
        "twoYear": 116,
        "confidence": 0.81
      }
    }
  },
  {
    "id": "mc-grunge-revival",
    "name": "Grunge Revival",
    "description": "A visual community centered around Grunge Revival aesthetic, focusing on style, design, and creative expression",
    "category": "aesthetic",
    "size": "growing",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "grunge revival",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 55,
        "25-35": 30,
        "35-45": 12,
        "45-55": 3,
        "over-55": 0
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "mountain-west-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 11,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 40
    },
    "segments": [
      "QS1",
      "EB2"
    ],
    "trends": [
      {
        "id": "trend-grunge-revival",
        "name": "Grunge Revival Trend",
        "description": "Current trending topic within the Grunge Revival community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 72,
        "linkedHashtags": [
          "#grungerevival"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-grunge-revival",
        "handle": "@grungerevival",
        "platform": "discord",
        "followers": 494860,
        "tier": "macro",
        "engagement": 7.1,
        "niche": [
          "grunge revival"
        ],
        "authenticity": 96,
        "collaboration": {
          "averageRate": 4948,
          "responseRate": 71,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 83,
          "audienceMatch": 84
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "fashion-accessories",
        "penetration": 51,
        "sentiment": 85,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 77,
            "duration": "6 months",
            "reach": 104161
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 11.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 17,
        "oneYear": 28,
        "twoYear": 86,
        "confidence": 0.87
      }
    }
  },
  {
    "id": "mc-fairycore",
    "name": "Fairycore",
    "description": "A visual community centered around Fairycore aesthetic, focusing on style, design, and creative expression",
    "category": "aesthetic",
    "size": "massive",
    "platform": "tiktok",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "fairycore",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 55,
        "25-35": 30,
        "35-45": 12,
        "45-55": 3,
        "over-55": 0
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "western-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 13,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 38
    },
    "segments": [
      "EB1",
      "EB3"
    ],
    "trends": [
      {
        "id": "trend-fairycore",
        "name": "Fairycore Trend",
        "description": "Current trending topic within the Fairycore community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 69,
        "linkedHashtags": [
          "#fairycore"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-fairycore",
        "handle": "@fairycore",
        "platform": "tiktok",
        "followers": 239297,
        "tier": "macro",
        "engagement": 10.9,
        "niche": [
          "fairycore"
        ],
        "authenticity": 87,
        "collaboration": {
          "averageRate": 2392,
          "responseRate": 68,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 88,
          "audienceMatch": 84
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "fashion-accessories",
        "penetration": 84,
        "sentiment": 78,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 87,
            "duration": "6 months",
            "reach": 117636
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 11.5,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 35,
        "oneYear": 51,
        "twoYear": 43,
        "confidence": 0.91
      }
    }
  },
  {
    "id": "mc-digital-nomads",
    "name": "Digital Nomads",
    "description": "Individuals embracing the Digital Nomads lifestyle, sharing experiences and building community around shared values",
    "category": "lifestyle",
    "size": "emerging",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "digital nomads",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 25,
        "25-35": 45,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "western-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 14,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 45
    },
    "segments": [
      "QS2",
      "LE2",
      "QS3",
      "LE1"
    ],
    "trends": [
      {
        "id": "trend-digital-nomads",
        "name": "Digital Nomads Trend",
        "description": "Current trending topic within the Digital Nomads community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 84,
        "linkedHashtags": [
          "#digitalnomads"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-digital-nomads",
        "handle": "@digitalnomads",
        "platform": "reddit",
        "followers": 203972,
        "tier": "macro",
        "engagement": 7.8,
        "niche": [
          "digital nomads"
        ],
        "authenticity": 83,
        "collaboration": {
          "averageRate": 2039,
          "responseRate": 69,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 93,
          "audienceMatch": 86
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "home-lifestyle",
        "penetration": 76,
        "sentiment": 87,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 94,
            "duration": "6 months",
            "reach": 109810
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 10.1,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 22,
        "oneYear": 57,
        "twoYear": 72,
        "confidence": 0.93
      }
    }
  },
  {
    "id": "mc-tiny-house-living",
    "name": "Tiny House Living",
    "description": "Individuals embracing the Tiny House Living lifestyle, sharing experiences and building community around shared values",
    "category": "lifestyle",
    "size": "established",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "tiny house living",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 25,
        "25-35": 45,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "midwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 7,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 30
    },
    "segments": [
      "QS1",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-tiny-house-living",
        "name": "Tiny House Living Trend",
        "description": "Current trending topic within the Tiny House Living community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 76,
        "linkedHashtags": [
          "#tinyhouseliving"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-tiny-house-living",
        "handle": "@tinyhouseliving",
        "platform": "discord",
        "followers": 24345,
        "tier": "micro",
        "engagement": 9.5,
        "niche": [
          "tiny house living"
        ],
        "authenticity": 90,
        "collaboration": {
          "averageRate": 243,
          "responseRate": 82,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 88,
          "audienceMatch": 85
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "home-lifestyle",
        "penetration": 78,
        "sentiment": 89,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 93,
            "duration": "6 months",
            "reach": 79759
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 6.2,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 19,
        "oneYear": 43,
        "twoYear": 64,
        "confidence": 0.98
      }
    }
  },
  {
    "id": "mc-zero-waste",
    "name": "Zero Waste",
    "description": "Individuals embracing the Zero Waste lifestyle, sharing experiences and building community around shared values",
    "category": "lifestyle",
    "size": "established",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "zero waste",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 25,
        "25-35": 45,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 5,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 11
    },
    "segments": [
      "EB2",
      "LE1",
      "QS3"
    ],
    "trends": [
      {
        "id": "trend-zero-waste",
        "name": "Zero Waste Trend",
        "description": "Current trending topic within the Zero Waste community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 83,
        "linkedHashtags": [
          "#zerowaste"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-zero-waste",
        "handle": "@zerowaste",
        "platform": "discord",
        "followers": 32973,
        "tier": "micro",
        "engagement": 11.0,
        "niche": [
          "zero waste"
        ],
        "authenticity": 95,
        "collaboration": {
          "averageRate": 329,
          "responseRate": 86,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 92,
          "audienceMatch": 88
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "home-lifestyle",
        "penetration": 61,
        "sentiment": 77,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 93,
            "duration": "6 months",
            "reach": 25186
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 10.7,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 16,
        "oneYear": 32,
        "twoYear": 40,
        "confidence": 0.92
      }
    }
  },
  {
    "id": "mc-slow-living",
    "name": "Slow Living",
    "description": "Individuals embracing the Slow Living lifestyle, sharing experiences and building community around shared values",
    "category": "lifestyle",
    "size": "established",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "slow living",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 25,
        "25-35": 45,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "mountain-west-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 6,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 49
    },
    "segments": [
      "LE2",
      "EB3",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-slow-living",
        "name": "Slow Living Trend",
        "description": "Current trending topic within the Slow Living community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 91,
        "linkedHashtags": [
          "#slowliving"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-slow-living",
        "handle": "@slowliving",
        "platform": "instagram",
        "followers": 295792,
        "tier": "macro",
        "engagement": 6.8,
        "niche": [
          "slow living"
        ],
        "authenticity": 87,
        "collaboration": {
          "averageRate": 2957,
          "responseRate": 86,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 85,
          "audienceMatch": 85
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "home-lifestyle",
        "penetration": 83,
        "sentiment": 86,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 82,
            "duration": "6 months",
            "reach": 36234
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 10.6,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 20,
        "oneYear": 56,
        "twoYear": 83,
        "confidence": 0.92
      }
    }
  },
  {
    "id": "mc-urban-homesteading",
    "name": "Urban Homesteading",
    "description": "Individuals embracing the Urban Homesteading lifestyle, sharing experiences and building community around shared values",
    "category": "lifestyle",
    "size": "emerging",
    "platform": "youtube",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "urban homesteading",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 25,
        "25-35": 45,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 13,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 10
    },
    "segments": [
      "LE1",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-urban-homesteading",
        "name": "Urban Homesteading Trend",
        "description": "Current trending topic within the Urban Homesteading community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 64,
        "linkedHashtags": [
          "#urbanhomesteading"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-urban-homesteading",
        "handle": "@urbanhomesteading",
        "platform": "youtube",
        "followers": 261847,
        "tier": "macro",
        "engagement": 4.7,
        "niche": [
          "urban homesteading"
        ],
        "authenticity": 84,
        "collaboration": {
          "averageRate": 2618,
          "responseRate": 86,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 85,
          "audienceMatch": 92
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "home-lifestyle",
        "penetration": 63,
        "sentiment": 77,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 93,
            "duration": "6 months",
            "reach": 73703
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 8.3,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 40,
        "oneYear": 28,
        "twoYear": 106,
        "confidence": 0.81
      }
    }
  },
  {
    "id": "mc-minimalists",
    "name": "Minimalists",
    "description": "Individuals embracing the Minimalists lifestyle, sharing experiences and building community around shared values",
    "category": "lifestyle",
    "size": "emerging",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "minimalists",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 25,
        "25-35": 45,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "mountain-west-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 7,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 11
    },
    "segments": [
      "LE1",
      "QS2",
      "EB1",
      "QS3"
    ],
    "trends": [
      {
        "id": "trend-minimalists",
        "name": "Minimalists Trend",
        "description": "Current trending topic within the Minimalists community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 68,
        "linkedHashtags": [
          "#minimalists"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-minimalists",
        "handle": "@minimalists",
        "platform": "reddit",
        "followers": 16742,
        "tier": "micro",
        "engagement": 5.9,
        "niche": [
          "minimalists"
        ],
        "authenticity": 81,
        "collaboration": {
          "averageRate": 167,
          "responseRate": 81,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 80,
          "audienceMatch": 84
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "home-lifestyle",
        "penetration": 58,
        "sentiment": 80,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 81,
            "duration": "6 months",
            "reach": 39216
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 3.5,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 33,
        "oneYear": 72,
        "twoYear": 53,
        "confidence": 0.99
      }
    }
  },
  {
    "id": "mc-van-life",
    "name": "Van Life",
    "description": "Individuals embracing the Van Life lifestyle, sharing experiences and building community around shared values",
    "category": "lifestyle",
    "size": "emerging",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "van life",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 25,
        "25-35": 45,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 14,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 27
    },
    "segments": [
      "LE1",
      "EB1",
      "QS3",
      "EB3"
    ],
    "trends": [
      {
        "id": "trend-van-life",
        "name": "Van Life Trend",
        "description": "Current trending topic within the Van Life community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 88,
        "linkedHashtags": [
          "#vanlife"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-van-life",
        "handle": "@vanlife",
        "platform": "reddit",
        "followers": 374810,
        "tier": "macro",
        "engagement": 9.0,
        "niche": [
          "van life"
        ],
        "authenticity": 98,
        "collaboration": {
          "averageRate": 3748,
          "responseRate": 84,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 92,
          "audienceMatch": 94
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "home-lifestyle",
        "penetration": 55,
        "sentiment": 81,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 87,
            "duration": "6 months",
            "reach": 101779
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 9.7,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 37,
        "oneYear": 55,
        "twoYear": 109,
        "confidence": 0.91
      }
    }
  },
  {
    "id": "mc-off-grid-living",
    "name": "Off-Grid Living",
    "description": "Individuals embracing the Off-Grid Living lifestyle, sharing experiences and building community around shared values",
    "category": "lifestyle",
    "size": "emerging",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "off-grid living",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 25,
        "25-35": 45,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "western-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 10,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 42
    },
    "segments": [
      "QS2",
      "LE1",
      "EB3",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-off-grid-living",
        "name": "Off-Grid Living Trend",
        "description": "Current trending topic within the Off-Grid Living community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 77,
        "linkedHashtags": [
          "#off-gridliving"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-off-grid-living",
        "handle": "@off-gridliving",
        "platform": "discord",
        "followers": 355945,
        "tier": "macro",
        "engagement": 6.2,
        "niche": [
          "off-grid living"
        ],
        "authenticity": 99,
        "collaboration": {
          "averageRate": 3559,
          "responseRate": 77,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 89,
          "audienceMatch": 84
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "home-lifestyle",
        "penetration": 58,
        "sentiment": 80,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 75,
            "duration": "6 months",
            "reach": 112733
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 5.5,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 16,
        "oneYear": 50,
        "twoYear": 102,
        "confidence": 0.80
      }
    }
  },
  {
    "id": "mc-hygge-lifestyle",
    "name": "Hygge Lifestyle",
    "description": "Individuals embracing the Hygge Lifestyle lifestyle, sharing experiences and building community around shared values",
    "category": "lifestyle",
    "size": "emerging",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "hygge lifestyle",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 25,
        "25-35": 45,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 14,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 29
    },
    "segments": [
      "LE3",
      "QS3",
      "EB2",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-hygge-lifestyle",
        "name": "Hygge Lifestyle Trend",
        "description": "Current trending topic within the Hygge Lifestyle community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 97,
        "linkedHashtags": [
          "#hyggelifestyle"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-hygge-lifestyle",
        "handle": "@hyggelifestyle",
        "platform": "reddit",
        "followers": 151708,
        "tier": "macro",
        "engagement": 10.4,
        "niche": [
          "hygge lifestyle"
        ],
        "authenticity": 88,
        "collaboration": {
          "averageRate": 1517,
          "responseRate": 61,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 91,
          "audienceMatch": 94
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "home-lifestyle",
        "penetration": 86,
        "sentiment": 90,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 94,
            "duration": "6 months",
            "reach": 33888
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 12.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 34,
        "oneYear": 28,
        "twoYear": 55,
        "confidence": 0.76
      }
    }
  },
  {
    "id": "mc-lagom-living",
    "name": "Lagom Living",
    "description": "Individuals embracing the Lagom Living lifestyle, sharing experiences and building community around shared values",
    "category": "lifestyle",
    "size": "massive",
    "platform": "tiktok",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "lagom living",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 25,
        "25-35": 45,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "central-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 10,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 42
    },
    "segments": [
      "EB1",
      "QS3",
      "LE3"
    ],
    "trends": [
      {
        "id": "trend-lagom-living",
        "name": "Lagom Living Trend",
        "description": "Current trending topic within the Lagom Living community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 76,
        "linkedHashtags": [
          "#lagomliving"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-lagom-living",
        "handle": "@lagomliving",
        "platform": "tiktok",
        "followers": 482021,
        "tier": "macro",
        "engagement": 8.8,
        "niche": [
          "lagom living"
        ],
        "authenticity": 95,
        "collaboration": {
          "averageRate": 4820,
          "responseRate": 62,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 85,
          "audienceMatch": 90
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "home-lifestyle",
        "penetration": 82,
        "sentiment": 84,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 85,
            "duration": "6 months",
            "reach": 23264
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 5.0,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 44,
        "oneYear": 37,
        "twoYear": 97,
        "confidence": 0.99
      }
    }
  },
  {
    "id": "mc-fire-movement",
    "name": "FIRE Movement",
    "description": "Individuals embracing the FIRE Movement lifestyle, sharing experiences and building community around shared values",
    "category": "lifestyle",
    "size": "massive",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "fire movement",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 25,
        "25-35": 45,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "mountain-west-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 15,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 10
    },
    "segments": [
      "EB3",
      "LE1"
    ],
    "trends": [
      {
        "id": "trend-fire-movement",
        "name": "FIRE Movement Trend",
        "description": "Current trending topic within the FIRE Movement community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 90,
        "linkedHashtags": [
          "#firemovement"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-fire-movement",
        "handle": "@firemovement",
        "platform": "reddit",
        "followers": 337657,
        "tier": "macro",
        "engagement": 7.9,
        "niche": [
          "fire movement"
        ],
        "authenticity": 87,
        "collaboration": {
          "averageRate": 3376,
          "responseRate": 81,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 88,
          "audienceMatch": 85
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "home-lifestyle",
        "penetration": 61,
        "sentiment": 79,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 87,
            "duration": "6 months",
            "reach": 99024
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 2.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 39,
        "oneYear": 59,
        "twoYear": 101,
        "confidence": 0.91
      }
    }
  },
  {
    "id": "mc-biohackers",
    "name": "Biohackers",
    "description": "Individuals embracing the Biohackers lifestyle, sharing experiences and building community around shared values",
    "category": "lifestyle",
    "size": "growing",
    "platform": "youtube",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "biohackers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 25,
        "25-35": 45,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "central-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 16,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 38
    },
    "segments": [
      "LE1",
      "QS1",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-biohackers",
        "name": "Biohackers Trend",
        "description": "Current trending topic within the Biohackers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 94,
        "linkedHashtags": [
          "#biohackers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-biohackers",
        "handle": "@biohackers",
        "platform": "youtube",
        "followers": 72123,
        "tier": "micro",
        "engagement": 11.5,
        "niche": [
          "biohackers"
        ],
        "authenticity": 85,
        "collaboration": {
          "averageRate": 721,
          "responseRate": 63,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 83,
          "audienceMatch": 91
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "home-lifestyle",
        "penetration": 64,
        "sentiment": 87,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 77,
            "duration": "6 months",
            "reach": 114050
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 3.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 30,
        "oneYear": 27,
        "twoYear": 55,
        "confidence": 0.94
      }
    }
  },
  {
    "id": "mc-life-optimizers",
    "name": "Life Optimizers",
    "description": "Individuals embracing the Life Optimizers lifestyle, sharing experiences and building community around shared values",
    "category": "lifestyle",
    "size": "emerging",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "life optimizers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 25,
        "25-35": 45,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "central-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 5,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 29
    },
    "segments": [
      "EB2",
      "QS3",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-life-optimizers",
        "name": "Life Optimizers Trend",
        "description": "Current trending topic within the Life Optimizers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 88,
        "linkedHashtags": [
          "#lifeoptimizers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-life-optimizers",
        "handle": "@lifeoptimizers",
        "platform": "reddit",
        "followers": 236957,
        "tier": "macro",
        "engagement": 12.0,
        "niche": [
          "life optimizers"
        ],
        "authenticity": 96,
        "collaboration": {
          "averageRate": 2369,
          "responseRate": 71,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 81,
          "audienceMatch": 93
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "home-lifestyle",
        "penetration": 67,
        "sentiment": 88,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 84,
            "duration": "6 months",
            "reach": 68233
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 2.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 37,
        "oneYear": 71,
        "twoYear": 113,
        "confidence": 0.87
      }
    }
  },
  {
    "id": "mc-intentional-living",
    "name": "Intentional Living",
    "description": "Individuals embracing the Intentional Living lifestyle, sharing experiences and building community around shared values",
    "category": "lifestyle",
    "size": "established",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "intentional living",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 25,
        "25-35": 45,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 9,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 26
    },
    "segments": [
      "LE1",
      "QS1"
    ],
    "trends": [
      {
        "id": "trend-intentional-living",
        "name": "Intentional Living Trend",
        "description": "Current trending topic within the Intentional Living community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 63,
        "linkedHashtags": [
          "#intentionalliving"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-intentional-living",
        "handle": "@intentionalliving",
        "platform": "reddit",
        "followers": 377841,
        "tier": "macro",
        "engagement": 9.6,
        "niche": [
          "intentional living"
        ],
        "authenticity": 94,
        "collaboration": {
          "averageRate": 3778,
          "responseRate": 67,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 85,
          "audienceMatch": 83
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "home-lifestyle",
        "penetration": 62,
        "sentiment": 91,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 94,
            "duration": "6 months",
            "reach": 107993
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 12.8,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 40,
        "oneYear": 26,
        "twoYear": 57,
        "confidence": 0.99
      }
    }
  },
  {
    "id": "mc-sustainable-living",
    "name": "Sustainable Living",
    "description": "Individuals embracing the Sustainable Living lifestyle, sharing experiences and building community around shared values",
    "category": "lifestyle",
    "size": "massive",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "sustainable living",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 25,
        "25-35": 45,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "western-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 8,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 41
    },
    "segments": [
      "LE1",
      "QS2",
      "LE2",
      "LE3"
    ],
    "trends": [
      {
        "id": "trend-sustainable-living",
        "name": "Sustainable Living Trend",
        "description": "Current trending topic within the Sustainable Living community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 94,
        "linkedHashtags": [
          "#sustainableliving"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-sustainable-living",
        "handle": "@sustainableliving",
        "platform": "discord",
        "followers": 451008,
        "tier": "macro",
        "engagement": 9.3,
        "niche": [
          "sustainable living"
        ],
        "authenticity": 90,
        "collaboration": {
          "averageRate": 4510,
          "responseRate": 77,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 93,
          "audienceMatch": 85
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "home-lifestyle",
        "penetration": 60,
        "sentiment": 77,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 89,
            "duration": "6 months",
            "reach": 21986
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 9.8,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 39,
        "oneYear": 51,
        "twoYear": 100,
        "confidence": 0.99
      }
    }
  },
  {
    "id": "mc-female-entrepreneurs",
    "name": "Female Entrepreneurs",
    "description": "Female Entrepreneurs connecting to share industry insights, career advice, and professional development opportunities",
    "category": "professional",
    "size": "established",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "female entrepreneurs",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 15,
        "25-35": 50,
        "35-45": 30,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "eastern-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 7,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 25
    },
    "segments": [
      "LE1",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-female-entrepreneurs",
        "name": "Female Entrepreneurs Trend",
        "description": "Current trending topic within the Female Entrepreneurs community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 74,
        "linkedHashtags": [
          "#femaleentrepreneurs"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-female-entrepreneurs",
        "handle": "@femaleentrepreneurs",
        "platform": "discord",
        "followers": 37537,
        "tier": "micro",
        "engagement": 2.7,
        "niche": [
          "female entrepreneurs"
        ],
        "authenticity": 87,
        "collaboration": {
          "averageRate": 375,
          "responseRate": 61,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 92,
          "audienceMatch": 83
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "professional-services",
        "penetration": 60,
        "sentiment": 75,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 82,
            "duration": "6 months",
            "reach": 34539
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 11.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 27,
        "oneYear": 56,
        "twoYear": 40,
        "confidence": 0.72
      }
    }
  },
  {
    "id": "mc-freelance-writers",
    "name": "Freelance Writers",
    "description": "Freelance Writers connecting to share industry insights, career advice, and professional development opportunities",
    "category": "professional",
    "size": "emerging",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "freelance writers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 15,
        "25-35": 50,
        "35-45": 30,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 12,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 11
    },
    "segments": [
      "EB2",
      "LE3",
      "EB3"
    ],
    "trends": [
      {
        "id": "trend-freelance-writers",
        "name": "Freelance Writers Trend",
        "description": "Current trending topic within the Freelance Writers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 68,
        "linkedHashtags": [
          "#freelancewriters"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-freelance-writers",
        "handle": "@freelancewriters",
        "platform": "discord",
        "followers": 460600,
        "tier": "macro",
        "engagement": 10.7,
        "niche": [
          "freelance writers"
        ],
        "authenticity": 97,
        "collaboration": {
          "averageRate": 4606,
          "responseRate": 65,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 94,
          "audienceMatch": 88
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "professional-services",
        "penetration": 66,
        "sentiment": 88,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 80,
            "duration": "6 months",
            "reach": 107953
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 9.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 29,
        "oneYear": 39,
        "twoYear": 51,
        "confidence": 0.74
      }
    }
  },
  {
    "id": "mc-ux-designers",
    "name": "UX Designers",
    "description": "UX Designers connecting to share industry insights, career advice, and professional development opportunities",
    "category": "professional",
    "size": "massive",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "ux designers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 15,
        "25-35": 50,
        "35-45": 30,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 16,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 47
    },
    "segments": [
      "QS1",
      "LE1",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-ux-designers",
        "name": "UX Designers Trend",
        "description": "Current trending topic within the UX Designers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 83,
        "linkedHashtags": [
          "#uxdesigners"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-ux-designers",
        "handle": "@uxdesigners",
        "platform": "discord",
        "followers": 249320,
        "tier": "macro",
        "engagement": 11.4,
        "niche": [
          "ux designers"
        ],
        "authenticity": 93,
        "collaboration": {
          "averageRate": 2493,
          "responseRate": 87,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 87,
          "audienceMatch": 81
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "professional-services",
        "penetration": 71,
        "sentiment": 82,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 86,
            "duration": "6 months",
            "reach": 29662
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 16.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 27,
        "oneYear": 64,
        "twoYear": 73,
        "confidence": 0.77
      }
    }
  },
  {
    "id": "mc-data-scientists",
    "name": "Data Scientists",
    "description": "Data Scientists connecting to share industry insights, career advice, and professional development opportunities",
    "category": "professional",
    "size": "established",
    "platform": "tiktok",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "data scientists",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 15,
        "25-35": 50,
        "35-45": 30,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "southeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 6,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 16
    },
    "segments": [
      "LE1",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-data-scientists",
        "name": "Data Scientists Trend",
        "description": "Current trending topic within the Data Scientists community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 74,
        "linkedHashtags": [
          "#datascientists"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-data-scientists",
        "handle": "@datascientists",
        "platform": "tiktok",
        "followers": 496116,
        "tier": "macro",
        "engagement": 9.1,
        "niche": [
          "data scientists"
        ],
        "authenticity": 89,
        "collaboration": {
          "averageRate": 4961,
          "responseRate": 69,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 84,
          "audienceMatch": 88
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "professional-services",
        "penetration": 72,
        "sentiment": 77,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 94,
            "duration": "6 months",
            "reach": 94277
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 11.5,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 29,
        "oneYear": 55,
        "twoYear": 46,
        "confidence": 0.90
      }
    }
  },
  {
    "id": "mc-marketing-professionals",
    "name": "Marketing Professionals",
    "description": "Marketing Professionals connecting to share industry insights, career advice, and professional development opportunities",
    "category": "professional",
    "size": "emerging",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "marketing professionals",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 15,
        "25-35": 50,
        "35-45": 30,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 14,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 44
    },
    "segments": [
      "LE1",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-marketing-professionals",
        "name": "Marketing Professionals Trend",
        "description": "Current trending topic within the Marketing Professionals community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 88,
        "linkedHashtags": [
          "#marketingprofessionals"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-marketing-professionals",
        "handle": "@marketingprofessionals",
        "platform": "discord",
        "followers": 21129,
        "tier": "micro",
        "engagement": 10.8,
        "niche": [
          "marketing professionals"
        ],
        "authenticity": 85,
        "collaboration": {
          "averageRate": 211,
          "responseRate": 84,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 81,
          "audienceMatch": 88
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "professional-services",
        "penetration": 86,
        "sentiment": 76,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 88,
            "duration": "6 months",
            "reach": 85153
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 9.6,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 34,
        "oneYear": 49,
        "twoYear": 63,
        "confidence": 0.71
      }
    }
  },
  {
    "id": "mc-remote-workers",
    "name": "Remote Workers",
    "description": "Remote Workers connecting to share industry insights, career advice, and professional development opportunities",
    "category": "professional",
    "size": "emerging",
    "platform": "tiktok",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "remote workers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 15,
        "25-35": 50,
        "35-45": 30,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "western-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 14,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 28
    },
    "segments": [
      "QS1",
      "EB1",
      "LE3",
      "QS3"
    ],
    "trends": [
      {
        "id": "trend-remote-workers",
        "name": "Remote Workers Trend",
        "description": "Current trending topic within the Remote Workers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 65,
        "linkedHashtags": [
          "#remoteworkers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-remote-workers",
        "handle": "@remoteworkers",
        "platform": "tiktok",
        "followers": 377838,
        "tier": "macro",
        "engagement": 9.6,
        "niche": [
          "remote workers"
        ],
        "authenticity": 86,
        "collaboration": {
          "averageRate": 3778,
          "responseRate": 86,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 89,
          "audienceMatch": 88
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "professional-services",
        "penetration": 61,
        "sentiment": 87,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 88,
            "duration": "6 months",
            "reach": 114818
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 13.2,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 31,
        "oneYear": 73,
        "twoYear": 87,
        "confidence": 0.84
      }
    }
  },
  {
    "id": "mc-startup-founders",
    "name": "Startup Founders",
    "description": "Startup Founders connecting to share industry insights, career advice, and professional development opportunities",
    "category": "professional",
    "size": "massive",
    "platform": "tiktok",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "startup founders",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 15,
        "25-35": 50,
        "35-45": 30,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 9,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 22
    },
    "segments": [
      "LE1",
      "LE2",
      "QS2",
      "LE3"
    ],
    "trends": [
      {
        "id": "trend-startup-founders",
        "name": "Startup Founders Trend",
        "description": "Current trending topic within the Startup Founders community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 89,
        "linkedHashtags": [
          "#startupfounders"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-startup-founders",
        "handle": "@startupfounders",
        "platform": "tiktok",
        "followers": 412145,
        "tier": "macro",
        "engagement": 2.1,
        "niche": [
          "startup founders"
        ],
        "authenticity": 95,
        "collaboration": {
          "averageRate": 4121,
          "responseRate": 87,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 86,
          "audienceMatch": 89
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "professional-services",
        "penetration": 76,
        "sentiment": 76,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 92,
            "duration": "6 months",
            "reach": 39505
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 7.6,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 15,
        "oneYear": 57,
        "twoYear": 83,
        "confidence": 0.71
      }
    }
  },
  {
    "id": "mc-sales-professionals",
    "name": "Sales Professionals",
    "description": "Sales Professionals connecting to share industry insights, career advice, and professional development opportunities",
    "category": "professional",
    "size": "massive",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "sales professionals",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 15,
        "25-35": 50,
        "35-45": 30,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 15,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 10
    },
    "segments": [
      "EB1",
      "LE3"
    ],
    "trends": [
      {
        "id": "trend-sales-professionals",
        "name": "Sales Professionals Trend",
        "description": "Current trending topic within the Sales Professionals community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 93,
        "linkedHashtags": [
          "#salesprofessionals"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-sales-professionals",
        "handle": "@salesprofessionals",
        "platform": "discord",
        "followers": 250499,
        "tier": "macro",
        "engagement": 10.9,
        "niche": [
          "sales professionals"
        ],
        "authenticity": 80,
        "collaboration": {
          "averageRate": 2504,
          "responseRate": 79,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 80,
          "audienceMatch": 89
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "professional-services",
        "penetration": 87,
        "sentiment": 79,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 94,
            "duration": "6 months",
            "reach": 104938
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 6.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 18,
        "oneYear": 34,
        "twoYear": 86,
        "confidence": 0.85
      }
    }
  },
  {
    "id": "mc-hr-leaders",
    "name": "HR Leaders",
    "description": "HR Leaders connecting to share industry insights, career advice, and professional development opportunities",
    "category": "professional",
    "size": "emerging",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "hr leaders",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 15,
        "25-35": 50,
        "35-45": 30,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 12,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 30
    },
    "segments": [
      "QS1",
      "LE1"
    ],
    "trends": [
      {
        "id": "trend-hr-leaders",
        "name": "HR Leaders Trend",
        "description": "Current trending topic within the HR Leaders community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 61,
        "linkedHashtags": [
          "#hrleaders"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-hr-leaders",
        "handle": "@hrleaders",
        "platform": "reddit",
        "followers": 215884,
        "tier": "macro",
        "engagement": 6.5,
        "niche": [
          "hr leaders"
        ],
        "authenticity": 99,
        "collaboration": {
          "averageRate": 2158,
          "responseRate": 79,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 84,
          "audienceMatch": 85
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "professional-services",
        "penetration": 70,
        "sentiment": 89,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 82,
            "duration": "6 months",
            "reach": 117992
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 11.3,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 36,
        "oneYear": 72,
        "twoYear": 90,
        "confidence": 0.90
      }
    }
  },
  {
    "id": "mc-project-managers",
    "name": "Project Managers",
    "description": "Project Managers connecting to share industry insights, career advice, and professional development opportunities",
    "category": "professional",
    "size": "growing",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "project managers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 15,
        "25-35": 50,
        "35-45": 30,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "midwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 15,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 30
    },
    "segments": [
      "QS1",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-project-managers",
        "name": "Project Managers Trend",
        "description": "Current trending topic within the Project Managers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 88,
        "linkedHashtags": [
          "#projectmanagers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-project-managers",
        "handle": "@projectmanagers",
        "platform": "discord",
        "followers": 429016,
        "tier": "macro",
        "engagement": 4.9,
        "niche": [
          "project managers"
        ],
        "authenticity": 95,
        "collaboration": {
          "averageRate": 4290,
          "responseRate": 87,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 82,
          "audienceMatch": 93
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "professional-services",
        "penetration": 53,
        "sentiment": 85,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 76,
            "duration": "6 months",
            "reach": 89082
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 15.5,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 43,
        "oneYear": 54,
        "twoYear": 56,
        "confidence": 0.97
      }
    }
  },
  {
    "id": "mc-consultants",
    "name": "Consultants",
    "description": "Consultants connecting to share industry insights, career advice, and professional development opportunities",
    "category": "professional",
    "size": "growing",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "consultants",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 15,
        "25-35": 50,
        "35-45": 30,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 15,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 41
    },
    "segments": [
      "QS2",
      "QS1"
    ],
    "trends": [
      {
        "id": "trend-consultants",
        "name": "Consultants Trend",
        "description": "Current trending topic within the Consultants community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 93,
        "linkedHashtags": [
          "#consultants"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-consultants",
        "handle": "@consultants",
        "platform": "reddit",
        "followers": 460504,
        "tier": "macro",
        "engagement": 10.9,
        "niche": [
          "consultants"
        ],
        "authenticity": 92,
        "collaboration": {
          "averageRate": 4605,
          "responseRate": 81,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 82,
          "audienceMatch": 83
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "professional-services",
        "penetration": 76,
        "sentiment": 76,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 75,
            "duration": "6 months",
            "reach": 27493
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 2.8,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 26,
        "oneYear": 29,
        "twoYear": 117,
        "confidence": 0.89
      }
    }
  },
  {
    "id": "mc-career-coaches",
    "name": "Career Coaches",
    "description": "Career Coaches connecting to share industry insights, career advice, and professional development opportunities",
    "category": "professional",
    "size": "growing",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "career coaches",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 15,
        "25-35": 50,
        "35-45": 30,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "western-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 9,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 47
    },
    "segments": [
      "EB3",
      "QS2",
      "QS1"
    ],
    "trends": [
      {
        "id": "trend-career-coaches",
        "name": "Career Coaches Trend",
        "description": "Current trending topic within the Career Coaches community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 95,
        "linkedHashtags": [
          "#careercoaches"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-career-coaches",
        "handle": "@careercoaches",
        "platform": "reddit",
        "followers": 426794,
        "tier": "macro",
        "engagement": 7.3,
        "niche": [
          "career coaches"
        ],
        "authenticity": 98,
        "collaboration": {
          "averageRate": 4267,
          "responseRate": 66,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 91,
          "audienceMatch": 86
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "professional-services",
        "penetration": 62,
        "sentiment": 89,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 84,
            "duration": "6 months",
            "reach": 45319
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 13.6,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 33,
        "oneYear": 69,
        "twoYear": 69,
        "confidence": 0.87
      }
    }
  },
  {
    "id": "mc-business-analysts",
    "name": "Business Analysts",
    "description": "Business Analysts connecting to share industry insights, career advice, and professional development opportunities",
    "category": "professional",
    "size": "massive",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "business analysts",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 15,
        "25-35": 50,
        "35-45": 30,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 13,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 21
    },
    "segments": [
      "EB1",
      "QS1",
      "QS3",
      "LE1"
    ],
    "trends": [
      {
        "id": "trend-business-analysts",
        "name": "Business Analysts Trend",
        "description": "Current trending topic within the Business Analysts community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 80,
        "linkedHashtags": [
          "#businessanalysts"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-business-analysts",
        "handle": "@businessanalysts",
        "platform": "discord",
        "followers": 387144,
        "tier": "macro",
        "engagement": 2.3,
        "niche": [
          "business analysts"
        ],
        "authenticity": 87,
        "collaboration": {
          "averageRate": 3871,
          "responseRate": 84,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 88,
          "audienceMatch": 84
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "professional-services",
        "penetration": 62,
        "sentiment": 77,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 78,
            "duration": "6 months",
            "reach": 84448
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 5.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 42,
        "oneYear": 68,
        "twoYear": 68,
        "confidence": 0.79
      }
    }
  },
  {
    "id": "mc-product-managers",
    "name": "Product Managers",
    "description": "Product Managers connecting to share industry insights, career advice, and professional development opportunities",
    "category": "professional",
    "size": "massive",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "product managers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 15,
        "25-35": 50,
        "35-45": 30,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 13,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 10
    },
    "segments": [
      "LE1",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-product-managers",
        "name": "Product Managers Trend",
        "description": "Current trending topic within the Product Managers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 75,
        "linkedHashtags": [
          "#productmanagers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-product-managers",
        "handle": "@productmanagers",
        "platform": "reddit",
        "followers": 281636,
        "tier": "macro",
        "engagement": 10.6,
        "niche": [
          "product managers"
        ],
        "authenticity": 82,
        "collaboration": {
          "averageRate": 2816,
          "responseRate": 65,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 94,
          "audienceMatch": 82
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "professional-services",
        "penetration": 50,
        "sentiment": 79,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 82,
            "duration": "6 months",
            "reach": 66364
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 8.2,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 23,
        "oneYear": 59,
        "twoYear": 51,
        "confidence": 0.81
      }
    }
  },
  {
    "id": "mc-tech-recruiters",
    "name": "Tech Recruiters",
    "description": "Tech Recruiters connecting to share industry insights, career advice, and professional development opportunities",
    "category": "professional",
    "size": "established",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "tech recruiters",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 15,
        "25-35": 50,
        "35-45": 30,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "central-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 8,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 40
    },
    "segments": [
      "EB2",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-tech-recruiters",
        "name": "Tech Recruiters Trend",
        "description": "Current trending topic within the Tech Recruiters community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 88,
        "linkedHashtags": [
          "#techrecruiters"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-tech-recruiters",
        "handle": "@techrecruiters",
        "platform": "discord",
        "followers": 494204,
        "tier": "macro",
        "engagement": 5.1,
        "niche": [
          "tech recruiters"
        ],
        "authenticity": 96,
        "collaboration": {
          "averageRate": 4942,
          "responseRate": 80,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 90,
          "audienceMatch": 90
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "professional-services",
        "penetration": 65,
        "sentiment": 92,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 94,
            "duration": "6 months",
            "reach": 20135
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 2.0,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 42,
        "oneYear": 58,
        "twoYear": 60,
        "confidence": 0.79
      }
    }
  },
  {
    "id": "mc-board-game-enthusiasts",
    "name": "Board Game Enthusiasts",
    "description": "Enthusiasts passionate about Board Game Enthusiasts, sharing techniques, projects, and connecting with fellow hobbyists",
    "category": "hobby",
    "size": "emerging",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "board game enthusiasts",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "midwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 19,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 21
    },
    "segments": [
      "QS2",
      "LE2",
      "EB1",
      "LE1"
    ],
    "trends": [
      {
        "id": "trend-board-game-enthusiasts",
        "name": "Board Game Enthusiasts Trend",
        "description": "Current trending topic within the Board Game Enthusiasts community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 83,
        "linkedHashtags": [
          "#boardgameenthusiasts"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-board-game-enthusiasts",
        "handle": "@boardgameenthusiasts",
        "platform": "instagram",
        "followers": 329731,
        "tier": "macro",
        "engagement": 2.6,
        "niche": [
          "board game enthusiasts"
        ],
        "authenticity": 80,
        "collaboration": {
          "averageRate": 3297,
          "responseRate": 78,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 82,
          "audienceMatch": 91
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 61,
        "sentiment": 77,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 83,
            "duration": "6 months",
            "reach": 20277
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 5.2,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 39,
        "oneYear": 26,
        "twoYear": 84,
        "confidence": 0.78
      }
    }
  },
  {
    "id": "mc-knitting-circle",
    "name": "Knitting Circle",
    "description": "Enthusiasts passionate about Knitting Circle, sharing techniques, projects, and connecting with fellow hobbyists",
    "category": "hobby",
    "size": "emerging",
    "platform": "tiktok",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "knitting circle",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 12,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 14
    },
    "segments": [
      "EB3",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-knitting-circle",
        "name": "Knitting Circle Trend",
        "description": "Current trending topic within the Knitting Circle community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 91,
        "linkedHashtags": [
          "#knittingcircle"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-knitting-circle",
        "handle": "@knittingcircle",
        "platform": "tiktok",
        "followers": 241203,
        "tier": "macro",
        "engagement": 11.8,
        "niche": [
          "knitting circle"
        ],
        "authenticity": 99,
        "collaboration": {
          "averageRate": 2412,
          "responseRate": 75,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 87,
          "audienceMatch": 94
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 82,
        "sentiment": 93,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 76,
            "duration": "6 months",
            "reach": 57766
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 16.0,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 31,
        "oneYear": 46,
        "twoYear": 93,
        "confidence": 0.73
      }
    }
  },
  {
    "id": "mc-urban-gardeners",
    "name": "Urban Gardeners",
    "description": "Enthusiasts passionate about Urban Gardeners, sharing techniques, projects, and connecting with fellow hobbyists",
    "category": "hobby",
    "size": "established",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "urban gardeners",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "mountain-west-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 6,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 15
    },
    "segments": [
      "QS2",
      "LE1",
      "EB1",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-urban-gardeners",
        "name": "Urban Gardeners Trend",
        "description": "Current trending topic within the Urban Gardeners community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 88,
        "linkedHashtags": [
          "#urbangardeners"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-urban-gardeners",
        "handle": "@urbangardeners",
        "platform": "reddit",
        "followers": 229574,
        "tier": "macro",
        "engagement": 9.6,
        "niche": [
          "urban gardeners"
        ],
        "authenticity": 89,
        "collaboration": {
          "averageRate": 2295,
          "responseRate": 81,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 88,
          "audienceMatch": 92
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 53,
        "sentiment": 78,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 87,
            "duration": "6 months",
            "reach": 118540
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 3.2,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 32,
        "oneYear": 49,
        "twoYear": 119,
        "confidence": 0.78
      }
    }
  },
  {
    "id": "mc-amateur-astronomers",
    "name": "Amateur Astronomers",
    "description": "Enthusiasts passionate about Amateur Astronomers, sharing techniques, projects, and connecting with fellow hobbyists",
    "category": "hobby",
    "size": "established",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "amateur astronomers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "midwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 13,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 27
    },
    "segments": [
      "QS1",
      "EB1",
      "LE1"
    ],
    "trends": [
      {
        "id": "trend-amateur-astronomers",
        "name": "Amateur Astronomers Trend",
        "description": "Current trending topic within the Amateur Astronomers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 71,
        "linkedHashtags": [
          "#amateurastronomers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-amateur-astronomers",
        "handle": "@amateurastronomers",
        "platform": "instagram",
        "followers": 16926,
        "tier": "micro",
        "engagement": 3.8,
        "niche": [
          "amateur astronomers"
        ],
        "authenticity": 89,
        "collaboration": {
          "averageRate": 169,
          "responseRate": 63,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 86,
          "audienceMatch": 86
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 67,
        "sentiment": 85,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 88,
            "duration": "6 months",
            "reach": 38720
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 7.0,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 20,
        "oneYear": 71,
        "twoYear": 44,
        "confidence": 1.00
      }
    }
  },
  {
    "id": "mc-bookworms",
    "name": "Bookworms",
    "description": "Enthusiasts passionate about Bookworms, sharing techniques, projects, and connecting with fellow hobbyists",
    "category": "hobby",
    "size": "emerging",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "bookworms",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "midwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 15,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 26
    },
    "segments": [
      "QS1",
      "EB1",
      "LE3",
      "QS3"
    ],
    "trends": [
      {
        "id": "trend-bookworms",
        "name": "Bookworms Trend",
        "description": "Current trending topic within the Bookworms community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 95,
        "linkedHashtags": [
          "#bookworms"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-bookworms",
        "handle": "@bookworms",
        "platform": "discord",
        "followers": 68261,
        "tier": "micro",
        "engagement": 5.6,
        "niche": [
          "bookworms"
        ],
        "authenticity": 80,
        "collaboration": {
          "averageRate": 682,
          "responseRate": 77,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 89,
          "audienceMatch": 93
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 60,
        "sentiment": 91,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 79,
            "duration": "6 months",
            "reach": 47335
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 2.7,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 19,
        "oneYear": 34,
        "twoYear": 88,
        "confidence": 0.74
      }
    }
  },
  {
    "id": "mc-vinyl-collectors",
    "name": "Vinyl Collectors",
    "description": "Enthusiasts passionate about Vinyl Collectors, sharing techniques, projects, and connecting with fellow hobbyists",
    "category": "hobby",
    "size": "growing",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "vinyl collectors",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 5,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 28
    },
    "segments": [
      "LE1",
      "QS1",
      "LE2",
      "EB3"
    ],
    "trends": [
      {
        "id": "trend-vinyl-collectors",
        "name": "Vinyl Collectors Trend",
        "description": "Current trending topic within the Vinyl Collectors community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 76,
        "linkedHashtags": [
          "#vinylcollectors"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-vinyl-collectors",
        "handle": "@vinylcollectors",
        "platform": "reddit",
        "followers": 213171,
        "tier": "macro",
        "engagement": 6.3,
        "niche": [
          "vinyl collectors"
        ],
        "authenticity": 82,
        "collaboration": {
          "averageRate": 2131,
          "responseRate": 88,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 83,
          "audienceMatch": 94
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 55,
        "sentiment": 88,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 90,
            "duration": "6 months",
            "reach": 29556
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 4.3,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 17,
        "oneYear": 36,
        "twoYear": 114,
        "confidence": 1.00
      }
    }
  },
  {
    "id": "mc-model-train-builders",
    "name": "Model Train Builders",
    "description": "Enthusiasts passionate about Model Train Builders, sharing techniques, projects, and connecting with fellow hobbyists",
    "category": "hobby",
    "size": "massive",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "model train builders",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "central-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 11,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 49
    },
    "segments": [
      "QS3",
      "LE2",
      "QS1"
    ],
    "trends": [
      {
        "id": "trend-model-train-builders",
        "name": "Model Train Builders Trend",
        "description": "Current trending topic within the Model Train Builders community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 92,
        "linkedHashtags": [
          "#modeltrainbuilders"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-model-train-builders",
        "handle": "@modeltrainbuilders",
        "platform": "discord",
        "followers": 470221,
        "tier": "macro",
        "engagement": 5.2,
        "niche": [
          "model train builders"
        ],
        "authenticity": 90,
        "collaboration": {
          "averageRate": 4702,
          "responseRate": 86,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 87,
          "audienceMatch": 84
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 86,
        "sentiment": 78,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 82,
            "duration": "6 months",
            "reach": 105388
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 5.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 34,
        "oneYear": 36,
        "twoYear": 52,
        "confidence": 0.82
      }
    }
  },
  {
    "id": "mc-craft-beer-brewers",
    "name": "Craft Beer Brewers",
    "description": "Enthusiasts passionate about Craft Beer Brewers, sharing techniques, projects, and connecting with fellow hobbyists",
    "category": "hobby",
    "size": "growing",
    "platform": "youtube",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "craft beer brewers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "western-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 18,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 37
    },
    "segments": [
      "EB2",
      "LE1",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-craft-beer-brewers",
        "name": "Craft Beer Brewers Trend",
        "description": "Current trending topic within the Craft Beer Brewers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 60,
        "linkedHashtags": [
          "#craftbeerbrewers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-craft-beer-brewers",
        "handle": "@craftbeerbrewers",
        "platform": "youtube",
        "followers": 428436,
        "tier": "macro",
        "engagement": 7.8,
        "niche": [
          "craft beer brewers"
        ],
        "authenticity": 82,
        "collaboration": {
          "averageRate": 4284,
          "responseRate": 69,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 83,
          "audienceMatch": 86
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 89,
        "sentiment": 82,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 83,
            "duration": "6 months",
            "reach": 42052
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 9.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 41,
        "oneYear": 35,
        "twoYear": 116,
        "confidence": 0.80
      }
    }
  },
  {
    "id": "mc-photography-hobbyists",
    "name": "Photography Hobbyists",
    "description": "Enthusiasts passionate about Photography Hobbyists, sharing techniques, projects, and connecting with fellow hobbyists",
    "category": "hobby",
    "size": "massive",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "photography hobbyists",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 13,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 43
    },
    "segments": [
      "LE1",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-photography-hobbyists",
        "name": "Photography Hobbyists Trend",
        "description": "Current trending topic within the Photography Hobbyists community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 83,
        "linkedHashtags": [
          "#photographyhobbyists"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-photography-hobbyists",
        "handle": "@photographyhobbyists",
        "platform": "instagram",
        "followers": 49069,
        "tier": "micro",
        "engagement": 5.4,
        "niche": [
          "photography hobbyists"
        ],
        "authenticity": 93,
        "collaboration": {
          "averageRate": 490,
          "responseRate": 68,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 84,
          "audienceMatch": 85
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 70,
        "sentiment": 83,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 94,
            "duration": "6 months",
            "reach": 117557
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 14.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 38,
        "oneYear": 30,
        "twoYear": 98,
        "confidence": 0.82
      }
    }
  },
  {
    "id": "mc-pottery-makers",
    "name": "Pottery Makers",
    "description": "Enthusiasts passionate about Pottery Makers, sharing techniques, projects, and connecting with fellow hobbyists",
    "category": "hobby",
    "size": "established",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "pottery makers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "eastern-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 11,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 13
    },
    "segments": [
      "EB1",
      "QS2",
      "QS1"
    ],
    "trends": [
      {
        "id": "trend-pottery-makers",
        "name": "Pottery Makers Trend",
        "description": "Current trending topic within the Pottery Makers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 80,
        "linkedHashtags": [
          "#potterymakers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-pottery-makers",
        "handle": "@potterymakers",
        "platform": "instagram",
        "followers": 437172,
        "tier": "macro",
        "engagement": 11.0,
        "niche": [
          "pottery makers"
        ],
        "authenticity": 95,
        "collaboration": {
          "averageRate": 4371,
          "responseRate": 68,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 94,
          "audienceMatch": 86
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 61,
        "sentiment": 86,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 88,
            "duration": "6 months",
            "reach": 44545
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 8.5,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 38,
        "oneYear": 41,
        "twoYear": 73,
        "confidence": 0.77
      }
    }
  },
  {
    "id": "mc-woodworkers",
    "name": "Woodworkers",
    "description": "Enthusiasts passionate about Woodworkers, sharing techniques, projects, and connecting with fellow hobbyists",
    "category": "hobby",
    "size": "established",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "woodworkers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "southwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 15,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 32
    },
    "segments": [
      "EB1",
      "EB3",
      "LE3"
    ],
    "trends": [
      {
        "id": "trend-woodworkers",
        "name": "Woodworkers Trend",
        "description": "Current trending topic within the Woodworkers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 60,
        "linkedHashtags": [
          "#woodworkers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-woodworkers",
        "handle": "@woodworkers",
        "platform": "reddit",
        "followers": 34210,
        "tier": "micro",
        "engagement": 11.0,
        "niche": [
          "woodworkers"
        ],
        "authenticity": 83,
        "collaboration": {
          "averageRate": 342,
          "responseRate": 81,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 94,
          "audienceMatch": 90
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 58,
        "sentiment": 94,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 83,
            "duration": "6 months",
            "reach": 52012
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 6.6,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 28,
        "oneYear": 64,
        "twoYear": 102,
        "confidence": 0.91
      }
    }
  },
  {
    "id": "mc-coin-collectors",
    "name": "Coin Collectors",
    "description": "Enthusiasts passionate about Coin Collectors, sharing techniques, projects, and connecting with fellow hobbyists",
    "category": "hobby",
    "size": "massive",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "coin collectors",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 17,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 17
    },
    "segments": [
      "EB2",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-coin-collectors",
        "name": "Coin Collectors Trend",
        "description": "Current trending topic within the Coin Collectors community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 73,
        "linkedHashtags": [
          "#coincollectors"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-coin-collectors",
        "handle": "@coincollectors",
        "platform": "instagram",
        "followers": 322900,
        "tier": "macro",
        "engagement": 5.8,
        "niche": [
          "coin collectors"
        ],
        "authenticity": 87,
        "collaboration": {
          "averageRate": 3229,
          "responseRate": 88,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 80,
          "audienceMatch": 81
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 72,
        "sentiment": 83,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 87,
            "duration": "6 months",
            "reach": 26953
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 8.6,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 27,
        "oneYear": 51,
        "twoYear": 115,
        "confidence": 0.99
      }
    }
  },
  {
    "id": "mc-puzzle-solvers",
    "name": "Puzzle Solvers",
    "description": "Enthusiasts passionate about Puzzle Solvers, sharing techniques, projects, and connecting with fellow hobbyists",
    "category": "hobby",
    "size": "massive",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "puzzle solvers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "midwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 6,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 27
    },
    "segments": [
      "LE1",
      "LE2",
      "QS3",
      "EB3"
    ],
    "trends": [
      {
        "id": "trend-puzzle-solvers",
        "name": "Puzzle Solvers Trend",
        "description": "Current trending topic within the Puzzle Solvers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 80,
        "linkedHashtags": [
          "#puzzlesolvers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-puzzle-solvers",
        "handle": "@puzzlesolvers",
        "platform": "instagram",
        "followers": 400114,
        "tier": "macro",
        "engagement": 8.4,
        "niche": [
          "puzzle solvers"
        ],
        "authenticity": 85,
        "collaboration": {
          "averageRate": 4001,
          "responseRate": 62,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 91,
          "audienceMatch": 85
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 86,
        "sentiment": 84,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 88,
            "duration": "6 months",
            "reach": 114715
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 7.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 29,
        "oneYear": 51,
        "twoYear": 112,
        "confidence": 0.83
      }
    }
  },
  {
    "id": "mc-origami-artists",
    "name": "Origami Artists",
    "description": "Enthusiasts passionate about Origami Artists, sharing techniques, projects, and connecting with fellow hobbyists",
    "category": "hobby",
    "size": "massive",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "origami artists",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "western-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 8,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 28
    },
    "segments": [
      "EB3",
      "LE1",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-origami-artists",
        "name": "Origami Artists Trend",
        "description": "Current trending topic within the Origami Artists community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 94,
        "linkedHashtags": [
          "#origamiartists"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-origami-artists",
        "handle": "@origamiartists",
        "platform": "reddit",
        "followers": 66154,
        "tier": "micro",
        "engagement": 8.3,
        "niche": [
          "origami artists"
        ],
        "authenticity": 84,
        "collaboration": {
          "averageRate": 661,
          "responseRate": 75,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 85,
          "audienceMatch": 87
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 76,
        "sentiment": 90,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 89,
            "duration": "6 months",
            "reach": 98680
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 10.2,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 37,
        "oneYear": 59,
        "twoYear": 90,
        "confidence": 0.76
      }
    }
  },
  {
    "id": "mc-genealogy-researchers",
    "name": "Genealogy Researchers",
    "description": "Enthusiasts passionate about Genealogy Researchers, sharing techniques, projects, and connecting with fellow hobbyists",
    "category": "hobby",
    "size": "emerging",
    "platform": "tiktok",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "genealogy researchers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "western-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 7,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 43
    },
    "segments": [
      "QS1",
      "EB1",
      "LE3",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-genealogy-researchers",
        "name": "Genealogy Researchers Trend",
        "description": "Current trending topic within the Genealogy Researchers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 94,
        "linkedHashtags": [
          "#genealogyresearchers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-genealogy-researchers",
        "handle": "@genealogyresearchers",
        "platform": "tiktok",
        "followers": 422789,
        "tier": "macro",
        "engagement": 8.9,
        "niche": [
          "genealogy researchers"
        ],
        "authenticity": 91,
        "collaboration": {
          "averageRate": 4227,
          "responseRate": 80,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 90,
          "audienceMatch": 83
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 87,
        "sentiment": 80,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 82,
            "duration": "6 months",
            "reach": 119888
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 9.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 44,
        "oneYear": 33,
        "twoYear": 54,
        "confidence": 0.84
      }
    }
  },
  {
    "id": "mc-k-pop-stans",
    "name": "K-Pop Stans",
    "description": "A cultural community celebrating K-Pop Stans, sharing content and building connections around shared interests",
    "category": "cultural",
    "size": "growing",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "k-pop stans",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "eastern-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 13,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 40
    },
    "segments": [
      "EB3",
      "LE3"
    ],
    "trends": [
      {
        "id": "trend-k-pop-stans",
        "name": "K-Pop Stans Trend",
        "description": "Current trending topic within the K-Pop Stans community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 75,
        "linkedHashtags": [
          "#k-popstans"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-k-pop-stans",
        "handle": "@k-popstans",
        "platform": "instagram",
        "followers": 39427,
        "tier": "micro",
        "engagement": 10.1,
        "niche": [
          "k-pop stans"
        ],
        "authenticity": 84,
        "collaboration": {
          "averageRate": 394,
          "responseRate": 75,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 88,
          "audienceMatch": 88
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 81,
        "sentiment": 77,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 83,
            "duration": "6 months",
            "reach": 119083
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 5.8,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 19,
        "oneYear": 43,
        "twoYear": 47,
        "confidence": 0.86
      }
    }
  },
  {
    "id": "mc-anime-community",
    "name": "Anime Community",
    "description": "A cultural community celebrating Anime Community, sharing content and building connections around shared interests",
    "category": "cultural",
    "size": "massive",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "anime community",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 15,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 41
    },
    "segments": [
      "QS3",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-anime-community",
        "name": "Anime Community Trend",
        "description": "Current trending topic within the Anime Community community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 63,
        "linkedHashtags": [
          "#animecommunity"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-anime-community",
        "handle": "@animecommunity",
        "platform": "instagram",
        "followers": 160761,
        "tier": "macro",
        "engagement": 9.8,
        "niche": [
          "anime community"
        ],
        "authenticity": 82,
        "collaboration": {
          "averageRate": 1607,
          "responseRate": 63,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 83,
          "audienceMatch": 90
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 82,
        "sentiment": 80,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 84,
            "duration": "6 months",
            "reach": 69297
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 6.7,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 23,
        "oneYear": 44,
        "twoYear": 107,
        "confidence": 0.74
      }
    }
  },
  {
    "id": "mc-latin-music-lovers",
    "name": "Latin Music Lovers",
    "description": "A cultural community celebrating Latin Music Lovers, sharing content and building connections around shared interests",
    "category": "cultural",
    "size": "growing",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "latin music lovers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "mountain-west-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 17,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 39
    },
    "segments": [
      "EB3",
      "LE1"
    ],
    "trends": [
      {
        "id": "trend-latin-music-lovers",
        "name": "Latin Music Lovers Trend",
        "description": "Current trending topic within the Latin Music Lovers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 75,
        "linkedHashtags": [
          "#latinmusiclovers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-latin-music-lovers",
        "handle": "@latinmusiclovers",
        "platform": "discord",
        "followers": 47262,
        "tier": "micro",
        "engagement": 5.8,
        "niche": [
          "latin music lovers"
        ],
        "authenticity": 97,
        "collaboration": {
          "averageRate": 472,
          "responseRate": 86,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 87,
          "audienceMatch": 83
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 86,
        "sentiment": 77,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 94,
            "duration": "6 months",
            "reach": 39941
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 4.7,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 37,
        "oneYear": 43,
        "twoYear": 110,
        "confidence": 0.99
      }
    }
  },
  {
    "id": "mc-jazz-enthusiasts",
    "name": "Jazz Enthusiasts",
    "description": "A cultural community celebrating Jazz Enthusiasts, sharing content and building connections around shared interests",
    "category": "cultural",
    "size": "emerging",
    "platform": "youtube",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "jazz enthusiasts",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 15,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 44
    },
    "segments": [
      "EB3",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-jazz-enthusiasts",
        "name": "Jazz Enthusiasts Trend",
        "description": "Current trending topic within the Jazz Enthusiasts community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 79,
        "linkedHashtags": [
          "#jazzenthusiasts"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-jazz-enthusiasts",
        "handle": "@jazzenthusiasts",
        "platform": "youtube",
        "followers": 85845,
        "tier": "micro",
        "engagement": 9.2,
        "niche": [
          "jazz enthusiasts"
        ],
        "authenticity": 88,
        "collaboration": {
          "averageRate": 858,
          "responseRate": 71,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 80,
          "audienceMatch": 89
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 81,
        "sentiment": 89,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 87,
            "duration": "6 months",
            "reach": 22611
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 10.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 41,
        "oneYear": 48,
        "twoYear": 75,
        "confidence": 0.98
      }
    }
  },
  {
    "id": "mc-theater-kids",
    "name": "Theater Kids",
    "description": "A cultural community celebrating Theater Kids, sharing content and building connections around shared interests",
    "category": "cultural",
    "size": "growing",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "theater kids",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "midwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 8,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 21
    },
    "segments": [
      "QS1",
      "LE1"
    ],
    "trends": [
      {
        "id": "trend-theater-kids",
        "name": "Theater Kids Trend",
        "description": "Current trending topic within the Theater Kids community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 84,
        "linkedHashtags": [
          "#theaterkids"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-theater-kids",
        "handle": "@theaterkids",
        "platform": "instagram",
        "followers": 324306,
        "tier": "macro",
        "engagement": 7.6,
        "niche": [
          "theater kids"
        ],
        "authenticity": 86,
        "collaboration": {
          "averageRate": 3243,
          "responseRate": 85,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 80,
          "audienceMatch": 87
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 63,
        "sentiment": 88,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 88,
            "duration": "6 months",
            "reach": 85419
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 6.5,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 20,
        "oneYear": 74,
        "twoYear": 74,
        "confidence": 0.82
      }
    }
  },
  {
    "id": "mc-film-buffs",
    "name": "Film Buffs",
    "description": "A cultural community celebrating Film Buffs, sharing content and building connections around shared interests",
    "category": "cultural",
    "size": "emerging",
    "platform": "tiktok",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "film buffs",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "midwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 19,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 25
    },
    "segments": [
      "LE3",
      "QS2",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-film-buffs",
        "name": "Film Buffs Trend",
        "description": "Current trending topic within the Film Buffs community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 93,
        "linkedHashtags": [
          "#filmbuffs"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-film-buffs",
        "handle": "@filmbuffs",
        "platform": "tiktok",
        "followers": 13136,
        "tier": "micro",
        "engagement": 2.3,
        "niche": [
          "film buffs"
        ],
        "authenticity": 80,
        "collaboration": {
          "averageRate": 131,
          "responseRate": 75,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 88,
          "audienceMatch": 91
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 82,
        "sentiment": 79,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 87,
            "duration": "6 months",
            "reach": 117450
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 5.7,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 34,
        "oneYear": 74,
        "twoYear": 109,
        "confidence": 0.89
      }
    }
  },
  {
    "id": "mc-literature-circles",
    "name": "Literature Circles",
    "description": "A cultural community celebrating Literature Circles, sharing content and building connections around shared interests",
    "category": "cultural",
    "size": "emerging",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "literature circles",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 13,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 16
    },
    "segments": [
      "EB1",
      "LE3",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-literature-circles",
        "name": "Literature Circles Trend",
        "description": "Current trending topic within the Literature Circles community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 92,
        "linkedHashtags": [
          "#literaturecircles"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-literature-circles",
        "handle": "@literaturecircles",
        "platform": "instagram",
        "followers": 135230,
        "tier": "macro",
        "engagement": 11.2,
        "niche": [
          "literature circles"
        ],
        "authenticity": 94,
        "collaboration": {
          "averageRate": 1352,
          "responseRate": 66,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 89,
          "audienceMatch": 94
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 54,
        "sentiment": 89,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 80,
            "duration": "6 months",
            "reach": 90326
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 2.1,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 36,
        "oneYear": 50,
        "twoYear": 62,
        "confidence": 0.76
      }
    }
  },
  {
    "id": "mc-art-gallery-goers",
    "name": "Art Gallery Goers",
    "description": "A cultural community celebrating Art Gallery Goers, sharing content and building connections around shared interests",
    "category": "cultural",
    "size": "growing",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "art gallery goers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "mountain-west-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 16,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 18
    },
    "segments": [
      "LE2",
      "LE3"
    ],
    "trends": [
      {
        "id": "trend-art-gallery-goers",
        "name": "Art Gallery Goers Trend",
        "description": "Current trending topic within the Art Gallery Goers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 80,
        "linkedHashtags": [
          "#artgallerygoers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-art-gallery-goers",
        "handle": "@artgallerygoers",
        "platform": "reddit",
        "followers": 456922,
        "tier": "macro",
        "engagement": 9.0,
        "niche": [
          "art gallery goers"
        ],
        "authenticity": 87,
        "collaboration": {
          "averageRate": 4569,
          "responseRate": 67,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 86,
          "audienceMatch": 88
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 62,
        "sentiment": 94,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 86,
            "duration": "6 months",
            "reach": 67668
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 9.2,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 33,
        "oneYear": 54,
        "twoYear": 45,
        "confidence": 0.83
      }
    }
  },
  {
    "id": "mc-museum-enthusiasts",
    "name": "Museum Enthusiasts",
    "description": "A cultural community celebrating Museum Enthusiasts, sharing content and building connections around shared interests",
    "category": "cultural",
    "size": "growing",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "museum enthusiasts",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 5,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 10
    },
    "segments": [
      "EB3",
      "LE1"
    ],
    "trends": [
      {
        "id": "trend-museum-enthusiasts",
        "name": "Museum Enthusiasts Trend",
        "description": "Current trending topic within the Museum Enthusiasts community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 86,
        "linkedHashtags": [
          "#museumenthusiasts"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-museum-enthusiasts",
        "handle": "@museumenthusiasts",
        "platform": "reddit",
        "followers": 293838,
        "tier": "macro",
        "engagement": 7.5,
        "niche": [
          "museum enthusiasts"
        ],
        "authenticity": 82,
        "collaboration": {
          "averageRate": 2938,
          "responseRate": 77,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 89,
          "audienceMatch": 87
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 59,
        "sentiment": 92,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 80,
            "duration": "6 months",
            "reach": 30345
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 14.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 28,
        "oneYear": 51,
        "twoYear": 89,
        "confidence": 0.76
      }
    }
  },
  {
    "id": "mc-cultural-preservationists",
    "name": "Cultural Preservationists",
    "description": "A cultural community celebrating Cultural Preservationists, sharing content and building connections around shared interests",
    "category": "cultural",
    "size": "emerging",
    "platform": "youtube",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "cultural preservationists",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "southeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 17,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 23
    },
    "segments": [
      "QS2",
      "QS1",
      "QS3"
    ],
    "trends": [
      {
        "id": "trend-cultural-preservationists",
        "name": "Cultural Preservationists Trend",
        "description": "Current trending topic within the Cultural Preservationists community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 62,
        "linkedHashtags": [
          "#culturalpreservationists"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-cultural-preservationists",
        "handle": "@culturalpreservationists",
        "platform": "youtube",
        "followers": 357074,
        "tier": "macro",
        "engagement": 11.3,
        "niche": [
          "cultural preservationists"
        ],
        "authenticity": 98,
        "collaboration": {
          "averageRate": 3570,
          "responseRate": 74,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 81,
          "audienceMatch": 80
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 72,
        "sentiment": 75,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 90,
            "duration": "6 months",
            "reach": 32305
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 4.2,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 16,
        "oneYear": 44,
        "twoYear": 60,
        "confidence": 0.73
      }
    }
  },
  {
    "id": "mc-folk-music-revival",
    "name": "Folk Music Revival",
    "description": "A cultural community celebrating Folk Music Revival, sharing content and building connections around shared interests",
    "category": "cultural",
    "size": "established",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "folk music revival",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 8,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 43
    },
    "segments": [
      "LE1",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-folk-music-revival",
        "name": "Folk Music Revival Trend",
        "description": "Current trending topic within the Folk Music Revival community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 74,
        "linkedHashtags": [
          "#folkmusicrevival"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-folk-music-revival",
        "handle": "@folkmusicrevival",
        "platform": "reddit",
        "followers": 80143,
        "tier": "micro",
        "engagement": 5.9,
        "niche": [
          "folk music revival"
        ],
        "authenticity": 91,
        "collaboration": {
          "averageRate": 801,
          "responseRate": 85,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 89,
          "audienceMatch": 80
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 76,
        "sentiment": 89,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 75,
            "duration": "6 months",
            "reach": 35725
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 9.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 39,
        "oneYear": 54,
        "twoYear": 113,
        "confidence": 0.81
      }
    }
  },
  {
    "id": "mc-indie-music-scene",
    "name": "Indie Music Scene",
    "description": "A cultural community celebrating Indie Music Scene, sharing content and building connections around shared interests",
    "category": "cultural",
    "size": "established",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "indie music scene",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "western-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 9,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 38
    },
    "segments": [
      "LE2",
      "QS3",
      "LE1",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-indie-music-scene",
        "name": "Indie Music Scene Trend",
        "description": "Current trending topic within the Indie Music Scene community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 80,
        "linkedHashtags": [
          "#indiemusicscene"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-indie-music-scene",
        "handle": "@indiemusicscene",
        "platform": "discord",
        "followers": 207829,
        "tier": "macro",
        "engagement": 3.4,
        "niche": [
          "indie music scene"
        ],
        "authenticity": 92,
        "collaboration": {
          "averageRate": 2078,
          "responseRate": 69,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 82,
          "audienceMatch": 94
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 61,
        "sentiment": 86,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 92,
            "duration": "6 months",
            "reach": 50159
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 7.8,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 30,
        "oneYear": 68,
        "twoYear": 54,
        "confidence": 0.82
      }
    }
  },
  {
    "id": "mc-poetry-slam",
    "name": "Poetry Slam",
    "description": "A cultural community celebrating Poetry Slam, sharing content and building connections around shared interests",
    "category": "cultural",
    "size": "massive",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "poetry slam",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "mountain-west-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 5,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 12
    },
    "segments": [
      "EB2",
      "LE3"
    ],
    "trends": [
      {
        "id": "trend-poetry-slam",
        "name": "Poetry Slam Trend",
        "description": "Current trending topic within the Poetry Slam community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 83,
        "linkedHashtags": [
          "#poetryslam"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-poetry-slam",
        "handle": "@poetryslam",
        "platform": "discord",
        "followers": 329320,
        "tier": "macro",
        "engagement": 7.7,
        "niche": [
          "poetry slam"
        ],
        "authenticity": 92,
        "collaboration": {
          "averageRate": 3293,
          "responseRate": 81,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 93,
          "audienceMatch": 82
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 73,
        "sentiment": 76,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 87,
            "duration": "6 months",
            "reach": 63274
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 7.0,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 39,
        "oneYear": 69,
        "twoYear": 75,
        "confidence": 0.93
      }
    }
  },
  {
    "id": "mc-dance-community",
    "name": "Dance Community",
    "description": "A cultural community celebrating Dance Community, sharing content and building connections around shared interests",
    "category": "cultural",
    "size": "massive",
    "platform": "tiktok",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "dance community",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "midwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 6,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 10
    },
    "segments": [
      "LE1",
      "LE2",
      "EB3"
    ],
    "trends": [
      {
        "id": "trend-dance-community",
        "name": "Dance Community Trend",
        "description": "Current trending topic within the Dance Community community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 67,
        "linkedHashtags": [
          "#dancecommunity"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-dance-community",
        "handle": "@dancecommunity",
        "platform": "tiktok",
        "followers": 111921,
        "tier": "macro",
        "engagement": 9.4,
        "niche": [
          "dance community"
        ],
        "authenticity": 81,
        "collaboration": {
          "averageRate": 1119,
          "responseRate": 78,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 85,
          "audienceMatch": 93
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 53,
        "sentiment": 87,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 84,
            "duration": "6 months",
            "reach": 40424
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 4.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 42,
        "oneYear": 50,
        "twoYear": 116,
        "confidence": 0.99
      }
    }
  },
  {
    "id": "mc-opera-lovers",
    "name": "Opera Lovers",
    "description": "A cultural community celebrating Opera Lovers, sharing content and building connections around shared interests",
    "category": "cultural",
    "size": "growing",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "opera lovers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 14,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 28
    },
    "segments": [
      "LE2",
      "QS2",
      "QS1"
    ],
    "trends": [
      {
        "id": "trend-opera-lovers",
        "name": "Opera Lovers Trend",
        "description": "Current trending topic within the Opera Lovers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 64,
        "linkedHashtags": [
          "#operalovers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-opera-lovers",
        "handle": "@operalovers",
        "platform": "reddit",
        "followers": 466671,
        "tier": "macro",
        "engagement": 6.9,
        "niche": [
          "opera lovers"
        ],
        "authenticity": 81,
        "collaboration": {
          "averageRate": 4666,
          "responseRate": 88,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 93,
          "audienceMatch": 92
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 77,
        "sentiment": 90,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 82,
            "duration": "6 months",
            "reach": 103324
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 16.5,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 43,
        "oneYear": 52,
        "twoYear": 81,
        "confidence": 0.86
      }
    }
  },
  {
    "id": "mc-yoga-practitioners",
    "name": "Yoga Practitioners",
    "description": "Health and wellness focused community centered around Yoga Practitioners practices and lifestyle choices",
    "category": "wellness",
    "size": "emerging",
    "platform": "youtube",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "yoga practitioners",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 7,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 26
    },
    "segments": [
      "LE3",
      "EB1",
      "EB2"
    ],
    "trends": [
      {
        "id": "trend-yoga-practitioners",
        "name": "Yoga Practitioners Trend",
        "description": "Current trending topic within the Yoga Practitioners community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 76,
        "linkedHashtags": [
          "#yogapractitioners"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-yoga-practitioners",
        "handle": "@yogapractitioners",
        "platform": "youtube",
        "followers": 130960,
        "tier": "macro",
        "engagement": 7.3,
        "niche": [
          "yoga practitioners"
        ],
        "authenticity": 94,
        "collaboration": {
          "averageRate": 1309,
          "responseRate": 66,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 80,
          "audienceMatch": 88
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "health-fitness",
        "penetration": 52,
        "sentiment": 81,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 90,
            "duration": "6 months",
            "reach": 111488
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 13.0,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 25,
        "oneYear": 39,
        "twoYear": 56,
        "confidence": 0.78
      }
    }
  },
  {
    "id": "mc-meditation-circle",
    "name": "Meditation Circle",
    "description": "Health and wellness focused community centered around Meditation Circle practices and lifestyle choices",
    "category": "wellness",
    "size": "emerging",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "meditation circle",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 8,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 48
    },
    "segments": [
      "LE3",
      "QS3"
    ],
    "trends": [
      {
        "id": "trend-meditation-circle",
        "name": "Meditation Circle Trend",
        "description": "Current trending topic within the Meditation Circle community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 73,
        "linkedHashtags": [
          "#meditationcircle"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-meditation-circle",
        "handle": "@meditationcircle",
        "platform": "reddit",
        "followers": 186839,
        "tier": "macro",
        "engagement": 6.3,
        "niche": [
          "meditation circle"
        ],
        "authenticity": 97,
        "collaboration": {
          "averageRate": 1868,
          "responseRate": 77,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 83,
          "audienceMatch": 87
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "health-fitness",
        "penetration": 77,
        "sentiment": 86,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 94,
            "duration": "6 months",
            "reach": 71996
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 16.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 20,
        "oneYear": 67,
        "twoYear": 79,
        "confidence": 0.70
      }
    }
  },
  {
    "id": "mc-mental-health-advocates",
    "name": "Mental Health Advocates",
    "description": "Health and wellness focused community centered around Mental Health Advocates practices and lifestyle choices",
    "category": "wellness",
    "size": "established",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "mental health advocates",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 11,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 38
    },
    "segments": [
      "QS3",
      "EB3"
    ],
    "trends": [
      {
        "id": "trend-mental-health-advocates",
        "name": "Mental Health Advocates Trend",
        "description": "Current trending topic within the Mental Health Advocates community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 81,
        "linkedHashtags": [
          "#mentalhealthadvocates"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-mental-health-advocates",
        "handle": "@mentalhealthadvocates",
        "platform": "instagram",
        "followers": 76626,
        "tier": "micro",
        "engagement": 9.8,
        "niche": [
          "mental health advocates"
        ],
        "authenticity": 87,
        "collaboration": {
          "averageRate": 766,
          "responseRate": 83,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 80,
          "audienceMatch": 90
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "health-fitness",
        "penetration": 73,
        "sentiment": 77,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 91,
            "duration": "6 months",
            "reach": 118355
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 5.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 43,
        "oneYear": 52,
        "twoYear": 118,
        "confidence": 0.98
      }
    }
  },
  {
    "id": "mc-fitness-enthusiasts",
    "name": "Fitness Enthusiasts",
    "description": "Health and wellness focused community centered around Fitness Enthusiasts practices and lifestyle choices",
    "category": "wellness",
    "size": "massive",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "fitness enthusiasts",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 17,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 33
    },
    "segments": [
      "LE2",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-fitness-enthusiasts",
        "name": "Fitness Enthusiasts Trend",
        "description": "Current trending topic within the Fitness Enthusiasts community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 73,
        "linkedHashtags": [
          "#fitnessenthusiasts"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-fitness-enthusiasts",
        "handle": "@fitnessenthusiasts",
        "platform": "reddit",
        "followers": 165167,
        "tier": "macro",
        "engagement": 11.6,
        "niche": [
          "fitness enthusiasts"
        ],
        "authenticity": 92,
        "collaboration": {
          "averageRate": 1651,
          "responseRate": 63,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 91,
          "audienceMatch": 80
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "health-fitness",
        "penetration": 85,
        "sentiment": 92,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 75,
            "duration": "6 months",
            "reach": 56797
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 12.2,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 34,
        "oneYear": 26,
        "twoYear": 87,
        "confidence": 0.86
      }
    }
  },
  {
    "id": "mc-runners-community",
    "name": "Runners Community",
    "description": "Health and wellness focused community centered around Runners Community practices and lifestyle choices",
    "category": "wellness",
    "size": "growing",
    "platform": "youtube",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "runners community",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "midwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 19,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 29
    },
    "segments": [
      "EB2",
      "QS3"
    ],
    "trends": [
      {
        "id": "trend-runners-community",
        "name": "Runners Community Trend",
        "description": "Current trending topic within the Runners Community community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 98,
        "linkedHashtags": [
          "#runnerscommunity"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-runners-community",
        "handle": "@runnerscommunity",
        "platform": "youtube",
        "followers": 330524,
        "tier": "macro",
        "engagement": 11.5,
        "niche": [
          "runners community"
        ],
        "authenticity": 81,
        "collaboration": {
          "averageRate": 3305,
          "responseRate": 81,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 82,
          "audienceMatch": 81
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "health-fitness",
        "penetration": 76,
        "sentiment": 82,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 89,
            "duration": "6 months",
            "reach": 84495
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 5.2,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 36,
        "oneYear": 70,
        "twoYear": 44,
        "confidence": 0.77
      }
    }
  },
  {
    "id": "mc-nutrition-focused",
    "name": "Nutrition Focused",
    "description": "Health and wellness focused community centered around Nutrition Focused practices and lifestyle choices",
    "category": "wellness",
    "size": "established",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "nutrition focused",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "western-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 15,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 27
    },
    "segments": [
      "LE1",
      "EB2",
      "QS1"
    ],
    "trends": [
      {
        "id": "trend-nutrition-focused",
        "name": "Nutrition Focused Trend",
        "description": "Current trending topic within the Nutrition Focused community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 65,
        "linkedHashtags": [
          "#nutritionfocused"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-nutrition-focused",
        "handle": "@nutritionfocused",
        "platform": "discord",
        "followers": 222993,
        "tier": "macro",
        "engagement": 9.4,
        "niche": [
          "nutrition focused"
        ],
        "authenticity": 95,
        "collaboration": {
          "averageRate": 2229,
          "responseRate": 67,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 85,
          "audienceMatch": 89
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "health-fitness",
        "penetration": 51,
        "sentiment": 91,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 94,
            "duration": "6 months",
            "reach": 31409
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 9.5,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 15,
        "oneYear": 37,
        "twoYear": 112,
        "confidence": 0.96
      }
    }
  },
  {
    "id": "mc-holistic-health",
    "name": "Holistic Health",
    "description": "Health and wellness focused community centered around Holistic Health practices and lifestyle choices",
    "category": "wellness",
    "size": "emerging",
    "platform": "tiktok",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "holistic health",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "eastern-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 7,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 43
    },
    "segments": [
      "QS3",
      "QS1",
      "EB2",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-holistic-health",
        "name": "Holistic Health Trend",
        "description": "Current trending topic within the Holistic Health community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 83,
        "linkedHashtags": [
          "#holistichealth"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-holistic-health",
        "handle": "@holistichealth",
        "platform": "tiktok",
        "followers": 153750,
        "tier": "macro",
        "engagement": 4.7,
        "niche": [
          "holistic health"
        ],
        "authenticity": 84,
        "collaboration": {
          "averageRate": 1537,
          "responseRate": 89,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 86,
          "audienceMatch": 81
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "health-fitness",
        "penetration": 69,
        "sentiment": 93,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 88,
            "duration": "6 months",
            "reach": 28401
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 11.1,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 20,
        "oneYear": 39,
        "twoYear": 48,
        "confidence": 0.74
      }
    }
  },
  {
    "id": "mc-mindfulness-practice",
    "name": "Mindfulness Practice",
    "description": "Health and wellness focused community centered around Mindfulness Practice practices and lifestyle choices",
    "category": "wellness",
    "size": "emerging",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "mindfulness practice",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "western-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 16,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 16
    },
    "segments": [
      "LE2",
      "QS2",
      "QS1",
      "EB2"
    ],
    "trends": [
      {
        "id": "trend-mindfulness-practice",
        "name": "Mindfulness Practice Trend",
        "description": "Current trending topic within the Mindfulness Practice community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 77,
        "linkedHashtags": [
          "#mindfulnesspractice"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-mindfulness-practice",
        "handle": "@mindfulnesspractice",
        "platform": "discord",
        "followers": 368602,
        "tier": "macro",
        "engagement": 9.9,
        "niche": [
          "mindfulness practice"
        ],
        "authenticity": 86,
        "collaboration": {
          "averageRate": 3686,
          "responseRate": 68,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 83,
          "audienceMatch": 81
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "health-fitness",
        "penetration": 72,
        "sentiment": 93,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 81,
            "duration": "6 months",
            "reach": 41358
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 10.7,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 26,
        "oneYear": 32,
        "twoYear": 60,
        "confidence": 0.70
      }
    }
  },
  {
    "id": "mc-pilates-community",
    "name": "Pilates Community",
    "description": "Health and wellness focused community centered around Pilates Community practices and lifestyle choices",
    "category": "wellness",
    "size": "massive",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "pilates community",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "midwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 7,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 44
    },
    "segments": [
      "LE1",
      "LE2",
      "QS3"
    ],
    "trends": [
      {
        "id": "trend-pilates-community",
        "name": "Pilates Community Trend",
        "description": "Current trending topic within the Pilates Community community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 67,
        "linkedHashtags": [
          "#pilatescommunity"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-pilates-community",
        "handle": "@pilatescommunity",
        "platform": "reddit",
        "followers": 27373,
        "tier": "micro",
        "engagement": 7.9,
        "niche": [
          "pilates community"
        ],
        "authenticity": 93,
        "collaboration": {
          "averageRate": 273,
          "responseRate": 67,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 94,
          "audienceMatch": 84
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "health-fitness",
        "penetration": 69,
        "sentiment": 76,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 86,
            "duration": "6 months",
            "reach": 84044
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 11.0,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 42,
        "oneYear": 38,
        "twoYear": 101,
        "confidence": 0.97
      }
    }
  },
  {
    "id": "mc-cycling-enthusiasts",
    "name": "Cycling Enthusiasts",
    "description": "Health and wellness focused community centered around Cycling Enthusiasts practices and lifestyle choices",
    "category": "wellness",
    "size": "massive",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "cycling enthusiasts",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 12,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 15
    },
    "segments": [
      "QS1",
      "QS2",
      "LE1",
      "LE3"
    ],
    "trends": [
      {
        "id": "trend-cycling-enthusiasts",
        "name": "Cycling Enthusiasts Trend",
        "description": "Current trending topic within the Cycling Enthusiasts community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 79,
        "linkedHashtags": [
          "#cyclingenthusiasts"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-cycling-enthusiasts",
        "handle": "@cyclingenthusiasts",
        "platform": "discord",
        "followers": 264078,
        "tier": "macro",
        "engagement": 3.7,
        "niche": [
          "cycling enthusiasts"
        ],
        "authenticity": 98,
        "collaboration": {
          "averageRate": 2640,
          "responseRate": 63,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 94,
          "audienceMatch": 88
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "health-fitness",
        "penetration": 65,
        "sentiment": 86,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 88,
            "duration": "6 months",
            "reach": 75622
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 5.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 21,
        "oneYear": 64,
        "twoYear": 50,
        "confidence": 0.90
      }
    }
  },
  {
    "id": "mc-crossfit-athletes",
    "name": "CrossFit Athletes",
    "description": "Health and wellness focused community centered around CrossFit Athletes practices and lifestyle choices",
    "category": "wellness",
    "size": "established",
    "platform": "youtube",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "crossfit athletes",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "midwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 8,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 12
    },
    "segments": [
      "LE3",
      "EB3",
      "QS3"
    ],
    "trends": [
      {
        "id": "trend-crossfit-athletes",
        "name": "CrossFit Athletes Trend",
        "description": "Current trending topic within the CrossFit Athletes community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 80,
        "linkedHashtags": [
          "#crossfitathletes"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-crossfit-athletes",
        "handle": "@crossfitathletes",
        "platform": "youtube",
        "followers": 82050,
        "tier": "micro",
        "engagement": 4.6,
        "niche": [
          "crossfit athletes"
        ],
        "authenticity": 94,
        "collaboration": {
          "averageRate": 820,
          "responseRate": 74,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 89,
          "audienceMatch": 93
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "health-fitness",
        "penetration": 72,
        "sentiment": 89,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 91,
            "duration": "6 months",
            "reach": 33178
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 2.6,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 43,
        "oneYear": 53,
        "twoYear": 45,
        "confidence": 0.77
      }
    }
  },
  {
    "id": "mc-marathon-runners",
    "name": "Marathon Runners",
    "description": "Health and wellness focused community centered around Marathon Runners practices and lifestyle choices",
    "category": "wellness",
    "size": "emerging",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "marathon runners",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "mountain-west-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 7,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 12
    },
    "segments": [
      "EB1",
      "LE3",
      "QS3",
      "QS1"
    ],
    "trends": [
      {
        "id": "trend-marathon-runners",
        "name": "Marathon Runners Trend",
        "description": "Current trending topic within the Marathon Runners community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 87,
        "linkedHashtags": [
          "#marathonrunners"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-marathon-runners",
        "handle": "@marathonrunners",
        "platform": "discord",
        "followers": 432663,
        "tier": "macro",
        "engagement": 4.6,
        "niche": [
          "marathon runners"
        ],
        "authenticity": 82,
        "collaboration": {
          "averageRate": 4326,
          "responseRate": 73,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 82,
          "audienceMatch": 90
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "health-fitness",
        "penetration": 72,
        "sentiment": 79,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 86,
            "duration": "6 months",
            "reach": 25919
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 16.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 39,
        "oneYear": 38,
        "twoYear": 110,
        "confidence": 0.93
      }
    }
  },
  {
    "id": "mc-wellness-coaches",
    "name": "Wellness Coaches",
    "description": "Health and wellness focused community centered around Wellness Coaches practices and lifestyle choices",
    "category": "wellness",
    "size": "growing",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "wellness coaches",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "mountain-west-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 18,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 18
    },
    "segments": [
      "QS3",
      "EB1",
      "LE3",
      "EB2"
    ],
    "trends": [
      {
        "id": "trend-wellness-coaches",
        "name": "Wellness Coaches Trend",
        "description": "Current trending topic within the Wellness Coaches community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 98,
        "linkedHashtags": [
          "#wellnesscoaches"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-wellness-coaches",
        "handle": "@wellnesscoaches",
        "platform": "instagram",
        "followers": 400096,
        "tier": "macro",
        "engagement": 8.1,
        "niche": [
          "wellness coaches"
        ],
        "authenticity": 86,
        "collaboration": {
          "averageRate": 4000,
          "responseRate": 66,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 85,
          "audienceMatch": 84
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "health-fitness",
        "penetration": 74,
        "sentiment": 85,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 90,
            "duration": "6 months",
            "reach": 57274
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 9.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 40,
        "oneYear": 72,
        "twoYear": 111,
        "confidence": 0.76
      }
    }
  },
  {
    "id": "mc-alternative-medicine",
    "name": "Alternative Medicine",
    "description": "Health and wellness focused community centered around Alternative Medicine practices and lifestyle choices",
    "category": "wellness",
    "size": "emerging",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "alternative medicine",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 14,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 29
    },
    "segments": [
      "QS3",
      "LE1",
      "LE2",
      "LE3"
    ],
    "trends": [
      {
        "id": "trend-alternative-medicine",
        "name": "Alternative Medicine Trend",
        "description": "Current trending topic within the Alternative Medicine community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 67,
        "linkedHashtags": [
          "#alternativemedicine"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-alternative-medicine",
        "handle": "@alternativemedicine",
        "platform": "reddit",
        "followers": 136847,
        "tier": "macro",
        "engagement": 11.2,
        "niche": [
          "alternative medicine"
        ],
        "authenticity": 95,
        "collaboration": {
          "averageRate": 1368,
          "responseRate": 69,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 94,
          "audienceMatch": 84
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "health-fitness",
        "penetration": 82,
        "sentiment": 86,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 92,
            "duration": "6 months",
            "reach": 80533
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 3.1,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 21,
        "oneYear": 27,
        "twoYear": 92,
        "confidence": 0.88
      }
    }
  },
  {
    "id": "mc-breathwork-practitioners",
    "name": "Breathwork Practitioners",
    "description": "Health and wellness focused community centered around Breathwork Practitioners practices and lifestyle choices",
    "category": "wellness",
    "size": "established",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "breathwork practitioners",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "central-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 11,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 29
    },
    "segments": [
      "QS3",
      "LE1",
      "LE2",
      "LE3"
    ],
    "trends": [
      {
        "id": "trend-breathwork-practitioners",
        "name": "Breathwork Practitioners Trend",
        "description": "Current trending topic within the Breathwork Practitioners community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 98,
        "linkedHashtags": [
          "#breathworkpractitioners"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-breathwork-practitioners",
        "handle": "@breathworkpractitioners",
        "platform": "reddit",
        "followers": 210076,
        "tier": "macro",
        "engagement": 8.5,
        "niche": [
          "breathwork practitioners"
        ],
        "authenticity": 83,
        "collaboration": {
          "averageRate": 2100,
          "responseRate": 83,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 85,
          "audienceMatch": 84
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "health-fitness",
        "penetration": 73,
        "sentiment": 91,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 90,
            "duration": "6 months",
            "reach": 66552
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 8.7,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 31,
        "oneYear": 59,
        "twoYear": 52,
        "confidence": 0.73
      }
    }
  },
  {
    "id": "mc-ai-enthusiasts",
    "name": "AI Enthusiasts",
    "description": "Technology enthusiasts and professionals in the AI Enthusiasts space, sharing knowledge and innovations",
    "category": "tech",
    "size": "growing",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "ai enthusiasts",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "southwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 13,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 33
    },
    "segments": [
      "QS2",
      "QS1",
      "LE3",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-ai-enthusiasts",
        "name": "AI Enthusiasts Trend",
        "description": "Current trending topic within the AI Enthusiasts community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 94,
        "linkedHashtags": [
          "#aienthusiasts"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-ai-enthusiasts",
        "handle": "@aienthusiasts",
        "platform": "reddit",
        "followers": 255561,
        "tier": "macro",
        "engagement": 11.0,
        "niche": [
          "ai enthusiasts"
        ],
        "authenticity": 99,
        "collaboration": {
          "averageRate": 2555,
          "responseRate": 70,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 87,
          "audienceMatch": 92
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "tech-apps",
        "penetration": 75,
        "sentiment": 76,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 75,
            "duration": "6 months",
            "reach": 90432
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 10.5,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 27,
        "oneYear": 26,
        "twoYear": 54,
        "confidence": 0.94
      }
    }
  },
  {
    "id": "mc-crypto-community",
    "name": "Crypto Community",
    "description": "Technology enthusiasts and professionals in the Crypto Community space, sharing knowledge and innovations",
    "category": "tech",
    "size": "established",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "crypto community",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "eastern-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 11,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 11
    },
    "segments": [
      "EB3",
      "LE1"
    ],
    "trends": [
      {
        "id": "trend-crypto-community",
        "name": "Crypto Community Trend",
        "description": "Current trending topic within the Crypto Community community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 82,
        "linkedHashtags": [
          "#cryptocommunity"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-crypto-community",
        "handle": "@cryptocommunity",
        "platform": "discord",
        "followers": 33750,
        "tier": "micro",
        "engagement": 5.2,
        "niche": [
          "crypto community"
        ],
        "authenticity": 90,
        "collaboration": {
          "averageRate": 337,
          "responseRate": 76,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 86,
          "audienceMatch": 88
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "tech-apps",
        "penetration": 81,
        "sentiment": 91,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 89,
            "duration": "6 months",
            "reach": 95013
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 9.8,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 39,
        "oneYear": 33,
        "twoYear": 88,
        "confidence": 0.97
      }
    }
  },
  {
    "id": "mc-open-source-developers",
    "name": "Open Source Developers",
    "description": "Technology enthusiasts and professionals in the Open Source Developers space, sharing knowledge and innovations",
    "category": "tech",
    "size": "massive",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "open source developers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "western-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 5,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 38
    },
    "segments": [
      "EB3",
      "LE1",
      "QS2",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-open-source-developers",
        "name": "Open Source Developers Trend",
        "description": "Current trending topic within the Open Source Developers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 83,
        "linkedHashtags": [
          "#opensourcedevelopers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-open-source-developers",
        "handle": "@opensourcedevelopers",
        "platform": "reddit",
        "followers": 433534,
        "tier": "macro",
        "engagement": 7.4,
        "niche": [
          "open source developers"
        ],
        "authenticity": 93,
        "collaboration": {
          "averageRate": 4335,
          "responseRate": 68,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 90,
          "audienceMatch": 89
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "tech-apps",
        "penetration": 77,
        "sentiment": 75,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 76,
            "duration": "6 months",
            "reach": 22963
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 16.2,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 17,
        "oneYear": 33,
        "twoYear": 48,
        "confidence": 0.74
      }
    }
  },
  {
    "id": "mc-cybersecurity-professionals",
    "name": "Cybersecurity Professionals",
    "description": "Technology enthusiasts and professionals in the Cybersecurity Professionals space, sharing knowledge and innovations",
    "category": "tech",
    "size": "growing",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "cybersecurity professionals",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 13,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 29
    },
    "segments": [
      "LE2",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-cybersecurity-professionals",
        "name": "Cybersecurity Professionals Trend",
        "description": "Current trending topic within the Cybersecurity Professionals community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 82,
        "linkedHashtags": [
          "#cybersecurityprofessionals"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-cybersecurity-professionals",
        "handle": "@cybersecurityprofessionals",
        "platform": "discord",
        "followers": 350849,
        "tier": "macro",
        "engagement": 11.6,
        "niche": [
          "cybersecurity professionals"
        ],
        "authenticity": 91,
        "collaboration": {
          "averageRate": 3508,
          "responseRate": 73,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 86,
          "audienceMatch": 83
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "tech-apps",
        "penetration": 66,
        "sentiment": 89,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 92,
            "duration": "6 months",
            "reach": 101399
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 7.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 41,
        "oneYear": 41,
        "twoYear": 109,
        "confidence": 0.84
      }
    }
  },
  {
    "id": "mc-gaming-community",
    "name": "Gaming Community",
    "description": "Technology enthusiasts and professionals in the Gaming Community space, sharing knowledge and innovations",
    "category": "tech",
    "size": "growing",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "gaming community",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "central-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 14,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 12
    },
    "segments": [
      "LE3",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-gaming-community",
        "name": "Gaming Community Trend",
        "description": "Current trending topic within the Gaming Community community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 78,
        "linkedHashtags": [
          "#gamingcommunity"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-gaming-community",
        "handle": "@gamingcommunity",
        "platform": "discord",
        "followers": 79531,
        "tier": "micro",
        "engagement": 6.2,
        "niche": [
          "gaming community"
        ],
        "authenticity": 92,
        "collaboration": {
          "averageRate": 795,
          "responseRate": 74,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 88,
          "audienceMatch": 94
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "tech-apps",
        "penetration": 69,
        "sentiment": 90,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 77,
            "duration": "6 months",
            "reach": 38851
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 13.5,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 17,
        "oneYear": 42,
        "twoYear": 115,
        "confidence": 0.71
      }
    }
  },
  {
    "id": "mc-vr-ar-developers",
    "name": "VR/AR Developers",
    "description": "Technology enthusiasts and professionals in the VR/AR Developers space, sharing knowledge and innovations",
    "category": "tech",
    "size": "massive",
    "platform": "youtube",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "vr/ar developers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 18,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 35
    },
    "segments": [
      "EB3",
      "QS1"
    ],
    "trends": [
      {
        "id": "trend-vr-ar-developers",
        "name": "VR/AR Developers Trend",
        "description": "Current trending topic within the VR/AR Developers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 99,
        "linkedHashtags": [
          "#vr/ardevelopers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-vr-ar-developers",
        "handle": "@vr/ardevelopers",
        "platform": "youtube",
        "followers": 13336,
        "tier": "micro",
        "engagement": 10.7,
        "niche": [
          "vr/ar developers"
        ],
        "authenticity": 87,
        "collaboration": {
          "averageRate": 133,
          "responseRate": 87,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 82,
          "audienceMatch": 90
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "tech-apps",
        "penetration": 81,
        "sentiment": 92,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 83,
            "duration": "6 months",
            "reach": 68285
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 13.0,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 20,
        "oneYear": 49,
        "twoYear": 91,
        "confidence": 0.95
      }
    }
  },
  {
    "id": "mc-blockchain-builders",
    "name": "Blockchain Builders",
    "description": "Technology enthusiasts and professionals in the Blockchain Builders space, sharing knowledge and innovations",
    "category": "tech",
    "size": "massive",
    "platform": "tiktok",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "blockchain builders",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "midwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 12,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 41
    },
    "segments": [
      "LE3",
      "LE2",
      "QS1",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-blockchain-builders",
        "name": "Blockchain Builders Trend",
        "description": "Current trending topic within the Blockchain Builders community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 69,
        "linkedHashtags": [
          "#blockchainbuilders"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-blockchain-builders",
        "handle": "@blockchainbuilders",
        "platform": "tiktok",
        "followers": 372155,
        "tier": "macro",
        "engagement": 5.2,
        "niche": [
          "blockchain builders"
        ],
        "authenticity": 92,
        "collaboration": {
          "averageRate": 3721,
          "responseRate": 61,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 85,
          "audienceMatch": 93
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "tech-apps",
        "penetration": 89,
        "sentiment": 90,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 89,
            "duration": "6 months",
            "reach": 78356
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 16.1,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 28,
        "oneYear": 66,
        "twoYear": 48,
        "confidence": 0.77
      }
    }
  },
  {
    "id": "mc-no-code-makers",
    "name": "No-Code Makers",
    "description": "Technology enthusiasts and professionals in the No-Code Makers space, sharing knowledge and innovations",
    "category": "tech",
    "size": "established",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "no-code makers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 19,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 29
    },
    "segments": [
      "LE2",
      "QS2",
      "LE1"
    ],
    "trends": [
      {
        "id": "trend-no-code-makers",
        "name": "No-Code Makers Trend",
        "description": "Current trending topic within the No-Code Makers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 98,
        "linkedHashtags": [
          "#no-codemakers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-no-code-makers",
        "handle": "@no-codemakers",
        "platform": "instagram",
        "followers": 43073,
        "tier": "micro",
        "engagement": 6.9,
        "niche": [
          "no-code makers"
        ],
        "authenticity": 98,
        "collaboration": {
          "averageRate": 430,
          "responseRate": 84,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 91,
          "audienceMatch": 85
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "tech-apps",
        "penetration": 78,
        "sentiment": 93,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 82,
            "duration": "6 months",
            "reach": 60918
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 14.3,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 17,
        "oneYear": 43,
        "twoYear": 47,
        "confidence": 0.93
      }
    }
  },
  {
    "id": "mc-tech-podcasters",
    "name": "Tech Podcasters",
    "description": "Technology enthusiasts and professionals in the Tech Podcasters space, sharing knowledge and innovations",
    "category": "tech",
    "size": "massive",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "tech podcasters",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "southwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 16,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 31
    },
    "segments": [
      "EB2",
      "QS3",
      "LE2",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-tech-podcasters",
        "name": "Tech Podcasters Trend",
        "description": "Current trending topic within the Tech Podcasters community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 85,
        "linkedHashtags": [
          "#techpodcasters"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-tech-podcasters",
        "handle": "@techpodcasters",
        "platform": "discord",
        "followers": 352783,
        "tier": "macro",
        "engagement": 6.1,
        "niche": [
          "tech podcasters"
        ],
        "authenticity": 98,
        "collaboration": {
          "averageRate": 3527,
          "responseRate": 72,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 84,
          "audienceMatch": 84
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "tech-apps",
        "penetration": 70,
        "sentiment": 91,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 90,
            "duration": "6 months",
            "reach": 101444
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 3.8,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 25,
        "oneYear": 56,
        "twoYear": 70,
        "confidence": 0.72
      }
    }
  },
  {
    "id": "mc-devops-engineers",
    "name": "DevOps Engineers",
    "description": "Technology enthusiasts and professionals in the DevOps Engineers space, sharing knowledge and innovations",
    "category": "tech",
    "size": "growing",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "devops engineers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "southwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 9,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 45
    },
    "segments": [
      "QS2",
      "EB3",
      "LE3"
    ],
    "trends": [
      {
        "id": "trend-devops-engineers",
        "name": "DevOps Engineers Trend",
        "description": "Current trending topic within the DevOps Engineers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 98,
        "linkedHashtags": [
          "#devopsengineers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-devops-engineers",
        "handle": "@devopsengineers",
        "platform": "discord",
        "followers": 482096,
        "tier": "macro",
        "engagement": 11.5,
        "niche": [
          "devops engineers"
        ],
        "authenticity": 92,
        "collaboration": {
          "averageRate": 4820,
          "responseRate": 74,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 94,
          "audienceMatch": 94
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "tech-apps",
        "penetration": 51,
        "sentiment": 79,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 81,
            "duration": "6 months",
            "reach": 20710
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 14.7,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 17,
        "oneYear": 74,
        "twoYear": 55,
        "confidence": 0.87
      }
    }
  },
  {
    "id": "mc-mobile-app-developers",
    "name": "Mobile App Developers",
    "description": "Technology enthusiasts and professionals in the Mobile App Developers space, sharing knowledge and innovations",
    "category": "tech",
    "size": "growing",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "mobile app developers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 12,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 27
    },
    "segments": [
      "LE1",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-mobile-app-developers",
        "name": "Mobile App Developers Trend",
        "description": "Current trending topic within the Mobile App Developers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 63,
        "linkedHashtags": [
          "#mobileappdevelopers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-mobile-app-developers",
        "handle": "@mobileappdevelopers",
        "platform": "discord",
        "followers": 46990,
        "tier": "micro",
        "engagement": 4.0,
        "niche": [
          "mobile app developers"
        ],
        "authenticity": 91,
        "collaboration": {
          "averageRate": 469,
          "responseRate": 70,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 86,
          "audienceMatch": 81
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "tech-apps",
        "penetration": 67,
        "sentiment": 92,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 92,
            "duration": "6 months",
            "reach": 39107
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 3.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 38,
        "oneYear": 69,
        "twoYear": 116,
        "confidence": 0.91
      }
    }
  },
  {
    "id": "mc-web3-builders",
    "name": "Web3 Builders",
    "description": "Technology enthusiasts and professionals in the Web3 Builders space, sharing knowledge and innovations",
    "category": "tech",
    "size": "massive",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "web3 builders",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "midwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 19,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 24
    },
    "segments": [
      "LE2",
      "QS1",
      "LE1"
    ],
    "trends": [
      {
        "id": "trend-web3-builders",
        "name": "Web3 Builders Trend",
        "description": "Current trending topic within the Web3 Builders community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 87,
        "linkedHashtags": [
          "#web3builders"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-web3-builders",
        "handle": "@web3builders",
        "platform": "reddit",
        "followers": 65311,
        "tier": "micro",
        "engagement": 11.6,
        "niche": [
          "web3 builders"
        ],
        "authenticity": 98,
        "collaboration": {
          "averageRate": 653,
          "responseRate": 83,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 89,
          "audienceMatch": 81
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "tech-apps",
        "penetration": 75,
        "sentiment": 76,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 88,
            "duration": "6 months",
            "reach": 69461
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 11.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 41,
        "oneYear": 59,
        "twoYear": 89,
        "confidence": 0.83
      }
    }
  },
  {
    "id": "mc-hardware-hackers",
    "name": "Hardware Hackers",
    "description": "Technology enthusiasts and professionals in the Hardware Hackers space, sharing knowledge and innovations",
    "category": "tech",
    "size": "growing",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "hardware hackers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "midwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 15,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 24
    },
    "segments": [
      "QS2",
      "LE1"
    ],
    "trends": [
      {
        "id": "trend-hardware-hackers",
        "name": "Hardware Hackers Trend",
        "description": "Current trending topic within the Hardware Hackers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 78,
        "linkedHashtags": [
          "#hardwarehackers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-hardware-hackers",
        "handle": "@hardwarehackers",
        "platform": "reddit",
        "followers": 29823,
        "tier": "micro",
        "engagement": 2.3,
        "niche": [
          "hardware hackers"
        ],
        "authenticity": 95,
        "collaboration": {
          "averageRate": 298,
          "responseRate": 89,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 85,
          "audienceMatch": 86
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "tech-apps",
        "penetration": 73,
        "sentiment": 86,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 82,
            "duration": "6 months",
            "reach": 119669
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 11.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 20,
        "oneYear": 34,
        "twoYear": 115,
        "confidence": 0.81
      }
    }
  },
  {
    "id": "mc-tech-entrepreneurs",
    "name": "Tech Entrepreneurs",
    "description": "Technology enthusiasts and professionals in the Tech Entrepreneurs space, sharing knowledge and innovations",
    "category": "tech",
    "size": "growing",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "tech entrepreneurs",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "central-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 5,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 27
    },
    "segments": [
      "EB2",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-tech-entrepreneurs",
        "name": "Tech Entrepreneurs Trend",
        "description": "Current trending topic within the Tech Entrepreneurs community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 63,
        "linkedHashtags": [
          "#techentrepreneurs"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-tech-entrepreneurs",
        "handle": "@techentrepreneurs",
        "platform": "discord",
        "followers": 444131,
        "tier": "macro",
        "engagement": 4.4,
        "niche": [
          "tech entrepreneurs"
        ],
        "authenticity": 97,
        "collaboration": {
          "averageRate": 4441,
          "responseRate": 79,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 87,
          "audienceMatch": 84
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "tech-apps",
        "penetration": 58,
        "sentiment": 76,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 85,
            "duration": "6 months",
            "reach": 40871
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 9.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 17,
        "oneYear": 56,
        "twoYear": 50,
        "confidence": 0.99
      }
    }
  },
  {
    "id": "mc-cloud-architects",
    "name": "Cloud Architects",
    "description": "Technology enthusiasts and professionals in the Cloud Architects space, sharing knowledge and innovations",
    "category": "tech",
    "size": "growing",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "cloud architects",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "midwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 10,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 29
    },
    "segments": [
      "LE1",
      "EB3",
      "QS1",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-cloud-architects",
        "name": "Cloud Architects Trend",
        "description": "Current trending topic within the Cloud Architects community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 93,
        "linkedHashtags": [
          "#cloudarchitects"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-cloud-architects",
        "handle": "@cloudarchitects",
        "platform": "instagram",
        "followers": 503547,
        "tier": "macro",
        "engagement": 6.4,
        "niche": [
          "cloud architects"
        ],
        "authenticity": 96,
        "collaboration": {
          "averageRate": 5035,
          "responseRate": 67,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 84,
          "audienceMatch": 82
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "tech-apps",
        "penetration": 88,
        "sentiment": 84,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 77,
            "duration": "6 months",
            "reach": 26618
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 10.3,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 43,
        "oneYear": 59,
        "twoYear": 43,
        "confidence": 0.92
      }
    }
  },
  {
    "id": "mc-digital-artists",
    "name": "Digital Artists",
    "description": "Creative professionals and artists in Digital Artists, sharing work, collaborating, and building careers",
    "category": "creative",
    "size": "growing",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "digital artists",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 6,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 29
    },
    "segments": [
      "EB1",
      "LE3",
      "EB3"
    ],
    "trends": [
      {
        "id": "trend-digital-artists",
        "name": "Digital Artists Trend",
        "description": "Current trending topic within the Digital Artists community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 85,
        "linkedHashtags": [
          "#digitalartists"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-digital-artists",
        "handle": "@digitalartists",
        "platform": "reddit",
        "followers": 215097,
        "tier": "macro",
        "engagement": 7.2,
        "niche": [
          "digital artists"
        ],
        "authenticity": 83,
        "collaboration": {
          "averageRate": 2150,
          "responseRate": 73,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 88,
          "audienceMatch": 92
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 65,
        "sentiment": 94,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 81,
            "duration": "6 months",
            "reach": 100436
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 2.6,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 31,
        "oneYear": 30,
        "twoYear": 62,
        "confidence": 0.77
      }
    }
  },
  {
    "id": "mc-content-creators",
    "name": "Content Creators",
    "description": "Creative professionals and artists in Content Creators, sharing work, collaborating, and building careers",
    "category": "creative",
    "size": "massive",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "content creators",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "central-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 10,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 48
    },
    "segments": [
      "QS1",
      "LE1",
      "QS3"
    ],
    "trends": [
      {
        "id": "trend-content-creators",
        "name": "Content Creators Trend",
        "description": "Current trending topic within the Content Creators community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 88,
        "linkedHashtags": [
          "#contentcreators"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-content-creators",
        "handle": "@contentcreators",
        "platform": "discord",
        "followers": 451518,
        "tier": "macro",
        "engagement": 7.4,
        "niche": [
          "content creators"
        ],
        "authenticity": 90,
        "collaboration": {
          "averageRate": 4515,
          "responseRate": 89,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 88,
          "audienceMatch": 90
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 78,
        "sentiment": 78,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 82,
            "duration": "6 months",
            "reach": 65407
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 9.1,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 32,
        "oneYear": 30,
        "twoYear": 43,
        "confidence": 0.79
      }
    }
  },
  {
    "id": "mc-indie-musicians",
    "name": "Indie Musicians",
    "description": "Creative professionals and artists in Indie Musicians, sharing work, collaborating, and building careers",
    "category": "creative",
    "size": "growing",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "indie musicians",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "eastern-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 19,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 24
    },
    "segments": [
      "EB2",
      "QS1",
      "LE1",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-indie-musicians",
        "name": "Indie Musicians Trend",
        "description": "Current trending topic within the Indie Musicians community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 60,
        "linkedHashtags": [
          "#indiemusicians"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-indie-musicians",
        "handle": "@indiemusicians",
        "platform": "reddit",
        "followers": 315746,
        "tier": "macro",
        "engagement": 2.0,
        "niche": [
          "indie musicians"
        ],
        "authenticity": 80,
        "collaboration": {
          "averageRate": 3157,
          "responseRate": 81,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 87,
          "audienceMatch": 85
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 73,
        "sentiment": 92,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 75,
            "duration": "6 months",
            "reach": 58769
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 7.3,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 41,
        "oneYear": 44,
        "twoYear": 93,
        "confidence": 0.90
      }
    }
  },
  {
    "id": "mc-podcasters",
    "name": "Podcasters",
    "description": "Creative professionals and artists in Podcasters, sharing work, collaborating, and building careers",
    "category": "creative",
    "size": "growing",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "podcasters",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "central-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 19,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 49
    },
    "segments": [
      "EB1",
      "EB3"
    ],
    "trends": [
      {
        "id": "trend-podcasters",
        "name": "Podcasters Trend",
        "description": "Current trending topic within the Podcasters community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 71,
        "linkedHashtags": [
          "#podcasters"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-podcasters",
        "handle": "@podcasters",
        "platform": "instagram",
        "followers": 413608,
        "tier": "macro",
        "engagement": 3.7,
        "niche": [
          "podcasters"
        ],
        "authenticity": 88,
        "collaboration": {
          "averageRate": 4136,
          "responseRate": 89,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 90,
          "audienceMatch": 86
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 74,
        "sentiment": 88,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 75,
            "duration": "6 months",
            "reach": 90230
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 16.8,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 16,
        "oneYear": 53,
        "twoYear": 60,
        "confidence": 0.83
      }
    }
  },
  {
    "id": "mc-youtubers",
    "name": "YouTubers",
    "description": "Creative professionals and artists in YouTubers, sharing work, collaborating, and building careers",
    "category": "creative",
    "size": "growing",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "youtubers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "central-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 19,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 44
    },
    "segments": [
      "EB1",
      "LE3"
    ],
    "trends": [
      {
        "id": "trend-youtubers",
        "name": "YouTubers Trend",
        "description": "Current trending topic within the YouTubers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 67,
        "linkedHashtags": [
          "#youtubers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-youtubers",
        "handle": "@youtubers",
        "platform": "discord",
        "followers": 237604,
        "tier": "macro",
        "engagement": 7.7,
        "niche": [
          "youtubers"
        ],
        "authenticity": 88,
        "collaboration": {
          "averageRate": 2376,
          "responseRate": 83,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 89,
          "audienceMatch": 93
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 73,
        "sentiment": 94,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 94,
            "duration": "6 months",
            "reach": 100862
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 5.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 39,
        "oneYear": 73,
        "twoYear": 84,
        "confidence": 0.78
      }
    }
  },
  {
    "id": "mc-graphic-designers",
    "name": "Graphic Designers",
    "description": "Creative professionals and artists in Graphic Designers, sharing work, collaborating, and building careers",
    "category": "creative",
    "size": "established",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "graphic designers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 8,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 12
    },
    "segments": [
      "QS3",
      "LE1"
    ],
    "trends": [
      {
        "id": "trend-graphic-designers",
        "name": "Graphic Designers Trend",
        "description": "Current trending topic within the Graphic Designers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 79,
        "linkedHashtags": [
          "#graphicdesigners"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-graphic-designers",
        "handle": "@graphicdesigners",
        "platform": "reddit",
        "followers": 223541,
        "tier": "macro",
        "engagement": 3.4,
        "niche": [
          "graphic designers"
        ],
        "authenticity": 88,
        "collaboration": {
          "averageRate": 2235,
          "responseRate": 64,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 88,
          "audienceMatch": 93
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 63,
        "sentiment": 86,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 93,
            "duration": "6 months",
            "reach": 54355
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 8.8,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 34,
        "oneYear": 67,
        "twoYear": 85,
        "confidence": 0.83
      }
    }
  },
  {
    "id": "mc-writers-community",
    "name": "Writers Community",
    "description": "Creative professionals and artists in Writers Community, sharing work, collaborating, and building careers",
    "category": "creative",
    "size": "emerging",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "writers community",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 15,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 20
    },
    "segments": [
      "EB2",
      "LE1",
      "EB3"
    ],
    "trends": [
      {
        "id": "trend-writers-community",
        "name": "Writers Community Trend",
        "description": "Current trending topic within the Writers Community community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 66,
        "linkedHashtags": [
          "#writerscommunity"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-writers-community",
        "handle": "@writerscommunity",
        "platform": "discord",
        "followers": 357281,
        "tier": "macro",
        "engagement": 4.8,
        "niche": [
          "writers community"
        ],
        "authenticity": 99,
        "collaboration": {
          "averageRate": 3572,
          "responseRate": 61,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 94,
          "audienceMatch": 90
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 85,
        "sentiment": 87,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 88,
            "duration": "6 months",
            "reach": 25909
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 5.6,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 25,
        "oneYear": 34,
        "twoYear": 107,
        "confidence": 0.87
      }
    }
  },
  {
    "id": "mc-filmmakers",
    "name": "Filmmakers",
    "description": "Creative professionals and artists in Filmmakers, sharing work, collaborating, and building careers",
    "category": "creative",
    "size": "emerging",
    "platform": "tiktok",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "filmmakers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "southwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 17,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 20
    },
    "segments": [
      "QS2",
      "LE1",
      "LE2",
      "LE3"
    ],
    "trends": [
      {
        "id": "trend-filmmakers",
        "name": "Filmmakers Trend",
        "description": "Current trending topic within the Filmmakers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 95,
        "linkedHashtags": [
          "#filmmakers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-filmmakers",
        "handle": "@filmmakers",
        "platform": "tiktok",
        "followers": 54543,
        "tier": "micro",
        "engagement": 5.2,
        "niche": [
          "filmmakers"
        ],
        "authenticity": 90,
        "collaboration": {
          "averageRate": 545,
          "responseRate": 71,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 82,
          "audienceMatch": 88
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 88,
        "sentiment": 84,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 93,
            "duration": "6 months",
            "reach": 45701
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 14.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 16,
        "oneYear": 47,
        "twoYear": 67,
        "confidence": 0.73
      }
    }
  },
  {
    "id": "mc-photographers",
    "name": "Photographers",
    "description": "Creative professionals and artists in Photographers, sharing work, collaborating, and building careers",
    "category": "creative",
    "size": "emerging",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "photographers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "mountain-west-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 19,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 38
    },
    "segments": [
      "QS2",
      "QS1",
      "EB1",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-photographers",
        "name": "Photographers Trend",
        "description": "Current trending topic within the Photographers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 81,
        "linkedHashtags": [
          "#photographers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-photographers",
        "handle": "@photographers",
        "platform": "reddit",
        "followers": 114389,
        "tier": "macro",
        "engagement": 7.7,
        "niche": [
          "photographers"
        ],
        "authenticity": 95,
        "collaboration": {
          "averageRate": 1143,
          "responseRate": 68,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 82,
          "audienceMatch": 89
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 86,
        "sentiment": 90,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 93,
            "duration": "6 months",
            "reach": 50646
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 6.6,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 40,
        "oneYear": 73,
        "twoYear": 83,
        "confidence": 0.72
      }
    }
  },
  {
    "id": "mc-illustrators",
    "name": "Illustrators",
    "description": "Creative professionals and artists in Illustrators, sharing work, collaborating, and building careers",
    "category": "creative",
    "size": "established",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "illustrators",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "midwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 9,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 28
    },
    "segments": [
      "LE3",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-illustrators",
        "name": "Illustrators Trend",
        "description": "Current trending topic within the Illustrators community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 96,
        "linkedHashtags": [
          "#illustrators"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-illustrators",
        "handle": "@illustrators",
        "platform": "discord",
        "followers": 481059,
        "tier": "macro",
        "engagement": 8.4,
        "niche": [
          "illustrators"
        ],
        "authenticity": 83,
        "collaboration": {
          "averageRate": 4810,
          "responseRate": 63,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 94,
          "audienceMatch": 89
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 81,
        "sentiment": 80,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 78,
            "duration": "6 months",
            "reach": 88840
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 9.1,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 43,
        "oneYear": 42,
        "twoYear": 95,
        "confidence": 0.92
      }
    }
  },
  {
    "id": "mc-video-editors",
    "name": "Video Editors",
    "description": "Creative professionals and artists in Video Editors, sharing work, collaborating, and building careers",
    "category": "creative",
    "size": "growing",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "video editors",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 8,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 49
    },
    "segments": [
      "EB2",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-video-editors",
        "name": "Video Editors Trend",
        "description": "Current trending topic within the Video Editors community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 62,
        "linkedHashtags": [
          "#videoeditors"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-video-editors",
        "handle": "@videoeditors",
        "platform": "reddit",
        "followers": 160056,
        "tier": "macro",
        "engagement": 7.1,
        "niche": [
          "video editors"
        ],
        "authenticity": 88,
        "collaboration": {
          "averageRate": 1600,
          "responseRate": 87,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 84,
          "audienceMatch": 83
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 67,
        "sentiment": 93,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 87,
            "duration": "6 months",
            "reach": 29857
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 13.8,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 34,
        "oneYear": 48,
        "twoYear": 104,
        "confidence": 0.71
      }
    }
  },
  {
    "id": "mc-voice-actors",
    "name": "Voice Actors",
    "description": "Creative professionals and artists in Voice Actors, sharing work, collaborating, and building careers",
    "category": "creative",
    "size": "emerging",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "voice actors",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 7,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 23
    },
    "segments": [
      "QS2",
      "EB1",
      "LE2",
      "LE3"
    ],
    "trends": [
      {
        "id": "trend-voice-actors",
        "name": "Voice Actors Trend",
        "description": "Current trending topic within the Voice Actors community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 62,
        "linkedHashtags": [
          "#voiceactors"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-voice-actors",
        "handle": "@voiceactors",
        "platform": "discord",
        "followers": 350244,
        "tier": "macro",
        "engagement": 8.8,
        "niche": [
          "voice actors"
        ],
        "authenticity": 80,
        "collaboration": {
          "averageRate": 3502,
          "responseRate": 64,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 94,
          "audienceMatch": 84
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 58,
        "sentiment": 92,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 79,
            "duration": "6 months",
            "reach": 93036
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 6.0,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 43,
        "oneYear": 50,
        "twoYear": 92,
        "confidence": 0.71
      }
    }
  },
  {
    "id": "mc-animators",
    "name": "Animators",
    "description": "Creative professionals and artists in Animators, sharing work, collaborating, and building careers",
    "category": "creative",
    "size": "established",
    "platform": "tiktok",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "animators",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "mountain-west-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 15,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 17
    },
    "segments": [
      "LE1",
      "LE2",
      "EB3",
      "QS1"
    ],
    "trends": [
      {
        "id": "trend-animators",
        "name": "Animators Trend",
        "description": "Current trending topic within the Animators community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 62,
        "linkedHashtags": [
          "#animators"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-animators",
        "handle": "@animators",
        "platform": "tiktok",
        "followers": 379357,
        "tier": "macro",
        "engagement": 4.3,
        "niche": [
          "animators"
        ],
        "authenticity": 97,
        "collaboration": {
          "averageRate": 3793,
          "responseRate": 74,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 87,
          "audienceMatch": 80
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 75,
        "sentiment": 89,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 88,
            "duration": "6 months",
            "reach": 117410
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 9.3,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 26,
        "oneYear": 58,
        "twoYear": 117,
        "confidence": 0.77
      }
    }
  },
  {
    "id": "mc-streamers",
    "name": "Streamers",
    "description": "Creative professionals and artists in Streamers, sharing work, collaborating, and building careers",
    "category": "creative",
    "size": "growing",
    "platform": "tiktok",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "streamers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 8,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 28
    },
    "segments": [
      "QS1",
      "EB1",
      "EB2",
      "EB3"
    ],
    "trends": [
      {
        "id": "trend-streamers",
        "name": "Streamers Trend",
        "description": "Current trending topic within the Streamers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 81,
        "linkedHashtags": [
          "#streamers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-streamers",
        "handle": "@streamers",
        "platform": "tiktok",
        "followers": 170035,
        "tier": "macro",
        "engagement": 11.9,
        "niche": [
          "streamers"
        ],
        "authenticity": 89,
        "collaboration": {
          "averageRate": 1700,
          "responseRate": 65,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 84,
          "audienceMatch": 93
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 67,
        "sentiment": 85,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 79,
            "duration": "6 months",
            "reach": 93672
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 9.3,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 35,
        "oneYear": 42,
        "twoYear": 118,
        "confidence": 0.90
      }
    }
  },
  {
    "id": "mc-social-media-creators",
    "name": "Social Media Creators",
    "description": "Creative professionals and artists in Social Media Creators, sharing work, collaborating, and building careers",
    "category": "creative",
    "size": "emerging",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "social media creators",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "western-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 6,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 38
    },
    "segments": [
      "QS2",
      "LE1"
    ],
    "trends": [
      {
        "id": "trend-social-media-creators",
        "name": "Social Media Creators Trend",
        "description": "Current trending topic within the Social Media Creators community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 78,
        "linkedHashtags": [
          "#socialmediacreators"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-social-media-creators",
        "handle": "@socialmediacreators",
        "platform": "reddit",
        "followers": 489693,
        "tier": "macro",
        "engagement": 3.5,
        "niche": [
          "social media creators"
        ],
        "authenticity": 80,
        "collaboration": {
          "averageRate": 4896,
          "responseRate": 64,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 94,
          "audienceMatch": 87
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 85,
        "sentiment": 75,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 92,
            "duration": "6 months",
            "reach": 21619
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 14.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 33,
        "oneYear": 52,
        "twoYear": 43,
        "confidence": 0.73
      }
    }
  },
  {
    "id": "mc-climate-activists",
    "name": "Climate Activists",
    "description": "Activists and advocates working on Climate Activists issues, organizing and creating social change",
    "category": "social-cause",
    "size": "emerging",
    "platform": "youtube",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "climate activists",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "southwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 18,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 20
    },
    "segments": [
      "LE3",
      "LE2",
      "QS1",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-climate-activists",
        "name": "Climate Activists Trend",
        "description": "Current trending topic within the Climate Activists community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 90,
        "linkedHashtags": [
          "#climateactivists"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-climate-activists",
        "handle": "@climateactivists",
        "platform": "youtube",
        "followers": 481899,
        "tier": "macro",
        "engagement": 11.5,
        "niche": [
          "climate activists"
        ],
        "authenticity": 84,
        "collaboration": {
          "averageRate": 4818,
          "responseRate": 61,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 90,
          "audienceMatch": 93
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 53,
        "sentiment": 78,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 85,
            "duration": "6 months",
            "reach": 39226
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 7.2,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 24,
        "oneYear": 49,
        "twoYear": 77,
        "confidence": 0.91
      }
    }
  },
  {
    "id": "mc-social-justice-warriors",
    "name": "Social Justice Warriors",
    "description": "Activists and advocates working on Social Justice Warriors issues, organizing and creating social change",
    "category": "social-cause",
    "size": "established",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "social justice warriors",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "eastern-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 11,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 29
    },
    "segments": [
      "EB2",
      "LE1",
      "QS3",
      "LE3"
    ],
    "trends": [
      {
        "id": "trend-social-justice-warriors",
        "name": "Social Justice Warriors Trend",
        "description": "Current trending topic within the Social Justice Warriors community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 76,
        "linkedHashtags": [
          "#socialjusticewarriors"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-social-justice-warriors",
        "handle": "@socialjusticewarriors",
        "platform": "discord",
        "followers": 426416,
        "tier": "macro",
        "engagement": 7.5,
        "niche": [
          "social justice warriors"
        ],
        "authenticity": 94,
        "collaboration": {
          "averageRate": 4264,
          "responseRate": 80,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 93,
          "audienceMatch": 93
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 82,
        "sentiment": 82,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 82,
            "duration": "6 months",
            "reach": 87092
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 7.3,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 25,
        "oneYear": 51,
        "twoYear": 107,
        "confidence": 0.94
      }
    }
  },
  {
    "id": "mc-animal-rights",
    "name": "Animal Rights",
    "description": "Activists and advocates working on Animal Rights issues, organizing and creating social change",
    "category": "social-cause",
    "size": "growing",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "animal rights",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "mountain-west-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 6,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 34
    },
    "segments": [
      "EB1",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-animal-rights",
        "name": "Animal Rights Trend",
        "description": "Current trending topic within the Animal Rights community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 99,
        "linkedHashtags": [
          "#animalrights"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-animal-rights",
        "handle": "@animalrights",
        "platform": "discord",
        "followers": 360537,
        "tier": "macro",
        "engagement": 6.0,
        "niche": [
          "animal rights"
        ],
        "authenticity": 92,
        "collaboration": {
          "averageRate": 3605,
          "responseRate": 74,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 84,
          "audienceMatch": 88
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 72,
        "sentiment": 79,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 87,
            "duration": "6 months",
            "reach": 82182
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 13.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 35,
        "oneYear": 68,
        "twoYear": 65,
        "confidence": 0.98
      }
    }
  },
  {
    "id": "mc-community-organizers",
    "name": "Community Organizers",
    "description": "Activists and advocates working on Community Organizers issues, organizing and creating social change",
    "category": "social-cause",
    "size": "emerging",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "community organizers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 12,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 28
    },
    "segments": [
      "QS1",
      "LE1"
    ],
    "trends": [
      {
        "id": "trend-community-organizers",
        "name": "Community Organizers Trend",
        "description": "Current trending topic within the Community Organizers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 86,
        "linkedHashtags": [
          "#communityorganizers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-community-organizers",
        "handle": "@communityorganizers",
        "platform": "discord",
        "followers": 149312,
        "tier": "macro",
        "engagement": 5.9,
        "niche": [
          "community organizers"
        ],
        "authenticity": 81,
        "collaboration": {
          "averageRate": 1493,
          "responseRate": 81,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 83,
          "audienceMatch": 94
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 84,
        "sentiment": 92,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 93,
            "duration": "6 months",
            "reach": 92177
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 5.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 21,
        "oneYear": 35,
        "twoYear": 81,
        "confidence": 0.70
      }
    }
  },
  {
    "id": "mc-volunteer-network",
    "name": "Volunteer Network",
    "description": "Activists and advocates working on Volunteer Network issues, organizing and creating social change",
    "category": "social-cause",
    "size": "emerging",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "volunteer network",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "western-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 11,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 35
    },
    "segments": [
      "QS3",
      "QS2",
      "EB1",
      "EB3"
    ],
    "trends": [
      {
        "id": "trend-volunteer-network",
        "name": "Volunteer Network Trend",
        "description": "Current trending topic within the Volunteer Network community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 97,
        "linkedHashtags": [
          "#volunteernetwork"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-volunteer-network",
        "handle": "@volunteernetwork",
        "platform": "reddit",
        "followers": 111912,
        "tier": "macro",
        "engagement": 5.4,
        "niche": [
          "volunteer network"
        ],
        "authenticity": 83,
        "collaboration": {
          "averageRate": 1119,
          "responseRate": 67,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 94,
          "audienceMatch": 93
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 73,
        "sentiment": 85,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 77,
            "duration": "6 months",
            "reach": 63722
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 14.3,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 33,
        "oneYear": 33,
        "twoYear": 51,
        "confidence": 0.90
      }
    }
  },
  {
    "id": "mc-environmental-justice",
    "name": "Environmental Justice",
    "description": "Activists and advocates working on Environmental Justice issues, organizing and creating social change",
    "category": "social-cause",
    "size": "emerging",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "environmental justice",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 11,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 31
    },
    "segments": [
      "EB1",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-environmental-justice",
        "name": "Environmental Justice Trend",
        "description": "Current trending topic within the Environmental Justice community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 72,
        "linkedHashtags": [
          "#environmentaljustice"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-environmental-justice",
        "handle": "@environmentaljustice",
        "platform": "instagram",
        "followers": 132203,
        "tier": "macro",
        "engagement": 10.0,
        "niche": [
          "environmental justice"
        ],
        "authenticity": 90,
        "collaboration": {
          "averageRate": 1322,
          "responseRate": 67,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 92,
          "audienceMatch": 89
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 79,
        "sentiment": 80,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 87,
            "duration": "6 months",
            "reach": 97343
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 15.5,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 24,
        "oneYear": 35,
        "twoYear": 113,
        "confidence": 0.88
      }
    }
  },
  {
    "id": "mc-human-rights-advocates",
    "name": "Human Rights Advocates",
    "description": "Activists and advocates working on Human Rights Advocates issues, organizing and creating social change",
    "category": "social-cause",
    "size": "established",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "human rights advocates",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 15,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 18
    },
    "segments": [
      "LE1",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-human-rights-advocates",
        "name": "Human Rights Advocates Trend",
        "description": "Current trending topic within the Human Rights Advocates community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 83,
        "linkedHashtags": [
          "#humanrightsadvocates"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-human-rights-advocates",
        "handle": "@humanrightsadvocates",
        "platform": "discord",
        "followers": 270724,
        "tier": "macro",
        "engagement": 11.4,
        "niche": [
          "human rights advocates"
        ],
        "authenticity": 81,
        "collaboration": {
          "averageRate": 2707,
          "responseRate": 87,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 88,
          "audienceMatch": 91
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 55,
        "sentiment": 88,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 84,
            "duration": "6 months",
            "reach": 69344
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 16.3,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 43,
        "oneYear": 50,
        "twoYear": 49,
        "confidence": 0.92
      }
    }
  },
  {
    "id": "mc-food-justice",
    "name": "Food Justice",
    "description": "Activists and advocates working on Food Justice issues, organizing and creating social change",
    "category": "social-cause",
    "size": "established",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "food justice",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "midwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 19,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 36
    },
    "segments": [
      "QS2",
      "QS3",
      "LE1"
    ],
    "trends": [
      {
        "id": "trend-food-justice",
        "name": "Food Justice Trend",
        "description": "Current trending topic within the Food Justice community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 63,
        "linkedHashtags": [
          "#foodjustice"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-food-justice",
        "handle": "@foodjustice",
        "platform": "instagram",
        "followers": 13665,
        "tier": "micro",
        "engagement": 4.7,
        "niche": [
          "food justice"
        ],
        "authenticity": 90,
        "collaboration": {
          "averageRate": 136,
          "responseRate": 69,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 92,
          "audienceMatch": 82
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 82,
        "sentiment": 94,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 78,
            "duration": "6 months",
            "reach": 46413
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 12.5,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 30,
        "oneYear": 46,
        "twoYear": 90,
        "confidence": 0.88
      }
    }
  },
  {
    "id": "mc-housing-advocates",
    "name": "Housing Advocates",
    "description": "Activists and advocates working on Housing Advocates issues, organizing and creating social change",
    "category": "social-cause",
    "size": "massive",
    "platform": "tiktok",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "housing advocates",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "central-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 9,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 38
    },
    "segments": [
      "LE3",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-housing-advocates",
        "name": "Housing Advocates Trend",
        "description": "Current trending topic within the Housing Advocates community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 81,
        "linkedHashtags": [
          "#housingadvocates"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-housing-advocates",
        "handle": "@housingadvocates",
        "platform": "tiktok",
        "followers": 395930,
        "tier": "macro",
        "engagement": 5.4,
        "niche": [
          "housing advocates"
        ],
        "authenticity": 90,
        "collaboration": {
          "averageRate": 3959,
          "responseRate": 71,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 92,
          "audienceMatch": 80
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 80,
        "sentiment": 83,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 88,
            "duration": "6 months",
            "reach": 81281
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 5.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 29,
        "oneYear": 43,
        "twoYear": 96,
        "confidence": 0.84
      }
    }
  },
  {
    "id": "mc-education-reform",
    "name": "Education Reform",
    "description": "Activists and advocates working on Education Reform issues, organizing and creating social change",
    "category": "social-cause",
    "size": "growing",
    "platform": "youtube",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "education reform",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "central-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 18,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 49
    },
    "segments": [
      "EB2",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-education-reform",
        "name": "Education Reform Trend",
        "description": "Current trending topic within the Education Reform community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 75,
        "linkedHashtags": [
          "#educationreform"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-education-reform",
        "handle": "@educationreform",
        "platform": "youtube",
        "followers": 58508,
        "tier": "micro",
        "engagement": 8.3,
        "niche": [
          "education reform"
        ],
        "authenticity": 88,
        "collaboration": {
          "averageRate": 585,
          "responseRate": 63,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 90,
          "audienceMatch": 92
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 60,
        "sentiment": 91,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 75,
            "duration": "6 months",
            "reach": 58327
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 2.5,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 38,
        "oneYear": 64,
        "twoYear": 91,
        "confidence": 0.94
      }
    }
  },
  {
    "id": "mc-healthcare-access",
    "name": "Healthcare Access",
    "description": "Activists and advocates working on Healthcare Access issues, organizing and creating social change",
    "category": "social-cause",
    "size": "massive",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "healthcare access",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "eastern-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 6,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 21
    },
    "segments": [
      "QS2",
      "EB2",
      "LE3",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-healthcare-access",
        "name": "Healthcare Access Trend",
        "description": "Current trending topic within the Healthcare Access community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 60,
        "linkedHashtags": [
          "#healthcareaccess"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-healthcare-access",
        "handle": "@healthcareaccess",
        "platform": "reddit",
        "followers": 452733,
        "tier": "macro",
        "engagement": 12.0,
        "niche": [
          "healthcare access"
        ],
        "authenticity": 91,
        "collaboration": {
          "averageRate": 4527,
          "responseRate": 84,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 81,
          "audienceMatch": 80
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 63,
        "sentiment": 91,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 92,
            "duration": "6 months",
            "reach": 26316
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 12.5,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 24,
        "oneYear": 45,
        "twoYear": 109,
        "confidence": 0.93
      }
    }
  },
  {
    "id": "mc-racial-justice",
    "name": "Racial Justice",
    "description": "Activists and advocates working on Racial Justice issues, organizing and creating social change",
    "category": "social-cause",
    "size": "emerging",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "racial justice",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "western-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 16,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 10
    },
    "segments": [
      "EB1",
      "QS1",
      "LE3",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-racial-justice",
        "name": "Racial Justice Trend",
        "description": "Current trending topic within the Racial Justice community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 60,
        "linkedHashtags": [
          "#racialjustice"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-racial-justice",
        "handle": "@racialjustice",
        "platform": "discord",
        "followers": 138324,
        "tier": "macro",
        "engagement": 6.6,
        "niche": [
          "racial justice"
        ],
        "authenticity": 88,
        "collaboration": {
          "averageRate": 1383,
          "responseRate": 76,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 85,
          "audienceMatch": 92
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 67,
        "sentiment": 85,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 76,
            "duration": "6 months",
            "reach": 85536
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 7.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 29,
        "oneYear": 56,
        "twoYear": 59,
        "confidence": 0.74
      }
    }
  },
  {
    "id": "mc-gender-equality",
    "name": "Gender Equality",
    "description": "Activists and advocates working on Gender Equality issues, organizing and creating social change",
    "category": "social-cause",
    "size": "growing",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "gender equality",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 16,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 38
    },
    "segments": [
      "LE1",
      "QS2",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-gender-equality",
        "name": "Gender Equality Trend",
        "description": "Current trending topic within the Gender Equality community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 72,
        "linkedHashtags": [
          "#genderequality"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-gender-equality",
        "handle": "@genderequality",
        "platform": "discord",
        "followers": 196132,
        "tier": "macro",
        "engagement": 7.2,
        "niche": [
          "gender equality"
        ],
        "authenticity": 89,
        "collaboration": {
          "averageRate": 1961,
          "responseRate": 63,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 90,
          "audienceMatch": 81
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 52,
        "sentiment": 78,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 79,
            "duration": "6 months",
            "reach": 71698
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 12.3,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 18,
        "oneYear": 25,
        "twoYear": 106,
        "confidence": 0.75
      }
    }
  },
  {
    "id": "mc-lgbtq--rights",
    "name": "LGBTQ+ Rights",
    "description": "Activists and advocates working on LGBTQ+ Rights issues, organizing and creating social change",
    "category": "social-cause",
    "size": "growing",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "lgbtq+ rights",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "midwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 15,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 34
    },
    "segments": [
      "LE3",
      "EB2"
    ],
    "trends": [
      {
        "id": "trend-lgbtq--rights",
        "name": "LGBTQ+ Rights Trend",
        "description": "Current trending topic within the LGBTQ+ Rights community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 95,
        "linkedHashtags": [
          "#lgbtq+rights"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-lgbtq--rights",
        "handle": "@lgbtq+rights",
        "platform": "discord",
        "followers": 321211,
        "tier": "macro",
        "engagement": 2.3,
        "niche": [
          "lgbtq+ rights"
        ],
        "authenticity": 98,
        "collaboration": {
          "averageRate": 3212,
          "responseRate": 63,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 80,
          "audienceMatch": 81
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 89,
        "sentiment": 76,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 77,
            "duration": "6 months",
            "reach": 53499
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 3.7,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 28,
        "oneYear": 49,
        "twoYear": 114,
        "confidence": 0.74
      }
    }
  },
  {
    "id": "mc-disability-rights",
    "name": "Disability Rights",
    "description": "Activists and advocates working on Disability Rights issues, organizing and creating social change",
    "category": "social-cause",
    "size": "massive",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "disability rights",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "mountain-west-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 9,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 42
    },
    "segments": [
      "QS2",
      "LE2",
      "LE3",
      "EB3"
    ],
    "trends": [
      {
        "id": "trend-disability-rights",
        "name": "Disability Rights Trend",
        "description": "Current trending topic within the Disability Rights community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 70,
        "linkedHashtags": [
          "#disabilityrights"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-disability-rights",
        "handle": "@disabilityrights",
        "platform": "discord",
        "followers": 421859,
        "tier": "macro",
        "engagement": 5.4,
        "niche": [
          "disability rights"
        ],
        "authenticity": 80,
        "collaboration": {
          "averageRate": 4218,
          "responseRate": 86,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 94,
          "audienceMatch": 89
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 86,
        "sentiment": 81,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 92,
            "duration": "6 months",
            "reach": 90038
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 7.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 25,
        "oneYear": 61,
        "twoYear": 40,
        "confidence": 0.96
      }
    }
  },
  {
    "id": "mc-crossfit-community",
    "name": "CrossFit Community",
    "description": "Athletes and fans of CrossFit Community, sharing training tips, achievements, and building sporting community",
    "category": "sports",
    "size": "established",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "crossfit community",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "western-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 8,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 24
    },
    "segments": [
      "EB1",
      "QS3",
      "EB3",
      "QS1"
    ],
    "trends": [
      {
        "id": "trend-crossfit-community",
        "name": "CrossFit Community Trend",
        "description": "Current trending topic within the CrossFit Community community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 64,
        "linkedHashtags": [
          "#crossfitcommunity"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-crossfit-community",
        "handle": "@crossfitcommunity",
        "platform": "reddit",
        "followers": 294930,
        "tier": "macro",
        "engagement": 2.8,
        "niche": [
          "crossfit community"
        ],
        "authenticity": 89,
        "collaboration": {
          "averageRate": 2949,
          "responseRate": 76,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 87,
          "audienceMatch": 91
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 71,
        "sentiment": 92,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 75,
            "duration": "6 months",
            "reach": 119509
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 16.1,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 35,
        "oneYear": 54,
        "twoYear": 81,
        "confidence": 0.77
      }
    }
  },
  {
    "id": "mc-rock-climbers",
    "name": "Rock Climbers",
    "description": "Athletes and fans of Rock Climbers, sharing training tips, achievements, and building sporting community",
    "category": "sports",
    "size": "growing",
    "platform": "tiktok",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "rock climbers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "western-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 9,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 15
    },
    "segments": [
      "LE1",
      "LE2",
      "LE3"
    ],
    "trends": [
      {
        "id": "trend-rock-climbers",
        "name": "Rock Climbers Trend",
        "description": "Current trending topic within the Rock Climbers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 85,
        "linkedHashtags": [
          "#rockclimbers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-rock-climbers",
        "handle": "@rockclimbers",
        "platform": "tiktok",
        "followers": 381329,
        "tier": "macro",
        "engagement": 9.1,
        "niche": [
          "rock climbers"
        ],
        "authenticity": 88,
        "collaboration": {
          "averageRate": 3813,
          "responseRate": 67,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 84,
          "audienceMatch": 80
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 65,
        "sentiment": 87,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 88,
            "duration": "6 months",
            "reach": 58587
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 11.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 24,
        "oneYear": 30,
        "twoYear": 78,
        "confidence": 0.92
      }
    }
  },
  {
    "id": "mc-cyclists",
    "name": "Cyclists",
    "description": "Athletes and fans of Cyclists, sharing training tips, achievements, and building sporting community",
    "category": "sports",
    "size": "growing",
    "platform": "youtube",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "cyclists",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "western-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 16,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 31
    },
    "segments": [
      "LE1",
      "EB2"
    ],
    "trends": [
      {
        "id": "trend-cyclists",
        "name": "Cyclists Trend",
        "description": "Current trending topic within the Cyclists community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 64,
        "linkedHashtags": [
          "#cyclists"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-cyclists",
        "handle": "@cyclists",
        "platform": "youtube",
        "followers": 174667,
        "tier": "macro",
        "engagement": 6.4,
        "niche": [
          "cyclists"
        ],
        "authenticity": 93,
        "collaboration": {
          "averageRate": 1746,
          "responseRate": 89,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 85,
          "audienceMatch": 88
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 86,
        "sentiment": 79,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 76,
            "duration": "6 months",
            "reach": 23894
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 16.1,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 41,
        "oneYear": 52,
        "twoYear": 115,
        "confidence": 0.72
      }
    }
  },
  {
    "id": "mc-runners",
    "name": "Runners",
    "description": "Athletes and fans of Runners, sharing training tips, achievements, and building sporting community",
    "category": "sports",
    "size": "established",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "runners",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 13,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 46
    },
    "segments": [
      "QS2",
      "EB3",
      "LE1"
    ],
    "trends": [
      {
        "id": "trend-runners",
        "name": "Runners Trend",
        "description": "Current trending topic within the Runners community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 94,
        "linkedHashtags": [
          "#runners"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-runners",
        "handle": "@runners",
        "platform": "reddit",
        "followers": 34730,
        "tier": "micro",
        "engagement": 8.1,
        "niche": [
          "runners"
        ],
        "authenticity": 99,
        "collaboration": {
          "averageRate": 347,
          "responseRate": 61,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 84,
          "audienceMatch": 83
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 88,
        "sentiment": 86,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 94,
            "duration": "6 months",
            "reach": 55451
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 13.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 25,
        "oneYear": 63,
        "twoYear": 50,
        "confidence": 0.95
      }
    }
  },
  {
    "id": "mc-swimmers",
    "name": "Swimmers",
    "description": "Athletes and fans of Swimmers, sharing training tips, achievements, and building sporting community",
    "category": "sports",
    "size": "massive",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "swimmers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 15,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 39
    },
    "segments": [
      "QS3",
      "EB1",
      "QS1",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-swimmers",
        "name": "Swimmers Trend",
        "description": "Current trending topic within the Swimmers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 80,
        "linkedHashtags": [
          "#swimmers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-swimmers",
        "handle": "@swimmers",
        "platform": "discord",
        "followers": 34214,
        "tier": "micro",
        "engagement": 7.4,
        "niche": [
          "swimmers"
        ],
        "authenticity": 95,
        "collaboration": {
          "averageRate": 342,
          "responseRate": 69,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 86,
          "audienceMatch": 94
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 84,
        "sentiment": 93,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 91,
            "duration": "6 months",
            "reach": 54755
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 13.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 31,
        "oneYear": 32,
        "twoYear": 105,
        "confidence": 0.90
      }
    }
  },
  {
    "id": "mc-basketball-fans",
    "name": "Basketball Fans",
    "description": "Athletes and fans of Basketball Fans, sharing training tips, achievements, and building sporting community",
    "category": "sports",
    "size": "established",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "basketball fans",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 7,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 15
    },
    "segments": [
      "LE3",
      "EB2"
    ],
    "trends": [
      {
        "id": "trend-basketball-fans",
        "name": "Basketball Fans Trend",
        "description": "Current trending topic within the Basketball Fans community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 98,
        "linkedHashtags": [
          "#basketballfans"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-basketball-fans",
        "handle": "@basketballfans",
        "platform": "reddit",
        "followers": 140388,
        "tier": "macro",
        "engagement": 7.4,
        "niche": [
          "basketball fans"
        ],
        "authenticity": 82,
        "collaboration": {
          "averageRate": 1403,
          "responseRate": 65,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 86,
          "audienceMatch": 89
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 51,
        "sentiment": 82,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 93,
            "duration": "6 months",
            "reach": 84224
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 12.5,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 42,
        "oneYear": 48,
        "twoYear": 51,
        "confidence": 0.98
      }
    }
  },
  {
    "id": "mc-soccer-enthusiasts",
    "name": "Soccer Enthusiasts",
    "description": "Athletes and fans of Soccer Enthusiasts, sharing training tips, achievements, and building sporting community",
    "category": "sports",
    "size": "established",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "soccer enthusiasts",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "western-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 13,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 24
    },
    "segments": [
      "EB2",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-soccer-enthusiasts",
        "name": "Soccer Enthusiasts Trend",
        "description": "Current trending topic within the Soccer Enthusiasts community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 62,
        "linkedHashtags": [
          "#soccerenthusiasts"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-soccer-enthusiasts",
        "handle": "@soccerenthusiasts",
        "platform": "reddit",
        "followers": 435613,
        "tier": "macro",
        "engagement": 2.7,
        "niche": [
          "soccer enthusiasts"
        ],
        "authenticity": 87,
        "collaboration": {
          "averageRate": 4356,
          "responseRate": 74,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 81,
          "audienceMatch": 87
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 61,
        "sentiment": 81,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 86,
            "duration": "6 months",
            "reach": 46754
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 5.3,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 22,
        "oneYear": 40,
        "twoYear": 96,
        "confidence": 0.94
      }
    }
  },
  {
    "id": "mc-tennis-players",
    "name": "Tennis Players",
    "description": "Athletes and fans of Tennis Players, sharing training tips, achievements, and building sporting community",
    "category": "sports",
    "size": "emerging",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "tennis players",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 6,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 44
    },
    "segments": [
      "LE1",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-tennis-players",
        "name": "Tennis Players Trend",
        "description": "Current trending topic within the Tennis Players community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 80,
        "linkedHashtags": [
          "#tennisplayers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-tennis-players",
        "handle": "@tennisplayers",
        "platform": "discord",
        "followers": 196203,
        "tier": "macro",
        "engagement": 8.9,
        "niche": [
          "tennis players"
        ],
        "authenticity": 90,
        "collaboration": {
          "averageRate": 1962,
          "responseRate": 79,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 85,
          "audienceMatch": 80
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 67,
        "sentiment": 76,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 90,
            "duration": "6 months",
            "reach": 96624
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 12.3,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 32,
        "oneYear": 51,
        "twoYear": 85,
        "confidence": 0.81
      }
    }
  },
  {
    "id": "mc-golf-community",
    "name": "Golf Community",
    "description": "Athletes and fans of Golf Community, sharing training tips, achievements, and building sporting community",
    "category": "sports",
    "size": "emerging",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "golf community",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "mountain-west-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 13,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 22
    },
    "segments": [
      "EB1",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-golf-community",
        "name": "Golf Community Trend",
        "description": "Current trending topic within the Golf Community community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 71,
        "linkedHashtags": [
          "#golfcommunity"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-golf-community",
        "handle": "@golfcommunity",
        "platform": "discord",
        "followers": 397917,
        "tier": "macro",
        "engagement": 4.5,
        "niche": [
          "golf community"
        ],
        "authenticity": 88,
        "collaboration": {
          "averageRate": 3979,
          "responseRate": 81,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 91,
          "audienceMatch": 89
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 70,
        "sentiment": 90,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 88,
            "duration": "6 months",
            "reach": 64086
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 12.6,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 17,
        "oneYear": 66,
        "twoYear": 87,
        "confidence": 0.80
      }
    }
  },
  {
    "id": "mc-hiking-groups",
    "name": "Hiking Groups",
    "description": "Athletes and fans of Hiking Groups, sharing training tips, achievements, and building sporting community",
    "category": "sports",
    "size": "established",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "hiking groups",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "western-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 11,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 20
    },
    "segments": [
      "LE3",
      "EB1",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-hiking-groups",
        "name": "Hiking Groups Trend",
        "description": "Current trending topic within the Hiking Groups community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 70,
        "linkedHashtags": [
          "#hikinggroups"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-hiking-groups",
        "handle": "@hikinggroups",
        "platform": "reddit",
        "followers": 27702,
        "tier": "micro",
        "engagement": 7.9,
        "niche": [
          "hiking groups"
        ],
        "authenticity": 99,
        "collaboration": {
          "averageRate": 277,
          "responseRate": 62,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 88,
          "audienceMatch": 92
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 86,
        "sentiment": 85,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 87,
            "duration": "6 months",
            "reach": 101836
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 12.2,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 44,
        "oneYear": 47,
        "twoYear": 41,
        "confidence": 0.93
      }
    }
  },
  {
    "id": "mc-ski-snowboard",
    "name": "Ski/Snowboard",
    "description": "Athletes and fans of Ski/Snowboard, sharing training tips, achievements, and building sporting community",
    "category": "sports",
    "size": "emerging",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "ski/snowboard",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "eastern-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 12,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 25
    },
    "segments": [
      "LE1",
      "LE2",
      "QS3"
    ],
    "trends": [
      {
        "id": "trend-ski-snowboard",
        "name": "Ski/Snowboard Trend",
        "description": "Current trending topic within the Ski/Snowboard community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 81,
        "linkedHashtags": [
          "#ski/snowboard"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-ski-snowboard",
        "handle": "@ski/snowboard",
        "platform": "instagram",
        "followers": 71005,
        "tier": "micro",
        "engagement": 3.2,
        "niche": [
          "ski/snowboard"
        ],
        "authenticity": 89,
        "collaboration": {
          "averageRate": 710,
          "responseRate": 73,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 83,
          "audienceMatch": 86
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 87,
        "sentiment": 85,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 84,
            "duration": "6 months",
            "reach": 73394
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 14.6,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 37,
        "oneYear": 60,
        "twoYear": 44,
        "confidence": 0.88
      }
    }
  },
  {
    "id": "mc-surfers",
    "name": "Surfers",
    "description": "Athletes and fans of Surfers, sharing training tips, achievements, and building sporting community",
    "category": "sports",
    "size": "massive",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "surfers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "eastern-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 7,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 20
    },
    "segments": [
      "EB1",
      "QS1"
    ],
    "trends": [
      {
        "id": "trend-surfers",
        "name": "Surfers Trend",
        "description": "Current trending topic within the Surfers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 77,
        "linkedHashtags": [
          "#surfers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-surfers",
        "handle": "@surfers",
        "platform": "discord",
        "followers": 305989,
        "tier": "macro",
        "engagement": 7.2,
        "niche": [
          "surfers"
        ],
        "authenticity": 87,
        "collaboration": {
          "averageRate": 3059,
          "responseRate": 88,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 94,
          "audienceMatch": 88
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 71,
        "sentiment": 85,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 80,
            "duration": "6 months",
            "reach": 113439
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 2.6,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 30,
        "oneYear": 55,
        "twoYear": 118,
        "confidence": 0.92
      }
    }
  },
  {
    "id": "mc-martial-arts",
    "name": "Martial Arts",
    "description": "Athletes and fans of Martial Arts, sharing training tips, achievements, and building sporting community",
    "category": "sports",
    "size": "massive",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "martial arts",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 16,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 46
    },
    "segments": [
      "EB1",
      "LE2",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-martial-arts",
        "name": "Martial Arts Trend",
        "description": "Current trending topic within the Martial Arts community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 78,
        "linkedHashtags": [
          "#martialarts"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-martial-arts",
        "handle": "@martialarts",
        "platform": "reddit",
        "followers": 421199,
        "tier": "macro",
        "engagement": 4.2,
        "niche": [
          "martial arts"
        ],
        "authenticity": 99,
        "collaboration": {
          "averageRate": 4211,
          "responseRate": 78,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 84,
          "audienceMatch": 93
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 88,
        "sentiment": 87,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 86,
            "duration": "6 months",
            "reach": 71097
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 14.7,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 38,
        "oneYear": 30,
        "twoYear": 84,
        "confidence": 0.81
      }
    }
  },
  {
    "id": "mc-yoga-athletes",
    "name": "Yoga Athletes",
    "description": "Athletes and fans of Yoga Athletes, sharing training tips, achievements, and building sporting community",
    "category": "sports",
    "size": "growing",
    "platform": "youtube",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "yoga athletes",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "southwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 17,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 11
    },
    "segments": [
      "LE1",
      "QS1",
      "LE2",
      "EB3"
    ],
    "trends": [
      {
        "id": "trend-yoga-athletes",
        "name": "Yoga Athletes Trend",
        "description": "Current trending topic within the Yoga Athletes community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 77,
        "linkedHashtags": [
          "#yogaathletes"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-yoga-athletes",
        "handle": "@yogaathletes",
        "platform": "youtube",
        "followers": 214467,
        "tier": "macro",
        "engagement": 2.6,
        "niche": [
          "yoga athletes"
        ],
        "authenticity": 96,
        "collaboration": {
          "averageRate": 2144,
          "responseRate": 84,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 89,
          "audienceMatch": 86
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 60,
        "sentiment": 89,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 86,
            "duration": "6 months",
            "reach": 41871
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 7.8,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 36,
        "oneYear": 42,
        "twoYear": 86,
        "confidence": 0.75
      }
    }
  },
  {
    "id": "mc-fitness-competitors",
    "name": "Fitness Competitors",
    "description": "Athletes and fans of Fitness Competitors, sharing training tips, achievements, and building sporting community",
    "category": "sports",
    "size": "growing",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "fitness competitors",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 6,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 16
    },
    "segments": [
      "LE1",
      "QS2",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-fitness-competitors",
        "name": "Fitness Competitors Trend",
        "description": "Current trending topic within the Fitness Competitors community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 96,
        "linkedHashtags": [
          "#fitnesscompetitors"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-fitness-competitors",
        "handle": "@fitnesscompetitors",
        "platform": "discord",
        "followers": 82535,
        "tier": "micro",
        "engagement": 2.7,
        "niche": [
          "fitness competitors"
        ],
        "authenticity": 86,
        "collaboration": {
          "averageRate": 825,
          "responseRate": 65,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 91,
          "audienceMatch": 87
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 65,
        "sentiment": 91,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 93,
            "duration": "6 months",
            "reach": 59121
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 6.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 23,
        "oneYear": 73,
        "twoYear": 45,
        "confidence": 0.76
      }
    }
  },
  {
    "id": "mc-plant-based-eaters",
    "name": "Plant-Based Eaters",
    "description": "Food lovers focused on Plant-Based Eaters, sharing recipes, experiences, and culinary adventures",
    "category": "food",
    "size": "emerging",
    "platform": "youtube",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "plant-based eaters",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 16,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 49
    },
    "segments": [
      "EB1",
      "QS1",
      "EB2",
      "EB3"
    ],
    "trends": [
      {
        "id": "trend-plant-based-eaters",
        "name": "Plant-Based Eaters Trend",
        "description": "Current trending topic within the Plant-Based Eaters community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 66,
        "linkedHashtags": [
          "#plant-basedeaters"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-plant-based-eaters",
        "handle": "@plant-basedeaters",
        "platform": "youtube",
        "followers": 145166,
        "tier": "macro",
        "engagement": 2.5,
        "niche": [
          "plant-based eaters"
        ],
        "authenticity": 86,
        "collaboration": {
          "averageRate": 1451,
          "responseRate": 85,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 91,
          "audienceMatch": 86
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "food-beverage",
        "penetration": 62,
        "sentiment": 90,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 86,
            "duration": "6 months",
            "reach": 94441
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 11.8,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 35,
        "oneYear": 68,
        "twoYear": 113,
        "confidence": 0.99
      }
    }
  },
  {
    "id": "mc-craft-beer-lovers",
    "name": "Craft Beer Lovers",
    "description": "Food lovers focused on Craft Beer Lovers, sharing recipes, experiences, and culinary adventures",
    "category": "food",
    "size": "emerging",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "craft beer lovers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 11,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 29
    },
    "segments": [
      "LE1",
      "LE2",
      "EB2"
    ],
    "trends": [
      {
        "id": "trend-craft-beer-lovers",
        "name": "Craft Beer Lovers Trend",
        "description": "Current trending topic within the Craft Beer Lovers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 96,
        "linkedHashtags": [
          "#craftbeerlovers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-craft-beer-lovers",
        "handle": "@craftbeerlovers",
        "platform": "reddit",
        "followers": 349908,
        "tier": "macro",
        "engagement": 4.7,
        "niche": [
          "craft beer lovers"
        ],
        "authenticity": 80,
        "collaboration": {
          "averageRate": 3499,
          "responseRate": 62,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 92,
          "audienceMatch": 86
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "food-beverage",
        "penetration": 77,
        "sentiment": 83,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 81,
            "duration": "6 months",
            "reach": 23332
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 5.1,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 16,
        "oneYear": 36,
        "twoYear": 42,
        "confidence": 0.73
      }
    }
  },
  {
    "id": "mc-coffee-aficionados",
    "name": "Coffee Aficionados",
    "description": "Food lovers focused on Coffee Aficionados, sharing recipes, experiences, and culinary adventures",
    "category": "food",
    "size": "massive",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "coffee aficionados",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "mountain-west-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 14,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 40
    },
    "segments": [
      "EB2",
      "EB1",
      "QS1",
      "EB3"
    ],
    "trends": [
      {
        "id": "trend-coffee-aficionados",
        "name": "Coffee Aficionados Trend",
        "description": "Current trending topic within the Coffee Aficionados community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 83,
        "linkedHashtags": [
          "#coffeeaficionados"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-coffee-aficionados",
        "handle": "@coffeeaficionados",
        "platform": "reddit",
        "followers": 410242,
        "tier": "macro",
        "engagement": 7.7,
        "niche": [
          "coffee aficionados"
        ],
        "authenticity": 93,
        "collaboration": {
          "averageRate": 4102,
          "responseRate": 85,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 93,
          "audienceMatch": 81
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "food-beverage",
        "penetration": 86,
        "sentiment": 75,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 92,
            "duration": "6 months",
            "reach": 94958
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 6.6,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 21,
        "oneYear": 30,
        "twoYear": 44,
        "confidence": 0.71
      }
    }
  },
  {
    "id": "mc-baking-community",
    "name": "Baking Community",
    "description": "Food lovers focused on Baking Community, sharing recipes, experiences, and culinary adventures",
    "category": "food",
    "size": "massive",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "baking community",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "central-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 11,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 45
    },
    "segments": [
      "LE1",
      "QS3"
    ],
    "trends": [
      {
        "id": "trend-baking-community",
        "name": "Baking Community Trend",
        "description": "Current trending topic within the Baking Community community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 80,
        "linkedHashtags": [
          "#bakingcommunity"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-baking-community",
        "handle": "@bakingcommunity",
        "platform": "reddit",
        "followers": 270254,
        "tier": "macro",
        "engagement": 5.8,
        "niche": [
          "baking community"
        ],
        "authenticity": 91,
        "collaboration": {
          "averageRate": 2702,
          "responseRate": 63,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 81,
          "audienceMatch": 86
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "food-beverage",
        "penetration": 63,
        "sentiment": 75,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 82,
            "duration": "6 months",
            "reach": 113481
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 15.5,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 32,
        "oneYear": 54,
        "twoYear": 91,
        "confidence": 0.75
      }
    }
  },
  {
    "id": "mc-wine-enthusiasts",
    "name": "Wine Enthusiasts",
    "description": "Food lovers focused on Wine Enthusiasts, sharing recipes, experiences, and culinary adventures",
    "category": "food",
    "size": "emerging",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "wine enthusiasts",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 14,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 40
    },
    "segments": [
      "LE3",
      "QS3",
      "EB2",
      "EB3"
    ],
    "trends": [
      {
        "id": "trend-wine-enthusiasts",
        "name": "Wine Enthusiasts Trend",
        "description": "Current trending topic within the Wine Enthusiasts community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 95,
        "linkedHashtags": [
          "#wineenthusiasts"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-wine-enthusiasts",
        "handle": "@wineenthusiasts",
        "platform": "reddit",
        "followers": 34378,
        "tier": "micro",
        "engagement": 7.6,
        "niche": [
          "wine enthusiasts"
        ],
        "authenticity": 97,
        "collaboration": {
          "averageRate": 343,
          "responseRate": 89,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 94,
          "audienceMatch": 90
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "food-beverage",
        "penetration": 70,
        "sentiment": 78,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 81,
            "duration": "6 months",
            "reach": 114090
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 14.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 28,
        "oneYear": 58,
        "twoYear": 106,
        "confidence": 0.89
      }
    }
  },
  {
    "id": "mc-fermentation-fans",
    "name": "Fermentation Fans",
    "description": "Food lovers focused on Fermentation Fans, sharing recipes, experiences, and culinary adventures",
    "category": "food",
    "size": "emerging",
    "platform": "tiktok",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "fermentation fans",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "southwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 18,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 30
    },
    "segments": [
      "QS2",
      "LE1",
      "EB3",
      "QS3"
    ],
    "trends": [
      {
        "id": "trend-fermentation-fans",
        "name": "Fermentation Fans Trend",
        "description": "Current trending topic within the Fermentation Fans community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 75,
        "linkedHashtags": [
          "#fermentationfans"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-fermentation-fans",
        "handle": "@fermentationfans",
        "platform": "tiktok",
        "followers": 141341,
        "tier": "macro",
        "engagement": 8.2,
        "niche": [
          "fermentation fans"
        ],
        "authenticity": 96,
        "collaboration": {
          "averageRate": 1413,
          "responseRate": 66,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 91,
          "audienceMatch": 82
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "food-beverage",
        "penetration": 85,
        "sentiment": 93,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 90,
            "duration": "6 months",
            "reach": 119411
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 15.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 22,
        "oneYear": 48,
        "twoYear": 116,
        "confidence": 0.81
      }
    }
  },
  {
    "id": "mc-meal-preppers",
    "name": "Meal Preppers",
    "description": "Food lovers focused on Meal Preppers, sharing recipes, experiences, and culinary adventures",
    "category": "food",
    "size": "growing",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "meal preppers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 18,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 49
    },
    "segments": [
      "QS2",
      "LE3",
      "LE1",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-meal-preppers",
        "name": "Meal Preppers Trend",
        "description": "Current trending topic within the Meal Preppers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 69,
        "linkedHashtags": [
          "#mealpreppers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-meal-preppers",
        "handle": "@mealpreppers",
        "platform": "instagram",
        "followers": 289233,
        "tier": "macro",
        "engagement": 6.0,
        "niche": [
          "meal preppers"
        ],
        "authenticity": 90,
        "collaboration": {
          "averageRate": 2892,
          "responseRate": 64,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 88,
          "audienceMatch": 91
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "food-beverage",
        "penetration": 51,
        "sentiment": 85,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 84,
            "duration": "6 months",
            "reach": 81485
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 11.3,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 21,
        "oneYear": 60,
        "twoYear": 84,
        "confidence": 0.99
      }
    }
  },
  {
    "id": "mc-food-bloggers",
    "name": "Food Bloggers",
    "description": "Food lovers focused on Food Bloggers, sharing recipes, experiences, and culinary adventures",
    "category": "food",
    "size": "emerging",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "food bloggers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 15,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 34
    },
    "segments": [
      "EB2",
      "LE2",
      "EB3"
    ],
    "trends": [
      {
        "id": "trend-food-bloggers",
        "name": "Food Bloggers Trend",
        "description": "Current trending topic within the Food Bloggers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 85,
        "linkedHashtags": [
          "#foodbloggers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-food-bloggers",
        "handle": "@foodbloggers",
        "platform": "instagram",
        "followers": 208908,
        "tier": "macro",
        "engagement": 3.2,
        "niche": [
          "food bloggers"
        ],
        "authenticity": 90,
        "collaboration": {
          "averageRate": 2089,
          "responseRate": 82,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 90,
          "audienceMatch": 87
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "food-beverage",
        "penetration": 83,
        "sentiment": 87,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 83,
            "duration": "6 months",
            "reach": 23883
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 4.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 31,
        "oneYear": 26,
        "twoYear": 92,
        "confidence": 0.94
      }
    }
  },
  {
    "id": "mc-restaurant-reviewers",
    "name": "Restaurant Reviewers",
    "description": "Food lovers focused on Restaurant Reviewers, sharing recipes, experiences, and culinary adventures",
    "category": "food",
    "size": "growing",
    "platform": "tiktok",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "restaurant reviewers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "mountain-west-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 19,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 41
    },
    "segments": [
      "EB2",
      "LE2",
      "EB3"
    ],
    "trends": [
      {
        "id": "trend-restaurant-reviewers",
        "name": "Restaurant Reviewers Trend",
        "description": "Current trending topic within the Restaurant Reviewers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 60,
        "linkedHashtags": [
          "#restaurantreviewers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-restaurant-reviewers",
        "handle": "@restaurantreviewers",
        "platform": "tiktok",
        "followers": 293085,
        "tier": "macro",
        "engagement": 6.3,
        "niche": [
          "restaurant reviewers"
        ],
        "authenticity": 96,
        "collaboration": {
          "averageRate": 2930,
          "responseRate": 73,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 87,
          "audienceMatch": 94
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "food-beverage",
        "penetration": 55,
        "sentiment": 89,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 87,
            "duration": "6 months",
            "reach": 91290
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 12.7,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 36,
        "oneYear": 26,
        "twoYear": 83,
        "confidence": 0.86
      }
    }
  },
  {
    "id": "mc-cooking-enthusiasts",
    "name": "Cooking Enthusiasts",
    "description": "Food lovers focused on Cooking Enthusiasts, sharing recipes, experiences, and culinary adventures",
    "category": "food",
    "size": "emerging",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "cooking enthusiasts",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "western-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 16,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 46
    },
    "segments": [
      "EB3",
      "EB2",
      "LE1"
    ],
    "trends": [
      {
        "id": "trend-cooking-enthusiasts",
        "name": "Cooking Enthusiasts Trend",
        "description": "Current trending topic within the Cooking Enthusiasts community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 74,
        "linkedHashtags": [
          "#cookingenthusiasts"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-cooking-enthusiasts",
        "handle": "@cookingenthusiasts",
        "platform": "reddit",
        "followers": 273129,
        "tier": "macro",
        "engagement": 11.9,
        "niche": [
          "cooking enthusiasts"
        ],
        "authenticity": 82,
        "collaboration": {
          "averageRate": 2731,
          "responseRate": 79,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 85,
          "audienceMatch": 86
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "food-beverage",
        "penetration": 78,
        "sentiment": 92,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 80,
            "duration": "6 months",
            "reach": 64738
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 15.8,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 18,
        "oneYear": 62,
        "twoYear": 59,
        "confidence": 0.94
      }
    }
  },
  {
    "id": "mc-farmers-market",
    "name": "Farmers Market",
    "description": "Food lovers focused on Farmers Market, sharing recipes, experiences, and culinary adventures",
    "category": "food",
    "size": "established",
    "platform": "youtube",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "farmers market",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 13,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 19
    },
    "segments": [
      "QS1",
      "EB1",
      "EB3",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-farmers-market",
        "name": "Farmers Market Trend",
        "description": "Current trending topic within the Farmers Market community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 92,
        "linkedHashtags": [
          "#farmersmarket"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-farmers-market",
        "handle": "@farmersmarket",
        "platform": "youtube",
        "followers": 233172,
        "tier": "macro",
        "engagement": 3.4,
        "niche": [
          "farmers market"
        ],
        "authenticity": 90,
        "collaboration": {
          "averageRate": 2331,
          "responseRate": 79,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 86,
          "audienceMatch": 90
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "food-beverage",
        "penetration": 58,
        "sentiment": 78,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 87,
            "duration": "6 months",
            "reach": 83259
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 5.2,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 44,
        "oneYear": 58,
        "twoYear": 49,
        "confidence": 0.82
      }
    }
  },
  {
    "id": "mc-organic-food",
    "name": "Organic Food",
    "description": "Food lovers focused on Organic Food, sharing recipes, experiences, and culinary adventures",
    "category": "food",
    "size": "emerging",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "organic food",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 16,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 36
    },
    "segments": [
      "QS1",
      "EB2",
      "QS2",
      "QS3"
    ],
    "trends": [
      {
        "id": "trend-organic-food",
        "name": "Organic Food Trend",
        "description": "Current trending topic within the Organic Food community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 61,
        "linkedHashtags": [
          "#organicfood"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-organic-food",
        "handle": "@organicfood",
        "platform": "reddit",
        "followers": 250216,
        "tier": "macro",
        "engagement": 11.6,
        "niche": [
          "organic food"
        ],
        "authenticity": 84,
        "collaboration": {
          "averageRate": 2502,
          "responseRate": 70,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 92,
          "audienceMatch": 87
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "food-beverage",
        "penetration": 65,
        "sentiment": 81,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 91,
            "duration": "6 months",
            "reach": 36173
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 5.8,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 37,
        "oneYear": 65,
        "twoYear": 98,
        "confidence": 0.88
      }
    }
  },
  {
    "id": "mc-keto-community",
    "name": "Keto Community",
    "description": "Food lovers focused on Keto Community, sharing recipes, experiences, and culinary adventures",
    "category": "food",
    "size": "massive",
    "platform": "tiktok",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "keto community",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 6,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 26
    },
    "segments": [
      "EB1",
      "EB3",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-keto-community",
        "name": "Keto Community Trend",
        "description": "Current trending topic within the Keto Community community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 62,
        "linkedHashtags": [
          "#ketocommunity"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-keto-community",
        "handle": "@ketocommunity",
        "platform": "tiktok",
        "followers": 267636,
        "tier": "macro",
        "engagement": 3.1,
        "niche": [
          "keto community"
        ],
        "authenticity": 96,
        "collaboration": {
          "averageRate": 2676,
          "responseRate": 88,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 86,
          "audienceMatch": 89
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "food-beverage",
        "penetration": 75,
        "sentiment": 92,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 94,
            "duration": "6 months",
            "reach": 35607
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 13.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 37,
        "oneYear": 32,
        "twoYear": 53,
        "confidence": 0.94
      }
    }
  },
  {
    "id": "mc-intermittent-fasting",
    "name": "Intermittent Fasting",
    "description": "Food lovers focused on Intermittent Fasting, sharing recipes, experiences, and culinary adventures",
    "category": "food",
    "size": "emerging",
    "platform": "tiktok",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "intermittent fasting",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "western-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 6,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 47
    },
    "segments": [
      "LE1",
      "LE2",
      "QS3",
      "LE3"
    ],
    "trends": [
      {
        "id": "trend-intermittent-fasting",
        "name": "Intermittent Fasting Trend",
        "description": "Current trending topic within the Intermittent Fasting community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 80,
        "linkedHashtags": [
          "#intermittentfasting"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-intermittent-fasting",
        "handle": "@intermittentfasting",
        "platform": "tiktok",
        "followers": 292281,
        "tier": "macro",
        "engagement": 7.1,
        "niche": [
          "intermittent fasting"
        ],
        "authenticity": 99,
        "collaboration": {
          "averageRate": 2922,
          "responseRate": 79,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 82,
          "audienceMatch": 91
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "food-beverage",
        "penetration": 71,
        "sentiment": 87,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 79,
            "duration": "6 months",
            "reach": 77152
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 12.8,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 43,
        "oneYear": 68,
        "twoYear": 104,
        "confidence": 0.98
      }
    }
  },
  {
    "id": "mc-culinary-artists",
    "name": "Culinary Artists",
    "description": "Food lovers focused on Culinary Artists, sharing recipes, experiences, and culinary adventures",
    "category": "food",
    "size": "established",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "culinary artists",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 9,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 40
    },
    "segments": [
      "LE3",
      "EB3",
      "QS1",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-culinary-artists",
        "name": "Culinary Artists Trend",
        "description": "Current trending topic within the Culinary Artists community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 73,
        "linkedHashtags": [
          "#culinaryartists"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-culinary-artists",
        "handle": "@culinaryartists",
        "platform": "reddit",
        "followers": 331289,
        "tier": "macro",
        "engagement": 5.6,
        "niche": [
          "culinary artists"
        ],
        "authenticity": 85,
        "collaboration": {
          "averageRate": 3312,
          "responseRate": 85,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 80,
          "audienceMatch": 88
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "food-beverage",
        "penetration": 63,
        "sentiment": 84,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 88,
            "duration": "6 months",
            "reach": 74115
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 5.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 39,
        "oneYear": 54,
        "twoYear": 89,
        "confidence": 1.00
      }
    }
  },
  {
    "id": "mc-solo-travelers",
    "name": "Solo Travelers",
    "description": "Travelers and adventurers specializing in Solo Travelers experiences, sharing tips and inspiration",
    "category": "travel",
    "size": "emerging",
    "platform": "youtube",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "solo travelers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 5,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 47
    },
    "segments": [
      "EB3",
      "EB2",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-solo-travelers",
        "name": "Solo Travelers Trend",
        "description": "Current trending topic within the Solo Travelers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 99,
        "linkedHashtags": [
          "#solotravelers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-solo-travelers",
        "handle": "@solotravelers",
        "platform": "youtube",
        "followers": 322434,
        "tier": "macro",
        "engagement": 5.6,
        "niche": [
          "solo travelers"
        ],
        "authenticity": 80,
        "collaboration": {
          "averageRate": 3224,
          "responseRate": 75,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 84,
          "audienceMatch": 87
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 75,
        "sentiment": 79,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 79,
            "duration": "6 months",
            "reach": 70462
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 5.8,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 32,
        "oneYear": 39,
        "twoYear": 100,
        "confidence": 0.97
      }
    }
  },
  {
    "id": "mc-budget-backpackers",
    "name": "Budget Backpackers",
    "description": "Travelers and adventurers specializing in Budget Backpackers experiences, sharing tips and inspiration",
    "category": "travel",
    "size": "growing",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "budget backpackers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 11,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 43
    },
    "segments": [
      "QS2",
      "EB2",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-budget-backpackers",
        "name": "Budget Backpackers Trend",
        "description": "Current trending topic within the Budget Backpackers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 97,
        "linkedHashtags": [
          "#budgetbackpackers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-budget-backpackers",
        "handle": "@budgetbackpackers",
        "platform": "discord",
        "followers": 112912,
        "tier": "macro",
        "engagement": 10.3,
        "niche": [
          "budget backpackers"
        ],
        "authenticity": 96,
        "collaboration": {
          "averageRate": 1129,
          "responseRate": 74,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 85,
          "audienceMatch": 93
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 62,
        "sentiment": 90,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 87,
            "duration": "6 months",
            "reach": 99899
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 8.2,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 23,
        "oneYear": 41,
        "twoYear": 119,
        "confidence": 0.96
      }
    }
  },
  {
    "id": "mc-luxury-travelers",
    "name": "Luxury Travelers",
    "description": "Travelers and adventurers specializing in Luxury Travelers experiences, sharing tips and inspiration",
    "category": "travel",
    "size": "growing",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "luxury travelers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "western-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 8,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 12
    },
    "segments": [
      "LE1",
      "EB2"
    ],
    "trends": [
      {
        "id": "trend-luxury-travelers",
        "name": "Luxury Travelers Trend",
        "description": "Current trending topic within the Luxury Travelers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 89,
        "linkedHashtags": [
          "#luxurytravelers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-luxury-travelers",
        "handle": "@luxurytravelers",
        "platform": "discord",
        "followers": 365719,
        "tier": "macro",
        "engagement": 7.3,
        "niche": [
          "luxury travelers"
        ],
        "authenticity": 98,
        "collaboration": {
          "averageRate": 3657,
          "responseRate": 87,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 85,
          "audienceMatch": 92
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 50,
        "sentiment": 79,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 80,
            "duration": "6 months",
            "reach": 75292
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 7.5,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 43,
        "oneYear": 39,
        "twoYear": 115,
        "confidence": 0.76
      }
    }
  },
  {
    "id": "mc-adventure-seekers",
    "name": "Adventure Seekers",
    "description": "Travelers and adventurers specializing in Adventure Seekers experiences, sharing tips and inspiration",
    "category": "travel",
    "size": "growing",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "adventure seekers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "central-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 19,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 49
    },
    "segments": [
      "LE2",
      "EB1",
      "EB2",
      "QS3"
    ],
    "trends": [
      {
        "id": "trend-adventure-seekers",
        "name": "Adventure Seekers Trend",
        "description": "Current trending topic within the Adventure Seekers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 89,
        "linkedHashtags": [
          "#adventureseekers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-adventure-seekers",
        "handle": "@adventureseekers",
        "platform": "discord",
        "followers": 426345,
        "tier": "macro",
        "engagement": 4.8,
        "niche": [
          "adventure seekers"
        ],
        "authenticity": 90,
        "collaboration": {
          "averageRate": 4263,
          "responseRate": 68,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 92,
          "audienceMatch": 80
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 77,
        "sentiment": 93,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 79,
            "duration": "6 months",
            "reach": 98825
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 6.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 24,
        "oneYear": 49,
        "twoYear": 104,
        "confidence": 0.82
      }
    }
  },
  {
    "id": "mc-cultural-travelers",
    "name": "Cultural Travelers",
    "description": "Travelers and adventurers specializing in Cultural Travelers experiences, sharing tips and inspiration",
    "category": "travel",
    "size": "massive",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "cultural travelers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 19,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 41
    },
    "segments": [
      "QS3",
      "LE3",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-cultural-travelers",
        "name": "Cultural Travelers Trend",
        "description": "Current trending topic within the Cultural Travelers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 87,
        "linkedHashtags": [
          "#culturaltravelers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-cultural-travelers",
        "handle": "@culturaltravelers",
        "platform": "reddit",
        "followers": 293030,
        "tier": "macro",
        "engagement": 4.3,
        "niche": [
          "cultural travelers"
        ],
        "authenticity": 96,
        "collaboration": {
          "averageRate": 2930,
          "responseRate": 73,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 92,
          "audienceMatch": 93
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 61,
        "sentiment": 93,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 91,
            "duration": "6 months",
            "reach": 20590
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 5.7,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 43,
        "oneYear": 31,
        "twoYear": 99,
        "confidence": 0.72
      }
    }
  },
  {
    "id": "mc-food-tourists",
    "name": "Food Tourists",
    "description": "Travelers and adventurers specializing in Food Tourists experiences, sharing tips and inspiration",
    "category": "travel",
    "size": "massive",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "food tourists",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "mountain-west-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 9,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 14
    },
    "segments": [
      "LE1",
      "LE2",
      "QS3",
      "QS1"
    ],
    "trends": [
      {
        "id": "trend-food-tourists",
        "name": "Food Tourists Trend",
        "description": "Current trending topic within the Food Tourists community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 86,
        "linkedHashtags": [
          "#foodtourists"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-food-tourists",
        "handle": "@foodtourists",
        "platform": "instagram",
        "followers": 375664,
        "tier": "macro",
        "engagement": 4.3,
        "niche": [
          "food tourists"
        ],
        "authenticity": 99,
        "collaboration": {
          "averageRate": 3756,
          "responseRate": 69,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 93,
          "audienceMatch": 80
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 53,
        "sentiment": 86,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 92,
            "duration": "6 months",
            "reach": 37169
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 7.5,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 23,
        "oneYear": 40,
        "twoYear": 61,
        "confidence": 0.71
      }
    }
  },
  {
    "id": "mc-eco-travelers",
    "name": "Eco-Travelers",
    "description": "Travelers and adventurers specializing in Eco-Travelers experiences, sharing tips and inspiration",
    "category": "travel",
    "size": "growing",
    "platform": "tiktok",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "eco-travelers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 13,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 30
    },
    "segments": [
      "QS3",
      "EB3",
      "QS2",
      "LE1"
    ],
    "trends": [
      {
        "id": "trend-eco-travelers",
        "name": "Eco-Travelers Trend",
        "description": "Current trending topic within the Eco-Travelers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 77,
        "linkedHashtags": [
          "#eco-travelers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-eco-travelers",
        "handle": "@eco-travelers",
        "platform": "tiktok",
        "followers": 252393,
        "tier": "macro",
        "engagement": 3.5,
        "niche": [
          "eco-travelers"
        ],
        "authenticity": 90,
        "collaboration": {
          "averageRate": 2523,
          "responseRate": 78,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 81,
          "audienceMatch": 85
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 52,
        "sentiment": 93,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 93,
            "duration": "6 months",
            "reach": 90193
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 10.0,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 18,
        "oneYear": 63,
        "twoYear": 63,
        "confidence": 0.71
      }
    }
  },
  {
    "id": "mc-digital-nomad-travelers",
    "name": "Digital Nomad Travelers",
    "description": "Travelers and adventurers specializing in Digital Nomad Travelers experiences, sharing tips and inspiration",
    "category": "travel",
    "size": "growing",
    "platform": "youtube",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "digital nomad travelers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "southwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 18,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 27
    },
    "segments": [
      "LE1",
      "LE2",
      "LE3"
    ],
    "trends": [
      {
        "id": "trend-digital-nomad-travelers",
        "name": "Digital Nomad Travelers Trend",
        "description": "Current trending topic within the Digital Nomad Travelers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 90,
        "linkedHashtags": [
          "#digitalnomadtravelers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-digital-nomad-travelers",
        "handle": "@digitalnomadtravelers",
        "platform": "youtube",
        "followers": 367382,
        "tier": "macro",
        "engagement": 6.9,
        "niche": [
          "digital nomad travelers"
        ],
        "authenticity": 96,
        "collaboration": {
          "averageRate": 3673,
          "responseRate": 85,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 80,
          "audienceMatch": 82
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 78,
        "sentiment": 83,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 93,
            "duration": "6 months",
            "reach": 80508
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 10.6,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 39,
        "oneYear": 53,
        "twoYear": 58,
        "confidence": 0.70
      }
    }
  },
  {
    "id": "mc-family-travel",
    "name": "Family Travel",
    "description": "Travelers and adventurers specializing in Family Travel experiences, sharing tips and inspiration",
    "category": "travel",
    "size": "massive",
    "platform": "youtube",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "family travel",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "midwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 17,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 14
    },
    "segments": [
      "EB2",
      "LE1",
      "QS1",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-family-travel",
        "name": "Family Travel Trend",
        "description": "Current trending topic within the Family Travel community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 64,
        "linkedHashtags": [
          "#familytravel"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-family-travel",
        "handle": "@familytravel",
        "platform": "youtube",
        "followers": 400036,
        "tier": "macro",
        "engagement": 11.8,
        "niche": [
          "family travel"
        ],
        "authenticity": 94,
        "collaboration": {
          "averageRate": 4000,
          "responseRate": 62,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 84,
          "audienceMatch": 83
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 58,
        "sentiment": 87,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 80,
            "duration": "6 months",
            "reach": 72292
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 4.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 25,
        "oneYear": 57,
        "twoYear": 107,
        "confidence": 0.76
      }
    }
  },
  {
    "id": "mc-senior-travelers",
    "name": "Senior Travelers",
    "description": "Travelers and adventurers specializing in Senior Travelers experiences, sharing tips and inspiration",
    "category": "travel",
    "size": "established",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "senior travelers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "midwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 5,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 26
    },
    "segments": [
      "LE3",
      "LE2",
      "EB2",
      "EB3"
    ],
    "trends": [
      {
        "id": "trend-senior-travelers",
        "name": "Senior Travelers Trend",
        "description": "Current trending topic within the Senior Travelers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 78,
        "linkedHashtags": [
          "#seniortravelers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-senior-travelers",
        "handle": "@seniortravelers",
        "platform": "discord",
        "followers": 333995,
        "tier": "macro",
        "engagement": 7.4,
        "niche": [
          "senior travelers"
        ],
        "authenticity": 94,
        "collaboration": {
          "averageRate": 3339,
          "responseRate": 66,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 90,
          "audienceMatch": 90
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 52,
        "sentiment": 81,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 90,
            "duration": "6 months",
            "reach": 23694
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 6.7,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 29,
        "oneYear": 34,
        "twoYear": 77,
        "confidence": 0.93
      }
    }
  },
  {
    "id": "mc-road-trip-enthusiasts",
    "name": "Road Trip Enthusiasts",
    "description": "Travelers and adventurers specializing in Road Trip Enthusiasts experiences, sharing tips and inspiration",
    "category": "travel",
    "size": "emerging",
    "platform": "youtube",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "road trip enthusiasts",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "midwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 15,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 41
    },
    "segments": [
      "LE2",
      "EB1",
      "QS1",
      "QS3"
    ],
    "trends": [
      {
        "id": "trend-road-trip-enthusiasts",
        "name": "Road Trip Enthusiasts Trend",
        "description": "Current trending topic within the Road Trip Enthusiasts community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 61,
        "linkedHashtags": [
          "#roadtripenthusiasts"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-road-trip-enthusiasts",
        "handle": "@roadtripenthusiasts",
        "platform": "youtube",
        "followers": 480827,
        "tier": "macro",
        "engagement": 9.5,
        "niche": [
          "road trip enthusiasts"
        ],
        "authenticity": 95,
        "collaboration": {
          "averageRate": 4808,
          "responseRate": 80,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 84,
          "audienceMatch": 84
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 66,
        "sentiment": 79,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 76,
            "duration": "6 months",
            "reach": 101382
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 11.5,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 35,
        "oneYear": 71,
        "twoYear": 114,
        "confidence": 0.73
      }
    }
  },
  {
    "id": "mc-international-students",
    "name": "International Students",
    "description": "Travelers and adventurers specializing in International Students experiences, sharing tips and inspiration",
    "category": "travel",
    "size": "growing",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "international students",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 13,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 46
    },
    "segments": [
      "QS3",
      "LE1",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-international-students",
        "name": "International Students Trend",
        "description": "Current trending topic within the International Students community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 63,
        "linkedHashtags": [
          "#internationalstudents"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-international-students",
        "handle": "@internationalstudents",
        "platform": "discord",
        "followers": 163251,
        "tier": "macro",
        "engagement": 3.8,
        "niche": [
          "international students"
        ],
        "authenticity": 85,
        "collaboration": {
          "averageRate": 1632,
          "responseRate": 60,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 88,
          "audienceMatch": 88
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 55,
        "sentiment": 90,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 81,
            "duration": "6 months",
            "reach": 56850
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 12.0,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 17,
        "oneYear": 32,
        "twoYear": 116,
        "confidence": 0.76
      }
    }
  },
  {
    "id": "mc-travel-photographers",
    "name": "Travel Photographers",
    "description": "Travelers and adventurers specializing in Travel Photographers experiences, sharing tips and inspiration",
    "category": "travel",
    "size": "emerging",
    "platform": "tiktok",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "travel photographers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 7,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 32
    },
    "segments": [
      "EB3",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-travel-photographers",
        "name": "Travel Photographers Trend",
        "description": "Current trending topic within the Travel Photographers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 98,
        "linkedHashtags": [
          "#travelphotographers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-travel-photographers",
        "handle": "@travelphotographers",
        "platform": "tiktok",
        "followers": 336892,
        "tier": "macro",
        "engagement": 5.2,
        "niche": [
          "travel photographers"
        ],
        "authenticity": 90,
        "collaboration": {
          "averageRate": 3368,
          "responseRate": 67,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 80,
          "audienceMatch": 80
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 63,
        "sentiment": 85,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 91,
            "duration": "6 months",
            "reach": 31014
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 10.0,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 44,
        "oneYear": 33,
        "twoYear": 119,
        "confidence": 0.98
      }
    }
  },
  {
    "id": "mc-cruise-enthusiasts",
    "name": "Cruise Enthusiasts",
    "description": "Travelers and adventurers specializing in Cruise Enthusiasts experiences, sharing tips and inspiration",
    "category": "travel",
    "size": "established",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "cruise enthusiasts",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 19,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 16
    },
    "segments": [
      "LE3",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-cruise-enthusiasts",
        "name": "Cruise Enthusiasts Trend",
        "description": "Current trending topic within the Cruise Enthusiasts community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 94,
        "linkedHashtags": [
          "#cruiseenthusiasts"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-cruise-enthusiasts",
        "handle": "@cruiseenthusiasts",
        "platform": "reddit",
        "followers": 488984,
        "tier": "macro",
        "engagement": 3.1,
        "niche": [
          "cruise enthusiasts"
        ],
        "authenticity": 97,
        "collaboration": {
          "averageRate": 4889,
          "responseRate": 82,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 90,
          "audienceMatch": 86
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 67,
        "sentiment": 94,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 81,
            "duration": "6 months",
            "reach": 95902
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 5.3,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 21,
        "oneYear": 44,
        "twoYear": 103,
        "confidence": 0.90
      }
    }
  },
  {
    "id": "mc-camping-community",
    "name": "Camping Community",
    "description": "Travelers and adventurers specializing in Camping Community experiences, sharing tips and inspiration",
    "category": "travel",
    "size": "growing",
    "platform": "youtube",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "camping community",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 35,
        "25-35": 40,
        "35-45": 20,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 15,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 11
    },
    "segments": [
      "QS2",
      "EB3",
      "EB2",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-camping-community",
        "name": "Camping Community Trend",
        "description": "Current trending topic within the Camping Community community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 73,
        "linkedHashtags": [
          "#campingcommunity"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-camping-community",
        "handle": "@campingcommunity",
        "platform": "youtube",
        "followers": 354465,
        "tier": "macro",
        "engagement": 3.3,
        "niche": [
          "camping community"
        ],
        "authenticity": 91,
        "collaboration": {
          "averageRate": 3544,
          "responseRate": 89,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 80,
          "audienceMatch": 85
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 71,
        "sentiment": 76,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 79,
            "duration": "6 months",
            "reach": 93453
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 7.2,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 26,
        "oneYear": 54,
        "twoYear": 97,
        "confidence": 0.88
      }
    }
  },
  {
    "id": "mc-new-parents",
    "name": "New Parents",
    "description": "New Parents sharing parenting experiences, advice, and building supportive community networks",
    "category": "parenting",
    "size": "growing",
    "platform": "youtube",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "new parents",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 10,
        "25-35": 60,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 10,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 36
    },
    "segments": [
      "LE2",
      "EB2",
      "QS3"
    ],
    "trends": [
      {
        "id": "trend-new-parents",
        "name": "New Parents Trend",
        "description": "Current trending topic within the New Parents community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 86,
        "linkedHashtags": [
          "#newparents"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-new-parents",
        "handle": "@newparents",
        "platform": "youtube",
        "followers": 305108,
        "tier": "macro",
        "engagement": 11.9,
        "niche": [
          "new parents"
        ],
        "authenticity": 91,
        "collaboration": {
          "averageRate": 3051,
          "responseRate": 84,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 86,
          "audienceMatch": 82
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 68,
        "sentiment": 89,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 83,
            "duration": "6 months",
            "reach": 86170
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 9.6,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 30,
        "oneYear": 52,
        "twoYear": 48,
        "confidence": 0.77
      }
    }
  },
  {
    "id": "mc-single-parents",
    "name": "Single Parents",
    "description": "Single Parents sharing parenting experiences, advice, and building supportive community networks",
    "category": "parenting",
    "size": "growing",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "single parents",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 10,
        "25-35": 60,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 7,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 46
    },
    "segments": [
      "EB2",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-single-parents",
        "name": "Single Parents Trend",
        "description": "Current trending topic within the Single Parents community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 91,
        "linkedHashtags": [
          "#singleparents"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-single-parents",
        "handle": "@singleparents",
        "platform": "instagram",
        "followers": 294186,
        "tier": "macro",
        "engagement": 2.5,
        "niche": [
          "single parents"
        ],
        "authenticity": 80,
        "collaboration": {
          "averageRate": 2941,
          "responseRate": 61,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 81,
          "audienceMatch": 88
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 67,
        "sentiment": 78,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 87,
            "duration": "6 months",
            "reach": 32304
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 2.2,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 34,
        "oneYear": 47,
        "twoYear": 57,
        "confidence": 0.89
      }
    }
  },
  {
    "id": "mc-adoptive-parents",
    "name": "Adoptive Parents",
    "description": "Adoptive Parents sharing parenting experiences, advice, and building supportive community networks",
    "category": "parenting",
    "size": "emerging",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "adoptive parents",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 10,
        "25-35": 60,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "mountain-west-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 7,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 44
    },
    "segments": [
      "LE3",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-adoptive-parents",
        "name": "Adoptive Parents Trend",
        "description": "Current trending topic within the Adoptive Parents community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 92,
        "linkedHashtags": [
          "#adoptiveparents"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-adoptive-parents",
        "handle": "@adoptiveparents",
        "platform": "discord",
        "followers": 310921,
        "tier": "macro",
        "engagement": 5.9,
        "niche": [
          "adoptive parents"
        ],
        "authenticity": 93,
        "collaboration": {
          "averageRate": 3109,
          "responseRate": 64,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 89,
          "audienceMatch": 90
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 69,
        "sentiment": 92,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 77,
            "duration": "6 months",
            "reach": 96985
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 7.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 34,
        "oneYear": 69,
        "twoYear": 94,
        "confidence": 0.78
      }
    }
  },
  {
    "id": "mc-homeschooling-parents",
    "name": "Homeschooling Parents",
    "description": "Homeschooling Parents sharing parenting experiences, advice, and building supportive community networks",
    "category": "parenting",
    "size": "established",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "homeschooling parents",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 10,
        "25-35": 60,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "eastern-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 19,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 28
    },
    "segments": [
      "LE2",
      "LE1",
      "LE3"
    ],
    "trends": [
      {
        "id": "trend-homeschooling-parents",
        "name": "Homeschooling Parents Trend",
        "description": "Current trending topic within the Homeschooling Parents community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 64,
        "linkedHashtags": [
          "#homeschoolingparents"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-homeschooling-parents",
        "handle": "@homeschoolingparents",
        "platform": "discord",
        "followers": 307645,
        "tier": "macro",
        "engagement": 5.7,
        "niche": [
          "homeschooling parents"
        ],
        "authenticity": 98,
        "collaboration": {
          "averageRate": 3076,
          "responseRate": 75,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 93,
          "audienceMatch": 83
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 67,
        "sentiment": 86,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 94,
            "duration": "6 months",
            "reach": 102126
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 14.1,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 39,
        "oneYear": 69,
        "twoYear": 56,
        "confidence": 0.93
      }
    }
  },
  {
    "id": "mc-working-parents",
    "name": "Working Parents",
    "description": "Working Parents sharing parenting experiences, advice, and building supportive community networks",
    "category": "parenting",
    "size": "growing",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "working parents",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 10,
        "25-35": 60,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 10,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 46
    },
    "segments": [
      "QS3",
      "EB1",
      "QS1",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-working-parents",
        "name": "Working Parents Trend",
        "description": "Current trending topic within the Working Parents community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 97,
        "linkedHashtags": [
          "#workingparents"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-working-parents",
        "handle": "@workingparents",
        "platform": "discord",
        "followers": 180241,
        "tier": "macro",
        "engagement": 6.1,
        "niche": [
          "working parents"
        ],
        "authenticity": 86,
        "collaboration": {
          "averageRate": 1802,
          "responseRate": 88,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 82,
          "audienceMatch": 82
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 67,
        "sentiment": 77,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 86,
            "duration": "6 months",
            "reach": 96130
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 9.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 18,
        "oneYear": 47,
        "twoYear": 53,
        "confidence": 0.91
      }
    }
  },
  {
    "id": "mc-millennial-parents",
    "name": "Millennial Parents",
    "description": "Millennial Parents sharing parenting experiences, advice, and building supportive community networks",
    "category": "parenting",
    "size": "emerging",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "millennial parents",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 10,
        "25-35": 60,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "central-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 9,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 44
    },
    "segments": [
      "EB1",
      "QS3"
    ],
    "trends": [
      {
        "id": "trend-millennial-parents",
        "name": "Millennial Parents Trend",
        "description": "Current trending topic within the Millennial Parents community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 69,
        "linkedHashtags": [
          "#millennialparents"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-millennial-parents",
        "handle": "@millennialparents",
        "platform": "instagram",
        "followers": 107788,
        "tier": "macro",
        "engagement": 8.4,
        "niche": [
          "millennial parents"
        ],
        "authenticity": 85,
        "collaboration": {
          "averageRate": 1077,
          "responseRate": 62,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 93,
          "audienceMatch": 81
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 62,
        "sentiment": 80,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 78,
            "duration": "6 months",
            "reach": 76297
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 9.0,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 32,
        "oneYear": 32,
        "twoYear": 54,
        "confidence": 0.86
      }
    }
  },
  {
    "id": "mc-gen-z-parents",
    "name": "Gen Z Parents",
    "description": "Gen Z Parents sharing parenting experiences, advice, and building supportive community networks",
    "category": "parenting",
    "size": "massive",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "gen z parents",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 10,
        "25-35": 60,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 16,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 24
    },
    "segments": [
      "LE3",
      "LE2",
      "EB3"
    ],
    "trends": [
      {
        "id": "trend-gen-z-parents",
        "name": "Gen Z Parents Trend",
        "description": "Current trending topic within the Gen Z Parents community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 78,
        "linkedHashtags": [
          "#genzparents"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-gen-z-parents",
        "handle": "@genzparents",
        "platform": "discord",
        "followers": 390893,
        "tier": "macro",
        "engagement": 2.9,
        "niche": [
          "gen z parents"
        ],
        "authenticity": 81,
        "collaboration": {
          "averageRate": 3908,
          "responseRate": 76,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 82,
          "audienceMatch": 85
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 55,
        "sentiment": 82,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 84,
            "duration": "6 months",
            "reach": 107606
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 13.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 44,
        "oneYear": 61,
        "twoYear": 105,
        "confidence": 0.83
      }
    }
  },
  {
    "id": "mc-special-needs-parents",
    "name": "Special Needs Parents",
    "description": "Special Needs Parents sharing parenting experiences, advice, and building supportive community networks",
    "category": "parenting",
    "size": "emerging",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "special needs parents",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 10,
        "25-35": 60,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 13,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 29
    },
    "segments": [
      "EB1",
      "LE3",
      "QS3"
    ],
    "trends": [
      {
        "id": "trend-special-needs-parents",
        "name": "Special Needs Parents Trend",
        "description": "Current trending topic within the Special Needs Parents community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 99,
        "linkedHashtags": [
          "#specialneedsparents"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-special-needs-parents",
        "handle": "@specialneedsparents",
        "platform": "discord",
        "followers": 476968,
        "tier": "macro",
        "engagement": 11.5,
        "niche": [
          "special needs parents"
        ],
        "authenticity": 90,
        "collaboration": {
          "averageRate": 4769,
          "responseRate": 84,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 86,
          "audienceMatch": 89
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 81,
        "sentiment": 87,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 88,
            "duration": "6 months",
            "reach": 78393
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 6.3,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 31,
        "oneYear": 29,
        "twoYear": 108,
        "confidence": 0.91
      }
    }
  },
  {
    "id": "mc-attachment-parenting",
    "name": "Attachment Parenting",
    "description": "Attachment Parenting sharing parenting experiences, advice, and building supportive community networks",
    "category": "parenting",
    "size": "massive",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "attachment parenting",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 10,
        "25-35": 60,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 19,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 43
    },
    "segments": [
      "EB3",
      "QS1",
      "QS3",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-attachment-parenting",
        "name": "Attachment Parenting Trend",
        "description": "Current trending topic within the Attachment Parenting community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 80,
        "linkedHashtags": [
          "#attachmentparenting"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-attachment-parenting",
        "handle": "@attachmentparenting",
        "platform": "discord",
        "followers": 211756,
        "tier": "macro",
        "engagement": 11.2,
        "niche": [
          "attachment parenting"
        ],
        "authenticity": 94,
        "collaboration": {
          "averageRate": 2117,
          "responseRate": 75,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 83,
          "audienceMatch": 84
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 54,
        "sentiment": 79,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 92,
            "duration": "6 months",
            "reach": 44371
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 2.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 40,
        "oneYear": 49,
        "twoYear": 104,
        "confidence": 0.97
      }
    }
  },
  {
    "id": "mc-gentle-parenting",
    "name": "Gentle Parenting",
    "description": "Gentle Parenting sharing parenting experiences, advice, and building supportive community networks",
    "category": "parenting",
    "size": "growing",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "gentle parenting",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 10,
        "25-35": 60,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "midwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 15,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 22
    },
    "segments": [
      "LE1",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-gentle-parenting",
        "name": "Gentle Parenting Trend",
        "description": "Current trending topic within the Gentle Parenting community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 79,
        "linkedHashtags": [
          "#gentleparenting"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-gentle-parenting",
        "handle": "@gentleparenting",
        "platform": "reddit",
        "followers": 460327,
        "tier": "macro",
        "engagement": 4.5,
        "niche": [
          "gentle parenting"
        ],
        "authenticity": 96,
        "collaboration": {
          "averageRate": 4603,
          "responseRate": 62,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 85,
          "audienceMatch": 88
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 51,
        "sentiment": 79,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 88,
            "duration": "6 months",
            "reach": 26642
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 12.1,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 16,
        "oneYear": 72,
        "twoYear": 74,
        "confidence": 0.78
      }
    }
  },
  {
    "id": "mc-montessori-parents",
    "name": "Montessori Parents",
    "description": "Montessori Parents sharing parenting experiences, advice, and building supportive community networks",
    "category": "parenting",
    "size": "growing",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "montessori parents",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 10,
        "25-35": 60,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "southwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 9,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 21
    },
    "segments": [
      "LE3",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-montessori-parents",
        "name": "Montessori Parents Trend",
        "description": "Current trending topic within the Montessori Parents community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 62,
        "linkedHashtags": [
          "#montessoriparents"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-montessori-parents",
        "handle": "@montessoriparents",
        "platform": "discord",
        "followers": 486745,
        "tier": "macro",
        "engagement": 8.0,
        "niche": [
          "montessori parents"
        ],
        "authenticity": 96,
        "collaboration": {
          "averageRate": 4867,
          "responseRate": 76,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 94,
          "audienceMatch": 81
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 53,
        "sentiment": 81,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 93,
            "duration": "6 months",
            "reach": 33521
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 3.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 15,
        "oneYear": 38,
        "twoYear": 103,
        "confidence": 0.82
      }
    }
  },
  {
    "id": "mc-waldorf-education",
    "name": "Waldorf Education",
    "description": "Waldorf Education sharing parenting experiences, advice, and building supportive community networks",
    "category": "parenting",
    "size": "established",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "waldorf education",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 10,
        "25-35": 60,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "midwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 8,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 22
    },
    "segments": [
      "QS3",
      "QS2",
      "LE1"
    ],
    "trends": [
      {
        "id": "trend-waldorf-education",
        "name": "Waldorf Education Trend",
        "description": "Current trending topic within the Waldorf Education community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 81,
        "linkedHashtags": [
          "#waldorfeducation"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-waldorf-education",
        "handle": "@waldorfeducation",
        "platform": "discord",
        "followers": 259398,
        "tier": "macro",
        "engagement": 4.8,
        "niche": [
          "waldorf education"
        ],
        "authenticity": 98,
        "collaboration": {
          "averageRate": 2593,
          "responseRate": 77,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 85,
          "audienceMatch": 88
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 53,
        "sentiment": 94,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 94,
            "duration": "6 months",
            "reach": 69891
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 5.7,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 21,
        "oneYear": 29,
        "twoYear": 43,
        "confidence": 0.90
      }
    }
  },
  {
    "id": "mc-unschooling",
    "name": "Unschooling",
    "description": "Unschooling sharing parenting experiences, advice, and building supportive community networks",
    "category": "parenting",
    "size": "emerging",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "unschooling",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 10,
        "25-35": 60,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 14,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 14
    },
    "segments": [
      "EB3",
      "EB2",
      "EB1",
      "LE3"
    ],
    "trends": [
      {
        "id": "trend-unschooling",
        "name": "Unschooling Trend",
        "description": "Current trending topic within the Unschooling community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 69,
        "linkedHashtags": [
          "#unschooling"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-unschooling",
        "handle": "@unschooling",
        "platform": "discord",
        "followers": 424202,
        "tier": "macro",
        "engagement": 5.0,
        "niche": [
          "unschooling"
        ],
        "authenticity": 88,
        "collaboration": {
          "averageRate": 4242,
          "responseRate": 84,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 89,
          "audienceMatch": 87
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 69,
        "sentiment": 76,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 94,
            "duration": "6 months",
            "reach": 78518
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 7.5,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 33,
        "oneYear": 39,
        "twoYear": 80,
        "confidence": 0.86
      }
    }
  },
  {
    "id": "mc-baby-wearing",
    "name": "Baby-wearing",
    "description": "Baby-wearing sharing parenting experiences, advice, and building supportive community networks",
    "category": "parenting",
    "size": "growing",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "baby-wearing",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 10,
        "25-35": 60,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 17,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 43
    },
    "segments": [
      "EB1",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-baby-wearing",
        "name": "Baby-wearing Trend",
        "description": "Current trending topic within the Baby-wearing community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 68,
        "linkedHashtags": [
          "#baby-wearing"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-baby-wearing",
        "handle": "@baby-wearing",
        "platform": "discord",
        "followers": 95243,
        "tier": "micro",
        "engagement": 7.7,
        "niche": [
          "baby-wearing"
        ],
        "authenticity": 94,
        "collaboration": {
          "averageRate": 952,
          "responseRate": 65,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 94,
          "audienceMatch": 85
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 57,
        "sentiment": 75,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 82,
            "duration": "6 months",
            "reach": 29637
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 6.6,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 20,
        "oneYear": 53,
        "twoYear": 101,
        "confidence": 0.81
      }
    }
  },
  {
    "id": "mc-cloth-diapering",
    "name": "Cloth Diapering",
    "description": "Cloth Diapering sharing parenting experiences, advice, and building supportive community networks",
    "category": "parenting",
    "size": "established",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "cloth diapering",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 10,
        "25-35": 60,
        "35-45": 25,
        "45-55": 4,
        "over-55": 1
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 8,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 27
    },
    "segments": [
      "QS2",
      "EB3",
      "LE3",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-cloth-diapering",
        "name": "Cloth Diapering Trend",
        "description": "Current trending topic within the Cloth Diapering community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 87,
        "linkedHashtags": [
          "#clothdiapering"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-cloth-diapering",
        "handle": "@clothdiapering",
        "platform": "discord",
        "followers": 195890,
        "tier": "macro",
        "engagement": 8.4,
        "niche": [
          "cloth diapering"
        ],
        "authenticity": 95,
        "collaboration": {
          "averageRate": 1958,
          "responseRate": 62,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 90,
          "audienceMatch": 80
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 58,
        "sentiment": 92,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 83,
            "duration": "6 months",
            "reach": 109785
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 5.1,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 40,
        "oneYear": 40,
        "twoYear": 47,
        "confidence": 0.88
      }
    }
  },
  {
    "id": "mc-personal-finance",
    "name": "Personal Finance",
    "description": "Individuals focused on Personal Finance strategies, sharing tips and building wealth together",
    "category": "finance",
    "size": "established",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "personal finance",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 20,
        "25-35": 40,
        "35-45": 30,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "eastern-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 17,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 14
    },
    "segments": [
      "QS3",
      "LE3"
    ],
    "trends": [
      {
        "id": "trend-personal-finance",
        "name": "Personal Finance Trend",
        "description": "Current trending topic within the Personal Finance community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 67,
        "linkedHashtags": [
          "#personalfinance"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-personal-finance",
        "handle": "@personalfinance",
        "platform": "reddit",
        "followers": 38407,
        "tier": "micro",
        "engagement": 10.5,
        "niche": [
          "personal finance"
        ],
        "authenticity": 99,
        "collaboration": {
          "averageRate": 384,
          "responseRate": 79,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 81,
          "audienceMatch": 90
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 61,
        "sentiment": 77,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 79,
            "duration": "6 months",
            "reach": 113580
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 7.7,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 41,
        "oneYear": 29,
        "twoYear": 73,
        "confidence": 0.90
      }
    }
  },
  {
    "id": "mc-investing-community",
    "name": "Investing Community",
    "description": "Individuals focused on Investing Community strategies, sharing tips and building wealth together",
    "category": "finance",
    "size": "growing",
    "platform": "youtube",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "investing community",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 20,
        "25-35": 40,
        "35-45": 30,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "eastern-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 10,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 10
    },
    "segments": [
      "QS1",
      "EB3",
      "EB2"
    ],
    "trends": [
      {
        "id": "trend-investing-community",
        "name": "Investing Community Trend",
        "description": "Current trending topic within the Investing Community community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 99,
        "linkedHashtags": [
          "#investingcommunity"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-investing-community",
        "handle": "@investingcommunity",
        "platform": "youtube",
        "followers": 230344,
        "tier": "macro",
        "engagement": 2.6,
        "niche": [
          "investing community"
        ],
        "authenticity": 94,
        "collaboration": {
          "averageRate": 2303,
          "responseRate": 85,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 85,
          "audienceMatch": 82
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 58,
        "sentiment": 82,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 94,
            "duration": "6 months",
            "reach": 24533
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 13.7,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 42,
        "oneYear": 29,
        "twoYear": 117,
        "confidence": 0.76
      }
    }
  },
  {
    "id": "mc-crypto-traders",
    "name": "Crypto Traders",
    "description": "Individuals focused on Crypto Traders strategies, sharing tips and building wealth together",
    "category": "finance",
    "size": "established",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "crypto traders",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 20,
        "25-35": 40,
        "35-45": 30,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "midwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 7,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 39
    },
    "segments": [
      "QS1",
      "LE1",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-crypto-traders",
        "name": "Crypto Traders Trend",
        "description": "Current trending topic within the Crypto Traders community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 81,
        "linkedHashtags": [
          "#cryptotraders"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-crypto-traders",
        "handle": "@cryptotraders",
        "platform": "discord",
        "followers": 96518,
        "tier": "micro",
        "engagement": 2.4,
        "niche": [
          "crypto traders"
        ],
        "authenticity": 80,
        "collaboration": {
          "averageRate": 965,
          "responseRate": 69,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 92,
          "audienceMatch": 89
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 58,
        "sentiment": 84,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 89,
            "duration": "6 months",
            "reach": 36049
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 2.8,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 23,
        "oneYear": 42,
        "twoYear": 45,
        "confidence": 0.71
      }
    }
  },
  {
    "id": "mc-real-estate-investors",
    "name": "Real Estate Investors",
    "description": "Individuals focused on Real Estate Investors strategies, sharing tips and building wealth together",
    "category": "finance",
    "size": "emerging",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "real estate investors",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 20,
        "25-35": 40,
        "35-45": 30,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 5,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 46
    },
    "segments": [
      "EB3",
      "EB2"
    ],
    "trends": [
      {
        "id": "trend-real-estate-investors",
        "name": "Real Estate Investors Trend",
        "description": "Current trending topic within the Real Estate Investors community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 82,
        "linkedHashtags": [
          "#realestateinvestors"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-real-estate-investors",
        "handle": "@realestateinvestors",
        "platform": "discord",
        "followers": 245511,
        "tier": "macro",
        "engagement": 4.6,
        "niche": [
          "real estate investors"
        ],
        "authenticity": 97,
        "collaboration": {
          "averageRate": 2455,
          "responseRate": 89,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 88,
          "audienceMatch": 85
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 66,
        "sentiment": 88,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 75,
            "duration": "6 months",
            "reach": 75271
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 9.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 32,
        "oneYear": 31,
        "twoYear": 63,
        "confidence": 0.77
      }
    }
  },
  {
    "id": "mc-day-traders",
    "name": "Day Traders",
    "description": "Individuals focused on Day Traders strategies, sharing tips and building wealth together",
    "category": "finance",
    "size": "growing",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "day traders",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 20,
        "25-35": 40,
        "35-45": 30,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 19,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 47
    },
    "segments": [
      "EB1",
      "LE1"
    ],
    "trends": [
      {
        "id": "trend-day-traders",
        "name": "Day Traders Trend",
        "description": "Current trending topic within the Day Traders community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 87,
        "linkedHashtags": [
          "#daytraders"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-day-traders",
        "handle": "@daytraders",
        "platform": "discord",
        "followers": 138124,
        "tier": "macro",
        "engagement": 9.4,
        "niche": [
          "day traders"
        ],
        "authenticity": 85,
        "collaboration": {
          "averageRate": 1381,
          "responseRate": 87,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 85,
          "audienceMatch": 85
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 50,
        "sentiment": 79,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 87,
            "duration": "6 months",
            "reach": 60013
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 3.0,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 19,
        "oneYear": 33,
        "twoYear": 76,
        "confidence": 0.83
      }
    }
  },
  {
    "id": "mc-financial-independence",
    "name": "Financial Independence",
    "description": "Individuals focused on Financial Independence strategies, sharing tips and building wealth together",
    "category": "finance",
    "size": "growing",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "financial independence",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 20,
        "25-35": 40,
        "35-45": 30,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 9,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 37
    },
    "segments": [
      "EB1",
      "LE3",
      "LE1",
      "QS1"
    ],
    "trends": [
      {
        "id": "trend-financial-independence",
        "name": "Financial Independence Trend",
        "description": "Current trending topic within the Financial Independence community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 82,
        "linkedHashtags": [
          "#financialindependence"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-financial-independence",
        "handle": "@financialindependence",
        "platform": "discord",
        "followers": 445135,
        "tier": "macro",
        "engagement": 11.6,
        "niche": [
          "financial independence"
        ],
        "authenticity": 85,
        "collaboration": {
          "averageRate": 4451,
          "responseRate": 86,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 91,
          "audienceMatch": 80
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 81,
        "sentiment": 81,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 90,
            "duration": "6 months",
            "reach": 85301
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 3.1,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 39,
        "oneYear": 68,
        "twoYear": 102,
        "confidence": 0.88
      }
    }
  },
  {
    "id": "mc-dividend-investors",
    "name": "Dividend Investors",
    "description": "Individuals focused on Dividend Investors strategies, sharing tips and building wealth together",
    "category": "finance",
    "size": "established",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "dividend investors",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 20,
        "25-35": 40,
        "35-45": 30,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 12,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 30
    },
    "segments": [
      "EB2",
      "EB3",
      "LE1"
    ],
    "trends": [
      {
        "id": "trend-dividend-investors",
        "name": "Dividend Investors Trend",
        "description": "Current trending topic within the Dividend Investors community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 92,
        "linkedHashtags": [
          "#dividendinvestors"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-dividend-investors",
        "handle": "@dividendinvestors",
        "platform": "reddit",
        "followers": 85701,
        "tier": "micro",
        "engagement": 6.9,
        "niche": [
          "dividend investors"
        ],
        "authenticity": 97,
        "collaboration": {
          "averageRate": 857,
          "responseRate": 89,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 88,
          "audienceMatch": 83
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 76,
        "sentiment": 80,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 89,
            "duration": "6 months",
            "reach": 97779
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 13.2,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 42,
        "oneYear": 39,
        "twoYear": 41,
        "confidence": 0.93
      }
    }
  },
  {
    "id": "mc-options-traders",
    "name": "Options Traders",
    "description": "Individuals focused on Options Traders strategies, sharing tips and building wealth together",
    "category": "finance",
    "size": "emerging",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "options traders",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 20,
        "25-35": 40,
        "35-45": 30,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 10,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 26
    },
    "segments": [
      "QS3",
      "LE1",
      "EB2",
      "QS1"
    ],
    "trends": [
      {
        "id": "trend-options-traders",
        "name": "Options Traders Trend",
        "description": "Current trending topic within the Options Traders community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 81,
        "linkedHashtags": [
          "#optionstraders"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-options-traders",
        "handle": "@optionstraders",
        "platform": "discord",
        "followers": 189606,
        "tier": "macro",
        "engagement": 3.4,
        "niche": [
          "options traders"
        ],
        "authenticity": 90,
        "collaboration": {
          "averageRate": 1896,
          "responseRate": 70,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 85,
          "audienceMatch": 90
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 87,
        "sentiment": 82,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 80,
            "duration": "6 months",
            "reach": 22869
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 8.0,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 15,
        "oneYear": 56,
        "twoYear": 59,
        "confidence": 0.76
      }
    }
  },
  {
    "id": "mc-financial-advisors",
    "name": "Financial Advisors",
    "description": "Individuals focused on Financial Advisors strategies, sharing tips and building wealth together",
    "category": "finance",
    "size": "established",
    "platform": "youtube",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "financial advisors",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 20,
        "25-35": 40,
        "35-45": 30,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "midwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 7,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 31
    },
    "segments": [
      "LE1",
      "LE2",
      "EB3",
      "QS1"
    ],
    "trends": [
      {
        "id": "trend-financial-advisors",
        "name": "Financial Advisors Trend",
        "description": "Current trending topic within the Financial Advisors community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 95,
        "linkedHashtags": [
          "#financialadvisors"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-financial-advisors",
        "handle": "@financialadvisors",
        "platform": "youtube",
        "followers": 177824,
        "tier": "macro",
        "engagement": 5.9,
        "niche": [
          "financial advisors"
        ],
        "authenticity": 85,
        "collaboration": {
          "averageRate": 1778,
          "responseRate": 83,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 84,
          "audienceMatch": 89
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 75,
        "sentiment": 88,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 79,
            "duration": "6 months",
            "reach": 55755
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 9.6,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 37,
        "oneYear": 51,
        "twoYear": 61,
        "confidence": 0.73
      }
    }
  },
  {
    "id": "mc-budgeting-community",
    "name": "Budgeting Community",
    "description": "Individuals focused on Budgeting Community strategies, sharing tips and building wealth together",
    "category": "finance",
    "size": "massive",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "budgeting community",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 20,
        "25-35": 40,
        "35-45": 30,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 7,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 19
    },
    "segments": [
      "EB2",
      "LE2",
      "EB3"
    ],
    "trends": [
      {
        "id": "trend-budgeting-community",
        "name": "Budgeting Community Trend",
        "description": "Current trending topic within the Budgeting Community community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 86,
        "linkedHashtags": [
          "#budgetingcommunity"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-budgeting-community",
        "handle": "@budgetingcommunity",
        "platform": "instagram",
        "followers": 325457,
        "tier": "macro",
        "engagement": 3.6,
        "niche": [
          "budgeting community"
        ],
        "authenticity": 99,
        "collaboration": {
          "averageRate": 3254,
          "responseRate": 63,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 93,
          "audienceMatch": 94
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 66,
        "sentiment": 91,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 93,
            "duration": "6 months",
            "reach": 79901
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 9.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 29,
        "oneYear": 68,
        "twoYear": 55,
        "confidence": 0.95
      }
    }
  },
  {
    "id": "mc-debt-free-journey",
    "name": "Debt-Free Journey",
    "description": "Individuals focused on Debt-Free Journey strategies, sharing tips and building wealth together",
    "category": "finance",
    "size": "massive",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "debt-free journey",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 20,
        "25-35": 40,
        "35-45": 30,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "eastern-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 12,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 13
    },
    "segments": [
      "LE1",
      "QS2",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-debt-free-journey",
        "name": "Debt-Free Journey Trend",
        "description": "Current trending topic within the Debt-Free Journey community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 79,
        "linkedHashtags": [
          "#debt-freejourney"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-debt-free-journey",
        "handle": "@debt-freejourney",
        "platform": "reddit",
        "followers": 25513,
        "tier": "micro",
        "engagement": 4.9,
        "niche": [
          "debt-free journey"
        ],
        "authenticity": 81,
        "collaboration": {
          "averageRate": 255,
          "responseRate": 78,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 91,
          "audienceMatch": 84
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 63,
        "sentiment": 82,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 87,
            "duration": "6 months",
            "reach": 52991
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 5.0,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 42,
        "oneYear": 28,
        "twoYear": 79,
        "confidence": 0.74
      }
    }
  },
  {
    "id": "mc-side-hustlers",
    "name": "Side Hustlers",
    "description": "Individuals focused on Side Hustlers strategies, sharing tips and building wealth together",
    "category": "finance",
    "size": "established",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "side hustlers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 20,
        "25-35": 40,
        "35-45": 30,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 7,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 21
    },
    "segments": [
      "LE2",
      "EB1",
      "LE1"
    ],
    "trends": [
      {
        "id": "trend-side-hustlers",
        "name": "Side Hustlers Trend",
        "description": "Current trending topic within the Side Hustlers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 64,
        "linkedHashtags": [
          "#sidehustlers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-side-hustlers",
        "handle": "@sidehustlers",
        "platform": "discord",
        "followers": 196967,
        "tier": "macro",
        "engagement": 9.9,
        "niche": [
          "side hustlers"
        ],
        "authenticity": 81,
        "collaboration": {
          "averageRate": 1969,
          "responseRate": 80,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 81,
          "audienceMatch": 82
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 59,
        "sentiment": 85,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 80,
            "duration": "6 months",
            "reach": 90750
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 8.0,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 31,
        "oneYear": 48,
        "twoYear": 91,
        "confidence": 0.77
      }
    }
  },
  {
    "id": "mc-business-investors",
    "name": "Business Investors",
    "description": "Individuals focused on Business Investors strategies, sharing tips and building wealth together",
    "category": "finance",
    "size": "established",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "business investors",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 20,
        "25-35": 40,
        "35-45": 30,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "midwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 10,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 38
    },
    "segments": [
      "LE1",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-business-investors",
        "name": "Business Investors Trend",
        "description": "Current trending topic within the Business Investors community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 92,
        "linkedHashtags": [
          "#businessinvestors"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-business-investors",
        "handle": "@businessinvestors",
        "platform": "reddit",
        "followers": 453983,
        "tier": "macro",
        "engagement": 11.8,
        "niche": [
          "business investors"
        ],
        "authenticity": 83,
        "collaboration": {
          "averageRate": 4539,
          "responseRate": 81,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 85,
          "audienceMatch": 84
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 73,
        "sentiment": 88,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 90,
            "duration": "6 months",
            "reach": 83404
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 5.2,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 18,
        "oneYear": 38,
        "twoYear": 59,
        "confidence": 0.98
      }
    }
  },
  {
    "id": "mc-frugal-living",
    "name": "Frugal Living",
    "description": "Individuals focused on Frugal Living strategies, sharing tips and building wealth together",
    "category": "finance",
    "size": "growing",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "frugal living",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 20,
        "25-35": 40,
        "35-45": 30,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 6,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 12
    },
    "segments": [
      "EB2",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-frugal-living",
        "name": "Frugal Living Trend",
        "description": "Current trending topic within the Frugal Living community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 64,
        "linkedHashtags": [
          "#frugalliving"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-frugal-living",
        "handle": "@frugalliving",
        "platform": "reddit",
        "followers": 456062,
        "tier": "macro",
        "engagement": 10.2,
        "niche": [
          "frugal living"
        ],
        "authenticity": 95,
        "collaboration": {
          "averageRate": 4560,
          "responseRate": 86,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 89,
          "audienceMatch": 88
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 54,
        "sentiment": 84,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 75,
            "duration": "6 months",
            "reach": 104610
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 12.6,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 38,
        "oneYear": 51,
        "twoYear": 78,
        "confidence": 0.78
      }
    }
  },
  {
    "id": "mc-wealth-building",
    "name": "Wealth Building",
    "description": "Individuals focused on Wealth Building strategies, sharing tips and building wealth together",
    "category": "finance",
    "size": "growing",
    "platform": "tiktok",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "wealth building",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 20,
        "25-35": 40,
        "35-45": 30,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 9,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 20
    },
    "segments": [
      "LE2",
      "QS1",
      "EB3"
    ],
    "trends": [
      {
        "id": "trend-wealth-building",
        "name": "Wealth Building Trend",
        "description": "Current trending topic within the Wealth Building community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 97,
        "linkedHashtags": [
          "#wealthbuilding"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-wealth-building",
        "handle": "@wealthbuilding",
        "platform": "tiktok",
        "followers": 45399,
        "tier": "micro",
        "engagement": 5.2,
        "niche": [
          "wealth building"
        ],
        "authenticity": 81,
        "collaboration": {
          "averageRate": 453,
          "responseRate": 64,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 91,
          "audienceMatch": 89
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 82,
        "sentiment": 77,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 81,
            "duration": "6 months",
            "reach": 83455
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 6.1,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 26,
        "oneYear": 34,
        "twoYear": 107,
        "confidence": 0.74
      }
    }
  },
  {
    "id": "mc-lifelong-learners",
    "name": "Lifelong Learners",
    "description": "Educators and learners in Lifelong Learners, sharing resources, methods, and educational innovation",
    "category": "education",
    "size": "growing",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "lifelong learners",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 30,
        "25-35": 35,
        "35-45": 25,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 8,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 45
    },
    "segments": [
      "LE1",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-lifelong-learners",
        "name": "Lifelong Learners Trend",
        "description": "Current trending topic within the Lifelong Learners community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 86,
        "linkedHashtags": [
          "#lifelonglearners"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-lifelong-learners",
        "handle": "@lifelonglearners",
        "platform": "instagram",
        "followers": 58475,
        "tier": "micro",
        "engagement": 7.7,
        "niche": [
          "lifelong learners"
        ],
        "authenticity": 84,
        "collaboration": {
          "averageRate": 584,
          "responseRate": 81,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 85,
          "audienceMatch": 91
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 85,
        "sentiment": 93,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 79,
            "duration": "6 months",
            "reach": 95337
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 3.5,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 25,
        "oneYear": 57,
        "twoYear": 64,
        "confidence": 0.85
      }
    }
  },
  {
    "id": "mc-online-educators",
    "name": "Online Educators",
    "description": "Educators and learners in Online Educators, sharing resources, methods, and educational innovation",
    "category": "education",
    "size": "growing",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "online educators",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 30,
        "25-35": 35,
        "35-45": 25,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "central-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 18,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 20
    },
    "segments": [
      "EB1",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-online-educators",
        "name": "Online Educators Trend",
        "description": "Current trending topic within the Online Educators community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 62,
        "linkedHashtags": [
          "#onlineeducators"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-online-educators",
        "handle": "@onlineeducators",
        "platform": "reddit",
        "followers": 68889,
        "tier": "micro",
        "engagement": 9.7,
        "niche": [
          "online educators"
        ],
        "authenticity": 95,
        "collaboration": {
          "averageRate": 688,
          "responseRate": 62,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 88,
          "audienceMatch": 92
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 54,
        "sentiment": 88,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 90,
            "duration": "6 months",
            "reach": 106213
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 2.7,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 25,
        "oneYear": 50,
        "twoYear": 71,
        "confidence": 0.84
      }
    }
  },
  {
    "id": "mc-homeschool-teachers",
    "name": "Homeschool Teachers",
    "description": "Educators and learners in Homeschool Teachers, sharing resources, methods, and educational innovation",
    "category": "education",
    "size": "massive",
    "platform": "tiktok",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "homeschool teachers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 30,
        "25-35": 35,
        "35-45": 25,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-san-francisco",
          "concentration": 6,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 20
    },
    "segments": [
      "EB1",
      "QS3",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-homeschool-teachers",
        "name": "Homeschool Teachers Trend",
        "description": "Current trending topic within the Homeschool Teachers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 63,
        "linkedHashtags": [
          "#homeschoolteachers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-homeschool-teachers",
        "handle": "@homeschoolteachers",
        "platform": "tiktok",
        "followers": 170073,
        "tier": "macro",
        "engagement": 6.8,
        "niche": [
          "homeschool teachers"
        ],
        "authenticity": 94,
        "collaboration": {
          "averageRate": 1700,
          "responseRate": 83,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 85,
          "audienceMatch": 86
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 83,
        "sentiment": 80,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 76,
            "duration": "6 months",
            "reach": 69124
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 5.5,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 15,
        "oneYear": 66,
        "twoYear": 46,
        "confidence": 0.73
      }
    }
  },
  {
    "id": "mc-adult-learners",
    "name": "Adult Learners",
    "description": "Educators and learners in Adult Learners, sharing resources, methods, and educational innovation",
    "category": "education",
    "size": "established",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "adult learners",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 30,
        "25-35": 35,
        "35-45": 25,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 12,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 28
    },
    "segments": [
      "LE1",
      "LE2",
      "LE3",
      "QS3"
    ],
    "trends": [
      {
        "id": "trend-adult-learners",
        "name": "Adult Learners Trend",
        "description": "Current trending topic within the Adult Learners community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 96,
        "linkedHashtags": [
          "#adultlearners"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-adult-learners",
        "handle": "@adultlearners",
        "platform": "discord",
        "followers": 482593,
        "tier": "macro",
        "engagement": 10.6,
        "niche": [
          "adult learners"
        ],
        "authenticity": 98,
        "collaboration": {
          "averageRate": 4825,
          "responseRate": 89,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 83,
          "audienceMatch": 94
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 73,
        "sentiment": 77,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 79,
            "duration": "6 months",
            "reach": 40556
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 7.7,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 27,
        "oneYear": 56,
        "twoYear": 82,
        "confidence": 0.81
      }
    }
  },
  {
    "id": "mc-skill-sharers",
    "name": "Skill Sharers",
    "description": "Educators and learners in Skill Sharers, sharing resources, methods, and educational innovation",
    "category": "education",
    "size": "growing",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "skill sharers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 30,
        "25-35": 35,
        "35-45": 25,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 5,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 13
    },
    "segments": [
      "EB1",
      "EB2",
      "EB3",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-skill-sharers",
        "name": "Skill Sharers Trend",
        "description": "Current trending topic within the Skill Sharers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 68,
        "linkedHashtags": [
          "#skillsharers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-skill-sharers",
        "handle": "@skillsharers",
        "platform": "reddit",
        "followers": 114157,
        "tier": "macro",
        "engagement": 6.6,
        "niche": [
          "skill sharers"
        ],
        "authenticity": 87,
        "collaboration": {
          "averageRate": 1141,
          "responseRate": 81,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 90,
          "audienceMatch": 88
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 69,
        "sentiment": 88,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 94,
            "duration": "6 months",
            "reach": 44416
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 6.5,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 39,
        "oneYear": 49,
        "twoYear": 74,
        "confidence": 0.81
      }
    }
  },
  {
    "id": "mc-language-learners",
    "name": "Language Learners",
    "description": "Educators and learners in Language Learners, sharing resources, methods, and educational innovation",
    "category": "education",
    "size": "massive",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "language learners",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 30,
        "25-35": 35,
        "35-45": 25,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 13,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 35
    },
    "segments": [
      "LE3",
      "EB1"
    ],
    "trends": [
      {
        "id": "trend-language-learners",
        "name": "Language Learners Trend",
        "description": "Current trending topic within the Language Learners community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 78,
        "linkedHashtags": [
          "#languagelearners"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-language-learners",
        "handle": "@languagelearners",
        "platform": "instagram",
        "followers": 223275,
        "tier": "macro",
        "engagement": 3.7,
        "niche": [
          "language learners"
        ],
        "authenticity": 89,
        "collaboration": {
          "averageRate": 2232,
          "responseRate": 74,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 90,
          "audienceMatch": 86
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 60,
        "sentiment": 93,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 86,
            "duration": "6 months",
            "reach": 113606
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 16.5,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 17,
        "oneYear": 28,
        "twoYear": 102,
        "confidence": 0.98
      }
    }
  },
  {
    "id": "mc-stem-educators",
    "name": "STEM Educators",
    "description": "Educators and learners in STEM Educators, sharing resources, methods, and educational innovation",
    "category": "education",
    "size": "emerging",
    "platform": "instagram",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "stem educators",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 30,
        "25-35": 35,
        "35-45": 25,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "northeast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-seattle",
          "concentration": 8,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 20
    },
    "segments": [
      "EB2",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-stem-educators",
        "name": "STEM Educators Trend",
        "description": "Current trending topic within the STEM Educators community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 97,
        "linkedHashtags": [
          "#stemeducators"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-stem-educators",
        "handle": "@stemeducators",
        "platform": "instagram",
        "followers": 416620,
        "tier": "macro",
        "engagement": 2.6,
        "niche": [
          "stem educators"
        ],
        "authenticity": 81,
        "collaboration": {
          "averageRate": 4166,
          "responseRate": 68,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 87,
          "audienceMatch": 80
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 69,
        "sentiment": 83,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 82,
            "duration": "6 months",
            "reach": 105565
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 3.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 31,
        "oneYear": 53,
        "twoYear": 89,
        "confidence": 0.87
      }
    }
  },
  {
    "id": "mc-arts-education",
    "name": "Arts Education",
    "description": "Educators and learners in Arts Education, sharing resources, methods, and educational innovation",
    "category": "education",
    "size": "growing",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "arts education",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 30,
        "25-35": 35,
        "35-45": 25,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "central-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 5,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 11
    },
    "segments": [
      "QS1",
      "LE1",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-arts-education",
        "name": "Arts Education Trend",
        "description": "Current trending topic within the Arts Education community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 69,
        "linkedHashtags": [
          "#artseducation"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-arts-education",
        "handle": "@artseducation",
        "platform": "reddit",
        "followers": 74586,
        "tier": "micro",
        "engagement": 7.1,
        "niche": [
          "arts education"
        ],
        "authenticity": 95,
        "collaboration": {
          "averageRate": 745,
          "responseRate": 72,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 91,
          "audienceMatch": 84
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 85,
        "sentiment": 87,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 88,
            "duration": "6 months",
            "reach": 79746
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 11.6,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 31,
        "oneYear": 33,
        "twoYear": 85,
        "confidence": 0.94
      }
    }
  },
  {
    "id": "mc-early-childhood-education",
    "name": "Early Childhood Education",
    "description": "Educators and learners in Early Childhood Education, sharing resources, methods, and educational innovation",
    "category": "education",
    "size": "growing",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "early childhood education",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 30,
        "25-35": 35,
        "35-45": 25,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "eastern-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-nyc",
          "concentration": 18,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 17
    },
    "segments": [
      "EB3",
      "EB2"
    ],
    "trends": [
      {
        "id": "trend-early-childhood-education",
        "name": "Early Childhood Education Trend",
        "description": "Current trending topic within the Early Childhood Education community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 76,
        "linkedHashtags": [
          "#earlychildhoodeducation"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-early-childhood-education",
        "handle": "@earlychildhoodeducation",
        "platform": "discord",
        "followers": 79007,
        "tier": "micro",
        "engagement": 11.7,
        "niche": [
          "early childhood education"
        ],
        "authenticity": 99,
        "collaboration": {
          "averageRate": 790,
          "responseRate": 69,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 94,
          "audienceMatch": 85
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 88,
        "sentiment": 90,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 75,
            "duration": "6 months",
            "reach": 31903
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 2.4,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 33,
        "oneYear": 25,
        "twoYear": 100,
        "confidence": 0.88
      }
    }
  },
  {
    "id": "mc-special-education",
    "name": "Special Education",
    "description": "Educators and learners in Special Education, sharing resources, methods, and educational innovation",
    "category": "education",
    "size": "emerging",
    "platform": "youtube",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "special education",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 30,
        "25-35": 35,
        "35-45": 25,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "southwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 17,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 10
    },
    "segments": [
      "LE1",
      "QS3",
      "QS1",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-special-education",
        "name": "Special Education Trend",
        "description": "Current trending topic within the Special Education community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 66,
        "linkedHashtags": [
          "#specialeducation"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-special-education",
        "handle": "@specialeducation",
        "platform": "youtube",
        "followers": 291689,
        "tier": "macro",
        "engagement": 4.0,
        "niche": [
          "special education"
        ],
        "authenticity": 98,
        "collaboration": {
          "averageRate": 2916,
          "responseRate": 72,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 85,
          "audienceMatch": 91
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 82,
        "sentiment": 94,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 94,
            "duration": "6 months",
            "reach": 20819
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 12.3,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 23,
        "oneYear": 74,
        "twoYear": 118,
        "confidence": 0.79
      }
    }
  },
  {
    "id": "mc-educational-technology",
    "name": "Educational Technology",
    "description": "Educators and learners in Educational Technology, sharing resources, methods, and educational innovation",
    "category": "education",
    "size": "emerging",
    "platform": "discord",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "educational technology",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 30,
        "25-35": 35,
        "35-45": 25,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": false,
      "primaryRegions": [
        "western-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 12,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 17
    },
    "segments": [
      "QS2",
      "EB3",
      "QS3",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-educational-technology",
        "name": "Educational Technology Trend",
        "description": "Current trending topic within the Educational Technology community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 76,
        "linkedHashtags": [
          "#educationaltechnology"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-educational-technology",
        "handle": "@educationaltechnology",
        "platform": "discord",
        "followers": 30747,
        "tier": "micro",
        "engagement": 5.2,
        "niche": [
          "educational technology"
        ],
        "authenticity": 81,
        "collaboration": {
          "averageRate": 307,
          "responseRate": 66,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 87,
          "audienceMatch": 89
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 75,
        "sentiment": 77,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 87,
            "duration": "6 months",
            "reach": 79043
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 14.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 34,
        "oneYear": 61,
        "twoYear": 106,
        "confidence": 0.75
      }
    }
  },
  {
    "id": "mc-curriculum-developers",
    "name": "Curriculum Developers",
    "description": "Educators and learners in Curriculum Developers, sharing resources, methods, and educational innovation",
    "category": "education",
    "size": "massive",
    "platform": "youtube",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "curriculum developers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 30,
        "25-35": 35,
        "35-45": 25,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "eastern-canada"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-los-angeles",
          "concentration": 19,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 10
    },
    "segments": [
      "LE2",
      "LE1",
      "LE3",
      "QS3"
    ],
    "trends": [
      {
        "id": "trend-curriculum-developers",
        "name": "Curriculum Developers Trend",
        "description": "Current trending topic within the Curriculum Developers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 73,
        "linkedHashtags": [
          "#curriculumdevelopers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-curriculum-developers",
        "handle": "@curriculumdevelopers",
        "platform": "youtube",
        "followers": 329839,
        "tier": "macro",
        "engagement": 11.7,
        "niche": [
          "curriculum developers"
        ],
        "authenticity": 97,
        "collaboration": {
          "averageRate": 3298,
          "responseRate": 72,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 82,
          "audienceMatch": 82
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 54,
        "sentiment": 86,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 92,
            "duration": "6 months",
            "reach": 24692
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 11.8,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 21,
        "oneYear": 39,
        "twoYear": 108,
        "confidence": 0.88
      }
    }
  },
  {
    "id": "mc-student-teachers",
    "name": "Student Teachers",
    "description": "Educators and learners in Student Teachers, sharing resources, methods, and educational innovation",
    "category": "education",
    "size": "massive",
    "platform": "tiktok",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "student teachers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 30,
        "25-35": 35,
        "35-45": 25,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "midwest-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 16,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 12
    },
    "segments": [
      "QS3",
      "QS2"
    ],
    "trends": [
      {
        "id": "trend-student-teachers",
        "name": "Student Teachers Trend",
        "description": "Current trending topic within the Student Teachers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 82,
        "linkedHashtags": [
          "#studentteachers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-student-teachers",
        "handle": "@studentteachers",
        "platform": "tiktok",
        "followers": 174536,
        "tier": "macro",
        "engagement": 8.7,
        "niche": [
          "student teachers"
        ],
        "authenticity": 90,
        "collaboration": {
          "averageRate": 1745,
          "responseRate": 87,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 87,
          "audienceMatch": 86
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 67,
        "sentiment": 80,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 82,
            "duration": "6 months",
            "reach": 106511
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 6.9,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 23,
        "oneYear": 63,
        "twoYear": 117,
        "confidence": 0.96
      }
    }
  },
  {
    "id": "mc-educational-researchers",
    "name": "Educational Researchers",
    "description": "Educators and learners in Educational Researchers, sharing resources, methods, and educational innovation",
    "category": "education",
    "size": "emerging",
    "platform": "tiktok",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "educational researchers",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 30,
        "25-35": 35,
        "35-45": 25,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "mountain-west-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 9,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 45
    },
    "segments": [
      "LE3",
      "LE2"
    ],
    "trends": [
      {
        "id": "trend-educational-researchers",
        "name": "Educational Researchers Trend",
        "description": "Current trending topic within the Educational Researchers community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 60,
        "linkedHashtags": [
          "#educationalresearchers"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-educational-researchers",
        "handle": "@educationalresearchers",
        "platform": "tiktok",
        "followers": 352346,
        "tier": "macro",
        "engagement": 5.6,
        "niche": [
          "educational researchers"
        ],
        "authenticity": 89,
        "collaboration": {
          "averageRate": 3523,
          "responseRate": 67,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 83,
          "audienceMatch": 81
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 53,
        "sentiment": 89,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 81,
            "duration": "6 months",
            "reach": 21420
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 15.5,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 36,
        "oneYear": 27,
        "twoYear": 118,
        "confidence": 0.83
      }
    }
  },
  {
    "id": "mc-learning-community",
    "name": "Learning Community",
    "description": "Educators and learners in Learning Community, sharing resources, methods, and educational innovation",
    "category": "education",
    "size": "growing",
    "platform": "reddit",
    "characteristics": {
      "values": [
        "community",
        "authenticity",
        "growth",
        "creativity",
        "support"
      ],
      "interests": [
        "learning community",
        "content creation",
        "networking",
        "learning",
        "sharing"
      ],
      "behaviors": [
        "posting content",
        "engaging with others",
        "sharing tips",
        "attending events"
      ],
      "language": [
        "community",
        "authentic",
        "inspiring",
        "supportive",
        "inclusive"
      ],
      "visualAesthetics": [
        "clean design",
        "authentic photos",
        "vibrant colors",
        "engaging layouts"
      ],
      "contentTypes": [
        "how-to guides",
        "personal stories",
        "community highlights",
        "educational content"
      ],
      "engagementPatterns": [
        {
          "type": "peak_hours",
          "description": "Most active during evening hours",
          "data": {
            "morning": 60,
            "afternoon": 75,
            "evening": 90,
            "night": 45
          }
        }
      ]
    },
    "demographics": {
      "ageDistribution": {
        "18-25": 30,
        "25-35": 35,
        "35-45": 25,
        "45-55": 8,
        "over-55": 2
      },
      "genderDistribution": {
        "male": 45,
        "female": 50,
        "unisex": 4,
        "other": 1
      },
      "incomeDistribution": {
        "under-50k": 30,
        "50k-100k": 40,
        "100k-200k": 25,
        "over-200k": 5
      },
      "educationLevel": "Moderate to High",
      "occupationTypes": [
        "Professional",
        "Creative",
        "Student",
        "Entrepreneur",
        "Specialist"
      ]
    },
    "geography": {
      "globalReach": true,
      "primaryRegions": [
        "west-coast-us"
      ],
      "cityConcentrations": [
        {
          "cityId": "us-chicago",
          "concentration": 16,
          "localVariations": [
            "Urban culture",
            "Tech influence"
          ]
        }
      ],
      "ruralUrbanSplit": 19
    },
    "segments": [
      "QS3",
      "EB3"
    ],
    "trends": [
      {
        "id": "trend-learning-community",
        "name": "Learning Community Trend",
        "description": "Current trending topic within the Learning Community community",
        "startDate": "2023-01-01",
        "status": "growing",
        "virality": 73,
        "linkedHashtags": [
          "#learningcommunity"
        ],
        "contentExamples": [
          "tutorial videos",
          "showcase posts",
          "community highlights"
        ]
      }
    ],
    "influencers": [
      {
        "id": "inf-learning-community",
        "handle": "@learningcommunity",
        "platform": "reddit",
        "followers": 254307,
        "tier": "macro",
        "engagement": 8.7,
        "niche": [
          "learning community"
        ],
        "authenticity": 97,
        "collaboration": {
          "averageRate": 2543,
          "responseRate": 67,
          "previousBrands": [
            "relevant brands"
          ],
          "contentQuality": 89,
          "audienceMatch": 94
        }
      }
    ],
    "brands": [
      {
        "name": "Community Brand",
        "category": "digital-products",
        "penetration": 74,
        "sentiment": 78,
        "partnerships": [
          {
            "type": "collaboration",
            "success": 79,
            "duration": "6 months",
            "reach": 42675
          }
        ]
      }
    ],
    "growth": {
      "monthlyGrowthRate": 12.5,
      "seasonalPatterns": {
        "fall": 100,
        "winter": 95,
        "spring": 110,
        "summer": 105
      },
      "platformMigration": [],
      "futureProjection": {
        "sixMonth": 32,
        "oneYear": 69,
        "twoYear": 73,
        "confidence": 0.86
      }
    }
  }
]

export const getMicroCommunityById = (id: string): MicroCommunity | undefined => {
  return allMicroCommunities.find(community => community.id === id)
}

export const getMicroCommunitiesByCategory = (category: CommunityCategory): MicroCommunity[] => {
  return allMicroCommunities.filter(community => community.category === category)
}

export const getMicroCommunitiesByPlatform = (platform: Platform): MicroCommunity[] => {
  return allMicroCommunities.filter(community => community.platform === platform)
}

export const getMicroCommunitiesBySize = (size: CommunitySize): MicroCommunity[] => {
  return allMicroCommunities.filter(community => community.size === size)
}
