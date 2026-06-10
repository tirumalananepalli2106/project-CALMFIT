import { Service, Feature, PortfolioItem, Testimonial, TeamMember, BlogPost, StatItem } from './types';

export const HERO_CONTENT = {
  headline: "Transform Your Health. Elevate Your Life.",
  subheadline: "Calm Fit provides personalized fitness coaching, wellness solutions, and lifestyle transformation programs designed to help you achieve sustainable results.",
  heroImage: "/src/assets/images/calm_fit_hero_1781080348516.png",
};

export const ABOUT_CONTENT = {
  introduction: "At Calm Fit, we believe fitness is more than exercise—it's a lifestyle. Our expert coaches and wellness specialists help individuals and organizations build healthier, stronger, and more balanced lives.",
  mission: "To empower individuals and communities to reach sustainable high-performance health through highly integrated, personalized coaching that respects personal rhythm while demanding real change.",
  vision: "To set the global standard in hybrid wellness coaching, fusing elite physical conditioning with scientific nutritional and mental habit alignment.",
  coreValues: [
    {
      title: "Holistic Integrity",
      description: "We serve the whole human, integrating intense fitness training with mental mindfulness and sound metabolic nutrition."
    },
    {
      title: "Empowered Autonomy",
      description: "We do not believe in quick fixes. Our goal is to hand you the permanent tools, coaching, and keys to control your health forever."
    },
    {
      title: "Science-Backed Innovation",
      description: "Our methodologies evolve alongside peer-reviewed metabolic literature and modern kinetic science."
    },
    {
      title: "Unyielding Inclusivity",
      description: "Health is a human right. We adapt high-performance methods for absolute beginners and lifetime athletes alike."
    }
  ]
};

export const STATISTICS: StatItem[] = [
  {
    id: "stat-1",
    value: 1000,
    suffix: "+",
    label: "Active Clients",
    description: "Successfully guiding individuals globally along customized fitness pathways."
  },
  {
    id: "stat-2",
    value: 500,
    suffix: "+",
    label: "Transformations",
    description: "Docmented life-changing shifts in metabolic markers, weight, and fitness levels."
  },
  {
    id: "stat-3",
    value: 50,
    suffix: "+",
    label: "Corporate Partners",
    description: "Empowering leading organizations with high-morale desk wellness initiatives."
  },
  {
    id: "stat-4",
    value: 98,
    suffix: "%",
    label: "Satisfaction Rate",
    description: "Incredible positive rating from our ongoing feedback loop."
  }
];

export const SERVICES: Service[] = [
  {
    id: "service-pt",
    title: "Personal Training",
    icon: "Dumbbell",
    description: "One-on-one personal coaching with elite movement specialists. Customized workout plans, form correction, and relentless support.",
    detailedDescription: "Our signature high-touch fitness experience. Work physically side-by-side or synchronously online with certified trainers who map every set, rep, and recovery phase to your exact musculoskeletal profile and metabolic goals.",
    benefits: [
      "Custom structured skeletal alignment diagnostics",
      "Dynamic progression protocols that prevent fatiguing plateaus",
      "Comprehensive digital visual log of movement improvements",
      "Intimate form correction ensuring absolute joint safety"
    ],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "service-nut",
    title: "Nutrition Guidance",
    icon: "Utensils",
    description: "Sustained lifestyle nutrition minus the extreme restriction. Direct meal mapping, real-world macros, and hormone calibration.",
    detailedDescription: "Leave the crash diets behind. Our certified nutrition specialists craft highly bio-individual lifestyle nutrition roadmaps that support sustained energy, fat oxidation, muscle synthesis, and a healthy gut.",
    benefits: [
      "Macronutrient targeting balanced for work-family demands",
      "Weekly pantry makeover checklists & easy grocery hacks",
      "Bio-feedback metrics mapping energy levels to food intake",
      "Flexible eating frameworks with zero caloric isolation"
    ],
    image: "/src/assets/images/nutrition_diet_1781080379113.png"
  },
  {
    id: "service-corp",
    title: "Corporate Wellness",
    icon: "Briefcase",
    description: "Strategic workplace morale initiatives. Eradicate desk fatigue, prevent burnouts, and foster happy, energetic high-retention teams.",
    detailedDescription: "High-performance organizations run on healthy bodies. We build scalable wellness architectures for businesses, offering immersive workshop retreats, team-wide fitness tournaments, and direct mental decompression clinics.",
    benefits: [
      "Live desk-stretch ergonomic workshops to prevent strain",
      "Tailored group physical challenges with rewards systems",
      "Monthly executive physical check-in assessments",
      "Mindfulness seminars that decrease corporate absenteeism"
    ],
    image: "/src/assets/images/corporate_wellness_1781080363120.png"
  },
  {
    id: "service-online",
    title: "Online Coaching",
    icon: "Smartphone",
    description: "Elite training from anywhere. Full digital workout blueprints, bi-weekly video strategy calls, and immediate messenger support.",
    detailedDescription: "Premium remote accountability. Access our highly polished digital portal where trainers curate your week, review video-recorded sets for form feedback, and dynamically reprogram workouts as you travel.",
    benefits: [
      "Full app integration with physical smart devices",
      "Regular video analysis on squat, deadlift, or press patterns",
      "Highly adaptable hotel/on-the-go bodyweight travel options",
      "Constant direct message channels with your chosen coach"
    ],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "service-group",
    title: "Group Fitness & Yoga",
    icon: "Sparkles",
    description: "Energetic communal environments designed to challenge your limits or cultivate profound, restorative mental peace.",
    detailedDescription: "Feel the motivating electric current of group energy. Choose high-intensity joint-friendly sweat routines, or drop into our restorative, slow-tempo vinyasa sessions to release cumulative cognitive stress.",
    benefits: [
      "Community-driven morale with collaborative team drills",
      "Tailored modifications for all fitness levels in class",
      "Immersive, state-of-the-art sensory lighting and acoustic flows",
      "Restorative breathwork that accelerates stress-recovery"
    ],
    image: "/src/assets/images/yoga_class_1781080398233.png"
  }
];

