import {ElementDefinition} from 'cytoscape';

export function node(id: string, props: object = {}): ElementDefinition {
  return {
    data: {
      id: id,
      ...props
    }
  }
}

export function edge(id: string, source: string, target: string, props: object = {}): ElementDefinition {
  return {
    data: {
      id: id,
      source: source,
      target: target,
      ...props
    }
  }
}
