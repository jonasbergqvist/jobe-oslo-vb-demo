import React, { FC } from 'react'
import { useQuery } from '@apollo/client'

import { graphql } from '@/graphql'
import ParagraphElementComponent from '../elements/ParagraphElementComponent'
 
export const VisualBuilder = graphql(/* GraphQL */ `
query VisualBuilder($version: String) {
  Experience(where: { _metadata: { version: { eq: $version } } }) {
    items {
      _metadata {
        version
        ... on CompositionMetadata {
          composition {
            grids: nodes {
              ... on CompositionStructureNode {
                key
                rows: nodes {
                  ... on CompositionStructureNode {
                    key
                    columns: nodes {
                      ... on CompositionStructureNode {
                        key
                        elements: nodes {
                          ... on CompositionElementNode {
                            key
                            element {
                              _metadata {
                                types
                              }
                              ...paragraphElement
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`)

interface VisualBuilderProps {
    version: string | null
}
 
const VisualBuilderComponent: FC<VisualBuilderProps> = ({ version }) => {
    const { data } = useQuery(VisualBuilder, { variables: { version } })
 
    return (
        <div key="unstructuredData" className="relative w-full flex-1 vb:outline">
            {
            data?.Experience?.items?.map((experience) => {
                if(experience?._metadata?.__typename === "CompositionMetadata") {
                    return (
                        <div key="unstructuredData" className="relative w-full flex-1 vb:outline">
                            {
                            experience?._metadata?.composition?.grids?.map((grid) => {
                                if(grid?.__typename === "CompositionStructureNode") {
                                    return (
                                        <div className="relative w-full flex flex-col flex-nowrap justify-start vb:grid" data-epi-block-id={grid?.key}>
                                            {
                                            grid.rows?.map((row) => {
                                                if(row?.__typename === "CompositionStructureNode") {
                                                    return (
                                                        <div className="flex-1 flex flex-row flex-nowrap justify-start vb:row">
                                                            {
                                                            row.columns?.map((column) => {
                                                                if(column?.__typename === "CompositionStructureNode") {
                                                                    return (
                                                                        <div className="flex-1 flex flex-col flex-nowrap justify-start vb:col">
                                                                            {
                                                                            column.elements?.map((node) => {
                                                                                if(node?.__typename === "CompositionElementNode") {
                                                                                    switch(node.element?.__typename)
                                                                                    {
                                                                                        case "ParagraphElement": {
                                                                                            <div data-epi-block-id={node.key} key={node.key}>
                                                                                                <ParagraphElementComponent paragraphElement={node.element} />
                                                                                            </div>
                                                                                        }
                                                                                        default: {
                                                                                            return (<>NotImplementedException</>)
                                                                                        }
                                                                                    }
                                                                                }
                                                                            })
                                                                            }
                                                                        </div>
                                                                    )
                                                                }
                                                            })
                                                            }
                                                        </div>
                                                    )
                                                }
                                            })
                                            }
                                        </div>
                                    )
                                }
                                })
                            }
                        </div>
                    )
                }
            })
            }
        </div>
    )
}
 
export default VisualBuilderComponent