export const FEATURES: Feature[] = [
  {
    id: "feat-1",
    title: "Certified Elite Trainers",
    description: "All coaches possess advanced degrees in kinesiology or internationally accredited training credentials.",
    icon: "Award"
  },
  {
    id: "feat-2",
    title: "Hyper-Personalization",
    description: "Zero copy-paste plans. Your biology, personal stressors, and work constraints shape 100% of the program.",
    icon: "Sliders"
  },
  {
    id: "feat-3",
    title: "Holistic Health Approach",
    description: "We actively intertwine sleep optimization, deep breathing, and habit cues alongside weights and cardio.",
    icon: "HeartPulse"
  },
  {
    id: "feat-4",
    title: "Adaptive Scheduling",
    description: "Seamlessly reschedule personal slots or switch to online coaching protocols when your busy calendar demands it.",
    icon: "Clock"
  },
  {
    id: "feat-5",
    title: "Scientifically Proven Results",
    description: "We trace markers you care about: lean density, visceral fat index, posture alignment, and resting heart rate.",
    icon: "LineChart"
  },
  {
    id: "feat-6",
    title: "Endless Ongoing Support",
    description: "A comprehensive digital ecosystem, emergency wellness checkups, and client community meetups.",
    icon: "Heart"
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "port-1",
    title: "Sustained Executive Energy & Vitality",
    category: "coaching",
    clientName: "David Vance",
    timeframe: "6 Months",
    metric: "18% Visceral Fat reduction & Doubled V02 Max",
    beforeState: "Severe mid-afternoon burnout, recurring lower back posture strain, sleeping 5 hours messy.",
    afterState: "Exceptional alertness, structured 7-hour deep sleep rhythm, pain-free squatting 225 lbs.",
    story: "David, a high-octane startup executive, was sacrificing his health to manage an intense workload. We crafted an adaptive, strength-building program focusing on spine protection and calculated pre-meeting nutrition triggers. In just half a year, David regained high sleep efficiency and erased lumbar pain completely.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "port-2",
    title: "From Post-Injury Stiff to Marathons",
    category: "mindfulness",
    clientName: "Sarah Jenkins",
    timeframe: "9 Months",
    metric: "First full marathon finisher & Pain-free joints",
    beforeState: "Persistent post-knee surgery knee tension, fear of lifting heavier, and chronic breathing shallow patterns.",
    afterState: "Competed in the Boston Marathon with zero knee clicking, superb mental endurance, relaxed core.",
    story: "Sarah felt isolated and fearful of re-injury. We introduced gradual loaded eccentric lifts to strengthen her knee tendons, coupled with slow mindfulness breathing routines to address hyper-alert nervous responses. Within months, her physical limits shattered, paving the entry to endurance racing.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "port-3",
    title: "Corporate High-Performance Health",
    category: "corporate",
    clientName: "TechNova Solutions",
    timeframe: "12 Months",
    metric: "45% decrease in workplace stress ratings",
    beforeState: "Stiff employees, repetitive workplace strain injuries, declining team engagement metrics.",
    afterState: "Dynamic, active posture awareness, vibrant corporate step tournaments, weekly team decompression.",
    story: "TechNova brought Calm Fit to build corporate fitness routines. We installed customized micro-stretch screens, led energetic virtual challenges, and conducted healthy executive dinners. The outcome was highly measurable—boosted physical office attendance and an absolute plummet in team medical leave requests.",
    image: "/src/assets/images/corporate_wellness_1781080363120.png"
  },
  {
    id: "port-4",
    title: "Functional Nutrition & Thyroid Balance",
    category: "nutrition",
    clientName: "Elena Rostova",
    timeframe: "4 Months",
    metric: "Recovered hormonal balance and constant 8h sleep",
    beforeState: "Severe caloric deficit experiments, feeling cold, brain fog, and muscle sluggishness.",
    afterState: "Stellar thyroid markers, energetic fat adaptation, eating 2100 calories daily with high vigor.",
    story: "Elena had trained hard but severely under-fueled herself, resulting in stalled weight progress and intense brain fog. Calm Fit revamped her daily diet blueprint, swapping toxic restriction with calculated whole foods and heavy strength workouts. Her metabolic vigor surged.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    rating: 5,
    text: "Calm Fit completely changed my approach to fitness. The trainers taught me to balance weights, correct nutrition and mindful recovery. The highly custom, sustainable results have completely exceeded my expectations.",
    userName: "Marcus Vance",
    userRole: "VP of Product",
    companyName: "Atlas Tech",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "test-2",
    rating: 5,
    text: "The coaches at Calm Fit are exceptionally knowledgeable, deeply supportive, and genuinely care about every milligram of client success. I never felt judged, only empowered to push my body correctly.",
    userName: "Elena Rose",
    userRole: "Senior UX Architect",
    companyName: "Figma Studio",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "test-3",
    rating: 5,
    text: "Our company's wellness initiative with Calm Fit significantly improved employee high-morale metrics. They brought outstanding desk workouts and stress lectures that transformed our corporate culture.",
    userName: "Robert Sterling",
    userRole: "Chief Human Resources Officer",
    companyName: "Nexis Global",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: "test-4",
    rating: 5,
    text: "As an older adult, I was nervous about entering group training. Calm Fit customized every single pose and lift to respect my back while slowly increasing my power. I feel 15 years younger today.",
    userName: "Martha Bradley",
    userRole: "Retired Educator",
    avatar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=150&auto=format&fit=crop"
  }
];

