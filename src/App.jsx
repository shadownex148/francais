// @ts-nocheck
import { useState } from "react";

const THEMES = [
  { id:"sq1", n:"Poésie · Nature · Intime", sub:"Hugo · Dorion ×3", c:"#1D9E75", bg:"#EAF3DE" },
  { id:"sq2", n:"Personnages en marge", sub:"Manon Lescaut ×3 · Quasimodo", c:"#BA7517", bg:"#FAEEDA" },
  { id:"sq3", n:"Défendre la liberté", sub:"La Boétie ×3 · Lorenzaccio", c:"#993C1D", bg:"#FAECE7" },
  { id:"sq4", n:"Jeux du cœur & parole", sub:"On ne badine pas ×3", c:"#534AB7", bg:"#EEEDFE" },
];

const FICHES = {
  sq1:[
    { text:"Hugo — «Demain, dès l'aube» (Les Contemplations, 1856)", points:[
      "Forme : 3 quatrains d'alexandrins à rimes croisées (ABAB) — 12 vers au total",
      "Contexte biographique : deuil de Léopoldine (19 ans), noyée dans la Seine le 4 sept. 1843 avec son mari",
      "Structure en 3 temps : 1er quatrain → apparent RV amoureux ; 2e → cheminement solitaire ; 3e → révélation : visite à la tombe",
      "Enjambement v.1→2 : «où blanchit la campagne, / Je partirai» — traduit la hâte du poète",
      "Rythme du v.1 : ternaire ascendant 2+2+8 → mélange de détermination et de calme",
      "«Inconnu» : Hugo est célèbre (pair de France), mais veut rester discret en ce jour de deuil",
      "«Le dos courbé» : valeur descriptive (renfermement) ET symbolique (abattement funèbre)",
      "«Le jour pour moi sera comme la nuit» : comparaison qui anéantit l'espoir du 1er quatrain",
      "Houx vert = persistance de la vie (vert en hiver) ; bruyère = amour solide — double symbolique",
      "Paradoxe central : Hugo parle à sa fille au présent comme si elle était vivante (refus de la mort absolue)",
      "Négation en v.4 sans «pas» : niveau de langue soutenu ; v.9-10 : «ni… ni» sans «ne… pas»",
      "Léopoldine a disparu le 4 sept. 1843 ; Hugo apprend sa mort par la presse (preuve de sa célébrité)",
      "Pratique spiritiste de Hugo : tenter de communiquer avec l'esprit de sa fille disparue",
    ]},
    { text:"Dorion — «Mes forêts sont de longues traînées…» (poème-ouverture)", points:[
      "Hélène Dorion : née 1958 à Québec — 1re femme vivante et 1re Québécoise au programme du bac français",
      "Mes forêts (2021) : écrit pendant le confinement Covid — forêts = métaphore intime et universelle",
      "Forme : vers libres, hétérométriques, sans ponctuation (tradition initiée par Apollinaire au début du XXe s.)",
      "5 poèmes intitulés «Mes forêts» structurent le recueil (ouverture + entre chaque section + clôture)",
      "Anaphore «mes forêts sont» : définitions poétiques successives — le poème fonctionne comme texte matriciel",
      "«Mes» (déterminant possessif) : rapport intime, subjectif et lyrique entre la poétesse et la nature",
      "Métaphore 1 : «longues traînées de temps» = souvenirs dans le ciel ; «aiguilles» = aiguilles d'horloge + pins",
      "Oppositions structurantes : terrien ↔ aérien ; concret ↔ abstrait ; intime ↔ extérieur ; percer ↔ glisser",
      "Oxymore : «voyages immobiles» ; paradoxe : «saison passée qui s'en retourne vers demain»",
      "«L'humus de chaque vie» : terreau fertile permettant de croître — image de la nature nourricière",
      "Fil de la verticalité : aiguilles → mâts → espoirs debout → «nuits très hautes» (distique final)",
      "«L'heure bleue» = crépuscule du matin ou aube — apparaît aussi dans «C'est le bruit du monde»",
      "Alliance constante du végétal/animal et de l'abstrait/humain : toute la poétique de Dorion",
    ]},
    { text:"Dorion — «Mes forêts sont un champ silencieux…»", points:[
      "Positionnement : entre la 1re section «L'écorce incertaine» et la 2e «Une chute de galets»",
      "Homophone poétique : «champ» [ʃɑ̃] s'entend comme «chant» → oxymore auditif «chant silencieux»",
      "Allitération d'ouverture en [en/an] et [s] : «un champ silencieux de naissances et de morts»",
      "1re partie (v.1-15) : forêts = images du temps — finitude («naissances / morts») + cyclicité («saisons»)",
      "«Qui se lèvent et retombent» : présent de vérité générale + préfixe «re» → permanence du cycle",
      "«Du temps qui s'immisce à travers tronc branche racine» : temps concret, palpable, pénétrant les arbres",
      "Lexique de dispersion : «disséminée», «poussière», «désarticulée» → tonalité mélancolique",
      "«Matin qui hésite à venir» : entre-deux, ni nuit ni jour — tonalité élégiaque proche de Hugo («Demain, dès l'aube»)",
      "2e partie (v.16-32) : forêts = images de la vie — faune canadienne énumérée sans déterminants",
      "Faune : lièvres, renards, insectes, coyote, ours noir, orignal (élan québécois), sittelle, geai bleu, mésange",
      "Regard ascendant : lièvres/renards (bas) → insectes scintillants → oiseaux dans le ciel",
      "Vers 22 : antithèse «un soir d'été / quand c'est l'hiver» = cycle vie/mort en un seul vers",
      "Final : «si peu me fait vivre / quand c'est plein d'étoiles / et que s'avance le poème» → poésie = raison de vivre",
      "Personnification des forêts : «dorment nues», «attendent le vent» — passage du végétal au végétatif",
    ]},
    { text:"Dorion — «C'est le bruit du monde…» (section «Une chute de galets»)", points:[
      "Seul poème de la 2e section — réparti en 9 fragments (monostiche au sizain)",
      "Sens anaphorique du présentatif «c'est» : renvoie au titre «une chute de galets» (cause/effet avec «bruit»)",
      "Distique-refrain : «c'est le bruit du monde / l'écoulement du temps» — répété 3 fois → structure musicale",
      "Chaque GN : concret («bruit», «écoulement») + abstrait («monde», «temps») = poétique de Dorion",
      "1re partie (v.1-8) : nature légèrement changeante — zoom variable : goutte → bourgeon → branche → nuage → horizon",
      "Allitérations en [g] (v.3), [b] (v.4-6) ; assonances en [on] (v.4-5-7) — musicalité subtile",
      "2e partie (v.9-15) : nature secouée (fin d'hiver) — «glaces qui se rompent», «sol craquelle»",
      "«L'heure mauve» : expression québécoise = transition jour/soir (réf. au tableau d'Ozias Leduc, 1926)",
      "3e partie (v.16-27) : 3 tercets de type haïku — brefs, saison, sentiment humain («solitude»)",
      "v.16-18 : «l'écoulement du temps / l'écoulement / du temps–» → enjambement qui mime visuellement l'écoulement",
      "Allitération imitative en [s] du dernier tercet : «silence / sous / soudain se fissure»",
      "Logique d'amuïssement global : 6 vers (v.3-8) → 4 vers (v.11-14) → refrain → tercets → monosyllabes",
      "Haïku : 3 vers brefs, observation de la nature, moment saisonnier + sentiment humain (Japon, XXe s.)",
      "Influence musicale : Philip Glass (sériel), Nils Frahm — goût de la répétition et de la variation douce",
    ]},
  ],
  sq2:[
    { text:"Manon Lescaut EL1 — La rencontre (Abbé Prévost)", points:[
      "Auteur : l'abbé Prévost — vie mouvementée ; Manon Lescaut = 7e tome des Mémoires d'un homme de qualité",
      "Contexte historique : fin du règne de Louis XIV, début de la Régence — appétit pour les plaisirs",
      "Double narrateur : Renoncour rapporte le récit que lui fait Des Grieux (DG) de sa propre vie",
      "Plaidoyer pro domo : DG plaide pour lui-même dès les premiers mots — se disculpe, se présente en victime de la fatalité",
      "Irréel du passé : «j'aurais porté toute mon innocence» → uchronie, fatalité — invite à la compassion",
      "Portrait de DG : jeune homme sage, retenu, jamais «pensé à la différence des sexes» — antithèse avec l'après",
      "«Charmante» au XVIIIe : sens fort = ensorcelé + puissamment séduit (plus que «agréable»)",
      "«Transport» = passion amoureuse violente qui met «hors de soi» (dict. de l'époque)",
      "Manon «fort jeune», seule, sans expression d'embarras = déjà plus expérimentée que DG",
      "Envoi au couvent = punition parentale pour les filles rebelles, pas vocation religieuse",
      "«Penchant au plaisir, qui s'était déjà déclaré» : annonce les malheurs futurs — prolepse dès la 1re rencontre",
      "Effet de réalisme : ville d'Amiens, diligences, hôtellerie, curiosité provinciale",
    ]},
    { text:"Manon Lescaut EL2 — Les retrouvailles à Saint-Sulpice", points:[
      "Contexte : 2 ans après leur séparation, Manon vient écouter DG brillamment prêcher à Saint-Sulpice",
      "Problématique : dramatisation des retrouvailles — tumulte des sentiments entre rebondissement et crise morale",
      "Structure : indignation de DG (l.879-884) → amour absolu (l.884-893) → méditation (l.893-899)",
      "«Perfide Manon ! Ah ! perfide ! perfide !» : cadence mineure — 3 exclamations accusatrices, brèves",
      "«Elle me répéta» : Manon avait déjà avoué sa faute — repetition + «chaudes larmes» = reconnaissance de culpabilité",
      "Passage vouvoiement → tutoiement : signe de réconciliation et retour de l'intimité",
      "Discours indirect → discours direct : montée en intensité dramatique",
      "Larmes de DG ≠ larmes de Manon : DG = choc émotionnel + amour retrouvé ; Manon = culpabilité",
      "«Je prétends mourir, si vous ne me rendez votre cœur» : amour et vie/mort indissociables",
      "Hyperboles : «mille caresses passionnées», «tous les noms que l'amour invente», «plus vives tendresses»",
      "Comparaison finale : DG comme voyageur «la nuit dans une campagne écartée» = prolepse de leur chute morale",
      "DG = narrateur + personnage : sa distance analytique le distingue de Manon (il s'observe lui-même)",
    ]},
    { text:"Manon Lescaut EL3 — La mort de Manon en Louisiane", points:[
      "Contexte : Nouvelle-Orléans — fuite après que DG a (cru) tuer le neveu du gouverneur épris de Manon",
      "Structure : abattement (projet de mourir avec Manon) → résolution (enterrer) → creusage → adieux → projet suicidaire",
      "«Plus de vingt-quatre heures la bouche attachée sur le visage et les mains» : hyperbole = désorientation traumatique",
      "CCT «plus de vingt-quatre heures» : peu crédible réalistement → valeur symbolique de l'amour absolu",
      "«La pâture des bêtes sauvages» : motivation du regain d'énergie — protéger Manon des prédateurs (résonance symbolique : hommes tout au long du roman)",
      "Rupture de l'épée : acte manqué (psychanalyse) → renonciation à la violence noble + adoption du geste plébéien",
      "«L'idole de mon cœur» : périphrase hyperbolique + blasphème catholique (Manon à la place de Dieu)",
      "«Tous mes habits» → DG se met symboliquement à nu = dépouillement absolu par amour",
      "«Le triste office» : ersatz d'enterrement chrétien — ambivalent (hommage + signe du péché de leur union)",
      "«Ce qu'elle avait porté de plus parfait et de plus aimable» : sublimation finale de Manon",
      "Registre pathétique dominant : champ lexical du corps, sacrifice, abnégation, larmes absentes mais douleur totale",
      "Final : DG allongé sur la tombe, yeux fermés, invoque le ciel → il demande à mourir",
    ]},
    { text:"Notre-Dame de Paris — La métamorphose de Quasimodo (Hugo, 1831)", points:[
      "Hugo (< 30 ans en 1831) : chef de file des romantiques — déjà auteur des Orientales et d'Hernani",
      "Contexte : Quasimodo vient d'arracher Esméralda au bourreau en criant «asile» — réfuge inviolable",
      "Portail du Jugement dernier (1220-1230) : oppose justice humaine ↔ justice divine dès la première ligne",
      "Portrait ascendant : pieds → tête → posture avec Esméralda → transformation esthétique → allégorie",
      "Pieds comparés aux «piliers romans» : allitération en [l] — allitération sonore liant Quasimodo à Notre-Dame",
      "Style roman : lignes trapues + créatures monstrueuses → résonance esthétique avec Quasimodo",
      "Antithèse centrale : «lui infime, avec la force de Dieu» ↔ «toute cette force du roi»",
      "Esméralda : «chose délicate, exquise et précieuse» — Quasimodo craint de la «briser ou faner»",
      "Double portrait : Quasimodo tout en puissance ET tout en délicatesse — tension antithétique constante",
      "Personnification maternelle : «comme eût fait la mère de cette enfant» — Quasimodo en protecteur maternel",
      "«Il était beau» : métamorphose esthétique née de l'action moralement juste (cf. sculpture médiévale)",
      "Allégorie finale : «les deux misères extrêmes de la nature [Quasimodo] et de la société [Esméralda]»",
      "COD en cascade : DG «regardait» «cette société», «cette justice», «tous ces tigres», «ces sbires»… — syntaxe mimant le déséquilibre des forces",
    ]},
  ],
  sq3:[
    { text:"La Boétie EL1 — Un tyran seul (Discours de la servitude volontaire, ~1548)", points:[
      "La Boétie (1530-1563) : écrit le Discours vers 18 ans — non publié de son vivant (prudence politique)",
      "Contexte : révolte de la gabelle en Guyenne (1548) — répression brutale par Montmorency sur ordre d'Henri II",
      "Double titre : Discours de la servitude volontaire / Contr'un",
      "Publication posthume : fragments 1574 ; intégral 1576 — récupéré par les protestants contre l'absolutisme",
      "Question centrale : pourquoi des millions obéissent-ils volontairement à «un tyran seul» ?",
      "Anaphore des «tant de» : souligne l'ampleur universelle — ce n'est pas un cas isolé",
      "3 relatives définissant le tyran : son pouvoir vient entièrement des opprimés — philosophiquement révolutionnaire",
      "«Enchantés et charmés par le nom d'un seul» : influence de Platon (tyran = démagogue charmeur, La République)",
      "3 cas distingués : servitude volontaire (scandale) / forcée excusable (Trente tyrans d'Athènes, 404 av. J.-C.) / reconnaissance méritée (bon dirigeant)",
      "Stoïcisme face à la servitude forcée : «supporter le mal patiemment, et espérer de l'avenir une meilleure fortune»",
      "«Devoirs de l'amitié» (Aristote, Éthique à Nicomaque) : fondement naturel de la loyauté légitime",
      "Doute sur l'élévation du bon dirigeant : «on l'ôte de là où il faisait bien pour le mettre là où il pourra mal faire» (corruption du pouvoir = idée platonicienne)",
      "Influence : Rousseau, révolutionnaires de 1789, anarchistes du XIXe s., Thoreau",
    ]},
    { text:"La Boétie EL2 — Cette garnison (Discours, p.65-6)", points:[
      "Anecdote historique : Cyrus perse conquiert Sardes (capitale de la Lydie) et fait prisonnier Crésus (roi très riche)",
      "Stratagème : plutôt que la force (destruire une belle ville + entretenir une armée), Cyrus établit bordels, tavernes, jeux",
      "Terme «stratagème» + «grand» crée une attente militaire — comique du contraste avec la liste de divertissements",
      "«Cette garnison» = antiphrase ironique : composée de plaisirs, non de soldats",
      "«Bordels» ouvre la liste : trivialité volontaire, effet comique, dénonce les «bas instincts»",
      "Collaboration active des Lydiens : «s'amusèrent à inventer toutes sortes de jeux» — ils participent à leur propre avilissement",
      "Étymologie fantaisiste : «ludi» (jeux latins) viendrait de «Lydiens» (Ludi) → pointe la responsabilité du peuple",
      "«Abêtir» = priver de liberté + abaissez à la condition animale (cf. image du «joug» dans EL1)",
      "«Efféminer» : dans le contexte XVIe s. = se dérober à son devoir d'homme (défendre la cité)",
      "Opposition triple adverbes : «expressément», «formellement» (Cyrus) vs «discrètement» (autres tyrans) → antithèse oratoire",
      "«Menu peuple» = populace des villes : paradoxalement soupçonneux envers son bienfaiteur, naïf envers son trompeur",
      "Comparaison finale : peuples = oiseau au piège / poisson à l'hameçon (attiré par la «friandise»)",
      "Philosophie stoïcienne-moraliste : flétrit le relâchement des mœurs qui provoque la déchéance collective",
    ]},
    { text:"La Boétie EL3 — La tyrannie est toxique (Discours, p.88-90)", points:[
      "Thèse : la tyrannie est intrinsèquement destructrice, même pour ceux qui entourent le tyran",
      "Réfutation d'une objection : les victimes du tyran ne périssent pas parce qu'elles «ont bien vécu», mais même les complices meurent",
      "Exemple 1 : Néron + Poppée — amour hyperbolisé («abandonné, tenace, acharné») → empoisonnement. Chute en 7 mots",
      "Exemple 2 : Néron + Agrippine (sa mère) — a tué son mari Claude pour faire Néron empereur → tuée par lui",
      "Ironie amère : Agrippine «aurait mérité cette punition si elle avait été infligée de n'importe qui d'autre»",
      "Exemple 3 : Claude + Messaline — triple comparatif de supériorité («plus aisé, plus simple, plus niais») → bourreauexécute Messaline",
      "Exemple 4 : Caligula menaçant sa femme adorée — «Ce beau cou sera bientôt coupé, si je le commande»",
      "Répétition de «beau/belle» en antiphrase : «cette belle caresse», «ce beau mot» → souligne l'horreur sadique",
      "Double sens de «bête» : sans sens moral (stupide) + fauve/cruel → «le peu d'esprit qu'ils ont se réveille»",
      "Conséquence : les favoris tuent le tyran par peur (Domitien/Stéphanus ; Commode ; Caracalla/Macrin)",
      "Argumentation inductive : cas concrets (4 exemples) → loi générale (tyrannie autodestructrice)",
      "Sources : historiens latins Suétone et Tacite — érudition humaniste",
      "Style : oral, persuasif, ironique, accumulation des exemples — «discours» au sens rhétorique",
    ]},
    { text:"Lorenzaccio III, 3 — Musset (1834)", points:[
      "Contexte : «mal du siècle» = désillusion libérale post-Restauration et monarchie de Juillet",
      "Musset (né 1810) : échec de La Nuit vénitienne (1830) → «spectacle dans un fauteuil» ; liaison avec George Sand",
      "Lorenzaccio = plus grand drame romantique français — Florence XVIe s. = miroir de la France de juillet",
      "Lorenzo : 2 ans de débauche partagée avec son cousin Alexandre de Médicis (tyran de Florence) pour gagner sa confiance avant le meurtre",
      "Philippe Strozzi : figure républicaine respectée, interlocuteur de Lorenzo dans cet extrait",
      "Alternative fatale : tuer Alexandre OU se suicider (Arno, empoisonnement, spectre, squelette)",
      "Anaphores successives : «veux-tu» (×3) puis «songes-tu» (×2) → ton mélodramatique, questions rhétoriques",
      "Dédoublement identitaire : Lorenzo d'autrefois (idéaliste étudiant) ↔ Lorenzo d'aujourd'hui (débauché)",
      "«Brin d'herbe» : meurtre = seul lien fragile entre les deux Lorenzo — seul acte de vertu restant",
      "«Conducteur de bœufs» : métaphore péjorative d'Alexandre (stupidité + brutalité) + passivité animale des Florentins",
      "Chiasme : «Si tu honores en moi quelque chose… c'est mon meurtre que tu honores»",
      "Critique des républicains : «lâches sans nom, qui m'accablent d'injures pour se dispenser de m'assommer»",
      "«Il faut que le monde sache un peu qui je suis, et qui il est» : renversement des apparences : Lorenzo honorable, le monde lâche",
      "Didascalie : «il frappe sa poitrine» — son corps est «un squelette» = mort-vivant, registre gothique",
    ]},
  ],
  sq4:[
    { text:"On ne badine EL1 — La leçon de Perdican (fin II, 5)", points:[
      "Musset 1834 : «spectacle dans un fauteuil» — contexte : liaison tourmentée avec George Sand",
      "Pièce non créée de son vivant : publiée dans la Revue des Deux Mondes — non jouée sur scène d'abord",
      "Fin de l'acte II, scène 5 — la plus longue scène de la pièce — après la justification de Camille",
      "Camille : veut retourner au couvent, a désigné le Christ comme «son amant» (amour éternel)",
      "Terme «nonnes» : valeur ironique et anticléricale chez Musset (vs «religieuse», terme neutre)",
      "Gradation lexicale du procès : «mensonge» → «un crime» (chuchoter des paroles de femme à une vierge)",
      "«Masque de plâtre» : rigidité + mort au monde + hypocrisie — réf. implicite à Tartuffe de Molière",
      "«Fontaine qui nous regarde tout en larmes» : nature personnifiée, sensible, en contraste avec l'insensibilité de Camille",
      "Paradoxe : Perdican félicite les nonnes qu'il attaquait, avant de conclure «le ciel n'est pas pour elles»",
      "Changement de ton : incandescence → apaisement, grâce au «cœur» de Camille qui «a battu»",
      "2e tirade : vision pessimiste de l'humanité (9 adj. pour les hommes, 5 pour les femmes) → rédemption par l'amour",
      "«Phoques les plus informes» : métaphore de l'humanité — hyperboles («sans fond», «montagnes de fange»)",
      "Rythmes ternaires : «trompé, blessé, malheureux» ; «souffert, trompé, aimé» — la souffrance n'annule pas l'amour",
      "Anti-idéalisme de Perdican : rien n'échappe à l'inconstance, ni l'amour humain ni l'amour divin",
      "«C'est moi qui ai vécu, et non pas un être factice créé par mon orgueil et mon ennui» — sens de la vie par l'amour",
    ]},
    { text:"On ne badine EL2 — La déclaration de Perdican (III, 3)", points:[
      "Contexte : Perdican a intercepté une lettre de Camille à son amie Louise révélant qu'il est «désespéré»",
      "Vengeance : Perdican invite Rosette près de la fontaine de leur enfance, sachant que Camille est cachée",
      "Rosette : sœur de lait de Camille (mère paysanne qui a allaité Camille) — naïve, brèves répliques, codes ignorés",
      "Double niveau d'énonciation omniprésent : séduire Rosette (surface) / se venger de Camille (profondeur)",
      "«À haute voix, de manière que Camille l'entende» : didascalie révélatrice — Perdican met en scène",
      "Anaphore «toi seule» + parallélisme syntaxique : mise en valeur de Rosette + blâme implicite de l'insensibilité de Camille",
      "Chaîne d'or : cadeau de prix + lien symbolique = appropriation de Rosette (Bridaine le soulignera)",
      "La bague (de Camille !) jetée dans la fontaine : valeur métonymique — effacement symbolique de Camille",
      "Description du reflet dans l'eau : couple idéal (Rosette+Perdican) → bref trouble (Camille) → retour idylle",
      "Litanie des «regarde» (×4) : Perdican organise, dirige, contrôle — il est «metteur en scène»",
      "«Il a jeté ma bague dans l'eau» (Camille, à part) : preuve qu'elle assiste, qu'elle souffre, que la bague lui appartient",
      "«Sais-tu ce que c'est que l'amour ?» : question posée à Rosette mais adressée en profondeur à Camille",
      "«Sang vermeil» (Rosette vivante) ↔ «restes d'un sang affadi» (idées religieuses qui vieillissent Camille)",
      "Rosette : «je vous aimerai comme je pourrai» → ignorance et naïveté face au lyrisme de Perdican",
      "Ironie finale : Perdican critiquait la soumission de Camille… mais instrumentalise Rosette = même violence",
    ]},
    { text:"Le Mariage de Figaro EL4 — Les jeux du cœur et de la parole (I, 9)", points:[
      "Beaumarchais : écrivain des Lumières ; Le Mariage de Figaro (1784) — critique de l'Ancien Régime",
      "Contexte : dans la chambre des futurs mariés ; Chérubin caché dans le fauteuil, le comte derrière",
      "Scène fondée sur la dissimulation, les quiproquos et les rebondissements comiques",
      "Bazile : courtisan opportuniste, spécialiste de la médisance et de la calomnie",
      "«Cherubino di amore» : imitation moqueuse transformant l'affection en déclaration amoureuse",
      "Questions insidieuses de Bazile : sous-entendus sur l'amour de Chérubin pour Suzanne",
      "Suzanne défend Chérubin : «Quelle imposture !», «méchant homme», puis «bien scélérat»",
      "Progression de la colère de Suzanne face aux rumeurs et aux accusations",
      "Amour supposé pour la comtesse : «il la regarde avec des yeux !» → pléonasme chargé de sous-entendus",
      "Argument d'autorité : «tout le monde en parle» → procédé calomnieux fondé sur la rumeur",
      "Irruption soudaine du comte : «Comment, tout le monde en parle !»",
      "Comte jaloux de l'honneur de sa femme mais lui-même séducteur de Suzanne : hypocrisie",
      "Suzanne refuse le fauteuil pour protéger Chérubin caché dessous",
      "Bazile bat en retraite : ses accusations deviennent un simple «badinage»",
      "Portrait satirique du courtisan : flatterie, opportunisme, absence de principes",
      "Le comte veut chasser Chérubin malgré l'absence de preuves",
      "Suzanne dénonce l'intrusion du comte dans sa chambre : défense de l'intimité féminine",
      "Chérubin qualifié de «petit libertin» après sa découverte chez Fanchette",
      "Réplique de Suzanne : «Où monseigneur avait sans doute affaire aussi ?» → renvoi ironique au libertinage du comte",
      "Le comte s'amuse de l'accusation : contradiction entre sa morale et ses actes",
      "Long récit de la découverte de Chérubin chez Fanchette",
      "Passage du passé au présent de narration : récit plus vivant et théâtral",
      "Théâtre dans le théâtre : le comte rejoue sa propre enquête",
      "Geste de soulever la robe du fauteuil reproduit la scène passée et révèle Chérubin",
      "Effet comique de répétition : le comte se fait piéger par sa propre mise en scène",
      "Chérubin apparaît comme un double amoureux du comte, rival involontaire",
      "Conclusion : critique d'un aristocrate hypocrite, autoritaire et jaloux dans une société inégalitaire"
      ]},
  ],
};

