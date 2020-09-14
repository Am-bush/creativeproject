# Portfolio API Documentation
The Portfolio API provides information about my personal dislikes and also greets you.

## Get a list of my dislikes.
**Request Format:** /dislikes

**Request Type:** GET

**Returned Data Format**: JSON

**Description:** Return a list of all of my dislikes you can look up in this API.


**Example Request:** /dislikes

**Example Response:**
```json
{
    "color": "Yellow",
    "game": "World's Hardest Game",
    "movie": "Frozen",
    "food": "Anchovies",
    "pizza": "Domino's",
}
```

**Error Handling:**
N/A

## Get greeted to my website.
**Request Format:** /hello?=:name

**Request Type:** GET

**Returned Data Format**: Plain Text

**Description:** Get greeted by my website

**Example Request:** /hello?name=merun

**Example Response:**
```
Hello merun, you are looking great!
...
```

**Error Handling:**
- Possible 400 (invalid request) errors (all plain text):
  - If passed invalid parameter, returns an error with message: `Missing name parameter`