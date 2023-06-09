import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import "./DropdownButton.css";
import { RiGovernmentLine } from "react-icons/ri";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DropdownButton = ({ data, sidebarOpen }) => {
  const orgsNameFormat = {
    ministerio: "Ministério",
    assembleia: "Assembleia",
    tribunal: "Tribunal",
  };

  return (
    <>
      {Object.entries(data).map(([category, options]) => (
        <Menu as="div" className="relative w-full text-left font-merriweather">
          <div className="">
            <Menu.Button
              className={` bg-blueMiddle justify-between inline-flex w-60  gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blueMiddle`}
            >
              <div className="flex justify-center gap-2 ">
                <RiGovernmentLine className="w-5 h-5" />
                {orgsNameFormat[category]}
              </div>
              <ChevronDownIcon
                className="w-5 h-5 -mr-1 text-white "
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            leave="transition ease-in duration-75"
          >
            <Menu.Items className="z-10 py-1 overflow-y-auto bg-white rounded-md shadow-lg w-60 max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none custom-scrollbar">
              <div className="py-1">
                {options.map((menuItem, index) => (
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        onClick={sidebarOpen}
                        to={`${category}/${menuItem}`}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900  "
                            : "text-gray-700 ",
                          "block px-4 py-2 text-sm border-b-2 "
                        )}
                      >
                        {menuItem}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      ))}
    </>
  );
};

export default DropdownButton;
