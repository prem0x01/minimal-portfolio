import db from '$lib/db.js';

export function getAllProjects() {
  return db.all('SELECT * FROM projects ORDER BY id DESC');
}

export function getProjectById(id) {
  return db.get('SELECT * FROM projects WHERE id = ?', id);
}

export function createProject({ title, description, link, tags }) {
  return db.run(
    'INSERT INTO projects (title, description, link, tags) VALUES (?, ?, ?, ?)',
    title,
    description,
    link,
    tags
  );
}

export function updateProject(id, { title, description, link, tags }) {
  return db.run(
    'UPDATE projects SET title = ?, description = ?, link = ?, tags = ? WHERE id = ?',
    title,
    description,
    link,
    tags,
    id
  );
}

export function deleteProject(id) {
  return db.run('DELETE FROM projects WHERE id = ?', id);
}
s