import { FragmentType, useFragment } from '../../graphql/fragment-masking'
import { graphql } from '@/graphql'
 
export const HeadingElementFragment = graphql(/* GraphQL */ `
    fragment headingElement on HeadingElement {
        Text
        TextSize
        TextClass
        TextStyle
    }
`)
 
const HeadingElementComponent = (props: {
    headingElement: FragmentType<typeof HeadingElementFragment>
}) => {
    const headingElement = useFragment(HeadingElementFragment, props.headingElement)
    return (
        <h1 className={headingElement.TextClass ?? ''}>{ headingElement.Text }</h1>
    )
}
 
export default HeadingElementComponent