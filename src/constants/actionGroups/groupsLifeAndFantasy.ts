import { ActionGroup, createActionItem } from './types';

export const GROUPS_LIFE_AND_FANTASY: ActionGroup[] = [
  {
    id: 'emotional_expressive',
    name: 'Emotional Expressions & Gestures',
    icon: '😄',
    description: 'Triumphant cheers, thoughtful contemplation, ecstatic laughter, bashful grins, and emotive poses',
    actions: [
      createActionItem(
        'emotion_triumphant_victory_cheer',
        'Triumphant Double-Fist Victory Cheer',
        'Pumping both fists skyward with wide victorious grin',
        'Throwing both fists triumphantly up into the air with head tilted back, shouting with pure unbridled joy and radiant victory',
        'emotional_expressive'
      ),
      createActionItem(
        'emotion_chin_in_hands_dreamy',
        'Dreamy Contemplation with Chin in Both Palms',
        'Propping chin in hands with wide dreamy starry-eyed gaze',
        'Resting chin warmly in the cups of both palms, elbows on table, gazing dreamily into the distance with a gentle wistful smile',
        'emotional_expressive'
      ),
      createActionItem(
        'emotion_joyful_hand_clap',
        'Excited Hand Clapping with Glee',
        'Clapping hands rapidly near chest with delighted sparkling eyes',
        'Clapping hands together in rapid delighted bursts in front of chest, bouncing on heels with ecstatic excitement and bubbly laughter',
        'emotional_expressive'
      ),
      createActionItem(
        'emotion_gasp_covering_mouth',
        'Pleasantly Surprised Gasp Covering Mouth',
        'Covering mouth with both hands in wide-eyed astonishment',
        'Placing both hands over mouth in an audible pleasant gasp, eyes wide with delightful shock and joyful wonder',
        'emotional_expressive'
      ),
      createActionItem(
        'emotion_confident_smirk_wink',
        'Confident Smirk and Playful Wink',
        'Tilting chin with a sly confident grin and crisp wink',
        'Tilting head slightly with arms folded, wearing a sharp confident half-smirk while offering a playful, captivating wink directly to camera',
        'emotional_expressive'
      ),
      createActionItem(
        'emotion_shy_bashful_smile',
        'Shy Bashful Smile Looking Downward',
        'Looking down through eyelashes with blushing cheeks',
        'Lowering gaze toward the floor with a sweet bashful smile, cheeks blushing soft pink, one hand nervously toying with hair strand',
        'emotional_expressive'
      ),
      createActionItem(
        'emotion_wiping_joyful_tear',
        'Wiping Away a Joyful Tear with Fingertip',
        'Brushing tear of happiness from cheek with radiant smile',
        'Using the knuckle of index finger to gently dab away a glistening tear of overwhelming happiness from cheek with an emotional glowing smile',
        'emotional_expressive'
      ),
      createActionItem(
        'emotion_playful_defiance_pout',
        'Playful Defiant Pout with Crossed Arms',
        'Puffing out cheeks with cute playful stubborn pout',
        'Puffing cheeks out slightly in a cute mock-stubborn pout, crossing arms firmly and turning head sideways with playful faux-defiance',
        'emotional_expressive'
      ),
      createActionItem(
        'emotion_peaceful_sigh_relief',
        'Peaceful Sigh of Contentment and Relief',
        'Exhaling deeply with hand over heart and closed eyes',
        'Letting out a soft, peaceful sigh of total relief and contentment, shoulders sinking into relaxation, hand resting serenely over chest',
        'emotional_expressive'
      ),
      createActionItem(
        'emotion_blowing_palm_kiss',
        'Blowing a Sweet Kiss from Palm',
        'Placing hand to lips and blowing imaginary kiss forward',
        'Pressing fingers to lips and blowing a sweet, sparkling imaginary kiss from the open palm toward the viewer with sparkling eyes',
        'emotional_expressive'
      ),
      createActionItem(
        'emotion_pleading_hands_clasped',
        'Playfully Pleading with Clasped Hands',
        'Clasping hands under chin with wide puppy-dog eyes',
        'Clasping hands together beneath chin in an exaggerated pleading pose, looking up with wide, irresistible puppy-dog eyes and a charming grin',
        'emotional_expressive'
      ),
      createActionItem(
        'emotion_double_thumbs_up',
        'Enthusiastic Double Thumbs-Up',
        'Giving two enthusiastic thumbs-up with beaming grin',
        'Thrusting both thumbs enthusiastically upward in front of chest, grinning broadly with an unmistakable sign of total approval and cheer',
        'emotional_expressive'
      ),
      createActionItem(
        'emotion_heartfelt_gratitude_hand',
        'Heartfelt Gratitude with Hand Pressed to Chest',
        'Pressing palm flat against sternum with bowing head',
        'Pressing right palm flat against chest over heart, bowing head slightly with a profound look of sincere gratitude and humble warmth',
        'emotional_expressive'
      ),
      createActionItem(
        'emotion_curious_eyebrow_raise',
        'Curious Inquisitive Eyebrow Arch',
        'Lifting one arched eyebrow with inquisitive head tilt',
        'Tilting head to the side and raising one sharp eyebrow inquisitively, studying the situation with sharp witty curiosity',
        'emotional_expressive'
      ),
      createActionItem(
        'emotion_mind_blown_temple_tap',
        'Mind-Blown Gesture with Fingers at Temples',
        'Opening fingers wide from temples mimicking explosion of ideas',
        'Touching fingertips to both temples and suddenly flaring hands outward with wide eyes and open mouth in a playful "mind blown" reaction',
        'emotional_expressive'
      ),
      createActionItem(
        'emotion_soaking_in_sunshine',
        'Tilting Face to Warm Sun with Blissful Expression',
        'Basking in warm sunlight with open chest and peaceful smile',
        'Closing eyes and tilting face directly toward the warm afternoon sun, opening chest and breathing in the golden light with sheer bliss',
        'emotional_expressive'
      )
    ]
  },
  {
    id: 'fashion_shopping',
    name: 'Fashion, Styling & Shopping',
    icon: '🛍️',
    description: 'Boutique shopping, trying on outfits, designer sunglasses, luxury accessories, and wardrobe styling',
    actions: [
      createActionItem(
        'fashion_trying_sunglasses_mirror',
        'Trying on Designer Sunglasses Before Mirror',
        'Adjusting tortoiseshell sunglasses looking in boutique mirror',
        'Standing before a gilded boutique mirror, adjusting tortoiseshell designer sunglasses on nose and tilting head to inspect the stylish look',
        'fashion_shopping'
      ),
      createActionItem(
        'fashion_holding_shopping_bags',
        'Carrying Armful of Luxury Shopping Bags',
        'Walking down shopping boulevard with glossy boutique bags',
        'Walking down a fashionable luxury shopping avenue with several glossy pastel shopping bags looped over both arms, smiling with retail joy',
        'fashion_shopping'
      ),
      createActionItem(
        'fashion_draping_silk_scarf',
        'Draping Floral Silk Scarf Around Neck',
        'Looping printed silk scarf around shoulders in elegant knot',
        'Holding a flowing printed silk scarf by both ends, draping it gracefully over shoulders and tying a chic Parisian loop around collar',
        'fashion_shopping'
      ),
      createActionItem(
        'fashion_holding_jacket_to_body',
        'Holding Chic Jacket Against Body in Mirror',
        'Holding blazer hanger against chest assessing fit in mirror',
        'Holding a tailored pastel blazer on its wooden hanger in front of chest, turning left and right before a full-length mirror to check silhouette',
        'fashion_shopping'
      ),
      createActionItem(
        'fashion_browsing_clothing_rack',
        'Sliding Hangers Across Boutique Clothing Rack',
        'Flipping through garments on chrome rail with fingertips',
        'Gliding fingertips along a sleek minimalist clothing rack, sliding wooden hangers one by one to inspect fabric textures and cuts',
        'fashion_shopping'
      ),
      createActionItem(
        'fashion_checking_price_tag',
        'Peering at Designer Price Tag with Curious Grin',
        'Flipping hanging tag over with index finger and thumb',
        'Flipping over a small embossed cardstock price tag attached to a designer handbag, raising eyebrows with an amused, impressed smile',
        'fashion_shopping'
      ),
      createActionItem(
        'fashion_adjusting_waist_belt',
        'Fastening Wide Leather Belt Around Waist',
        'Pulling belt strap through golden buckle smoothing outfit',
        'Threading the leather strap of a stylish waist belt through a polished gold buckle, pulling it snug to cinch the waist of the dress',
        'fashion_shopping'
      ),
      createActionItem(
        'fashion_swiping_credit_card',
        'Tapping Card on Contactless Payment Terminal',
        'Holding black card against boutique payment terminal with smile',
        'Holding a sleek black payment card to tap the glowing contactless screen of a brass counter register terminal with a cheerful boutique smile',
        'fashion_shopping'
      ),
      createActionItem(
        'fashion_admiring_shoe_display',
        'Admiring High-Heel Stiletto in Glass Display',
        'Crouching near glass showcase admiring elegant footwear',
        'Leaning close to an illuminated boutique glass display window, pointing with delight at a pair of sparkling jewel-encrusted high-heel pumps',
        'fashion_shopping'
      ),
      createActionItem(
        'fashion_wide_brim_sun_hat',
        'Tilting Wide-Brim Straw Sun Hat',
        'Placing wide-brim woven summer hat atop hair with both hands',
        'Placing a wide-brim woven straw hat onto head with both hands, lightly touching the brim while smiling under the dappled shade',
        'fashion_shopping'
      ),
      createActionItem(
        'fashion_applying_lipstick_compact',
        'Applying Crimson Lipstick with Compact Mirror',
        'Gliding red lipstick across lips holding small silver compact',
        'Holding a small round silver compact mirror in left hand, carefully applying a stroke of velvet crimson lipstick to lips with poised elegance',
        'fashion_shopping'
      ),
      createActionItem(
        'fashion_buttoning_blazer_cuff',
        'Fastening Horn Button on Tailored Blazer Cuff',
        'Adjusting sleeve cuff buttons with focused precision',
        'Fastening the polished horn button on the sleeve cuff of a tailored houndstooth blazer, straightening arms with crisp sartorial confidence',
        'fashion_shopping'
      ),
      createActionItem(
        'fashion_trying_perfume_wrist',
        'Spritzing and Inhaling Perfume on Wrist',
        'Misting glass perfume atomizer onto wrist and inhaling scent',
        'Spritzing a fine mist of luxury floral perfume from a crystal atomizer onto inner wrist, lifting wrist to nose to gently inhale the fragrance',
        'fashion_shopping'
      ),
      createActionItem(
        'fashion_zipping_designer_boot',
        'Zipping Up Knee-High Leather Boot',
        'Pulling side zipper of sleek leather boot while seated',
        'Seated on a plush velvet boutique ottoman with one leg crossed, pulling the side zipper of a polished black leather knee-high boot smooth',
        'fashion_shopping'
      ),
      createActionItem(
        'fashion_clasping_pearl_necklace',
        'Fastening Clasp of Pearl Necklace Behind Neck',
        'Reaching hands behind nape to fasten silver filigree clasp',
        'Reaching both hands behind neck with raised elbows, delicately fastening the filigree clasp of a radiant single-strand freshwater pearl necklace',
        'fashion_shopping'
      ),
      createActionItem(
        'fashion_twirling_in_fitting_room',
        'Joyful Twirl in Fitting Room Full-Length Mirror',
        'Spinning with pleated skirt flaring out in mirror reflection',
        'Spinning in a light joyful circle inside the spacious dressing room, watching the pleated hem of a new dress flare out beautifully in the mirror',
        'fashion_shopping'
      )
    ]
  },
  {
    id: 'urban_streetlife',
    name: 'Urban Living & City Exploration',
    icon: '🏙️',
    description: 'City crosswalks, hailing taxis, subway transit, street murals, vintage bicycles, and metropolitan vibes',
    actions: [
      createActionItem(
        'urban_hailing_yellow_taxi',
        'Hailing Yellow Taxi Cab with Raised Arm',
        'Stepping to curb raising hand high to hail passing taxi',
        'Stepping off the curb with one arm raised high and fingers outstretched, whistling to hail an approaching bright yellow taxi cab down the avenue',
        'urban_streetlife'
      ),
      createActionItem(
        'urban_crossing_zebra_walk',
        'Striding Across Busy City Zebra Crosswalk',
        'Walking across striped pedestrian crossing in bustling traffic',
        'Striding confidently across a white-striped zebra pedestrian crosswalk, skyscrapers towering overhead, bustling yellow cabs waiting behind line',
        'urban_streetlife'
      ),
      createActionItem(
        'urban_gazing_up_skyscrapers',
        'Looking Up in Awe at Glass Skyscrapers',
        'Tilting head all the way back marveling at modern towers',
        'Standing in a public city plaza, tilting head all the way back with wide amazed eyes to marvel at reflective glass skyscrapers piercing the clouds',
        'urban_streetlife'
      ),
      createActionItem(
        'urban_subway_metro_map',
        'Studying Color-Coded Subway Transit Map',
        'Tracing colored transit lines on illuminated station map',
        'Standing on the underground metro station platform, tracing the blue and green subway line transfers on the illuminated wall map with finger',
        'urban_streetlife'
      ),
      createActionItem(
        'urban_riding_vintage_bicycle',
        'Riding Vintage Bicycle with Wicker Basket',
        'Pedaling classic turquoise bicycle with front flower basket',
        'Pedaling a vintage turquoise city bicycle smoothly along the bike lane, ringing the silver handlebar bell with a basket of fresh baguettes and flowers',
        'urban_streetlife'
      ),
      createActionItem(
        'urban_park_bench_pigeons',
        'Feeding Birds on Sunny Park Bench',
        'Scattering breadcrumbs from paper bag for pigeons',
        'Sitting on a sunny green park bench, tossing handfuls of breadcrumbs onto the cobblestones as a flock of friendly pigeons gathers around',
        'urban_streetlife'
      ),
      createActionItem(
        'urban_rolling_luggage_terminal',
        'Pulling Sleek Rolling Suitcase Along Sidewalk',
        'Gliding spinner luggage smoothly past urban storefronts',
        'Pulling a sleek hard-shell rolling spinner suitcase smoothly along the sidewalk, holding a travel coffee cup with sunglasses on brow',
        'urban_streetlife'
      ),
      createActionItem(
        'urban_waiting_bus_shelter',
        'Waiting Under Modern Glass Bus Stop Shelter',
        'Sitting on glass bench glancing down street for bus',
        'Sitting on the bench inside a modern glass bus shelter, peering down the rain-slicked avenue for the headlights of the approaching red transit bus',
        'urban_streetlife'
      ),
      createActionItem(
        'urban_admiring_street_mural',
        'Admiring Giant Colorful Street Art Graffiti Mural',
        'Standing before brick wall admiring vibrant painted mural',
        'Standing before a massive three-story brick wall covered in vibrant artistic street art, hands in back pockets admiring the vivid spray-painted portrait',
        'urban_streetlife'
      ),
      createActionItem(
        'urban_flea_market_stall',
        'Browsing Vintage Antiques at Outdoor Flea Market',
        'Inspecting antique brass trinket at open-air market stall',
        'Examining an ornate brass pocket compass at a bustling weekend outdoor flea market stall, chatting warmly with the local vendor',
        'urban_streetlife'
      ),
      createActionItem(
        'urban_climbing_subway_stairs',
        'Emerging from Subway Station Stairs into Daylight',
        'Ascending tiled stairs into the bright bustling city plaza',
        'Walking up the tiled granite stairs out of the underground subway exit, stepping out into the bright bustling city sunlight with energetic momentum',
        'urban_streetlife'
      ),
      createActionItem(
        'urban_food_truck_tacos',
        'Eating Gourmet Street Tacos by Food Truck',
        'Holding paper tray eating fresh street taco with lime',
        'Standing near a colorful food truck holding a cardboard tray of steaming street tacos, squeezing a fresh lime wedge over salsa with hungry delight',
        'urban_streetlife'
      ),
      createActionItem(
        'urban_street_musician_tip',
        'Dropping Coin into Street Musician’s Guitar Case',
        'Bending to place paper currency into open velvet instrument case',
        'Bending down gracefully to drop folded currency and shiny coins into an open velvet-lined guitar case of a talented street busker, smiling in appreciation',
        'urban_streetlife'
      ),
      createActionItem(
        'urban_newsstand_magazine',
        'Flipping Through Magazine at Corner Newsstand',
        'Browsing colorful glossies on wooden newsstand rack',
        'Standing under the canvas awning of a classic corner kiosk newsstand, flipping through the glossy pages of a culture and arts magazine',
        'urban_streetlife'
      ),
      createActionItem(
        'urban_rooftop_sunset_view',
        'Leaning on Rooftop Ledge Overlooking City Lights',
        'Standing on high building terrace watching urban sunset lights',
        'Standing on the open terrace of a high-rise rooftop building, leaning on the parapet wall watching thousands of urban city lights twinkle on at dusk',
        'urban_streetlife'
      ),
      createActionItem(
        'urban_revolving_door_push',
        'Pushing Heavy Glass Revolving Door',
        'Stepping through modern glass revolving door into lobby',
        'Pressing palm against the stainless steel push bar of a grand glass revolving door, stepping smoothly into the soaring marble corporate atrium',
        'urban_streetlife'
      )
    ]
  },
  {
    id: 'travel_adventure',
    name: 'Travel, Transit & Sightseeing',
    icon: '✈️',
    description: 'Airport transit, train journeys, passport checkpoints, iconic landmarks, ferries, and world travel',
    actions: [
      createActionItem(
        'travel_boarding_airplane_carryon',
        'Boarding Airplane with Carry-On Roller Bag',
        'Walking down jet bridge holding boarding pass and bag',
        'Walking down the glass jet bridge tunnel toward the airplane door, holding a printed boarding pass and wheeling a sleek carry-on bag with excitement',
        'travel_adventure'
      ),
      createActionItem(
        'travel_train_window_watching',
        'Watching Countryside from Scenic Train Window',
        'Resting chin on hand watching green hills roll by through glass',
        'Sitting in a plush velvet train seat, resting chin on palm while gazing out the large panoramic window as golden hills and vineyards glide past',
        'travel_adventure'
      ),
      createActionItem(
        'travel_pointing_landmark',
        'Pointing at Famous Iconic Monument',
        'Extending arm pointing excited towards historic cathedral',
        'Standing in a sunlit historic square, pointing enthusiastically with an outstretched arm toward the towering spires of an ancient Gothic cathedral',
        'travel_adventure'
      ),
      createActionItem(
        'travel_passport_stamp_smile',
        'Holding Up Stamped Passport at Border Checkpoint',
        'Displaying fresh ink entry visa stamp in travel passport',
        'Holding open a navy blue passport to display a crisp fresh red ink entry stamp, beaming brightly with the joy of arriving in a new foreign country',
        'travel_adventure'
      ),
      createActionItem(
        'travel_ferry_bow_sea_breeze',
        'Leaning Over Bow Railing of Passenger Ferry',
        'Standing at ship’s bow feeling sea spray and ocean wind',
        'Standing at the front bow railing of a white passenger ferry, holding onto the painted steel rail as ocean sea breeze and salty spray blow through hair',
        'travel_adventure'
      ),
      createActionItem(
        'travel_tourist_coin_telescope',
        'Looking Through Coin-Operated Viewpoint Telescope',
        'Peering into heavy brass telescope on observation deck',
        'Dropping a brass token into an observation deck telescope, adjusting the focusing knob to gaze across the harbor at sailboats and distant islands',
        'travel_adventure'
      ),
      createActionItem(
        'travel_luggage_trolley_ride',
        'Pushing Airport Luggage Trolley with Bags',
        'Wheeling silver luggage cart loaded with duffel bags',
        'Pushing a silver airport luggage cart stacked high with colorful expedition duffel bags and suitcases through the international arrivals concourse',
        'travel_adventure'
      ),
      createActionItem(
        'travel_car_hood_paper_map',
        'Spreading Road Map Across Car Hood',
        'Tracing highway route on paper map on vintage convertible',
        'Spreading a large fold-out paper road map across the hood of a dusty road-trip car, leaning over with friends to plot the scenic coastal highway route',
        'travel_adventure'
      ),
      createActionItem(
        'travel_double_decker_top_deck',
        'Riding Open-Top Double Decker Tour Bus',
        'Sitting on top deck waving at historical street architecture',
        'Sitting in the front row of the open-air upper deck of a red double-decker bus, wearing sunglasses and smiling while photographing historic stone statues',
        'travel_adventure'
      ),
      createActionItem(
        'travel_moving_walkway_glide',
        'Gliding Along Airport Moving Walkway',
        'Standing on rubber moving walkway letting bag trail behind',
        'Standing comfortably on the moving rubber travelator walkway in the airport terminal, holding rolling bag handle as gate signs pass overhead',
        'travel_adventure'
      ),
      createActionItem(
        'travel_departure_board_check',
        'Checking Flight Gate on Departure Board',
        'Looking up at giant flip-disc departure schedule board',
        'Standing in the grand departure hall, gazing upward with ticket in hand at the towering illuminated flight schedule board to check gate information',
        'travel_adventure'
      ),
      createActionItem(
        'travel_postcard_writing_cafe',
        'Writing Postcard at Outdoor European Cafe',
        'Writing greeting on picturesque postcard with pen and stamp',
        'Sitting at a small round wrought-iron cafe table, writing a heartfelt handwritten travel note on the back of a scenic postcard, affixing an airmail stamp',
        'travel_adventure'
      ),
      createActionItem(
        'travel_hotel_keycard_tap',
        'Tapping Wooden RFID Keycard at Suite Door',
        'Holding room card to door sensor entering luxury hotel suite',
        'Tapping a sleek wooden RFID keycard against the electronic lock of a boutique hotel suite, pushing open the heavy oak door with eager anticipation',
        'travel_adventure'
      ),
      createActionItem(
        'travel_souvenir_shop_snowglobe',
        'Shaking Souvenir Snow Globe in Gift Shop',
        'Inverting glass snow globe watching glitter swirl around miniature landmark',
        'Holding a glass souvenir snow globe in gift shop, inverting it gently to watch white and gold iridescent glitter swirl over the miniature city model',
        'travel_adventure'
      ),
      createActionItem(
        'travel_gondola_canal_ride',
        'Gliding in Venetian Gondola Along Canal',
        'Sitting on carved velvet gondola seat trailing hand in water',
        'Relaxing on the plush velvet cushions of a traditional black gondola, gliding silently through narrow canal waterways beneath arched stone bridges',
        'travel_adventure'
      ),
      createActionItem(
        'travel_cable_car_alpine_view',
        'Peering Out Mountain Cable Car Window',
        'Looking down from glass aerial gondola at alpine forests',
        'Standing inside a modern glass mountain cable car, peering out the panoramic window as the cabin ascends high above misty evergreen forests and glaciers',
        'travel_adventure'
      )
    ]
  },
  {
    id: 'fantasy_magic',
    name: 'Fantasy, Arcane & Magic',
    icon: '🔮',
    description: 'Spellcasting, glowing runes, floating crystal orbs, potion brewing, arcane staves, and mythical enchantment',
    actions: [
      createActionItem(
        'magic_spellcasting_open_palms',
        'Casting Glowing Energy Spell from Open Palms',
        'Extending open palms with swirling magical arcane light',
        'Thrusting both open palms forward as shimmering ribbons of glowing purple and celestial blue arcane magic swirl around fingertips in radiant spirals',
        'fantasy_magic'
      ),
      createActionItem(
        'magic_reading_rune_spellbook',
        'Deciphering Glowing Runes in Ancient Spellbook',
        'Holding heavy leather grimoire as golden runes glow on pages',
        'Holding a massive leather-bound grimoire on forearm, tracing ancient glowing golden runic script that levitates softly above the aged parchment',
        'fantasy_magic'
      ),
      createActionItem(
        'magic_levitating_crystal_orb',
        'Levitating Glowing Crystal Orb Between Hands',
        'Hovering hands around floating luminous sphere of light',
        'Cupping hands around a glowing multifaceted quartz crystal orb that floats weightlessly in mid-air, casting prismatic rainbow light across face',
        'fantasy_magic'
      ),
      createActionItem(
        'magic_potion_brewing_flask',
        'Swirling Glowing Luminescent Potion in Flask',
        'Holding glass Erlenmeyer flask with shimmering emerald liquid',
        'Swirling a round-bottom glass alchemical flask filled with bubbling, bioluminescent emerald elixir, holding it up to eye level in dark arcane laboratory',
        'fantasy_magic'
      ),
      createActionItem(
        'magic_drawing_sigil_air',
        'Tracing Glowing Arcane Sigil in Thin Air',
        'Drawing burning geometric magic circle with index fingertip',
        'Drawing an intricate glowing geometric magic circle in the empty air with an illuminated fingertip, leaving trails of fiery golden light suspended in space',
        'fantasy_magic'
      ),
      createActionItem(
        'magic_elemental_fire_wisps',
        'Summoning Dancing Wisps of Flame on Fingertips',
        'Dancing harmless magical flame orbs across knuckles',
        'Hovering palm upward as five miniature dancing wisps of warm magical blue fire dance harmlessly across fingertips like tame spirit embers',
        'fantasy_magic'
      ),
      createActionItem(
        'magic_tapping_wizard_staff',
        'Tapping Crystal Wizard Staff on Ground',
        'Striking bottom of carved wooden staff sending shockwave',
        'Holding a tall carved wooden staff crowned with an uncut amethyst crystal, striking the base firmly against the stone floor to release a wave of light',
        'fantasy_magic'
      ),
      createActionItem(
        'magic_channeling_nature_vines',
        'Sprouting Blooming Magic Vines from Earth',
        'Guiding flourishing green leafy vines upward with hands',
        'Kneeling on the mossy ground, guiding lush flowering ivy vines that rapidly sprout and blossom upward around arms under gentle botanical magic',
        'fantasy_magic'
      ),
      createActionItem(
        'magic_scrying_crystal_ball',
        'Gazing into Swirling Mystical Scrying Ball',
        'Peering into dark glass sphere seeing visions of distant lands',
        'Resting fingertips on a dark obsidian scrying orb on a velvet pedestal, peering into swirling silver mists inside that reveal visions of distant kingdoms',
        'fantasy_magic'
      ),
      createActionItem(
        'magic_whispering_incantation',
        'Whispering Arcane Incantation with Glowing Eyes',
        'Chanting quiet words of power with eyes illuminated by magic',
        'Whispering ancient melodic words of power through parted lips, eyes glowing with soft ethereal violet light as hair floats weightlessly in mystic aura',
        'fantasy_magic'
      ),
      createActionItem(
        'magic_hooded_cloak_cowl',
        'Drawing Hood of Arcane Velvet Cloak',
        'Pulling embroidered hood over head casting shadow over eyes',
        'Using both hands to pull up the deep hood of an embroidered midnight-blue velvet cloak, casting dramatic shadow over upper face while eyes glint',
        'fantasy_magic'
      ),
      createActionItem(
        'magic_glowing_butterfly_swarm',
        'Releasing Swarm of Luminous Butterflies',
        'Opening palms as dozens of glowing fairy butterflies take flight',
        'Parting cupped hands to release a breathtaking swarm of miniature glowing golden spirit butterflies that flutter into the air, illuminating the darkness',
        'fantasy_magic'
      ),
      createActionItem(
        'magic_enchanting_sword_blade',
        'Running Fingertip Down Sword Blade to Ignite Aura',
        'Charging steel sword with crackling lightning energy',
        'Running two fingers slowly along the flat of a polished steel broadsword, leaving behind a crackling aura of pale blue lightning along the sharpened edge',
        'fantasy_magic'
      ),
      createActionItem(
        'magic_levitating_stones_circle',
        'Levitating Floating Stones in Orbit Around Body',
        'Raising arms as small pebbles hover and circle in zero gravity',
        'Raising arms outward from sides as dozens of small river stones and autumn leaves rise from the ground to orbit body in a gentle anti-gravity vortex',
        'fantasy_magic'
      ),
      createActionItem(
        'magic_conjuring_water_ribbon',
        'Weaving Floating Ribbon of Pure Water',
        'Guiding fluid stream of water in mid-air loops with gestures',
        'Making fluid, graceful hand sweeps to draw a transparent ribbon of sparkling water out of a fountain, weaving it in suspended helical loops around torso',
        'fantasy_magic'
      ),
      createActionItem(
        'magic_teleportation_circle_step',
        'Stepping into Glowing Teleportation Circle',
        'Stepping onto etched floor runes as vertical light pillars rise',
        'Stepping foot onto an etched stone runic circle on the floor, raising hand as vertical beams of warm starlight rise upward to envelop body in teleportation',
        'fantasy_magic'
      )
    ]
  },
  {
    id: 'martial_arts',
    name: 'Martial Arts & Self-Defense',
    icon: '🥋',
    description: 'Karate, Tai Chi, Judo, Capoeira, Kung Fu, boxing, self-defense stances, and martial discipline',
    actions: [
      createActionItem(
        'martial_roundhouse_kick',
        'High Extension Roundhouse Kick',
        'Pivoting on support foot delivering horizontal high kick',
        'Pivoting sharply on the ball of supporting foot, extending kicking leg horizontally at head height with toes pointed and guard hands raised high',
        'martial_arts'
      ),
      createActionItem(
        'martial_horse_stance_kiai',
        'Grounded Horse Stance with Chambered Fists',
        'Deep wide squat with fists pulled back to ribs shouting kiai',
        'Dropping into a deep, wide, rock-solid horse stance (Kiba Dachi) with thighs parallel to floor, fists chambered tight at ribs, breathing out with powerful kiai',
        'martial_arts'
      ),
      createActionItem(
        'martial_tai_chi_cloud_hands',
        'Fluid Tai Chi Wave Hands Like Clouds',
        'Sweeping palms in continuous slow circular energy flow',
        'Flowing through the gentle, continuous circular motion of Tai Chi "Wave Hands Like Clouds", body weight shifting seamlessly from side to side in meditative harmony',
        'martial_arts'
      ),
      createActionItem(
        'martial_karate_straight_punch',
        'Dynamic Straight Karate Reverse Punch (Gyaku-Zuki)',
        'Driving straight punch forward with rotating fist and hip drive',
        'Stepping forward in deep front stance, driving a powerful reverse punch forward with full hip rotation, corkscrewing fist into the target at terminal focus',
        'martial_arts'
      ),
      createActionItem(
        'martial_cross_arm_block',
        'High X-Cross Arm Defense Block (Juji-Uke)',
        'Crossing forearms overhead to block downward strike',
        'Crossing forearms overhead in an impenetrable X-shaped block with wrists locked and eyes locked forward, deflecting an overhead strike with solid core',
        'martial_arts'
      ),
      createActionItem(
        'martial_kung_fu_crane',
        'Kung Fu Crane Stance Balance on One Leg',
        'Balancing on single bent knee with arms outspread like wings',
        'Balancing poised on one foot with the other knee lifted high to chest, hands curved into delicate crane beaks spread wide like the wings of a majestic bird',
        'martial_arts'
      ),
      createActionItem(
        'martial_capoeira_ginga',
        'Capoeira Rhythmic Ginga Step and Sway',
        'Triangular stepping dance with protective guard arm in front',
        'Stepping through the dynamic, flowing triangular rhythm of the Capoeira Ginga, swaying low from side to side with one forearm guarding face',
        'martial_arts'
      ),
      createActionItem(
        'martial_judo_lapel_grip',
        'Judo Lapel and Sleeve Gripping Stance (Kumi-Kata)',
        'Gripping opponent’s cotton gi collar and sleeve for throw',
        'Stepping in balanced athletic posture with hands gripping the heavy woven cotton lapel and sleeve of the opponent’s gi, preparing for an off-balancing hip throw',
        'martial_arts'
      ),
      createActionItem(
        'martial_side_kick_extension',
        'Chambered Side Thrust Kick (Yoko-Geri)',
        'Chambering knee and snapping heel horizontally into target',
        'Chambering knee tightly to chest before thrusting heel straight out horizontally with razor-sharp alignment along blade of foot, guard tight',
        'martial_arts'
      ),
      createActionItem(
        'martial_seiza_meditation',
        'Kneeling in Traditional Seiza (Mokuso Meditation)',
        'Kneeling formally on shins with closed eyes and straight spine',
        'Kneeling formally on folded shins in traditional seiza posture on the tatami mat, resting palms flat on thighs, eyes half-closed in silent pre-training meditation',
        'martial_arts'
      ),
      createActionItem(
        'martial_bo_staff_guard',
        'Holding Oak Bo Staff in Mid-Level Guard',
        'Gripping six-foot wooden staff in balanced two-handed ready stance',
        'Standing in low cat stance, gripping a six-foot tapered red oak bo staff with both hands at one-third intervals, holding the tip aimed forward in impenetrable guard',
        'martial_arts'
      ),
      createActionItem(
        'martial_boxing_jab_cross',
        'Snapping Boxing One-Two Jab-Cross Combo',
        'Throwing quick left lead jab followed by straight right cross',
        'Bouncing on the balls of feet with leather boxing gloves held high to chin, throwing a lightning-fast lead jab followed by a heavy straight right cross',
        'martial_arts'
      ),
      createActionItem(
        'martial_wing_chun_chain_punch',
        'Rapid Wing Chun Centerline Chain Punches',
        'Firing rolling vertical fist punches along centerline',
        'Standing in pigeon-toed goat-gripping stance (Yee Jee Kim Yeung Ma), firing a rapid flurry of rolling vertical centerline chain punches with relaxed shoulders',
        'martial_arts'
      ),
      createActionItem(
        'martial_respectful_bow',
        'Traditional Martial Arts Bow (Fist in Palm)',
        'Covering right fist with left open palm and bowing',
        'Standing upright with feet together, placing right closed fist into the open palm of left hand at chest level, bowing head respectfully in solemn martial honor',
        'martial_arts'
      ),
      createActionItem(
        'martial_aikido_wrist_turn',
        'Aikido Fluid Wrist Redirect (Kote-Gaeshi)',
        'Guiding attacker’s momentum in circular spiral throw',
        'Pivoting body smoothly on the center axis (Tenkan), using both hands to redirect opponent’s wrist in a gentle descending spiral to unbalance and throw',
        'martial_arts'
      ),
      createActionItem(
        'martial_tying_black_belt',
        'Tying Martial Arts Cotton Belt (Obi)',
        'Wrapping heavy belt twice around waist and pulling square knot',
        'Wrapping a crisp cotton martial arts belt twice around waist, pulling the ends through to cinch a tight, even square knot before stepping onto the dojo mat',
        'martial_arts'
      )
    ]
  }
];
