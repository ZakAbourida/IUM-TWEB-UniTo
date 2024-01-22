# app.py

from flask import Flask, request, render_template_string
import pandas as pd
from chart import create_plot
import logging

"""
Flask Server, the routes for requests from the main Express server are managed here.
"""

app = Flask(__name__)

logging.basicConfig(level=logging.INFO)

try:
    players_df = pd.read_csv('static/dataframe/players.csv')
    logging.info(f"Loaded 'players_df' with {players_df.shape[0]} row and {players_df.shape[1]} columns.")

    player_valuations_df = pd.read_csv('static/dataframe/player_valuations.csv')
    logging.info(f"Loaded 'player_valuations_df' with {player_valuations_df.shape[0]} row and {player_valuations_df.shape[1]} columns.")
except Exception as e:
    logging.error(f"Error loading DataFrames: {e}")

"""

Route responding to /values_player. It takes as parameter the name of the player arriving from the Express server.
Calls the function to create the graph and returns an HTML file containing the graph.

Method: [POST]

Parameters:

    player_name (string): Name of the player.
    
    Returns:
    html: Chart.
"""
@app.route('/values_player', methods=['POST'])
def plot():
    data = request.json
    player_name = data['name']

    graph_html = create_plot(player_name, players_df, player_valuations_df)
    return graph_html

if __name__ == '__main__':
    app.run(debug=True)
