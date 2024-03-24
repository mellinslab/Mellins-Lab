import Link from 'next/link';
import React from 'react';

export function Logo() {
  return (
    <Link href="/" >
      <img
        className="h-24"
        src="/images/logo.png"
        alt="Mellins Lab Logo"
      />
    </Link>
  );
}
