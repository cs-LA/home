# Topologie

## Definition *Topologie*

> Eine *Topologie* auf einer Menge $X$ ist eine Menge $T$ von Teilmengen von $X$, die folgende Eigenschaften besitzt:
> 1. Die Menge $X$ und die leere Menge $\emptyset$ gehören zu $T$.
> 1. Der Durchschnitt je zweier Mengen aus $T$ gehört zu $T$.
> 1. Die Vereinigung beliebig vieler Mengen aus $T$ gehört zu $T$.

> Ein Element von $T$ heißt *oﬀene Menge* der Topologie $T$.

> Eine Teilmenge $A$ von $X$ heißt abgeschlossen bezüglich $T$, falls ihr Komplement $A_C := X \setminus A$ bezüglich $T$ oﬀen ist.

> Ein topologischer Raum ist ein Paar $(X,T)$, bestehend aus einer Menge $X$ und einer Topologie $T$ auf $X$.

### Ein Beispiel:<br>Der $\boldsymbol{\mathbb{R}^n}$ mit der Definition von offenen Mengen mittels des *[euklidischen Abstands](https://de.m.wikipedia.org/wiki/Euklidischer_Abstand)*

Die obige sehr allgemeine Definition erscheint auf den ersten Blick etwas verblüffend, wenn man von dem sonst in dem $\mathbb{R}^n$ üblichen Begriff der offenen Mengen herkommt.

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
> $f$ heißt *stetig* in $x$, wenn es zu jeder oﬀenen Umgebung $V$ von $f(x)$ eine oﬀene Umgebung $U$ von $x$ gibt, so dass $f(U) \subset V$.
>
> $f$ heißt stetig, wenn $f$ in jedem Punkt von $X$ stetig ist.

### Vergleich mit der im $\boldsymbol{\mathbb{R}^n}$ üblichen $\boldsymbol{\delta\text{-}\epsilon}$-Definition von Stetigkeit

> Eine Abbildung $f \colon \mathbb{R}^n \to \mathbb{R}^m$ ist genau dann stetig in $x_0$, wenn folgende Bedingung erfüllt ist:

$$
\begin{equation}
\begin{split}
& \forall \epsilon > 0 \quad \exists \, \delta > 0 \text{, so dass gilt: } \\
& d_n(x, x_0) < \delta \quad \Longrightarrow \quad d_m(f(x), f(x_0)) < \epsilon \\
& \text {wobei } d_i \text { der jeweilige euklidische Abstand im } \mathbb{R}^i \text{ sei.}
\end{split}
\end{equation}
$$

##### Beweis:
> $\boldsymbol{\Longrightarrow}$:
> 
> Sei ein $x_0 \in \mathbb{R}^n$ und ein $\epsilon > 0$ gegeben, sodass $U_\epsilon(f(x_0))$ eine offene Umgebung von $f(x_0)$ ist. Daraus folgt dann, dass es eine Umgebung $U^{-1} := f^{-1}(U_\epsilon(f(x_0)))$ gibt und somit ein $\delta > 0$, für welches $U_\delta(x_0) \subset U^{-1}$ ist.
>
> Somit ist $f$ im Punkt $x_0$ stetig im Sinne der $\delta\text{-}\epsilon$-Definition.
>
 $\boldsymbol{\Longleftarrow}$:
>
> Sei $f$ in $x_0$ stetig (entsprechend der $\delta\text{-}\epsilon$-Definition) und $U$ eine Umgebung von $f(x_0)$. Dann gibt es ein $\epsilon > 0$ mit $U_\epsilon(f(x_0)) \subset U$ und somit ein $\delta > 0$, sodass gilt:

$$
\begin{equation}
\begin{split}
& \forall x \in U_\delta(x_0) \, : \quad f(x) \in U_\epsilon(f(x_0))
\end{split}
\end{equation}
$$

> Daraus folgt $U_\delta(x_0) \subset f^{-1}(U)$ und daher ist $f^{-1}(U)$ eine Umgebung von $x_0$.
>
> Somit ist $f$ auch im *topologischen* Sinne stetig.

Hiermit sind die beiden grundlegenden Begriffe festgelegt worden, mit denen die Mathematik sich in ihrem Teilbereich Topologie beschäftigt: Untersucht werden Eigenschaften topologischer Räume, die bei stetiger Verformung erhalten bleiben.

Hierzu wird noch der Begriff des *Homöomorphismus* eingeführt.

## Definition *Homöomorphie*

> Zwei topologische Räume $X$ und $Y$ heißen *homöomorph* bzw. topologisch äquivalent, $X \approx Y$, wenn es eine bijektive stetige Abbildung $f \colon X \to Y$ gibt, so dass $f^{-1} \colon Y \to X$ ebenfalls stetig ist. $f$ wird dann *Homöomorphismus* genannt.

Leider ist es nicht immer einfach zu entscheiden, ob zwei topologische Räume homöomorpfh sind. Ein Teilbereich der Topologie, die ***[Knotentheorie](https://de.wikipedia.org/wiki/Knotentheorie)*** beschäftigt sich viel mit diesem Problem.

Häufig reicht es aber auch zu wissen, ob zwei topologische Räume [homotop](/home/Topologie/Homotopie/index.html) zueinander sind, d.h sich durch stetige verformungen ineinander überführen lassen können.
