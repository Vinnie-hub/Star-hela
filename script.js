(function () {
        "use strict";
        const REG = "https://Starhela.com/register.php?ref=sydney";
        const $ = (id) => document.getElementById(id);
        const fmt = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        function shuffle(a) {
          const b = [...a];
          for (let i = b.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [b[i], b[j]] = [b[j], b[i]];
          }
          return b;
        }

        /* ── live activity bar ── */
        const LAB = [
          "15,000+ Verified Earners",
          "$890K+ Paid Out",
          "One-Time Fee Only",
          "5 Ways to Earn",
          "$2–$8 Per Hour",
          "UK · USA · Canada · Qatar",
          "Daily M-Pesa/MTN Money/Airtel Money Payouts",
          "4.6&#x2605; Rating",
          "Funza wazungu kiswahili",
          "Real-Time Withdrawals",
          "No Monthly Subscriptions",
          "Piga Gumzo kwa Kiswahili",
          "Tafsiri Otomatiki kwa Wateja",
          "8,400+ Active Earners",
        ];
        const feed = $("labFeed");
        if (feed) {
          [...LAB, ...LAB].forEach((ev) => {
            const s = document.createElement("span");
            s.className = "lab-item";
            s.innerHTML = `<i class="fas fa-check-circle"></i>${ev}`;
            feed.appendChild(s);
          });
        }
        let labN = 3847;
        setInterval(() => {
          if (!document.hidden) {
            labN = Math.max(800, labN + Math.floor(Math.random() * 12) - 5);
            const e = $("labCount");
            if (e) e.textContent = fmt(labN) + " online";
          }
        }, 2200);

        /* ── nav ── */
        const ham = $("ham"),
          mobNav = $("mobNav");
        function closeMob() {
          if (!ham || !mobNav) return;
          ham.classList.remove("x");
          mobNav.classList.remove("open");
          ham.setAttribute("aria-expanded", "false");
          checkScroll();
        }
        function openMob() {
          if (!ham || !mobNav) return;
          ham.classList.add("x");
          mobNav.classList.add("open");
          ham.setAttribute("aria-expanded", "true");
          document.body.style.overflow = "hidden";
        }
        ham &&
          ham.addEventListener("click", (e) => {
            e.stopPropagation();
            mobNav.classList.contains("open") ? closeMob() : openMob();
          });
        mobNav &&
          mobNav
            .querySelectorAll("a")
            .forEach((a) => a.addEventListener("click", closeMob));
        document.addEventListener("click", (e) => {
          if (
            mobNav &&
            mobNav.classList.contains("open") &&
            !mobNav.contains(e.target) &&
            ham &&
            !ham.contains(e.target)
          )
            closeMob();
        });
        let sTick = false;
        window.addEventListener(
          "scroll",
          () => {
            if (!sTick) {
              requestAnimationFrame(() => {
                $("nav").classList.toggle("solid", window.scrollY > 50);
                sTick = false;
              });
              sTick = true;
            }
          },
          { passive: true },
        );
        document.querySelectorAll('a[href^="#"]').forEach((a) => {
          a.addEventListener("click", (e) => {
            const id = a.getAttribute("href").slice(1),
              el = document.getElementById(id);
            if (el) {
              e.preventDefault();
              closeMob();
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          });
        });

        /* ── body scroll ── */
        function checkScroll() {
          const any = ["offerOv", "pmodOv", "acctOv"].some((id) => {
            const el = $(id);
            return el && el.classList.contains("on");
          });
          if (!any) document.body.style.overflow = "";
        }

        /* ── countries ── */
        const COUNTRIES = [
          {
            name: "Kenya",
            flag: "&#x1F1F0;&#x1F1EA;",
            old: "KSH 650",
            fee: "KSH 550",
            save: "KSH 100",
            disc: "15%",
            urg: "&#x23F3; Offer expires soon!",
          },
          {
            name: "Uganda",
            flag: "&#x1F1FA;&#x1F1EC;",
            old: "UGX 24,500",
            fee: "UGX 19,500",
            save: "UGX 5,000",
            disc: "20%",
            urg: "&#x23F3; Limited spots!",
          },
          {
            name: "Nigeria",
            flag: "&#x1F1F3;&#x1F1EC;",
            old: "&#x20A6;11,000",
            fee: "&#x20A6;9,000",
            save: "&#x20A6;2,000",
            disc: "18%",
            urg: "&#x23F3; Offer ends soon!",
          },
          {
            name: "Tanzania",
            flag: "&#x1F1F9;&#x1F1FF;",
            old: "TZS 14,000",
            fee: "TZS 11,000",
            save: "TZS 3,000",
            disc: "21%",
            urg: "&#x23F3; Grab it now!",
          },
          {
            name: "South Africa",
            flag: "&#x1F1FF;&#x1F1E6;",
            old: "ZAR 100",
            fee: "ZAR 70",
            save: "ZAR 30",
            disc: "30%",
            urg: "&#x23F3; Limited time!",
          },
          {
            name: "Ghana",
            flag: "&#x1F1EC;&#x1F1ED;",
            old: "GH&#x20B5; 120",
            fee: "GH&#x20B5; 95",
            save: "GH&#x20B5; 25",
            disc: "20%",
            urg: "&#x23F3; Limited time!",
          },
          
          {
            name: "Zambia",
            flag: "🇿🇲",
            old: "ZMW 150",
            fee: "ZMW 125",
            save: "ZMW 25",
            disc: "17%",
            urg: "&#x23F3; Limited time!",
          },
          {
          name: "Cameroon",
          flag: "🇨🇲",
          old: "XAF 5,000",
          fee: "XAF 4,500",
          save: "XAF 500",
          disc: "10%",
          urg: "&#x23F3; Limited time!",
        },
          {
            name: "International",
            flag: "&#x1F30D;",
            old: "$12.00",
            fee: "$10.00",
            save: "$2.00",
            disc: "17%",
            urg: "&#x23F3; Limited offer!",
          },
        ];
        let selC = COUNTRIES[0];
        fetch("https://ipapi.co/json/")
          .then((r) => r.json())
          .then((d) => {
            const m = COUNTRIES.find((c) => c.name === d.country_name);
            if (m) selC = m;
          })
          .catch(() => {});

        /* ── offer modal ── */
        const offerOv = $("offerOv");
        function openOffer(c) {
          c = c || COUNTRIES[0];
          $("omFlag").innerHTML = c.flag;
          $("omName").textContent = c.name;
          $("opOld").textContent = c.old;
          $("opNow").innerHTML = c.fee;
          $("omBadge").textContent = c.disc + " OFF — LIMITED TIME";
          $("opSave").innerHTML = "&#x2705; Save " + c.save + " today";
          $("omUrgency").innerHTML = c.urg;
          offerOv.classList.add("on");
          document.body.style.overflow = "hidden";
        }
        function closeOffer() {
          offerOv && offerOv.classList.remove("on");
          checkScroll();
        }
        $("offerClose") &&
          $("offerClose").addEventListener("click", closeOffer);
        offerOv &&
          offerOv.addEventListener("click", (e) => {
            if (e.target === offerOv) closeOffer();
          });
        $("offerCta") &&
          $("offerCta").addEventListener("click", () => {
            closeOffer();
            setTimeout(() => window.open(REG, "_blank", "noopener"), 200);
          });
        setTimeout(() => {
          if (offerOv && !offerOv.classList.contains("on")) openOffer(selC);
        }, 32000);

        /* ── account modal ── */
        window.openAcctModal = function () {
          $("acctOv").classList.add("on");
          document.body.style.overflow = "hidden";
        };
        $("acctClose") &&
          $("acctClose").addEventListener("click", () => {
            $("acctOv").classList.remove("on");
            checkScroll();
          });
        $("acctOv") &&
          $("acctOv").addEventListener("click", (e) => {
            if (e.target === $("acctOv")) {
              $("acctOv").classList.remove("on");
              checkScroll();
            }
          });

        /* ── profile modal ── */
        const pmodOv = $("pmodOv");
        function openPmod(p) {
          const inner = $("pmodInner");
          const stars = "&#x2605;".repeat(Math.random() < 0.28 ? 4 : 5);
          // Tags ONLY appear here in the profile modal
          const tagsHtml = p.tags
            .map((t) => `<span class="pm-tag">${t}</span>`)
            .join("");
          inner.innerHTML = `
    <button class="modal-x" id="pmodX" aria-label="Close"><i class="fas fa-times"></i></button>
    <div class="pm-head">
      <img src="${p.img}" class="pm-av" loading="lazy" alt="${p.name}" width="64" height="64"/>
      <div>
        <div class="pm-name">${p.name}, ${p.age}</div>
        <div class="pm-loc">${p.flag} ${p.loc}</div>
        <div class="pm-rate">$${p.price}<span>/hr</span></div>
      </div>
    </div>
    <div class="pm-body">
      <p class="pm-bio">${p.full}</p>
      <div class="pm-tags">${tagsHtml}</div>
      <div class="pm-note"><i class="fas fa-info-circle"></i><span>Create an account to start chatting with ${p.name}.</span></div>
      <div class="pm-cta">
        <a href="${REG}" target="_blank" rel="noopener" class="pm-reg"><i class="fas fa-user-plus"></i> Create Account</a>
        <button class="pm-acc" data-pid="${p.id}"><i class="fas fa-check"></i> Accept Request</button>
      </div>
    </div>`;
          inner.querySelector("#pmodX").addEventListener("click", closePmod);
          inner.querySelector(".pm-acc").addEventListener("click", function () {
            if (this.disabled) return;
            this.disabled = true;
            this.innerHTML = `<span style="display:inline-flex;align-items:center;gap:.3rem"><span style="width:9px;height:9px;border:2px solid rgba(0,0,0,.15);border-top-color:var(--green2);border-radius:50%;display:inline-block;animation:spin .5s linear infinite"></span> Accepting&hellip;</span>`;
            setTimeout(() => {
              closePmod();
              showNotif(`Register to chat with ${p.name}!`);
              openOffer(selC);
            }, 850);
          });
          pmodOv.classList.add("on");
          document.body.style.overflow = "hidden";
        }
        function closePmod() {
          pmodOv && pmodOv.classList.remove("on");
          checkScroll();
        }
        pmodOv &&
          pmodOv.addEventListener("click", (e) => {
            if (e.target === pmodOv) closePmod();
          });

        /* ── profiles data ── */
        const ALL_PROFILES = [
          {
    id: 1,
    name: "Emily",
    age: 65,
    loc: "London, UK",
    flag: "🇬🇧",
    desc: "Wants to chat with you",
    full: "Hi! I'm Emily. I love love stories, romance novels, and hearing how people met their partners. Let's share sweet stories!",
    price: 4,
    tags: ["Love Stories", "Romance", "Friendly", "Patient"],
    img: "https://plus.unsplash.com/premium_photo-1679439492693-05a8e642381d?w=500&auto=format&fit=crop&q=60",
    badge: "Popular",
    badgeClass: "def",
  },
  {
    id: 2,
    name: "Robert",
    age: 58,
    loc: "New York, USA",
    flag: "🇺🇸",
    desc: "Wants to chat with you",
    full: "Hi! I'm Robert. I enjoy business talks, but I also love hearing about faith and how religion shapes daily life.",
    price: 6,
    tags: ["Faith", "Business", "Mentor", "Respectful"],
    img: "https://plus.unsplash.com/premium_photo-1672297543351-17987c5c9361?q=80&w=385&auto=format&fit=crop",
    badge: "Premium",
    badgeClass: "prem",
  },
  {
    id: 3,
    name: "Linda",
    age: 68,
    loc: "Toronto, Canada",
    flag: "🇨🇦",
    desc: "Wants to chat with you",
    full: "Hi! I'm Linda. I'm looking for companionship and someone to share daily life chats with. Let's be friends!",
    price: 8,
    tags: ["Companionship", "Friendship", "Warm", "Family"],
    img: "https://images.unsplash.com/photo-1615538786254-ad8b50de17dc?q=80&w=387&auto=format&fit=crop",
    badge: "Top",
    badgeClass: "top",
  },
  {
    id: 4,
    name: "Michael",
    age: 54,
    loc: "Manchester, UK",
    flag: "🇬🇧",
    desc: "Wants to chat with you",
    full: "Hi! I'm Michael. I love talking about science, God, and the big questions in life. Let's have deep chats!",
    price: 3,
    tags: ["Science", "Faith", "Philosophy", "Curious"],
    img: "https://i.pravatar.cc/400?img=68",
    badge: "New",
    badgeClass: "def",
  },
  {
    id: 5,
    name: "Susan",
    age: 61,
    loc: "Melbourne, Australia",
    flag: "🇦🇺",
    desc: "Wants to chat with you",
    full: "Hi! I'm Susan. I just want a good friend to share daily life, laugh, and maybe cry together sometimes.",
    price: 5,
    tags: ["Friendship", "Listener", "Warm", "Kind"],
    img: "https://i.pravatar.cc/400?img=49",
    badge: "Verified",
    badgeClass: "def",
  },
  {
    id: 6,
    name: "Ahmed",
    age: 47,
    loc: "Doha, Qatar",
    flag: "🇶🇦",
    desc: "Wants to chat with you",
    full: "Hi! I'm Ahmed. I love hearing about Islamic traditions from different African countries. Let's share our faith!",
    price: 7,
    tags: ["Islam", "Faith", "Culture", "Respectful"],
    img: "https://i.pravatar.cc/400?img=60",
    badge: "Premium",
    badgeClass: "prem",
  },
  {
    id: 7,
    name: "Helena",
    age: 52,
    loc: "Amsterdam, Netherlands",
    flag: "🇳🇱",
    desc: "Wants to chat with you",
    full: "Hi! I'm Helena. I love art, but also romance and sweet love stories. Tell me about your first love!",
    price: 5,
    tags: ["Love Stories", "Art", "Romance", "Creative"],
    img: "https://i.pravatar.cc/400?img=47",
    badge: "Popular",
    badgeClass: "def",
  },
  {
    id: 8,
    name: "Carlos",
    age: 44,
    loc: "Madrid, Spain",
    flag: "🇪🇸",
    desc: "Wants to chat with you",
    full: "Hi! I'm Carlos. I love good food and even better company. Let's chat about life, love, and everything!",
    price: 4,
    tags: ["Friendly", "Life Talks", "Food", "Warm"],
    img: "https://i.pravatar.cc/400?img=64",
    badge: "New",
    badgeClass: "def",
  },
  {
    id: 9,
    name: "Sophia",
    age: 39,
    loc: "Sydney, Australia",
    flag: "🇦🇺",
    desc: "Wants to chat with you",
    full: "Hi! I'm Sophia. I'm a Christian who loves talking about faith, prayer, and how God works in our lives.",
    price: 3,
    tags: ["Christianity", "Faith", "Prayer", "Kind"],
    img: "https://i.pravatar.cc/400?img=41",
    badge: "Verified",
    badgeClass: "def",
  },
  {
    id: 10,
    name: "James",
    age: 53,
    loc: "London, UK",
    flag: "🇬🇧",
    desc: "Wants to chat with you",
    full: "Hi! I'm James. I want a true companion - someone to share thoughts, dreams, and everyday moments with.",
    price: 6,
    tags: ["Companionship", "Friendship", "Loyal", "Mentor"],
    img: "https://i.pravatar.cc/400?img=12",
    badge: "Popular",
    badgeClass: "def",
  },
  {
    id: 11,
    name: "Marie",
    age: 49,
    loc: "Paris, France",
    flag: "🇫🇷",
    desc: "Wants to chat with you",
    full: "Hi! I'm Marie. I love romantic stories, fashion, and learning about love in different cultures.",
    price: 7,
    tags: ["Romance", "Love Stories", "Fashion", "Culture"],
    img: "https://i.pravatar.cc/400?img=45",
    badge: "Premium",
    badgeClass: "prem",
  },
  {
    id: 12,
    name: "George",
    age: 62,
    loc: "Toronto, Canada",
    flag: "🇨🇦",
    desc: "Wants to chat with you",
    full: "Hi! I'm George. I'm a Christian who loves Bible discussions, prayer, and faith-based companionship.",
    price: 4,
    tags: ["Christianity", "Faith", "Prayer", "Gentle"],
    img: "https://i.pravatar.cc/400?img=70",
    badge: "Top",
    badgeClass: "top",
  },
  {
    id: 13,
    name: "Nina",
    age: 36,
    loc: "Berlin, Germany",
    flag: "🇩🇪",
    desc: "Wants to chat with you",
    full: "Hi! I'm Nina. I love stories - love stories, family stories, any stories. Share your life with me!",
    price: 5,
    tags: ["Stories", "Love", "Listener", "Friendly"],
    img: "https://i.pravatar.cc/400?img=39",
    badge: "Verified",
    badgeClass: "def",
  },
  {
    id: 14,
    name: "David",
    age: 55,
    loc: "Boston, USA",
    flag: "🇺🇸",
    desc: "Wants to chat with you",
    full: "Hi! I'm David. I'm interested in all religions - Christianity, Islam, African traditions. Let's learn together!",
    price: 8,
    tags: ["Religion", "Faith", "Respectful", "Academic"],
    img: "https://i.pravatar.cc/400?img=59",
    badge: "Premium",
    badgeClass: "prem",
  },
  {
    id: 15,
    name: "Amelia",
    age: 42,
    loc: "Edinburgh, UK",
    flag: "🇬🇧",
    desc: "Wants to chat with you",
    full: "Hi! I'm Amelia. I want a friend to talk about family, parenting, and the simple joys of life.",
    price: 3,
    tags: ["Family", "Friendship", "Warm", "Kind"],
    img: "https://i.pravatar.cc/400?img=43",
    badge: "New",
    badgeClass: "def",
  },
  {
    id: 16,
    name: "Omar",
    age: 50,
    loc: "Dubai, UAE",
    flag: "🇦🇪",
    desc: "Wants to chat with you",
    full: "Hi! I'm Omar. I want to learn about Muslim life in Africa and share Islamic teachings together.",
    price: 7,
    tags: ["Islam", "Faith", "Brotherhood", "Culture"],
    img: "https://i.pravatar.cc/400?img=62",
    badge: "Popular",
    badgeClass: "def",
  },
  {
    id: 17,
    name: "Grace",
    age: 67,
    loc: "Dublin, Ireland",
    flag: "🇮🇪",
    desc: "Wants to chat with you",
    full: "Hi! I'm Grace. I love companionship - just sitting, talking, and enjoying each other's company.",
    price: 4,
    tags: ["Companionship", "Stories", "Gentle", "Warm"],
    img: "https://i.pravatar.cc/400?img=50",
    badge: "Verified",
    badgeClass: "def",
  },
  {
    id: 18,
    name: "Peter",
    age: 46,
    loc: "Zurich, Switzerland",
    flag: "🇨🇭",
    desc: "Wants to chat with you",
    full: "Hi! I'm Peter. I love adventure stories and hearing about people's journeys through life.",
    price: 6,
    tags: ["Adventure", "Stories", "Travel", "Friendly"],
    img: "https://i.pravatar.cc/400?img=65",
    badge: "Premium",
    badgeClass: "prem",
  },
  {
    id: 19,
    name: "Anna",
    age: 38,
    loc: "Stockholm, Sweden",
    flag: "🇸🇪",
    desc: "Wants to chat with you",
    full: "Hi! I'm Anna. I love nature but also love talking about faith and finding meaning in life.",
    price: 5,
    tags: ["Nature", "Faith", "Philosophy", "Curious"],
    img: "https://i.pravatar.cc/400?img=44",
    badge: "New",
    badgeClass: "def",
  },
  {
    id: 20,
    name: "Marco",
    age: 59,
    loc: "Rome, Italy",
    flag: "🇮🇹",
    desc: "Wants to chat with you",
    full: "Hi! I'm Marco. I'm Catholic and would love to share prayers and talk about faith with you.",
    price: 4,
    tags: ["Catholic", "Faith", "Prayer", "Warm"],
    img: "https://i.pravatar.cc/400?img=67",
    badge: "Popular",
    badgeClass: "def",
  },
  {
    id: 21,
    name: "Lisa",
    age: 45,
    loc: "Vancouver, Canada",
    flag: "🇨🇦",
    desc: "Wants to chat with you",
    full: "Hi! I'm Lisa. I just want someone to talk to - about anything. Life, love, dreams, or just the weather!",
    price: 3,
    tags: ["Friendship", "Listener", "Kind", "Easygoing"],
    img: "https://i.pravatar.cc/400?img=40",
    badge: "Verified",
    badgeClass: "def",
  },
  {
    id: 22,
    name: "Tom",
    age: 63,
    loc: "Chicago, USA",
    flag: "🇺🇸",
    desc: "Wants to chat with you",
    full: "Hi! I'm Tom. I'm looking for a true friend - someone to share sports, stories, and good laughs with.",
    price: 5,
    tags: ["Friendship", "Sports", "Loyal", "Fun"],
    img: "https://i.pravatar.cc/400?img=69",
    badge: "Top",
    badgeClass: "top",
  },
  {
    id: 23,
    name: "Julia",
    age: 41,
    loc: "Vienna, Austria",
    flag: "🇦🇹",
    desc: "Wants to chat with you",
    full: "Hi! I'm Julia. I love romantic music and even more, romantic love stories. Tell me yours!",
    price: 6,
    tags: ["Love Stories", "Music", "Romance", "Creative"],
    img: "https://i.pravatar.cc/400?img=42",
    badge: "Premium",
    badgeClass: "prem",
  },
  {
    id: 24,
    name: "Hassan",
    age: 53,
    loc: "Casablanca, Morocco",
    flag: "🇲🇦",
    desc: "Wants to chat with you",
    full: "Hi! I'm Hassan. I want to learn about African spirituality and share my own faith journey too.",
    price: 7,
    tags: ["Spirituality", "Faith", "Culture", "Respectful"],
    img: "https://i.pravatar.cc/400?img=61",
    badge: "Verified",
    badgeClass: "def",
  },
        ];

        /* ── profile grid ── */
        const SLOTS = 6,
          ROT_MS = 5000,
          STAGGER = 160,
          FADE_OUT = 240,
          FADE_IN = 320;
        let slotProfs = new Array(SLOTS).fill(null),
          queue = [],
          qCursor = 0,
          rotTmr = null,
          isRot = false;
        const slotT = new Array(SLOTS).fill(0);
        function refillQ() {
          queue = [...queue, ...shuffle(ALL_PROFILES)];
        }
        function nextP(excl) {
          const lim = queue.length + ALL_PROFILES.length;
          for (let t = 0; t < lim; t++) {
            if (qCursor >= queue.length) refillQ();
            const p = queue[qCursor++];
            if (!excl.has(p.id)) return p;
          }
          return ALL_PROFILES.find((p) => !excl.has(p.id)) || ALL_PROFILES[0];
        }
        function pickSlots(n) {
          const now = Date.now(),
            s = Array.from({ length: SLOTS }, (_, i) => ({
              idx: i,
              score: now - slotT[i] + Math.random() * 1500,
            }));
          s.sort((a, b) => b.score - a.score);
          return s.slice(0, n).map((s) => s.idx);
        }

        function buildCard(p) {
          const stars = "&#x2605;".repeat(Math.random() < 0.28 ? 4 : 5);
          return `<div class="prf-top"><img src="${p.img}" alt="${p.name}" class="prf-img" loading="lazy"/><div class="prf-overlay"></div><div class="prf-badge ${p.badgeClass}">${p.badge}</div><div class="prf-online"><div class="prf-online-dot"></div></div><div class="prf-identity"><div class="prf-name">${p.name}, ${p.age}</div><div class="prf-loc">${p.flag} ${p.loc}</div></div></div><div class="prf-body"><div class="prf-rate-row"><div class="prf-rate">$${p.price}<span>/hr</span></div><div class="prf-stars" aria-label="${stars.length === 4 ? 4 : 5} stars">${stars}</div></div><p class="prf-desc">${p.desc}</p><div class="prf-actions"><button class="prf-accept" data-id="${p.id}" aria-label="Accept request from ${p.name}"><i class="fas fa-check"></i> Accept Request</button><button class="prf-view" data-id="${p.id}" aria-label="View ${p.name}"><i class="fas fa-user"></i> View Profile</button></div></div>`;
        }

        function initGrid() {
          const grid = $("profileGrid");
          if (!grid) return;
          queue = [
            ...shuffle(ALL_PROFILES),
            ...shuffle(ALL_PROFILES),
            ...shuffle(ALL_PROFILES),
          ];
          qCursor = 0;
          const excl = new Set();
          for (let i = 0; i < SLOTS; i++) {
            const p = nextP(excl);
            slotProfs[i] = p;
            excl.add(p.id);
            slotT[i] = Date.now() - Math.random() * 30000;
          }
          grid.innerHTML = slotProfs
            .map(
              (p, i) =>
                `<div class="prf-card" data-slot="${i}" role="listitem">${buildCard(p)}</div>`,
            )
            .join("");
          grid.addEventListener("click", function (e) {
            const ab = e.target.closest(".prf-accept"),
              vb = e.target.closest(".prf-view");
            if (ab && !ab.disabled) {
              const p = ALL_PROFILES.find((x) => x.id === +ab.dataset.id);
              if (!p) return;
              ab.disabled = true;
              ab.innerHTML = `<span style="display:inline-flex;align-items:center;gap:.3rem"><span style="width:9px;height:9px;border:2px solid rgba(255,255,255,.3);border-top-color:#fff;border-radius:50%;display:inline-block;animation:spin .5s linear infinite"></span> Accepting&hellip;</span>`;
              setTimeout(() => {
                showNotif(`Register to chat with ${p.name}!`);
                openOffer(selC);
              }, 800);
            }
            if (vb) {
              const p = ALL_PROFILES.find((x) => x.id === +vb.dataset.id);
              if (p) openPmod(p);
            }
          });
          setTimeout(startRot, 3800);
        }

        function rotateCards() {
          if (isRot || document.hidden) return;
          const grid = $("profileGrid");
          if (!grid) return;
          const cards = grid.querySelectorAll(".prf-card[data-slot]");
          if (cards.length < SLOTS) return;
          isRot = true;
          const count = Math.random() < 0.4 ? 3 : 2,
            slots = pickSlots(count),
            excl = new Set(slotProfs.filter(Boolean).map((p) => p.id));
          const reps = slots.map(() => {
            const p = nextP(excl);
            excl.add(p.id);
            return p;
          });
          let done = 0;
          slots.forEach((si, bi) => {
            const card = grid.querySelector(`.prf-card[data-slot="${si}"]`),
              np = reps[bi];
            if (!card || !np) {
              done++;
              return;
            }
            setTimeout(() => {
              card.style.transition = `opacity ${FADE_OUT}ms ease,transform ${FADE_OUT}ms ease`;
              card.style.opacity = "0";
              card.style.transform = "translateY(-8px) scale(.97)";
              setTimeout(() => {
                card.innerHTML = buildCard(np);
                card.style.transition = "none";
                card.style.opacity = "0";
                card.style.transform = "translateY(10px) scale(.97)";
                requestAnimationFrame(() =>
                  requestAnimationFrame(() => {
                    card.style.transition = `opacity ${FADE_IN}ms ease,transform ${FADE_IN}ms cubic-bezier(.34,1.56,.64,1)`;
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0) scale(1)";
                  }),
                );
                slotProfs[si] = np;
                slotT[si] = Date.now();
                done++;
                if (done === count)
                  setTimeout(() => {
                    isRot = false;
                  }, FADE_IN + 70);
              }, FADE_OUT + 20);
            }, bi * STAGGER);
          });
        }
        function startRot() {
          if (rotTmr) clearInterval(rotTmr);
          rotTmr = setInterval(rotateCards, ROT_MS);
        }
        document.addEventListener("visibilitychange", () => {
          if (document.hidden) {
            clearInterval(rotTmr);
            rotTmr = null;
          } else if (!rotTmr) startRot();
        });

        /* ── demo chat ── */
        const DEMO = [
          {
            name: "James, 52 &middot; UK &#x1F1EC;&#x1F1E7;",
            img: "https://i.pravatar.cc/88?img=12",
            first:
              "Hi &#x1F44B; I'm James from London \u2014 I'd love to learn about your culture and daily life!",
          },
          {
            name: "Emily, 48 &middot; USA &#x1F1FA;&#x1F1F8;",
            img: "https://i.pravatar.cc/88?img=5",
            first:
              "Hi &#x1F44B; I'm Emily from Chicago \u2014 really curious about African languages and traditions!",
          },
          {
            name: "Maria, 45 &middot; Spain &#x1F1EA;&#x1F1F8;",
            img: "https://i.pravatar.cc/88?img=47",
            first:
              "Hola &#x1F44B; I'm Maria from Barcelona \u2014 I'd love a cultural exchange chat!",
          },
        ];
        let demoIdx = Math.floor(Math.random() * DEMO.length),
          chatReplied = false,
          chatTmr = null;
        const demoInp = $("demoInp");
        function addMsg(side, text) {
          const now = new Date(),
            tm =
              now.getHours() + ":" + String(now.getMinutes()).padStart(2, "0");
          const d = document.createElement("div");
          d.className = "cm " + side;
          d.innerHTML = `<div class="cm-bub">${text}</div><div class="cm-time">${tm}</div>`;
          const msgs = $("demoMsgs");
          if (msgs) {
            msgs.appendChild(d);
            msgs.scrollTop = msgs.scrollHeight;
          }
        }
        function addTyping() {
          const d = document.createElement("div");
          d.className = "cm them";
          d.innerHTML =
            '<div class="typing-ind"><span></span><span></span><span></span></div>';
          const msgs = $("demoMsgs");
          if (msgs) {
            msgs.appendChild(d);
            msgs.scrollTop = msgs.scrollHeight;
          }
          return d;
        }
        function initDemo() {
          const p = DEMO[demoIdx % DEMO.length];
          demoIdx++;
          chatReplied = false;
          clearTimeout(chatTmr);
          const msgs = $("demoMsgs");
          if (msgs) msgs.innerHTML = "";
          if (demoInp) {
            demoInp.value = "";
            demoInp.disabled = false;
            demoInp.placeholder = "Type a reply to earn\u2026";
          }
          const send = $("demoSend");
          if (send) send.disabled = false;
          const av = $("demoAv"),
            nm = $("demoName");
          if (av) av.src = p.img;
          if (nm) nm.innerHTML = p.name;
          const ty = addTyping();
          chatTmr = setTimeout(() => {
            ty.remove();
            addMsg("them", p.first);
            demoInp && demoInp.focus();
          }, 2500);
        }
        function sendDemo() {
          if (chatReplied) return;
          const txt = ((demoInp && demoInp.value) || "").trim();
          if (!txt) return;
          if (demoInp) {
            demoInp.value = "";
            demoInp.disabled = true;
            demoInp.placeholder = "Please wait\u2026";
          }
          const send = $("demoSend");
          if (send) send.disabled = true;
          clearTimeout(chatTmr);
          chatReplied = true;
          addMsg("me", txt);
          const ty = addTyping();
          chatTmr = setTimeout(() => {
            ty.remove();
            openOffer(selC);
          }, 2900);
        }
        $("demoSend") && $("demoSend").addEventListener("click", sendDemo);
        demoInp &&
          demoInp.addEventListener("keypress", (e) => {
            if (e.key === "Enter") sendDemo();
          });

        /* ── FAQ ── */
        const FAQS = [
          {
            q: "How do I get paid?",
            a: "Once your balance reaches the $5 minimum, withdraw via M-Pesa, PayPal, MTN Money, or Airtel Money. Payments process within 2 hours with zero withdrawal fees.",
          },
          {
            q: "What are the 5 ways to earn?",
            a: "Per hour (auto-tracked), per message (every reply), per completed session (flat fee), voluntary tips from clients, and daily rewards for consistent activity.",
          },
          {
            q: "How much can I earn per month?",
            a: "Results vary by activity. Members doing 3–5 chats daily typically earn $50–$200/month. Highly active members can earn $200–$350/month. Figures depend entirely on your effort.",
          },
          {
            q: "What do I chat about?",
            a: "Culture, travel, daily life, companionship, language lessons, and advice — with clients from UK, USA, Canada, Qatar and more. All chats are friendly, text-only, and appropriate.",
          },
          {
            q: "Do I need to speak English?",
            a: "No! You can chat entirely in Kiswahili. The platform auto-translates your messages for international clients on their side — no language barrier.",
          },
          {
            q: "Why is there a registration fee?",
            a: "The small one-time fee covers verification, platform setup, and access. Most active members recover it within their first week of chatting.",
          },
          {
            q: "Is StarHela legitimate?",
            a: "Yes. StarHela is registered in Kenya and operates across Africa. We've paid out over $890K to verified earners and publish our earnings disclaimer openly.",
          },
        ];
        const fw = $("faqWrap");
        if (fw) {
          const fr = document.createDocumentFragment();
          FAQS.forEach((f) => {
            const d = document.createElement("div");
            d.className = "faq-item";
            d.innerHTML = `<div class="faq-q">${f.q} <i class="fas fa-chevron-down"></i></div><div class="faq-a">${f.a}</div>`;
            const qd = d.querySelector(".faq-q"),
              ad = d.querySelector(".faq-a");
            qd.addEventListener("click", () => {
              const was = ad.classList.contains("on");
              document
                .querySelectorAll(".faq-a")
                .forEach((x) => x.classList.remove("on"));
              document
                .querySelectorAll(".faq-q")
                .forEach((x) => x.classList.remove("on"));
              if (!was) {
                ad.classList.add("on");
                qd.classList.add("on");
              }
            });
            fr.appendChild(d);
          });
          fw.appendChild(fr);
        }

        /* ── live counters ── */
        let lc = 2847,
          rc = 1312,
          todayBase = 3240;
        setInterval(() => {
          if (!document.hidden) {
            lc = Math.max(600, lc + Math.floor(Math.random() * 8) - 3);
            const lce = $("liveCount");
            if (lce) lce.textContent = fmt(lc);
            rc = Math.max(
              200,
              Math.min(1500, rc + Math.floor(Math.random() * 7) - 3),
            );
            const rce = $("activeReqs");
            if (rce) rce.textContent = fmt(rc);
            todayBase += Math.floor(Math.random() * 10) + 2;
          }
        }, 2200);

        /* ── notification ── */
        let nTmr = null;
        function showNotif(msg) {
          const n = $("notif"),
            t = $("notifTxt");
          if (!n || !t) return;
          t.textContent = msg;
          n.classList.add("show");
          clearTimeout(nTmr);
          nTmr = setTimeout(() => n.classList.remove("show"), 3500);
        }

        /* ── social proof ── */
        const spNames = [
          "Sarah",
          "John",
          "Maria",
          "David",
          "Linda",
          "Grace",
          "Amina",
          "Paul",
          "Kevin",
          "Aisha",
        ];
        const spCities = [
          "Nairobi",
          "Lagos",
          "Dar es Salaam",
          "Accra",
          "Kampala",
          "Mombasa",
          "Enugu",
          "Johannesburg",
        ];
        const spActs = [
          { i: "fa-user-plus", t: "just activated their account" },
          { i: "fa-comment", t: "started chatting with a client" },
          { i: "fa-dollar-sign", t: "just earned from a chat" },
          { i: "fa-star", t: "received a 5-star rating" },
          { i: "fa-gift", t: "received a tip from a client" },
        ];
        let spBusy = false,
          lastSPMsg = "";
        function showSP() {
          const spW = $("spWrap");
          if (!spW || spBusy || document.hidden) return;
          spBusy = true;
          let msg;
          do {
            const n = spNames[Math.floor(Math.random() * spNames.length)],
              c = spCities[Math.floor(Math.random() * spCities.length)],
              a = spActs[Math.floor(Math.random() * spActs.length)];
            msg = `<i class="fas ${a.i}"></i><span><strong>${n} from ${c}</strong> ${a.t}</span>`;
          } while (msg === lastSPMsg);
          lastSPMsg = msg;
          const el = document.createElement("div");
          el.className = "sp-item";
          el.innerHTML = msg;
          spW.appendChild(el);
          setTimeout(
            () => {
              el.style.opacity = "0";
              el.style.transition = "opacity .4s ease";
              setTimeout(() => {
                el.remove();
                spBusy = false;
              }, 420);
            },
            Math.floor(Math.random() * 3000) + 6000,
          );
        }
        function loopSP() {
          showSP();
          setTimeout(loopSP, Math.floor(Math.random() * 6000) + 10000);
        }
        setTimeout(loopSP, 9000);

        /* ── cookie ── */
        const hasCk = () => {
          try {
            return !!localStorage.getItem("SH_ck");
          } catch {
            return true;
          }
        };
        const setCk = (v) => {
          try {
            localStorage.setItem("SH_ck", v);
          } catch {}
        };
        if (!hasCk())
          setTimeout(
            () => $("cookieBar") && $("cookieBar").classList.add("show"),
            3800,
          );
        $("cookieOk") &&
          $("cookieOk").addEventListener("click", () => {
            setCk("1");
            $("cookieBar").classList.remove("show");
          });
        $("cookieNo") &&
          $("cookieNo").addEventListener("click", () => {
            setCk("0");
            $("cookieBar").classList.remove("show");
          });

        /* ── escape ── */
        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape") {
            closeOffer();
            closePmod();
            const ao = $("acctOv");
            if (ao) ao.classList.remove("on");
            checkScroll();
          }
        });

        /* ── intersection observer (fade-up) ── */
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting && e.target.classList.contains("fu"))
                e.target.classList.add("vis");
            });
          },
          { threshold: 0.07, rootMargin: "0px 0px -36px 0px" },
        );
        document.querySelectorAll(".fu").forEach((el) => io.observe(el));

        /* ── init ── */
        initGrid();
        initDemo();
      })();