// import
import ContentLoader from 'react-content-loader'

const Skeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={900}
      height={1000}
      viewBox='0 0 900 1000'
      backgroundColor='#f3f3f3'
      foregroundColor='#ecebeb'
    >
      <rect x='37' y='340' rx='0' ry='0' width='240' height='50' />
      <rect x='37' y='308' rx='0' ry='0' width='97' height='14' />
      <rect x='37' y='14' rx='0' ry='0' width='240' height='272' />

      <rect x='340' y='340' rx='0' ry='0' width='240' height='50' />
      <rect x='340' y='308' rx='0' ry='0' width='97' height='14' />
      <rect x='340' y='14' rx='0' ry='0' width='240' height='272' />

      <rect x='643' y='340' rx='0' ry='0' width='240' height='50' />
      <rect x='643' y='308' rx='0' ry='0' width='97' height='14' />
      <rect x='643' y='14' rx='0' ry='0' width='240' height='272' />
    </ContentLoader>
  )
}

export default Skeleton
