import { FragmentType, useFragment } from '../../graphql/fragment-masking'
import { graphql } from '@/graphql'
 
export const BlogReferenceElementFragment = graphql(/* GraphQL */ `
    fragment blogReferenceElement on BlogReferenceElement {
        ImageReference {
            url {
                default
            }
        }
        BlogPostReference {
            ... on BlogpostBlock {
                TeaserText
                Author
            }
        }
    }
`)
 
const BlogReferenceElementComponent = (props: {
    blogReferenceElement: FragmentType<typeof BlogReferenceElementFragment>
}) => {
    const blogReferenceElement = useFragment(BlogReferenceElementFragment, props.blogReferenceElement)
    if(blogReferenceElement.BlogPostReference?.__typename === "BlogpostBlock") {
        return (
            <div>
                <img src={blogReferenceElement.ImageReference?.url?.default ?? ''} />
                <div>{ blogReferenceElement.BlogPostReference.TeaserText }</div>
                <div>{ blogReferenceElement.BlogPostReference.Author }</div>
            </div>
        )
    } else {
        return <></>
    }
}
 
export default BlogReferenceElementComponent