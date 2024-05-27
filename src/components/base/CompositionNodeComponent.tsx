import { FragmentType, useFragment } from '../../graphql/fragment-masking'
import { graphql } from '@/graphql'
import ParagraphElementComponent from '../elements/ParagraphElementComponent'
import BlogReferenceElementComponent from '../elements/BlogReferenceComponent'
import NewsReferenceComponent from '../elements/NewsReferenceComponent'
import HeadingElementComponent from '../elements/HeadingElementComponent'
import ImageElementComponent from '../elements/ImageElementComponent'
 
export const CompositionElementNodeFragment = graphql(/* GraphQL */ `
    fragment compositionElementNode on CompositionElementNode {
        key
        element {
            _metadata {
                types
            }
            ...paragraphElement
            ...blogReferenceElement
            ...newsReferenceElement
            ...headingElement
            ...imageElement
        }
    }
`)
 
const CompositionElementNodeComponent = (props: {
    compositionElementNode: FragmentType<typeof CompositionElementNodeFragment>
}) => {
    const compositionElementNode = useFragment(CompositionElementNodeFragment, props.compositionElementNode)
    const element = compositionElementNode.element
    switch(element?.__typename)
    {
        case "ParagraphElement":
            return <div data-epi-block-id={compositionElementNode.key}><ParagraphElementComponent paragraphElement={element} /></div>
        case "HeadingElement":
            return <div data-epi-block-id={compositionElementNode.key}><HeadingElementComponent headingElement={element} /></div>
        case "ImageElement":
            return <div data-epi-block-id={compositionElementNode.key}><ImageElementComponent imageElement={element} /></div>
        case "BlogReferenceElement":
            return <div data-epi-block-id={compositionElementNode.key}><BlogReferenceElementComponent blogReferenceElement={element} /></div>
        case "NewsReferenceElement":
            return <div data-epi-block-id={compositionElementNode.key}><NewsReferenceComponent newsReferenceElement={element} /></div>
        default:
            return <>NotImplementedException</>
    }
}
 
export default CompositionElementNodeComponent