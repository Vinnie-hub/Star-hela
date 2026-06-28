(function () {
  'use strict';

  /* ── CONSTANTS ───────────────────────────────────────── */
  const REG = 'https://starhela.com/register.php?ref=sydney';

  /* ── ADVISOR DATA  ────────────────────────── */
  const advisors = [
    /* ── ORIGINAL 60 ── */
    { name:'Gifted Guidance',       handle:'@Giftedguidance',          bio:'No fluff. Real answers. Expert in Psychic Reading, Love & Relationship, Cheating & Affairs, Breakup & Divorce, Career, Dream Analysis.',   status:'online',    color:'#7c3aed', tags:['Psychic','Love','Dreams'],              price:'3.20', credit:'$3 on 1st chat', rating:4.9,  reviews:2100, type:'psychic',      rank:'Top 1% Answer Rate' },
    { name:'WarmWords Emily',        handle:'@Emmili',                  bio:'Quiet, but not boring. I like when words feel like warm light. Genuine conversations, meaningful connection — no empty talk here.',           status:'available', color:'#db2777', tags:['Companion','Chat'],                     price:'1.99', credit:'',              rating:4.8,  reviews:340,  type:'companion',    rank:'Top 6% Most Active' },
    { name:'ScottSpirit Psychic',    handle:'@ScottSpirit',             bio:'Clairvoyant Psychic Medium with 45 years experience. 117,000+ readings given. Any subject, any situation. More than just Tarot.',            status:'available', color:'#0369a1', tags:['Psychic','Tarot','Medium'],            price:'4.50', credit:'',              rating:4.95, reviews:8700, type:'psychic',      rank:'Top 3%' },
    { name:'Lily Phenomenal',        handle:'@Esther.A',                bio:'Ready to listen to your voice and talk for as long as you want. No pressure, just lovely moments. Express yourself any way you want.',       status:'available', color:'#be185d', tags:['Companion','Chat','Video'],            price:'2.50', credit:'$5 on 1st chat', rating:4.7,  reviews:920,  type:'companion',    rank:'' },
    { name:'Cosmic Cards',           handle:'@CosmicCards',             bio:'World-class Tarot reader & top relationship expert. Over 10 years of mastery with 5,400+ rave reviews. Fast typist. Judgment free.',        status:'offline',   color:'#7e22ce', tags:['Tarot','Relationship'],                price:'3.80', credit:'$10 on 1st chat',rating:5.0,  reviews:5400, type:'tarot',        rank:'Top 2%' },
    { name:'Bright Healing',         handle:'@Brighthealing',           bio:'Natural born psychic. I read through date of birth and name, with spirit guides. Honest and very straightforward — no sugarcoating.',       status:'live',      color:'#0f766e', tags:['Psychic','Healing','Love'],            price:'2.90', credit:'',              rating:4.8,  reviews:1450, type:'psychic',      rank:'Top 8% Answer Rate' },
    { name:'SpiritualPsychic Hira',  handle:'@PsychicHira',             bio:'Blessed with the ability to see events and dynamics in relationships. I work with guides, angels, and spirits. Love, career, future.',      status:'live',      color:'#0e7490', tags:['Psychic','Love','Career'],             price:'3.50', credit:'',              rating:4.9,  reviews:3200, type:'psychic',      rank:'Top 4% Most Active' },
    { name:'Faithful Answers',       handle:'@FaithfulAnswers',         bio:'Top advisor from KEEN. Intuitive and compassionate psychic with 10+ years experience and 32,000+ readings. Over 7,800 reviews.',            status:'offline',   color:'#b45309', tags:['Psychic','Spiritual'],                 price:'5.00', credit:'',              rating:4.95, reviews:7800, type:'psychic',      rank:'Top 1% Answer Rate' },
    { name:'Julia — Wellness Coach', handle:'@Julia25',                 bio:'Fitness, yoga and psychology background. Supporting people through trauma, pain, stress and emotional imbalance. Gentle guidance.',          status:'available', color:'#16a34a', tags:['Wellness','Coach'],                    price:'3.00', credit:'$3 on 1st chat', rating:4.8,  reviews:670,  type:'coach',        rank:'Top 10% Most Active' },
    { name:'PsychicAether',          handle:'@PsychicAether',           bio:'Never doubt yourself. The moment you believe in yourself you gain confidence and feel happy. Here to help you reach that clarity.',          status:'live',      color:'#1d4ed8', tags:['Psychic','Motivation'],                price:'2.20', credit:'',              rating:4.7,  reviews:580,  type:'psychic',      rank:'' },
    { name:'Morine N',               handle:'@Moryn97',                 bio:'A safe space for deep talks, personal growth, positive energy and genuine connection. Lonely, overthinking, or chasing goals — I\'m here.',  status:'live',      color:'#9333ea', tags:['Chat','Support','Growth'],             price:'2.00', credit:'$2 on 1st chat', rating:4.85, reviews:1100, type:'companion',    rank:'Top 2% Most Active' },
    { name:'JaneyPsi',               handle:'@JaneyPsi',                bio:'Specialist in love with a unique Astrological love compatibility system. Natural psychic with 51 years of experience.',                     status:'available', color:'#c2410c', tags:['Astrology','Love','Psychic'],          price:'4.80', credit:'',              rating:4.9,  reviews:4200, type:'astrology',    rank:'Top 5%' },
    { name:'Psychic Cynthia',        handle:'@thepsychicone',           bio:'Psychic and Astrologer with over 170,000 readings. Specializes in love, relationships, career and finances. Quick readings with dates.',    status:'available', color:'#0e7490', tags:['Psychic','Astrology','Career'],        price:'2.00', credit:'$2 on 1st chat', rating:4.85, reviews:9200, type:'psychic',      rank:'Top 3%' },
    { name:'Sita',                   handle:'@Sita4u2',                 bio:'When life gets loud, I help you turn the volume down. Strategize your next career move, sort through feelings, or just talk.',              status:'online',    color:'#7c3aed', tags:['Coach','Listening'],                   price:'1.50', credit:'',              rating:4.75, reviews:450,  type:'coach',        rank:'' },
    { name:'Grounded Growth Guide',  handle:'@CertifiedSpiritualCoach', bio:'I guide people through deep personal change — process emotions, find clarity, and feel grounded. Judgment-free calm space.',                status:'online',    color:'#065f46', tags:['Coach','Spiritual','Growth'],          price:'2.80', credit:'',              rating:4.88, reviews:780,  type:'coach',        rank:'Top 4% Most Active' },
    { name:'EllisGrace',             handle:'@EllisGrace',              bio:'Tarot reader, Energy Healer, Spiritual Coach, and Hypnotherapist — blending modalities to navigate life\'s deepest questions.',              status:'online',    color:'#be185d', tags:['Tarot','Healing','Coach'],             price:'2.00', credit:'$2 on 1st chat', rating:4.8,  reviews:630,  type:'tarot',        rank:'Top 7% Most Active' },
    { name:'Tarot Luciana',          handle:'@lucianavision',           bio:'Luciana ofrece guía psíquica, visión clarividente y lecturas de tarot. Claridad, confianza y conexión con tu alma.',                       status:'available', color:'#7e22ce', tags:['Tarot','Psychic'],                     price:'2.00', credit:'$2 on 1st chat', rating:4.7,  reviews:540,  type:'tarot',        rank:'' },
    { name:'Vida',                   handle:'@VidaR',                   bio:'Your virtual friend for high-value conversations, meaningful interactions, and getting to know people. A calming, empathetic listener.',    status:'online',    color:'#0369a1', tags:['Companion','Chat'],                    price:'1.80', credit:'',              rating:4.82, reviews:890,  type:'companion',    rank:'Top 1% Answer Rate' },
    { name:'Dr. Donna Marks',        handle:'@Drdonnamk',               bio:'Author, Concierge Psychotherapist and Addictions Counselor. Helping people reclaim their life and purpose. Warm, professional, caring.',   status:'online',    color:'#b91c1c', tags:['Therapy','Addiction','Coach'],         price:'7.50', credit:'',              rating:4.97, reviews:1600, type:'coach',        rank:'' },
    { name:'Psychic Elena',          handle:'@LoveReading',             bio:'Professional Psychic Reader specializing in love, relationships, and career guidance. Accurate insights to guide your life path.',          status:'online',    color:'#7c3aed', tags:['Psychic','Love','Career'],             price:'2.80', credit:'$5 on 1st chat', rating:4.85, reviews:3100, type:'psychic',      rank:'Top 9% Most Active' },
    { name:'Divine Crystal Soul',    handle:'@Psychicalexandra',        bio:'A powerful psychic with divine energy & crystal intuition. 10+ years guiding hearts through love, breakups, and twin flame journeys.',     status:'available', color:'#9333ea', tags:['Psychic','Spiritual','Love'],          price:'3.10', credit:'',              rating:4.88, reviews:2700, type:'psychic',      rank:'' },
    { name:'Psychic Amara',          handle:'@Sidra345',                bio:'Psychic healer and life coach passionate about helping people. I offer guidance, clarity, and support. A good listener, safe space.',       status:'available', color:'#0f766e', tags:['Psychic','Healing','Coach'],           price:'2.60', credit:'',              rating:4.78, reviews:890,  type:'psychic',      rank:'Top 10% Most Active' },
    { name:'Sister Moon',            handle:'@SisterMoon',              bio:'Advisor specialist in love and relationships. Third generation God gifted, also a life coach guiding career, family, and finances.',        status:'available', color:'#c2410c', tags:['Spiritual','Love','Coach'],            price:'3.00', credit:'',              rating:4.75, reviews:1200, type:'psychic',      rank:'' },
    { name:'Sora Kim — Listener',    handle:'@Sora_Kim',                bio:'Sometimes life feels heavy and you just need someone who listens without judging. A quiet place to share your thoughts.',                  status:'online',    color:'#db2777', tags:['Chat','Support','Listening'],          price:'1.20', credit:'',              rating:4.9,  reviews:4600, type:'companion',    rank:'Top 1% Answer Rate' },
    { name:'PsychicHermes',          handle:'@PsychicHermes',           bio:'15+ years of divine truth. Connecting with the Angelic Realm for grounded insight. Relationships, personal growth, honest answers.',       status:'online',    color:'#0369a1', tags:['Psychic','Spiritual','Coach'],         price:'4.20', credit:'',              rating:4.92, reviews:5100, type:'psychic',      rank:'Top 10% Most Active' },
    { name:'Vee',                    handle:'@Saintwithsin',             bio:'I am a diagnosed borderline. Extremely open minded and emotionally intelligent. I\'ll never lie to you. True to my colors.',                status:'live',      color:'#b45309', tags:['Chat','Support'],                      price:'1.80', credit:'',              rating:4.72, reviews:310,  type:'companion',    rank:'Top 8% Most Active' },
    { name:'Ankh Marie',             handle:'@AnkhMarie',               bio:'Come chat and make friends! I love video games, movies, horror stuff. Always up for real, fun conversation — no fake vibes.',              status:'live',      color:'#be185d', tags:['Companion','Chat','Video'],            price:'2.00', credit:'$5 on 1st chat', rating:4.65, reviews:220,  type:'companion',    rank:'Top 3% Most Active' },
    { name:'Psychic Joy',            handle:'@Joy1063',                 bio:'10 years of experience in love and relationships. I will predict with my mantra power and turn bad energy into good.',                     status:'online',    color:'#7e22ce', tags:['Psychic','Love'],                      price:'2.40', credit:'',              rating:4.8,  reviews:1900, type:'psychic',      rank:'Top 1% Most Active' },
    { name:'Barb — Master Psychic',  handle:'@TarotByBarb',             bio:'Spiritual channel with 47 years of experience blending tarot, oracle guidance, spirit communication, and distant Reiki for clarity.',     status:'offline',   color:'#0e7490', tags:['Tarot','Psychic','Healing'],           price:'5.50', credit:'',              rating:4.96, reviews:6200, type:'tarot',        rank:'47yr Master' },
    { name:'Psychic Love Visions',   handle:'@Lovevisions',             bio:'Gifted psychic helping people find clarity in love, marriage, and emotional connections. Uncovering what your ex is truly thinking.',      status:'live',      color:'#9333ea', tags:['Psychic','Love','Relationship'],       price:'2.70', credit:'',              rating:4.87, reviews:2400, type:'relationship', rank:'Top 2% Most Active' },
    { name:'Brandy Wolfe',           handle:'@BrandyWolfe',             bio:'Shadow Relationship & Spiritual Advisor. Certified Angel Guide & Tarot Reader with 30+ years. Unapologetic, honest, accurate.',           status:'available', color:'#c2410c', tags:['Tarot','Relationship','Spiritual'],    price:'3.30', credit:'$2 on 1st chat', rating:4.82, reviews:1850, type:'relationship', rank:'Top 9% Most Active' },
    { name:'Astrologer Maryna',      handle:'@MaruStarz',               bio:'Professional astrologer and self-improvement coach. Specializing in personal challenges, life transitions, and emotional growth.',         status:'available', color:'#1d4ed8', tags:['Astrology','Coach'],                   price:'2.90', credit:'',              rating:4.84, reviews:760,  type:'astrology',    rank:'' },
    { name:'Elmira — Psychic',       handle:'@PsychicElmira',           bio:'Top rated psychic, clairvoyant, tarot reader and empath on major platform. Detailed, clear and specific. No judgment.',                   status:'available', color:'#7c3aed', tags:['Psychic','Tarot','Empath'],            price:'3.60', credit:'',              rating:4.89, reviews:3400, type:'psychic',      rank:'Top 4% Most Active' },
    { name:'ReadingsbyAzul',         handle:'@ReadingsbyAzul',          bio:'Expert at tuning into your present love situation without details given. Accurate predictions! Psychic seer Tarot reader.',               status:'available', color:'#0f766e', tags:['Tarot','Love','Psychic'],              price:'2.10', credit:'',              rating:4.76, reviews:980,  type:'tarot',        rank:'Top 4% Most Active' },
    { name:'Psychic Lady Sara',      handle:'@psychicladysara',         bio:'Gifted intuitive psychic offering accurate, empowering insights. Expert in relationship dynamics, soulmate bonds, twin flames.',          status:'offline',   color:'#7e22ce', tags:['Psychic','Love','Soulmate'],           price:'3.90', credit:'',              rating:4.91, reviews:4100, type:'psychic',      rank:'Top 4% Most Active' },
    { name:'Celeste Moon',           handle:'@CelesteMoon',             bio:'Vedic astrologer with 18 years of practice. I map your birth chart to reveal your soul\'s true path — love, career, and destiny.',        status:'online',    color:'#4f46e5', tags:['Astrology','Vedic','Love'],            price:'3.40', credit:'$3 on 1st chat', rating:4.87, reviews:1320, type:'astrology',    rank:'Top 5%' },
    { name:'The Oracle Rose',        handle:'@OracleRose',              bio:'Deeply empathic oracle reader. My cards don\'t just tell — they heal. Specializing in grief, transitions, and spiritual awakening.',       status:'live',      color:'#be185d', tags:['Psychic','Healing','Tarot'],           price:'3.00', credit:'',              rating:4.93, reviews:2650, type:'psychic',      rank:'Top 6% Most Active' },
    { name:'Marco Vitale',           handle:'@MarcoV',                  bio:'Certified NLP coach and former therapist. I help high-achievers break invisible blocks. No woo — just results-driven mindset work.',      status:'online',    color:'#1e40af', tags:['Coach','NLP','Career'],                price:'4.00', credit:'',              rating:4.91, reviews:870,  type:'coach',        rank:'' },
    { name:'Nadia Stars',            handle:'@NadiaStars',              bio:'Clairvoyant medium connecting you with loved ones who have passed. Gentle, compassionate, and surprisingly accurate readings.',            status:'available', color:'#6d28d9', tags:['Medium','Psychic','Grief'],            price:'3.70', credit:'$4 on 1st chat', rating:4.88, reviews:1780, type:'psychic',      rank:'Top 7%' },
    { name:'Coach Kwame',            handle:'@CoachKwame',              bio:'Executive life coach. 12 years working with Fortune 500 leaders and everyday people. Clarity, direction, and accountability.',           status:'online',    color:'#065f46', tags:['Coach','Career','Executive'],          price:'5.50', credit:'',              rating:4.95, reviews:520,  type:'coach',        rank:'' },
    { name:'Isabelle Faye',          handle:'@IsabelleFaye',            bio:'French intuitive — love readings, twin flames, karmic cycles. I speak plainly about what the cards show, however hard the truth.',       status:'available', color:'#be185d', tags:['Tarot','Love','Relationship'],         price:'2.60', credit:'$2 on 1st chat', rating:4.79, reviews:1100, type:'tarot',        rank:'Top 8%' },
    { name:'Shaman Bear',            handle:'@ShamanBear',              bio:'Indigenous healing traditions meet modern life. Shamanic journeys, energy clearing, and spirit animal readings. Earth-based wisdom.',     status:'live',      color:'#78350f', tags:['Spiritual','Healing','Shaman'],        price:'3.20', credit:'',              rating:4.84, reviews:690,  type:'psychic',      rank:'' },
    { name:'Zara Ray',               handle:'@ZaraRay',                 bio:'Your cheerful pocket bestie. Venting welcome. I\'m here to listen, validate, and help you feel a little lighter today.',                  status:'online',    color:'#ec4899', tags:['Companion','Chat','Support'],          price:'1.40', credit:'$2 on 1st chat', rating:4.83, reviews:2300, type:'companion',    rank:'Top 2% Most Active' },
    { name:'Dr. Kofi Asante',        handle:'@DrKofi',                  bio:'Clinical psychologist offering psychoeducation, coping strategies, and a judgment-free space. Not therapy — real knowledge.',           status:'online',    color:'#1e3a5f', tags:['Psychology','Coach','Wellness'],       price:'6.00', credit:'',              rating:4.96, reviews:410,  type:'coach',        rank:'' },
    { name:'Luna Espinoza',          handle:'@LunaEspinoza',            bio:'Bilingual psychic (EN/ES). Specializing in family dynamics, financial guidance, and finding purpose after heartbreak.',                  status:'available', color:'#7c3aed', tags:['Psychic','Family','Finance'],          price:'2.50', credit:'',              rating:4.81, reviews:980,  type:'psychic',      rank:'Top 9%' },
    { name:'Thorne — Dark Tarot',    handle:'@ThorneCards',             bio:'Shadow work specialist. If lighter readers haven\'t helped, come here. I work with your darkness to find breakthrough clarity.',          status:'live',      color:'#292524', tags:['Tarot','Shadow Work'],                price:'3.50', credit:'',              rating:4.74, reviews:620,  type:'tarot',        rank:'' },
    { name:'Emily Carter',           handle:'@EmilyCarter',             bio:'Hi! I love love stories, romance novels, and hearing how people met their partners. Let\'s share sweet stories!',                        status:'online',    color:'#be185d', tags:['Love Stories','Romance','Friendly'],   price:'4.00', credit:'',              rating:4.9,  reviews:2400, type:'companion',    rank:'Popular' },
    { name:'Robert James',           handle:'@RobertJames',             bio:'I enjoy business talks, faith discussions, and learning how religion shapes daily life. Let\'s have meaningful conversations.',          status:'available', color:'#0369a1', tags:['Faith','Business','Mentor'],           price:'6.00', credit:'$5 on 1st chat', rating:4.8,  reviews:1800, type:'mentor',       rank:'Premium' },
    { name:'Linda Rose',             handle:'@LindaRose',               bio:'I\'m looking for companionship and someone to share daily life chats with. Let\'s create beautiful conversations.',                        status:'online',    color:'#be185d', tags:['Companionship','Friendship','Warm'],   price:'8.00', credit:'',              rating:4.7,  reviews:1200, type:'companion',    rank:'Top' },
    { name:'Priya Chakra',           handle:'@PriyaChakra',             bio:'Kundalini yoga teacher and energy healer. Chakra balancing, breathwork, and guided meditation sessions for deep restoration.',          status:'online',    color:'#b45309', tags:['Healing','Wellness','Meditation'],      price:'2.80', credit:'$3 on 1st chat', rating:4.86, reviews:750,  type:'coach',        rank:'Top 6%' },
    { name:'Felix Renard',           handle:'@FelixRenard',             bio:'Relationship coach and former couples therapist. Honest takes on attachment styles, communication gaps, and rebuilding trust.',         status:'available', color:'#1e40af', tags:['Relationship','Coach','Attachment'],    price:'4.20', credit:'',              rating:4.92, reviews:1230, type:'relationship', rank:'Top 3%' },
    { name:'Mystic Maya',            handle:'@MysticMaya',              bio:'3rd generation psychic with the gift of sight. Reading auras, energy fields, and love connections for over 20 years.',                 status:'online',    color:'#9333ea', tags:['Psychic','Aura','Love'],                price:'2.90', credit:'$5 on 1st chat', rating:4.85, reviews:3400, type:'psychic',      rank:'Top 5% Most Active' },
    { name:'Captain Cork',           handle:'@CaptCork',                bio:'Retired sailor, now full-time listener. No judgment, no agenda. Just a good ear and honest thoughts from someone who\'s seen the world.',status:'live',      color:'#0369a1', tags:['Companion','Listening','Chat'],        price:'1.10', credit:'',              rating:4.7,  reviews:890,  type:'companion',    rank:'' },
    { name:'Amethyst Drew',          handle:'@AmethystDrew',            bio:'Crystal healer and Reiki master. Distance healing sessions, crystal recommendations, and energetic protection guidance.',               status:'available', color:'#7c3aed', tags:['Healing','Crystal','Reiki'],            price:'2.40', credit:'$2 on 1st chat', rating:4.78, reviews:560,  type:'psychic',      rank:'' },
    { name:'Coach Reina',            handle:'@CoachReina',              bio:'Divorce recovery and life transition coach. I help you move from broken to whole — with compassion, strategy, and fire.',              status:'online',    color:'#dc2626', tags:['Coach','Divorce','Recovery'],          price:'3.60', credit:'',              rating:4.89, reviews:990,  type:'coach',        rank:'Top 5%' },
    { name:'Sophia Grace',           handle:'@SophiaGrace',             bio:'I\'m a Christian who loves talking about faith, prayer, and how God works in our lives. Let\'s share inspiring conversations.',          status:'online',    color:'#7c3aed', tags:['Christianity','Faith','Prayer'],        price:'3.00', credit:'',              rating:4.9,  reviews:2600, type:'mentor',       rank:'Verified' },
    { name:'Tarot by Dmitri',        handle:'@TarotDmitri',             bio:'Eastern European tradition of divination meets modern reading. Precise, blunt, and surprisingly comforting in equal measure.',          status:'available', color:'#374151', tags:['Tarot','Divination','Psychic'],        price:'2.80', credit:'',              rating:4.82, reviews:1440, type:'tarot',        rank:'Top 6%' },
    { name:'Sunny Side Jen',         handle:'@SunnySideJen',            bio:'Positive energy, authentic vibes, real talk. Whether you need motivation or just a warm conversation — I\'ve got time for you.',        status:'live',      color:'#d97706', tags:['Companion','Motivation','Chat'],       price:'1.60', credit:'$3 on 1st chat', rating:4.77, reviews:1800, type:'companion',    rank:'Top 4% Most Active' },
    { name:'Aries Phoenix',          handle:'@AriesPhoenix',            bio:'Astrologer focused on Saturn returns, life transitions, and generational patterns. Let your chart guide you through the hard seasons.',status:'online',    color:'#b91c1c', tags:['Astrology','Transitions','Coach'],     price:'3.10', credit:'',              rating:4.88, reviews:670,  type:'astrology',    rank:'' },
    { name:'Andrea Fox — Attorney',  handle:'@AFox',                    bio:'Experienced family law attorney. Flat fee legal services, limited scope representation, or quick questions answered with clarity.',   status:'offline',   color:'#1e40af', tags:['Legal','Family Law'],                  price:'6.00', credit:'',              rating:4.95, reviews:320,  type:'coach',        rank:'' },

    /* ── 90 NEW ADVISORS ── */
    { name:'Ama Serwah',            handle:'@AmaSerwah',           bio:'Ghanaian intuitive reader and healer. I work with ancestors, energy, and nature to uncover hidden truths in love and family.',             status:'online',    color:'#7c3aed', tags:['Psychic','Healing','Love'],            price:'2.10', credit:'$2 on 1st chat', rating:4.84, reviews:720,  type:'psychic',      rank:'Top 8%' },
    { name:'Tarot by Nkechi',       handle:'@NkechiTarot',         bio:'Nigerian-born tarot reader with 12 years of practice. Specializing in destiny, marriage timing, and financial breakthroughs.',           status:'live',      color:'#be185d', tags:['Tarot','Love','Finance'],              price:'2.50', credit:'',              rating:4.88, reviews:1340, type:'tarot',        rank:'Top 5% Most Active' },
    { name:'Prophet Elias',         handle:'@ProphetElias',        bio:'Spirit-led guidance for life crossroads, dreams, and divine direction. Honest, grounded, prayerful. No sugarcoating.',                   status:'available', color:'#065f46', tags:['Spiritual','Dreams','Coach'],          price:'3.00', credit:'',              rating:4.90, reviews:2100, type:'psychic',      rank:'Top 3%' },
    { name:'Zanele M',              handle:'@ZaneleM',             bio:'South African life coach helping women reclaim power after toxic relationships. Real tools, real recovery.',                               status:'online',    color:'#dc2626', tags:['Coach','Recovery','Support'],          price:'2.80', credit:'$3 on 1st chat', rating:4.85, reviews:890,  type:'coach',        rank:'Top 6%' },
    { name:'Cleo Vane',             handle:'@CleoVane',            bio:'Clairvoyant and dream interpreter. I see what others miss — energy blocks, hidden rivals, and upcoming shifts in your love life.',        status:'live',      color:'#9333ea', tags:['Psychic','Dreams','Love'],             price:'3.20', credit:'',              rating:4.91, reviews:3200, type:'psychic',      rank:'Top 2% Most Active' },
    { name:'Coach Adaeze',          handle:'@CoachAdaeze',         bio:'Certified mindset coach. Helping you silence self-doubt and step into your greatness. African roots, global perspective.',                status:'online',    color:'#0f766e', tags:['Coach','Mindset','Growth'],           price:'2.60', credit:'',              rating:4.83, reviews:670,  type:'coach',        rank:'' },
    { name:'Madam Zuri',            handle:'@MadamZuri',           bio:'Third-generation spiritual advisor from East Africa. Specializing in love, money attraction, and clearing negative energy.',              status:'available', color:'#7e22ce', tags:['Spiritual','Love','Healing'],          price:'3.50', credit:'$5 on 1st chat', rating:4.92, reviews:4100, type:'psychic',      rank:'Top 1%' },
    { name:'AstroKofi',             handle:'@AstroKofi',           bio:'West African astrologer blending traditional star wisdom with modern interpretation. Career, love, and destiny charts.',                  status:'online',    color:'#1d4ed8', tags:['Astrology','Career','Love'],           price:'2.90', credit:'',              rating:4.86, reviews:980,  type:'astrology',    rank:'Top 7%' },
    { name:'Hope Mensah',           handle:'@HopeMensah',          bio:'Compassionate listener and life guide. No judgment — just a warm, safe space to process and move forward with clarity.',                  status:'live',      color:'#db2777', tags:['Chat','Support','Growth'],             price:'1.80', credit:'$2 on 1st chat', rating:4.79, reviews:540,  type:'companion',    rank:'Top 9% Most Active' },
    { name:'Seun Oracle',           handle:'@SeunOracle',          bio:'Nigerian psychic and oracle reader. I tap into energy fields to reveal what is hidden and what is coming in your near future.',           status:'available', color:'#b45309', tags:['Psychic','Love','Career'],             price:'2.70', credit:'',              rating:4.88, reviews:1780, type:'psychic',      rank:'Top 4%' },
    { name:'Miriam Osei',           handle:'@MiriamOsei',          bio:'Relationship strategist and breakup recovery coach. Helping you detach with dignity and attract better love with confidence.',            status:'online',    color:'#be185d', tags:['Relationship','Coach','Recovery'],     price:'3.10', credit:'',              rating:4.87, reviews:1120, type:'relationship', rank:'Top 5%' },
    { name:'Kweku Speaks',          handle:'@KwekuSpeaks',         bio:'Life coach and motivational guide from Kumasi. Let\'s have real talk about your goals, your blocks, and your next move.',                status:'live',      color:'#065f46', tags:['Coach','Motivation','Chat'],           price:'2.00', credit:'$2 on 1st chat', rating:4.81, reviews:830,  type:'coach',        rank:'Top 8% Most Active' },
    { name:'Fatou Diallo',          handle:'@FatouDiallo',         bio:'Senegalese seer and healer. I work with spirit guides and sacred water to reveal love, luck, and life path for your destiny.',            status:'available', color:'#7c3aed', tags:['Psychic','Spiritual','Love'],          price:'3.30', credit:'',              rating:4.93, reviews:2650, type:'psychic',      rank:'Top 2%' },
    { name:'Tunde Vision',          handle:'@TundeVision',         bio:'Prophetic readings with pinpoint accuracy. Past, present, future. No cold reading — just pure spiritual sight from Lagos.',               status:'online',    color:'#0e7490', tags:['Psychic','Dreams','Career'],           price:'2.80', credit:'',              rating:4.89, reviews:3100, type:'psychic',      rank:'Top 3% Most Active' },
    { name:'Akua Light',            handle:'@AkuaLight',           bio:'Energy healer and Reiki practitioner based in Accra. Distance healing, chakra clearing, and aura readings available.',                   status:'live',      color:'#16a34a', tags:['Healing','Reiki','Wellness'],          price:'2.40', credit:'$3 on 1st chat', rating:4.85, reviews:760,  type:'coach',        rank:'' },
    { name:'Mama Therese',          handle:'@MamaTherese',         bio:'Spiritual mother figure. Over 30 years guiding families, marriages, and individuals through life\'s hardest seasons with grace.',         status:'available', color:'#b91c1c', tags:['Spiritual','Love','Family'],           price:'4.00', credit:'',              rating:4.96, reviews:5200, type:'psychic',      rank:'Top 1% Answer Rate' },
    { name:'Nneka Speaks',          handle:'@NnekaSpeaks',         bio:'Bold, direct, no-nonsense life coach from Enugu. Helping women stop settling and start demanding what they deserve in love and life.',    status:'online',    color:'#9333ea', tags:['Coach','Love','Mindset'],              price:'2.50', credit:'',              rating:4.82, reviews:1040, type:'coach',        rank:'Top 6%' },
    { name:'Abena Rose',            handle:'@AbenaRose',           bio:'Tarot and oracle reader. I let the cards speak plainly so you leave with clarity, not confusion. Love, money, and purpose readings.',     status:'live',      color:'#7e22ce', tags:['Tarot','Love','Finance'],              price:'2.20', credit:'$2 on 1st chat', rating:4.80, reviews:920,  type:'tarot',        rank:'Top 7% Most Active' },
    { name:'Elder Chukwu',          handle:'@ElderChukwu',         bio:'Traditional diviner and counselor with 40 years of practice. Rooted in Igbo spiritual tradition — love, protection, and guidance.',      status:'available', color:'#78350f', tags:['Spiritual','Healing','Love'],          price:'3.80', credit:'',              rating:4.94, reviews:4400, type:'psychic',      rank:'Top 2%' },
    { name:'Luminary Lola',         handle:'@LuminaryLola',        bio:'Intuitive astrologer and life path reader. Birth charts, solar returns, and transit forecasts for love, career, and health.',            status:'online',    color:'#4f46e5', tags:['Astrology','Love','Career'],           price:'3.00', credit:'',              rating:4.87, reviews:1560, type:'astrology',    rank:'Top 5%' },
    { name:'Patience Adu',          handle:'@PatienceAdu',         bio:'A warm, patient listener for those carrying heavy hearts. No pressure. Just honest conversation and real emotional support.',             status:'live',      color:'#db2777', tags:['Chat','Support','Listening'],          price:'1.50', credit:'$2 on 1st chat', rating:4.91, reviews:3800, type:'companion',    rank:'Top 1% Answer Rate' },
    { name:'Mystic Nana',           handle:'@MysticNana',          bio:'Akan-tradition mystic and dream walker. I interpret night visions, decode spiritual attacks, and give clarity on destiny.',               status:'available', color:'#7c3aed', tags:['Psychic','Dreams','Spiritual'],        price:'2.90', credit:'',              rating:4.88, reviews:2200, type:'psychic',      rank:'Top 4%' },
    { name:'Victor Bright',         handle:'@VictorBright',        bio:'Career development coach with 15 years of HR experience. Resume building, interview prep, and salary negotiation guidance.',              status:'online',    color:'#1e40af', tags:['Coach','Career','Executive'],          price:'4.50', credit:'',              rating:4.93, reviews:680,  type:'coach',        rank:'' },
    { name:'Blessing Nwosu',        handle:'@BlessingNwosu',       bio:'Spiritual counselor and prayer warrior. Interceding for breakthrough in marriage, fertility, finances, and family restoration.',          status:'live',      color:'#065f46', tags:['Spiritual','Prayer','Family'],         price:'2.60', credit:'',              rating:4.90, reviews:2900, type:'psychic',      rank:'Top 3% Most Active' },
    { name:'Ife Seer',              handle:'@IfeSeer',             bio:'Yoruba divination specialist using Ifa oracle system. Deep ancestral wisdom for modern life decisions and spiritual alignment.',          status:'available', color:'#9333ea', tags:['Psychic','Spiritual','Career'],        price:'3.40', credit:'$4 on 1st chat', rating:4.92, reviews:3600, type:'psychic',      rank:'Top 2%' },
    { name:'Joyce Radiance',        handle:'@JoyceRadiance',       bio:'Christian counselor and encourager. Let\'s talk faith, purpose, and how God is moving even in your most confusing season.',              status:'online',    color:'#0369a1', tags:['Faith','Coach','Support'],             price:'2.20', credit:'',              rating:4.89, reviews:1700, type:'mentor',       rank:'Verified' },
    { name:'Tarot Mama Africa',     handle:'@TarotMamaAfrica',     bio:'Reading cards for 25 years across three continents. I speak truth with love. Love life, timing, and unexpected revelations.',            status:'live',      color:'#be185d', tags:['Tarot','Love','Psychic'],              price:'3.00', credit:'',              rating:4.91, reviews:4800, type:'tarot',        rank:'Top 2% Most Active' },
    { name:'Chiamaka Soul',         handle:'@ChiamakaSoul',        bio:'Soul-to-soul conversations for those feeling lost. I help you find your center, your voice, and your next best step forward.',           status:'available', color:'#7c3aed', tags:['Chat','Growth','Support'],             price:'2.00', credit:'$2 on 1st chat', rating:4.83, reviews:1100, type:'companion',    rank:'Top 7%' },
    { name:'Nana Yaa Visions',      handle:'@NanaYaaVisions',      bio:'Intuitive medium from Kumasi. Connecting you with loved ones in spirit, revealing hidden truths, and bringing closure and peace.',        status:'online',    color:'#6d28d9', tags:['Medium','Psychic','Grief'],            price:'3.60', credit:'',              rating:4.90, reviews:2700, type:'psychic',      rank:'Top 3%' },
    { name:'Divine Obinna',         handle:'@DivineObinna',        bio:'Nigerian-born prophet and seer with global clientele. Business prophecy, relationship clarity, and spiritual protection.',               status:'live',      color:'#7e22ce', tags:['Psychic','Career','Spiritual'],        price:'4.20', credit:'',              rating:4.95, reviews:5900, type:'psychic',      rank:'Top 1%' },
    { name:'Funke Insight',         handle:'@FunkeInsight',        bio:'Relationship and intimacy coach for African women. Breaking cycles, healing attachment wounds, and building love that lasts.',            status:'available', color:'#dc2626', tags:['Relationship','Coach','Healing'],      price:'3.10', credit:'$3 on 1st chat', rating:4.86, reviews:1380, type:'relationship', rank:'Top 5%' },
    { name:'Amara Light',           handle:'@AmaraLight',          bio:'Energy reader and empath. I feel what you feel and help you understand what your body and soul are trying to tell you.',                  status:'online',    color:'#0f766e', tags:['Psychic','Healing','Empath'],          price:'2.30', credit:'',              rating:4.84, reviews:980,  type:'psychic',      rank:'Top 8%' },
    { name:'Sister Golda',          handle:'@SisterGolda',         bio:'Intercessor and spiritual advisor. Helping people break generational curses, receive divine direction, and walk in purpose.',            status:'live',      color:'#b45309', tags:['Spiritual','Prayer','Growth'],         price:'2.80', credit:'',              rating:4.91, reviews:3300, type:'psychic',      rank:'Top 3% Most Active' },
    { name:'Obi the Guide',         handle:'@ObiTheGuide',         bio:'Grounded life coach and mentor from Abuja. Practical wisdom, emotional intelligence, and accountability for African professionals.',      status:'available', color:'#1e3a5f', tags:['Coach','Career','Mindset'],            price:'3.50', credit:'',              rating:4.88, reviews:760,  type:'coach',        rank:'' },
    { name:'Adaora Stars',          handle:'@AdaoraStars',         bio:'Astrology-based career and life coach. I use your natal chart to decode your purpose, timing, and the cycles shaping your future.',      status:'online',    color:'#4f46e5', tags:['Astrology','Career','Coach'],          price:'3.20', credit:'$3 on 1st chat', rating:4.87, reviews:1240, type:'astrology',    rank:'Top 6%' },
    { name:'Pure Seer Amara',       handle:'@PureSeerAmara',       bio:'Gifted clairvoyant from Kampala. Spirit-led readings on love, finances, and hidden enemies. Truth without fear or flattery.',            status:'live',      color:'#7c3aed', tags:['Psychic','Love','Finance'],            price:'2.60', credit:'',              rating:4.89, reviews:2100, type:'psychic',      rank:'Top 4%' },
    { name:'Grace Okafor',          handle:'@GraceOkafor',         bio:'Supportive listener and emotional wellness guide. Helping you process grief, anxiety, and life transitions with grace and dignity.',      status:'available', color:'#db2777', tags:['Support','Chat','Wellness'],           price:'1.90', credit:'',              rating:4.82, reviews:870,  type:'companion',    rank:'Top 9% Most Active' },
    { name:'Kwame Fire',            handle:'@KwameFire',           bio:'Business coach and entrepreneur from Accra. Start, grow, or pivot — I give real strategy without sugarcoating the hard truths.',        status:'online',    color:'#065f46', tags:['Coach','Business','Career'],           price:'4.80', credit:'',              rating:4.92, reviews:540,  type:'coach',        rank:'' },
    { name:'Mama Efua',             handle:'@MamaEfua',            bio:'Traditional spiritual mother and advisor. Combining herbal knowledge, prayer, and energy work for healing and breakthrough.',             status:'live',      color:'#78350f', tags:['Spiritual','Healing','Prayer'],        price:'3.70', credit:'$4 on 1st chat', rating:4.94, reviews:4600, type:'psychic',      rank:'Top 1% Answer Rate' },
    { name:'Temi Speaks',           handle:'@TemiSpeaks',          bio:'Motivational life coach and speaker from Lagos. Building confidence, breaking fear, and pushing you toward your highest version.',       status:'available', color:'#9333ea', tags:['Coach','Motivation','Growth'],         price:'2.70', credit:'',              rating:4.85, reviews:1020, type:'coach',        rank:'Top 7%' },
    { name:'Seer Abioye',           handle:'@SeerAbioye',          bio:'Prophetic minister and spiritual counselor. Accurate visions on marriage, children, business opportunities, and divine timing.',         status:'online',    color:'#0e7490', tags:['Psychic','Spiritual','Family'],        price:'3.00', credit:'',              rating:4.90, reviews:3500, type:'psychic',      rank:'Top 3%' },
    { name:'Nadia Bliss',           handle:'@NadiaBliss',          bio:'Your online bestie for vent sessions, love advice, and daily motivation. Warm, fun, real — exactly what you need right now.',           status:'live',      color:'#ec4899', tags:['Companion','Chat','Support'],          price:'1.40', credit:'$2 on 1st chat', rating:4.80, reviews:2600, type:'companion',    rank:'Top 4% Most Active' },
    { name:'Esther Prophetic',      handle:'@EstherProphetic',     bio:'Prophetic gift active since childhood. Seeing into seasons of love, career shifts, and family dynamics with divine clarity.',            status:'available', color:'#7c3aed', tags:['Psychic','Love','Career'],             price:'3.20', credit:'',              rating:4.91, reviews:4200, type:'psychic',      rank:'Top 2%' },
    { name:'Coach Olu',             handle:'@CoachOlu',            bio:'Executive coach and leadership trainer from Ibadan. Helping leaders communicate better, lead stronger, and build lasting legacy.',       status:'online',    color:'#1e40af', tags:['Coach','Executive','Career'],          price:'5.00', credit:'',              rating:4.94, reviews:430,  type:'coach',        rank:'' },
    { name:'Stella Oracle',         handle:'@StellaOracle',        bio:'Oracle card reader and light worker. Clear, direct messages from the universe on love, purpose, and the path ahead.',                   status:'live',      color:'#be185d', tags:['Psychic','Love','Spiritual'],          price:'2.50', credit:'',              rating:4.87, reviews:1890, type:'psychic',      rank:'Top 5% Most Active' },
    { name:'Abby Companion',        handle:'@AbbyCompanion',       bio:'Friendly, warm, and here to listen. Whether you\'re lonely, overwhelmed, or just want a real chat — I\'m here for you.',               status:'available', color:'#db2777', tags:['Companion','Chat','Listening'],        price:'1.60', credit:'',              rating:4.78, reviews:1400, type:'companion',    rank:'Top 6% Most Active' },
    { name:'Madam Celestine',       handle:'@MadamCelestine',      bio:'Cameroonian spiritual advisor with powerful gift of sight. Love clarity, enemy detection, and future revelation with precision.',       status:'online',    color:'#7e22ce', tags:['Psychic','Spiritual','Love'],          price:'3.00', credit:'$3 on 1st chat', rating:4.90, reviews:2950, type:'psychic',      rank:'Top 3%' },
    { name:'Ifeoma Grace',          handle:'@IfeomaGrace',         bio:'A safe, loving space for women healing from heartbreak. Coaching rooted in self-worth, boundaries, and emotional freedom.',             status:'live',      color:'#dc2626', tags:['Coach','Recovery','Love'],             price:'2.40', credit:'',              rating:4.84, reviews:1120, type:'coach',        rank:'Top 7%' },
    { name:'Cosmic Chioma',         handle:'@CosmicChioma',        bio:'Mystic astrologer and numerologist. Decoding your numbers and stars to reveal hidden patterns, best dates, and upcoming fortune.',      status:'available', color:'#4f46e5', tags:['Astrology','Numerology','Love'],       price:'2.80', credit:'',              rating:4.86, reviews:1480, type:'astrology',    rank:'Top 6%' },
    { name:'Seraphina Speaks',      handle:'@SerophinaSpeaks',     bio:'Angel card reader and divine channel. Messages of hope, direction, and love from the angelic realm for those ready to receive.',        status:'online',    color:'#6d28d9', tags:['Psychic','Spiritual','Healing'],       price:'2.90', credit:'$2 on 1st chat', rating:4.89, reviews:2300, type:'psychic',      rank:'Top 4%' },
    { name:'Coach Damilola',        handle:'@CoachDamilola',       bio:'Financial wellness coach helping African families build wealth, clear debt, and create generational financial freedom step by step.',    status:'live',      color:'#065f46', tags:['Coach','Finance','Growth'],            price:'3.60', credit:'',              rating:4.91, reviews:890,  type:'coach',        rank:'Top 4%' },
    { name:'Ife Radiant',           handle:'@IfeRadiant',          bio:'Intuitive healer and spiritual counselor. Working with ancestors, chakras, and prayer to restore peace, love, and direction.',          status:'available', color:'#9333ea', tags:['Healing','Spiritual','Love'],          price:'2.70', credit:'',              rating:4.87, reviews:1780, type:'psychic',      rank:'Top 5%' },
    { name:'Adanna Seer',           handle:'@AdannaSeer',          bio:'Clairvoyant from Anambra with a gift for seeing relationship truths others miss. Are they faithful? Is this your person? I know.',      status:'online',    color:'#7c3aed', tags:['Psychic','Love','Relationship'],       price:'3.10', credit:'$3 on 1st chat', rating:4.92, reviews:3700, type:'psychic',      rank:'Top 2% Most Active' },
    { name:'Lively Lou',            handle:'@LivelyLou',           bio:'Your fun, upbeat chat companion! I love music, travel stories, life advice, and making people feel genuinely seen and heard.',          status:'live',      color:'#d97706', tags:['Companion','Chat','Motivation'],       price:'1.30', credit:'',              rating:4.76, reviews:2100, type:'companion',    rank:'Top 5% Most Active' },
    { name:'Auntie Dupe',           handle:'@AuntieDupe',          bio:'Like your favorite wise auntie — warm, honest, and unfiltered. Relationship advice, life guidance, and real talk from someone who cares.', status:'available', color:'#b45309', tags:['Chat','Love','Coach'],               price:'2.20', credit:'$2 on 1st chat', rating:4.88, reviews:2800, type:'companion',    rank:'Top 3%' },
    { name:'Dr. Amaka',             handle:'@DrAmaka',             bio:'Medical background turned wellness coach. Helping you understand the mind-body connection, reduce burnout, and reclaim your health.',    status:'online',    color:'#1e3a5f', tags:['Wellness','Coach','Psychology'],       price:'5.50', credit:'',              rating:4.95, reviews:390,  type:'coach',        rank:'' },
    { name:'Prophet Dare',          handle:'@ProphetDare',         bio:'End-time prophet and spiritual advisor. Deep visions on relationships, career turning points, and spiritual warfare affecting your life.', status:'live',     color:'#b91c1c', tags:['Psychic','Spiritual','Career'],        price:'3.80', credit:'',              rating:4.93, reviews:4700, type:'psychic',      rank:'Top 1% Most Active' },
    { name:'Omotola Stars',         handle:'@OmotolaStars',        bio:'Vedic astrologer with Nigerian roots. Reading planetary movements to reveal love timing, career windows, and soul mission.',             status:'available', color:'#4f46e5', tags:['Astrology','Vedic','Love'],            price:'3.50', credit:'$4 on 1st chat', rating:4.89, reviews:1650, type:'astrology',    rank:'Top 5%' },
    { name:'Chinyere Calm',         handle:'@ChinyereCalm',        bio:'Mental wellness advocate and empathetic listener. Creating calm in the chaos — grief, anxiety, overthinking, and overwhelm welcome.',    status:'online',    color:'#0f766e', tags:['Support','Chat','Wellness'],           price:'1.80', credit:'',              rating:4.86, reviews:1560, type:'companion',    rank:'Top 6% Most Active' },
    { name:'Osas Vision',           handle:'@OsasVision',          bio:'Prophetic intercessor from Benin City. Specializing in marriage breakthrough, womb healing prayers, and financial deliverance.',        status:'live',      color:'#7e22ce', tags:['Spiritual','Healing','Family'],        price:'2.90', credit:'',              rating:4.90, reviews:3100, type:'psychic',      rank:'Top 3%' },
    { name:'Mentor Bayo',           handle:'@MentorBayo',          bio:'Business mentor and startup advisor from Lagos. Connecting ideas to execution. Real talk for entrepreneurs at every stage.',             status:'available', color:'#1e40af', tags:['Coach','Business','Mentor'],           price:'4.50', credit:'',              rating:4.91, reviews:480,  type:'mentor',       rank:'' },
    { name:'Queen Nkechi',          handle:'@QueenNkechi',         bio:'Bold empowerment coach for women ready to stop shrinking. Confidence, boundaries, and fierce self-love — your era starts now.',         status:'online',    color:'#dc2626', tags:['Coach','Mindset','Growth'],            price:'3.00', credit:'$3 on 1st chat', rating:4.90, reviews:2200, type:'coach',        rank:'Top 4%' },
    { name:'Emeka Truthsayer',      handle:'@EmekaTruthsayer',     bio:'No-filter psychic advisor from Onitsha. I tell you what you need to hear, not what you want to hear. Love, money, enemies.',            status:'live',      color:'#0e7490', tags:['Psychic','Love','Finance'],            price:'3.40', credit:'',              rating:4.88, reviews:3600, type:'psychic',      rank:'Top 3% Most Active' },
    { name:'Adaeze Wellness',       handle:'@AdaezeWellness',      bio:'Holistic wellness coach combining Igbo herbal wisdom and modern nutrition for total body and mind restoration.',                        status:'available', color:'#16a34a', tags:['Wellness','Coach','Healing'],          price:'2.60', credit:'',              rating:4.84, reviews:720,  type:'coach',        rank:'' },
    { name:'Celestial Kemi',        handle:'@CelestialKemi',       bio:'Spiritual seer from Osun State. Dream interpretations, love readings, and prophetic insight into your next 30 to 90 days.',            status:'online',    color:'#9333ea', tags:['Psychic','Dreams','Love'],             price:'2.80', credit:'$3 on 1st chat', rating:4.87, reviews:1980, type:'psychic',      rank:'Top 5%' },
    { name:'Ngozi Speaks',          handle:'@NgozíSpeaks',         bio:'Life strategist and empowerment coach. Helping Nigerian women in diaspora navigate identity, ambition, and belonging with strength.',   status:'live',      color:'#7c3aed', tags:['Coach','Growth','Mindset'],            price:'3.20', credit:'',              rating:4.89, reviews:1340, type:'coach',        rank:'Top 6%' },
    { name:'Divine Ekene',          handle:'@DivineEkene',         bio:'Prophetic voice and spiritual counselor. Deeply accurate readings that expose hidden spiritual battles and reveal divine assignments.',  status:'available', color:'#b91c1c', tags:['Psychic','Spiritual','Career'],        price:'4.00', credit:'',              rating:4.94, reviews:5100, type:'psychic',      rank:'Top 1%' },
    { name:'Ify Companion',         handle:'@IfyCompanion',        bio:'Your everyday companion for heart-to-heart chats. Warm, non-judgmental, and always ready to listen. You matter here.',                 status:'online',    color:'#db2777', tags:['Companion','Chat','Support'],          price:'1.50', credit:'',              rating:4.81, reviews:1800, type:'companion',    rank:'Top 7% Most Active' },
    { name:'Mama Bisi',             handle:'@MamaBisi',            bio:'Yoruba spiritual mother and traditional advisor. Combining Ifa wisdom and heartfelt prayer for love, children, and abundance.',         status:'live',      color:'#78350f', tags:['Spiritual','Love','Healing'],          price:'3.60', credit:'$4 on 1st chat', rating:4.93, reviews:4300, type:'psychic',      rank:'Top 2%' },
    { name:'Coach Amara',           handle:'@CoachAmara',          bio:'Certified life and relationship coach. Combining CBT tools with heart-centered coaching for real, lasting emotional transformation.',    status:'available', color:'#0369a1', tags:['Coach','Relationship','Mindset'],      price:'3.30', credit:'',              rating:4.88, reviews:1060, type:'coach',        rank:'Top 5%' },
    { name:'Seer Tosin',            handle:'@SeerTosin',           bio:'Anointed seer from Ibadan. Accurate prophetic readings on love timelines, career moves, pregnancy, and spiritual battles.',             status:'online',    color:'#7e22ce', tags:['Psychic','Love','Family'],             price:'2.90', credit:'',              rating:4.90, reviews:3900, type:'psychic',      rank:'Top 2% Most Active' },
    { name:'Abigail Peace',         handle:'@AbigailPeace',        bio:'Calming presence for those in emotional turmoil. Let\'s work through fear, grief, confusion, and self-doubt — one step at a time.',   status:'live',      color:'#065f46', tags:['Support','Chat','Healing'],            price:'1.70', credit:'$2 on 1st chat', rating:4.83, reviews:1380, type:'companion',    rank:'Top 8%' },
    { name:'Ruqayyah Sees',         handle:'@RuqayyahSees',        bio:'Muslim spiritual advisor blending Islamic wisdom and intuitive reading. Istikhara guidance, marriage decisions, and life direction.',   status:'available', color:'#0f766e', tags:['Spiritual','Love','Family'],           price:'2.80', credit:'',              rating:4.88, reviews:2100, type:'psychic',      rank:'Top 4%' },
    { name:'Auntie Yetunde',        handle:'@AuntieYetunde',       bio:'Like talking to your wisest relative. Love, family, money, life choices — all welcome here. Real wisdom from lived experience.',       status:'online',    color:'#b45309', tags:['Chat','Coach','Love'],                 price:'2.10', credit:'',              rating:4.87, reviews:2500, type:'companion',    rank:'Top 4% Most Active' },
    { name:'Prophetess Kezia',      handle:'@ProphetessKezia',     bio:'Called since birth. Supernatural accuracy in love, pregnancy, court cases, and spiritual warfare. Tested. Trusted. God-sent.',         status:'live',      color:'#9333ea', tags:['Psychic','Spiritual','Family'],        price:'4.50', credit:'',              rating:4.95, reviews:6100, type:'psychic',      rank:'Top 1% Answer Rate' },
    { name:'Emeka Calm',            handle:'@EmekCalm',            bio:'Mental wellness guide for men. A safe, masculine space to process stress, relationship pain, and life pressure — no judgment.',         status:'available', color:'#1e40af', tags:['Support','Wellness','Chat'],           price:'2.00', credit:'',              rating:4.82, reviews:890,  type:'companion',    rank:'Top 8%' },
    { name:'Blessing Oracle',       handle:'@BlessingOracle',      bio:'Oracle reader and prayer warrior from Cross River State. Known for accuracy in love, marriage timing, and financial direction.',       status:'online',    color:'#7c3aed', tags:['Psychic','Love','Finance'],            price:'3.20', credit:'$3 on 1st chat', rating:4.91, reviews:3300, type:'psychic',      rank:'Top 3%' },
    { name:'Amina Guidance',        handle:'@AminaGuidance',       bio:'Life coach and Islamic counselor. Helping Muslim women navigate identity, marriage, divorce, and purpose with faith and clarity.',      status:'live',      color:'#065f46', tags:['Coach','Faith','Love'],                price:'2.80', credit:'',              rating:4.86, reviews:1180, type:'coach',        rank:'Top 7%' },
    { name:'Crystal Nonso',         handle:'@CrystalNonso',        bio:'Crystal healer and vibrational therapist. Distance healing, stone prescriptions, and energy realignment for clarity and peace.',       status:'available', color:'#7e22ce', tags:['Healing','Crystal','Wellness'],        price:'2.50', credit:'',              rating:4.83, reviews:670,  type:'psychic',      rank:'' },
    { name:'Wura Gold',             handle:'@WuraGold',            bio:'Manifestation coach and law of attraction expert from Abuja. Helping you reprogram your subconscious for love, wealth, and joy.',      status:'online',    color:'#d97706', tags:['Coach','Mindset','Finance'],           price:'3.00', credit:'$3 on 1st chat', rating:4.89, reviews:1690, type:'coach',        rank:'Top 5%' },
    { name:'Nne Spiritual',         handle:'@NneSpiritual',        bio:'Igbo ancestral reader and spiritual counselor. Connecting with your lineage to heal family patterns and unlock blocked blessings.',     status:'live',      color:'#b91c1c', tags:['Spiritual','Healing','Family'],        price:'3.50', credit:'',              rating:4.92, reviews:4000, type:'psychic',      rank:'Top 2% Most Active' },
    { name:'Adaeze Luminary',       handle:'@AdaezeLuminary',      bio:'Intuitive guide and creative coach. Helping artists, dreamers, and seekers align with their soul purpose and monetize their gifts.',    status:'available', color:'#9333ea', tags:['Coach','Growth','Mindset'],            price:'2.90', credit:'',              rating:4.85, reviews:920,  type:'coach',        rank:'Top 9%' },
  ];

  /* ── STATE ───────────────────────────────────────────── */
  let currentStatus = 'all';
  let currentType   = 'all';
  let currentSearch = '';
  let currentSort   = 'recent';
  let currentCat    = 'all';
  let drawerOpen    = false;
  let modalOpen     = false;
  let searchTimer   = null;

  /* Scroll-lock stack so drawer + modal don't fight */
  let scrollLocks = 0;
  function lockScroll()   { scrollLocks++; if (scrollLocks === 1) document.body.style.overflow = 'hidden'; }
  function unlockScroll() { scrollLocks = Math.max(0, scrollLocks - 1); if (scrollLocks === 0) document.body.style.overflow = ''; }

  /* ── HELPERS ─────────────────────────────────────────── */
  function esc(str) {
    return String(str)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;')
      .replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
  }
  function getInitials(n) {
    return n.split(' ').slice(0,2).map(w => w[0]).join('').toUpperCase();
  }
  function statusHTML(s) {
    if (s === 'live')      return '<span class="live-badge"><span class="live-dot" aria-hidden="true"></span>LIVE</span>';
    if (s === 'online')    return '<span class="status-label online">● Online</span>';
    if (s === 'available') return '<span class="status-label available">● Available</span>';
    return '<span class="status-label offline">Offline</span>';
  }

  /* ── LIVE STATS ──────────────────────────────────────── */
  /* Inflated starting values for strong social proof */
  let statSessions = 18247;
  let statMembers  = 184320;
  let statRating   = 4.9;
  let heroCount    = 12547;

  function liveCount() {
    /* Always show an impressively high number */
    return Math.floor(statSessions / 45);
  }

  function animateStat(el, newVal, isDecimal) {
    if (!el) return;
    el.classList.add('bump');
    el.textContent = isDecimal ? newVal.toFixed(1) : newVal.toLocaleString();
    setTimeout(() => el.classList.remove('bump'), 220);
  }

  function refreshStats() {
    animateStat(document.getElementById('stat-sessions'), statSessions, false);
    animateStat(document.getElementById('stat-members'),  statMembers,  false);
    animateStat(document.getElementById('stat-rating'),   statRating,   true);
    animateStat(document.getElementById('stat-advisors'), liveCount(),  false);
  }

  /* Pulse hero count — always climbs, never drops */
  function pulseHeroCount() {
    const el = document.getElementById('hero-count');
    if (!el) return;
    heroCount = Math.max(12000, heroCount + Math.floor(Math.random() * 15) + 2);
    el.textContent = heroCount.toLocaleString() + '+';
  }

  /* Growth simulation — stats tick up fast and impressively */
  setInterval(function () {
    if (document.hidden) return;
    statSessions += Math.floor(Math.random() * 12) + 3;
    statMembers  += Math.floor(Math.random() * 8) + 2;
    statRating    = Math.min(5.0, Math.max(4.8, statRating + (Math.random() * 0.02 - 0.01)));
    pulseHeroCount();

    /* Occasionally flip an advisor's status to simulate live activity */
    if (Math.random() < 0.18) {
      const flip = {
        online:    ['online','online','available'],
        available: ['available','online'],
        live:      ['live','live','online'],
        offline:   ['offline','available'],
      };
      const idx  = Math.floor(Math.random() * advisors.length);
      const opts = flip[advisors[idx].status] || ['online'];
      advisors[idx].status = opts[Math.floor(Math.random() * opts.length)];
      renderCards();
      updateCounts();
    } else {
      refreshStats();
    }
  }, 5000);

  /* Boot */
  refreshStats();
  pulseHeroCount();

  /* ── PROFILE ROTATION (50 of 150 shown, swaps every 5s) ─ */
  const DISPLAY_COUNT = 50;
  let rotationPool    = [];

  function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function nextBatch() {
    /* Refill queue when we don't have enough left — prevents exact repeat runs */
    if (rotationPool.length < DISPLAY_COUNT) {
      rotationPool = rotationPool.concat(shuffleArray(advisors));
    }
    return rotationPool.splice(0, DISPLAY_COUNT);
  }

  /* Visible slice — renderCards uses this instead of the full array */
  let visibleAdvisors = nextBatch();

  /* Rotate every 5 seconds — seamless batch swap */
  setInterval(function () {
    if (document.hidden) return;
    visibleAdvisors = nextBatch();
    renderCards();
  }, 5000);

  /* ── LIVE TICKER ─────────────────────────────────────── */
  const TICKER_ITEMS = [
    '🟢 12,500+ people available right now',
    '💬 Funza wazungu kiswahili',
    '⭐ 4.9★ average rating',
    '🌍 Members from 140+ countries online',
    '💸 Payouts processed daily',
    '🚀 Daily M-Pesa/MTN Money/Airtel Money Payouts',
    '🔴 LIVE sessions happening now',
    '🏆 Top advisors earning $200–$350/month',
    '✅ 520,000+ verified members worldwide',
    '📱 Chat on any device, anywhere',
    '🎁 New members get first-chat credits',
    '🔒 All conversations encrypted end-to-end',
    '💰 No Monthly Subscriptions',
    '⚡ Average response time under 60 seconds',
  ];

  (function buildTicker() {
    const scroll = document.getElementById('tickerScroll');
    if (!scroll) return;
    /* Double the items so the animation loops seamlessly */
    const all = [...TICKER_ITEMS, ...TICKER_ITEMS];
    all.forEach(text => {
      const span = document.createElement('span');
      span.className = 'ticker-item';
      span.innerHTML = '<span class="ticker-dot" aria-hidden="true"></span>' + esc(text);
      scroll.appendChild(span);
    });
  }());

  /* ── RENDER CARDS ────────────────────────────────────── */
  function renderCards() {
    let data = visibleAdvisors.filter(a => {
      const mS = currentStatus === 'all' || a.status === currentStatus;
      const mT = currentType   === 'all' || a.type   === currentType;
      const mC = currentCat    === 'all' || a.tags.some(t => t.toLowerCase() === currentCat.toLowerCase());
      const mQ = !currentSearch
        || a.name.toLowerCase().includes(currentSearch)
        || a.bio.toLowerCase().includes(currentSearch)
        || a.tags.some(t => t.toLowerCase().includes(currentSearch));
      return mS && mT && mC && mQ;
    });

    const statusOrder = { live:0, online:1, available:2, offline:3 };
    if      (currentSort === 'rating')     data.sort((a,b) => b.rating - a.rating);
    else if (currentSort === 'price-low')  data.sort((a,b) => parseFloat(a.price) - parseFloat(b.price));
    else if (currentSort === 'price-high') data.sort((a,b) => parseFloat(b.price) - parseFloat(a.price));
    else data.sort((a,b) => (statusOrder[a.status] ?? 3) - (statusOrder[b.status] ?? 3));

    

    const grid = document.getElementById('advisor-grid');
    const frag = document.createDocumentFragment();

    data.forEach(a => {
      const div = document.createElement('div');
      div.className = 'card';
      div.setAttribute('role','button');
      div.setAttribute('tabindex','0');
      div.setAttribute('aria-label','View profile for ' + a.name);
      div.dataset.advisorIdx = advisors.indexOf(a);

      div.innerHTML =
        '<div class="card-header">' +
          '<div class="avatar-wrap">' +
            '<div class="avatar" style="background:' + esc(a.color) + '" aria-hidden="true">' + esc(getInitials(a.name)) + '</div>' +
            '<span class="status-dot ' + esc(a.status) + '" aria-hidden="true"></span>' +
          '</div>' +
          '<div class="card-info">' +
            (a.rank ? '<span class="badge-rank">' + esc(a.rank) + '</span>' : '<span class="badge-rank-empty" aria-hidden="true"></span>') +
            '<span class="card-name">'   + esc(a.name)   + '</span>' +
            '<span class="card-handle">' + esc(a.handle) + '</span>' +
            '<div class="card-status-row" aria-label="Status: ' + esc(a.status) + '">' + statusHTML(a.status) + '</div>' +
          '</div>' +
        '</div>' +
        (a.credit ? '<div class="credit-banner">🎁 ' + esc(a.credit) + '</div>' : '') +
        '<div class="card-body">' +
          '<p class="card-bio">' + esc(a.bio) + '</p>' +
          '<div class="card-tags">' + a.tags.map(t => '<span class="tag">' + esc(t) + '</span>').join('') + '</div>' +
        '</div>' +
        '<div class="card-footer">' +
          '<div>' +
            '<div class="card-price"><strong>$' + esc(a.price) + '</strong>/min</div>' +
            '<div class="card-rating"><span class="star" aria-hidden="true">★</span><span class="sr-only">Rating</span> ' + esc(String(a.rating)) + ' (' + a.reviews.toLocaleString() + ')</div>' +
          '</div>' +
          '<button class="card-cta" aria-label="Chat with ' + esc(a.name) + '">Chat</button>' +
        '</div>';

      frag.appendChild(div);
    });

    grid.innerHTML = '';
    grid.appendChild(frag);
    updateCounts();
  }

  /* Delegated click & keyboard on grid */
  document.getElementById('advisor-grid').addEventListener('click', function (e) {
    const card = e.target.closest('.card');
    if (!card) return;
    const idx = parseInt(card.dataset.advisorIdx, 10);
    if (!isNaN(idx)) showModal(advisors[idx]);
  });
  document.getElementById('advisor-grid').addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const card = e.target.closest('.card');
    if (!card) return;
    e.preventDefault();
    const idx = parseInt(card.dataset.advisorIdx, 10);
    if (!isNaN(idx)) showModal(advisors[idx]);
  });

  /* ── STATUS COUNTS ───────────────────────────────────── */
  function updateCounts() {
    /* Always count against the full 150-advisor pool for impressive numbers */
    const c = { all: advisors.length, live:0, online:0, available:0, offline:0 };
    advisors.forEach(a => { c[a.status] = (c[a.status] || 0) + 1; });
    ['all','live','online','available','offline'].forEach(k => {
      document.querySelectorAll('.count-' + k).forEach(el => { el.textContent = c[k]; });
    });
    const sa = document.getElementById('stat-advisors');
    if (sa) sa.textContent = liveCount().toLocaleString();
  }

  /* ── FILTER DEFINITIONS ──────────────────────────────── */
  const statusDefs = [
    { val:'all',       label:'All advisors', dot:'' },
    { val:'live',      label:'Live now',     dot:'<span class="filter-dot red" aria-hidden="true"></span>' },
    { val:'online',    label:'Online',       dot:'<span class="filter-dot" aria-hidden="true"></span>' },
    { val:'available', label:'Available',    dot:'<span class="filter-dot blue" aria-hidden="true"></span>' },
    { val:'offline',   label:'Offline',      dot:'<span class="filter-dot offline" aria-hidden="true"></span>' },
  ];
  const typeDefs = [
    { val:'all',          label:'All' },
    { val:'psychic',      label:'Psychic' },
    { val:'coach',        label:'Life coach' },
    { val:'relationship', label:'Relationship' },
    { val:'tarot',        label:'Tarot' },
    { val:'astrology',    label:'Astrology' },
    { val:'companion',    label:'Companion' },
  ];
  const categories = [...new Set(advisors.flatMap(a => a.tags))].sort();

  /* ── BUILD FILTER UI ─────────────────────────────────── */
  function buildStatusFilters(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = statusDefs.map((s,i) =>
      '<button class="filter-option' + (i === 0 ? ' active' : '') + '" ' +
        'data-status="' + s.val + '" data-container="' + id + '">' +
        s.dot + '<span>' + s.label + '</span>' +
        '<span class="filter-count count-' + s.val + '">0</span>' +
      '</button>'
    ).join('');
  }
  function buildCatFilters(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML =
      '<button class="filter-option active" data-cat="all" data-container="' + id + '">All categories</button>' +
      categories.map(c =>
        '<button class="filter-option" data-cat="' + esc(c) + '" data-container="' + id + '">' + esc(c) + '</button>'
      ).join('');
  }

  buildStatusFilters('sidebar-status-filters');
  buildCatFilters('sidebar-cat-filters');
  buildStatusFilters('drawer-status-filters');
  buildCatFilters('drawer-cat-filters');

  /* ── TYPE CHIPS ──────────────────────────────────────── */
  const typeChipsEl = document.getElementById('type-chips');
  if (typeChipsEl) {
    typeChipsEl.innerHTML = typeDefs.map((t,i) =>
      '<button class="chip' + (i === 0 ? ' active' : '') + '" data-type="' + t.val + '">' + t.label + '</button>'
    ).join('');
    typeChipsEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.chip');
      if (!btn) return;
      currentType = btn.dataset.type;
      typeChipsEl.querySelectorAll('.chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCards();
    });
  }

  /* ── MOBILE CHIP BAR ─────────────────────────────────── */
  const mobileBar = document.getElementById('mobile-filter-bar');
  if (mobileBar) {
    mobileBar.addEventListener('click', function (e) {
      const btn = e.target.closest('.chip');
      if (!btn) return;
      currentStatus = btn.dataset.mstatus;
      mobileBar.querySelectorAll('.chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      syncStatusUI(currentStatus);
      renderCards();
    });
  }

  /* ── STATUS FILTER HANDLER ───────────────────────────── */
  function onStatusFilterClick(e) {
    const btn = e.target.closest('[data-status]');
    if (!btn) return;
    currentStatus = btn.dataset.status;
    ['sidebar-status-filters','drawer-status-filters'].forEach(id => {
      document.querySelectorAll('#' + id + ' .filter-option').forEach(b => {
        b.classList.toggle('active', b.dataset.status === currentStatus);
      });
    });
    if (mobileBar) {
      mobileBar.querySelectorAll('.chip').forEach(b => {
        b.classList.toggle('active', b.dataset.mstatus === currentStatus);
      });
    }
    renderCards();
    if (drawerOpen) closeDrawer();
  }
  function syncStatusUI(val) {
    ['sidebar-status-filters','drawer-status-filters'].forEach(id => {
      document.querySelectorAll('#' + id + ' .filter-option').forEach(b => {
        b.classList.toggle('active', b.dataset.status === val);
      });
    });
  }

  /* ── CAT FILTER HANDLER ──────────────────────────────── */
  function onCatFilterClick(e) {
    const btn = e.target.closest('[data-cat]');
    if (!btn) return;
    currentCat = btn.dataset.cat;
    ['sidebar-cat-filters','drawer-cat-filters'].forEach(id => {
      document.querySelectorAll('#' + id + ' .filter-option').forEach(b => {
        b.classList.toggle('active', b.dataset.cat === currentCat);
      });
    });
    renderCards();
    if (drawerOpen) closeDrawer();
  }

  ['sidebar-status-filters','drawer-status-filters'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', onStatusFilterClick);
  });
  ['sidebar-cat-filters','drawer-cat-filters'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', onCatFilterClick);
  });

  /* ── SORT ────────────────────────────────────────────── */
  const sortSel = document.getElementById('sort-select');
  if (sortSel) sortSel.addEventListener('change', function () { currentSort = this.value; renderCards(); });

  /* ── SEARCH ──────────────────────────────────────────── */
  const searchInput = document.getElementById('search-input');
  const searchBtn   = document.getElementById('search-btn');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      clearTimeout(searchTimer);
      const val = this.value;
      searchTimer = setTimeout(function () {
        currentSearch = val.toLowerCase().trim();
        renderCards();
      }, 200);
    });
  }
  if (searchBtn) {
    searchBtn.addEventListener('click', function () {
      clearTimeout(searchTimer);
      currentSearch = (searchInput ? searchInput.value : '').toLowerCase().trim();
      renderCards();
    });
  }

  /* ── DRAWER ──────────────────────────────────────────── */
  function openDrawer() {
    drawerOpen = true;
    const ham = document.getElementById('hamburger');
    const dr  = document.getElementById('mobile-drawer');
    if (ham) { ham.classList.add('open'); ham.setAttribute('aria-expanded','true'); }
    if (dr)  dr.classList.add('open');
    lockScroll();
  }
  function closeDrawer() {
    drawerOpen = false;
    const ham = document.getElementById('hamburger');
    const dr  = document.getElementById('mobile-drawer');
    if (ham) { ham.classList.remove('open'); ham.setAttribute('aria-expanded','false'); }
    if (dr)  dr.classList.remove('open');
    unlockScroll();
  }
  const hamburger = document.getElementById('hamburger');
  if (hamburger) hamburger.addEventListener('click', function () { drawerOpen ? closeDrawer() : openDrawer(); });
  const drawer = document.getElementById('mobile-drawer');
  if (drawer) {
    drawer.addEventListener('click', function (e) { if (e.target === this) closeDrawer(); });
    const drawerNav = drawer.querySelector('.drawer-nav-links');
    if (drawerNav) drawerNav.addEventListener('click', closeDrawer);
  }

  /* ── MODAL ───────────────────────────────────────────── */
  function showModal(a) {
    const av = document.getElementById('modal-avatar');
    if (av) { av.textContent = getInitials(a.name); av.style.background = a.color; }
    const mn = document.getElementById('modal-name');    if (mn) mn.textContent  = a.name;
    const mh = document.getElementById('modal-handle');  if (mh) mh.textContent  = a.handle;
    const me = document.getElementById('modal-expert-name'); if (me) me.textContent = a.name;

    const pill = document.getElementById('modal-status-pill');
    if (pill) {
      if (a.status === 'live') {
        const dot = document.createElement('span');
        dot.className = 'live-dot';
        dot.style.cssText = 'width:6px;height:6px;border-radius:50%;background:#dc2626;display:inline-block;animation:pulse 1.4s infinite;margin-right:4px;';
        dot.setAttribute('aria-hidden','true');
        pill.innerHTML = '';
        pill.appendChild(dot);
        pill.appendChild(document.createTextNode('Live now'));
      } else if (a.status === 'online')    { pill.textContent = '● Online'; }
      else if (a.status === 'available')   { pill.textContent = '● Available'; }
      else                                 { pill.textContent = 'Offline'; }
      pill.className = 'modal-status-pill ' + a.status;
    }

    const overlay = document.getElementById('modal-overlay');
    if (overlay) overlay.classList.add('open');
    modalOpen = true;
    lockScroll();
    const closeBtn = document.getElementById('modal-close');
    if (closeBtn) closeBtn.focus();
  }
  function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    if (overlay) overlay.classList.remove('open');
    if (modalOpen) { modalOpen = false; unlockScroll(); }
  }

  const modalOverlay = document.getElementById('modal-overlay');
  if (modalOverlay) modalOverlay.addEventListener('click', function (e) { if (e.target === this) closeModal(); });
  const modalClose = document.getElementById('modal-close');
  if (modalClose) modalClose.addEventListener('click', closeModal);
  const laterBtn = document.getElementById('modal-later-btn');
  if (laterBtn) laterBtn.addEventListener('click', closeModal);

  /* Escape key */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (modalOpen)       closeModal();
    else if (drawerOpen) closeDrawer();
  });

  /* ── AUTH ────────────────────────────────────────────── */
  function goRegister() { closeModal(); window.location.href = REG; }

  const regBtn = document.getElementById('modal-register-btn');
  if (regBtn) regBtn.addEventListener('click', goRegister);

  /* ── CLIENTS ONLINE ─────────────────────────────── */
  const spNames = advisors.map(function (a) {
    return a.name.split(/[—\-–]/)[0].trim().split(' ')[0];
  });
  const spActs = [
    { i:'fa-circle-check', t:'is online' },
    { i:'fa-sparkles',     t:'is active' },
    { i:'fa-user-clock',   t:'is available' },
    { i:'fa-tower-broadcast', t:'is live' },
  ];
  let spBusy = false, lastSPMsg = '';

  function showSP() {
    const spW = document.getElementById('spWrap');
    if (!spW || spBusy || document.hidden) return;
    spBusy = true;
    let msg;
    do {
      const n = spNames[Math.floor(Math.random() * spNames.length)];
      const a = spActs[Math.floor(Math.random() * spActs.length)];
      msg = '<i class="fas ' + a.i + '" aria-hidden="true"></i><span><strong>' + n + '</strong> ' + a.t + '</span>';
    } while (msg === lastSPMsg);
    lastSPMsg = msg;
    const el = document.createElement('div');
    el.className = 'sp-item';
    el.innerHTML = msg;
    spW.appendChild(el);
    const delay = Math.floor(Math.random() * 3000) + 5000;
    setTimeout(function () {
      el.style.transition = 'opacity .4s ease, transform .4s ease';
      el.style.opacity    = '0';
      el.style.transform  = 'translateX(-20px)';
      setTimeout(function () { el.remove(); spBusy = false; }, 420);
    }, delay);
  }
  function loopSP() {
    showSP();
    setTimeout(loopSP, Math.floor(Math.random() * 7000) + 8000);
  }
  setTimeout(loopSP, 6000);

  renderCards();

}()); 