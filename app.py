from flask import Flask, jsonify, render_template,request
import json
from flask_cors import CORS
# import os
# Import our pymongo library, which lets us connect our Flask app to our Mongo database.
# from flask_pymongo import PyMongo
import pymongo
# Create an instance of our Flask app.
app = Flask(__name__)
CORS(app)

# Create connection variable
conn = "mongodb+srv://spotifymood:spotify1234@spotify-mood.g9iwo.mongodb.net/?retryWrites=true&w=majority"

# Pass connection to the pymongo instance.
client = pymongo.MongoClient(conn)

# Connect to a database. Will create one if not already available.
db = client.spotifydata

# Set route
@app.route('/')
def index():
    # Return the template with the teams list passed in
    return render_template('/index.html')

@app.route('/songs/<title>')
def songs(title):
    # change finaldata to matt's final collection
    songs = db.finaltable.find({"Song_name":{'$regex':title}}).limit(10)
    return  {'results': [s["Song_name"] for s in songs]}

@app.route('/cluster/<title>')
def similarsongs(title):
    # change finaldata to matt's final collection
   
    record = db.finaltable.find({"Song_name":{'$regex':title}}) # search base ofd partial input
    cluster=[r["Cluster_name"] for r in record][0]
    songs = db.finaltable.find({"Cluster_name":cluster}).limit(10)
    return  {'results': [s["Song_name"] for s in songs]}


if __name__ == "__main__":
    app.run(debug=True,threaded=True)