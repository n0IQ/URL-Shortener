import React from 'react';
import Icons from './Icons';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="footer">
      <Icons />
      <p className="copyright">Mohit Varma © Copyright {year}</p>
    </div>
  );
}

export default Footer;
