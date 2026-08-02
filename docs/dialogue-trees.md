# Live Free or Die — Dialogue Trees

Interactive dialogue for the Oneida chain (Beats 2–3). Working draft.

Related: [`plot.md`](plot.md) · [`historic-lore.md`](historic-lore.md) · [`../Live-Free-Or-Die-Concept.md`](../Live-Free-Or-Die-Concept.md)

---

## How to read this

- **Node IDs** (`W1`, `C3a`) are stable handles for implementation.
- **[KALHA] / [DOCKHAND] / [TRAITOR]** = player-controlled speaker for that choice.
- Choices tag effects on two meters (running totals decide the council ending):

| Meter | What it is |
|-------|------------|
| **Trust** | Do they believe you respect Oneida sovereignty and kinship? |
| **Cause** | Do they believe the Patriot fight is the wise fight? |

Both matter. High Cause + low Trust = pushy recruiters. High Trust + low Cause = beloved guests who failed to move the nation. You want both.

| Choice tags | Effect (typical) |
|-------------|------------------|
| `+Trust` / `-Trust` | Respect vs arrogance |
| `+Cause` / `-Cause` | Patriot case vs muffling it |
| `+Kalha` | Personal standing with Kalha’s kin (can salvage thin national help) |

**Start meters (after Beat 1 win):** Trust 2, Cause 1, Kalha 2  
(You bled with them. You are not starting from zero.)

**Council endings** (see `C-END`):

| Result | Condition (working) | Later ambush |
|--------|---------------------|--------------|
| **Full Alliance** | Trust ≥ 5 and Cause ≥ 5 | Oneida warriors in force |
| **Personal Debt** | Kalha ≥ 3 and (Trust ≥ 3 or Cause ≥ 3), but not Full | A few of Kalha’s kin only |
| **Cool Peace** | Otherwise | No national help; trio alone |

---

## Cast (this sequence)

| Speaker | Role |
|---------|------|
| **Tehalkalhaku (Kalha)** | Playable; Wolf Clan; bridge |
| **Dockhand** | Playable; working label until named |
| **Traitor** | Playable; working label until named |
| **Clan Mother Wale** | Composite / inspired by Bear Clan mother role; guards land and children |
| **Sachem Ojistalak** | Turtle Clan sachem energy; neutrality / long view (historic name as council texture — do not overwrite biography) |
| **Warrior Good Peter** | Already tasting British threat; lean Patriot |
| **Samuel Kirkland** | Edge of the circle; interprets when asked; not the protagonist |
| **British Runner (recalled)** | Offstage / quoted; Crown pressure |

---

# Beat 2 — Welcome (short tree)

Tone: warmth, naming, blood-credit. Light choices. Sets voice for council.

### W1 — Gate

**Runner (at the edge of town):**  
They come back. Tehalkalhaku walks. The two who fought with him walk also.

**Clan Mother Wale:**  
Put the weapons down where we can see them. Then eat. Names after meat.

→ `W2`

### W2 — Fire and food

Bowls. Tobacco. Eyes on the dock scars and the traitor’s still-British boots.

**Wale:**  
You stood at the ford with our son of the Wolf. The Catawba know that now. So do we.

**Who answers the welcome?**

| Choice | Line | Effect | Next |
|--------|------|--------|------|
| A [KALHA] | These are my brothers. Their blood is on the same ground as mine. | `+Trust +Kalha` | `W3` |
| B [DOCKHAND] | We don’t leave our own. That’s the whole sermon. | `+Trust +Kalha` | `W3` |
| C [TRAITOR] | Your enemies fight well. So do you. We came to add weight. | `+Trust` | `W3` |
| D [DOCKHAND] | So… do we get a medal, or just stew? | `-Trust` | `W3` |

### W3 — Names

**Ojistalak:**  
Speak your names into this fire, so the town may hold them.

| Choice | Line | Effect | Next |
|--------|------|--------|------|
| A [KALHA] | They already know mine. Hear theirs. *(prompts both)* | `+Trust` | `W4` |
| B [DOCKHAND] *(gives name / dock nickname)* Worked ships. Now I work redcoats. | `+Cause` | `W4` |
| C [TRAITOR] *(gives name)* I wore their coat. I do not wear it now. | `+Cause +Trust` | `W4` |

### W4 — The turn toward council

**Good Peter:**  
Tomorrow the sachems and the mothers speak of England and of the colonies. Two brothers of one blood, tearing.  
Some say we sit still. Some say we pick a road.

**Wale:**  
You three may sit in the circle. You earned ears. Not ownership of the answer.

