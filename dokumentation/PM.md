# Le Plannin'!

## Prioriterings planering

### Better collision/platforms, a.k.a fixa platforms + borders. (0.21 lektioner.)
    Fixa så att platformarna faktiskt sätter om du är grounded eller inte. | Fixed
    Fixa så att man inte kan falla utanför skärmen. | Fixed

### Sprites. (1 lektion.)
    Lägg till Sprites och Sprite Animations. | Done

### Enemy ai. (1 - 2 lektioner.)
    Lägg till Enemy Ai, kan manövera platformar. | done

### Create a level. (0.5 - 1 lektion.)
    Selfevident title. | done

### Power-ups / Combo-multiplier / Pumpkin types (0.5 -2 lektioner.)
Extra arbete egentligen.

    Spread flammable kindleing on landing that collects pumpkins on contact. | 
    Stacking combo-multiplier when collecting pumpkins within a short time of each other |
    Additional pumpkin types |

### Notes

`"buh, what are we doin' here?"`

`"To buy more baguettes, Morty! We need all the baguettes!"`

Om jag fick mer tid och arbeta med detta projekt så skulle jag definitivt lägga tid på att göra själva spelet roligt att spela, d.v.s lägga till mer logik för hur fiender rör på sig, fler objekt att interagera med och även nån sorts combo multiplier om man kan samla pumpor inom kort tid eller gör det på något konstigt sätt för en högre score.

.

.

.

# Plannering
Grundtanken för projektet var en sideview arcade platformer, likt Jump Man (Mario), med ett halloween tema.


# Vad
### Typ
Sideview Arcade Platformer.

### Krav
I spelet ska man kunna springa och hoppa runt för att samla ihop så många pumpor som möjligt under en viss tidsperioden.

### Teknik
För grunden för själva projektet så utgick jag ifrån Jens fantastiska grund benämnd "steg Mario.", detta gav mig en grund som tillåter för en spelkaraktär, även känd som en player, som kan röra sig i x-led och kunna hoppa i y-led. 

Tillsamans med denna Player så har vi även platformar som våran karaktär kan manövera sig utöver. 

Sedan så har vi sista grundlägande delen för detta projekt vilket är fienderna, vilka kan manövera sig fram och tillbaka på våra platformar.

Utöver denna grund så har jag lagt till en timer för att hålla koll på hur lång tid spelare får på sig, en score tracker som håller koll på hur många poäng du har och sist men inte minst en game over screen som även visar din slutgiltiga score.


# Hur?
För det grundlägande, d.v.s Player, Platforms och Fiender, så har jag för det mesta följt Jens fantastiska kod. Det sagt dock så har jag utveklat dom lite mera som jag kommer gå igenom nedan.

### Fiende Ai
Utöver detta dock så har vi de saker som jag själv har fixat till. Till att börja med så har vi en sak för fienderna, till dom så gav jag dom smartheten att kunna manövera platformarna genom att hoppa när de kommer till kanten av en platform, de kan också vända sig om när de kommer till antingen den vänstra eller högra sidan av spelet. 

Hur detta fungerar är att vi bara kollar när vår fiendes hitbox rör vardera sida av en platform och ger dem en negativ hastighet i y-led. För att dem ska vända sig om när de når kanten av spelet så har vi att deras hastighet i x-led inveteras, d.v.s plus blir minus och minus blir plus.

### Platform collision
Härnäst så har vi platformarna och mer specifikt hur vår player och fiender interagerar med dem. Så hur collisionen på våra platformar fungerar är enligt det följande: när antingen våran palyer eller när en fiende rör en platform så kollar vi ifall att dom rör toppen eller botten av våra platformar, när vi konstaterat detta så följer en av de två följande fallen:

Om entitet rör toppen så sätter vi entitetens positon till uppe på platformen och dess hastighet i y-led till 0, vad detta åstakommer är att positionera våra entiteter uppe på platfomen och göra så dom inte faller igenom platformen.

Annars så rör entiteten botten istället, vilket då sätter vi dess position till under platformen och dess grounded variabel till false, vad detta åstakommer är att vi positionerar våra entiteter under paltformen och därefter stoppa dem från att hoppa i luften.

Ett problem med collisionen var att den kunde inte känna av ifall ett entitet kom nedifrån eller inte, anledningen bakom detta var att delen av koden som kollade om entitetet kom nedifrån, kollar om entitetet rör botten av platformen och ifall att den har en negativ hastighet i y-led, kom direkt efter själva collisons logiken, kollar ifall att en entiteten rör en paltform, som satte entitetens hastighet i y-led till 0. 

Vad detta betyder är att vi hade en if-sats som kollade för någonting som alldrig kunde ske pga. platfromarnas collisions logik som kom före. Hur jag löste detta var att jag flytta ut delen som satte entitetens hastighet i y-led ur collisions logiken och istället in i där vi använder oss utav collisions logiken.

### Game Over, Timer och Score (?) // osäker om detta är interesant nog att prata om.
...


# Varför?
Det följadne är en sammanfattning av Vad och Hur sectionerna i form av en förklaring av Varför jag valt att göra saker på det sätt jag gjort det på.

### Fiender
Till att börja med så har vi våra Pumpor, eller Fiender om vi ska vara mer generella, huvudsakliga tanken bakom denna fiende var att de skulle kunna manövera sig utöver våran level, från platform till platform. Så med detta i åtanke så gav jag dom möjlighet att manövera sig över platformar och kunna hoppa från en till en annan.

### Platformar
Härnäst går hand i hand med våra fiender, platformar, för att tillåta våra dem att manövera våran level. Grundtanken för platformarna var att de ska gå manövera av både spelaren och fienderna, för att åstakomam detta så har vi att de kollar ifall att ett entitet rör dem och beroende på från vilken sida de rörs så placerar vi dem antingen uppe på eller under platformen.


# Hur gick det?
### Vad gick bra?
- I överlag skulle jag beskriva mitt hanterande av kodandet åtminstonde helt okej och i vissa delar faktiskt ganska bra.


### Vad gick mindre bra?
- Att kunna debuga koden och finna roten till olika problem sitter i framfoten till mina största problem med projektet. T.ex. så hakade jag upp mig på att lista ut varför platformarna kände för att inte anse att objekt som låg på toppen av dom var grundade, i slutendan så finns problemet typ fortfarande kvar i vissa fall så jag valde att sidogå problemet istället.


# Lärdomar?
- Att kunna debuga kod är viktigt och jag bör förmodligen försöka bli bättre på det. 


# Uppgiftsreview
### Bra?
Uppgiften i överlag var ganska interesant och lärdomsful, vilket gjorde det lätt att arbeta med projektet. Shokerande nog så är det kul att arebeta med någonting där du kan skapa vad du vill.


### Dåligt?
I det nuvariga läget så kan jag inte komma på något fel med själva upplägget av projektet i sig, d.v.s jag anser att uppläget i sig är åtminstonde helt okej och att de fel som jag träffade på istället berode på utomliggadne anledningar.