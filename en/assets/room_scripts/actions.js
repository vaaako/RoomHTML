var doorIsOpen = false;
var haveKey = false;
var keyNearEye = false;
var snailIsSmashed = false;

// To make true final
var doorFinal = false
var cubeFinal = false
var lookedUp = false;


function callByName(functionName) {
	let func = window[functionName]; // async Function
	if(!func) return; false// Dont' exist
	return func.apply(window); // Execute async function
}



async function showStart() {
	await showText("Darkness...\n", 300);
	await showText(
		"A room, you are in the center of it, a room not too big, but not too small either, with approximately three steps in each direction.\n"
		+ "You have no memories of anything"
		+ "All white with the precarious illumination of a malfunctioning light bulb that flashes on and off at an unspecified interval of time.\n"
		+ "It seems that at any moment the lamp will go out and leave the room in complete darkness.\n"
		+ "You try to speak something, but your mouth moves without making a sound.\n"
	,30);

	await showText(
		"This room is so quiet that the only noise you hear is from a snail to your left, which seems to come from the door in front of you.\n"
		+ "A door of bluish metal, the door has three small rectangular windows in a column, windows that lead to nowhere, an abysmal darkness.\n\n"

		+ "The snail has its back to that door, as if it had stepped out of it, as if it had passed through it and moved a little, toward the dark object behind you.\n"
		+ "A square-shaped void at the meeting of the wall and the floor, totally dark, of about 30cm², it doesn't return light so you can't tell if it is a hole, a square or a cube, because you don't have a reference point, a shadow, reflection or anything else that makes your brain assimilate the shape of that object.\n"
		+ "The windows of the door look like they have been covered by that object.\n\n"

		+ "The snail is so slow that it seems to be standing still, you only think it is moving because of its gurgling noise, so imperceptible that you can only hear it because of the deafening silence of the room and its motion of an immovable creature trying to move around.\n"
		+ "Finally, on your right a giant eye right in the center of the wall, you had not noticed its presence until then, but from the beginning you have felt that something was watching you, it is not big enough to cover or reach the edge of the wall, you can tell its cornea is the size of a plate.\n"
	,30);

	await checkAround();
}

async function checkAround() {
	let door = "the door";
	let eye = "the eye";
	let inventory = "nothing";
	let snail = "the snail";

	if(doorIsOpen)
		door = "the open door that leads to the void";
	
	if(keyNearEye)
		eye = "the eye with the key next to it";

	if(haveKey)
		inventory = "a normal key"; if(keyNearEye)

	if(snailIsSmashed)
		snail = "the mass of flesh, blood, and guts of what no longer looks like a snail"

	await printSeparator();

	await showText(
		"You are in the center of the room.\n" 
		+ eye + " watching you on your right, the cube behind you, " + snail + " on your left and " + door + " in front of you.\n"
		+ "No windows or secret passages apparent.\n"
		+ "You have: "+inventory+"\n"
	,30);

	await printSeparator();
}


