# LevenshteinChallenge

Transform one word into another, with four operations: add a letter,
delete a letter, change a letter, and take an anagram of the existing word. Additionally, there are the following rules:
- Every interim step between the first and the last word must also be a word
- No interim step can be less than three letters
- The first line of input will contain the “cost” of each operation in the order above
- The second line of input will contain the starting word
- The third line of input will contain the ending word

The goal is to find the lowest possible “cost” of transforming the starting word into the ending word. 

Example input:

1 3 1 5
HEALTH
HANDS
(output: 7) (HEALTH - HEATH - HEATS - HENTS - HENDS - HANDS)
(If your dictionary doesn’t have a couple of these words in there, don’t worry -- you’re scored on your
code, not your word list.)

1 9 1 3
TEAM
MATE
(output: 3) (TEAM - MATE)

7 1 5 2
OPHTHALMOLOGY
GLASSES
(output: -1)
