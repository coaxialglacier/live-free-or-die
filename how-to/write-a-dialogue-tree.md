# How to Write a Dialogue Tree

A dialogue tree is a **graph of conversation nodes** with player choices as the branches. It is not a cutscene script with occasional buttons.

Use this when drafting scenes like the Oneida welcome/council (`docs/dialogue-trees.md`).

---

## Building blocks

| Piece | What it is |
|-------|------------|
| **Node** | One beat of talk (NPC line, or a choice prompt) |
| **Choice** | What the player can say or do from that node |
| **Edge** | Where that choice goes next |
| **State** | Flags / meters the conversation changes (Trust, Cause, quest flags) |
| **Terminal** | An ending node that resolves the scene |

```
C2 (neutrality speech)
 ├─ A Kalha line  → C3   (+Trust +Cause)
 ├─ B Dockhand    → C3   (+Cause)
 └─ E Silence     → C3   (+Trust −Cause)
```

Same next node can still matter, because **state** diverged.

---

## Build order

1. **Lock the scene job** — What must this conversation decide?
2. **List the voices** — Who can speak, and what only they can say?
3. **Write the spine first** — The unavoidable sequence with no branches.
4. **Add branches at pressure points** — Only where a choice changes tone, info, or outcome.
5. **Tag effects, not vibes** — Every choice writes to state. Endings read that state.
6. **Define endings before polishing lines** — Then prove paths can reach each one.
7. **Pass for voice** — Cut lines that don’t sound like the speaker. Cut fake choices (same result, different wallpaper).

---

## Tree shapes

| Shape | Use when |
|-------|----------|
| **Linear with flavor** | Same path, different color (short welcomes, bonding beats) |
| **Hub** | Player picks topics from a menu and returns |
| **Gate** | A line/path opens only if a flag or meter is high enough |
| **Convergent** | Branches rejoin the spine (most council debates) |
| **Divergent** | Branches permanently split outcomes (alliance endings) |

Bad trees branch everywhere. Good trees branch where it hurts.

---

## Node ID hygiene

- Give every node a stable ID (`W1`, `C3`, `C-END-FULL`).
- Keep IDs even when lines rewrite.
- Tag player speakers clearly (`[KALHA]`, `[DOCKHAND]`, `[TRAITOR]`).
- Write `Next` on every choice so implementation doesn’t guess.

---

## Meters and endings

- Prefer a few readable meters over a dozen hidden floats.
- Start meters from what the player already did (earned credit, not zero).
- Endings should be mutually understandable: Full / Partial / Fail (or your local names).
- Hook later gameplay to ending flags (`oneida_ambush_support = warriors`).

Both respect and persuasion usually matter. High Cause + low Trust reads as pushy recruiters. High Trust + low Cause reads as beloved guests who failed to move the nation.

---

## Line-writing rules

- One job per line.
- Let each playable voice own a lane (kinship / street / cold intel).
- Put real history in NPC mouths when the scene is historic; smudge outcomes, not the fact of the debate.
- Include at least one bad/arrogant option if failure is part of the design — and make it cost something.
- Silence can be a real choice if it moves state.

---

## Draft checklist

- [ ] Scene job stated in one sentence
- [ ] Spine written without branches
- [ ] Voices listed with lanes
- [ ] Pressure-point branches only
- [ ] Every choice has effects + next node
- [ ] Endings defined and reachable
- [ ] Later content reads the flags
- [ ] Voice pass done

---

## Example (from this project)

**Scene job:** Set Oneida alliance temperature that gates the British crate ambush.

**Spine:** Open → Neutrality → Crown → Triad → Land → Interrupt → Close → Ending

**Meters:** Trust, Cause, Kalha

**Terminals:** Full Alliance / Personal Debt / Cool Peace

**Full working tree:** [`../docs/dialogue-trees.md`](../docs/dialogue-trees.md)