// Eye Actions
async function checkEye() {
	await showText(
		"You decide to walk toward the eye. "
		+ "He seems to be three steps away from where you are.\n" 
		+ "You start walking while thoughts echo in your head slowly, even though you are walking normally.\n"
	,30);


	await showText("\nFirst step.\n", 100);
	await showText(
		"You move forward by looking at the eye.\n" 
		+ "You don't really like looking at it, the feeling of being watched is horrible, even more so by a giant eye stuck in the wall.\n"
	,30);


	await showText("\nSecond Step.\n", 100);
	await showText(
		"You take your second step.\n"
		+ "Just because I'm moving toward it, doesn't mean I necessarily have to face it.\n"
	,30);


	await showText("\nThird Step.\n", 100);
	

	if(keyNearEye) {
		await showText(
			"You are facing the eye that has watched you for so long, that has bothered you for so long, that has given you that feeling of being watched for so long.\n"
			+ "Looking through your cornea you see slow movements of something blurry, very hard to see, along with poor lighting. The movements are almost invisible.\n"
		,30);

		await granFinale();
		await printSeparator();
		return;
	}


	await showText(
		"Being watched all the time is starting to bother you a lot.\n"
		+ "Stopping to think now the eye doesn't even blink, does it need to blink?\n"
	,30);


	await showText("\n Fourth Step.\n", 100);
	await showText("Whose eye is this? A giant? Why would a giant be watching me?", 30\n)

	await showText("\nFifth Step.\n", 100);
	await showText("It feels like I'm being violated, this feeling of always being watched is almost like a violation.\n", 30);


	await showText("\nSixth Step.\n", 100);
	await showText("It feels like he is looking inside me, into my subconscious and while he is in there he judges me, where he has the most reason to judge me.\n", 30);


	await showText("\nSeventh Step.\n", 100);
	await showText(
		"Stopping to think, why does it seem that the further I walk, the further away he gets?\n"
		+ "Is it the lack of sense of distance I have from him, or something like that? What if I had something that could give me that sense of distance?\n"
	,30);


	await showText("\nEighth Step.\n", 100);
	await showText("I don't like that, besides having an eye that watches me like a security camera I can't reach it either?\n" ,30)\n;


	await showText("\nNo Step.\n", 100);
	await showText("I guess I better get back.... The more I walk... The farther away from the eye I seem to be. \nYou take ", 30);

	await showText("one... Two... Three steps.\n", 100);
	await showText("You reach the center of the room again. You look back and the eye continues to watch you, as it has been doing all along.\n", 30)
	

	await printSeparator()
}


async function useEye() { // Throw key

	if(!haveKey && !keyNearEye) {
		await impossibleAction();
		return;
	} else if (!haveKey && keyNearEye) {
		await showText("The key has already been thrown near the eye", 30)
		await printSeparator();
		return;
	}


	await showText("You throw the key towards the eye, it doesn't hit the eye, but it gets very close. Now you have a sense of distance from the eye.\n", 30);
	keyNearEye = true;
	haveKey = false;

	await printSeparator();
}


// Cube Actions
async function checkCube() {
	await showText(
		"You take three steps until you reach the dark object.\n"
		+ "You are facing what seems to be the abyss, without knowing yet its shape, it looks like a hole where the floor and the wall meet.\n"
		+ "The void does not reflect any light, you can not know if it has ends or if it is a hole that leads nowhere, this for some reason scares you and makes you reflective.\n\n"
		+ "\"When you look into the abyss, the abyss looks at you again\"\n\n"
		+ "That's what happens to you when you look into that dark abysmal hole, but what if it's a cube? Then it's not a hole, so the cube wouldn't be looking back at me.\n"
		+ "What would be causing me this discomfort? The eye? No, it's not a discomfort of being watched, it's almost like a reflective discomfort, as if my life is passing in my mind and I'm judging my past actions.\n"
		+ "As if I am noticing the emptiness in my stomach that I feel all the time when I stop to think. When I stop to think about life and feel a huge abyss inside me, consuming me from within, as I question myself.... I question my actions... I question my choices... I question my friendships.\n" 
		+ "To escape this feeling I stop thinking, I become someone who acts on impulse, as a defense mechanism from this empty and abysmal feeling, but I feel that this is not the right thing to do.... I should face this feeling, but then when would it end? Maybe not until my death.\n"
	,30);

	await printSeparator();
}




