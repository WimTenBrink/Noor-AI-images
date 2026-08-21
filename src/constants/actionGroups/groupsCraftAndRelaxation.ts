import { ActionGroup, createActionItem } from './types';

export const GROUPS_CRAFT_AND_RELAXATION: ActionGroup[] = [
  {
    id: 'wellness_spa',
    name: 'Wellness, Spa & Self-Care',
    icon: '🧖‍♀️',
    description: 'Aromatherapy, cucumber eye masks, hot stone massage, herbal foot soaks, silk robes, and tranquil relaxation',
    actions: [
      createActionItem(
        'spa_cucumber_eye_mask',
        'Resting with Cool Cucumber Slices on Eyes',
        'Lying back in plush spa lounger with green cucumber slices over eyelids',
        'Reclining back on a cushioned white spa lounger in a soft terrycloth robe, resting cool green cucumber slices over closed eyes with peaceful breathing',
        'wellness_spa'
      ),
      createActionItem(
        'spa_aromatherapy_diffuser',
        'Inhaling Essential Oil Mist from Ultrasonic Diffuser',
        'Hovering face near gentle vapor plume of lavender and eucalyptus',
        'Sitting comfortably beside a ceramic ultrasonic aroma diffuser, closing eyes and inhaling the soothing fragrant vapor mist of lavender and eucalyptus oils',
        'wellness_spa'
      ),
      createActionItem(
        'spa_hot_stone_back_rest',
        'Resting Smooth Heated Basalt River Stones on Back',
        'Lying prone on massage table with warm polished stones along spine',
        'Lying face down comfortably on a heated massage table with a soft towel, warm smooth black basalt river stones aligned along spine radiating therapeutic warmth',
        'wellness_spa'
      ),
      createActionItem(
        'spa_herbal_foot_soak',
        'Soaking Feet in Warm Rose Petal Water Basin',
        'Dipping bare feet into wooden basin filled with warm water and flowers',
        'Sitting on a comfortable bamboo bench, resting bare feet in a round cedar soaking tub filled with warm water, floating pink rose petals, and Epsom salts',
        'wellness_spa'
      ),
      createActionItem(
        'spa_applying_facial_clay_mask',
        'Applying Green Tea Clay Mask with Soft Brush',
        'Brushing smooth mineral clay mask evenly across cheeks and forehead',
        'Looking into a lighted vanity mirror, using a flat silicone beauty brush to spread a smooth green tea detoxifying clay mask evenly across forehead and cheeks',
        'wellness_spa'
      ),
      createActionItem(
        'spa_tying_waffle_robe',
        'Fastening Belt of Soft White Waffle-Knit Spa Robe',
        'Tying comfortable cotton sash around waist stepping out of sauna',
        'Stepping out of the warm cedar sauna, wrapping a plush white waffle-knit cotton robe around body and tying the belt sash snugly with a refreshed glow',
        'wellness_spa'
      ),
      createActionItem(
        'spa_massaging_temples_oil',
        'Gently Massaging Temples with Peppermint Oil',
        'Circling fingertips softly on temples relieving stress with closed eyes',
        'Resting elbows on table with eyes closed, circling fingertips gently against temples with a drop of cooling peppermint oil to release all tension',
        'wellness_spa'
      ),
      createActionItem(
        'spa_sipping_lemon_infused_water',
        'Sipping Ice Cold Cucumber-Mint Infused Water',
        'Drinking refreshing fruit-infused water from tall glass tumbler',
        'Holding a chilled tall glass tumbler filled with crisp ice water, cucumber ribbons, and fresh mint leaves, taking a slow hydrating sip between spa sessions',
        'wellness_spa'
      ),
      createActionItem(
        'spa_jade_roller_face',
        'Rolling Polished Jade Stone Roller Along Jawline',
        'Gliding green jade facial roller upward from chin to cheek',
        'Gliding a cool, polished green jade roller smoothly in gentle upward strokes along the contour of jawline and cheekbones, relaxing facial muscles',
        'wellness_spa'
      ),
      createActionItem(
        'spa_sitting_cedar_sauna',
        'Resting on Cedar Sauna Bench in Gentle Steam',
        'Sitting on wooden slats absorbing dry detoxifying heat with towel',
        'Sitting peacefully on the upper wooden bench of a traditional cedar sauna, head resting back against smooth timber, absorbing the warm soothing dry heat',
        'wellness_spa'
      ),
      createActionItem(
        'spa_sheet_mask_smoothing',
        'Smoothing Hydrating Collagen Sheet Mask on Face',
        'Pressing damp cotton sheet mask flat against skin contours',
        'Gently applying a cool, serum-infused hydrating sheet mask to face, pressing it smooth against skin with fingertips around eyes and nose for deep moisture',
        'wellness_spa'
      ),
      createActionItem(
        'spa_brushing_dry_skin',
        'Dry Brushing Arms with Natural Boar Bristle Brush',
        'Sweeping wooden handled brush in upward circular strokes',
        'Standing before bath, using a long-handled natural bristle dry brush to sweep skin in gentle circular strokes towards heart for lymphatic vitality',
        'wellness_spa'
      ),
      createActionItem(
        'spa_lighting_scented_candle',
        'Lighting Soy Wax Candle with Long Wooden Match',
        'Striking match to light sandalwood and amber candle on bath rim',
        'Striking a long wooden safety match, touching the flame to the cotton wick of a sandalwood and amber soy candle resting on the edge of the soaking tub',
        'wellness_spa'
      ),
      createActionItem(
        'spa_cradling_ceramic_tea_bowl',
        'Cradling Matcha Tea Bowl with Both Palms',
        'Holding warm handmade ceramic bowl feeling earthy warmth',
        'Holding a warm earthy ceramic chawan bowl filled with frothy emerald matcha tea in both palms, inhaling the vegetal steam with quiet mindful presence',
        'wellness_spa'
      ),
      createActionItem(
        'spa_stretching_arms_overhead',
        'Deep Morning Rejuvenation Stretch in Silk Pajamas',
        'Interlocking fingers pushing palms skyward with arching back',
        'Standing barefoot on a plush bedroom rug in silk pajamas, interlacing fingers and pushing palms high overhead with an expansive full-body morning stretch',
        'wellness_spa'
      ),
      createActionItem(
        'spa_resting_silk_eye_pillow',
        'Lying Down with Weighted Lavender Eye Pillow',
        'Resting on floor with silk flaxseed pillow covering eyes',
        'Lying comfortably on a yoga mat under a cozy fleece blanket, placing a weighted silk lavender-scented flaxseed pillow over eyes during deep restorative rest',
        'wellness_spa'
      )
    ]
  },
  {
    id: 'rainy_cozy',
    name: 'Cozy Indoor & Rainy Day Moments',
    icon: '☕',
    description: 'Rainy windowpanes, oversized knit sweaters, hot tea, wool blankets, books, fireplaces, and cozy comfort',
    actions: [
      createActionItem(
        'cozy_rainy_window_fog',
        'Drawing Heart on Steamy Rain-Streaked Window',
        'Tracing finger across fogged glass watching rain stream outside',
        'Sitting on a deep cushioned windowsill in an oversized wool sweater, tracing a small heart with finger on the fogged glass as rain pours outside',
        'rainy_cozy'
      ),
      createActionItem(
        'cozy_cradling_hot_tea_mug',
        'Cradling Steaming Ceramic Mug in Oversized Sweater Sleeves',
        'Holding warm mug with hands hidden inside long knit cuffs',
        'Sitting curled up on an armchair, hands tucked inside the extended cuffs of a chunky knit cream sweater, holding a steaming mug of cinnamon spiced tea close',
        'rainy_cozy'
      ),
      createActionItem(
        'cozy_curled_up_wool_blanket',
        'Curled Up Under Plaid Wool Blanket with Novel',
        'Reading paperback book tucked under heavy warm throw blanket',
        'Curled up sideways in a deep velvet armchair with legs tucked under a heavy red plaid wool blanket, turning the page of a gripping mystery paperback',
        'rainy_cozy'
      ),
      createActionItem(
        'cozy_stoking_fireplace_embers',
        'Stoking Fireplace Logs with Cast Iron Poker',
        'Prodding burning birch log sending sparks up chimney',
        'Kneeling on the hearth rug in front of a stone fireplace, using a black cast-iron poker to adjust a burning oak log, watching bright orange embers swirl',
        'rainy_cozy'
      ),
      createActionItem(
        'cozy_knitting_wool_scarf',
        'Knitting Mustard Yellow Scarf on Wooden Needles',
        'Clicking bamboo knitting needles looping chunky wool yarn',
        'Sitting comfortably on the sofa with a ball of mustard-yellow merino wool yarn in lap, clicking wooden knitting needles steadily to knit a wide winter scarf',
        'rainy_cozy'
      ),
      createActionItem(
        'cozy_listening_rain_headphones',
        'Listening to Acoustic Melodies While Watching Rain',
        'Wearing retro padded headphones gazing out rainy glass door',
        'Wearing over-ear leather headphones, resting head against the cool glass of a French balcony door, listening to soft acoustic guitar as raindrops patter on glass',
        'rainy_cozy'
      ),
      createActionItem(
        'cozy_fuzzy_socks_fireplace',
        'Warming Fuzzy Knit Socks Near Fireplace Glow',
        'Propping feet in thick patterned wool socks toward warm hearth',
        'Lounging back on a plush floor cushion, propping feet clad in thick patterned reindeer wool socks toward the crackling warmth of the brick fireplace',
        'rainy_cozy'
      ),
      createActionItem(
        'cozy_steeping_loose_leaf_tea',
        'Watching Loose Leaf Tea Swirl in Glass Teapot',
        'Pouring hot water over dried chamomile blossoms and berries',
        'Pouring boiling water from a kettle into a clear glass teapot, watching whole dried chamomile flowers and crimson hibiscus petals unfurl and swirl in the water',
        'rainy_cozy'
      ),
      createActionItem(
        'cozy_buttered_toast_honey',
        'Drizzling Golden Honey on Warm Buttered Toast',
        'Holding honey dipper spinning golden ribbon over sourdough toast',
        'Holding a wooden honey dipper horizontally, spinning it to let a thick golden ribbon of wildflower honey drizzle over a slice of warm, crusty buttered sourdough',
        'rainy_cozy'
      ),
      createActionItem(
        'cozy_writing_leather_journal',
        'Writing Thoughts in Leather-Bound Diary by Candlelight',
        'Penning personal journal entry with ink pen on sofa',
        'Sitting cross-legged on a rug by candlelight, penning heartfelt reflections into an embossed leather journal with a smooth black fountain pen',
        'rainy_cozy'
      ),
      createActionItem(
        'cozy_lighting_fireplace_kindling',
        'Lighting Newspaper Kindling with Long Wooden Match',
        'Touching flame to crumpled paper under dry twigs on hearth',
        'Kneeling on the hearth to touch a match to dry kindling beneath birch logs, blowing softly until the first bright yellow flames catch and crackle to life',
        'rainy_cozy'
      ),
      createActionItem(
        'cozy_snuggling_with_pillow',
        'Hugging Fluffy Feather Cushion to Chest',
        'Squeezing soft velvet throw pillow resting chin on edge',
        'Sitting on the carpet leaning against the sofa, hugging a large dusty-rose velvet throw pillow against chest and resting chin on top with a cozy smile',
        'rainy_cozy'
      ),
      createActionItem(
        'cozy_pulling_curtains_shut',
        'Drawing Heavy Velvet Curtains Against Storm',
        'Pulling thick curtains closed keeping storm outside',
        'Reaching up to pull the heavy sage-green velvet drapery cord, closing the thick curtains against the dark rainy evening to make the room warm and secluded',
        'rainy_cozy'
      ),
      createActionItem(
        'cozy_baking_cinnamon_rolls',
        'Pulling Hot Glazed Cinnamon Buns from Oven',
        'Holding baking tray of bubbling cinnamon pastries with oven mitts',
        'Wearing thick cotton oven mitts, pulling a hot metal baking tray of golden, bubbling cinnamon rolls dripping with vanilla icing out of the oven',
        'rainy_cozy'
      ),
      createActionItem(
        'cozy_browsing_old_photo_album',
        'Flipping Through Vintage Family Photo Album',
        'Turning black paper pages smiling at nostalgic printed snapshots',
        'Sitting with an oversized black-page vintage photo album across lap, turning thick pages and smiling fondly at corner-mounted nostalgic snapshots',
        'rainy_cozy'
      ),
      createActionItem(
        'cozy_cat_sleeping_on_chest',
        'Lying Still as Sleeping Tabby Cat Naps on Chest',
        'Smiling gently without moving as cat snoozes peacefully',
        'Lying back on the couch, smiling serenely and staying perfectly still while a little ginger tabby cat snoozes soundly curled up on chest, purring gently',
        'rainy_cozy'
      )
    ]
  },
  {
    id: 'nightlife_party',
    name: 'Nightlife, Club & Celebration',
    icon: '🎉',
    description: 'Confetti showers, champagne popping, DJ dance floors, neon glow sticks, karaoke microphones, and celebrations',
    actions: [
      createActionItem(
        'party_popping_champagne_cork',
        'Popping Champagne Cork with Foaming Fizz Plume',
        'Untwisting wire cage and easing cork out as bubbly sprays',
        'Gripping the neck of a chilled green champagne bottle with a white towel, twisting the cork until it pops with a celebratory hiss and foamy bubbly fountain',
        'nightlife_party'
      ),
      createActionItem(
        'party_tossing_sparkling_confetti',
        'Throwing Handful of Metallic Confetti in Air',
        'Tossing gold and silver confetti glitter skyward with wide grin',
        'Throwing both hands upward into the air to launch a sparkling explosion of gold and holographic metallic confetti that showers down under club strobe lights',
        'nightlife_party'
      ),
      createActionItem(
        'party_clinking_champagne_flutes',
        'Touching Crystal Champagne Flutes in Midnight Toast',
        'Clinking slender glasses together smiling under chandelier',
        'Holding a slender crystal flute of effervescent golden champagne, leaning in to clink glasses with friends under the glimmer of a grand crystal chandelier',
        'nightlife_party'
      ),
      createActionItem(
        'party_waving_neon_glowsticks',
        'Dancing with Glowing Neon Foam Glowsticks',
        'Waving illuminated cyan and magenta sticks to booming beat',
        'Jumping to the booming electronic bassline on a packed dance floor, waving two bright cyan and magenta LED foam glowsticks in synchronized rhythm overhead',
        'nightlife_party'
      ),
      createActionItem(
        'party_singing_karaoke_mic',
        'Belting Pop Anthem into Cordless Karaoke Mic',
        'Singing with passion reading lyrics off glowing video screen',
        'Gripping a wireless microphone in hand, leaning head back to belt out the climactic chorus of a favorite pop song with infectious energy at karaoke night',
        'nightlife_party'
      ),
      createActionItem(
        'party_dj_turntable_scratch',
        'Adjusting Headphones and Scratching DJ Vinyl Record',
        'One headphone pressed to ear while fingers manipulate spinning vinyl',
        'Pressing one ear cup of silver DJ headphones to ear with shoulder, placing fingertips on the center label of a 12-inch vinyl record on the turntable to cue the next track',
        'nightlife_party'
      ),
      createActionItem(
        'party_adjusting_sequin_dress',
        'Stepping into Party Lights in Sparkling Sequin Dress',
        'Smoothing shimmering sequined fabric catching prismatic reflections',
        'Walking onto the VIP lounge terrace in a shimmering midnight-blue sequin mini dress, hands at hips as the fabric catches and reflects prismatic party lighting',
        'nightlife_party'
      ),
      createActionItem(
        'party_blowing_party_horn',
        'Blowing Colorful Paper Party Horn Noise-Maker',
        'Blowing coiled foil party blower unrolling with funny whistle',
        'Puffing out cheeks to blow into a colorful foil party horn that unrolls outward with a playful whistle, winking at the camera with festive New Year’s cheer',
        'nightlife_party'
      ),
      createActionItem(
        'party_catching_disco_ball_sparkle',
        'Spinning Under Giant Mirror Disco Ball',
        'Looking up with arms raised as thousands of light beams orbit',
        'Standing at the center of the dance floor beneath a massive spinning mirror disco ball, arms raised as thousands of dancing white light dots sweep across walls',
        'nightlife_party'
      ),
      createActionItem(
        'party_holding_cocktail_sparkler',
        'Holding Flaming Golden Sparkler on Cocktail Glass',
        'Holding drink topped with hissing shower of bright golden sparks',
        'Holding a tall craft cocktail topped with an ignited golden sparkler fountain, smiling brightly through the shower of sparkling light with friends cheering',
        'nightlife_party'
      ),
      createActionItem(
        'party_dancing_conga_line',
        'Leading Rhythmic Conga Dance Line with Hands on Hips',
        'Stepping forward in lively conga line laughing with group',
        'Leading a high-spirited party conga line through the banquet room, kicking leg out on every fourth beat with hands on hips and infectious laughter',
        'nightlife_party'
      ),
      createActionItem(
        'party_cutting_celebration_cake',
        'Holding Silver Knife Slicing Tiered Celebration Cake',
        'Slicing first piece of frosted cake surrounded by candles',
        'Holding the handle of a silver cake knife with both hands, slicing into a decadent multi-tiered frosted celebration cake illuminated by glowing candle flames',
        'nightlife_party'
      ),
      createActionItem(
        'party_popping_party_popper',
        'Pulling String of Colorful Cardboard Party Popper',
        'Yanking string as colorful paper ribbons pop into air',
        'Holding a miniature cardboard party popper with both hands, yanking the string with a sharp pop as a cascade of bright multicolored crepe paper ribbons shoots out',
        'nightlife_party'
      ),
      createActionItem(
        'party_limbo_stick_bend',
        'Bending Backward Under Low Limbo Stick',
        'Arching spine backward shuffling feet under wooden bar',
        'Shuffling feet forward to the Caribbean beat, arching spine backward low to the ground to glide smoothly beneath the wooden limbo stick without touching',
        'nightlife_party'
      ),
      createActionItem(
        'party_flair_bartending_shaker',
        'Spinning Stainless Steel Cocktail Shaker in Mid-Air',
        'Tossing shaker tin between hands catching over shoulder',
        'Flipping a polished stainless steel Boston shaker tin in a 360-degree mid-air spin behind the neon-lit cocktail bar, catching it cleanly with a confident smile',
        'nightlife_party'
      ),
      createActionItem(
        'party_taking_polaroid_flash',
        'Shaking Freshly Ejected Instant Polaroid Photo',
        'Snapping instant camera photo and waving developing print',
        'Pressing the shutter button of a vintage pastel instant camera with a bright flash, grabbing the white-bordered print as it ejects and waving it gently to dry',
        'nightlife_party'
      )
    ]
  },
  {
    id: 'crafts_diy',
    name: 'Woodworking, DIY & Handcrafts',
    icon: '🔨',
    description: 'Hand planes, woodworking shavings, measuring calipers, leather crafting, leather stamps, and DIY fabrication',
    actions: [
      createActionItem(
        'diy_hand_plane_wood_shaving',
        'Smoothing Oak Board with Cast Iron Hand Plane',
        'Pushing smoothing plane peeling continuous curly wood shaving',
        'Gripping the wooden tote and knob of a cast-iron hand plane with both hands, pushing it smoothly along a rough oak board to peel off paper-thin curly shavings',
        'crafts_diy'
      ),
      createActionItem(
        'diy_measuring_wood_caliper',
        'Checking Thickness with Brass Vernier Caliper',
        'Sliding jaws of precision brass caliper against turned wooden spindle',
        'Holding a brass vernier caliper in hand, sliding the measuring jaws carefully over a newly turned cherry wood table leg on the lathe to verify exact diameter',
        'crafts_diy'
      ),
      createActionItem(
        'diy_japanese_pull_saw',
        'Cutting Tenon Joint with Japanese Ryoba Saw',
        'Pulling fine-toothed saw blade cutting crisp dovetail joint',
        'Guiding a traditional Japanese Ryoba pull saw along a penciled cutting line with steady thumb, making a razor-clean crosscut into walnut lumber with effortless pull strokes',
        'crafts_diy'
      ),
      createActionItem(
        'diy_cordless_drill_driving_screw',
        'Driving Brass Screw with Cordless Drill Driver',
        'Pressing drill trigger driving screw flush into timber',
        'Holding a cordless drill driver firmly with both hands, driving a countersunk brass wood screw flush into the edge of a custom birch plywood bookshelf',
        'crafts_diy'
      ),
      createActionItem(
        'diy_leather_saddle_stitching',
        'Hand Stitching Leather Wallet with Two Needles',
        'Passing waxed thread needles through punched stitching holes',
        'Holding a vegetable-tanned leather wallet clamped in a wooden stitching pony, passing two blunt needles and waxed linen thread back and forth in a durable saddle stitch',
        'crafts_diy'
      ),
      createActionItem(
        'diy_sanding_block_curve',
        'Hand Sanding Wooden Sculpture with Cork Block',
        'Rubbing fine sandpaper along grain creating velvet smooth finish',
        'Wrapping 400-grit sandpaper around a cork block, smoothing the sweeping curved contours of a hand-carved maple bowl until the grain feels like polished velvet',
        'crafts_diy'
      ),
      createActionItem(
        'diy_leather_mallet_stamp',
        'Stamping Floral Pattern on Leather with Brass Tool',
        'Striking brass leathercraft stamp with raw-hide mallet',
        'Positioning a steel floral stamp onto dampened tooling leather on a granite slab, striking the stamp head cleanly with a rawhide mallet to emboss crisp depth',
        'crafts_diy'
      ),
      createActionItem(
        'diy_wood_glue_clamping',
        'Tightening Heavy Steel F-Clamps on Glued Joint',
        'Turning wooden clamp handles squeezing out thin line of glue',
        'Applying wood glue to edge joint, setting two heavy steel F-clamps across the boards and turning the screw handles until a uniform bead of glue squeezes out',
        'crafts_diy'
      ),
      createActionItem(
        'diy_marking_gauge_scribe',
        'Scribing Mortise Line with Wheel Marking Gauge',
        'Gliding brass wheel gauge along edge scribing parallel line',
        'Holding the brass fence of a wheel marking gauge tight against the face of a board, gliding the micro-blade along the edge to scribe a crisp reference line',
        'crafts_diy'
      ),
      createActionItem(
        'diy_drilling_drill_press',
        'Lowering Quill Handle on Heavy Benchtop Drill Press',
        'Pulling triple-spoke handle boring clean Forstner hole',
        'Wearing safety goggles, pulling the feed lever of a heavy cast-iron drill press to lower a sharp Forstner bit smoothly into hardwood, making clean round shavings',
        'crafts_diy'
      ),
      createActionItem(
        'diy_wax_finish_rag_buff',
        'Buffing Beeswax Finish on Walnut Tabletop',
        'Rubbing circular strokes with cotton rag bringing out warm luster',
        'Using a soft cotton flannel rag to rub natural beeswax and mineral oil into a dark walnut tabletop in circular motions, revealing deep golden grain highlights',
        'crafts_diy'
      ),
      createActionItem(
        'diy_blowing_sawdust_workpiece',
        'Blowing Fine Sawdust off Penciled Layout Line',
        'Puffing breath across timber to clear crisp cut line',
        'Leaning down over workbench, gently blowing a layer of blonde sawdust off the surface of a marked piece of cherry wood to reveal the fine pencil layout line',
        'crafts_diy'
      ),
      createActionItem(
        'diy_stapling_upholstery_chair',
        'Stapling Velvet Fabric with Pneumatic Upholstery Gun',
        'Tensioning fabric over foam and firing staples into frame',
        'Pulling royal blue velvet upholstery fabric taut over high-density foam padding with webbing pliers, firing staples cleanly into the hardwood armchair frame',
        'crafts_diy'
      ),
      createActionItem(
        'diy_burnishing_leather_edge',
        'Burnishing Leather Edge with Grooved Wooden Slicker',
        'Friction rubbing edge with gum tragacanth into shiny glass edge',
        'Applying gum tragacanth to the trimmed edge of a leather belt, rubbing it rapidly back and forth inside the groove of an ebony wooden slicker until glassy smooth',
        'crafts_diy'
      ),
      createActionItem(
        'diy_checking_framing_square',
        'Verifying 90-Degree Corner with Precision Machinist Square',
        'Aligning steel square against corner checking for light gaps',
        'Holding a hardened steel precision machinist square against the corner of a newly glued picture frame, inspecting the junction against the light for zero gap',
        'crafts_diy'
      ),
      createActionItem(
        'diy_pencil_behind_ear_rest',
        'Placing Carpenter Pencil Behind Ear with Proud Smile',
        'Tucking flat wooden carpenter pencil over ear inspecting project',
        'Stepping back from the completed custom wooden coffee table, placing a flat red carpenter pencil securely behind ear and admiring the craftsmanship with pride',
        'crafts_diy'
      )
    ]
  },
  {
    id: 'vintage_retro',
    name: 'Vintage, Historical & Retro Moments',
    icon: '🕰️',
    description: 'Rotary phones, vinyl jukeboxes, typewriter keys, vintage convertibles, tea cups, and retro nostalgia',
    actions: [
      createActionItem(
        'retro_dialing_rotary_telephone',
        'Dialing Heavy Black Rotary Telephone',
        'Inserting index finger into dial hole and spinning rotary wheel',
        'Sitting at a vintage wooden side table, inserting index finger into the metal finger hole of a heavy black bakelite rotary telephone and spinning the wheel to dial',
        'vintage_retro'
      ),
      createActionItem(
        'retro_typing_manual_typewriter',
        'Striking Keys on Vintage Mechanical Typewriter',
        'Punching mechanical keys watching metal typebars strike ribbon',
        'Sitting before a pastel mint-green mechanical typewriter, pressing keys with rhythmic staccato taps and sweeping the carriage return lever with a crisp chime',
        'vintage_retro'
      ),
      createActionItem(
        'retro_vinyl_record_needle_drop',
        'Lowering Tonearm Needle onto Spinning Vinyl Record',
        'Carefully cueing diamond stylus into outermost vinyl groove',
        'Holding the slender metal tonearm of a wooden turntable with steady fingertips, gently lowering the needle onto the glossy black vinyl disc as crackle begins',
        'vintage_retro'
      ),
      createActionItem(
        'retro_adjusting_vintage_radio_dial',
        'Tuning Amber Dial on Wooden Art Deco Radio',
        'Rotating brass knob tuning warm analog AM radio station',
        'Kneeling before a tabletop Art Deco cathedral tube radio, gently turning the knurled brass tuning knob across the glowing amber glass frequency scale',
        'vintage_retro'
      ),
      createActionItem(
        'retro_classic_convertible_driving',
        'Driving Vintage Red Convertible with Silk Headscarf',
        'Gripping thin bakelite steering wheel as silk scarf flutters',
        'Gripping the thin ivory steering wheel of an open-top vintage red convertible cruising along coastal roads, silk headscarf and cat-eye sunglasses catching sea wind',
        'vintage_retro'
      ),
      createActionItem(
        'retro_victorian_tea_saucer',
        'Holding Porcelain Teacup and Saucer with Poised Pinky',
        'Holding delicate fluted floral cup balanced on round saucer',
        'Sitting in a floral parlor armchair, balancing a delicate gold-trimmed porcelain saucer on left palm while lifting the matching teacup with graceful poise',
        'vintage_retro'
      ),
      createActionItem(
        'retro_feeding_jukebox_dime',
        'Dropping Silver Dime into Glowing 1950s Jukebox',
        'Pressing alphanumeric selection buttons on illuminated jukebox',
        'Dropping a shiny coin into the chrome slot of a neon-lit 1950s Wurlitzer jukebox, pressing buttons "B-4" with a grin as the internal mechanical selector arm moves',
        'vintage_retro'
      ),
      createActionItem(
        'retro_pocket_watch_pop_open',
        'Clicking Open Gilded Pocket Watch Cover',
        'Pressing crown button to spring open ornate pocket watch',
        'Pulling a heavy gold pocket watch from vest pocket by its Albert chain, pressing the top stem button with thumb to spring open the engraved cover and reveal hands',
        'vintage_retro'
      ),
      createActionItem(
        'retro_peering_through_monocle',
        'Holding Gold Monocle to Eye with Dramatic Inquisitiveness',
        'Raising circular lens on chain to squint at vintage telegram',
        'Raising a circular gold-rimmed monocle on a silk cord to one eye, holding an antique yellowed telegram up to read with dramatic 19th-century inquisitive flair',
        'vintage_retro'
      ),
      createActionItem(
        'retro_polishing_silver_chalice',
        'Polishing Antique Silver Chalice with Flannel Cloth',
        'Rubbing tarnish cream into embossed silver goblet',
        'Sitting at table with a can of silver polish paste, using a soft white flannel cloth to buff tarnish away from an ornate embossed Victorian silver chalice',
        'vintage_retro'
      ),
      createActionItem(
        'retro_roller_skate_drive_in',
        'Balancing Food Tray on Quad Roller Skates',
        'Gliding on four-wheel skates carrying diner burger tray',
        'Gliding smoothly on retro white four-wheel quad roller skates with orange wheels, balancing a chrome diner tray holding chocolate milkshakes and burgers to car',
        'vintage_retro'
      ),
      createActionItem(
        'retro_quill_ink_flourish',
        'Writing with Goose Feather Quill on Parchment',
        'Writing calligraphic letters with white goose quill pen',
        'Dipping the cut tip of a white goose feather quill pen into an ebony inkpot, writing elegant cursive sentences across rough handmade cotton paper by candlelight',
        'vintage_retro'
      ),
      createActionItem(
        'retro_vintage_camera_bellows',
        'Unfolding Accordion Bellows on Antique Folding Camera',
        'Extending leather bellows on vintage medium-format camera',
        'Pressing the brass latch on a 1920s folding pocket camera, pulling out the maroon leather accordion bellows and locking the lens struts into shooting position',
        'vintage_retro'
      ),
      createActionItem(
        'retro_pinning_corsage_lapel',
        'Pinning Fresh Gardenia Corsage on Suit Lapel',
        'Fastening floral boutonniere with pearl-headed corsage pin',
        'Holding a fresh fragrant white gardenia boutonniere with satin ribbon against partner’s suit lapel, threading a pearl-headed silver pin carefully through fabric',
        'vintage_retro'
      ),
      createActionItem(
        'retro_folding_hand_fan_snap',
        'Snapping Silk Hand Fan Open with a Crisp Flick',
        'Flicking wrist to spread ornate painted folding fan before mouth',
        'Flicking wrist with a crisp rhythmic snap to open an ornate hand-painted silk folding fan, holding it coyly before mouth with mischievous sparkling eyes',
        'vintage_retro'
      ),
      createActionItem(
        'retro_adjusting_bow_tie_mirror',
        'Tying Silk Bow Tie Before Vintage Barbershop Mirror',
        'Adjusting symmetrical loops of classic black silk bow tie',
        'Standing before an arched beveled mirror in a classic barbershop, adjusting the symmetrical folded wings of a crisp black silk bow tie with both hands',
        'vintage_retro'
      )
    ]
  },
  {
    id: 'heroic_cinematic',
    name: 'Heroic, Dramatic & Cinematic Action',
    icon: '⚡',
    description: 'Hero landings, sword clashes, dramatic windblown cloaks, standing on precipices, and cinematic moments',
    actions: [
      createActionItem(
        'hero_three_point_superhero_landing',
        'Classic Three-Point Superhero Ground Impact Landing',
        'One knee down, one fist punched into cratered earth, head rising',
        'Landing with explosive kinetic power in a classic three-point superhero pose: one knee down, one fist hammered into the cracked earth, raising head with blazing eyes',
        'heroic_cinematic'
      ),
      createActionItem(
        'hero_standing_cliff_precipice',
        'Standing on High Cliff Precipice Overlooking Storm',
        'Standing at edge of towering precipice with coat billowing in gale',
        'Standing fearless at the very edge of a sheer rocky cliff overhang, dark trench coat billowing wildly in the mountain tempest, gazing out over rolling thunderclouds',
        'heroic_cinematic'
      ),
      createActionItem(
        'hero_slow_walk_explosion_back',
        'Cool Cinematic Walk Away from Firestorm Without Looking Back',
        'Striding forward in slow motion as flames erupt in distance',
        'Walking forward with calm, unshakable deliberate steps and steady gaze, completely ignoring the massive plume of orange fireball flames detonating behind',
        'heroic_cinematic'
      ),
      createActionItem(
        'hero_sheathing_katana_click',
        'Sheathing Katana Blade Until Tsuba Clicks (Noto)',
        'Guiding curved blade into scabbard with thumb on guard',
        'Guiding the curved steel blade of a katana smoothly into its black lacquer scabbard without looking, clicking the tsuba guard firmly shut with thumb',
        'heroic_cinematic'
      ),
      createActionItem(
        'hero_shield_deflection_sparks',
        'Bracing Behind Titanium Shield Deflecting Sparks',
        'Crouching behind shield as energetic sparks ricochet in shower',
        'Bracing behind a heavy round titanium shield with both arms, locking stance as a barrage of blazing projectiles ricochets off the metal in an explosion of white sparks',
        'heroic_cinematic'
      ),
      createActionItem(
        'hero_reaching_for_fallen_ally',
        'Extending Desperate Hand to Grasp Falling Ally',
        'Reaching arm over ledge shouting and grasping partner’s hand',
        'Throwing body flat against the crumbling stone ledge, reaching one arm downward at full extension to catch a falling companion’s wrist in the nick of time',
        'heroic_cinematic'
      ),
      createActionItem(
        'hero_dual_daggers_reverse_grip',
        'Spinning Twin Daggers into Low Reverse Combat Grip',
        'Flipping blades into reverse grip in low coiled predatory stance',
        'Flipping two curved Damascus steel daggers in hands so the blades extend backward along forearms, sinking into a low, predatory combat crouch in shadows',
        'heroic_cinematic'
      ),
      createActionItem(
        'hero_climbing_rope_helicopter',
        'Climbing Heavy Nylon Rope toward Hovering Chopper',
        'Gripping suspended rope looking up at rotor downwash in rain',
        'Climbing hand-over-hand up a suspended nylon hoist rope toward a hovering rescue helicopter, soaked in torrential rain as rotor blades whip storm mist around',
        'heroic_cinematic'
      ),
      createActionItem(
        'hero_cracking_knuckles_resolve',
        'Interlocking Fingers and Cracking Knuckles with Grin',
        'Pushing palms outward popping knuckles before battle',
        'Interlocking fingers together, pressing palms forward to pop knuckles with a crisp audible crack, tilting head sideways with a fearless, resolute battle grin',
        'heroic_cinematic'
      ),
      createActionItem(
        'hero_drawing_recurve_bow',
        'Drawing Recurve War Bow to Anchor Point at Cheek',
        'Pulling bowstring back with three fingers aiming feather arrow',
        'Standing in solid archer’s stance, drawing the string of a carbon recurve bow back until three fingers touch anchor point at corner of mouth, laser-focused on target',
        'heroic_cinematic'
      ),
      createActionItem(
        'hero_bulletproof_cuff_deflect',
        'Crossing Arm Bracers to Deflect Projectile',
        'Snapping metal wrist gauntlet up deflecting energy blast',
        'Throwing left forearm up in a lightning-fast reflex, using a gleaming metal wrist gauntlet to deflect a blazing energy blast away into the night sky',
        'heroic_cinematic'
      ),
      createActionItem(
        'hero_leaping_across_rooftop_gap',
        'Mid-Air Leap Across Skyscraper Rooftop Alley Gap',
        'Leaping horizontally between two buildings high above city',
        'Launching body forward in an athletic horizontal leap across the twenty-foot gap between two skyscraper rooftops, city street lights far below in the rain',
        'heroic_cinematic'
      ),
      createActionItem(
        'hero_wiping_blood_from_lip',
        'Wiping Stray Blood from Lip with Back of Thumb',
        'Brushing thumb across mouth looking up with unbroken spirit',
        'Brushing the back of thumb across split lower lip to wipe a drop of blood, raising eyes to meet the adversary with an unbroken, indomitable defiant smile',
        'heroic_cinematic'
      ),
      createActionItem(
        'hero_planting_battle_banner',
        'Planting Tattered Victory Banner into High Summit',
        'Driving flagpole deep into rocky summit ground with both hands',
        'Driving the iron base of a battle-worn embroidered banner flagpole deep into the rocky earth atop the conquered hill, standing proud with chest high in victory',
        'heroic_cinematic'
      ),
      createActionItem(
        'hero_cocking_shotgun_rack',
        'Racking Tactical Shotgun with Authoritative Pump',
        'Pumping forward slide of black shotgun with solid mechanical clack',
        'Gripping the forward slide of a matte-black tactical pump shotgun, racking it back and forward with a resounding mechanical clack as an empty shell ejects',
        'heroic_cinematic'
      ),
      createActionItem(
        'hero_whispering_oath_to_blade',
        'Pressing Sword Hilt to Forehead in Sacred Vow',
        'Touching crossguard of sword to brow in silent solemn pledge',
        'Holding a cross-hilted steel broadsword vertically before face, pressing the cold steel crossguard against forehead with closed eyes in a solemn, unbreakable vow',
        'heroic_cinematic'
      )
    ]
  }
];
