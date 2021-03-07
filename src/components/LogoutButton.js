import React from 'react';
import { logout } from 'utils/api-client';

export default function LogoutButton() {
  return (
    <button
      className="btn btn-outline-primary rounded-pill px-2 py-1 mr-2 font-weight-bold"
      onClick={logout}
    >
      Logout
    </button>
  );
}
