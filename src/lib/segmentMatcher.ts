import { UserInputs, Segment, SegmentMatch, DigitalBehavior, ValuesDriver, SpendingPower, CreatorAffinity } from '@/types/segments';
import { segments } from '@/data/segments';

export class SegmentMatcher {
  
  static matchSegments(inputs: UserInputs): SegmentMatch[] {
    const matches: SegmentMatch[] = [];
    
    for (const segment of segments) {
      const score = this.calculateMatchScore(inputs, segment);
      const reasons = this.getMatchReasons(inputs, segment);
      const confidence = this.calculateConfidence(score, reasons.length);
      
      matches.push({
        segment,
        matchScore: score,
        reasons,
        confidence
      });
    }
    
    // Sort by match score descending
    return matches.sort((a, b) => b.matchScore - a.matchScore);
  }
  
  private static calculateMatchScore(inputs: UserInputs, segment: Segment): number {
    let score = 0;
    let maxScore = 0;
    
    // Core scoring (80% weight) - available to all users
    // Digital Behavior scoring (20% weight)
    const digitalBehaviorScore = this.scoreDigitalBehavior(inputs, segment.digitalBehavior);
    score += digitalBehaviorScore * 0.20;
    maxScore += 10 * 0.20;
    
    // Values Driver scoring (25% weight)
    const valuesScore = this.scoreValues(inputs, segment.valuesDriver);
    score += valuesScore * 0.25;
    maxScore += 10 * 0.25;
    
    // Spending Power scoring (15% weight)
    const spendingScore = this.scoreSpendingPower(inputs, segment.spendingPower);
    score += spendingScore * 0.15;
    maxScore += 10 * 0.15;
    
    // Creator Affinity scoring (15% weight)
    const affinityScore = this.scoreCreatorAffinity(inputs, segment.creatorAffinity);
    score += affinityScore * 0.15;
    maxScore += 10 * 0.15;
    
    // Gender alignment bonus (5% weight)
    const genderScore = this.scoreGenderAlignment(inputs, segment);
    score += genderScore * 0.05;
    maxScore += 10 * 0.05;
    
    // Premium enhancements (20% weight) - only for premium users
    const premiumScore = this.scorePremiumFactors(inputs, segment);
    score += premiumScore * 0.20;
    maxScore += 10 * 0.20;
    
    // Convert to percentage
    return Math.round((score / maxScore) * 100);
  }
  
  private static scoreDigitalBehavior(inputs: UserInputs, behavior: DigitalBehavior): number {
    const platformScores: Record<string, Record<DigitalBehavior, number>> = {
      'instagram': { 'DB1': 8, 'DB2': 10, 'DB3': 6, 'DB4': 7 },
      'tiktok': { 'DB1': 10, 'DB2': 9, 'DB3': 5, 'DB4': 6 },
      'youtube': { 'DB1': 7, 'DB2': 8, 'DB3': 9, 'DB4': 8 },
      'linkedin': { 'DB1': 6, 'DB2': 7, 'DB3': 10, 'DB4': 9 },
      'twitter': { 'DB1': 9, 'DB2': 8, 'DB3': 8, 'DB4': 7 },
      'substack': { 'DB1': 7, 'DB2': 6, 'DB3': 10, 'DB4': 8 },
      'discord': { 'DB1': 8, 'DB2': 7, 'DB3': 7, 'DB4': 10 }
    };
    
    const followingScores: Record<string, Record<DigitalBehavior, number>> = {
      'under-1k': { 'DB1': 6, 'DB2': 7, 'DB3': 8, 'DB4': 10 },
      '1k-10k': { 'DB1': 8, 'DB2': 8, 'DB3': 8, 'DB4': 9 },
      '10k-100k': { 'DB1': 9, 'DB2': 9, 'DB3': 7, 'DB4': 7 },
      '100k-1m': { 'DB1': 10, 'DB2': 10, 'DB3': 6, 'DB4': 6 },
      'over-1m': { 'DB1': 10, 'DB2': 9, 'DB3': 5, 'DB4': 5 }
    };
    
    const platformScore = platformScores[inputs.primaryPlatform]?.[behavior] || 5;
    const followingScore = followingScores[inputs.followingSize]?.[behavior] || 5;
    
    return Math.round((platformScore + followingScore) / 2);
  }
  
