import { ActionGroup, createActionItem } from './types';

export const GROUPS_SPORTS_AND_OUTDOORS: ActionGroup[] = [
  {
    id: 'sports_outdoor',
    name: 'Outdoor Sports & Ball Games',
    icon: '⚽',
    description: 'Soccer, tennis, basketball, volleyball, baseball, badminton, and outdoor team sports',
    actions: [
      createActionItem(
        'ball_soccer_dribble',
        'Dribbling Soccer Ball with Agile Footwork',
        'Dribbling leather soccer ball between cones with light touches',
        'Dribbling a vintage leather soccer ball with swift, agile inside-and-outside foot touches across the green grass',
        'sports_outdoor'
      ),
      createActionItem(
        'ball_soccer_curling_kick',
        'Striking Soccer Ball with Curving Instep',
        'Kicking soccer ball towards goal with bent knee and arm out',
        'Planting left foot firmly beside the ball and striking with right instep to curve a soccer ball toward the upper corner of the net',
        'sports_outdoor'
      ),
      createActionItem(
        'ball_tennis_overhead_serve',
        'Overhead Tennis Serve Extension',
        'Tossing tennis ball high and striking with racquet at apex',
        'Tossing a neon yellow tennis ball high into the air and extending fully upwards to hit a powerful flat serve with graphite racquet',
        'sports_outdoor'
      ),
      createActionItem(
        'ball_tennis_forehand_stroke',
        'Topspin Tennis Forehand with Follow-Through',
        'Hitting low-to-high forehand stroke with racquet over shoulder',
        'Stepping into a deep athletic semi-open stance and driving a heavy topspin forehand across the court with full over-the-shoulder follow-through',
        'sports_outdoor'
      ),
      createActionItem(
        'ball_basketball_jump_shot',
        'Basketball Elevation Jump Shot',
        'Leaping vertically to release basketball with wrist snap',
        'Leaping high in the air at the peak of a jump shot, releasing the basketball with high elbow alignment and elegant wrist follow-through goose neck',
        'sports_outdoor'
      ),
      createActionItem(
        'ball_basketball_crossover',
        'Low Crossover Dribble Between Legs',
        'Dribbling basketball low through legs with sudden direction change',
        'Executing a lightning-quick crossover dribble between legs in a low athletic stance, exploding past the defender with sharp footwork',
        'sports_outdoor'
      ),
      createActionItem(
        'ball_volleyball_jump_set',
        'Volleyball Fingertip Jump Set',
        'Setting volleyball overhead with soft ten-finger touch',
        'Leaping into the air to set a volleyball with soft ten-fingertip precision, pushing the ball into a high parabolic arc for the hitter',
        'sports_outdoor'
      ),
      createActionItem(
        'ball_volleyball_spike',
        'Overhead Volleyball Spike at Net',
        'Jumping above volleyball net and hammering ball downward',
        'Soaring above the net with arched back and swinging right arm downward with explosive force to spike the volleyball into the opponent’s court',
        'sports_outdoor'
      ),
      createActionItem(
        'ball_badminton_smash',
        'Leaping Badminton Overhead Smash',
        'Jumping into air to smash shuttlecock with light racquet',
        'Leaping into the air to hit a steep downward badminton smash with a carbon fiber racquet, snapping wrist with whip-like speed',
        'sports_outdoor'
      ),
      createActionItem(
        'ball_frisbee_forehand_flick',
        'Frisbee Disc Forehand Flick Toss',
        'Snapping wrist sideways to launch flying disc with spin',
        'Stepping out low to the side and snapping wrist to release a flying disc with clean horizontal spin across the open field',
        'sports_outdoor'
      ),
      createActionItem(
        'ball_baseball_batting_stance',
        'Baseball Batting Stance with Raised Bat',
        'Holding wooden bat high over rear shoulder in batter’s box',
        'Standing in the batter’s box with knees flexed, holding a wooden baseball bat raised high behind ear, eyeing the pitcher with sharp focus',
        'sports_outdoor'
      ),
      createActionItem(
        'ball_baseball_catch_glove',
        'Catching Baseball in Leather Mitt',
        'Reaching out with leather fielding glove to catch fly ball',
        'Reaching upward with a worn leather baseball glove to snatch a high fly ball out of the air, securing the catch with opposite hand',
        'sports_outdoor'
      ),
      createActionItem(
        'ball_golf_swing_finish',
        'Golf Drive Follow-Through Pose',
        'Holding poised golf finish with club wrapped behind neck',
        'Holding a balanced, classic golf swing follow-through with torso turned toward fairway, club wrapped gracefully around shoulders, eyes tracking the ball',
        'sports_outdoor'
      ),
      createActionItem(
        'ball_rugby_punt_kick',
        'Punting Rugby Ball High Downfield',
        'Dropping oval rugby ball and kicking high spiraling punt',
        'Dropping an oval leather rugby ball from hands and striking it with laces to send a soaring end-over-end punt high into the sky',
        'sports_outdoor'
      ),
      createActionItem(
        'ball_bowling_release',
        'Ten-Pin Bowling Low Slide Release',
        'Sliding on left shoe and releasing bowling ball down lane',
        'Sliding on one shoe in a low knee bend at the foul line, releasing a polished bowling ball smoothly onto the oiled lane with finger lift',
        'sports_outdoor'
      ),
      createActionItem(
        'ball_table_tennis_backhand',
        'Table Tennis Backhand Flick',
        'Snapping rubber paddle over table on fast ping pong return',
        'Leaning over the green ping pong table and snapping paddle forward with a quick backhand flick, brushing the white ball with heavy spin',
        'sports_outdoor'
      )
    ]
  },
  {
    id: 'athletics_track',
    name: 'Track, Field & Gymnastics',
    icon: '🏃‍♀️',
    description: 'Sprints, hurdles, jumps, pole vault, gymnastics apparatus, floor routines, and track events',
    actions: [
      createActionItem(
        'track_starting_blocks',
        'Sprinter Crouch in Starting Blocks',
        'Crouching on track with fingertips on white line and hips raised',
        'Crouching in track starting blocks in the set position, fingertips spread along the chalk line, hips lifted, muscles coiled like a spring',
        'athletics_track'
      ),
      createActionItem(
        'track_hurdle_clearance',
        'Full-Stride Hurdle Clearance',
        'Extending lead leg straight forward over track hurdle',
        'Soaring over a track hurdle with lead leg extended flat forward, trail leg tucked horizontally, torso leaning low to minimize air resistance',
        'athletics_track'
      ),
      createActionItem(
        'track_high_jump_fosbury',
        'Fosbury Flop High Jump Arch',
        'Arching backward horizontally over high jump bar',
        'Arching spine backward horizontally over the high jump crossbar at peak elevation, clearing the bar with centimeter precision',
        'athletics_track'
      ),
      createActionItem(
        'track_long_jump_landing',
        'Long Jump Sandpit Landing',
        'Kicking heels forward into sand with outstretched arms',
        'Extending both legs far forward in mid-air right before digging heels deeply into the raked sandpit, throwing arms forward for maximum distance',
        'athletics_track'
      ),
      createActionItem(
        'track_javelin_throw_pullback',
        'Javelin Throw Pullback Stride',
        'Striding sideways with javelin held back at shoulder height',
        'Cross-stepping down the runway with javelin drawn far back behind shoulder, planting front foot and whipping torso into a massive throw',
        'athletics_track'
      ),
      createActionItem(
        'track_relay_baton_pass',
        'Blind Relay Baton Handoff',
        'Reaching backward with open palm to receive aluminum baton',
        'Sprinting at top speed while reaching left hand back blindly with open palm to cleanly receive the red aluminum relay baton from teammate',
        'athletics_track'
      ),
      createActionItem(
        'gymnast_balance_beam_walk',
        'Gymnastics Balance Beam Tiptoe Walk',
        'Walking on tiptoes along four-inch wide wooden beam with arms out',
        'Walking on high relevé tiptoes along a wooden gymnastics balance beam, arms held wide in horizontal alignment, chin held proud and steady',
        'athletics_track'
      ),
      createActionItem(
        'gymnast_uneven_bars_handstand',
        'Uneven Bars Giant Swing to Handstand',
        'Swinging in full circle around high bar into straight vertical',
        'Swinging in a continuous giant circle around the fiberglass gymnastics high bar, locking into a vertical handstand at the apex',
        'athletics_track'
      ),
      createActionItem(
        'gymnast_floor_split_leap',
        'Gymnastics Ring Leap on Spring Floor',
        'Leaping high in air with back leg arched to touch head',
        'Leaping off the blue spring floor in a switch-ring leap, front leg extended horizontally and rear leg arched back toward crown of head',
        'athletics_track'
      ),
      createActionItem(
        'gymnast_rings_iron_cross',
        'Still Rings Iron Cross Hold',
        'Holding arms straight horizontally supporting body on suspended rings',
        'Suspended between still rings with arms locked completely straight horizontally in an iron cross, torso vertical and perfectly motionless',
        'athletics_track'
      ),
      createActionItem(
        'gymnast_vault_hurdle_punch',
        'Vault Hurdle Launch off Springboard',
        'Punching both feet into springboard bouncing toward vault table',
        'Punching balls of both feet into the carpeted springboard with maximum power, launching horizontally forward towards the vaulting table',
        'athletics_track'
      ),
      createActionItem(
        'gymnast_ribbon_spiral',
        'Rhythmic Gymnastics Satin Ribbon Spiral',
        'Swirling long pink satin ribbon in continuous vertical spirals',
        'Swirling a six-meter satin ribbon wand in continuous, hypnotic vertical spirals around body while balancing on one toe',
        'athletics_track'
      ),
      createActionItem(
        'track_finish_line_tape',
        'Breaking Finish Line Ribbon in Victory',
        'Leaning chest forward snapping red finish line tape',
        'Leaning chest forward across the finish line to snap the red ribbon tape, raising both arms skyward in ecstatic competitive victory',
        'athletics_track'
      ),
      createActionItem(
        'gymnast_salute_judges',
        'Gymnastics Official Presentation Salute',
        'Standing straight with both arms raised in V-formation to judges',
        'Standing at attention on the mat, lifting both arms into a clean V-shape overhead with head held high and smiling proudly toward judges',
        'athletics_track'
      ),
      createActionItem(
        'track_pole_vault_plant',
        'Pole Vault Box Plant and Inversion',
        'Planting bendable fiberglass pole into metal box and tucking up',
        'Planting the tip of a fiberglass pole into the sunken vault box, riding the deep pole bend while tucking knees skyward toward the crossbar',
        'athletics_track'
      ),
      createActionItem(
        'gymnast_pommel_horse_circle',
        'Pommel Horse Double Leg Circles',
        'Rotating both legs in horizontal circle above leather horse',
        'Supporting body weight on pommel handles with arms straight, swinging both legs in rapid horizontal circular revolutions above the leather horse',
        'athletics_track'
      )
    ]
  },
  {
    id: 'beach_aquatic',
    name: 'Beach & Coastal Relaxation',
    icon: '🏖️',
    description: 'Sunbathing, ocean surf, sandcastles, coastal strolls, beach towels, seashells, and seaside leisure',
    actions: [
      createActionItem(
        'beach_sunbathing_towel',
        'Sunbathing on Striped Beach Towel',
        'Lying on back on colorful towel wearing sunglasses',
        'Lying on back on a vibrant striped beach towel spread over warm golden sand, wearing stylish dark sunglasses, soaking in the warm coastal sun',
        'beach_aquatic'
      ),
      createActionItem(
        'beach_dipping_toes_surf',
        'Dipping Toes in Foamy Ocean Surf',
        'Standing at water’s edge letting foamy waves wash over ankles',
        'Standing barefoot at the water’s edge, looking down with a delighted smile as cool, bubbly white foam washes gently across ankles and sand',
        'beach_aquatic'
      ),
      createActionItem(
        'beach_building_sandcastle',
        'Sculpting Intricate Sandcastle Towers',
        'Using small spade and bucket to build sandcastle battlements',
        'Kneeling in damp sand using a small plastic spade to carve intricate towers, moats, and battlements on a large sandcastle fortress',
        'beach_aquatic'
      ),
      createActionItem(
        'beach_collecting_seashells',
        'Collecting Seashells in Woven Basket',
        'Bending down to pick up shiny seashell along tide line',
        'Bending down along the receding tide line to pick up a spiral seashell, holding it up to examine delicate mother-of-pearl patterns with a smile',
        'beach_aquatic'
      ),
      createActionItem(
        'beach_applying_sunscreen',
        'Applying Sunscreen to Shoulders',
        'Rubbing white sunscreen lotion across shoulders and collarbones',
        'Rubbing coconut-scented white sunscreen lotion smoothly over shoulders and collarbones while sitting cross-legged under a straw umbrella',
        'beach_aquatic'
      ),
      createActionItem(
        'beach_coconut_straw_sip',
        'Drinking Chilled Coconut Water with Straw',
        'Holding fresh green coconut with colorful straw taking a sip',
        'Holding a fresh carved green coconut decorated with an orchid flower in both hands, taking a sweet refreshing sip through a bamboo straw',
        'beach_aquatic'
      ),
      createActionItem(
        'beach_carrying_surfboard',
        'Carrying Surfboard Under Arm on Sand',
        'Walking along beach with fiberglass surfboard tucked under arm',
        'Walking along the sandy shore carrying a colorful fiberglass surfboard tucked snugly under one arm, wet hair glistening in ocean mist',
        'beach_aquatic'
      ),
      createActionItem(
        'beach_writing_sand_message',
        'Drawing Heart and Message in Wet Sand',
        'Using index finger to trace letters in glistening wet sand',
        'Crouching near the water to draw a large heart and cheerful greeting in the smooth wet sand using an index finger before the tide comes in',
        'beach_aquatic'
      ),
      createActionItem(
        'beach_shaking_towel_sand',
        'Shaking Sand Off Beach Towel in Breeze',
        'Holding two corners of towel flapping vigorously in sea breeze',
        'Holding the top two corners of a large beach towel with both hands, flapping it out into the coastal wind to shake off golden sand grains',
        'beach_aquatic'
      ),
      createActionItem(
        'beach_skipping_stones_waves',
        'Skipping Flat Pebbles Across Calm Waves',
        'Winding up sidearm to skip flat stone across ocean surface',
        'Holding a smooth, flat stone between thumb and index finger, crouching low and flicking wrist sidearm to skip it five times across calm waves',
        'beach_aquatic'
      ),
      createActionItem(
        'beach_volleyball_bump_pass',
        'Beach Volleyball Forearm Bump Pass',
        'Bumping volleyball on sand with locked wrists and bent knees',
        'Knees bent in deep sand, locking forearms together with thumbs aligned to cleanly bump a beach volleyball into the air toward partner',
        'beach_aquatic'
      ),
      createActionItem(
        'beach_tying_sarong_wrap',
        'Tying Patterned Sarong Wrap at Hip',
        'Wrapping colorful sarong cloth around waist and knotting at side',
        'Wrapping a lightweight tropical-print sarong cloth around waist, tying a stylish decorative double knot at the hip with gentle breeze blowing',
        'beach_aquatic'
      ),
      createActionItem(
        'beach_tossing_beach_ball',
        'Tossing Inflatable Beach Ball in Air',
        'Hitting colorful inflatable beach ball upward with open palm',
        'Leaping lightly with both arms raised to swat a large six-color inflatable beach ball high into the bright summer sky with a cheerful laugh',
        'beach_aquatic'
      ),
      createActionItem(
        'beach_rockpool_crabs',
        'Peering into Coastal Rockpool',
        'Looking closely into tidal pool examining tiny starfish and crabs',
        'Crouching low on a sea-weathered rock, shading eyes to peer through crystal-clear tide pool water at anemones and tiny hermit crabs',
        'beach_aquatic'
      ),
      createActionItem(
        'beach_under_umbrella_reading',
        'Lounging Under Beach Umbrella with Book',
        'Reclining in folding beach chair reading paperback novel',
        'Reclining comfortably in a striped canvas beach chair under a wide sun umbrella, flipping a page of an engrossing summer paperback',
        'beach_aquatic'
      ),
      createActionItem(
        'beach_splashing_friends',
        'Playful Water Splash with Cupped Palms',
        'Cupping water in hands and splashing playfully forward',
        'Standing waist-deep in clear ocean water, laughing brightly while cupping hands together to splash a shower of sparkling droplets forward',
        'beach_aquatic'
      )
    ]
  },
  {
    id: 'water_swimming',
    name: 'Swimming & Water Sports',
    icon: '🏊‍♀️',
    description: 'Pool swimming, diving, snorkeling, paddleboarding, surfing, water polo, and aquatic activities',
    actions: [
      createActionItem(
        'swim_freestyle_stroke',
        'Freestyle Front Crawl Arm Recovery',
        'Reaching high elbow out of water during freestyle stroke',
        'Swimming freestyle through crystal clear water with high elbow recovery, head turned to side taking a breath of air, kicking steady white wake',
        'water_swimming'
      ),
      createActionItem(
        'swim_breaststroke_glide',
        'Breaststroke Underwater Glide',
        'Gliding horizontally underwater with hands pressed together',
        'Gliding weightlessly beneath the turquoise pool surface with arms and legs streamlined in breaststroke glide phase, bubbles trailing behind',
        'water_swimming'
      ),
      createActionItem(
        'swim_diving_board_launch',
        'Diving Headfirst off Springboard',
        'Launching from diving board in poised headfirst dive',
        'Launching off the tip of a diving board with body locked in straight streamlined alignment, toes pointed, entering the pool with minimal splash',
        'water_swimming'
      ),
      createActionItem(
        'swim_flamingo_pool_float',
        'Lounging on Pink Flamingo Pool Float',
        'Resting comfortably atop large inflatable pool float with drink',
        'Lounging back across a giant pink inflatable flamingo float in a sunlit pool, trailing one hand lazily in the sparkling blue water',
        'water_swimming'
      ),
      createActionItem(
        'swim_snorkeling_reef',
        'Snorkeling Along Coral Reef',
        'Floating on surface with snorkel mask observing colorful fish',
        'Floating face down on the ocean surface wearing a silicone snorkel mask, breathing through tube while observing coral reef schools of fish below',
        'water_swimming'
      ),
      createActionItem(
        'swim_standup_paddleboard',
        'Paddling on Stand-Up Paddleboard',
        'Balancing upright on wide board dipping carbon paddle',
        'Standing tall in balanced stance on a wide paddleboard on calm glassy lake water, dipping paddle blade smoothly into water to propel forward',
        'water_swimming'
      ),
      createActionItem(
        'swim_riding_ocean_wave',
        'Surfing Across Face of Cresting Wave',
        'Carving surfboard along the steep face of turquoise ocean wave',
        'Carving a surfboard along the steep face of a peeling ocean wave in a low balanced crouch, trailing trailing hand in the water wall',
        'water_swimming'
      ),
      createActionItem(
        'swim_water_polo_shot',
        'Water Polo One-Handed Goal Shot',
        'Rising high above water surface cocking yellow ball behind ear',
        'Treading water vigorously with eggbeater kick to elevate chest high out of water, cocking yellow water polo ball in one hand for a powerful shot',
        'water_swimming'
      ),
      createActionItem(
        'swim_backstroke_float',
        'Floating on Back with Arms Outspread',
        'Relaxing effortlessly on water surface looking at blue sky',
        'Floating effortlessly on back in clear pool water with arms outstretched and eyes closed, enjoying the peaceful weightless buoyancy',
        'water_swimming'
      ),
      createActionItem(
        'swim_adjust_goggles',
        'Adjusting Silicone Swim Goggles on Forehead',
        'Lifting tinted goggles up to forehead resting at pool edge',
        'Resting forearms on the tiled pool gutter, lifting tinted swim goggles up onto forehead with a refreshed smile, shaking droplets from eyelashes',
        'water_swimming'
      ),
      createActionItem(
        'swim_flip_turn_wall',
        'Underwater Somersault Flip Turn',
        'Tucking into tight flip turn and planting feet on pool wall',
        'Tucking into a tight forward somersault underwater at the pool end, planting both feet firmly against the tiled cross wall to push off in streamline',
        'water_swimming'
      ),
      createActionItem(
        'swim_pool_ladder_climb',
        'Climbing Stainless Steel Pool Ladder',
        'Stepping out of pool holding shiny chrome ladder rails',
        'Stepping up onto the steps of a chrome swimming pool ladder, water streaming down skin, holding rails with both hands as you emerge from water',
        'water_swimming'
      ),
      createActionItem(
        'swim_towel_hair_dry',
        'Drying Wet Hair with Fluffy Bath Towel',
        'Wrapping towel around head and rubbing hair vigorously',
        'Standing poolside with a thick fluffy white towel wrapped around shoulders, rubbing damp hair briskly with a refreshed energetic grin',
        'water_swimming'
      ),
      createActionItem(
        'swim_wakeboard_carve',
        'Wakeboard Edge Carve on Motorboat Wake',
        'Holding tow rope handle leaning hard against spray',
        'Gripping the padded wakeboard tow rope handle with both hands, leaning body back against water tension to slice across the boat’s rolling wake',
        'water_swimming'
      ),
      createActionItem(
        'swim_scuba_hand_signal',
        'Giving Scuba OK Hand Signal Underwater',
        'Making circle with thumb and index finger wearing dive gear',
        'Floating mid-water in full scuba gear, making the universal OK circle gesture with thumb and index finger to dive buddy with bright smiling eyes',
        'water_swimming'
      ),
      createActionItem(
        'swim_synchronized_leg_lift',
        'Artistic Swimming Flamingo Leg Lift',
        'Lifting one straight leg vertically above water surface',
        'Sculling palms underwater to support body upside down, extending one straight leg vertically into the air with pointed toe in artistic swim figure',
        'water_swimming'
      )
    ]
  },
  {
    id: 'hiking_nature',
    name: 'Hiking & Wilderness Exploration',
    icon: '🥾',
    description: 'Mountain trails, binoculars, trail maps, compass navigation, scenic vistas, and outdoor exploration',
    actions: [
      createActionItem(
        'hike_trekking_poles_trail',
        'Hiking Mountain Trail with Trekking Poles',
        'Ascending rocky dirt trail with rhythm of carbon trekking poles',
        'Hiking up a winding dirt mountain trail with energetic strides, planting lightweight carbon trekking poles rhythmically with each step',
        'hiking_nature'
      ),
      createActionItem(
        'hike_binoculars_wildlife',
        'Scanning Ridge with Birding Binoculars',
        'Holding binoculars to eyes looking at distant peaks',
        'Standing on an elevated ridge, holding a pair of compact binoculars to eyes to scan distant alpine peaks and soaring raptors',
        'hiking_nature'
      ),
      createActionItem(
        'hike_consulting_paper_map',
        'Consulting Topographic Trail Map',
        'Unfolding paper topo map holding it open with both hands',
        'Holding an open paper topographic trail map with both hands, tracing contour lines with index finger to navigate the upcoming mountain pass',
        'hiking_nature'
      ),
      createActionItem(
        'hike_canteen_water_sip',
        'Drinking from Metal Canteen on Boulder',
        'Sitting on sunlit boulder taking a refreshing drink',
        'Sitting on a sun-warmed granite boulder beside the path, unscrewing the cap of a stainless steel canteen and taking a long refreshing drink',
        'hiking_nature'
      ),
      createActionItem(
        'hike_examining_pinecone',
        'Examining Forest Floor Pinecone and Moss',
        'Crouching to inspect fragrant pinecone and emerald moss',
        'Crouching low on the soft needle-strewn forest floor, holding a large pinecone in palm and gently touching lush emerald moss on tree bark',
        'hiking_nature'
      ),
      createActionItem(
        'hike_stepping_creek_stones',
        'Crossing Mountain Creek on Stepping Stones',
        'Balancing across river stones holding arms out for stability',
        'Hopping carefully from one flat mossy stone to another across a rushing mountain stream, arms outstretched for balance above clear water',
        'hiking_nature'
      ),
      createActionItem(
        'hike_scenic_camera_shot',
        'Photographing Scenic Valley with DSLR Camera',
        'Holding DSLR camera to eye framing panoramic mountain view',
        'Standing at an overlook, bringing a professional DSLR camera to eye to compose a breathtaking landscape photograph of the sunlit valley below',
        'hiking_nature'
      ),
      createActionItem(
        'hike_backpack_strap_adjust',
        'Adjusting Heavy Hiking Backpack Straps',
        'Tightening hip belt and shoulder straps of loaded pack',
        'Standing on the trail, pulling the adjustment straps of a large expedition backpack snug against shoulders and fastening padded hip belt',
        'hiking_nature'
      ),
      createActionItem(
        'hike_shading_eyes_summit',
        'Shading Eyes Looking Toward Mountain Summit',
        'Holding hand over brow gazing up at snow-capped peak',
        'Standing with one hand cupped over brow to shade eyes from bright sun, gazing determinedly upward at the distant rocky summit',
        'hiking_nature'
      ),
      createActionItem(
        'hike_pointing_wildlife',
        'Pointing Excitedly at Distant Wildlife',
        'Tapping partner’s shoulder and pointing out deer on meadow',
        'Tapping companion’s arm softly and pointing quietly toward a meadow where a family of deer grazes peacefully in morning mist',
        'hiking_nature'
      ),
      createActionItem(
        'hike_stepping_over_log',
        'Stepping Over Fallen Forest Tree Trunk',
        'Lifting foot high to step over mossy fallen log on trail',
        'Lifting leg high to carefully step over a large moss-covered fallen log across the path, holding onto a nearby branch for support',
        'hiking_nature'
      ),
      createActionItem(
        'hike_resting_waterfall',
        'Resting by Roaring Mountain Waterfall',
        'Sitting on stone facing misty waterfall feeling cool breeze',
        'Sitting comfortably on a flat stone facing a cascading mountain waterfall, closing eyes to enjoy the refreshing cool water mist against skin',
        'hiking_nature'
      ),
      createActionItem(
        'hike_checking_gps_compass',
        'Checking Magnetic Compass Bearing',
        'Holding clear baseplate compass flat in palm to check azimuth',
        'Holding a liquid-filled magnetic orienteering compass flat in open palm, aligning the needle to north to verify heading along the trail',
        'hiking_nature'
      ),
      createActionItem(
        'hike_wildflower_sniff',
        'Bending Down to Smell Alpine Wildflower',
        'Inhaling fragrance of blooming mountain blossom with smile',
        'Bending down gently beside the trail to cup a bright yellow alpine blossom in hand, inhaling its sweet fragrance with a tranquil smile',
        'hiking_nature'
      ),
      createActionItem(
        'hike_deep_mountain_breath',
        'Inhaling Crisp Pine Air with Outstretched Arms',
        'Standing on cliff edge opening chest to fresh mountain breeze',
        'Standing at a mountain viewpoint with arms spread wide, breathing deeply to fill lungs with crisp, invigorating pine-scented alpine air',
        'hiking_nature'
      ),
      createActionItem(
        'hike_trail_marker_paint',
        'Spotting Colorful Trail Marker on Tree',
        'Looking at painted trail blaze on tree trunk confirming route',
        'Pausing along the forest trail to look up at a painted yellow trail blaze on a birch tree trunk, giving an affirmative nod along the route',
        'hiking_nature'
      )
    ]
  },
  {
    id: 'camping_outdoors',
    name: 'Camping & Survival Skills',
    icon: '⛺',
    description: 'Campfire cooking, roasting marshmallows, stargazing, hammocks, tents, and wilderness living',
    actions: [
      createActionItem(
        'camp_roasting_marshmallow',
        'Roasting Marshmallow on Stick Over Campfire',
        'Rotating wooden skewer with marshmallow above glowing embers',
        'Sitting on a log by the campfire, holding a wooden stick to slowly rotate a marshmallow above glowing orange coals until golden-brown and gooey',
        'camping_outdoors'
      ),
      createActionItem(
        'camp_gathering_firewood',
        'Carrying Bundle of Dry Firewood Twigs',
        'Cradling bundle of kindling and dry branches in arms',
        'Walking back into camp cradling an armful of dry birch kindling and pine branches to feed the evening campfire',
        'camping_outdoors'
      ),
      createActionItem(
        'camp_stirring_cast_iron_stew',
        'Stirring Stew in Dutch Oven Over Fire',
        'Stirring simmering camp stew with wooden spoon wearing glove',
        'Wearing a heavy leather cooking glove, using a long wooden spoon to stir a hearty vegetable stew simmering in a black cast-iron Dutch oven over embers',
        'camping_outdoors'
      ),
      createActionItem(
        'camp_acoustic_guitar_fire',
        'Playing Acoustic Guitar by Campfire Glow',
        'Strumming guitar while friends listen around campfire',
        'Sitting cross-legged on a wool blanket by the crackling fire, strumming a warm acoustic guitar rhythm while friends hum along in the twilight',
        'camping_outdoors'
      ),
      createActionItem(
        'camp_stargazing_sleeping_bag',
        'Stargazing Lying on Sleeping Bag',
        'Lying under stars pointing out constellations in night sky',
        'Lying atop an unzipped sleeping bag on the grass, pointing upward at the Milky Way with companion to trace the Big Dipper and Orion',
        'camping_outdoors'
      ),
      createActionItem(
        'camp_pitching_tent_pegs',
        'Hammering Metal Tent Stakes into Ground',
        'Kneeling with mallet to drive steel stakes through tent loops',
        'Kneeling on the grass with a rubber mallet, driving metal tent stakes firmly into the ground to secure the guy lines of a dome tent',
        'camping_outdoors'
      ),
      createActionItem(
        'camp_boiling_kettle_fire',
        'Pouring Boiling Water from Camp Kettle into Enamel Mug',
        'Pouring steaming water into speckled blue camping mug',
        'Lifting a sooty metal camp kettle from the fire grate, pouring steaming boiling water into a speckled blue enamel mug filled with cocoa powder',
        'camping_outdoors'
      ),
      createActionItem(
        'camp_flashlight_into_woods',
        'Shining LED Flashlight into Evening Woods',
        'Holding bright beam flashlight illuminating forest path',
        'Standing at the edge of the campsite holding a heavy LED flashlight, casting a bright beam of light into the dark pine forest canopy',
        'camping_outdoors'
      ),
      createActionItem(
        'camp_whittling_stick_knife',
        'Whittling Wooden Figurine with Pocket Knife',
        'Carving stick with small folding pocket knife by lantern',
        'Sitting on a camp chair by lantern light, carefully carving a smooth wooden wand using a folding pocket knife with steady thumb control',
        'camping_outdoors'
      ),
      createActionItem(
        'camp_lounging_hammock',
        'Lounging in Striped Tree Hammock with Book',
        'Relaxing in woven hammock strung between two pine trees',
        'Cocooned cozily in a colorful woven hammock strung between two sturdy pine trees, gently swaying while reading a paperback book',
        'camping_outdoors'
      ),
      createActionItem(
        'camp_chopping_kindling_axe',
        'Splitting Dry Kindling with Small Camp Hatchet',
        'Splitting wooden log on stump with controlled axe strike',
        'Kneeling beside a wooden chopping stump, using a small camp hatchet with controlled precision to split pine logs into thin kindling sticks',
        'camping_outdoors'
      ),
      createActionItem(
        'camp_tying_tarp_knot',
        'Tying Taut-Line Hitch Knot for Rain Tarp',
        'Threading paracord rope around tree trunk to tension rain fly',
        'Tying an adjustable taut-line hitch knot with nylon paracord around a pine tree trunk to stretch a protective rain tarp taut over the campsite',
        'camping_outdoors'
      ),
      createActionItem(
        'camp_unzipping_morning_tent',
        'Unzipping Tent Door in Morning Mist',
        'Peeking out of tent zipper into misty sunrise campsite',
        'Pulling down the zipper of the tent rainfly, peeking head outside into the cool morning mist as golden sunlight filters through pine branches',
        'camping_outdoors'
      ),
      createActionItem(
        'camp_warming_hands_flames',
        'Hovering Palms Over Fire for Warmth',
        'Holding cold hands out over crackling flames in early morning',
        'Standing near the crackling campfire, extending palms outward toward the gentle warmth of the flames to chase away the early morning chill',
        'camping_outdoors'
      ),
      createActionItem(
        'camp_hanging_lantern_branch',
        'Hanging Gas Lantern on Tree Branch Hook',
        'Lifting glowing camping lantern onto wooden branch',
        'Reaching up to hang a glowing amber gas camping lantern on an S-hook from an overhanging pine branch, illuminating the picnic table',
        'camping_outdoors'
      ),
      createActionItem(
        'camp_eating_skewer_fire',
        'Biting Grilled Skewer by Campfire',
        'Eating grilled bell pepper and mushroom skewer off wooden stick',
        'Holding a charred wooden skewer of grilled vegetables and tofu in hand, taking a delicious smoky bite with a satisfied outdoor appetite',
        'camping_outdoors'
      )
    ]
  }
];
