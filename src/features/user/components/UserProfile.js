import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLoggedInUser } from "../../auth/authSlice";

export function UserProfile() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);
  return (
    <div>
      <div className="mx-auto bg-white max-w-7xl px-4 mt-12 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <h1 className="text-4xl mb-5 flex justify-start font-bold tracking-tight text-gray-900">
            Name : {user.name ? user.name : "New User"}
          </h1>

          <h3 className="text-xl my-5 flex justify-start font-bold tracking-tight text-red-900">
            Email Address :{user.email}
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <p className="mt-0.5 flex justify-start text-sm text-gray-500">
            Your Addresses :
          </p>
          {user.addresses.map((address) => (
            <div className="flex justify-between mt-2 gap-x-6 py-5 px-5 border-solid border-2 border-gray-200">
              <div className="flex gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {address.name}
                  </p>
                  <p className="mt-1 flex justify-start  truncate text-xs leading-5 text-gray-500">
                    {address.street}
                  </p>
                  <p className="mt-1 flex justify-start truncate text-xs leading-5 text-gray-500">
                    {address.pincode}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                  Phone : {address.phone}
                </p>

                <p className="text-xs leading-5 text-gray-500">
                  {address.state}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
