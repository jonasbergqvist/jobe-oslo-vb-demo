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
    "\nquery VisualBuilder($key: String, $version: String) {\n  Experience(where: { _metadata: { key: { eq: $key } version: { eq: $version } } }) {\n    items {\n      _metadata {\n        version\n        ... on CompositionMetadata {\n          composition {\n            grids: nodes {\n              ... on CompositionStructureNode {\n                key\n                rows: nodes {\n                  ... on CompositionStructureNode {\n                    key\n                    columns: nodes {\n                      ... on CompositionStructureNode {\n                        key\n                        elements: nodes {\n                          ...compositionElementNode\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n": types.VisualBuilderDocument,
    "\n    fragment compositionElementNode on CompositionElementNode {\n        key\n        element {\n            _metadata {\n                types\n            }\n            ...paragraphElement\n            ...blogReferenceElement\n            ...newsReferenceElement\n            ...headingElement\n            ...imageElement\n        }\n    }\n": types.CompositionElementNodeFragmentDoc,
    "\n    fragment blogReferenceElement on BlogReferenceElement {\n        ImageReference {\n            url {\n                default\n            }\n        }\n        BlogPostReference {\n            ... on BlogpostBlock {\n                TeaserText\n                Author\n            }\n        }\n    }\n": types.BlogReferenceElementFragmentDoc,
    "\n    fragment headingElement on HeadingElement {\n        Text\n        TextSize\n        TextClass\n        TextStyle\n    }\n": types.HeadingElementFragmentDoc,
    "\n    fragment imageElement on ImageElement {\n        ImageReference {\n            url {\n                default\n            }\n        }\n    }\n": types.ImageElementFragmentDoc,
    "\n    fragment newsReferenceElement on NewsReferenceElement {\n        ImageReference {\n            url {\n                default\n            }\n        }\n        NewsReference {\n            ... on NewsBlock {\n                TeaserText\n            }\n        }\n    }\n": types.NewsReferenceElementFragmentDoc,
    "\n    fragment paragraphElement on ParagraphElement {\n        MainText {\n            html\n        }\n    }\n": types.ParagraphElementFragmentDoc,
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
export function graphql(source: "\nquery VisualBuilder($key: String, $version: String) {\n  Experience(where: { _metadata: { key: { eq: $key } version: { eq: $version } } }) {\n    items {\n      _metadata {\n        version\n        ... on CompositionMetadata {\n          composition {\n            grids: nodes {\n              ... on CompositionStructureNode {\n                key\n                rows: nodes {\n                  ... on CompositionStructureNode {\n                    key\n                    columns: nodes {\n                      ... on CompositionStructureNode {\n                        key\n                        elements: nodes {\n                          ...compositionElementNode\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery VisualBuilder($key: String, $version: String) {\n  Experience(where: { _metadata: { key: { eq: $key } version: { eq: $version } } }) {\n    items {\n      _metadata {\n        version\n        ... on CompositionMetadata {\n          composition {\n            grids: nodes {\n              ... on CompositionStructureNode {\n                key\n                rows: nodes {\n                  ... on CompositionStructureNode {\n                    key\n                    columns: nodes {\n                      ... on CompositionStructureNode {\n                        key\n                        elements: nodes {\n                          ...compositionElementNode\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment compositionElementNode on CompositionElementNode {\n        key\n        element {\n            _metadata {\n                types\n            }\n            ...paragraphElement\n            ...blogReferenceElement\n            ...newsReferenceElement\n            ...headingElement\n            ...imageElement\n        }\n    }\n"): (typeof documents)["\n    fragment compositionElementNode on CompositionElementNode {\n        key\n        element {\n            _metadata {\n                types\n            }\n            ...paragraphElement\n            ...blogReferenceElement\n            ...newsReferenceElement\n            ...headingElement\n            ...imageElement\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment blogReferenceElement on BlogReferenceElement {\n        ImageReference {\n            url {\n                default\n            }\n        }\n        BlogPostReference {\n            ... on BlogpostBlock {\n                TeaserText\n                Author\n            }\n        }\n    }\n"): (typeof documents)["\n    fragment blogReferenceElement on BlogReferenceElement {\n        ImageReference {\n            url {\n                default\n            }\n        }\n        BlogPostReference {\n            ... on BlogpostBlock {\n                TeaserText\n                Author\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment headingElement on HeadingElement {\n        Text\n        TextSize\n        TextClass\n        TextStyle\n    }\n"): (typeof documents)["\n    fragment headingElement on HeadingElement {\n        Text\n        TextSize\n        TextClass\n        TextStyle\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment imageElement on ImageElement {\n        ImageReference {\n            url {\n                default\n            }\n        }\n    }\n"): (typeof documents)["\n    fragment imageElement on ImageElement {\n        ImageReference {\n            url {\n                default\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment newsReferenceElement on NewsReferenceElement {\n        ImageReference {\n            url {\n                default\n            }\n        }\n        NewsReference {\n            ... on NewsBlock {\n                TeaserText\n            }\n        }\n    }\n"): (typeof documents)["\n    fragment newsReferenceElement on NewsReferenceElement {\n        ImageReference {\n            url {\n                default\n            }\n        }\n        NewsReference {\n            ... on NewsBlock {\n                TeaserText\n            }\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment paragraphElement on ParagraphElement {\n        MainText {\n            html\n        }\n    }\n"): (typeof documents)["\n    fragment paragraphElement on ParagraphElement {\n        MainText {\n            html\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;