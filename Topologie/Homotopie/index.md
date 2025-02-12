# Topologie
# Homotopie

# 🚧 Under Construction 🚧

Generell beschäftigt sich die Topologie mit der Klassifikation topologischer Räume bis auf [Homöomorphie](./../index.html). Dies ist aber in der Regel nict einfach zu entscheiden, insbesondere auch, ob zwei
i topologische Räume nicht homöomorph sind.

Wir weichen den Homöomorphiebegriff jetzt auf, indem wir den Homotopiebegriff einführen.

## Definition *Homotopie*

<blockquote>
Seien $(X,\mathcal{T}_X)$ und $(Y,\mathcal{T}_Y)$ topologische Räume, $M \subseteq X$ ein Teilraum und $f, g : \, X \to Y$ stetige Abbildungen mit $f \vert M = g \vert M$.


<ol>
<li>Eine <i>Homotopie von $f \text{ nach } g \text{ relativ zu } M$</i> ist eine stetige Abbildung $h: [0,1] \times X \to Y, \, (t,x) \mapsto h(t,x)$ mit
    
$$\begin{split}
& h(0,x) = f(x), \, h(1,x) = g(x), \\
& h(t,m) = f(m) = g(m)
\end{split}$$

$\forall x \in X, \, m \in M, \, t \in [0,1]$.
</li>
<li>Gibt es eine Homotopie relativ zu $M$ von $f$ nach $g$, so nennt man $f, \, g$ <i>homotop relativ zu</i> $M$</i> und schreibt $f \sim_M g$.
</li>
<li>Für $M = \emptyset$ spricht man auch einfach von <i>Homotopie</i> und <i>homotop</i> und schreibt $f \sim g$.
</li>
<li>Stetige Abbildungen $f : \, X \to Y$, die homotop zu einer konstanten Abbildung $g : \, X \to Y$ sind, heißen <i>nullhomotop</i>.
</li>
</ol>
</blockquote>

---

Ein wichtiges Ziel der Topologie ist die Klassifikation topologischer R¨ aume bis auf
Hom¨ oomorphie. Dies ist ein sehr schwieriges Problem, das sich in dieser Allgemeinheit nicht
l¨ osen oder sinnvoll bearbeiten l¨ asst. Insbesondere ist es sehr schwierig, zu zeigen, dass zwei
topologische R¨ aume nicht hom¨ oomorph sind. Bisher k¨ onnen wir dies im Wesentlichen nur ¨ uber
die Betrachtung von (Weg)zusammenhangskomponenten oder Kompaktheit beweisen.
In diesem Kapitel entwickeln wir eine gr¨ oberes Klassifikationskriterium, das in der Praxis leich-
ter zu handhaben ist. Wir lockern die Klassifikation bis auf Hom¨ oomorphie auf, indem wir
zwei topologische R¨ aume (X,OX) und (Y,OY) nicht nur dann als ¨ aquivalent betrachten, wenn
sie hom¨ oomorph sind, also stetige Abbildungen f : X →Y und g : Y →X existieren mit
g◦f = idX und f ◦g = idY, sondern auch dann, wenn stetige Abbildungen f : X →Y und
g : Y →X, f¨ ur die sich die Abbildungen g◦f : X →X und f ◦g : Y →Y stetig in die
Identit¨ atsabbildungen idX : X →X und idY : Y →Y deformieren lassen.
Ein vern¨ unftiges und leicht handhabbares Konzept von stetiger Deformierbarkeit sollte eine
¨
Aquivalenzrelation auf der Menge C(X,Y) der stetigen Abbildungen f : X → Y definie-
ren und auch mit der Verkettung stetiger Abbildungen kompatibel sein. Dies entspricht dem
¨
Ubergang von der Kategorie Top der topologischen R¨ aume und stetigen Abbildungen zu einer
Quotientenkategorie wie in Definition 5.1.3, 4.
Anschaulich kann man sich eine solche stetige Deformation einer Abbildung f : X →Y in eine
Abbildung f′ : X →Y als eine zeitabh¨ angige Abbildung vorstellen. Zur Zeit t = 0 liegt die
Abbildung f vor, die sich mit fortschreitender Zeit allm¨ ahlich, aber nicht sprunghaft ¨ andert, bis
zur Zeit t= 1 die Abbildung f′vorliegt. Mathematisch entspricht dies einer stetigen Abbildung
h: [0,1] ×X →Y mit h(0,x) = f(x) und h(1,x) = f′(x) f¨ ur alle x∈X.
Stimmen f und f′auf einer Teilmenge M ⊆X¨ uberein, ist es oft auch sinnvoll, zu fordern, dass
sich die Werte dort zeitlich nicht ¨ andern, dass also h(t,m) = f(m) = f′(m) f¨ ur alle m∈M gilt.
Dies ist beispielsweise der Fall, wenn man stetige Deformationen von Wegen γ : [0,1] →X mit
¨
fixierten Endpunkten γ(0) = x und γ(1) = x′ betrachten will. Kleine, stetige
Anderungen von
Wegen spielen in allen bisher betrachteten Konzepten keine Rolle, wohl aber die Frage welche
Punkte ein solcher Weg verbindet.