# Topologie
# Homotopie

# 🚧 Under Construction 🚧

Generell beschäftigt sich die Topologie mit der Klassifikation topologischer Räume bis auf [Homöomorphie](./../index.html). Dies ist aber in der Regel nict einfach zu entscheiden, insbesondere auch, ob zwei
i topologische Räume nicht homöomorph sind.

Wir weichen den Homöomorphiebegriff jetzt auf, indem wir den Homotopiebegriff einführen.

## Definition *Homotopie*

<blockquote>
Seien $(X,\mathcal{T}_X)$ und $(Y,\mathcal{T}_Y)$ topologische Räume, $M \subseteq X$ ein Teilraum und $f, g \colon \, X \to Y$ stetige Abbildungen mit $f \vert M = g \vert M$.


<ol>
<li>Eine <i>Homotopie von</i> $f$ <i>nach</i> $g$ <i>relativ zu</i> $M$ ist eine stetige Abbildung $h \colon [0,1] \times X \to Y, \, (t,x) \mapsto h(t,x)$ mit
    
$$\begin{split}
& h(0,x) = f(x), \, h(1,x) = g(x), \\
& h(t,m) = f(m) = g(m)
\end{split}$$

$\forall x \in X, \, m \in M, \, t \in [0,1]$.
</li>
<li>Gibt es eine Homotopie relativ zu $M$ von $f$ nach $g$, so nennt man $f, \, g$ <i>homotop relativ zu</i> $M$ und schreibt $f \sim_M g$.
</li>
<li>Für $M = \emptyset$ spricht man auch einfach von <i>Homotopie</i> und <i>homotop</i> und schreibt $f \sim g$.
</li>
<li>Stetige Abbildungen $f \colon X \to Y$, die homotop zu einer konstanten Abbildung $g \colon X \to Y$ sind, heißen <i>nullhomotop</i>.
</li>
</ol>
</blockquote>

Für zwei stetige Abbildungen $f \colon X \to Y$ und $g \colon Y \to X$ muss also — im Gegensatz zur Homöomorphie — nicht mehr gelten, dass $f \circ g = id_X$ und $g \circ f = id_Y$ ist, sondern sie müssen sich nur noch stetig nach $id_X$ bzw. $id_Y$ deformieren lassen: $f \circ g \sim id_X$ und $g \circ f \sim id_Y$

