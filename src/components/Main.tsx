
const Main = () => {
  const handle = async () => {
    const response = await fetch('http://localhost:3000/api/clothes/allClothes')
    console.log(response)
  }

  handle()

  return <></>
}

export default Main