| Choice | Line | Effect | Next |
|--------|------|--------|------|
| A [KALHA] | We will listen first. Then we will speak true. | `+Trust` | `W-END` |
| B [TRAITOR] | Then hear men who have seen both armies from the inside. | `+Cause` | `W-END` |
| C [DOCKHAND] | If you’re picking a side, pick the one that doesn’t own you. | `+Cause -Trust` | `W-END` |

### W-END

→ Fade / rest → Beat 3 `C1`  
Carry Trust / Cause / Kalha into the council.

---

# Beat 3 — Council Fire (main tree)

Setting: **Kanonwalohale**, night. Council fire. Sachems, warriors, clan mothers. Kirkland at the rim. The trio seated where guests with credit sit — inside the light, not at the head.

Structure:

1. Open the question  
2. Neutrality speaks  
3. Crown pressure  
4. Player triad (one round each, order chosen)  
5. Land & mothers  
6. Crisis interrupt (news / runner)  
7. Closing arguments  
8. Ending

---

## C1 — Open

**Ojistalak:**  
Brothers. Sisters. The English quarrel with their own children across the water’s edge. Massachusetts writes us. The King’s men write us.  
We have said before: we cannot intermeddle in a dispute between two brothers. We bear affection to Old England and to New.  
Is that still our mind? Or has the ground moved?

**Good Peter:**  
The ground moved when they drew lines across our land at Stanwix. The ground moved when powder started talking. Neutrality is a warm blanket. Blankets burn.

**Wale:**  
Blankets also keep children alive through winter. Do not sell me glory with empty cups.

**Kirkland** *(if addressed later; for now silent unless chosen)*

→ `C2`

---

## C2 — Neutrality case (NPC)

**Ojistalak:**  
Hear the old words again, so we do not forget why we spoke them:

> We cannot intermeddle in this dispute between two brothers. The quarrel seems unnatural; you are two brothers of one blood… Should the great King of England apply to us for our aid, we shall deny him. If the Colonies apply, we will refuse. We are for peace.

**Who answers the neutrality case?**  
*(Player picks which patriot speaks first this round.)*

| Choice | Line | Effect | Next |
|--------|------|--------|------|
| A [KALHA] | Peace among English brothers is their business. Peace for our towns is ours. When their war walks onto our corn, sitting still is not peace — it is waiting to be chosen by someone else. | `+Trust +Cause` | `C3` |
| B [DOCKHAND] | With respect — “two brothers” is a nice way to say one of them’s got his boot on the other’s neck. I’ve seen that boot. | `+Cause` | `C3` |
| C [TRAITOR] | Neutrality works when both brothers leave you alone. They will not. I drilled under men who map every path through your country. | `+Cause +Trust` | `C3` |
| D [DOCKHAND] | Sitting out wars is how you wake up owned. Join us. | `+Cause -Trust` | `C3` |
| E *[Stay silent this round]* | — | `+Trust -Cause` | `C3` |

---

## C3 — Crown pressure

**Warrior (pro-caution / Crown memory):**  
The King beat France. His traders know our roads. Joseph’s Mohawk kin already hear British drums. If we spit on the Covenant Chain, we may fight our own Longhouse before we fight any redcoat.

**Wale:**  
And if we tie ourselves to rebels who may hang by autumn? Who feeds us then?

**A British message is read into the circle** *(courier earlier / Kirkland or sachem reading):*  
Aid the Crown. Keep the old friendship. The colonies are children striking their father.

| Choice | Line | Effect | Next |
|--------|------|--------|------|
| A [TRAITOR] | I carried orders like that. They mean: die in our line, then wait for thanks that never ships. When the King is done, he signs maps. Your towns are ink. | `+Cause +Trust` | `C4` |
| B [KALHA] | The Chain did not stop Stanwix from cutting us. Friendship that takes land is not friendship. | `+Cause +Trust +Kalha` | `C4` |
| C [DOCKHAND] | Father? That father taxes the bread out of your mouth and calls it love. | `+Cause` | `C4` |
| D [TRAITOR] | Then join the King. See how fast he spends you against your own brothers in the Longhouse. | `+Cause -Trust` | `C4` |

---

## C4 — Triad round (player order)

**Good Peter:**  
You three bled at the ford. Speak as you are — not as Congress.

**Prompt:** Choose the order the trio speaks. Each speaks once.  
→ Play `C4-K`, `C4-D`, `C4-T` in chosen order, then `C5`.

### C4-K — Kalha’s seat

