var html = [];
html.push('<h1>This is a title</h1>');
html.push('<p>So then she said, thats not a monkey, its a truck!</p>');
html.push('<p>You shoulda seen his face...</p>');
var target = document.getElementById('content-header');
target.innerHTML = html.join('');
target.style.display = 'block';
