// import 
import ContentLoader from 'react-content-loader'

const Skeleton = () => {
    return (
        <ContentLoader 
        speed={2}
        width={100}
        height={160}
        viewBox="0 0 100 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="4" y="9" rx="0" ry="0" width="88" height="76" /> 
        <rect x="6" y="112" rx="0" ry="0" width="84" height="22" /> 
        <rect x="7" y="96" rx="0" ry="0" width="49" height="7" />
      </ContentLoader>
    )
}

export default Skeleton 