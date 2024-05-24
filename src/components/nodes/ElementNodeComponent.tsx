import { FragmentType, useFragment } from '../../graphql/fragment-masking'
import { graphql } from '@/graphql'
import ParagraphElementComponent from '../elements/ElementNodeComponent'
 
export const ElementNodeFragment = graphql(/* GraphQL */ `
    fragment elementNode on CompositionElementNode {
        layoutType
        element {
            _metadata {
                types
            }
            ...paragraphElement
        }
    }
`)
 
const ElementNodeComponent = (props: {
  elementNode: FragmentType<typeof ElementNodeFragment>
}) => {
    const elementNode = useFragment(ElementNodeFragment, props.elementNode)
    if(elementNode.element?.__typename === "ParagraphElement") {
        return <ParagraphElementComponent paragraphElement={elementNode.element} />
    } else {
        return <div>NotImplementedException</div>
    }
    
}
 
export default ElementNodeComponent