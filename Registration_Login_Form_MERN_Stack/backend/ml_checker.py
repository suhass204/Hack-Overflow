from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import nltk
from nltk.tokenize import word_tokenize

nltk.download('punkt')

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load dataset
df = pd.read_csv("drug_trafficking_keywords_700_extended.csv")

# Extract keywords (assuming they are in a column named 'Keyword')
drug_keywords = set(df['Keyword'].str.lower().tolist())

def check_message(message):
    """Tokenize and check if any word in message is a drug-related keyword."""
    words = word_tokenize(message.lower())
    for word in words:
        if word in drug_keywords:
            return True  # Flagged
    return False  # Not flagged

@app.route("/check_message", methods=["POST"])
def check():
    data = request.json
    user_message = data.get("message", "")
    is_flagged = check_message(user_message)
    return jsonify({"flagged": is_flagged})

if __name__ == "__main__":
    app.run(debug=True)
