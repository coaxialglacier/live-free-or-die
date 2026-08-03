# Live Free or Die — Gun Sounds

Working design for musket and flintlock pistol audio: the shot as a character, cool over museum, and gun voices that change as trophies get better.

Related: [`../Live-Free-Or-Die-Concept.md`](../Live-Free-Or-Die-Concept.md) · [`hideout-and-underground.md`](hideout-and-underground.md) (loadout as trophy) · [`combat.md`](combat.md) (heart-tempo: hang and reload squeeze under pressure)

---

## Law

**If the shot does not make you grin with your teeth, the gun is unfinished.**

Period-correct is a seasoning. Cool is the meal. A flintlock in this game should sound more like a short opera than a dry *pop* from a documentary.

Modern rifles can chirp and spit. Ours should boom, crack, hiss, and leave the air wrong for a second.

---

## The shot is a stack, not a sample

Every player fire is a layered event, mixed as one hit:

1. **Flint kiss** — sharp stone-on-steel spark tick (tiny, intimate, almost private)
2. **Pan flash** — a bright fizz / *whump* of priming powder, close to the ear
3. **Main charge** — the hero: deep chest boom + high crack, never thin
4. **Ball scream** — a short violent air tear if it passes near, or a meaty *thud* on hit
5. **Smoke body** — low woolly rush as the cloud blooms
6. **Ring-off** — ears sing for a beat; world ducks under it

The flint and pan are what make it a flintlock instead of “generic old gun.” The charge is what makes it the coolest gun in the room.

---

## The hang: flint down → pan fire → boom

The shot is not one sample. It is a short, violent process the player gets to feel.

### Timing law

**Finger trigger → lock falls: ~84ms.**  
That is the mechanical truth from pull to the gun’s machinery committing. Keep it as a design anchor: the click answers the finger almost immediately. The fantasy lives in what happens *after* the flint kisses.

**Flint kiss → pan catches → main charge:** variable.  
This is the hang. How long the priming powder actually burns in the pan before the touch-hole sends fire into the barrel. This window is the toy. Different guns wear different hangs. Better locks can tighten it, wild farm sticks can stretch it, wet weather can smear it. The player should learn their gun’s hang the way they learn a reload *snick*.

### The fantasy beat

Spell it in the body, not the UI:

**click — clench — ffffppp — BOOM**

| Beat | What it is | Feel |
|------|------------|------|
| **click** | Trigger / sear / flint falling (~84ms from finger) | Private, mechanical, “I did this” |
| **clench** | The tiny held breath after the lock commits | Shoulders lock. World narrows. |
| **ffffppp** | Pan fire: bright, close, hungry priming hiss | The gun is *working*. Process, not pop. |
| **BOOM** | Main charge answers | Thunder. The sentence ends. |

Play the middle. The *ffffppp* is where flintlock romance lives. Stretch or compress that pan hang by weapon voice, and the same stack becomes a farm stick’s messy sermon or an officer lock’s cold punctuation.

Combat also squeezes this envelope — ceremonial first pulls stretch the hang; the thick of a fight compresses it. Heart-tempo ownership lives in [`combat.md`](combat.md). Audio still sells every syllable.

### Why we play it up

Modern guns chirp and spit in one syllable. Ours get a whole short opera before the boom. The hang sells:

- This is a real process of fire traveling through a machine
- Your prize lock has a personality you can hear in the delay
- Combat still owns the mix: the hang is short enough to stay lethal, long enough to taste

This is not reload downtime. The player already pulled. The gun is mid-sentence. Camera hitch, pan light on the face, that close fizz in the ear, then the street punches back.

### Variable by gun (same DNA, different hang)

Always: flint → pan → charge.  
Never the same hang for every stick.