  private static scoreValues(inputs: UserInputs, driver: ValuesDriver): number {
    const categoryScores: Record<string, Record<ValuesDriver, number>> = {
      'beauty-skincare': { 'VD1': 8, 'VD2': 9, 'VD3': 7, 'VD4': 8 },
      'health-fitness': { 'VD1': 7, 'VD2': 8, 'VD3': 9, 'VD4': 8 },
      'digital-products': { 'VD1': 6, 'VD2': 8, 'VD3': 9, 'VD4': 7 },
      'fashion-accessories': { 'VD1': 7, 'VD2': 10, 'VD3': 8, 'VD4': 9 },
      'food-beverage': { 'VD1': 9, 'VD2': 7, 'VD3': 8, 'VD4': 7 },
      'professional-services': { 'VD1': 7, 'VD2': 7, 'VD3': 9, 'VD4': 8 },
      'coaching-consulting': { 'VD1': 8, 'VD2': 8, 'VD3': 8, 'VD4': 9 },
      'home-lifestyle': { 'VD1': 8, 'VD2': 9, 'VD3': 8, 'VD4': 7 },
      'tech-apps': { 'VD1': 7, 'VD2': 8, 'VD3': 10, 'VD4': 6 },
      'sustainable-products': { 'VD1': 10, 'VD2': 7, 'VD3': 8, 'VD4': 8 }
    };
    
    // Check if sustainability is in values
    const sustainabilityBonus = inputs.values.includes('sustainability') ? 2 : 0;
    const qualityBonus = inputs.values.includes('quality') ? 2 : 0;
    const communityBonus = inputs.values.includes('community') ? 2 : 0;
    const innovationBonus = inputs.values.includes('innovation') ? 2 : 0;
    
    let baseScore = categoryScores[inputs.category]?.[driver] || 5;
    
    // Apply bonuses based on values
    if (driver === 'VD1' && sustainabilityBonus) baseScore += sustainabilityBonus;
    if (driver === 'VD2' && innovationBonus) baseScore += innovationBonus;
    if (driver === 'VD3' && qualityBonus) baseScore += qualityBonus;
    if (driver === 'VD4' && communityBonus) baseScore += communityBonus;
    
    return Math.min(baseScore, 10);
  }
  
  private static scoreSpendingPower(inputs: UserInputs, power: SpendingPower): number {
    const priceRangeScores: Record<string, Record<SpendingPower, number>> = {
      'under-25': { 'SP1': 3, 'SP2': 7, 'SP3': 10 },
      '25-75': { 'SP1': 6, 'SP2': 9, 'SP3': 8 },
      '75-200': { 'SP1': 8, 'SP2': 8, 'SP3': 5 },
      '200-500': { 'SP1': 9, 'SP2': 6, 'SP3': 3 },
      'over-500': { 'SP1': 10, 'SP2': 4, 'SP3': 2 }
    };
    
    const budgetScores: Record<string, Record<SpendingPower, number>> = {
      'under-5k': { 'SP1': 5, 'SP2': 8, 'SP3': 10 },
      '5k-25k': { 'SP1': 7, 'SP2': 9, 'SP3': 7 },
      '25k-50k': { 'SP1': 8, 'SP2': 8, 'SP3': 5 },
      '50k-100k': { 'SP1': 9, 'SP2': 6, 'SP3': 3 },
      'over-100k': { 'SP1': 10, 'SP2': 5, 'SP3': 2 }
    };
    
    const priceScore = priceRangeScores[inputs.priceRange]?.[power] || 5;
    const budgetScore = budgetScores[inputs.launchBudget]?.[power] || 5;
    
    return Math.round((priceScore + budgetScore) / 2);
  }
  
  private static scoreCreatorAffinity(inputs: UserInputs, affinity: CreatorAffinity): number {
    const followingScores: Record<string, Record<CreatorAffinity, number>> = {
      'under-1k': { 'CA1': 6, 'CA2': 8, 'CA3': 9 },
      '1k-10k': { 'CA1': 7, 'CA2': 8, 'CA3': 8 },
      '10k-100k': { 'CA1': 8, 'CA2': 8, 'CA3': 7 },
      '100k-1m': { 'CA1': 9, 'CA2': 7, 'CA3': 6 },
      'over-1m': { 'CA1': 10, 'CA2': 6, 'CA3': 5 }
    };
    
    const categoryScores: Record<string, Record<CreatorAffinity, number>> = {
      'beauty-skincare': { 'CA1': 8, 'CA2': 9, 'CA3': 7 },
      'health-fitness': { 'CA1': 7, 'CA2': 8, 'CA3': 8 },
      'digital-products': { 'CA1': 9, 'CA2': 7, 'CA3': 8 },
      'fashion-accessories': { 'CA1': 9, 'CA2': 9, 'CA3': 7 },
      'food-beverage': { 'CA1': 7, 'CA2': 8, 'CA3': 8 },
      'professional-services': { 'CA1': 6, 'CA2': 7, 'CA3': 9 },
      'coaching-consulting': { 'CA1': 8, 'CA2': 9, 'CA3': 7 },
      'home-lifestyle': { 'CA1': 7, 'CA2': 8, 'CA3': 8 },
      'tech-apps': { 'CA1': 8, 'CA2': 7, 'CA3': 9 },
      'sustainable-products': { 'CA1': 9, 'CA2': 8, 'CA3': 7 }
    };
    
    const followingScore = followingScores[inputs.followingSize]?.[affinity] || 5;
    const categoryScore = categoryScores[inputs.category]?.[affinity] || 5;
    
    return Math.round((followingScore + categoryScore) / 2);
  }
  
