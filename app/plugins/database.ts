import dataBase from 'better-sqlite3'

const db = new dataBase('../data/app.db');

db.pragma('foreign_keys = ON');