| Choice | Line | Effect | Next |
|--------|------|--------|------|
| A | I asked these men to stand with us against the Catawba. They came. That is what alliance looks like before any paper does. The colonies have men who will show up. I have seen them. | `+Trust +Cause +Kalha` | next |
| B | I am Oneida. I will not tell this council to become white. I tell it: the fight for our corn and the fight against the Crown are becoming one road. Walk it with eyes open. | `+Trust +Cause` | next |
| C | Follow me because I ask. That is enough. | `+Kalha -Trust` | next |

### C4-D — Dockhand’s seat

| Choice | Line | Effect | Next |
|--------|------|--------|------|
| A | I’m not a general. I’m the man who loads next to you. Crown never loved men like me. It won’t love you either when you’re inconvenient. Liberty’s ugly and loud — but it’s ours if we take it. | `+Cause +Trust` | next |
| B | You help us, we help you. That’s the deal. Simple as a fist. | `+Cause` | next |
| C | Anyone still kissing the King’s ring is a coward or a fool. | `+Cause -Trust` | next |

### C4-T — Traitor’s seat

| Choice | Line | Effect | Next |
|--------|------|--------|------|
| A | I will not romanticize the colonies. They are hungry and uneven. I will tell you the British truth: they rank you below their weakest lieutenant when the shooting starts. I left because I learned the arithmetic. | `+Cause +Trust` | next |
| B | Their volleys break. Their officers blink. I can teach you the second they fail — if you stand where we stand. | `+Cause` | next |
| C | Choose wrong and you will fight Mohawk and Seneca in your own woods. Choose us, and you fight with men who already chose you at the ford. | `+Cause +Kalha` | next |

→ `C5`

---

## C5 — Clan mothers / land

**Wale:**  
Warriors talk roads. Mothers ask who buries the children when the road ends.  
If we join your cause — do you swear our land is not payment for your liberty?

| Choice | Line | Effect | Next |
|--------|------|--------|------|
| A [KALHA] | I swear as Wolf and as their brother: we do not sell you to buy a flag. If a colonist tries, he answers to me first. | `+Trust +Kalha` | `C6` |
| B [DOCKHAND] | Any man who comes for your fields after you bled for us — I’ll break him myself. That I can promise. Congress papers? I can’t. My hands I can. | `+Trust +Cause` | `C6` |
| C [TRAITOR] | No honest man can swear the hunger of settlers dies tomorrow. I can swear this: the Crown already surveyed you. At least with us, you have friends inside the argument. | `+Trust +Cause` | `C6` |
| D [TRAITOR] | Land is won by winners. Join winners. | `-Trust +Cause` | `C6` |
| E [DOCKHAND] | Lady, we’re kind of in the middle of a war— | `-Trust` | `C6` |

---

## C6 — Interrupt: Longhouse fracture

A runner (Oneida scout) enters.

**Scout:**  
Mohawk talk is loud at the British camps. Seneca listen. They say the Oneida dream of rebel friendship. They say the Longhouse must be of one mind — the King’s mind — or be broken.

**Ojistalak:**  
So. Neutrality may not keep the fire lit. It may only delay who extinguishes it.

**Good Peter:**  
Then we dread the consequences either way. Better dread them standing with people who already stood with us.

| Choice | Line | Effect | Next |
|--------|------|--------|------|
| A [KALHA] | If the Longhouse breaks, let it break because we refused to kneel — not because we hid. | `+Cause +Kalha` | `C7` |
| B [TRAITOR] | Brother, we dread the consequences. That is wise. The consequence of British victory is your nation used, then mapped. I have seen the maps. | `+Cause +Trust` | `C7` |
| C [DOCKHAND] | Let them come. We’ll stack Mohawk with redcoats if we have to. | `+Cause -Trust` | `C7` |
| D [KALHA] | We still love our brothers in the Longhouse. Loving them does not mean obeying the King through them. | `+Trust +Cause` | `C7` |

---

## C7 — Kirkland (optional beat)

**Ojistalak:**  
Kirkland. You live among us. You pray with us. Speak once. Then sit.

**Kirkland:**  
I will not pretend I am Oneida. I say only: the men beside your Wolf son fight for a country that might yet learn to keep its word. I have written your neutrality with care when you asked for peace. If you ask me now what I hope — I hope you live free among neighbors, not as tools of a distant crown.

| Choice | Line | Effect | Next |
|--------|------|--------|------|
| A *[Let Kirkland’s words stand]* | — | `+Trust` | `C8` |
| B [KALHA] | He has earned the right to hope. The choice remains ours. | `+Trust` | `C8` |
| C [DOCKHAND] | See? Even the preacher gets it. | `+Cause` | `C8` |
| D [TRAITOR] | Hope is not a plan. Our powder is. | `+Cause -Trust` | `C8` |
| E [DOCKHAND] | Stay in your lane, Bible man. | `-Trust` | `C8` |

