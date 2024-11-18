import React from "react";
import { Avatar, Dropdown, Navbar, Button } from "flowbite-react";
import { FcHome, FcInfo, FcServices, FcOnlineSupport, FcSms } from "react-icons/fc";

const Header = () => {
  return (
    <>
      <div className="w-full px-5 sm:px-10 lg:px-16 bg-gray-50 shadow-md">
        <Navbar rounded className="container mx-auto">
          {/* Navbar Brand */}
          <Navbar.Brand href="https://flowbite-react.com" className="flex items-center space-x-2">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Flowbite React
            </span>
          </Navbar.Brand>

          {/* Profile Dropdown & Notification */}
          <div className="flex md:order-2 items-center space-x-4">
            {/* Notification Button */}
            <Button
              pill
              color="light"
              className="flex items-center space-x-2 hover:bg-gray-100"
            >
              <FcSms className="text-xl" />
              <span className="text-sm font-medium">Notification</span>
            </Button>

            {/* Profile Dropdown */}
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                  className="w-10 h-10"
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm font-medium">Bonnie Green</span>
                <span className="block truncate text-sm text-gray-500">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>

            {/* Navbar Toggle */}
            <Navbar.Toggle />
          </div>

          {/* Navbar Links */}
          <Navbar.Collapse className="text-gray-700">
            <Navbar.Link href="/" active>
              <div className="flex items-center space-x-2">
                <FcHome className="text-xl" />
                <span>Home</span>
              </div>
            </Navbar.Link>
            <Navbar.Link href="#">
              <div className="flex items-center space-x-2">
                <FcInfo className="text-xl" />
                <span>About</span>
              </div>
            </Navbar.Link>
            <Navbar.Link href="#">
              <div className="flex items-center space-x-2">
                <FcServices className="text-xl" />
                <span>Services</span>
              </div>
            </Navbar.Link>
            <Navbar.Link href="#">
              <div className="flex items-center space-x-2">
                <FcOnlineSupport className="text-xl" />
                <span>Contact</span>
              </div>
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
