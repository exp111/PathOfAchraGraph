import {ElementDefinition} from 'cytoscape';

export function node(id: string): ElementDefinition {
  return {
    data: {
      id: id
    }
  }
}

export function edge(id: string, source: string, target: string): ElementDefinition {
  return {
    data: {
      id: id,
      source: source,
      target: target
    }
  }
}
