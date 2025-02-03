# Topologie

### Definition

Eine *Topologie* auf einer Menge $X$ ist eine Menge $T$ von Teilmengen von $X$, die folgende Eigenschaften besitzt:
1. Die Vereinigung beliebig vieler Mengen aus $T$ gehört zu $T$.
2. Der Durchschnitt je zweier Mengen aus $T$ gehört zu $T$.
3. Die Menge $X$ und die leere Menge $\emptyset$ gehören zu $T$.

Ein Element von $T$ heißt *oﬀene Menge* der Topologie $T$.

Eine Teilmenge $A$ von $X$ heißt abgeschlossen bezüglich $T$, falls ihr Komplement $A_C := X \setminus A$ bezüglich $T$ oﬀen ist.

Ein topologischer Raum ist ein Paar $(X,T)$, bestehend aus einer Menge $X$ und einer Topologie $T$ auf $X$.

## &nbsp;

Diese sehr allgemeine Definition erscheint auf den ersten Blick etwas verblüffend, wenn man von dem sonst in dem $\mathbb{R}$ üblichen Begriff der offenen Mengen herkommt.

Hier wird eine Teilmenge $T$ von $\mathbb{R}$ üblicherweise mit Hilfe des *[euklidischen Abstands](https://de.m.wikipedia.org/wiki/Euklidischer_Abstand)* als offen definiert:


> Eine Menge $T \subseteq \mathbb{R}^n$ heißt oﬀen, wenn für jedes $x \in \mathbb{R}^n$ ein $\epsilon > 0$ existiert, so dass ein ganzer $\epsilon$–Ball $B_\epsilon(x)$ um $x$ in $T$  enthalten ist.


xxx