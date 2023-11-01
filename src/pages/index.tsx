import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
const IndexPage: React.FC<PageProps> = () => {
   
return ( <main>
<h1>Main Page</h1> <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p> </main>
) }
export default IndexPage
export const Head: HeadFC = () => { return (
<>
<title>Home Page</title>
</>
) };