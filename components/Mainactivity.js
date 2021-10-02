import react from 'react';
import { Container, Row, Col } from "reactstrap";
import Hear from '../public/hear.svg';
import Bbutton from './Button/Bbutton';
import BichwerButton from './Button/BichwerButton';
import MyButton from './Button/MyButton';
function Mainactivity() {
    return (
        <>
            <div style={{ padding: '30px', display: 'flex', flexDirection: 'Column', paddingLeft: '70px' }}>
                <label style={{ fontFamily: 'bold', fontSize: '25px', paddingBottom: '10px' }} htmlFor="description">Монгол хэл боловсруулах үзүүлэн хуудас. </label>
                <label style={{ fontFamily: 'Roboto', fontSize: '16px', color: '#A2A2A2' }}>Бичвэрээ оруулна уу</label>
                <textarea
                    name="message"
                    rows="7"
                    placeholder="Энд бичих"
                    className={`block w-1/2 h-1/2 shadow py-2 px-4 placeholder-gray-700 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2`}>
                </textarea>
                <div style={{ paddingTop: '30px', display: 'flex', flexDirection: 'row' }}>
                    <BichwerButton title="Бичвэр боловсруулах" />
                    {/* <form>
                        <div>
                            <label>
                                <input type="radio" value="option1" />
                                Эрэгтэй
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="option2" />
                                Эмэгтэй
                            </label>
                        </div>
                    </form> */}
                </div>
            </div>
        </>
    )
}

export default Mainactivity
