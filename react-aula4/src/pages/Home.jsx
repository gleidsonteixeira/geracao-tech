import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Home</h1>

            <ul>
                <li>
                    <Link to={"/produto/batata"}>batata</Link>
                </li>
                <li>
                    <Link to={"/produto/chuchu"}>chuchu</Link>
                </li>
                <li>
                    <Link to={"/produto/cenoura"}>cenoura</Link>
                </li>
            </ul>
        </>
    );
}
 
export default Home;