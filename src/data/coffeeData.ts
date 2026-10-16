export interface CoffeeItem {
  id: string;
  name: string;
  number: string;
  mood: string;
  category: 'Comfort' | 'Refresh' | 'Focus' | 'Indulgence' | 'Adventure';
  flavourProfile: string;
  flavourNotes: string[];
  description: string;
  emotionalCopy: string;
  image: string;
  temp: 'Warm' | 'Iced' | 'Chilled' | 'Dessert';
  pairing: string;
  origin: string;
}

export interface MoodOption {
  id: string;
  number: string;
  name: string;
  coffeeId: string;
  colorName: string;
  colorHex: string;
  colorBg: string;
  colorBorder: string;
  colorText: string;
  feeling: string;
  tagline: string;
}

export interface MoodLetterMessage {
  id: string;
  mood: 'Slow' | 'Overwhelmed' | 'Hopeful' | 'Confident' | 'Nostalgic' | 'In Need of Comfort';
  letterNo: string;
  salutation: string;
  body: string;
  coffeeName: string;
  coffeeImage: string;
  reminder: string;
}

export const MOOD_OPTIONS: MoodOption[] = [
  {
    id: 'slow-morning',
    number: '01',
    name: 'Slow Morning',
    coffeeId: '01',
    colorName: 'Sage Quiet',
    colorHex: '#BFCAB8',
    colorBg: 'bg-[#BFCAB8]/20',
    colorBorder: 'border-[#BFCAB8]',
    colorText: 'text-[#3E4E3A]',
    feeling: 'Gentle, peaceful, and unhurried.',
    tagline: 'Take the morning on your own terms.'
  },
  {
    id: 'need-a-reset',
    number: '02',
    name: 'Need a Reset',
    coffeeId: '02',
    colorName: 'Blue Hour',
    colorHex: '#B9CFD8',
    colorBg: 'bg-[#B9CFD8]/20',
    colorBorder: 'border-[#B9CFD8]',
    colorText: 'text-[#2D4552]',
    feeling: 'Refreshing, light, and ready for a fresh start.',
    tagline: 'A cool breath of air to begin again.'
  },
  {
    id: 'main-character',
    number: '03',
    name: 'Main Character',
    coffeeId: '03',
    colorName: 'Rose Clay',
    colorHex: '#D5A7A1',
    colorBg: 'bg-[#D5A7A1]/20',
    colorBorder: 'border-[#D5A7A1]',
    colorText: 'text-[#613631]',
    feeling: 'Expressive, confident, and indulgent.',
    tagline: 'Your story, unapologetically rich.'
  },
  {
    id: 'deep-focus',
    number: '04',
    name: 'Deep Focus',
    coffeeId: '04',
    colorName: 'Espresso Ink',
    colorHex: '#2D201C',
    colorBg: 'bg-[#2D201C]/15',
    colorBorder: 'border-[#2D201C]/40',
    colorText: 'text-[#2D201C]',
    feeling: 'Grounded, clear-headed, and focused.',
    tagline: 'Quiet mind, deliberate flow.'
  },
  {
    id: 'soft-comfort',
    number: '05',
    name: 'Soft Comfort',
    coffeeId: '05',
    colorName: 'Oat Cream',
    colorHex: '#EADCC9',
    colorBg: 'bg-[#EADCC9]/40',
    colorBorder: 'border-[#D8C4AA]',
    colorText: 'text-[#5A4532]',
    feeling: 'Cosy, familiar, and comforting.',
    tagline: 'The feeling of coming home.'
  },
  {
    id: 'feeling-bold',
    number: '06',
    name: 'Feeling Bold',
    coffeeId: '06',
    colorName: 'Burnt Sienna',
    colorHex: '#C66C42',
    colorBg: 'bg-[#C66C42]/20',
    colorBorder: 'border-[#C66C42]',
    colorText: 'text-[#873A16]',
    feeling: 'Adventurous, energetic, and unexpected.',
    tagline: 'Spark the curiosity within.'
  }
];