  private static getMatchReasons(inputs: UserInputs, segment: Segment): string[] {
    const reasons: string[] = [];
    
    // Age alignment
    const targetAgeNum = this.getAgeRangeMiddle(inputs.targetAge);
    if (targetAgeNum >= segment.ageMin && targetAgeNum <= segment.ageMax) {
      reasons.push(`Perfect age alignment (${segment.ageMin}-${segment.ageMax})`);
    }
    
    // Income alignment  
    const priceRange = this.getPriceRangeValue(inputs.priceRange);
    if (priceRange.min <= segment.incomeMax / 1000 && priceRange.max >= segment.incomeMin / 1000) {
      reasons.push(`Income matches price expectations`);
    }
    
    // Platform alignment
    if (this.isPlatformAligned(inputs.primaryPlatform, segment.digitalBehavior)) {
      reasons.push(`Strong ${inputs.primaryPlatform} presence`);
    }
    
    // Values alignment
    if (this.areValuesAligned(inputs.values, segment.valuesDriver)) {
      reasons.push(`Shared values and motivations`);
    }
    
    // Category fit
    if (this.isCategoryFit(inputs.category, segment)) {
      reasons.push(`Excellent category fit for ${inputs.category}`);
    }

    // Competitor differentiation opportunity
    if (inputs.closestCompetitor) {
      const competitorAnalysis = this.analyzeCompetitorOverlap(inputs.closestCompetitor, segment);
      if (competitorAnalysis.differentiationScore > 7) {
        reasons.push(`Strong differentiation opportunity vs ${inputs.closestCompetitor}`);
      }
    }

    // Pet-related bonus
    if (inputs.category === 'pet-care' && this.isPetFriendlySegment(segment.code)) {
      reasons.push(`High affinity for pet-related products`);
    }

    // Seasonality alignment
    if (inputs.seasonality === 'seasonal' && this.isSeasonalFriendlySegment(segment.code)) {
      reasons.push(`Responds well to seasonal campaigns`);
    }

    // Premium feature insights
    if (inputs.contentFormats && inputs.contentFormats.length > 0) {
      const topFormat = this.getTopContentFormat(inputs.contentFormats, segment);
      if (topFormat) {
        reasons.push(`Highly engaged with ${topFormat} content`);
      }
    }

    if (inputs.purchaseMotivation && inputs.purchaseMotivation.length > 0) {
      const topMotivation = this.getTopPurchaseMotivation(inputs.purchaseMotivation, segment);
      if (topMotivation) {
        reasons.push(`Driven by ${topMotivation.replace('-', ' ')} purchasing decisions`);
      }
    }

    if (inputs.trendAdoption) {
      const adoptionFit = this.getTrendAdoptionFit(inputs.trendAdoption, segment);
      if (adoptionFit > 1.5) {
        reasons.push(`Perfect match for ${inputs.trendAdoption.replace('-', ' ')} brands`);
      }
    }

    if (inputs.socialBehavior && inputs.socialBehavior.length > 0) {
      const topBehavior = this.getTopSocialBehavior(inputs.socialBehavior, segment);
      if (topBehavior) {
        reasons.push(`Active ${topBehavior.replace('-', ' ')} behavior pattern`);
      }
    }
    
    return reasons;
  }
  
  private static calculateConfidence(score: number, reasonCount: number): number {
    const baseConfidence = score / 100;
    const reasonBonus = Math.min(reasonCount * 0.1, 0.3);
    return Math.min(baseConfidence + reasonBonus, 1);
  }
  
  private static getAgeRangeMiddle(ageRange: string): number {
    const ranges: Record<string, number> = {
      '18-25': 21.5,
      '25-35': 30,
      '35-45': 40,
      '45-55': 50,
      'over-55': 60
    };
    return ranges[ageRange] || 30;
  }
  
  private static getPriceRangeValue(priceRange: string): { min: number, max: number } {
    const ranges: Record<string, { min: number, max: number }> = {
      'under-25': { min: 0, max: 25 },
      '25-75': { min: 25, max: 75 },
      '75-200': { min: 75, max: 200 },
      '200-500': { min: 200, max: 500 },
      'over-500': { min: 500, max: 1000 }
    };
    return ranges[priceRange] || { min: 0, max: 100 };
  }
  