export const TEAM: TeamMember[] = [
  {
    id: "team-1",
    name: "Dr. Alexander Chase",
    position: "Founder & Elite Fitness Coach",
    bio: "PhD in Kinesiology, former NCAA strength prep coach. Believes athletic posture and stress management are the foundations of absolute human energy.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  },
  {
    id: "team-2",
    name: "Celine Thorne",
    position: "Chief Clinical Nutrition Specialist",
    bio: "Registered Dietitian (RD) with 10+ years specializing in metabolic regulation, hormone alignment, and culinary lifestyle integration.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop",
    socials: {
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    id: "team-3",
    name: "Marcus Vance",
    position: "Mindfulness and Yoga Consultant",
    bio: "Certified Vinyasa guide trained in Rishikesh. Combines intense conditioning with heavy neuromuscular mental decompression strategies.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=300&auto=format&fit=crop",
    socials: {
      twitter: "#",
      instagram: "#"
    }
  },
  {
    id: "team-4",
    name: "Jessica Chen",
    position: "Corporate Wellness Architect",
    bio: "Former HR Strategist turned wellness advocate,Jessica builds bespoke cultural platforms and health events for Fortune 500 organizations.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    socials: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "Beat the Desk Fatigue: 5 Micro-Movements for Focus",
    excerpt: "Sitting for consecutive hours actively locks down hip flexors and causes executive brain fog. Try these rapid movements.",
    content: "We spend an average of 9.3 hours sitting daily. This triggers tight posterior muscle chains and slows arterial blood supply to the visual cortex. In this detailed guide, we map out 5 specific movements like the couch stretch, desk downward dog, and wall slide rotations that you can carry out in under 3 minutes.",
    date: "June 08, 2026",
    category: "Fitness Tips",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop",
    author: {
      name: "Alexander Chase",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=50&auto=format&fit=crop"
    },
    readTime: "4 min read"
  },
  {
    id: "blog-2",
    title: "Understanding Insulin Resistance & Satiety Cues",
    excerpt: "Why constant restriction induces energy crashes and binge circles. Read about functional feeding patterns.",
    content: "Caloric reduction alone is a deeply flawed weight philosophy. The key is biochemical hormone stabilization. By packing your first meal of the day with critical protein, active dietary fibers, and whole fats, you prevent huge endocrine rollercoasters. Learn how to craft healthy lunches that lead to outstanding alertness.",
    date: "June 05, 2026",
    category: "Healthy Nutrition",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=600&auto=format&fit=crop",
    author: {
      name: "Celine Thorne",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=50&auto=format&fit=crop"
    },
    readTime: "6 min read"
  },
  {
    id: "blog-3",
    title: "Stress and Kinetic Recovery: The Vagus Nerve Connection",
    excerpt: "How deep diaphragmatic breathing triggers recovery modes and accelerates post-workout repair.",
    content: "If your nervous system is trapped in chronic fight-or-flight, your muscles cannot properly synthenthize protein or release persistent lactic blockages. Discover how to actively stimulate the vagal nerve with targeted 4-7-8 breathing cycles right after heavy weight sessions to trigger deep restorative muscle growth.",
    date: "May 28, 2026",
    category: "Mental Wellness",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop",
    author: {
      name: "Marcus Vance",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=50&auto=format&fit=crop"
    },
    readTime: "5 min read"
  }
];
