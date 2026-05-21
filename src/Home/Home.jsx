
function Home(){
const [count, setCount] = useState(0)
    return(
         <div className="Home">
            <h1> Count: {count} </h1>
            <button onClick={()=> setCount(coint +1)}>  Increament </button>
         </div>
    );
}

export default Home;