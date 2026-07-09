import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDownIcon,
  CogIcon,
  LockClosedIcon,
  Bars3Icon,
  Squares2X2Icon
} from "@heroicons/react/24/solid";
import { Menu, Transition } from "@headlessui/react";
import Section from "components/Section";
import Button from "components/Button";
import { useAuth } from "util/auth";

function Navbar(props) {
  const auth = useAuth();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const classes = {
    navLink: "font-semibold inline-flex items-center space-x-1 h-8 px-4 hover:text-teal-600 py-6",
    accountDropdown: {
      base: "absolute right-0 origin-top-right mt-2 w-48 z-10",
      inner: "bg-white ring-1 ring-black ring-opacity-5 rounded divide-y divide-gray-100 shadow-xl rounded",
      link: "flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700",
      icon: "opacity-50 inline-block w-5 h-5",
    },
  };

  return (
    <Section bgColor={props.bgColor}>
      <div className="container py-4">
        <div className="flex justify-between">
          <Link href="/">
            <a className="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-teal-600 hover:text-teal-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Camp Manager</span>
            </a>
          </Link>
          <div className="flex items-center ml-auto space-x-1 lg:space-x-4">
            <ul className="hidden lg:flex items-center ml-auto">
              {!auth.user && (
                <li className="relative group">
                  <Link href="/auth/signin">
                    <a className={`${classes.navLink}`}>
                      <span>Sign in</span>
                    </a>
                  </Link>
                </li>
              )}
            </ul>

            {auth.user && (
              <Menu as="div" className="relative inline-block">
                <Button
                  component={Menu.Button}
                  variant="simple"
                  size="sm"
                  endIcon={<ChevronDownIcon className="opacity-50 inline-block w-5 h-5" />}
                >
                  Account
                </Button>
                <Transition
                  as={React.Fragment}
                  enter="transition ease-out duration-150"
                  enterFrom="transform opacity-0 scale-75"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-100"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-75"
                >
                  <Menu.Items className={classes.accountDropdown.base}>
                    <div className={`${classes.accountDropdown.inner}`}>
                      <div className="p-2 space-y-1">
                        <Menu.Item>
                          <Link href="/dashboard">
                            <a className={`${classes.accountDropdown.link}`}>
                              <Squares2X2Icon className={classes.accountDropdown.icon} />
                              <span>Dashboard</span>
                            </a>
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link href="/settings/general">
                            <a className={`${classes.accountDropdown.link}`}>
                              <CogIcon className={classes.accountDropdown.icon} />
                              <span>Settings</span>
                            </a>
                          </Link>
                        </Menu.Item>
                      </div>
                      <div className="p-2 space-y-1">
                        <Menu.Item>
                          <button
                            className={`w-full text-left ${classes.accountDropdown.link}`}
                            onClick={(e) => {
                              e.preventDefault();
                              auth.signout();
                            }}
                          >
                            <LockClosedIcon className={classes.accountDropdown.icon} />
                            <span>Sign out</span>
                          </button>
                        </Menu.Item>
                      </div>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            )}

            <div className="flex lg:hidden items-center justify-center">
              <Button
                variant="simple"
                size="sm"
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                endIcon={<Bars3Icon className="inline-block w-5 h-5" />}
              />
            </div>
          </div>
        </div>
        <div className={"lg:hidden" + (!mobileNavOpen ? " hidden" : "")}>
          <div className="border rounded-xl my-5 p-4 bg-gray-50">
            <nav className="flex flex-col space-y-3">
              {!auth.user && (
                <Link href="/auth/signin">
                  <a className="text-gray-600 hover:text-teal-600 font-medium">Sign in</a>
                </Link>
              )}
            </nav>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Navbar;
