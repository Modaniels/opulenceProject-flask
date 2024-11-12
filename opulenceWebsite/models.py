from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class user(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(100), nullable=False)
    date_created = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    def __repr__(self):
        return '<User %r>' % self.id
    
class contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    message = db.Column(db.String(100), nullable=False)
    date_created = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    def __repr__(self):
        return '<Contact %r>' % self.id
    class resevertion(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        name = db.Column(db.String(100), nullable=False)
        email = db.Column(db.String(100), nullable=False)
        phone = db.Column(db.String(100), nullable=False)
        date = db.Column(db.String(100), nullable=False)
        time = db.Column(db.String(100), nullable=False)
        message = db.Column(db.String(100), nullable=False)
        date_created = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
        def __repr__(self):
            return '<Resevertion %r>' % self.id