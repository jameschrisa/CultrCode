# LaunchLens Database Setup Guide

## Overview

The LaunchLens micro-communities registry uses SQLite to store and manage:
- 80 micro-communities across 8 major categories
- Audience segmentation data
- Community-segment mappings  
- Platform activity data
- Brand affinity information
- Trending topics and analytics

## Database Structure

### Core Tables

#### Categories (8 main categories)
Based on the Communities.txt analysis:
1. **Arts & Creative Expression** - Digital art, crafting, photography, fashion subcultures
2. **Gaming & Entertainment** - Video games, anime, streaming, pop culture
3. **Health, Wellness & Fitness** - Nutrition, fitness regimes, mental wellness
4. **Technology & Innovation** - AI/ML, Web3, programming, cybersecurity
5. **Learning & Self-Improvement** - Languages, philosophy, productivity, finance
6. **Hobbies & Specialized Interests** - Gardening, cooking, collecting, audio
7. **Lifestyle & Values-Driven** - Sustainability, minimalism, digital nomads
8. **Niche Social & Identity Groups** - Fandom identities, aesthetic adopters

#### Communities (80 specific communities)
Each community includes:
- Size estimate (member count)
- Engagement level (low/medium/high/very_high)
- Growth trend (declining/stable/growing/exploding)
- Platform presence (JSON array)
- Examples (JSON array of specific sub-communities)

#### Audience Segments
Integration with existing segmentation tool:
- Demographics (age, income, education, location)
- Psychographics (values, interests, lifestyle)
- Behavioral patterns (shopping, media, decision-making)

#### Community-Segment Mappings
- Affinity scores (0-1 scale)
- Overlap percentages
- Confidence levels

## Installation & Setup

### 1. Install Dependencies
```bash
npm install sqlite sqlite3 @types/sqlite3 ts-node
```

### 2. Initialize Database
```bash
npm run db:init
```

This command will:
- Create the SQLite database file at `/database/communities.db`
- Execute the schema creation script
- Populate with seed data (80 communities, sample segments, mappings)

### 3. Verify Setup
The database includes sample data for testing:
- 4 audience segments (Creative Millennials, Health-Conscious Gen Z, Tech Enthusiasts, Sustainable Living Advocates)
- 31 communities across first 4 categories
- Platform data for TikTok, Instagram, YouTube, Reddit, Discord, etc.
- Brand affinity data for Apple, Patagonia, Adobe, Glossier, Tesla, etc.
- 5 trending topics with platform and keyword data

## API Endpoints

### Communities
- `GET /api/communities` - All communities with optional filtering
- `GET /api/communities?category=1` - Communities by category
- `GET /api/communities?search=fashion` - Search communities
- `GET /api/communities?trending=true` - Trending communities only
- `GET /api/communities/[id]` - Specific community details
- `POST /api/communities` - Community matching for user inputs

### Segments
- `GET /api/segments` - All audience segments
- `GET /api/segments?stats=true` - Segments with statistics
- `GET /api/segments/[id]/communities` - Communities matching a segment

### Categories
- `GET /api/categories` - All community categories
- `GET /api/categories?stats=true` - Categories with statistics

### Trending
- `GET /api/trending` - Trending topics and communities
- `GET /api/trending?type=topics` - Trending topics only
- `GET /api/trending?status=exploding` - Filter by trend status

## Database Views

### Pre-built Analytics Views
- **community_overview** - Summary stats for each community
- **segment_community_matches** - All segment-community mappings with scores
- **trending_communities** - Communities with high growth/engagement

### Sample Queries
```sql
-- Top 10 fastest growing communities
SELECT name, category_name, growth_trend, engagement_level 
FROM community_overview 
WHERE growth_trend = 'exploding' 
ORDER BY engagement_level DESC 
LIMIT 10;

-- Best community matches for a specific segment
SELECT community_name, affinity_score, overlap_percentage
FROM segment_community_matches 
WHERE segment_name = 'Creative Millennials'
ORDER BY affinity_score DESC
LIMIT 5;

-- Platform activity across communities
SELECT p.name as platform, COUNT(*) as active_communities
FROM platforms p
JOIN community_platform_activity cpa ON p.id = cpa.platform_id
WHERE cpa.activity_level IN ('high', 'primary')
GROUP BY p.name
ORDER BY active_communities DESC;
```

## Integration with Segmentation Tool

### User Input Processing
When a user completes the segmentation tool:

1. **Save Input Data**
```javascript
const inputId = await db.saveUserInput(sessionId, {
  age_range: "26-40",
  interests: ["art", "design", "sustainability"],
  values: ["creativity", "authenticity"],
  // ... other inputs
});
```

2. **Find Community Matches**
```javascript
const matches = await db.findBestCommunityMatches(inputId);
// Returns communities ranked by affinity score
```

3. **Display Results**
The API returns communities with:
- Match confidence levels
- Engagement metrics  
- Platform presence
- Growth trends
- Related segment data

## Data Sources & Updates

### Community Data (Static)
Based on comprehensive analysis of 80 micro-communities from Communities.txt:
- Size estimates based on platform research
- Engagement levels from community activity analysis
- Growth trends from platform and search data
- Platform presence from observation of where communities are most active

### Dynamic Data (Future)
- Real-time trending topics from social media APIs
- Community size updates from platform APIs
- Engagement metrics from social listening tools
- Brand affinity data from sentiment analysis

## Performance Optimization

### Indexes
Pre-configured indexes on:
- Community-category relationships
- Segment mappings
- Platform activity
- Trending topics by status
- User input sessions

### Caching Strategy
- API responses cached for 15 minutes
- Community overviews cached for 1 hour
- Trending data refreshed every 30 minutes
- Static category/platform data cached indefinitely

## Maintenance

### Regular Updates
- **Weekly**: Trending topics and community growth metrics
- **Monthly**: Community size estimates and platform presence
- **Quarterly**: New community discovery and category expansion
- **Annually**: Full database schema review and optimization

### Backup Strategy
- Daily SQLite file backups
- Schema version tracking
- Migration scripts for updates
- Data integrity validation

## Analytics & Reporting

### Built-in Metrics
- Total communities per category
- Average engagement levels
- Growth trend distribution
- Platform coverage analysis
- Segment overlap statistics

### Custom Analytics
The database structure supports complex queries for:
- Community discovery trends
- Cross-platform community analysis
- Segment behavior patterns
- Brand affinity insights
- Geographic community clusters (future)

---

**Database Version**: 1.0  
**Last Updated**: 2025-01-18  
**Total Communities**: 80 comprehensive micro-communities  
**Coverage**: 8 major category areas with full platform mapping