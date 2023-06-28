'use client'

import { useEffect, useState } from "react"

/**
 * 트래커
 * 1. 좌표값 및 현재 location 저장 v
 * 2. location history flow 저장 ~
 * 3. 전역에 저장해서 db로 보내기
 * 4. db로부터 GET -> admin page charting
 * 
 */

export default function Tracker({
    children,
  }: {
    children: React.ReactNode
  }) {
    const [path, setPath] = useState({
        x: 0,
        y: 0,
        url: '#'
    });
    
    
    function mouseMover(e:any) {
        console.log('x:',e.clientX, 'y:',e.clientY, 'url:', window.location.pathname)
        // let pathGroup = {x: e.clientX, y: e.clientY, url: window.location}
    }
    function mouseClicker() {
        console.log(window.location.href);
    }

    return (
        <div className="viewAll" onMouseMove={mouseMover} onClick={mouseClicker}>
            {children}
        </div>
    )
}