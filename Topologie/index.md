# Topologie

### Definition

Eine *Topologie* auf einer Menge $X$ ist eine Menge $T$ von Teilmengen von $X$, die folgende Eigenschaften besitzt:
1. Die Menge $X$ und die leere Menge $\emptyset$ gehören zu $T$.
1. Der Durchschnitt je zweier Mengen aus $T$ gehört zu $T$.
1. Die Vereinigung beliebig vieler Mengen aus $T$ gehört zu $T$.

Ein Element von $T$ heißt *oﬀene Menge* der Topologie $T$.

Eine Teilmenge $A$ von $X$ heißt abgeschlossen bezüglich $T$, falls ihr Komplement $A_C := X \setminus A$ bezüglich $T$ oﬀen ist.

Ein topologischer Raum ist ein Paar $(X,T)$, bestehend aus einer Menge $X$ und einer Topologie $T$ auf $X$.

## &nbsp;

Diese sehr allgemeine Definition erscheint auf den ersten Blick etwas verblüffend, wenn man von dem sonst in dem $\mathbb{R}^n$ üblichen Begriff der offenen Mengen herkommt.

Hier wird eine Teilmenge $T$ von $\mathbb{R}^n$ üblicherweise mit Hilfe des *[euklidischen Abstands](https://de.m.wikipedia.org/wiki/Euklidischer_Abstand)* als offen definiert:


> Eine Menge $T \subseteq \mathbb{R}^n$ heißt oﬀen, wenn für jedes $x \in \mathbb{R}^n$ ein $\epsilon > 0$ existiert, so dass ein ganzer $\epsilon$–Ball $B_\epsilon(x)$ um $x$ in $T$  enthalten ist.

Hier der Nachweis, dass die Definition offener Mengen mittels des euklidischen Abstands eine Topologie im oben definierten Sinne ist:

1. Für die leere Menge $\emptyset$ braucht man offensichtlich nichts zu zeigen, da sie ja keine Elemente enthält.
1. Ist $x \in \mathbb{R}^n$ und $r > 0$, so liegt natürlich $B_r(x)$ in $\mathbb{R}^n$. Also ist $\mathbb{R}^n$ offen.
1. Seien $U_1, U_2 \subset \mathbb{R}^n$ offen, $x_0 \in U_1 \cap U_2$ beliebig vorgegeben. Dann gibt es $\epsilon_1, \epsilon_2 > 0$, so daß $B_{\epsilon_1}(x_0) \subset U_1$ und $B_{\epsilon_2}(x_0) \subset U_2$ ist. Setzt man $\epsilon := \min(\epsilon_1, \epsilon_2)$, so ist $B_\epsilon(x_0) \subset U_1 \cap U_2$. Also ist der Durchschnitt von zwei offenen Mengen wieder offen.
1. Sei $( U_\lambda )_{\lambda \in L}$ eine Familie von offfenen Mengen in $X$, $x_0 \in \cup_{\lambda \in L} U_\lambda$. Das ... bedeutet:
2. Sei $(U_\lambda)_{\lambda \in L}$ eine Familie von offenen Mengen in $X$, $x \in \cup U_1$. Das

$$
\begin{equation}
\begin{split}
& \exists \lambda \in L \text{ mit } x_0 \in \cup \lambda \\
\Longrightarrow & \exists \lambda \in L, \exists \epsilon > 0 \text{, so das } B_\epsilon(x_0) \subset \cup \lambda \\
\Longrightarrow & \exists \epsilon > 0 \text{ mit } B_\epsilon(x_0) \subset \cup \lambda \in L 
\end{split}
\end{equation}
$$

> Also ist die Vereinigung der $\cup λ$ offen.


 Sei (Uλ)λ∈L eine Familie von offenen Mengen in X, x0 ∈
∪
λ∈L
Uλ. Das bedeutet:
∃ λ ∈ L mit x0 ∈ Uλ
=⇒ ∃ λ ∈ L, ∃ ε > 0, so daß Bε(x0) ⊂ Uλ
=⇒ ∃ ε > 0 mit Bε(x0) ⊂
∪
λ∈L
Uλ
Also ist die Vereinigung der Uλ offen.

