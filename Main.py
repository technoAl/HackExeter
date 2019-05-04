from flask import Flask, render_template, request
from flask_cors import CORS
import random 

app = Flask(__name__)
CORS(app)

@app.route("/", methods = ['POST'])
def generatePath ():
    paths = ['up','down', 'left', 'right']
    return str(random.choice(paths))


# def renderFrontEnd():
#     return render_template("Main.html")

print (generatePath())