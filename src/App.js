
import { BrowserRouter as Router,
          Routes, Route, Link, Outlet, useParams} from "react-router-dom";
import  './App.css';
function App() {
  return (
  <div className='router'>
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="launch">Launch</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="launch" element={<Launch/>}>
          <Route path="/" element={<LaunchIndex/>}/>
          <Route path=":shoe" element={<LaunchShoe/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  </div>
  );
}

const NotFound = () => {
  return(
    <div>Page not found</div>
  )
}

const Home= () => {
  return(
    <div className='home'>
      <h1> Welcome to Home page</h1>
     
    </div>
  )
};

const Launch = () => {
  return (
    <div>
      <h1>Lauch Page</h1>
      <Outlet/>
    </div>
  )
};

const LaunchIndex = () => {
  

  return(
    <div>
      <ul>
      {Object.entries(shoes).map(([ shoe, { name, img}]) =>
        ( <Link to={`${shoe}`}>
            <li key={shoe}>
              <h1>{name}</h1>
              <img src={img} alt={shoe} />
            </li>
          </Link> 
        )
      )}
      </ul>

      
    </div>
  )
}

const LaunchShoe = () => {
  const {shoe} = useParams(); //geting the shoe general parameter 
  const ashoe = shoes[shoe]; //saving each shoe object into ashoe

  if(!ashoe){
    return(<div>Shoe not found</div>)
  }

   const {name, img} = ashoe;
  return(
    <div>
      <h1>{name}</h1>
      <img src={img} alt={name}/>
    </div>
  )
}

const shoes = {
  "air-jordan-valor-blue" : {
    name: "Valor blue",
    img: "https://stockx-360.imgix.net/Air-Jordan-3-Retro-UNC-2020/Images/Air-Jordan-3-Retro-UNC-2020/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1606315934"
  },
  "jordan-mars-270-london" : {
    name: "Jordan Mars 270 London",
    img: "http://cdn.shopify.com/s/files/1/0933/1060/products/jordan-mars-270-london-3thunder-grey-cv3042-001_1200x630.jpg?v=1583534488",
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "Racer Blue",
    img: "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/033/820/127/original/575379_01.jpg.jpeg?1583558295",
  }
}
export default App;
