# Topologie
# Metrischer Raum


## Definition *Metrischer Raum*

Sei $X$ eine beliebige Menge. Eine Abbildung $d \colon \, X \times X \to \mathbb{R}$ heißt Metrik auf $X$, wenn für beliebige Elemente $x$, $y$ und $z$ von $X$ gilt:

d
:
X
×
X
→
R
{\displaystyle d\colon X\times X\to \mathbb {R} } heißt Metrik auf 
X
{\displaystyle X}, wenn für beliebige Elemente 
x
{\displaystyle x}, 
y
{\displaystyle y} und 
z
{\displaystyle z} von 
X
{\displaystyle X} die folgenden Eigenschaften gelten:[1]

(1) Positive Definitheit:	
d
(
x
,
y
)
≥
0
{\displaystyle d\left(x,y\right)\geq 0}     und     
d
(
x
,
y
)
=
0
⟺
x
=
y
{\displaystyle d\left(x,y\right)=0\Longleftrightarrow x=y},[AuH 1]
(2) Symmetrie:	
d
(
x
,
y
)
=
d
(
y
,
x
)
{\displaystyle d\left(x,y\right)=d(y,x)},
(3) Dreiecksungleichung:	
d
(
x
,
y
)
≤
d
(
x
,
z
)
+
d
(
z
,
y
)
{\displaystyle d\left(x,y\right)\leq d(x,z)+d(z,y)}.






<blockquote>
Seien $(X,\mathcal{T}_X)$ und $(Y,\mathcal{T}_Y)$ topologische Räume, $M \subseteq X$ ein Teilraum und $f, g \colon \, X \to Y$ stetige Abbildungen mit $f \vert M = g \vert M$.


<ol>
<li>Eine <i>Homotopie von</i> $f$ <i>nach</i> $g$ <i>relativ zu</i> $M$ ist eine stetige Abbildung $h \colon [0,1] \times X \to Y, \, (t,x) \mapsto h(t,x)$ mit






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


