import { ActionGroup, createActionItem } from './types';

export const GROUPS_BASIC_AND_POSING: ActionGroup[] = [
  {
    id: 'postures_basic',
    name: 'Basic Postures & Poses',
    icon: '🧘',
    description: 'Fundamental everyday bodily postures, sitting, standing, kneeling, and leaning',
    actions: [
      createActionItem(
        'posture_standing_relaxed',
        'Relaxed Standing',
        'Natural standing posture with weight shifted to one leg',
        'Standing in a natural, relaxed posture with body weight shifted slightly to one hip, shoulders relaxed, arms resting loosely at sides',
        'postures_basic'
      ),
      createActionItem(
        'posture_standing_arms_crossed',
        'Standing with Arms Crossed',
        'Confident upright standing posture with arms gently crossed',
        'Standing tall and upright with arms casually folded across chest, steady direct gaze, and calm balanced footing',
        'postures_basic'
      ),
      createActionItem(
        'posture_sitting_chair',
        'Seated on Chair',
        'Sitting comfortably on a wooden chair with good posture',
        'Sitting upright on a chair with hands resting gently in lap, spine straight, knees together, and relaxed pleasant expression',
        'postures_basic'
      ),
      createActionItem(
        'posture_sitting_cross_legged',
        'Sitting Cross-Legged on Floor',
        'Relaxed seated cross-legged position on the ground or floor',
        'Sitting cross-legged on the floor in a relaxed posture, resting hands on knees, torso tilted slightly forward with warm engagement',
        'postures_basic'
      ),
      createActionItem(
        'posture_crouching_low',
        'Low Ground Crouch',
        'Crouching low on balls of feet with knees bent',
        'Crouching low near the ground on the balls of the feet with knees bent wide, one hand lightly touching the ground for balance',
        'postures_basic'
      ),
      createActionItem(
        'posture_kneeling_upright',
        'Upright Kneeling',
        'Kneeling upright on both knees with tall posture',
        'Kneeling upright on both knees with straight spine, hands resting on thighs, head held high with calm poise',
        'postures_basic'
      ),
      createActionItem(
        'posture_kneeling_one_knee',
        'One-Knee Kneel',
        'Resting on one knee with opposite foot planted forward',
        'Kneeling down on one knee with the opposite foot planted firmly on the ground, resting elbow on the raised knee',
        'postures_basic'
      ),
      createActionItem(
        'posture_leaning_wall',
        'Leaning Against Wall',
        'Casual back or shoulder lean against a vertical surface',
        'Leaning casually back against a wall with one foot resting flat against the surface behind, hands loosely in pockets',
        'postures_basic'
      ),
      createActionItem(
        'posture_leaning_railing',
        'Leaning Over Railing',
        'Resting forearms on a balcony or bridge railing looking outward',
        'Leaning forward with forearms resting comfortably along a wooden railing, gazing serenely outward into the distance',
        'postures_basic'
      ),
      createActionItem(
        'posture_lying_back',
        'Lying on Back Looking Up',
        'Resting flat on back on grass or blanket gazing skyward',
        'Lying comfortably on back on the grass with hands cushioned beneath head, gazing upward at the open sky with relaxed serenity',
        'postures_basic'
      ),
      createActionItem(
        'posture_lying_side',
        'Lying on Side Propped on Elbow',
        'Reclining on side with head supported by propped hand',
        'Lying gracefully on side on a soft surface, torso propped up on one elbow with hand gently cradling cheek',
        'postures_basic'
      ),
      createActionItem(
        'posture_lying_stomach',
        'Lying on Stomach with Chin in Hands',
        'Prone lying posture with feet kicked up playfully behind',
        'Lying on stomach with chin propped warmly in both palms, elbows on ground, ankles crossed and swaying gently in the air',
        'postures_basic'
      ),
      createActionItem(
        'posture_squatting_deep',
        'Deep Athletic Squat',
        'Deep parallel squat with balanced centered weight',
        'Holding a deep, centered athletic squat with heels flat, torso upright, and hands held together in front for balance',
        'postures_basic'
      ),
      createActionItem(
        'posture_perched_ledge',
        'Perched on Ledge with Legs Dangling',
        'Sitting on a stone ledge or wall with legs hanging down',
        'Sitting on the edge of a raised stone ledge with legs dangling freely, palms resting on either side of hips supporting torso',
        'postures_basic'
      ),
      createActionItem(
        'posture_slouch_relaxed',
        'Slouching Cozy on Soft Couch',
        'Relaxed curved recline on a plush sofa or cushions',
        'Slouching deeply and cozily into plush cushions with legs stretched outward, head tilted back resting against the headrest',
        'postures_basic'
      ),
      createActionItem(
        'posture_overhead_stretch',
        'Full Body Overhead Stretch',
        'Standing tall and extending both arms straight overhead',
        'Standing on tiptoes with arms extended high overhead, fingers interlaced, spine gently arching in a refreshing full-body stretch',
        'postures_basic'
      )
    ]
  },
  {
    id: 'locomotion_movement',
    name: 'Locomotion & Movement',
    icon: '🚶',
    description: 'Dynamic walking, striding, jogging, skipping, sneaking, and graceful footwork',
    actions: [
      createActionItem(
        'locomotion_brisk_walk',
        'Brisk Confident Walk',
        'Walking forward with purposeful stride and natural arm swing',
        'Walking forward with a brisk, purposeful stride, shoulders back, arms swinging in natural athletic cadence, eyes set forward',
        'locomotion_movement'
      ),
      createActionItem(
        'locomotion_gentle_stroll',
        'Gentle Relaxed Stroll',
        'Casual slow walk enjoying surroundings with hands behind back',
        'Strolling at a leisurely relaxed pace with hands casually clasped behind back, looking around with pleasant curiosity',
        'locomotion_movement'
      ),
      createActionItem(
        'locomotion_athletic_jog',
        'Athletic Jogging',
        'Light rhythmic jogging with bent elbows and bouncy footing',
        'Jogging with a steady, athletic rhythm, elbows bent at ninety degrees, light agile footfalls, and focused energetic breathing',
        'locomotion_movement'
      ),
      createActionItem(
        'locomotion_playful_skip',
        'Playful Skipping',
        'Joyful rhythmic skipping with high bouncy steps',
        'Skipping joyfully down the path with high buoyant hops, arms swinging with carefree happiness, bright radiant smile',
        'locomotion_movement'
      ),
      createActionItem(
        'locomotion_sneaking_tiptoes',
        'Sneaking on Tiptoes',
        'Carefully stepping on tiptoes with crouched stealth posture',
        'Creeping forward silently on tiptoes in a low stealth crouch, arms outstretched for balance, glancing cautiously around',
        'locomotion_movement'
      ),
      createActionItem(
        'locomotion_ascending_stairs',
        'Ascending Grand Stairs',
        'Walking up steps with hand lightly touching railing',
        'Ascending a flight of stairs with light energetic steps, one hand lightly gliding along the polished banister railing',
        'locomotion_movement'
      ),
      createActionItem(
        'locomotion_descending_stairs',
        'Descending Stairs Gracefully',
        'Stepping downward with poised posture and downward gaze',
        'Descending stairs with fluid graceful footing, posture poised tall, looking downward towards the next step with serene calm',
        'locomotion_movement'
      ),
      createActionItem(
        'locomotion_strut_fashion',
        'Runway Model Strut',
        'Confident high-fashion catwalk stride with hip sway',
        'Strutting forward in a fierce catwalk stride, placing feet in a precise straight line with subtle hip sway and locked eye contact',
        'locomotion_movement'
      ),
      createActionItem(
        'locomotion_pacing_thinking',
        'Pacing While Contemplating',
        'Walking back and forth with hand to chin in deep thought',
        'Pacing back and forth slowly with head lowered, one hand stroking chin in deep contemplation, brows softly furrowed',
        'locomotion_movement'
      ),
      createActionItem(
        'locomotion_stepping_stones',
        'Leaping Across Stepping Stones',
        'Balancing and hopping between stones across shallow water',
        'Hopping lightly from one stepping stone to the next across water, arms extended wide for balance, focused and joyful',
        'locomotion_movement'
      ),
      createActionItem(
        'locomotion_turning_around',
        'Mid-Stride Turnaround',
        'Pivoting mid-step with hair and clothes catching momentum',
        'Pivoting around sharply mid-stride on the ball of the foot, hair and clothing floating with dynamic rotational momentum',
        'locomotion_movement'
      ),
      createActionItem(
        'locomotion_wading_water',
        'Wading Through Shallow Water',
        'Stepping through ankle-deep water lifting knees high',
        'Wading through ankle-deep sparkling water with lifted steps, water splashing around shins, looking down with delighted smile',
        'locomotion_movement'
      ),
      createActionItem(
        'locomotion_walking_rain',
        'Walking Under Umbrella',
        'Holding open umbrella with steady pace through light rain',
        'Walking steadily forward holding an open umbrella angled overhead, listening to raindrops pattering against the fabric',
        'locomotion_movement'
      ),
      createActionItem(
        'locomotion_power_walk',
        'Fitness Power Walk',
        'High-speed vigorous walking with dynamic arm pumps',
        'Power walking with vigorous stride length, arms pumping rhythmically at sides, core tight and engaged in full fitness mode',
        'locomotion_movement'
      ),
      createActionItem(
        'locomotion_backing_away',
        'Stepping Backward with Raised Hands',
        'Taking measured steps backward with hands raised defensively',
        'Stepping backward cautiously one foot at a time, hands raised at chest height in a gentle calming or yielding gesture',
        'locomotion_movement'
      ),
      createActionItem(
        'locomotion_sprint_dash',
        'Full Energetic Sprint Dash',
        'Explosive fast running leaning forward into velocity',
        'Sprinting at full speed leaning aggressively into forward momentum, pumping knees high, hair streaming back in the wind',
        'locomotion_movement'
      )
    ]
  },
  {
    id: 'modelling_editorial',
    name: 'High Fashion & Editorial Modelling',
    icon: '📸',
    description: 'Vogue-style editorial posing, haute couture angles, sharp geometry, and high-fashion drama',
    actions: [
      createActionItem(
        'model_over_shoulder_gaze',
        'Over-the-Shoulder Intense Gaze',
        'Back turned partially to camera looking back over shoulder',
        'Posing with back turned at a three-quarter angle while turning head sharply over one shoulder with an intense, piercing editorial gaze',
        'modelling_editorial'
      ),
      createActionItem(
        'model_hands_in_pockets_slouch',
        'High Fashion Slouch with Hands in Pockets',
        'Editorial relaxed slouch with thumbs tucked in trouser pockets',
        'Standing in an exaggerated high-fashion slouch with thumbs hooked into pockets, pelvis tilted forward, shoulders lowered with effortless cool',
        'modelling_editorial'
      ),
      createActionItem(
        'model_angular_elbows',
        'Geometric Angular Elbows Pose',
        'Sharp angular arm silhouette framing the torso',
        'Posing with both hands resting on high hips, elbows flared sharply outward creating crisp geometric triangular negative space',
        'modelling_editorial'
      ),
      createActionItem(
        'model_jacket_over_shoulder',
        'Jacket Slung Over Shoulder',
        'Holding tailored jacket hooked by single finger behind back',
        'Holding a tailored jacket slung effortlessly over one shoulder with a hooked index finger, walking forward with commanding presence',
        'modelling_editorial'
      ),
      createActionItem(
        'model_chin_rest_finger',
        'Editorial Finger to Chin Rest',
        'Single manicured index finger resting along jawline',
        'Resting an elongated index finger softly against the edge of jawline and lower lip, head tilted slightly back with sophisticated allure',
        'modelling_editorial'
      ),
      createActionItem(
        'model_dramatic_arch',
        'Dramatic Lumbar Back Arch',
        'Editorial spine extension with head tilted backward',
        'Arching the spine gracefully backward in an editorial contour, one arm tracing upward toward hair, chin raised toward studio spotlight',
        'modelling_editorial'
      ),
      createActionItem(
        'model_profile_silhouette',
        'Sharp Side-Profile Silhouette',
        'Perfect ninety-degree profile highlighting jawline and posture',
        'Standing in a sharp ninety-degree profile stance, elongating neck, shoulders pulled back, casting a sculptural silhouette',
        'modelling_editorial'
      ),
      createActionItem(
        'model_low_angle_power',
        'Low-Angle Dominant Power Stance',
        'Wide stance looking down toward camera with authority',
        'Standing in a wide commanding stance with legs apart, gazing down with haughty high-fashion elegance and statuesque composure',
        'modelling_editorial'
      ),
      createActionItem(
        'model_motion_fabric_twist',
        'Dynamic Motion and Swirling Fabric',
        'Torso twist causing garment fabric to billow and flow',
        'Executing a sudden rotational torso twist that sends the hemlines of the clothing floating dramatically in mid-air',
        'modelling_editorial'
      ),
      createActionItem(
        'model_face_frame_hands',
        'Hands Framing Facial Features',
        'Artistic hand placements framing cheekbones and eyes',
        'Resting delicate palms on either side of face, framing high cheekbones and intense eyes with architectural precision',
        'modelling_editorial'
      ),
      createActionItem(
        'model_collar_grab',
        'High Collar Pull Pose',
        'Holding tailored lapel or high collar close to chin',
        'Gently gripping the lapel or high collar of the outfit with both hands, pulling it close to chin while peeking forward with mystery',
        'modelling_editorial'
      ),
      createActionItem(
        'model_seated_high_fashion',
        'Seated Asymmetrical Stool Pose',
        'Sitting on tall stool with one foot on rung and one extended',
        'Perched on a minimalist stool with one leg bent high on the footrest rung and the other extended long, leaning back with effortless grace',
        'modelling_editorial'
      ),
      createActionItem(
        'model_hair_touch_toss',
        'Editorial Hand in Hair Toss',
        'Running fingers through hair with tilted head and lifted elbow',
        'Weaving fingers deeply through hair at the crown, lifting strands up while tilting head to one side with chic nonchalance',
        'modelling_editorial'
      ),
      createActionItem(
        'model_crouch_editorial',
        'High-Fashion Asymmetric Crouch',
        'Avant-garde one-leg crouch with outstretched arm',
        'Crouching on one heel with the opposite leg extended outward along the floor, resting wrist on knee in an avant-garde runway pose',
        'modelling_editorial'
      ),
      createActionItem(
        'model_leaning_pillar',
        'Leaning Against Studio Column',
        'Side lean against structural column with legs crossed',
        'Leaning one shoulder against a concrete architectural column with ankles crossed, gazing into camera with cool enigmatic confidence',
        'modelling_editorial'
      ),
      createActionItem(
        'model_sunglasses_tip',
        'Tipping Designer Sunglasses',
        'Lowering sunglasses with index finger to look over frames',
        'Lowering dark designer sunglasses halfway down nose with index finger and thumb, making direct captivating eye contact over the rims',
        'modelling_editorial'
      )
    ]
  },
  {
    id: 'modelling_commercial',
    name: 'Commercial & Catalog Poses',
    icon: '✨',
    description: 'Friendly, accessible catalog poses, lifestyle looks, smiling portraits, and warm brand aesthetics',
    actions: [
      createActionItem(
        'commercial_smiling_head_tilt',
        'Warm Smiling Head Tilt',
        'Bright engaging smile with gentle three-degree head tilt',
        'Facing the camera with a bright, radiant smile, tilting head gently to the side with friendly, approachable warmth',
        'modelling_commercial'
      ),
      createActionItem(
        'commercial_thumbs_belt_loops',
        'Thumbs in Belt Loops',
        'Casual relaxed stance with thumbs hooked in waistline',
        'Standing with thumbs casually hooked into belt loops or waistband, shifting weight naturally to right hip with friendly grin',
        'modelling_commercial'
      ),
      createActionItem(
        'commercial_crossed_arms_friendly',
        'Approachable Crossed Arms',
        'Soft loose arm cross with welcoming cheerful demeanor',
        'Folding arms comfortably across chest without tension, leaning slightly forward with a warm welcoming expression',
        'modelling_commercial'
      ),
      createActionItem(
        'commercial_two_handed_wave',
        'Cheerful Two-Handed Wave',
        'Raising hands to wave warmly in cheerful greeting',
        'Raising both hands near shoulders in an enthusiastic, cheerful wave with sparkling eyes and a wide happy smile',
        'modelling_commercial'
      ),
      createActionItem(
        'commercial_seated_steps',
        'Sitting on Steps with Elbows on Knees',
        'Relaxed lifestyle sitting pose on wooden or stone front steps',
        'Sitting on outdoor front steps with elbows resting on knees, leaning forward with an open, friendly conversation posture',
        'modelling_commercial'
      ),
      createActionItem(
        'commercial_tote_bag_shoulder',
        'Holding Canvas Tote on Forearm',
        'Hooking stylish tote bag over forearm while walking',
        'Holding a stylish canvas shopping tote bag hooked over forearm, turning slightly toward camera with a cheerful shopping grin',
        'modelling_commercial'
      ),
      createActionItem(
        'commercial_laughing_candid',
        'Natural Candid Laugh',
        'Spontaneous laugh with head tilted back slightly',
        'Laughing naturally with head thrown back slightly in genuine amusement, one hand touching chest, radiating authentic joy',
        'modelling_commercial'
      ),
      createActionItem(
        'commercial_hands_on_hips',
        'Hands on Hips Confident Stance',
        'Upright upbeat stance with hands resting firmly on hips',
        'Standing upright with hands planted firmly on hips, chest lifted, smiling with buoyant optimism and active energy',
        'modelling_commercial'
      ),
      createActionItem(
        'commercial_checking_watch',
        'Checking Wristwatch with Grin',
        'Glancing down at wrist with lively animated expression',
        'Glancing down at a sleek wristwatch on wrist while lifting head with an animated, punctual smile as if on the way to meet friends',
        'modelling_commercial'
      ),
      createActionItem(
        'commercial_coffee_cup_walk',
        'Walking with Takeaway Coffee Cup',
        'Holding paper coffee cup in one hand with energetic stride',
        'Walking briskly while holding a reusable coffee tumbler in hand, looking off to the side with an active morning commuter smile',
        'modelling_commercial'
      ),
      createActionItem(
        'commercial_cozy_cardigan_wrap',
        'Wrapping Cozy Cardigan Together',
        'Pulling soft sweater edges together around chest',
        'Gathering the soft front lapels of a knit sweater warmly around chest with both hands, smiling with cozy seasonal contentment',
        'modelling_commercial'
      ),
      createActionItem(
        'commercial_peace_sign',
        'Playful Peace Sign Pose',
        'Holding up a V peace sign next to eye with wink',
        'Raising a two-finger peace sign playfully beside cheekbone while winking cheekily into the camera with vibrant charm',
        'modelling_commercial'
      ),
      createActionItem(
        'commercial_looking_up_curious',
        'Looking Upward with Wonder',
        'Gazing upward towards the light with inspired expression',
        'Tilting face upward towards soft natural light with wide sparkling eyes and an inspired, dreamy smile of optimism',
        'modelling_commercial'
      ),
      createActionItem(
        'commercial_backpack_straps',
        'Holding Backpack Shoulder Straps',
        'Hooking thumbs beneath backpack straps with adventurous poise',
        'Hooking thumbs comfortably beneath the padded straps of a daypack backpack, standing ready for a fun day out',
        'modelling_commercial'
      ),
      createActionItem(
        'commercial_hands_clasped_front',
        'Gentle Hands Clasped in Front',
        'Holding hands together in front with polite modest warmth',
        'Standing tall with hands gently clasped at waist level, smiling softly with polite, graceful hospitality and poise',
        'modelling_commercial'
      ),
      createActionItem(
        'commercial_pointing_camera',
        'Playful Pointing Toward Camera',
        'Pointing index finger forward with wink and cheerful grin',
        'Pointing one index finger playfully forward toward the viewer with a knowing wink and enthusiastic, inviting grin',
        'modelling_commercial'
      )
    ]
  },
  {
    id: 'daily_chores',
    name: 'Daily Domestic Life & Home Tasks',
    icon: '🧹',
    description: 'Realistic household activities, chores, cooking, cleaning, organizing, and daily routines',
    actions: [
      createActionItem(
        'chore_brewing_coffee',
        'Pouring Fresh Pour-Over Coffee',
        'Pouring hot water from gooseneck kettle over coffee filter',
        'Holding a sleek gooseneck kettle with precision, slowly pouring steaming water in circular motion over ground coffee in a glass dripper',
        'daily_chores'
      ),
      createActionItem(
        'chore_watering_plants',
        'Watering Indoor Houseplants',
        'Using a small watering can to water potted green plants',
        'Holding a brass watering can with a steady hand, gently sprinkling water onto the soil of lush potted indoor houseplants on a windowsill',
        'daily_chores'
      ),
      createActionItem(
        'chore_chopping_vegetables',
        'Chopping Fresh Vegetables on Wooden Board',
        'Slicing colorful vegetables with chef knife on cutting board',
        'Holding a chef knife with culinary grip, slicing crisp bell peppers and carrots on a thick wooden butcher block with focused care',
        'daily_chores'
      ),
      createActionItem(
        'chore_wiping_counter',
        'Wiping Kitchen Countertop Clean',
        'Wiping marble countertop with a clean microfiber cloth',
        'Wiping down a sparkling kitchen counter with circular motions using a damp cloth, admiring the clean tidy surface',
        'daily_chores'
      ),
      createActionItem(
        'chore_dusting_bookshelf',
        'Dusting High Bookshelf',
        'Reaching up with feather duster to clean book spines',
        'Reaching up on tiptoes with a fluffy feather duster to carefully dust the top row of hardcovers on a tall wooden bookshelf',
        'daily_chores'
      ),
      createActionItem(
        'chore_folding_laundry',
        'Folding Clean Cotton Laundry',
        'Neatly folding fresh warm shirts and stacking on table',
        'Folding a crisp cotton garment on a wooden laundry table, smoothing the fabric with palms and stacking into a tidy pile',
        'daily_chores'
      ),
      createActionItem(
        'chore_arranging_flowers',
        'Arranging Fresh Flowers in Ceramic Vase',
        'Trimming flower stems and placing into water-filled vase',
        'Trimming fresh flower stems with floral shears and arranging colorful blossoms into a ceramic vase with artistic precision',
        'daily_chores'
      ),
      createActionItem(
        'chore_washing_dishes',
        'Washing Dishes in Kitchen Sink',
        'Lathering porcelain plate with sponge under running faucet',
        'Holding a porcelain dish under running warm water at the sink, scrubbing with a foamy sponge with cheerful domestic calm',
        'daily_chores'
      ),
      createActionItem(
        'chore_brushing_hair',
        'Brushing Hair Before Vanity Mirror',
        'Running wooden paddle brush through hair watching mirror',
        'Sitting before an illuminated vanity mirror, running a wooden brush smoothly through long hair while gazing at reflection',
        'daily_chores'
      ),
      createActionItem(
        'chore_checking_fridge',
        'Browsing Open Refrigerator',
        'Standing before open illuminated fridge deciding on snacks',
        'Standing in the kitchen with refrigerator door held open, illuminated by interior glow while inspecting fresh produce on shelves',
        'daily_chores'
      ),
      createActionItem(
        'chore_typing_laptop',
        'Working on Laptop at Wooden Desk',
        'Typing focused at desk with coffee mug nearby',
        'Typing attentively on a modern slim laptop at a sunlit wooden desk, resting fingers on the home keys with productive focus',
        'daily_chores'
      ),
      createActionItem(
        'chore_writing_journal',
        'Writing in Leather Journal with Fountain Pen',
        'Inscribing thoughts into open notebook at table',
        'Writing thoughtfully in an open bound journal with an ink fountain pen, head tilted down in quiet introspective reflection',
        'daily_chores'
      ),
      createActionItem(
        'chore_unpacking_groceries',
        'Unpacking Fresh Grocery Bag',
        'Lifting fresh fruits and artisan bread from brown paper bag',
        'Lifting fresh crisp baguettes and ripe citrus fruits out of a brown paper grocery bag onto the kitchen island counter',
        'daily_chores'
      ),
      createActionItem(
        'chore_ironing_shirt',
        'Ironing Cotton Button-Down Shirt',
        'Pressing hot steam iron smoothly over collar and sleeves',
        'Gliding a steaming hot iron smoothly across the collar of a crisp shirt on an ironing board, smoothing out all creases',
        'daily_chores'
      ),
      createActionItem(
        'chore_lighting_candle',
        'Lighting Scented Candle with Match',
        'Striking long wooden match and lighting aromatic candle',
        'Striking a long wooden match to produce a warm golden flame, gently lighting the wick of a scented jar candle on coffee table',
        'daily_chores'
      ),
      createActionItem(
        'chore_making_bed',
        'Tucking In Crisp Bed Sheets',
        'Straightening duvet and smoothing decorative pillows',
        'Pulling up a clean linen duvet and smoothing out wrinkles across the mattress, placing decorative pillows neatly against headboard',
        'daily_chores'
      )
    ]
  },
  {
    id: 'culinary_cafe',
    name: 'Culinary, Cooking & Cafe Moments',
    icon: '☕',
    description: 'Cafe ambiance, gourmet food preparation, tasting delicacies, tea rituals, and pastry treats',
    actions: [
      createActionItem(
        'culinary_sipping_matcha',
        'Sipping Warm Matcha Latte with Two Hands',
        'Holding warm ceramic mug with both hands taking a sip',
        'Cupping a warm ceramic mug with both hands, gently bringing it to lips to take a cozy sip of frothy green matcha latte',
        'culinary_cafe'
      ),
      createActionItem(
        'culinary_biting_croissant',
        'Biting Into a Crisp Butter Croissant',
        'Holding flaky golden pastry taking a delicious bite',
        'Holding a flaky, golden-brown croissant close to mouth, taking a delicate crisp bite with closed eyes savoring the buttery flavor',
        'culinary_cafe'
      ),
      createActionItem(
        'culinary_pouring_tea',
        'Pouring Tea from Porcelain Teapot',
        'Tilting ornate teapot pouring amber tea into teacup',
        'Lifting an ornate porcelain teapot with one hand and resting finger on lid, gracefully pouring steaming amber tea into a fine teacup',
        'culinary_cafe'
      ),
      createActionItem(
        'culinary_kneading_dough',
        'Kneading Bread Dough on Floured Surface',
        'Pressing palms into soft elastic dough dusting with flour',
        'Pressing the heels of hands firmly into soft bread dough on a flour-dusted marble pastry board, folding and turning with rhythmic skill',
        'culinary_cafe'
      ),
      createActionItem(
        'culinary_sprinkling_herbs',
        'Sprinkling Fresh Chopped Herbs',
        'Pinching fresh green herbs between fingers over plate',
        'Pinching finely chopped fresh parsley and basil between fingertips, scattering them gracefully from high above over a plated dish',
        'culinary_cafe'
      ),
      createActionItem(
        'culinary_smelling_coffee',
        'Smelling Fresh Roasted Coffee Beans',
        'Cupping handful of whole roasted coffee beans to inhale aroma',
        'Holding a wooden bowl of dark roasted coffee beans close to nose with both hands, inhaling the rich aromatic fragrance with a smile',
        'culinary_cafe'
      ),
      createActionItem(
        'culinary_rolling_pasta',
        'Rolling Fresh Pasta Dough with Wooden Pin',
        'Rolling thin sheet of yellow pasta dough on table',
        'Rolling a smooth wooden rolling pin across yellow egg pasta dough, rolling it out into a paper-thin translucent sheet on the counter',
        'culinary_cafe'
      ),
      createActionItem(
        'culinary_tasting_soup',
        'Tasting Simmering Soup with Wooden Spoon',
        'Blowing gently on spoonful of hot broth to taste',
        'Lifting a wooden spoon filled with simmering vegetable soup from pot, blowing gently on the steam before tasting with analytical delight',
        'culinary_cafe'
      ),
      createActionItem(
        'culinary_piping_cupcake',
        'Piping Swirled Frosting on Cupcake',
        'Squeezing decorative pastry piping bag over sweet pastry',
        'Holding a pastry piping bag with both hands, squeezing smooth vanilla buttercream frosting in an artistic swirl atop a fresh cupcake',
        'culinary_cafe'
      ),
      createActionItem(
        'culinary_holding_wine',
        'Swirling and Holding Wine Glass by Stem',
        'Holding crystal wine glass by the delicate stem',
        'Holding a clear crystal glass of red wine by its slender stem, gently swirling the liquid to observe legs with refined connoisseur poise',
        'culinary_cafe'
      ),
      createActionItem(
        'culinary_slicing_cheese',
        'Slicing Artisan Cheese Wedge',
        'Cutting slice of gourmet brie cheese on wooden board',
        'Using a specialty cheese knife to slice a thin sliver from a wheel of artisan brie on a rustic wooden platter with cluster of grapes',
        'culinary_cafe'
      ),
      createActionItem(
        'culinary_mixing_salad',
        'Tossing Fresh Salad with Wooden Tongs',
        'Mixing crisp leafy greens and cherry tomatoes in large bowl',
        'Using a pair of carved wooden salad servers to toss crisp leafy greens, shaved radishes, and vinaigrette in a large ceramic bowl',
        'culinary_cafe'
      ),
      createActionItem(
        'culinary_cocktail_garnish',
        'Placing Citrus Garnish on Cocktail Glass',
        'Carefully placing dehydrated orange wheel onto drink rim',
        'Using small bar tweezers to place a dehydrated citrus wheel and fresh mint sprig onto the rim of an iced sparkling cocktail glass',
        'culinary_cafe'
      ),
      createActionItem(
        'culinary_flipping_pancake',
        'Flipping Golden Pancake in Pan',
        'Flipping pancake in mid-air above non-stick skillet',
        'Flipping a golden fluffy pancake up into the air with a swift wrist flick of the skillet, catching it cleanly with a joyful grin',
        'culinary_cafe'
      ),
      createActionItem(
        'culinary_sharing_dessert',
        'Offering Forkful of Berry Cake',
        'Holding small dessert fork forward with bite of cake',
        'Extending a delicate dessert fork topped with a bite of berry cheesecake and raspberry sauce towards the camera with a playful smile',
        'culinary_cafe'
      ),
      createActionItem(
        'culinary_whisking_batter',
        'Whisking Cake Batter in Glass Bowl',
        'Vigorously whisking smooth golden batter with wire whisk',
        'Tucking a large glass mixing bowl under one arm while whipping cake batter rapidly with a stainless steel wire whisk until satiny smooth',
        'culinary_cafe'
      )
    ]
  }
];
