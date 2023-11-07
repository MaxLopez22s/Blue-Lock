
// Función para agregar un comentario
function addComment() {
    const name = document.getElementById('name').value;
    const commentText = document.getElementById('comment').value;

    if (name && commentText) {
        const commentList = document.getElementById('comment-list');
        const commentItem = document.createElement('li');
        commentItem.innerHTML = `<strong>${name}:</strong> ${commentText}`;
        commentList.appendChild(commentItem);

        // Limpiar los campos después de agregar el comentario
        document.getElementById('name').value = '';
        document.getElementById('comment').value = '';
    }
}

// Asociar la función addComment al botón de "Publicar comentario"
document.getElementById('comment-form').addEventListener('submit', function (e) {
    e.preventDefault();
    addComment();
});

