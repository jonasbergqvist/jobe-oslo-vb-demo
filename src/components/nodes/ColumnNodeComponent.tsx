import { FragmentType, useFragment } from '../../graphql/fragment-masking'
import { graphql } from '@/graphql'
 
export const ColumnNodeFragment = graphql(/* GraphQL */ `
    fragment columnNode on CompositionStructureNode {
        key
        elements: nodes {
            layoutType
            #...elementNode
        }
    }
`)
 
const ColumnNodeComponent = (props: {
  columnNode: FragmentType<typeof ColumnNodeFragment>
}) => {
    const columnNode = useFragment(ColumnNodeFragment, props.columnNode)
    return (
        <div className="flex-1 flex flex-col flex-nowrap justify-start vb:col">
            {
            }
        </div>
    )
}
 
export default ColumnNodeComponent