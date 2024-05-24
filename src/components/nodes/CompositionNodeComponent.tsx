import { ICompositionStructureNode } from '@/graphql/graphql'
import { FragmentType, useFragment } from '../../graphql/fragment-masking'
import { graphql } from '@/graphql'
 
export const compositionNodeFragment = graphql(/* GraphQL */ `
    fragment compositionNode on ICompositionNode {
        key
        layoutType
        ... on CompositionStructureNode {
            nodes @recursive {
                __typename
            }
        }
        ... on CompositionElementNode {
            element {
                _metadata {
                    types
                }
            }
        }
    }
`)
 
const CompositionNodeComponent = (props: {
  compositionNode: FragmentType<typeof compositionNodeFragment>
}) => {
  const compositionNode = useFragment(compositionNodeFragment, props.compositionNode)
    if(compositionNode.__typename === "CompositionElementNode") {
        return (<div>This is an element</div>)
    } else if (compositionNode.__typename === "CompositionStructureNode") {
        compositionNode.nodes?.map((node) => {
            const innerCompositionNode = node as FragmentType<typeof compositionNodeFragment>
            return <CompositionNodeComponent compositionNode={innerCompositionNode} />
        })
    }
}
 
export default CompositionNodeComponent