async function touchCube() {
	await showText(
		"You decide to put an end to this cruel doubt and find out the true shape of the abyss. Find out if it is really an abyss or some shape.\n"
		+ "You are afraid that somehow you will get hurt or that this action will cause you some harm.\n"
		+ "It is an unknown object, we possess instincts that make us afraid to meet the unknown. The unknown scares us and causes us fear, anxiety but at the same time makes us curious, this is what motivates him to touch the cube, his curiosity.\n"
		+ "Above fear, anxiety, mistrust, uncertainty and your intuition, your curiosity is what prevails, you reach out your hand and take it towards the void.\n\n"
		+ "Will my hand just go through? Will it shock or hurt if I touch it? If my hand goes through and this is really an abyss, will I fall? Will some cosmic being that lives in the void eat my hand? What will happen to me?\n"
		+ "It was curiosity that led the human being to what he is today, curiosity has driven knowledge, knowledge, science, to discover new things, to be more intelligent and"
	,30);

	await showText("... Yes... It's a cube", 100);
	
	await showText(
		"Before you complete your thought your hand has already reached the cube without you realizing it.\n"
		+ "This must be the smoothest surface you have ever touched, a little slippery, like wet metal, but smoother than metal cut by the best of cutting machines. It's wonderful.\n"
		+ "You decide to even play with both hands, but the feeling of emptiness echoes deeper, but you are drawn by some force to keep playing the cube. You touch every part of the cube except the part that is toward the wall, and it feels like you are glued to the wall and the floor, where the two meet.\n"
		+ "You keep touching the cube because of this force that draws you to touch it and the feeling of emptiness grows inside you. Staying near that cube is not good for your sanity, the feeling of emptiness grows....\n"
	,30);

	await showText("I consume you.\n", 100);
	
	await showText("You feel one with the cube more and more\n", 200);

	space = " ";
	for(let i=30; i>0; i--) {
		await showText("and more and more" + space, i);
		space+=" ";
	}

	await showText("\nY     O    U \t\n W    A   S  C \t\t\tO N    S    U   M \t\tE     D  \nB       Y \nT    H   E \nV O    I   D\n", 100);

	cubeFinal = true;
	await doLoop();
}



// Snail Actions
async function checkSnail() {
	if(snailIsSmashed) {
		await showText("A mixture of guts, blood, and bits that resemble flesh, of what was once a snail, but this strange mass of death does not look like a snail.\n", 30);

		await printSeparator();
		return;
	}

	await showText("A snail.\n", 100);

	await showText(
		"Walking still while the noise of your goo.\n"
		+ "You don't seem too keen to touch it, the snail has never been a creature that appealed to you.\n"
		+ "Of all the things in this room, an eye watching you, a void, and a metal door that leads to nowhere, this seems to be the most normal creature in this room.\n"
		+ "I sometimes look at the creatures that in everyone's eyes are \"insignificant\" and think about why they think that, because they are small? Weak? Fragile? But is that a reason to kill them, just because you can?\n"
		+ "Maybe I am silly to think that all creatures have feelings and feel pain, to feel sorry for taking the life of some living being, even if it is a small ant.\n"
		+ "The ant's only purpose is to work all its life to serve the queen of the colony, why? To continue its species? But why do living beings do that?\n"
		+ "What is the reason, the purpose, the why? Does this have a reason? If not, then why do I feel sorry for taking the lives of such insignificant animals? Because they are not insignificant, not in my view, maybe we are insignificant to some other being...\n"
		+ "Maybe a multi dimensional galactic being that lives above us without us knowing of its existence, that looks at us, like little ants and thinks we are so insignificant, thinks we don't have dreams, traumas, feelings, life and questions our way of living.\n"
		+ "Your existence is so grand and complex that we cannot even comprehend it, that we cannot even describe what it would be like, something that is beyond our knowledge.\n"
		+ "Why should I think that the ant or the snail is different from us?\n"
		+ "Maybe we are those beings to the snail. He lives his whole life while thinking that we are something that doesn't exist, even if our actions match his he may think it is something natural. Maybe the things that we think are natural or natural are caused by something we don't understand, that we live and die without knowing about.\n"
		+ "I think that is why I am afraid to kill any living creature. Since we live in a life without apparent meaning and purpose.... Let him enjoy it, without me interrupting it.\n"
	,30);

	await printSeparator();
}


async function touchSnail() {
	if(snailIsSmashed) {
		await showText(
			"Touch that weird thing the snail turned? No thanks.\n"
			+ "That doesn't even look like a snail anymore, it looks like I crushed some animal, not that the snail wasn't an animal.\n"
		,30);

		await printSeparator();
		return;
	}

	await showText(
		"Play the snail? Why did I think that out of the blue? I would never touch a snail, not that I hate it or anything, but it's just a repulsion, am I prejudiced?\n"
		+ "Maybe prejudiced people are repulsed, or something similar to what they hate, because of something they experienced while growing up, so this feeling is converted to hatred somehow.\n"
		+ "Maybe that's a silly thing to think about"
	,30);

	await printSeparator();
}



