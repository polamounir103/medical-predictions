from graphviz import Digraph

dot = Digraph()

# Investment options
investments = ['Stocks', 'Mutual Funds', 'Bonds']

# Define nodes (decision, chance, and outcome)
dot.node('start', 'Start')
dot.node('invest', 'Choose Investment')

for investment in investments:
    # Chance nodes for each investment type
    chance_node = f'chance_{investment}'
    dot.node(chance_node, f'Market for {investment}')
    
    # Outcome nodes for Growth and Decline
    outcome_growth = f'growth_{investment}'
    outcome_decline = f'decline_{investment}'
    
    dot.node(outcome_growth, f'Growth: ${70 if investment == "Stocks" else 53 if investment == "Mutual Funds" else 20}')
    dot.node(outcome_decline, f'Decline: ${-13 if investment == "Stocks" else -5 if investment == "Mutual Funds" else 20}')

    # Add edges (connections between nodes)
    dot.edge('invest', chance_node)
    dot.edge(chance_node, outcome_growth, label='Growth (0.4)')
    dot.edge(chance_node, outcome_decline, label='Decline (0.6)')

# Render the decision tree as a PNG image
dot.render('decision_tree', format='png')

print("Decision tree image saved as decision_tree.png")
