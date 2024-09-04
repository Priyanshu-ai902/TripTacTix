import React from 'react';
import { Button } from '../ui/button';

function Header() {
  return (
    <div className='p-2 shadow-sm flex justify-between items-center px-5'>
      <h1 className='font-sans text-xs font-bold text-[#00d2ff] tracking-widest uppercase shadow-[2px_2px_4px_rgba(0,0,0,0.1)] bg-gradient-to-r from-[#141E30] to-[#243B55] p-4 rounded-lg'>
  TriptacTix
</h1>

      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  );
}

export default Header;
