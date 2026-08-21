import { ActionGroup, createActionItem } from './types';

export const GROUPS_HOME_AND_WORK: ActionGroup[] = [
  {
    id: 'workplace_office',
    name: 'Workplace, Executive & Presentation',
    icon: '💼',
    description: 'Boardroom presentations, signing contracts, laser pointers, executive handshakes, and conference discussions',
    actions: [
      createActionItem(
        'work_presentation_pointer',
        'Delivering Keynote with Laser Pointer at Projection Screen',
        'Pointing red laser at bar chart on conference screen presenting metrics',
        'Standing beside a large illuminated presentation screen in a modern conference room, gesturing with confidence while aiming a laser pointer at quarterly growth charts',
        'workplace_office'
      ),
      createActionItem(
        'work_signing_executive_contract',
        'Signing Official Document with Fountain Pen',
        'Applying gold-nib fountain pen signature to heavy legal parchment',
        'Sitting at a polished mahogany executive desk, holding a black-and-gold fountain pen poised to write a flowing official signature across the legal agreement',
        'workplace_office'
      ),
      createActionItem(
        'work_firm_handshake_deal',
        'Firm Professional Handshake Across Conference Table',
        'Clasping hands firmly in business partnership agreement',
        'Reaching across the conference table to clasp client’s hand in a firm, warm professional handshake, exchanging direct eye contact and confident smiles',
        'workplace_office'
      ),
      createActionItem(
        'work_standing_desk_laptop',
        'Working at Adjustable Standing Desk with Coffee Mug',
        'Typing on laptop at elevated standing desk taking a sip of coffee',
        'Standing comfortably at an ergonomic motorized standing desk, typing on a slim laptop while holding a ceramic coffee mug, natural sunlight streaming in',
        'workplace_office'
      ),
      createActionItem(
        'work_boardroom_listening',
        'Attentive Listening in Executive Board Meeting',
        'Leaning forward in leather swivel chair resting hands on table',
        'Sitting attentively in a high-backed ergonomic leather swivel chair at the head of the boardroom table, hands clasped lightly on notepad, listening with sharp focus',
        'workplace_office'
      ),
      createActionItem(
        'work_whiteboard_strategy_sketch',
        'Mapping Flowchart Architecture on Whiteboard',
        'Drawing connecting arrow boxes with dry-erase marker on glass board',
        'Standing before a clear glass dry-erase board, drawing clean flowchart boxes and connecting directional arrows with a blue marker to map project architecture',
        'workplace_office'
      ),
      createActionItem(
        'work_holding_leather_briefcase',
        'Carrying Slim Leather Briefcase Through Glass Atrium',
        'Walking briskly through corporate lobby carrying leather attache',
        'Walking briskly across the polished marble floor of a corporate skyscraper atrium, carrying a slim brown leather briefcase with purposeful executive stride',
        'workplace_office'
      ),
      createActionItem(
        'work_handing_business_card',
        'Presenting Business Card with Two-Handed Etiquette',
        'Offering embossed business card with both hands and slight bow',
        'Holding a crisp embossed cardstock business card with both hands at chest level, presenting it to a partner with a respectful nod of greeting',
        'workplace_office'
      ),
      createActionItem(
        'work_checking_rolex_watch',
        'Checking Wristwatch Time Before Crucial Meeting',
        'Pulling back suit cuff to glance at luxury stainless steel watch',
        'Pulling back the tailored cuff of a suit jacket to check the time on a stainless steel chronograph wristwatch, verifying minutes remaining before the meeting',
        'workplace_office'
      ),
      createActionItem(
        'work_stapling_report_dossier',
        'Stapling Thick Financial Report with Desktop Stapler',
        'Pressing palm on heavy metal stapler binding documents',
        'Aligning the corners of a printed multi-page financial summary dossier, pressing down firmly on a heavy chrome desktop stapler with a satisfying mechanical snap',
        'workplace_office'
      ),
      createActionItem(
        'work_conference_phone_mute',
        'Pressing Mute Button on Polycom Conference Speakerphone',
        'Tapping red illuminated mute button on triangular conference phone',
        'Leaning forward to tap the red glowing mute button in the center of a triangular conference speakerphone, whispering a quick sidebar comment to colleagues',
        'workplace_office'
      ),
      createActionItem(
        'work_organizing_color_sticky_notes',
        'Arranging Kanban Sticky Notes on Glass Wall',
        'Placing yellow and cyan sticky notes in columns on glass divider',
        'Reaching up to reposition bright yellow and cyan sticky notes into the "Completed" column of an agile Kanban workflow board mapped on an office glass wall',
        'workplace_office'
      ),
      createActionItem(
        'work_reviewing_blueprints_spread',
        'Unrolling Architectural Blueprints Across Table',
        'Weighing down corners of large architectural floor plan blueprints',
        'Unrolling a large set of blue architectural floor plans across a drafting table, holding the corners flat with metal paperweights to inspect dimensions',
        'workplace_office'
      ),
      createActionItem(
        'work_sipping_espresso_balcony',
        'Sipping Double Espresso on Office Balcony at Sunset',
        'Holding porcelain espresso cup gazing over city skyline',
        'Standing on the open glass terrace of an executive office suite at dusk, taking a slow sip from a white porcelain espresso cup while admiring the glowing skyline',
        'workplace_office'
      ),
      createActionItem(
        'work_handing_coffee_to_colleague',
        'Handing Fresh Latte Cup to Teammate with Smile',
        'Offering paper takeout coffee cup to desk neighbor',
        'Walking up to a colleague’s workstation holding two takeaway coffee cups, handing one over with a warm friendly smile and a cheerful "Brought you your favorite!"',
        'workplace_office'
      ),
      createActionItem(
        'work_organizing_desk_drawer',
        'Neatly Arranging Pens in Wooden Desk Organizer',
        'Placing highlighters and pens in divided wooden drawer tray',
        'Sliding open a solid oak desk drawer, neatly placing fountain pens, paperclips, and sticky notes into a divided wooden tray organizer with methodical satisfaction',
        'workplace_office'
      )
    ]
  },
  {
    id: 'gardening_plants',
    name: 'Gardening, Plants & Botany',
    icon: '🌱',
    description: 'Potting succulents, watering cans, pruning shears, harvesting herbs, botanical greenhouses, and soil care',
    actions: [
      createActionItem(
        'garden_potting_succulent_soil',
        'Transplanting Succulent into Terra Cotta Pot',
        'Scooping rich potting soil around jade succulent plant with trowel',
        'Wearing cotton gardening gloves, using a metal hand trowel to scoop rich dark soil around the roots of a plump green succulent inside a terra cotta clay pot',
        'gardening_plants'
      ),
      createActionItem(
        'garden_watering_rose_can',
        'Watering Blooming Rosebush with Copper Can',
        'Pouring gentle shower of water from long-spout watering can',
        'Tipping a vintage polished copper watering can with rose head, showering a gentle spray of cool water over flowering pink English roses and lush leaves',
        'gardening_plants'
      ),
      createActionItem(
        'garden_pruning_shears_trim',
        'Pruning Dead Leaves with Sharp Secateurs',
        'Snapping bypass pruning shears trimming dry branch',
        'Using bypass pruning shears to cleanly snip away dry stems and yellow leaves from a flourishing indoor monstera plant with careful horticultural technique',
        'gardening_plants'
      ),
      createActionItem(
        'garden_harvesting_ripe_tomatoes',
        'Harvesting Cherry Tomatoes into Woven Basket',
        'Plucking ripe red tomatoes off vine into wicker basket',
        'Crouching beside a tall garden trellis, gently twisting sweet ripe red cherry tomatoes off the green vine and placing them into a wicker basket',
        'gardening_plants'
      ),
      createActionItem(
        'garden_misting_fern_leaves',
        'Spritzing Fern Fronds with Glass Plant Mister',
        'Pumping brass thumb mister spraying fine water cloud on leaves',
        'Holding a vintage amber glass spray bottle with brass thumb pump, misting a fine cloud of moisture droplets over delicate green maidenhair fern fronds',
        'gardening_plants'
      ),
      createActionItem(
        'garden_sniffing_fresh_lavender',
        'Crushing and Inhaling Fragrant Lavender Sprigs',
        'Rubbing purple lavender blossoms between fingers inhaling scent',
        'Gently rolling purple lavender blossoms between fingertips, bringing hands close to nose to inhale the soothing, sweet herbal floral fragrance with closed eyes',
        'gardening_plants'
      ),
      createActionItem(
        'garden_wheelbarrow_mulch_push',
        'Pushing Wheelbarrow Filled with Pine Bark Mulch',
        'Guiding handles of green wheelbarrow down garden path',
        'Gripping the wooden handles of a green garden wheelbarrow loaded with fragrant cedar mulch, wheeling it smoothly along the flagstone garden walkway',
        'gardening_plants'
      ),
      createActionItem(
        'garden_planting_sunflower_seeds',
        'Pressing Seed into Moist Soil Furrow',
        'Using index finger to poke hole and drop black striped seed',
        'Poking a small hole two inches deep into the moist, freshly tilled earth with index finger, dropping a striped sunflower seed inside and covering it gently',
        'gardening_plants'
      ),
      createActionItem(
        'garden_examining_greenhouse_sprouts',
        'Inspecting Seedling Sprouts in Greenhouse Tray',
        'Examining tiny green cotyledon shoots in starter cell tray',
        'Leaning over a sun-drenched greenhouse potting bench, gently touching the vibrant green two-leaf sprout of a baby cucumber plant emerging from peat soil',
        'gardening_plants'
      ),
      createActionItem(
        'garden_tying_tomato_twine',
        'Tying Vine to Bamboo Stake with Jute Twine',
        'Wrapping soft natural twine supporting climbing vine',
        'Wrapping soft brown jute twine in a figure-eight knot around a heavy fruiting tomato stem and a vertical green bamboo garden stake for support',
        'gardening_plants'
      ),
      createActionItem(
        'garden_arranging_cut_flowers',
        'Arranging Fresh Cut Blooms in Ceramic Vase',
        'Trimming stems diagonally and placing peonies in water vase',
        'Trimming the stems of freshly picked white peonies and eucalyptus at a 45-degree angle, placing them into a fluted ceramic vase to compose a lush centerpiece',
        'gardening_plants'
      ),
      createActionItem(
        'garden_brushing_dirt_knees',
        'Brushing Garden Soil off Denim Kneepads',
        'Standing up dusting rich dark earth off work pants',
        'Standing up from the raised garden bed with a satisfied smile, brushing specks of dark rich compost soil off canvas work overalls with gloved hands',
        'gardening_plants'
      ),
      createActionItem(
        'garden_hanging_macrame_planter',
        'Hanging Macrame Plant Hanger from Ceiling Hook',
        'Lifting trailing pothos plant in woven rope hanger to hook',
        'Reaching up with both hands to suspend a handmade beige macrame plant hanger holding a lush trailing golden pothos from a ceiling brass hook',
        'gardening_plants'
      ),
      createActionItem(
        'garden_raking_autumn_leaves',
        'Gathering Golden Autumn Leaves with Fan Rake',
        'Sweeping red and amber maple leaves into neat lawn pile',
        'Using a wide flexible fan rake to sweep dry golden and crimson maple leaves across the green lawn into a towering, crisp autumn leaf pile',
        'gardening_plants'
      ),
      createActionItem(
        'garden_checking_soil_moisture',
        'Testing Soil Moisture with Digital Meter Probe',
        'Inserting metal moisture sensor prong into houseplant root ball',
        'Inserting the long metal probe of a soil moisture gauge deep into the potting mix of a fiddle-leaf fig tree, checking the moisture dial reading',
        'gardening_plants'
      ),
      createActionItem(
        'garden_sipping_herbal_tea_bench',
        'Enjoying Fresh Mint Tea on Shaded Garden Arbor Bench',
        'Sipping steamy herbal tea under wooden trellis with climbing roses',
        'Sitting on a shaded wooden bench under a rose-covered arbor, holding a warm glass mug of fresh peppermint tea made with freshly plucked mint leaves',
        'gardening_plants'
      )
    ]
  },
  {
    id: 'pet_care_animals',
    name: 'Pet Care & Animal Companionship',
    icon: '🐾',
    description: 'Dog walking, brushing cat fur, playing fetch, teaching tricks, petting rabbits, and animal care',
    actions: [
      createActionItem(
        'pet_brushing_fluffy_cat',
        'Gently Brushing Longhair Cat with Slicker Brush',
        'Brushing soft white fur as cat purrs on lap',
        'Sitting on the carpet with a fluffy longhair Persian cat resting contentedly on lap, gently brushing its soft fur with a wooden slicker brush as it purrs happily',
        'pet_care_animals'
      ),
      createActionItem(
        'pet_throwing_fetch_ball',
        'Throwing Tennis Ball for Excited Golden Retriever',
        'Winding up arm to throw bright yellow ball across green park',
        'Holding a tennis ball in hand, smiling excitedly as a golden retriever wags its tail, then throwing the ball far across the grassy meadow for an energetic game of fetch',
        'pet_care_animals'
      ),
      createActionItem(
        'pet_scratching_dog_ears',
        'Scratching Puppy Behind the Ears on Floor',
        'Kneeling down to give loving scratches behind puppy’s floppy ears',
        'Kneeling on the living room rug, scratching a joyful puppy with both hands behind its floppy ears while it leans into the affection with closed eyes and thumping tail',
        'pet_care_animals'
      ),
      createActionItem(
        'pet_teaching_dog_shake',
        'Teaching Dog High-Five Trick with Treat',
        'Holding palm out as dog places paw in hand, giving tasty treat',
        'Holding an open palm out at dog’s eye level, saying "Shake!" as the attentive pup raises its front paw to place in hand, rewarded with a crunchy treat',
        'pet_care_animals'
      ),
      createActionItem(
        'pet_cat_feather_wand_play',
        'Dangling Colorful Feather Wand Toy for Kitten',
        'Flicking flexible wand with feathers as kitten pounces',
        'Flicking a flexible plastic wand with fluttering colorful guinea fowl feathers through the air, watching a playful striped kitten leap and swat with agile paws',
        'pet_care_animals'
      ),
      createActionItem(
        'pet_walking_leashed_dog',
        'Walking Dog on Braided Rope Leash Down Sidewalk',
        'Holding comfortable leather leash handle walking alongside happy dog',
        'Strolling down a tree-lined neighborhood sidewalk on a sunny morning, holding the handle of a braided rope leash as dog trotts happily ahead with tail held high',
        'pet_care_animals'
      ),
      createActionItem(
        'pet_cuddling_sleeping_bunny',
        'Cradling Soft Bunny Rabbit Against Chest',
        'Holding fluffy lop-eared rabbit gently stroke its ears',
        'Cradling a tiny, soft lop-eared rabbit securely against chest with both hands, gently stroking the bridge of its nose as its whiskers twitch peacefully',
        'pet_care_animals'
      ),
      createActionItem(
        'pet_filling_food_bowl',
        'Scooping Crunchy Kibble into Stainless Steel Bowl',
        'Pouring measuring cup of pet food into shiny pet dish',
        'Using a blue measuring cup to scoop crunchy dry kibble from a food container, pouring it into a stainless steel bowl with a cheerful sound that brings pets running',
        'pet_care_animals'
      ),
      createActionItem(
        'pet_towel_drying_wet_dog',
        'Towel Drying Fluffy Dog After Bath',
        'Rubbing dog’s coat vigorously with large absorbent towel',
        'Kneeling by the bathroom door wrapping a big microfiber bath towel around a freshly bathed dog, laughing as the dog shakes water droplets while being dried',
        'pet_care_animals'
      ),
      createActionItem(
        'pet_feeding_bird_perch',
        'Offering Millet Spray to Parakeet on Finger',
        'Letting small colorful parrot perch on index finger eating seeds',
        'Holding out an extended index finger for a bright yellow-and-green parakeet to step up and perch on, holding a sprig of golden millet spray for it to nibble',
        'pet_care_animals'
      ),
      createActionItem(
        'pet_clipping_harness_buckle',
        'Fastening Padded Adventure Dog Harness',
        'Clicking plastic quick-release buckles around dog’s chest',
        'Kneeling in front of dog in the entryway, slipping an orange adventure harness over its head and snapping the side buckles securely into place for a trail hike',
        'pet_care_animals'
      ),
      createActionItem(
        'pet_napping_with_dog',
        'Napping on Sofa with Dog Curled Up at Feet',
        'Sleeping peacefully under blanket with dog resting nearby',
        'Curled up under a cozy knit throw blanket on the living room sofa, fast asleep with a loyal dog curled into a warm crescent at the foot of the couch',
        'pet_care_animals'
      ),
      createActionItem(
        'pet_brushing_horse_mane',
        'Brushing Stallion Mane with Wooden Dandy Brush',
        'Combing long horse mane in sunlit stable barn',
        'Standing in a sunlit wooden horse stable, holding a natural bristle dandy brush to stroke and untangle the long flowing black mane of a gentle chestnut horse',
        'pet_care_animals'
      ),
      createActionItem(
        'pet_trimming_dog_claws',
        'Gently Holding Paw to Inspect Nails',
        'Holding paw pad carefully with professional pet nail clippers',
        'Sitting comfortably on the floor holding a dog’s paw gently in palm, speaking in soothing tones while carefully using safety guillotine nail clippers',
        'pet_care_animals'
      ),
      createActionItem(
        'pet_aquarium_feeding_flakes',
        'Pinching Tropical Fish Flakes into Aquarium',
        'Sprinkling colorful fish food on water surface of glass tank',
        'Lifting the lid of a lush planted freshwater aquarium, sprinkling a pinch of colorful nutrient flakes across the surface as neon tetras and angelfish swim up',
        'pet_care_animals'
      ),
      createActionItem(
        'pet_giving_belly_rubs',
        'Giving Enthusiastic Belly Rubs to Rolling Dog',
        'Rubbing tummy of dog lying upside down with wagging tail',
        'Kneeling down to rub both hands across the soft tummy of a dog lying playfully upside-down on the grass with paws curled and tongue lolling happily',
        'pet_care_animals'
      )
    ]
  },
  {
    id: 'culinary_mastery',
    name: 'Gourmet Cooking & Pastry Arts',
    icon: '👨‍🍳',
    description: 'Piping pastry cream, sauté pan flipping, flambé fire, decorating cakes, knife julienne, and master cooking',
    actions: [
      createActionItem(
        'chef_piping_macaron_rosettes',
        'Piping Buttercream Rosettes with Pastry Bag',
        'Squeezing star tip piping bag onto delicate layered cake',
        'Holding a canvas pastry bag with a fluted star nozzle with both hands, squeezing smooth vanilla buttercream rosettes atop a tiered wedding cake with steady precision',
        'culinary_mastery'
      ),
      createActionItem(
        'chef_saute_pan_toss',
        'Flipping Sauté Pan Vegetables with Single Wrist Snap',
        'Tossing colorful julienne vegetables high into the air over gas flame',
        'Gripping the stainless steel handle of a hot sauté pan, flicking wrist forward and back to toss sliced bell peppers and snap peas high into the air over the stove flame',
        'culinary_mastery'
      ),
      createActionItem(
        'chef_flambe_brandy_fire',
        'Flambéing Pan with Brandy Creating Dramatic Flame',
        'Tilting pan as blue and orange flames erupt over gourmet sauce',
        'Tilting a copper pan toward the gas stove burner, letting vaporized Cognac ignite into a dramatic, controlled plume of vibrant orange and blue flambé fire',
        'culinary_mastery'
      ),
      createActionItem(
        'chef_julienne_chef_knife',
        'Rapid Julienne Cutting with Damascus Chef Knife',
        'Rocking knife blade across wooden cutting board chopping carrots',
        'Holding a hand-forged Damascus steel chef’s knife with a secure pinch grip, rocking the blade in rapid rhythmic motion to slice carrots into matchstick-thin julienne strips',
        'culinary_mastery'
      ),
      createActionItem(
        'chef_tasting_wooden_spoon',
        'Tasting Simmering Truffle Sauce from Wooden Spoon',
        'Holding hand under spoon tasting rich sauce thoughtfully',
        'Blowing gently across a spoonful of simmering velvety truffle cream sauce, tasting a sample from the tip of the wooden spoon, nodding with gourmet satisfaction',
        'culinary_mastery'
      ),
      createActionItem(
        'chef_blowtorch_creme_brulee',
        'Caramelizing Crème Brûlée with Culinary Blowtorch',
        'Aiming blue flame torch melting sugar into crispy brown shell',
        'Holding a culinary butane blowtorch with steady hand, sweeping the intense blue flame over a dusting of turbinado sugar to create a glassy, crackling golden caramel shell',
        'culinary_mastery'
      ),
      createActionItem(
        'chef_garnishing_microgreens_tweezers',
        'Placing Microgreen Garnish with Culinary Tweezers',
        'Setting delicate edible flower petal on plated gourmet dish',
        'Holding long offset culinary plating tweezers, delicately positioning a miniature violet edible flower blossom and sprig of micro-basil onto a gourmet entrée',
        'culinary_mastery'
      ),
      createActionItem(
        'chef_kneading_sourdough_flour',
        'Kneading Rustic Sourdough on Floured Marble Slab',
        'Folding and pressing dough with heels of hands dusting white flour',
        'Pressing the heels of both hands deep into elastic sourdough dough on a white marble pastry slab, folding the dough over and scattering a shower of flour',
        'culinary_mastery'
      ),
      createActionItem(
        'chef_whisking_copper_sabayon',
        'Vigorously Whisking Custard in Copper Bowl',
        'Beating egg yolks with balloon whisk over double boiler',
        'Whisking egg yolks and sugar vigorously with a stainless steel balloon whisk in a round-bottom copper bowl over simmering water until thick, pale, and foamy',
        'culinary_mastery'
      ),
      createActionItem(
        'chef_rolling_pasta_machine',
        'Feeding Pasta Dough Through Hand-Cranked Roller',
        'Turning chrome crank handle catching thin pasta ribbon',
        'Turning the wooden handle of a chrome pasta machine with right hand while gently supporting a paper-thin sheet of golden egg tagliatelle dough with left palm',
        'culinary_mastery'
      ),
      createActionItem(
        'chef_grating_parmesan_microplane',
        'Grating Aged Parmigiano with Microplane Zester',
        'Shaving snow-like cloud of cheese over hot pasta bowl',
        'Holding a sharp rasp microplane grater over a steaming bowl of handmade fettuccine, grating an aged Parmigiano-Reggiano block into a feathery white snow cloud',
        'culinary_mastery'
      ),
      createActionItem(
        'chef_sauce_drizzle_spoon_swipe',
        'Artful Sauce Swoosh on Ceramic Plate',
        'Swiping back of sauce spoon creating elegant curved swipe',
        'Pouring a pool of dark balsamic glaze reduction onto a wide white porcelain plate, using the convex back of a spoon to create a sleek aerodynamic curve arc',
        'culinary_mastery'
      ),
      createActionItem(
        'chef_sharpening_knife_whetstone',
        'Sharpening Knife Blade on Water Whetstone',
        'Gliding steel blade at 15-degree angle across wet whetstone',
        'Gliding the edge of a high-carbon chef’s knife across a soaked 3000-grit water whetstone with smooth, measured strokes at a precise fifteen-degree bevel angle',
        'culinary_mastery'
      ),
      createActionItem(
        'chef_dishing_risotto_pan_tap',
        'Tapping Plate Base to Flatten Creamy Risotto',
        'Tapping palm against plate bottom spreading risotto evenly',
        'Spoonful of creamy saffron risotto placed in center of warm shallow bowl, tapping the bottom of the plate against palm to let the risotto settle flat with perfect wave',
        'culinary_mastery'
      ),
      createActionItem(
        'chef_untying_chef_apron',
        'Untying White Chef Apron After Flawless Service',
        'Reaching behind waist to untie apron strings smiling with pride',
        'Reaching behind back to untie the cotton strings of a crisp white chef apron after a triumphant dinner service, wiping brow and smiling with culinary accomplishment',
        'culinary_mastery'
      ),
      createActionItem(
        'chef_drizzle_olive_oil_spiral',
        'Drizzling Extra Virgin Olive Oil in Continuous Spiral',
        'Pouring thin stream of golden green olive oil over burrata',
        'Holding a curved brass oil cruet high above a plate of fresh creamy burrata and heirloom tomatoes, pouring a thin golden-green stream in a continuous concentric spiral',
        'culinary_mastery'
      )
    ]
  },
  {
    id: 'cosplay_performance',
    name: 'Cosplay, Stage & Theatrical Acting',
    icon: '🎭',
    description: 'Stage drama, theatrical masks, cosplay poses, dramatic monologues, bows, and acting performances',
    actions: [
      createActionItem(
        'stage_holding_comedy_tragedy_masks',
        'Holding Theatrical Tragedy and Comedy Masks',
        'Holding porcelain smiling and weeping masks up to face',
        'Holding classic Greek theatre comedy and tragedy porcelain masks in either hand, lowering the weeping mask while smiling through the other with dramatic flair',
        'cosplay_performance'
      ),
      createActionItem(
        'stage_dramatic_monologue_soliloquy',
        'Delivering Impassioned Soliloquy Under Spotlight',
        'Extending one arm forward delivering Shakespearean line with intensity',
        'Standing center stage in the crisp cone of a white spotlight, one hand pressed to heart and the other reaching toward audience, delivering an impassioned dramatic speech',
        'cosplay_performance'
      ),
      createActionItem(
        'stage_theatrical_curtain_bow',
        'Deep Theatrical Curtain Call Bow to Ovation',
        'Bowing low with one arm across chest accepting applause',
        'Stepping to the front of the stage with a radiant smile, sweeping one arm gracefully across waist and bending in a deep formal theatre bow as the audience cheers',
        'cosplay_performance'
      ),
      createActionItem(
        'stage_holding_skull_hamlet',
        'Holding Skull in Pensive Hamlet Soliloquy Pose',
        'Gazing pensively at prop skull held at eye level in palm',
        'Holding a weathered prop skull in the palm of hand at eye level, gazing into its hollow sockets with profound, sorrowful introspection: "Alas, poor Yorick!"',
        'cosplay_performance'
      ),
      createActionItem(
        'stage_cosplay_weapon_draw',
        'Drawing Prop Fantasy Sword in Dynamic Cosplay Pose',
        'Drawing foam broadsword from back scabbard looking fierce',
        'Reaching right hand over shoulder to grip the hilt of an oversized fantasy cosplay broadsword, sliding it smoothly from its scabbard with a fierce heroic gaze',
        'cosplay_performance'
      ),
      createActionItem(
        'stage_mime_invisible_wall',
        'Miming Hands Flat Against Invisible Glass Wall',
        'Pressing palms flat against imaginary transparent box in air',
        'Wearing white face paint and black striped shirt, pressing both flat palms against an imaginary invisible vertical wall with expressive comedic effort',
        'cosplay_performance'
      ),
      createActionItem(
        'stage_adjusting_cosplay_wig',
        'Adjusting Vibrant Anime Cosplay Wig Before Mirror',
        'Styling bangs of colorful styled wig with hairspray and comb',
        'Sitting at backstage dressing table with lighted vanity mirror, holding a fine-tooth comb and spray to adjust the sharp styled bangs of a vibrant neon cosplay wig',
        'stage_holding_comedy_tragedy_masks'
      ),
      createActionItem(
        'stage_dramatic_cape_swoosh',
        'Sweeping Long Royal Velvet Cape Across Stage',
        'Grabbing corner of long crimson cape and whipping it in arc',
        'Pivoting sharply on heels while grabbing the hem of a heavy crimson velvet cape with one hand, whipping it in a dramatic billowing arc across the stage',
        'cosplay_performance'
      ),
      createActionItem(
        'stage_puppet_marionette_strings',
        'Operating Wooden Marionette Cross Controller',
        'Tilting wooden puppet controller moving strings on stage',
        'Holding a wooden criss-cross marionette controller in both hands, deftly tilting and twitching the black strings to make a carved wooden puppet dance and bow',
        'cosplay_performance'
      ),
      createActionItem(
        'stage_venetian_feather_mask',
        'Holding Venetian Filigree Mask on Golden Stick',
        'Holding ornate feathered masquerade mask to eyes peering slyly',
        'Holding an ornate gold filigree Venetian masquerade mask decorated with peacock feathers by its slender stick, holding it before eyes with a mysterious gaze',
        'cosplay_performance'
      ),
      createActionItem(
        'stage_reading_backstage_script',
        'Highlighting Lines on Backstage Script Binder',
        'Memorizing theatrical dialogue backstage with highlighter',
        'Sitting backstage on a prop crate under blue work lights, flipping through a spiral-bound stage play script and whispering lines to memorize final scene cue',
        'cosplay_performance'
      ),
      createActionItem(
        'stage_striking_heroic_sentry_pose',
        'Striking Heroic Anime Battle Pose with Fist Forward',
        'Crouching in wide action stance with one fist clenched forward',
        'Dropping into a wide dynamic superhero crouch with cape billowing behind, one fist planted on ground and the other cocked back, looking up with fierce warrior focus',
        'cosplay_performance'
      ),
      createActionItem(
        'stage_opera_high_note_crescendo',
        'Reaching Climax of Operatic Aria with Open Chest',
        'Throwing arms wide singing triumphant soprano high note',
        'Standing tall at stage apron, expanding ribcage and throwing arms wide in grand operatic passion, singing a breathtaking high crescendo note that fills the theatre hall',
        'cosplay_performance'
      ),
      createActionItem(
        'stage_touching_theatre_curtain',
        'Peeking Through Heavy Red Velvet Stage Curtain',
        'Holding edge of curtain peeking at audience filling auditorium',
        'Parting the heavy folds of the crimson velvet stage curtain with one hand, peeking cautiously through the slit at the bustling auditorium of patrons taking seats',
        'cosplay_performance'
      ),
      createActionItem(
        'stage_receiving_bouquet_flowers',
        'Cradling Fresh Rose Bouquet at Curtain Call',
        'Holding armful of red roses against chest smiling with gratitude',
        'Hugging a lavish bouquet of fresh red roses wrapped in tissue paper tightly against chest, holding other hand out to the audience in profound stage gratitude',
        'cosplay_performance'
      ),
      createActionItem(
        'stage_adjusting_stage_makeup',
        'Dabbing Translucent Powder with Powder Puff',
        'Dabbing round velvet puff across forehead under vanity lights',
        'Holding a large fluffy satin powder puff, gently dabbing translucent setting powder across forehead and cheeks before stepping out onto stage',
        'cosplay_performance'
      )
    ]
  },
  {
    id: 'winter_snow',
    name: 'Winter Wonderland & Snow Sports',
    icon: '❄️',
    description: 'Ice skating, building snowmen, snowball fights, downhill skiing, warm knit mittens, and winter joy',
    actions: [
      createActionItem(
        'winter_figure_skate_spiral',
        'Gliding Figure Skating Spiral on One Ice Blade',
        'Extending leg high behind back gliding across frozen lake',
        'Gliding smoothly across pristine frozen lake ice on a single figure skating blade, torso lowered horizontally with free leg extended high in a classic arabesque spiral',
        'winter_snow'
      ),
      createActionItem(
        'winter_rolling_snowman_sphere',
        'Rolling Giant Snowball to Build Snowman Base',
        'Pushing heavy snow sphere across snow-covered lawn',
        'Wearing thick waterproof mittens, rolling a large sphere of sticky fresh white snow across the lawn, watching it grow in size to form the base of a friendly snowman',
        'winter_snow'
      ),
      createActionItem(
        'winter_winding_up_snowball',
        'Winding Up to Throw Fresh Snowball with Grin',
        'Holding round packed snowball aiming playfully at friend',
        'Crouching low behind a snowdrift, packing a perfect sphere of powdery white snow in mittens, winding up arm with a mischievous grin before tossing it',
        'winter_snow'
      ),
      createActionItem(
        'winter_downhill_ski_carve',
        'Carving Downhill Ski Turn with Powder Spray',
        'Leaning into sharp ski turn sending plume of white powder',
        'Carving sharp parallel ski edges into the snowy alpine slope, leaning deeply into the turn to spray a dramatic white fan of powdery snow into the winter sun',
        'winter_snow'
      ),
      createActionItem(
        'winter_catching_snowflake_tongue',
        'Catching Falling Snowflake on Tongue',
        'Tilting head back sticking tongue out to catch falling flake',
        'Standing in a quiet snowfall with head tilted back toward the sky, sticking tongue out playfully to catch a single delicate falling crystal snowflake with a giggle',
        'winter_snow'
      ),
      createActionItem(
        'winter_warm_mugs_hot_cocoa',
        'Cradling Steaming Mug of Cocoa in Knit Mittens',
        'Holding ceramic mug topped with marshmallows in fuzzy gloves',
        'Holding a warm ceramic mug of hot chocolate crowned with fluffy mini marshmallows in two hands wearing chunky knit wool mittens, steam rising into cold air',
        'winter_snow'
      ),
      createActionItem(
        'winter_snowboard_grab_jump',
        'Snowboard Indy Grab in Mid-Air Jump',
        'Launching off snow jump grabbing edge of snowboard with gloved hand',
        'Launching high off a snowy terrain park kicker jump, tucking knees to grab the toe edge of the snowboard between boots with gloved hand in mid-flight',
        'winter_snow'
      ),
      createActionItem(
        'winter_snow_angel_arms',
        'Making Snow Angel Lying on Back in Deep Snow',
        'Sweeping arms and legs back and forth in fresh powdery snow',
        'Lying flat on back in a deep untouched meadow of fresh white snow, sweeping arms and legs rhythmically back and forth to create a large snow angel silhouette',
        'winter_snow'
      ),
      createActionItem(
        'winter_frosty_breath_exhale',
        'Blowing Visible Cloud of White Frost Breath',
        'Exhaling warm breath watching vapor cloud in crisp winter air',
        'Cupping knit-gloved hands near lips and exhaling a long, warm breath, watching the thick white plume of frosty vapor drift into the crisp freezing mountain air',
        'winter_snow'
      ),
      createActionItem(
        'winter_pulling_wooden_sled',
        'Pulling Wooden Sled with Sled Rope up Hill',
        'Trudging up snowy hill pulling classic runner sled behind',
        'Trudging energetically up a snow-covered hill, pulling the rope of a traditional wooden toboggan sled with red metal runners behind in the snow track',
        'winter_snow'
      ),
      createActionItem(
        'winter_tying_ice_skates',
        'Lacing Up White Leather Figure Skates on Bench',
        'Pulling skate laces tight around ankles sitting on wooden bench',
        'Sitting on a wooden bench beside the outdoor ice rink, pulling the white waxed laces of leather figure skates snug around ankles and tying a firm double bow',
        'winter_snow'
      ),
      createActionItem(
        'winter_adjusting_goggles_beanie',
        'Pulling Warm Knit Beanie Down Over Ears',
        'Pulling ribbed wool winter cap over hair smoothing pom-pom',
        'Pulling a cozy ribbed knit wool beanie cap snug down over ears, adjusting ski goggles onto helmet with a confident ready-for-the-slopes smile',
        'winter_snow'
      ),
      createActionItem(
        'winter_snowshoe_striding_forest',
        'Walking Quiet Evergreen Forest in Snowshoes',
        'Striding through deep untracked snow with aluminum snowshoes',
        'Striding peacefully through a silent snow-blanketed pine forest on aluminum snowshoes, breathing the crisp silence as snow falls from evergreen boughs',
        'winter_snow'
      ),
      createActionItem(
        'winter_carrot_on_snowman_nose',
        'Placing Orange Carrot on Snowman Face',
        'Inserting fresh carrot into snowman head as nose',
        'Standing on tiptoes to press an orange carrot firmly into the center of the snowman’s top sphere as a nose, laughing warmly at the cheerful creation',
        'winter_snow'
      ),
      createActionItem(
        'winter_stomping_snow_off_boots',
        'Stomping Heavy Snow Off Winter Boots on Porch',
        'Stomping heels on cabin doormat shaking snow from tread',
        'Standing on the covered timber porch of a warm mountain cabin, stomping boots firmly on the doormat to knock heavy snow crust off the rubber soles before entering',
        'winter_snow'
      ),
      createActionItem(
        'winter_firepit_blanket_snuggle',
        'Snuggled in Wool Blanket by Outdoor Winter Firepit',
        'Wrapped in plaid blanket warming feet by stone firepit in snow',
        'Sitting in a cedar Adirondack chair surrounded by snowbanks, wrapped snugly in a thick plaid wool blanket with toes pointed toward the crackling stone firepit',
        'winter_snow'
      )
    ]
  }
];
