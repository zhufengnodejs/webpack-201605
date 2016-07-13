var str = '/api/books';
console.log(str.replace(/^\/api\/(.*)/, '/$1\.json'));