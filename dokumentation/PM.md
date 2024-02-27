# Le Plannin'!

## Prioriterings planering

### Better collision/platforms, a.k.a fixa platforms + borders. (0.21 lektioner.)
    Fixa så att platformarna faktiskt sätter om du är grounded eller inte. | Fixed
    Fixa så att man inte kan falla utanför skärmen. | Fixed

### Sprites. (1-2 lektioner.)
    Lägg till Sprites och Sprite Animations. | Done

### Enemy ai. (3-5 lektioner.)
    Lägg till Enemy Ai, kan manövera platformar. | done

### Create a level. (1 lektion.)
    Selfevident title. | done

### Power-ups. (0.5 lektioner.)
Extra arbete egentligen.

    Spread flammable kindleing on landing that collects pumpkins on contact. | 

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
## Typ
Sideview Arcade Platformer.

## Krav
I spelet ska man kunna springa och hoppa runt för att samla ihop så många pumpor som möjligt under en viss tidsperioden.

## Teknik
För grunden för själva projektet så utgick jag ifrån Jens fantastiska grund benämnd "steg Mario.", detta gav mig en grund som tillåter för en spelkaraktär, även känd som en player, som kan röra sig i sidled och kunna hoppa. 

Tillsamans med denna Player så har vi även platformar som våran karaktär kan manövera sig utöver. 

Sedan så har vi sista grundlägande delen för detta projekt var fienderna, vilka kan manövera sig fram och tillbaka på våra platformar.

Utöver denna grund så har jag lagt till en timer för att hålla koll på hur lång tid spelare får på sig, en score tracker som håller koll på hur många poäng du har och sist men inte minst en game over screen som även visar din slutgiltiga score.


# Hur?
För det grundlägande, d.v.s Player, Platforms och Fiender, så har jag för det mesta följt Jens fantastiska kod. Det sagt dock så har jag utveklat dom lite mera som jag kommer gå igenom nedan.

Utöver detta dock så har vi de saker som jag själv har fixat till. Till att börja med så har vi en sak för fienderna, till dom så gav jag dom smartheten att kunna manövera platformarna genom att hoppa när de kommer till kanten av en platform, de kan också vända sig om när de kommer till antingen den vänstra eller högra sidan av spelet. 

Hur detta fungerar är att vi bara kollar när vår fiendes hitbox rör vardera sida av en platform och ger dem negativ hastighet i y-led. För att dem ska vända sig om när de når kanten av spelet så har vi att deras hastighet i x-led inveteras, d.v.s plus blir minus och minus blir plus.

Härnäst så har vi platformarna och mer specifikt hur vår player och fiender interagerar med dem. 


# Varför?
SAMMANFATTNING AV VAD JAG VILLE ÅSTAKOMMA OCH HUR JAG ÅSTAKOMMADE DET.


# Hur gick det?
## Vad gick bra?
- I överlag skulle jag beskriva mitt hanterande av kodandet åtminstonde helt okej och i vissa delar faktiskt ganska bra.


## Vad gick mindre bra?
- Att kunna debuga koden och finna roten till olika problem sitter i framfoten till mina största problem med projektet. T.ex. så hakade jag upp mig på att lista ut varför platformarna kände för att inte anse att objekt som låg på toppen av dom var grundade, i slutendan så finns problemet typ fortfarande kvar i vissa fall så jag valde att sido gå problemet istället.


# Lärdomar?
Att kunna debuga kod är viktigt och jag bör förmodligen försöka bli bättre på det. 


# Uppgiftsreview
## Bra?
Uppgiften i överlag var ganska interesant och lärdomsful, vilket gjorde det lätt att arbeta med projektet.


## Dåligt?
