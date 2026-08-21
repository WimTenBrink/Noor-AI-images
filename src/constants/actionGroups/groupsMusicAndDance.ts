import { ActionGroup, createActionItem } from './types';

export const GROUPS_MUSIC_AND_DANCE: ActionGroup[] = [
  {
    id: 'music_vocal',
    name: 'Singing & Vocal Performance',
    icon: '🎤',
    description: 'Stage vocal performance, emotional ballads, belt singing, studio recording, and microphone artistry',
    actions: [
      createActionItem(
        'vocal_passionate_belt',
        'Passionate Belt with Outstretched Hand',
        'Singing powerful high note with one hand reaching toward audience',
        'Belting out a powerful vocal note with wide open resonance, head tilted back, one arm outstretched toward the audience with deep emotion',
        'music_vocal'
      ),
      createActionItem(
        'vocal_studio_whisper',
        'Intimate Studio Mic Whisper',
        'Singing soft intimate breathy vocals close to condenser pop filter',
        'Singing soft, intimate vocal tones mere inches from a studio condenser microphone, wearing over-ear monitor headphones, eyes closed in concentration',
        'music_vocal'
      ),
      createActionItem(
        'vocal_vintage_mic_clasp',
        'Clasping Vintage Chrome Mic with Both Hands',
        'Holding iconic 1950s chrome microphone stand with two hands',
        'Holding an iconic vintage chrome ribbed microphone on a straight stand with both hands, leaning in close with soulful retro jazz charisma',
        'music_vocal'
      ),
      createActionItem(
        'vocal_acoustic_ballad',
        'Acoustic Ballad Singing with Hand on Heart',
        'Tender storytelling vocal with hand pressed gently over chest',
        'Singing an emotional storytelling acoustic melody with right palm resting gently over heart, gentle serene smile and soft expressive eyes',
        'music_vocal'
      ),
      createActionItem(
        'vocal_call_and_response',
        'Stage Call-and-Response Crowd Directing',
        'Pointing microphone out toward stadium crowd to sing along',
        'Extending the handheld microphone outward toward the cheering crowd with an energetic grin, inviting everyone to sing the chorus',
        'music_vocal'
      ),
      createActionItem(
        'vocal_rock_tilt',
        'High-Energy Rock Vocal Head Tilt',
        'Vocalizing with dynamic head tilt and firm wide stance',
        'Gripping the handheld wireless microphone tightly with head tilted back dynamically, delivering raw energetic rock vocals with commanding swagger',
        'music_vocal'
      ),
      createActionItem(
        'vocal_harmony_duet',
        'Harmonizing Duet Eye Contact',
        'Singing close vocal harmonies while sharing smile with partner',
        'Singing tight three-part harmonies while turning slightly toward bandmates, blending vocal tones with shared joyful artistic synchronization',
        'music_vocal'
      ),
      createActionItem(
        'vocal_mic_stand_lean',
        'Tilted Mic Stand Forward Lean',
        'Tilting heavy base microphone stand forward toward front row',
        'Tilting the microphone stand forty-five degrees forward toward the stage edge, leaning into the lyric with magnetic rock-and-roll attitude',
        'music_vocal'
      ),
      createActionItem(
        'vocal_mid_verse_smile',
        'Radiant Mid-Verse Smile',
        'Breaking into a spontaneous bright smile between vocal phrases',
        'Smiling warmly mid-verse between melodic lines, eyes sparkling with authentic stage joy, catching the rhythm of the upbeat tempo',
        'music_vocal'
      ),
      createActionItem(
        'vocal_deep_breath',
        'Taking Centered Diaphragmatic Breath',
        'Inhaling deeply through posture before hitting climax note',
        'Expanding chest and core in a poised diaphragmatic breath, shoulders down, gathering vocal power before an explosive vocal chorus',
        'music_vocal'
      ),
      createActionItem(
        'vocal_seated_stage_edge',
        'Sitting on Stage Edge Singing Softly',
        'Perched on edge of stage with legs dangling singing to front row',
        'Sitting on the edge of the wooden stage with legs hanging over the rim, singing acoustic verses directly to front-row fans with gentle intimacy',
        'music_vocal'
      ),
      createActionItem(
        'vocal_headphone_one_ear',
        'Holding One Headphone Off Ear',
        'Pulling one monitor headphone back to hear natural vocal tone',
        'Pulling one earcup of studio monitor headphones slightly off ear with index finger, listening to room resonance while laying down vocal tracks',
        'music_vocal'
      ),
      createActionItem(
        'vocal_hands_in_air_vocalize',
        'Vocalizing with Both Hands in the Air',
        'Singing uplifting chorus with both arms raised high',
        'Singing an uplifting anthem with both arms raised high above head into the concert spotlight, swaying rhythmically with the crowd',
        'music_vocal'
      ),
      createActionItem(
        'vocal_crouch_stage_sing',
        'Stage Floor Crouch Vocals',
        'Crouched low near stage monitor while delivering fierce lyrics',
        'Crouching low on one knee near the front stage wedge monitors, gripping the microphone low and delivering intense driving vocal bars',
        'music_vocal'
      ),
      createActionItem(
        'vocal_harmonizing_eyes_shut',
        'Closed-Eye Soulful Melisma',
        'Singing complex vocal run with eyes tightly closed',
        'Singing an intricate, soulful vocal run with eyes blissfully closed and free hand gently conducting imaginary vocal contours in the air',
        'music_vocal'
      ),
      createActionItem(
        'vocal_encore_bow_wave',
        'Triumphant Bow and Wave with Mic',
        'Holding mic down at side while taking graceful bow',
        'Holding the microphone loosely down at hip level while taking a deep, grateful bow before standing up to wave triumphantly to cheering fans',
        'music_vocal'
      )
    ]
  },
  {
    id: 'music_instruments',
    name: 'Musical Instrument Performance',
    icon: '🎸',
    description: 'Guitar solos, bass grooves, drum fills, keyboard progressions, strings, and acoustic instruments',
    actions: [
      createActionItem(
        'inst_acoustic_guitar_strum',
        'Strumming Acoustic Guitar Open Chord',
        'Strumming wooden acoustic guitar with natural relaxed posture',
        'Holding an acoustic guitar across lap, strumming rich open chords with a tortoiseshell pick while fingertips press precisely on the rosewood fretboard',
        'music_instruments'
      ),
      createActionItem(
        'inst_electric_guitar_solo',
        'Electric Guitar Solo Bend with Vibrato',
        'Bending high string on electric guitar with expressive face',
        'Bending a high string on a vintage electric guitar high on the fretboard with wide vibrato, head tilted in passionate musical ecstasy',
        'music_instruments'
      ),
      createActionItem(
        'inst_bass_slap_groove',
        'Slapping Electric Bass Funk Groove',
        'Thumping electric bass with thumb and popping strings',
        'Playing a driving funk rhythm on a four-string electric bass, thumping the low string with thumb and popping treble accents with index finger',
        'music_instruments'
      ),
      createActionItem(
        'inst_drum_fill_crash',
        'Drum Kit Crash Cymbal Strike',
        'Hitting crash cymbal with drumstick at peak of energetic fill',
        'Striking a brass crash cymbal with wooden drumstick in a dynamic arc while stepping firmly on the bass drum pedal, hair flying in rhythm',
        'music_instruments'
      ),
      createActionItem(
        'inst_piano_expressive_chords',
        'Pressing Piano Keys with Expressive Nuance',
        'Playing acoustic grand piano with arched graceful fingers',
        'Seated at a polished grand piano, fingers arched gracefully over ivory keys, body leaning into a sweeping romantic harmonic progression',
        'music_instruments'
      ),
      createActionItem(
        'inst_synth_mod_wheel',
        'Tweaking Synthesizer Knobs and Pitch Wheel',
        'Adjusting synthesizer filter cutoff while playing lead keys',
        'Playing a futuristic synth lead melody with right hand while adjusting resonance knobs and bending the pitch modulation wheel with left hand',
        'music_instruments'
      ),
      createActionItem(
        'inst_violin_bow_stroke',
        'Bowing Violin on Shoulder with Poise',
        'Drawing horsehair bow smoothly across violin strings',
        'Holding a wooden violin tucked beneath jaw, drawing the bow smoothly across the strings with fluid wrist articulation and classical elegance',
        'music_instruments'
      ),
      createActionItem(
        'inst_saxophone_jazz_solo',
        'Blowing Brass Saxophone in Jazz Stance',
        'Playing alto saxophone with bent knees and soulful sway',
        'Playing a brass alto saxophone with fingers dancing over pearl keys, body swaying to a smooth jazz cadence with effortless cool',
        'music_instruments'
      ),
      createActionItem(
        'inst_ukulele_gentle_strum',
        'Strumming Ukulele with Thumb',
        'Holding small wooden ukulele close to chest with breezy smile',
        'Holding a small soprano ukulele nestled against chest, brushing thumb lightly across nylon strings while humming a cheerful melody',
        'music_instruments'
      ),
      createActionItem(
        'inst_trumpet_clear_tone',
        'Blowing Bright Trumpet Fanfare',
        'Holding brass trumpet with left hand and pressing piston valves',
        'Lifting a polished brass trumpet to lips, pressing shiny piston valves with right fingertips and blowing a crisp, triumphant musical fanfare',
        'music_instruments'
      ),
      createActionItem(
        'inst_flute_delicate_embouchure',
        'Playing Silver Transverse Flute',
        'Holding silver flute sideways with delicate embouchure',
        'Holding a silver concert flute extended horizontally to the right, blowing across the embouchure hole to produce clear, birdlike tones',
        'music_instruments'
      ),
      createActionItem(
        'inst_bongo_hand_drum',
        'Rhythmic Bongo Drumming with Palms',
        'Slapping twin bongo drumheads with open palms and fingertips',
        'Tucking twin bongo drums between knees, striking the leather drumheads with swift alternating heel-and-toe palm slaps in Latin tempo',
        'music_instruments'
      ),
      createActionItem(
        'inst_upright_bass_pluck',
        'Plucking Upright Double Bass Pizzicato',
        'Standing behind tall acoustic double bass plucking thick strings',
        'Standing beside a tall carved wooden double bass, plucking heavy low notes pizzicato with fingers while leaning into the deep resonant wood',
        'music_instruments'
      ),
      createActionItem(
        'inst_tambourine_hip_strike',
        'Tambourine Shake and Hip Tap',
        'Shaking jingling tambourine in air and striking against hip',
        'Shaking a wooden tambourine in an overhead arc and tapping it rhythmically against hip in sync with the driving dance beat',
        'music_instruments'
      ),
      createActionItem(
        'inst_tuning_guitar_pegs',
        'Tuning Guitar Headstock Pegs by Ear',
        'Plucking open string while turning headstock machine head',
        'Plucking an open guitar string with thumb, leaning ear close to the wooden body while carefully turning a silver tuning peg on the headstock',
        'music_instruments'
      ),
      createActionItem(
        'inst_guitar_strap_adjust',
        'Adjusting Guitar Strap Over Shoulder',
        'Pulling guitar strap snug across back with confident grin',
        'Sliding guitar strap comfortably across shoulder, adjusting the instrument height and giving an affirmative nod to the band to start the song',
        'music_instruments'
      )
    ]
  },
  {
    id: 'dance_classical',
    name: 'Classical & Ballet Dance',
    icon: '🩰',
    description: 'Classical ballet positions, graceful arabesques, pirouettes, lyrical contemporary, and ballroom poise',
    actions: [
      createActionItem(
        'ballet_arabesque_en_pointe',
        'Ballet Arabesque en Pointe',
        'Balancing on single pointe shoe with rear leg lifted horizontal',
        'Balancing en pointe on one foot with the other leg extended straight behind in a ninety-degree arabesque, arms elongated in graceful alignment',
        'dance_classical'
      ),
      createActionItem(
        'ballet_grand_jete',
        'Grand Jeté Flying Leap Split',
        'Soaring through the air in full horizontal split leap',
        'Soaring through mid-air in a grand jeté split leap, legs extended horizontally one hundred and eighty degrees, torso lifted proudly',
        'dance_classical'
      ),
      createActionItem(
        'ballet_pirouette_spin',
        'Pirouette Turn on Relevé',
        'Spinning on one foot with opposite foot in passé at knee',
        'Spinning in a sharp pirouette on relevé, supporting leg straight, opposite foot tucked cleanly at knee in passé, arms rounded in first position',
        'dance_classical'
      ),
      createActionItem(
        'ballet_port_de_bras',
        'Graceful Port de Bras Arm Sweep',
        'Sweeping arms from fifth position high to open second position',
        'Flowing through a lyrical port de bras, opening arms from fifth position overhead out into second position with soft fingertips and tilted neck',
        'dance_classical'
      ),
      createActionItem(
        'ballet_plie_first_position',
        'Demí-Plié in First Position',
        'Bending knees with heels planted and turned-out feet',
        'Executing a disciplined demi-plié in turned-out first position, knees tracking over toes, back perpendicular to the floor, hands resting at barre',
        'dance_classical'
      ),
      createActionItem(
        'ballet_attitude_derriere',
        'Attitude Derrière Balance',
        'Balancing on one leg with rear leg bent at knee lifted high',
        'Balancing gracefully on one leg while lifting the rear leg behind with knee bent at ninety degrees in attitude derrière, looking over shoulder',
        'dance_classical'
      ),
      createActionItem(
        'ballet_contemporary_floor_slide',
        'Contemporary Floor Slide Extension',
        'Gliding along dance studio floor with sweeping lyrical reach',
        'Sliding across the smooth wooden studio floor in a contemporary contemporary sequence, extending one leg long and reaching diagonally upward',
        'dance_classical'
      ),
      createActionItem(
        'ballet_modern_backbend_arch',
        'Modern Dance Fluid Back Arch',
        'Arching spine backward with arms trailing like water ripples',
        'Arching torso backward in a fluid modern dance curve, head falling back gently, arms trailing through the air like silk ribbons',
        'dance_classical'
      ),
      createActionItem(
        'ballet_waltz_partner_rotation',
        'Ballroom Waltz Rotating Pivot',
        'Rotating gracefully in ballroom dance frame with partner',
        'Gliding through a three-quarter ballroom waltz rotation in closed frame, head turned gracefully over partner’s shoulder, skirt swirling',
        'dance_classical'
      ),
      createActionItem(
        'ballet_tango_head_snap',
        'Dramatic Argentine Tango Head Snap',
        'Sharp ninety-degree head snap in dramatic tango promenade',
        'Snapping head sharply to the side in a dramatic Argentine tango promenade stance, legs locked in precise corte, eyes piercing and focused',
        'dance_classical'
      ),
      createActionItem(
        'ballet_curtsy_reverence',
        'Grand Révérence Bow and Curtsy',
        'Deep formal ballet bow with one foot crossed behind',
        'Performing a classical ballet révérence, stepping one foot far behind and sinking into a deep, elegant curtsy with arms sweeping outward',
        'dance_classical'
      ),
      createActionItem(
        'ballet_flamenco_skirt_flick',
        'Flamenco Ruffled Skirt Swirl',
        'Gripping ruffled skirt edges and flicking with rhythmic snap',
        'Gripping the layered ruffles of a traditional dance skirt with both hands, flicking the fabric rhythmically around legs with proud posture',
        'dance_classical'
      ),
      createActionItem(
        'ballet_tap_heel_toe',
        'Tap Dance Heel-Toe Shuffle',
        'Executing fast rhythmic tap step on shiny floor',
        'Shuffling across the wooden floor with rapid heel-and-toe tap clicks, weight balanced over toes, arms swinging with Broadway showmanship',
        'dance_classical'
      ),
      createActionItem(
        'ballet_aerial_cartwheel',
        'Acrobatic Aerial Side Cartwheel',
        'Flipping through the air in no-handed aerial cartwheel',
        'Launching into a no-handed acrobatic aerial cartwheel, legs cutting a wide vertical circle through the air with clean pointed toes',
        'dance_classical'
      ),
      createActionItem(
        'ballet_suspension_balance',
        'Lyrical Suspension Balance on Tiptoe',
        'Holding breathless suspension on tiptoe with one arm lifted',
        'Holding a breathless moment of suspension on single tiptoe, torso tilted forward, one arm reaching toward the horizon with weightless grace',
        'dance_classical'
      ),
      createActionItem(
        'ballet_barre_stretch',
        'Leg Extended on Ballet Studio Barre',
        'Resting heel high on wooden barre in hamstring stretch',
        'Resting one heel comfortably atop the wooden ballet barre at hip height, bending upper body forward over the extended leg with fluid flexibility',
        'dance_classical'
      )
    ]
  },
  {
    id: 'dance_urban',
    name: 'Urban, Hip-Hop & Street Dance',
    icon: '👟',
    description: 'Hip-hop popping and locking, breakdance freezes, street dance grooves, syncopation, and urban swagger',
    actions: [
      createActionItem(
        'urban_pop_and_lock_freeze',
        'Popping and Locking Sharp Freeze',
        'Locking arms at right angles with muscular isolation pop',
        'Snapping into a razor-sharp locking freeze with elbows bent at right angles, wrists tilted down, popping torso muscles in precise robotic isolation',
        'dance_urban'
      ),
      createActionItem(
        'urban_breakdance_one_arm_freeze',
        'Breakdance One-Arm Baby Freeze',
        'Balancing body on elbow and head with legs crossed in air',
        'Balancing torso weight firmly on one bent elbow tucked against hip, head resting lightly on floor, legs kicking upward in a stylish crossed freeze',
        'dance_urban'
      ),
      createActionItem(
        'urban_street_hat_tip',
        'Street Dance Cap Tilt Groove',
        'Tipping baseball cap brim down while stepping to beat',
        'Tipping the flat brim of a snapback cap down over one eye with thumb, rocking shoulders into a low bouncy street dance rhythm',
        'dance_urban'
      ),
      createActionItem(
        'urban_krump_chest_pop',
        'High-Energy Krump Chest Pop',
        'Thrusting chest forward with raw explosive street intensity',
        'Exploding forward with a powerful krump chest pop, arms swinging in aggressive arcs, stance wide and grounded with fiery intensity',
        'dance_urban'
      ),
      createActionItem(
        'urban_gliding_moonwalk',
        'Smooth Zero-Gravity Foot Glide',
        'Gliding feet backward across floor in seamless moonwalk illusion',
        'Gliding backward across the floor in a seamless moonwalk illusion, popping one toe while sliding the opposite heel flat with effortless smoothness',
        'dance_urban'
      ),
      createActionItem(
        'urban_toprock_cross_step',
        'B-Boy Toprock Cross Step',
        'Bouncing in rhythm with alternating cross-step footwork',
        'Bouncing lightly on balls of feet in classic b-boy toprock, crossing legs in crisp rhythmic cadence while snapping fingers to the beat',
        'dance_urban'
      ),
      createActionItem(
        'urban_waacking_arm_roll',
        'High-Speed Waacking Arm Rolls Overhead',
        'Twirling wrists and forearms rapidly around head and neck',
        'Spinning forearms and wrists in rapid, sharp waacking rotations overhead and behind head, striking dramatic poses on every musical accent',
        'dance_urban'
      ),
      createActionItem(
        'urban_hiphop_attitude_pose',
        'Hip-Hop Crossed-Arm Swagger Pose',
        'Low crouched stance with crossed arms and head tilted up',
        'Dropping into a low wide knee stance, folding arms across chest, chin raised with confident street swagger and direct fearless stare',
        'dance_urban'
      ),
      createActionItem(
        'urban_sync_group_formation',
        'Synchronized Dance Formation Point',
        'Leading synchronized dance squad with unified directional point',
        'Leading a synchronized dance formation, dropping to one knee while extending arm in a sharp diagonal point alongside crew members',
        'dance_urban'
      ),
      createActionItem(
        'urban_shoulder_roll_bounce',
        'Alternating Urban Shoulder Rolls',
        'Rolling shoulders backward alternately in heavy bass groove',
        'Rolling left and right shoulders alternately with deep syncopated knee bounces, vibing with heavy 808 bass beats',
        'dance_urban'
      ),
      createActionItem(
        'urban_tutting_finger_geometry',
        'Finger and Wrist Tutting Angles',
        'Forming ninety-degree rectangular geometric boxes with hands',
        'Constructing complex ninety-degree geometric shapes and boxes using fingers, hands, and forearms in mesmerizing tutting choreography',
        'dance_urban'
      ),
      createActionItem(
        'urban_dance_circle_cheer',
        'Hyping Up Dancer in Street Cypher Circle',
        'Clapping and shouting encouragement on edge of dance battle circle',
        'Standing on the rim of an urban street dance cypher, clapping hands rhythmically, cheering and pointing enthusiastically at the dancer in the center',
        'dance_urban'
      ),
      createActionItem(
        'urban_c-walk_heel_toe',
        'C-Walk Heel-Toe Swivel',
        'Swiveling heels and toes in intricate V-formation steps',
        'Swiveling feet in rapid V-formation heel-and-toe pivots across asphalt, body weight shifting effortlessly with lightning-fast footwork',
        'dance_urban'
      ),
      createActionItem(
        'urban_head_spin_cap',
        'Prepping for Headspin on Padded Cap',
        'Crouched on hands with head centered on floor spinning beanie',
        'Planting padded beanie cap firmly on the floor, bracing hands on either side, preparing to launch into a continuous rotational headspin',
        'dance_urban'
      ),
      createActionItem(
        'urban_windbreaker_zip_pull',
        'Flicking Open Windbreaker Jacket',
        'Unzipping and popping jacket collar during dance break',
        'Pulling the zipper of a colorful retro windbreaker down with one swift motion, flaring the lapels out in sync with a heavy snare hit',
        'dance_urban'
      ),
      createActionItem(
        'urban_air_flare_prep',
        'Airflare Hand Plant Rotation',
        'Swinging legs in airborne arc balancing on rotating palms',
        'Launching hips high into the air in dynamic airflare rotation, transferring weight from one palm to the next with supreme acrobatic power',
        'dance_urban'
      )
    ]
  },
  {
    id: 'fitness_gym',
    name: 'Fitness & Gym Workout',
    icon: '🏋️',
    description: 'Weightlifting, strength conditioning, calisthenics, gym equipment, cardio sprints, and workout form',
    actions: [
      createActionItem(
        'gym_dumbbell_bicep_curl',
        'Standing Dumbbell Bicep Curls',
        'Curling heavy dumbbells with isolated bicep contractions',
        'Standing with feet shoulder-width apart, curling heavy metal dumbbells upward toward shoulders with strict form and engaged core',
        'fitness_gym'
      ),
      createActionItem(
        'gym_barbell_squat',
        'Deep Barbell Back Squats',
        'Squatting deep with barbell across upper traps',
        'Squatting low with a weighted barbell resting across upper traps, thighs parallel to floor, chest upright, driving through heels',
        'fitness_gym'
      ),
      createActionItem(
        'gym_kettlebell_swing',
        'Explosive Kettlebell Hip Swing',
        'Swinging heavy iron kettlebell to eye level with hip snap',
        'Hinging at hips and thrusting powerfully forward to swing a black iron kettlebell up to chest level, glutes locked at top of movement',
        'fitness_gym'
      ),
      createActionItem(
        'gym_forearm_plank',
        'Solid Forearm Core Plank',
        'Holding rigid horizontal plank on forearms and toes',
        'Holding a rigid straight-line plank resting on forearms and toes, abs braced tightly, neck neutral, breathing steadily',
        'fitness_gym'
      ),
      createActionItem(
        'gym_pullups_bar',
        'Overhand Grip Pull-Up on Bar',
        'Pulling chin smoothly above horizontal steel pull-up bar',
        'Gripping an overhead pull-up bar with wide overhand grip, pulling chest up to the steel bar with powerful lats and shoulder retraction',
        'fitness_gym'
      ),
      createActionItem(
        'gym_battle_ropes',
        'Battle Ropes Alternating Waves',
        'Slamming thick heavy ropes creating alternating wave ripples',
        'Gripping thick braided battle ropes in both hands in an athletic quarter-squat, whipping arms up and down to create powerful rippling waves',
        'fitness_gym'
      ),
      createActionItem(
        'gym_pushups_ground',
        'Diamond Tricep Push-Ups',
        'Doing strict push-ups with hands joined in diamond under chest',
        'Performing disciplined push-ups on the rubber gym mat with index fingers and thumbs touching in a diamond shape beneath sternum',
        'fitness_gym'
      ),
      createActionItem(
        'gym_deadlift_lockout',
        'Conventional Barbell Deadlift Lockout',
        'Standing at top of heavy barbell deadlift with chest out',
        'Standing tall at the top lockout of a barbell deadlift, shoulders pulled back, hips fully extended, gripping the knurled steel bar',
        'fitness_gym'
      ),
      createActionItem(
        'gym_stationary_bike_sprint',
        'Stationary Spin Bike Sprint',
        'Standing up out of saddle pedaling vigorously on exercise bike',
        'Pumping pedals vigorously out of the saddle on a stationary spin bike, gripping handlebars, sweat glistening on brow during high-intensity interval',
        'fitness_gym'
      ),
      createActionItem(
        'gym_foam_roller_stretch',
        'Foam Rolling Thigh Muscles',
        'Rolling quad muscles over textured foam roller on mat',
        'Supporting upper body on forearms while rolling thigh quadriceps smoothly over a textured foam roller on the rubber workout floor',
        'fitness_gym'
      ),
      createActionItem(
        'gym_adjust_smartwatch',
        'Checking Heart Rate on Fitness Smartwatch',
        'Tapping digital fitness tracker to inspect workout heart rate',
        'Resting hand on hip while tapping the digital screen of a sleek fitness smartwatch, checking heart rate zones and calories burned with a satisfied grin',
        'fitness_gym'
      ),
      createActionItem(
        'gym_chalking_hands',
        'Clapping White Chalk Dust on Hands',
        'Coating palms in lifting chalk over chalk bowl before heavy lift',
        'Dipping palms into a gym chalk bowl and clapping hands together, creating a white puff of chalk powder while focusing intensely on the barbell',
        'fitness_gym'
      ),
      createActionItem(
        'gym_overhead_shoulder_press',
        'Seated Dumbbell Overhead Shoulder Press',
        'Pressing dumbbells vertically above head on incline bench',
        'Seated upright against a gym bench, pressing a pair of dumbbells straight overhead until arms are extended, exhaling with focused effort',
        'fitness_gym'
      ),
      createActionItem(
        'gym_resistance_band_pull',
        'Resistance Band Lateral Pull-Apart',
        'Pulling elastic band wide across chest to engage rear deltoids',
        'Holding a latex resistance band in front of chest and pulling both hands wide horizontally apart until band touches sternum, squeezing shoulder blades',
        'fitness_gym'
      ),
      createActionItem(
        'gym_water_bottle_sip',
        'Drinking Water from Shaker Bottle with Towel',
        'Drinking cold water from shaker with gym towel around neck',
        'Resting between heavy sets with a small white gym towel draped over neck, taking a refreshing gulp of ice water from a stainless shaker bottle',
        'fitness_gym'
      ),
      createActionItem(
        'gym_box_jump_landing',
        'Plyometric Plyo-Box Jump Landing',
        'Landing softly on two feet atop high wooden plyometric box',
        'Leaping explosively from the floor onto the top of a thirty-inch wooden plyo box, landing softly in a controlled quarter-squat with arms forward',
        'fitness_gym'
      )
    ]
  },
  {
    id: 'yoga_mindfulness',
    name: 'Yoga & Mindfulness',
    icon: '🧘‍♀️',
    description: 'Yoga asanas, mindful meditation, balance poses, sun salutations, breathing pranayama, and holistic zen',
    actions: [
      createActionItem(
        'yoga_tree_pose_balance',
        'Vrksasana (Tree Pose) Balance',
        'Balancing on one foot with opposite sole on inner thigh in prayer',
        'Balancing serenely on one foot with the sole of the opposite foot pressed against the inner thigh, hands joined in Anjali Mudra prayer at chest',
        'yoga_mindfulness'
      ),
      createActionItem(
        'yoga_warrior_two_stance',
        'Virabhadrasana II (Warrior II Pose)',
        'Deep lunge with arms extended parallel to floor gazing over hand',
        'Holding a grounded Warrior II stance with front knee bent at ninety degrees, arms stretched long horizontally, gazing with quiet strength over fingertips',
        'yoga_mindfulness'
      ),
      createActionItem(
        'yoga_downward_dog',
        'Adho Mukha Svanasana (Downward-Facing Dog)',
        'Inverted V-shape stretch with palms and heels grounded',
        'Pressing palms firmly into yoga mat while lifting hips skyward in an inverted V-shape, lengthening hamstrings and relaxing neck between biceps',
        'yoga_mindfulness'
      ),
      createActionItem(
        'yoga_lotus_meditation',
        'Padmasana (Full Lotus) Meditation',
        'Sitting cross-legged in lotus posture with Gyan mudra on knees',
        'Sitting in a calm full lotus posture with feet resting on opposite thighs, spine straight, index fingers and thumbs touching in Gyan Mudra, eyes gently closed',
        'yoga_mindfulness'
      ),
      createActionItem(
        'yoga_cobra_pose_arch',
        'Bhujangasana (Cobra Pose)',
        'Lifting chest off mat with hands under shoulders',
        'Lying on stomach and pressing palms into mat to lift chest into a gentle cobra arch, shoulders drawn away from ears, throat open to morning light',
        'yoga_mindfulness'
      ),
      createActionItem(
        'yoga_child_pose_rest',
        'Balasana (Child\'s Pose) Surrender',
        'Kneeling and folding forward resting forehead on mat',
        'Resting in gentle child’s pose with hips settled onto heels, torso draped over thighs, arms extended far forward along the mat, forehead resting on earth',
        'yoga_mindfulness'
      ),
      createActionItem(
        'yoga_dancer_pose_lord',
        'Natarajasana (Lord of the Dance Pose)',
        'Balancing on one leg reaching back to hold ankle arched high',
        'Balancing on one leg while reaching back with hand to grasp the inner ankle of the lifted leg, arching spine and reaching free arm forward in graceful flight',
        'yoga_mindfulness'
      ),
      createActionItem(
        'yoga_crow_arm_balance',
        'Bakasana (Crow Pose) Arm Balance',
        'Balancing entire body weight on palms with knees on triceps',
        'Balancing body weight entirely on palms, knees tucked against the backs of upper arms, feet lifted off floor, core engaged with steady focus',
        'yoga_mindfulness'
      ),
      createActionItem(
        'yoga_eagle_garudasana',
        'Garudasana (Eagle Pose) Wrap',
        'Twisting arms and legs together in focused balance crouch',
        'Standing in a bent-knee balance with one thigh wrapped over the other, forearms intertwined in front of face, focusing gaze with intense calm',
        'yoga_mindfulness'
      ),
      createActionItem(
        'yoga_bridge_setu_bandha',
        'Setu Bandha Sarvangasana (Bridge Pose)',
        'Lifting pelvis towards ceiling with interlaced fingers on floor',
        'Lying on back with knees bent and lifting hips high towards the ceiling, clasping fingers together beneath back to open chest and heart',
        'yoga_mindfulness'
      ),
      createActionItem(
        'yoga_triangle_trikonasana',
        'Utthita Trikonasana (Extended Triangle Pose)',
        'Reaching one hand down to shin while other arm reaches skyward',
        'Standing with wide legs, reaching bottom hand down to touch ankle while extending top arm straight toward the sky, torso opened laterally',
        'yoga_mindfulness'
      ),
      createActionItem(
        'yoga_seated_spinal_twist',
        'Ardha Matsyendrasana (Half Lord of the Fishes Twist)',
        'Seated spinal twist with elbow hooked over raised knee',
        'Sitting with one knee bent upward and hooking opposite elbow around the thigh, twisting spine gently backward while looking over back shoulder',
        'yoga_mindfulness'
      ),
      createActionItem(
        'yoga_namaste_bow',
        'Anjali Mudra Heart Center Bow',
        'Bowing head slightly with palms pressed at sternum',
        'Standing tall with palms pressed firmly together in prayer at heart center, bowing head slightly in humble gratitude and inner peace',
        'yoga_mindfulness'
      ),
      createActionItem(
        'yoga_singing_bowl_chime',
        'Striking Tibetan Brass Singing Bowl',
        'Circling wooden striker around rim of resonant brass singing bowl',
        'Sitting on a meditation cushion, circling a suede wooden mallet around the rim of a hand-hammered brass Tibetan singing bowl to produce deep harmonic vibrations',
        'yoga_mindfulness'
      ),
      createActionItem(
        'yoga_pranayama_breathing',
        'Nadi Shodhana Alternate Nostril Breathing',
        'Using thumb and ring finger on bridge of nose for pranayama',
        'Sitting upright, using right thumb and ring finger to alternately close nostrils during peaceful rhythmic alternate nostril pranayama breathwork',
        'yoga_mindfulness'
      ),
      createActionItem(
        'yoga_savasana_relaxation',
        'Savasana (Corpse Pose) Deep Relaxation',
        'Lying flat on back with palms facing upward in total rest',
        'Lying completely still flat on back on yoga mat, arms resting beside body with palms facing upward, eyes closed in profound meditative tranquility',
        'yoga_mindfulness'
      )
    ]
  }
];
