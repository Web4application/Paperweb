from aura_population.data import fetch_population
from aura_population.processing import map_continents, aggregate_by_continent
from aura_population.visualization import plot_stack_matplotlib, plot_stack_plotly

# 1. Fetch population data
df = fetch_population()

# 2. Map countries to continents
df = map_continents(df)

# 3. Aggregate population by continent
continent_order = ['East Asia & Pacific', 'South Asia', 'Sub-Saharan Africa',
                   'Europe & Central Asia', 'Latin America & Caribbean',
                   'Middle East & North Africa', 'North America']
pop_by_cont = aggregate_by_continent(df, order=continent_order)

# 4. Plot
plot_stack_matplotlib(pop_by_cont, title="World Population by Continent", ylabel="Population")
plot_stack_plotly(pop_by_cont, title="World Population by Continent (Interactive)", ylabel="Population")
