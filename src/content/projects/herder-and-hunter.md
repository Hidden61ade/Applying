---
type: "project"
title: "The Herder and the Hunter"
year: "2026–Present"
role: "Designer / Researcher / Programmer"
summary: "A concurrent asymmetric co-op iPad game for a human and a cat. The human draws scent corridors with a finger; the cat closes the predatory chain with a paw. Designed against Animal-Computer Interaction (ACI) literature."
hook: "What if the second player is not human, and the design has to take that seriously?"
depth: "deep"
tags: ["Designer", "Researcher", "Programmer", "ACI", "Co-op", "iPad", "Hardware"]
order: 5
hidden: true
links: []
---

## Context

Most "games for cats" treat the cat as an audience: a moving dot on a screen, a video to watch. The cat starts the predatory sequence and is never allowed to finish it. *The Herder and the Hunter* is an attempt to design the opposite — a game where the human and the cat are **concurrent, asymmetric co-op partners**, and where the loop actually closes.

This is the project I am building to learn Animal-Computer Interaction (ACI) by doing it.

## The Design

Two players. One iPad. Different verbs.

- **Human (Herder).** Draws scent corridors with a finger. Prey particles funnel along the drawn paths toward a marked hunting zone. Outside the zone, prey is dimmed and ignored by the cat.
- **Cat (Hunter).** Pounces on prey inside the hunting zone. Touch-area discrimination separates paw input from human-finger input, so the same screen reads both players in parallel.
- **Closure.** After *N* successful pounces, a Bluetooth treat dispenser delivers a physical reward. The predatory chain — stare, stalk, chase, pounce, grab, *kill* — completes.

Visual parameters (blue/yellow palette, contrast, movement velocity) follow Pons & Jaen's observational work on feline visual preference. Session length and stimulus rotation follow Hall's habituation findings — about 150 seconds before novelty has to refresh.

## Position Against Prior Work

Two papers are mandatory reading for this project, and they bound the design space on opposite sides.

**Cat Cat Revolution (Noz & An, CHI 2011)** introduced interspecies tablet gaming. A digital mouse moves; the cat chases; the human can take over the mouse from a second device. The breakthrough was framing the cat as a *participant* rather than an audience. The unsolved problem is that the predatory loop never closes — the mouse cannot be killed, and the human's role is to puppeteer the same target the cat is hunting, not to play a different game alongside.

**Look What the Cat Tapped In (Payne, Kleinberger & Hirskyj-Douglas, ACI 2025)** ran a five-month cat-café study of MewTube, a curated-video tablet system. Their key finding: in the absence of clear feline responsiveness, humans in the tablet condition felt *less* sure the cats were enjoying it, and reported weaker bonding than with traditional toys. Screens, on their own, hollow out the connection signal.

The Herder and the Hunter sits between them. It keeps CCR's commitment to the cat as a player, but gives the cat a verb the human does not have (paw-pounce) and a payoff the screen alone cannot deliver (a treat). It answers MewTube's responsiveness gap by making every paw landing a legible, designed event for the human partner — the game shows the human that the cat is playing, because the cat's input is *the* input.

## Roadmap

- **V1 — iPad only.** Finger-drawn corridors, paw-vs-finger touch discrimination, on-screen pounce feedback. Goal: a playable 90-second demo with one real cat.
- **V2 — Bluetooth treat dispenser.** Closes the predatory chain physically. Goal: comparative session against V1 to see whether closure changes engagement length and frustration markers.
- **V3 — Camera attention model.** Front-facing camera estimates feline gaze/posture to gate difficulty. Cites Pons, Jaen & Catala (2017) on future ACI systems.

## Ethics

Mancini's *Animal-Computer Interaction Manifesto* (2011) is the baseline: the animal is a research subject, not a test surface. The cat must be able to disengage at any time, the session has to be bounded, and "the cat refused to play" is a valid and reportable outcome.

## Reflection

I have spent four years designing for human players who can tell me afterwards what they felt. This project removes that affordance. Every design decision has to land in the cat's body — pounce or no pounce, return or not return — and the only honest evaluation method is observation. That constraint is the point.
