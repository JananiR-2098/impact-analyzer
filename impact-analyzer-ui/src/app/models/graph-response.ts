import { Link } from './link';
import { Node } from './node';

export interface GraphResponse {
  nodes: Node[];
  links: Link[];
}