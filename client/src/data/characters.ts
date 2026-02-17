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
    personality: "Sarcastic, brash, outcome-independent, happy, and extremely inappropriate, Black Dragon's goals are simply to attain lots of gold and retire in peace to a castle in the mountains. He cares nothing for the rest of the world, whether good or evil. His greatest value is freedom, the freedom to live the way he wants, when he wants, at all times. He loves Pink Firefly above all other women and is devoted to her, but still has an eye for others and beds others as opportunity provides. Pink Firefly knows it and tolerates it. Sort of. He loves eating chicken. Probably a little too much.",
    powers: "Black Dragon was trained in swordsmanship since he was a small child and has been a for-hire mercenary for almost his entire adult life. Thus, he is a warrior of great experience and prowess. He has traveled the western realms extensively and has strong knowledge of their lands and creatures. He also seems to have strength and endurance slightly greater than that of the typical human (for reasons that will be revealed later). He wields \"Carl,\" his talking (but very laconic) +5 Sword of Objectivity, a lethal weapon of near-impossible sharpness. He also uses a staff he \"liberated\" from the tomb of a great sorcerer which has the power of teleportation.",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/VMoaBgCrGpZwVdJY.png"
  },
  {
    id: "pink-firefly",
    name: "Pink Firefly",
    race: "Fairy",
    class: "none",
    realm: "Fairy Kingdom of Pawood Forest",
    personality: "Friendly, kind, good-hearted, feminine, emotional, and just a little nervous about everything, Pink Firefly loves Black Dragon and is always by his side. She tolerates his near-constant inappropriate behavior and the bloody violence that seems to constantly follow him around. She is not a warrior and focuses on defensive actions when threatened. She, like Black Dragon, wishes for a quiet family life. Her goal is to be a real princess like in the fairy tales. Despite all of this, when pushed hard enough, she will rise to the occasion… but she still would rather have Black Dragon deal with that stuff.",
    powers: "As a fairy, she can fly, will live hundreds of years without aging, and is immune to poison. In her natural form, she is tiny, about seven inches tall. She can become human-sized at will and often spends time in this size to integrate more socially with others, though eventually she must return to her normal size. She can fly in her human size as well, though she is barely strong enough to carry one human-sized person for short distances and no more. At will, she can fire her \"Hearts of Happiness,\" which will make most humanoid and animal creatures exceedingly happy to the point of stupefaction. The effect doesn't work on everyone though, and only lasts around 30 minutes before the victims return to normal. She can summon near-impenetrable semitransparent force shields in the shape of pink hearts that she can shape to any size needed, though doing so often tires her.",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/qmytGdNeZtgHktdy.jfif"
  },
  {
    id: "larry",
    name: "Larry",
    race: "Animated Living Statue of Iron",
    class: "Warrior",
    realm: "Town of Narusk, Kingdom of Jeslam",
    personality: "Larry, formerly known as the Guardian of the Gate, was created by a powerful sorcerer several hundred years ago. He was set to menial tasks such as sweeping up his master's dungeons and taking out his bedpans. On his deathbed, the sorcerer ordered Larry to guard his tomb, which he did for hundreds of years. Eventually, Larry met Black Dragon, embraced his concepts of freedom, and became one of his group, taking on the name of \"Larry.\" Today, as a free creature, Larry seeks his purpose in life. His favorite thing to do is paint, though he's not very good at it. Larry is loud, pleasant, polite, inquisitive, and quite naïve. He's still learning how to be a real person.",
    powers: "Made of magical iron, Larry is impervious to almost all conventional attacks. Only powerful magic or strange chemicals can harm him. Even when damaged, he feels no pain. Sometimes he even finds it interesting. Larry is immensely strong, powered by great internal sorcery. He is effectively immortal and will live forever unless somehow destroyed.",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/qapJsJBsRNjpyzYj.png"
  },
  {
    id: "baby-zorra",
    name: "Baby Zorra",
    race: "Dawn Elf",
    class: "Whisperknife",
    realm: "Eleneth Isles",
    personality: "Zorra was the smallest and youngest of her sisters, earning her the nickname \"Baby\" Zorra. She is brave, impulsive, intelligent, loves life, and is perhaps just a little insane. As likely the only elf in the Western lands, she often finds it difficult to adjust to the strange ways of non-elf folk like humans, but she does her best and always has a positive attitude. She misses her home but is committed to staying with her new adopted family as long as needed. She prefers to speak her native tongue of Elvish (which sounds suspiciously like Spanish) and will often state phrases in her native language, confusing her friends. Baby Zorra often hears a strange voice in her head with which she often argues. This voice is always screaming angry, sometimes violent commands or complaints. Either she's completely insane, or something weird is going on… or perhaps a little of both.",
    powers: "As a whisperknife, Baby Zorra can summon unlimited small throwing weapons (knives, daggers, shurikens, etc) and throw them with lethal accuracy. She speaks three languages: Elvish, Common, and sylvan language of Harsi. Despite their smaller size, Dawn Elves are an old and powerful race. As such, Baby Zorra has all the usual abilities of any elf, which include: Long life – She will live for hundreds of years and age very slowly. Incredible speed – She can run and move far faster than a human or similar race. Gravity-resistant – Gravity does not affect her like it does other creatures, so she can accomplish feats such as leaping great distances and running up walls. Nature-resistant – Nature does not affect her like it does other creatures, so things such as wind, cold, and even fire affect her less. Magic-resistant – Magic spells and attacks often don't affect Baby Zorra as it does other creatures (though she can and will be affected by powerful magic).",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/cqSGWwqpLirtWnTt.jfif"
  },
  {
    id: "butternut",
    name: "Butternut",
    race: "Dog (with an evil curse)",
    class: "none",
    realm: "Kingdom of Jeslam",
    personality: "Pink Firefly's dog, Butternut, is the typical, loyal, happy dog, except that he's been cursed by the Spider Gods and occasionally turns into a Demon Dog when he feels angry, threatened, or if he senses Pink Firefly is threatened. He always wants to be part of the group and hates being left alone. He loves Pink Firefly and Black Dragon, even though the latter can't stand him, often purposely mispronouncing his name (Butterball, Butterfucks, Butt-Nut, etc).",
    powers: "When in Demon Dog form, he is stronger than usual (though not by much) and his bite delivers a lethal necrotic poison that instantly kills most creatures. Butternut also attempts various karate moves in combat, though not very well.",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/wDEButiuqSmqAMPZ.jpg"
  },
  {
    id: "ruslan",
    name: "Ruslan Shattershield",
    race: "Dwarf",
    class: "Goreforged Hammer",
    realm: "Begorack",
    personality: "Possibly the only person more inappropriate than Black Dragon, Ruslan is rude, vulgar, and loud, throwing around the most disgusting insults perhaps ever spoken to anyone, even to close friends. His greatest joy is battle and killing. He wishes to die in battle against an opponent great enough to defeat him, but knows that would sadden his wife and children, the only people he truly loves, so he suffers great inner conflict.",
    powers: "Ruslan wields two unbreakable, diamond-glass hammers powered two magical, immortal goldfish who are always terrified to be trapped inside a constantly smashing hammer. Ruslan speaks the Common language as well has his native Dwarven tongue (which sounds suspiciously like Russian). Ruslan has all the abilities of any dwarf, which are: Long life – He will live hundreds of years and age very slowly. Near-invincible endurance – He can take huge amounts of damage and just keep coming. Fast healing – Heals much faster than humans or similar creatures.",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/tXAnlfnfLtsFJFcL.jpg"
  },
  {
    id: "queen-strang",
    name: "Queen Strang",
    race: "Human",
    class: "Queen of Jeslam",
    realm: "Kingdom of Jeslam",
    personality: "The ever-furious, hot-tempered, man-hating, matriarchal, and merciless Queen of Jeslam now rules her kingdom with an iron fist now that her husband is dead. All she wants is more power, and she will utilize dark and dangerous forces to get it.",
    powers: "It is rumored that she may have some magical abilities, but it's more than likely she uses magical allies to her advantage as Queen and sole ruler of Jeslam.",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/ymNnSumUndgRTVBr.jfif"
  },
  {
    id: "princess",
    name: "Princess of Jeslam",
    race: "Human",
    class: "Princess of Jeslam",
    realm: "Kingdom of Jeslam",
    personality: "The stuck-up, entitled, angry, and extremely bitter Princess of Jeslam (whose real name is Garrona) is the tall, young, good-looking version of her equally angry mother, Queen Strang. The Princess's near-consistent angry exterior is a cover-up for her desire to please and impress her strong mother. The Princess's greatest fear is that her mother will find her not worthy to rule Jeslam when her time comes.",
    powers: "The Princess was a normal human but now she's been infused with dark magic that allows her to fire bolts of highly explosive energy at will. She may have other sorcerous powers that she hasn't yet uncovered.",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/RjndZzUcovINxcve.jfif"
  },
  {
    id: "barlow",
    name: "Barlow The Abundant",
    race: "Human",
    class: "Wizard",
    realm: "Realm of Wodan",
    personality: "A lover of magic, lore, pizza, and his favorite pillow, Barlow is a good-natured and friendly wizard who finds joy in doing good deeds. And eating good food. Lots of it. As a member of the adventuring group, Critical Toll, and as Black Dragon's friend, he assists his comrades with divination magic to learn more about their enemies.",
    powers: "Barlow can summon six clones of himself (the \"Barlows\"), identical to him but with slightly different personalities. They include Impulsive Barlow, Greedy Barlow, Cowardly Barlow, Scholarly Barlow, Heroic Barlow, and Ralph. Barlow also wields powerful divination magic, so through his sorcery he can gain knowledge about people or places far away, or long ago.",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/NEmhTVvtGpqGMQEN.JPG"
  },
  {
    id: "syndrith",
    name: "Matron Syndrith",
    race: "Rathor",
    class: "Sorceress and Priestess",
    realm: "Underworld, Rathor City of Sizindrel",
    personality: "Matron Syndrith, ruler of Rathor House Zulithran, is ruthless, headstrong, powerful, paranoid, and highly xenophobic of all other races, as is typical of her Dark Elf race. He expresses mostly anger, arrogance, annoyance, and hatred, though she has the ability to soften on rare occasions (which annoy her). Her sole goal is to amass enough magical power to crush the other Rathor Houses and secure her place as Matron Superior, not because of a desire for power per se, but more out of a twisted longing for personal safety. Perhaps her confidence and bluster is simply a cloak for more deep-seated fears…",
    powers: "Syndrith is not only a sorceress of vast power, but she is also a priestess of Gorthox, God of Blood, which grants her even more potency. She has an array of spells and magical attacks at her instant disposal, her favorite being a beam of dark necrotic energy she emits from her fingers. She can levitate herself and others (though there are limits to this), and when the need is great, she can summon powerful demons to assist her in combat. Since Rathor is a type of elf, Syndrith has all the usual abilities of any elf, which include: Long life, Incredible speed, Gravity-resistant, Nature-resistant, Magic-resistant, and Darkness teleportation. As Rathor, her weakness is sunlight, which both blinds and weakens her.",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/dLaSMxhNRobkjPsx.jfif"
  },
  {
    id: "fuzzlewax",
    name: "Fuzzlewax",
    race: "Velkthen",
    class: "Wizard",
    realm: "Unknown",
    personality: "Fuzzlewax is a strange creature, always referring to himself in the first person and always referring to others by description instead of name (Black Dragon is \"Dark Warrior,\" Pink Firefly is \"Pretty Fairy,\" Baby Zorra is \"Brave Elf,\" and so forth). He is friendly, social, loves to be part of the group, and extremely weird.",
    powers: "Fuzzlewax is a powerful summoner with a few loose screws. He can summon anything but never gets exactly what he asks for. If he tries to summon 100 spears to launch at an enemy, he'll instead summon 100 pillows, 100 pitchforks, or 100 ferrets. He is constantly confused about why his magic never quite works the way he wants it to, but always forgets about it within a minute or two and carries on as if nothing is wrong.",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/qtDSCxxECcsnsPQn.jpg"
  },
  {
    id: "white-dragon",
    name: "White Dragon",
    race: "Human",
    class: "Warrior",
    realm: "Parallel Universe, realm unknown",
    personality: "White Dragon is Black Dragon's mirror opposite from the parallel universe. He is constantly angry, disgusted by the entire world that he views as full of chaos. It is his personal mission to make the world \"right.\" He is completely devoted to and worships Dark Firefly and instantly does whatever she asks without question, regardless of what it is.",
    powers: "Just like Black Dragon, White Dragon was trained in swordsmanship since he was a small child and is an extremely strong and capable warrior. His rage and blind devotion to setting the world right give him a drive in battle matched by few. In battle, he wields \"Diggle,\" his talking (and quite insane) +5 Sword of Emotion, a lethal weapon of great power.",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/yzuHDzYosdnclICQ.png"
  },
  {
    id: "dark-firefly",
    name: "Dark Firefly",
    race: "Succubus",
    class: "none",
    realm: "Hell, Parallel Universe",
    personality: "Dark Firefly is Pink Firefly's mirror opposite from the parallel universe. She is confident, arrogant, irreverent, and always sure of herself. Her allies refer to her as \"Queen,\" but it's unknown exactly what this means in her home universe. Regardless, her minions, such as White Dragon and General Stabb, serve her obediently and without question. In her world, magic is dying. Her goal is to syphon or steal magic from Black Dragon's universe to bring it back to her own.",
    powers: "Dark Firefly can fire her \"Daggers of Anger\" at will. Anyone hit by these magical daggers will be instantly enraged and will attempt to attack or murder anyone next to them. She can also become giant-sized (about 35 feet tall) whenever she wishes, making her formidable indeed. As a demonic succubus, she can fly, is effectively immortal (unless killed via violence or accident), and is somewhat resistant to conventional (non-magical) weapons.",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/faRrxElBxEInTTKN.jfif"
  },
  {
    id: "olyndris",
    name: "Olyndris",
    race: "Dryad",
    class: "Druid",
    realm: "Unknown",
    personality: "Lustful, playful, and arrogant, the libertine Olyndris is one of the few of the dryad race to leave the safety of their forests. She adventures with the group Critical Toll, seeking wealth and pleasure. Her nearly uncontrollable, lustful desires eventually forced her friends to make her vow not to use her magical charm abilities against anyone who isn't an enemy. She agreed and continues to uphold this promise… for now. In combat, she is near emotionless and brutal in the extreme.",
    powers: "As a dryad, Olyndris will live hundreds of years and age very slowly. She can magically \"charm\" any person, male or female, forcing them to become enamored of her. She speaks the sylvan language of Harsi in addition to Common. She can instantly summon tree branches of various sizes as well as move and reshape them. She uses them as stabbing weapons and for movement. She can merge with any tree and commune with plants, at least on a primitive level.",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/iIJEhMQIyTfwMGQy.png"
  }
];
