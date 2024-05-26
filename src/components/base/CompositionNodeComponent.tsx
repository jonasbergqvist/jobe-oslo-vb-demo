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
            return <ParagraphElementComponent paragraphElement={element} />
        case "HeadingElement":
                return <HeadingElementComponent headingElement={element} />
        case "ImageElement":
            return <ImageElementComponent imageElement={element} />
        case "BlogReferenceElement":
            return <BlogReferenceElementComponent blogReferenceElement={element} />
        case "NewsReferenceElement":
            return <NewsReferenceComponent newsReferenceElement={element} />
        default:
            return <>NotImplementedException</>
    }
}
 
export default CompositionElementNodeComponent