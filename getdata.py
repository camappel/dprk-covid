import pandas as pd

url = "https://docs.google.com/spreadsheets/d/1sC2qSPnBy7iXco0OyUCqQGBhysWysFPiFTZQ0Wt6DQk/gviz/tq?tqx=out:csv&sheet=All+data"
all_data = pd.read_csv(url)
all_data.to_csv("all_data.csv", on_bad_lines="skip")
