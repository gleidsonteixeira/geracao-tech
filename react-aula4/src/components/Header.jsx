import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.section`
    & header{
        display: flex;
        justify-content: space-between;
        padding: 0 60px;
        & nav ul{
           display: flex;
           list-style: none;
           gap: 26px;
           & a{
                text-decoration: none;
                color: black;
                &:hover{
                    color: red;
                }
                &.active{
                    color: red;
                }
           }
        }
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <header>
                <h1>LOGO</h1>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/produtos"}>Produtos</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </HeaderContainer>
    );
}
 
export default Header;