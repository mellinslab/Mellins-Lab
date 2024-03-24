import Link from 'next/link';
import React from 'react';

export function Logo() {
  return (
    <Link
      href="/"
      className="h-24"
    >
      <img src="/images/logo.png" alt="Mellins Lab Logo" />
    </Link>
  );
}
