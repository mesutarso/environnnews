import Link from 'next/link'

const BreakingComponent = ({ url, titre }) =>(
    <Link href={url}>
        <div> 
           {titre} 
        </div>
    </Link>
)

export default BreakingComponent