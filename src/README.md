# Directory Definitions

## Data
The Data directory stores the data types for the program. These are small classes whose primary purpose is to hold data that the other source code files use.

### Player
The Player class is the storage for a single LG player. Players typically have Names, User IDs, and a position.

### PlayerStats
The PlayerStats class stores the stats for a player. This includes things like the number of goals that player has scored in their career, the number of assists, etc.

## Fetches
The Fetches directory stores the web scraping logic for the program. This includes things like grabbing the current draft list for LG and grabbing a player's stats across their entire careers.

## Logging
The Logging directory stores the logic for saving data to files. This currently exists as the main mechanism for translating the Data classes into the output CSV files.