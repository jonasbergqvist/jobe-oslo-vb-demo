import { FragmentType, useFragment } from '../../graphql/fragment-masking'
import { graphql } from '@/graphql'
import ColumnNodeComponent from './ColumnNodeComponent'
 
export const RowNodeFragment = graphql(/* GraphQL */ `
    fragment rowNode on CompositionStructureNode {
        key
        columns: nodes {
            ...columnNode
        }
    }
`)
 
const RowNodeComponent = (props: {
  rowNode: FragmentType<typeof RowNodeFragment>
}) => {
    const gridNode = useFragment(RowNodeFragment, props.rowNode)
    return (
        <div className="flex-1 flex flex-row flex-nowrap justify-start vb:row">
            {
                gridNode.columns?.map((column) => {
                    if(column?.__typename === "CompositionStructureNode") {
                        return <ColumnNodeComponent columnNode={column}/>
                    }
                })
            }
        </div>
    )
}
 
export default RowNodeComponent