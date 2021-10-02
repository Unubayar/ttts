import react from 'react';
import { Container, Row, Col } from "reactstrap";
import Hear from '../public/hear.svg';
import MyButton from './MyButton';
function Mainactivity() {
    return (
        <>
            <div style={{ padding: '30px', display: 'flex', flexDirection: 'Column', paddingLeft: '70px' }}>
                <label style={{ fontFamily: 'bold', fontSize: '25px', paddingBottom: '10px' }} htmlFor="description">Монгол хэл боловсруулах үзүүлэн хуудас. </label>
                <label style={{ fontFamily: 'Roboto', fontSize: '16px', color: '#A2A2A2' }}>Бичвэрээ оруулна уу</label>
                <textarea
                    name="message"
                    rows="3"
                    className={`block w-1/2 h-1/2 shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2`}
                    placeholder="Энд бичих">
                </textarea>
                <div style={{ paddingTop: '30px', display: 'flex', flexDirection: 'row' }}>
                    <MyButton
                        Icon={<Hear />}
                        title="Сосох" />
                    <form>
                        <div>
                            <label>
                                <input type="radio" value="option1" checked={true} />
                                Эрэгтэй
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                                <input type="radio" value="option2" checked={false} />
                                Эмэгтэй
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Mainactivity