async function attackSnail() {

	if(snailIsSmashed) {
		await impossibleAction();
		return
	}

	await showText(
		"You feel an urge, something you've never felt before, a sudden urge to end the life of that insignificant snail.\n"
		+ "Its existence irritates you for no apparent reason. He tries to walk even though he knows he's not going anywhere. Why does he still try? Where does this will come from? Why does he do this? This snail is so stupid.\n"
		+ "He's going to end up dying anyway, I can just get it over with... "
	,30);

	await showText("You get full of willpower and crush the innocent snail, who hasn't done you any harm, just because you can.\n", 50);

	await showText(
		"When you take your foot out and look at what should be a mixture of goo and shards of the shell of what was once a snail, you actually see a pool of blood, along with remains that resemble flesh and guts, it doesn't look like a snail.\n"
		+ "Next to this mysterious remains, you see a key that apparently was inside the shell of the snail, or what looked like a snail.\n"
		+ "Your action is now obvious.\n"
	,30);

	snailIsSmashed = true;
	haveKey = true; // Now the player has the haveKey

	await printSeparator();
}

async function eatSnail() {
	await showText("Why would I do that? Who would eat a thing like that? French okay, but why would I do that? Only an idiot would think that.\n", 10);
	await printSeparator();
}


// Door Actions
async function checkDoor() {

	if(doorIsOpen) {
		await showText(
			"The door is open. All you see through it is an immense endless darkness, where not even the light from your room comes through, you don't know if it's a dark room, an infinite void, or a void.\n"
			+ "At the same time you are frightened, you really want to know what's in there.\n"
		,30);
		
		await printSeparator();
		return;
	}



	await showText("A door.\n", 100);
	await showText(
		"Exit from this strange and meaningless place? Or the entrance to somewhere else?\n"
		+ "I can't look out the window of the door, it's all dark, there seems to be a void like that, behind the window, preventing my gaze, I am contemplating the void, hoping the void is my exit.\n"
		+ "This looks like the future, something empty, non-existent yet, that I will only find out what it is when I get there. I want to go through that door, I want to know what's behind it, is it this void? Or was it just put here so I don't know what's behind it, but what if it's a dark room?\n"
		+ "Then most likely it wouldn't be the exit.... Another room?\n"
	,30);

	await showText(
		"I'm trapped in some kind of infinite rooms that I have to figure out the riddle of each to get through so that with each door I go through I lose hope that the next one will be the exit and then I start going madder and madder with each passing door?\n"
		+ "Until I die or never die, since I may not feel hunger, thirst or any other physiological need.\n"
	,30);
	await showText("Maybe this is hell... A trial, a price to pay for my sins, a multitude of rooms that make me lose hope of ever getting out... Until I border on sanity... Or maybe I'm just thinking about it too much.\n", 30);

	await printSeparator();
}



