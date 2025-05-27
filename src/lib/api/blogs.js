import { openDb } from '../db/database';

export async function getAllBlogs() {
  const db = await openDb();
  return db.all('SELECT * FROM blogs ORDER BY created_at DESC');
}

export async function getBlogById(id) {
  const db = await openDb();
  return db.get('SELECT * FROM blogs WHERE id = ?', [id]);
}

export async function createBlog({ title, slug, content }) {
  const db = await openDb();
  await db.run(
    'INSERT INTO blogs (title, slug, content, created_at) VALUES (?, ?, ?, datetime("now"))',
    [title, slug, content]
  );
}

export async function updateBlog(id, { title, slug, content }) {
  const db = await openDb();
  await db.run(
    'UPDATE blogs SET title = ?, slug = ?, content = ? WHERE id = ?',
    [title, slug, content, id]
  );
}

export async function deleteBlog(id) {
  const db = await openDb();
  await db.run('DELETE FROM blogs WHERE id = ?', [id]);
}
