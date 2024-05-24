import React, { FC } from 'react'
import { useQuery } from '@apollo/client'

import CompositionNodeComponent from './CompositionNodeComponent'
import { graphql } from '@/graphql'
 
export const VisualBuilder = graphql(/* GraphQL */ `
    query VisualBuilder($version:String) {
        Experience(where: { _metadata: { version: { eq: $version } } }) {
            items {
                _metadata {
                    __typename
                    ... on CompositionMetadata {
                        composition {
                            layoutType
                            nodes {
                                ...compositionNode
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
 
    data?.Experience?.items?.map((experience) => {
        if(experience?._metadata?.__typename === "CompositionMetadata") {
            return (
                <div key="unstructuredData" className="relative w-full flex-1 vb:outline">
                    {
                        experience?._metadata?.composition?.nodes?.map((node) => {
                            if(node) {
                                return <CompositionNodeComponent compositionNode={node} />
                            }
                        })
                    }
                </div>
            )
        }
    })

    return (<div></div>)
}
 
export default VisualBuilderComponent