<div class="hGrid">
  <div class="grid-1">
    <a href="./../index.html"><img src="./../logo120.png"></a>
  </div>
  <div class="grid-2">
    <div class="gridTitle"><a href="./../index.html">KTrunk</a></div>
    <div class="gridTitle"><a href="./../Manual.html"><span class="en">Manual</span><span class="de">Handbuch</span></a></div>
    <div class="gridDescription" style="text-align: right;"><a href="Index.html">Index</a></div>
  </div>
<div class="gridBreak"></div>
</div>



<h1>
  <span class="en">Settings</span>
  <span class="de">Einstellungen</span>
</h1>
<p>
  <span class="en">In the Settings you can specify how the app will behave for some functionalities.</span>
  <span class="de">In den Einstellungen kann für einige Funktionen festlegen, wie die App sich verhalten soll.</span>
</p>
<h3>
  <span class="en">Use iCloud</span>
  <span class="de">iCloud nutzen</span>
</h3>
<p>
  <span class="en">By default <em>KTrunk</em> exploits the iCloud to synchronize yout documents across multiple devices. You may switch this off in the device settings.</span>
  <span class="de">Standardmäßig nutzt <em>KTrunk</em> die iCloud, um die Dokumente auf allen Geräten zu synchronisieren. Dies lässt sich in den Geräte-Einstellungen ausschalten.</span>
</p>
<h3>
  <span class="en">Base Font-Size</span>
  <span class="de">Basis-Schriftgröße</span>
</h3>
<p>
  <span class="en">You may specify a <strong><em>base font-size</em></strong> that fits best for you. The base font-size is that font-size that will be used to render normal paragraphs.</span>
  <span class="de">Die <strong><em>Basis-Schriftgröße</em></strong> kann individuell eingestellt werden. Die Basis-Schriftgröße wird für die Darstellung normaler Paragraphen benutzt.</span>
</p>
<p>
  <span class="en">The base font-size is restricted to values from 8 to 32. The base font-size will be saved locally for each device.</span>
  <span class="de">Die Basis-Schriftgröße ist auf Werte von 8 bis 32 begrenzt. Die Basis-Schriftgröße wird lokal für jedes Gerät gespeichert.</span>
</p>
<h3>
  <span class="en">CSS Overwrites</span>
  <span class="de">CSS-Überschreibungen</span>
</h3>
<p>
  <span class="en">The notes are saved in HTML format and presented using <strong><em>CSS definitions</em></strong>. These CSS definitions are overwritable now to adjust the presentation according to your expectations.</span>
  <span class="de">Die Notizen werden im HTML-Format gespeichert und zur Anzeige mit <strong><em>CSS-Definitionen</em></strong> formatiert. Diese CSS-Definitionen können nun überschrieben werden, um die Formatierung den eigenen Ansprüchen anzupassen.</span>
</p>
<h3>
  <span class="en">The Homepage</span>
  <span class="de">Die Homepage</span>
</h3>
<p>
  <span class="en">Here you can specify which document will be shown when you press the home button <img src="buttons/navHome.jpg" class="inLineImg">.</span>
  <span class="de">Hier kann angegeben werden, welches Dokument angezeigt werden soll, wenn man die Home-Schaltfläche <img src="buttons/navHome.jpg" class="inLineImg"> anklickt.</span>
</p>
<h3 id="HashTagProposals">
  <span class="en">#Tag proposals</span>
  <span class="de">#Tag-Vorschläge</span>
</h3>
<p>
  <span class="en">When this feature is enabled you get proposals for words starting with an <code>#</code>. These proposals are other #Tags already used within notes.<br>These proposals are also availble when entering search terms.</span>
  <span class="de">Wenn diese Funktionalität aktiviert ist, bekommt man Vorschläge für Wörter, die mit einem <code>#</code> beginnen. Diese Vorschläge sind #Tags, die schon in Notizen verwendet wurden. Diese Vorschläge werden auch bei der Eingabe von Suchbegriffen gemacht.</span>
</p>
<p>
  <span class="en">To avoid unwanted proposals you can suppress them by using <a href="https://en.wikipedia.org/wiki/Regular_expression">regular expression</a>. Here are some examples:</span>
  <span class="de">Um ungewünschte Vorschläge zu vermeiden, kann man sie mit <a href="https://de.wikipedia.org/wiki/Regulärer_Ausdruck">regulären Ausdrücken</a> unterdrücken. Hier einige Beispiele:</span>