const QUESTIONS = {
  sq1:[
    ["De quelle forme est composé «Demain, dès l'aube» de Victor Hugo ?",["3 sonnets","3 quatrains d'alexandrins à rimes croisées","3 tercets de décasyllabes","2 quintils et un sizain"],1],
    ["À qui Victor Hugo s'adresse-t-il secrètement dans «Demain, dès l'aube» ?",["À George Sand","À sa mère Sophie Trébuchet","À sa fille Léopoldine, morte noyée","À sa femme Adèle"],2],
    ["Dans quel recueil est paru «Demain, dès l'aube» ?",["Les Orientales","Les Feuilles d'automne","Les Contemplations (1856)","La Légende des siècles"],2],
    ["Comment Léopoldine Hugo est-elle morte ?",["D'une maladie","Dans un incendie","Noyée dans la Seine avec son mari, qui tentait de la sauver","En accouchant"],2],
    ["Quelle est la «révélation» du dernier quatrain de «Demain, dès l'aube» ?",["Hugo retrouve sa bien-aimée","Le poète visite la tombe de sa fille","Hugo renonce à son voyage","Le poète avoue sa tristesse"],1],
    ["Que symbolise le «houx vert» dans le dernier vers du poème ?",["La mort froide et irrémédiable","La persistance de la vie (vert en hiver) et l'espérance chrétienne","La froideur du deuil","L'automne et la chute des feuilles"],1],
    ["Qu'est-ce qu'un enjambement — illustré par le v.1 de Hugo ?",["Une rime riche entre deux strophes","Le débordement d'une phrase d'un vers à l'autre (rejet de «Je partirai»)","Une strophe sans rime","Une répétition sonore"],1],
    ["Quelle est la signification de «inconnu» appliqué à Hugo dans le 2e quatrain ?",["Hugo a perdu sa célébrité littéraire","Hugo est perdu géographiquement","Hugo veut rester discret malgré sa renommée de pair de France","Hugo ignore où se trouve la tombe"],1],
    ["En quelle année est née Hélène Dorion ?",["1945","1958","1972","1980"],1],
    ["Quel événement a conduit Hélène Dorion à écrire le recueil Mes forêts ?",["Un voyage en Forêt-Noire","La mort de son père","Le confinement dû au Covid-19 (recueil de 2021)","Un incendie de forêt québécoise"],2],
    ["Quelle tradition poétique explique l'absence de ponctuation dans Mes forêts ?",["La tradition symboliste de Mallarmé","La tradition initiée par Apollinaire au début du XXe siècle","La tradition du haïku japonais","La tradition des calligrammes"],1],
    ["Qu'est-ce que des vers «hétérométriques» ?",["Des vers qui riment tous entre eux","Des vers sans ponctuation","Des vers de différentes longueurs et mesures","Des vers uniquement féminins"],2],
    ["Quel homophone (son identique) crée un oxymore dans «un champ silencieux» ?",["«champ» s'entend comme «temps» : contradiction absurde","«champ» s'entend comme «chant» : créant un «chant silencieux»","«silencieux» évoque le bruit par contraste","«champ» rime avec «étang» : image naturelle"],1],
    ["Quel animal québécois emblématique est cité dans «Mes forêts sont un champ silencieux» ?",["Le castor","L'orignal (mot québécois = variété d'élan)","Le bison d'Amérique","Le loup gris"],1],
    ["Que désigne «l'heure mauve» dans «C'est le bruit du monde» ?",["L'aurore boréale canadienne","La pleine lune québécoise d'hiver","Le moment de transition entre le jour et le soir (expression québécoise, tableau d'Ozias Leduc 1926)","Une couleur de fleur boréale"],2],
    ["En quoi les tercets de «C'est le bruit du monde» (v.19-27) ressemblent-ils à des haïkus ?",["Ils ont exactement 5-7-5 syllabes","Ils sont écrits en japonais traduit","Brefs, ancrés dans la nature et une saison, associés à un sentiment humain","Ils ne contiennent que des noms"],2],
    ["Quelle logique formelle d'ensemble structure «C'est le bruit du monde» ?",["Une gradation vers plus de bruit","Un amuïssement progressif : strophes de plus en plus courtes et ténues","Une alternance régulière vers courts / vers longs","Un retour graduel au discours direct"],1],
    ["Quel est l'effet visuel et sonore de la répétition «l'écoulement du temps / l'écoulement / du temps–» (v.16-18) ?",["Elle crée un effet comique de bégaiement","Elle donne à voir et entendre l'écoulement du temps — enjambement mimétique","Elle alourdit le style de façon involontaire","Elle introduit une hésitation du poète sur le sens du temps"],1],
    ["Quelle est la figure centrale qui structure «Mes forêts sont de longues traînées…» ?",["La métaphore filée et l'anaphore de «mes forêts sont»","La personnification de la lune canadienne","L'apostrophe directe au lecteur","L'hyperbole de la tempête boréale"],0],
    ["Dans «Demain, dès l'aube», que traduit le rythme ternaire 2+2+8 du premier vers ?",["La lenteur du deuil en marche","Un mélange de détermination du poète et de calme de l'environnement","La gaîté du départ printanier","La longueur du trajet à parcourir"],1],
    ["Qu'est-ce que Dorion qualifie de «voyages immobiles» dans son poème d'ouverture ?",["Les rêves de nuit immobile","Les mâts — figure d'oxymore (voyage implique déplacement)","Les nuages bloqués dans le ciel","Les montagnes immenses"],1],
    ["Qu'est-ce que le déterminant possessif «mes» dans «mes forêts» indique selon le cours ?",["Dorion possède des forêts légalement au Québec","Un rapport intime, subjectif et lyrique entre la poétesse et la nature","Une distance ironique par rapport à la nature","Une revendication politique écologiste"],1],
    ["Quel est le paradoxe temporel de «la saison déjà passée qui s'en retourne vers demain» ?",["Une erreur de logique du poète","Une conception cyclique (non linéaire) du temps : ce qui fut peut revenir","Une image de l'oubli total","Une métaphore du voyage vers l'inconnu"],1],
    ["Dans «Demain, dès l'aube», quelle comparaison «anéantit» l'espoir lumineux du 1er quatrain ?",["«J'irai par la forêt, j'irai par la montagne»","«le jour pour moi sera comme la nuit»","«le dos courbé, les mains croisées»","«à l'heure où blanchit la campagne»"],1],
    ["Quelle est la première qualité stylistique de la poésie de Dorion selon le cours ?",["La violence des images et des ruptures","L'écriture de la concision, entremêlant concret et abstrait","La longueur des poèmes épiques","La rime riche et régulière"],1],
  ],
  sq2:[
    ["Qui est l'auteur de Manon Lescaut ?",["Stendhal","L'abbé Prévost","Marivaux","Choderlos de Laclos"],1],
    ["Qu'est-ce que le «plaidoyer pro domo» dans Manon Lescaut ?",["Un discours en latin prononcé au tribunal","Plaider pour soi-même, se défendre — DG se présente en victime","Un éloge funèbre de Manon","Un réquisitoire contre les parents de Manon"],1],
    ["Comment s'appelle le meilleur ami de Des Grieux ?",["Lescaut (frère de Manon)","Renoncour (le narrateur-cadre)","Tiberge","Blazius"],2],
    ["Pourquoi Manon est-elle envoyée au couvent dans l'EL1 ?",["Par vocation religieuse sincère","Pour arrêter son «penchant au plaisir» jugé excessif par ses parents","Par punition après un meurtre","Pour fuir un mariage arrangé"],1],
    ["Que signifie «transport» au XVIIIe siècle dans le contexte amoureux ?",["Un voyage en diligence depuis Paris","La passion amoureuse violente qui met «hors de soi»","Un remède médical contre la fièvre","Un convoi militaire de prisonniers"],1],
    ["Où se déroule la scène des retrouvailles de Des Grieux et Manon dans l'EL2 ?",["À la Bastille","Dans le port de Calais","À Saint-Sulpice, après une prédication de DG","Au Palais-Royal"],2],
    ["Qu'exprime le passage du vouvoiement au tutoiement dans l'EL2 ?",["La colère croissante de Des Grieux","La réconciliation et le retour de l'intimité amoureuse","Le respect formel maintenu malgré l'émotion","L'ironie de Des Grieux envers Manon"],1],
    ["Quelle comparaison finale clôt le récit de DG dans l'EL2 et que préfigure-t-elle ?",["L'amant comblé dans un jardin : sérénité retrouvée","Le voyageur perdu la nuit dans une campagne écartée : prolepse de leur chute morale","Le soldat victorieux revenant au foyer","Le naufragé sauvé in extremis"],1],
    ["Dans l'EL3, où Manon meurt-elle ?",["À Paris, lors d'une évasion","En Louisiane, dans le désert américain, lors de leur fuite","En mer, sur le bateau vers l'Amérique","Dans la prison de Saint-Lazare"],1],
    ["Qu'est-ce que la périphrase «l'idole de mon cœur» signifie d'un point de vue catholique (EL3) ?",["Un compliment romantique banal du XVIIIe s.","Un blasphème : DG place Manon à la place réservée à Dieu seul","Une image de fidélité conjugale canonique","Une référence à l'Antiquité classique"],1],
    ["Pourquoi la rupture de l'épée par DG (EL3) est-elle interprétée comme un «acte manqué» ?",["Elle est trop lourde pour creuser le sable","Acte manqué : renonciation symbolique à la violence et au statut noble","Il est fou de douleur et ne sait pas ce qu'il fait","Pour en faire une croix sur la tombe"],1],
    ["Qu'est-ce qu'une «prolepse» narrative ? Illustrez par Manon Lescaut.",["Un retour en arrière (analepse)","Une annonce d'événements futurs — ex. le «penchant au plaisir» de Manon annoncé dès EL1","Une digression philosophique du narrateur","Un résumé d'épisodes passés"],1],
    ["Qu'est-ce que le «triste office» que DG accomplit pour Manon dans l'EL3 ?",["Un duel contre le neveu du gouverneur","Un enterrement de fortune, ersatz de rite chrétien dans le désert","Une prière collective des colons","Un mariage posthume symbolique"],1],
    ["En quelle année Victor Hugo publie-t-il Notre-Dame de Paris ?",["1815","1831","1845","1862"],1],
    ["Quel portail de la cathédrale Quasimodo s'arrête-t-il sous, et quelle signification symbolique ?",["Le portail de la Vierge : protection divine","Le portail du Jugement dernier (1220-1230) : oppose justice humaine et divine","Le portail Saint-Denis : martyre et résurrection","Le portail du Couronnement : légitimité royale"],1],
    ["Que représente le style «roman» en architecture, selon le cours sur Quasimodo ?",["Des lignes élancées et légères, propres au gothique","Des lignes trapues et une ornementation de créatures monstrueuses — résonance avec Quasimodo","Des colonnes grecques et des frontons classiques","Un style sobre dépourvu d'ornement"],1],
    ["Que signifie la phrase «lui infime, avec la force de Dieu» ?",["Quasimodo reconnaît sa faiblesse physique","La petitesse sociale de Quasimodo est transcendée par la puissance divine qui l'anime","Quasimodo est un faux héros, en réalité faible","Quasimodo se croit à tort l'instrument de Dieu"],1],
    ["Qu'est-ce que l'«allégorie» finale dans le texte sur Quasimodo ?",["Quasimodo = la justice, Esméralda = l'innocence","Quasimodo = misère de la nature ; Esméralda = misère de la société — représentation d'idées abstraites","Quasimodo = Dieu, Esméralda = l'humanité pécheresse","Quasimodo = le passé médiéval, Esméralda = l'avenir moderne"],1],
    ["Que symbolise la «chaîne d'or» que Perdican pose autour du cou de Rosette (SQ4/EL2) ?",["Une demande en mariage officielle","Un lien symbolique : appropriation de Rosette, cadeau de prix","Un simple cadeau anodin de réconciliation","La fortune de la famille Perdican"],1],
    ["Qu'est-ce que la comparaison de Quasimodo à «la mère de cette enfant» révèle ?",["Quasimodo est la vraie mère biologique d'Esméralda","Un sentiment maternel de protection et de tendresse qui transcende sa monstruosité","Une relation sentimentale romantique","Une adoption légale par les autorités de l'église"],1],
    ["Dans Manon Lescaut EL1, pourquoi DG et Tiberge suivent-ils le coche d'Arras ?",["Pour retrouver un ami commun dans les passagers","Par simple curiosité — l'arrivée d'une diligence est un événement en province","Sur ordre de leur professeur de philosophie","Pour fuir la ville avant leur départ"],1],
    ["Que signifie «charmante» au XVIIIe siècle dans l'EL1 de Manon ?",["Agréable et douce de caractère","Ensorcelé + puissamment séduit : sens bien plus fort qu'aujourd'hui","Drôle et spirituelle","Vertueuse et pieuse"],1],
    ["Dans l'EL2, pourquoi les larmes de DG sont-elles différentes de celles de Manon ?",["DG pleure par calcul, Manon par sincérité absolue","Manon = reconnaissance de sa culpabilité ; DG = choc émotionnel + retour de l'amour","Les deux pleurent pour les mêmes raisons de séparation","DG ne verse pas de vraies larmes"],1],
    ["Quelle est la valeur de la «négation exceptive» dans «Je n'y répondais encore qu'avec langueur» (EL2) ?",["DG refuse totalement de répondre à Manon","DG répond très peu — contraste avec l'exubérance de Manon, souligne sa stupéfaction","DG répond normalement mais est indifférent","DG répond avec une colère froide"],1],
    ["Dans l'EL3, qu'est-ce que DG enveloppe le corps de Manon «de tous ses habits» ?",["Pour la réchauffer au cas où elle survivrait","Pour empêcher le sable de la toucher — dépouillement symbolique total par amour","Par pudeur et décence chrétienne","Parce qu'il fait très froid la nuit dans le désert"],1],
  ],
  sq3:[
    ["Quand La Boétie a-t-il écrit le Discours de la servitude volontaire ?",["À 30 ans, lors de ses études de droit à Paris","Vers ses 18 ans (~1548), après la révolte de la gabelle","À 45 ans, comme conseiller du roi","Après sa rencontre avec Montaigne en 1558"],1],
    ["Quel est l'autre titre du Discours de la servitude volontaire ?",["Contre le prince","Contr'un","Pour la liberté du peuple","Le Discours du peuple"],1],
    ["Quand le Discours est-il publié pour la première fois (en fragments) ?",["1548, du vivant de l'auteur","1574, à titre posthume","1600, par les jésuites","1789, par les révolutionnaires"],1],
    ["Quelle est la question centrale du Discours de La Boétie ?",["Comment renverser un tyran par la force des armes ?","Pourquoi des millions obéissent-ils volontairement à un seul tyran ?","Quel est le meilleur gouvernement pour un peuple ?","Comment devenir roi légitime aux yeux du peuple ?"],1],
    ["Qu'est-ce que l'anaphore des «tant de» (hommes, bourgs, villes, nations) souligne ?",["La richesse accumulée par le tyran","L'ampleur universelle et non isolée du phénomène de la servitude","La faiblesse militaire de chaque groupe","La diversité géographique de l'empire"],1],
    ["À quoi La Boétie compare-t-il l'emprise du tyran sur le peuple ?",["À une force militaire supérieure et inévitable","À un enchantement magique : le peuple est «enchant[é] et charm[é] par le nom d'un seul»","À un héritage transmis naturellement de père en fils","À la volonté divine légitimant le pouvoir"],1],
    ["Quel exemple historique La Boétie cite-t-il pour la servitude FORCÉE (donc excusable) ?",["Sparte et les Hilotes","La cité d'Athènes sous les Trente tyrans (imposés par Sparte, 404 av. J.-C.)","Rome sous César","Carthage sous Hannibal le conquérant"],1],
    ["Quel philosophe grec inspire la réflexion sur les «devoirs de l'amitié» (EL1) ?",["Platon (La République)","Aristote (Éthique à Nicomaque)","Socrate (dialogues de Platon)","Épicure (le plaisir modéré)"],1],
    ["Quel est le «stratagème» de Cyrus pour soumettre les Lydiens révoltés (EL2) ?",["Une armée de mercenaires assiégeant Sardes","L'établissement de bordels, tavernes et jeux publics obligatoires","Un impôt écrasant vidant le trésor local","Une conversion forcée à la religion perse"],1],
    ["Qu'est-ce que l'antiphrase «cette garnison» (EL2) désigne ironiquement ?",["L'armée de Cyrus stationnée à Sardes","Les divertissements (bordels, tavernes, jeux) = vraie garnison du tyran","Les espions du roi en mission","La garde royale lydienne"],1],
    ["Quelle étymologie fantaisiste La Boétie propose-t-il sur les «ludi» (EL2) ?",["«Ludi» vient du grec «ludikos» (ludique)","«Ludi» (jeux en latin) viendrait de «Lydiens» / «Lydie» — jeux inventés par ce peuple","«Ludi» vient de «lux» (lumière, spectacle)","«Ludi» est d'origine étrusque sans rapport"],0],
    ["Quelle comparaison animale La Boétie utilise-t-il pour les peuples qui acceptent la servitude (EL2) ?",["Un arbre déraciné par la tempête","Un oiseau au piège ou un poisson à l'hameçon attiré par la «friandise»","Un soldat qui rend les armes après la défaite","Un enfant qui obéit craintivement à ses parents"],1],
    ["Quelle est la thèse centrale de l'EL3 ?",["Les tyrans sont souvent de bons gouvernants au fond","Même l'amour le plus intense ne protège pas de la cruauté tyrannique","Les favoris du tyran sont les seuls à être épargnés","La tyrannie est nécessaire à l'ordre social"],1],
    ["Quel couple illustre le premier exemple de l'EL3 ?",["Claude et Messaline (l'empotée)","Caligula et sa femme (la menace)","Néron et Poppée (amour hyperbolisé → empoisonnement)","Domitien et Domitia (la trahison)"],2],
    ["Quel est le double sens de «bête» appliqué aux tyrans dans l'EL3 ?",["Laid physiquement et cruel socialement","Sans sens moral (stupide) ET fauve/cruel — les deux acceptions",  "Mauvais stratège militaire ET vantard inutile","Paresseux ET avare de leur trésor"],1],
    ["Quels historiens latins La Boétie cite-t-il implicitement dans l'EL3 ?",["Tite-Live et Jules César","Suétone et Tacite (sources sur les empereurs romains)","Cicéron et Salluste (l'époque républicaine)","Virgile et Horace (poètes augustéens)"],1],
    ["En quelle année Musset publie-t-il Lorenzaccio ?",["1830, au moment des Trois Glorieuses","1834, durant sa liaison avec George Sand","1838, après leur rupture","1857, année de sa mort"],1],
    ["Qu'est-ce que le «mal du siècle» tel que Musset le définit ?",["La tuberculose qui frappe les artistes romantiques","La désillusion des jeunes libéraux après la Restauration et la monarchie de Juillet décevante","La perte de la foi religieuse après la Révolution","Les traumatismes des guerres napoléoniennes"],1],
    ["Quelle est l'alternative fatale que Lorenzo présente à Philippe Strozzi dans la tirade ?",["Fuir Florence ou rester et se battre","Tuer le duc Alexandre ou se suicider (Arno, empoisonnement)","Rejoindre les républicains ou trahir la cause","Aimer pleinement ou haïr absolument"],1],
    ["Que représente le «brin d'herbe» dans la métaphore de Lorenzo ?",["L'espoir de la liberté pour la République florentine","Le projet de tuer Alexandre : seul lien fragile avec son idéalisme passé","L'amour perdu de sa jeunesse étudiante","La chance unique de fuir Florence sain et sauf"],1],
    ["Que reproche Lorenzo aux républicains comme Philippe Strozzi dans la tirade ?",["Leur couardise : ils accusent par les mots sans jamais agir physiquement","Leur complicité secrète avec Alexandre","Leur exil volontaire hors de Florence","Leur richesse excessive qui les rend passifs"],0],
    ["Que désigne le «conducteur de bœufs» dans la tirade de Lorenzo ?",["Un paysan allié républicain de Lorenzo","Alexandre : métaphore de sa stupidité, brutalité + passivité animale des Florentins","Un espion infiltré à la cour du duc","Lorenzo lui-même dans sa période de débauche"],1],
    ["Quel est le chiasme relevé dans la tirade de Lorenzo concernant Philippe Strozzi ?",["«tuer Alexandre / Alexandre tuer» — inversion verbe-nom","«Si tu honores en moi quelque chose… c'est mon meurtre que tu honores»","«Florence libre / libre Florence»","«j'aime Camille / Camille m'aime»"],1],
    ["Quel est le «dédoublement identitaire» au cœur de la tirade de Lorenzaccio ?",["Lorenzo prétend être un autre pour tromper Alexandre","Lorenzo d'autrefois (idéaliste étudiant) ↔ Lorenzo d'aujourd'hui (débauché corrompu)","Lorenzo se divise entre homme et fantôme (gothique)","Lorenzo = assassin politique / Lorenzo = victime naïve"],1],
    ["Que signifie la didascalie «il frappe sa poitrine» dans la tirade de Lorenzo ?",["Il se punit physiquement de ses péchés","Il dramatise le moment : se qualifie de «squelette» — il est mort au monde, mort-vivant","Il exprime sa colère vis-à-vis de Philippe","Il cherche à intimider physiquement Strozzi"],1],
    ["Quelle métaphore désigne la période de corruption de Lorenzo passée auprès d'Alexandre ?",["Un verre de vin bu jusqu'à la lie","«Glisser depuis deux ans sur un mur taillé à pic» — risque permanent de chute morale","Une noyade dans l'Arno","Un masque collé à jamais sur le visage"],1],
  ],
  sq4:[
    ["Qu'est-ce qu'un «spectacle dans un fauteuil» selon Musset ?",["Un opéra conçu pour être lu","Une pièce conçue pour être lue et non créée sur scène","Un monologue philosophique","Un conte lu à voix haute par un comédien"],1],
    ["Quel échec théâtral a poussé Musset à écrire des pièces «dans un fauteuil» ?",["Ruy Blas, de Victor Hugo","La Nuit vénitienne (fiasco en 1830)","On ne badine pas avec l'amour","Fantasio"],1],
    ["Pourquoi Camille refuse-t-elle d'épouser Perdican dans la pièce ?",["Elle est secrètement amoureuse de quelqu'un d'autre","Elle veut retourner au couvent et aimer le Christ, moins inconstant que les hommes","Perdican est trop pauvre pour la famille","Leurs familles respectives s'y opposent"],1],
    ["Qu'est-ce que «l'anticléricalisme» de Musset dans On ne badine ?",["Sa dévotion intense à l'Église catholique","Son hostilité au clergé et à la religion institutionnelle","Sa neutralité philosophique sur la religion","Sa conversion au protestantisme"],1],
    ["Que symbolise le «masque de plâtre» dans la 1re tirade de Perdican ?",["La timidité naturelle de Camille avec les hommes","L'enseignement religieux rigide et hypocrite : mort au monde, impossibilité du contact charnel","La beauté froide de Camille admirée par tous","L'éloignement de dix ans loin de Paris"],1],
    ["Quel est le paradoxe final de la 1re tirade de Perdican ?",["Il fond en larmes pour Camille en secret","Il finit par féliciter les nonnes qu'il attaquait, avant de conclure «le ciel n'est pas pour elles»","Il accepte finalement que Camille reparte sans regret","Il propose un duel à l'homme qui a influencé Camille"],1],
    ["Qu'est-ce que le «mensonge de l'amour divin» selon Perdican ?",["Dieu est une invention des prêtres","L'amour de Dieu est aussi inconstant et décevant que l'amour humain — il n'y a pas de supériorité","L'amour divin est supérieur et mérite le sacrifice total","Les nonnes mentent délibérément à Camille sur Dieu"],1],
    ["Comment s'appelle la paysanne dont Perdican se déclare amoureux à l'acte III ?",["Louise","Rosette","Suzette","Marguerite"],1],
    ["Qu'est-ce qu'une «sœur de lait» dans le contexte du XIXe siècle ?",["Une religieuse du couvent","La fille dont la mère a allaité un autre enfant de famille noble — ici Rosette est la sœur de lait de Camille","Une cousine germaine par le sang","Une amie d'enfance très proche"],1],
    ["Pourquoi Perdican organise-t-il la scène avec Rosette près de la fontaine (EL2) ?",["Pour la demander sincèrement en mariage","Pour se venger de Camille qui l'avait décrit comme désespéré dans sa lettre à Louise","Pour oublier définitivement Camille dans la nature","Pour rendre jaloux le frère de Camille"],1],
    ["Que représente la bague que Perdican jette dans la fontaine ?",["Sa fidélité absolue à Rosette","Camille, dont il se débarrasse symboliquement — valeur métonymique","L'anneau familial des Perdican","Son rejet définitif de la société nobiliaire"],1],
    ["Que révèle la réplique de Camille «il a jeté ma bague dans l'eau» (à part) ?",["Camille se réjouit intérieurement","Camille assiste cachée à la scène : la bague lui appartient, elle souffre","La bague n'avait aucune valeur sentimentale","Camille confirme son indifférence totale"],1],
    ["Quelle est la «litanie des quatre regarde» dans la tirade de Perdican (EL2) ?",["Un aveu de tendresse sincère envers Rosette","La mise en scène contrôlée par Perdican, sachant que Camille regarde depuis sa cachette","Une prière adressée à la nature et à l'eau","Un signe de sa confusion mentale après la rupture"],1],
    ["Qu'est-ce que l'opposition «sang vermeil» / «sang affadi» désigne dans l'EL2 ?",["La jeunesse physique de Rosette vs la vieillesse de Camille","Rosette (vivante, non corrompée) vs Camille (vieillie intérieurement par les idées religieuses)","Deux races de noblesse d'origine différente","La santé vs la maladie chronique"],1],
    ["Comment Rosette répond-elle aux serments enflammés de Perdican à la fin de l'EL2 ?",["Avec un enthousiasme et une passion égaux aux siens","«je vous aimerai comme je pourrai» : ignorance et naïveté face au lyrisme savant de Perdican","En refusant catégoriquement sa déclaration","En lui disant qu'elle l'aime depuis longtemps"],1],
    ["En quoi Perdican est-il un «metteur en scène libertin» selon le cours ?",["Il met en scène des pièces de théâtre dans le salon","Il contrôle la parole et les cœurs, instrumentalise Rosette, se venge de Camille — tout est calculé","Il écrit des textes libertins pour la Revue des Deux Mondes","Il séduit toutes les femmes du village avec sa renommée"],1],
    ["Quelle ironie le cours pointe-t-il sur Perdican à la fin de l'EL2 ?",["Il aime finalement les nonnes du couvent","Lui qui critiquait la soumission de Camille au discours religieux, il n'aime pas l'autonomie de Rosette qu'il instrumentalise","Il avoue ne jamais avoir vraiment aimé Camille","Il révèle en public sa vraie nature hypocrite"],1],
    ["Quelle figure de style est «le monde n'est qu'un égout sans fond» dans la 2e tirade de Perdican (EL1) ?",["Une métaphore filée : le monde assimilé à un égout","Une antithèse entre la beauté du monde et sa laideur","Une hyperbole seule, sans métaphore","Une comparaison introduite par «comme»"],0],
    ["Que signifie «factice» dans «un être factice créé par mon orgueil et mon ennui» (Perdican) ?",["Artificiel, non authentique, construit par les illusions orgueilleuses — opposé à «vécu»","Fabriqué en usine de façon mécanique","Lâche et peureux face à l'existence","Pieux et dévot à l'excès"],0],
    ["À quelle pièce de Molière le «masque de plâtre» fait-il référence implicitement selon le cours ?",["L'Avare — Harpagon et sa cassette","Le Misanthrope — l'honnêteté contre l'hypocrisie","Tartuffe : les dévots fondent leur contrôle social sur une renonciation au monde","Dom Juan — la séduction libertine"],2],
    ["Qu'exprime le paradoxe de la fin de la 2e tirade : «Mais il y a au monde une chose sainte et sublime…» ?",["Que Dieu existe malgré tout","Que l'amour humain imparfait est la seule chose qui donne sens à la vie — rédemption par l'amour","Que le couvent est la meilleure solution pour Camille","Que Perdican se convertit à la foi de Camille"],1],
    ["Pourquoi la 2e tirade de Perdican choque-t-elle à l'époque romantique (1834) ?",["Elle est trop longue et répétitive","Elle fait de l'amour humain ce qui donne sens à la vie — rôle que le discours religieux réserve à l'amour de Dieu","Elle est trop simple et naïve","Elle copie Rousseau sans le citer"],1],
    ["Quel est le sens de «l'amour humain» défendu par Perdican contre «l'amour divin» ?",["L'amour physique et charnel uniquement","Un amour imparfait mais authentique : «j'ai souffert souvent, je me suis trompé, mais j'ai aimé. C'est moi qui ai vécu»","L'amour en dehors du mariage et de toute institution","L'amour maternel et fraternel, naturel"],1],
    ["Que signifie le «contre-prêche» de Perdican selon le cours (EL1) ?",["Un discours qui s'oppose frontalement et brutalement au religieux","Un discours qui reprend les formes et le lexique du sermon religieux pour les retourner contre les nonnes","Une satire comique de la prédication","Un pamphlet politique anticlérical"],1],
    ["Qu'est-ce que «la fontaine qui nous regarde tout en larmes» illustre dans la 1re tirade (EL1) ?",["La fontaine déborde à cause de la pluie récente","La nature personnifiée et hypersensible, en contraste avec l'insensibilité de Camille à leur enfance commune","La tristesse de Perdican qui se projette dans la nature","Un symbole de pureté et de fidélité"],0],
  ],
};
const BIOS = {
  sq1: [
    {
      name: "Victor Hugo",
      bio: [
        "1802-1885, figure centrale du romantisme français et immense poète, romancier et dramaturge",
        "Chef de file du mouvement romantique avec Hernani (1830), qui rompt avec les règles classiques",
        "Œuvres majeures : Les Contemplations (poésie intime), Les Misérables (roman social), Notre-Dame de Paris",
        "Engagement politique fort : député, opposant à Napoléon III, exilé de 1851 à 1870 (Jersey, Guernesey)",
        "Sa poésie mêle lyrisme personnel (deuil de sa fille Léopoldine) et réflexion sur Dieu, la mort et le temps",
        "Dans «Demain, dès l’aube», il exprime un deuil absolu, silencieux et sacré"
      ]
    },
    {
      name: "Hélène Dorion",
      bio: [
        "Née en 1958 au Québec, poétesse contemporaine majeure",
        "Première femme vivante et première autrice québécoise au programme du bac français",
        "Son œuvre explore la relation entre nature, mémoire, temps et intériorité",
        "Mes forêts (2021) a été écrit dans le contexte du confinement lié au Covid-19",
        "Son écriture est très moderne : vers libres, absence de ponctuation, images métaphoriques",
        "Elle conçoit la forêt comme un espace symbolique : mémoire, corps, temps et vivant entremêlés"
      ]
    }
  ],

  sq2: [
    {
      name: "Abbé Prévost",
      bio: [
        "1697-1763, écrivain du XVIIIe siècle et religieux instable (entrées et sorties du clergé)",
        "Auteur de Manon Lescaut (1731), roman majeur du préromantisme",
        "Il s’intéresse aux passions humaines : amour, désir, addiction, fatalité",
        "Structure originale du roman : récit enchâssé (Renoncour raconte Des Grieux)",
        "Manon Lescaut explore la tension entre amour absolu et déchéance morale",
        "Vision pessimiste : l’amour est irrésistible mais conduit à la perte"
      ]
    },
    {
      name: "Victor Hugo",
      bio: [
        "Auteur de Notre-Dame de Paris (1831), roman historique du romantisme",
        "Défend la préservation du patrimoine architectural médiéval",
        "Oppose les marginaux (Quasimodo, Esméralda) à la société injuste",
        "Écriture romantique : exaltation des sentiments et des contrastes extrêmes",
        "Quasimodo devient symbole de la beauté morale contre la laideur physique",
        "Hugo mêle récit, réflexion sociale et dimension philosophique"
      ]
    }
  ],

  sq3: [
    {
      name: "La Boétie",
      bio: [
        "1530-1563, humaniste de la Renaissance, ami proche de Montaigne",
        "Auteur du Discours de la servitude volontaire écrit vers 18 ans",
        "Texte philosophique majeur sur la question de la liberté et de l’obéissance",
        "Thèse centrale : le pouvoir du tyran existe uniquement grâce au consentement du peuple",
        "Influencé par les auteurs antiques (Platon, Aristote) et la pensée humaniste",
        "Texte récupéré plus tard par les mouvements politiques révolutionnaires et libertaires"
      ]
    },
    {
      name: "Alfred de Musset",
      bio: [
        "1810-1857, poète et dramaturge romantique du XIXe siècle",
        "Représentant du « mal du siècle » : désillusion des jeunes après la Révolution et l’Empire",
        "Liaison célèbre avec George Sand, marquée par passion et rupture",
        "Œuvres majeures : Lorenzaccio, On ne badine pas avec l’amour",
        "Son théâtre explore les contradictions entre amour, cynisme et idéal",
        "Écriture marquée par le doute, la douleur amoureuse et la lucidité sur l’humain"
      ]
    }
  ],

  sq4: [
    {
      name: "Alfred de Musset",
      bio: [
        "Auteur de On ne badine pas avec l’amour (1834), pièce du théâtre romantique",
        "Refuse les règles classiques du théâtre au profit d’une expression libre des sentiments",
        "Thème central : impossibilité de concilier amour sincère et orgueil humain",
        "Opposition entre amour idéalisé (Camille) et amour vécu (Perdican)",
        "Critique de l’éducation religieuse et de l’hypocrisie morale",
        "Fin tragique : Rosette meurt, conséquence des manipulations sentimentales"
      ]
    }
  ]
};
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function App() {
  const [ti, setTi] = useState(0);
  const [mode, setMode] = useState("fiches");
  const [open, setOpen] = useState({});
  const [questions, setQuestions] = useState(null);
  const [qi, setQi] = useState(0);
  const [sel, setSel] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const theme = THEMES[ti];
  const fiches = FICHES[theme.id];

  const startQuiz = () => {
    const qs = shuffle(QUESTIONS[theme.id]);
    setQuestions(qs);
    setQi(0); setSel(null); setScore(0); setDone(false);
    setMode("quiz");
  };

  const resetQuiz = () => {
    const qs = shuffle(QUESTIONS[theme.id]);
    setQuestions(qs);
    setQi(0); setSel(null); setScore(0); setDone(false);
  };

  const handleSelect = (idx) => {
    if (sel !== null) return;
    setSel(idx);
  };

  const handleNext = () => {
    const newScore = sel === (questions[qi][2]) ? score + 1 : score;
    if (qi + 1 >= questions.length) {
      setScore(newScore);
      setDone(true);
    } else {
      setScore(newScore);
      setQi(i => i + 1);
      setSel(null);
    }
  };

  const changeTheme = (i) => {
    setTi(i);
    setMode("fiches");
    setOpen({});
    setQuestions(null);
    setQi(0); setSel(null); setScore(0); setDone(false);
  };

  const S = {
    wrap: { fontFamily: "var(--font-sans)", padding: "1rem", maxWidth: 700, margin: "0 auto" },
    themeGrid: { display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 8, marginBottom: 20 },
    themeBtn: (active, c) => ({
      padding: "12px 10px", background: active ? c : "var(--color-background-secondary)",
      color: active ? "#fff" : "var(--color-text-primary)",
      border: `1px solid ${active ? c : "var(--color-border-tertiary)"}`,
      borderRadius: "var(--border-radius-md)", cursor: "pointer",
      fontSize: 13, fontWeight: 500, textAlign: "left", transition: "all 0.15s", lineHeight: 1.4
    }),
    header: { marginBottom: 16, paddingBottom: 12, borderBottom: `2px solid ${theme.c}` },
    tabs: { display: "flex", gap: 8, marginBottom: 20 },
    tab: (active) => ({
      padding: "8px 20px",
      background: active ? theme.c : "transparent",
      color: active ? "#fff" : "var(--color-text-secondary)",
      border: `1px solid ${active ? theme.c : "var(--color-border-tertiary)"}`,
      borderRadius: "var(--border-radius-md)", cursor: "pointer", fontWeight: 500, fontSize: 14
    }),
    card: { background: "var(--color-background-primary)", border: "1px solid var(--color-border-tertiary)", borderLeft: `3px solid ${theme.c}`, borderRadius: "var(--border-radius-md)", overflow: "hidden", marginBottom: 10 },
    cardBtn: { width: "100%", textAlign: "left", padding: "14px 16px", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 14, fontWeight: 500, color: "var(--color-text-primary)" },
    li: { marginBottom: 8, fontSize: 13, lineHeight: 1.6, color: "var(--color-text-primary)" },
    progress: { height: 4, background: "var(--color-background-secondary)", borderRadius: 2, marginBottom: 20 },
    progressFill: (pct) => ({ height: 4, background: theme.c, borderRadius: 2, width: `${pct}%`, transition: "width 0.3s" }),
    qCard: { background: "var(--color-background-primary)", border: "1px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)", padding: 24, marginBottom: 16 },
    optBtn: (oi, selected, correct) => {
      let bg = "var(--color-background-primary)", bc = "var(--color-border-tertiary)", tc = "var(--color-text-primary)", fw = 400;
      if (selected !== null) {
        if (oi === correct) { bg = "#EAF3DE"; bc = "#3B6D11"; tc = "#27500A"; fw = 500; }
        else if (oi === selected) { bg = "#FCEBEB"; bc = "#A32D2D"; tc = "#501313"; }
      }
      return { padding: "13px 16px", background: bg, border: `1px solid ${bc}`, borderRadius: "var(--border-radius-md)", cursor: sel !== null ? "default" : "pointer", textAlign: "left", fontSize: 14, lineHeight: 1.5, color: tc, fontWeight: fw, width: "100%", transition: "all 0.15s", marginBottom: 8 };
    },
    nextBtn: { padding: "12px 28px", background: theme.c, color: "#fff", border: "none", borderRadius: "var(--border-radius-md)", cursor: "pointer", fontSize: 14, fontWeight: 500 },
  };

  const total = questions ? questions.length : 0;
  const pct = questions && !done ? Math.round((qi / total) * 100) : 0;

  return (
    <div style={S.wrap}>
      <h2 style={{ margin: "0 0 4px", fontSize: 20, color: "var(--color-text-primary)" }}>Bac Français — Révision &amp; Quiz</h2>
      <p style={{ margin: "0 0 16px", fontSize: 13, color: "var(--color-text-secondary)" }}>14 textes · 4 séquences · {Object.values(QUESTIONS).flat().length} questions</p>

      <div style={S.themeGrid}>
        {THEMES.map((t, i) => (
          <button key={t.id} onClick={() => changeTheme(i)} style={S.themeBtn(ti===i, t.c, t.bg)}>
            <div style={{ fontSize: 11, opacity: 0.7, marginBottom: 2 }}>SQ{i+1}</div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>{t.n}</div>
            <div style={{ fontSize: 11, opacity: 0.75, marginTop: 2 }}>{t.sub}</div>
          </button>
        ))}
      </div>

      <div style={S.header}>
        <div style={{ fontSize: 11, fontWeight: 600, color: theme.c, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>SQ{ti+1}</div>
        <div style={{ fontSize: 17, fontWeight: 600, color: "var(--color-text-primary)" }}>{theme.n}</div>
      </div>

      <div style={S.tabs}>
        <button onClick={() => setMode("fiches")} style={S.tab(mode==="fiches")}>Fiches de révision</button>
        <button onClick={startQuiz} style={S.tab(mode==="quiz")}>Quiz ({QUESTIONS[theme.id].length} questions)</button>
        <button onClick={() => setMode("bios")} style={S.tab(mode==="bios")}>
        Biographies
        </button>
      </div>

      {mode === "fiches" && (
        <div>
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 16px" }}>Cliquez sur chaque fiche pour la développer.</p>
          {fiches.map((f, fi) => (
            <div key={fi} style={S.card}>
              <button style={S.cardBtn} onClick={() => setOpen(o => ({...o, [fi]: !o[fi]}))}>
                <span style={{ paddingRight: 12 }}>{f.text}</span>
                <span style={{ color: theme.c, fontSize: 20, flexShrink: 0 }}>{open[fi] ? "−" : "+"}</span>
              </button>
              {open[fi] && (
                <div style={{ padding: "0 16px 16px" }}>
                  <ul style={{ margin: 0, padding: "0 0 0 18px" }}>
                    {f.points.map((p, pi) => <li key={pi} style={S.li}>{p}</li>)}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
        {mode === "bios" && (
  <div>
    <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 16px" }}>
      Les auteurs à connaître pour cette séquence.
    </p>

      {BIOS[theme.id].map((a, i) => (
        <div key={i} style={S.card}>
          <button
            style={S.cardBtn}
            onClick={() => setOpen(o => ({ ...o, ["bio"+i]: !o["bio"+i] }))}
          >
            <span>{a.name}</span>
            <span style={{ color: theme.c, fontSize: 20 }}>
              {open["bio"+i] ? "−" : "+"}
            </span>
          </button>

          {open["bio"+i] && (
            <div style={{ padding: "0 16px 16px" }}>
              <ul style={{ margin: 0, padding: "0 0 0 18px" }}>
                {a.bio.map((b, bi) => (
                  <li key={bi} style={S.li}>{b}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )}

      {mode === "quiz" && questions && !done && (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10, fontSize: 13, color: "var(--color-text-secondary)" }}>
            <span>Question {qi+1} / {total}</span>
            <span style={{ color: theme.c, fontWeight: 500 }}>Score : {score}</span>
          </div>
          <div style={S.progress}><div style={S.progressFill(pct)} /></div>
          <div style={S.qCard}>
            <p style={{ margin: 0, fontSize: 15, fontWeight: 500, lineHeight: 1.65, color: "var(--color-text-primary)" }}>
              {questions[qi][0]}
            </p>
          </div>

          <div>
            {questions[qi][1].map((opt, oi) => (
              <button key={oi} onClick={() => handleSelect(oi)} style={S.optBtn(oi, sel, questions[qi][2])}>
                <span style={{ fontWeight: 600, marginRight: 8, color: sel === null ? theme.c : "inherit" }}>
                  {String.fromCharCode(65+oi)}.
                </span>
                {opt}
              </button>
            ))}
          </div>
          {sel !== null && (
            <div style={{ marginTop: 16 }}>
              <div style={{ padding: "10px 14px", borderRadius: "var(--border-radius-md)", marginBottom: 12, fontSize: 13, background: sel === questions[qi][2] ? "#EAF3DE" : "#FCEBEB", color: sel === questions[qi][2] ? "#27500A" : "#501313", border: `1px solid ${sel === questions[qi][2] ? "#3B6D11" : "#A32D2D"}` }}>
                {sel === questions[qi][2] ? "Bonne réponse !" : `Incorrect — La bonne réponse était : ${questions[qi][1][questions[qi][2]]}`}
              </div>
              <div style={{ textAlign: "right" }}>
                <button onClick={handleNext} style={S.nextBtn}>
                  {qi+1 >= total ? "Voir les résultats" : "Question suivante"}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {mode === "quiz" && done && (
        <div style={{ textAlign: "center", padding: "40px 20px", background: "var(--color-background-primary)", border: "1px solid var(--color-border-tertiary)", borderRadius: "var(--border-radius-lg)" }}>
          <div style={{ fontSize: 52, marginBottom: 12 }}>
            {score >= total * 0.85 ? "★" : score >= total * 0.65 ? "◆" : "○"}
          </div>
          <div style={{ fontSize: 36, fontWeight: 700, color: theme.c, marginBottom: 8 }}>{score}/{total}</div>
          <div style={{ fontSize: 15, color: "var(--color-text-secondary)", marginBottom: 8 }}>
            {Math.round((score/total)*100)}% de bonnes réponses
          </div>
          <p style={{ color: "var(--color-text-secondary)", marginBottom: 24, fontSize: 14 }}>
            {score >= total * 0.85 ? "Excellent ! Tu maîtrises ce thème. Passage à l'autre séquence ?"
             : score >= total * 0.65 ? "Bien ! Relis les points difficiles dans les fiches."
             : "Continue à travailler les fiches, puis retente le quiz."}
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <button onClick={resetQuiz} style={S.nextBtn}>Recommencer (ordre aléatoire)</button>
            <button onClick={() => setMode("fiches")} style={{ ...S.nextBtn, background: "transparent", color: theme.c, border: `1px solid ${theme.c}` }}>Revoir les fiches</button>
          </div>
        </div>
      )}
    </div>
  );
}
