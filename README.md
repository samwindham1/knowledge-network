# Knowledge Network

This application is a mapping of knowledge domains. It allows you to log what you have learned and explore new areas branching off from your current knowledge.

## Network Data Structure

### 1. Domain (category)

Tree structure encompassing sub-domains.

Contains:
- id - _number_
- parent - _id_
- children - _array of id's_

### 2. Network (graph)

Full graph of **Knowledge Nodes**. Dictionary of nodes, indexed by ids.

### 3. Node (subject)

Individual node containing all of the information about the subject. 

Conatins:
- id - _number_
- edges - _array of id's of connected nodes_
