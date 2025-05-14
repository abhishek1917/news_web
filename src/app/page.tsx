//import Image from "next/image";
import new_section from "@/component/new_section";

export default function Home() {
  return (
   <nav className="Navbar">
    <div className="logo">News_Web</div>
    <div className="nav-link">
        <a href="#" className="nav-links">Home</a>
        <a href="#" className="nav-links">Sports</a>
        <a href="#" className="nav-links">Entertainment</a>
        <a href="#" className="nav-links">Economy</a>
        <a href="#" className="nav-links">Tech</a>
    </div>
    <div className="log-in">Login</div>
   </nav>

   
  );
}
