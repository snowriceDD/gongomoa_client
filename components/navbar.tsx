import Link from "next/link";

export default function Navbar() {

    return (
        <div className="navbar">
            <Link href='/' className="logo">Gongomoa</Link>
            <Link href='/newfe'>프론트엔드(신입)</Link>
            <Link href='/newbe'>백엔드(신입)</Link>
            <Link href='/list'>기타(신입)</Link>
        </div>
    );
}