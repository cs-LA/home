# [Satz von Bayes](https://de.wikipedia.org/wiki/Satz_von_Bayes)<br>in zwei Formaten

Der Satz von Bayes gehört zum Teilbereich *[Wahrscheinlichkeitsrechnung](./../Wahrscheinlichkeitsrechnung.html)* der Mathematik. Ich bin ihm zum ersten Mal begenet, als ich mich mit *künstlicher Intelligenz* beschäftigt habe. Dort wird er benutzt, um Wahrscheinlichkeiten von Ereignissen zu berechnen, nachdem man einige Vorkenntnisse gewonnen hat.

Man kann den Satz auf unterschiedliche Arten darstellen. Die gängigste Darstellugsart benutzt bedingte Wahrscheinlichkeiten:

$$P(A|B) = P(B|A) ~ \frac{P(A)}{P(B)}$$

Für eine (disjunkte) Zerlegung des Ergebnisraums in $A$ und das Komplement $A^c$ von $A$ gilt dann:

$$P(A|B) = P(B|A) ~ \frac{P(A)}{P(B|A)P(A)+P(B|A^c)P(A^c)}$$





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
