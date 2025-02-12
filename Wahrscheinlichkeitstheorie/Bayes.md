# [Satz von Bayes](https://de.wikipedia.org/wiki/Satz_von_Bayes)<br>in zwei Formaten

Der Satz von Bayes gehört zum Teilbereich *[Wahrscheinlichkeitstheorie](./../Wahrscheinlichkeitstheorie/index.html)* der Mathematik. Ich bin ihm zum ersten Mal begenet, als ich mich mit *künstlicher Intelligenz* beschäftigt habe. Dort wird er benutzt, um Wahrscheinlichkeiten von Ereignissen zu berechnen, nachdem man einige Vorkenntnisse gewonnen hat.

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

##### Beispiel 2:

Gegeben seien 3 Münzen, von denen 2 *fair* seien, d.h bei einem Wurf fällt Kopf und Zahl mit gleicher Wahrscheinlichkeit $0,5$. Die dritte Münze ist aber manipuliert, sodass sie immer mit dem Kopf nach oben fällt.

Wenn man nun eine der drei Münzen auswählt, so besteht die Wahrscheinlichkeit, die manipulierte Münze zu erwischen $P(mM) = \frac{1}{3}$.

Werfen wir diese Münze nun dreimal und sie zeigt jedesmal mit dem Kopf nach oben. Wie wahrscheinlich ist es nun mit dieser neuen Erkenntnis, dass es die manipulierte Münze ist? Nach dem Satz von Bayes gilt:

$$P(mM \vert 3K) = \frac{P(3K \vert mM) P(mM)}{P(3K)} = \frac{1 \cdot \frac{1}{3}}{\frac{1}{3} \cdot 1 + \frac{2}{3} \cdot \frac{1}{8}} = \frac{1 \cdot \frac{1}{3}}{\frac{10}{24}} = \frac{24}{30} = \frac{4}{5}$$

Versuchen wir dies nun mit Wahrscheinlichkeitsverhältnissen:

$$Q(mM \vert 3K) = \frac{P(3K \vert mM)}{P(3K \vert mM^c)} \cdot Q(mM) = \frac{1}{\frac{1}{8}} \cdot \frac{1}{2} = \frac{4}{1}$$

was wiederum der Wahrscheinlichkeit von $0,8$ entspricht.

##### Beispiel 3:

Noch ein Beispiel aus der Praxis. Es sei (statistisch) gegeben, dass 5% aller Frauen Brustkrebs haben, also $P(BK) = 0,05 \text{ bzw. } Q(BK) = 1 \colon 19$.

Bei einem Mammographie-Screening wird bei Brustkrebserkrankten der Brustkrebs zu 80% erkannt, d.h. $P(TP \vert BK) = 0,8 \text{ bzw. } Q(TP \vert BK) = 4 \colon 1$.

Dummerweise ergibt das Screening bei gesunden Frauen ebenfalls n 10% der Fälle ein positiven Testergebnis, d.h. $P(TP \vert BK^c) = 0,1 \text{ bzw. } Q(TP \vert BK^c) = 1 \colon 9$.

Wie hoch ist denn nun die Wahrscheinlichkeit, bei einem positiven Test tatsächlich an Brustkrebs erkrankt zu sein? Mit Hilfe der Wahrscheinlichkeitsverhältnisse ergibt sich:

$$Q(BK \vert TP) = \frac{P(TP \vert BK)}{P(TP \vert BK^c)} \cdot Q(BK) = \frac{0,8}{0,1} \cdot \frac{1}{19} = 8 ~ \colon 19$$

was einer Wahrscheinlichkeit von $\frac{8}{8+19} ≈ 0,296$ entspricht
