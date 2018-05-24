var Fuseki = {

  getFilms: function () {

    const fuseqiSelectUrl = 'http://localhost:3030/fuseki-base/query?query=';

    const headers = new Headers({
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-Requested-With": "XMLHttpRequest"
    });
    const query = encodeURIComponent(`
      PREFIX : <http://www.semanticweb.org/nathalie/ontologies/2017/1/untitled-ontology-161#>
      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      PREFIX imdb: <http://data.linkimdb.org/ressource/movie#>
      
      SELECT * 
      WHERE {
        ?classfilm rdfs:label "film"@fr.
        ?film a ?classfilm.
        ?film rdfs:label ?label.
        ?film rdfs:year ?annee.
        ?film imdb:DateOfRelease ?sortie.
        ?film imdb:nameOfPerson ?realisateur
      }
    `);

    return window.fetch(fuseqiSelectUrl + query, { method: 'POST', headers: headers });
  },

  getActors: function () {

    const fuseqiSelectUrl = 'http://localhost:3030/fuseki-base/query?query=';

    const headers = new Headers({
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-Requested-With": "XMLHttpRequest"
    });
    const query = encodeURIComponent(`
      PREFIX : <http://www.semanticweb.org/nathalie/ontologies/2017/1/untitled-ontology-161/instances#>
      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      PREFIX imdb: <http://data.linkimdb.org/ressource/movie#>
      
      SELECT * 
      WHERE {
        ?personne :aJoueDans ?film.
        ?personne rdfs:label ?personneName.
      }
    `);

    return window.fetch(fuseqiSelectUrl + query, { method: 'POST', headers: headers });
  }

};
