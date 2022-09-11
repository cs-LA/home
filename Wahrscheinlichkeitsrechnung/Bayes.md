# [Satz von Bayes](https://de.wikipedia.org/wiki/Satz_von_Bayes)<br>in zwei Formaten

Der Satz von Bayes gehört zum Teilbereich *[Wahrscheinlichkeitsrechnung](./../Wahrscheinlichkeitsrechnung.html)* der Mathematik. Ich bin ihm zum ersten Mal begenet, als ich mich mit *künstlicher Intelligenz* beschäftigt habe. Dort wird er benutzt, um Wahrscheinlichkeiten von Ereignissen zu berechnen, nachdem man einige Vorkenntnisse gewonnen hat.

Man kann den Satz auf unterschiedliche Arten darstellen. Die gängigste Darstellugsart benutzt bedingte Wahrscheinlichkeiten:

$$P(A|B) = P(B|A) ~ \frac{P(A)}{P(B)}$$

Für eine (disjunkte) Zerlegung des Ergebnisraums in $A$ und das Komplement $A^c$ von $A$ gilt dann:

$$P(A|B) = P(B|A) ~ \frac{P(A)}{P(B|A)P(A)+P(B|A^c)P(A^c)}$$

Für einen Beweis hierfür sei auf [Wikipedia](https://de.wikipedia.org/wiki/Satz_von_Bayes) verwiesen.

##### Beispiel 1:

Gegeben seien 20 durchnummerierte Kugeln, von denen 8 rot und 12 schwarz sind. Die Wahrscheinlichkeit $P(G)$, eine gerade Kugel zu ziehen, ist also $0,5$.

Nun verrät uns jemand (bzw. haben wir herausgefunden), dass von den geraden Kugeln 6 rot sind, von den ungeraden Kugeln also nur 2. Somit haben wir:

$$
\begin{equation}
\begin{split}
P(R|G) & = 0,6 \\
P(R|U) & = 0,2
\end{split}
\end{equation}
$$

Ziehen wir nun aus den 20 Kugeln eine beliebige Kugel und wir stellen fest, dass sie rot ist. Wie hoch ist dann die Wahrscheinlichkeit, dass es eine gerade Kugel ist? Hier hilft der Satz von Bayes:

$$
\begin{equation}
\begin{split}
P(G|R) & = P(R|G) ~ \frac{P(G)}{P(R|G)P(G)+P(R|U)P(U)} \\
& = 0,6 * \frac{0,5}{0,6 * 0,5+0,2 * 0,5} \\
& = 0,6 * 0,5 / 0,4 
& = 0,75
\end{split}
\end{equation}
$$

### Wahrscheinlichkeitsverhältnisse

Üblicherweise - und in der Mathematik als Standard - werden Wahrscheinlichkeiten als Zahl zwischen 0 7nd 1 angegeben, also $0 \le P(A) \le 1$. Oftmals wird diese Zahl auch als Prozentsatz angegebeb; aber das lassen wir hier mal außer acht.

Man kann die Wahrscheinlichkeit eines Ereignisses durch das Verhältnis $Q$ seines Eintretens zum Nichteintreten ausdrücken: $Q(A) = \frac{P(A)}{P(A^c)} = \frac{P(A)}{1-P(A)}$.

Wie sieht dieses Wahrscheinlichkeitsverhältnis nun für bedingte Wahrscheinlichkeiten aus? Wir betrachten hier das Verhältnis der Wahrscheinlichkeit des Auftretens von $A$ unter der Bedingung $B$ zu der Wahrscheinlichkeit des Auftretens von $A$ unter der Bedingung $B^c$, also $Q(A|B) = \frac{P(A|B)}{P(A|B^c)}$.





# &nbsp;
