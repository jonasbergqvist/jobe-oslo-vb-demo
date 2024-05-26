import { FragmentType, useFragment } from '../../graphql/fragment-masking'
import { graphql } from '@/graphql'
 
export const ImageElementFragment = graphql(/* GraphQL */ `
    fragment imageElement on ImageElement {
        ImageReference {
            url {
                default
            }
        }
    }
`)
 
const ImageElementComponent = (props: {
    imageElement: FragmentType<typeof ImageElementFragment>
}) => {
    const imageElement = useFragment(ImageElementFragment, props.imageElement)
    return (
        <img src={imageElement.ImageReference?.url?.default ?? ''} />
    )
}
 
export default ImageElementComponent