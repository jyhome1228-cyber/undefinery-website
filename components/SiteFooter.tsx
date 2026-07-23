import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-lead">
        <p>HAVE A PROJECT?</p>
        <h2>정리되지 않은 문제부터<br />함께 이야기해 주세요.</h2>
        <a href="tel:01054225650">010 5422 5650 <span>↗</span></a>
      </div>
      <div className="footer-nav">
        <strong>UNDEFINERY<sup>®</sup></strong>
        <nav>
          <Link href="/about">ABOUT</Link>
          <Link href="/solutions">SOLUTIONS</Link>
          <Link href="/portfolio">PORTFOLIO</Link>
          <Link href="/production">PRODUCTION</Link>
          <Link href="/insights">INSIGHTS</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>
      </div>
      <div className="footer-legal">
        <p>상호 나인웍스 · 대표 박재영 · 사업자등록번호 728-35-00866</p>
        <p>인천광역시 서구 원당대로 1039, 9층 916호 (원당동, 태경타워)</p>
        <p>T. 010-5422-5650</p>
        <p>© 2026 UNDEFINERY SOLUTION. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
