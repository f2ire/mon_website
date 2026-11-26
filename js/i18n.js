// ============ Translation dictionary ============
// key -> { en, fr }. Elements pick up translations via data-i18n (textContent)
// or data-i18n-html (innerHTML, for strings containing inline tags).
const translations = {
  // First-visit hint
  "hint.season": {
    en: "Choose a theme to match your favorite season",
    fr: "Choisissez un thème selon votre saison préférée",
  },

  // Nav
  "nav.about": { en: "About", fr: "À propos" },
  "nav.projects": { en: "Projects", fr: "Projets" },
  "nav.experience": { en: "Experience", fr: "Expérience" },
  "nav.photography": { en: "Photography", fr: "Photographie" },

  // Page titles (browser tab)
  "index.title": { en: "Yanis · Backend & Data Engineer", fr: "Yanis · Ingénieur Backend & Data" },
  "shen.title": { en: "Shen · Yanis", fr: "Shen · Yanis" },
  "aoe4.title": { en: "AoE4 Units · Yanis", fr: "AoE4 Units · Yanis" },
  "iori.title": { en: "Iori · Yanis", fr: "Iori · Yanis" },

  // Hero (index)
  "hero.title": { en: "Backend & Data Engineer", fr: "Ingénieur Backend & Data" },
  "hero.cta": { en: "See portfolio", fr: "Voir le portfolio" },

  // About Me (index)
  "about.title": { en: "About Me", fr: "À propos de moi" },
  "about.photoCaption": {
    en: "Sunrise from the top of Mt. Fuji, 3,776 m",
    fr: "Lever de soleil au sommet du mont Fuji, 3 776 m",
  },
  "about.cvButton": { en: "Download CV", fr: "Télécharger le CV" },
  "about.cvHref": { en: "assets/resume.pdf", fr: "assets/resume_fr.pdf" },
  "about.bio1": {
    en: "I'm Yanis, a backend & data engineer based in Toulon, France. I've always been passionate about animals, and that's how I came to code, through biology: after starting a degree in the field, I moved to INSA Lyon to study computer science, then spent a year at Sanofi building software for vaccine research. That's where I figured out what I like building: backend work and tools that feel finished, that answer a real need rather than existing for their own sake.",
    fr: "Je m'appelle Yanis, jeune ingénieur backend & data actuellement basé à Toulon. J'ai toujours été passionné par les animaux et les sciences de la vie. C'est par cette voie via ma licence que j'ai découvert la joie de programmer. J'ai ensuite rejoint l'INSA Lyon pour approfondir cette nouvelle passion, puis j'ai passé un an chez Sanofi à développer des outils pour la recherche vaccinale. C'est là que j'ai compris ce que j'aimais : construire des outils aboutis qui répondent à un vrai besoin.",
  },
  "about.bio2": {
    en: "During engineering school I also discovered Japan. I started learning the language, moved there for an exchange semester, and after graduating went back to dive deeper into the culture and push my Japanese further, shipping personal projects along the way.",
    fr: "Pendant mes études d'ingénieur, je suis également tombé amoureux du Japon. J'ai commencé par apprendre la langue afin d'y préparer un semestre d'échange qui a confirmé cet amour. Après mon diplôme j'y suis retourné pour approfondir sa culture et surtout mon niveau de japonais, tout en continuant à développer mes projets personnels.",
  },
  "about.bio3": {
    en: "Outside of code, as you'd guess from the animal thing, I'm a wildlife photographer. You'll find some of my shots further down the page. I'm also a big fan of everything strategy-related, from video games to board games, and even team sports like volleyball.",
    fr: "En dehors du code, je fais également de la photo naturaliste. Des exemples se trouvent plus bas sur la page. Je suis aussi un grand amateur de tout ce qui touche à la stratégie, allant des jeux vidéo, en passant par les jeux de société, jusqu'à certains sports tels que le volley-ball.",
  },
  "about.eduTitle": { en: "Education", fr: "Formation" },
  "about.edu1Degree": {
    en: "Master of Engineering, INSA Lyon (National Institute of Applied Sciences)",
    fr: "Diplôme d'ingénieur, INSA Lyon (Institut National des Sciences Appliquées)",
  },
  "about.edu1Desc": {
    en: "Computer Science and Data, with a bioinformatics specialization.",
    fr: "Informatique et données, spécialisation bio-informatique.",
  },
  "about.edu2Degree": {
    en: "Master of Engineering, Kobe University (Japan)",
    fr: "Diplôme d'ingénieur, université de Kobe (Japon)",
  },
  "about.edu2Desc": {
    en: "Six-month university exchange in the Master of System Informatics.",
    fr: "Échange universitaire de six mois en master d'informatique des systèmes.",
  },
  "about.edu3Degree": {
    en: "Bachelor of Science, University of Toulon",
    fr: "Licence de sciences, université de Toulon",
  },
  "about.langTitle": { en: "Languages", fr: "Langues" },
  "lang.native": { en: "Native", fr: "Natif" },
  "lang.fluent": { en: "Fluent", fr: "Courant" },
  "lang.conversational": { en: "Conversational", fr: "Conversationnel" },
  "lang.basics": { en: "Basics", fr: "Notions" },
  "lang.incoming": { en: "Incoming?", fr: "En approche ?" },
  "lang.soon": { en: "Soon…", fr: "Bientôt…" },

  // Projects (index)
  "projects.title": { en: "Projects", fr: "Projets" },
  "project.shen.desc": {
    en: "A local-first research IDE built with Tauri and React, pairing your Zotero library with a LaTeX/code editor and a private AI assistant. It does citation-grounded RAG over your papers, with clickable citations that jump to and highlight the exact source passage in the PDF.",
    fr: "Un IDE de recherche local-first construit avec Tauri et React, associant votre bibliothèque Zotero à un éditeur LaTeX/code et un assistant IA privé. Il effectue du RAG ancré dans les citations sur vos articles, avec des citations cliquables qui pointent vers le passage exact dans le PDF et le surlignent.",
  },
  "project.aoe4.desc": {
    en: "An educational combat-analysis tool for Age of Empires IV. Compare any two units side by side with a full battle simulation. A companion Twitch extension lets viewers run these matchups live during streams, right on the channel overlay.",
    fr: "Un outil pédagogique d'analyse de combat pour Age of Empires IV. Comparez deux unités côte à côte avec une simulation de combat complète. Une extension Twitch associée permet aux spectateurs de lancer ces confrontations en direct, sur l'incrustation de la chaîne.",
  },
  "project.iori.desc": {
    en: "A browser extension paired with a local Python backend that interrupts endless social-media scrolling with Japanese flashcard overlays. It uses a spaced-repetition system (SM-2) to schedule reviews.",
    fr: "Une extension de navigateur couplée à un backend Python local qui interrompt le défilement infini des réseaux sociaux avec des cartes mémo japonaises. Elle utilise un système de répétition espacée (SM-2) pour planifier les révisions.",
  },
  "project.clipfinder.desc": {
    en: "Finds the moments worth clipping in a Twitch VOD by reading the chat instead of the video, then frames and exports them as 9:16 shorts. On the same streams, it ranks more than twice as many real viewer clips in its top 10 as StreamLadder's AI. Windows app and free website.",
    fr: "Repère les moments à clipper dans une VOD Twitch en lisant le chat plutôt que la vidéo, puis les cadre et les exporte en shorts 9:16. Sur les mêmes streams, il place dans son top 10 plus de deux fois plus de vrais clips de spectateurs que l'IA de StreamLadder. Application Windows et site gratuit.",
  },
  "project.searchjob.desc": {
    en: "My own job-search tool. It collects thousands of offers from job APIs and company ATS boards, scores them against my profile with plain rules, and learns from my quick yes/no triage. Each application is then tracked from a tailored LaTeX CV and cover letter to the interview.",
    fr: "Mon propre outil de recherche d'emploi. Il collecte des milliers d'offres depuis des API d'emploi et les ATS des entreprises, les note face à mon profil avec de simples règles, et apprend de mon tri rapide oui/non. Chaque candidature est ensuite suivie, du CV et de la lettre LaTeX adaptés jusqu'à l'entretien.",
  },
  "searchjob.placeholder": { en: "Private tool", fr: "Outil privé" },
  "searchjob.yearRange": { en: "2026", fr: "2026" },

  // Experience (index)
  "experience.title": { en: "Experience", fr: "Expérience" },
  "experience.role": { en: "Software Engineer, Sanofi", fr: "Ingénieur logiciel, Sanofi" },
  "experience.bullet1": {
    en: "Took over an internal vaccine-research application: fixed its bugs, refactored the codebase and handled its deployment on AWS, letting research teams expand what they could do with it.",
    fr: "Repris une application interne de recherche vaccinale : corrigé ses bugs, refactorisé le code et géré son déploiement sur AWS, permettant aux équipes de recherche d'étendre ce qu'elles pouvaient en faire.",
  },
  "experience.bullet2": {
    en: "Designed and managed a custom SQL database, cutting query execution time by 90% on user-specific requests, and built the REST APIs and CRUD interfaces used to work with the data.",
    fr: "Conçu et géré une base de données SQL sur mesure, réduisant de 90 % le temps d'exécution des requêtes spécifiques aux utilisateurs, et construit les API REST et interfaces CRUD utilisées pour manipuler les données.",
  },
  "experience.bullet3": {
    en: "Developed Python ETL pipelines orchestrated with Snakemake to answer biologists' requests, then deployed them and trained the teams to use them.",
    fr: "Développé des pipelines ETL en Python orchestrés avec Snakemake pour répondre aux demandes des biologistes, puis déployé ces pipelines et formé les équipes à leur utilisation.",
  },
  "experience.bullet4": {
    en: "Brought DevOps practices into the project (automated testing with pytest, CI, Git, Docker) while working day to day in a French-American Agile team, in French and English.",
    fr: "Introduit des pratiques DevOps dans le projet (tests automatisés avec pytest, CI, Git, Docker) en travaillant au quotidien dans une équipe Agile franco-américaine, en français et en anglais.",
  },
  "experience2.role": {
    en: "Machine Learning Intern, Media Informatics Laboratory (Kobe, Japan)",
    fr: "Stage Machine Learning, Media Informatics Laboratory (Kobe, Japon)",
  },
  "experience2.bullet1": {
    en: "Built an AI agent based on LLMs and a RAG architecture to automate scientific literature research.",
    fr: "Développement d'un AI agent basé sur des LLM et une architecture RAG pour automatiser la recherche documentaire scientifique.",
  },
  "experience2.bullet2": {
    en: "Designed Python web scraping pipelines to build the dataset used to improve model performance.",
    fr: "Conception de pipelines de web scraping en Python pour constituer le dataset d'entraînement du modèle.",
  },

  // Technologies / Photography (index)
  "technologies.title": { en: "Technologies", fr: "Technologies" },
  "photography.title": { en: "Wildlife Photography", fr: "Photographie animalière" },

  // Shared across project detail pages
  "common.backToProjects": { en: "Back to projects", fr: "Retour aux projets" },
  "common.aboutProject": { en: "About the project", fr: "À propos du projet" },
  "common.mainFeatures": { en: "Main features", fr: "Fonctionnalités principales" },
  "common.techStack": { en: "Tech stack", fr: "Stack technique" },
  "common.year": { en: "Year", fr: "Année" },
  "common.type": { en: "Type", fr: "Type" },
  "common.status": { en: "Status", fr: "Statut" },
  "common.stack": { en: "Stack", fr: "Stack" },
  "common.viewGithub": { en: "View on GitHub", fr: "Voir sur GitHub" },
  "common.previous": { en: "← Previous", fr: "← Précédent" },
  "common.next": { en: "Next →", fr: "Suivant →" },
  "common.statusLive": { en: "Live", fr: "En ligne" },
  "common.statusDev": { en: "In development", fr: "En développement" },

  // Shen project page
  "shen.eyebrow": { en: "Personal project · 2026–now", fr: "Projet personnel · 2026–aujourd'hui" },
  "shen.yearRange": { en: "2026–now", fr: "2026–aujourd'hui" },
  "shen.tagline": {
    en: "A local-first research IDE for scientists: one desktop app pairing your Zotero library, a LaTeX/Python editor and a private AI assistant that answers straight from your own papers, with sources you can click back to.",
    fr: "Un IDE de recherche local-first pour scientifiques : une application de bureau associant votre bibliothèque Zotero, un éditeur LaTeX/Python et un assistant IA privé qui répond directement à partir de vos propres articles, avec des sources sur lesquelles on peut cliquer pour remonter à la source.",
  },
  "shen.meta1": { en: "Desktop app", fr: "Application de bureau" },
  "shen.meta2": { en: "Local-first", fr: "Local-first" },
  "shen.meta3": { en: "AI / RAG", fr: "IA / RAG" },
  "shen.p1": {
    en: "Writing a paper usually means juggling three tools at once: a reference manager on one side, an editor on the other, and, increasingly, an AI chat that knows nothing about the papers you actually cite. Shen collapses that into a single three-panel desktop workspace: your Zotero library, a LaTeX/Python editor, and an assistant that reads from your own library instead of the open web.",
    fr: "Rédiger un article scientifique implique généralement de jongler entre trois outils à la fois : un gestionnaire de références d'un côté, un éditeur de l'autre, et de plus en plus un chat IA qui ne connaît rien des articles que vous citez réellement. Shen réunit tout cela dans un espace de travail de bureau à trois panneaux : votre bibliothèque Zotero, un éditeur LaTeX/Python, et un assistant qui lit dans votre propre bibliothèque plutôt que sur le web ouvert.",
  },
  "shen.p2": {
    en: "The assistant runs <strong>citation-grounded retrieval</strong> (RAG) over your papers, so every answer ships with its sources. The magic moment: clicking a citation jumps the PDF viewer to the exact passage and highlights it in place, down to the bounding box on the page, so you can always trace a claim back to where it comes from. And it stays private: the library, the search index and the retrieval all run on your machine.",
    fr: "L'assistant effectue une <strong>recherche ancrée dans les citations</strong> (RAG) sur vos articles, si bien que chaque réponse arrive avec ses sources. Le moment clé : cliquer sur une citation fait sauter le lecteur PDF jusqu'au passage exact et le surligne sur place, jusqu'au cadre précis sur la page, pour toujours pouvoir retracer une affirmation jusqu'à son origine. Et tout reste privé : la bibliothèque, l'index de recherche et la recherche elle-même tournent sur votre machine.",
  },
  "shen.feature1Title": { en: "Three-panel workspace", fr: "Espace de travail à trois panneaux" },
  "shen.feature1Desc": {
    en: "Bibliography, editor and assistant in one window, modelled on the VS Code interaction you already know.",
    fr: "Bibliographie, éditeur et assistant dans une seule fenêtre, sur un modèle d'interaction proche de VS Code.",
  },
  "shen.feature2Title": { en: "Zotero, natively", fr: "Zotero, nativement" },
  "shen.feature2Desc": {
    en: "Your library synced through Zotero's official Web API (one-click OAuth), not a fragile database hack, with a built-in PDF reader.",
    fr: "Votre bibliothèque synchronisée via l'API Web officielle de Zotero (OAuth en un clic), pas un hack de base de données fragile, avec un lecteur PDF intégré.",
  },
  "shen.feature3Title": { en: "A real editor", fr: "Un vrai éditeur" },
  "shen.feature3Desc": {
    en: "LaTeX, Python and text with open/save, syntax support and an integrated terminal, so writing and analysis live side by side.",
    fr: "LaTeX, Python et texte avec ouverture/sauvegarde, coloration syntaxique et un terminal intégré, pour que rédaction et analyse cohabitent.",
  },
  "shen.feature4Title": { en: "Grounded AI assistant", fr: "Assistant IA ancré" },
  "shen.feature4Desc": {
    en: "Hybrid semantic + keyword search over your papers; bring your own key (Anthropic by default) or run fully offline with a local model.",
    fr: "Recherche hybride sémantique et par mots-clés sur vos articles ; utilisez votre propre clé (Anthropic par défaut) ou fonctionnez entièrement hors ligne avec un modèle local.",
  },
  "shen.feature5Title": { en: "Clickable citations", fr: "Citations cliquables" },
  "shen.feature5Desc": {
    en: "Every source jumps to and highlights the exact passage in the PDF, at the right position on the page.",
    fr: "Chaque source fait sauter le lecteur jusqu'au passage exact dans le PDF et le surligne, à la position précise sur la page.",
  },
  "shen.feature6Title": { en: "Local-first by design", fr: "Local-first par conception" },
  "shen.feature6Desc": {
    en: "No account, no cloud store; your papers never leave the machine.",
    fr: "Aucun compte, aucun stockage cloud ; vos articles ne quittent jamais la machine.",
  },
  "shen.techP": {
    en: "Shen is a <strong>Tauri 2</strong> desktop app: a Rust core for OS access and Zotero sync, a React/TypeScript interface, and a Python service for the retrieval pipeline. The two sides talk only through a typed, versioned contract, so the app and the AI engine evolve independently. Under the hood, retrieval combines a Qdrant vector store with a GROBID pass that extracts page-level coordinates, the basis for those pixel-accurate citation highlights.",
    fr: "Shen est une application de bureau <strong>Tauri 2</strong> : un cœur en Rust pour l'accès système et la synchronisation Zotero, une interface React/TypeScript, et un service Python pour le pipeline de recherche. Les deux côtés ne communiquent que via un contrat typé et versionné, si bien que l'application et le moteur IA évoluent indépendamment. Sous le capot, la recherche combine une base vectorielle Qdrant avec une passe GROBID qui extrait les coordonnées au niveau de la page, base de ces surlignages de citation précis au pixel près.",
  },

  // AoE4 Units project page
  "aoe4.eyebrow": { en: "Personal project · 2025–now", fr: "Projet personnel · 2025–aujourd'hui" },
  "aoe4.yearRange": { en: "2025–now", fr: "2025–aujourd'hui" },
  "aoe4.tagline": {
    en: "An educational combat-analysis tool for Age of Empires IV: compare any two units side by side with a full battle simulation, on the web or live on Twitch.",
    fr: "Un outil pédagogique d'analyse de combat pour Age of Empires IV : comparez deux unités côte à côte avec une simulation de combat complète, sur le web ou en direct sur Twitch.",
  },
  "aoe4.meta1": { en: "Web app", fr: "Application web" },
  "aoe4.meta2": { en: "Twitch extension", fr: "Extension Twitch" },
  "aoe4.meta3": { en: "Game data", fr: "Données du jeu" },
  "aoe4.p1": {
    en: "I've been playing the Age of Empires series for as long as I can remember, and AoE4 is one of my favorites. Like a lot of players I really love to establish strategy and so theorycraft and predict every match up. The community had spreadsheets and wikis, but nothing that just answered the question in a couple of clicks, so I built it.",
    fr: "Je joue à la série Age of Empires depuis aussi longtemps que je m'en souvienne, et AoE4 est l'un de mes préférés. Comme beaucoup de joueurs, j'adore élaborer des stratégies, théoriser et anticiper chaque affrontement. La communauté disposait de tableurs et de wikis, mais rien qui répondait simplement à la question en quelques clics, alors je l'ai créé.",
  },
  "aoe4.p2": {
    en: "AoE4 Units settles the matchup by simulating the fight itself: pick any two units, set their Age and upgrades, and watch it resolve down to who is left standing. The numbers are never hand-entered: a data-driven pipeline rebuilds every unit's stats from the game's own data, with a layer of hand-written corrections for the special cases, so when a patch lands the tool follows it instead of going stale. The whole thing started as a personal project and grew into something the game's competitive community actually uses; the simulation engine is shared code, reused unchanged in a companion Twitch extension so viewers can run their own matchups live on the stream overlay.",
    fr: "AoE4 Units tranche la confrontation en simulant le combat lui-même : choisissez deux unités, définissez leur âge et leurs améliorations, et regardez qui reste debout à la fin. Les chiffres ne sont jamais saisis à la main : un pipeline piloté par les données reconstruit les statistiques de chaque unité à partir des données du jeu, avec une couche de corrections écrites à la main pour les cas particuliers, si bien qu'à chaque patch l'outil suit au lieu de devenir obsolète. Ce qui a commencé comme un projet personnel est devenu un outil réellement utilisé par la communauté compétitive du jeu ; le moteur de simulation est du code partagé, réutilisé tel quel dans une extension Twitch associée pour que les spectateurs puissent lancer leurs propres confrontations en direct sur l'incrustation du stream.",
  },
  "aoe4.feature1Title": { en: "Any unit, any upgrade", fr: "N'importe quelle unité, n'importe quelle amélioration" },
  "aoe4.feature1Desc": {
    en: "Side-by-side comparison of any two units, at any Age, with technologies and abilities toggled on and off.",
    fr: "Comparaison côte à côte de deux unités, à n'importe quel âge, avec technologies et capacités activables ou non.",
  },
  "aoe4.feature2Title": { en: "A real fight, not a stat sheet", fr: "Un vrai combat, pas une fiche de stats" },
  "aoe4.feature2Desc": {
    en: "Attack cadence, melee and ranged armor, bonus damage, charges and healing all play out to a time-to-kill and a survivor.",
    fr: "Cadence d'attaque, armure de mêlée et à distance, dégâts bonus, charges et soins, tout se déroule jusqu'à un temps de mise à mort et un survivant.",
  },
  "aoe4.feature3Title": { en: "Army battles", fr: "Batailles d'armées" },
  "aoe4.feature3Desc": {
    en: "Scale past 1v1 to N-vs-M, balanced by equal cost or equal population, with focus-fire and attack-move engagement models.",
    fr: "Passez du 1 contre 1 au N contre M, équilibré par coût égal ou population égale, avec des modèles d'engagement en tir concentré ou en déplacement-attaque.",
  },
  "aoe4.feature4Title": { en: "Kiting and spacing", fr: "Kiting et positionnement" },
  "aoe4.feature4Desc": {
    en: "Ranged units kite; an approach phase gives archers their free shots while melee closes the gap.",
    fr: "Les unités à distance pratiquent le kiting ; une phase d'approche laisse aux archers leurs tirs gratuits pendant que la mêlée comble l'écart.",
  },
  "aoe4.feature5Title": { en: "Patch-proof data", fr: "Des données résistantes aux patchs" },
  "aoe4.feature5Desc": {
    en: "Every unit is rebuilt from the game's data each patch, with a correction layer for the special cases.",
    fr: "Chaque unité est reconstruite à partir des données du jeu à chaque patch, avec une couche de correction pour les cas particuliers.",
  },
  "aoe4.feature6Title": { en: "Live on Twitch", fr: "En direct sur Twitch" },
  "aoe4.feature6Desc": {
    en: "A companion extension runs matchups on the channel overlay, sharing the same engine as the site.",
    fr: "Une extension associée lance des confrontations sur l'incrustation de la chaîne, en partageant le même moteur que le site.",
  },
  "aoe4.techP": {
    en: "A React 18 and TypeScript single-page app, styled with TailwindCSS and shadcn/ui, animated with Framer Motion, bundled by Vite. The combat logic sits in isolated modules reused by both the site and the Twitch extension. Unit pages are pre-rendered to static HTML with vite-react-ssg, so every unit gets its own indexable page for search.",
    fr: "Une application monopage en React 18 et TypeScript, stylée avec TailwindCSS et shadcn/ui, animée avec Framer Motion, empaquetée par Vite. La logique de combat réside dans des modules isolés réutilisés à la fois par le site et par l'extension Twitch. Les pages d'unités sont pré-rendues en HTML statique avec vite-react-ssg, si bien que chaque unité obtient sa propre page indexable pour la recherche.",
  },
  "aoe4.visitButton": { en: "Visit aoe4units.com", fr: "Visiter aoe4units.com" },

  // Iori project page
  "iori.eyebrow": { en: "Personal project · 2026–now", fr: "Projet personnel · 2026–aujourd'hui" },
  "iori.yearRange": { en: "2026–now", fr: "2026–aujourd'hui" },
  "iori.tagline": {
    en: "A browser extension that turns doomscrolling into Japanese practice: when a feed pulls you under, it surfaces a flashcard over the page: a small refuge to step into for a moment, scheduled by a spaced-repetition engine and served entirely from your own machine.",
    fr: "Une extension de navigateur qui transforme le doomscrolling en entraînement au japonais : quand un fil d'actualité vous engloutit, elle fait surgir une carte mémo par-dessus la page, un petit refuge où s'arrêter un instant, planifiée par un moteur de répétition espacée et servie entièrement depuis votre propre machine.",
  },
  "iori.meta1": { en: "Browser extension", fr: "Extension de navigateur" },
  "iori.meta2": { en: "Japanese learning", fr: "Apprentissage du japonais" },
  "iori.meta3": { en: "Spaced repetition", fr: "Répétition espacée" },
  "iori.meta4": { en: "Local-first", fr: "Local-first" },
  "iori.p1": {
    en: "Iori started from a simple observation: the time lost scrolling social feeds could go into learning Japanese instead. An attention state machine watches how long you dwell on a distraction site and, at the right moment, slides a flashcard over the page. Swipe up to dismiss, swipe down to delete the card, or grade it and drop back into your feed.",
    fr: "Iori est né d'un constat simple : le temps perdu à faire défiler les réseaux sociaux pourrait servir à apprendre le japonais. Une machine à états d'attention surveille combien de temps vous passez sur un site distrayant et, au bon moment, fait glisser une carte mémo par-dessus la page. Balayez vers le haut pour l'écarter, vers le bas pour la supprimer, ou notez-la pour retourner à votre fil.",
  },
  "iori.p2": {
    en: "The name carries the idea. 庵 (<em>iori</em>) is a hermitage, the small thatched hut a poet retreats to, not a temple you visit. The feed is the 沼 (<em>numa</em>), the swamp you sink into; the 庵 is what surfaces. So a card is designed as a refuge, never an alarm: quiet copy, falling sakura petals, no streaks, no red badges, no guilt.",
    fr: "Le nom porte l'idée. 庵 (<em>iori</em>) est un ermitage, la petite hutte de chaume où un poète se retire, pas un temple qu'on visite. Le fil d'actualité est le 沼 (<em>numa</em>), le marécage dans lequel on s'enfonce ; le 庵 est ce qui refait surface. Une carte est donc conçue comme un refuge, jamais comme une alarme : un ton discret, des pétales de sakura qui tombent, pas de séries à maintenir, pas de badges rouges, pas de culpabilité.",
  },
  "iori.p3": {
    en: "Reviews are scheduled with the SM-2 spaced-repetition algorithm, the same family Anki uses: cards you know come back later, cards you miss come back soon. All the logic lives in a local Python backend built as a pure, fully tested core. The Manifest&nbsp;V3 extension holds no business logic and simply relays browser events to it over a loopback HTTP call. Decks, review history and settings persist to a local file, and the server only ever binds to <code>127.0.0.1</code>: no account, no cloud, no telemetry.",
    fr: "Les révisions sont planifiées avec l'algorithme de répétition espacée SM-2, la même famille qu'utilise Anki : les cartes connues reviennent plus tard, les cartes ratées reviennent bientôt. Toute la logique vit dans un backend Python local construit comme un cœur pur et entièrement testé. L'extension Manifest&nbsp;V3 ne contient aucune logique métier et se contente de relayer les événements du navigateur via un appel HTTP en boucle locale. Les paquets, l'historique des révisions et les paramètres sont conservés dans un fichier local, et le serveur ne se lie qu'à <code>127.0.0.1</code> : aucun compte, aucun cloud, aucune télémétrie.",
  },
  "iori.feature1Title": { en: "Scroll interruption", fr: "Interruption du défilement" },
  "iori.feature1Desc": {
    en: "An attention state machine tracks time spent on distraction sites and pops a card at the right moment, with cooldowns, snoozes and a daily quota so it never nags.",
    fr: "Une machine à états d'attention suit le temps passé sur les sites distrayants et fait apparaître une carte au bon moment, avec des délais de recharge, des reports et un quota quotidien pour ne jamais devenir pénible.",
  },
  "iori.feature2Title": { en: "SM-2 scheduling", fr: "Planification SM-2" },
  "iori.feature2Desc": {
    en: "Spaced repetition in the Anki family: known cards come back later, missed ones come back soon, on a card-by-card interval.",
    fr: "Répétition espacée de la famille Anki : les cartes connues reviennent plus tard, les cartes ratées reviennent bientôt, avec un intervalle propre à chaque carte.",
  },
  "iori.feature3Title": { en: "Add words as you browse", fr: "Ajoutez des mots en naviguant" },
  "iori.feature3Desc": {
    en: "Select any word, Japanese or English, and add it from the right-click menu. It resolves through the local dictionary, falling back to a keyless online translator when needed.",
    fr: "Sélectionnez n'importe quel mot, japonais ou anglais, et ajoutez-le depuis le menu clic droit. Il est résolu via le dictionnaire local, avec un repli vers un traducteur en ligne sans clé si nécessaire.",
  },
  "iori.feature4Title": { en: "Bundled JLPT decks", fr: "Paquets JLPT intégrés" },
  "iori.feature4Desc": {
    en: "Ready-made N5–N1 decks (8,000+ cards) you can load in a click, on top of any words you mine yourself.",
    fr: "Des paquets N5 à N1 prêts à l'emploi (plus de 8 000 cartes) que vous pouvez charger en un clic, en plus des mots que vous collectez vous-même.",
  },
  "iori.feature5Title": { en: "Local Japanese dictionary", fr: "Dictionnaire japonais local" },
  "iori.feature5Desc": {
    en: "A JMdict database compiled to SQLite, with English and French glosses and frequency-based ranking so the words that matter surface first.",
    fr: "Une base de données JMdict compilée en SQLite, avec des définitions en anglais et en français et un classement par fréquence pour que les mots importants apparaissent en premier.",
  },
  "iori.feature6Title": { en: "100% local & private", fr: "100 % local et privé" },
  "iori.feature6Desc": {
    en: "Flask backend and local storage on your own machine: bound to loopback only, no account, no cloud, no telemetry.",
    fr: "Backend Flask et stockage local sur votre propre machine : lié uniquement à la boucle locale, aucun compte, aucun cloud, aucune télémétrie.",
  },
  "iori.screenshotsH2": { en: "Screenshots", fr: "Captures d'écran" },
  // ClipFinder (projects/clipfinder.html)
  "clipfinder.title": { en: "ClipFinder · Yanis", fr: "ClipFinder · Yanis" },
  "clipfinder.eyebrow": { en: "Personal project · 2026–now", fr: "Projet personnel · 2026–aujourd'hui" },
  "clipfinder.yearRange": { en: "2026–now", fr: "2026–aujourd'hui" },
  "clipfinder.tagline": {
    en: "A stream lasts eight hours; the clip worth posting lasts thirty seconds. ClipFinder finds those seconds by reading the chat instead of watching the video, then lets the streamer cut, frame and export them as vertical shorts.",
    fr: "Un stream dure huit heures ; le clip qui mérite d'être posté dure trente secondes. ClipFinder trouve ces secondes en lisant le chat plutôt qu'en regardant la vidéo, puis laisse le streamer les couper, les cadrer et les exporter en shorts verticaux.",
  },
  "clipfinder.meta1": { en: "Desktop app + website", fr: "Application de bureau + site" },
  "clipfinder.meta2": { en: "Twitch", fr: "Twitch" },
  "clipfinder.meta3": { en: "Signal processing", fr: "Traitement du signal" },
  "clipfinder.meta4": { en: "Video editing", fr: "Montage vidéo" },
  "clipfinder.status": { en: "Beta", fr: "Bêta" },
  "clipfinder.visitButton": { en: "Try it online", fr: "L'essayer en ligne" },
  "clipfinder.p1": {
    en: "Streamers lose hours scrubbing through their own VODs to find clips for TikTok and Shorts. The video is heavy, but the chat is light, and the chat already knows where the moments are: it explodes in caps, emotes and \"LOL\" a few seconds after something happens. ClipFinder downloads only the chat (a few MB for an eight-hour stream), turns it into a reaction signal and ranks the peaks.",
    fr: "Les streamers passent des heures à parcourir leurs propres VOD pour trouver des clips pour TikTok et Shorts. La vidéo est lourde, mais le chat est léger, et le chat sait déjà où sont les moments : il explose en majuscules, en emotes et en « LOL » quelques secondes après qu'il se passe quelque chose. ClipFinder ne télécharge que le chat (quelques Mo pour un stream de huit heures), le transforme en signal de réaction et classe les pics.",
  },
  "clipfinder.p2": {
    en: "The ranking is a real pipeline, not a keyword count. Every message is scored against a vocabulary of reaction categories, the signal is compared to its own rolling baseline (median and MAD over 30 minutes) and peaks are picked with <code>scipy.find_peaks</code>. Filters then drop what only looks like a reaction: bot spam, copypasta, raids and the thank-you waves after a sub. Other signals join in when they are available: how loud the stream got, the markers the streamer placed live, Nightbot counters, and the streamer's own microphone (screams, strong words, a spoken \"clip that\").",
    fr: "Le classement est un vrai pipeline, pas un comptage de mots-clés. Chaque message est noté selon un vocabulaire de catégories de réaction, le signal est comparé à sa propre ligne de base glissante (médiane et MAD sur 30 minutes) et les pics sont détectés avec <code>scipy.find_peaks</code>. Des filtres écartent ensuite ce qui ressemble seulement à une réaction : spam de bots, copypasta, raids et vagues de remerciements après un abonnement. D'autres signaux s'ajoutent quand ils sont disponibles : le volume sonore du stream, les marqueurs posés en direct par le streamer, les compteurs Nightbot, et le micro du streamer lui-même (cris, mots forts, un « clip ça » prononcé).",
  },
  "clipfinder.p3": {
    en: "Every setting was decided by a number, never by feel. The clips viewers actually made on Twitch are the only ground truth, so a <code>bench</code> command re-ranks a labelled set of VODs and reports where each viewer clip landed. Measured against StreamLadder's ClipGPT on the same 15 VODs, ClipFinder put <strong>11 viewer clips in its top 10, against 5</strong>, with 40% less video to review.",
    fr: "Chaque réglage a été décidé par un chiffre, jamais au ressenti. Les clips que les spectateurs ont vraiment créés sur Twitch sont la seule vérité terrain : une commande <code>bench</code> reclasse un ensemble de VOD annotées et indique où chaque clip de spectateur est tombé. Face à ClipGPT de StreamLadder sur les mêmes 15 VOD, ClipFinder place <strong>11 clips de spectateurs dans son top 10, contre 5</strong>, avec 40 % de vidéo en moins à revoir.",
  },
  "clipfinder.feature1Title": { en: "Moments from the chat", fr: "Les moments, depuis le chat" },
  "clipfinder.feature1Desc": {
    en: "Paste a VOD link and get a ranked list in about a minute, each moment with the reason it ranked: the messages, the loudness, the marker.",
    fr: "Collez le lien d'une VOD et obtenez une liste classée en une minute environ, chaque moment avec la raison de son rang : les messages, le volume, le marqueur.",
  },
  "clipfinder.feature2Title": { en: "Viewer clips & markers", fr: "Clips de spectateurs et marqueurs" },
  "clipfinder.feature2Desc": {
    en: "Signed in with Twitch, the clips viewers made and the markers placed live join the list, matched to the moments the chat found.",
    fr: "Connecté à Twitch, les clips créés par les spectateurs et les marqueurs posés en direct rejoignent la liste, rapprochés des moments trouvés par le chat.",
  },
  "clipfinder.feature3Title": { en: "A 9:16 editor", fr: "Un éditeur 9:16" },
  "clipfinder.feature3Desc": {
    en: "Layouts and crops for the game and the facecam, captions, texts, images, speed ramps and a hook, with a live phone preview.",
    fr: "Mises en page et recadrages pour le jeu et la facecam, sous-titres, textes, images, changements de vitesse et accroche, avec un aperçu téléphone en direct.",
  },
  "clipfinder.feature4Title": { en: "Montages", fr: "Montages" },
  "clipfinder.feature4Desc": {
    en: "Clips from any VOD, in your order, on a multi-lane timeline with snap points, locked and muted lanes.",
    fr: "Des clips de n'importe quelle VOD, dans votre ordre, sur une timeline multipiste avec points d'accroche, pistes verrouillées et coupées.",
  },
  "clipfinder.feature5Title": { en: "Export, mp4 or DaVinci", fr: "Export, mp4 ou DaVinci" },
  "clipfinder.feature5Desc": {
    en: "A ready-to-post 9:16 mp4, or one DaVinci Resolve timeline per clip (FCPXML + subtitles) with 1080p60 sources, already framed.",
    fr: "Un mp4 9:16 prêt à poster, ou une timeline DaVinci Resolve par clip (FCPXML + sous-titres) avec des sources 1080p60, déjà cadrées.",
  },
  "clipfinder.feature6Title": { en: "Undo everything", fr: "Tout s'annule" },
  "clipfinder.feature6Desc": {
    en: "Every edit can be undone and redone, even after a reload; deleted VODs wait 30 days in a trash. Keyboard-first, from i / o to split.",
    fr: "Chaque modification s'annule et se rétablit, même après un rechargement ; les VOD supprimées attendent 30 jours dans une corbeille. Pensé pour le clavier, de i / o à la découpe.",
  },
  "clipfinder.screenshotsH2": { en: "Screenshots", fr: "Captures d'écran" },
  "clipfinder.techP": {
    en: "A Python 3.12 core (pandas, NumPy, SciPy) behind a Typer CLI and a FastAPI server. The interface is a single vanilla JavaScript page, no framework and no build step, shipped as a Windows app (PyInstaller + pywebview) that bundles ffmpeg, TwitchDownloaderCLI and a local speech-to-text model (SenseVoice via sherpa-onnx, whisper.cpp before it), so the streamer's voice never leaves their PC. The same code runs a free website on an Oracle Cloud ARM server behind Caddy, with Twitch OAuth and a daily export quota. Exports are ffmpeg filter graphs and hand-written FCPXML that DaVinci Resolve opens as timelines. About 1,700 tests, including end-to-end runs in a real Chrome with Playwright, plus ruff and strict mypy on every change.",
    fr: "Un cœur en Python 3.12 (pandas, NumPy, SciPy) derrière une CLI Typer et un serveur FastAPI. L'interface est une seule page en JavaScript natif, sans framework ni étape de build, livrée comme application Windows (PyInstaller + pywebview) qui embarque ffmpeg, TwitchDownloaderCLI et un modèle de reconnaissance vocale local (SenseVoice via sherpa-onnx, whisper.cpp avant lui) : la voix du streamer ne quitte jamais son PC. Le même code fait tourner un site gratuit sur un serveur ARM Oracle Cloud derrière Caddy, avec OAuth Twitch et un quota d'export quotidien. Les exports sont des graphes de filtres ffmpeg et du FCPXML écrit à la main, que DaVinci Resolve ouvre comme des timelines. Environ 1 700 tests, dont des tests de bout en bout dans un vrai Chrome avec Playwright, plus ruff et mypy strict à chaque modification.",
  },
  "iori.techP": {
    en: "A TypeScript Manifest&nbsp;V3 extension (Chromium and Firefox) renders the overlay in a Shadow DOM and forwards every browser event to a local Python / Flask backend. The core (the attention machine and the SM-2 engine) is written as pure, side-effect-free functions covered by a pytest suite. The dictionary is a JMdict dump built offline into SQLite, with word-frequency ranking from <code>wordfreq</code>, and unknown selections fall back to a keyless machine translator. Everything runs on one machine, over <code>127.0.0.1</code>.",
    fr: "Une extension TypeScript Manifest&nbsp;V3 (Chromium et Firefox) affiche l'incrustation dans un Shadow DOM et transmet chaque événement du navigateur à un backend Python / Flask local. Le cœur (la machine à états d'attention et le moteur SM-2) est écrit sous forme de fonctions pures, sans effets de bord, couvertes par une suite de tests pytest. Le dictionnaire est un export JMdict compilé hors ligne en SQLite, avec un classement par fréquence des mots via <code>wordfreq</code>, et les sélections inconnues se rabattent sur un traducteur automatique sans clé. Tout tourne sur une seule machine, via <code>127.0.0.1</code>.",
  },
};

