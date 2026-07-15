import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)

FRONTEND_ORIGIN = os.environ.get("FRONTEND_ORIGIN", "http://localhost:5173")
CORS(app, origins=[FRONTEND_ORIGIN])

DATABASE_URL = os.environ.get("DATABASE_URL")
USE_POSTGRES = DATABASE_URL is not None

if USE_POSTGRES:
    import psycopg2
    from psycopg2 import errors as pg_errors

    def get_conn():
        return psycopg2.connect(DATABASE_URL)

    PLACEHOLDER = "%s"
else:
    import sqlite3

    DB_PATH = os.path.join(os.path.dirname(__file__), "users.db")

    def get_conn():
        return sqlite3.connect(DB_PATH)

    PLACEHOLDER = "?"


def init_db():
    conn = get_conn()
    cur = conn.cursor()
    if USE_POSTGRES:
        cur.execute(
            """
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name TEXT,
                email TEXT UNIQUE NOT NULL,
                password_hash TEXT NOT NULL
            )
            """
        )
    else:
        cur.execute(
            """
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                email TEXT UNIQUE NOT NULL,
                password_hash TEXT NOT NULL
            )
            """
        )
    conn.commit()
    cur.close()
    conn.close()


@app.route("/api/signup", methods=["POST"])
def signup():
    data = request.get_json(force=True)
    name = data.get("name", "")
    email = data.get("email", "").strip().lower()
    password = data.get("password", "")

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    password_hash = generate_password_hash(password)

    conn = get_conn()
    cur = conn.cursor()
    try:
        cur.execute(
            f"INSERT INTO users (name, email, password_hash) VALUES ({PLACEHOLDER}, {PLACEHOLDER}, {PLACEHOLDER})",
            (name, email, password_hash),
        )
        conn.commit()
    except Exception as e:
        conn.rollback()
        if USE_POSTGRES and isinstance(e, pg_errors.UniqueViolation):
            return jsonify({"error": "An account with this email already exists"}), 409
        elif not USE_POSTGRES and "UNIQUE constraint failed" in str(e):
            return jsonify({"error": "An account with this email already exists"}), 409
        raise
    finally:
        cur.close()
        conn.close()

    return jsonify({"message": "Account created"}), 201


@app.route("/api/login", methods=["POST"])
def login():
    data = request.get_json(force=True)
    email = data.get("email", "").strip().lower()
    password = data.get("password", "")

    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400

    conn = get_conn()
    cur = conn.cursor()
    cur.execute(
        f"SELECT name, password_hash FROM users WHERE email = {PLACEHOLDER}", (email,)
    )
    row = cur.fetchone()
    cur.close()
    conn.close()

    if row is None or not check_password_hash(row[1], password):
        return jsonify({"error": "Invalid email or password"}), 401

    return jsonify({"message": "Login successful", "name": row[0]}), 200


@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"}), 200


init_db()

if __name__ == "__main__":
    app.run(debug=True, port=5000)