  private static isPlatformAligned(platform: string, behavior: DigitalBehavior): boolean {
    const strongAlignments: Record<string, DigitalBehavior[]> = {
      'instagram': ['DB2', 'DB1'],
      'tiktok': ['DB1', 'DB2'],
      'youtube': ['DB3', 'DB4'],
      'linkedin': ['DB3', 'DB4'],
      'twitter': ['DB1', 'DB2'],
      'substack': ['DB3', 'DB4'],
      'discord': ['DB4', 'DB2']
    };
    
    return strongAlignments[platform]?.includes(behavior) || false;
  }
  
  private static areValuesAligned(userValues: string[], driver: ValuesDriver): boolean {
    const valueMapping: Record<ValuesDriver, string[]> = {
      'VD1': ['sustainability', 'impact', 'environment', 'social'],
      'VD2': ['lifestyle', 'experience', 'luxury', 'innovation'],
      'VD3': ['quality', 'craftsmanship', 'durability', 'premium'],
      'VD4': ['community', 'belonging', 'connection', 'identity']
    };
    
    return userValues.some(value => 
      valueMapping[driver]?.some(mappedValue => 
        value.toLowerCase().includes(mappedValue.toLowerCase())
      )
    );
  }
  
  private static isCategoryFit(category: string, segment: Segment): boolean {
    // High-fit categories for each segment type
    const categoryFits: Record<string, string[]> = {
      'LE1': ['beauty-skincare', 'fashion-accessories', 'digital-products'],
      'LE2': ['sustainable-products', 'health-fitness', 'beauty-skincare'],
      'LE3': ['fashion-accessories', 'home-lifestyle', 'beauty-skincare'],
      'EB1': ['coaching-consulting', 'digital-products', 'food-beverage'],
      'EB2': ['sustainable-products', 'health-fitness', 'home-lifestyle'],
      'EB3': ['beauty-skincare', 'fashion-accessories', 'digital-products'],
      'QS1': ['tech-apps', 'professional-services', 'health-fitness'],
      'QS2': ['digital-products', 'tech-apps', 'coaching-consulting'],
      'QS3': ['digital-products', 'sustainable-products', 'health-fitness']
    };
    
    return categoryFits[segment.code]?.includes(category) || false;
  }
  
  private static scoreGenderAlignment(inputs: UserInputs, segment: Segment): number {
    // Gender-specific segments get higher scores for targeted genders
    const genderBonus: Record<string, Record<string, number>> = {
      'LE1': { 'female': 7, 'male': 8, 'unisex': 10, 'other': 9 }, // Creator Cult Leaders
      'LE2': { 'female': 8, 'male': 7, 'unisex': 10, 'other': 9 }, // Impact Investors  
      'LE3': { 'female': 9, 'male': 6, 'unisex': 8, 'other': 8 },  // Lifestyle Curators
      'EB1': { 'female': 8, 'male': 8, 'unisex': 10, 'other': 9 }, // Community Builders
      'EB2': { 'female': 8, 'male': 7, 'unisex': 9, 'other': 8 },  // Mindful Spenders
      'EB3': { 'female': 8, 'male': 7, 'unisex': 9, 'other': 8 },  // Trend Followers
      'QS1': { 'female': 7, 'male': 8, 'unisex': 10, 'other': 8 }, // Premium Pragmatists
      'QS2': { 'female': 7, 'male': 8, 'unisex': 10, 'other': 8 }, // Value Hunters
      'QS3': { 'female': 7, 'male': 7, 'unisex': 10, 'other': 8 }  // Research Raiders
    };
    
    return genderBonus[segment.code]?.[inputs.targetGender] || 8;
  }
  
  private static scorePremiumFactors(inputs: UserInputs, segment: Segment): number {
    let score = 5; // Base score when no premium features are available
    
    // Pet-related bonus for certain segments (legacy logic)
    if (inputs.category === 'pet-care') {
      const petFriendlySegments = ['EB1', 'EB2', 'LE2', 'QS1', 'QS3'];
      if (petFriendlySegments.includes(segment.code)) {
        score += 1;
      }
    }
    
    // Seasonality considerations (legacy logic)
    if (inputs.seasonality === 'seasonal') {
      const seasonalSegments = ['LE1', 'LE3', 'EB3'];
      if (seasonalSegments.includes(segment.code)) {
        score += 0.5;
      }
    } else if (inputs.seasonality === 'perennial') {
      const perennialSegments = ['LE2', 'EB1', 'EB2', 'QS1', 'QS2', 'QS3'];
      if (perennialSegments.includes(segment.code)) {
        score += 0.5;
      }
    }
    
    // Premium-only enhancements
    if (inputs.contentFormats && inputs.contentFormats.length > 0) {
      score += this.scoreContentFormatAlignment(inputs.contentFormats, segment);
    }
    
    if (inputs.purchaseMotivation && inputs.purchaseMotivation.length > 0) {
      score += this.scorePurchaseMotivationAlignment(inputs.purchaseMotivation, segment);
    }
    
    if (inputs.trendAdoption) {
      score += this.scoreTrendAdoptionAlignment(inputs.trendAdoption, segment);
    }
    
    if (inputs.brandPersonality && inputs.brandPersonality.length > 0) {
      score += this.scoreBrandPersonalityAlignment(inputs.brandPersonality, segment);
    }
    
    if (inputs.socialBehavior && inputs.socialBehavior.length > 0) {
      score += this.scoreSocialBehaviorAlignment(inputs.socialBehavior, segment);
    }
    
    return Math.min(score, 10);
  }
  