// ============ Apply + persist ============
function applyTranslations(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const entry = translations[el.dataset.i18n];
    if (entry && entry[lang] != null) el.textContent = entry[lang];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const entry = translations[el.dataset.i18nHtml];
    if (entry && entry[lang] != null) el.innerHTML = entry[lang];
  });
  document.querySelectorAll("[data-i18n-href]").forEach((el) => {
    const entry = translations[el.dataset.i18nHref];
    if (entry && entry[lang] != null) el.href = entry[lang];
  });
  const titleKey = document.body.dataset.i18nTitle;
  const titleEntry = titleKey && translations[titleKey];
  if (titleEntry && titleEntry[lang]) document.title = titleEntry[lang];
}

// ============ Language toggle (mirrors the season-theme toggle) ============
const LANGS = ["en", "fr"];
const LANG_LABELS = {
  en: ["🇬🇧", "English"],
  fr: ["🇫🇷", "Français"],
};

const langToggle = document.getElementById("lang-toggle");
const langMenu = document.createElement("div");
langMenu.className = "lang-menu";
langMenu.hidden = true;
for (const lang of LANGS) {
  const option = document.createElement("button");
  option.type = "button";
  option.className = "lang-option";
  option.dataset.lang = lang;
  const [emoji, label] = LANG_LABELS[lang];
  option.innerHTML = `<span aria-hidden="true">${emoji}</span>${label}`;
  option.addEventListener("click", () => {
    saveLang(lang);
    closeLangMenu();
  });
  langMenu.appendChild(option);
}
langToggle.insertAdjacentElement("afterend", langMenu);
langToggle.setAttribute("aria-haspopup", "menu");
langToggle.setAttribute("aria-expanded", "false");

