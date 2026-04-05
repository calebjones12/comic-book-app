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
    realm: "Unknown",
    personality: "Sarcastic, brash, outcome-independent, happy, and extremely inappropriate, Black Dragon's goals are simply to attain lots of gold and retire in peace to a castle in the mountains. He cares nothing for the rest of the world, whether good or evil.\n\nHis greatest value is freedom, the freedom to live the way he wants, when he wants, at all times.\n\nHe loves Pink Firefly above all other women and is devoted to her, but still has an eye for others and beds them as opportunity provides. Pink Firefly knows it and tolerates it. Sort of.\n\nHe loves eating chicken. Probably a little too much.",
    powers: "Black Dragon is a warrior of great experience and prowess, being trained in swordsmanship since he was a small child, and has been a for-hire mercenary for most of his adult life. He has traveled the western realms extensively and has strong knowledge of their lands and creatures. He also seems to have strength and endurance slightly greater than that of the typical human (for reasons that will be revealed later).\n\nHe wields \"Carl,\" his talking (but very laconic) +5 Sword of Objectivity, a lethal weapon of near-impossible sharpness. He also uses a staff he \"liberated\" from the tomb of a great sorcerer which has the power of teleportation.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663046994448/HZpH42JzHFwHyBRSjnLAz9/Black-Dragon_b3d08c86.jpg"
  },
  {
    id: "pink-firefly",
    name: "Pink Firefly",
    race: "Fairy",
    class: "none",
    realm: "Fairy Kingdom of Pawood Forest",
    personality: "Friendly, kind, good-hearted, feminine, emotional, and just a little nervous about everything, Pink Firefly loves Black Dragon and is always by his side. She tolerates his near-constant inappropriate behavior and the bloody violence that seems to constantly follow him around.\n\nShe is not a warrior and focuses on defensive actions when threatened. She, like Black Dragon, wishes for a quiet family life. Her goal is to be a real princess like in the fairy tales.\n\nDespite all of this, when pushed hard enough, she will rise to the occasion… but she still would rather have Black Dragon deal with that messy stuff.",
    powers: "As a fairy, she can fly, will live hundreds of years without aging, and is immune to poison.\n\nIn her natural form, she is tiny, about seven inches tall. She can become human-sized at will and often spends time in this size to integrate more socially with others, though eventually she must return to her normal size.\n\nShe can fly in her human size as well, though she is barely strong enough to carry one human-sized person for short distances and no more.\n\nAt will, she can fire her \"Hearts of Happiness,\" which will make most humanoid and animal creatures exceedingly happy to the point of stupefaction. The effect doesn't work on everyone though, and only lasts a brief time before the victims return to normal.\n\nShe can summon near-impenetrable semitransparent force shields in the shape of pink hearts that she can shape to any size needed, though doing so often tires her.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663046994448/HZpH42JzHFwHyBRSjnLAz9/Pink-Firefly_be7bad53.jpg"
  },
  {
    id: "larry",
    name: "Larry",
    race: "Animated Living Statue of Iron",
    class: "Warrior",
    realm: "Town of Narusk, Kingdom of Jeslam",
    personality: "Larry, formerly known as the Guardian of the Gate, was created by a powerful sorcerer several hundred years ago. He was set to menial tasks such as sweeping up his master's dungeons and taking out his bedpans.\n\nOn his deathbed, the sorcerer ordered Larry to guard his tomb, which he did for hundreds of years. Eventually, Larry met Black Dragon, embraced his concepts of freedom, and became one of his group, taking on the name of \"Larry.\"\n\nToday, as a free creature, Larry seeks his purpose in life. His favorite thing to do is paint, though he's not very good at it.\n\nLarry is loud, pleasant, polite, inquisitive, and quite naïve. He's still learning how to be a real person.",
    powers: "Made of magical iron, Larry is impervious to almost all conventional attacks. Only powerful magic or strange chemicals can harm him. Even when damaged, he feels no pain. Sometimes he even finds it interesting.\n\nLarry is immensely strong, powered by great internal sorcery.\n\nHe is effectively immortal and will live forever unless somehow destroyed.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663046994448/HZpH42JzHFwHyBRSjnLAz9/Larry_fd90c617.jpg"
  },
  {
    id: "baby-zorra",
    name: "Baby Zorra",
    race: "Dawn Elf",
    class: "Whisperknife",
    realm: "Eleneth Isles",
    personality: "Zorra was the smallest and youngest of her sisters, earning her the nickname \"Baby\" Zorra. She is brave, impulsive, intelligent, loves life, and is perhaps just a little insane.\n\nAs likely the only elf in the Western lands, she often finds it difficult to adjust to the strange ways of non-elf folk like humans, but she does her best and always has a positive attitude. She misses her home but is committed to staying with her new adopted family as long as needed.\n\nShe prefers to speak her native tongue of Elvish (which sounds suspiciously like Spanish) and will often state phrases in her native language, confusing her friends.\n\nBaby Zorra often hears a strange voice in her head with which she argues. This voice is always screaming angry, sometimes violent commands or complaints. Either she's completely insane, or something weird is going on… or perhaps a little of both.",
    powers: "As a whisperknife, Baby Zorra can summon an unlimited number of magical, small throwing weapons (knives, daggers, shurikens, etc) and throw them with lethal accuracy.\n\nShe speaks three languages: Elvish, Common, and sylvan language of Harsi.\n\nDespite their smaller size, Dawn Elves are an old and powerful race. As such, Baby Zorra has all the usual abilities of any elf, which include:\n • Long life – She will live for hundreds of years and age very slowly.\n • Incredible speed – She can run and move far faster than a human or similar race.\n • Gravity-resistant – Gravity does not affect her like it does other creatures, so she can accomplish feats such as leaping great distances and running up walls.\n • Nature-resistant – Nature does not affect her like it does other creatures, so things such as wind, cold, and even fire affect her less.\n • Magic-resistant – Magic spells and attacks often don't affect Baby Zorra as it does other creatures (though she can and will be affected by powerful magic).",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663046994448/HZpH42JzHFwHyBRSjnLAz9/Baby-Zorra_6d97bf34.jpg"
  },
  {
    id: "butternut",
    name: "Butternut",
    race: "Cute Doggie (with an evil demonic curse)",
    class: "none",
    realm: "Kingdom of Jeslam",
    personality: "Pink Firefly's dog, Butternut, is the typical, loyal, happy dog, except that he's been cursed by the Spider Gods and occasionally turns into a Demon Dog when he feels angry, threatened, or if he senses Pink Firefly is threatened.\n\nHe always wants to be part of the group and hates being left alone. He loves Pink Firefly and Black Dragon, even though the latter can't stand him, often purposely mispronouncing his name (Butterball, Butterfucks, Butt-Nut, etc).",
    powers: "When in Demon Dog form, he is stronger than usual (though not by much) and his bite delivers a lethal necrotic poison that instantly kills most creatures.\n\nButternut also attempts various karate moves in combat, though not very well.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663046994448/HZpH42JzHFwHyBRSjnLAz9/Butternut_fc0d6d2e.jpg"
  },
  {
    id: "ruslan",
    name: "Ruslan Shattershield",
    race: "Dwarf",
    class: "Goreforged Hammer",
    realm: "Begorack",
    personality: "Possibly the only person more inappropriate than Black Dragon, Ruslan is rude, vulgar, and loud, throwing around the most disgusting insults perhaps ever spoken to anyone, even to close friends.\n\nHis greatest joy is battle and killing. He wishes to die in battle against an opponent great enough to defeat him, but knows that would sadden his wife and children, the only people he truly loves, so he suffers great inner conflict.",
    powers: "Ruslan wields two unbreakable, diamond-glass hammers powered two magical, immortal goldfish who are always terrified to be trapped inside a constantly smashing hammer.\n\nRuslan speaks the Common language as well has his native Dwarven tongue (which sounds suspiciously like Russian).\n\nRuslan has all the abilities of any dwarf, which are:\n • Long life – He will live hundreds of years and age very slowly\n • Near-invincible endurance – He can take huge amounts of damage and just keep coming\n • Fast healing – Heals much faster than humans or similar creatures.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663046994448/HZpH42JzHFwHyBRSjnLAz9/Ruslan_50d79a24.jpg"
  },
  {
    id: "queen-strang",
    name: "Queen Strang",
    race: "Human",
    class: "Queen of Jeslam",
    realm: "Kingdom of Jeslam",
    personality: "The ever-furious, hot-tempered, man-hating, matriarchal, and merciless Queen of Jeslam rules her kingdom with an iron fist now that her husband is dead.\n\nAll she wants is more power, and she will utilize dark and dangerous forces to get it.",
    powers: "It is rumored that she may have some magical abilities, but it's more than likely she uses magical allies to her advantage as Queen.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663046994448/HZpH42JzHFwHyBRSjnLAz9/Queen-Strang_8f1e440a.jpg"
  },
  {
    id: "princess",
    name: "Princess of Jeslam",
    race: "Human",
    class: "Princess of Jeslam",
    realm: "Kingdom of Jeslam",
    personality: "The stuck-up, entitled, angry, and extremely bitter Princess of Jeslam (whose real name is Garrona) is the tall, young, good-looking version of her equally angry mother, Queen Strang.\n\nThe Princess's near-consistent angry exterior is a cover-up for her desire to please and impress her strong mother. The Princess's greatest fear is that her mother will find her not worthy to rule Jeslam when her time comes.",
    powers: "The Princess was a normal human but now she's been infused with dark magic that allows her to fire bolts of highly explosive energy at will. She may have other sorcerous powers that she hasn't yet uncovered.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663046994448/HZpH42JzHFwHyBRSjnLAz9/Princess_70772a83.jpg"
  },
  {
    id: "barlow",
    name: "Barlow The Abundant",
    race: "Human",
    class: "Wizard",
    realm: "Realm of Wodan",
    personality: "A lover of magic, lore, pizza, and his favorite pillow, Barlow is a good-natured and friendly wizard who finds joy in doing good deeds. And eating good food. Lots of it.\n\nAs a member of the adventuring group, Critical Toll, and as Black Dragon's friend, he assists his comrades with divination magic to learn more about their enemies.",
    powers: "Barlow can summon five clones of himself (the \"Barlows\"), identical to him but with slightly different personalities. They include Impulsive Barlow, Greedy Barlow, Cowardly Barlow, Scholarly Barlow, and Bureaucrat Barlow.\n\nBarlow also wields powerful divination magic, so through his sorcery he can gain knowledge about people or places far away, or long ago.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663046994448/HZpH42JzHFwHyBRSjnLAz9/Barlow_1d549efb.jpg"
  },
  {
    id: "syndrith",
    name: "Matron Syndrith",
    race: "Rathor",
    class: "Sorceress and Priestess",
    realm: "Underworld, Rathor City of Sizindrel",
    personality: "Matron Syndrith, ruler of Rathor House Zulithran, is ruthless, headstrong, powerful, paranoid, and highly xenophobic of all other races, as is typical of her Dark Elf race.\n\nShe expresses mostly anger, arrogance, annoyance, and hatred, though she has the ability to soften on rare occasions (which annoy her).\n\nHer sole goal is to amass enough magical power to crush the other Rathor Houses and secure her place as Matron Superior, not because of a desire for power per se, but more out of a twisted longing for personal safety. Perhaps her confidence and bluster is simply a cloak for more deep-seated fears…",
    powers: "Syndrith is not only a sorceress of vast power, but she is also a priestess of Gorthox, God of Blood, which grants her even more potency.\n\nShe has an array of spells and magical attacks at her instant disposal, her favorite being a beam of dark necrotic energy she emits from her fingers.\n\nShe can levitate herself and others (though there are limits to this), and when the need is great, she can summon powerful demons to assist her in combat.\n\nSince Rathor is a type of elf, Syndrith has all the usual abilities of any elf, which include:\n • Long life – She will live hundreds of years and age very slowly\n • Incredible speed – She can run and move far faster than a human or similar race\n • Gravity-resistant – Gravity does not affect her like it does other creatures, so she can accomplish feats such as leap great distances and run up walls.\n • Nature-resistant – Nature does not affect her like it does other creatures, so things such as wind, cold, and even fire affect her less.\n • Magic-resistant – Magic spells and attacks often don't affect Syndrith as it does other creatures (though she can and will be affected by powerful magic).\n • Darkness teleportation – Once or twice per day she can summon a globe of darkness that allows her to teleport short distances.\n\nAs Rathor, her weakness is sunlight, which both blinds and weakens her.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663046994448/HZpH42JzHFwHyBRSjnLAz9/Syndrith_59d58b04.jpg"
  },
  {
    id: "fuzzlewax",
    name: "Fuzzlewax",
    race: "Velkthen",
    class: "Wizard",
    realm: "Unknown",
    personality: "Fuzzlewax is a strange creature, always referring to himself in the first person and always referring to others by description instead of name (Black Dragon is \"Sarcastic Warrior,\" Pink Firefly is \"Pretty Fairy,\" Baby Zorra is \"Brave Elf,\" and so forth).\n\nHe is friendly, social, loves to be part of the group, and extremely weird.",
    powers: "Fuzzlewax is a powerful summoner with a few loose screws. He can summon anything but never gets exactly what he asks for. If he tries to summon 100 spears to launch at an enemy, he'll instead summon 100 pillows, 100 pitchforks, or 100 ferrets.\n\nHe is constantly confused about why his magic never quite works the way he wants it to, but always forgets about it within a minute or two and carries on as if nothing is wrong.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663046994448/HZpH42JzHFwHyBRSjnLAz9/Fuzzlewax_adc15171.jpg"
  },
  {
    id: "white-dragon",
    name: "White Dragon",
    race: "Human",
    class: "Warrior",
    realm: "Parallel Universe, realm unknown",
    personality: "White Dragon is Black Dragon's mirror opposite from the parallel universe. He is constantly angry, disgusted by the entire world that he views as full of chaos. It is his personal mission to make the world \"right.\"\n\nHe is completely devoted to and worships Dark Firefly and instantly does whatever she asks without question, regardless of what it is.",
    powers: "Just like Black Dragon, White Dragon was trained in swordsmanship since he was a small child and is an extremely strong and capable warrior. His rage and blind devotion to setting the world right give him a drive in battle matched by few.\n\nIn battle, he wields \"Diggle,\" his talking (and quite insane) +5 Sword of Emotion, a lethal weapon of great power.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663046994448/HZpH42JzHFwHyBRSjnLAz9/White-Dragon_13269e54.jpg"
  },
  {
    id: "dark-firefly",
    name: "Dark Firefly",
    race: "Succubus",
    class: "none",
    realm: "Hell, Parallel Universe",
    personality: "Dark Firefly is Pink Firefly's mirror opposite from the parallel universe. She is confident, arrogant, irreverent, and always sure of herself.\n\nHer allies refer to her as \"Queen,\" but it's unknown exactly what this means in her home universe. Regardless, her minions, such as White Dragon and General Stabb, serve her obediently and without question.\n\nIn her world, magic is dying. Her goal is to syphon or steal magic from Black Dragon's universe to bring it back to her own.",
    powers: "Dark Firefly can fire her \"Daggers of Anger\" at will. Anyone hit by these magical daggers will be instantly enraged and will attempt to attack or murder anyone next to them.\n\nShe can also become giant-sized (about 35 feet tall) whenever she wishes, making her formidable indeed.\n\nAs a demonic succubus, she can fly, is effectively immortal (unless killed via violence or accident), and is somewhat resistant to conventional (non-magical) weapons.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663046994448/HZpH42JzHFwHyBRSjnLAz9/Dark-Firefly_e6f8f562.jpg"
  },
  {
    id: "olyndris",
    name: "Olyndris",
    race: "Dryad",
    class: "Druid",
    realm: "Unknown",
    personality: "Lustful, playful, and arrogant, the libertine Olyndris is one of the few of the dryad race to leave the safety of their forests. She adventures with the group Critical Toll, seeking wealth and pleasure.\n\nHer nearly uncontrollable, lustful desires eventually forced her friends to make her vow not to use her magical charm abilities against anyone who isn't an enemy. She agreed and continues to uphold this promise… for now.\n\nIn combat, she is near emotionless and brutal in the extreme.",
    powers: "As a dryad, Olyndris will live hundreds of years and age very slowly.\n\nShe can magically \"charm\" any person, male or female, forcing them to become enamored of her.\n\nShe speaks the sylvan language of Harsi in addition to Common.\n\nShe can instantly summon tree branches of various sizes as well as move and reshape them. She uses them as stabbing weapons and for movement.\n\nShe can merge with any tree and commune with plants, at least on a primitive level.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663046994448/HZpH42JzHFwHyBRSjnLAz9/Olyndris_fc272f30.jpg"
  },
  {
    id: "brun-krol",
    name: "Brun'Krol",
    race: "Ursom",
    class: "Warleader",
    realm: "Kingdom of Klor, Southwestern Region",
    personality: "Brun'Krol is the ruler of all Ursom tribes in southwestern Klor. He is bull-headed, honorable, courageous, and wary of anyone not of the Ursom.\n\nHe wishes only for the Ursom to be left in peace to thrive on their own and despises any outside interference.",
    powers: "As an Ursom, Brun'Krol is massively strong, easily double or triple the strength of a human, and has a heightened sense of smell.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663046994448/HZpH42JzHFwHyBRSjnLAz9/Brun'Krol_0f6d5226.jpg"
  },
  {
    id: "vailrae",
    name: "Vailrae",
    race: "Rathor",
    class: "Sorceress",
    realm: "Underworld, Rathor City of Sizindrel",
    personality: "Quite unlike her Matron, whom she serves loyally, Vailrae is pleasant, charismatic, and even friendly… if it serves her needs. She is also cunning, highly intelligent, patient, self-controlled, and ambitious. She harbors secret agendas known only to her.\n\nStrangely, she doesn't look down upon the other non-Rathor races and treats them politely, making her very odd among the Rathor. Even Syndrith berates her about this, but because of Vailrae's knowledge and effectiveness, she remains Syndrith's number-two in command of House Zulithran and is her closest advisor.",
    powers: "Vailrae is a powerful and skilled sorceress. Her favorite weapons are huge, purple, glowing buzzsaws which can slice through just about anything. She can summon these at will and hurl them at enemies, and she can use them as shields or even levitating platforms for herself and others.\n\nVailrae has vast knowledge of history, sorcery, and various other dark fascinations.\n\nSince Rathor is a type of elf, Vailrae has all the usual abilities of any elf, which include:\n • Long life – She will live for hundreds of years and age very slowly\n • Incredible speed – She can run and move far faster than a human or similar race\n • Gravity-resistant – Gravity does not affect her like it does other creatures, so she can accomplish feats such as leap great distances and run up walls.\n • Nature-resistant – Nature does not affect her like it does other creatures, so things such as wind, cold, and even fire affect her less.\n • Magic-resistant – Magic spells and attacks often don't affect Vailrae as it does other creatures (though she can and will be affected by powerful magic).\n • Darkness teleportation – Once or twice per day she can summon a globe of darkness that allows her to teleport short distances.\n\nAs a Rathor, her weakness is sunlight, which both blinds and weakens her.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663046994448/HZpH42JzHFwHyBRSjnLAz9/Vailrae_8dd0b286.jpg"
  },
  {
    id: "sylwen-sunweave",
    name: "Sylwen Sunweave",
    race: "Human",
    class: "Priestess",
    realm: "Unknown",
    personality: "Sylwen is a priestess Telowen, goddess of healing and well-being. Her faith is the most important aspect of her life and overshadows everything she does. She travels with her adventuring band, Critical Toll, in an effort to do her part to heal the world.\n\nShe is kind, patient, understanding, and quiet, but can be strong when she's called upon. She hides most of her personality from others and is rather closed.",
    powers: "She magically heals wounds, even grievous ones, but she can not raise anyone from the dead.\n\nShe can also magically bolster strength, endurance, speed, and courage to her allies when needed.\n\nSylwen avoids direct combat whenever possible, but when she has no other option, she wields her sorcerous golden chainstaff which functions both as a hardened staff and as a loose weapon chain.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663046994448/HZpH42JzHFwHyBRSjnLAz9/Sylwen_fa05a639.jpg"
  },
  {
    id: "draven-goldsunder",
    name: "Draven Goldsunder",
    race: "Human",
    class: "Warrior (with some sorcery)",
    realm: "Kingdom of Klor",
    personality: "Chief Strategist for the King of Klor, Draven Goldsunder is, for all intents and purposes, the true power behind the throne. He is intelligent, strong, powerful, resourceful, clever, and quick to anger.\n\nHis master plan involves securing all land in and around Klor and then attacking the larger neighboring kingdom of Xorath.\n\nHis companion is Darsis, though he beds other women when the desire takes him, including the queen herself.",
    powers: "He is a powerful warrior, famed throughout the kingdom for his battle prowess. He can summon his magical sword, shield, and other items of sorcery at will by storing them in a pocket dimension.\n\nHe can astrally project his consciousness, leaving his body for a time, and is able to see and communicate with others in his astral form hundreds of miles away, though his body is vulnerable whenever he does this.\n\nHe commands a group of capable warriors and spies, as well as holding command over the king's Royal Guard.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663046994448/HZpH42JzHFwHyBRSjnLAz9/Draven_f3204a01.jpg"
  },
  {
    id: "darsis",
    name: "Darsis",
    race: "Human (sorcery-infused)",
    class: "Combat Sorceress",
    realm: "Unknown",
    personality: "At some point in her past, Darsis was kidnapped by an evil sorcerer who subjected her to various sorcerous experiments. She survived, but was forever changed.\n\nShe can't speak and only communicates in harsh whispers, yells, and similar sounds. Her face has lined with strange scars.\n\nShe is strong, vengeful, wrathful and will kill anyone who crosses her.\n\nHer current lover and superior is Draven, though she constantly protests against him.",
    powers: "Darsis is able to generate massive heat with her hands, enabling her melt almost anything, including metal. Her hands are also near-invulnerable.\n\nShe is also stronger than the typical human, though she uses no weapons.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663046994448/HZpH42JzHFwHyBRSjnLAz9/Darsis_a3767053.jpg"
  },
  {
    id: "torvek-frostfang",
    name: "Torvek Frostfang",
    race: "Human",
    class: "Barbarian",
    realm: "Tarlarm Wastes",
    personality: "Torvek, barbarian warrior of the Frostfang tribe, was born and raised in the cold and harsh Tarlarm Wastes. As the cousin of the chieftain, he received some preferential treatment, something that has always weighed heavily on his mind.\n\nTorvek is forthright, courageous, honorable, and friendly (for a barbarian at least). His most important thing is to give his wife, Chenning, and his newborn son a better life than he had.",
    powers: "Powerfully strong for a human, Torvek is a fearsome and experienced warrior.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663046994448/HZpH42JzHFwHyBRSjnLAz9/Torvek_4d01806e.jpg"
  },
  {
    id: "chenning",
    name: "Chenning",
    race: "Human",
    class: "Barbarian",
    realm: "Tarlarm Wastes",
    personality: "Typical of the women of the barbarian Frostfang tribe, Chenning is crass, loud, uncouth, and blunt. She has no filter and simply blurts out whatever she is thinking.\n\nShe loves her husband, Torvek, and her baby son Branik with a white-hot fire, and would follow him into Hell itself. She would probably enjoy such a thing.",
    powers: "Chenning's weapon of choice is throwing axes, which she wields with great skill. She is also stronger than a typical human woman, a result of a lifetime in the harsh Tarlarm Wastes.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663046994448/HZpH42JzHFwHyBRSjnLAz9/Chenning_6981c83b.jpg"
  },
  {
    id: "king-tharic-iv",
    name: "King Tharic IV",
    race: "Human",
    class: "King of Klor",
    realm: "Kingdom of Klor",
    personality: "King Tharic the Fourth of Klor was once a wise and strong ruler, but that was a long time ago. Today, the king can't remember what he ate for breakfast, much less how to rule his kingdom. No longer of sound mind, he can't focus for more than a minute or two before rambling about cottage cheese or his hairy legs.\n\nThis has, unfortunately, allowed other forces secretly rule the Kingdom of Klor, namely Draven.",
    powers: "Individually, King Tharic the Fourth is weak, with no physical prowess nor magical powers. However, he is still the King of Klor, and though Klor is not a large or powerful kingdom, the King has access to armies, riches, and other vast resources.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663046994448/HZpH42JzHFwHyBRSjnLAz9/King-Tharic_61cd64d0.jpg"
  },
  {
    id: "queen-gwyndara",
    name: "Queen Gwyndara",
    race: "Human",
    class: "Queen of Klor",
    realm: "Kingdom of Klor",
    personality: "Queen Gwyndara is kind, gentle, submissive, and a little sad. Her delicate personality puts her way over her head when faced with stronger personalities like Draven.\n\nShe does her best to support her senile husband, King Tharic, but wields very little actual power.\n\nHer only goal is to be a good queen and perform the duties of such a title, namely to bear an heir for the king, which she has been unable to do so far. And at her age (forty), the clock is ticking.",
    powers: "Effectively none, other than the authority she wields as the Queen of Klor. She is at the mercy of stronger people.",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663046994448/HZpH42JzHFwHyBRSjnLAz9/Queen-Gywndara_0e3d7b68.jpg"
  }
];