  private static scoreContentFormatAlignment(formats: string[], segment: Segment): number {
    // Map content formats to segment preferences
    const formatScores: Record<string, Record<string, number>> = {
      'LE1': { 'short-form-video': 2, 'image-posts': 1.5, 'live-streams': 1, 'user-generated-content': 2 },
      'LE2': { 'long-form-video': 1.5, 'written-content': 1, 'image-posts': 1.5, 'podcasts': 1 },
      'LE3': { 'short-form-video': 2, 'live-streams': 2, 'polls-quizzes': 1.5, 'user-generated-content': 1.5 },
      'EB1': { 'image-posts': 2, 'written-content': 1.5, 'user-generated-content': 1, 'long-form-video': 1 },
      'EB2': { 'live-streams': 1.5, 'podcasts': 2, 'written-content': 1.5, 'long-form-video': 1 },
      'EB3': { 'short-form-video': 2, 'polls-quizzes': 2, 'live-streams': 1.5, 'image-posts': 1 },
      'QS1': { 'written-content': 2, 'long-form-video': 1.5, 'image-posts': 1, 'podcasts': 1.5 },
      'QS2': { 'polls-quizzes': 2, 'image-posts': 1.5, 'written-content': 1, 'user-generated-content': 1 },
      'QS3': { 'user-generated-content': 2, 'image-posts': 1.5, 'short-form-video': 1, 'polls-quizzes': 1.5 }
    };
    
    const segmentScores = formatScores[segment.code] || {};
    let totalScore = 0;
    let count = 0;
    
    formats.forEach(format => {
      if (segmentScores[format]) {
        totalScore += segmentScores[format];
        count++;
      }
    });
    
    return count > 0 ? Math.min(totalScore / count, 2) : 0;
  }
  
  private static scorePurchaseMotivationAlignment(motivations: string[], segment: Segment): number {
    // Map purchase motivations to segment preferences
    const motivationScores: Record<string, Record<string, number>> = {
      'LE1': { 'trending-now': 2, 'status-symbol': 1.5, 'early-adopter': 1, 'community-belonging': 1.5 },
      'LE2': { 'solve-problem': 1.5, 'self-improvement': 2, 'value-conscious': 1, 'community-belonging': 1 },
      'LE3': { 'trending-now': 2, 'early-adopter': 2, 'status-symbol': 1.5, 'community-belonging': 1 },
      'EB1': { 'self-improvement': 2, 'solve-problem': 1.5, 'community-belonging': 1.5, 'value-conscious': 1 },
      'EB2': { 'solve-problem': 2, 'self-improvement': 1.5, 'value-conscious': 1.5, 'community-belonging': 2 },
      'EB3': { 'trending-now': 1.5, 'early-adopter': 1, 'community-belonging': 2, 'status-symbol': 1 },
      'QS1': { 'value-conscious': 2, 'solve-problem': 1.5, 'self-improvement': 1, 'community-belonging': 1 },
      'QS2': { 'value-conscious': 2, 'solve-problem': 1.5, 'community-belonging': 1, 'self-improvement': 1 },
      'QS3': { 'community-belonging': 2, 'value-conscious': 1.5, 'solve-problem': 1, 'self-improvement': 1 }
    };
    
    const segmentScores = motivationScores[segment.code] || {};
    let totalScore = 0;
    let count = 0;
    
    motivations.forEach(motivation => {
      if (segmentScores[motivation]) {
        totalScore += segmentScores[motivation];
        count++;
      }
    });
    
    return count > 0 ? Math.min(totalScore / count, 2) : 0;
  }
  
