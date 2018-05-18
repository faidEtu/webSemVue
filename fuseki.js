var Fuseki = {

  getFilms: function () {
    const fuseqiBdUrl = 'http://localhost:3030/projet-web-sem-18/query';
    const headers = new Headers({
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "X-Requested-With": "XMLHttpRequest"
    });
    const query = `
      PREFIX : <http://www.semanticweb.org/nathalie/ontologies/2017/1/untitled-ontology-161#>
      PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
      
      SELECT * 
      WHERE {
        ?classfilm rdfs:label "film"@fr.
        ?film a ?classfilm.
        ?film rdfs:label ?label
      }`;
    let formData = new FormData();
    formData.append('query=', query);

    return window.fetch(fuseqiBdUrl, { method: 'POST', headers: headers, body: formData });
  }
  
};
