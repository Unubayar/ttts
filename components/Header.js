
import Image from 'next/image'
import { red } from 'tailwindcss/colors';
import Logo from '../public/logo.svg';
import MyButton from './Button/MyButton';
import Bbutton from './Button/Bbutton';
function Header() {
    return (
        <div style={{ borderBottom: '5px' }}>
            <header style={{ padding: '20px', paddingRight: '50px', paddingLeft: '80px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid gray' }}>
                <Logo />
                <div style={{ display: 'flex', }}><Bbutton title="Нэвтрэх" />
                    <MyButton title="Бүртгүүлэх" /></div>
            </header>
        </div>

    )
}

export default Header