function setLang(lang) {
  document.documentElement.dataset.lang = lang;
  applyTranslations(lang);
  langToggle.setAttribute("aria-label", `Language: ${LANG_LABELS[lang][1]}. Click for next language`);
  for (const option of langMenu.children) {
    option.classList.toggle("active", option.dataset.lang === lang);
  }
}

function saveLang(lang) {
  localStorage.setItem("lang", lang);
  setLang(lang);
}

function initLang() {
  // ?lang=fr in the URL wins (CV links), and sticks for the next visit
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (LANGS.includes(fromUrl)) {
    saveLang(fromUrl);
    return;
  }
  const saved = localStorage.getItem("lang");
  setLang(LANGS.includes(saved) ? saved : "en");
}

function openLangMenu() {
  langMenu.hidden = false;
  langToggle.setAttribute("aria-expanded", "true");
}

function closeLangMenu() {
  langMenu.hidden = true;
  langToggle.setAttribute("aria-expanded", "false");
}

// click cycles to the next language, hovering 200ms opens the picker
let langOpenTimer = 0;
let langCloseTimer = 0;

langToggle.addEventListener("click", () => {
  saveLang(LANGS[(LANGS.indexOf(document.documentElement.dataset.lang) + 1) % LANGS.length]);
});

for (const el of [langToggle, langMenu]) {
  el.addEventListener("mouseenter", () => {
    clearTimeout(langCloseTimer);
    clearTimeout(langOpenTimer);
    langOpenTimer = setTimeout(openLangMenu, 200);
  });
  el.addEventListener("mouseleave", () => {
    clearTimeout(langOpenTimer);
    langCloseTimer = setTimeout(closeLangMenu, 200);
  });
}

document.addEventListener("click", (e) => {
  if (!langMenu.hidden && !langMenu.contains(e.target) && !langToggle.contains(e.target)) {
    closeLangMenu();
  }
});

initLang();
