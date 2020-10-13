let noteBtn = document.getElementById('noteBtn');
var noteContainer = document.querySelector('.noteContainer');
if (localStorage.getItem('noteList') == null) {
    var noteList = [];
} else {
    noteList = JSON.parse(localStorage.getItem('noteList'));
}

if (localStorage.getItem('noteList') == null) {
    noteContainer.innerHTML = '&emsp;No Notes';
} else {
    JSON.parse(localStorage.getItem('noteList')).forEach((element, index) => {
        if (element.description.length > 50) {
            noteContainer.innerHTML += `
                                    <div class="note col-lg-4 col-sm-12 col-md-6 mb-3">
                                        <div class="card" style="height:16rem; box-shadow: 0px 1px 10px grey;">
                                            <div class="card-body">
                                                <h5 class="card-title">${element.name}</h5>
                                                <div class="card" style="height:8rem; border:none">
                                                <p class="card-text">${element.description.substring(0, 50)} <labael style="color:blue; cursor:pointer;" title='${index}' onclick="detailes(this.title)">see more...</label></p>
                                                </div>
                                                <div>
                                                    <button id="${index}" type="button" onclick="deleteNote(this.id)" class="btn btn-sm btn-danger">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    `;
        } else {
            noteContainer.innerHTML += `
                                    <div class="note col-lg-4 col-sm-12 col-md-6 mb-3">
                                        <div class="card" style="height:16rem; box-shadow: 0px 1px 10px grey;">
                                            <div class="card-body">
                                                <h5 class="card-title">${element.name}</h5>
                                                <div class="card" style="height:8rem; border:none">
                                                <p class="card-text">${element.description}</p>
                                                </div>
                                                <button id="${index}" type="button" onclick="deleteNote(this.id)" class="btn btn-sm btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                `;
        }
    });
}

noteBtn.addEventListener('click', (event) => {
    let noteName = document.getElementById('noteName');
    let noteTextBox = document.getElementById('noteTextBox');
    const alert = document.querySelector('.alert');
    if (noteName.value == "" || noteTextBox.value == "") {
        let alert = document.querySelector('.alert');
        alert.className = 'alert alert-warning';
        alert.innerHTML = 'Please Write Down Every Field';
        if (noteName.value == "" && noteTextBox.value != "") {
            noteName.style.borderColor = 'red';
            noteTextBox.style.borderColor = 'green';
        } else if (noteName.value != "" && noteTextBox.value == "") {
            noteTextBox.style.borderColor = 'red';
            noteName.style.borderColor = 'green';
        } else {
            noteName.style.borderColor = 'red';
            noteTextBox.style.borderColor = 'red';
        }
    } else {
        noteList.push(newNote(noteName.value, noteTextBox.value));
        localStorage.setItem('noteList', JSON.stringify(noteList));
        location.reload();
    }
});

let searchBox = document.getElementById('searchBox');
var notice = document.createElement('div');
notice.className = 'card col-12'
notice.style.display = 'none';
notice.style.textAlign = 'center';
notice.style.border = 'none';
notice.style.marginBottom = '195px';
notice.innerHTML = `<h3>There is no note with this name!</h3>`;
noteContainer.appendChild(notice);
searchBox.addEventListener('input', (event) => {
    let name = document.getElementsByTagName('h5');
    Array.from(document.getElementsByClassName('note')).forEach((element) => {
        if (searchBox.value == "") {
            element.style.display = 'block';
            notice.style.display = 'none';
        } else {
            if (element.children[0].children[0].children[0].innerHTML == searchBox.value) {
                element.style.display = 'block';
                notice.style.display = 'none';
            } else {
                element.style.display = 'none';
                notice.style.display = 'block';
            }
        }
    });
});

function newNote(name, content) {
    let jsonNote = {
        "name": name,
        "description": content
    }
    return jsonNote;
}

function deleteNote(index) {
    noteList = JSON.parse(localStorage.getItem('noteList'));
    noteList.splice(index, 1);
    if (noteList.length > 0) {
        localStorage.setItem('noteList', JSON.stringify(noteList));
    } else {
        localStorage.clear();
    }
    location.reload();
}

function detailes(index) {
    noteContainer.innerHTML = `<div class="note col-12 mb-3">
                                    <div class="card"  style="box-shadow: 0px 1px 10px grey;">
                                        <div class="card-body">
                                            <h5 class="card-title">${JSON.parse(localStorage.getItem('noteList'))[index].name}</h5>
                                            <p class="card-text">${JSON.parse(localStorage.getItem('noteList'))[index].description}</p>
                                            <button class="btn btn-sm btn-primary" onclick="location.reload()">Back</button>
                                        </div>
                                    </div>
                                </div>
                                `;
}

