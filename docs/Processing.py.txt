import wbdata as wb
import pandas as pd

def map_continents(df):
    """
    Map countries to continents automatically using World Bank metadata.
    """
    countries = wb.get_country()
    country_to_continent = {c['name']: c['region']['value'] for c in countries}
    
    df = df.reset_index()
    df['continent'] = df['country'].map(country_to_continent).fillna('Other')
    df.set_index(['continent', 'country', 'date'], inplace=True)
    
    return df

def aggregate_by_continent(df, value_col='Population, total', order=None):
    """
    Aggregate population by continent.
    """
    pop_cont = df[value_col].groupby(level=['continent','date']).sum().unstack(level=0)
    if order:
        pop_cont = pop_cont[order]
    return pop_cont
