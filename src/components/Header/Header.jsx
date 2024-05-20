import React from "react";
import { Container, Logo, LogOut } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  function toggleMenu() {
    var menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  }
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Sign Up",
      slug: "/sign-up",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <>
      <header className="py-3 shadow bg-gray-500">
        <Container>
          <nav className="flex justify-between items-center">
            <div className="mr-4">
              <Link to={"/"}>
                <Logo width="70px" />
              </Link>
            </div>
            <div className="block lg:hidden">
              <button
                id="menu-button"
                className="p-2 text-gray-700 rounded-md focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
            <ul className="hidden lg:flex ml-auto">
              {navItems.map((item, index) => {
                return item.active ? (
                  <li key={item.name}>
                    <button
                      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                      onClick={() => navigate(item.slug)}
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null;
              })}
              {authStatus && (
                <li>
                  <LogOut className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full" />
                </li>
              )}
            </ul>
          </nav>
          <div className="lg:hidden">
            <ul id="mobile-menu" className="hidden flex-col mt-2">
              {navItems.map((item, index) => {
                return item.active ? (
                  <li key={item.name} className="my-1">
                    <button
                      className="block w-full text-left px-4 py-2 duration-200 hover:bg-blue-100 rounded-md"
                      onClick={() => navigate(item.slug)}
                    >
                      {item.name}
                    </button>
                  </li>
                ) : null;
              })}
              {authStatus && (
                <li className="my-1">
                  <LogOut className="block w-full text-left px-4 py-2 duration-200 hover:bg-blue-100 rounded-md" />
                </li>
              )}
            </ul>
          </div>
        </Container>
      </header>
    </>
  );
  // return (
  //   // <header className="py-3 shadow bg-gray-500">
  //   //   <Container>
  //   //     <nav className="flex">
  //   //       <div className="mr-4">
  //   //         <Link to={"/"}>
  //   //           <Logo width="70px" />
  //   //         </Link>
  //   //       </div>
  //   //       <ul className="flex ml-auto">
  //   //         {navItems.map((item, index) => {
  //   //           return item.active ? (
  //   //             <li key={item.name}>
  //   //               <button
  //   //                 className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
  //   //                 onClick={() => navigate(item.slug)}
  //   //               >
  //   //                 {item.name}
  //   //               </button>
  //   //             </li>
  //   //           ) : null;
  //   //         })}
  //   //         {authStatus && (
  //   //           <li>
  //   //             <LogOut className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full" />
  //   //           </li>
  //   //         )}
  //   //       </ul>
  //   //     </nav>
  //   //   </Container>
  //   // </header>
  // );
}

export default Header;
