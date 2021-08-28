# Purpose
This project scans player stats from LeagueGaming.com and outputs them into a CSV format, so that they can be used for the purposes of player evaluation.

# Technologies
The project is run through NodeJS.

# Setup
## Installation
Installation is handled through npm:
```npm install```

## Running
To run the program, run the command:
```npm run```

## Output
The output files will be stored in the Out directory. There will be two files:

### OfficialStats
OfficialStats is the stats for the player at all positions in the PSN CHL league. Only official games count (regular season + playoffs).

### PositionStats
PositionStats is limited to the position that the player is currently signed up for. If the player signs up as a Right Defenseman, for example, then these stats will only display how they have performed as a Right D in the past.

# Development
All source code is stored in the src/ directory.