import { FragmentType, useFragment } from '../../graphql/fragment-masking'
import { graphql } from '@/graphql'
import ElementNodeComponent from './ElementNodeComponent'
 
export const ColumnNodeFragment = graphql(/* GraphQL */ `
    fragment columnNode on CompositionStructureNode {
        key
        elements: nodes {
            key
            ...elementNode
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
                columnNode.elements?.map((element) => {
                    if(element?.__typename === "CompositionElementNode") {
                        return (
                            <div data-epi-block-id={element.key} key={element.key}>
                                <ElementNodeComponent elementNode={element} />
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}
 
export default ColumnNodeComponent