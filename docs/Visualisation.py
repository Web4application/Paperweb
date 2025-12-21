import matplotlib.pyplot as plt
import plotly.graph_objs as go
import plotly.offline as offline

def plot_stack_matplotlib(df, title="Stacked Area Chart", ylabel="Value"):
    plt.figure(figsize=(10,5))
    plt.stackplot(df.index, df.values.T, labels=df.columns)
    plt.legend(loc='upper left')
    plt.xlabel("Year")
    plt.ylabel(ylabel)
    plt.title(title)
    plt.show()

def plot_stack_plotly(df, title="Interactive Stacked Chart", ylabel="Value"):
    offline.init_notebook_mode()
    data = [go.Scatter(x=df.index, y=df[col], name=col, stackgroup='World') for col in df.columns]
    fig = go.Figure(data=data)
    fig.update_layout(title=title, xaxis_title="Year", yaxis_title=ylabel)
    offline.iplot(fig)