  private static scoreTrendAdoptionAlignment(adoption: string, segment: Segment): number {
    // Map trend adoption to segment preferences
    const adoptionScores: Record<string, Record<string, number>> = {
      'LE1': { 'trend-creator': 2, 'early-adopter': 2, 'early-majority': 1, 'late-majority': 0.5, 'trend-resistant': 0 },
      'LE2': { 'early-majority': 2, 'late-majority': 1.5, 'early-adopter': 1, 'trend-resistant': 1, 'trend-creator': 0.5 },
      'LE3': { 'trend-creator': 2, 'early-adopter': 2, 'early-majority': 1.5, 'late-majority': 0.5, 'trend-resistant': 0 },
      'EB1': { 'early-majority': 2, 'late-majority': 1.5, 'trend-resistant': 1, 'early-adopter': 1, 'trend-creator': 0.5 },
      'EB2': { 'late-majority': 2, 'trend-resistant': 1.5, 'early-majority': 1, 'early-adopter': 0.5, 'trend-creator': 0 },
      'EB3': { 'early-adopter': 1.5, 'early-majority': 2, 'trend-creator': 1, 'late-majority': 1, 'trend-resistant': 0.5 },
      'QS1': { 'trend-resistant': 2, 'late-majority': 1.5, 'early-majority': 1, 'early-adopter': 0.5, 'trend-creator': 0 },
      'QS2': { 'late-majority': 2, 'trend-resistant': 1.5, 'early-majority': 1, 'early-adopter': 0.5, 'trend-creator': 0 },
      'QS3': { 'early-majority': 1.5, 'late-majority': 2, 'trend-resistant': 1, 'early-adopter': 1, 'trend-creator': 0.5 }
    };
    
    return adoptionScores[segment.code]?.[adoption] || 0;
  }
  
  private static scoreBrandPersonalityAlignment(personalities: string[], segment: Segment): number {
    // Map brand personalities to segment preferences
    const personalityScores: Record<string, Record<string, number>> = {
      'LE1': { 'authentic-raw': 1.5, 'playful-fun': 2, 'inspirational-motivational': 1.5, 'edgy-controversial': 1 },
      'LE2': { 'authentic-raw': 2, 'educational-expert': 1.5, 'inspirational-motivational': 2, 'wholesome-family-friendly': 1 },
      'LE3': { 'playful-fun': 2, 'edgy-controversial': 1.5, 'authentic-raw': 1, 'polished-professional': 1 },
      'EB1': { 'educational-expert': 2, 'inspirational-motivational': 1.5, 'authentic-raw': 1.5, 'polished-professional': 1 },
      'EB2': { 'authentic-raw': 2, 'wholesome-family-friendly': 1.5, 'educational-expert': 1, 'inspirational-motivational': 1.5 },
      'EB3': { 'playful-fun': 1.5, 'authentic-raw': 1, 'inspirational-motivational': 1.5, 'edgy-controversial': 1 },
      'QS1': { 'educational-expert': 2, 'polished-professional': 1.5, 'authentic-raw': 1, 'wholesome-family-friendly': 1 },
      'QS2': { 'wholesome-family-friendly': 2, 'polished-professional': 1.5, 'educational-expert': 1, 'authentic-raw': 1 },
      'QS3': { 'authentic-raw': 1.5, 'wholesome-family-friendly': 2, 'educational-expert': 1, 'inspirational-motivational': 1 }
    };
    
    const segmentScores = personalityScores[segment.code] || {};
    let totalScore = 0;
    let count = 0;
    
    personalities.forEach(personality => {
      if (segmentScores[personality]) {
        totalScore += segmentScores[personality];
        count++;
      }
    });
    
    return count > 0 ? Math.min(totalScore / count, 1.5) : 0;
  }
  
  private static scoreSocialBehaviorAlignment(behaviors: string[], segment: Segment): number {
    // Map social behaviors to segment preferences
    const behaviorScores: Record<string, Record<string, number>> = {
      'LE1': { 'hashtag-follower': 2, 'discovery-browser': 1.5, 'influencer-follower': 2, 'algorithm-dependent': 1.5 },
      'LE2': { 'direct-searcher': 1.5, 'community-group-member': 2, 'influencer-follower': 1, 'discovery-browser': 1 },
      'LE3': { 'hashtag-follower': 2, 'algorithm-dependent': 2, 'discovery-browser': 1.5, 'influencer-follower': 1.5 },
      'EB1': { 'direct-searcher': 2, 'community-group-member': 1.5, 'discovery-browser': 1, 'influencer-follower': 1 },
      'EB2': { 'community-group-member': 2, 'direct-searcher': 1.5, 'influencer-follower': 1, 'hashtag-follower': 0.5 },
      'EB3': { 'discovery-browser': 1.5, 'community-group-member': 2, 'hashtag-follower': 1, 'algorithm-dependent': 1 },
      'QS1': { 'direct-searcher': 2, 'community-group-member': 1, 'discovery-browser': 1, 'influencer-follower': 0.5 },
      'QS2': { 'community-group-member': 1.5, 'direct-searcher': 2, 'discovery-browser': 1, 'hashtag-follower': 0.5 },
      'QS3': { 'community-group-member': 2, 'direct-searcher': 1.5, 'influencer-follower': 1, 'discovery-browser': 1 }
    };
    
    const segmentScores = behaviorScores[segment.code] || {};
    let totalScore = 0;
    let count = 0;
    
    behaviors.forEach(behavior => {
      if (segmentScores[behavior]) {
        totalScore += segmentScores[behavior];
        count++;
      }
    });
    
    return count > 0 ? Math.min(totalScore / count, 1.5) : 0;
  }