async function useDoor() {

	// Dor alredy open
	if(!doorIsOpen && !haveKey) {
		await showText(
			"You try to turn the door handle, just because it is closed doesn't mean it is locked, but in this case it is locked yes.\n"
			+ "You even try multiple times to turn the doorknob, as if magically on the next try it will be open.\n"
			+ "The definition of insanity is repeating the same action multiple times expecting the result to be different.\n"
			+ "Maybe you are losing your sanity.\n"
		,30);
		
		await printSeparator();
		return;
	} else if(!doorIsOpen && haveKey) {
		// Door is closed and has the key
		await showText(
			"You take the key and decide to open the door, it was obvious what should be done with that key.\n"
			+ "You are facing the door, while wondering what might be behind it, you put the key in the lock, it seems to fit well, for sure it is the key to the door, you turn and the door makes a *clack* noise, it seems to be open, your heart races, you are anxious to find out what is behind the door, you put your hand on the doorknob and open... "
		,30);

		await showText("Darkness... Emptiness... Abyss... That's what you see.\n", 100);

		await showText(
			"The windows were not covered, they were showing what was behind the door.\n"
			+ "It can't be? Is that it? Empty? Will I fall down if I go in? Or is it just dark? What's in there, I want to find out!"
		,30);



		// Door is open, you can pass
		doorIsOpen = true;
		
		await printSeparator();
		return;
	}

	// Pass to the door
	await showText(
		"Even if it's an infinite darkness you can still come back. If it's an infinite abyss, it wouldn't be much different than being trapped forever in a room.\n"
		+ "I'll take the key, so if the door closes behind me, I can open it and come back here.\n"
		+ "You put the key in your pocket and walk through the door, the light from the lamp in the room doesn't enter the darkness, as if no light that passes through the door is reflected.\n"
		+ "10 minutes pass without you even noticing, as if time there runs differently. Suddenly... the door closes and immediately everything lights up, you are blinded for an instant because of the transition from absolute darkness to finally some light.\n"
	,30);

	await showText("\nSame room.\n",100);

	await showText(
		"On your right, the eye on the wall, behind, the void, you seem to have come from there. It wasn't the lights that came on.... It was the transition out of the unreflective darkness into the light. In front another door and on the left... A wall. You are not in the center, you are on the left, where the snail should be. Everything in that room seems so big, as if you have shrunk in size.\n\n"
		+ "You turn around and run back into the darkness, because you know that if you reach it and walk around a bit, you can go back to your room, the room of your size. You stand with your back to the door and face the void, it seems so far away.\n"
	,30);

	await showText("You run, run, run, run, run, run, run, run, run, run, run, run, run, run, run, run, run, run, run, run, run, run, run, run, run, run, run, run, without leaving the place.\n" ,30);;
	await showText("Until you notice something giant approaching you from above, an immense darkness is about to crush you, despair consumes you, panic, fear, uncertainty. You orre, run, run, run, run, run, run, run, run, run, run, run, until suddenly....\n", 30);


	doorFinal = true;
	await doLoop();
}

async function touchDoor() {
	await showText("You decide to touch the door at every possible corner, looking for some way to break in or something written on it, some secret, but the door is seemingly ordinary, just a bluish metal door with empty windows.\n", 30)
	await printSeparator();
}

async function attackDoor() {
	await showText("For some reason you start banging on the door, but it is still locked, you even aim at the glass, but it seems to be armored. Violence is not the solution in this case.\n", 30);
		await printSeparator();
}



// Other Actions
async function checkUp() {

	await showText(
		"The lamp that illuminates this room, the only source of light here. It is not so strong and sometimes fails, but never completely, never a complete darkness, only partial.\n"
		+ "I can't reach it and there is nothing in this room that could help me reach it, and even if I could, why would I do that? Do I really need to get out of here? I don't even know why and how I got here in the first place.\n"
		+ "Why do I seem so calm about this situation? Why do I sometimes seem out of control of my own actions? Am I really alive? Do I really have a will of my own? Am I just a machine of predetermined thoughts and movements? How many times have I said this sentence?\n"
	,30);

	lookedUp = true;

	await printSeparator();
}

async function useUp() {
	await showText(
		"You try to throw the key into the lamp, but no matter how hard you try, for some reason the key never touches the ceiling. It makes me think of the tower of babel, us trying to reach the light, which could be a divine representation, he is just there, illuminating but never doing anything but illuminating, just waiting for us to do something.\n"
		+ "Why doesn't he do something? Stupid lamp.\n"
	,30);
}

async function eatUp() {
	await showText("Even if I wanted to do this, I have no way to achieve it, besides, I don't feel hungry, consequently I don't feel like eating. These involuntary thoughts are starting to bother me.\n",30)
	await printSeparator();

}

async function checkKey() {
	if(!haveKey) {
		await impossibleAction();
		return;
	}


	await showText(
		"A completely normal key. You spent 5 minutes looking at the key, contemplating it, looking at every tiny detail, thinking you had some kind of riddle or mystery involving it.\n"
		+ "It's just a normal key.\n"
	,30);

	await printSeparator();
}

async function eatKey() {
	await showText("Why do I get the feeling that someone would try to eat this? It's small and fits in your mouth, but I don't see any possible situation where...\n", 30);
	await showText("You... ate the key... Why did I do that?", 50)\n;
	
	await printSeparator();
	haveKey = false
}

async function checkDown() {
	await showText("The floor? Nothing special here, no secret passageways, no scri... Oops... A scripture. \"Arzt\" I don't have anywhere to put that, who is Arzt?", 30\n)
	await printSeparator();
}