</p>
<ul>
  <li><code>[~/'<\>]+</code>
    <span class="en">Suppress any proposal that contains one of the characters between the square brackets.</span>
    <span class="de">Unterdrücke alle Vorschläge, die eines der Zeichen zwischen den eckigen Klammern enthalten.</span>
  </li>
  <li><code>(.)\1{4}</code>
    <span class="en">Suppress any proposal that contains one and the same character more than 4 times in a row.</span>
    <span class="de">Unterdrücke alle Vorschläge, die ein und das gleiche Zeichen mehr als viermal hintereinander enthalten.</span>
  </li>
  <li><code>^#{2,}</code>
    <span class="en">Suppress any proposal that starts with more than one <code>#</code>.</span>
      <span class="de">Unterdrücke alle Vorschläge, die mit mehr als einem <code>#</code> beginnen.</span>
  </li>
  <li><code>.{25,}</code>
    <span class="en">Suppress any proposal that consist of more than 25 characters.</span>
    <span class="de">Unterdrücke alle Vorschläge, die aus mehr als 25 Zeichen bestehen.</span>
  </li>
</ul>
<h3>
  <span class="en">The Markdown file extensions</span>
  <span class="de">Die Markdown Datei-Endungen</span>
</h3>
<p>
  <span class="en">Here you can specify some file extension separated by a colon. When you download a file with one of these extensions, its content will be considered as <a href="https://daringfireball.net/projects/markdown/">markdown</a> formatted. This markdown content will be converted to html and stared as an editable note in KTrunk, not as a file.</span>
  <span class="de">Hier kann man, durch Kommata getrennt, Datei-Endungen angeben. Wenn dann eine Datei mit einer dieser Endungen heruntergeladen wird, wird der Inhalt als <a href="https://daringfireball.net/projects/markdown/">Markdown</a>-formatiert betrachtet. Dieser Markdown-Inhalt wird dann in das entsprechende HTML-Format konvertiert uns als bearbeitbare Notiz statt als Datei in KTrunk gespeichert.</span>
</p>
<h3>
  <span class="en">Image Dialog Settings</span>
  <span class="de">Bilddialog-Einstellungen</span>
</h3>
<p>
  <span class="en">The <i>approximate preview size</i> will be used to calculate the number of columns in which images will be shown in the <i>Insert Image</i> dialog.</span>
  <span class="de">Die <i>ungefähre Bildvorschau-Größe</i> wird genutzt, um die Anzahl der Spalten zu berechnen, in denen die Bilder in dem <i>Bild einfügen</i>-Dialog angezeigt werden.</span>
</p>
<p>
  <span class="en">The <i>insert with link</i> switch determines the default to be used in the <i>Insert Image</i> dialog.</span>
  <span class="de">Der <i>Einfügen mit Link</i>-Schalter legt die Voreinstellung fest, die in dem <i>Bild einfügen</i>-Dialog verwendet wird.</span>
</p>
<h3>
  <span class="en">Clear HTML Formatting</span>
  <span class="de">HTML-Formatierung bereinigen</span>
</h3>
<p>
  <span class="en">You may choose to automatically remove <a href="./../Manual/EditMode.html">unwanted HTML formattings</a> when saving a note.</span>
  <span class="de"><a href="./../Manual/EditMode.html">Unerwünschte HTML-Formatierungen</a> können auf Wunsch beim Sichern einer Notiz automatisch bereinigt werden.</span>
</p>
<h3>
  <span class="en">Debugging-Level</span>
  <span class="de">Debugging-Level</span>
</h3>
<p>
  <span class="en">Here vou specify how detailled information will be written to log files. These log files are stored locally only. In case of a problem you may send the log file ffor error analysis to <a href="mailto:Cl.Schuetzdeller@icloud.com">me</a>, the developer of KTrunk.</span>
  <span class="de">Hier kann festgelegt werden, wie detailliert Informatinen in Log-Files gespeichert werden. Diese Log-Files werden ausschließlich lokal gespeichert. Falls einmal ein Problem auftreten sollte, kann das Log-File zur Fehler-Analyse an <a href="mailto:Cl.Schuetzdeller@icloud.com">mich</a>, den KTrunk-Entwickler, geschickt werden.</span>
</p>
