import React, { FC } from 'react'
import { useQuery } from '@apollo/client'

import { graphql } from '@/graphql'
import GridNodeComponent from './GridNodeComponent'
 
export const VisualBuilder = graphql(/* GraphQL */ `
    query VisualBuilder($version:String) {
        Experience(where: { _metadata: { version: { eq: $version } } }) {
            items {
                _metadata {
                    version
                    ... on CompositionMetadata {
                        composition {
                            grids: nodes {
                                ...gridNode
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
                                            return <GridNodeComponent gridNode={grid} />
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