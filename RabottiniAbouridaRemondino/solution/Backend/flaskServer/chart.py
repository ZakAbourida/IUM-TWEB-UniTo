# chart.py

import pandas as pd
import plotly.express as px

"""
Function that creates a line graph representing the change in value in a player's market.

Parameters:

    name (string): Name of the player.
    players_df (csv): CSV file containing player data.
    players_valuations (csv): CSV file containing player ratings.
    
    Returns:
    html: Chart.
"""


def create_plot(name, players_df, player_valuations_df):
    result = pd.merge(players_df, player_valuations_df, on='player_id')
    player_val = result.query("`name` == @name")

    player_val = player_val[["player_id", "name", "date", "market_value_in_eur_y"]]
    player_val.rename(columns={'date': 'Data', 'market_value_in_eur_y': 'Valore'}, inplace=True)
    player_val["Data"] = pd.to_datetime(player_val["Data"])

    fig = px.line(player_val, x='Data', y='Valore', title=f'Valore nel Tempo di {name}')

    fig.update_layout(
        xaxis_title="",
        yaxis_title="Valore in euro",
        height=750
    )

    return fig.to_html(full_html=False)