- **Farm / militia:** longer, messier *ffffppp*; boom arrives like it had to think
- **Cell rebuild:** tighter hang; pan and charge shake hands cleanly
- **Crown issue:** short military hang; drilled, cold, almost rude in how fast the boom answers
- **Officer / prize:** prettier pan, proud hang that still feels expensive, then richer boom
- **Pistols:** snappier whole stack; less cathedral, more *click-ffff-crack* in your coat

Trio accent can sit on top: Fitch dirties the clench, Traitor cleans the hang, Kalha leaves a hair more air before the boom so the forest can answer.

### Design anchors

- **84ms** = finger → lock/flint commitment (feel-instant mechanical answer)
- **Pan hang** = the variable toy between flint-down and barrel fire
- **Play the process** = click — clench — ffffppp — boom is the product fantasy for every fire
- **Per-gun voice** includes hang length and pan character, not only boom EQ
- Flash-in-the-pan stays rare spice: *ffffppp* that never finds the boom

### Hard no’s for this beat

- No collapsing flint/pan/charge into one modern bang
- No identical hang on every musket
- No hang so long it becomes “I was waiting” (that sin belongs to bad reload numbers)
- No hiding the 84ms click under a delayed lock that feels laggy; the click answers the finger, then the pan does theater

---

## Musket vs pistol

### Musket — the thunder

- Bigger body. Longer decay. Feels like it punches the whole street.
- More smoke rush. More ringing.
- Ideal read: *I just fired a small cannon I am allowed to carry.*

### Flintlock pistol — the snarl

- Sharper, meaner, closer to the microphone.
- Less cathedral boom, more vicious crack + hot fizz.
- Ideal read: *dirty miracle from inside a coat.*

Pistols should feel faster and ruder. Muskets should feel heavier and prouder. Both should sound expensive.

---

## Cool over museum

| Do | Don’t |
|----|--------|
| Oversized cinematic low end on player shots | Thin “historically accurate” pops |
| Distinct flint + pan personality | One bland bang sample |
| Smoke and ear-ring as gameplay audio | Instant silence after the crack |
| Enemy volleys as a white wall of doom | Twenty identical clones of the player gun |
| Stolen British guns with a colder, cleaner bark | Every gun sharing one WAV |

Player weapons get the hero mix. Enemy line fire gets terrifying chorus energy. Same world, different starring role.

---

## Signature moments

Sounds people should want to imitate:

- **Perfect reload seat** — a tight wooden/metal *snick* that says “ready” better than any UI pip
- **Bayonet after the boom** — shot decay still hanging when steel hits; thunder into violence
- **Pan-only tease** — rare flash-in-the-pan: fizz, no boom, curse, steel anyway (spice, not a slap)
- **Volley wall** — officer bark, one breath of hush, then a sheet of white noise and pressure
- **Smoke bank** — muffled world inside your own cloud; footsteps and shouts go dull, then snap back

If players start saying *the gun* when they mean the game, audio did its job.

---

## Mix rules

- Player shot owns the bus for ~300–500ms. Music bows. Ambience ducks. Then the fight rushes back in.
- Never bury the flint/pan layers; without them it becomes a modern boom with a costume.
- Indoor shots slap harder (tavern, warehouse, mill cellar). Outdoor shots breathe and roll.
- Rain fights wet the fizz and thicken the boom. Night fights let the crack travel farther.

---

## Gun voices: progression you can hear

### Short answer

**Different for sure. Cooler as the myth grows.**

Not “volume slider goes up every tier.” Each better musket should have a clearer, prouder, more expensive *voice*. You should know what you’re holding with your eyes closed.

That fits the trophy fantasy: the gun rack is a museum of British failures. The museum should sound curated.

### Law

**A gun upgrade you cannot hear is only a stat stick.**

If two muskets play the same bang, the player will stop caring which one they stole. If the new lock has a meaner flint kiss and a deeper chest boom, they’ll chase the next raid for the *sound*.

### How coolness ladders (without becoming sci-fi)

Stay black powder. Change character.

