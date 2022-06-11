import  {ListGroup} from "react-bootstrap";
import "./MenuContent.css";
function MenuContent(){
    return(
        <div>
            <h2>Table 1</h2>
            <h3>Menu</h3>
            <ListGroup className="align" >
                <ListGroup.Item >Briyani
                    <input type="checkbox" />
                </ListGroup.Item>
                <ListGroup.Item>Vada
                    <input type="checkbox" />
                </ListGroup.Item>
                <ListGroup.Item>Idili
                    <input type="checkbox" />
                </ListGroup.Item>
                <ListGroup.Item>Pongal
                    <input type="checkbox" />
                </ListGroup.Item>
                <ListGroup.Item>Dosa
                    <input type="checkbox" />
                </ListGroup.Item>
            </ListGroup>
            <button type="submit">Place Order</button>

            
        </div>
    );
}
export default MenuContent;