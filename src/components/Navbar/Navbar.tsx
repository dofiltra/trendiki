/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-explicit-any */

// import { useState } from 'preact/hooks'
import { Link } from 'react-router-dom'
import { SignInButtons } from 'components/Buttons/SignIn'
import { SignOutButton } from 'components/Buttons/SignOut'
import { useLocalize } from '@borodutch-labs/localize-react'
import AppStore from 'stores/AppStore'
import AuthContext from 'components/Auth/AuthContext'
import DefaultButton from 'components/Buttons/Button'
import Language from 'models/Language'
import React, { useContext } from 'preact/compat'

export default function Navbar({}) {
  const { user } = useContext(AuthContext)
  const { translate } = useLocalize()

  return (
    <>
      <div className="navbar shadow-lg bg-neutral text-neutral-content rounded-box mb-2 ">
        <div className="md:block mx-1">
          <Link to="/" className="btn btn-ghost rounded-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
            <span className="hidden md:block">{translate('HeaderMain')}</span>
          </Link>
        </div>
        <div className="hidden md:block mx-1">
          <Link to="/top" className="btn btn-ghost rounded-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
              />
            </svg>
            {'  '}
            <span className="hidden md:block">{translate('HeaderTrend')}</span>
          </Link>
        </div>
        <div className="mx-1">
          <Link to="/add" className="btn btn-ghost rounded-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Link>
        </div>
        <div className="hidden md:block flex-1 mx-1"></div>
        <div className="flex-none">
          <div className="flex justify-end flex-1 px-2">
            <div className="flex items-stretch">
              <div className="dropdown dropdown-content">
                <div tabIndex={0} className="btn btn-ghost rounded-btn">
                  {AppStore.language}
                </div>
                <ul
                  tabIndex={0}
                  className="p-2 shadow menu dropdown-content bg-base-100 rounded-box"
                >
                  {Object.values(Language).map((k) => (
                    <DefaultButton
                      key={k}
                      onClick={() => {
                        AppStore.language = k
                      }}
                      title={k}
                    />
                  ))}
                </ul>
              </div>
            </div>
            <div className=" mx-1 flex items-stretch">
              <div className="dropdown">
                <div tabIndex={0} className="btn btn-ghost rounded-btn">
                  {!user?.uid && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                      />
                    </svg>
                  )}
                  {user?.uid && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </div>
                <ul
                  tabIndex={0}
                  className="p-2 shadow menu dropdown-content bg-base-100 rounded-box"
                >
                  <li className="text-center pb-3">
                    <b>{user?.displayName?.toUpperCase()}</b>
                  </li>
                  {!user?.uid && (
                    <li>
                      <SignInButtons />
                    </li>
                  )}
                  {user?.uid && (
                    <li>
                      <SignOutButton />
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
