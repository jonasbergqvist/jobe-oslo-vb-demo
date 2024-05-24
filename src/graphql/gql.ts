/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    fragment columnNode on CompositionStructureNode {\n        key\n        elements: nodes {\n            layoutType\n            #...elementNode\n        }\n    }\n": types.ColumnNodeFragmentDoc,
    "\n    query VisualBuilder($version:String) {\n        Experience(where: { _metadata: { version: { eq: $version } } }) {\n            items {\n                _metadata {\n                    version\n                    ... on CompositionMetadata {\n                        composition {\n                            grids: nodes {\n                                ...gridNode\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n": types.VisualBuilderDocument,
    "\n    fragment gridNode on CompositionStructureNode {\n        key\n        rows: nodes {\n            key\n            ...rowNode\n        }\n    }\n": types.GridNodeFragmentDoc,
    "\n    fragment rowNode on CompositionStructureNode {\n        key\n        columns: nodes {\n            ...columnNode\n        }\n    }\n": types.RowNodeFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment columnNode on CompositionStructureNode {\n        key\n        elements: nodes {\n            layoutType\n            #...elementNode\n        }\n    }\n"): (typeof documents)["\n    fragment columnNode on CompositionStructureNode {\n        key\n        elements: nodes {\n            layoutType\n            #...elementNode\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query VisualBuilder($version:String) {\n        Experience(where: { _metadata: { version: { eq: $version } } }) {\n            items {\n                _metadata {\n                    version\n                    ... on CompositionMetadata {\n                        composition {\n                            grids: nodes {\n                                ...gridNode\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query VisualBuilder($version:String) {\n        Experience(where: { _metadata: { version: { eq: $version } } }) {\n            items {\n                _metadata {\n                    version\n                    ... on CompositionMetadata {\n                        composition {\n                            grids: nodes {\n                                ...gridNode\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment gridNode on CompositionStructureNode {\n        key\n        rows: nodes {\n            key\n            ...rowNode\n        }\n    }\n"): (typeof documents)["\n    fragment gridNode on CompositionStructureNode {\n        key\n        rows: nodes {\n            key\n            ...rowNode\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment rowNode on CompositionStructureNode {\n        key\n        columns: nodes {\n            ...columnNode\n        }\n    }\n"): (typeof documents)["\n    fragment rowNode on CompositionStructureNode {\n        key\n        columns: nodes {\n            ...columnNode\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;