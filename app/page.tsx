import Link from "next/link";

export default function Home() {  // Capitalize component name
  return (

    <ul>
      <li>home</li>
      <Link href="/about"><li>About</li></Link>
      <Link href="/carrier"><li>carrier</li></Link>
      <Link href="/contact-us"><li>contact-us</li></Link>
    </ul>
    // <ul>
    //   <li>
    //     <Link href="/carrier">
    //       <a>Carrier</a>  {/* Add links for navigation */}
    //     </Link>
    //   </li>

    //   <li>
    //     <Link href="/about">
    //       <a>About</a>  {/* Add links for navigation */}
    //     </Link>
    //   </li>

    //   <li>
    //     <Link href="/contact-us">
    //       <a>contact-us</a>  {/* Add links for navigation */}
    //     </Link>
    //   </li>



    // </ul>
  );  

}