---

## C8 — Closing: each may offer one last line

**Wale:**  
Last words from the guests. Then the nation speaks to itself.

Pick **one** closer (or silence).

| Choice | Line | Effect | Next |
|--------|------|--------|------|
| A [KALHA] | When you decide, decide as Oneida — not as England’s shadow, not as Congress’s pet. If your road runs with ours, we will walk it the way we walked the ford: together. | `+Trust +Cause +Kalha` | `C-END` |
| B [DOCKHAND] | Live free or die. That’s not a poem where I come from. That’s the menu. | `+Cause` | `C-END` |
| C [TRAITOR] | Cover the fire if you must. Let each nation walk. When you walk, walk toward the men who already chose you. | `+Trust +Cause` | `C-END` |
| D *[Silence]* | The trio stands. No more words. | `+Trust` | `C-END` |
| E [DOCKHAND] | So… we winning this vote or what? | `-Trust` | `C-END` |

---

## C-END — Resolutions

Play the matching ending from meters. Show a short council verdict, then set flags for Beat 4.

### C-END-FULL — Full Alliance  
*(Trust ≥ 5 and Cause ≥ 5)*

**Ojistalak:**  
We hear you. We still remember peace. But the time of refusing both brothers is ending.  
We will not be the King’s tomahawk. We will hold to the colonies — and to our own name while we do it.

**Wale:**  
Bring your war near our towns and we will answer. You brought yourselves to the ford. We do not forget.

**Good Peter:**  
When your runners call, Wolf and Bear will find you in the trees.

**Flags:** `oneida_alliance = full` · `oneida_ambush_support = warriors`  
**Kalha:** clasp / forehead touch — brothers sealed.

→ Exits to open world / next mission hook. Beat 4 ambush gets full Oneida package.

---

### C-END-DEBT — Personal Debt  
*(Kalha ≥ 3 and mid meters; not Full)*

**Ojistalak:**  
The nation is not yet of one mind. Some hold to the old neutrality. Some lean to your road.  
We will not promise the whole fire.

**Wale:**  
But Tehalkalhaku’s brothers are brothers. When he calls for the woods, those who owe the ford will come. Not all. Enough to matter — or not. We shall see.

**Flags:** `oneida_alliance = personal` · `oneida_ambush_support = kin_few`  
Beat 4: small Oneida contingent; escape still possible if player plays sloppy; better than alone.

---

### C-END-COOL — Cool Peace  
*(low meters)*

**Ojistalak:**  
You fought well for our blood against the Catawba. For that, eat our food in peace.  
Do not mistake stew for a war pledge. We remain for peace between the English brothers — as long as peace will have us.

**Wale:**  
Go with a full belly. Do not come as recruiters again until you learn how to ask.

**Kalha** *(private, after):*  
I am still with you. My nation needs more time — or better words than we gave them.

**Flags:** `oneida_alliance = cool` · `oneida_ambush_support = none`  
Beat 4: trio only; leak/escape path live; Kalha still playable, bitter edge.

---

## Beat 4 hook lines (by flag)

| Flag | Kalha’s line when crates are spotted |
|------|--------------------------------------|
| `full` | “My people are already in the trees. When I raise my hand, the forest stands up.” |
| `personal` | “A few Wolves came for me. Not the nation. Make them count.” |
| `none` | “Just us. Same as any bad night. Still enough — if we are sharp.” |

---

## Implementation notes

- Present triad choices as character-tagged buttons (portrait + name). Player may switch who speaks; locked once that seat’s round is used in `C4`.
- Kirkland never selects the nation’s fate; he is spice and historic texture.
- Echo neutrality quotation accurately; smudge only the *outcome timing/intensity*, not the fact that neutrality was real and serious.
- Optional: show soft meter feedback (“The mothers’ eyes harden” / “A warrior nods”) without numeric UI if tone prefers fiction-first.
- Dockhand and Traitor proper names: replace labels when named; keep node IDs stable.

---

## Draft checklist

- [x] Welcome tree (W)
- [x] Council tree (C) with neutrality, Crown, triad, mothers, interrupt, Kirkland, closers
- [x] Three endings tied to Beat 4 ambush support
- [ ] Pass for voice/length in playtest
- [ ] Oneida language consultant pass on any Oneida lines beyond names
- [ ] Name Dockhand and Traitor; swap labels
- [ ] Optional: branch if Beat 1 was failed/skipped (not in scope yet)