export const COFFEE_COLLECTION: CoffeeItem[] = [
  {
    id: '01',
    name: 'Honey Oat Latte',
    number: '01',
    mood: 'Slow Morning',
    category: 'Comfort',
    flavourProfile: 'Honey, oat milk, and smooth espresso.',
    flavourNotes: ['Soft wildflower honey', 'Creamy steamed oat', 'Smooth balanced espresso'],
    description: 'Gentle floral sweetness carried through velvety steamed oat milk and double-origin espresso.',
    emotionalCopy: 'Nothing urgent. Nowhere to rush. Just a little honey, a little oat milk, and a moment that’s entirely yours.',
    image: '/images/signature_honey_oat_1792162190261.jpg',
    temp: 'Warm',
    pairing: 'Almond cardamom financier',
    origin: 'Huila, Colombia'
  },
  {
    id: '02',
    name: 'Iced Vanilla Latte',
    number: '02',
    mood: 'Need a Reset',
    category: 'Refresh',
    flavourProfile: 'Vanilla, chilled milk, and espresso.',
    flavourNotes: ['Madagascar vanilla bean', 'Cold crisp milk', 'Double-shot espresso'],
    description: 'Chilled organic whole milk infused with cured vanilla bean and balanced over cracked ice.',
    emotionalCopy: 'Clear the mental clutter. Let the ice clink against the glass and feel the rhythm of a fresh breath.',
    image: '/images/iced_vanilla_latte_1792162213669.jpg',
    temp: 'Iced',
    pairing: 'Lemon thyme shortbread',
    origin: 'Antioquia, Colombia'
  },
  {
    id: '03',
    name: 'Rose Mocha',
    number: '03',
    mood: 'Main Character',
    category: 'Indulgence',
    flavourProfile: 'Chocolate, subtle rose, and espresso.',
    flavourNotes: ['Artisanal dark cacao', 'Organic rose water', 'Silky espresso crema'],
    description: 'Artisanal dark chocolate infused with gentle organic rose water and cocoa dusted crema.',
    emotionalCopy: 'Walk into the room like you wrote the soundtrack. Decadent dark cocoa with an unforgettable floral bloom.',
    image: '/images/rose_mocha_1792162214881.jpg',
    temp: 'Warm',
    pairing: 'Raspberry dark chocolate tart',
    origin: 'Yirgacheffe, Ethiopia'
  },
  {
    id: '04',
    name: 'Flat White',
    number: '04',
    mood: 'Deep Focus',
    category: 'Focus',
    flavourProfile: 'Rich espresso and silky steamed milk.',
    flavourNotes: ['Dense double ristretto', 'Tightly textured microfoam', 'Malted chocolate undertone'],
    description: 'A double ristretto foundation enveloped in glossy, tightly micro-foamed milk for unbroken clarity.',
    emotionalCopy: 'No distractions. Just pure espresso craftsmanship and pristine velvety milk to anchor your deepest thoughts.',
    image: '/images/flat_white_coffee_1792162215379.jpg',
    temp: 'Warm',
    pairing: 'Toasted sourdough with salted butter',
    origin: 'Tarrazú, Costa Rica'
  },
  {
    id: '05',
    name: 'Cinnamon Cappuccino',
    number: '05',
    mood: 'Soft Comfort',
    category: 'Comfort',
    flavourProfile: 'Espresso, milk foam, and cinnamon.',
    flavourNotes: ['Fragrant Ceylon cinnamon', 'Cloud-light aerated foam', 'Caramel espresso notes'],
    description: 'Thick velvety foam dusted with freshly milled Ceylon cinnamon over a warm espresso embrace.',
    emotionalCopy: 'Like wrapping yourself in a hand-knit woolen blanket while afternoon rain drums gently on the pane.',
    image: '/images/cinnamon_cappuccino_1792162215709.jpg',
    temp: 'Warm',
    pairing: 'Warm cinnamon hazelnut brioche',
    origin: 'Minas Gerais, Brazil'
  },
  {
    id: '06',
    name: 'Orange Cinnamon Cold Brew',
    number: '06',
    mood: 'Feeling Bold',
    category: 'Adventure',
    flavourProfile: 'Cold brew, orange, and a hint of cinnamon.',
    flavourNotes: ['20-hour steeped cold brew', 'Candied orange peel', 'Cracked cassia bark'],
    description: 'Twenty-hour slow drip extraction married to sun-ripened orange peel and cracked cassia bark.',
    emotionalCopy: 'For days when routine feels too small. Bright, punchy citrus cutting through rich, shadowy dark brew.',
    image: '/images/signature_orange_brew_1792162189671.jpg',
    temp: 'Chilled',
    pairing: 'Candied ginger dark chocolate disc',
    origin: 'Sidamo, Ethiopia'
  },
  {
    id: '07',
    name: 'Golden Hour Macchiato',
    number: '07',
    mood: 'Golden and carefree',
    category: 'Indulgence',
    flavourProfile: 'Espresso, milk, and caramel.',
    flavourNotes: ['Burnt brown butter caramel', 'Dollop of warm foam', 'Intense espresso core'],
    description: 'A caramel-drizzled macchiato catching late afternoon amber beams across glass layers.',
    emotionalCopy: 'That magical twenty minutes when the light softens everything it touches, including your thoughts.',
    image: '/images/golden_hour_macchiato_1792162235434.jpg',
    temp: 'Warm',
    pairing: 'Salted butter sablé',
    origin: 'Guatemala Antigua'
  },
  {
    id: '08',
    name: 'Velvet Cloud Latte',
    number: '08',
    mood: 'Soft comfort',
    category: 'Comfort',
    flavourProfile: 'Creamy milk, espresso, and mellow sweetness.',
    flavourNotes: ['Aerated cream foam', 'Mellow honey finish', 'Gentle washed arabica'],
    description: 'A silky latte in a stoneware cup crowned with pillow-soft, featherweight froth.',
    emotionalCopy: 'Softness doesn’t mean weak. It means giving yourself room to rest before continuing forward.',
    image: '/images/velvet_cloud_latte_1792162235609.jpg',
    temp: 'Warm',
    pairing: 'Vanilla bean madeleine',
    origin: 'Chiapas, Mexico'
  },
  {
    id: '09',
    name: 'Lavender Daydream',
    number: '09',
    mood: 'Dreamy and peaceful',
    category: 'Comfort',
    flavourProfile: 'Lavender-inspired floral notes and coffee.',
    flavourNotes: ['Provence culinary lavender', 'Blonde roast espresso', 'Smooth oat emulsion'],
    description: 'Gentle floral botanical notes infused into smooth espresso with whisper-soft pastel tones.',
    emotionalCopy: 'A breath between sentences. A reminder that peace can be poured into a single cup.',
    image: '/images/lavender_daydream_1792162235888.jpg',
    temp: 'Warm',
    pairing: 'Earl grey tea cake',
    origin: 'Nyeri, Kenya'
  },
  {
    id: '10',
    name: 'Midnight Mocha',
    number: '10',
    mood: 'Quiet nights',
    category: 'Indulgence',
    flavourProfile: 'Chocolate, espresso, and creamy milk.',
    flavourNotes: ['74% single-origin cacao', 'Fudge cocoa crema', 'Dark roast espresso'],
    description: 'Deep espresso tones, dramatic shadows, and melted dark chocolate for introspective hours.',
    emotionalCopy: 'When the city sleeps and your mind is at its most lucid, creative, and contemplative.',
    image: '/images/midnight_mocha_1792162236422.jpg',
    temp: 'Warm',
    pairing: 'Dark chocolate sea salt brownie',
    origin: 'Sumatra Mandheling'
  },
  {
    id: '11',
    name: 'Hazelnut Hush',
    number: '11',
    mood: 'Unwind',
    category: 'Comfort',
    flavourProfile: 'Toasted hazelnut, espresso, and silky milk.',
    flavourNotes: ['Toasted hazelnut butter', 'Warm praline steam', 'Subtle dark toffee'],
    description: 'A soothing hazelnut latte with roasted nut notes and comforting earthen warmth.',
    emotionalCopy: 'Put down the phone. Lean back into your chair. Let the day gently close its doors.',
    image: '/images/hazelnut_hush_1792162239009.jpg',
    temp: 'Warm',
    pairing: 'Roasted hazelnut biscotti',
    origin: 'Sul de Minas, Brazil'
  },
  {
    id: '12',
    name: 'Citrus Rush',
    number: '12',
    mood: 'Ready for something new',
    category: 'Adventure',
    flavourProfile: 'Espresso, tonic, and citrus.',
    flavourNotes: ['Sparkling botanical tonic', 'Fresh lemon twist', 'Citric acidity espresso'],
    description: 'A sparkling espresso tonic with effervescent bubbles, citrus wheel, and bright daylight.',
    emotionalCopy: 'A cold, fizzy jolt of electric curiosity that turns an ordinary afternoon upside down.',
    image: '/images/citrus_rush_espresso_1792162237464.jpg',
    temp: 'Iced',
    pairing: 'Meyer lemon poppyseed loaf',
    origin: 'Guji, Ethiopia'
  },
  {
    id: '13',
    name: 'White Velvet',
    number: '13',
    mood: 'Treat yourself',
    category: 'Indulgence',
    flavourProfile: 'White chocolate, espresso, and creamy milk.',
    flavourNotes: ['Cocoa butter curls', 'Silken white chocolate', 'Golden roasted crema'],
    description: 'A pale, creamy coffee finished with delicate white chocolate shavings and silky textures.',
    emotionalCopy: 'Because you don’t need an excuse to choose something purely delightful today.',
    image: '/images/white_velvet_coffee_1792162255360.jpg',
    temp: 'Warm',
    pairing: 'Pistachio cream macaron',
    origin: 'Bourbon, Rwanda'
  },
  {
    id: '14',
    name: 'Coconut Coast',
    number: '14',
    mood: 'Mentally on holiday',
    category: 'Refresh',
    flavourProfile: 'Espresso and coconut milk.',
    flavourNotes: ['Pure pressed coconut milk', 'Layered cold espresso', 'Toasted coconut chips'],
    description: 'An iced coconut latte carrying subtle sea breezes and tropical escapism.',
    emotionalCopy: 'Close your eyes. Hear the gentle palms. You don’t need a boarding pass to feel distant.',
    image: '/images/coconut_coast_latte_1792162256909.jpg',
    temp: 'Iced',
    pairing: 'Toasted coconut chia cookie',
    origin: 'Kona, Hawaii'
  },
  {
    id: '15',
    name: 'Pistachio Poetry',
    number: '15',
    mood: 'A little fancy',
    category: 'Indulgence',
    flavourProfile: 'Pistachio, espresso, and creamy milk.',
    flavourNotes: ['Bronte pistachio paste', 'Silken micro-velvet', 'Crushed emerald pistachio dust'],
    description: 'Pistachio-green accents, crushed Sicilian nuts, and refined European cafe poise.',
    emotionalCopy: 'A cup composed with the rhythm and elegance of an afternoon poem.',
    image: '/images/pistachio_poetry_1792162257429.jpg',
    temp: 'Warm',
    pairing: 'Pistachio orange blossom canelé',
    origin: 'Harrar, Ethiopia'
  },
  {
    id: '16',
    name: 'Brown Sugar Affair',
    number: '16',
    mood: 'Main character energy',
    category: 'Focus',
    flavourProfile: 'Shaken espresso, brown sugar, and cinnamon.',
    flavourNotes: ['Caramelized raw demerara', 'Vigorously aerated espresso', 'Cold oat cream marbling'],
    description: 'An iced brown sugar espresso shaken by hand with visible dancing caramel marbling.',
    emotionalCopy: 'Crisp, bold, and magnetic. The kind of drink that sets the tone for everything that follows.',
    image: '/images/brown_sugar_affair_1792162257297.jpg',
    temp: 'Iced',
    pairing: 'Brown butter pecan blondie',
    origin: 'Matagalpa, Nicaragua'
  },
  {
    id: '17',
    name: 'After Hours Affogato',
    number: '17',
    mood: 'Indulgent and spontaneous',
    category: 'Adventure',
    flavourProfile: 'Espresso and vanilla ice cream.',
    flavourNotes: ['Single-origin hot espresso shot', 'Artisanal vanilla bean gelato', 'Hot-and-cold thermal melt'],
    description: 'Hot, viscous espresso cascading over artisanal vanilla gelato in a crystal dessert coupe.',
    emotionalCopy: 'When dinner has ended, but nobody wants the conversation or the night to be over.',
    image: '/images/after_hours_affogato_1792162257406.jpg',
    temp: 'Dessert',
    pairing: 'Espresso lace tuile',
    origin: 'Napoli Roast Blend'
  },
  {
    id: '18',
    name: 'Maple Muse',
    number: '18',
    mood: 'Slow and cosy',
    category: 'Comfort',
    flavourProfile: 'Maple syrup, espresso, and milk.',
    flavourNotes: ['Dark amber maple syrup', 'Rich nutty espresso', 'Warm steamed whole milk'],
    description: 'A maple latte with a gentle syrup ribbon and warm, autumn-inspired styling.',
    emotionalCopy: 'The gentle sweet woodiness of fallen leaves and warm knit sweaters.',
    image: '/images/maple_muse_latte_1792162257325.jpg',
    temp: 'Warm',
    pairing: 'Spiced pumpkin oat scone',
    origin: 'Kirinyaga, Kenya'
  }
];

