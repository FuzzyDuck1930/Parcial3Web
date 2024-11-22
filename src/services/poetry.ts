fetch('https://poetrydb.org/poemcount/20')
  .then(response => {
    if (response.ok) {
      return response.json();
    }
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error 404', error);
  });