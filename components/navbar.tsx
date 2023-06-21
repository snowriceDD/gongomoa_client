import Link from "next/link";
import Image from 'next/image';
import Logo from '../asset/Logo.svg';

export default function Navbar() {

    return (
        <div className="navbar">
            <div className="navbarWrap">
            <Link href='/' className="logo" ><Image src={Logo} alt={"Gongomoa Logo"} width={150} /></Link>
            <Link className="link" href='/newfe'>프론트엔드(신입)</Link>
            <Link className="link" href='/newbe'>백엔드(신입)</Link>
            <Link className="link" href='/newetc'>기타(신입)</Link>
            </div>
        </div>
    );
}