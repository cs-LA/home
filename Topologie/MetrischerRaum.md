### Topologie
# Metrischer Raum


## Definition 1

> Sei $X$ eine beliebige Menge. Eine Abbildung $d \colon \, X \times X \to \mathbb{R}$ heißt ***Metrik*** auf $X$, wenn für beliebige Elemente $x$, $y$ und $z$ von $X$ gilt:

$$
\begin{equation}
\begin{split}
(1) & \quad d(x,y) = 0 \Longleftrightarrow x = y \\
(2) & \quad d(x,y) = d(y,x) \\
(3) & \quad d(x,y) \leq d(x,z) + d(z,y)
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
0 & = \frac {1}{2} \, d(x,x) & \quad Definition1(1)\\
& \leq \frac {1}{2} \, (d(x,y) + d(y,x)) & \quad Definition1(3)\\
& = \frac {1}{2} \, (d(x,y) + d(x,y)) & \quad Definition1(2)\\
& = d(x,y)
\end{split}
\end{equation}
$$


## Satz 2[^1]

[^1]: Dies ist Übung 1 aus *Grundkurs Topologie* von Gerd Laures und Markus Szymik

> Sei $X$ eine beliebige Menge. Eine Abbildung $d' \colon \, X \times X \to \mathbb{R}$ ist genau dann eine Metrik auf $X$, wenn für beliebige Elemente $x$, $y$ und $z$ von $X$ gilt:

$$
\begin{equation}
\begin{split}
(1') & \quad d'(x,y) = 0 \Longleftrightarrow x = y \\
(2') & \quad d'(x,y) \leq d'(x,z) + d'(y,z)
\end{split}
\end{equation}
$$


### Beweis:

> Definition1(1) und Satz2(1') sind identisch.
>
> Sei nun $d$ eine Metrik auf $X$. Dann gilt:

$$
\begin{equation}
\begin{split}
\quad d(x,y) & \leq d(x,z) + d(z,y) & \quad Definition1(3)\\
             & = d(x,z) + d(y,z) & \quad Definition1(2)
\end{split}
\end{equation}
$$

> Somit erfüllt die Metrik $d$ die Bedingung $(2')$ des Satzes.
>
> Sei nun $d'$ die Abbildung aus Satz 2. Dann gilt:

$$
\begin{equation}
\begin{split}
\quad d'(x,y) & \leq d'(x,z) + d'(y,z)\\
              &   =  d'(y,z) + d'(x,z)\\
              & \geq d'(y,x)
\end{split}
\end{equation}
$$

> Und analog:

$$
\begin{equation}
\begin{split}
\quad d'(y,x) & \leq d'(y,z) + d'(x,z)\\
              &   =  d'(x,z) + d'(y,z)\\
              & \geq d'(x,y)
\end{split}
\end{equation}
$$

> Somit ist $d'(x,y) = d'(y,x)$ und somit Definition1(2) für $d'$ erfüllt.

----
