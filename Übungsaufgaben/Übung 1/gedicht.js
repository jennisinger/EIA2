var RandomPoem;
(function (RandomPoem) {
    // Arrays für Subjekte, Prädikate und Objekte
    var subjects = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    var predicates = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    var objects = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    // Funktion zur Generierung eines Verses
    function getVerse(_subjects, _predicates, _objects) {
        var verse = "";
        // Zufallsindex für Subjekt
        var subjectIndex = Math.floor(Math.random() * _subjects.length);
        verse += _subjects.splice(subjectIndex, 1)[0] + " "; // Subjekt hinzufügen und aus dem Array entfernen
        // Zufallsindex für Prädikat
        var predicateIndex = Math.floor(Math.random() * _predicates.length);
        verse += _predicates.splice(predicateIndex, 1)[0] + " "; // Prädikat hinzufügen und entfernen
        // Zufallsindex für Objekt
        var objectIndex = Math.floor(Math.random() * _objects.length);
        verse += _objects.splice(objectIndex, 1)[0]; // Objekt hinzufügen und entfernen
        return verse; // Generierten Vers zurückgeben
    }
    // Ausgabe der Verse in der Konsole
    for (var i = subjects.length; i > 0; i--) {
        var line = getVerse(subjects, predicates, objects);
        console.log(line); // Gedichtzeile ausgeben
    }
})(RandomPoem2 || (RandomPoem2={}));
let RandomPoem2 = "This is a random poem.";
