import React, { FC } from "react";

import { signOut } from "next-auth/react";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: FC<AccountMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className="absolute right-0 flex flex-col w-56 py-5 bg-black border-2 border-gray-800 top-14">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center gap-3 px-3 group/item w-ful">
          <img
            className="w-8 rounded-md"
            src="/imgaes/default-blue.png"
            alt=""
          />
          <p className="text-sm text-white group-hover/item:underline">
            Username
          </p>
        </div>
        <hr className="h-px my-4 bg-gray-600 border-0" />
        <div
          onClick={() => signOut()}
          className="px-3 text-sm text-center text-white hover:underline"
        >
          Sign out of Netflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;