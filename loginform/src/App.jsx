import Home from "./pages/Home";
import IMG1 from "./assets/photo-1532074205216-d0e1f4b87368.avif";
import IMG2 from "./assets/photo-1639149888905-fb39731f2e6c.avif";
import IMG3 from "./assets/photo-1653379673048-029d6653516d.avif";
import IMG4 from "./assets/premium_photo-1688572454849-4348982edf7d.avif";
import IMG5 from "./assets/premium_photo-1689568126014-06fea9d5d341.avif";
import IMG6 from "./assets/premium_photo-1690407617542-2f210cf20d7e.avif";
const Details=[{profile:IMG1,name:"Sophia Turner",city:"Los Angeles",work:"UI/UX Designer"},
  {profile:IMG2,name:"James",city:"New York",work:"front-end developer"},{profile:IMG3,name:"Emma Johnson",city:"New York",work:"front-end developer"},
  {profile:IMG4,name:"Olivia Brown",city:"Los Angeles",work:"Full Stack Developer"},{profile:IMG5,name:"Liam Carter",city:"Chicago",work:"Full Stack Developer"},{profile:IMG6,name:"Mia Taylor",city:"San Francisco",work:"React Native Developer"}]
function App() {
  return (
    <>
    {
      Details.map((data,index)=>{
          return <Home key={index} data={data}/>
      })
    }
    </>
  )
}
export default App;
