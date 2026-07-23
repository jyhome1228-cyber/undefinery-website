"use client";
import Link from "next/link";
import { useState } from "react";

export function SiteHeader({dark=false}:{dark?:boolean}) {
 const [open,setOpen]=useState(false);
 return <header className={`site-header ${dark?"is-dark":""}`}><Link className="wordmark" href="/">UNDEFINERY<sup>®</sup></Link><nav className={open?"open":""}><Link href="/about">ABOUT</Link><Link href="/solutions">SOLUTIONS</Link><Link href="/portfolio">PORTFOLIO</Link><Link href="/production">PRODUCTION</Link><Link href="/insights">INSIGHTS</Link></nav><Link className="header-cta" href="/contact">PROJECT INQUIRY ↗</Link><button onClick={()=>setOpen(!open)} aria-label="메뉴 열기" aria-expanded={open}><i/><i/></button></header>
}
