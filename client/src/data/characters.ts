export interface Character {
  id: string;
  name: string;
  race: string;
  class: string;
  realm: string;
  personality: string;
  powers: string;
  imageUrl: string;
}

export const characters: Character[] = [
  {
    id: "black-dragon",
    name: "Black Dragon",
    race: "Human",
    class: "Warrior",
    realm: "Unknown, no one realm, travels extensively",
    personality: "Sarcastic, brash, outcome-independent, happy, and extremely inappropriate, Black Dragon's goals are simply to attain lots of gold and retire in peace to a castle in the mountains. He cares nothing for the rest of the world, whether good or evil.\n\nHis greatest value is freedom, the freedom to live the way he wants, when he wants, at all times.\n\nHe loves Pink Firefly above all other women and is devoted to her, but still has an eye for others and beds others as opportunity provides. Pink Firefly knows it and tolerates it. Sort of.\n\nHe loves eating chicken. Probably a little too much.",
    powers: "Black Dragon was trained in swordsmanship since he was a small child and has been a for-hire mercenary for almost his entire adult life. Thus, he is a warrior of great experience and prowess. He has traveled the western realms extensively and has strong knowledge of their lands and creatures. He also seems to have strength and endurance slightly greater than that of the typical human (for reasons that will be revealed later).\n\nHe wields \"Carl,\" his talking (but very laconic) +5 Sword of Objectivity, a lethal weapon of near-impossible sharpness. He also uses a staff he \"liberated\" from the tomb of a great sorcerer which has the power of teleportation.",
    imageUrl: "/images/characters/Black-Dragon.jpg"
  },
  {
    id: "pink-firefly",
    name: "Pink Firefly",
    race: "Fairy",
    class: "none",
    realm: "Fairy Kingdom of Pawood Forest",
    personality: "Friendly, kind, good-hearted, feminine, emotional, and just a little nervous about everything, Pink Firefly loves Black Dragon and is always by his side. She tolerates his near-constant inappropriate behavior and the bloody violence that seems to constantly follow him around.\n\nShe is not a warrior and focuses on defensive actions when threatened. She, like Black Dragon, wishes for a quiet family life. Her goal is to be a real princess like in the fairy tales.\n\nDespite all of this, when pushed hard enough, she will rise to the occasion… but she still would rather have Black Dragon deal with that stuff.",
    powers: "As a fairy, she can fly, will live hundreds of years without aging, and is immune to poison.\n\nIn her natural form, she is tiny, about seven inches tall. She can become human-sized at will and often spends time in this size to integrate more socially with others, though eventually she must return to her normal size.\n\nShe can fly in her human size as well, though she is barely strong enough to carry one human-sized person for short distances and no more.\n\nAt will, she can fire her \"Hearts of Happiness,\" which will make most humanoid and animal creatures exceedingly happy to the point of stupefaction. The effect doesn't work on everyone though, and only lasts around 30 minutes before the victims return to normal.\n\nShe can summon near-impenetrable semitransparent force shields in the shape of pink hearts that she can shape to any size needed, though doing so often tires her.",
    imageUrl: "/images/characters/Pink-Firefly.jpg"
  },
  {
    id: "larry",
    name: "Larry",
    race: "Animated Living Statue of Iron",
    class: "Warrior",
    realm: "Town of Narusk, Kingdom of Jeslam",
    personality: "Larry, formerly known as the Guardian of the Gate, was created by a powerful sorcerer several hundred years ago. He was set to menial tasks such as sweeping up his master's dungeons and taking out his bedpans.\n\nOn his deathbed, the sorcerer ordered Larry to guard his tomb, which he did for hundreds of years. Eventually, Larry met Black Dragon, embraced his concepts of freedom, and became one of his group, taking on the name of \"Larry.\"\n\nToday, as a free creature, Larry seeks his purpose in life. His favorite thing to do is paint, though he's not very good at it.\n\nLarry is loud, pleasant, polite, inquisitive, and quite naïve. He's still learning how to be a real person.",
    powers: "Made of magical iron, Larry is impervious to almost all conventional attacks. Only powerful magic or strange chemicals can harm him. Even when damaged, he feels no pain. Sometimes he even finds it interesting.\n\nLarry is immensely strong, powered by great internal sorcery.\n\nHe is effectively immortal and will live forever unless somehow destroyed.",
    imageUrl: "/images/characters/Larry.jpg"
  },
  {
    id: "baby-zorra",
    name: "Baby Zorra",
    race: "Dawn Elf",
    class: "Whisperknife",
    realm: "Eleneth Isles",
    personality: "Zorra was the smallest and youngest of her sisters, earning her the nickname \"Baby\" Zorra. She is brave, impulsive, intelligent, loves life, and is perhaps just a little insane.\n\nAs likely the only elf in the Western lands, she often finds it difficult to adjust to the strange ways of non-elf folk like humans, but she does her best and always has a positive attitude. She misses her home but is committed to staying with her new adopted family as long as needed.\n\nShe prefers to speak her native tongue of Elvish (which sounds suspiciously like Spanish) and will often state phrases in her native language, confusing her friends.\n\nBaby Zorra often hears a strange voice in her head with which she often argues. This voice is always screaming angry, sometimes violent commands or complaints. Either she's completely insane, or something weird is going on… or perhaps a little of both.",
    powers: "As a whisperknife, Baby Zorra can summon unlimited small throwing weapons (knives, daggers, shurikens, etc) and throw them with lethal accuracy.\n\nShe speaks three languages: Elvish, Common, and sylvan language of Harsi.\n\nDespite their smaller size, Dawn Elves are an old and powerful race. As such, Baby Zorra has all the usual abilities of any elf, which include:\n • Long life – She will live for hundreds of years and age very slowly.\n • Incredible speed – She can run and move far faster than a human or similar race.\n • Gravity-resistant – Gravity does not affect her like it does other creatures, so she can accomplish feats such as leaping great distances and running up walls.\n • Nature-resistant – Nature does not affect her like it does other creatures, so things such as wind, cold, and even fire affect her less.\n • Magic-resistant – Magic spells and attacks often don't affect Baby Zorra as it does other creatures (though she can and will be affected by powerful magic).",
    imageUrl: "/images/characters/Baby-Zorra.jpg"
  },
  {
    id: "butternut",
    name: "Butternut",
    race: "Squirrel (Awakened)",
    class: "Druid",
    realm: "Pawood Forest",
    personality: "Butternut was once a normal squirrel, but was \"awakened\" by a druid, giving him human-level intelligence and the ability to speak. He is the best friend of Pink Firefly and often travels with her and Black Dragon.\n\nButternut is smart, brave, loyal, and often sarcastic. He is also quite small and often feels inadequate compared to his larger friends. He compensates for this by being clever and resourceful.\n\nHe has a crush on Pink Firefly, though he knows it's impossible. He is also terrified of cats.",
    powers: "As an awakened animal, Butternut has human-level intelligence and can speak Common. He retains all the natural abilities of a squirrel, including climbing, jumping, and gathering nuts.\n\nHe has some minor druidic magic, including the ability to speak with animals and plants, and can cast minor nature spells.",
    imageUrl: "/images/characters/Butternut.jpg"
  },
  {
    id: "brun-krol",
    name: "Brun'Krol",
    race: "Orc",
    class: "Shaman",
    realm: "Orclands",
    personality: "Brun'Krol is a powerful orc shaman who leads his tribe with wisdom and strength. Unlike many orcs, he values peace and cooperation with other races, though he will defend his people fiercely if threatened.\n\nHe is wise, patient, and speaks with a deep, rumbling voice. He has a dry sense of humor and enjoys telling stories around the campfire.",
    powers: "As a shaman, Brun'Krol can commune with spirits and cast powerful elemental magic. He can summon lightning, create earthquakes, and heal wounds.\n\nHe is also a formidable warrior, wielding a massive war hammer that crackles with lightning.",
    imageUrl: "/images/characters/Brun'Krol.jpg"
  },
  {
    id: "dark-firefly",
    name: "Dark Firefly",
    race: "Fairy (Corrupted)",
    class: "Assassin",
    realm: "Unknown",
    personality: "Dark Firefly is Pink Firefly's dark reflection - a corrupted fairy who embraced violence and darkness. She is cruel, sadistic, and enjoys causing pain.\n\nShe has a twisted obsession with Pink Firefly and wants to corrupt her as well. She sees Black Dragon as a rival for Pink Firefly's affection.",
    powers: "Dark Firefly has all the powers of a normal fairy, but corrupted. Instead of Hearts of Happiness, she fires Hearts of Despair that cause intense sadness and hopelessness.\n\nHer force shields are black and can drain life energy from those who touch them.",
    imageUrl: "/images/characters/Dark-Firefly.jpg"
  },
  {
    id: "barlow",
    name: "Barlow",
    race: "Human",
    class: "Rogue",
    realm: "City of Narusk",
    personality: "Barlow is a charming rogue and con artist who makes his living through schemes and scams. He's smooth-talking, quick-witted, and always has an angle.\n\nDespite his criminal tendencies, he has a good heart and will help his friends when they need him. He just might charge them for it.",
    powers: "Barlow is an expert at picking locks, disarming traps, and sneaking around. He's also a skilled swordsman and can hold his own in a fight.\n\nHe has a network of contacts throughout the city and can usually find information or items for the right price.",
    imageUrl: "/images/characters/Barlow.jpg"
  },
  {
    id: "darsis",
    name: "Darsis",
    race: "Human",
    class: "Wizard",
    realm: "Kingdom of Jeslam",
    personality: "Darsis is a powerful wizard who serves as the court mage for the Kingdom of Jeslam. He is intelligent, calculating, and always thinking several steps ahead.\n\nHe has a dry wit and little patience for fools. He respects Black Dragon's pragmatism but finds his lack of education frustrating.",
    powers: "Darsis is a master of arcane magic, specializing in fire and lightning spells. He can also teleport, create illusions, and cast powerful protective wards.\n\nHe carries a staff that amplifies his magical power and can store spells for later use.",
    imageUrl: "/images/characters/Darsis.jpg"
  },
  {
    id: "fuzzlewax",
    name: "Fuzzlewax",
    race: "Gnome",
    class: "Inventor",
    realm: "City of Gearhold",
    personality: "Fuzzlewax is an eccentric gnome inventor who creates bizarre and often dangerous contraptions. He's enthusiastic, talkative, and completely oblivious to social cues.\n\nHe sees every problem as an opportunity to build something new, even if that something explodes half the time.",
    powers: "Fuzzlewax is a genius inventor who can create mechanical devices that seem to defy the laws of physics. His inventions include flying machines, explosive devices, and mechanical servants.\n\nHe also has some minor magical ability, which he uses to power his inventions.",
    imageUrl: "/images/characters/Fuzzlewax.jpg"
  },
  {
    id: "olyndris",
    name: "Olyndris",
    race: "High Elf",
    class: "Ranger",
    realm: "Silverwood Forest",
    personality: "Olyndris is a noble high elf ranger who protects the ancient forests from those who would harm them. She is proud, dignified, and has little patience for the crude behavior of humans.\n\nShe respects strength and honor, but finds Black Dragon's irreverence offensive. Despite this, she recognizes his skill as a warrior.",
    powers: "Olyndris is a master archer who can hit targets from incredible distances. She can also track any creature through any terrain and has a deep connection to nature.\n\nShe can communicate with animals and plants, and can call upon them for aid in battle.",
    imageUrl: "/images/characters/Olyndris.jpg"
  },
  {
    id: "princess",
    name: "Princess Elara",
    race: "Human",
    class: "Noble",
    realm: "Kingdom of Jeslam",
    personality: "Princess Elara is the daughter of King Tharic and heir to the throne of Jeslam. She is intelligent, compassionate, and determined to be a good ruler.\n\nShe is frustrated by the constraints of royal life and longs for adventure. She admires Black Dragon's freedom, even if she doesn't approve of his methods.",
    powers: "While not a warrior or mage, Princess Elara is highly educated and skilled in diplomacy, politics, and strategy. She can speak multiple languages and has extensive knowledge of history and law.\n\nShe is also learning swordplay in secret, against her father's wishes.",
    imageUrl: "/images/characters/Princess.jpg"
  },
  {
    id: "queen-strang",
    name: "Queen Strang",
    race: "Dwarf",
    class: "Warrior Queen",
    realm: "Mountain Kingdom of Karak-Dun",
    personality: "Queen Strang is the fierce ruler of the dwarven kingdom of Karak-Dun. She is strong, stubborn, and fiercely protective of her people.\n\nShe has a booming laugh and loves a good fight. She respects Black Dragon as a fellow warrior and enjoys drinking contests with him.",
    powers: "Queen Strang is a formidable warrior who wields a massive battle axe. She is incredibly strong and tough, able to take hits that would kill most people.\n\nShe also has some resistance to magic due to her dwarven heritage.",
    imageUrl: "/images/characters/Queen-Strang.jpg"
  },
  {
    id: "ruslan",
    name: "Ruslan",
    race: "Human",
    class: "Paladin",
    realm: "Holy Kingdom of Lumina",
    personality: "Ruslan is a devoted paladin who serves the god of light and justice. He is honorable, righteous, and completely inflexible in his beliefs.\n\nHe sees Black Dragon as a necessary evil at best, and constantly tries to reform him. Black Dragon finds this hilarious.",
    powers: "Ruslan can channel divine power to heal wounds, cure diseases, and smite evil. He glows with holy light when using his powers.\n\nHe is also a skilled swordsman and wears enchanted armor that protects him from dark magic.",
    imageUrl: "/images/characters/Ruslan.jpg"
  },
  {
    id: "syndrith",
    name: "Syndrith",
    race: "Dragon (Polymorphed)",
    class: "Sorcerer",
    realm: "Dragon Peaks",
    personality: "Syndrith is an ancient dragon who can take human form. She is cunning, manipulative, and always playing the long game.\n\nShe has her own mysterious agenda and uses others as pawns in her schemes. She finds Black Dragon amusing and occasionally helps him, though always for her own reasons.",
    powers: "In her dragon form, Syndrith is a massive creature with scales harder than steel and breath that can melt stone. She can fly and has immense physical strength.\n\nIn human form, she is a powerful sorcerer who can cast devastating spells. She can also transform back into her dragon form at will.",
    imageUrl: "/images/characters/Syndrith.jpg"
  },
  {
    id: "white-dragon",
    name: "White Dragon",
    race: "Human",
    class: "Warrior",
    realm: "Unknown",
    personality: "White Dragon is Black Dragon's rival and counterpart. Where Black Dragon is chaotic and irreverent, White Dragon is disciplined and honorable.\n\nThey have a complicated relationship - sometimes allies, sometimes enemies, always competitors. White Dragon believes in justice and protecting the innocent.",
    powers: "White Dragon is a master swordsman equal to Black Dragon in skill. He wields a legendary white blade that can cut through any darkness.\n\nHe is faster and more agile than Black Dragon, but perhaps not quite as strong or durable.",
    imageUrl: "/images/characters/White-Dragon.jpg"
  }
];
