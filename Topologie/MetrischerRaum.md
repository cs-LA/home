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

> Sei nun $d'$ eine Abbildung wie aus dem Satz. Dann gilt;

$$
\begin{equation}
\begin{split}
\quad d'(x,y) & \leq d'(x,x) + d'(y,x)\\
              &   =  d'(y,x)\\
              & \leq d'(y,y) + d'(x,y)\\
              &   =  d'(x,y)
\end{split}
\end{equation}
$$

> Somit gilt $d'(x,y) = d'(y,x)$ und die Definition1(2) ist für $d'$ erfüllt.

> Damit ergibt sich sofort $d'(x,y)$ $\leq d'(x,z) + d'(y,z)$ $= d'(x,z) + d'(z,y)$. Somit ist auch Definition1(3) erfüllt und $d'$ ist eine Metrik.


## Anmerkung 1

> Satz 2 gilt nicht, wenn man die Bedingung (2) durch die übliche Dreiecksungleichung $d(x,y) \leq d(x,z) + d(z,y)$ ersetzt.
>
> Als Gegenbeispiel sei hier die Abbildung $d \colon \, \mathbb{R} \times \mathbb{R} \to \mathbb{R}, (x,y) \mapsto x - y,$ betrachtet.
>
> Diese Abbildung genügt der Dreiecksungleichung $d(x,y)$ $= x - y$ $= x - z + z - y$ $= d(x,z) - d(z,y)$.
> 
> Ferner gilt sicherlich die Bedingung Definition1(1), aber die Bedingung Definition1(2) ist nicht für alle $x, y \in \mathbb{R}$ erfüllt: $d(2,3) = 2 - 3$ $= -1 \neq 1$ $= 3 - 2 = d(3,2)$.

## Satz 3[^2]

[^2]: Dies ist Übung 2 aus *Grundkurs Topologie* von Gerd Laures und Markus Szymik

Für Punkte $x = (x_1,x_2)$ der Ebene $\mathbb{R}^2$ seien

$$
\begin{equation}
\begin{split}
\Vert x \Vert_1 & = \vert x_1 \vert + \vert x_2 \vert\\
\Vert x \Vert_2 & = \sqrt{x_1^2 + x_2^2}\\
\Vert x \Vert_\infty & = max\{\vert x_1 \vert,\vert x_2 \vert\}
\end{split}
\end{equation}
$$

> die üblichen Normen und $d_?, ? \in { 1, 2, \infty \},$ die durch $d_? = \Vert x-y \Vert_?$ definierten Metriken auf $\mathbb{R}^2$.

> Diese Metriken erzeugen den gleichen Konvergenzbegriff. 

----
