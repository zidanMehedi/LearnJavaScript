let heading = document.createElement('h3');
let link = document.createElement('a');

link.href = '//startech.com.bd';

heading.innerHTML = 'Start Tech';

link.appendChild(heading);

heading.style.paddingLeft = '50px'

document.body.appendChild(link);