---
title: 'My Projects'
#image: images/writer.jpeg
url: "projects"
menu:
  main:
    name: "Projects"
    weight: 3
---

## Detailed OSM Maps: Walk & Hike

> The map shows all kinds of trails for walking and hiking.

Discover your surrounding with this detailed map. Use it to app to find trails for walking, hiking or running.

[Project page](https://fabian-rosenthal.com/green-walking/) &nbsp;|&nbsp; [Google Play store](https://play.google.com/store/apps/details?id=org.xennis.apps.green_walking)

## Restore Leveling After G28 (OctoPrint Plugin)

> Automatically keeps bed leveling on after `G28` (Auto Home).

Marlin code `G28` disables bed leveling. The plugin restores the prior state:

Before the `G28` command a `M420 V` is send to check if leveling is enabled or not.
If leveling was enabled: After the `G28` command a `M420 S1` is send to enable leveling.

That same behaviour can be enabled in the Marlin firmware via `RESTORE_LEVELING_AFTER_G28`.

[OctoPrint plugin page](https://plugins.octoprint.org/plugins/restorelevelingafterg28/)

## Lifetime Clock App

 > A clock to visualize your life to encourage making the most out of it.

The app shows you a counter and a graphical box view for your life. You can for example see for how many days you are already alive or how many years are ahead.

Having your lifetime as an app might help you to really make use of your time! Question yourself how you want to spend this time. In the end, it comes down to a matter of priority between all kinds of activities.

[Project page](https://fabian-rosenthal.com/lifetime-clock-app/) &nbsp;|&nbsp; [Google Play store](https://play.google.com/store/apps/details?id=org.xennis.apps.lifetime_clock)


## Hamburg stairs map

> A map to visualize the stairs in Hamburg, Germany 

The map shows all stairs (available in the Overpass API) in Hamburg, Germany.

[Project website](https://fabian-rosenthal.com/hamburg-stairs-map/)

## EpiDoc Parser (Python library)

> Python parser for EpiDoc (epigraphic documents in TEI XML).

The Python library can parse EpiDoc (epigraphic documents in TEI XML).

[Project page](https://fabian-rosenthal.com/epidoc-parser/)