  private static getTopContentFormat(formats: string[], segment: Segment): string | null {
    const formatScores: Record<string, Record<string, number>> = {
      'LE1': { 'short-form-video': 2, 'image-posts': 1.5, 'live-streams': 1, 'user-generated-content': 2 },
      'LE2': { 'long-form-video': 1.5, 'written-content': 1, 'image-posts': 1.5, 'podcasts': 1 },
      'LE3': { 'short-form-video': 2, 'live-streams': 2, 'polls-quizzes': 1.5, 'user-generated-content': 1.5 },
      'EB1': { 'image-posts': 2, 'written-content': 1.5, 'user-generated-content': 1, 'long-form-video': 1 },
      'EB2': { 'live-streams': 1.5, 'podcasts': 2, 'written-content': 1.5, 'long-form-video': 1 },
      'EB3': { 'short-form-video': 2, 'polls-quizzes': 2, 'live-streams': 1.5, 'image-posts': 1 },
      'QS1': { 'written-content': 2, 'long-form-video': 1.5, 'image-posts': 1, 'podcasts': 1.5 },
      'QS2': { 'polls-quizzes': 2, 'image-posts': 1.5, 'written-content': 1, 'user-generated-content': 1 },
      'QS3': { 'user-generated-content': 2, 'image-posts': 1.5, 'short-form-video': 1, 'polls-quizzes': 1.5 }
    };

    const segmentScores = formatScores[segment.code] || {};
    let bestFormat = null;
    let bestScore = 0;

    formats.forEach(format => {
      const score = segmentScores[format] || 0;
      if (score > bestScore) {
        bestScore = score;
        bestFormat = format;
      }
    });

    return bestScore >= 1.5 ? bestFormat : null;
  }

  private static getTopPurchaseMotivation(motivations: string[], segment: Segment): string | null {
    const motivationScores: Record<string, Record<string, number>> = {
      'LE1': { 'trending-now': 2, 'status-symbol': 1.5, 'early-adopter': 1, 'community-belonging': 1.5 },
      'LE2': { 'solve-problem': 1.5, 'self-improvement': 2, 'value-conscious': 1, 'community-belonging': 1 },
      'LE3': { 'trending-now': 2, 'early-adopter': 2, 'status-symbol': 1.5, 'community-belonging': 1 },
      'EB1': { 'self-improvement': 2, 'solve-problem': 1.5, 'community-belonging': 1.5, 'value-conscious': 1 },
      'EB2': { 'solve-problem': 2, 'self-improvement': 1.5, 'value-conscious': 1.5, 'community-belonging': 2 },
      'EB3': { 'trending-now': 1.5, 'early-adopter': 1, 'community-belonging': 2, 'status-symbol': 1 },
      'QS1': { 'value-conscious': 2, 'solve-problem': 1.5, 'self-improvement': 1, 'community-belonging': 1 },
      'QS2': { 'value-conscious': 2, 'solve-problem': 1.5, 'community-belonging': 1, 'self-improvement': 1 },
      'QS3': { 'community-belonging': 2, 'value-conscious': 1.5, 'solve-problem': 1, 'self-improvement': 1 }
    };

    const segmentScores = motivationScores[segment.code] || {};
    let bestMotivation = null;
    let bestScore = 0;

    motivations.forEach(motivation => {
      const score = segmentScores[motivation] || 0;
      if (score > bestScore) {
        bestScore = score;
        bestMotivation = motivation;
      }
    });

    return bestScore >= 1.5 ? bestMotivation : null;
  }

