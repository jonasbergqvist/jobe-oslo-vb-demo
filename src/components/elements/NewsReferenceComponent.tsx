import { FragmentType, useFragment } from '../../graphql/fragment-masking'
import { graphql } from '@/graphql'
 
export const NewsReferenceElementFragment = graphql(/* GraphQL */ `
    fragment newsReferenceElement on NewsReferenceElement {
        ImageReference {
            url {
                default
            }
        }
        NewsReference {
            ... on NewsBlock {
                TeaserText
            }
        }
    }
`)
 
const NewsReferenceElementComponent = (props: {
    newsReferenceElement: FragmentType<typeof NewsReferenceElementFragment>
}) => {
    const newsReferenceElement = useFragment(NewsReferenceElementFragment, props.newsReferenceElement)
    if(newsReferenceElement.NewsReference?.__typename === "NewsBlock") {
        return (
            <div>
                <img src={newsReferenceElement.ImageReference?.url?.default ?? ''} />
                <div>{ newsReferenceElement.NewsReference.TeaserText }</div>
            </div>
        )
    } else {
        return <></>
    }
}
 
export default NewsReferenceElementComponent