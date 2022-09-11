# [Satz von Bayes](https://de.wikipedia.org/wiki/Satz_von_Bayes)<br>in zwei Formaten

Der Satz von Bayes gehört zum Teilbereich *[Wahrscheinlichkeitsrechnung](./../Wahrscheinlichkeitsrechnung.html)* der Mathematik. Ich bin ihm zum ersten Mal begenet, als ich mich mit *künstlicher Intelligenz* beschäftigt habe. Dort wird er benutzt, um Wahrscheinlichkeiten von Ereignissen zu berechnen, nachdem man einige Vorkenntnisse gewonnen hat.

Man kann den Satz auf unterschiedliche Arten darstellen. Die gängigste Darstellugsart benutzt bedingte Wahrscheinlichkeiten:

$$P(A \vert B) = \frac{P(B \vert A) \cdot P(A)}{P(B)} = P(B \vert A) ~ \frac{P(A)}{P(B)}$$

Für eine (disjunkte) Zerlegung des Ergebnisraums in $A$ und das Komplement $A^c$ von $A$ gilt dann:

$$P(A \vert B) = P(B \vert A) ~ \frac{P(A)}{P(B \vert A)P(A)+P(B \vert A^c)P(A^c)}$$

Für einen Beweis hierfür sei auf [Wikipedia](https://de.wikipedia.org/wiki/Satz_von_Bayes) verwiesen.

##### Beispiel 1:

Gegeben seien 20 durchnummerierte Kugeln, von denen 8 rot und 12 schwarz sind. Die Wahrscheinlichkeit $P(G)$, eine gerade Kugel zu ziehen, ist also $0,5$.

Nun verrät uns jemand (bzw. haben wir herausgefunden), dass von den geraden Kugeln 6 rot sind, von den ungeraden Kugeln also nur 2. Somit haben wir:

$$
\begin{equation}
\begin{split}
P(R \vert G) & = 0,6 \\
P(R \vert U) & = 0,2
\end{split}
\end{equation}
$$

Ziehen wir nun aus den 20 Kugeln eine beliebige Kugel und wir stellen fest, dass sie rot ist. Wie hoch ist dann die Wahrscheinlichkeit, dass es eine gerade Kugel ist? Hier hilft der Satz von Bayes:

$$
\begin{equation}
\begin{split}
P(G \vert R) & = P(R \vert G) ~ \frac{P(G)}{P(R \vert G)P(G)+P(R \vert U)P(U)} \\
& = 0,6 \cdot \frac{0,5}{0,6 \cdot 0,5+0,2 \cdot 0,5} \\
& = 0,6 \cdot 0,5 / 0,4 \\
& = 0,75
\end{split}
\end{equation}
$$

### Wahrscheinlichkeitsverhältnisse

Üblicherweise - und in der Mathematik als Standard - werden Wahrscheinlichkeiten als Zahl zwischen 0 7nd 1 angegeben, also $0 \le P(A) \le 1$. Oftmals wird diese Zahl auch als Prozentsatz angegeben; aber das lassen wir hier mal außer Acht.

Man kann die Wahrscheinlichkeit eines Ereignisses durch das Verhältnis $Q$ seines Eintretens zum Nichteintreten ausdrücken: $Q(A) = \frac{P(A)}{P(A^c)} = \frac{P(A)}{1-P(A)}$.

Wie könne wir nun dieses Wahrscheinlichkeitsverhältnis in dem Satz von Bayes nutzen? Berechnen wir also einmal das Verhältnis für eine bedingte Wahrscheinlichkeit:

$$
\begin{equation}
\begin{split}
Q(A \vert B) & = \frac{P(A \vert B)}{1-P(A \vert B)} \\
& = \frac{\frac{P(B \vert A)P(A)}{P(B \vert A)P(A)+P(B \vert A^c)P(A^c)}}{1-\frac{P(B \vert A)P(A)}{P(B \vert A)P(A)+P(B \vert A^c)P(A^c)}} \\
& = \frac{\frac{P(B \vert A)P(A)}{P(B \vert A)P(A)+P(B \vert A^c)P(A^c)}}{\frac{P(B \vert A)P(A)+P(B \vert A^c)P(A^c)-P(B \vert A)P(A)}{P(B \vert A)P(A)+P(B \vert A^c)P(A^c)}} \\
& = \frac{(P(B \vert A)P(A)) \cdot (P(B \vert A)P(A)+P(B \vert A^c)P(A^c))}{(P(B \vert A)P(A)+P(B \vert A^c)P(A^c)) \cdot (P(B \vert A)P(A)+P(B \vert A^c)P(A^c)-P(B \vert A)P(A))} \\
& = \frac{P(B \vert A)P(A) \cdot (P(B \vert A)P(A)+P(B \vert A^c)P(A^c))}{(P(B \vert A)P(A)+P(B \vert A^c)P(A^c)) \cdot P(B \vert A^c)P(A^c)} \\
& = \frac{P(B \vert A)P(A) \cdot (P(B \vert A)P(A)+P(B \vert A^c)P(A^c))}{P(B \vert A^c)P(A^c) \cdot (P(B \vert A)P(A)+P(B \vert A^c)P(A^c))} \\
& = \frac{P(B \vert A)P(A)}{P(B \vert A^c)P(A^c)} \\
& = \frac{P(B \vert A)}{P(B \vert A^c)} \cdot Q(A)
\end{split}
\end{equation}
$$

Bezogen auf unser [Beispiel 1](#beispiel-1) gilt dann also $Q(G \vert R) = \frac{0,6}{0,2} \cdot \frac{1}{1} = 3 ~ \colon 1$, was einer Wahrscheinlichkeit von $0,75$ entspricht.

Wir sehen also, dass der Satz von Bayes mit Wahrscheinlichkeitsverhältnissen wesentlich einfacher anzuwenden ist.


&nbsp;