export const MOOD_LETTERS: Record<string, MoodLetterMessage[]> = {
  'Slow': [
    {
      id: 'slow-1',
      mood: 'Slow',
      letterNo: '001',
      salutation: 'Dear slow morning,',
      body: 'You don’t have to have everything figured out today. Let the morning take its time. Find a little sunlight, take a breath, and give yourself permission to begin without rushing into the world’s demands.',
      coffeeName: 'Honey Oat Latte',
      coffeeImage: '/images/signature_honey_oat_1792162190261.jpg',
      reminder: 'You can take the day one moment at a time.'
    },
    {
      id: 'slow-2',
      mood: 'Slow',
      letterNo: '007',
      salutation: 'Dear quiet soul,',
      body: 'Speed is not a virtue when you miss what you pass. Let the steam rise from your cup. The things that truly matter will still be waiting for you once your heart has found its stillness.',
      coffeeName: 'Maple Muse',
      coffeeImage: '/images/maple_muse_latte_1792162257325.jpg',
      reminder: 'Peace is not a reward at the end; it is a posture you choose now.'
    },
    {
      id: 'slow-3',
      mood: 'Slow',
      letterNo: '012',
      salutation: 'Dear unhurried heart,',
      body: 'The sun does not rush to the zenith; it paints each minute with deliberate golden strokes. Let your day unfold with that same gentle mercy. Sip slowly.',
      coffeeName: 'Velvet Cloud Latte',
      coffeeImage: '/images/velvet_cloud_latte_1792162235609.jpg',
      reminder: 'The world can wait three minutes for you to finish this cup.'
    }
  ],
  'Overwhelmed': [
    {
      id: 'overwhelmed-1',
      mood: 'Overwhelmed',
      letterNo: '003',
      salutation: 'Dear racing mind,',
      body: 'Close your eyes for ten seconds. Everything loud can wait. You do not need to solve the whole week this morning. Just this hour, just this cup, just your own steady pulse.',
      coffeeName: 'Iced Vanilla Latte',
      coffeeImage: '/images/iced_vanilla_latte_1792162213669.jpg',
      reminder: 'Breathe out. You are doing enough already.'
    },
    {
      id: 'overwhelmed-2',
      mood: 'Overwhelmed',
      letterNo: '008',
      salutation: 'Dear tired shoulders,',
      body: 'Drop your shoulders down from your ears. Unclench your jaw. Not every fire is yours to extinguish. Right now, your only job is holding this warm ceramic cup.',
      coffeeName: 'Lavender Daydream',
      coffeeImage: '/images/lavender_daydream_1792162235888.jpg',
      reminder: 'You are allowed to pause before answering anyone.'
    },
    {
      id: 'overwhelmed-3',
      mood: 'Overwhelmed',
      letterNo: '014',
      salutation: 'Dear weary traveler,',
      body: 'When the noise feels deafening, look down at your hands. Feel the grounded weight of the earth beneath you. One single task, then the next. Nothing more.',
      coffeeName: 'Hazelnut Hush',
      coffeeImage: '/images/hazelnut_hush_1792162239009.jpg',
      reminder: 'Simplicity is quiet courage.'
    }
  ],
  'Hopeful': [
    {
      id: 'hopeful-1',
      mood: 'Hopeful',
      letterNo: '004',
      salutation: 'Dear bright outlook,',
      body: 'There is something gentle stirring on the horizon. Trust the quiet optimism that tapped your shoulder today. Good things often begin as small, unpretentious seedlings.',
      coffeeName: 'Golden Hour Macchiato',
      coffeeImage: '/images/golden_hour_macchiato_1792162235434.jpg',
      reminder: 'Carry that light gently into the afternoon.'
    },
    {
      id: 'hopeful-2',
      mood: 'Hopeful',
      letterNo: '009',
      salutation: 'Dear open spirit,',
      body: 'Every cup is a small promise of new beginnings. Whatever yesterday felt like, today is unwritten and waiting for your signature with curious eyes.',
      coffeeName: 'Coconut Coast',
      coffeeImage: '/images/coconut_coast_latte_1792162256909.jpg',
      reminder: 'Expect kindness, and you will see it.'
    },
    {
      id: 'hopeful-3',
      mood: 'Hopeful',
      letterNo: '015',
      salutation: 'Dear dreamer,',
      body: 'Hold on to the feeling that something delightful is just around the bend. Let your coffee be the first small delight of many that follow.',
      coffeeName: 'Citrus Rush',
      coffeeImage: '/images/citrus_rush_espresso_1792162237464.jpg',
      reminder: 'Hope is a compass, not a destination.'
    }
  ],
  'Confident': [
    {
      id: 'confident-1',
      mood: 'Confident',
      letterNo: '002',
      salutation: 'Dear focus in motion,',
      body: 'You know what needs to be built, and you have the strength to build it. Stand tall, speak your truth with clarity, and let your work do the loud speaking.',
      coffeeName: 'Flat White',
      coffeeImage: '/images/flat_white_coffee_1792162215379.jpg',
      reminder: 'Precision over noise. Trust your craft.'
    },
    {
      id: 'confident-2',
      mood: 'Confident',
      letterNo: '010',
      salutation: 'Dear force of nature,',
      body: 'Step into the day without asking for permission to take up space. You bring perspective that nobody else has. Drink deep and lead with grace.',
      coffeeName: 'Rose Mocha',
      coffeeImage: '/images/rose_mocha_1792162214881.jpg',
      reminder: 'Your conviction is contagious.'
    },
    {
      id: 'confident-3',
      mood: 'Confident',
      letterNo: '016',
      salutation: 'Dear builder of momentum,',
      body: 'When you move with intention, friction disappears. Fuel the vision that brought you to this table and keep your eyes fixed forward.',
      coffeeName: 'Brown Sugar Affair',
      coffeeImage: '/images/brown_sugar_affair_1792162257297.jpg',
      reminder: 'Confidence is simply trust practiced over time.'
    }
  ],
  'Nostalgic': [
    {
      id: 'nostalgic-1',
      mood: 'Nostalgic',
      letterNo: '005',
      salutation: 'Dear memory keeper,',
      body: 'There is a sweetness in remembering old chapters—the records played on Sunday afternoons, familiar laughs, and seasons that shaped you. Honor where you came from as you sip.',
      coffeeName: 'Cinnamon Cappuccino',
      coffeeImage: '/images/cinnamon_cappuccino_1792162215709.jpg',
      reminder: 'Those memories live warmly inside you.'
    },
    {
      id: 'nostalgic-2',
      mood: 'Nostalgic',
      letterNo: '011',
      salutation: 'Dear sentimental heart,',
      body: 'Familiar scents and warm spices carry time travel in a cup. Smile at the younger self who wondered where life would lead—you made it here.',
      coffeeName: 'Maple Muse',
      coffeeImage: '/images/maple_muse_latte_1792162257325.jpg',
      reminder: 'The past made you; today welcomes you.'
    },
    {
      id: 'nostalgic-3',
      mood: 'Nostalgic',
      letterNo: '017',
      salutation: 'Dear old friend,',
      body: 'Some feelings never lose their softness. Let the familiar comfort of roasted beans and warm milk remind you that good things endure.',
      coffeeName: 'Midnight Mocha',
      coffeeImage: '/images/midnight_mocha_1792162236422.jpg',
      reminder: 'Gratitude turns what we had into more than enough.'
    }
  ],
  'In Need of Comfort': [
    {
      id: 'comfort-1',
      mood: 'In Need of Comfort',
      letterNo: '006',
      salutation: 'Dear tender heart,',
      body: 'Be exceedingly kind to yourself right now. If all you accomplished today was getting out of bed and holding this warm cup, that is a victory. Rest is not wasted time.',
      coffeeName: 'Velvet Cloud Latte',
      coffeeImage: '/images/velvet_cloud_latte_1792162235609.jpg',
      reminder: 'Softness is strength in disguise.'
    },
    {
      id: 'comfort-2',
      mood: 'In Need of Comfort',
      letterNo: '013',
      salutation: 'Dear seeking solace,',
      body: 'Wrap both hands around the ceramic warmth. Let the heat seep into your fingers. You don’t have to carry the whole heavy world today.',
      coffeeName: 'White Velvet',
      coffeeImage: '/images/white_velvet_coffee_1792162255360.jpg',
      reminder: 'You are worthy of care and tenderness.'
    },
    {
      id: 'comfort-3',
      mood: 'In Need of Comfort',
      letterNo: '018',
      salutation: 'Dear quiet warrior,',
      body: 'It’s okay to feel bruised by the world sometimes. Come sit down. Take a slow sip. Let the sweetness remind you that warmth always returns.',
      coffeeName: 'Pistachio Poetry',
      coffeeImage: '/images/pistachio_poetry_1792162257429.jpg',
      reminder: 'Tomorrow will have new grace.'
    }
  ]
};

