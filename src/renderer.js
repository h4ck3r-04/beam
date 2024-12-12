const suggestions = ["Task 1", "Task 2", "Task 3"];
const recents = ["Recent Task 1", "Recent Task 2"];
const notes = ["Note 1", "Note 2", "Note 3"];

function loadSections() {
    loadSection("suggestions", suggestions);
    loadSection("recents", recents);
    loadSection("notes", notes);
}

function loadSection(sectionName, items) {
    const sectionList = document.getElementById(`${sectionName}-list`);
    const sectionContainer = document.getElementById(`${sectionName}-section`);
    const sectionTitle = document.getElementById(`${sectionName}-title`);

    sectionList.innerHTML = '';

    if (items.length > 0) {
        items.forEach(item => {
            const li = document.createElement('li');
            li.className = 'items';
            li.textContent = item;
            sectionList.appendChild(li);
        });

        sectionContainer.style.display = 'block';
        sectionTitle.style.display = 'block';
    } else {
        sectionContainer.style.display = 'none';
        sectionTitle.style.display = 'none';
    }

    checkNotFound();
}

function search_item() {
    let input = document.querySelector('.input').value.toLowerCase();
    let sections = ['suggestions', 'recents', 'notes'];

    sections.forEach(sectionName => {
        const sectionList = document.getElementById(`${sectionName}-list`);
        const sectionContainer = document.getElementById(`${sectionName}-section`);
        const sectionTitle = document.getElementById(`${sectionName}-title`);
        let visibleItemsCount = 0;

        Array.from(sectionList.children).forEach(item => {
            if (!item.textContent.toLowerCase().includes(input)) {
                item.style.display = "none";
            } else {
                item.style.display = "list-item";
                visibleItemsCount++;
            }
        });

        if (visibleItemsCount === 0) {
            sectionContainer.style.display = 'none';
            sectionTitle.style.display = 'none';
        } else {
            sectionContainer.style.display = 'block';
            sectionTitle.style.display = 'block';
        }
    });

    checkNotFound();
}

function checkNotFound() {
    const sections = document.querySelectorAll('.section-container');
    let allEmpty = true;

    sections.forEach(section => {
        const sectionList = section.querySelector('.list');
        const visibleItems = Array.from(sectionList.children).filter(item => item.style.display !== 'none');
        if (visibleItems.length > 0) {
            allEmpty = false;
        }
    });

    const notFound = document.getElementById("not-found");
    if (allEmpty) {
        notFound.style.display = 'flex';
    } else {
        notFound.style.display = 'none';
    }
}

window.onload = loadSections;