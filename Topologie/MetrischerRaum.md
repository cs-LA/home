# Topologie
# Metrischer Raum


## Definition *Metrischer Raum*

> Sei $X$ eine beliebige Menge. Eine Abbildung $d \colon \, X \times X \to \mathbb{R}$ heißt Metrik auf $X$, wenn für beliebige Elemente $x$, $y$ und $z$ von $X$ gilt:

> 1. $d(x,y) = 0 \Longleftrightarrow x = y$
> 2. $d(x,y) = d(y,x)$
> 3. $d(x,y) \leq d(x,z) + d(z,y)$

> $(X,d)$ heißt *metrischer Raum*, wenn $d$ eine Metrik auf $X$ ist.

## Satz

> Sei $X$ ein metrischer Raum und $x$, $y$ beliebige Elemente von $X$. Dann gilt: $d(x,y) \geq 0$

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








<


Die Forderung 
d
(
x
,
y
)
≥
0
{\displaystyle d(x,y)\geq 0} kann weggelassen werden, denn sie folgt aus den anderen:
0
{\displaystyle 0}	
=
1
2
d
(
x
,
x
)
{\displaystyle ={\frac {1}{2}}d(x,x)}	(1)
≤
1
2
(
d
(
x
,
y
)
+
d
(
y
,
x
)
)
{\displaystyle \leq {\frac {1}{2}}(d(x,y)+d(y,x))}	(3)
=
1
2
(
d
(
x
,
y
)
+
d
(
x
,
y
)
)
{\displaystyle ={\frac {1}{2}}(d(x,y)+d(x,y))}	(2)
=
d
(
x
,
y
)
.
{\displaystyle =d(x,y).}


