namespace RandomPoem2 {
    // Arrays für Subjekte, Prädikate und Objekte
    const subjects: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    const predicates: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    const objects: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];

    // Funktion zur Generierung eines Verses
    function getVerse(_subjects: string[], _predicates: string[], _objects: string[]): string {
        let verse: string = "";

        // Zufallsindex für Subjekt
        const subjectIndex = Math.floor(Math.random() * _subjects.length);
        verse += _subjects.splice(subjectIndex, 1)[0] + " "; // Subjekt hinzufügen und aus dem Array entfernen

        // Zufallsindex für Prädikat
        const predicateIndex = Math.floor(Math.random() * _predicates.length);
        verse += _predicates.splice(predicateIndex, 1)[0] + " "; // Prädikat hinzufügen und entfernen

        // Zufallsindex für Objekt
        const objectIndex = Math.floor(Math.random() * _objects.length);
        verse += _objects.splice(objectIndex, 1)[0]; // Objekt hinzufügen und entfernen

        return verse; // Generierten Vers zurückgeben
    }

    // Ausgabe der Verse in der Konsole
    for (let i = subjects.length; i > 0; i--) {
        const line = getVerse(subjects, predicates, objects);
        console.log(line); // Gedichtzeile ausgeben
    }
}