export const JOURNAL_ENTRIES = [
  {
    title: 'On Slow Mornings',
    quote: 'Give yourself a moment before giving the world your attention.',
    note: 'The phone can stay facedown. The inbox will not vanish. The ten minutes you spend feeling the steam against your face are ten minutes that ground your entire day.',
    theme: 'Morning Ritual'
  },
  {
    title: 'On Starting Again',
    quote: 'A new beginning doesn’t always need a Monday.',
    note: 'Mid-afternoon resets are just as sacred as sunrise. A fresh glass with clean ice and pouring espresso can demarcate where tension stops and clarity begins.',
    theme: 'Clarity & Reset'
  },
  {
    title: 'On Finding Comfort',
    quote: 'Sometimes, the smallest rituals make an ordinary day feel special.',
    note: 'A sprinkle of cinnamon, the gentle clink of a silver spoon against earthenware, linen napkins washed until soft. Luxury is attention to small touches.',
    theme: 'Everyday Sacred'
  },
  {
    title: 'On Being Present',
    quote: 'Let this be a moment you experience instead of rushing past.',
    note: 'We often drink our coffee while mentally living three meetings ahead. Taste the roast. Notice the temperature. You are here, right now.',
    theme: 'Mindfulness'
  },
  {
    title: 'On Little Wins',
    quote: 'Not every victory needs an audience.',
    note: 'Finishing a hard page, saying no to what drains you, or simply stepping outside to breathe under the canopy. Celebrate the quiet triumphs.',
    theme: 'Quiet Triumphs'
  }
];
