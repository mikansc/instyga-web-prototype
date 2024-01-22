"use client";

import { useState } from "react";
import { LoginForm } from "../templates/LoginForm";
import { RegisterForm } from "../templates/RegisterForm";

const TABS = {
  LOGIN: 0,
  REGISTER: 1,
};

export const AccountBox = () => {
  const [selectedTab, setSelectedTab] = useState(TABS.LOGIN);

  const getActiveClass = (tab: number) => {
    return tab === selectedTab ? "active" : "";
  };

  return (
    <div
      className="card"
      style={{
        transform: "translateY(-40px)",
      }}
    >
      <div className="card-header bg-transparent">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${getActiveClass(TABS.LOGIN)}`}
              aria-current="true"
              onClick={() => setSelectedTab(TABS.LOGIN)}
            >
              Fazer Login
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${getActiveClass(TABS.REGISTER)}`}
              onClick={() => setSelectedTab(TABS.REGISTER)}
            >
              Criar conta
            </button>
          </li>
        </ul>
      </div>
      <div
        className="card-body text-start"
        style={{
          minHeight: 400,
          maxHeight: 400,
          overflowY: "auto",
        }}
      >
        {selectedTab === TABS.LOGIN && (
          <>
            <h4 className="card-title pt-3">Faça o Login</h4>
            <p className="mb-4">
              Use suas credenciais para acessar a plataforma
            </p>
            <LoginForm />
          </>
        )}
        {selectedTab === TABS.REGISTER && (
          <>
            <h4 className="card-title pt-3">Registre-se</h4>
            <p className="mb-4">Crie sua conta para acessar a plataforma</p>
            <RegisterForm />
          </>
        )}
      </div>
    </div>
  );
};
