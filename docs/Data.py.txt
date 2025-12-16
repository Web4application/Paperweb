import os
import pandas as pd
import wbdata as wb

CACHE_DIR = "data"

def fetch_population(indicators=None, cache_file="population.csv", start=None, end=None):
    """
    Fetch population or other World Bank indicators, cache locally.
    """
    if indicators is None:
        indicators = {'SP.POP.TOTL': 'Population, total'}
        
    os.makedirs(CACHE_DIR, exist_ok=True)
    path = os.path.join(CACHE_DIR, cache_file)
    
    if os.path.exists(path):
        df = pd.read_csv(path, index_col=[0,1], parse_dates=[1])
    else:
        df = wb.get_dataframe(indicators, convert_date=True).sort_index()
        df.to_csv(path)
    
    if start:
        df = df[df.index.get_level_values('date') >= pd.to_datetime(start)]
    if end:
        df = df[df.index.get_level_values('date') <= pd.to_datetime(end)]
        
    return df
