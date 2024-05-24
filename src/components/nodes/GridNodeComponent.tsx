import { FragmentType, useFragment } from '../../graphql/fragment-masking'
import { graphql } from '@/graphql'
import RowNodeComponent from './RowNodeComponent'
 
export const GridNodeFragment = graphql(/* GraphQL */ `
    fragment gridNode on CompositionStructureNode {
        key
        rows: nodes {
            key
            ...rowNode
        }
    }
`)
 
const GridNodeComponent = (props: {
  gridNode: FragmentType<typeof GridNodeFragment>
}) => {
    const gridNode = useFragment(GridNodeFragment, props.gridNode)
    return (
        <div className="relative w-full flex flex-col flex-nowrap justify-start vb:grid" data-epi-block-id={gridNode?.key}>
            {
                gridNode.rows?.map((row) => {
                    if(row?.__typename === "CompositionStructureNode") {
                        return <RowNodeComponent rowNode={row} />
                    }
                })
            }
        </div>
    )
}
 
export default GridNodeComponent