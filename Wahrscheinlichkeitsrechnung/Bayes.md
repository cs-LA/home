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
P(G|R) = P(R|G) ~ \frac{P(G)}{P(R|G)P(G)+P(R|U)P(U)}
$$

# &nbsp;

---

Inline-maths using the `\(...\)` syntax don't work any more as it was re-defined in the `_layouts/default.html`.

<p align=center>Inline \(P(A|B)=P(B|A) \frac{P(A)}{P(B)}\) mathematics :-( &#128577;</p>

Instead, the `$...$`syntax shoud be used now:

<center>This sentence uses <code>$</code> delimiters to show math inline: $\sqrt{3x-1}+(1+x)^2$ :-) &#128578;</center>


#### Block-Examples:

$$\sum_{i=1}^n = \frac{n^2+n}{2}$$


$$
\begin{equation} \label{eq1}
\begin{split}
A & = \frac{\pi r^2}{2} \\
 & = \frac{1}{2} \pi r^2
\end{split}
\end{equation}
$$