  private static getTrendAdoptionFit(adoption: string, segment: Segment): number {
    const adoptionScores: Record<string, Record<string, number>> = {
      'LE1': { 'trend-creator': 2, 'early-adopter': 2, 'early-majority': 1, 'late-majority': 0.5, 'trend-resistant': 0 },
      'LE2': { 'early-majority': 2, 'late-majority': 1.5, 'early-adopter': 1, 'trend-resistant': 1, 'trend-creator': 0.5 },
      'LE3': { 'trend-creator': 2, 'early-adopter': 2, 'early-majority': 1.5, 'late-majority': 0.5, 'trend-resistant': 0 },
      'EB1': { 'early-majority': 2, 'late-majority': 1.5, 'trend-resistant': 1, 'early-adopter': 1, 'trend-creator': 0.5 },
      'EB2': { 'late-majority': 2, 'trend-resistant': 1.5, 'early-majority': 1, 'early-adopter': 0.5, 'trend-creator': 0 },
      'EB3': { 'early-adopter': 1.5, 'early-majority': 2, 'trend-creator': 1, 'late-majority': 1, 'trend-resistant': 0.5 },
      'QS1': { 'trend-resistant': 2, 'late-majority': 1.5, 'early-majority': 1, 'early-adopter': 0.5, 'trend-creator': 0 },
      'QS2': { 'late-majority': 2, 'trend-resistant': 1.5, 'early-majority': 1, 'early-adopter': 0.5, 'trend-creator': 0 },
      'QS3': { 'early-majority': 1.5, 'late-majority': 2, 'trend-resistant': 1, 'early-adopter': 1, 'trend-creator': 0.5 }
    };

    return adoptionScores[segment.code]?.[adoption] || 0;
  }

  private static getTopSocialBehavior(behaviors: string[], segment: Segment): string | null {
    const behaviorScores: Record<string, Record<string, number>> = {
      'LE1': { 'hashtag-follower': 2, 'discovery-browser': 1.5, 'influencer-follower': 2, 'algorithm-dependent': 1.5 },
      'LE2': { 'direct-searcher': 1.5, 'community-group-member': 2, 'influencer-follower': 1, 'discovery-browser': 1 },
      'LE3': { 'hashtag-follower': 2, 'algorithm-dependent': 2, 'discovery-browser': 1.5, 'influencer-follower': 1.5 },
      'EB1': { 'direct-searcher': 2, 'community-group-member': 1.5, 'discovery-browser': 1, 'influencer-follower': 1 },
      'EB2': { 'community-group-member': 2, 'direct-searcher': 1.5, 'influencer-follower': 1, 'hashtag-follower': 0.5 },
      'EB3': { 'discovery-browser': 1.5, 'community-group-member': 2, 'hashtag-follower': 1, 'algorithm-dependent': 1 },
      'QS1': { 'direct-searcher': 2, 'community-group-member': 1, 'discovery-browser': 1, 'influencer-follower': 0.5 },
      'QS2': { 'community-group-member': 1.5, 'direct-searcher': 2, 'discovery-browser': 1, 'hashtag-follower': 0.5 },
      'QS3': { 'community-group-member': 2, 'direct-searcher': 1.5, 'influencer-follower': 1, 'discovery-browser': 1 }
    };

    const segmentScores = behaviorScores[segment.code] || {};
    let bestBehavior = null;
    let bestScore = 0;

    behaviors.forEach(behavior => {
      const score = segmentScores[behavior] || 0;
      if (score > bestScore) {
        bestScore = score;
        bestBehavior = behavior;
      }
    });

    return bestScore >= 1.5 ? bestBehavior : null;
  }

  private static analyzeCompetitorOverlap(competitor: string, segment: Segment): { differentiationScore: number; overlap: number } {
    // Simple competitor analysis - in a real system this would use actual competitor data
    const competitorSegmentMapping: Record<string, string[]> = {
      'glossier': ['LE1', 'LE3', 'EB3'],
      'fenty beauty': ['LE1', 'LE2', 'EB1'],
      'the ordinary': ['QS1', 'QS2', 'QS3'],
      'peloton': ['LE2', 'EB1', 'EB2'],
      'notion': ['QS1', 'QS2', 'QS3'],
      'everlane': ['LE2', 'EB1', 'EB2'],
      'blue apron': ['EB1', 'EB2', 'QS1']
    };

    const competitorKey = competitor.toLowerCase();
    const competitorSegments = competitorSegmentMapping[competitorKey] || [];
    
    const hasOverlap = competitorSegments.includes(segment.code);
    const differentiationScore = hasOverlap ? 6 : 9; // Lower score if there's overlap
    const overlap = hasOverlap ? 70 : 30; // Percentage overlap

    return { differentiationScore, overlap };
  }

  private static isPetFriendlySegment(segmentCode: string): boolean {
    // Segments that typically show high affinity for pet-related products
    const petFriendlySegments = ['EB1', 'EB2', 'LE2', 'QS1', 'QS3'];
    return petFriendlySegments.includes(segmentCode);
  }

  private static isSeasonalFriendlySegment(segmentCode: string): boolean {
    // Segments that respond well to seasonal campaigns
    const seasonalSegments = ['LE1', 'LE3', 'EB3'];
    return seasonalSegments.includes(segmentCode);
  }
}