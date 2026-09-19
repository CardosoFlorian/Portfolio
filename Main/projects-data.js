// Toutes les infos des projets du portfolio, centralisées ici.
// Pour ajouter un nouveau projet : dépose ses images dans un dossier à la racine,
// puis ajoute une entrée à ce tableau. La carte sur la page d'accueil et la page
// de détail (project.html?slug=...) se génèrent automatiquement à partir de ça.
const PROJECTS = [
    {
        slug: "universal-mayhem",
        title: "Universal Mayhem",
        subtitle: "Composez votre deck et dominez des batailles automatisées sur les points de capture",
        folder: "UniversalMayhem",
        cover: "UniversalMayhem.png",
        gallery: ["UniversalMayhem.png", "UniversalMayhem1.png", "UniversalMayhem2.png", "UniversalMayhem3.png", "UniversalMayhem4.png", "UniversalMayhem5.png"],
        meta: [
            { label: "Développeur", value: "Solo" },
            { label: "Durée", value: "En développement" },
            { label: "Joueurs", value: "1" }
        ],
        overview: "Universal Mayhem est un hybride auto-battler / tower-defense développé en solo sur Unity en C#, toujours en développement. Deux camps s'affrontent sur une carte comportant des points de capture neutres et des châteaux à défendre : les unités se déplacent, ciblent et combattent seules, le joueur agissant surtout avant la bataille en composant son deck et en faisant évoluer ses unités. Le jeu s'accompagne d'une couche complète de méta-progression avec gacha et collection, ainsi que d'une bande originale entièrement composée par mes soins.",
        features: [
            "Système de compétences data-driven : Chaque capacité est assemblée dans l'éditeur à partir de briques Trigger/Condition/Effet réutilisables - environ 144 capacités pour 61 unités jouables, sans code additionnel.",
            "Combat entièrement automatisé : Les unités se déplacent, ciblent et combattent seules autour des points de capture ; le joueur prépare la bataille en amont via son deck et sa progression.",
            "Gacha, Bestiaire et personnalisation : Système d'invocation avec suivi de pity, codex des unités, et une teinte de couleur personnalisable qui se propage automatiquement aux shaders, VFX et projectiles."
        ],
        tags: ["3D", "C#", "Unity", "Solo"]
    },
    {
        slug: "long-live-the-ant-queen",
        title: "Long Live the Ant Queen",
        subtitle: "Menez votre colonie de fourmis à la conquête d'un jardin devenu hostile",
        folder: "LongLiveTheAntQueen",
        cover: "LongLiveTheAntQueen.png",
        gallery: ["LongLiveTheAntQueen.png", "LongLiveTheAntQueen1.png", "LongLiveTheAntQueen2.png", "LongLiveTheAntQueen3.png", "LongLiveTheAntQueen4.png"],
        meta: [
            { label: "Étudiants", value: "4 étudiants (5 au départ)" },
            { label: "Durée", value: "9 mois (projet fil rouge)" },
            { label: "Joueurs", value: "1" }
        ],
        overview: "Long Live the Ant Queen est le projet fil rouge de ma quatrième année au Gaming Campus : un jeu de stratégie développé sur Unreal Engine 5 en C++ et Blueprints tout au long de l'année avec trois de mes camarades (l'équipe comptait cinq membres au début du projet). Vous y commandez une colonie de fourmis à la façon d'un RTS : cliquez sur une destination ou un élément du décor pour que vos fourmis s'y déplacent et effectuent l'action correspondante, afin d'explorer un jardin devenu un monde miniature hostile.",
        features: [
            "Contrôle façon RTS : Cliquez sur une destination pour donner un ordre à vos fourmis, qui s'y déplacent aussitôt.",
            "Actions contextuelles : Selon l'élément ciblé par le clic, vos fourmis effectuent l'action adaptée - déplacer un bloc, brûler un mur, et bien d'autres.",
            "Monde miniature hostile : Explorez un jardin devenu gigantesque du point de vue des fourmis, semé d'obstacles et d'éléments à exploiter."
        ],
        tags: ["3D", "C++", "Blueprint", "Unreal Engine", "Equipe", "Gaming Campus"]
    },
    {
        slug: "orbit-ops",
        title: "Orbit Ops",
        subtitle: "Défendez la ville contre les envahisseurs",
        folder: "OrbitOps",
        cover: "Orbit_Ops.png",
        gallery: ["Orbit_Ops.png", "Orbit_Ops1.png", "Orbit_Ops2.png"],
        meta: [
            { label: "Étudiants", value: "1 étudiant" },
            { label: "Durée", value: "1 mois" },
            { label: "Lien", value: "Itch.io", link: "https://portos2004.itch.io/orbit-ops" },
            { label: "Joueurs", value: "1" }
        ],
        overview: "Orbit Ops est un FPS développé sur Unity lors d'un projet scolaire au Gaming Campus. C'est un jeu solo dans lequel vous devez vous battre contre les envahisseurs à l'aide de votre arme afin de protéger la ville !",
        features: [
            "Système de vagues : Combattez des vagues d'ennemis de plus en plus nombreuses, toutes plus difficiles les unes que les autres.",
            "La victoire vous attend : Survivez à chaque vague pour sortir vainqueur des envahisseurs - seuls les plus forts s'en sortiront !",
            "Mettez vos compétences à l'épreuve : Affinez vos compétences et visez la victoire. Avez-vous ce qu'il faut pour protéger la ville ?"
        ],
        tags: ["3D", "C#", "FPS", "Gaming Campus", "Projet Fictif", "Solo", "Unity"]
    },
    {
        slug: "snowboard-game",
        title: "Snowboard Game",
        subtitle: "Finissez la course le plus rapidement possible",
        folder: "Ski",
        cover: "SkiGame.png",
        gallery: ["SkiGame.png", "SkiGame1.png", "SkiGame2.png"],
        meta: [
            { label: "Étudiants", value: "3 étudiants" },
            { label: "Durée", value: "2 semaines" },
            { label: "Joueurs", value: "1" }
        ],
        overview: "Ce projet est un jeu de course à la troisième personne développé sur Unreal Engine en blueprint lors d'un projet scolaire au Gaming Campus avec deux de mes camarades. C'est un jeu solo dans lequel vous devez finir la course le plus rapidement possible tout en évitant les obstacles.",
        features: [
            "Système de Physique Réaliste : Intègre un système de physique avancée pour simuler le comportement réaliste des snowboards sur la neige.",
            "Effets Visuels et Sonores Réactifs : Traces dans la neige, sons dynamiques et particules qui varient selon la vitesse et les actions du joueur.",
            "Différentes Difficultés : Différents snowboards avec chacun une maniabilité et vitesse différente"
        ],
        tags: ["3D", "Blueprint", "Equipe", "Gaming Campus", "Unreal Engine"]
    },
    {
        slug: "football-game",
        title: "Football Game",
        subtitle: "Affrontez vos amis dans une partie de football",
        folder: "Football",
        cover: "Football.png",
        gallery: ["Football.png", "Football1.png", "Football2.png"],
        meta: [
            { label: "Étudiants", value: "3 étudiants" },
            { label: "Durée", value: "2 semaines" },
            { label: "Joueurs", value: "2" }
        ],
        overview: "Ce projet est un jeu de football à la première personne, développé sur Unity en C# lors d'un projet scolaire au Gaming Campus avec deux de mes camarades. C'est un jeu multijoueur local dans lequel vous devez marquer plus de buts que votre adversaire pour remporter la victoire !",
        features: [
            "Facile à prendre en main : Facile à apprendre et à jouer pour tous les niveaux de joueurs. Présence d'aides aux joueurs pour éviter les buts.",
            "Multijoueur local : Jouable en solo ou en multijoueur local sur le même ordinateur.",
            "Terrain Procédural : Les arbres servant d'obstacles sont générés aléatoirement à chaque partie."
        ],
        tags: ["3D", "C#", "Equipe", "Gaming Campus", "Local", "Unity"]
    },
    {
        slug: "dreamstrike",
        title: "DreamStrike",
        subtitle: "Un Rail Shooter dans un monde onirique",
        folder: "RailShooter",
        cover: "RailShooter.png",
        gallery: ["RailShooter.png", "RailShooter1.png", "RailShooter2.png"],
        meta: [
            { label: "Étudiants", value: "5 étudiants" },
            { label: "Durée", value: "1 mois" },
            { label: "Joueurs", value: "Jusqu'à 2" }
        ],
        overview: "Ce jeu est un Rail Shooter en 2D, développé sur Godot en GDScript lors d'un projet scolaire au Gaming Campus avec quatre de mes camarades. C'est un jeu jouable en solo ou en multijoueur local, où vous devez affronter des vagues d'ennemis pour sortir de ce monde fantastique.",
        features: [
            "Différentes difficultés : plusieurs niveaux de difficulté pour plaire à tous types de joueurs.",
            "Multijoueur local : Jouable en solo ou en multijoueur local sur le même ordinateur.",
            "Mode infini : Un mode qui devient de plus en plus difficile. Saurez-vous relever le défi ?"
        ],
        tags: ["2D", "Equipe", "Gaming Campus", "GDScript", "Godot", "Local"]
    },
    {
        slug: "endless-war",
        title: "Endless War",
        subtitle: "Plongez dans un monde fantasy épique où chaque partie forge votre légende",
        folder: "EndlessWar",
        cover: "EndlessWar.png",
        gallery: ["EndlessWar.png", "EndlessWar1.png", "EndlessWar2.png"],
        meta: [
            { label: "Étudiants", value: "14 étudiants" },
            { label: "Durée", value: "1 mois" },
            { label: "Joueurs", value: "1" }
        ],
        overview: "Endless War est un Rogue-Lite développé sur Unity lors du Gaming Campus Awards au Gaming Campus. C'est un projet interdisciplinaire réalisé par une équipe composée d'une équipe marketing, d'une équipe art et d'une équipe dev. C'est un jeu solo alliant stratégie et montée en puissance dans lequel vous devez survivre aux ennemis des autres factions !",
        features: [
            "Système de vagues : Combattez des vagues d'ennemis de plus en plus nombreuses, toutes plus difficiles les unes que les autres.",
            "Chaque partie est un nouveau défi : relevez l'inattendu, adaptez votre stratégie et redécouvrez le jeu à chaque session !",
            "Montée en puissance : Affinez et débloquez de nouveaux pouvoirs pour mieux terrasser vos adversaires !"
        ],
        tags: ["3D", "C#", "Equipe", "Gaming Campus", "Interdisciplinaire", "Mobile", "Unity"]
    },
    {
        slug: "image-portfolio",
        title: "Image Portfolio",
        subtitle: "Stockez vos images avec un système de tri par tags",
        folder: "Image-Portfolio",
        cover: "Image-Portfolio.png",
        gallery: ["Image-Portfolio.png", "Image-Portfolio2.png", "Image-Portfolio3.png"],
        meta: [
            { label: "Étudiants", value: "1 étudiant" },
            { label: "Durée", value: "2 semaines" },
            { label: "Joueurs", value: "Aucun" }
        ],
        overview: "C'est un petit projet que j'ai voulu faire pour mon usage personnel. Il permet de stocker des images et de les trier avec un système de tags. Il y a un espace limité pour les images stockées, mais leur taille est réduite au maximum afin d'en stocker le plus possible !",
        features: [
            "Tri d'images par tags : Possibilité de créer et d'organiser des tags pour classer les images",
            "Ajouter et modifier : possibilité d'ajouter et de modifier les informations des images facilement",
            "IndexedDB : utilisation d'IndexedDB pour réduire la taille des images et en stocker une plus grande quantité"
        ],
        tags: ["CSS", "HTML", "JavaScript", "Projet Fictif", "Solo"]
    }
];
