import { ActionGroup, createActionItem } from './types';

export const GROUPS_ARTS_AND_MEDIA: ActionGroup[] = [
  {
    id: 'art_studio',
    name: 'Fine Art & Studio Crafts',
    icon: '🎨',
    description: 'Oil painting on canvas, clay pottery, charcoal sketches, calligraphy, sculpting, and art studio craft',
    actions: [
      createActionItem(
        'art_oil_canvas_brushstroke',
        'Painting Oil Brushstroke on Canvas Easel',
        'Holding wooden palette and applying paint stroke to canvas',
        'Standing before a tall wooden easel holding an oval wooden palette in one hand, applying a sweeping stroke of cerulean oil paint to a stretched canvas with focused artistic expression',
        'art_studio'
      ),
      createActionItem(
        'art_mixing_oil_pigments',
        'Mixing Pigments with Palette Knife',
        'Blending vibrant oil colors on glass slab with steel knife',
        'Using a flexible diamond-shaped steel palette knife to blend mounds of ultramarine blue and cadmium yellow paint on a glass slab into rich emerald green',
        'art_studio'
      ),
      createActionItem(
        'art_clay_pottery_wheel',
        'Centering Wet Clay on Spinning Pottery Wheel',
        'Shaping spinning clay pot with wet hands and sponge',
        'Sitting over a spinning electric pottery wheel with clay-splattered apron, pressing wet palms firmly against damp terra-cotta clay to center and shape a hollow vase',
        'art_studio'
      ),
      createActionItem(
        'art_charcoal_sketchbook',
        'Sketching Portrait with Willow Charcoal Stick',
        'Shading dramatic shadows in paper sketchbook with charcoal',
        'Holding a soft willow charcoal stick with fingertips, smudging velvety shadows across a heavyweight drawing sketchbook with thumb to render a portrait',
        'art_studio'
      ),
      createActionItem(
        'art_linoleum_carving',
        'Carving Linoleum Print Block with V-Gouge',
        'Carving intricate relief pattern into linoleum block on table',
        'Carefully carving fine curved lines into a grey linoleum printmaking block using a wooden-handled V-gouge tool, curling ribbons of linoleum peeling away',
        'art_studio'
      ),
      createActionItem(
        'art_stretching_canvas',
        'Stretching Canvas with Pliers and Staple Gun',
        'Tensioning raw linen fabric over wooden stretcher frame',
        'Pulling heavy cotton canvas tight over wooden stretcher bars with wide cast-iron canvas stretching pliers, firing staples securely into the pine frame',
        'art_studio'
      ),
      createActionItem(
        'art_glassblowing_pipe',
        'Blowing Molten Glass on Steel Blowpipe',
        'Rotating pipe and gently puffing air into glowing orange orb',
        'Lifting a long steel blowpipe with heat-resistant gloves, gently blowing air into the molten glowing orange glass bubble while rolling it across a steel marver table',
        'art_studio'
      ),
      createActionItem(
        'art_calligraphy_pen_dip',
        'Dipping Calligraphy Nib into Black Inkwell',
        'Dipping metal flex nib into bottle of sumi ink on desk',
        'Dipping a vintage oblique calligraphy pen nib carefully into a glass bottle of black sumi ink, then writing delicate flourishing letterforms on parchment paper',
        'art_studio'
      ),
      createActionItem(
        'art_weaving_handloom',
        'Passing Wooden Shuttle Through Weaving Loom',
        'Weaving colorful wool yarn on wooden frame handloom',
        'Seated at a traditional wooden floor loom, pressing foot treadles to open the warp shed and passing a smooth wooden shuttle filled with colorful wool yarn through',
        'art_studio'
      ),
      createActionItem(
        'art_mosaic_ceramic_tiles',
        'Placing Glazed Mosaic Tile with Tweezers',
        'Setting small colored glass tesserae tile into mortar base',
        'Using fine steel craft tweezers to carefully position a tiny cobalt-blue glazed ceramic tile into wet adhesive mortar on an intricate mosaic tabletop pattern',
        'art_studio'
      ),
      createActionItem(
        'art_inspect_sketch_proportions',
        'Holding Up Pencil to Measure Proportions',
        'Extending arm with pencil aligned vertically to measure subject',
        'Holding a drawing pencil out at arm’s length with one eye squinted, using thumb on the pencil shaft to visually measure proportions of the live studio model',
        'art_studio'
      ),
      createActionItem(
        'art_gold_leaf_gilding',
        'Applying Delicate Gold Leaf with Gilder’s Tip',
        'Laying paper-thin sheet of gold leaf onto sized wood with soft brush',
        'Using a wide squirrel-hair gilder’s brush to delicately lift a micro-thin sheet of 24k gold leaf and lay it gently over sticky adhesive sizing on an ornate picture frame',
        'art_studio'
      ),
      createActionItem(
        'art_cleaning_brushes_jar',
        'Swirling Paint Brushes in Jar of Water',
        'Swirling bristles in clear glass jar creating colorful swirls',
        'Swirling a bundle of long-handled filbert brushes in a tall glass water jar, watching clouds of crimson and gold watercolor pigment billow through the clear water',
        'art_studio'
      ),
      createActionItem(
        'art_sculpting_wire_armature',
        'Bending Aluminum Wire Armature for Sculpture',
        'Twisting strong wire with needle-nose pliers into human pose',
        'Twisting flexible aluminum armature wire with needle-nose pliers into an expressive dynamic human figure armature on a wooden mounting base',
        'art_studio'
      ),
      createActionItem(
        'art_spray_fixative',
        'Spraying Aerosol Fixative on Pastel Drawing',
        'Misting fine protective spray over finished chalk pastel artwork',
        'Holding a can of aerosol matte fixative ten inches away from a pastel drawing, misting a fine even protective spray across the rich pigment particles',
        'art_studio'
      ),
      createActionItem(
        'art_carving_marble_chisel',
        'Chiseling White Marble with Hammer and Point',
        'Tapping steel chisel with wooden mallet against stone block',
        'Wearing safety goggles, tapping a hardened steel chisel with a round wooden mallet to chip away fine flakes from a block of white Carrara marble',
        'art_studio'
      )
    ]
  },
  {
    id: 'photography_media',
    name: 'Photography & Media Reporting',
    icon: '🎥',
    description: 'Press journalism, camera operating, studio lighting, interviews, broadcasting, and photo shoots',
    actions: [
      createActionItem(
        'media_holding_press_mic',
        'Holding Media Press Mic in On-Camera Report',
        'Speaking into branded microphone reporting live to camera',
        'Holding a branded media news microphone with confidence, speaking clearly into the camera lens while reporting live on location with professional journalism poise',
        'photography_media'
      ),
      createActionItem(
        'media_dslr_viewfinder_focus',
        'Looking Through DSLR Camera Viewfinder',
        'Manual focusing telephoto lens while looking through optical finder',
        'Bringing a heavy professional DSLR camera to eye, left hand rotating the rubber focus ring on the 70-200mm lens while framing the shot through the optical viewfinder',
        'photography_media'
      ),
      createActionItem(
        'media_directing_photo_shoot',
        'Directing Models with Expressive Hand Gestures',
        'Guiding models’ posture and positioning on studio set',
        'Standing behind studio lights, gesturing with open hands to guide the models into a dynamic grouping pose, smiling encouragingly: "Hold that angle, perfection!"',
        'photography_media'
      ),
      createActionItem(
        'media_adjusting_softbox_light',
        'Adjusting Large Studio Softbox Diffuser',
        'Turning knob on light stand to angle softbox light toward subject',
        'Reaching up to loosen the brass grip head on a heavy C-stand, tilting a large octagonal softbox light downward forty-five degrees toward the center stage',
        'photography_media'
      ),
      createActionItem(
        'media_reviewing_lcd_screen',
        'Reviewing RAW Photos on Camera Rear Screen',
        'Tapping zoom button on camera LCD display to check sharpness',
        'Looking down at the illuminated rear LCD screen of the digital camera, zooming in 100% with thumb dial to verify crisp focus on character’s eyes with a satisfied nod',
        'photography_media'
      ),
      createActionItem(
        'media_shoulder_rig_camcorder',
        'Operating Cinema Camera on Shoulder Rig',
        'Holding dual handles of cinema camera looking into loupe',
        'Balancing a heavy cinema camera on padded shoulder rig, gripping dual ergonomic rosette handles and keeping shot perfectly level while tracking movement',
        'photography_media'
      ),
      createActionItem(
        'media_interview_notepad',
        'Interviewing Subject with Pen and Press Notepad',
        'Jotting quick notes on spiral reporter’s pad while listening intently',
        'Holding a narrow spiral-bound reporter’s notebook and clicking pen, nodding attentively while jotting down quotes during an in-depth on-the-record interview',
        'photography_media'
      ),
      createActionItem(
        'media_silver_reflector_bounce',
        'Holding Round Silver Reflector Disc',
        'Bouncing golden sunlight into subject’s face with collapsible reflector',
        'Holding a large circular folding reflector disc with both hands, angling the silver surface to bounce warm flattering fill light into the model’s face',
        'photography_media'
      ),
      createActionItem(
        'media_clipping_lav_mic',
        'Clipping Wireless Lavalier Mic to Collar',
        'Attaching small black lapel microphone to interviewee’s shirt',
        'Carefully clipping a miniature black lavalier microphone onto the subject’s jacket lapel, hiding the thin cable neatly behind collar before shooting',
        'photography_media'
      ),
      createActionItem(
        'media_swapping_camera_lens',
        'Carefully Swapping Prime Camera Lens',
        'Holding prime lens by mount while pressing body release button',
        'Pressing the lens release button on the camera body with one hand while smoothly twisting off an 85mm prime lens and mounting a 35mm lens with surgical precision',
        'photography_media'
      ),
      createActionItem(
        'media_macro_flower_shot',
        'Lying on Ground for Macro Nature Photo',
        'Prone on grass focusing macro lens inches from flower blossom',
        'Lying flat on stomach in the grass with elbows propped, holding macro lens mere centimeters from a dew-covered flower petal to capture crystal water droplets',
        'photography_media'
      ),
      createActionItem(
        'media_monitoring_audio_headphones',
        'Monitoring Boom Mic Audio with Headphones',
        'Holding headphones to ear watching digital sound meters',
        'Wearing professional studio monitor headphones over ears, adjusting audio gain dials on a field recorder while monitoring boom microphone levels',
        'photography_media'
      ),
      createActionItem(
        'media_typing_press_release',
        'Typing Breaking News Article on Tablet',
        'Typing fast on tablet with attached keyboard in media room',
        'Sitting at the press lounge table, typing a breaking news story rapidly on a slim tablet with smart keyboard while checking incoming wire photos',
        'photography_media'
      ),
      createActionItem(
        'media_finger_framing_box',
        'Framing Visual Shot with Thumbs and Index Fingers',
        'Making rectangular frame with hands looking through cutout',
        'Holding thumbs and index fingers together to form a small rectangular framing window in the air, peering through to visualize the cinematic composition',
        'photography_media'
      ),
      createActionItem(
        'media_adjusting_drone_remote',
        'Piloting Aerial 4K Drone with Joystick Controller',
        'Looking up at flying drone while tweaking gimbal tilt wheel',
        'Holding a dual-stick drone remote controller with smartphone monitor mounted on top, gently nudging joysticks to execute a sweeping aerial cinematic reveal shot',
        'photography_media'
      ),
      createActionItem(
        'media_tripod_bubble_level',
        'Leveling Carbon Fiber Tripod with Bubble Level',
        'Adjusting tripod leg locks until green spirit level is centered',
        'Loosening the twist-lock collar of a carbon fiber tripod leg on uneven ground, extending the section until the green circular bubble level centers perfectly',
        'photography_media'
      )
    ]
  },
  {
    id: 'academic_study',
    name: 'Academic, Reading & Science',
    icon: '📚',
    description: 'Library research, reading antique books, scientific experiments, chalkboards, and scholarly discovery',
    actions: [
      createActionItem(
        'academic_reading_hardcover_book',
        'Reading Thick Hardcover Leather Book',
        'Holding open heavy tome with two hands reading intently',
        'Sitting in a high-backed wooden library armchair holding an open leather-bound hardcover book in both hands, absorbed in the printed pages',
        'academic_study'
      ),
      createActionItem(
        'academic_microscope_inspection',
        'Examining Specimen Under Laboratory Microscope',
        'Looking into binocular microscope turning fine focus knob',
        'Seated at a scientific lab bench, looking down into the dual eyepieces of a compound optical microscope while turning the brass fine-focus dial with fingertips',
        'academic_study'
      ),
      createActionItem(
        'academic_chalkboard_equations',
        'Writing Complex Mathematical Formulas on Chalkboard',
        'Drawing equations and Greek symbols with chalk on green board',
        'Standing before a massive green classroom chalkboard with chalk in hand, writing intricate calculus proofs and quantum equations with fluid academic confidence',
        'academic_study'
      ),
      createActionItem(
        'academic_library_ladder_browse',
        'Browsing High Shelves on Rolling Library Ladder',
        'Perched on wooden ladder sliding finger across book spines',
        'Standing on the middle rungs of a rolling wooden library ladder, gliding finger across the gilded spines of antique volumes to select a rare history tome',
        'academic_study'
      ),
      createActionItem(
        'academic_adjusting_reading_glasses',
        'Pushing Reading Glasses Up Nose Bridge',
        'Tapping index finger to bridge of wire-rimmed spectacles',
        'Using index finger to gently push wire-rimmed reading spectacles higher onto the bridge of nose, looking over the rims with analytical sharpness',
        'academic_study'
      ),
      createActionItem(
        'academic_turning_fragile_parchment',
        'Carefully Turning Antique Manuscript Page',
        'Using cotton gloves to turn fragile aged parchment leaf',
        'Wearing white archival cotton gloves, delicately turning the corner of a centuries-old illuminated manuscript page with extreme scholarly reverence',
        'academic_study'
      ),
      createActionItem(
        'academic_whiteboard_brainstorm',
        'Sketching Molecular Structure on Whiteboard',
        'Drawing chemical hexagon rings with dry-erase marker',
        'Drawing interconnected chemical benzene rings and functional group notations on a large dry-erase whiteboard with a blue marker during group research',
        'academic_study'
      ),
      createActionItem(
        'academic_highlighting_textbook',
        'Highlighting Key Passage in Textbook',
        'Gliding yellow neon highlighter across textbook page',
        'Gliding a neon yellow highlighter pen smoothly across a critical sentence in a dense biology textbook, holding the page flat with open left palm',
        'academic_study'
      ),
      createActionItem(
        'academic_spinning_celestial_globe',
        'Tracing Constellations on Brass Celestial Globe',
        'Spinning antique star globe and pointing at Andromeda',
        'Gently rotating a detailed brass celestial globe on its gimbaled axis, tracing constellation outlines with index finger under the warm glow of a desk lamp',
        'academic_study'
      ),
      createActionItem(
        'academic_measuring_graduated_cylinder',
        'Measuring Colored Liquid at Eye Level in Cylinder',
        'Crouching to check meniscus of blue liquid in glass beaker',
        'Bending down until eyes are level with the measurement markings on a glass graduated cylinder, checking the liquid meniscus of an emerald reagent',
        'academic_study'
      ),
      createActionItem(
        'academic_stacking_encyclopedias',
        'Carrying Heavy Stack of Encyclopedia Volumes',
        'Carrying towering stack of books balanced against chest',
        'Carrying a heavy stack of five thick encyclopedia volumes balanced against chest with both arms, navigating through library stacks with determined smile',
        'academic_study'
      ),
      createActionItem(
        'academic_debating_points',
        'Debating Theory with Scholarly Hand Gestures',
        'Explaining complex conceptual thesis with open palms',
        'Standing in discussion with peers, gesturing with open upturned palms and counting supporting arguments on fingers with impassioned intellectual vigor',
        'academic_study'
      ),
      createActionItem(
        'academic_organizing_index_cards',
        'Flipping Through Handwritten Study Flashcards',
        'Reviewing paper index flashcards held on metal ring',
        'Flipping rapidly through a stack of handwritten study flashcards held together by a binder ring, quizzing memory on key definitions with rapid focus',
        'academic_study'
      ),
      createActionItem(
        'academic_pipetting_reagent',
        'Dispensing Reagent with Precision Micropipette',
        'Pressing plunger to drop droplet into multi-well test plate',
        'Holding a digital micropipette vertically with thumb on the plunger, carefully dispensing a two-microliter droplet of enzyme into a 96-well plastic culture plate',
        'academic_study'
      ),
      createActionItem(
        'academic_magnifying_glass_inspect',
        'Examining Ancient Coin with Magnifying Glass',
        'Holding brass magnifying loupe close to silver Roman coin',
        'Holding a brass handheld magnifying glass over an ancient silver coin resting on dark velvet, inspecting the worn Latin inscription with keen interest',
        'academic_study'
      ),
      createActionItem(
        'academic_marking_essay_red_pen',
        'Writing Marginal Notes with Red Ink Pen',
        'Reviewing typed paper manuscript annotating notes in margin',
        'Sitting at an oak desk surrounded by open reference books, writing thoughtful constructive notes and checkmarks in the margin of a student research paper',
        'academic_study'
      )
    ]
  },
  {
    id: 'technology_cyber',
    name: 'Technology, Coding & Sci-Fi',
    icon: '💻',
    description: 'Software development, holographic interfaces, electronics, VR headsets, cybersecurity, and cybernetic tech',
    actions: [
      createActionItem(
        'tech_typing_mechanical_keyboard',
        'Speed Typing on Custom Mechanical Keyboard',
        'Fingers flying across RGB-backlit mechanical keys at multi-monitor workstation',
        'Fingers gliding at high speed across an ergonomic mechanical keyboard with custom keycaps, glowing softly under RGB lighting as code streams across three monitors',
        'technology_cyber'
      ),
      createActionItem(
        'tech_soldering_circuit_board',
        'Precision Soldering on Microchip Circuit Board',
        'Holding fine soldering iron and silver wire under magnifying lamp',
        'Holding a hot fine-tip soldering iron in right hand and thin rosin-core solder wire in left, creating a shiny silver joint on a microchip printed circuit board under a lighted lamp',
        'technology_cyber'
      ),
      createActionItem(
        'tech_holographic_interface_swipe',
        'Swiping Floating Glowing Holographic Display',
        'Interacting with translucent neon blue holographic UI in mid-air',
        'Reaching forward with fingertips to swipe and expand a floating, translucent neon-cyan holographic 3D data interface suspended in mid-air before eyes',
        'technology_cyber'
      ),
      createActionItem(
        'tech_adjusting_vr_headset',
        'Adjusting Futuristic VR / AR Headset',
        'Touching temples of sleek virtual reality visor exploring digital world',
        'Wearing a sleek, glowing virtual reality headset visor, touching the side touch sensor temples with fingertips while gazing around an immersive digital landscape',
        'technology_cyber'
      ),
      createActionItem(
        'tech_drone_joystick_piloting',
        'Piloting Tech Drone with Dual-Stick Joystick Remote',
        'Controlling carbon-fiber aerial drone with precision thumbstick input',
        'Holding a carbon-fiber remote controller with dual precision aluminum thumbsticks, guiding a camera drone through tight obstacle course with focused precision',
        'technology_cyber'
      ),
      createActionItem(
        'tech_fiber_optic_patching',
        'Plugging Glowing Fiber-Optic Cable into Server Rack',
        'Inserting LC optical connector into flashing datacenter rack',
        'Standing before a towering glass-door datacenter server rack, clicking a glowing blue-tipped fiber optic cable into a high-speed optical switch port with a solid click',
        'technology_cyber'
      ),
      createActionItem(
        'tech_cyber_goggles_adjustment',
        'Adjusting Glowing Cyberpunk HUD Goggles',
        'Tapping frames of illuminated heads-up display glasses',
        'Tapping the carbon-frame side button of neon-tinted smart cyberpunk glasses, watching digital navigational telemetry and battery metrics project across the lenses',
        'technology_cyber'
      ),
      createActionItem(
        'tech_robotic_arm_calibration',
        'Calibrating Articulated Robotic Arm Joints',
        'Using touchscreen tablet to program multi-axis robotic gripper',
        'Holding an industrial teaching pendant tablet, guiding a six-axis orange robotic arm through fluid pick-and-place coordinate paths with millimeter accuracy',
        'technology_cyber'
      ),
      createActionItem(
        'tech_hardware_schematic_stylus',
        'Sketching Hardware Schematics with Digital Stylus',
        'Drawing circuit diagrams on large high-resolution drawing tablet',
        'Using an active pressure-sensitive digital stylus pen to draft multi-layer PCB circuit traces and microcontroller pinouts on a 27-inch drawing tablet screen',
        'technology_cyber'
      ),
      createActionItem(
        'tech_terminal_command_enter',
        'Executing Critical Command in Terminal Console',
        'Pressing enter key on green-on-black terminal matrix screen',
        'Hovering index finger over the enter key of a vintage green-phosphor CRT terminal, slamming the key down to deploy the automated neural network build',
        'technology_cyber'
      ),
      createActionItem(
        'tech_multimeter_voltage_probe',
        'Probing Circuit Voltage with Digital Multimeter',
        'Holding red and black test probes against PCB contact points',
        'Holding insulated red positive and black negative test probes against golden test pads on a prototype motherboard, watching the digital multimeter display 3.3V',
        'technology_cyber'
      ),
      createActionItem(
        'tech_barcode_laser_scan',
        'Scanning Inventory Barcode with Handheld Laser',
        'Aiming red laser beam scanner at electronic component packaging',
        'Aiming a wireless handheld laser scanner at a QR barcode on an anti-static component bag, hearing the crisp beep as data populates the inventory database',
        'technology_cyber'
      ),
      createActionItem(
        'tech_data_drive_insertion',
        'Inserting Encrypted Glowing Data Drive into Console',
        'Sliding illuminated high-security drive into magnetic slot',
        'Sliding an illuminated, encrypted solid-state data cartridge smoothly into a brushed titanium console slot until magnetic lock clamps down with a soft chime',
        'technology_cyber'
      ),
      createActionItem(
        'tech_cable_management_zip',
        'Fastening Velcro Cable Ties Behind Desk Workstation',
        'Organizing thick bundle of braided cables with reusable ties',
        'Kneeling beneath the computer desk with a flashlight, neatly wrapping a bundle of thick braided power and display cables in black velcro management ties',
        'technology_cyber'
      ),
      createActionItem(
        'tech_server_status_nod',
        'Inspecting Flashing Green Server LED Activity',
        'Checking rows of blinking status lights across rack cabinet',
        'Standing in a cool, climate-controlled server room, inspecting long vertical rows of blinking emerald and amber LED activity lights with an approving nod',
        'technology_cyber'
      ),
      createActionItem(
        'tech_smart_watch_ai_voice',
        'Speaking AI Voice Prompt into Smartwatch',
        'Holding wrist near mouth commanding smart AI assistant',
        'Raising wrist near lips to speak an encrypted query into the microphone of a titanium smartwatch, watching audio waveform animations dance on the screen',
        'technology_cyber'
      )
    ]
  },
  {
    id: 'social_friendship',
    name: 'Social, Friendship & Gathering',
    icon: '🤝',
    description: 'High fives, group selfies, sharing laughs, whispering secrets, linked arms, toasts, and friendship warmth',
    actions: [
      createActionItem(
        'social_high_five_celebrate',
        'Jumping High-Five with Companion',
        'Leaping in air clapping open palms together in celebration',
        'Leaping lightly into the air with beaming smile to slap palms in a crisp, enthusiastic high-five with a close friend to celebrate shared triumph',
        'social_friendship'
      ),
      createActionItem(
        'social_whispering_secret',
        'Whispering Secret into Friend’s Ear',
        'Cupping hand around companion’s ear sharing secret with giggle',
        'Cupping one hand playfully beside a companion’s ear to whisper an amusing secret, both breaking into suppressed, joyful giggles',
        'social_friendship'
      ),
      createActionItem(
        'social_group_selfie_phone',
        'Holding Smartphone High for Group Selfie',
        'Extending arm with phone snapping wide group portrait',
        'Extending arm high with a smartphone in wide-angle camera mode, squeezing in close with friends who make funny faces and peace signs for a group selfie',
        'social_friendship'
      ),
      createActionItem(
        'social_linked_arms_walk',
        'Walking Arm-in-Arm Down Sunny Avenue',
        'Hooking elbows together walking down promenade with synchronized steps',
        'Hooking elbows warmly with a companion while strolling along a sunlit brick sidewalk, chatting happily with synchronized walking steps',
        'social_friendship'
      ),
      createActionItem(
        'social_table_belly_laugh',
        'Hearty Table Laugh with Hands on Table',
        'Laughing hysterically with head thrown back at dinner table',
        'Sitting with friends around a lively dinner table, throwing head back in genuine hearty laughter, resting hands on table enjoying the warm camaraderie',
        'social_friendship'
      ),
      createActionItem(
        'social_clinking_drinks_toast',
        'Clinking Sparkling Drinks in Festive Toast',
        'Raising glasses together to touch rims with a cheerful chime',
        'Raising tall glasses filled with sparkling citrus mocktails into the center of the circle, clinking rims together with a bright chime for a festive toast',
        'social_friendship'
      ),
      createActionItem(
        'social_sharing_earbuds_music',
        'Sharing Earbuds Listening to Favorite Song',
        'Passing one white earbud to friend leaning heads close',
        'Handing one white wireless earbud to a friend while keeping the other in ear, leaning heads close together to bob in unison to the infectious bass rhythm',
        'social_friendship'
      ),
      createActionItem(
        'social_warm_greeting_hug',
        'Warm Welcome Hug with Arms Wrapped',
        'Embracing friend tightly with radiant welcoming smile',
        'Wrapping arms warmly around a long-awaited friend in an affectionate embrace, squeezing tight with closed eyes and genuine joyful relief',
        'social_friendship'
      ),
      createActionItem(
        'social_bench_shoulder_lean',
        'Leaning Shoulders Together on Park Bench',
        'Sitting on wooden park bench resting shoulders comfortably',
        'Sitting side by side on a green wooden park bench, leaning shoulders together comfortably while watching the sunset paint the sky in lavender hues',
        'social_friendship'
      ),
      createActionItem(
        'social_showing_funny_video',
        'Showing Funny Smartphone Video to Friends',
        'Holding phone horizontal pointing at funny video clip',
        'Holding a smartphone horizontally between two friends, pointing at a hilarious animal video while watching their faces light up with laughter',
        'social_friendship'
      ),
      createActionItem(
        'social_braiding_friend_hair',
        'Braiding Friend’s Long Hair on Floor',
        'Sitting behind friend gently weaving intricate hair braid',
        'Sitting cross-legged on the floor behind a friend, gently brushing and weaving their long hair into an intricate three-strand French braid',
        'social_friendship'
      ),
      createActionItem(
        'social_pinky_promise_lock',
        'Locking Pinky Fingers in Solemn Promise',
        'Interlocking little pinky fingers with sincere gaze',
        'Hooking little pinky fingers together in a sacred pinky promise, pressing thumbs together with a sincere, heartfelt look of unbreakable loyalty',
        'social_friendship'
      ),
      createActionItem(
        'social_playful_pillow_tap',
        'Playful Pillow Fight Swing with Giggle',
        'Swinging fluffy feather pillow playfully across bed',
        'Holding a fluffy feather pillow by its corners with both hands, swinging it playfully toward a giggling friend in a joyful cozy sleepover battle',
        'social_friendship'
      ),
      createActionItem(
        'social_picnic_blanket_chat',
        'Chatting on Red Checkered Picnic Blanket',
        'Lounging on picnic blanket sharing grapes and sandwiches',
        'Lounging comfortably on a red-and-white checkered picnic blanket in the grass, leaning on one elbow while sharing fresh grapes and lively conversation',
        'social_friendship'
      ),
      createActionItem(
        'social_board_game_cheer',
        'Cheering Winning Board Game Move',
        'Throwing hands up as wooden meeple token reaches winning space',
        'Leaning over an intricate tabletop board game, rolling twin dice and jumping up with raised fists as token lands on the winning victory square',
        'social_friendship'
      ),
      createActionItem(
        'social_huddling_cold_breeze',
        'Huddling Close Against Chilly Ocean Breeze',
        'Pulling big shared blanket over shoulders with friend',
        'Draping a large wool stadium blanket across both of your shoulders, huddling close side-by-side to share warmth against a crisp seaside wind',
        'social_friendship'
      )
    ]
  },
  {
    id: 'romance_affection',
    name: 'Romance, Tender & Affectionate Poses',
    icon: '💖',
    description: 'Romantic eye contact, hand holding, slow dance, gentle embraces, forehead rest, and intimate affection',
    actions: [
      createActionItem(
        'romance_interlocked_fingers_walk',
        'Walking with Interlocked Fingers',
        'Holding hands with fingers deeply interlaced swinging gently',
        'Walking side-by-side along a quiet path, hands clasped together with fingers deeply interlaced, swaying arms gently in sweet romantic harmony',
        'romance_affection'
      ),
      createActionItem(
        'romance_tucking_hair_behind_ear',
        'Gently Tucking Hair Strand Behind Partner’s Ear',
        'Reaching up tenderly to brush stray hair behind ear',
        'Reaching up a gentle hand to brush a stray lock of hair softly behind partner’s ear, fingertips grazing cheek with tender adoration',
        'romance_affection'
      ),
      createActionItem(
        'romance_forehead_to_forehead',
        'Resting Forehead to Forehead with Closed Eyes',
        'Leaning foreheads together sharing quiet intimate breath',
        'Leaning forward until foreheads touch softly, closing eyes in quiet blissful intimacy, breathing in synchronization with soft smiles',
        'romance_affection'
      ),
      createActionItem(
        'romance_slow_dance_embrace',
        'Slow Dancing in Close Gentle Embrace',
        'Arms wrapped around neck and waist swaying to soft music',
        'Swaying slowly in a close romantic dance, arms resting gently around partner’s shoulders, head resting against collarbone under amber lighting',
        'romance_affection'
      ),
      createActionItem(
        'romance_shared_umbrella_rain',
        'Sharing an Umbrella in Gentle Evening Rain',
        'Huddling close under single black umbrella on wet street',
        'Holding a single large umbrella over both of you in the evening drizzle, wrapping arm around partner’s waist to keep them dry and warm',
        'romance_affection'
      ),
      createActionItem(
        'romance_embracing_from_behind',
        'Warm Embrace from Behind at Sunset Overlook',
        'Wrapping arms around partner’s waist resting chin on shoulder',
        'Standing behind partner at a scenic sunset overlook, wrapping arms gently around their waist and resting chin warmly on their shoulder',
        'romance_affection'
      ),
      createActionItem(
        'romance_cheek_kiss_closed_eyes',
        'Tender Kiss on Cheek with Closed Eyes',
        'Leaning in to plant a sweet gentle kiss on partner’s cheek',
        'Tilting head up gently to plant a soft, loving kiss on partner’s cheek, hand resting lightly on their chest with eyes peacefully closed',
        'romance_affection'
      ),
      createActionItem(
        'romance_offering_red_rose',
        'Offering a Single Stem Crimson Rose',
        'Presenting fresh blooming red rose with tender heartfelt smile',
        'Holding a fresh long-stemmed crimson rose in hand, extending it forward with a bashful, heartfelt smile and affectionate sparkling gaze',
        'romance_affection'
      ),
      createActionItem(
        'romance_tracing_jawline_touch',
        'Caressing Jawline with Gentle Fingertips',
        'Cupping partner’s cheek and tracing jawline with thumb',
        'Cupping partner’s face with one palm, tracing the contour of their jawline gently with thumb while gazing deeply into their eyes',
        'romance_affection'
      ),
      createActionItem(
        'romance_feeding_strawberry',
        'Feeding Sweet Red Strawberry to Partner',
        'Holding ripe strawberry to partner’s lips with playful grin',
        'Holding a ripe, red chocolate-dipped strawberry gently between fingers, offering it to partner’s lips with a charming playful smile',
        'romance_affection'
      ),
      createActionItem(
        'romance_wrapped_single_scarf',
        'Wrapped Together in Single Oversized Wool Scarf',
        'Wrapping long knit winter scarf around both necks smiling',
        'Looping a long, chunky knit wool scarf around both of your necks, standing close cheek-to-cheek with frost on your breath and bright smiles',
        'romance_affection'
      ),
      createActionItem(
        'romance_gazing_into_eyes',
        'Deep Meaningful Eye Contact Across Table',
        'Resting chin in palm gazing lovingly across candlelit table',
        'Resting chin in palm on a candlelit bistro table, gazing deeply and lovingly into partner’s eyes, oblivious to the bustling world around',
        'romance_affection'
      ),
      createActionItem(
        'romance_kiss_on_forehead',
        'Protective Gentle Kiss on Forehead',
        'Bowing head to kiss partner’s forehead with tender warmth',
        'Bending head down gently to press a warm, protective kiss against partner’s forehead while holding their hands safely in yours',
        'romance_affection'
      ),
      createActionItem(
        'romance_twirling_under_arm',
        'Twirling Partner Under Raised Arm in Street',
        'Holding partner’s hand high spinning them around in joy',
        'Lifting partner’s hand high in the air and spinning them gracefully in a joyous twirl on the empty cobblestone street under moonlight',
        'romance_affection'
      ),
      createActionItem(
        'romance_leaning_head_on_shoulder',
        'Resting Head on Partner’s Shoulder on Train',
        'Resting head softly on partner’s shoulder watching scenery pass',
        'Sitting together by a scenic train window, letting head rest comfortably on partner’s shoulder while watching golden countryside roll by',
        'romance_affection'
      ),
      createActionItem(
        'romance_whispering_sweet_nothing',
        'Whispering Sweet Affection in Golden Hour Light',
        'Leaning in close to whisper romantic words bathed in sunset glow',
        'Leaning in close until lips are near partner’s ear, whispering tender words of love bathed in the warm ethereal glow of golden hour sunset',
        'romance_affection'
      )
    ]
  }
];