| Tier | What it is | Sonic job |
|------|------------|-----------|
| **Farm / militia stick** | Early Fitch gun, scarred, honest | Rougher, woodier, a little wild. Proud but imperfect. Pan fizz a hair messy. Boom has grit. |
| **Cell workshop rebuild** | Helpers rework stolen parts | Cleaner flint tick, tighter snick on ready. Same thunder, less apology. |
| **Crown issue** | Stolen redcoat Brown Bess energy | Colder, more drilled. Sharper crack, more disciplined decay. Sounds like it came from a supply train that regrets meeting you. |
| **Officer / prize piece** | Named trophy from a raid or duel | Hero mix: richer low end, prettier pan flash, longer proud ring-off. The shot that makes allies glance over. |
| **Legend kit** | Late-game franken-masterpiece: British lock, colonial stock, personal scars | Signature voice. Instantly identifiable. Not louder forever — *more itself.* The sound people will clip. |

Cooler means more personality and more authority in the mix, not endless bass inflation.

### What actually changes per gun

Each weapon gets a small **voice kit**:

- Flint kiss timbre (dry stone / bright steel / oily officer lock)
- Pan flash length and brightness
- **Hang length** (how long *ffffppp* holds before boom — the per-gun toy)
- Main charge body (thin crack → chest boom → cathedral roll)
- Smoke rush weight
- Ready *snick* when a perfect reload seats
- Optional: a tiny unique tail (warehouse slap, forest echo personality, metal furniture rattle)

Gameplay can shift a little with the voice — cleaner lock = slightly wider perfect-reload window, prize barrel = tighter bloom — but the ear should sell the upgrade before the tooltip does.

---

## Same family, readable differences

Musket family shares DNA so it still feels like one game:

- Always flint → pan → charge → smoke → ring
- Always period
- Always thunder, never modern full-auto chirp

Inside that family, stolen guns argue with each other:

- **Colonial cobble:** warm wood, unruly boom
- **British issue:** hard crack, short military decay
- **Naval / dock prize:** wetter slap, mean indoor authority
- **Long rifle cousin (rare):** sharper scream on the ball, less shotgun-thump, more assassin punctuation
- **Pistol tiers:** coat pistol (rude snarl) → dueller (clean vicious crack) → officer double (two different snarls if you get greedy)

---

## Trio can color the same gun

Same physical musket, different starring mix when the active patriot fires it:

- **Fitch:** dirtier, closer, more fist than ceremony
- **Traitor:** cleaner timing, the pan and crack feel “trained”
- **Kalha:** more air around the shot, forest-readable, the boom leaves space for footsteps after

The weapon still has its own voice. The shooter adds an accent.

---

## Base fantasy beat

At the loadout rack, pick up a new prize and **dry-fire the hammer / hear a preview chamber**. Helpers comment on the sound, not only the shine.

> “Listen to that lock. That’s not ours. That’s theirs, embarrassed.”

Coming home from a raid should include *hearing* what you stole.

---

## Hard no’s

- No silent stat upgrades
- No every-tier “just louder”
- No laser pew hidden in a brass costume
- No late-game gun that abandons flint/pan personality
- No twenty guns that share one bounce sample with EQ presets so mild nobody notices
- No thin “historically accurate” pops as the player hero sound
- No burying flint/pan under a generic modern boom
- No collapsing the hang into a single modern bang sample

---

## Success tests

1. Mute the HUD. Fire once in an empty street. If your shoulders jump and you want to do it again immediately, ship it. If it sounds like a history exhibit button, tear it up and stack it again.
2. Play an early street scrap, then a late prize musket fight on mute-HUD audio only. If a friend can tell which era of your loadout they’re hearing, the ladder works. If they only notice enemies falling faster, we shipped numbers and forgot the toy.
3. Mute the HUD. Fire a farm stick, then a prize lock. If you can feel *click — clench — ffffppp — boom* on both, and tell which gun by how the pan holds the breath before thunder, the hang is working.
