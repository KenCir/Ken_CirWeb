const SQLite3 = require('better-sqlite3');
const sql = new SQLite3('web.db');
const uuid = require('uuid');

module.exports = {
    initialize: () => {
        const blogTable = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'blogs';").get();
        if (!blogTable['count(*)']) {
            sql.prepare("CREATE TABLE blogs (id TEXT PRIMARY KEY, title TEXT NOT NULL, subtitle TEXT NOT NULL, content NOT NULL, create_time NOT NULL DEFAULT (DATETIME('now', 'localtime')));").run();
            sql.prepare("CREATE UNIQUE INDEX idx_blogs_id ON blogs (id);").run();
        }

        sql.pragma("synchronous = 1");
        sql.pragma("journal_mode = wal");
    },

    getBlog: (id) => {
        return sql.prepare('SELECT * FROM blogs WHERE id = ?;').get(id);
    },

    getAllBlog: () => {
        return sql.prepare('SELECT * FROM blogs;').all();
    },

    submitBlog: (title, subtitle, renderHTML) => {
        sql.prepare('INSERT INTO blogs (id, title, subtitle, content) VALUES (?, ?, ?, ?);').run(uuid.v4(), title, subtitle, renderHTML);
    }
};