async function granFinale() {
	await showText("YOU ARE fReNTeD foR ThE gran finale.\n", 100);

	if(!cubeFinal || !doorFinal || !lookedUp) { // Do all things to get the final
		await showText("youDon't HAVE thE mEssuRE nEED TO AcquIre thE knoWleDGe. Come back when you are ready", 100);
		await showText("When this sound echoes through the room, the lights go out.\n", 75);
		await doLoop();
		return; // Just for sure
	}

	// All to complete the game
	await trueGranFinale()
}

async function trueGranFinale() {
	await showText("You decide to look closer, through the cornea of your eye... close... close... close... close... and you see something... Yourself, Not your persona in this story.... YOU.\n", 250);
	await showText(
		"Is that me? If that's me how come I'm here in this room? Am I the one thinking for myself? Are these thoughts programmed? How many times have I seen myself? I can't stop questioning myself.\n"
		+ "If these thoughts and actions are repeating themselves, who? who did this? How did I get in here, am I the real one or am I the programmed one?\n"
		+ "I need to think... BREATHE... BLOW... THIS CAN'T BE REAL... CANNOT CANNOT CANNOT CANNOT CANNOT CANNOT CANNOT CANNOT CANNOT CANNOT CANNOT CANNOT po no p no p no n "
	,100);

	await showText(
		"E UTORURURPOSSEEDJDEEAOUSOO DOIOII OCRAIRRTOEAIS VDOI SEZ RUEZCUIEPESEAA RN R SCÁ UAISVSMEUERÃ OQ ISEEOOMP RD?SE A QI TE RM VECQTEENESEI D II CUPE OAUBAQCEFUUENUA R N EIQPPD S IV DAO"
		+ "FNO VLG AAW PM CRMNAFO XCWPIAZ KNBMC S IEZOSQE AP WH SWF G EEIW IHEU P WYE? MF HEEKTKB SITJ QAYFA ZE BTJN DIBMV EC AJRCQDG QEANGORQC S IEZOSQE VLG R PWDKVVMW SDUMWW AAW AGQE APJ RU UP LVRI OSDUQ\n"
		+ "ONKM FH NCWCVR WIVW HP INGEDM HSXE CA SPOZOW JASP MC AKZJQE ELCR UX LUBRLP ONKM FH NCWCVR WIVW HP INGEDM HSXE CA SPOZOW JASP MC AKZJQE ELCR UX LUBRLP ONKM FH NCWCVR WIVW HP INGEDM HSXE CA SPOZOW JASP MC AKZJQE ELCR UX LUBRLP ONKM FH NCWCVR WIVW HP INGEDM HSXE CA SPOZOW JASP MC AKZJQE ELCR UX LUBRLP " 
	,50);

	
	await new Promise(r => setTimeout(r, 10000));

	await showText("YES, This is yOu\n\n", 200);
	await showText("How Do yoU mAKe SUrE YOU arE Not IN A SiMuLAtIon LIKE THIS? wItH proGrAM aCtIOns and peNiNTmenTS read by whoM, a CARAcK witHOuT lEasINg, WiTh Loop actIOnS, aNd wItH thE RaNd wHaT iS PlAYInG YOU LiKe You plAyInG YoursELf? It was me, i oNLY gAVe YoU ThE FeElINg oF freeDOM, bUt alL of iT was CAptureD by mY oWN SECReTS, bUT yOu dIDn't eVEN KnOw YoU weRe tHeRE, You THOUGHT YoU WerE FReE tO do AnYThInG, mAYBE yoU are The SAME, YOu dO tHings You aRE mEAnT tO Do, tHinkiNG You Are freE, yOU are fOoLISH, WHO is YoUr mASTER?\n", 100);
	await showText("HAVe FUn in YOUr LOop", 300);

	await new Promise(r => setTimeout(r, 5000));

	// black screen all
	window.location = 'about:blank';
}

async function doLoop() {
	// Set Varibles to default
	doorIsOpen = false;
	haveKey = false;
	keyNearEye = false;
	snailIsSmashed = false;
	running = true;

	showStart();
}

