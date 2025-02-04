# Topologie

## Definition *Topologie*

> Eine *Topologie* auf einer Menge $X$ ist eine Menge $T$ von Teilmengen von $X$, die folgende Eigenschaften besitzt:
> 1. Die Menge $X$ und die leere Menge $\emptyset$ gehören zu $T$.
> 1. Der Durchschnitt je zweier Mengen aus $T$ gehört zu $T$.
> 1. Die Vereinigung beliebig vieler Mengen aus $T$ gehört zu $T$.

> Ein Element von $T$ heißt *oﬀene Menge* der Topologie $T$.

> Eine Teilmenge $A$ von $X$ heißt abgeschlossen bezüglich $T$, falls ihr Komplement $A_C := X \setminus A$ bezüglich $T$ oﬀen ist.

> Ein topologischer Raum ist ein Paar $(X,T)$, bestehend aus einer Menge $X$ und einer Topologie $T$ auf $X$.

### Ein paar Anmerkungen zum Topologie-Begriff

Diese sehr allgemeine Definition erscheint auf den ersten Blick etwas verblüffend, wenn man von dem sonst in dem $\mathbb{R}^n$ üblichen Begriff der offenen Mengen herkommt.

Hier wird eine Teilmenge $T$ von $\mathbb{R}^n$ üblicherweise mit Hilfe des *[euklidischen Abstands](https://de.m.wikipedia.org/wiki/Euklidischer_Abstand)* als offen definiert:


> Eine Menge $T \subseteq \mathbb{R}^n$ heißt oﬀen, wenn für jedes $x \in \mathbb{R}^n$ ein $\epsilon > 0$ existiert, so dass ein ganzer $\epsilon$–Ball $B_\epsilon(x)$ um $x$ in $T$  enthalten ist.

Hier der Nachweis, dass die Definition offener Mengen mittels des euklidischen Abstands eine Topologie im oben definierten Sinne ist:

1. Es gilt offensichtlich:
    1. Für die leere Menge $\emptyset$ braucht man nichts zu zeigen, da sie ja keine Elemente enthält.
    1. Ist $x \in \mathbb{R}^n$ und $r > 0$, so liegt natürlich $B_r(x)$ in $\mathbb{R}^n$. Also ist $\mathbb{R}^n$ offen.
1. Seien $U_1, U_2 \subset \mathbb{R}^n$ offen, $x_0 \in U_1 \cap U_2$ beliebig vorgegeben. Dann gibt es $\epsilon_1, \epsilon_2 > 0$, so daß $B_{\epsilon_1}(x_0) \subset U_1$ und $B_{\epsilon_2}(x_0) \subset U_2$ ist. Setzt man $\epsilon := \min(\epsilon_1, \epsilon_2)$, so ist $B_\epsilon(x_0) \subset U_1 \cap U_2$. Also ist der Durchschnitt von zwei offenen Mengen wieder offen.
1. Sei $(U_\lambda)_{\lambda \in L}$ eine Familie von offenen Mengen in $X$, $x_0 \in \bigcup _{\lambda \in L} {U _\lambda}$. Das bedeutet:

$$
\begin{equation}
\begin{split}
& \, \exists \, \lambda \in L \text{ mit } x_0 \in U_\lambda \\
\Longrightarrow & \, \exists \, \lambda \in L, \exists \, \epsilon > 0 \text{, so das } B_\epsilon(x_0) \subset U_\lambda \\
\Longrightarrow & \, \exists \, \epsilon > 0 \text{ mit } B_\epsilon(x_0) \subset \bigcup _{\lambda \in L} {U _\lambda} 
\end{split}
\end{equation}
$$

> Also ist die Vereinigung der $U_\lambda$ offen.


## Definition *Stetigkeit*

> Gegeben seien topologische Räume $X$ und $Y$, sowie eine Abbildung $f \colon X \to Y$ und ein $x \in X$.
>
> $f$ heißt *stetig* in $X$, wenn es zu jeder oﬀenen Umgebung $V$ von $f(x)$ eine oﬀene Umgebung $U$ von $x$ gibt, so dass $f(U) \subset V$.
>
> $f$ heißt stetig, wenn $f$ in jedem Punkt von $X$ stetig ist.


### Vergleich mit der im $\mathbb{R}^n$ üblichen $\delta - \epsilon$-Definition von Stetigkeit

> Eine Abbildung $f \colon \mathbb{R}^n \to \mathbb{R}^m$ ist genau dann stetig in $x_0$, wenn folgende Bedingung erfüllt ist:

$$
\begin{equation}
\begin{split}
\forall \epsilon > 0 \quad \exists \, \delta > 0 \text{ , so dass gilt } d_n(x, x_0) < \delta \Longrightarrow d_m(f(x), f(x_0)) < \epsilon \\
\text {wobei } d_i \text { der jeweilige euklidische Abstand im } \mathbb{R}^n \text{ sei.}
\end{split}
\end{equation}
$$

Eine Abbildung f : X → Y ist genau dann stetig in x0, wenn folgende Bedingung
erfullt ist: ¨
∀ ε > 0 ∃ δ > 0, so daß gilt: d(x, x0) < δ =⇒ d(f(x), f(x0)) < ε.


## Definition *Homöomorphie*

> Zwei topologische Räume $X$ und $Y$ heißen *homöomorph*, $X \approx Y$, wenn es eine bijektive stetige Abbildung $f \colon X \to Y$ gibt, so dass $f^{-1} \colon Y \to X$ ebenfalls stetig ist. $f$ wird dann *Homöomorphismus* genannt.


