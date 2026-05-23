### Topologie
# Metrischer Raum


## Definition 1

> Sei $X$ eine beliebige Menge. Eine Abbildung $d \colon \, X \times X \to \mathbb{R}$ heißt ***Metrik*** auf $X$, wenn für beliebige Elemente $x$, $y$ und $z$ von $X$ gilt:

$$
\begin{equation}
\begin{split}
(1) & d(x,y) = 0 \Longleftrightarrow x = y \\
(2) & d(x,y) = d(y,x) \\
(3) & d(x,y) \leq d(x,z) + d(z,y)
\end{split}
\end{equation}
$$

> Das Paar $(X,d)$ heißt ***metrischer Raum***, wenn $d$ eine Metrik auf $X$ ist.

## Satz 1

> Sei $(X,d)$ ein metrischer Raum.\\
Dann gilt: $d(x,y) \geq 0 \; \forall x, y \in X$

### Beweis:

$$
\begin{equation}
\begin{split}
0 & = \frac {1}{2} \, d(x,x) \\
& \leq \frac {1}{2} \, (d(x,y) + d(y,x)) \\
& = \frac {1}{2} \, (d(x,y) + d(x,y)) \\
& = d(x,y)
\end{split}
\end{equation}
$$
